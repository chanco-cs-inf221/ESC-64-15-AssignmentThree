import React, {Fragment} from 'react'; //fragment is the same as div

class Form extends React.Component{

    constructor(){
        super();
        this.state = {
            firtName : "Me",
            lastName : null
        }

    }

    componentDidMount(){
        this.setState( {firstName: "Bernard"})

    }

    render(){
        // this.setState( firstName: "Bernard")

       Object.assign(this.state, {firtName: "Bernard"})
        return(
            <Fragment>
                {this.state.firtName}
            </Fragment>
        )
    }

}
export default Form;

//git status
//git add