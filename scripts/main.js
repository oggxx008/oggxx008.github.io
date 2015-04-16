var myImage = document.querySelector('img');
myImage.onclick = function () {
	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/worldmap.jpg') {
		myImage.setAttribute('src', 'images/mnriver.jpg');
		myImage.setAttribute('alt', 'Thats a paddlin');
	} else {
		myImage.setAttribute('src', 'images/worldmap.jpg');
		myImage.setAttribute('alt', 'Olde time world map');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'Getting lamer with every character,' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Getting lamer with every character,' + storedName;
}

myButton.onclick = function(){
setUserName();
}

