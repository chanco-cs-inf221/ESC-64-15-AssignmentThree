import React, { Component } from 'react';
// import ToggleButton from 'react-bootstrap/ToggleButton';
// import ButtonGroup from 'react-bootstrap/ButtonGroup'



class OutFits extends Component {

    constructor(props) {
        super(props);
        this.addStudent = this.addStudent.bind(this);

        this.state = {
            students: [],
            id: 0
        }
    }

    addStudent(event) {
        event.preventDefault();
        let fullname = this.refs.fullname.value;
        let stclass = this.refs.stclass.value;
        let id = this.state.id;
        

        let student = {
            fullname,
            stclass,
            id :id + 1
        };
        

        if (fullname !=="" && stclass !=="") {
            let students = this.state.students;

        students.push(student);
        localStorage.setItem("Students", JSON.stringify(students));
        this.setState({
            students: students            
        })

        }
        this.refs.formField.reset();

    }

    deleteStudent(id){
        let students = this.state.students;
        students.splice(id, 1);

        this.setState({
            students: students
        })

    }

    render() {
        let students = this.state.students;
        return (
            <div className="container-margin">
                <form ref="formField">
                    <input type="text" ref="fullname" placeholder="Student name..." />
                    <input type="number" min="1" max="4" ref="stclass" placeholder="Form" />
                    <button onClick={this.addStudent} style={{backgroundColor: 'lightGray'}}>Add Item</button>
                </form>

                <pre>
                    <ul>
                        {students.map((student, id) =>{
                        return    (<li className="outputList" key={id}>{student.fullname}, form {student.stclass} <button style={{backgroundColor:'lightBlue'}} onClick={()=>this.deleteStudent(id)}>Delete</button></li>)
                        })}
                    </ul>
                </pre>
            </div>
        )
    }
}

export default OutFits;