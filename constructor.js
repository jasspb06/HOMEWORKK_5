class Course{
    constructor(course,[teacherName],courseNumber){
        this.course=course;
        this.teacherName=[teacherName];
        this.courseNumber=courseNumber;

    }
}
const math101 = new Course("Math 101", ["Albert Einstein"], 100);
const computerScience301 = new Course("Introduction to Computer Science", ["Dr. Zeus", "Mark Zuckerberg"], 300);
const socialStudies201 = new Course("Intro to Social Studies",["Steve Wozniak", "Brian Stevens"], 200);
class School{
    constructor(courses){
        this.courses=[courses];
    }
    addCourse(course){
        this.courses.push(course);
        return this;
    }
    findBy(Name){
        let searchResult=[];
        for(let courses of this.courses)
        {
            if(Name==courses)
            {
                searchResult.push(course);
            }
            
        }
        return searchResult;
    }
    List(){
        return this.courses;
    }
}
const codecore = new School();

console.log(codecore.addCourse(math101).addCourse(computerScience301).addCourse(socialStudies201))

console.log(codecore.findBy('math'))
console.log(codecore.List())
