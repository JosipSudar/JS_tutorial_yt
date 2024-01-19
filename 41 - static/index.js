// static = keyword that defines properties or methods that belong
//          to a class itself rather than the objects crated
//          from that class (class owns anything static, not the object)

class User {
  static userCount = 0;
  constructor(username) {
    this.username = username;
    User.userCount++;
  }
  static getUserCount() {
    console.log(`There are ${User.userCount} users on this site`);
  }
  sayHello() {
    console.log(`Hello, my username is ${this.username}`);
  }
}

const user1 = new User("Spongebob");
const user2 = new User("Patrick");
const user3 = new User("Sandy");

user1.sayHello();
user2.sayHello();
user3.sayHello();
User.getUserCount();
