import { legacy_createStore as createStore , compose , combineReducers ,applyMiddleware} from 'redux';
//引入中间件
import ReduxThunk from 'redux-thunk';
//引入userReducer
import userReducer from './reducer/userReducer';
import blogTitleReducer from './reducer/blogTitleReducer';

let reducer = combineReducers({
    userReducer,
    blogTitleReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// 创建仓库
let store = createStore(reducer,composeEnhancers(applyMiddleware(ReduxThunk)))

export default store;