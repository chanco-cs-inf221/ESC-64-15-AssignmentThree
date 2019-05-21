import React from 'react';

const ToDoForm = (props) => {
    return (
        <div>
            <form onSubmit={props.addStudent}> { /*sending the value  after the form field chsnge status*/}
                <input type="text" 
                    value={props.currentStudent} 
                    onChange={props.regiStudent}/* a callback function to take the value of the input due to form field value change */
                />
               
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default ToDoForm;