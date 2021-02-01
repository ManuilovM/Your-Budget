module.exports = function (length = 15){
    var text = "";
    var possible = "aZbYcXdWeVfUgThSiRjQkPlOmNnMoLpKqJrIsHtGuFvEwDxCyBzA";

    for( var i=0; i < length; i++ )
        text += possible.charAt(Math.floor(Math.random() * (possible.length+1)));

    return text;
}