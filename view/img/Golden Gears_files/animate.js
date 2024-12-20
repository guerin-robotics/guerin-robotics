function animate(type, start, node, end, duration, easing) {
  var startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    var progress = timestamp - startTime;
    var percentage = Math.min(progress / duration, 1);
    var easedPercentage = easing(percentage);

    var value = start + (end - start) * easedPercentage;
    if (type === 'height') {
      node.style.height = value + 'px';
    } else if (type === 'width') {
      node.style.width = value + '%';
    } else if (type === 'margin-left') {
      node.style.marginLeft = value + 'px';
    }
    currentPosition_node = value; // Update current position

    if (percentage < 1) {
      animationId_node = requestAnimationFrame(step);
    }
  }

  animationId_node = requestAnimationFrame(step);
}

function easeInOutQuad(t) {
  t /= 0.5;
  if (t < 1) return 0.5 * t * t;
  t--;
  return -0.5 * (t * (t - 2) - 1);
}

document.addEventListener('DOMContentLoaded', function(){
  document.querySelector("#button-home").style.borderBottom = "2px solid white"
  document.querySelector("#button-about_us").style.borderBottom = "2px solid white"
  document.querySelector("#button-blog").style.borderBottom = "2px solid white"
  document.querySelector("#button-schedule").style.borderBottom = "2px solid white"
  document.querySelector("#button-sponsors").style.borderBottom = "2px solid white"

  document.querySelector("#button-home").style.borderBottom = "2px solid transparent"
  document.querySelector("#button-about_us").style.borderBottom = "2px solid transparent"
  document.querySelector("#button-blog").style.borderBottom = "2px solid transparent"
  document.querySelector("#button-schedule").style.borderBottom = "2px solid transparent"
  document.querySelector("#button-sponsors").style.borderBottom = "2px solid transparent"
})

document.querySelector("#button-home").addEventListener('mouseover', function(){
  this.style.borderBottom = "2px solid white"
})
document.querySelector("#button-home").addEventListener('mouseout', function(){
  this.style.borderBottom = "2px solid transparent"
})

document.querySelector("#button-about_us").addEventListener('mouseover', function(){
  this.style.borderBottom = "2px solid white"
})
document.querySelector("#button-about_us").addEventListener('mouseout', function(){
  this.style.borderBottom = "2px solid transparent"
})

document.querySelector("#button-blog").addEventListener('mouseover', function(){
  this.style.borderBottom = "2px solid white"
})
document.querySelector("#button-blog").addEventListener('mouseout', function(){
  this.style.borderBottom = "2px solid transparent"
})

document.querySelector("#button-schedule").addEventListener('mouseover', function(){
  this.style.borderBottom = "2px solid white"
})
document.querySelector("#button-schedule").addEventListener('mouseout', function(){
  this.style.borderBottom = "2px solid transparent"
})

document.querySelector("#button-sponsors").addEventListener('mouseover', function(){
  this.style.borderBottom = "2px solid white"
})
document.querySelector("#button-sponsors").addEventListener('mouseout', function(){
  this.style.borderBottom = "2px solid transparent"
})

document.addEventListener("DOMContentLoaded", function() {
  const fadeInElements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      //console.log(entry.target, entry.isIntersecting); // Add this line
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    root: null, // relative to the viewport
    rootMargin: '0px',
    threshold: 0.1 // 10% of the element should be visible
  });

  fadeInElements.forEach(element => {
    observer.observe(element);
  });
});



























/*menu_button_container.addEventListener('click', function() {

  if (!is_dropdown) {

    var type = 'height';
    var start_1 = 0;
    var start_2 = 0;
    var start_3 = 0;
    var start_4 = 0;
    var start_5 = 0;
    animate(type, start_1, dropdown_1, 100, 600, easeInOutQuad);
    animate(type, start_2, dropdown_2, 150, 600, easeInOutQuad);
    animate(type, start_3, dropdown_3, 200, 600, easeInOutQuad);
    animate(type, start_4, dropdown_4, 250, 600, easeInOutQuad);
    animate(type, start_5, dropdown_5, 300, 600, easeInOutQuad);
    is_dropdown = true;

  } else {

    var type = 'height';
    var start_1 = 100;
    var start_2 = 150;
    var start_3 = 200;
    var start_4 = 250;
    var start_5 = 300;
    animate(type, start_1, dropdown_1, 0, 300, easeInOutQuad);
    animate(type, start_2, dropdown_2, 0, 300, easeInOutQuad);
    animate(type, start_3, dropdown_3, 0, 300, easeInOutQuad);
    animate(type, start_4, dropdown_4, 0, 300, easeInOutQuad);
    animate(type, start_5, dropdown_5, 0, 300, easeInOutQuad);
    is_dropdown = false;

  }

});

menu_slider_trigger.addEventListener('mouseover', function() {

  if (!is_focused) {
    var start = 0;
    var type = 'width';
    animate(type, start, menu_slider, 100, 250, easeInOutQuad);
    var type = 'margin-left';
    //animate(type, start, lines, 40, 500, easeInOutQuad);
    is_focused = true;
  }

});

menu_slider_trigger.addEventListener('mouseout', function() {

  if (is_focused) {
    var start = 100;
    var type = 'width';
    animate(type, start, menu_slider, 0, 250, easeInOutQuad);
    var start = 40;
    var type = 'margin-left';
    //animate(type, start, lines, 0, 300, easeInOutQuad);
    is_focused = false;
  }

});

external_slider_trigger.addEventListener('mouseover', function() {

  if (!is_focused) {
    var start = 0;
    var type = 'width';
    animate(type, start, external_slider, 30, 250, easeInOutQuad);
    var type = 'margin-left';
    //animate(type, start, lines, 40, 500, easeInOutQuad);
    is_focused = true;
  }

});

external_slider_trigger.addEventListener('mouseout', function() {

  if (is_focused) {
    var start = 30;
    var type = 'width';
    animate(type, start, external_slider, 0, 250, easeInOutQuad);
    var start = 40;
    var type = 'margin-left';
    //animate(type, start, lines, 0, 300, easeInOutQuad);
    is_focused = false;
  }

});

external_slider_trigger.addEventListener('click', function() {

  var currentUrl = window.location.href;
  if (currentUrl.endsWith('/admin.html')) {
    var newUrl = currentUrl.replace('/admin.html', '/index.html');
    window.location.href = newUrl;
  }

});

sidebar_item_1.addEventListener('mouseover', function() {

  var is_sidebar_1 = true;

  var start = 25;
  var type = 'width';
  animate(type, start, sidebar_item_1, 40, 150, easeInOutQuad);

})

sidebar_item_1.addEventListener('mouseout', function() {

  var is_sidebar_1 = false;

  var start = 40;
  var type = 'width';
  animate(type, start, sidebar_item_1, 25, 150, easeInOutQuad);

})

sidebar_item_2.addEventListener('mouseover', function() {

  var is_sidebar_2 = true;

  var start = 25;
  var type = 'width';
  animate(type, start, sidebar_item_2, 40, 150, easeInOutQuad);

})

sidebar_item_2.addEventListener('mouseout', function() {

  var is_sidebar_2 = false;

  var start = 40;
  var type = 'width';
  animate(type, start, sidebar_item_2, 25, 150, easeInOutQuad);

})

sidebar_item_3.addEventListener('mouseover', function() {

  var is_sidebar_3 = true;

  var start = 25;
  var type = 'width';
  animate(type, start, sidebar_item_3, 40, 150, easeInOutQuad);

})

sidebar_item_3.addEventListener('mouseout', function() {

  var is_sidebar_3 = false;

  var start = 40;
  var type = 'width';
  animate(type, start, sidebar_item_3, 25, 150, easeInOutQuad);

})

sidebar_item_4.addEventListener('mouseover', function() {

  var is_sidebar_4 = true;

  var start = 25;
  var type = 'width';
  animate(type, start, sidebar_item_4, 40, 150, easeInOutQuad);

})

sidebar_item_4.addEventListener('mouseout', function() {

  var is_sidebar_4 = false;

  var start = 40;
  var type = 'width';
  animate(type, start, sidebar_item_4, 25, 150, easeInOutQuad);

})

function animate(type, start, node, end, duration, easing) {
  var startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    var progress = timestamp - startTime;
    var percentage = Math.min(progress / duration, 1);
    var easedPercentage = easing(percentage);

    var value = start + (end - start) * easedPercentage;
    if (type === 'height') {
      node.style.height = value + 'px';
    } else if (type === 'width') {
      node.style.width = value + '%';
    } else if (type === 'margin-left') {
      node.style.marginLeft = value + 'px';
    }
    currentPosition_node = value; // Update current position

    if (percentage < 1) {
      animationId_node = requestAnimationFrame(step);
    }
  }

  animationId_node = requestAnimationFrame(step);
}

function easeInOutQuad(t) {
  t /= 0.5;
  if (t < 1) return 0.5 * t * t;
  t--;
  return -0.5 * (t * (t - 2) - 1);
}

sidebar_item_1.addEventListener('click', function() {

  sidebar_item_1.style.background = "#ffffff";
  sidebar_item_2.style.background = "#ffffff";
  sidebar_item_3.style.background = "#ffffff";
  sidebar_item_4.style.background = "#ffffff";
  sidebar_item_1.style.background = "linear-gradient(to top, #592E84, black)";

})

sidebar_item_2.addEventListener('click', function() {

  sidebar_item_1.style.background = "#ffffff";
  sidebar_item_2.style.background = "#ffffff";
  sidebar_item_3.style.background = "#ffffff";
  sidebar_item_4.style.background = "#ffffff";
  sidebar_item_2.style.background = "linear-gradient(to top, #592E84, black)";

})

sidebar_item_3.addEventListener('click', function() {

  sidebar_item_1.style.background = "#ffffff";
  sidebar_item_2.style.background = "#ffffff";
  sidebar_item_3.style.background = "#ffffff";
  sidebar_item_4.style.background = "#ffffff";
  sidebar_item_3.style.background = "linear-gradient(to top, #592E84, black)";

})

sidebar_item_4.addEventListener('click', function() {

  sidebar_item_1.style.background = "#ffffff";
  sidebar_item_2.style.background = "#ffffff";
  sidebar_item_3.style.background = "#ffffff";
  sidebar_item_4.style.background = "#ffffff";
  sidebar_item_4.style.background = "linear-gradient(to top, #592E84, black)";

})

inner_footer.addEventListener('mouseover', function() {

  var start = 50;
  var type = 'height';
  animate(type, start, inner_footer, 350, 300, easeInOutQuad);

})

inner_footer.addEventListener('mouseout', function() {

  var start = 350;
  var type = 'height';
  animate(type, start, inner_footer, 50, 300, easeInOutQuad);

})

*/