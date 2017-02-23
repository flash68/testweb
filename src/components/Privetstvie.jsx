/* Собирает все */
import React from 'react';
import { render } from 'react-dom';

import MainView from 'MainView';
import LoginForm from 'LoginForm';
import Reg from 'Reg';


class Privetstvie extends React.Component {

    constructor() {
        super();
        const id = 1;
        this.state = { step: 1 };
    }
    nextStep() {
        this.setState({
            step: this.state.step + 1,
        });
    }


    func =()=> {
        switch (this.state.step) {
        case 1:
            return <LoginForm />;
        case 2:
            return <Reg />;
        case 3:
            return <MainView />;
        }
    };
    render() {
        return (
            <main>
                <span>Step {this.state.step}</span>
                {this.state.func()}
            </main>
        );
    }
}
export default Privetstvie;
