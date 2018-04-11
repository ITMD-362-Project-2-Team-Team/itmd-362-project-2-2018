print = console.log

allCheckboxes = $('li#seats input[type="checkbox"]')
outputBox = $('#selected-seats')
selected = []

$(document).ready(function() //when document loads
{
  print("Ready!")
  
  allCheckboxes.on('click', function(e) //click a box
  {
    selected = []
    
    //for all checked
    $('li#seats input[type="checkbox"]:checked').each(function(i, elt)
    {
      selected.push(elt.name);
    })
    
    str = selected.join(', ') //join by comma
    
    outputBox.val(str)
    
  });
  
});
