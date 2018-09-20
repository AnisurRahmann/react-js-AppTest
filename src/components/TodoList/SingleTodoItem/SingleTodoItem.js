import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import './SingleTodoItem.css';


const SingleTodoItem = (props) => {
    
    return(
        <div  className="single-todo-item ">
            <h2 className="single-todo">{props.optionText}</h2>
             <Checkbox
                    type="checkbox" 
                    value="todoChecked" 
                    onChange={props.handleOptionChecked} 
                    defaultChecked={props.done}
            />
            <IconButton  
                aria-label="Delete"
                onClick={(e)=>
                    {props.handleDeleteSingleOption(props.optionText)}} 
            
            >
            <DeleteIcon />
            </IconButton>

        
      
        </div>
    )
}
export default SingleTodoItem;