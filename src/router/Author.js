import { Navigate } from "react-router-dom";
function Author(props){
    let token = localStorage.getItem('token')
    if(token){
        return (
            <div>
                {props.oldComponent}
            </div>
        )
    }
    return <Navigate to={`/login?redircturl=${props.oldPath}`}></Navigate>
}
export default Author;