import React from 'react';


 
class SearchTab extends React.Component {
    state = { 
        searchVariable:""
     }

      handleChange=(e)=>{
        let  tempSearchVariable=(e.currentTarget.value)
          this.setState({searchVariable:tempSearchVariable})
          }
       
       
       handleSubmit=(e)=>{
           e.preventDefault();
           this.props.searchMovies(this.state.searchVariable)
           this.setState({searchVariable:""})
       }


    render() { 
        return ( <React.Fragment>
            <nav className="navbar navbar-light bg-light">
            <i class="fa fa-search"></i>
            
            <form className="form-inline " onSubmit={this.handleSubmit}>
              <input className="form-control mr-sm-2" type="search" placeholder="Search" onChange={this.handleChange} value={this.state.searchVariable} aria-label="Search" />
              <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
            </form>
          </nav>
          </React.Fragment> );
    }
}
 
export default SearchTab;

