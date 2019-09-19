var containerDiv = $(".container");

$(document).ready(function() {
  $("#business").click(function() {
    containerDiv.html(" ");
    $.ajax({
      url:
        "https://newsapi.org/v2/top-headlines?category=business&apiKey=8c8c8bc1dd2f4832aac04c52ec954686",
      method: "GET",
      success: function(data) {
        createNews(data);
      }
    });
  });

  $("#entertainment").click(function() {
    containerDiv.html(" ");
    $.ajax({
      url:
        "https://newsapi.org/v2/top-headlines?category=entertainment&apiKey=8c8c8bc1dd2f4832aac04c52ec954686",
      method: "GET",
      success: function(data) {
        createNews(data);
      }
    });
  });

  $("#general").click(function() {
    containerDiv.html(" ");
    $.ajax({
      url:
        "https://newsapi.org/v2/top-headlines?category=general&apiKey=8c8c8bc1dd2f4832aac04c52ec954686",
      method: "GET",
      success: function(data) {
        createNews(data);
      }
    });
  });

  $("#health").click(function() {
    containerDiv.html(" ");
    $.ajax({
      url:
        "https://newsapi.org/v2/top-headlines?category=health&apiKey=8c8c8bc1dd2f4832aac04c52ec954686",
      method: "GET",
      success: function(data) {
        createNews(data);
      }
    });
  });

  $("#science").click(function() {
    containerDiv.html(" ");
    $.ajax({
      url:
        "https://newsapi.org/v2/top-headlines?category=science&apiKey=8c8c8bc1dd2f4832aac04c52ec954686",
      method: "GET",
      success: function(data) {
        createNews(data);
      }
    });
  });

  $("#sports").click(function() {
    containerDiv.html(" ");
    $.ajax({
      url:
        "https://newsapi.org/v2/top-headlines?category=sports&apiKey=8c8c8bc1dd2f4832aac04c52ec954686",
      method: "GET",
      success: function(data) {
        createNews(data);
      }
    });
  });

  $("#technology").click(function() {
    containerDiv.html(" ");
    $.ajax({
      url:
        "https://newsapi.org/v2/top-headlines?category=technology&apiKey=8c8c8bc1dd2f4832aac04c52ec954686",
      method: "GET",
      success: function(data) {
        createNews(data);
      }
    });
  });
});

function createNews(data) {
  for (var i = 0; i < data.articles.length; i++) {
    var article = data.articles[i];

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

    containerDiv.append(details);
  }
}
