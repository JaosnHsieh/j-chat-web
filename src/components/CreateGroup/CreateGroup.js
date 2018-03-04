import React from "react";
import axios from "../../libs/axios";
import "./style.css";
import Button from "../Button";
class CreateGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      desc: "",
      tipText: ""
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
      this.setState({
        tipText: "SAME GROUP NAME ERROR!!"
      });
      console.log("createGroup error", err);
    }
  };
  joinGroup = async groupId => {
    try {
      const { data: joinedGroup } = await axios.post("/userxgroup", {
        groupId
      });
      const { addOneMyGroup, history } = this.props;
      // alert(`joined group ${groupId}`);
      addOneMyGroup(joinedGroup);
      history.push("/groups");
    } catch (err) {
      console.log("joinGroup error", err);
    }
  };
  render() {
    return (
      <div className="create-group-div">
        <form className="card center" onSubmit={this.onSubmit}>
          {this.state.tipText && <p>this.state.tipText</p>}
          <h2>New Group</h2>
          <div>
            <label>
              <p>Name</p>

              <input
                type="text"
                value={this.state.name}
                onChange={this.onNameChange}
                placeholder="Gruop Name"
              />
            </label>
          </div>
          <div>
            <label>
              <p>Dsecription</p>
              <input
                type="text"
                value={this.state.desc}
                onChange={this.onDescChange}
                placeholder="talking about pets"
              />
            </label>
          </div>
          <Button type="submit" onClick={this.onSubmit}>
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default CreateGroup;
