let defaultState = {
    username:localStorage.getItem('username'),
    token:localStorage.getItem('token')
}

let userReducer = (state,actions)=>{
    switch(actions.type){
        case 'SET_USER_INFO':
            let userState = { ...state }
            userState.username = actions.playload.username
            userState.token = actions.playload.token
            return userState
        default:
            return state
    }
}

export default userReducer;