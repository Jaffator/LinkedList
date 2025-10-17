import { LinkedList } from "./linkedList";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.append(12);
list.append({ age: 12, name: "Jarda" });
list.append([1, 2]);

console.log(list.toString());
