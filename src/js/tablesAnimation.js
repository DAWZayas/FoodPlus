function showOver (number) {
  var newImage = "./pictures/overTable.png";
  document.getElementById ("table" + number).src = newImage;
}

function showOut (number) {
  var newImage = "./pictures/normalTable.png";
  document.getElementById ("table" + number).src = newImage;
}

function showSelected (number) {
  var newImage = "./pictures/selectedTable.png";
  document.getElementById ("table" + number).src = newImage;
}