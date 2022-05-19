const logout = () =>{
    localStorage.removeItem('token');
    localStorage.removeItem('isAdmin');
    
}

export default logout;