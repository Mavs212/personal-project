  var apiID = '5d0de430';
  var apiKey = 'e854c40c98b9131e8685322b1db966c5';
  var baseURL = 'http://api.yummly.com/v1/api/recipes?_app_id='+apiID+'&_app_key='+apiKey+'&q=Main%20Dishes&allowedCuisine%5B%5D=cuisine%5Ecuisine-';
  var diets = [{"id":"396","shortDescription":"Dairy-Free","longDescription":"Dairy-Free","searchValue":"396^Dairy-Free","type":"allergy","localesAvailableIn":["en-US"]},{"id":"397","shortDescription":"Egg-Free","longDescription":"Egg-Free","searchValue":"397^Egg-Free","type":"allergy","localesAvailableIn":["en-US"]},{"id":"393","shortDescription":"Gluten-Free","longDescription":"Gluten-Free","searchValue":"393^Gluten-Free","type":"allergy","localesAvailableIn":["en-US"]},{"id":"394","shortDescription":"Peanut-Free","longDescription":"Peanut-Free","searchValue":"394^Peanut-Free","type":"allergy","localesAvailableIn":["en-US"]},{"id":"398","shortDescription":"Seafood-Free","longDescription":"Seafood-Free","searchValue":"398^Seafood-Free","type":"allergy","localesAvailableIn":["en-US"]},{"id":"399","shortDescription":"Sesame-Free","longDescription":"Sesame-Free","searchValue":"399^Sesame-Free","type":"allergy","localesAvailableIn":["en-US"]},{"id":"400","shortDescription":"Soy-Free","longDescription":"Soy-Free","searchValue":"400^Soy-Free","type":"allergy","localesAvailableIn":["en-US"]},{"id":"401","shortDescription":"Sulfite-Free","longDescription":"Sulfite-Free","searchValue":"401^Sulfite-Free","type":"allergy","localesAvailableIn":["en-US"]},{"id":"395","shortDescription":"Tree Nut-Free","longDescription":"Tree Nut-Free","searchValue":"395^Tree Nut-Free","type":"allergy","localesAvailableIn":["en-US"]},{"id":"392","shortDescription":"Wheat-Free","longDescription":"Wheat-Free","searchValue":"392^Wheat-Free","type":"allergy","localesAvailableIn":["en-US"]}];
  var cuisines = [{"id":"cuisine-american","name":"American","type":"cuisine","description":"American","searchValue":"cuisine^cuisine-american","localesAvailableIn":["en-US"]},{"id":"cuisine-kid-friendly","name":"Kid-Friendly","type":"cuisine","description":"Kid-Friendly","searchValue":"cuisine^cuisine-kid-friendly","localesAvailableIn":["en-US"]},{"id":"cuisine-italian","name":"Italian","type":"cuisine","description":"Italian","searchValue":"cuisine^cuisine-italian","localesAvailableIn":["en-US"]},{"id":"cuisine-asian","name":"Asian","type":"cuisine","description":"Asian","searchValue":"cuisine^cuisine-asian","localesAvailableIn":["en-US"]},{"id":"cuisine-mexican","name":"Mexican","type":"cuisine","description":"Mexican","searchValue":"cuisine^cuisine-mexican","localesAvailableIn":["en-US"]},{"id":"cuisine-southern","name":"Southern & Soul Food","type":"cuisine","description":"Southern & Soul Food","searchValue":"cuisine^cuisine-southern","localesAvailableIn":["en-US"]},{"id":"cuisine-french","name":"French","type":"cuisine","description":"French","searchValue":"cuisine^cuisine-french","localesAvailableIn":["en-US"]},{"id":"cuisine-southwestern","name":"Southwestern","type":"cuisine","description":"Southwestern","searchValue":"cuisine^cuisine-southwestern","localesAvailableIn":["en-US"]},{"id":"cuisine-barbecue-bbq","name":"Barbecue","type":"cuisine","description":"Barbecue","searchValue":"cuisine^cuisine-barbecue-bbq","localesAvailableIn":["en-US"]},{"id":"cuisine-indian","name":"Indian","type":"cuisine","description":"Indian","searchValue":"cuisine^cuisine-indian","localesAvailableIn":["en-US"]},{"id":"cuisine-chinese","name":"Chinese","type":"cuisine","description":"Chinese","searchValue":"cuisine^cuisine-chinese","localesAvailableIn":["en-US"]},{"id":"cuisine-cajun","name":"Cajun & Creole","type":"cuisine","description":"Cajun & Creole","searchValue":"cuisine^cuisine-cajun","localesAvailableIn":["en-US"]},{"id":"cuisine-mediterranean","name":"Mediterranean","type":"cuisine","description":"Mediterranean","searchValue":"cuisine^cuisine-mediterranean","localesAvailableIn":["en-US"]},{"id":"cuisine-greek","name":"Greek","type":"cuisine","description":"Greek","searchValue":"cuisine^cuisine-greek","localesAvailableIn":["en-US"]},{"id":"cuisine-english","name":"English","type":"cuisine","description":"English","searchValue":"cuisine^cuisine-english","localesAvailableIn":["en-US"]},{"id":"cuisine-spanish","name":"Spanish","type":"cuisine","description":"Spanish","searchValue":"cuisine^cuisine-spanish","localesAvailableIn":["en-US"]},{"id":"cuisine-thai","name":"Thai","type":"cuisine","description":"Thai","searchValue":"cuisine^cuisine-thai","localesAvailableIn":["en-US"]},{"id":"cuisine-german","name":"German","type":"cuisine","description":"German","searchValue":"cuisine^cuisine-german","localesAvailableIn":["en-US"]},{"id":"cuisine-moroccan","name":"Moroccan","type":"cuisine","description":"Moroccan","searchValue":"cuisine^cuisine-moroccan","localesAvailableIn":["en-US"]},{"id":"cuisine-irish","name":"Irish","type":"cuisine","description":"Irish","searchValue":"cuisine^cuisine-irish","localesAvailableIn":["en-US"]},{"id":"cuisine-japanese","name":"Japanese","type":"cuisine","description":"Japanese","searchValue":"cuisine^cuisine-japanese","localesAvailableIn":["en-US"]},{"id":"cuisine-cuban","name":"Cuban","type":"cuisine","description":"Cuban","searchValue":"cuisine^cuisine-cuban","localesAvailableIn":["en-US"]},{"id":"cuisine-hawaiian","name":"Hawaiian","type":"cuisine","description":"Hawaiian","searchValue":"cuisine^cuisine-hawaiian","localesAvailableIn":["en-US"]},{"id":"cuisine-swedish","name":"Swedish","type":"cuisine","description":"Swedish","searchValue":"cuisine^cuisine-swedish","localesAvailableIn":["en-US"]},{"id":"cuisine-hungarian","name":"Hungarian","type":"cuisine","description":"Hungarian","searchValue":"cuisine^cuisine-hungarian","localesAvailableIn":["en-US"]},{"id":"cuisine-portuguese","name":"Portuguese","type":"cuisine","description":"Portuguese","searchValue":"cuisine^cuisine-portuguese","localesAvailableIn":["en-US"]}];
  
  function dietAppender(){
    diets.forEach(function(currentValue, index, array){
    $(".diet").append("<li><button type='button' class='btn-group-xs' id='"+currentValue.searchValue+"'>"+currentValue.shortDescription+"</button></li>");
    });
  }
  function cuisineAppender(){
    cuisines.forEach(function(currentValue, index, array){
    $(".cuisine").append("<li><button type='button' class='btn-group-xs' id='"+currentValue.searchValue+"'>"+currentValue.name+"</button></li>");
    });
  }
function ajaxStringGetter(arr){
  var cool="";
  for (var i = 0; i < arr.length; i++){
    if(i===((arr.length)-1)){
      cool += arr[i].id;
    }else{
      cool += arr[i].id+"&";
    }
  }
    return cool;
}



/*
 diets.forEach(function(currentValue, index, array){
  console.log(currentValue.longDescription);
  });
*/

$(document).on('ready', function() {
  dietAppender();
  cuisineAppender();

$(document).on('click', '.diet .btn-group-xs', function() {
    $(this).toggleClass('clicked');
  
});

$(document).on('click', '.cuisine .btn-group-xs', function () {
  $('.cuisine .btn-group-xs').not(this).removeClass('clicked');    
  $(this).toggleClass('clicked');
  console.log($(this).attr('id'));
  console.log($('#Egg-Free').innerHTML);
});

$(document).on('click', '#sub', function(event) {
  event.preventDefault();
  console.log($('.diet .clicked'))
  var cool2 = ajaxStringGetter($('.diet .clicked'));
  console.log(cool2);
    });
});

  /*
   $('#nav > li > a').click(function(){
    $('#nav li ul').removeClass('active');
    if ($(this).attr('class') != 'active'){
      $(this).parent().find('ul').addClass('active');
    }
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
