var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var SpreadArray;
(function (SpreadArray) {
    var a = [1, 2, 3];
    var b = [4, 5, 6];
    var c = __spreadArrays(a, b);
    var d = a.concat(b);
    console.log('c before', c);
    console.log('d before', d);
    a.push(10);
    console.log('a', a);
    console.log('c after', c);
    console.log('d after', d);
})(SpreadArray || (SpreadArray = {}));
