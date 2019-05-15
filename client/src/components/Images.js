import React from 'react';
import {Link} from 'react-router-dom';
import "./Images.css";

function Images(props) {
   return (
       <span className="card">
           <div>
               <Link to={{
                    pathname: "/images",
                    state: { value: props.url } }}>
                  <div style={{ backgroundImage: `url(${props.url})`, backgroundSize: "cover", height: "200px", width: "300px",borderRadius: "5px", margin: "5px"}}/>
               </Link>

               {(props.email !== undefined ) ?  <a href="#" style={{textDecoration:"none", fontSize:"25px", marginRight:"10px"}}
                   className="heart" onClick={() => props.handleClick(props.url)}
               >&#x2764;</a> : ""}
              


               {/* <img src={props.url} className='photos' alt={props.url}></img> */}
               {/* <button className='image-button' onClick={() => props.handleClick(props.url)}>Favorite</button> */}
           </div>
       </span>
   )
}

export default Images;