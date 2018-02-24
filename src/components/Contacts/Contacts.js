import React from "react";
// import faker from "faker";
import { Link } from "react-router-dom";
// import Chat from "./Chat.js";
import axios from "../../libs/axios.js";

class Contacts extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     userList: [],
  //     groupList: [],
  //     messages: []
  //   };
  // }
  // async componentDidMount() {
  //   const [{ data: users }, { data: messages }] = await Promise.all([
  //     axios.get("/user"),
  //     axios.get("/message/user")
  //   ]);
  //   this.setState({
  //     userList: users.map(user => {
  //       user.avatar = `https://placem.at/people?w=100`;
  //       return user;
  //     }),
  //     messages: messages.reduce((result, ele) => {
  //       return {
  //         ...result,
  //         [ele.ChatMessage.idno]: result[`${ele.ChatMessage.idno}`]
  //           ? [...result[ele.ChatMessage.idno], ele.ChatMessage]
  //           : [ele.ChatMessage]
  //       };
  //     }, {})
  //   });
  // }
  render() {
    const { match, userList, messages } = this.props;
    return (
      <div>
        {userList.map(ele => (
          <div key={ele.idno}>
            <Link to={`${match.url}/${ele.idno}`}>
              <span>
                {(messages[ele.idno] && messages[ele.idno].length) || 0}
              </span>
              <img src={ele.avatar} alt={""} />
              {ele.name}
            </Link>
          </div>
        ))}
        {/* <Route exact path={match.path} render={() => <h2>select topic la</h2>} /> */}
      </div>
    );
  }
}

// const list = [
//   {
//     id: faker.random.uuid(),
//     avatar: `https://placem.at/people?w=100`,
//     name: faker.name.findName()
//   },
//   {
//     id: faker.random.uuid(),
//     avatar: `https://placem.at/people?w=100`,
//     name: faker.name.findName()
//   },
//   {
//     id: faker.random.uuid(),
//     avatar: `https://placem.at/people?w=100`,
//     name: faker.name.findName()
//   },
//   {
//     id: faker.random.uuid(),
//     avatar: `https://placem.at/people?w=100`,
//     name: faker.name.findName()
//   },
//   {
//     id: faker.random.uuid(),
//     avatar: `https://placem.at/people?w=100`,
//     name: faker.name.findName()
//   },
//   {
//     id: faker.random.uuid(),
//     avatar: `https://placem.at/people?w=100`,
//     name: faker.name.findName()
//   },
//   {
//     id: faker.random.uuid(),
//     avatar: `https://placem.at/people?w=100`,
//     name: faker.name.findName()
//   },
//   {
//     id: faker.random.uuid(),
//     avatar: `https://placem.at/people?w=100`,
//     name: faker.name.findName()
//   },
//   {
//     id: faker.random.uuid(),
//     avatar: `https://placem.at/people?w=100`,
//     name: faker.name.findName()
//   },
//   {
//     id: faker.random.uuid(),
//     avatar: `https://placem.at/people?w=100`,
//     name: faker.name.findName()
//   },
//   {
//     id: faker.random.uuid(),
//     avatar: `https://placem.at/people?w=100`,
//     name: faker.name.findName()
//   },
//   {
//     id: faker.random.uuid(),
//     avatar: `https://placem.at/people?w=100`,
//     name: faker.name.findName()
//   },
//   {
//     id: faker.random.uuid(),
//     avatar: `https://placem.at/people?w=100`,
//     name: faker.name.findName()
//   },
//   {
//     id: faker.random.uuid(),
//     avatar: `https://placem.at/people?w=100`,
//     name: faker.name.findName()
//   },
//   {
//     id: faker.random.uuid(),
//     avatar: `https://placem.at/people?w=100`,
//     name: faker.name.findName()
//   }
// ];
// const Contacts = ({ match }) => (

// );

export default Contacts;
