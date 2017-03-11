/** Форма регистрации**/

import React from 'react';

class Reg extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            valueLogin: '',
            valuePass: '',
        });

        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleLoginChange(event) {
        this.setState({
            valueLogin: event.target.value,
        });
    }
    handlePassChange(event) {
        this.setState({
            valuePass: event.target.value,
        });
    }
    handleSubmit() {
        if (this.state.valuePass.length !== 0 && this.state.valueLogin.length !== 0) {
            this.setState({
                valuePass: this.state.valuePass,
                valueLogin: this.state.valueLogin,
            });
            this.props.OnVhod();
        } else {
            this.setState({
                valuePass: '',
                valueLogin: '',
            });
        }
    }
    render() {
        return (
            <div className="regform" id="2">
                    Логин:<br />
                <input
                    className="login" value={this.state.valueLogin} onChange={this.handleLoginChange}
                    type="text"
                /><br />
                    Пароль <br />
                <input
                    className="pass" value={this.state.valuePass} onChange={this.handlePassChange}
                    type="Password"
                /><br />
                <input className="reg" onClick={this.handleSubmit} type="submit" value="Регистрация" /> <br />
            </div>);
    }
}

export default Reg;
