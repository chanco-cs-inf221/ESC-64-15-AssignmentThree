import React from 'react';

const User = (props) =>{
    const {children, comment} = props;
 return (  <div>{children} | {comment}</div>)
}

export default User;