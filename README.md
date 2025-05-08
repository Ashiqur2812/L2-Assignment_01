1. What are some differences between interfaces and types in TypeScript?

In TypeScript, both interface and type are powerful tools used to define the shape of data. Although they often serve similar purposes and can sometimes be used interchangeably, there are important distinctions between them that can influence which one you should use in different scenarios.

1. Extending and Combining Types
Interfaces use the extends keyword to support inheritance. This is especially useful when working with object-oriented patterns or designing class contracts.

```
interface Agent {
  name: string;
  age: number;
}

interface Admin extends Agent {
  role: string;
}
```
Types, on the other hand, use intersection types (&) to combine existing types. This approach is more flexible when composing complex types or working with non-object structures.

```
type Agent = {
  name: string;
  age: number;
};

type Admin = Agent & {
  role: string;
};
```
2. Declaration Merging
A unique feature of interface is declaration merging. You can declare an interface multiple times, and TypeScript will automatically merge the definitions:

```
interface User {
  name: string;
}

interface User {
  age: number;
}

// Result: { name: string; age: number }
```

In contrast, type does not support merging. Declaring the same type alias more than once results in a compilation error:

```
type User = {
  name: string;
};

type User = {
  age: number;
}; // Error: Duplicate identifier 'User'
```

Use Case

<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Feature</th>
      <th>interface</th>
      <th>type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Object structure</td>
      <td>Best suited</td>
      <td>Also valid</td>
    </tr>
    <tr>
      <td>Class implementation</td>
      <td>Ideal for class contracts</td>
      <td>Not used with <code>implements</code></td>
    </tr>
    <tr>
      <td>Primitive types</td>
      <td>Not supported</td>
      <td>Works with strings, numbers, etc.</td>
    </tr>
    <tr>
      <td>Unions & Tuples</td>
      <td>Workarounds needed</td>
      <td>Native support</td>
    </tr>
    <tr>
      <td>Declaration merging</td>
      <td>Supported</td>
      <td>Not supported</td>
    </tr>
    <tr>
      <td>Extensibility</td>
      <td>Via <code>extends</code></td>
      <td>Via <code>&</code> (intersection types)</td>
    </tr>
  </tbody>
</table>

4. When to Use interface vs type
There’s no strict rule, but some general guidance includes:

Use interface when:

Defining object shapes or class contracts

You want to allow declaration merging or plan to extend it later

Working in large codebases where extension and maintenance are key

Use type when:

Defining unions, intersections, or tuples

Creating advanced or flexible types that go beyond just object shapes

Working with primitive types or creating mapped/conditional types

2. What is the use of the keyof keyword in TypeScript? Provide an example.
If you're new to TypeScript, you might have come across the keyof keyword and wondered what it does. Let me explain it to you in simple terms.

What is keyof?
In TypeScript, keyof is used to get the type of the keys of an object. It returns a union type of all the keys in a given type, making your code safer and more flexible.

How Does keyof Work?
Let’s say you have an interface Person:

```
interface Person {
  name: string;
  age: number;
}
```

```
type PersonKeys = keyof Person; // "name" | "age"
In this case, keyof Person will give you a union type of the keys—"name" and "age".
```
Real-World Example: Dynamic Key Access
You can use keyof to create functions that dynamically access object properties, ensuring type safety:

```
interface Product {
  id: number;
  name: string;
}

function getProperty<T>(obj: T, key: keyof T) {
  return obj[key];
}

const product = { id: 1, name: "Laptop" };
console.log(getProperty(product, "name")); // Output: "Laptop"
```
Here, the key parameter is guaranteed to be a valid key of Product, so you can't accidentally pass an invalid property.

Conclusion
The keyof keyword in TypeScript helps you work with object keys in a type-safe way, making your code more reliable and easier to maintain. It ensures that you can only access valid keys from an object, preventing runtime errors.
