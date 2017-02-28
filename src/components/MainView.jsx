/** Главная форма**/
import React from 'react';

class MainView extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({ valueLogin: '', valuePass: '' });

        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleUsersChange = this.handleUsersChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleUserChange(event) {
        this.setState({
            valueLogin: event.target.value });
    }
    handleUsersChange(event) {
        this.setState({
            valuePass: event.target.value });
    }

    handleSubmit(event) {
        console.log(this.state);
        console.log(this.state.valuePass);
        /** alert(`Id равен: ${this.state.pass}`);**/
        event.preventDefault();
    }

    render() {
        return (
            <div className="userloginform" id="1">
                <label>
                Логин:<br />
                <input name="login" value={this.state.valueLogin} type="text" onChange={this.handleUserChange} /><br />
                </label>
                  <label>  Пароль: <br />
                <input name="pass" value={this.state.valuePass} type="Password" onChange={this.handleUsersChange} /><br />
                <br /></label>
                <input className="vhod" onClick={this.handleSubmit} type="submit" value="Войти" /> <br />
                <input className="reg"  type="button" value="Регистрация" /> <br />
            </div>);
    }
}

export default MainView;
