import { LinkedList } from "./linkedList";

const list = new LinkedList();

list.append("cat1");
list.append("cat2");
list.append("cat3");
list.insertAt("cat8", 3);
console.log(list.toString());
