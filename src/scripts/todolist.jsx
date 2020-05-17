import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import dayjs from "dayjs";
import "dayjs/locale/ko";
import dayjsLocalizedFormat from "dayjs/plugin/localizedFormat";
dayjs.locale("ko");
dayjs.extend(dayjsLocalizedFormat);

//import { getQueryParams } from "./tinyFunctions.js";
const { grades, classes } = require("./schoolConstants.js");

class Selector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grade: this.props.grade,
      class: this.props.class,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value }, () =>
      this.props.handleChange(name, value)
    );
  }

  render() {
    const gradeOptions = grades.map((i) => (
      <option key={i} value={i}>{`${i}학년`}</option>
    ));
    const classOptions = classes.map((i) => (
      <option key={i} value={i}>{`${i}반`}</option>
    ));

    return (
      <form>
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
      </form>
    );
  }
}

class TodoTable extends React.Component {
  render() {
    const todoRaws = this.props.todolist.map((todo) => (
      <tr key={todo.id}>
        <td>{todo.title}</td>
        <td>{todo.subject}</td>
        <td>{dayjs(todo.deadline).format("LLLL")}</td>
        <td>{todo.description}</td>
      </tr>
    ));

    return (
      <div>
        <h3>조회 결과</h3>
        <table>
          <thead>
            <tr>
              <th>이름</th>
              <th>과목</th>
              <th>기한</th>
              <th>내용</th>
            </tr>
          </thead>
          <tbody>{todoRaws}</tbody>
        </table>
      </div>
    );
  }
}

class Todolist extends React.Component {
  constructor(props) {
    super(props);

    const params = new URLSearchParams(location.search);

    this.state = {
      grade: params.get("grade") || grades[0],
      class: params.get("class") || classes[0],
      todolist: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios
      .get(`/api?grade=${this.state.grade}&class=${this.state.class}`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          todolist: res.data,
        });
      });
  }

  handleChange(name, value) {
    this.setState(
      {
        [name]: value,
      },
      () => {
        history.replaceState(
          null,
          null,
          `/todolist?grade=${this.state.grade}&class=${this.state.class}`
        );

        axios
          .get(`/api?grade=${this.state.grade}&class=${this.state.class}`)
          .then((res) => {
            console.log(res.data);
            this.setState({
              todolist: res.data,
            });
          });
      }
    );
  }

  render() {
    return (
      <div>
        <Selector
          grade={this.state.grade}
          class={this.state.class}
          handleChange={this.handleChange}
        />
        <TodoTable todolist={this.state.todolist} />
      </div>
    );
  }
}

ReactDOM.render(<Todolist />, document.getElementById("root"));
