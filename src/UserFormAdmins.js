/**
 * Created by Алексей on 13.02.2017.
 */
/*все приложение*/
'use strict';
import React from 'react';
import { render } from 'react-dom';

export default class UserFormAdmins extends React.Component {
    constructor() {
        super();
            this.state = {
                UserFormAdmins: [{
                    id: 0,
                    name: 'ad',
                    pass: 'min',
                    Rol: 'user'
                }, {
                    id: 1,
                    name: 'admin',
                    pass: 'admin',
                    Rol: 'admin'
                }],
            }

}
}
