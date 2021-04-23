//string

//Find string length 
var txt = "kaviya";
var str = txt.length;
console.log("str",str)

//Note : If text not found return -1
//indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string
var strindexof = txt.indexOf("k")
console.log("strindexof",strindexof)

//lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
var strlastindexof = txt.lastIndexOf("a")
console.log("strlastindexof",strlastindexof)

//The indexOf() method accepts a second parameter as the starting position for the search
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate",15);
console.log("pos",pos)

//The lastIndexOf() method accepts a second parameter as the starting position for the search.
//Remember that the lastIndexOf() method searches backwards, so position 15 means start the search at position 15, and search to the beginning.
//Position 15 is position 15 from the beginning.
var str = "hello kaviya , hi jani , how are you , i am good kaviya  !";
var pos = str.lastIndexOf("kaviya", 15);
console.log("pos",pos)

//The search() method returns the position of the first occurrence of a specified text in a string:
var str = "Please locate where 'locate' occurs!";
var search = str.search("locate");
console.log("search",search)

// if string is there it will return true
//String.includes() vs Array.includes()
//String.includes() he includes() method determines whether one string may be found within another string returning true or false as appropriate.
//Array.includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
var str = "potatopotato"
var search = str.includes("potato");
console.log("search",search)

//Extracting String Parts
//There are 3 methods for extracting a part of a string:
//slice(start, end)
//substring(start, end)
//substr(start, length)
var str = "Apple, Banana, Kiwi";
var res = str.slice(7,16);
console.log("res",res)

//If a parameter is negative, the position is counted from the end of the string.
//This example slices out a portion of a string from position -12 to position -6:
//note : count from end
var str = "Apple, Banana, Kiwi";
var res = str.slice(-12, -6);
console.log("res",res)

//If you omit the second parameter, the method will slice out the rest of the string:
var str = "Apple, Banana, Kiwi";
var res = str.slice(7);
console.log("res",res)

//counting from the end
//Negative positions do not work in Internet Explorer 8 and earlier.
var str = "Apple, Banana, Kiwi";
var res = str.slice(-16);
console.log("res",res)


//substring() is similar to slice().
//The difference is that substring() cannot accept negative indexes.
//If you omit the second parameter, substring() will slice out the rest of the string.
//The difference is that the second parameter specifies the length of the extracted part.
var str = "Apple, Banana, Kiwi";
var res = str.substring(7, 13);
console.log("res",res)

//If the first parameter is negative, the position counts from the end of the string.
var str = "Apple, Banana, Kiwi";
var res = str.substr(-6);
console.log("res",res)


//The replace() method replaces a specified value with another value in a string:
//The replace() method does not change the string it is called on. It returns a new string.
str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3Schools");
console.log("n",n)

//By default, the replace() method replaces only the first match:
str = "Please visit Microsoft and Microsoft!";
var n = str.replace("Microsoft", "W3Schools");
console.log("n",n)

//By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:
str = "Please visit Microsoft!";
var n = str.replace("MICROSOFT", "W3Schools");
console.log("n",n)

//A string is converted to upper case with toUpperCase():
var text1 = "Hello World!";     
var text2 = text1.toUpperCase();
console.log("text2",text2)

//A string is converted to lower case with toLowerCase():
var text1 = "Hello World!";   
var text2 = text1.toLowerCase(); 
console.log("text2",text2)

//concat() joins two or more strings:
var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2);
console.log("text3",text3)

//the concat() method can be used instead of the plus operator. These two lines do the same:
//All string methods return a new string. They don't modify the original string.
//Formally said: Strings are immutable: Strings cannot be changed, only replaced.
var text = "Hello" + " " + "World!";
var text = "Hello".concat(" ", "World!");
console.log("text",text)

//The trim() method removes whitespace from both sides of a string:
var str = "       Hello World!        ";
console.log(str.trim());

//The charAt() method returns the character at a specified index (position) in a string:
var str = "HELLO WORLD";
var res = str.charAt("WORLD");   
console.log("charAt",res)

//The charCodeAt() method returns the unicode of the character at a specified index in a string:
var str = "HELLO WORLD";
var res = str.charCodeAt(1);
console.log("res",res)

//Property Access
//ECMAScript 5 (2009) allows property access [ ] on strings:
var str = "HELLO WORLD";
var res = str[0];  
console.log("res",res)  

//Converting a String to an Array
//A string can be converted to an array with the split() method:
var txt = "a,b,c|d,e";   // String
var res1= txt.split(","); 
console.log("res1",res1)         
var res2 =txt.split(" ");          
console.log("res2",res2)
var res3 = txt.split("|");  
console.log("res3",res3)


