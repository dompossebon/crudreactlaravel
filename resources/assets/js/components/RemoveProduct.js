import axios from 'axios';
import React, {Component} from 'react';
import {Redirect} from "react-router-dom";

class RemoveProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: [],
        };
    }

    componentDidMount() {
        const productId = this.props.match.params.id
        axios.delete(`/api/deleteProduct/${productId}`).then(response => {
            this.setState({
                product: response.data
            })
        })
    }

    render() {
        return <Redirect to="/"/>
    }

}

export default RemoveProduct