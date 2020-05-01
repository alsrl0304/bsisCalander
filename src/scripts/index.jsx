import React from "react";
import ReactDOM from "react-dom";

const { grades, classes } = require("./schoolConstants.js");

class Selector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grade: grades[0],
      class: classes[0],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    axios.get("/todolist", {
      param: {
        grade: this.state.grade,
        class: this.state.class,
      },
    });
  }

  render() {
    const gradeOptions = grades.map((i) => (
      <option key={i} value={i}>{`${i}학년`}</option>
    ));
    const classOptions = classes.map((i) => (
      <option key={i} value={i}>{`${i}반`}</option>
    ));

    return (
      <form
        action="/todolist"
        style={{ textAlign: "center" }}
        onSubmit={this.handleSubmit}
      >
        <select
          name="grade"
          value={this.state.grade}
          onChange={this.handleChange}
        >
          {gradeOptions}
        </select>
        <select
          name="class"
          value={this.state.class}
          onChange={this.handleChange}
        >
          {classOptions}
        </select>
        <input type="submit" value="검색" />
      </form>
    );
  }
}

ReactDOM.render(<Selector />, document.getElementById("root"));
