// Function that builds the donut
const createNewDonut = (name, type, flavor, glaze, topping) => {
    const newDonut = {
        name: name,
        type: type,
        flavor: flavor,
        glaze: glaze,
        topping: topping
    }
    return newDonut
}

export default createNewDonut