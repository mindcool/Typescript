//Lets define primitive values first
var age = 10;
var name = "Noyan";
var isValid = true;
var courses = ["Javascript", "AngularJS", "NodeJS", "Flux"];
var otherCourses = ["ES6", "Material Design"];
//Typescript introduced types
var feedback;
(function (feedback) {
    feedback[feedback["Poor"] = 1] = "Poor";
    feedback[feedback["Average"] = 3] = "Average";
    feedback[feedback["Good"] = 2] = "Good";
    feedback[feedback["Best"] = 4] = "Best";
})(feedback || (feedback = {}));
;
var opinion = feedback.Best;
var take = feedback[2];
var unknown = "noyan.io";
function errormsg() {
    console.log("Error Occured");
}
console.log(take);
console.log(opinion);
errormsg();
