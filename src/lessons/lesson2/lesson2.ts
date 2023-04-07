console.log('lesson 2');


// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

const sum = (a: number) => {
    return (b: number) => a + b
}

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

const makeCounter = () => {
    let count = 0
    return () => ++count
}

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

const makeCounterAdvanced = (init: number) => {
    let count: number = init
    return {
        increase(): number {
            return ++count
        },
        decrease(): number {
            return --count
        },
        reset(): number {
            count = 0
            return count
        },
        set(a: number): number {
            count = a
            return count
        }
    }
}

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

function superSum(N: number) {
    if (N === 0) return 0
    function innerFn(n: number, args: Array<number>) {
        return function actualInnerFn(...a: Array<number>) {
            if(n <= a.length) {
                return [...args, ...a].slice(0, N).reduce((acc, el) => acc + el)
            }
            return innerFn(n - a.length, [...args, ...a]);
        }
    }
    return innerFn(N, [])
}

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

//1) Напишите функцию sumTo(n), которая вычисляет сумму чисел
//recursive
const sumTo = (n: number): number => n === 1 ? n : n + sumTo(n-1)

//iterative
const sumToV2 = (n: number): number => {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum += i
    }
    return sum
}
// arifmetic
const sumToV3 = (n: number): number => {
    return n*(n+1)/2
}

//2) Вычислить факториал

const factorial = (n: number): number => {
    return n === 1 ? n : n * factorial(n-1)
}

//3) Числа Фибоначчи

const fib = (n: number): number => {
    return n <= 1 ? n : fib(n-1) + fib(n-2)
}
//4) Вывод односвязного списка

const list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

const printList = (list: any) => {
    console.log(list.value)
    if (list.next) printList(list.next)
}

//5) Вывод односвязного списка в обратном порядке

const printReverseList = (list: any) => {
    if (list.next) printReverseList(list.next)
    console.log(list.value)
}

printReverseList(list)

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

function steamrollArray(arr: any): any[] {
    const flat = [].concat(...arr);
    return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}


// just a plug
export default () => {};