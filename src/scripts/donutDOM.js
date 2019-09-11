import makeDonutHTMLComponent from "./donutHTML.js"

// Function that adds donut HTML components to the DOM
const addDonutToDOM = (donutObj) => {
    document.querySelectorAll(".donut-container")[1].innerHTML += makeDonutHTMLComponent(donutObj)
}

export default addDonutToDOM