import React from 'react';
import { List } from '@material-ui/core';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  const { todoList, onMoveUp, onMoveDown, onMoveToTop, onMoveToBottom, toggleModal } = props;
  const renderedTodoItems = todoList.map((todoItem) => (
    <TodoItem
      key={todoItem.id}
      todoItem={todoItem}
      onMoveUp={onMoveUp}
      onMoveDown={onMoveDown}
      onMoveToTop={onMoveToTop}
      onMoveToBottom={onMoveToBottom}
      toggleDeleteModal={toggleModal}
    />
  ));

  return <List id="todo-list">{renderedTodoItems}</List>;
};

export default TodoList;