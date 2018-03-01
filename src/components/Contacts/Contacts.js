import React from "react";
// import faker from "faker";
import { Link } from "react-router-dom";
import "./style.css";

class Contacts extends React.Component {
  render() {
    const { match, userList, messages, currentUser, myGroupList } = this.props;
    return (
      <div className="contact-div">
        joined Groups
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
        User List
        {userList.map(user => {
          return currentUser.idno === user.idno ? null : (
            <div key={user.idno}>
              <Link to={`${match.url}/user/${user.idno}`}>
                <span>
                  {(messages[user.idno] && messages[user.idno].length) || 0}
                </span>
                <img src={user.avatar} alt={""} />
                {user.name}
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
