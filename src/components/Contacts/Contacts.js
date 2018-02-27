import React from "react";
// import faker from "faker";
import { Link } from "react-router-dom";
// import Chat from "./Chat.js";
// import axios from "../../libs/axios.js";

class Contacts extends React.Component {
  render() {
    const { match, userList, messages, currentUser } = this.props;
    return (
      <div>
        {userList.map(user => {
          return currentUser.idno === user.idno ? null : (
            <div key={user.idno}>
              <Link to={`${match.url}/${user.idno}`}>
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
