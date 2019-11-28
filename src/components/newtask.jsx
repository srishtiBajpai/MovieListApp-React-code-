import React, { Component } from 'react';


class Newmovie extends Component {
    state = {  }
  

    render() { 
        return (<button className="btn btn-md ml-2 btn-primary" onClick={this.props.togglefnc}>Add new task</button> );
    }
}
 
export default Newmovie;