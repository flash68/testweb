/** Главная форма**/
import React from 'react';
import { render } from 'react-dom';

import Privetstvie from './Privetstvie';

export default class MainView extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({ valueLogin: '', valuePass: '', id: 1 });

        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleUsersChange = this.handleUsersChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlesSubmit = this.handlesSubmit.bind(this);
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


        if(this.state.valuePass == this.props.UserFormAdmins[0].pass && this.state.valueLogin == this.props.UserFormAdmins[0].name){

            this.setState({
                id:3});
        }else {
            this.setState({
                valueLogin: '',
                valuePass: '' });
            alert('Введите еще раз!');
        }
        event.preventDefault();
    }

    handlesSubmit(event) {

        this.setState({
            id:2 });
    }

    render() {
        if (this.state.id == 1) {
            return (
                <div className="userloginform">
                    <label>
                        Логин:<br />
                        <input name="login" value={this.state.valueLogin} type="text" onChange={this.handleUserChange}/><br />
                    </label>
                    <label> Пароль: <br />
                        <input
                            name="pass" value={this.state.valuePass} type="Password"
                            onChange={this.handleUsersChange}
                        /><br />
                        <br /></label>
                    <input className="vhod" onClick={this.handleSubmit} type="submit" value="Войти"/> <br />
                    <input className="reg" onClick={this.handlesSubmit} type="button" value="Регистрация"/> <br />
                </div>
            );
        } else {
            return(
                <Privetstvie id={this.state.id}
                             valuePass={this.state.valuePass}
                             valueLogin={this.state.valueLogin} />
            );
        }
    }
}
