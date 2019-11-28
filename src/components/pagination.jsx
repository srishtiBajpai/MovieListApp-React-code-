import React from 'react';

const Pagination = (props) => {
    let{limit,size,divideMovies}=props;
    let noOfPages=Math.ceil(size/limit)
let arr=[];
for (let i=1;i<=noOfPages;i++)
{
    arr.push(i)
}


return <div>
    {arr.map((pageNumber)=> {
        return <button onClick={()=>{divideMovies(pageNumber)}}>{pageNumber}</button>
    }
        )}
</div>
}
 
export default Pagination;