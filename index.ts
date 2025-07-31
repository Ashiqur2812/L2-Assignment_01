function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
        return input.toLowerCase();
    } else {
        return input.toUpperCase();
    }
}

formatString("Hello");          
formatString("Hello", true); 
formatString("Hello", false);


function filterByRating(items: { title: string; rating: number; }[]): { title: string; rating: number; }[] {
    const res1 = items.filter(e => e.rating >= 4);
    return res1;
}

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];

filterByRating(books)


function concatenateArrays<T>(...arrays: T[][]): T[] {
    return Array.prototype.concat(...arrays);
}

concatenateArrays(["a", "b"], ["c"])
concatenateArrays([1, 2], [3, 4], [5])


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
processValue("hello")
processValue(10)



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

getMostExpensiveProduct(products)


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
        day === Day.Friday) {
        return 'Weekday';
    } else {
        return 'Weekend';
    }
}


getDayType(Day.Monday) 
getDayType(Day.Sunday)  

async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
        if (n < 0) {
            reject(new Error('Negative Number not allowed'));
        } else {
            setTimeout(() => {
                resolve(n * n);
            }, 1000);
        }
    });
}

squareAsync(4).then(console.log);       
squareAsync(-3).catch(console.error);  

// this is good





