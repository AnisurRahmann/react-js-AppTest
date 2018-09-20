import React from 'react';

import SingleTodoItem from './SingleTodoItem/SingleTodoItem'
import Scroll from '../Scroll/Scroll'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';


import './TodoList.css';

const TodoList = (props) => {
   
    return (
        <div  className="todo-list">
            <h1 className="todo-list-header">Todo List</h1>
            <Scroll >
                {props.options.map((option,index)=>(
                    <SingleTodoItem 
                    key={option}
                    optionText={option}
                    count={index+1}
                    handleDeleteSingleOption={props.handleDeleteSingleOption}
                    handleOptionChecked={props.handleOptionChecked}
                    done={props.done}
                    />
                ))}
                </Scroll>
           
            <Button variant="contained" 
                    color="secondary"
                    onClick={props.handleDeleteAllOptions}
             >Delete All
                <DeleteIcon  />
            </Button>
        </div>
    )
}
export default TodoList;