var course = {
    name: "Typescript Mastery",
    publisher: "Noyan",
    price: 10,
    isPublished: false
};
var courseObj = {
    name: "Interface Mastery",
    publisher: "Noyan Press",
    price: 40,
    isPublished: false,
    author: "Noyan"
};
console.log("Course Name: " + courseObj.name + " Course Price: " + courseObj.price + " Author:" + courseObj.author);
function coursePrice(courseObj) {
    console.log(courseObj.price);
}
coursePrice(courseObj);
