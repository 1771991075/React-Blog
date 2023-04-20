import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import store from './redux';
import zhCN from 'antd/lib/locale/zh_CN';
import 'moment/locale/zh-cn';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
        <ConfigProvider locale={zhCN}>
            <Provider store={store}>
                <App />
            </Provider>
        </ConfigProvider>
    </HashRouter>
);
