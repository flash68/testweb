// noinspection JSDuplicatedDeclaration
/* import React from 'react';
 const UserFormAdmins = ([{
    id: 0,
    name: 'ad',
    pass: 'min',
    Rol: 'user',
}, {
    id: 1,
    name: 'admin',
    pass: 'admin',
    Rol: 'admin',
}
]);*/

/**
 * Created by Алексей on 13.02.2017.
 */


/* регистрация*/
import React from 'react';
import Reg from './components/Reg';
const ReactDOM = require('react-dom');

class UserFormAdmins extends React.Component {

    constructor(props) {
        super(props);
        this.onChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange() {

    }

    handleSubmit() {
        const pass = ReactDOM.findDOMNode(this.refs.pass).value;
        const login = ReactDOM.findDOMNode(this.refs.login).value;
        const Rol = 'newuser';
        const UserFormAdmins = [{
            id: 2,
            name: 'login',
            pass: 'pass',
            Rol: 'Rol',
        }];
        alert('Вы зарегестрировались! Ваш ник: {login} ');
    }
}
export default UserFormAdmins;
