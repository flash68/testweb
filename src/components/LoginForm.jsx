/* Авторизация прошла успешно*/
import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            valueLogin: this.props.valueLogin,
            valuePass: this.props.valuePass,
        });
    }
    render() {
        return (<div className="loginform" id="3"><h3>Вы вошли!</h3></div>);
    }
}
export default LoginForm;
LoginForm.propTypes = {
    valueLogin: React.PropTypes.string.isRequired,
    valuePass: React.PropTypes.string.isRequired,
};
