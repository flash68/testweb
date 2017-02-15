/**
 * Created by Алексей on 13.02.2017.

'use strict';
/*место отображения логина и пароля*/
import React from 'react';
import { render } from 'react-dom';
/*import { Rol } from './UserLoginForm.js';*/

class LoginForm extends React.Component {
    render() {
        return (
            <div className="loginform">
                Вы вошли как { this.state.Rol }!
            </div>);
    }

}

export default LoginForm;