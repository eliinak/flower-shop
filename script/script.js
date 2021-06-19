function myFunction() {
	let fnametextbox = document.getElementById("fname");
	let emailtextbox = document.getElementById("email");
	let addresstextbox = document.getElementById("adr");
	let citytextbox = document.getElementById("city");
	let myorder = document.getElementById("demo");
	if(fnametextbox.value == '' || emailtextbox.value == '' || addresstextbox.value == '' || citytextbox.value == ''){
		myorder.textContent = ""
		myorder.textContent = "Трябва да попълните всикчи данни!"
		myorder.style.color = "red"
					
	}
	else {
		myorder.textContent = ""
		myorder.textContent = fname.value + ", благодарим Ви за поръчката!"
		myorder.style.color = "green"
		
	fnametextbox.value = "";
	emailtextbox.value = "";
	addresstextbox.value = "";
	citytextbox.value = "";
	} 
	
}
function commentf() {
	let co = document.getElementById("rowcom");
	let name = document.getElementById("name");
	let errorcomm = document.getElementById("errorcomm");
	var _comment = document.createElement('pre')
   if (co.value != '' && name.value != '') {
	   errorcomm.textContent = " "
	  _comment.textContent = co.value;
	document.getElementById("comm").innerHTML = "<pre>" + name.value + " " + "коментира:" + " " + co.value + "</pre>" + document.getElementById("comm").innerHTML	
    co.value = "";
    name.value = "";	
   }
   else {
	   errorcomm.textContent = "Не сте въвели всички полета!"
	   errorcomm.style.color = "red"
   }
}
