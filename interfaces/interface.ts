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
	isPublished: boolean,
	
	//Optional Property
	author?: string
}

var courseObj:CourseI = {
	name: "Interface Mastery",
	publisher: "Noyan Press",
	price: 40,
	isPublished: false,
	author: "Noyan"
}

console.log("Course Name: "+ courseObj.name + " Course Price: " + courseObj.price +" Author:"+ courseObj.author);

function coursePrice(courseObj:{price:number}){
	console.log(courseObj.price);
}

coursePrice(courseObj);