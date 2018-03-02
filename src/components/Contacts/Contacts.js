import React from "react";
// import faker from "faker";
import { Link } from "react-router-dom";
import "./style.css";

class Contacts extends React.Component {
  render() {
    const { match, userList, messages, currentUser, myGroupList } = this.props;
    return (
      <div className="contact-div">
        My Groups({myGroupList.length})
        {myGroupList.map(group => {
          return (
            <div key={group.idno}>
              <Link to={`${match.url}/group/${group.idno}`}>
                {/* <span>
                  {(messages[user.idno] && messages[user.idno].length) || 0}
                </span> */}
                {/* <img src={user.avatar} alt={""} /> */}
                {group.name}
              </Link>
            </div>
          );
        })}
        <p className="header">All Users</p>
        {userList.map(user => {
          return currentUser.idno === user.idno ? null : (
            <div className="user-div" key={user.idno}>
              <Link to={`${match.url}/user/${user.idno}`}>
                <img
                  className="avatar center"
                  src={`https://placem.at/people?w=100&txt=0&random=${Math.random()}`}
                  alt={""}
                />
                <div className="name-desc-div">
                  {user.name}
                  <span className="message-count">
                    {(messages[user.idno] && messages[user.idno].length) || 0}
                  </span>
                </div>
              </Link>
            </div>
          );
        })}
        {/* <Route exact path={match.path} render={() => <h2>select topic la</h2>} /> */}
      </div>
    );
  }
}

export default Contacts;
