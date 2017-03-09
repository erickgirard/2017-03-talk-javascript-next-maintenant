// promise = tasks in .net / futures in java
// exemple équivalent à Task.Delay
// disponible a partir de ES2015

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time)); 
}

//  résolution des promises similaires aux tasks 

delay(100)
    .then(() => console.log("résolu!"))

// exemple avec fetch
fetch("http://md5.jsontest.com/?text=example_text")
    .then(result => console.log(result));