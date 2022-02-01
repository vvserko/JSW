function Student (firstname, lastname, group_namber, rating) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.group_namber = group_namber;
    this.rating = rating;
    this.print = function() {
        console.log(`${this.lastname} - ${this.group_namber}`)
    }
    this.isPerfect = function() {
        return this.rating.every( r => r >=4);
    }
    this.middleRating = function (){
        return this.rating.reduce((r1, r2) => r1 + r2 )/ this.rating.length;
    }
};

const student1 = new Student('Vasia1', 'Pupkin1', 12, [20,5,6,48,5]);
const student2 = new Student('Vasia2', 'Pupkin2', 22, [20,5,6,48,5]);
const student3 = new Student('Vasia3', 'Pupkin3', 32, [20,5,6,48,5]);
const student4 = new Student('Vasia4', 'Pupkin4', 44, [20,7,6,48,5]);
const student5 = new Student('Vasia5', 'Pupkin5', 55, [20,5,2,48,5]);
const student6 = new Student('Vasia6', 'Pupkin6', 66, [20,5,1,48,5]);
const student7 = new Student('Vasia7', 'Pupkin7', 77, [3,5,6,48,5]);


const students = [student1, student2, student3,student4,student5,student6, student7];
const best = students.filter( s => s.isPerfect())
best.forEach(s => s.print())
const sortedStudents = students.sort(( s1, s2 ) => s1.middleRating() - s2.middleRating()); 
console.log(sortedStudents);

