/**
 * Created by Bancho on 08-Feb-16.
 */


//function definitions

function myFilter(array, callback){
    var newArray = [];
    array.forEach(function(entry){
        if(callback(entry)){
            newArray.push(entry);
        };
    });
    return newArray;
};

function isLessThan4Chars(str){
    if(str.length <= 3){
        return true;
    };
};

function myMap(array, callback){
    var newArray = [];
    array.forEach(function(entry){
        newArray.push(callback(entry));
    });
    return newArray;
};

function uppercaseMeBitch(str){
    return str.toUpperCase();
};

//actual execution

var names = ["Lars", "Jan", "Peter", "Bo", "Frederik", "Bancho"];

names = myFilter(names, isLessThan4Chars);

names = myMap(names, uppercaseMeBitch);

names.forEach(function (name) {
    console.log(name);
});
