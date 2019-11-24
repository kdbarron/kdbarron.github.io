
let snowflakes = []; // array to hold snowflake objects

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(160);
  noStroke();

  /*var dropDown = createDiv();
  dropDown.class('dropdown show');

  var button = createElement('a','dropdown button');
  button.class('btn btn-secondary dropdown-toggle');
  button.attribute('href','#');
  button.attribute('roll','button');
  //button.attribute('type','button');
  button.id('dropdownMenuLink');
  button.attribute('data-toggle','dropdown');
  button.attribute('aria-haspopup','true');
  button.attribute('aria-expanded','false');
  

  var innerDrop = createDiv();
  innerDrop.class('dropdown-menu');
  innerDrop.attribute('aria-labelledby','dropdownMenuLink');
	  var example1 = createElement('a', 'Action');
	  example1.class('dropdown-item');
	  example1.attribute('href','#');

	  var example2 = createElement('a', 'Spices');
	  example2.class('dropdown-item');
	  example2.attribute('href','#');

	  var example3 = createElement('a', 'Noodles');
	  example3.class('dropdown-item');
	  example3.attribute('href','#');
  
    innerDrop.child(example1);
  innerDrop.child(example2);
  innerDrop.child(example3);
  dropDown.child(innerDrop);
  dropDown.child(button);


  dropDown.position(0,0);
  button.position(0,0);
  innerDrop.position(0,0);
  example1.position(0,0);
  example2.position(0,0);
  example3.position(0,0);*/
      // Use createDiv() function to 
    // create a div element 
    /*dropDown = createButton('Projects Button');
    dropDown.class('btn btn-primary');
    dropDown.position(0,0);
    dropDown.attribute('type', 'button');
    dropDown.attribute('data-toggle', 'collapse');
    dropDown.attribute('data-target', 'collapseExample');
    dropDown.attribute('aria-expanded','false');
    dropDown.attribute('aria-controls','collapseExample');
    dropDown.position(0,0);

   var example = createElement('a', 'I am a button');
   example.class('collapse');
   example.id('collapseExample');

   var exampleInner = createDiv(' Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.');
   exampleInner.class('card card-body');
   example.child(exampleInner);
   exampleInner.position(0,0);
   example.position(0,0);*/
    
 /*   // Use child() function 
    myDiv.child(myDiv1); 
    // Set the position of div element 
    myDiv.position(0,0);
    
    myDiv.style('text-align', 'center'); 
    myDiv.style('position', 'absolute');
    myDiv.style('width', '100%');
    myDiv.style('height', '100%');
    
    // Set the font-size of text 
    myDiv.style('font-size', '24px'); 
    
    // Set the font color 
    myDiv.style('color', 'white'); */
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function draw() {
  background('black');

  let t = frameCount / 60; // update time

  // create a random number of snowflakes each frame
  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }

  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }    
}

// snowflake class
function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);


  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
    if (
    mouseX > this.posX - 50 &&
    mouseX < this.posX + 50 &&
    mouseY > this.posY - 50 &&
    mouseY < this.posY + 50
  ) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}
var loop = true;
var easing = 'linear';
var direction = 'alternate';

anime({
  targets: '.ball',
  translateX: 470,
  translateY: 100,
  easing,
  loop,
  direction,
  background: [
    { value: '#573796' }, 
    { value: '#FB89FB' },
    { value: '#FBF38C' },
    { value: '#18FF92' },
    { value: '#5A87FF' }
  ]
})
var ballTimeline = anime.timeline({
  loop,
  direction
})
var bar2Timeline = anime.timeline({
  loop,
  direction
})
var bar1Timeline = anime.timeline({
  loop,
  direction
})
ballTimeline
.add({
  targets: '.ball',
  translateY: 100,
  translateX: 470,
  easing
}).add({
  targets: '.ball',
  translateY: 0,
  translateX: 0,
  easing
}).add({
  targets: '.ball',
  translateY: '-80',
  translateX: 470,
  easing
})
bar2Timeline
.add({
  targets: '.bar2',
  translateY: 100,
  easing,
  background: '#573796'
}).add({
  targets: '.bar2',
  translateY: 0,
  easing,
  background: '#FB89FB'
}).add({
  targets: '.bar2',
  translateY: '-100',
  easing,
  background: '#FBF38C'
})
bar1Timeline
.add({
  targets: '.bar1',
  translateY: '-80',
  easing,
  background: '#18FF92'
}).add({
  targets: '.bar1',
  translateY: 10,
  easing,
  background: '#5A87FF'
}).add({
  targets: '.bar1',
  translateY: 60,
  easing,
  background: '#FF1461'
})
