import React from 'react';


function Images(props){

  return <div className="card">
      <div className='div-image'>
      <img src={props.url} className='photos' alt="pics"></img>
      {(props.email !== undefined) ? <button  className="button1" onClick={()=> props.handleClick(props.url)}><a href="#" className="button-x">&#x2764;</a></button>
        :""}
      
      </div>
      </div>

}

export default Images;
