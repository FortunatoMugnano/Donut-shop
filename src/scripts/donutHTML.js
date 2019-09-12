/*
    It represents what a donut should look like in HTML
*/

const makeDonutHTMLComponent = (donut) => {
    return `
    <div class="donut">
        <h3>${donut.name}</h3>
        <h4>Donut Type:</h4>
        <p>${donut.type}</p>
        <h4>Donut Flavor:</h4>
        <p>${donut.flavor}</p>
        <h4>Donut Glaze:</h4>
        <p>${donut.glaze}</p>
        <h4>Donut Topping:</h4>
        <p>${donut.topping}</p>
        <button id="deleteDonut--${donut.id}" type="button">Delete Donut</button>
        <button id="editDonut--${donut.id}" type="button">Edit Donut</button>
    </div>
    `
}

export default makeDonutHTMLComponent