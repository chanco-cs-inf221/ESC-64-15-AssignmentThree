import React, { Component } from 'react';

class UserInput extends Component {
    // since this will have statee
    constructor(){
    super();
    this.state = {
        
   // myname = " "
        
    }
}

handleChange = (event) => {
         event.preventDefault();
        const text = event.target.value;
        const fieldName = event.target.name;
        //then set state
        this.setState({[fieldName] : text});
    }
render() {
        // return <input 
        // name="myname" 
        // //value={this.state.myname} 
        // placeholder="Enter ur text"
        //  onChange={ (e) = this.handleChange(e)/>
        return(
           
            <input name="myname" value={this.state.myname} placeholder="Enter"/>
        
       
            
        );

    }

}
export default UserInput;