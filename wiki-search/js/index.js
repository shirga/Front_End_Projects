function search_wiki(searchTitle) {
  $.ajax({
    url: 'https://en.wikipedia.org/w/api.php',
    dataType: 'jsonp',
    data: {
      action: 'query',
      format: 'json',
      prop: 'extracts',
      exchars: '200',
      exlimit: 'max',
      explaintext: '',
      exintro: '',
      pilimit: 'max',
      rawcontinue: '',
      generator: 'search',
      gsrsearch: searchTitle,
      gsrnamespace: '0',
      gsrlimit: '10'
    },
    success: function(result) {
      var results_html = ""
      //console.log(result.query.pages);
      var pages = result.query.pages;
      var link = "https://en.wikipedia.org/wiki/"
      for (var k in pages) {
        results_html += '<div id="article" class= "article col-lg-offset-2 col-lg-8"> <a href="'+link+pages[k]["title"]+'" target="_blank"><h3>';
        //console.log(pages[k]["title"]);
        results_html += pages[k]["title"] +'</h3><div class="extract">'
        results_html += pages[k]["extract"] +"</div></a></div>";
      }
     $("#results").html(results_html); 
    }
  });
}

$(document).ready(function() {

  $('#search').keydown(function(event) {
    var keyCode = (event.keyCode ? event.keyCode : event.which);
    if (keyCode == 13) {
      var search = $("#search").val();
      search_wiki(search);

    }
  });

  $("#get_search").click(function() {
    var search = $("#search").val();
    $("#results").html(search);
    search_wiki(search);
  });
  
  $("#article").mouseover(function(){
    $("#article").css("background-color", "yellow");
  });
  
  $("#article").mouseout(function(){
      $("#article").css("background-color", "lightgray");
   });
  

});