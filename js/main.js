var apiID = '5d0de430';
var apiKey = 'e854c40c98b9131e8685322b1db966c5';
var baseURL = 'http://api.yummly.com/v1/api/recipes?_app_id='+apiID+'&_app_key='+apiKey+'&q=Main%20Dishes&allowedCuisine%5B%5D=cuisine%5Ecuisine-';
var diets = [{"id":"396","shortDescription":"Dairy-Free","longDescription":"Dairy-Free","searchValue":"396^Dairy-Free","type":"allergy","localesAvailableIn":["en-US"]},{"id":"397","shortDescription":"Egg-Free","longDescription":"Egg-Free","searchValue":"397^Egg-Free","type":"allergy","localesAvailableIn":["en-US"]},{"id":"393","shortDescription":"Gluten-Free","longDescription":"Gluten-Free","searchValue":"393^Gluten-Free","type":"allergy","localesAvailableIn":["en-US"]},{"id":"394","shortDescription":"Peanut-Free","longDescription":"Peanut-Free","searchValue":"394^Peanut-Free","type":"allergy","localesAvailableIn":["en-US"]},{"id":"398","shortDescription":"Seafood-Free","longDescription":"Seafood-Free","searchValue":"398^Seafood-Free","type":"allergy","localesAvailableIn":["en-US"]},{"id":"399","shortDescription":"Sesame-Free","longDescription":"Sesame-Free","searchValue":"399^Sesame-Free","type":"allergy","localesAvailableIn":["en-US"]},{"id":"400","shortDescription":"Soy-Free","longDescription":"Soy-Free","searchValue":"400^Soy-Free","type":"allergy","localesAvailableIn":["en-US"]},{"id":"401","shortDescription":"Sulfite-Free","longDescription":"Sulfite-Free","searchValue":"401^Sulfite-Free","type":"allergy","localesAvailableIn":["en-US"]},{"id":"395","shortDescription":"Tree Nut-Free","longDescription":"Tree Nut-Free","searchValue":"395^Tree Nut-Free","type":"allergy","localesAvailableIn":["en-US"]},{"id":"392","shortDescription":"Wheat-Free","longDescription":"Wheat-Free","searchValue":"392^Wheat-Free","type":"allergy","localesAvailableIn":["en-US"]}];
var cuisines = 


$(document).on('ready', function() {
  $.get('http://api.yummly.com/v1/api/recipes?_app_id=5d0de430&_app_key=e854c40c98b9131e8685322b1db966c5&allowedAllergy[]=393^Gluten-Free')
  .done(function(response) {
    console.log(response);
  });
});

/*



  populateDropdown();

  $('form').on('submit', function(event){
    event.preventDefault();
    var selectedCusine = $('#cuisine-dropdown option:selected').val();
    var url = baseURL + selectedCusine;
    $.get(url)
    .done(function(response) {
      var maxResults = response.totalMatchCount;
      var randomNum = Math.floor((Math.random() * maxResults) + 1);
      var newURL = url + '&maxResult=1&start='+ randomNum;
      $.get(newURL)
      .done(function(res) {
        console.log(res);
        $('.results').show();
        $('#cuisine-results').html(res.matches[0].recipeName);
      })
      .fail(function(err){
        console.log(err); // handle errors
      });
    })
    .fail(function(error){
      console.log(error); // handle errors
    });
  });

});

function populateDropdown() {
  var cuisines = ['american', 'greek', 'mexican', 'indian', 'chinese'];
  cuisines.forEach(function(cuisine){
    $('#cuisine-dropdown').append('<option>'+cuisine+'</option>');
  });
*/
