import React, {Component} from 'react';

class Form extends Component {

    render() {
        return (






                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='card-header'>Cadastrar Produto</div>

                            <div className='card-body'>

                                <form onSubmit={this.handleOnSubmit}>


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
                                        />
                                    </div>

                                    <div className="input-group input-group-sm mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="inputGroup-sizing-sm">Status: </span>
                                        </div>
                                        <select
                                            id='status'
                                            type='text'
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
                                            type='text'
                                            className={`form-control`}
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm"
                                            name='value'
                                            value={this.state.value}
                                            onChange={this.handleFieldChange}
                                        />
                                    </div>

                                    <div className="input-group input-group-sm mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"
                                                  id="inputGroup-sizing-sm">Quantidade: </span>
                                        </div>
                                        <input
                                            id='qty'
                                            type='text'
                                            className={`form-control`}
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm"
                                            name='qty'
                                            value={this.state.qty}
                                            onChange={this.handleFieldChange}
                                        />
                                    </div>
                                    <button onClick={() => this.props.history.goBack()}
                                            className='btn btn-outline-danger btn-sm'>Cancelar
                                    </button>
                                    <button className='btn btn-outline-primary btn-sm'>Cadastrar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>



        )
    }

}

export default Form