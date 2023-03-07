
// let login =document.getElementsByClassName("login")[0];
// let signup =document.getElementsByClassName("signup")[0];
// let slider =document.getElementsByClassName("slider")[0];

// login.addEventListener("click",function(){
	
// 	document.getElementsByClassName("form-section").classList.add("login-box")
	
// 	document.getElementsByClassName("form-section").classList.remove("signup-box")
// })

// signup.addEventListener("click",function(){
	
// 	document.getElementsByClassName("form-section").classList.remove("login-box")
	
// 	document.getElementsByClassName("form-section").classList.add("signup-box")
// })	
	
	function myFunction() {
			var x = document.getElementById("myNavbar");
			if (x.className === "navbar") {
				x.className += " responsive";
			} else {
				x.className = "navbar";
			}
		}

	// validating form Before Submission
	
	console.log("Hello World")

	function validateform(){

		let t1=document.getElementById("t1").value;
		let t2=document.getElementById("t2").value;
		let t3=document.getElementById("t3").value;
		let t4=document.getElementById("t4").value;
		let t5=document.getElementById("t5").value;
		
		if (t1 == "") {
			alert("Please enter your name.");
			
			return false;
		}
		else if (!/\S+@\S+\.\S+/.test(t2)) {
			alert("Please enter a valid email address.");
			return false;
		}
		else if (t3 == "") {
			alert("Please enter a valid Username.");
			return false;
		}
		else if (t4=="" ) {
			alert("Please enter a valid password.");
			return false;
		}

	return true;

	}