// accepts any number of parameters,
// returns sum of every single parameter given,
// any parameter that can not be parsed as a number will be counted as 0.
// can be called infinitely,
// the next function call will do the same thing, but also summing the last returned number.

// MagicFunction(3) == 3; // should return true
// MagicFunction(1, 2) == 3; // should return true
// MagicFunction(1, 3)(2) == 6; // should return true
// MagicFunction(1, 2)(3, 4, 5)(6)(7, 10) == 38; // should return true

const MagicFunction = (...argumentos)=> {
    
    for(arg of argumentos) {
        console.log(arg)
    }


}

MagicFunction(3,4)(7,5,6)