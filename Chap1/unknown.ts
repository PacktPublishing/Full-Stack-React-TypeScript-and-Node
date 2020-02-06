// this is at best ambiguous and at worst just plain wrong

let val1: unknown;
let val2: string | number;

val1 = 5;
val1 = '5';
val2 = val1;