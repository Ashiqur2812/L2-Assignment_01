# TypeScript Essentials Guide 🚀

## Table of Contents
1. [Interfaces vs Types]
2. [The `keyof` Keyword]

---

## Interfaces vs Types <a name="interfaces-vs-types"></a>

### Two Ways to Define Shapes 🔷
**Interfaces** and **types** both define data structures, but they shine in different scenarios.

### Key Differences at a Glance 🔍

| Feature                | Interface                          | Type                          |
|------------------------|------------------------------------|-------------------------------|
| **Best For**           | Object shapes & class contracts    | Unions, tuples, complex types |
| **Extending**          | `extends` keyword                  | `&` intersection              |
| **Declaration Merging**|  Multiple declarations merge     |  Single declaration only    |
| **Primitive Types**    | Not work                                 |  Works with strings/numbers |

### When Would I Use Which? 🤔

**Choose Interface When:**
- Defining object structures for APIs/classes
- Want future extensibility
```typescript
interface User {
  id: string;
  name: string;
}

interface AdminUser extends User {
  permissions: string[];
}
```

Choose Type When:

    Creating union/intersection types

    Working with non-object data

```
type ID = string | number;
type Coordinate = [number, number];
```

2. The keyof Keyword <a name="the-keyof-keyword"></a>
Your Type-Safe Key Accessor 🔑

What It Does:
Creates a union type of an object's keys.
```
interface Product {
  id: number;
  name: string;
  price: number;
}

type ProductKeys = keyof Product; // "id" | "name" | "price"
```
Real-World Usage 💼

Dynamic Property Access:
```
function getProductValue(product: Product, key: keyof Product) {
  return product[key]; // Type-safe access!
}

//  Works
getProductValue({id: 1, name: "Chair", price: 49}, "name");

//  Error: "discount" isn't a valid key
getProductValue({id: 2, name: "Desk", price: 199}, "discount");
```
Autocomplete Bonus:
IDEs provide suggestions for valid keys!