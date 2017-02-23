/* Авторизация прошла успешно*/
import React from 'react';

class LoginForm extends React.Component {
    constructor() {
        super();
        this.state = { RolUser: 'we' };
    }

    render() {
        return (<div className="loginform" id="3">Вы вошли как { this.state.RolUser }!</div>);
    }
}
export default LoginForm;
