/* Авторизация прошла успешно*/
import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            User: this.props.User,
        });
    }
    render() {
        return (<div className="loginform" id="3"><h3>Вы вошли, ваш Логин {this.state.User.valueLogin}!</h3></div>);
    }
}
export default LoginForm;
LoginForm.propTypes = {
    User: React.PropTypes.arrayOf.isRequired,
};
