const token = localStorage.getItem('ejercicio_token');
const admin = localStorage.getItem('ejercicio_admin');

if(!token) {
    window.location.replace('/public');
}

if(admin !== 'true') {
    window.location.replace('/public/welcome.html');
}

async function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        const error = {
            status: response.status,
            statusText: response.statusText,
            response: await response.json(),
        };
        throw error;
    }
}

const request = (url, options = {}) => {
    options.credentials = "include";
    options.mode = "cors";
    options.cache = "default";
    options.body = JSON.stringify(options.body);
    options.headers = {
        ...options.headers,
        "Content-Type": "application/json",
    };

    return new Promise((resolve, reject) => {
        fetch(url, options)
            .then(checkStatus)
            .then((response) => response.json())
            .then((response) => resolve(response))
            .catch((error) => reject(error));
    });
};

request('/user', {
    method: 'GET',
    headers: {
        Authorization: `Bearer ${token}`
    }
}).then(res => {
    console.log(res);
})