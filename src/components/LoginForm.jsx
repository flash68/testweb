/* Авторизация прошла успешно*/
import React from 'react';

class LoginForm extends React.Component {
      render() {
        console.log(this.props.User.valueLogin);
        return (<div className="loginform" id="3">Вы вошли как {this.props.valueLogin}!</div>);
    }
}
export default LoginForm;
LoginForm.propTypes = {
    valueLogin: React.PropTypes.string.isRequired,
    valuePass: React.PropTypes.string.isRequired,
};
