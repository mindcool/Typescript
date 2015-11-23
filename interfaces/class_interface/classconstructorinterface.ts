interface SubjectI {
	new(subjectName:string)
}

class Subject {
	subjectName:string;
	constructor(subjectName:string) {
		this.subjectName = subjectName;
	}
}

var subClass:SubjectI = Subject;
var obj = new subClass("TypeScript Mastery");
console.log(obj);
console.log(obj.subjectName);