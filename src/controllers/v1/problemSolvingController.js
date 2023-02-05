const isReverseString = (str1, str2) => {
    console.log('Str1 ' + str1);

    // #1
    // const strReverse = str2.split("").reverse().join('');
    // console.log('Reverse Str2 ' + strReverse);
    // return str1 === strReverse;

    // #2
    // const reverseLoop = reverseStringLoop(str2);
    // console.log('Reverse Str2 ' + reverseLoop);
    // return str1 === reverseLoop;

    // #3
    const strRecursive = reverseRecursive(str2);
    console.log('Reverse Str2 ' + strRecursive)
    return str1 === strRecursive;

}

const reverseRecursive = (val) => {
    if (val === '') {
        return val;
    }

    return reverseRecursive(val.substring(1)) + val.charAt(0);
}

const reverseStringLoop = (val) => {
    let str = '';
    if (val == str) {
        return str;
    }

    for (let i=val.length -1; i>=0; i--) {
        str += val[i];
    }
    return  str;
}


const reverseString = (req, res) => {
    const str1 = req.params.str1 || '';
    const str2 = req.params.str2 || '';

    if (str1 === '' || str2 === '') {
        console.log('Please input string "str1" and "str2"');
        res.send('Please input parameter "str1" and "str2"');
    }

    res.send(isReverseString(str1, str2));
}

module.exports = {reverseString};