/**
 * Created by Bancho on 08-Feb-16.
 */

function handleNumArrays(na1, na2, callback){
    var na3 = [];
    for(var i = 0; i < na1.length; i++){
        na3[i] = na1[i] + na2[i];
    };
    if(typeof callback === "function"){
        callback(na3);
    }
    else{
        console.log("3rd argument was not a function");
    }
};

var a = [1, 2, 3];
var b = [4, 5, 6];

handleNumArrays(a, b, function(result){
    console.log(result.join(" ,"));
});

handleNumArrays(a, b, function(result){
    var sum = 0;
    result.forEach(function(num){
        sum += num;
    });
    console.log(sum);
});

handleNumArrays(a, b, function(result){
    var multipliedNums = result.map(function(entry){
        return entry * 10;
    });
    console.log(multipliedNums.join(" ,"));
});
