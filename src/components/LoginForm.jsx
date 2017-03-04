/* Авторизация прошла успешно*/
import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div className="loginform" id="3">Вы вошли как {this.props.valueLogin }!</div>);
    }
}
export default LoginForm;
