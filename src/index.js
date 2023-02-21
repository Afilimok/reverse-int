module.exports = function reverse (n) {

    if (n < 0)
        return  reverse(-n);


    return n.toString().split("").reverse().join("");
}
