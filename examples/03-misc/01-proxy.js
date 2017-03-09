// disponible depuis  ES2015

// permets de faire un proxy devant un autre objet

let handler = {
    get: function(target, name) {
        return name in target ? target[name] : 37;
    }
};

let p = new Proxy({}, handler);

p.a = 1;
p.b = undefined;

console.log(p.a, p.b); // 1, undefined
console.log('c' in p, p.c); // false, 37

// peut être utilisé comme validateur

const PersonValidator = {
    set: function(obj, prop, value) {
        if(prop === 'age') {
            if(!Number.isInteger(value))
                throw new TypeError("need to provide number");

            if(value > 200)
                throw new RangeError("out of range for age");
        }

        // forward call to object, store the value as default behavior
        obj[prop] = value;

        // indicate success
        return true;
    }
}

let person = new Proxy({}, PersonValidator);

person.age = 100;
console.log(person.age); // 100

person.age = "young"; // throws an TypeError
person.age = 300; // throws a RangeError