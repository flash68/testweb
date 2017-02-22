/** Форма регистрации**/

import React from 'react';

class Reg extends React.Component {
    render() {
        return (
            <div className="regform" id="2" >
                Логин:<br />
                <input className="login" ref="login" type="text" /><br />
                Пароль<br />
                <input className="pass" ref="pass" type="Password" /><br />
                <input className="reg" onClick={this.handleSubmit} type="submit" value="Регистрация" /> <br />
            </div>);
    }
}

export default Reg;
