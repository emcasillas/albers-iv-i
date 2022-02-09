let clrs = [
  //cooler light tones on top versus warmer dark tones on the bottom, complementary colors might be helping
  //Change #2, I am now doing a really dark red on top and pale green on the bottom so the dark box is on the bottom. I want to also work more with the color wheel so I will make the bar on the red side more orange and the green side more blue. 
  //Change #3, avoiding saturation but going in with darker colors overall
'#9aa67b', //top 0
'#c3d694', //middle top 1
'#8e7e9e', //middle strip 2
'#b98fcc', //middle bottom 3
'#c72ab2' //bottom 4
]



function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
 background(220);
 canvasRect(clrs[4], height/2, height/2, false);
 canvasRect(clrs[0], height/2, 0, false);
 fill(clrs[2]); 
 rect(width * 1/3, height * 1/6, width * 1/3, height * 2/3); 
 canvasRect(clrs[1], height/6, height/3, true);
 canvasRect(clrs[3], height/6, height/2, true);


}

function canvasRect(clr, hgt, y_offset, clickable) {
	fill(clr);
	if((clickable == true) && (mouseIsPressed == false)){
		rect(0, y_offset, width, hgt);
	} 
	if(clickable == false){
		rect(0, y_offset, width, hgt);
	}
}
