import React, { Component } from "react";
import axios from "../../libs/axios.js";
class GroupController extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  joinGroup = async groupId => {
    try {
      const { data: joinedGroup } = await axios.post("/userxgroup", {
        groupId
      });
      const { addOneMyGroup } = this.props;

      // alert(`joined group ${groupId}`);
      addOneMyGroup(joinedGroup);
    } catch (err) {
      console.log("joinGroup error", err);
    }
  };
  leaveGroup = async groupId => {
    try {
      const { data: leavedUserXGroup } = await axios.delete(
        `/userxgroup/${groupId}`,
        {
          groupId
        }
      );
      const { removeOneMyGroup } = this.props;
      removeOneMyGroup(leavedUserXGroup);
      // alert(`leaved group ${groupId}`);
    } catch (err) {
      console.log("leaveGroup error", err);
    }
  };
  render() {
    // console.log("this.props in GroupController", this.props);
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
