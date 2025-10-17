import { LinkedList } from "./linkedList";

const list = new LinkedList();

//usage for example
list.append("cat1");
list.append("cat2");
list.append("cat3");
console.log(list.toString());
list.insertAt("cat8", 3);
console.log(list.toString());
list.prepend("dog");
list.append("snake");
console.log(list.toString());
