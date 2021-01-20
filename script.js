 let boolean1 = true;
 let boolean2 = false;


 let example1 = 5 < 6; // true
 let example2 = 5 > 6; // false
 let example3 = 5 == 5;
 let example4 = 5 != 5;
 let example5 = 5 <= 5;
 let example6 = 5 >= 6;


 let example7 = "Hello" == "World";
 let example8 = "Hello" != "Hello";
 let example9 = "A" > "2";

 let example10 = "2" > 1;
 let example11 = 1 < "007";
 let example12 = 0 == "0";


 let example13 = Boolean(-1); // true
 let examole14 = Boolean(1123123); // true
 let example15 = Boolean(0); // false
 let example16 = Boolean("Hello"); // true
 let example17 = Boolean(" "); // true
 let example18 = Boolean(""); // false
 let example19 = Boolean("8"); // true
 let example20 = example19 == example15;


 let example21 = 0 == false; // true
 let example22 = '' == false; // true
 let example23 = '7' ==7; // true

 let example24 = 0 === false; // false
 let example25 = '' === false; // false
 let example26 = '7' === 7; // false


 let example27 = null == undefined; //true
 let example28 = null === undefined; // true



 let a = "Heloo";
 if (a === "Hello") {
     console.log("A is Hello");
 }

 if (a === "World") {
     console.log("A is World");
 }
 if (a) {
     console.log("A!");
 }
 if (false) {
     console.log("test");
 }
 if (true) {
     console.log("test");
 }
 if (!a) {
     console.log("A!");
  }


let a = prompt("What is A?");
if (a) {
    console.log("A squared equals to" + (a ** 2));
}
if (!a) {
    console.log("A is not set");
}
