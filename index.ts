function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
        return input.toLowerCase();
    } else {
        return input.toUpperCase();
    }
}
console.log(formatString('hello', false));
console.log(formatString('hello', true));


function filterByRating(items: { title: string; rating: number; }[]): { title: string; rating: number; }[] {
    const res1 = items.filter(e => e.rating >= 4);
    return res1;
}

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];

console.log(filterByRating(books));


function concatenateArrays<T>(...arrays: T[][]): T[] {
    return Array.prototype.concat(...arrays);
}

console.log(concatenateArrays(["a", "b"], ["c"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));


class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }
    getInfo(): void {
        console.log(`Make: ${this.make}, Year: ${this.year}`);
    }
}

class Car extends Vehicle {
    private model: string;
    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model;
    }
    getModel(): void {
        console.log(`Model: ${this.model}`);
    }

}


const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo();
myCar.getModel();


function processValue(value: string | number): number {
    if (typeof value === 'string') {
        return value.length;
    } else {
        return value * 2;
    }
}
console.log(processValue("hello"));
console.log(processValue(10));



interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    return products.reduce((previous, current) => current.price > previous.price ? current : previous, products[0]);
}

const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];

console.log(getMostExpensiveProduct(products));


enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    if (day === Day.Monday ||
        day === Day.Tuesday ||
        day === Day.Wednesday ||
        day == Day.Thursday ||
        day === Day.Friday ||
        day === Day.Saturday) {
        return 'Weekday';
    } else {
        return 'Weekend';
    }
}


console.log(getDayType(Day.Monday));   // Output: "Weekday"
console.log(getDayType(Day.Sunday));   // Output: "Weekend"
console.log(getDayType(Day.Saturday));   // Output: "Weekday"

