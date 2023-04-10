let defaultState = {
    blogTitle:'所有博客'
}

let userReducer = (state=defaultState,actions)=>{
    switch(actions.type){
        case 'SET_BLOG_TITLE':
            let titleState = { ...state }
            titleState.blogTitle = actions.playload.blogTitle
            return titleState
        default:
            return state
    }
}

export default userReducer;