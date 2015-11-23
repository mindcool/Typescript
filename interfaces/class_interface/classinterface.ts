interface CourseI {
	courseName: string;
	coursePrice: number;
	setPrice(price:number);
}

class Course implements CourseI {
	courseName: string;
	coursePrice: number;
	setPrice(price:number) {
		this.coursePrice = price;
	}
}

var courseObj = new Course();
courseObj.courseName = "Master TypeScript";
courseObj.setPrice(10);

console.log(courseObj.courseName + ", "+courseObj.coursePrice);