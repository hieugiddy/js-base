/*
---------SETUP----------
- Install: npm i typescript --save
- package.json:
"scripts": {
    "build": "npx tsc"
  }

- Run: npm run build
- Init tsconfig.json: npx tsc --init
- tsconfig.json
  {
    "compilerOptions": {
      "target": "es5",                          
      "module": "commonjs",                     
      "lib": ["ES2018", "DOM"], 
      "outDir": "./build",                        
      "strict": true,                           
      "noImplicitAny": true,                 
    },
    "exclude": ["node_modules", "tests"]
  }
- import
  import 'name' from 'module';
  import {function, function} from 'module';

- export
  export const myFunction = () => {};
  export default object;
  export default {object1, object2};
*/

let studentPhone: (number | string);
studentPhone = '(555) 555 - 5555';
studentPhone = 5555555555;

let a=('cat' as unknown) as number
let b=4
console.log(b+a);//Output: 4cat

//Null
const getCapitals = (str:string):string[] | null => {
    const capitals = str.match(/[A-Z]/);
    return capitals;
  }
  
  console.log(getCapitals('something'));
  // returns null
  console.log(getCapitals('Something'));
  // returns ['S']

//undefined
const myFunc1 = (student: string | undefined) => {
if ( student === undefined ){
    // do something
} 
};


//void- được sử dụng làm kiểu trả về khi hàm không trả về gì
const myFunc2 = (student: string): void => {
    console.log(student);
};

//never- được sử dụng làm kiểu trả về khi hàm sẽ không bao giờ trả về bất kỳ thứ gì, chẳng hạn như với các hàm đưa ra lỗi hoặc vòng lặp vô hạn
const myError = (err: string): never => {
    throw new Error(err); 
}

//any** **- nên tránh . Được sử dụng khi loại mục được nhập có thể là bất kỳ thứ gì
const myFunc3 = (student: any): any => {
    // do something
  };

//unknown** **- được sử dụng khi không biết loại nội dung được nhập. Được sử dụng nhiều để khẳng định kiểu
const myFunc4 = (student: unknown): string => {
    // do something
    return "a";
  }

//Mảng - để nhập dưới dạng mảng, hãy sử dụng kiểu, theo sau là dấu ngoặc vuông. Các loại liên kết có thể được sử dụng để cho phép nhiều loại trong một mảng.
let arr: string[]; // only accepts strings
let arr2: (string | number)[]; // accepts strings or numbers


//Tuple - bộ dữ liệu không có nguồn gốc từ JavaScript. Khi bạn biết chính xác dữ liệu nào sẽ có trong mảng và bạn sẽ không thêm vào mảng hoặc sửa đổi loại cho bất kỳ giá trị nào, bạn có thể sử dụng một bộ.
let arr1: [string, number, string]; // ['cat', 7, 'dog']

enum Weekend {
    Friday,
    Saturday,
    Sunday
  }



//Object
//type
type Student = { 
    name: string; 
    age: number;
    enrolled: boolean;
  };
  
let newStudent:Student = {name: 'Maria', age: 10, enrolled: true};

//Interface
interface Student1 { 
    name: string, 
    age: number, 
    enrolled: boolean,
    phone?: number // optional
    readonly id: number // id is readonly
  };
let newStudent1:Student1 = {name: 'Maria', age: 10, enrolled: true,id:1};

//class
/*Access Modifiers
public: default
private: quyen truy cap sua doi trong 1 class
protected: quyen truy cap-sua doi trong 1 class va class con
*/

class Student3 {
    protected studentGrade: number;
    private studentId: number;
    public constructor(grade: number, id: number) {
      this.studentGrade = grade;
      this.studentId = id;
    }
    id(){
      return this.studentId;
    }
  }
  
  class Graduate extends Student3 {
    studentMajor: string; // public by default
    public constructor(grade: number, id: number, major: string ){
        super(grade, id);
        //this.studentId = id; // TypeScript Error: Property 'studentId' is private and only accessible within class 'Student'.
        this.studentGrade = grade; // Accessable because parent is protected
        this.studentMajor = major;
    }
  }
  
  const myStudent = new Graduate(3, 1234, 'computer science');
  
  console.log(myStudent.id()); //  prints 1234
  //myStudent.studentId = 1235; // TypeScript Error: Property 'studentId' is private and only accessible within class 'Student'.
  console.log(myStudent.id()); // prints 1235

//Factory Functions
interface Student4 {
    name: string;
    age: number
    greet(): void;
  }
  
  const studentFactory = (name: string, age: number): Student4 =>{ 
    const greet = ():void => console.log('hello'); 
    return { name, age, greet };
  }
  
  const myStudent4 = studentFactory('Hana', 16);
  

//Generics
// Typed Function
const getItem1 = (arr: number[]):number => {
    return arr[1];
  }
getItem1([1, 2, 3]);
// Generic Function
const getItem2 = <T>(arr: T[]):T => {
    return arr[1];
};
getItem2<number>([1,2,3]);

//Promise
const myFunc = async ():Promise<void> => { }

