import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';
import 'semantic-ui-css/semantic.min.css';


const config = { apiKey: "AIzaSyDzxM1wbw6DTE9xnNaXFZcTBYus64o7NP4",
    authDomain: "react-memo-test.firebaseapp.com",
    databaseURL: "https://react-memo-test.firebaseio.com",
    projectId: "react-memo-test",
    storageBucket: "react-memo-test.appspot.com",
    messagingSenderId: "979339967765"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
