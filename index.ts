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