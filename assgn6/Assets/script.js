/* Javascript file for bun bun website, made by Kyle Barron */

/*This will increment as people add items in the cart*/
var cartSize = 0;

class Order{
	constructor(orderNumber, glaze, quantity){
		this.glaze = glaze;
		this.quantity = quantity;
		this.orderNumber = orderNumber;
	}
}

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
function deletion(bunDelete){
	localStorage.removeItem('bunOrder'+bunDelete);
	cartSize--;
	location.reload();

}

/*This function increments the number of orders in the shopping cart
I am counting each order as a single item, so ordering 6 buns still counts as 1 order */
function addItem() {
	var bunList = Array();
	var cartSize = 0;
	var x = document.getElementById("addCart");
	var y = document.getElementById("clicks");
	var glaze = document.getElementById("glazes").value;
	var quantity = document.getElementById("quantity").value;
	if(localStorage.length > 0){
		bunList.push(JSON.parse(localStorage.getItem('buns')));
	}
	cartSize = bunList.length;
	var order = new Order(cartSize, glaze, quantity);
	bunList.push(order);
	localStorage.setItem('buns', JSON.stringify(bunList));
	
	/*cartSize = localStorage.length;
	var glaze = document.getElementById("glazes").value;
	var quantity = document.getElementById("quantity").value;

	var order = new Order(cartSize, glaze, quantity); 

	localStorage.setItem('bunOrder' + cartSize, JSON.stringify(order));

	x.style.color = "red";
	
	cartSize++;

	
	y.innerHTML = "(" + localStorage.length + ")";
	setTimeout(changeToBlack, 300);
	function changeToBlack() {
		x.style.color = "black";
	}*/
	
}
function loadCart(){
	var bunList = Array();
	var newBuns = document.createElement("P");
	var buns = document.getElementById("rightPage")

		var y = document.getElementById("clicks");
		

	
	

	if(localStorage.length > 0){
		y.innerHTML = "(" + localStorage.length + ")";
		for(var i=0; i<localStorage.length; i++){
			if(localStorage.getItem('bunOrder'+i) != null){

			bunList.push(JSON.parse(localStorage.getItem('bunOrder'+i)));

		}
		}
	for(var j=0; j<bunList.length; j++){

	let glaze = 0;
	let quantity = 0;	
	var z = document.createElement('P');
	var bunOrder= bunList[j];
	if(bunOrder.glaze == 0){
		glaze = "No Glaze";
	}
	if(bunOrder.glaze == 1){
		glaze = "Sugar-Milk"
	}
	if(bunOrder.glaze == 2){
		glaze = "Vanilla-Milk";
	}
	else if(bunOrder.glaze ==3){
		glaze = "Double Chocolate"
	}
	z.innerHTML ='<img onclick="deletion('+j+')" id="remove" src="Assets/remove.jpeg">'+bunOrder.quantity + " Original Bun - " + glaze + " "
	+ '<img id="regular" src="Assets/bun' + bunOrder.glaze +'.jpg">';
	buns.appendChild(z);
	}	
			
	}
	/*for(int i = 0; i<localStorage.length; i++){
		bunList[i] = JSON.parse(localStorage.getItem('bunOrder' + i))
	}
	for(int i = 0; i<bunList.length; i++){
		var newBuns+i = document.createElement("P");
		newBuns+i.innerHTML = bunList[i];
		document.getElementById("rightPage").appendChild(newBuns+i);
	}*/


}