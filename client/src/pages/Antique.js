import React, { Component } from 'react';
import Images from '../components/Images';
import axios from "axios";
// import './ApiPhotos.css';



class Antique extends Component {
    // Initialize the state
    state = {
        arrPhoto: [],
        showPhoto: 5,
        showPhoto2: 10,
        name: this.props.user.email
    }

    // Fetch the list on first mount
    componentDidMount() {
        this.getPhotos();
        this.setState({name: this.props.user.email});
    }

    // Retrieves the list of items from the Express app
    getPhotos = () => {
        fetch('/api/get_photos/antique')
            .then(res => res.json())
            .then(arrPhoto => this.setState({ arrPhoto: arrPhoto.resources }));
        console.log(this.state.list);
    }

    handleClick = (url) => {
        const fav = {
            user_email: this.state.name,
            item_name: url
        };

        // Send an AJAX POST-request//
        axios.post("/api/db/favItems", fav)
            .then(function (data) {
            });
            alert("Added to favorites");
    }

    render() {

        const photosUrl = this.state.arrPhoto.map(
            (images) => <Images
            email={this.state.name}
                key={images.public_id}
                id={images.public_id}
                url={images.url}
                handleClick={this.handleClick}
            />
        )
        return (

            <div>
                <br />
                <div className="jumbotron-fluid text-center">
                    <i style={{ fontSize: "50px" }}>Antique</i>
                </div>
                <br />
                    <div className="wrapper">{photosUrl}</div>
            </div>

        );
    }
}

export default Antique;