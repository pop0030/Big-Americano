import React from 'react'
import TodoItem from 'TodoItem'

class TodoList extends React.Component {
    renderTodoItem (todo) {
        const onTodoClick = this.props.onTodoClick;
        return <TodoItem 
            key={todo.id}
            {...todo}
            onClick={()=> onTodoClick(todo.id)}
        />
    }
    render () {
        return (
            <ul>
                {this.props.todos.map(
                    todo => this.renderTodoItem(todo)
                )}
            </ul>
        );
    }
}

export default TodoList