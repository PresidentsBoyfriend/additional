module.exports = function check(str, bracketsConfig) {
    var chars = str.split(''),
        open = [],
        close = [];
    for ( var i = 0 ; i < bracketsConfig.length ; i++) {
      open[i] = bracketsConfig[i][0];
      close[i] = bracketsConfig[i][1];  
    }
    var counter = 0;
    for ( var y = 1; y<chars.length; y++){
      for ( var i = 0 ; i < open.length ; i++) {
        if (chars[y-1] == open[i] && chars[y] == close [i]) {
          chars.splice(y-1,2); 
          y=y-2;
        }
      }
    }
    if (chars.length !== 0) {
        return false;
    }
    return true;
}
