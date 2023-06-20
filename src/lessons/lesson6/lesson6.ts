console.log('Lesson 6');

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA

// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.
class Student {
    private name: string;
    private group: number;
    private performance: number[];

    constructor(name: string, group: number, performance: number[]) {
        this.name = name
        this.group = group
        this.performance = performance
    }
    showBest(): void {
        if (this.performance.every(el => el >= 4)) console.log(`name: ${this.name}; group: ${this.group}`)
    }
}

// Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию

// Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.
class Customer {
    private firstName: string
    private lastName: string
    private address: string
    private bankAccount: number
    constructor(firstName: string, lastName: string, address: string, bankAccount: number) {
        this.firstName = firstName
        this.lastName = lastName
        this.address = address
        this.bankAccount = bankAccount
    }

    public get name() {
        return this.firstName
    }
    public get surname() {
        return this.lastName
    }
    public get addres() {
        return this.address
    }
    public get bankCard() {
        return this.bankAccount
    }

    public set name(name) {
        this.firstName = name
    }
    public set surname(surname) {
        this.lastName = surname
    }
    public set addres(address) {
        this.address = address
    }
    public set bankCard(bankCard) {
        this.bankAccount = bankCard
    }

    public customerInfo() {
        console.log(`name: ${this.firstName} ${this.lastName}\naddress: ${this.address}\nbank account: ${this.bankAccount}`)
    }
}

// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.
class Car {
    public brand: string;
    private cylindersCount: number;
    private hp: number;
    constructor(brand: string, cylindersCount: number, hp: number) {
        this.brand = brand
        this.cylindersCount = cylindersCount
        this.hp = hp
    }
}

class Truck extends Car {
    private carrying;
    constructor(brand: string, cylindersCount: number, hp: number, carrying: number) {
        super(brand, cylindersCount, hp);
        this.carrying = carrying
    }
    changeBrand(newBrand: string) {
        this.brand = newBrand
    }
    changeCarrying(newCarrying: number) {
        this.carrying = newCarrying
    }
}
// just a plug
export default () => {
};