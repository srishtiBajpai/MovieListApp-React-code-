import React, { Component } from 'react';
class Inputbox extends Component {
    state = { 
        Movie:"",
        Genre:"",
        _id:"",
        Number:"",
        Rate:""
    }

      handleChange=(e)=>
      {
        let val=e.currentTarget.value
        let name= e.currentTarget.name
        this.setState({[name]:val})
      }

      handleSubmit=(e)=>{
e.preventDefault();
this.props.addNewMovie(this.state)
      }
      
       

    
    render() { 
      let  inputArr=["Movie","Genre","Number", "Rate"]
        return ( <React.Fragment>
            <div className="border border-info rounded bg-light mt-2 mr-5 ml-5" style={{zIndex:"100"}}>
            <form className="mt-4 " onSubmit={this.handleSubmit}>
                {inputArr.map(enter=>
                    <input type="text" className="form-control mb-1" onChange={this.handleChange} name={enter} placeholder= {"Enter "+enter}/> )}
                     <button type="submit" className="btn btn-primary mb-1" >Submit</button>
                     </form>
                     </div>
        
           </React.Fragment> );
    }
}
 
export default Inputbox;