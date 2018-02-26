import React, { Component } from "react";
import axios from "../../libs/axios.js";
class GroupController extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  joinGroup = async groupId => {
    console.log("groupId", groupId);
    let { data: joinedGroup } = await axios.post("/userxgroup", {
      groupId
    });
    console.log("joinedGroup", joinedGroup);
  };
  leaveGroup = async groupId => {
    console.log("groupId", groupId);
    let { data: leavedGroup } = await axios.delete(`/userxgroup/${groupId}`, {
      groupId
    });
    console.log("leavedGroup", leavedGroup);
  };
  render() {
    const { match, groupList } = this.props;
    const groupId = match && match.params && match.params.id;
    const formatedGroupList = groupList.reduce((result, ele) => {
      return {
        ...result,
        [ele.idno]: ele
      };
    }, {});
    const selectedGroup = formatedGroupList[groupId];
    console.log(selectedGroup);
    return (
      <div>
        groupId {selectedGroup.idno}
        group desc : {selectedGroup.desc}
        <div>
          <button
            onClick={() => {
              this.joinGroup(groupId);
            }}
          >
            加入
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              this.leaveGroup(groupId);
            }}
          >
            退出
          </button>
        </div>
      </div>
    );
  }
}

export default GroupController;
