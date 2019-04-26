import React, {Fragment} from 'react'; //fragment is the same as div

class Form extends React.Component{

    constructor(){
        super();
        this.state = { //creating an initial state
            firtName : "Me",
            lastName : null
        }

    }

    componentDidMount(){
        this.setState( {firstName: "Bernard"}) //changing the state

    }

    render(){
    

       Object.assign(this.state, {firtName: "Bernard"})
        return(
            <Fragment>
               {this.state.firtName}  {/* calling the state on page */}
            </Fragment>
        )
    }

}
export default Form;

//git status
//git add