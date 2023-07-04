import { Component } from '@angular/core';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.css']
})
export class TypescriptComponent {

      // TypeScript                                                                               // Spring Boot

  public word: string = 'Hello World';                                               // public String word = "Hello World";
  private count: number = 12;                                                        // private int count = 12;
  number2: number = 12.5;                                                            // double number2 = 12.5;
  isEqual: boolean = false;                                                          // boolean isEqual = false;
  number3: any = 23;                                                                 // -------------------------
  word2: any = 'Hello Again';                                                        // -------------------------

  constructor(){                                                                     // public NameOfClass(){}
     // used for dependency injection
  }                                                                                  // }
  
  // Methods in Typescript

  public myFirstMethod(word: string, number1: number):void {                        // public void myFirstMethod(String word, int number){
    console.log(word);                                                              // System.out.println(word);
  }                                                                                 // }

  areaCalculaetion(params:any):number {
    const pi : number = 3.14;                                                        // in java => final
    let result: number = 0;                                                          // var in java-11
    result = 2 * pi * params;
    return result ;                                                                  // return 
  }

  // String Methods in TypeScript                                                    // SAME as Java

  stringMethods(givenString: string){

    givenString.toLowerCase();
    givenString.split(',');
    givenString.trim();
    givenString.substring(1,5);
    givenString.indexOf('a');

    let concatination: string = `${this.word} works in the ${this.number2} department.`; // concatination
    concatination.charAt(0);
    concatination.length;
    
  }


  // Arrays in Typescript                                                                           // ArrayList in Java

  words : string[] = ['this', 'is', 'an', 'array'];                                  // String[] words = {"this", "is", "an", " array"}
  numbers : number[] = [10 , 20 , 30 ];                                              // List<Integer> numbers = new Arraylist(Arrays.asList(10, 20, 30));
  anyArray : any[] = [10, 'string']; // Any means =>  without type                   // ---------------------------


  // Array => There is no other data structure like array & arraylist... Just ArrayList
  arrayMethods(givenArray: number[]){

    console.log(givenArray[0]);                               // reach elements from index
    givenArray.push(10);                                      // insert to end
    givenArray.pop()                                          // remove from end
    givenArray.unshift(0);                                    // insert the beginning
    givenArray.shift();                                       // remove from beginning
    givenArray.length * 2;
    givenArray.forEach(n => n * 2);
    givenArray.findIndex(n => n === 10);                      // Find index, Object equality
    givenArray.find(n => n == 10);                            // Find the element
    givenArray.slice();                                       // returns a copy of this array
    givenArray.splice(10, 1);                                 // starting from element 10, remove only one element

    // %90 similar to Java, more powerfull and easy to use...
  }

  loopsInTypescript(){

    // for Loop
    for (let i = 0; i < 3; i++) {
      console.log ("Block statement execution no." + i);
    }

    // forEach Loop
    let arr = [10, 20, 30, 40];
    for (var val of arr) {
      console.log(val); // prints values: 10, 20, 30, 40
    }

    // While Loop
    let i: number = 2;
    while (i < 4) {
        console.log( "Block statement execution no." + i )
        i++;
    }

    //do-while Loop
    let x: number = 2;
    do {
        console.log("Block statement execution no." + x )
        x++;
    } while ( i < 4)
  }

  // If-Else Statement
  ifElseTypeScript(){
    let x: number = 10, y = 20;

    if (x > y) {
        console.log('x is greater than y.');
    } else if (x < y){
        console.log('x is less than y.'); 
    } else if (x == y) {
        console.log('x is equal to y');
    }
  }

  // Switch-Case
  switchCaseTypeScript(){
    let x = 10, y = 5;
    switch (x-y) {
        case 0:
            console.log("Result: 0");
            break;
        case 5:
            console.log("Result: 5");
            break;
        case 10:
            console.log("Result: 10");
            break;
        default:
            console.log('default');
    }
  }
}

// Class in TypeScript

class Person {
  private firstName = "";
  private lastName = "";

  constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
  }
}

// get rid of boilerplate code...
class Person2 {
  constructor(private firstName: string, private lastName: string) {
  }
}

