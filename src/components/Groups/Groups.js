import React from "react";
// import faker from "faker";
import { Link } from "react-router-dom";
// import Chat from "./Chat.js";
// import axios from "../../libs/axios.js";

class Groups extends React.Component {
  render() {
    const { groupList, myGroupList } = this.props;
    return (
      <div>
        <div>
          <Link to={`/creategroup`}>
            <button>建立群組</button>
          </Link>
        </div>
        myGroupList
        {myGroupList.map(ele => (
          <div key={ele.idno}>
            <Link to={`/groups/${ele.idno}`}>
              <span />
              {/* <img src={ele.avatar} alt={""} /> */}
              {ele.name}
            </Link>
          </div>
        ))}
        All groupList
        {groupList.map(ele => (
          <div key={ele.idno}>
            <Link to={`/groups/${ele.idno}`}>
              <span />
              {/* <img src={ele.avatar} alt={""} /> */}
              {ele.name}
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Groups;
