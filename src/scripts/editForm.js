/* 
Responsible for displaying data from database within input fields
*/

import API from "./DataManager.js"

const editForm = (donutId) => {
    let hiddenDonutId = document.querySelector("#donutId")
    let editDonutName = document.querySelector("#donutName")

    API.getSingle(donutId)
    .then(response => {
        hiddenDonutId.value = donutId;
        editDonutName.value = response.name;
    })
}

export default editForm