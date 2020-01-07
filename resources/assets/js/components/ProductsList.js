import axios from 'axios'
import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class ProductsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        };
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {
        axios.get('/api/products').then(response => {
            this.setState({
                products: response.data
            })
        })
    }

    onSubmit(event) {
        event.preventDefault();
        const prod = {
            code: this.state.code,
            short_description: this.state.short_description,
            status: this.state.status
        }
        axios.post('/api/searchProduct', prod).then(response => {
            this.setState({
                products: response.data
            })
        })
    }

    handleFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        const {products} = this.state

        return (
            <div className="container">
                <h3>Listagem</h3>
                <form onSubmit={this.onSubmit}>
                    <table className="table ">
                        <thead>
                        <tr>
                            <th>Código</th>
                            <th>Nome</th>
                            <th>Status</th>
                            <th>

                            </th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>

                            <td>
                                <div className="input-group input-group-sm mb-3">
                                    <input
                                        id='code'
                                        type='search'
                                        className={`form-control`}
                                        aria-label="Sizing example input"
                                        aria-describedby="inputGroup-sizing-sm"
                                        name='code'
                                        value={this.state.code || ""}
                                        onChange={this.handleFieldChange}
                                        maxlength="10"
                                    />
                                </div>
                            </td>
ou
                            <td>
                                <div className="input-group input-group-sm mb-3">
                                    <input
                                        id='short_description'
                                        type='search'
                                        className={`form-control`}
                                        aria-label="Sizing example input"
                                        aria-describedby="inputGroup-sizing-sm"
                                        name='short_description'
                                        value={this.state.short_description || ""}
                                        onChange={this.handleFieldChange}
                                        maxlength="30"
                                    />
                                </div>
                            </td>
ou
                            <td>
                                <div className="input-group input-group-sm mb-3">
                                    <select
                                        id='status'
                                        className={`form-control`}
                                        aria-label="Sizing example input"
                                        aria-describedby="inputGroup-sizing-sm"
                                        name='status'
                                        value={this.state.status || ""}
                                        onChange={this.handleFieldChange}>
                                        <option value=""> Escolha um Status</option>
                                        <option value="enable"> Ativado</option>
                                        <option value="disable"> Desativado</option>
                                    </select>
                                </div>
                            </td>

                            <td>
                                <button className='btn btn-outline-primary btn-sm'>Pesquisa</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>
                <table className="table ">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Códido</th>
                        <th>Nome</th>
                        <th>Status</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                        <th>
                            <Link
                                className='btn btn-outline-primary btn-sm'
                                to='/createProduct'
                            >
                                Adicionar Produto
                            </Link>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {products.map((product, index) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.code}</td>
                            <td>{product.short_description}</td>
                            <td>
                                    {product.status == 'enable' ? (
                                        <div>Ativado</div>
                                    ) : (
                                        <div>Desativado</div>
                                    )}
                            </td>
                            <td>{product.qty}</td>
                            <td>{product.value}</td>
                            <td>
                                <Link className='btn btn-outline-primary btn-sm'
                                      to={`/singleProduct/${product.id}`}> Detalhes </Link>
                            </td>
                        </tr>
                    ))
                    }
                    </tbody>
                </table>

            </div>
        )
    }
}

export default ProductsList
