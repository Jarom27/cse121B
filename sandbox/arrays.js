const array = ["one", "two", "three"];

const map_array = array.map(value => `<li>${value}</li>`);
document.getElementById("myList").innerHTML = map_array.join();

const letterGrades = ["A", "B", "A"];

function convertGrades(letter) {
    if (letter == "A") {
        return 4;
    }
    else if (letter == "B") {
        return 3;
    }

}
const convert_letters = letterGrades.map(convertGrades);