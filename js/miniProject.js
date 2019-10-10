var containerDiv = $(".container");
var alertDiv = $(".alert");
var NewsFullInfoDiv = $(".newsFullInfo");
var boxHeaderDiv = $(".boxHeader");
var apiKey = "&apiKey=8c8c8bc1dd2f4832aac04c52ec954686";

$(document).ready(function() {
  alertDiv.html("Please Wait While Loading News..");
  ajaxElement(
    "https://newsapi.org/v2/top-headlines?category=business" + apiKey
  );
  $("#business").css("color", "orange");
  $(".topHeadlineMenu").css("color", "#9c8d8d");

  /* headerMenu */

  $(".topHeadlineMenu").click(function() {
    $(".navigation-menu").css("color", "#afa7a7");
    $("#business").css("color", "orange");
    $(".headerMenu").css("color", "white");
    $(this).css("color", "#9c8d8d");
    $("#headerId").show();
    alertDiv.html("Please Wait loading News..");
    containerDiv.html(" ");
    ajaxElement(
      "https://newsapi.org/v2/top-headlines?category=business" + apiKey
    );
  });

  $(".allNewsMenu").click(function() {
    $(".headerMenu").css("color", "white");
    $(this).css("color", "#9c8d8d");
    $("#headerId").hide();
    alertDiv.html("Please Wait loading News..");
    containerDiv.html(" ");
    ajaxElement(
      "https://newsapi.org/v2/everything?q=bitcoin" + "&pageSize=100" + apiKey
    );
  });

  $("#searchBar").click(function() {
    var searchTextbox = $(".search").val();
    if (searchTextbox == "") {
      alert("Please Enter Value");
    } else {
      $(".topHeadlineMenu").css("color", "white");
      $(".allNewsMenu").css("color", "#9c8d8d");
      $("#headerId").hide();

      containerDiv.html(" ");
      ajaxElement(
        "https://newsapi.org/v2/everything?q=" +
          searchTextbox +
          "&pageSize=100" +
          apiKey
      );
    }
  });

  /* headerMenu end */

  /* Country Work */

  // var country =
  //   "<div class='country'" +
  //   "<input type='checkbox' id='' />" +
  //   "<label for=''> </label>" +
  //   "</div>";

  /* Country Work End */

  /* Sources */

  $(".btn").click(function() {
    ajaxElement(
      "https://newsapi.org/v2?apiKey=8c8c8bc1dd2f4832aac04c52ec954686"
    );

    // ajaxElement(
    //   "https://newsapi.org/v2/top-headlines?country=bg&apiKey=6873ac8d35df462da4be4d1c63b0f98e"
    // );
  });

  /* Sources End */

  $(".navigation-menu").click(function() {
    $(".navigation-menu").css("color", "#afa7a7");
    //$("#business").css("color", "orange");
    $(this).css("color", "orange");
    alertDiv.html("Please Wait loading News..");
    containerDiv.html(" ");
    //$(this).attr("id");
    ajaxElement(
      "https://newsapi.org/v2/top-headlines?category=" + this.id + apiKey
    );
  });

  // $(".container").on("click", "div", function() {
  //   alert("new page");
  //   //window.open("news_details.html", "_self"); //"_self" open url in same window and same tab
  //   window.location.href = "http://google.com";
  //   //$(location).attr('href',url);
  // });

  function ajaxElement(url) {
    var configObject = {
      url: url,
      method: "GET",
      success: function(data) {
        createNews(data);
      },
      error: function(data) {
        alertDiv.html("Cannot load news now. Please try later!!!");
      }
    };
    $.ajax(configObject);
  }

  function createNews(data) {
    var text = [];

    for (var i = 0; i < data.articles.length; i++) {
      var article = data.articles[i];

      if (article.author == null) {
        article.author = "";
      }

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
        "<div class='urldiv inlineBlock' id='urlDiv' data-title= '" +
        article.url +
        "'> " +
        "</div>" +
        "</div>";

      alertDiv.html("");
      containerDiv.append(details);

      //$(".image").DOPImageLoader();

      text = $("#urlDiv").attr("data-title");

      // alert(text);
    }
  }

  // $("body").DOPImageLoader({
  //   LoaderURL: "images/loader2.gif",
  //   NoImageURL: "images/noimage.jpg"
  // });

  $(".image").lazy({
    onError: function(element) {
      // called whenever an element could not be handled
      $(element).src("../images/noimage.jpg");
    }
  });
});
