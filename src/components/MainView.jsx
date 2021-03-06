/** Главная форма**/
import React, { PropTypes } from 'react';
import styles from '../style.css';

export default class MainView extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            id: 1,
            valueLogin: '',
            valuePass: '',
        });
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleUsersChange = this.handleUsersChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUserChange(event) {
        this.setState({
            valueLogin: event.target.value,
        });
    }

    handleUsersChange(event) {
        this.setState({
            valuePass: event.target.value,
        });
    }


    handleSubmit(event) {
        if (this.state.valuePass === this.props.UserFormAdmins[0].pass && this.state.valueLogin === this.props.UserFormAdmins[0].name) {
            const user = {
                login: this.state.valueLogin,
                pass: this.state.valuePass,
            };
            this.props.onVhod(user);
        } else {
            this.setState({
                valueLogin: '',
                valuePass: '',
            });
            alert('Введите еще раз!');
        }
        event.preventDefault();
    }

    render() {
        return (
            <div className={styles.form}>
                <p>
                    Логин:<br />
                    <input
                        name="login" value={this.state.valueLogin} type="text"
                        onChange={this.handleUserChange}
                    /><br />
                </p>
                <p> Пароль: <br />
                    <input
                        name="pass" value={this.state.valuePass} type="Password"
                        onChange={this.handleUsersChange}
                    />
                    <br />
                    <br />
                </p>
                <input className="vhod" onClick={this.handleSubmit} type="submit" value="Войти" /> <br />
                <input className="reg" onClick={this.props.onReg} type="button" value="Регистрация" /> <br />
            </div>
        );
    }
}
MainView.propTypes = {
    onVhod: PropTypes.func,
    onReg: PropTypes.func,
    UserFormAdmins: PropTypes.arrayOf(
    PropTypes.shape({
        UserId: PropTypes.number,
        name: PropTypes.string,
        pass: PropTypes.string,
    }),
    ),
};
