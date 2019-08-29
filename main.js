function calculate(n1,n2, cb) {
    return cb(n1,n2);
};

const multiply = (a,b) => {
    return a * b;
}
const divide = (a,b) => {
    return a / b;
}
const multiplied = calculate(4,2, multiply);
const divided = calculate(4,2, divide);

const foo = {};
foo.data = 100;
foo.printData = function() {console.log(this.data)};
foo.printData();

let test = foo.printData;
test();
let person = {
    heightInCm: 175,
    weightInKg: 65
}
//BMI = kg/m2 
person.bmi = function() {
    return this.weightInKg/ (this.heightInCm/100*this.heightInCm/100);
}

console.log(person.bmi());