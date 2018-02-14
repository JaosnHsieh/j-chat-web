import React from "react";
import faker from "faker";
const list = [
  {
    avatar: `https://placem.at/people?w=100`,
    name: faker.name.findName()
  },
  {
    avatar: `https://placem.at/people?w=100`,
    name: faker.name.findName()
  },
  {
    avatar: `https://placem.at/people?w=100`,
    name: faker.name.findName()
  },
  {
    avatar: `https://placem.at/people?w=100`,
    name: faker.name.findName()
  },
  {
    avatar: `https://placem.at/people?w=100`,
    name: faker.name.findName()
  }
];
const Contacts = () => (
  <div>
    Contact to show...
    {list.map(ele => (
      <div>
        <img src={ele.avatar} />
        {ele.name}
      </div>
    ))}
  </div>
);

export default Contacts;
