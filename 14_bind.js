// 14. Implement bind function in javascript

Function.prototype.myBind = function (context, ...args) {
  return (...innerArgs) => {
    return this.call(context, ...args.concat(innerArgs));
  };
}

function log(...props) {
    console.log(this.name, this.age, ...props);
}

const obj = {
    name: 'John',
    age: 26
};

const bound = log.myBind(obj, 'Hello');

bound('World'); // John 26 Hello World
