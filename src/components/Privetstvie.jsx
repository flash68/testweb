/* Собирает все */
import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

import MainView from './MainView';
import Reg from './Reg';
import LoginForm from './LoginForm';

const UserFormAdmins = [{
    UserId: 0,
    name: 'admin',
    pass: 'admin',
}];

class Privetstvie extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 1,
            valueLogin: this.props.valueLogin,
            valuePass: this.props.valuePass,
        };
        this.OnReg = this.OnReg.bind(this);
        this.OnVhod = this.OnVhod.bind(this);
        this.User = this.User.bind(this);
    }

    OnReg() {
        this.setState({
            id: 2,
        });
    }

    OnVhod() {
        this.setState({
            id: 3,
        });
    }
    User(){
        this.setState({
            valueLogin: this.state.valueLogin,
            valuePass: this.state.valuePass,
        });
            return (this.state.valueLogin);
}
    render() {
        if (this.state.id === 2) {
            return (
                <div>
                    <Reg
                        OnReg={this.OnReg}
                        OnVhod={this.OnVhod}
                        User={this.User}
                    />
                </div>);
        } else if (this.state.id === 3) {
            return (
                <LoginForm
                    User={this.User}
                    OnVhod={this.OnVhod}
                    valueLogin={this.state.valueLogin}
                />
            );
        }
        return (
            <MainView
                OnReg={this.OnReg}
                OnVhod={this.OnVhod}
                UserFormAdmins={UserFormAdmins}
            />
        );
    }
}

export default Privetstvie;
