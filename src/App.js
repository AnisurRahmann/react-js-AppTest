import React, { Component } from 'react';
import Header from './components/Header/Header';
import InputArea from './components/InputArea/InputArea';
import TodoList from './components/TodoList/TodoList';
import Grid from '@material-ui/core/Grid';
import 'normalize.css/normalize.css'
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      options:['App todo complete','react & redux -freecode camp','Expensify app complete','portfolio static app complete'],
      done:false
    }


    };
     handleAddOption=(option)=>{
      this.setState((prevState) => ({
        options: prevState.options.concat(option)
      }));
      
    }
    handleDeleteSingleOption = (optionToRemove) => {
      this.setState((prevState)=>({options:prevState.options.filter((option)=>optionToRemove!==option)}))
    }
    handleOptionChecked = () => {
      this.setState({done:!this.state.done})
      console.log(this.state.done)
    }
    handleDeleteAllOptions = () => {
      this.setState(({options:[]}))
    }


    render() {
      return (
        <div className="App">
          <Header />
            <InputArea
              handleAddOption={this.handleAddOption} 
               options={this.state.options}/>
            <TodoList
              options={this.state.options} 
              handleDeleteSingleOption={this.handleDeleteSingleOption}
              handleOptionChecked={this.handleOptionChecked}
              done={this.state.done} 
              handleDeleteAllOptions={this.handleDeleteAllOptions}
              done={this.state.done}
              />
        </div>
      );
    }
  }

  export default App;
