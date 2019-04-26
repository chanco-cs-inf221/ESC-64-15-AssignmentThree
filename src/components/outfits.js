import React, { Component } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup'



class OutFits extends Component{
    render(){
        return(
            <div className="container-margin">
             <div className="d-flex flex-column">
                <ButtonGroup toggle>
                    <ToggleButton type="checkbox" defaultChecked value="1">
                    <h1>OUTFITS</h1>
                    {/* THE SCHOOL ACHIEVEMENTS */}
                    </ToggleButton>
                </ButtonGroup>
                
              </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fugiat
                     aliquam magnam! Consequatur voluptatum nihil perspiciatis quaerat est repellat sequi quibusdam 
                     deleniti recusandae mollitia ipsam officia, tenetur harum reprehenderit aperiam
                      ex labore nobis atque repellendus quae doloribus? Tempore sunt aliquam harum excepturi, 
                      uga dolore iusto asperiores quia veritatis libero ab maxime unde eos! Molestiae blanditiis 
                      sed magnam nulla quibusdam repellat labore, dicta cupiditate consequuntur esse quaerat 
                      rerum delectus quos asperiores ex provident fugit doloremque voluptatibus tempora enim adipisci? 
                      Placeat beatae totam dolore
                     officia sequi vero quidem praesentium, adipisci exercitationem animi quae quia optio sed suscipit
                      dignissimos? Hic ipsam ab illo!</p>
            </div>
        )
    }
}

export default OutFits;