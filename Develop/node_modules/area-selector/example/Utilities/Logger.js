
var print = function(a,b,c,d,e,f){
   console.log('%c Home:','background: tan; color: white',
   checkUndefined(a),
   checkUndefined(b),
   checkUndefined(c),
   checkUndefined(d),
   checkUndefined(e),
   checkUndefined(f)
 )
}
var checkUndefined = function(argument) {
    if( argument == undefined) {
      return ''
    }
    return argument
}
