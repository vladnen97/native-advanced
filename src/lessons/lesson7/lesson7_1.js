console.log('Lesson 7');

// Task 04
// Реализовать таски 01-03 через функции конструкторы в отдельном JS файле, реализовать наследование


function Animal(name = 'Animal') {
    this.name = name
}
Animal.prototype.walk = function () {return `${this.name} walking`}
Animal.prototype.eat = function () {return `${this.name} eating`}
Animal.prototype.sleep = function () {return `${this.name} sleeping`}


function Monkey(name = 'Monkey') {
    Animal.call(this, name)
    this.name = name
}
Monkey.prototype = Object.create(Animal.prototype)
Object.defineProperty(Monkey.prototype, `constructor`, {value: Monkey, enumerable: false})

Monkey.prototype.roar = function (){return `${this.name} roars`}
Monkey.prototype.climb = function (){return `${this.name} climbing`}

function Human(name = 'Human') {
    Monkey.call(this, name)
    this.name = name
}
Human.prototype = Object.create(Monkey.prototype)
Object.defineProperty(Human.prototype, 'constructor', { value: Human, enumerable: false})

Human.prototype.think = function() { return `${this.name} thinking`}
Human.prototype.speak = function() { return `${this.name} speaking`}

