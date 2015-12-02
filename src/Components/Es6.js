/**
 * Created by cuiweigang on 15/12/1.
 */
class Base {
  toJson() {
    console.log(JSON.stringify(this));
  }
}

class Person extends Base {
  constructor(name) {
    super(); //调用父类
    this.name = name;
  }

  getName() {
    console.log(this.name);
  }
}

var person = new Person('cuiweigang');
person.getName();
person.toJson();
console.log(person.name);

export default Person;
