import React, { Component } from 'react';

class Server extends Component{

    constructor(props){
        super(props);
        this.state = {
            list: [],
            isDataPresent: false,
        }
    }

    componentDidMount(){
        fetch("https://www.google.com").then(response => response.json()).then(json => {
            // i did this api link to show that i can access data from an external server
            //please https://www.google.com is not a proper api link but
            // you can substitute with any server api link and view in a json format to see the naming of independed items so that you can go what line 35 is saying
            this.setState({
                isLoaded: true,
                list: json,
            })
        });
    }

    render(){

        const { isDataPresent, list} = this.state;

        if (!isDataPresent) {
            return <div>The requested data not loaded</div>
            
        }
        else{
        return(
            <div>
                {/* data can be iterated from here using the return promise concatenated by their name with a dot sign prior to list. ege list.name or list.country.district.name */}
                {/* <p>{list}</p> */}
                <p>The fetched data is loaded 'comment me then uncomment the above line of code to view on browser'</p>
            </div>
        )
        }
    }
}
export default Server;