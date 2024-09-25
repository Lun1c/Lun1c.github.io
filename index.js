var sections = document.querySelectorAll('section'); // Select all sections

var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            var sectionName = entry.target.getAttribute('data-section-name'); // Get the section name

            if (entry.target.id === 'home') {
                document.querySelector('.logo').textContent = "Home"; // Change logo to "Home"

                var textWrapper = document.querySelector('.ml2');
                textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
                
                anime.timeline({loop: false})
                  .add({
                    targets: '.ml2 .letter',
                    scale: [4, 1],
                    opacity: [0, 1],
                    translateZ: 0,
                    easing: "easeOutExpo",
                    duration: 950,
                    delay: function(el, i) { return 70 * i; }
                  }).add({
                    targets: '.ml2',
                    opacity: 1, 
                    duration: 1000,
                    easing: "easeOutExpo",
                  });
                

            } else if (entry.target.id === 'new-zealand') {
                document.querySelector('.logo').textContent = sectionName || "New Zealand"; // Change logo to "New Zealand"

                // Trigger the animation for New Zealand boxes
                anime({
                    targets: '.staggering-direction-demo .el',
                    translateX: [-270, 0], // Right to left
                    opacity: [0, 1],      // Fades in
                    delay: anime.stagger(100, { start: 500 }), // Staggered effect
                    easing: 'easeOutQuad'
                });

            } else {
                document.querySelector('.logo').textContent = sectionName || "Logo"; // Change logo based on section name
            }
        }
    }); 
}, {
    threshold: 0.5 // Trigger when half the section is visible
});

// Observe each section
sections.forEach(function(section) {
    observer.observe(section);
});

// On contact page load, change logo to "Contact"
if (window.location.pathname.includes("contact.html")) {
    document.querySelector('.logo').textContent = "Contact";
}

// new zealand js
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})  // plays only once
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 1250,  // duration for  animation
    delay: (el, i) => 100 * i  // delay between each letter
  }).add({
    targets: '.ml6',
    opacity: 1,  
    duration: 1250,  //  duration for a smoother fade-in
    easing: "easeOutExpo"
  });

// japan js
// Wrap every letter in a span
document.addEventListener('DOMContentLoaded', function() {
  // Japan js animation
  var textWrapper = document.querySelector('.ml3');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime.timeline({loop: true})
    .add({
      targets: '.ml3 .letter',
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 2250,
      delay: (el, i) => 150 * (i + 1)
    }).add({
      targets: '.ml3',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });
});



  // On contact page load, change logo to "Contact"
if (window.location.pathname.includes("contact.html")) {
  document.querySelector('.logo').textContent = "Contact";
} else if (window.location.pathname.includes("japan.html")) {
  document.querySelector('.logo').textContent = "Japan";
}

var sections = document.querySelectorAll('section');
if (sections.length > 0) {
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                var sectionName = entry.target.getAttribute('data-section-name');
                // Your existing section logic
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(function(section) {
        observer.observe(section);
    });
}

anime({
  targets: '.boxes-container .box',
  translateY: [50, 0],
  opacity: [0, 1],
  delay: anime.stagger(150, { start: 500 }),
  easing: 'easeOutQuad'
});
