// support à partir de ES2015

function* take(arry, num) {
    for(let i = 0; i < num; i++) {
        yield arry[i];
    }
}

// for .. of = foreach
for(let num of take([1, 2, 3], 2)) {
    console.log(num);
}