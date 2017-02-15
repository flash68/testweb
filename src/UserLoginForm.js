/**
 * Created by Алексей on 13.02.2017.
 */

'use strict';
/*регистрация*/
import React from 'react';
import { render } from 'react-dom';
/*import  {UserFormAdmins}  from 'UserFormAdmins';*/

export default class UserLoginForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {Rol: '', n: '',newrol:''};
        this.state.UserFormAdmins=[{
            id: 0,
            name: 'ad',
            pass: 'min',
            Rol: 'user'
        }, {
            id: 1,
            name: 'admin',
            pass: 'admin',
            Rol: 'admin'
        }];
        this.handleSubmit = this.handleSubmit.bind(this);
    }

     handleSubmit()
        {

            const pass = ReactDOM.findDOMNode(this.refs.pass).value;
            const login = ReactDOM.findDOMNode(this.refs.login).value;

            for (let i in this.state.UserFormAdmins) {
                if (!(pass == this.state.UserFormAdmins[i].pass && login == this.state.UserFormAdmins[i].name)) {

                    let n = "1";
                    this.state.Rol = this.state.UserFormAdmins[i].Rol;
                    React.render(<LoginForm />, mount);
                }
            }
            if (n == "0") {
                this.state.UserFormAdmins.push({
                    id: 2,
                    name: login,
                    pass: pass,
                    Rol: 'newuser'
                });

                //     var newname=this.props.UserFormAdmins[this.props.UserFormAdmins.length-1].name;
                //   var newpass=this.props.UserFormAdmins[this.props.UserFormAdmins.length-1].pass;
                this.state.newrol = this.state.UserFormAdmins[this.state.UserFormAdmins.length - 1].Rol;

           /*     React.render
                {
                    return <LoginForm Rol={this.state.newrol}/>
                }*/
            }

    }
    render() {
       return ( <div className="userloginform">
            <label>
                Логин:<br/>
                <input className="login" ref ="login" type="text" /><br/>
                Password: <br/>
                <input className="pass" ref="pass" type="Password" /><br/>
            </label><br/>
            <button className="vhod" onClick={() => this.handleSubmit} type="submit" value="Войти" /> <br/>
        </div>
       );
    }
};