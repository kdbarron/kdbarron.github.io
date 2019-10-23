/* Javascript file for bun bun website, made by Kyle Barron */

/*This will increment as people add items in the cart*/
var cartSize = 0;


/*This function changes the image displayed based on glaze choice picked by the user*/
function changeImage(){
	var imageList = Array();
		for(var i=0; i < 4; i++){
	imageList[i] = new Image(333,272);
	imageList[i].src = "Assets/bun" + i + ".jpg";
	}
	var selectedImage = document.getElementById("glazes").value;
	var currImage = document.getElementById("bunImage").src;

	document.getElementById("bunImage").src = imageList[selectedImage].src;
}


/*This function increments the number of orders in the shopping cart
I am counting each order as a single item, so ordering 6 buns still counts as 1 order */
function addItem() {
	var x = document.getElementById("addCart");
	var y = document.getElementById("clicks");

		x.style.color = "red";
	
	cartSize++;

	
	y.innerHTML = "(" + cartSize + ")";
	setTimeout(changeToBlack, 300);
	function changeToBlack() {
		x.style.color = "black";
	}
	
}