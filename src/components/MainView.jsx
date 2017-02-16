/**Главная форма**/
import React from 'react';

class MainView extends React.Component {
    render() {
        return (<div className="userloginform">

                Логин:<br />
                <input className="login" ref="login" type="text" /><br />
                Пароль: <br />
                <input className="pass" ref="pass" type="Password" /><br />

            <br />
            <input className="vhod" onClick={this.handleClick} type="submit" value="Войти" /> <br />
            <input className="reg" onClick={this.handleClick} type="submit" value="Регистрация" /> <br />
        </div>);
    }
}

export default MainView;
