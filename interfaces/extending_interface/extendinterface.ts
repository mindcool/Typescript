interface Person {
	name: string;
}

interface Student extends Person {
	rollNumber: number;
}

var studentObj = <Student>{};
studentObj.name = "John";
studentObj.rollNumber = 1;

console.log(studentObj.name);