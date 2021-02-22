console.log('EXECUTION CONTEXTS\n');

console.log('\n--- Primitives Types ---\n')

var a = 1 

var b = a

var c = 2

a = c

console.log('a:',a)

console.log('b:',b)

console.log('c:',c)

console.log('\n--- Reference Types ---\n')

var o = {name: 'yazeed'};

var otherPerson = {name: 'Some fucker'};

var l = o;

o.name = 'Cliff'

console.log('o -> ',o);

console.log('l -> ',l);

console.log('otherPerson -> ',otherPerson)

console.log('\n');

console.log('\n--- Execution Contexts ---\n')

var globalVariable;

// global execution context

function timeoutExecutionContext() {

    // timeoutExecutionContext execution context

    var functionVarA = a; // < - scoped to this execution context

    console.log('a:',a)

    console.log('functionVarA:',functionVarA);

    console.log('l -> ',l);

    console.log(globalVariable);

    l = otherPerson;

    l.name = 'yet another poes'

    console.log('otherPerson -> ',otherPerson)

    // console.log('l -> ',l);

    // throw new Error('Dont be a poes')
    console.log('Timed Out')
}

// globalVariable = functionVarA;

console.log('globalVariable: ',globalVariable);

setTimeout(timeoutExecutionContext, 2000);