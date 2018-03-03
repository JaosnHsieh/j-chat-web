import React from "react";
// import faker from "faker";
import { Link } from "react-router-dom";
// import Chat from "./Chat.js";
// import axios from "../../libs/axios.js";
import groupIcon from "../../static/img/team-icon.png";
import "./style.css";
class Groups extends React.Component {
  render() {
    const { groupList, myGroupList } = this.props;
    return (
      <div className="groups-div">
        <div>
          <Link to={`/creategroup`}>
            <button>建立群組</button>
          </Link>
        </div>
        My Groups({myGroupList.length})
        {myGroupList.map(group => {
          return (
            <div className="group-div" key={group.idno}>
              <Link to={`/groups/${group.idno}`}>
                <img className="group-img center" src={groupIcon} alt={""} />
                <div className="name-desc-div">
                  <div>
                    <span className="name">{group.name}(0)</span>
                  </div>
                  <div className="group-desc">{group.desc}</div>
                </div>
              </Link>
            </div>
          );
        })}
        All groupList
        {groupList.map(group => {
          return (
            <div className="group-div" key={group.idno}>
              <Link to={`/groups/${group.idno}`}>
                <img className="group-img center" src={groupIcon} alt={""} />
                <div className="name-desc-div">
                  <div>
                    <span className="name">{group.name}(0)</span>
                  </div>
                  <div className="group-desc">{group.desc}</div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Groups;
