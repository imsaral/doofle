var str = "dal makhani";
var oReq = new XMLHttpRequest();
str = str.replace(/ /g, "+");
oReq.addEventListener("load", reqListener);
oReq.open(
  "GET",
  `https://api.edamam.com/search?q=${str}&app_id=07ebeb3d&app_key=0a846267a56826b3ea7b5c98277011e4`
);
oReq.send();
function reqListener() {
  var obj = JSON.parse(this.responseText);
  console.log(obj);
  var parent = document.getElementById("content");
  var newDiv = document.createElement("div");

  let i;
  for (i in obj.hits) {
    if (i >= 10) break;
    var head = document.createElement("h3");
    var div1 = document.createElement("div");
    div1.setAttribute("class", "recipe");
    var url = document.createElement("a");
    url.setAttribute("href", "" + obj.hits[i].recipe.url);
    url.setAttribute("target", "_blank");
    url.innerHTML = "View Recipe";
    var div2 = document.createElement("div");
    div2.setAttribute("class", "image");
    var img = document.createElement("img");
    img.setAttribute("class", "pic");
    img.setAttribute("src", "" + obj.hits[i].recipe.image);
    console.log(img);
    var ul = document.createElement("ul");
    head.innerHTML = obj.hits[i].recipe.label;
    let j;
    for (j in obj.hits[i].recipe.ingredients) {
      var li = document.createElement("li");
      li.innerHTML = obj.hits[i].recipe.ingredients[j].text;
      //console.log(li);
      ul.appendChild(li);
    }
    div2.appendChild(img);
    div1.appendChild(head);
    div1.appendChild(ul);
    div1.appendChild(url);
    div1.appendChild(document.createElement("hr"));
    newDiv.appendChild(div1);
    newDiv.appendChild(div2);
    parent.appendChild(newDiv);
  }
}
