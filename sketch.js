var bg1, bg2, bg3, bg4, bg5, bg6, bg7, background_img;

var hour1, datetime;

var nature_sounds, alpha_music, beta_music, gamma_music;

var buttons;

function preload(){

  //to load the background images
  bg1= loadImage("backgroundImages/nature_img1.png");
  bg2= loadImage("backgroundImages/nature_img2.png");
  bg3= loadImage("backgroundImages/nature_img3.png");
  bg4= loadImage("backgroundImages/nature_img4.png");
  bg5= loadImage("backgroundImages/nature_img5.png");
  bg6= loadImage("backgroundImages/nature_img6.png");
  bg7= loadImage("backgroundImages/nature_img7.png");

  //to load the sounds
  nature_sounds = loadSound("Sounds/nature_sounds.mp3");
  alpha_music = loadSound("Sounds/alpha_music.mp3");
  beta_music = loadSound("Sounds/beta_music.mp3");
  gamma_music = loadSound("Sounds/gamma_music.mp3");

}

function setup(){

  //to create a canvas which can adjust to the screen's width and height
  createCanvas(displayWidth, displayHeight);

  //to create a background image sprite
  background_img= createSprite(950, 500, displayWidth, displayHeight);
  background_img.scale= 1.98;

  //to create an object of the buttons class
  buttons = new Buttons();

}

function draw(){

  background("red");

  //to call the functions
  spawnBackground();
  getTime();
  
  //to display the object
  buttons.display();

  //to display the sprites
  drawSprites();

  
  //to display a message when the background images have not loaded
  if(frameCount<250){

    fill("black");
    textSize(30);
    text("Please wait, the background is loading.", 750, 170);
  }

  //to display the time
  textSize(40);
  fill("black")
  text("Time- " + hour1, displayWidth/2 + 500, displayHeight/2 -270);
}

//to switch the background image after a particular time period
function spawnBackground(){

  //using the frame count to determine the time period
  if(frameCount%250 === 0){

    //taking any random image number to switch
    var img= Math.round(random(1, 8));

    //to switch the images
    switch(img){

      //to add different cases the computer can pick from as to which image should be displayed and then changed.
      case 1: background_img.addImage(bg1);
      break;
      case 2: background_img.addImage(bg2);
      break;
      case 3: background_img.addImage(bg3);
      break;
      case 4: background_img.addImage(bg4);
      break;
      case 5: background_img.addImage(bg5);
      break;
      case 6: background_img.addImage(bg6);
      break;
      case 7: background_img.addImage(bg7);
      break;
        
        default:break;
    }
  }

}

//to display the time
async function getTime(){

  //to use API call to fetch the date and time
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");

  //to store the date and time in json data structure
  var responseJson = await response.json();

  //to only take the time
  datetime= responseJson.datetime;
  hour1 = datetime.slice(11, 16);

}