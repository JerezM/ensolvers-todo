import axios from "axios";

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
    return axios.get("http://localhost:8080/api/items").then(checkStatus);
};
