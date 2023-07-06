function receivesAFunction(callback, word) {
    return callback(word)
}
function returnsANamedFunction(){
    return returnsANamedFunction
}
const returnsAnAnonymousFunction = () => () => console.log('function');