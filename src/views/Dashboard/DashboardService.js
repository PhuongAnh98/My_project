class DashboardService {
    getImages = (userName) => {
        const url = process.env.REACT_APP_BASE_URL_IMAGE + "/imagelist/" + userName;
        console.log(url)
        return fetch(url).then(res => res.json())
    }
    postImages =(userName,data) =>{

        const url = process.env.REACT_APP_BASE_URL_IMAGE + "/rating/" + userName;
        console.log(url)
        return fetch(url, {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => res.json());
    }

    
}

export default DashboardService;