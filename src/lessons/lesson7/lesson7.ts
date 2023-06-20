console.log('Lesson 7');

// __Proto__
// https://learn.javascript.ru/prototype-inheritance
// https://habr.com/ru/post/518360/
// https://learn.javascript.ru/native-prototypes

// Prototype
// https://learn.javascript.ru/function-prototype
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype


// https://www.youtube.com/watch?v=aQkgUUmUJy4&t=21s
// https://www.youtube.com/watch?v=b55hiUlhAzI


//Task 01
// Реализовать класс Animal который принимает name(по умолчанию 'Animal') в качестве параметра, у которого будет 3
// метода walk, eat, sleep - каждый метод должен выводить в консоль строку имя + действие. Пример:
// walk => `${this.name} walking`
// проверить, что методы работают
class Animal {
    protected name: string;
    constructor(name = 'Animal') {
        this.name = name
    }
    public walk() {
        return `${this.name} walking`
    }
    public eat() {
        return `${this.name} walking`
    }
    public sleep() {
        return `${this.name} walking`
    }
}


//Task 02
// Реализовать класс Monkey на базе класса Animal,  конструктор принимает name(по умолчанию 'Monkey') в качестве
// параметра, реализовать методы roar и climb аналогично классу Animal
// проверить, что все методы работают
class Monkey extends Animal {
    constructor(name = 'Monkey') {
        super(name);
        this.name = name
    }
    roar() {
        return `${this.name} roars`
    }
    climb() {
        return `${this.name} climbing`
    }
}
const monkey = new Monkey()

//Task 03
// Реализовать класс Human на базе класса Monkey, конструктор принимает name(по умолчанию 'Human') в качестве
// параметра, реализовать методы speak и think аналогично классу Animal
// проверить, что все методы работают
class Human extends Monkey {
    constructor(name = 'Human') {
        super(name);
        this.name = name
    }
    speak() {
        return `${this.name} speaking`
    }
    think() {
        return `${this.name} thinking`
    }
}

const human = new Human()


// Task 04
// Реализовать таски 01-03 через функции конструкторы в отдельном JS файле, реализовать наследование


// Task 05
// Используя метод Apply реализовать свой собственный метод bind

const bind = (fn, context, ...boundArgs) => (...args) =>
    fn.apply(context, [...boundArgs, ...args]);

// just a plug
export default () => {};