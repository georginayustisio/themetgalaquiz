var currentScene;
let color1 = 255;
let color2 = 255;
let color3 = 255;
let color4 = 255;
let score = 0;


//Preload Images
let metgala;
let fashion;
let footwear;
let wakeup;
let brunch;
let pizza;
let fastfood;
let kardashians;
let swift;
let press;
let rihanna;
let gisele;
let leto;
let doja;

function preload(){
    metgala = loadImage("images/metgala.png");
    fashion = loadImage("images/fashion.png");
    footwear = loadImage("images/footwear.png");
    wakeup = loadImage("images/wakeup.png");
    brunch = loadImage("images/brunch.png");
    pizza = loadImage("images/pizza.png");
    fastfood = loadImage("images/fastfood.png");
    kardashians = loadImage("images/kardashians.png");
    swift = loadImage("images/swift.png");
    press = loadImage("images/press.png");
    rihanna = loadImage("images/rihanna.jpg");
    gisele = loadImage("images/gisele.jpg");
    leto = loadImage("images/leto.jpg");
    doja = loadImage("images/doja.jpg");
}


function setup() {
  createCanvas(800,600);
}

//Starting Button
var drawButton = function() {
    fill(255);
    rect(385, 525, 50, 25);
    fill(0);
    textSize(16);
    text("Start", 393, 543);
};

//Scene 1 - Intro
var drawScene0 = function(){
    currentScene = 0;
    background(153,15,12);
    image(metgala,0,0);

    drawButton();
}

//Scene 2 - Question 1
var drawScene1 = function() {
    currentScene = 1;
    background(235, 247, 255);
    image(fashion,0,0);
    fill(0, 85, 255);

    push();
    fill(color1);
    rect(225,255,350,50,10);
    pop();

    push();
    fill(color2);
    rect(225,315,350,50,10);
    pop();

    push();
    fill(color3);
    rect(225,375,350,50,10);
    pop();

    push();
    fill(color4);
    rect(225,435,350,50,10);
    pop();


    if (mouseX >= 225 && mouseX <= 575 &&
        mouseY >= 255 && mouseY <= 305) {
        color1 = 100;
    } else {
        color1 = 255;
    }

    if (mouseX >= 225 && mouseX <= 575 &&
        mouseY >= 315 && mouseY <= 365) {
        color2 = 100;
    } else {
        color2 = 255;
    }

    if (mouseX >= 225 && mouseX <= 575 &&
        mouseY >= 375 && mouseY <= 425) {
        color3 = 100;
    } else {
        color3 = 255;
    }

    if (mouseX >= 225 && mouseX <= 575 &&
        mouseY >= 435 && mouseY <= 485) {
        color4 = 100;
    } else {
        color4 = 255;
    }



    push();
    fill(0);
    textSize(25);
    text('Vintage',360,290);
    text('Minimalist',350,350);
    text('Streetwear',345,410);
    text('Bohemian',350,470);
    pop();

};

//Scene 3 - Question 2
var drawScene2 = function() {
    currentScene = 2;
    image(footwear,0,0);
    //background(235, 247, 155);
    fill(0, 85, 255);

    push();
    fill(color1);
    rect(225,255,350,50,10);
    pop();

    push();
    fill(color2);
    rect(225,315,350,50,10);
    pop();

    push();
    fill(color3);
    rect(225,375,350,50,10);
    pop();

    push();
    fill(color4);
    rect(225,435,350,50,10);
    pop();


    if (mouseX >= 225 && mouseX <= 575 &&
        mouseY >= 255 && mouseY <= 305) {
        color1 = 100;
    } else {
        color1 = 255;
    }

    if (mouseX >= 225 && mouseX <= 575 &&
        mouseY >= 315 && mouseY <= 365) {
        color2 = 100;
    } else {
        color2 = 255;
    }

    if (mouseX >= 225 && mouseX <= 575 &&
        mouseY >= 375 && mouseY <= 425) {
        color3 = 100;
    } else {
        color3 = 255;
    }

    if (mouseX >= 225 && mouseX <= 575 &&
        mouseY >= 435 && mouseY <= 485) {
        color4 = 100;
    } else {
        color4 = 255;
    }

    push();
    fill(0);
    textSize(25);
    text('Sneakers',350,290);
    text('Slides',368,350);
    text('Boots',370,410);
    text('Barefoot',355,470);
    pop();

};


//Scene 4 - Question 3
var drawScene3 = function() {
    currentScene = 3;
    background(235, 247, 55);
    image(wakeup,0,0);
    fill(0, 85, 255);

    push();
    fill(color1);
    rect(225,255,350,50,10);
    pop();

    push();
    fill(color2);
    rect(225,315,350,50,10);
    pop();

    push();
    fill(color3);
    rect(225,375,350,50,10);
    pop();

    push();
    fill(color4);
    rect(225,435,350,50,10);
    pop();


    if (mouseX >= 225 && mouseX <= 575 &&
        mouseY >= 255 && mouseY <= 305) {
        color1 = 100;
    } else {
        color1 = 255;
    }

    if (mouseX >= 225 && mouseX <= 575 &&
        mouseY >= 315 && mouseY <= 365) {
        color2 = 100;
    } else {
        color2 = 255;
    }

    if (mouseX >= 225 && mouseX <= 575 &&
        mouseY >= 375 && mouseY <= 425) {
        color3 = 100;
    } else {
        color3 = 255;
    }

    if (mouseX >= 225 && mouseX <= 575 &&
        mouseY >= 435 && mouseY <= 485) {
        color4 = 100;
    } else {
        color4 = 255;
    }

    push();
    fill(0);
    textSize(25);
    text('<6.00',370,290);
    text('6.00 - 9.00',350,350);
    text('9.00 - 12.00',340,410);
    text('>12.00',365,470);
    pop();
};


//Scene 5 - Question 4
var drawScene4 = function() {
    currentScene = 4;
    background(235, 247, 255);
    image(brunch,0,0);
    fill(0, 85, 255);

    push();
    fill(color1);
    rect(225,255,350,50,10);
    pop();

    push();
    fill(color2);
    rect(225,315,350,50,10);
    pop();

    push();
    fill(color3);
    rect(225,375,350,50,10);
    pop();

    push();
    fill(color4);
    rect(225,435,350,50,10);
    pop();


    if (mouseX >= 225 && mouseX <= 575 &&
        mouseY >= 255 && mouseY <= 305) {
        color1 = 100;
    } else {
        color1 = 255;
    }

    if (mouseX >= 225 && mouseX <= 575 &&
        mouseY >= 315 && mouseY <= 365) {
        color2 = 100;
    } else {
        color2 = 255;
    }

    if (mouseX >= 225 && mouseX <= 575 &&
        mouseY >= 375 && mouseY <= 425) {
        color3 = 100;
    } else {
        color3 = 255;
    }

    if (mouseX >= 225 && mouseX <= 575 &&
        mouseY >= 435 && mouseY <= 485) {
        color4 = 100;
    } else {
        color4 = 255;
    }

    push();
    fill(0);
    textSize(25);
    text('Downtown',345,290);
    text('Uptown',360,350);
    text('Midtown',360,410);
    text('Others',365,470);
    pop();
};


//Scene 6 - Question 5
var drawScene5 = function() {
    currentScene = 5;
    background(235, 247, 155);
    image(pizza,0,0);
    fill(0, 85, 255);

    push();
    fill(color1);
    rect(225,255,350,50,10);
    pop();

    push();
    fill(color2);
    rect(225,315,350,50,10);
    pop();

    push();
    fill(color3);
    rect(225,375,350,50,10);
    pop();

    push();
    fill(color4);
    rect(225,435,350,50,10);
    pop();


    if (mouseX >= 225 && mouseX <= 575 &&
        mouseY >= 255 && mouseY <= 305) {
        color1 = 100;
    } else {
        color1 = 255;
    }

    if (mouseX >= 225 && mouseX <= 575 &&
        mouseY >= 315 && mouseY <= 365) {
        color2 = 100;
    } else {
        color2 = 255;
    }

    if (mouseX >= 225 && mouseX <= 575 &&
        mouseY >= 375 && mouseY <= 425) {
        color3 = 100;
    } else {
        color3 = 255;
    }

    if (mouseX >= 225 && mouseX <= 575 &&
        mouseY >= 435 && mouseY <= 485) {
        color4 = 100;
    } else {
        color4 = 255;
    }
   
    push();
    fill(0);
    textSize(25);
    text("Joe's Pizza",340,290);
    text('Prince St. Pizza',315,350);
    text("Artichoke's",345,410);
    text("Papa John's",335,470);
    pop();
  
};


//Scene 7 - Question 6
var drawScene6 = function() {
    currentScene = 6;
    background(235, 247, 55);
    image(fastfood,0,0);
    fill(0, 85, 155);

    push();
    fill(color1);
    rect(225,255,350,50,10);
    pop();

    push();
    fill(color2);
    rect(225,315,350,50,10);
    pop();

    push();
    fill(color3);
    rect(225,375,350,50,10);
    pop();

    push();
    fill(color4);
    rect(225,435,350,50,10);
    pop();


    if (mouseX >= 225 && mouseX <= 575 &&
        mouseY >= 255 && mouseY <= 305) {
        color1 = 100;
    } else {
        color1 = 255;
    }

    if (mouseX >= 225 && mouseX <= 575 &&
        mouseY >= 315 && mouseY <= 365) {
        color2 = 100;
    } else {
        color2 = 255;
    }

    if (mouseX >= 225 && mouseX <= 575 &&
        mouseY >= 375 && mouseY <= 425) {
        color3 = 100;
    } else {
        color3 = 255;
    }

    if (mouseX >= 225 && mouseX <= 575 &&
        mouseY >= 435 && mouseY <= 485) {
        color4 = 100;
    } else {
        color4 = 255;
    }

    push();
    fill(0);
    textSize(25);
    text("McDonald's",340,290);
    text('Popeyes',355,350);
    text("Chick-Fil-A",340,410);
    text("KFC",380,470);
    pop();
};


//Scene 8 - Question 7
var drawScene7 = function() {
    currentScene = 7;
    background(235, 247, 255);
    image(kardashians,0,0);
    fill(0, 85, 255);

    push();
    fill(color1);
    rect(225,255,350,50,10);
    pop();

    push();
    fill(color2);
    rect(225,315,350,50,10);
    pop();

    push();
    fill(color3);
    rect(225,375,350,50,10);
    pop();

    push();
    fill(color4);
    rect(225,435,350,50,10);
    pop();


    if (mouseX >= 225 && mouseX <= 575 &&
        mouseY >= 255 && mouseY <= 305) {
        color1 = 100;
    } else {
        color1 = 255;
    }

    if (mouseX >= 225 && mouseX <= 575 &&
        mouseY >= 315 && mouseY <= 365) {
        color2 = 100;
    } else {
        color2 = 255;
    }

    if (mouseX >= 225 && mouseX <= 575 &&
        mouseY >= 375 && mouseY <= 425) {
        color3 = 100;
    } else {
        color3 = 255;
    }

    if (mouseX >= 225 && mouseX <= 575 &&
        mouseY >= 435 && mouseY <= 485) {
        color4 = 100;
    } else {
        color4 = 255;
    }
  
    push();
    fill(0);
    textSize(25);
    text("Kim",385,290);
    text('Khloe',375,350);
    text("Kourtney",355,410);
    text("The Jenners",335,470);
    pop();
};


//Scene 9 - Question 8
var drawScene8 = function() {
    currentScene = 8;
    background(235, 247, 155);
    image(swift,0,0);
    fill(0, 85, 255);

    push();
    fill(color1);
    rect(225,255,350,50,10);
    pop();

    push();
    fill(color2);
    rect(225,315,350,50,10);
    pop();

    push();
    fill(color3);
    rect(225,375,350,50,10);
    pop();

    push();
    fill(color4);
    rect(225,435,350,50,10);
    pop();


    if (mouseX >= 225 && mouseX <= 575 &&
        mouseY >= 255 && mouseY <= 305) {
        color1 = 100;
    } else {
        color1 = 255;
    }

    if (mouseX >= 225 && mouseX <= 575 &&
        mouseY >= 315 && mouseY <= 365) {
        color2 = 100;
    } else {
        color2 = 255;
    }

    if (mouseX >= 225 && mouseX <= 575 &&
        mouseY >= 375 && mouseY <= 425) {
        color3 = 100;
    } else {
        color3 = 255;
    }

    if (mouseX >= 225 && mouseX <= 575 &&
        mouseY >= 435 && mouseY <= 485) {
        color4 = 100;
    } else {
        color4 = 255;
    }
  
    push();
    fill(0);
    textSize(25);
    text("Fearless",355,290);
    text('Red',380,350);
    text("Speak Now",340,410);
    text("1989",375,470);
    pop();
};


//Scene 10 - RESULT
var drawScene9 = function() {
    currentScene = 9;
    background(235, 247, 55);
    image(press,0,0);
    fill(0, 85, 255);

        //Replace with Fortune Cookies
        noStroke();
        fill(150);
  
    if(score == 1){
    push();
    leto.resize(leto.width/5, leto.height/5);
    image(leto, 275, 105);
    pop();
    }
    else if(score == 2){
        push();
        doja.resize(doja.width/14, doja.height/14);
        image(doja, 265, 95);
        pop();
        }
    else if(score == 3){
        push();
        gisele.resize(gisele.width/4, gisele.height/4);
        image(gisele, 295, 125);
        pop();
        }
    else if(score == 4){
        push();
        rihanna.resize(rihanna.width/8, rihanna.height/8);
        image(rihanna, 275, 125);
        pop();
        }

};







draw = function() {
    if (currentScene === 0) {
        drawScene0();
    } else if (currentScene === 1) {
        drawScene1();
    } else if (currentScene === 2) {
        drawScene2();
    } else if (currentScene === 3) {
        drawScene3();
    } else if (currentScene === 4) {
        drawScene4();
    } else if (currentScene === 5) {
        drawScene5();
    } else if (currentScene === 6) {
        drawScene6();
    } else if (currentScene === 7) {
        drawScene7();
    } else if (currentScene === 8) {
        drawScene8();
    } 

};


mouseClicked = function() {
    if (true) {
        if (mouseX >= 385 && mouseX <= 435 &&
            mouseY >= 525 && mouseY <= 550 && currentScene === 0) {
            drawScene1();
        } else if (currentScene === 1 &&

            (
            (mouseX >= 225 && mouseX <= 575 &&
            mouseY >= 255 && mouseY <= 305) ||
            
            (mouseX >= 225 && mouseX <= 575 &&
            mouseY >= 315 && mouseY <= 365) ||
            
            (mouseX >= 225 && mouseX <= 575 &&
            mouseY >= 375 && mouseY <= 425) ||
            
            (mouseX >= 225 && mouseX <= 575 &&
            mouseY >= 435 && mouseY <= 485)
            ) 
            
            ) {
            drawScene2();
        } else if (currentScene === 2 &&

            (
            (mouseX >= 225 && mouseX <= 575 &&
            mouseY >= 255 && mouseY <= 305) ||
            
            (mouseX >= 225 && mouseX <= 575 &&
            mouseY >= 315 && mouseY <= 365) ||
            
            (mouseX >= 225 && mouseX <= 575 &&
            mouseY >= 375 && mouseY <= 425) ||
            
            (mouseX >= 225 && mouseX <= 575 &&
            mouseY >= 435 && mouseY <= 485)
            ) 
            
            ) {
            drawScene3();


        } 
        
        else if(currentScene === 3 && mouseX >= 225 && mouseX <= 575 &&
            mouseY >= 255 && mouseY <= 305){
            
            score = 1;
            drawScene4();

        } 
        
        else if(currentScene === 3 && mouseX >= 225 && mouseX <= 575 &&
            mouseY >= 315 && mouseY <= 365){
            
            score = 2;
            drawScene4();

        } 
        
        else if(currentScene === 3 && mouseX >= 225 && mouseX <= 575 &&
            mouseY >= 375 && mouseY <= 425){
            
            score = 3;
            drawScene4();

        } 
        
        else if(currentScene === 3 && mouseX >= 225 && mouseX <= 575 &&
            mouseY >= 435 && mouseY <= 485){
            
            score = 4;
            drawScene4();

        } 
        
        else if (currentScene === 4 &&

            (
            (mouseX >= 225 && mouseX <= 575 &&
            mouseY >= 255 && mouseY <= 305) ||
            
            (mouseX >= 225 && mouseX <= 575 &&
            mouseY >= 315 && mouseY <= 365) ||
            
            (mouseX >= 225 && mouseX <= 575 &&
            mouseY >= 375 && mouseY <= 425) ||
            
            (mouseX >= 225 && mouseX <= 575 &&
            mouseY >= 435 && mouseY <= 485)
            ) 
            
            ) {
            drawScene5();
        } else if (currentScene === 5 &&

            (
            (mouseX >= 225 && mouseX <= 575 &&
            mouseY >= 255 && mouseY <= 305) ||
            
            (mouseX >= 225 && mouseX <= 575 &&
            mouseY >= 315 && mouseY <= 365) ||
            
            (mouseX >= 225 && mouseX <= 575 &&
            mouseY >= 375 && mouseY <= 425) ||
            
            (mouseX >= 225 && mouseX <= 575 &&
            mouseY >= 435 && mouseY <= 485)
            ) 
            
            ) {
            drawScene6();
        } else if (currentScene === 6 &&

            (
            (mouseX >= 225 && mouseX <= 575 &&
            mouseY >= 255 && mouseY <= 305) ||
            
            (mouseX >= 225 && mouseX <= 575 &&
            mouseY >= 315 && mouseY <= 365) ||
            
            (mouseX >= 225 && mouseX <= 575 &&
            mouseY >= 375 && mouseY <= 425) ||
            
            (mouseX >= 225 && mouseX <= 575 &&
            mouseY >= 435 && mouseY <= 485)
            ) 
            
            ) {
            drawScene7();
        } else if (currentScene === 7 &&

            (
            (mouseX >= 225 && mouseX <= 575 &&
            mouseY >= 255 && mouseY <= 305) ||
            
            (mouseX >= 225 && mouseX <= 575 &&
            mouseY >= 315 && mouseY <= 365) ||
            
            (mouseX >= 225 && mouseX <= 575 &&
            mouseY >= 375 && mouseY <= 425) ||
            
            (mouseX >= 225 && mouseX <= 575 &&
            mouseY >= 435 && mouseY <= 485)
            ) 
            
            ) {
            drawScene8();
        } else if (currentScene === 8 &&

            (
            (mouseX >= 225 && mouseX <= 575 &&
            mouseY >= 255 && mouseY <= 305) ||
            
            (mouseX >= 225 && mouseX <= 575 &&
            mouseY >= 315 && mouseY <= 365) ||
            
            (mouseX >= 225 && mouseX <= 575 &&
            mouseY >= 375 && mouseY <= 425) ||
            
            (mouseX >= 225 && mouseX <= 575 &&
            mouseY >= 435 && mouseY <= 485)
            ) 
            
            ) {
            drawScene9();
        } else if (currentScene === 9){
            location.reload();
            drawScene0();
        }

    }
};



drawScene0();



