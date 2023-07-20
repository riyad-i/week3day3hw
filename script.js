class Governor{
    static termLength= 4
    static salary= 150_000

    static fire(worker){
        console.log(`This worker ${worker} is fired!`);
    }
}

console.log(Governor.termLength);
console.log(Governor.salary);
Governor.fire("Treasurer");






class Person{
    constructor(name, age, height){
        this.name = name;
        this.age = age;
        this.height = height;
    }

    haveBirthday(){
        this.age++
    }

    complain(){ 
    console.log("I wish I was taller");
    this.height--
    }

    sneeze(){
        console.log('achoo');
    }
}


class PostalWorker extends Person{
    constructor(name,age,height){
        super(name,age,height)
    }
    deliverMail(){
        console.log('Mail is delivered');
    }
}


const Dave = new PostalWorker('dave',30, 180);
Dave.sneeze()
console.log(Dave.age);

class Chef extends Person{
    constructor(name,age,height){
        super(name,age,height)
    }
    cookMeal(){
        console.log('Meal has been cooked');
    }
}


const Fred = new Chef('fred',25,175);
const Rog = new PostalWorker('rog', 44, 185);
const Adam = new Chef( 'adam', 26, 162)

Rog.deliverMail()
Fred.cookMeal()
