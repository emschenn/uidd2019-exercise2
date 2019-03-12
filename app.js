var x=1;
var img = document.getElementById("pic");
var png = new Array("https://i.imgur.com/PSfBVhN.png","https://i.imgur.com/0zctgcB.png","https://i.imgur.com/shHwovd.png");
document.getElementById("next").onclick = function() {changeNext()};
document.getElementById("prev").onclick = function() {changePrev()};

function changeNext(){
  console.log("n");
  if(img.src=="https://i.imgur.com/PSfBVhN.png")
      img.src="https://i.imgur.com/0zctgcB.png";
  if(img.src=="https://i.imgur.com/0zctgcB.png")
      img.src="https://i.imgur.com/shHwovd.png";
  if(img.src=="https://i.imgur.com/shHwovd.png")
      img.src="https://i.imgur.com/PSfBVhN.png";
}   

function changePrev(){
  console.log("p");
  if(img.src=="https://i.imgur.com/PSfBVhN.png")
      img.src="https://i.imgur.com/shHwovd.png"; 
  if(img.src=="https://i.imgur.com/0zctgcB.png")
      img.src="https://i.imgur.com/PSfBVhN.png";
  if(img.src=="https://i.imgur.com/shHwovd.png")
      img.src="https://i.imgur.com/0zctgcB.png";
}
