			$(document).ready(function(){
			 console.log('Envelope.js by Xavier Kelly has Properly loaded Enjoy');
			// Select the div ID for box #1
			$("#box").hover(function(){
				// Stop All Previous Animations - Important
				$("#show").stop(true,false);
				// Change Background Color
				document.getElementById("boxx1").style.backgroundColor = "#fff";
				// Change Background Color
				document.getElementById("button").style.backgroundColor = "#7cc7ff";
				document.getElementById("button").style.borderBottom = "2px solid #6FB3E5";
				// Change Text Color
				document.getElementById("button").style.color = "#fff";
				// Change Text Color
				document.getElementById("header1").style.color = "#7cc7ff";
				// Show Hidden Tab for box #1
			$("#show").slideDown("slow");
			}, function(){
				// Stop All Previous Animations - Important
				$("#show").stop(true,false);
				document.getElementById("boxx1").style.backgroundColor = "#5aaafa";
				document.getElementById("button").style.backgroundColor = "#fff";
				document.getElementById("button").style.borderBottom = "2px solid #eaeaea";
				document.getElementById("button").style.color = "#5aaafa";
				document.getElementById("header1").style.color = "#fff";
				// Hide Hidden Tab for box #3
				$("#show").slideUp("slow");
			});
			// Select div ID for box #2
			$("#box1").hover(function(){
				// Stop All Previous Animations - Important
				$("#show1").stop(true,false);
				document.getElementById("boxx2").style.backgroundColor = "#fff";
				document.getElementById("button1").style.backgroundColor = "#7cc7ff";
				document.getElementById("button1").style.borderBottom = "2px solid #6FB3E5"
				document.getElementById("button1").style.color = "#fff";
				document.getElementById("header2").style.color = "#7cc7ff";
				// Show Hidden Tab for box #2
				$("#show1").slideDown("slow");
			}, function(){
			// Stop All Previous Animations - Important
				$("#show1").stop(true,false);
				document.getElementById("boxx2").style.backgroundColor = "#5aaafa";
				document.getElementById("button1").style.backgroundColor = "#fff";
				document.getElementById("button1").style.borderBottom = "2px solid #eaeaea";
				document.getElementById("button1").style.color = "#5aaafa";
				document.getElementById("header2").style.color = "#fff";
				// Hide Hidden Tab for box #3
				$("#show1").slideUp("slow");
			});
			// Select div ID for box #3
			$("#box2").hover(function(){
				// Stop All Previous Animations - Important
				$("#show2").stop(true,false);
				document.getElementById("boxx3").style.backgroundColor = "#fff";
				document.getElementById("button2").style.backgroundColor = "#7cc7ff";
				document.getElementById("button2").style.borderBottom = "2px solid #6FB3E5"
				document.getElementById("button2").style.color = "#fff";
				document.getElementById("header3").style.color = "#7cc7ff";
				// Show Hidden Tab for box #3
				$("#show2").slideDown("slow");
			}, function(){
				// Stop All Previous Animations - Important
				$("#show2").stop(true,false);
				document.getElementById("boxx3").style.backgroundColor = "#5aaafa";
				document.getElementById("button2").style.backgroundColor = "#fff";
				document.getElementById("button2").style.borderBottom = "2px solid #eaeaea";
				document.getElementById("button2").style.color = "#5aaafa";
				document.getElementById("header3").style.color = "#fff";
				// Hide Hidden Tab for box #3
				$("#show2").slideUp("slow");
			});});
