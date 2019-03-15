var x=0;
var png = ['https://i.imgur.com/PSfBVhN.png','https://i.imgur.com/0zctgcB.png','https://i.imgur.com/shHwovd.png'];
function changeNext(){
  console.log("next");
  if(x==2)
    x=0;
  else
    x++; 
  document.getElementById("topic").src = png[x];
}   

function changePrev(){
  console.log("prev");
  if(x==0)
    x=2;
  else  
    x--;  
  document.getElementById("topic").src = png[x];
} 
  
function change(){
	$("#topic").fadeOut(700, function() {
  	if(x==2)
      x=0;
    else
      x++; 
 	  document.getElementById("topic").src = png[x];
    $("#topic").fadeIn(500);
  });
}

function start(){
  setInterval(change,5000);
}
