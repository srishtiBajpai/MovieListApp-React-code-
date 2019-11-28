const movies = [
    {
      _id: "5b21ca3eeb7f6fbccd471815",
      title: "Terminator",
      genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
      numberInStock: 6,
      dailyRentalRate: 2.5,
      publishDate: "2018-01-03T19:04:28.809Z",
      liked:true
    },
    {
      _id: "5b21ca3eeb7f6fbccd471816",
      title: "Die Hard",
      genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
      numberInStock: 5,
      dailyRentalRate: 2.5
    },
    {
      _id: "5b21ca3eeb7f6fbccd471817",
      title: "Get Out",
      genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
      numberInStock: 8,
      dailyRentalRate: 3.5
    },
    {
      _id: "5b21ca3eeb7f6fbccd471819",
      title: "Trip to Italy",
      genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
      numberInStock: 7,
      dailyRentalRate: 3.5
    },
    {
      _id: "5b21ca3eeb7f6fbccd47181a",
      title: "Airplane",
      genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
      numberInStock: 7,
      dailyRentalRate: 3.5
    },
    {
      _id: "5b21ca3eeb7f6fbccd47181b",
      title: "Wedding Crashers",
      genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
      numberInStock: 7,
      dailyRentalRate: 3.5
    },
    {
      _id: "5b21ca3eeb7f6fbccd47181e",
      title: "Gone Girl",
      genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
      numberInStock: 7,
      dailyRentalRate: 4.5
    },
    {
      _id: "5b21ca3eeb7f6fbccd47181f",
      title: "The Sixth Sense",
      genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
      numberInStock: 4,
      dailyRentalRate: 3.5
    },
    {
      _id: "5b21ca3eeb7f6fbccd471821",
      title: "The Avengers",
      genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
      numberInStock: 7,
      dailyRentalRate: 3.5
    }
  ];
  
  export function getMovies() {
    return movies;
  }
  export function getMovie(id) {
    return movies.find(m => m._id === id);
  }
  // export function saveMovie(movie) {
  //   let movieInDb = movies.find(m => m._id === movie._id) || {};
  //   movieInDb.title = movie.title;
  //   movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
  //   movieInDb.numberInStock = movie.numberInStock;
  //   movieInDb.dailyRentalRate = movie.dailyRentalRate;
  
  //   if (!movieInDb._id) {
  //     movieInDb._id = Date.now().toString();
  //     movies.push(movieInDb);
  //   }
  //   return movieInDb;
  // }
  
  export function deleteMovie(id) {
    let movieInDb = movies.find(m => m._id === id);
    movies.splice(movies.indexOf(movieInDb), 1);
    return movieInDb;
  }


//   <div className="col-sm-2"> 
//   <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
// <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">All Genre</a>
// <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Action</a>
// <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Comedy</a>
// <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Thriller</a>
// </div>
// </div>