//The toggle movie mode function in the JS, assigns an id to a specofic div class in the HTML, so that when the user clicks on that specific div, the divs that have the assigned id, when become opaque. The opaque comes from the CSS, where I made a class called "opacity" and assigned that class an opaqueness ranging between 0 being off and 1 being on.
//Similarly to the MovieMode function, the function playGlass, also assigns an id to specific divs in the HTML, so that when the user clicks on that div, the audio called shatter.ogg, will play. Also, the audio plays because of the audio source tag that is imported in the HTML.

function playGlass(e){
	document.getElementById("glass-shatter").play();
}
function toggleMovieModeF(elem){
	document.getElementById("opacity1").classList.toggle("opacity");
	document.getElementById("opacity2").classList.toggle("opacity");
	document.getElementById("opacity3").classList.toggle("opacity");
}
function toggleMovieModeE(elem){
	document.getElementById("opacity4").classList.toggle("opacity");
	document.getElementById("opacity5").classList.toggle("opacity");
	document.getElementById("opacity6").classList.toggle("opacity");
}
function toggleMovieModeB(elem){
	document.getElementById("opacity7").classList.toggle("opacity");
	document.getElementById("opacity8").classList.toggle("opacity");
	document.getElementById("opacity9").classList.toggle("opacity");
}
function toggleMovieModeW(elem){
	document.getElementById("opacity10").classList.toggle("opacity");
	document.getElementById("opacity11").classList.toggle("opacity");
	document.getElementById("opacity12").classList.toggle("opacity");
}
function toggleMovieModeN(elem){
	document.getElementById("opacity13").classList.toggle("opacity");
	document.getElementById("opacity14").classList.toggle("opacity");
	document.getElementById("opacity15").classList.toggle("opacity");
}
function toggleMovieModeP(elem){
	document.getElementById("opacity16").classList.toggle("opacity");
	document.getElementById("opacity17").classList.toggle("opacity");
	document.getElementById("opacity18").classList.toggle("opacity");
}
function toggleMovieModeS(elem){
	document.getElementById("opacity19").classList.toggle("opacity");
	document.getElementById("opacity20").classList.toggle("opacity");
	document.getElementById("opacity21").classList.toggle("opacity");
}
function toggleMovieModeH(elem){
	document.getElementById("opacity22").classList.toggle("opacity");
	document.getElementById("opacity23").classList.toggle("opacity");
	document.getElementById("opacity24").classList.toggle("opacity");
}

