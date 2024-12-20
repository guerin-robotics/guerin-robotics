/*

scroll variable code

*/

document.querySelector("#image").addEventListener('click', function(){
	var location = "file:///Users/cparker/Desktop/gchs_robotics/index.html"
	window.location.href = location;
})

let scrolled_pixels = 0;

function updateScroll() {
    scrolled_pixels = window.scrollY; // gets the current position of the page
    pixel_percent = scrolled_pixels / 200;
    if (scrolled_pixels == 0){
    	document.querySelector(".top_bar").style.background = "transparent"; // if the page is at the top, tha bar is transparent
    } else if (scrolled_pixels < 200){
    	document.querySelector(".top_bar").style.background = "rgba(19, 23, 28, " + pixel_percent; // if the page is at 0-200px, it slowly becomes less transparent
    } else {
    	document.querySelector(".top_bar").style.background = "rgb(19, 23, 28)"; // if the page is scrolled past 200px, the bar is stuck with a full color
    }
}

/*

code that runs when the page loads

*/

function reload_edit(){
	document.querySelectorAll('.edit').forEach(function(element){ // find all of the divs with a class of "edit"
		element.addEventListener('click', function(){ // for each one of these divs, allow the content to be editable in the HTML page
			this.setAttribute('contenteditable', 'true');
	    	this.focus();
		})
	})

	document.querySelectorAll('img.edit').forEach(function(img) {
	    img.addEventListener('click', function() {
	        fileInput.currentImage = img; // Store a reference to the current image in the file input
	        fileInput.click(); // trigger the file input dialog 
	    });
	});
}

document.addEventListener('DOMContentLoaded', function(){ // when the page is loaded, initialize these functions
	updateScroll();
	reload_edit();
})

function hidepages(){ // when this function is called, it hides all of the pages. usually, one singular page will be unhidden right after as a method of naviagting through the many pages
	const pages = ["#edit-home", "#edit-about_us", "#edit-blog", "#edit-schedule", "#edit-sponsors", "#edit-blog_create", "#choose-blog_create"];
    pages.forEach(page => {
        document.querySelector(page).style.display = "none";
    });
    window.scrollTo(0, 0); // scroll to the top of whatever page is being displayed now
}

/*

code to assign <div>s to their respective navigation buttons

*/

document.querySelector("#button-home").addEventListener('click', function(){
	hidepages();
	document.querySelector("#edit-home").style.display = "flex";
});

document.querySelector("#button-about_us").addEventListener('click', function(){
	hidepages();
	document.querySelector("#edit-about_us").style.display = "flex";
});

document.querySelector("#button-blog").addEventListener('click', function(){
	hidepages();
	document.querySelector("#edit-blog").style.display = "flex";
});

document.querySelector("#button-schedule").addEventListener('click', function(){
	hidepages();
	document.querySelector("#edit-schedule").style.display = "flex";
});

document.querySelector("#button-sponsors").addEventListener('click', function(){
	hidepages();
	document.querySelector("#edit-sponsors").style.display = "flex";
});

/*

blog creation functionality

*/

document.querySelector("#button-new_blog").addEventListener('click', function(){
	hidepages();
	document.querySelector("#choose-blog_create").style.display = "flex";
});

document.querySelector("#button-create_csv").addEventListener('click', function(){
	hidepages();
	document.querySelector("#edit-blog_create").style.display = "flex";
});

var current_color = 0; // the end result of a blog should have alternating sections with light and dark colors. this variable keeps track of if the last section created was dark (0) or light (1)
var section_select = document.querySelector("#section-select");

// creating the new sections in the blog editor

document.querySelector("#button-section_1").addEventListener('click', function(){

	// creates a specific layout when this button is pressed

	var new_section = document.createElement('div');
	var new_blog = document.createElement('div');
	new_blog.classList = "blog";
	var new_text = document.createElement('div');
	new_text.classList = "text"
	var new_h1 = document.createElement('h1');
	new_h1.classList = "edit";
	new_h1.innerHTML = "TITLE"
	var new_p = document.createElement('p');
	new_p.classList = "edit";
	new_p.innerHTML = "TEXT"
	var new_photo = document.createElement('div');
	new_photo.classList = "photo_square";
	var new_img = document.createElement('img');

	// decide which color the section should be

	if (current_color == 0){
		new_section.className = 'section dark';
		current_color = current_color + 1;
	} else {
		new_section.className = 'section light';
		current_color = current_color - 1;
	}

	// insert all the divs we just created onto the page

	section_select.parentNode.insertBefore(new_section, section_select);
	new_section.appendChild(new_blog);
	new_blog.appendChild(new_text);
	new_blog.appendChild(new_photo);
	new_text.appendChild(new_h1);
	new_text.appendChild(new_p);
	new_photo.innerHTML = "<img class='edit'>"; // allow the content to be editable

	reload_edit(); // call the reload_edit function to make sure the pages finds the new .edit div
})

document.querySelector("#button-section_2").addEventListener('click', function(){ // same as button-section_1 but with a different layout
	var new_section = document.createElement('div');
	var new_p = document.createElement('div');
	new_p.classList = "p edit"
	new_p.innerHTML = "TEXT"

	if (current_color == 0){
		new_section.className = 'section dark';
		current_color = current_color + 1;
	} else {
		new_section.className = 'section light';
		current_color = current_color - 1;
	}

	section_select.parentNode.insertBefore(new_section, section_select);
	new_section.appendChild(new_p);

	reload_edit();
})

document.querySelector("#button-section_3").addEventListener('click', function(){ // same as button-section_1 but with a different layout
	var new_section = document.createElement('div');
	var new_blog = document.createElement('div');
	new_blog.classList = "blog";
	var new_text = document.createElement('div');
	new_text.classList = "text"
	var new_h1 = document.createElement('h1');
	new_h1.classList = "edit";
	new_h1.innerHTML = "TITLE"
	var new_p = document.createElement('p');
	new_p.classList = "edit";
	new_p.innerHTML = "TEXT"
	var new_photo = document.createElement('div');
	new_photo.classList = "photo_square";
	var new_img = document.createElement('img');

	if (current_color == 0){
		new_section.className = 'section dark';
		current_color = current_color + 1;
	} else {
		new_section.className = 'section light';
		current_color = current_color - 1;
	}

	section_select.parentNode.insertBefore(new_section, section_select);
	new_section.appendChild(new_blog);
	new_blog.appendChild(new_photo);
	new_blog.appendChild(new_text);
	new_text.appendChild(new_h1);
	new_text.appendChild(new_p);
	new_photo.innerHTML = "<img class='edit'>";

	reload_edit();
})

document.querySelector("#button-section_4").addEventListener('click', function(){ // same as button-section_1 but with a different layout
	var new_section = document.createElement('div');
	var new_p = document.createElement('div');
	new_p.classList = "p"
	new_p.innerHTML = "<img class='edit' style='width: 400px; height: 400px; object-fit: cover; object-position: center;' src='view/img/image.png'>"

	if (current_color == 0){
		new_section.className = 'section dark';
		current_color = current_color + 1;
	} else {
		new_section.className = 'section light';
		current_color = current_color - 1;
	}

	section_select.parentNode.insertBefore(new_section, section_select);
	new_section.appendChild(new_p);

	reload_edit();
})

/*

allowing the user to add images

*/

var fileInput = document.createElement('input'); // create a file input element dynamically and set its type and style
fileInput.type = 'file';
fileInput.style.display = 'none';
fileInput.accept = 'image/*';  // accept only image files

document.body.appendChild(fileInput); // append the file input to the body

fileInput.addEventListener('change', function(event) { // add change event listener to the file input
    var file = event.target.files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function(e) {
            fileInput.currentImage.src = e.target.result; // use the previously stored reference to set the image source
        };
        reader.readAsDataURL(file);
    }
});

/*

saving the blog

*/

document.querySelector("#button-save_blog").addEventListener('click', function(){
    // Remove the specified div
    var element = document.getElementById("section-select");
    if (element) {
        element.parentNode.removeChild(element);
    }

    var nextelement = document.getElementById("edit-blog");
    if (nextelement) {
        nextelement.parentNode.removeChild(nextelement);
    }

    var imageElement = document.getElementById("image");
    if (imageElement) {
        imageElement.src = "../view/img/logo_formatted.png";
    }

    var idsToRemove = ["section-select", "edit-blog", "button-home", "button-about_us", "button-blog", "button-schedule", "button-sponsors"];

    idsToRemove.forEach(function(id) { // remove elements by their IDs
        var element = document.getElementById(id);
        if (element) {
            element.parentNode.removeChild(element);
        }
    });

    // prompt for blog title

    var blogTitle = prompt("What should the url path of this blog be? You will choose the title later.");

    // check if a title was entered

    if (blogTitle) {
        var bodyContent = document.body.innerHTML; // get the contents of the <body> tag

        var htmlContent = `
			<!DOCTYPE html>
			<html>
				<head>
					<link rel="stylesheet" type="text/css" href="../view/css/style.css">
					<link rel="stylesheet" type="text/css" href="../view/css/cosmetics.css">
					<link rel="stylesheet" type="text/css" href="../view/css/index.css">
					<link rel="icon" type="image/png" href="../view/img/logo_formatted.png">
					<meta charset="utf-8">
					<meta name="viewport" content="width=device-width, initial-scale=1">
					<title>Golden Gears - ${blogTitle}</title>
				</head>
				<body>
					${bodyContent}
				</body>
				<script type="text/javascript" src="../view/js/index.js"></script>
				<script type="text/javascript">
					document.querySelector("#image").addEventListener('click', function(){
						var location = "file:///Users/cparker/Desktop/gchs_robotics/index.html"
						window.location.href = location;
					})
				</script>
			</html>
		`;

        var blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8;' }); // create a Blob with the HTML content

        var link = document.createElement("a"); // create a link element to download the Blob
        var url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", blogTitle + ".html");
        link.style.visibility = 'hidden';

        document.body.appendChild(link); // append the link, trigger the download, then remove the link
        link.click();
        document.body.removeChild(link);
    }

    location.reload(); // reload the page to avoic any errors due to omitting navigation links to format the blog
});

function userDefined(method){
	var blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8;' }); // create a Blob with the HTML content

    var link = document.createElement("a"); // create a link element to download the Blob
    var url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", blogTitle + ".html");
    link.style.visibility = 'hidden';

    document.body.appendChild(link); // append the link, trigger the download, then remove the link
    link.click();
    document.body.removeChild(method);
}