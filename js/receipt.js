print = console.log
goodies = [
  'date',
  'movie',
  'time'
]


function titleCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


// from https://stackoverflow.com/questions/814613/how-to-read-get-data-from-a-url-using-javascript
function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd   = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {}, i, n, v, nv;

    if (query === url || query === "") return;

    for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=", 2);
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);

        if (!parms.hasOwnProperty(n)) parms[n] = [];
        parms[n].push(nv.length === 2 ? v : null);
    }
    return parms;
}

if (![].includes) {
  Array.prototype.includes = function(searchElement /*, fromIndex*/ ) {
    'use strict';
    var O = Object(this);
    var len = parseInt(O.length) || 0;
    if (len === 0) {
      return false;
    }
    var n = parseInt(arguments[1]) || 0;
    var k;
    if (n >= 0) {
      k = n;
    } else {
      k = len + n;
      if (k < 0) {k = 0;}
    }
    var currentElement;
    while (k < len) {
      currentElement = O[k];
      if (searchElement === currentElement ||
         (searchElement !== searchElement && currentElement !== currentElement)) {
        return true;
      }
      k++;
    }
    return false;
  };
}


$(document).ready(function() //when document loads
{
  url = window.location.href;
  POST = parseURLParams(url);
    
  seats = [];
  cost = 0;
  
  for(var key in POST) //extract list of seats
  {
    if(POST[key] == "on")
    {
      seats.push(key);
      delete POST[key];
    }
  }
  
  console.log(POST);  
  console.log(seats);
  
  for(var key in POST)
  {
    if(goodies.includes(key)) //if it's a key we want
    {
	  var k = key;
	  k = titleCase(k);
	  
      $('#receipt ul#info').append(
        $('<li>').append(
          $('<a>').html(k+': '+POST[key])
        )
      );
    }
  }
  
  for(var i in seats)
  {
    $('#receipt ul#seats').append(
      $('<li>').append(
        $('<a>').html(seats[i])
      )
    );
    
  }
  
  
});
