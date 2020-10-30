//Задачние 1

function concat(fStr: string, sStr: string): string {
    return fStr + sStr;
}

console.log(concat("Hello ", "World"));

//Задание 2

type TsSimeArray = (number | string)[];

interface MyHometaskInterface {
    howIDoIt: string;
    simeArray: TsSimeArray,
    withData: [{
        howIDoIt: string,
        simeArray: TsSimeArray
    }],
}

const MyHometask: MyHometaskInterface = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
};

console.log(MyHometask)

//Задание 3

interface MyArray<T> {
    [n: number]: T;

    reduce<U>(fn: (prev: T, current: T) => U, defaultValue?: U): U;
}

const examleArr: MyArray<number> = [1,2,3];
console.log(examleArr.reduce((prev, current) => prev + current))

