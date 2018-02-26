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
        {userList.map(
          ele =>
            currentUser.idno === ele.idno ? null : (
              <div key={ele.idno}>
                <Link to={`${match.url}/${ele.idno}`}>
                  <span>
                    {(messages[ele.idno] && messages[ele.idno].length) || 0}
                  </span>
                  <img src={ele.avatar} alt={""} />
                  {ele.name}
                </Link>
              </div>
            )
        )}
        {/* <Route exact path={match.path} render={() => <h2>select topic la</h2>} /> */}
      </div>
    );
  }
}

export default Contacts;
