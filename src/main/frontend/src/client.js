
const checkStatus = response => {
    if (response.ok) {
        return response;
    } else {
        let error = new Error(response.statusText);
        error.response = response;
        response.json().then(e => {
            error.error = e;
        });
        return Promise.reject(error);
    }
}

export const getAllItems = () => {
    return fetch("http://localhost:8080/api/items").then(checkStatus);
};

export const addNewItem = (itemContent) => {
    fetch('http://localhost:8080/api/items', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({"itemContent": itemContent})
    })
    .then(checkStatus);
}

export const markItem = (itemId, isMarked) => {
    fetch('http://localhost:8080/api/items/'+itemId+'/mark-item', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({"isMarked": isMarked})
    })
    .then(checkStatus);
}
