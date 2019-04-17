import React, { Component } from 'react';
import Media from 'react-bootstrap/Media';
import Head from './headmaster.png';


class HeadMaster extends Component{
  constructor(props){
    super(props);

    this.state = {
      nameHead: "Steven Josaya",
      titleHead: "Dr",
    }
  }
    render(){

           
        return(
            <div>
                <h1>Current HeadMaster</h1>

                <Media>

                  <img src={Head} width = "120" height="120" alt="headmaaster"/>

                      <Media.Body>
                        <h5>{this.state.titleHead +" "+this.state.nameHead}</h5>
                        <p>
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                          ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                          tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                          Donec lacinia congue felis in faucibus.
                        </p>
                      </Media.Body>
                    </Media>
                    <hr/>
                    <h1>
                      Biography:
                    </h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ullam nihil ex rerum eum 
                        saepe doloribus voluptas minus. Quam culpa ipsum corporis nam, numquam dolorum quisquam sit incidunt 
                        unde atque, blanditiis, a fugit animi reiciendis? Doloribus ducimus dolorum corporis.
                         Numquam, blanditiis. Sapiente saepe, dolorum dolores autem ipsa a mollitia, iusto voluptatibus 
                         aperiam tempore nostrum recusandae nobis provident. Veritatis aperiam voluptates reiciendis
                          alias incidunt esse ea quam reprehenderit facilis animi rerum possimus mollitia
                          quaerat, non necessitatibus ipsa cumque delectus. Veniam, delectus dolorum alias, illo iure 
                          cupiditate incidunt sunt quaerat totam earum, ipsa harum consequatur reiciendis consequuntur sint 
                          reprehenderit commodi aliquid iusto!
                      </p>
                      <hr/>
                      <h1>Achievements</h1>



                 </div>
        )
    }
}

export default HeadMaster;