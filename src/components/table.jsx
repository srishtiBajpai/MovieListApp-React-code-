import React from 'react';
import {getMovies} from "../services/fakeMovies"
import Pagination from "./pagination"
import Like from './like';
import Sidenav from "./sidenav"
import {getGenres} from "../services/genres"
import SearchTab from "./searchTab"
import Newmovie from "./newtask"
import Inputbox from './inputBox';




class Table extends React.Component{
   constructor()
   {
       super();
       this.state={
           movies:getMovies(),
           limit:"4",
           currentPage:1,
           currentGenre:"allMovies",
           genresArr:getGenres(),
           searchVariable:"",
           searchedMovies:[],
           disp:"d-none"

        }

   } 

    delete=(movie)=>
    {  let filteredMovies=[]
       let clonedMovies=this.state.movies;
           filteredMovies=clonedMovies.filter(m=>m!==movie)
       console.log(filteredMovies)
       this.setState({movies:filteredMovies})
    }



getGenre=(genre)=>{
   this.setState({currentGenre:genre})
}



finalMovies=()=>
{
    let moviesGenreWise=[];
    let clonedMovies= this.state.movies;
    if (this.state.currentGenre==="allMovies")
    {
        moviesGenreWise=this.state.movies;
    }
    else{
    moviesGenreWise=clonedMovies.filter(m=>m.genre.name===this.state.currentGenre)}

    return moviesGenreWise;

}


    divideMovies=(pageNumber)=>{
        this.setState({currentPage:pageNumber})
    }



    divide=()=>{

       let  startIndex=(this.state.currentPage-1)*this.state.limit;
       let  endIndex=this.state.currentPage*this.state.limit;
     let moviesGenreWise= this.finalMovies()
     let finMovies=[]
   if(this.state.searchVariable!=="")
   {
       moviesGenreWise=moviesGenreWise.filter(movie=>{
           let lMovie=movie.title.toLowerCase();
          let lSearchVar=this.state.searchVariable.toLowerCase();
        return (lMovie.includes(lSearchVar))} )
   }
     finMovies= moviesGenreWise.slice(startIndex,endIndex)

  let  arrayToUse=[finMovies,moviesGenreWise]
       return arrayToUse;
    }


    makeItFill=(movie)=>
    { let clonedArray= this.state.movies;
    let index= this.state.movies.indexOf(movie)
    clonedArray[index]["liked"]=! clonedArray[index]["liked"]
    this.setState({movies:clonedArray})
    }


    searchMovies=(searchVariable)=>
    {
        //display all the movies having that piece of string with pagination concept}
        console.log(searchVariable)
        this.setState({searchVariable:searchVariable})   
    }


    togglefnc=()=>
    {
        if(this.state.disp==="d-none")
        {
            this.setState({disp:"d-block"})
            console.log(this.state.disp)
        }
        else if(this.state.disp==="d-block")
        {
            this.setState({disp:"d-none"})
            console.log(this.state.disp)
        }

    }


    addNewMovie=(newmovie)=>
    {
   console.log(newmovie)
   
   this.state.genresArr.map(genre=>{
    if(newmovie.Genre===genre){newmovie._id=genre._id}
    else{newmovie._id=genre._id+4}
})

   let oldMoviesArray=[...this.state.movies]
   let newObj={
       _id:oldMoviesArray[oldMoviesArray.length-1]._id+1,
       title:newmovie.Movie,
       genre:{_id:newmovie._id,name:newmovie.Genre},
       numberInStock:newmovie.Number,
       dailyRentalRate:newmovie.Rate

   }
   console.log(newObj)
   oldMoviesArray.push(newObj)
   this.setState({movies:oldMoviesArray})

    }

    
    render(){
      let arrayToUseHere= this.divide()
    
      let finMovies=arrayToUseHere[0]
      let moviesGenreWise=arrayToUseHere[1]
      console.log(finMovies)
      let finMoviess=[]

      if(this.state.searchVariable!=="")
   {   finMoviess=finMovies.map(movie=>{
          let lMovie=movie.title.toLowerCase();
          let lSearchVar=this.state.searchVariable.toLowerCase();
          let replacedText= this.state.searchVariable.toUpperCase();
          let newreg= new RegExp(lSearchVar,"g")
       return lMovie.replace(newreg,replacedText)
       
                                        }
                                )
    }
   console.log(finMoviess)
      
      
        // console.log("table it is")
        return   <React.Fragment>
            <div className="container-fluid">

            <SearchTab searchMovies={this.searchMovies}> </SearchTab>
                <div className="row">
                    <Sidenav getGenre={this.getGenre}></Sidenav>
         <table className="table col-sm-10">
            <tr>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Number in Stock</th>
                <th scope="col">Daily Rental Rate</th>
            </tr>
            <tbody>
                {finMovies.map(movie=>{

                   return  <tr>
                       <td>{movie.title}</td>
                       <td>{movie.genre.name}</td>
                       <td>{movie.numberInStock}</td>
                       <td>{movie.dailyRentalRate}</td>
                       <td><Like makeItFill={()=>this.makeItFill(movie)} isLiked={movie.liked}></Like></td>
                       <td><button className="btn btn-danger" onClick={()=>this.delete(movie)}>Delete</button></td>
                   </tr>
                })}
                
                
    
            </tbody>
        </table>
        <div className="col-sm-2">
        <Newmovie togglefnc={this.togglefnc}></Newmovie>
        </div>
        <Pagination limit={this.state.limit} size={moviesGenreWise.length} divideMovies={this.divideMovies}></Pagination>
        </div>
      
        <div className={this.state.disp} style={{position:"fixed"}}><Inputbox  addNewMovie={this.addNewMovie}></Inputbox></div>
        </div>
        
        </React.Fragment>
    }
}

export default Table;