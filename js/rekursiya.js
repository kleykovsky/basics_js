///функция по возведению в степень
// function pow(x, n) {
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }
//     return result;
// }
// // функция рекурсия
// function pow(x, n) {
//    if (n === 1) {  
//     return x;
//    } else {
//     return x * pow(x, n - 1); 
//    }
// }
// термины:
//1 - база
//шаг рекурсии n уменьшается на 1(аргумент n упращается)
// глубина это общее кол-во вложенных вызовов вместе с самым первым

// console.log(pow(2, 1)); //2
// pow(2, 4); //4
// pow(2, 3); //8
// pow(2, 4); //16
//////////////////////////////////////////////////////////
//пример работы функции рекурсии
//Задача: вычесть общий средний прогресс всех студентов по прохождению курсов
let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],
    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18    
        }],
        pro: [{
            name: 'Sam',
            progress: 10
        }],
        semi: {
            students: [{
                name: 'test',
                progress: 100
            }]
        }
    }
};
//припомощи обычной функции( с перебором при помощи for...of, for)
// 1 
function getTotalProgressByIteration(data) {
    let total = 0;
    let students = 0;

    for (let course of Object.values(data)) {
        if (Array.isArray(course) ){
            students += course.length;
            for (let i = 0; i < course.length; i++) {
                total += course[i].progress;
            }
        } else {
            for (let subCourse of Object.values(course)) {
                students += subCourse.length;
                for (let i = 0; i < subCourse.length; i++) {
                    total += subCourse[i].progress;
                }
            }
        }
    }    
    return total / students;
}
console.log(getTotalProgressByIteration(students));
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
//функция рекурсия
//2

function getTotalProgressByRecursion(data) {
    if (Array.isArray(data) ){
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }

        return [total, data.length];
    } else {
        let total = [0, 0];

        for (let subData of Object.values(data)) {
            const subDataArray = getTotalProgressByRecursion(subData);
            total [0] += subDataArray[0];
            total[1] += subDataArray[1];
        }

        return total;
    }
}
const result = getTotalProgressByRecursion(students);
console.log(result[0]/result[1]);
/////////////////////////////////////////////////////////////
//////////////////HW////////////////////////////////////////
//factorial

function factorial(n) {
    if (typeof(n) !== 'number' || !Number.isInteger(n)) {
        console.log('Не число');
    }
    if (n >= 1) {
        return n * factorial(n - 1);
    } else {
        return 1;
    }
}
console.log(factorial(4));

function rekursiya(x, n) {
    if (n === 1) {
        return x;
    } else {
        return x * rekursiya(x, n - 1);
    }
}
console.log(rekursiya(2, 4)); 

