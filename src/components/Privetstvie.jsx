/* Собирает все */
import React from 'react';
import { render } from 'react-dom';

import MainView from './MainView';
import Reg from './Reg';
import LoginForm from './LoginForm';

const UserFormAdmins = [{
    UserId: 0,
    name: 'admin',
    pass: 'admin' }];

class Privetstvie extends React.Component {
    constructor(props) {
        super(props);
        this.state = { id: this.props.id,
            valueLogin: this.props.valueLogin,
            valuePass: this.props.valuePass };
    }

    render() {
        if (this.state.id == 2) {
            return (<div>
                <Reg id={this.state.id} />
            </div>);
        } else if (this.state.id == 3) {
            return (
                <LoginForm  valueLogin={this.state.valueLogin} />
            );
        }


        return (
            <MainView id={1} UserFormAdmins={UserFormAdmins} />

        );
    }
}
export default Privetstvie;
