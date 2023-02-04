const fizzBuzz = (req, res) => {
    for (let i = 1; i <= 100; i++) {
        if (i % 15 == 0) {
            console.log(i + ' FizzBuzz');
        } else if (i % 5 == 0) {
            console.log(i + ' Buzz');
        } else if (i % 3 == 0) {
            console.log(i + ' Fizz');
        } else {
            console.log(i + ' ');
        }
    }

    res.send({
        message: 'Done',
        info: 'FizzBuzz'
    });
}

const fizzBuzzV2 = (req, res) => {
    let str = ' ';
    let multiply3 = 0, multiply5 =0, multiply15 = 0;
    for (let i=1; i <= 100; i++) {
        multiply3++;
        multiply5++;
        multiply15++;

        if (multiply15 == 15) {
            str = 'FizzBuzz';
            multiply15 = 0;
        }
        if (multiply3 == 3) {
            str = 'Fizz';
            multiply3 = 0;
        }
        if (multiply5 == 5) {
            str = 'Buzz';
            multiply5 = 0;
        }

        if (str.length == 0) {
            console.log(i + ' ');
        } else {
            console.log(i + ' ' + str);
        }
        str = ' ';
    }

    res.send({
        message: 'Done',
        info: 'FizzBuzz Optimation V2'
    });
}

module.exports = {fizzBuzz, fizzBuzzV2};