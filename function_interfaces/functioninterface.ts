interface courseSummary{
	(courseId:number, coursePublisher:string):string
}

//Creating a variable implementing the interface
var summary: courseSummary;

summary = function(id: number, publisher: string) {
	if(id === 1) {
		return publisher + " Price 10 USD";
	} else {
		return publisher + "Price N/A";
	}
}

console.log(summary(1, "Noyan Publishing"));