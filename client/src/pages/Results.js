import React, { Component, Redirect } from 'react';
// import AUTHAPI from '../utils/google-auth';
import axios from 'axios';
import Images from '../components/Images2';
import { Link } from 'react-router-dom';
import Search from './Search';
import PropTypes from 'prop-types';
class Results extends Component {
    state = {
        results: [],
        text: '',
        email: '',
        
        
    }

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
      }
componentWillMount=()=>{
    this.setState({email: this.props.location.state.value});
}
    componentDidMount() {
        this.handleSubmit()
        const { match, location, history } = this.props;
        // this.setState({email: this.props.location.state.value});
    }

    handleClick = (url) => {
        const fav = {
            user_email: this.state.email,
            item_name: url
            // user_email: this.state.email
        };
        // Send an AJAX POST-request//
        axios.post("/api/db/favItems", fav)
            .then(function (data) {
                console.log("Added to favorites")
                alert("Added to favorites");
            });
    }
    handleSubmit = (event) => {
        // event.preventDefault();    
        const userSearch = {
            value: this.props.match.params.query
        }
        console.log(userSearch.value);
        axios.post('/api/cloud/user/search', userSearch)
            .then(res => {
                console.log(res);
                this.setState({ results: res.data.resources });
            })
    }
    render() {
        const img = this.state.results;
        // console.log(img);
        // console.log("from resutls value" + );
        // const path = "/api/db/favItems/users/";
        // path += this.props.user.email;
        // const img = this.state.results;
        // console.log('test!!!!!!!!!!!!!!!!'+ Object.keys(this.props))
        return (
            <div>
                <div>
                    <h3 style={{marginTop:"20px", paddingBottom:"20px"}}>This are your results.</h3>
                    {img.map(res => (
                        <Images
                            url={res.url}
                            handleClick={this.handleClick} />
                    ))}
                </div>
            </div>
        );
    }
}
export default Results;