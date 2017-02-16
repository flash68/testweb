/**
 * Created by Алексей on 13.02.2017.
 */


/* Вход авторизованных пользователей*/
import React from 'react';
const ReactDOM = require('react-dom');


const UserFormAdmins = [{
    id: 0,
    name: 'ad',
    pass: 'min',
    Rol: 'user',
}, {
    id: 1,
    name: 'admin',
    pass: 'admin',
    Rol: 'admin',
},
];

class UserLoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { Rol: '' };
        this.onChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange() {

    }

    handleSubmit() {
        const pass = ReactDOM.findDOMNode(this.refs.pass).value;
        const login = ReactDOM.findDOMNode(this.refs.login).value;
        for (const i in UserFormAdmins) {
            if ((pass == UserFormAdmins[i].pass && login == UserFormAdmins[i].name)) {
                this.state.Rol = UserFormAdmins[i].Rol;
                var UserRol = this.state.Rol;
            }
        }
    }
}

export default { UserRol };
