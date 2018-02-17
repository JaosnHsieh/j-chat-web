import React from "react";
import faker from "faker";
import { Link } from "react-router-dom";
// import Chat from "./Chat.js";
const list = [
  {
    id: faker.random.uuid(),
    avatar: `https://placem.at/people?w=100`,
    name: faker.name.findName()
  },
  {
    id: faker.random.uuid(),
    avatar: `https://placem.at/people?w=100`,
    name: faker.name.findName()
  },
  {
    id: faker.random.uuid(),
    avatar: `https://placem.at/people?w=100`,
    name: faker.name.findName()
  },
  {
    id: faker.random.uuid(),
    avatar: `https://placem.at/people?w=100`,
    name: faker.name.findName()
  },
  {
    id: faker.random.uuid(),
    avatar: `https://placem.at/people?w=100`,
    name: faker.name.findName()
  },
  {
    id: faker.random.uuid(),
    avatar: `https://placem.at/people?w=100`,
    name: faker.name.findName()
  },
  {
    id: faker.random.uuid(),
    avatar: `https://placem.at/people?w=100`,
    name: faker.name.findName()
  },
  {
    id: faker.random.uuid(),
    avatar: `https://placem.at/people?w=100`,
    name: faker.name.findName()
  },
  {
    id: faker.random.uuid(),
    avatar: `https://placem.at/people?w=100`,
    name: faker.name.findName()
  },
  {
    id: faker.random.uuid(),
    avatar: `https://placem.at/people?w=100`,
    name: faker.name.findName()
  },
  {
    id: faker.random.uuid(),
    avatar: `https://placem.at/people?w=100`,
    name: faker.name.findName()
  },
  {
    id: faker.random.uuid(),
    avatar: `https://placem.at/people?w=100`,
    name: faker.name.findName()
  },
  {
    id: faker.random.uuid(),
    avatar: `https://placem.at/people?w=100`,
    name: faker.name.findName()
  },
  {
    id: faker.random.uuid(),
    avatar: `https://placem.at/people?w=100`,
    name: faker.name.findName()
  },
  {
    id: faker.random.uuid(),
    avatar: `https://placem.at/people?w=100`,
    name: faker.name.findName()
  }
];
const Contacts = ({ match }) => (
  <div>
    {list.map(ele => (
      <div key={ele.id}>
        <Link to={`${match.url}/${ele.id}`}>
          <img src={ele.avatar} alt={"123"} />
          {ele.name}
        </Link>
      </div>
    ))}
    {/* <Route exact path={match.path} render={() => <h2>select topic la</h2>} /> */}
  </div>
);

export default Contacts;
