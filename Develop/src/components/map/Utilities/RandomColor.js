module.exports =  function(){
    min = Math.ceil(1);
    max = Math.floor(10);
    var RandomInt =  Math.floor(Math.random() * (max - min)) + min
    switch (RandomInt) {
      case 1:
        return 'rgba(88, 208, 232, 0.5)'
      case 2:
        return 'rgba(91, 232, 88, 0.5)'
      case 3:
        return 'rgba(232, 222, 88, 0.5)'
      case 4:
        return 'rgba(88, 198, 232, 0.5)'
      case 5:
        return 'rgba(59, 100, 189, 0.5)'
      default:
        return 'rgba(46, 175, 175, 0.5)'
    }
}
