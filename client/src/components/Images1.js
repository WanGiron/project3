import React from 'react';


function Images(props){
   return (
   <div className='card div-image'>
        <div className="container fav-images">
            <img src={props.url} className='photos user-photo' alt="pics"></img>
            <button  className="button1" onClick={()=> props.handleClickDelete(props.url)}><a href="" className="button-x">X</a></button>
        </div>
    </div>
       )

}

export default Images;

