var string1 ="Hello";
var string2='JavaScript';
var result = string1+ " " + string2;//concatenation
result = string1.concat(" ",string2,"!");

var welcome = "Welcome to \"JavaScript\" Training";//Welcome to "JavaScript" Training
var welcome2 = 'Welcome to "JavaScript" Training';//Welcome to "JavaScript" Training
var welcome3 = "Welcome to 'JavaScript' Training";//Welcome to 'JavaScript' Training

console.log(result)
console.log(welcome)
console.log(welcome2)
console.log(welcome3)
console.log(welcome.toUpperCase)
console.log(welcome.toLowerCase)
console.log(`Welcome to "JavaScript" Training hat : ${welcome.length} Zeichen!`)

console.log(`${string1} and welcome to ${string2}`);//template string
console.log(result.substring(0,5)); ///Hello

string1 = " AB ";
string2 = " C D ";
result1 = string1 + string2;// " AB  C D "
result2 = string1.trim() + string2.trim();// "ABC D"

console.log(result1);
console.log(result2);

var string3 = "Hello JavaScript";
result3 = string3.replace("Java","Artur");//ersetzen java durch artur
console.log(result3);

string4 = "A Blue bottle with a blue liquid is on a blue table";
string5 = "A Blue bottle, with a blue liquid, is on a blue table";
console.log(string4.replace("blue","green"));//nur erste blue ersetzen
console.log(string4.replace(/blue/g,"g r e e n"));// RegularExpression - /regex/ is inside of slashes
console.log(string4.replace(/blue/gi,"GREEN"));// RegularExpression - /regex/ is inside of slashes
//g - global, i - ignoreCase, m - multiline matching

console.log(result.split(''));// ARRAY [ "H", "e", "l", "l", "o", " ", "J", "a", "v", "a", … ]
console.log(string4[0]);
console.log(string5.split(','));
console.log(string5.split(' '));
