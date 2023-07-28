import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import store from './store';
// import { logout4XJ } from '@mz/flyme-auth';
// import { getToken, jumpToSSOLogin } from '@upu/auth';
const { dispatch } = store;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// const token = getToken();
// if (!token) {
//   // 此处跳转到node服务登录页
//   jumpToSSOLogin();
// } else {
dispatch.user.incrementAsync();
// }
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  // </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
