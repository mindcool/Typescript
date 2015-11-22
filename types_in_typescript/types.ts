//Lets define primitive values first
var age: number = 10;
var name: string = "Noyan";
var isValid: boolean = true;
var courses: string[] = ["Javascript", "AngularJS", "NodeJS", "Flux"];
var otherCourses: Array<string> = ["ES6", "Material Design"];

//Typescript introduced types
enum feedback {Poor=1, Average=3, Good=2, Best=4};
var opinion: feedback = feedback.Best;
var take:string = feedback[2];

var unknown: any = "noyan.io";
function errormsg(): void {
	console.log("Error Occured");
}

console.log(take);
console.log(opinion);
errormsg();