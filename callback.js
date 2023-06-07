function greet(name) {
    console.log(`Hello ${name}`);
}

function higherOrderFunction(callback) {
    const name = "Engr. Leonel J. Felezario";
    callback(name);
}

higherOrderFunction(greet);