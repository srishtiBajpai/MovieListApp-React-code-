import React from 'react';
import {getGenres} from "../services/genres"

const Sidenav = (props) => {
    let {getGenre}=props
  
    let genreArr=getGenres();

  let  classes="nav-link btn m-1 "


   
    return (<React.Fragment>
              <div className="nav flex-column nav-pills col-sm-2"  aria-orientation="vertical">

              <button className={classes+"active"} onClick={()=>getGenre("allMovies")}>All Movies</button>
                {genreArr.map(cGenre=>{
                
                return <button className={classes} onClick={()=>{getGenre(cGenre.name)}} key={cGenre._id}>{cGenre.name}</button>
                })}
              </div>
              </React.Fragment>
   );
}
 
export default Sidenav;