console.log("Ready to start Assignment 2");

//Add your own code in here
const contracts = [
  {phone : "iphone XS", brand : "Apple", monthly : 43, data : "500MB", minutes : "Unlimited", texts :  "Unlimited"},
  {phone : "iphone 11", brand : "Apple", monthly : 64, data : "90GB", minutes : "Unlimited", texts : "Unlimited"},
  {phone : "Galaxy S10", brand : "Samsung", monthly : 30, data : "20GB", minutes : "Unlimited", texts : "Unlimited"},
  {phone : "Galaxy S10", brand : "Samsung", monthly : 65, data : "Unlimited", minutes : "Unlimited", texts : "Unlimited"},
  {phone : "Galaxy A10", brand : "Samsung", monthly : 11.99, data : "500MG", minutes : "250", texts : "Unlimited"},
  {phone : "Galaxy S9", brand : "Samsung", monthly : 31, data : "20GB", minutes : "Unlimited", texts : "Unlimited"},
  {phone : "StarTAC 130", brand : "Motorola", monthly : 3, data : "0MG", minutes : "200", texts : "500"},
  {phone : "Pixel 3A", brand : "Google", monthly : 23, data : "4GB", minutes : "Unlimited", texts : "Unlimited"},
  {phone : "Xperia 10", brand : "Sony", monthly : 30, data : "20GB", minutes : "Unlimited", texts : "Unlimited"},
  {phone : "P30", brand : "Huawei", monthly : 27.99, data : "500MG", minutes : "500", texts : "Unlimited"},
];

function getAnswer(){
 	const selectedRadBtn=document.querySelector('input[name="question"]:checked');
	return selectedRadBtn.value;
};

function getAnswertxt(){
 	const selectedtxtRadBtn=document.querySelector('input[name="questiontxt"]:checked');
	return selectedtxtRadBtn.value;
};

function getAnswermin(){
 	const selectedminRadBtn=document.querySelector('input[name="questionmin"]:checked');
	return selectedminRadBtn.value;
};

function getAnswerdta(){
 	const selecteddtaRadBtn=document.querySelector('input[name="questiondta"]:checked');
	return selecteddtaRadBtn.value;
};

function getSearchTerm(){
	const searchTerm=document.getElementById("search").value;
	return searchTerm;
};

function processForm(){
	const selectedRadBtn =  getAnswer();
  const selectedtxtRadBtn =  getAnswertxt();
  const selectedminRadBtn = getAnswermin();
  const selecteddtaRadBtn = getAnswerdta();
  const searchTerm = getSearchTerm();
  const matchingContracts = contracts.filter(function(contract){
    if(contract.monthly<=searchTerm)
    if(contract.minutes===selectedminRadBtn)
    if(contract.data===selecteddtaRadBtn)
    if(contract.texts===selectedtxtRadBtn)
  if(contract.brand===selectedRadBtn){
    return true;
  }return false;
})
console.log(matchingContracts);
}

function init(){
const btn =  document.getElementById("myButton");


btn.addEventListener("click",function(){
	processForm();
})
}

window.addEventListener("load",function() {
  init();
})
