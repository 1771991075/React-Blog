import { legacy_createStore as createStore , compose , combineReducers ,applyMiddleware} from 'redux';
//引入中间件
import ReduxThunk from 'redux-thunk';

let reducer = combineReducers({
    
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// 创建仓库
let store = createStore(reducer,composeEnhancers(applyMiddleware(ReduxThunk)))

export default store;