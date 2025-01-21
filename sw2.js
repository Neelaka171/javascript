var true="(hour<=5)"; 

switch(true){
	case (hour>=22):
	document.write("night");
	break;
	
	case (hour<=5):
	document.write("afternoon");
	break;
	default:
	document.write("morning");
}