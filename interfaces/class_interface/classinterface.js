var Course = (function () {
    function Course() {
    }
    Course.prototype.setPrice = function (price) {
        this.coursePrice = price;
    };
    return Course;
})();
var courseObj = new Course();
courseObj.courseName = "Master TypeScript";
courseObj.setPrice(10);
console.log(courseObj.courseName + ", " + courseObj.coursePrice);
