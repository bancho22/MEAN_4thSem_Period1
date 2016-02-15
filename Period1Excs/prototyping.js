/**
 * Created by Bancho on 08-Feb-16.
 */


//function definitions


Array.prototype.myFilter = function myFilter(callback){
    var newArray = [];
    this.forEach(function(entry){
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

Array.prototype.myMap = function myMap(callback){
    var newArray = [];
    this.forEach(function(entry){
        newArray.push(callback(entry));
    });
    return newArray;
};

//actual execution

var names = ["Lars", "Jan", "Peter", "Bo", "Frederik", "Bancho"];

names = names.myFilter(isLessThan4Chars);

names = names.myMap(function(str){
    return str.toUpperCase();
});

names.forEach(function (name) {
    console.log(name);
});
