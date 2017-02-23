/** Главная форма**/
import React from 'react';

class MainView extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({ login: '', pass: '' });


        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleReg = this.handleReg.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handlePassChange() {
        this.setState({ pass: this.refs.pass.value });
    }
    handleLoginChange() {
        this.setState({ login: this.refs.login.value });
    }
    handleReg() {
        this.setState({ id: 2 });
    }

    handleSubmit() {
      /**  console.log(this.refs.login.value);
        console.log(this.refs.pass.value);
        alert(`A name was submitted: ${this.refs.pass.value}`);**/
        alert(`Id равен: ${this.state.id}`);
        this.setState({ id: this.refs.value });
        event.preventDefault();
    }

    render() {
        return (
            <div className="userloginform">

                Логин:<br />
                <input className="login" ref="login" value={this.state.login} type="text" onChange={this.handleLoginChange} /><br />
                Пароль: <br />
                <input className="pass" ref="pass" value={this.state.pass} type="Password" onChange={this.handlePassChange} /><br />
                <br />
                <input className="vhod" onClick={this.handleSubmit} type="submit" value="Войти" /> <br />
                <input className="reg" id="1" onClick={this.handleReg} type="submit" value="Регистрация" /> <br />

            </div>);
    }
}

export default MainView;
