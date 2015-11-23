interface courseArray {
	[index:number]:string;
}

var courses:courseArray = ["TypeScript Mastery", "Master AngularJS"];
console.log(courses[1]);

interface priceArray {
	[index:string]:number;
}

var coursePrice: priceArray = {};
coursePrice["TypeScript Mastery"] = 10;
coursePrice["Master AngularJS"] = 30;

console.log(coursePrice["Master AngularJS"]);
