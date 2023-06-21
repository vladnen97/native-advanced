// Task 1
// Есть некоторая строка (const str = 'fgfggg';), что будет, если мы возьмем str[0]
const str = 'fgfggg'
// console.log(str[0] === 'f')

// Task 2
// Реализуйте необходимый код, что бы выражение (2).plus(3).minus(1) сработало и вернуло 4
function plus(a) {
    return this + a
}

function minus(a) {
    return this - a
}

Number.prototype.plus = plus
Number.prototype.minus = minus


// Task 3
// Реализуйте функцию, которая принимает следующие аргументы (строки) '*', '1', 'b', '1c', и возвращает строку '1*b*1c'
const joinA = (simbol, ...args) => {
    return args.join(simbol)
}


// Task 4
// Напишите функцию которая найдет сумму всех вершин в структуре данны типа tree
// Рекурсивно
// В цикле

const tree = {
    valueNode: 3,
    next: [{
        valueNode: 1,
        next: null
    },
        {
            valueNode: 3,
            next: null
        },
        {
            valueNode: 2,
            next: null
        },
        {
            valueNode: 2,
            next: [
                {
                    valueNode: 1,
                    next: null
                },
                {
                    valueNode: 5,
                    next: null
                }
            ]
        }]
};

function findVertexSum(obj) {
    let value = obj.valueNode
    if (obj.next) {
        if (Array.isArray(obj.next)) {
            value += obj.next.reduce((acc, el) => acc + findVertexSum(el), 0)
        }
    }
    return value
}

// Task 5
// исправить код, что бы работал правильно

// for (let i = 0; i < 10; i++) {
// 	setTimeout(function () {
// 		console.log(i);
// 	}, 100);
// }

// Task 6
// Реализуйте функцию Foo, что бы все корректно работало

function Book(name, author) {
    this.name = name;
    this.author = author;
    return this;
}

function Foo(Constr, name, author) {
    return new Constr(name, author)
}

const test = Foo(Book, 'Учебник javascript', 'Петр Сергеев')
const book = Foo(Book, 'js', 'petr');

// console.log(book.name);
// console.log(test.author);

// Task 7
// Реализовать функцию f: f(2, 3) -> 5, при вызове f(2)(3), тоже вернет 5
function f() {
    const [first, second] = arguments
    if (arguments.length === 1) return (second) => f(first, second)
    return first + second
}


// Task 8
// Реализовать функцию f: f(1)(2)(3)() -> 6, f(0)(3)(1)(5)() -> 8
const f1 = (...args) => {
    return x => {
        if (!x && x !== 0) {
            return args.reduce((acc, a) => {
                return acc + a
            }, 0);
        }
        return f1(...args, x);
    };
};


// Task 9
// Реализовать функции seven, plus, one, five, minus, two так, что бы следующие вызовы работали seven(plus(one())) -> 8. five(minus(two())) -> 3
function plus1(num1, num2) {
	if (!num2 && num2 !== 0) {
		return (b) => plus1(num1, b)
	}
	return num2 + num1
}
function minus1(num1, num2) {
	if (!num2 && num2 !== 0) {
		return (b) => minus1(num1, b)
	}
	return num2 - num1
}

function seven() {
	if (arguments[0]) {
		return arguments[0](7)
	}
	return 7
}
function one() {
	if (arguments[0]) {
		return arguments[0](1)
	}
	return 1
}
function five() {
	if (arguments[0]) {
		return arguments[0](5)
	}
	return 5
}
function two() {
	if (arguments[0]) {
		return arguments[0](2)
	}
	return 2
}

// Task 10
// Реализовать функцию сортировки массива пузырьком
function bubbleSorting(arr) {
	for (let j = 0; j < arr.length - 1; j++) {
		let isSorted = true;

		for (let i = 0; i < arr.length - 1 -j; i++) {

			if (arr[i] > arr[i + 1]) {
				isSorted = false;

				[arr[i + 1], arr[i]] = [arr[i], arr[i + 1]]
			}
		}
		if(isSorted) break;
	}
}


// Task 12
// Необходимо написать функцию, принимающую в аргументах массив целых чисел и возвращающую новый массив, состоящий только из уникальных значений первого массива.
function unique(arr) {
	return [...new Set(arr)]
}

// Task 13
// Написать функцию, принимающую аргументом массив чисел и возвращающую новый массив, состоящий из удвоенных значений первого.
// f([1, 2, null, 7, 8, null, 3]); // => [2, 4, 14, 16, 6]
function double(arr) {
	return arr.map(el => typeof el === 'number' ? el * 2 : el).filter(el => el)
}

// Task 14
// Необходимо написать функцию, возвращающую значения всех вершин дерева
// getTreeValues(tree); // => [1, 2, 3, 4, 5, 6, 7]

const tree2 = {
    value: 1,
    children: [
        {
            value: 2,
            children: [
                {value: 4},
                {value: 5},
            ]
        },
        {
            value: 3,
            children: [
                {value: 6},
                {value: 7},
            ]
        }
    ]
};

function getTreeValues(tree) {
    let values = [ tree.value ];

    if (Array.isArray(tree.children)) {
        tree.children.forEach(item => values = values.concat(getTreeValues(item)));
    }

    return values;
}


// Task 16
// Надо реализовать «бомбу» (в виде функции-конструктора), которая получает на входе время, через которое взорвется и
// некоторый «звук взрыва» (строку, которую вернет через заданное время).
function Bomb(message, delay) {
    this.message = message;

    setTimeout(this.blowUp.bind(this), delay * 1000); // взрываем через delay sec
}

Bomb.prototype.blowUp = function () {
    console.log(this.message);
};

// Task 17
// Необходимо реализовать функцию, принимающую в аргументах строку, состоящую из букв и вернуть новую строку,
// в которой повторяющиеся буквы заменены количеством повторений.
// rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'); // => 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4'
function rle(str) {
    let curr = str[0]
    let count = 1
    let result = ''
    for (let i = 0; i < str.length; i++) {
        if (curr === str[i + 1]) {
            count++
        } else {
            if (count > 1) {
                result += curr + count
            } else {
                result +=curr
            }
            count = 1
            curr = str[i+1]
        }

    }
    return result
}


// Task 18
// Реализуйте функцию isSorted(), которая возвращает true или false в зависимости о того, отсортирован ли переданный ей числовой массив.
function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i+1]) return false
    }
    return true
}

// Task 19
// Реализуйте функцию missing(), которая принимает неотсортированный массив уникальных чисел (то есть, числа в нём не повторяются)
// от 1 до некоего числа n, и возвращает число, отсутствующее в последовательности. Там может быть либо одно отсутствующее число,
// либо их может не быть вовсе.
// missing([])                         // undefined
// missing([1, 4, 3])                  // 2
// missing([2, 3, 4])                  // 1
// missing([5, 1, 4, 2])               // 3
// missing([1, 2, 3, 4])               // undefined
function missing(arr) {
    const max = Math.max(...arr)

    for (let i = 1; i < max; i++) {
        if (!arr.includes(i)) return i
    }
}

// Task 20
// Реализуйте класс LinkedList, не используя встроенные массивы JavaScript ( [] ). Ваш LinkedList должен поддерживать лишь 2 метода: add() и has().
// class LinkedList {...}
// let list = new LinkedList(1, 2, 3)
// list.add(4)                           // undefined
// list.add(5)                           // undefined
// list.has(1)                           // true
// list.has(4)                           // true
// list.has(6)                           // false
class LinkedList {
    constructor(value, ...args) {
        this.value = value
        if (args.length) {
            this.next = new LinkedList(args[0], ...args.slice(1))
        } else {
            this.next = null
        }
    }
}

const list = new LinkedList(1 ,2 ,3)
console.log(list)