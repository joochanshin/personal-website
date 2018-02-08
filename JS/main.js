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

		document.getElementById("triangle").style.animation = "fadeIn 1s ease-in";
		document.getElementById("square1").style.animation = "rotateL 1s ease-in-out infinite alternate, fadeIn 1s ease-in";
		document.getElementById("square2").style.animation = "rotateR 1s ease-in-out infinite alternate, fadeIn 1s ease-in";
		setTimeout(function(){
			document.getElementById("triangle").style.animation = "none";
			document.getElementById("square1").style.animation = "rotateL 1s ease-in-out infinite alternate";
			document.getElementById("square2").style.animation = "rotateR 1s ease-in-out infinite alternate";
		}, 1000);
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
		document.getElementsByClassName("shape2")[k].style.marginTop = ""+getRandomInt(1000)+"px"; 
	
		document.getElementsByClassName("shape2")[k].style.marginLeft = ""+getRandomInt(2000)+"px"; 
	}
}, 3000);

$(document).ready(function(){
    $("#triangle").hover(function(){
        $(this).css("animation", "_hoverTIn_ 100s ease");
        }, function(){
        $(this).css("animation", "_hoverTOut_ 100s ease");
    });
    $("#square1").hover(function(){
        $(this).css("animation", "rotateL 1s ease-in-out infinite alternate, _hoverCIn_ 100s ease");
        }, function(){
        $(this).css("animation", "rotateL 1s ease-in-out infinite alternate, _hoverCOut_ 100s ease");
    });
     $("#square2").hover(function(){
        $(this).css("animation", "rotateR 1s ease-in-out infinite alternate, _hoverCIn_ 100s ease");
        }, function(){
        $(this).css("animation", "rotateR 1s ease-in-out infinite alternate, _hoverCOut_ 100s ease");
    });
});