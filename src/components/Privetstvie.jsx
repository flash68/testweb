/* Собирает все */
import React from 'react';

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
            valueLogin: '',
            valuePass: '',
        };
        this.onReg = this.onReg.bind(this);
        this.onVhod = this.onVhod.bind(this);
    }

    onReg() {
        this.setState({
            id: 2,
        });
    }

    onVhod() {
        this.setState({
            id: 3,
        });
    }
    render() {
        if (this.state.id === 2) {
            return (
                <div>
                    <Reg
                        onReg={this.onReg}
                        onVhod={this.onVhod}
                    />
                </div>);
        } else if (this.state.id === 3) {
            return (
                <LoginForm
                    onVhod={this.onVhod}
                    valueLogin={this.state.valueLogin}
                />
            );
        }
        return (
            <MainView
                onReg={this.onReg}
                onVhod={this.onVhod}
                UserFormAdmins={UserFormAdmins}
            />
        );
    }
}

export default Privetstvie;
