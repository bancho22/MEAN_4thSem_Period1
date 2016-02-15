/**
 * Created by Bancho on 08-Feb-16.
 */

var names = ["Lars", "Jan", "Peter", "Bo", "Frederik", "Bancho"];

names = names.filter(function(name){
    if(name.length <= 3){
        return true;
    };
});

names = names.map(function(name){
    return name.toUpperCase();
});

names.forEach(function(name){
    console.log(name);
});