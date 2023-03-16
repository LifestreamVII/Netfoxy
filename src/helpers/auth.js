const isLogged = () => {
    let flag = false;
    sessionStorage.getItem("username") ? flag=true : flag=false
    return flag;
}
const getUsername = () => {
    let username = false;
    sessionStorage.getItem("username").length > 0 ? username = sessionStorage.getItem("username") : username = username;
    return username;
}
const getStatus = () => {
    let status = false;
    sessionStorage.getItem("status") ? status = sessionStorage.getItem("status") : status = status;
    return status;
}

function auth() {
  return {isLogged, getUsername, getStatus}
}

export default auth