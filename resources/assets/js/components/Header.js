import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => (
    <nav className='navbar navbar-expand-md navbar-light navbar-laravel'>
        <div className='container'>
                <img src={require("../../../../public/storage/images/logo.gif")} alt="" className="img-responsive"/>
            <Link className='navbar-brand' to='/'>CRUD / REACTJS + LARAVEL - Voltar p/ Tela Inicial</Link>
        </div>
    </nav>
)

export default Header
