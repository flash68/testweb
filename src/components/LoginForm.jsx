/* Авторизация прошла успешно*/
import React from 'react';
import { UserRol } from './UserLoginForm';
import UserFormAdmins from './UserFormAdmins';


class LoginForm extends React.Component {
    constructor() {
       /* let RolUser = UserFormAdmins.Rol.value;*/
        let RolUser = UserRol;
    }

    render() {
        return (<div className="loginform">Вы вошли как { RolUser }!</div>);
    }
}
export default LoginForm;
