# Expandable HTML Envelope Tabs
A set of expandable envelope tabs that are using HTML, CSS, JavaScript and JQuery. This set includes alternating hover effects for the expandable envelope tabs.

### Example:
![alt tag](http://kelly.tech/wp-content/uploads/2016/03/Expandable-tabs.png)

[View Demo](http://www.googledrive.com/host/0B6XoP8y8-xiENEFsbUJUWDNNajg/?utm_source=github&utm_medium=demo&utm_campaign=demoviews) 

### External styling sheets that are needed:
- Get Bootstrap
- Jquery
- Google Font

### Styling

```javascript
function(){
				// Stop All Previous Animations - Important
				$("#show").stop(true,false);
				document.getElementById("boxx1").style.backgroundColor = "#5aaafa";
				document.getElementById("button").style.backgroundColor = "#fff";
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
				document.getElementById("button1").style.color = "#fff";
				document.getElementById("header2").style.color = "#7cc7ff";
				// Show Hidden Tab for box #2
				$("#show1").slideDown("slow");
			},
```
