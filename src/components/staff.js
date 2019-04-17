import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import SeniorStaff from './seniorstaff';
import JuniorStaff from './juniorstaff';



class Staff extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
          key: 'home', //default selection state
        };
      }
    render(){
        return(
            <div>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={this.state.key}
                    onSelect={key => this.setState({ key })}>

                    <Tab eventKey="home" title="Junior Staff">
                    <JuniorStaff/>
                    </Tab>
                    <Tab eventKey="profile" title="Senior Staff"> {/* slection based on click event and key target */}
                            <SeniorStaff/>
                    </Tab>
                    
                </Tabs>
            </div>
        )
    }
}

export default Staff;