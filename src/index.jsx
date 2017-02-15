import React from 'react';
import { render } from 'react-dom';

import MainView from './components/MainView';
import LoginForm from './components/LoginForm';
import Reg from './components/Reg';

render(<LoginForm />,
    document.getElementById('root'));
