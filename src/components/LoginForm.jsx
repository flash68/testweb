/* Авторизация прошла успешно*/
import React, { PropTypes } from 'react';
import styles from '../style.css';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            User: this.props.User,
        });
    }
    render() {
        return (<div className={styles.form} id="3"><h3>Вы вошли, ваш Логин {this.state.User.valueLogin}!</h3></div>);
    }
}
export default LoginForm;
LoginForm.propTypes = {
    User: React.PropTypes.shape({
        valueLogin: PropTypes.string,
        valuePass: PropTypes.string,
    }),
};
