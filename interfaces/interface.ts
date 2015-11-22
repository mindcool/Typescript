var course = {
	name: "Typescript Mastery",
	publisher: "Noyan",
	price: 10,
	isPublished: false
};

interface CourseI {
	name:string,
	publisher:string,
	price:number,
	isPublished: boolean
}

var courseObj:CourseI = {
	name: "Interface Mastery",
	publisher: "Noyan Press",
	price: 40,
	isPublished: false
}

console.log("Course Name: "+ courseObj.name + " Course Price: " + courseObj.price);

function coursePrice(courseObj:{price:number}){
	console.log(courseObj.price);
}

coursePrice(courseObj);