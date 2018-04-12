print = console.log

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

$(document).ready(function() //when document loads
{
  url = window.location.href;
  POST = parseURLParams(url);
    
  seats = []
  
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
    $('#receipt ul').append(
      $('<li>').append(
        $('<a>').html(key+': '+POST[key])
      )
    )
  }
  
  
});
