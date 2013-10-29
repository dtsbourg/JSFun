var img = new Array(NumberOfImages);
 
img[0] = "h1.jpg";
img[1] = "h2.jpg";
img[2] = "h3.jpg";
img[3] = "h4.jpg";

var imgNumber = 0; 
 
function NextImage()
{
	if (imgNumber < NumberOfImages) 
	{
		imgNumber++;
		document.images["SwitchingImage"].src = img[imgNumber];
	}
	
	else if (imgNumber == NumberOfImages)
	{
		imgNumber=0;
		document.images["SwitchingImage"].src = img[imgNumber];
	}
}
 
function PreviousImage()
{
	if (imgNumber != 0) 
	{
		imgNumber--;
		document.images["SwitchingImage"].src = img[imgNumber];
	}
}