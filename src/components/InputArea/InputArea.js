import React,{Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import './InputArea.css';

class InputArea extends React.Component {
    constructor(props){
        super(props);
        this.handleOnSubmit=this.handleOnSubmit.bind(this);
    }
    handleOnSubmit=(event)=>{
        event.preventDefault();
        const option=event.target.elements.option.value.trim();
        this.props.handleAddOption(option);
        event.target.elements.option.value=''

    }

    render(){
        return (
        <div  className="input-area">
                <form onSubmit={this.handleOnSubmit}>
                <Grid container spacing={20}>
                    <Grid item xs={12}>
                    <TextField
                        className="text-field"
                        id="outlined-name"
                        label="Whats so emergency?"
                        type="text"
                        name="option"
                        margin="normal"
                        variant="outlined"
                />
                    </Grid>
                    <Grid item xs={12}>
                    <Button variant="outlined" color="primary" type="submit" >Add Note</Button>
                     </Grid>
                </Grid>
                  
                
                </form>

            </div>
        )
    }
}
export default InputArea;