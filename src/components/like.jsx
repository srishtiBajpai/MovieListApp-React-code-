import React from 'react';
const Like = (props) => {
    let {makeItFill, isLiked}=props;
    let classes;
    if(!isLiked)
    {
        classes= "fa fa-heart-o"
    }
    else 
    {
        classes="fa fa-heart"
    }
    return (<React.Fragment>
    <i className={classes} style={{cursor:"pointer"}} onClick={makeItFill}></i> 
    </React.Fragment>
     );
}
 
export default Like;