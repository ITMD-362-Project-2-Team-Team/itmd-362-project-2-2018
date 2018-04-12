print = console.log

allCheckboxes = $('li#seats input[type="checkbox"]')
outputBox = $('#selected-seats')
costBox = $('#price')
selected = []

function countUpSeats()
{
	selected = []
    
    //for all checked
    $('li#seats input[type="checkbox"]:checked').each(function(i, elt)
    {
      selected.push(elt.name)
    })
    
    str = selected.join(', ') //join by comma
    
    outputBox.val(str)
}

function countUpCost()
{
	cost = 0
    
    //for all checked
    $('li#seats input[type="checkbox"]:checked').each(function(i, elt)
    {
      cost += 500
    })
        
    costBox.val('$'+(cost/100))


}

$(document).ready(function() //when document loads
{
  print("Ready!")
  
  allCheckboxes.on('click', function(e) //click a box
  {
    countUpSeats();
	countUpCost();
  });
  
});
