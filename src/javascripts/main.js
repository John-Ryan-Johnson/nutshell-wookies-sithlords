import firebase from 'firebase/app';
import 'bootstrap';
import apiKeys from './helpers/apiKeys.json';
import authData from './helpers/data/authData';
import logoutButton from './components/logout/logout';
import authActions from './components/Auth/auth';
import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  authData.checkLoginStatus();
  authActions.loginButton();
  logoutButton.logoutEvent();
};

init();
