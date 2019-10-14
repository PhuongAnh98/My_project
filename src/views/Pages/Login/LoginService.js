class LoginService {
    login(data) {
        const url =  process.env.REACT_APP_BASE_URL_IMAGE + "/login";
        return fetch(url, {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => res.json());
        
    }
}

export default LoginService;