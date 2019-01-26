import React from 'react';
import routes from '../routes';
import App from './App';

export default class Root extends React.Component {
    render() {
        return (
            <App>{routes}</App>
        );
    }
}