/** Форма регистрации**/

import React from 'react';
import Privetstvie from './Privetstvie';
class Reg extends React.Component {
    constructor(props){
             super(props);
              this.state = ({valueLogin: '', valuePass: '',id: this.props.id});

        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
}
    handleLoginChange(event) {
        this.setState({
            valueLogin: event.target.value });
    }
    handlePassChange(event) {
        this.setState({
            valuePass: event.target.value });
    }
    handleSubmit(event) {
        if(this.state.valuePass.length != 0 && this.state.valueLogin.length != 0) {
            this.setState({
                id: 3,
                valuePass: this.state.valuePass,
                valueLogin: this.state.valueLogin
            });

    }else {
            this.setState({
                valuePass: '',
                valueLogin: '' });
        }
    }
    render() {
        if (this.state.id == 2) {
            return (
                <div className="regform" id="2">
                    Логин:<br />
                    <input className="login" value={this.state.valueLogin} onChange={this.handleLoginChange}
                           type="text"/><br />
                    Пароль<br />
                    <input className="pass" value={this.state.valuePass} onChange={this.handlePassChange}
                           type="Password"/><br />
                    <input className="reg" onClick={this.handleSubmit} type="submit" value="Регистрация"/> <br />
                </div>);

        }else {
            return(
                <Privetstvie id={this.state.id}
                             valuePass={this.state.valuePass}
                             valueLogin={this.state.valueLogin} />
            );

        }
    }
}

export default Reg;