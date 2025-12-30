export default function ES6Learning() {
    //string
    // let str1 = 'My name is:'
    // let name = 'Dylan';

    // let str2 = `${str1} ${name}`

    // console.log(str2);




    //Destructuring objects
    // let information = { firstName: 'Dylan', lastName: 'Israel' };

    // let { firstName, lastName } = information;
    // console.log(firstName); // 'Dylan'
    // console.log(lastName); // 'Israel'```

    // let [firstName] = ['Dylan', 'Israel'];
    // console.log(firstName) // 'Dylan'```



    // Object Literal
    // let firstName = 'Dylan';
    // let information = { firstName: firstName };

    // Part #5: Vòng lặp for… of
    // let str = 'hello';

    // for (let char of str) { console.log(char); }// "h"// "e"// "l"// "l"// "o"


    // // Part #6: Spread syntax
    // let arr1 = [1, 2, 3];
    // let arr2 = [4, 5, 6];
    // // let arr3 = [...arr1, ...arr2];

    // // arr3 = [1, 2, 3, 4, 5, 6];
    // function findLength(...args) { console.log(args.length); }

    // findLength();  // 0
    // findLength(1); // 1
    // findLength(2, 3, 4); // 3


    // // Part #7: Arrow function
    // const square = num => num * num;
    // square(2); // 4

    // // Part #7: includes()
    // let str = 'Hello World';

    // console.log(str.includes('Hello')); // true


    // Part #8: Class

    // class Car {
    //     constructor(wheels, doors) {
    //         this.wheels = wheels;
    //         this.doors = doors;
    //     }
    //     describeMe() {
    //         console.log(`Doors: ${this.doors} and Wheels: ${this.wheels}`);
    //     }
    // }


    // const car1 = new Car(4, 2);
    // car1.describeMe(); // Doors: 2 and Wheels: 4

    // Part #9: Promise, async và await
    // Đây là cách xử lý bất đồng bộ trong ES6.

    function takeLongTimeAsync() {
        return new Promise(resolve => {
            setTimeout(() => resolve("long_time_value"), 1000);
        });
    }

    async function test() {
        const v = await takeLongTimeAsync();
        console.log(v);
    }

    test();


}
