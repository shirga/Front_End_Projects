var quote = "";
var aouthor = "";

function getQuote() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous", false);
  xhr.setRequestHeader("X-Mashape-Key", "qAUkguaiiimshbkj8qdZOzYOaicKp1XoBX8jsnbL4KUiMewqFn");
  //xhr.setRequestHeader('Accept', 'application/json');
  xhr.send();
  if (xhr.status == 200) {
    data = JSON.parse(xhr.responseText);
    quote = data.quote
    document.getElementById("quote").innerHTML = quote;
    author = data.author
    document.getElementById("author").innerHTML = "- "+author;
    //console.log(data);
  } else {
    console.log("transaction error");
  }
}

function changeColor() {
  var color_arr = ["#ff6666", "#4d0000", "#2d2d86", "#80002a", "#004d4d", "#3d3536", "#26734d", "#cc6600", "#4d004d", "#00b386"]
  rand_color = color_arr[Math.floor(Math.random() * 10)];
  document.body.style.backgroundColor = rand_color;
  document.body.style.color = rand_color;
  document.getElementById("getQuote").style.backgroundColor = rand_color;
  document.getElementById("twitter").style.backgroundColor = rand_color;
}

function sendTwit(){
  window.open('http://twitter.com/intent/tweet?text='+encodeURI('"'+quote+'", '+author),'_blank');
  //console.log(quote);
} 

document.getElementById("getQuote").onclick = function() {
  //console.log("click");
  getQuote()
  changeColor()
}

document.getElementById("twitter").onclick = function(){
  sendTwit();
} 

document.ready(getQuote());