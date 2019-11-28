export const genres = [
    { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" ,  active:false },
    { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy"  , active:false  },
    { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" ,active:false  }
  ];
  
  export function getGenres() {
    return genres.filter(g => g);
  }