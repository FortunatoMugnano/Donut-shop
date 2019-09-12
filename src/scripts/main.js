import Dropdown from "./dropdown.js"
import createNewDonut from "./donut.js";
import API from "./DataManager.js";
import addDonutToDOM from "./donutDOM.js";
import editForm from "./editForm.js"

/*
    Make and populate dropdowns with API info when main.js is seen by browser
*/
Dropdown.makeTypesDropDown();
Dropdown.makeFlavorsDropDown();
Dropdown.makeGlazesDropDown();
Dropdown.makeToppingsDropDown();

API.getDonuts().then((allDonuts) => {
    allDonuts.forEach(donut => {
        addDonutToDOM(donut)
    })
})

document.querySelector("#donut-btn").addEventListener("click", () => {


    // 1. needs to get values of the inputs/dropdowns
    // they're stored in variables to use later
    const name = document.querySelector("#name-input").value
    const type = document.querySelector("#type-dropdown").value
    const flavor = document.querySelector("#flavor-dropdown").value
    const glaze = document.querySelector("#glaze-dropdown").value
    const toppings = document.querySelector("#topping-dropdown").value

    // IT'S LATER
    // 2. needs to build a donut object
    const newDonutObj = createNewDonut(name, type, flavor, glaze, toppings)

    // 3. maybe clear inputs?
    document.querySelector("#name-input").value = "";
    // 4. clear donut-container before adding new donut
    document.querySelector("#donut-results").innerHTML = "";

    // 5. I need to save donut to the json
    API.createDonut(newDonutObj).then(() => {


        // 6. get all the donuts again
        API.getDonuts().then((allDonuts) => {
            allDonuts.forEach(donut => {
                // 7. needs to send donut to DOM

                addDonutToDOM(donut)
            })
        })

    })
})

//Let's create the dynamic event for delete button, we are storing it inside the variable RESULTCONTAINER

const resultsContainer = document.querySelector("#donut-results").addEventListener("click", (event) => {
    if (event.target.id.startsWith("deleteDonut--")) {  // if the id starts with deleteDonut--
        // Extract donut id from button's id attribute
        API.deleteDonut(event.target.id.split("--")[1])
            .then(() => {
                // clear donut-container before adding new donut
                document.querySelector("#donut-results").innerHTML = "";
                //  get all the donuts again
                API.getDonuts().then((allDonuts) => {
                    allDonuts.forEach(donut => {
                        //  needs to send donut to DOM

                        addDonutToDOM(donut)
                    })
                })
            })

    } else if (event.target.id.startsWith("editDonut")) {  //Editing a single Donut 
        editForm(event.target.id.split("--")[1])  // Invoke the editForm function from editForm.js, slpitting the content between -- and passing only the second [1] "element" 
    }
})

// We will create an eventListener for the saveDonut button if you modify a donut

document.querySelector("#saveDonut").addEventListener("click", (event) => {
    API.editDonut(document.querySelector("#donutId").value)
        .then((response => {
            document.querySelector("#donutName").value = "";
            document.querySelector("#donut-results").innerHTML = "";
            API.getDonuts().then((allDonuts) => {
                allDonuts.forEach(donut => {
                    addDonutToDOM(donut)
                })
            })

        }))
})

