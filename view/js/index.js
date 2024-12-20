let blog_titles = ["GCGG Newsletter Vol 1 Issue 6", "GCGG Newsletter Vol 1 Issue 5", "GCGG Newsletter Vol 1 Issue 4", "GCGG Newsletter Vol 1 Issue 3", "GCGG Newsletter Vol 1 Issue 2", "GCGG Newsletter Vol 1 Issue 1"];
let blog_urls = ["newsletter-vol1-issue6", "newsletter-vol1-issue5", "newsletter-vol1-issue4", "newsletter-vol1-issue3", "newsletter-vol1-issue2", "newsletter-vol1-issue1"]
let blog_descriptions = ["Check out the newsletter for Guerin Catholic Golden Gears for the week of 11/25/24!",
	"Check out the newsletter for Guerin Catholic Golden Gears for the week of 10/7/24!", 
	"Check out the newsletter for Guerin Catholic Golden Gears for the week of 11/15/24!", 
	"Check out the newsletter for Guerin Catholic Golden Gears for the week of 11/11/24!", 
	"Check out the newsletter for Guerin Catholic Golden Gears for the week of 10/7/24!", 
	"Check out the newsletter for Guerin Catholic Golden Gears for the week of 9/30/24!"];
let blog_images = ["logo.png", "logo.png", "logo.png", "logo.png", "logo.png", "logo.png"];
(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
	key: "YOUR_API_KEY",
    v: "weekly",
    // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
    // Add other bootstrap parameters as needed, using camel case.
  });

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
	            <img src="blog/blog-img/${blog_images[i]}">
	        </div>
	    </div>
	`;

	document.querySelector("#page-blog").appendChild(sectionDiv);

	document.querySelector("#blog_" + i).addEventListener('click', function(){
		var location = "blog/" + blog_urls[i] + ".html"
		window.location.href = location;
	})
}