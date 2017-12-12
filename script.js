// These are all the different things you can do with audio files: https://www.w3schools.com/tags/ref_av_dom.asp

function playGlass(e){
	document.getElementById("glass-shatter").play();
}
function toggleMovieMode(elem){
	document.getElementById("opacity1").classList.toggle("opacity");
	document.getElementById("opacity2").classList.toggle("opacity");
	document.getElementById("opacity3").classList.toggle("opacity");
}
