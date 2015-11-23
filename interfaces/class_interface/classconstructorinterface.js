var Subject = (function () {
    function Subject(subjectName) {
        this.subjectName = subjectName;
    }
    return Subject;
})();
var subClass = Subject;
var obj = new subClass("TypeScript Mastery");
console.log(obj);
console.log(obj.subjectName);
