/**
 * Created by Алексей on 15.02.2017.
 */
import React from 'react';

class Reg extends React.Component {
    render() {
        return (<div className="regform" id="2">

                Логин:<br />
            <input className="login" ref="login" type="text" /><br />
                Пароль: <br />
            <input className="pass" ref="pass" type="Password" /><br />
            <br />
            <input className="reg" onClick={this.handleClick} type="submit" value="Регистрация" /> <br />
        </div>);
    }
}

export default Reg;
