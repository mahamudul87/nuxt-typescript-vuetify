export class SomeClass {
    value = 4;
  
    constructor() {
      console.log('SomeClass constructor called');
    }
  
    moarValue(): number {
      return this.value + 2;
    }
  }
  
  export class AnotherClass {
    text = 'content';
  
    moarText(): string {
      return 'Typescript ' + this.text;
    }
  }