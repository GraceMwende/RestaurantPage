var mainHeading = document.createElement("h1"); //create H1 Element
var headingtext = document.createTextNode("WELCOME TO OUR AWESOME RESTAURANT"); //create text element
mainHeading.appendChild(headingtext);
document.querySelector("#content").appendChild(mainHeading);

// add images
var img1 = document.createElement("img");
img1.src = "/dist/biriani.jpg";
document.getElementById("content").appendChild(img1);
// add text to image
var imgElement = document.createElement("p");
var imgText = document.createTextNode("This is amazing 'Biriani' coast dish");
imgElement.appendChild(imgText);
document.querySelector("#content").appendChild(imgElement);

// add image2
var img2 = document.createElement("img");
img2.src = "/dist/chinese cuisines.jpg";
document.getElementById("content").appendChild(img2);
// add text to image
var imgElement2 = document.createElement("p");
var imgText2 = document.createTextNode("Sweet Chinese Cuisuines");
imgElement2.appendChild(imgText2);
document.querySelector("#content").appendChild(imgElement2);

// add image 3
var img3 = document.createElement("img");
img3.src = "/dist/chinjao rosu.jpg";
document.getElementById("content").appendChild(img3);
// add text to image
var imgElement3 = document.createElement("p");
var imgText3 = document.createTextNode("One of a kind Chinjao rosu");
imgElement3.appendChild(imgText3);
document.querySelector("#content").appendChild(imgElement3);

// add image4
var img4 = document.createElement("img");
img4.src = "/dist/ugali.jpg";
document.getElementById("content").appendChild(img4);
// add text to image
var imgElement4 = document.createElement("p");
var imgText4 = document.createTextNode(
  "Traditional African food 'Fish and Ugali"
);
imgElement4.appendChild(imgText4);
document.querySelector("#content").appendChild(imgElement4);

var praises = document.createElement("h3");
var praisesText = document.createTextNode(
  "Here you eat original African and Chinese foods served in good portions and best chefs in the whole of Africa our attendants are super kindFood is fresh and tasty and best for take-aways too"
);
praises.appendChild(praisesText);
document.querySelector("#content").appendChild(praises);
