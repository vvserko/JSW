//Создайте структуру с именем train, содержащую поля: 
//название пункта назначения, 
//номер поезда, 
//время отправления. 
//Ввести данные в массив из пяти элементов типа train, .
//упорядочить элементы по номерам поездов. 
//Добавить возможность вывода информации о поезде, номер которого введен пользователем. 
//Добавить возможность сортировки массив по пункту назначения, причем поезда с одинаковыми пунктами назначения должны быть упорядочены по времени отправления.

function Train (punkt_n, train_number, time) {
    this.punkt_n = punkt_n;
    this.train_number = train_number;
    this.time = time;
    this.sort_train_number = function() {
        return this.train_number.sort();
    }
    this.isPerfect = function() {
        return this.rating.every( r => r >=4);
    }
    this.middleRating = function (){
        return this.rating.reduce((r1, r2) => r1 + r2 )/ this.rating.length;
    }
};

const train1 = new Train('Brest', 12, 1300);
const train2 = new Train('Minsk', 22, 1500);
const train3 = new Train('Vitebsk', 32, 1600);

const trains = [train1, train2, train3];
const sort_train_number = trains.sort_train_number();
console.log(sort_train_number);
/*
const best = students.filter( s => s.isPerfect())
best.forEach(s => s.print())
const sortedStudents = students.sort(( s1, s2 ) => s1.middleRating() - s2.middleRating()); 
console.log(sortedStudents);*/

