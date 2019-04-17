import React from 'react';
import Media from 'react-bootstrap/Media';
import Teacher1 from "../images/fm1.png";
import Teacher2 from "../images/fm5.png";
import Teacher3 from "../images/fm3.png";
import Teacher4 from "../images/man.png";



class JuniorStaff extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            SeniorList: [
                {
                    id: 1,
                    name: "Atheola Awkward",
                    subject: "Mathematics",
                    urlImage: Teacher1
                },
                {
                    id: 2,
                    name: "Lusuwiro Kesmy",
                    subject: "Geography",
                    urlImage: Teacher2
                    
                },
                {
                    id: 3,
                    name: "Emmie Kabwazi",
                    subject: "Chichewa",
                    urlImage: Teacher3
                   
                },
                {
                    id: 4,
                    name: "Bright Chadzanja",
                    subject: "Life Skills",
                    urlImage: Teacher4
                    
                }
            ]
        }
    }


    render(){
        
        return(
            <div>
                senior here..

                {
                    this.state.SeniorList.map((item, index) => {
                     return (
                        <Media key = {item.id} >
                        <Media.Body >
                            <h5 >{item.name}</h5>
                            <p>{item.subject} teacher</p>
                        </Media.Body>
                        <img
                            width={64}
                            height={64}
                            className="ml-3"
                            src={item.urlImage}
                            alt="Teaccher's profile"
                        />
                        
                        </Media>
                       
                     )
                    })
                }
            </div>
        )
    }
}

export default JuniorStaff;