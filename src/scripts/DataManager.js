/*
    Resposible for ANY calls made to the database
*/

const API = {
    getTypes: () => {
        return fetch("http://localhost:8088/types")
            .then(response => response.json())
    },
    getFlavors: () => {
        return fetch("http://localhost:8088/flavors")
            .then(response => response.json())
    },
    getGlazes: () => {
        return fetch("http://localhost:8088/glazes")
            .then(response => response.json())
    },
    getToppings: () => {
        return fetch("http://localhost:8088/toppings")
            .then(response => response.json())
    },
    getDonuts: () => {
        return fetch("http://localhost:8088/donuts")
            .then(response => response.json())
    },
    createDonut: (tacoDonut) => {
        return fetch("http://localhost:8088/donuts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tacoDonut)
        })
    }
}

export default API