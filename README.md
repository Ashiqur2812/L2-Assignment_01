# TypeScript Essentials: Writing Safer, Cleaner Code

## Introduction  
TypeScript brings clarity to JavaScript by adding clear type rules. Let's break down three key concepts that help teams build reliable systems, using practical examples you'll encounter in everyday development.

---

## 1. Interfaces vs. Types: Your Code's Blueprint

### Real-World Use: Building a Bookstore API

**Interfaces** work best when defining clear object structures:
```typescript
// Define book structure
interface Book {
  isbn: string;
  title: string;
  price: number;
  stock: {
    mainStore: number;
    warehouse: number;
  };
}

// Extend for special editions
interface SignedEdition extends Book {
  authorSignature: boolean;
  certificationCode: string;
}

Types handle complex data combinations:

```// Track inventory changes
type StockAlert = {
  totalCopies: number;
  lowStockTitles: string[];
};
```

```// Handle different API outcomes
type ApiResult<T> = 
  | { status: 'ok'; data: T }
  | { status: 'fail'; error: string };
```

<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Feature</th>
      <th>Interface</th>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Declaration Merging</td>
      <td>Multiple declarations merge</td>
      <td>Single declaration only</td>
    </tr>
    <tr>
      <td>Extensibility</td>
      <td>Built-in extends syntax</td>
      <td>Requires intersection (&)</td>
    </tr>
    <tr>
      <td>Primitive Unions</td>
      <td>N/A</td>
      <td>Native support</td>
    </tr>
    <tr>
      <td>Tuple Types</td>
      <td><code>interface A { [index]: type }</code></td>
      <td>Direct syntax</td>
    </tr>
  </tbody>
</table>

2. Understanding Type Safety: any, unknown, never
Real-World Use: Handling User Input

any - Use sparingly for quick fixes:

```
// Temporary solution for old code
const legacyInput = (userData: any) => {
  saveToDatabase(userData.email); // Risky but sometimes necessary
};
```
unknown - Safe approach for external data:

```
// Process form submissions safely
async function handleForm(rawData: unknown) {
  if (isValidForm(rawData)) { // Custom validation check
    sendWelcomeEmail(rawData.email); // Now type-safe
  }
}

// Validation helper
function isValidForm(data: unknown): data is { email: string } {
  return !!data && typeof data === 'object' && 'email' in data;
}
```

never - Prevent impossible states:

````
// Handle all possible loading states
function handleLoad(state: 'success' | 'error'): never {
  switch(state) {
    case 'success': showContent(); break;
    case 'error': showError(); break;
    default: 
      const check: never = state; // Catches missing cases
      throw Error(`Unexpected state: ${check}`);
  }
}
```

3. Combining Types: Build Flexible Systems
Real-World Use: User Management System

Union Types (|) handle different user types:
```
type User = 
  | { role: 'admin'; permissions: string[] }
  | { role: 'member'; joinDate: Date }
  | { role: 'guest'; sessionId: string };

function showDashboard(user: User) {
  if (user.role === 'admin') {
    displayAdminTools(user.permissions); // Type-safe access
  }
}
```

Intersection Types (&) combine features:
```
interface Account {
  username: string;
  email: string;
}

interface Preferences {
  theme: 'light' | 'dark';
  notifications: boolean;
}

type CompleteProfile = Account & Preferences;

const userProfile: CompleteProfile = {
  username: 'booklover123',
  email: 'reader@bookstore.com',
  theme: 'dark',
  notifications: true
};
```

Putting It All Together: Real Benefits

    Clear Communication
    Interfaces act like instruction manuals for your data structures

    Safety Nets
    The any → unknown → never spectrum helps balance flexibility and safety

    Adaptable Systems
    Union/intersection types model real-world complexity simply

Try This Challenge
Create a support ticket system that handles:
```
type Ticket = 
  | { status: 'open'; priority: 'high' | 'normal' }
  | { status: 'closed'; resolution: string }
  | { status: 'pending'; assignedTo: string };
  ```