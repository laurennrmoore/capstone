import React, { Component } from 'react';
import axios from 'axios';
import {BACKEND_URL} from '../config';
import '../SingleAttraction.css';
// import Attractions from './Attractions';


export default class SingleAttraction extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            description: '',
            website: '',
            image: '',
            location: ''
        }
    }
    componentDidMount() {
        axios.get(BACKEND_URL + 'attractions/' + this.props.match.params.id)
        .then((response) => {
            this.setState({
                name: response.data.name,
                description: response.data.description,
                website: response.data.website,
                image: response.data.imageURL,
                location: response.data.location
            })
        })
        .catch((error) => {
            console.log(error)
        })
        console.log(this.state.name)
    }
    render() {
        return (
            this.state.loading === false ? (
                <div>
                    <div className='singleContainer'>
                        <div className="singleHeaderContainer">
                            <div className="singleHeaderInfo">
                                <div className='singleName'>
                                    {this.state.name}
                                </div>
                                <div className='singleAddress'>
                                <div className='text-single-address'>
                                    {this.state.location}
                                </div>
                            </div>
                            </div>
                            <div className="singleHeaderImage">
                                <img className='singleImage' src={this.state.image} alt='' />
                            </div>
                            <div className="singleDescriptionContainer">
                                <div className='singleDescription'>
                                    {this.state.description}
                                </div>
                                <div>
                                <a href={this.state.website} className='attractionLink' target="_blank" rel="noreferrer">Visit Website</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <FooterHome />
                </div>
            ) : (
                <div>
                    <h1 className="loading-spinner">Loading...</h1>
                </div>
            )
        )
    }
}