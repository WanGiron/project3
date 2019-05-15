import React from 'react';
import {Link} from 'react-router-dom';


class Images extends React.Component {
    render(){
   return (
   <div className='card div-image'>
        <div className="container fav-images">
            <img src={this.props.location.state.value} className='photos user-photo' alt="pics"></img>
        </div>
    </div>
       )

}
}
export default Images;

