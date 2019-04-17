import React, {Component} from 'react';
import User from './user';

// export default function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
//   }
  
export default class Users extends Component{
  render(){
    return(
      <div>
        <h1>{this.props.title}</h1>
        <User comment="Namkalize">&rarr; I like</User>
        <User comment="Kangaude">&rarr; Mosquito nets are more less like processed  </User>
        <User comment="Gwape">&rarr; I once ate </User>

      </div>
    )
  }
}