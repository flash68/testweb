import React from 'react';

class LoginForm extends React.Component {
    render() {
        return (<div className="loginform">Вы вошли как { this.state.Rol }!</div>);
    }
}
export default LoginForm;
