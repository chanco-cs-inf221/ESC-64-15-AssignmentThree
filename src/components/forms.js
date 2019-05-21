import React, { Component } from 'react';

import ToDoForm from '../components/inputForm';

class Forms extends Component{

   
    constructor(props){
        super(props);
// binding functions so that they dont lose context
        this.changeStatus = this.changeStatus.bind(this);
        this.regiStudent = this.regiStudent.bind(this);
        this.addStudent = this.addStudent.bind(this);

        //initialising the state
        this.state = {
            students : [
                    {
                        name: "Bernard Masache",
                        
                        
                    },
                ],
                currentStudent: ''
        }
    }

//the function to add the state of the student from an input to the page
    addStudent(event){
        event.preventDefault();
        let students = this.state.students;
        let currentStudent = this.state.currentStudent;
        students.push({
            name: currentStudent,
        
            
        });
       if (students === null) {
           alert("prease enter")
           
       }else{
        this.setState({
            currentStudent
        });
       }
    }

    //updating the state of the student through the form input
    regiStudent(student){
        this.setState({
            currentStudent: student.target.value
            
        })
    }

//the intial change state of the overrall component
    changeStatus(){
        this.setState({
            students:''
        })

    }
    render(){
        
        return(
            <div>
                <h1>Register Your Name</h1>
                <div className="row">
                <div className="col-sm-6">
                <ToDoForm 
                        /* ading the function status as props to the form so that it communicate with the external form file*/
                currentStudent={this.state.currentStudent} 
                regiStudent = {this.regiStudent}
                addStudent = {this.addStudent}
                />
                </div>
                
                <div className="col-sm-6">
                    <p style={{fontWeight: 'bold'}}>Registration Pack</p>
                <div className="enroll-list">
                    {this.state.students.map((student) => {
                        
                        return (
                            /* displaying the registered names making sure the key is different*/
                                 <p key={student.name} className="outputList" >{student.name}<br/> </p>
                                )
                        })}
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Forms;