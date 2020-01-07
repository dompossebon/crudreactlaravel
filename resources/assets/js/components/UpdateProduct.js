import axios from 'axios'
import React, {Component} from 'react'

class UpdateProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            description: '',
            short_description: '',
            code: '',
            status: '',
            value: '',
            qty: '',
        }
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    handleFieldChange(event) {
        const target = event.target,
            value = target.value,
            name = target.name;
        this.setState({
            [name]: value
        })
    }

    componentDidMount() {
        const productId = this.props.match.params.id
        axios.get(`/api/getProduct/${productId}`).then(response => {
            this.setState({
                description: response.data.description,
                short_description: response.data.short_description,
                code: response.data.code,
                value: response.data.value,
                qty: response.data.qty,
                status: response.data.status
            })
        })
    }

    onSubmit(event) {
        event.preventDefault();
        const {history} = this.props
        const product = {
            description: this.state.description,
            short_description: this.state.short_description,
            code: this.state.code,
            value: this.state.value,
            qty: this.state.qty,
            status: this.state.status
        }
        axios.put(`/api/updateProduct/` + this.props.match.params.id, product)
            .then(response => {
                // redirect to the homepage
                history.push('/')
                //console.log('response: ', response)
            })
            .catch(error => {
                this.setState({
                    errors: error.response.data.errors
                })
            })
    }

    render() {
        return (
            <div className="container">
                <h3>Editar Produto</h3>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='card-header'>Editar</div>

                            <div className='card-body'>

                                <form onSubmit={this.onSubmit}>


                                    <div className="input-group input-group-sm mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="inputGroup-sizing-sm">Nome: </span>
                                        </div>
                                        <input
                                            id='short_description'
                                            type='text'
                                            className={`form-control`}
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm"
                                            name='short_description'
                                            value={this.state.short_description}
                                            onChange={this.handleFieldChange}
                                            maxlength="30"
                                            required
                                        />
                                    </div>

                                    <div className="input-group input-group-sm mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"
                                                  id="inputGroup-sizing-sm">Descrição: </span>
                                        </div>
                                        <input
                                            id='description'
                                            type='text'
                                            className={`form-control`}
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm"
                                            name='description'
                                            value={this.state.description}
                                            onChange={this.handleFieldChange}
                                            maxlength="150"
                                            required
                                        />
                                    </div>

                                    <div className="input-group input-group-sm mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="inputGroup-sizing-sm">Código: </span>
                                        </div>
                                        <input
                                            id='code'
                                            type='text'
                                            className={`form-control`}
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm"
                                            name='code'
                                            value={this.state.code}
                                            onChange={this.handleFieldChange}
                                            maxlength="10"
                                            required
                                        />
                                    </div>

                                    <div className="input-group input-group-sm mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="inputGroup-sizing-sm">Status: </span>
                                        </div>
                                        <select
                                            id='status'
                                            className={`form-control`}
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm"
                                            name='status'
                                            value={this.state.status}
                                            onChange={this.handleFieldChange}>
                                            <option value="enable"> Ativado</option>
                                            <option value="disable"> Desativado</option>
                                        </select>
                                    </div>

                                    <div className="input-group input-group-sm mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="inputGroup-sizing-sm">Valor: </span>
                                        </div>
                                        <input
                                            id='value'
                                            type='number'
                                            className={`form-control`}
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm"
                                            name='value'
                                            value={this.state.value}
                                            onChange={this.handleFieldChange}
                                            required
                                        />
                                    </div>

                                    <div className="input-group input-group-sm mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"
                                                  id="inputGroup-sizing-sm">Quantidade: </span>
                                        </div>
                                        <input
                                            id='qty'
                                            type='number'
                                            className={`form-control`}
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm"
                                            name='qty'
                                            value={this.state.qty}
                                            onChange={this.handleFieldChange}
                                            required
                                        />
                                    </div>


                                    <button onClick={() => this.props.history.goBack()}
                                            className='btn btn-outline-danger btn-sm'>Cancelar
                                    </button>
                                    <button className='btn btn-outline-primary btn-sm'>Atualizar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateProduct