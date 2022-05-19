

const logout = () =>{
    localStorage.removeItem('token');
    localStorage.removeItem('isAdmin');
    window.location.reload();
}

export default logout;