import React from 'react';
import Media from 'react-bootstrap/Media';
import Teacher1 from "../images/teacher1.png";
import Teacher2 from "../images/fm2.png";
import Teacher3 from "../images/teacher2.png";
import Teacher4 from "../images/teacher4.png";



class SeniorStaff extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            SeniorList: [
                {
                    id: 1,
                    name: "Bamusi Sosola",
                    subject: "Chemistry",
                    urlImage: Teacher1
                },
                {
                    id: 2,
                    name: "Bridget Kadaleka",
                    subject: "Computer Studies",
                    urlImage: Teacher2
                    
                },
                {
                    id: 3,
                    name: "Mike Josephy",
                    subject: "Biological Science",
                    urlImage: Teacher3
                   
                },
                {
                    id: 4,
                    name: "Bright Chadzanja",
                    subject: "Physical Science",
                    urlImage: Teacher4
                    
                }
            ]
        }
    }


    render(){
        
        return(
            <div>
            
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
                            alt="Generic placeholder"
                        />
                        
                        </Media>
                       
                     )
                    })
                }
            </div>
        )
    }
}

export default SeniorStaff;