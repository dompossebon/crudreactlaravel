import axios from 'axios';
import React, {Component} from 'react';
import {Redirect} from "react-router-dom";

class AlterStatusProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: [],
        };
    }

    componentDidMount() {
        const productId = this.props.match.params.id
        const status = this.props.match.params.status
        axios.get(`/api/alterStatusProduct/${productId}/${status}`).then(response => {
            this.setState({
                product: response.data
            })
        })
    }

    render() {
        return <Redirect to={`/singleProduct/`+this.props.match.params.id}/>
    }
}

export default AlterStatusProduct