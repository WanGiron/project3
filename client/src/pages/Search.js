import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            results: [],
            
        };
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
// componentDidMount(){
//     this.handleSubmit();
// }
    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }
    
   
   
    render() {
        // console.log(this.state.value);
        return (
            <div className="input-div">
                <label>
                    <input type="text" onChange={this.handleChange} placeholder="Search for items"/>
                </label>
                <Link to={{
                    pathname: "/results/"+this.state.value,
                    state: { value: this.props.email }
                }}
                    className="navbar-brand"
                    aria-label="Bootstrap"
                    style={{ textDecoration: "none", color: "black" }}
                    style={{ textDecoration: "none", color: "black" }} >
                    <button className="btn-dark btn-sm input-btn" >Go</button>
                </Link>
            </div>
        )
    }
}
export default Search;
