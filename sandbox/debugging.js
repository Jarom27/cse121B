const PI = 3.14;
let radius = 3;
let area = 0;
area = circleArea(radius)
console.log("Area1:", area);
radius = 4;
area = circleArea(radius)
console.log("Area1:", area);

function circleArea(radius) {
    return radius * radius * PI
}