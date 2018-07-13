import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Poll} from './Poll';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Poll/>
            </div>
        );
    }
}

export default App;
