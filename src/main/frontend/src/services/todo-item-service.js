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

class TodoItemDataService {

    async getAllItems() {
        return fetch('http://localhost:8080/api/items').then(checkStatus); 
    }

    async addNewItem(itemContent) {
        return fetch('http://localhost:8080/api/items', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({"itemContent": itemContent})
        })
        .then(checkStatus);
    }

    async updateItem(itemId, itemContent) {
        return fetch('http://localhost:8080/api/items/'+itemId, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify({"itemContent": itemContent})
        })
        .then(checkStatus);
    }

    async deleteItem(itemId) {
        return fetch('http://localhost:8080/api/items/'+itemId, {
            method: 'DELETE'
        })
        .then(checkStatus);
    }

    async markItem(itemId, isMarked) {
        return fetch('http://localhost:8080/api/items/'+itemId+'/mark-item', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify({"isMarked": isMarked})
        })
        .then(checkStatus);
    }
}

export default new TodoItemDataService();