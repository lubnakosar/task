// Practise one

// var textareaREF = document.getElementById('jsTextarea');
// // var content;

// // add event keypress | up & downqq
// textareaREF.addEventListener('keyup', keyPressEventFunc);


// // keyPressEventFunc
// function keyPressEventFunc(){
// 	// let textareaREF = document.getElementById('jsTextarea');
// 	// let content = textareaREF.value;
// 	let toDIV = document.getElementById('jsContent');
// 	toDIV.innerText = document.getElementById('jsTextarea').value;
// }


// Practise two

// reference of form
// var formREF = document.forms['jsPractiseFormOne'];

// // add event listener
// formREF.addEventListener('submit', formValidator);


// function formValidator(e){
// 	e.preventDefault();
// 	let textAreaREF = this.querySelector('textarea[name="txtContent"]');

// 	let toDIV = document.getElementById('jsContent');
// 	toDIV.innerText = textAreaREF.value;

// }



// Practise 3

var listArray = [];
// var i = 0;

//reference of form
var formREF = document.forms['jsPractiseFormOne'];

// add event listener
formREF.addEventListener('submit', formValidator);
//
document.querySelector('#jsRemoveList').addEventListener('click', resetTodos);



//
function formValidator(e){
	e.preventDefault();
	let textAreaREF = this.querySelector('textarea[name="txtContent"]');

	let toUL = document.querySelector('div#jsTodoList > ul');
	// node
	let liNODE = document.createElement('li');
	// let liNODE = document.createElement('li').parentNode;
	// let liNODE = document.createElement('li').nextSibling;
	// let liNODE = document.createElement('li').previousSibling;
	liNODE.innerText = textAreaREF.value;
	// liNODE.id = 'js'+Math.random();
	// liNODE.id = 'js'+Math.random();
	//
	let btnNODE = document.createElement('button');
	// var element = document.getElementBytag("ul li");
	btnNODE.setAttribute("class", "btn");
	
	btnNODE.innerText = 'Remove';
	liNODE.appendChild(btnNODE);

	// append to ul
	toUL.appendChild(liNODE);
	//toUL.onclick = function() {this.parentNode.removeChild(this);}
	btnNODE.onclick = function() {this.closest('li').remove();}
	//
	// let index = listArray.length == 0 ? 0 : listArray.length;

	// 0
	// 1
	// 3
	// 4

	// 5
	// listArray[listArray.length] = textAreaREF.value; 
	listArray.push(textAreaREF.value); 
	// console.log(listArray);

	//
	if(listArray.length > 0){
		let ulParent = document.querySelector('div#jsTodoList p');
		ulParent.innerText = ''
		// ulParent.removeChild(
		// 	ulParent.childNodes[1]
		// );


	}
	// i++;
	// clear textarea
	textAreaREF.value = '';


}


function resetTodos(){
	let toUL = document.querySelector('div#jsTodoList > ul');

	// toUL.innerHTML = '';
	// console.log(toUL.childNodes);
	// console.log(toUL.childNodes[1]);
	toUL.removeChild(
		toUL.childNodes[1]
	);
}
function removeLi() {
  liNODE.parentNode.removeChild(liNODE);
}
// $("button").click(function () {
//  $(this).parents("ul li").remove();
// });













