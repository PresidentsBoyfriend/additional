module.exports = function check(str, bracketsConfig) {
    var chars = str.split(''),
        stack = [],
        open = ['{', '(', '[' , '|' ],
        close = ['}', ')', ']' , '|'],
        closeIndex,
        openIndex;
       var counter = 0,
       counter2 = 0;
       var chars2 = bracketsConfig.join();
       var chars3 = chars2.split('');
       var alphaNumeric = chars.concat(chars3);
    for (var i = 0, len = alphaNumeric.length; i < len; i++) {
       openIndex = open.indexOf(alphaNumeric[i]);
        if (openIndex !== -1) {
        	if ( openIndex == '|') {
        		counter2++;
        	}
        	counter++;
           stack.push(openIndex);
           continue;
       }

       closeIndex = close.indexOf(alphaNumeric[i]);
       if (closeIndex !== -1) {
       	if (closeIndex == '|') {
       		counter2--;
       	}
           openIndex = stack.pop();
           if (closeIndex !== openIndex || counter2!==0) {
               return false;
           }
       }
    }
    
    if (counter==0) {
    	return false;
    }
    if (stack.length !== 0) {
        return false;
    }

    return true;
}
