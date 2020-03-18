import React, { Component } from "react";

// 이렇게 선언을 하면 render() 함수 내에서 일반 tag와 같은 방식으로 사용할 수 있다.
import TodoMain from "./main/TodoMain";

/*
  클래스 type 컴포넌트
  class 키워드로 시작이 되고 반드시 ccomponent를 extneds 하여 준비


*/

class App extends Component {
  id = 5;

  state = {
    input: "",
    todoList: [
      { id: 0, text: "오늘 마감할일", checked: false },
      { id: 1, text: "공모전 서류제출", checked: true },
      { id: 2, text: "리엑트 폼 작성", checked: true },
      { id: 3, text: "스프링 시큐리티", checked: true },
      { id: 4, text: "Naver RestTemplete", checked: false }
    ]
  };

  // TodoForm inputbox에 value={input} 과 같은 형태가 되고
  // {input}은 props 상태로 컴포넌트에 전달되어 readonly 상태가 된다.
  // inputbox에 onChange 이벤트를 설정하여 키보드로 입력된 글자를 {input}에 강제로 붙여주는 일을 수행해야 한다
  // e.target.value : 키보드 입력을 캐치하는 키보드 이벤트 메세지
  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  // Enter 키를 눌렀을때 자동으로 추가 버튼이 클릭이 되도록
  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.handleCreate();
    }
  };

  handleCreate = () => {
    const { input, todoList } = this.state;
    this.setState({
      // 기존 객체 배열에 새로운 객체를 추가하는 함수 concat
      todoList: todoList.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  };

  handleToggle = id => {
    const { todoList } = this.state;

    // id 매개변수 변수에 담겨있는 값이 객체 배열의 몇번째 위치 값이냐?
    const index = todoList.findIndex(todo => todo.id === id);

    // 인덱스에 해당하는 요소를 추출
    const selectTodo = todoList[index];

    // 기존의 todoList를 nextTodoList에 복사해 두기
    const nextTodoList = [...todoList];

    // 기존의 checked 값이 true -> false, false -> true
    nextTodoList[index] = {
      ...selectTodo,
      checked: !selectTodo.checked
    };

    // 여기에 오면 비로소 render()를 호출해서 화면에 반영한다.
    this.setState({
      todoList: nextTodoList
    });
  };

  //  현재 클릭된 (id가 선택된) 아이템만 남기고 나머지 리스트만 추출하여
  handleDelete = id => {
    const { todoList } = this.state;
    this.setState({
      todoList: todoList.filter(todo => todo.id !== id)
    });
  };

  // react lifeCycle 중에서 작동되는 method
  // 최초에 어플이 실행되면 한번 작동이 되고
  // 데이터나, 화면 디자인이 변경이 되면 호출되는 method
  render() {
    // 자식 컴포넌트에 데이터를 전달하기 위해서 state로 선언된 데이터들을 props로 변환하기
    const { input, todoList } = this.state;

    // 현재 클래스에서 만든 함수를 통째로 자식 컴포넌트에 전달하기 위해서 props 생성
    const {
      handleCreate,
      handleChange,
      handleKeyPress,
      handleToggle,
      handleDelete
    } = this;

    return (
      <div>
        <TodoMain
          input={input}
          todoList={todoList}
          onCreate={handleCreate}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      </div>
    );
  }
}

export default App;
