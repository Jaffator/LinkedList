# Linked List - TypeScript

Singly linked list implementation in TypeScript.

## Methods

- `append(value)` - Add to end
- `prepend(value)` - Add to start
- `pop()` - Remove last element
- `at(index)` - Get node at index
- `find(value)` - Find index of value
- `contains(value)` - Check if value exists
- `insertAt(value, index)` - Insert at position
- `size()` - Get list size
- `toString()` - Display as string

## Usage

```typescript
import { LinkedList } from "./linkedList";

const list = new LinkedList();

list.append("cat1");
list.append("cat2");
list.append("cat3");
console.log(list.toString());
// (cat1) -> (cat2) -> (cat3)

list.insertAt("cat8", 3);
console.log(list.toString());
// (cat1) -> (cat2) -> (cat3) -> (cat8)

list.prepend("dog");
list.append("snake");
console.log(list.toString());
// (dog) -> (cat1) -> (cat2) -> (cat3) -> (cat8) -> (snake)
```

## Run

```bash
npx ts-node linkedList.ts
```
