//testing to see what happens if you dont declate a variable and use it

(()=>{
    a=2; //no var, let, const
})();

//after function invocation it has global scope
console.log(a);

var test = function() {
    let b = 2;

    if(true){
        let b = 3;
        console.log(b);
    }
    console.log(b);

}

test();