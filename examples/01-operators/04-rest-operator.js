// disponible depuis ES2015

function f(a, b, ...args) {
    console.dir(args);
}

// équivalent à 
function f(a, b) {
    var args = Array.prototype.slice.call(arguments, f.length);

    console.dir(args);
}