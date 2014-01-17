// JavaScript Document
// Author: James McGaghey
// Date: November 30, 2012
var Resource = function(thumb, cookedImage){ // Creates a prototype of Resource
	var self = this; // Declares variable self as this( refers to the "Owner" of the function being executed )
	self.thumbImage= document.createElement('img'); // Creates an image tag within dragFrom div
	self.thumbImage.setAttribute('src',thumb); // Sets source of image tag to the called upon variable thumb
	self.thumbImage.setAttribute('class','draggable'); // Creates a class on the image called draggable
	document.getElementById('dragFrom').appendChild(self.thumbImage); // Displays the image with set attributes listed above 
	
	self.dragStartHandler = function(e){
		e.target.style.opacity='0.4'; // Sets the opacity of the draggable image when dragging starts

	};

	self.dragEndHandler = function(e){
		if(isInRightSpot){ // Checks to see if isInRightSpot = true
			e.target.style.opacity='1'; // Resets opacity if isInRightSpot = true
			currentlyOver.childNodes[1].setAttribute('src', cookedImage);
			//document.getElementById('largeImage').setAttribute('src', cookedImage); // Sets image tag in dragTo to images/big.png if isInRightSpot = true
		}else{
			e.target.style.opacity='1'; // Resets opacity if isInRightSpot = false

		}
	};

	self.thumbImage.addEventListener('dragstart',self.dragStartHandler); // Adds an event listener for the start of dragging of the image in dragFrom
	self.thumbImage.addEventListener('dragend',self.dragEndHandler); // Adds an event listener for the end of dragging(releasing the image) of the image in dragFrom
}
var meatCook = new Resource('images/pig.png', 'images/baconpile.png'); 
var meatCook = new Resource('images/lamb.png', 'images/lambchops.png'); 
var meatCook = new Resource('images/chick.png', 'images/wings.png');

var isInRightSpot = false; 
var currentlyOver;
var dragToSpot1 = document.getElementById('dragTo1');
var dragToSpot2 = document.getElementById('dragTo2');
var dragToSpot3 = document.getElementById('dragTo3');

dragToSpot1.addEventListener('dragover',draggedOver); 
dragToSpot2.addEventListener('dragover',draggedOver); 
dragToSpot3.addEventListener('dragover',draggedOver); 
function draggedOver(e){
	e.target.style.border = "2px dotted"; 
	e.target.style.opacity = "0.7"; 
	currentlyOver = e.target;// e.target is the object that called the function
	isInRightSpot = true; 
};

dragToSpot1.addEventListener('dragleave',draggedOut);
dragToSpot2.addEventListener('dragleave',draggedOut);
dragToSpot3.addEventListener('dragleave',draggedOut);
function draggedOut(e){
	e.target.style.border = "2px solid #777777"; // Resets border style of dragTo div
	e.target.style.opacity = "1"; // Resets opacity of background of dragTo div
	if (mousedown){					// ------------------------------------------------------------------------------
		isInRightSpot = false;		// Sets isInRightSPot to false only when the mouse button is in the down position
	}								// ------------------------------------------------------------------------------
};


