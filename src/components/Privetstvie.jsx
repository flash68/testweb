/* Собирает все */
import React from 'react';
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

    render() {
        if (this.state.id == 2) {
            return (
                <div>
                    <Reg
                        OnReg={this.OnReg}
                        OnVhod={this.OnVhod}
                    />
                </div>);
        } else if (this.state.id == 3) {
            return (
                <LoginForm
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
