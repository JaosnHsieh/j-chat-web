import React, { Component } from "react";
import axios from "../../libs/axios.js";
import Button from "../Button";
import "./style.css";
class GroupController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tipText: ""
    };
  }
  joinGroup = async groupId => {
    try {
      const { data: joinedGroup } = await axios.post("/userxgroup", {
        groupId
      });
      const { addOneMyGroup } = this.props;

      // alert(`joined group ${groupId}`);
      addOneMyGroup(joinedGroup);
      this.setState({
        tipText: "JOINED SUCCESSFULLY!"
      });
    } catch (err) {
      this.setState({
        tipText: "JOINED ALREADY!!"
      });
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
      this.setState({
        tipText: "LEAVED SUCCESSFULLY!"
      });
    } catch (err) {
      this.setState({
        tipText: "YOU ARE NOT IN THE GROUP"
      });
      console.log("leaveGroup error", err);
    }
  };
  render() {
    // console.log("this.props in GroupController", this.props);
    const { match, groupList, history } = this.props;
    const groupId = match && match.params && match.params.id;
    const formatedGroupList = groupList.reduce((result, ele) => {
      return {
        ...result,
        [ele.idno]: ele
      };
    }, {});
    const selectedGroup = formatedGroupList[groupId];
    return (
      <div className="group-controller-div">
        <div className="card center">
          <p>{this.state.tipText}</p>
          <p>Group Name : </p>
          <p>{selectedGroup.idno}</p>
          <p>Group Description :</p>
          <p> {selectedGroup.desc}</p>
          <div className="btn-group">
            <Button
              onClick={() => {
                this.joinGroup(groupId);
                history.push(`/contacts/group/${groupId}`);
              }}
            >
              加入
            </Button>
            <Button
              onClick={() => {
                this.leaveGroup(groupId);
                history.push(`/groups`);
              }}
            >
              退出
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default GroupController;
