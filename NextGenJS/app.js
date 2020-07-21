var oldVarSyntax = 'string here';

console.log(oldVarSyntax);

oldVarSyntax = 'new string here';

console.log(oldVarSyntax);

let newLetVariable = 'string here'

console.log(newLetVariable);

newLetVariable = 'new string here';

console.log(newLetVariable);

const newConstVariable = 'string here'

console.log(newLetVariable);

newConstVariable = 'new string here'; //error

console.log(newLetVariable);

(function(){
    var oldVarScopeExample = 'inside function';
    let newLetScopeExample = 'also inside funcion';
})();

console.log(oldVarScopeExample);

console.log(newLetScopeExample);

////functions

function functionName(args) {
    //do something with the args
    let something = args/2;

    return something;
};

const otherFunction = function() {
    //do something else
};

//arrow functions:
const arrowFunctionExample = (arg1) => {
    //do something
    console.log(arg1);
}

const arrowFunctionMultipleArgumentsExample = (arg1,arg2) => {
    //do something
    return arg1 + arg2;
}

const arrowFunctionSingleArg = arg1 => {
    //do something
    return arg1;
}

const simplifiedArrowFunc = arg1 => console.log(arg1);

const noArgsArrowFunction = () => {
    //function code here.

    return 1 + 1;
}