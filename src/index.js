module.exports = function toReadable (number) {
    let words1_19 = [
        {id:'1',name:'one'},
        {id:'2',name:'two'},
        {id:'3',name:'three'},
        {id:'4',name:'four'},
        {id:'5',name:'five'},
        {id:'6',name:'six'},
        {id:'7',name:'seven'},
        {id:'8',name:'eight'},
        {id:'9',name:'nine'},
        {id:'10',name:'ten'},
        {id:'11',name:'eleven'},
        {id:'12',name:'twelve'},
        {id:'12',name:'twelve'},
        {id:'13',name:'thirteen'},
        {id:'14',name:'fourteen'},
        {id:'15',name:'fifteen'},
        {id:'16',name:'sixteen'},
        {id:'17',name:'seventeen'},
        {id:'18',name:'eighteen'},
        {id:'19',name:'nineteen'},
    ];
    let words20_90 = [
        {id:'20',name:'twenty'},
        {id:'30',name:'thirty'},
        {id:'40',name:'forty'},
        {id:'50',name:'fifty'},
        {id:'60',name:'sixty'},
        {id:'70',name:'seventy'},
        {id:'80',name:'eighty'},
        {id:'90',name:'ninety'},
    ];
    let number1 = number;
    const w100 = 'hundred';
    let num_word = "";
    let num_concat = "";
    let space = ' ';
    let buf = ''

    if (number === 0) {
        return 'zero'
    } else {
        if (number1<20) {
            return words1_19.find(item => item.id == number1).name;
        } else {
            if (number1<100 && number1>=20) {
                if (number1%10 === 0) {
                    return words20_90.find(item => item.id == number1).name;
                } else {
                    number1 = number1.toString().split(''); 
                    number1[0] *= 10; 
                    buf = words20_90.find(item => item.id == number1[0]).name;
                    num_word = num_word.concat(buf);
                    num_word = num_word.concat(space);
                    buf = words1_19.find(item => item.id == number1[1]).name;
                    num_word = num_word.concat(buf); 
                    return num_word;   
                } 
            } else {
                if (number1 <= 999 && number1 >= 100) {
                    if (number1 % 100 == 0) {
                        number1 = number1.toString().split('');
                        buf = words1_19.find(item => item.id == number1[0]).name;
                        num_word = num_word.concat(buf);
                        num_word = num_word.concat(space);
                        num_word = num_word.concat(w100);
                        return num_word 
                    } else {
                        number1 = number1.toString().split(''); 
                        buf = words1_19.find(item => item.id == number1[0]).name;
                        num_word = num_word.concat(buf);
                        num_word = num_word.concat(space);
                        num_word = num_word.concat(w100);
                        num_word = num_word.concat(space);
                        number1.shift();
                        number1 = Number(number1.join(''));
                        if (number1<20) {
                            buf = words1_19.find(item => item.id == number1).name;
                            num_word = num_word.concat(buf);
                            return num_word;
                        } else {
                            if (number1<100 && number1>=20) {
                                if (number1%10 === 0) {
                                    buf = words20_90.find(item => item.id == number1).name;
                                    num_word = num_word.concat(buf);
                                    return num_word;
                                } else {
                                    number1 = number1.toString().split(''); 
                                    number1[0] *= 10; 
                                    buf = words20_90.find(item => item.id == number1[0]).name;
                                    num_word = num_word.concat(buf);
                                    num_word = num_word.concat(space);
                                    buf = words1_19.find(item => item.id == number1[1]).name;
                                    num_word = num_word.concat(buf); 
                                    return num_word;   
                                } 
                            }
                        buf = words.find(item => item.id == number1[1]);
                        num_word = num_word.concat(buf);    
                    }
                }
            }
        }
    }
}
}
