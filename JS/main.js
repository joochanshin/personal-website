function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function onload_(){
	for(let i = 0; i < 4; i++){
		
		document.getElementsByClassName("shape")[i].style.marginTop = ""+getRandomInt(1000)+"px"; 
		
		document.getElementsByClassName("shape")[i].style.marginLeft = ""+getRandomInt(2000)+"px"; 
		
		document.getElementsByClassName("shape1")[i].style.marginTop = ""+getRandomInt(1000)+"px"; 
		
		document.getElementsByClassName("shape1")[i].style.marginLeft = ""+getRandomInt(2000)+"px"; 
		
		document.getElementsByClassName("shape2")[i].style.marginTop = ""+getRandomInt(1000)+"px"; 
		
		document.getElementsByClassName("shape2")[i].style.marginLeft = ""+getRandomInt(2000)+"px"; 

	}
}

setInterval(function(){
	for(let i = 0; i < 4; i++){
		document.getElementsByClassName("shape")[i].style.marginTop = ""+getRandomInt(1000)+"px"; 
		
		document.getElementsByClassName("shape")[i].style.marginLeft = ""+getRandomInt(2000)+"px"; 
	}
}, 2000);

setInterval(function(){
	for(let j = 0; j < 4; j++){
		document.getElementsByClassName("shape1")[j].style.marginTop = ""+getRandomInt(1000)+"px"; 
	
		document.getElementsByClassName("shape1")[j].style.marginLeft = ""+getRandomInt(2000)+"px"; 
	}
}, 4000);

setInterval(function(){
	for(let k = 0; k < 4; k++){
		document.getElementsByClassName("shape2")[i].style.marginTop = ""+getRandomInt(1000)+"px"; 
	
		document.getElementsByClassName("shape2")[i].style.marginLeft = ""+getRandomInt(2000)+"px"; 
	}
}, 3000);