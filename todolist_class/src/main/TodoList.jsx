import React, { Component } from "react";
import TodoItem from "./TodoItem";

/*
    lifeCycle method
    code snuppet이 생성하는 method는 16.3 이전에 주로 사용하던 method인데 16.3 이후에는 일부 method가 변경되거나 소멸된다
    소멸되는 method : 성능상의 이슈를 발생시킬 수 있는 소지가 잇어 소멸하거나 다른 method로 대치하기로 결정 되었다.

    처음 컴포넌트를 생성하고 start를 했을 때

    1. constructor() 가 실행
    2. componenetWillMount()
    3. render()
    4. componentDidMount()
*/

class TodoList extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  /*
    화면에 리스트를 표시하기 위한 todoList 배열이 변경이 되었는지를 판단해서
    render() 함수 호출의 여부를 알려주는 method

    ==는 Euale Operator, ===는 Stric Equal Operator

    == 는 값이 같은지를 판단,
    === 는 값, 그리고 타입/형식이 정확히 같은지를 판단

    예)

    1=="1" 는 true 이지만
    1==="1" 는 false 임

  */
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todoList !== nextProps.todoList;
    // return true;
  }

  //   // v17 이후에서는 사용이 불가능한 상태가 될 것이다.
  //   componentWillMount() {}

  //   // v17 이후에서는 사용이 불가능한 상태가 될 것이다.
  //   componentDidMount() {}

  //   // v17 이후에서는 사용이 불가능한 상태가 될 것이다.
  //   componentWillReceiveProps(nextProps) {}

  //   componentWillUpdate(nextProps, nextState) {}

  //   componentDidUpdate(prevProps, prevState) {}

  //   componentWillUnmount() {}

  render() {
    const { todoList, onToggle, onDelete } = this.props;
    const todoMaps = todoList.map(({ id, text, checked }) => (
      <TodoItem
        id={id}
        text={text}
        checked={checked}
        onToggle={onToggle}
        onDelete={onDelete}
      />
    ));

    return (
      <div>
        <div>{todoMaps}</div>
      </div>
    );
  }
}

// TodoList.propTypes = {};

export default TodoList;
