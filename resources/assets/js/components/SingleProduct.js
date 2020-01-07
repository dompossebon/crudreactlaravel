import axios from 'axios';
import React, {Component} from 'react';
import {Link} from "react-router-dom";

class SingleProduct extends Component {
    constructor(props) {
        super(props)

        this.state = {
            product: {}
        }

        this.handleFieldChange = this.handleFieldChange.bind(this)
    }

    componentDidMount() {
        const productId = this.props.match.params.id
        axios.get(`/api/getProduct/${productId}`).then(response => {
            this.setState({
                product: response.data
            })
        })
    }

    handleFieldChange(event) {
        this.setState({
            title: event.target.value
        })
    }

    render() {
        const {product} = this.state

        return (
            <div className="container">
                <h3>Detalhes</h3>
                <table className="table ">
                    <thead>
                    <tr>
                        <th>Id:</th>
                        <th>Nome:</th>
                        <th>descrição:</th>
                        <th>Código</th>
                        <th>Status</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                        <th>Editar</th>
                        <th>Deletar</th>
                    </tr>
                    </thead>
                    <tbody>

                    <tr>
                        <td>{product.id}</td>
                        <td>{product.short_description}</td>
                        <td>{product.description}</td>
                        <td>{product.code}</td>
                        <td>
                            <Link to={`/alterStatusProduct/${product.id}/${product.status}`}>
                                {product.status == 'enable' ? (
                                    <div>Ativado</div>
                                ) : (
                                    <div>Desativado</div>
                                )} </Link>
                        </td>
                        <td>{product.qty}</td>
                        <td>{product.value}</td>
                        <td>
                            <Link className='btn btn-outline-success btn-sm'
                                  to={`/updateProduct/${product.id}`}> Editar </Link>
                        </td>
                        <td>
                            <Link className='btn btn-outline-danger btn-sm'
                                  to={`/deleteProduct/${product.id}`}> Deletar </Link>
                        </td>
                    </tr>


                    </tbody>
                </table>
                <Link className='btn btn-outline-primary btn-sm' to={`/`}>Voltar </Link>
            </div>


        )
    }
}

export default SingleProduct
