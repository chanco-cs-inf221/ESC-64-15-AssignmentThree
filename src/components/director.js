import React, { Component } from 'react';
import Media from 'react-bootstrap/Media';
import Head from '../images/bernardProfileImage.png';


class Director extends Component{
    constructor(props){
        super(props);
    
        this.state = {
          nameHead: "Bernard Masache",
          titleHead: "Prof.",
        }
      }
        render(){
            return(
                <div>
                    <h1>Current Director</h1><hr/>
    
                    <Media>
                      
                      <img src={Head} width = "120" height="120" alt="headmaaster"/>
    
                          <Media.Body className="padding">
                            <h5>{this.state.titleHead +" "+this.state.nameHead}</h5>
                            <p>
                              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat reprehenderit itaque
                               ut quae sed. Eaque quia quod odio accusamus maiores minus ducimus,
                               inventore deserunt. Exercitationem vero nihil accusamus doloremque dolorum.
                            </p>
                          </Media.Body>
                        </Media>
                        <hr/>
                        <h1>
                          Biography:
                        </h1>
                          <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo accusantium suscipit ipsum 
                            dicta vitae, distinctio cum quis beatae magnam? Dolor neque officia sint ratione similique veritatis, 
                            non ea consectetur laborum vel laboriosam iure quae ipsam aperiam laudantium eos saepe illo voluptates. 
                            Officiis libero, odio accusamus recusandae temporibus nisi architecto dignissimos?
                            
                          </p>
                          <hr/>
                          
    
    
    
                     </div>
            )
        }
}

export default Director;