import React, { Component } from 'react';
import Images from '../components/Images';
import axios from "axios";
import "./Pages.css";
import Modal from '../components/Modal';

class Modern extends Component {
    // Initialize the state
    state = {
        arrPhoto: [],
        showPhoto: 5,
        showPhoto2: 10,
        name: this.props.user.email,
        isShowing: false
    }

    // Fetch the list on first mount
    componentDidMount() {
        // const { modern } = this.props.match.params;
        this.getPhotos();
        this.setState({name: this.props.user.email});
    }

    // Retrieves the list of items from the Express app
    getPhotos = () => {
        fetch('/api/get_photos/modern')
            .then(res => res.json())
            .then(arrPhoto => this.setState({ arrPhoto: arrPhoto.resources }));
        // console.log(this.state.list);
    }

    handleClick = (url) => {
        const fav = {
            user_email: this.state.name,
            item_name: url
        };

        // Send an AJAX POST-request//
        axios.post("/api/db/favItems", fav)
            .then(function (data) {
                console.log("Added to favorites")
                alert("Added to favorites");
            });
    }

    render() {
console.log(this.state.name);
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

            <div className="overlay">
                {/* <br /> */}
                <div className="jumbotron-fluid text-center">
                    <i style={{ fontSize: "50px" }}>Modern</i>
                </div>
                <div className="wrapper">{photosUrl}</div>
            </div>

        );
    }
}

export default Modern;