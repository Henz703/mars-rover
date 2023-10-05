canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Define the width & height of the rover image.
rover_width = 100;
rover_height = 100;

background_image = "mars.jpg";

rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

//Create "add()" function
 function add(){
background_imageTag = new Image();
background_imageTag.onLoad = uploadBackground;
background_imageTag.src = background_image;

rover_imageTag = new Image();
rover_imageTag.onLoad = uploadRover;
rover_imageTag.src = rover_image;
 }	                                     //defining a variable with a new image
	                                     // setting a function, onloading this variable
	                                     // load image

                                         //defining a variable with a new image
	                                     // setting a function, onloading this variable
	                                     // load image

//Create "uploadBackground()" function.
                              function uploadBackground(){
ctx.drawImage(
    background_imageTag, 0,0 ,canvas.width, canvas.height


);


                              }
                                         //Draw image of background

//Create "uploadrover()" function.
function uploadRover(){
    ctx.drawImage(
        rover_imageTag, rover_x,rover_y ,rover.width, rover.height
    
    
    );}
                                        //Draw image of rover


window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
    //Write code if keypressed is up. ASCII value of "up" arrow is 38.
		if(keyPressed ==38){ 
up();
console.log("up");
        }
    


     //Write code if keypressed is down. ASCII value of "up" arrow is 40.
     if(keyPressed ==40){ 
        down();
        console.log("down");
                }

                if(keyPressed ==37){ 
                    left();
                    console.log("left");
                            }
                            if(keyPressed ==39){ 
                                right();
                                console.log("right");
                                        }

    //Additional Activity
    //Write the code for left and right arrow pressed. 
}

function up(){

}
function down(){
	
}
function right(){
	
}
function left(){
	
}



