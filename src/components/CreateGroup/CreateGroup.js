import React from "react";
import axios from "../../libs/axios";
class CreateGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      desc: ""
    };
  }
  onNameChange = e => {
    e.preventDefault();
    this.setState({
      name: e.target.value
    });
  };
  onDescChange = e => {
    e.preventDefault();
    this.setState({
      desc: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    this.createGroup({ ...this.state });
  };
  createGroup = async ({ name, desc }) => {
    try {
      const { data: newGroup } = await axios.post("/group", { name, desc });
      const { addOneGroup } = this.props;

      alert(`created group ${newGroup.name}`);
      this.joinGroup(newGroup.idno);
      addOneGroup(newGroup);
    } catch (err) {
      console.log("createGroup error", err);
    }
  };
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
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>
              group name:{" "}
              <input
                type="text"
                value={this.state.name}
                onChange={this.onNameChange}
              />
            </label>
          </div>
          <div>
            <label>
              group dsec:{" "}
              <input
                type="text"
                value={this.state.desc}
                onChange={this.onDescChange}
              />
            </label>
          </div>
          <input type="submit" onClick={this.onSubmit} />
        </form>
      </div>
    );
  }
}

export default CreateGroup;
