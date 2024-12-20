let blog_titles = ["Example 1", "Example 2", "Example 3"];
let blog_urls = ["example_1", "example_2", "example_3"]
let blog_descriptions = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer turpis lorem, facilisis ac interdum ac, eleifend vitae diam. Duis id rhoncus elit, vitae finibus neque. Morbi sed risus nunc. Mauris nunc nunc, cursus eu ipsum eget, pulvinar hendrerit eros. Etiam maximus felis in varius ullamcorper. Sed ut tempor turpis. Quisque nec odio mi. Proin viverra diam nec lectus varius semper. Pellentesque venenatis erat ut tristique iaculis.",
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer turpis lorem, facilisis ac interdum ac, eleifend vitae diam. Duis id rhoncus elit, vitae finibus neque. Morbi sed risus nunc. Mauris nunc nunc, cursus eu ipsum eget, pulvinar hendrerit eros. Etiam maximus felis in varius ullamcorper. Sed ut tempor turpis. Quisque nec odio mi. Proin viverra diam nec lectus varius semper. Pellentesque venenatis erat ut tristique iaculis.", 
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer turpis lorem, facilisis ac interdum ac, eleifend vitae diam. Duis id rhoncus elit, vitae finibus neque. Morbi sed risus nunc. Mauris nunc nunc, cursus eu ipsum eget, pulvinar hendrerit eros. Etiam maximus felis in varius ullamcorper. Sed ut tempor turpis. Quisque nec odio mi. Proin viverra diam nec lectus varius semper. Pellentesque venenatis erat ut tristique iaculis."];
let blog_images = ["first.jpeg", "robot.jpg", "team.jpg"];

/*

scroll variable code

*/

let scrolled_pixels = 0;

function updateScroll() {
    scrolled_pixels = window.scrollY;
    pixel_percent = scrolled_pixels / 200;
    if (scrolled_pixels == 0){
    	document.querySelector(".top_bar").style.background = "transparent";
    } else if (scrolled_pixels < 200){
    	document.querySelector(".top_bar").style.background = "rgba(19, 23, 28, " + pixel_percent;
    } else {
    	document.querySelector(".top_bar").style.background = "rgb(19, 23, 28)";
    }
}

window.addEventListener('scroll', updateScroll);

/*

code that runs when the page loads

*/

document.addEventListener('DOMContentLoaded', function(){
	updateScroll();
})

function hidepages(){
	const pages = ["#page-home", "#page-about_us", "#page-blog", "#page-schedule", "#page-sponsors"];
    pages.forEach(page => {
        document.querySelector(page).style.display = "none";
    });
    window.scrollTo(0, 0);
}

document.querySelector("#button-home").addEventListener('click', function(){
	hidepages();
	document.querySelector("#page-home").style.display = "flex";
});

document.querySelector("#button-about_us").addEventListener('click', function(){
	hidepages();
	document.querySelector("#page-about_us").style.display = "flex";
});

document.querySelector("#button-blog").addEventListener('click', function(){
	hidepages();
	document.querySelector("#page-blog").style.display = "flex";
});

document.querySelector("#button-schedule").addEventListener('click', function(){
	hidepages();
	document.querySelector("#page-schedule").style.display = "flex";
});

document.querySelector("#button-sponsors").addEventListener('click', function(){
	hidepages();
	document.querySelector("#page-sponsors").style.display = "flex";
});

for (let i = 0; i < blog_titles.length; i++) {
	const sectionDiv = document.createElement('div');
	if (i%2 == 0){
		sectionDiv.className = 'section dark';
	} else {
		sectionDiv.className = 'section light';
	}

	sectionDiv.innerHTML = `
	    <div class="blog">
	        <div class="text">
	            <h1 class="blog-title">${blog_titles[i]}</h1>
	            <p class="blog-content">${blog_descriptions[i]}</p>
	            <h2 class="hover" id="blog_${i}">READ MORE</h2>
	        </div>
	        <div class="photo_square">
	            <img src="view/img/${blog_images[i]}">
	        </div>
	    </div>
	`;

	document.querySelector("#page-blog").appendChild(sectionDiv);

	document.querySelector("#blog_" + i).addEventListener('click', function(){
		var location = "file:///Users/cparker/Desktop/gchs_robotics/blog/" + blog_urls[i] + ".html"
		window.location.href = location;
	})
}