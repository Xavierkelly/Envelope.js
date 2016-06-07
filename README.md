# Expandable HTML Envelope Tabs
A set of expandable envelope tabs that are using HTML, CSS, JavaScript and JQuery. This set includes alternating hover effects for the expandable envelope tabs that can be edit as shown below. Thank you and please star,share and follow. 

### Example:
![alt tag](http://www.kelly.tech/static/img/envolope.png)

[View Demo](http://Envelope.Kelly.Tech) 

### External styling sheets that are needed:
- [Get Bootstrap](http://getbootstrap.com/)
- [Jquery](https://jquery.com/)
- [Google Font](https://www.google.com/fonts)

### How to Change/Update Class Styling

```
	/* The Half Circle Styling */
	.circle { height:20px; width:40px;margin:0px;padding:0px;border-radius:0 0 90px 90px;-moz-border-radius: 0 0 90px 90px;-webkit-border-radius:0 0 90px 90px ;background:#7cc7ff;border-color:#7cc7ff;}
	/* The Container Styling */
	.container { padding:100px 20px 40px;background-color:#f1f1f1;}
	/* The Hidden Expandable Tab Styling */
	.hiddenTab { padding:40px;background-color:#7cc7ff;color:#ffffff;display:none}
	/* The Hidden Expandable Tab Button Styling */
	.hiddingTabButton {background-color:#ffffff; color:#7cc7ff; margin-top:20px;-webkit-box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.1);-moz-box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.1);box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.1);}
	/* The Visable Tab Styling */
	.visableTab { padding:0px 40px 40px;margin-top:20px;background-color:#5aaafa;margin:0px;border:0px;border-radius: 0px 0px 3px 3px;}
	/* The Visable Tab Button Styling */
	.visableTabButton { padding:5px 40px;background-color:#ffffff; color:#5aaafa; margin-top:20px;-webkit-box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.15);-moz-box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.15);box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.15);}
```
### HTML Structure
```
<div class="container">
	<div class="col-md-4">
		<div id="box">
			<div id="show" class="hiddenTab">
				<!-- Hidding Tab 1 Description  Starts -->
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur scelerisque, augue eget facilisis laoreet, lorem erat euismod orci, eu facilisis orci lectus eu metus. Morbi.</p>
				<!-- Hidding Tab 1 Description  Ends -->
				<!-- Hidding Tab 1 Button  Starts -->
				<button class="btn hiddingTabButton" >Download</button>
				<!-- Hidding Tab 1 Description  Ends -->
			</div>
			<div class="panel panel default visableTab" id="boxx1">
				<center class="noSpace"><div class="circle"></div>
					<h3 id="header1">Lorem Ipsum Dolor</h3>
					<button class="btn visableTabButton" id="button"><b>Learn More</b></button>
				</center>
			</div>
		</div>
	</div>
	<div class="col-md-4">
		<div id="box1">
			<div id="show1" class="hiddenTab">
				<!-- Hidding Tab 2 Description  Starts -->
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur scelerisque, augue eget facilisis laoreet, lorem erat euismod orci, eu facilisis orci lectus eu metus. Morbi.</p>
				<!-- Hidding Tab 2 Description  Ends -->
				<!-- Hidding Tab 2 Button  Starts -->
				<button class="btn hiddingTabButton" >Download</button>
				<!-- Hidding Tab 2 Description  Ends -->
			</div>
			<div class="panel panel default visableTab" id="boxx2">
				<center class="noSpace"><div class="circle"></div>
					<h3 id="header2">Lorem Ipsum Dolor</h3>
					<button class="btn visableTabButton" id="button1"><b>Learn More</b></button>
				</center>
			</div>
		</div>
	</div>
	<div class="col-md-4">
		<div id="box2">
			<div id="show2" class="hiddenTab">
				<!-- Hidding Tab 3 Description  Starts -->
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur scelerisque, augue eget facilisis laoreet, lorem erat euismod orci, eu facilisis orci lectus eu metus. Morbi.</p>
				<!-- Hidding Tab 3 Description  Ends -->
				<!-- Hidding Tab 3 Button  Starts -->
				<button class="btn hiddingTabButton" >Download</button>
				<!-- Hidding Tab 3 Description  Ends -->
			</div>
			<div class="panel panel default visableTab" id="boxx3">
				<center class="noSpace"><div class="circle"></div>
					<h3 id="header3">Lorem Ipsum Dolor</h3>
					<button class="btn visableTabButton" id="button2"><b>Learn More</b></button>
				</center>
			</div>
		</div>
	</div>
</div>
```
### How to Change Dynamic Styling With JavaScript

```javascript
function(){
				// Stop All Previous Animations - Important
				$("#show").stop(true,false);
				// Set Tab Background Color
				document.getElementById("boxx1").style.backgroundColor = "#5aaafa";
				// Set Button Tab Background Color
				document.getElementById("button").style.backgroundColor = "#fff";
				// Set Button Tab Color
				document.getElementById("button").style.color = "#5aaafa";
				// Set Header Color
				document.getElementById("header1").style.color = "#fff";
				// Hide Hidden Tab for box #3
				$("#show").slideUp("slow");
			});
			// Select div ID for box #2
			$("#box1").hover(function(){
				// Stop All Previous Animations - Important
				$("#show1").stop(true,false);
				// Set Tab Background Color
				document.getElementById("boxx2").style.backgroundColor = "#fff";
				// Set Button Tab Background Color
				document.getElementById("button1").style.backgroundColor = "#7cc7ff";
				// Set Button Tab Color
				document.getElementById("button1").style.color = "#fff";
				// Set Header Color
				document.getElementById("header2").style.color = "#7cc7ff";
				// Show Hidden Tab for box #2
				$("#show1").slideDown("slow");
			},
```
