var containerDiv = $(".container");
var alertDiv = $(".alert");
var apiKey = "&apiKey=8c8c8bc1dd2f4832aac04c52ec954686";

$(document).ready(function() {
  //alertDiv.html("Please Wait While Loading News..");

  $(".navigation-menu").click(function() {
    $(".navigation-menu").css("color", "#afa7a7");
    $(this).css("color", "orange");
    alertDiv.html("Please Wait loading News..");
    containerDiv.html(" ");
    $(this).attr("id");
    $.ajax({
      url: "https://newsapi.org/v2/top-headlines?category=" + this.id + apiKey,
      method: "GET",
      success: function(data) {
        createNews(data);
      },
      error: function(data) {
        alertDiv.html("Cannot load news now. Please try later!!!");
      }
    });
  });

  $(".container").on("click", "div", function() {
    alert("new page");
    //window.open($(this).attr("href"), '_blank');
    window.open("news_details.html");
    //window.open("#").document.write("hey");
    //containerDiv.append("This is new page");
  });

  function createNews(data) {
    for (var i = 0; i < data.articles.length; i++) {
      var article = data.articles[i];

      if (article.author == null) {
        article.author = "";
      }

      // if(article.urlToImage == null){
      //   article.urlToImage = url(image/default.png);
      // }

      var details =
        "<div class='kingDiv inlineBlock'>" +
        "<img class='image inlineBlock' src='" +
        article.urlToImage +
        "' />" +
        "<br>" +
        "<div class='sourceNamediv inlineBlock'>" +
        article.source.name +
        "</div>" +
        "<br>" +
        "<div class='authordiv inlineBlock'>" +
        article.author +
        "</div>" +
        "<br>" +
        "<div class='titlediv inlineBlock'>" +
        article.title +
        "</div>" +
        "<br>" +
        "</div>";

      alertDiv.html("");
      containerDiv.append(details);
    }
  }
});

// $.ajax({
//   url: "https://newsapi.org/v2/top-headlines?category=" + this.id + apiKey,
//   method: "GET",
//   success: function(data) {
//     createNews(data);
//   },
//   error: function(data) {
//     alertDiv.html("Cannot load news now. Please try later!!!");
//   }
// });

// var request = $.ajax({
//   method: "GET",
//   url: "https://newsapi.org/v2/top-headlines?category=" + this.id + apiKey
// });

// request.done(function(data) {
//   createNews(data);
// });

// request.fail(function(data) {
//   alertDiv.html("Cannot load news now. Please try later!!!");
// });
