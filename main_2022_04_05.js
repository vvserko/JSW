class Figure{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.name = 'Figure';
    }
    draw(){
        console.log( `${this.name} x = ${x}: y = ${y}`);
    }
    are(){
        return 0;
    }
}
class Rectangle extends Figure{
    constructor(x, y, a, b){
        super(x,y);
        this.a = a;
        this.b = b;
    }
    area(){
        console.log(`area = ${this.a * this.b}`);
        return this.a * this.b;
        
    }
    perimetr(){
        return 
    }
}
class Square extends Rectangle{
    constructor(a){
        super(x, y, a, a)
    }    
}
class Circle extends Figure{
    constructor(x,y,r){
        super(x,y);        
        this.r = r;
    }
    area(){
        return Math.PI*this.r**2;
    }
}

const fig = new Figure(1,2), ;