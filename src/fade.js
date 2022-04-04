import $ from 'jquery';

$(document).ready(function () {
    var target = document.querySelector('#target');
    var targetActiveClass = 'target-is-active';

    // Call this function when it enters/leaves the viewport
    var callback = function(entries, observer) { 
    entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add(targetActiveClass);
    } else {
      //entry.target.classList.remove(targetActiveClass);
    }
    });
    };

    // Create our observer
    var observer = new IntersectionObserver(callback, {threshold: 0});
    observer.observe(target);
});


$(document).ready(function () {
    var target = document.querySelector('#tokenomics');
    var targetActiveClass = 'target-is-active';

    // Call this function when it enters/leaves the viewport
    var callback = function(entries, observer) { 
    entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add(targetActiveClass);
    } else {
      //entry.target.classList.remove(targetActiveClass);
    }
    });
    };

    // Create our observer
    var observer = new IntersectionObserver(callback, {threshold: 0});
    observer.observe(target);
});

$(document).ready(function () {
    var target = document.querySelector('#nn');
    var targetActiveClass = 'target-is-active';

    // Call this function when it enters/leaves the viewport
    var callback = function(entries, observer) { 
    entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add(targetActiveClass);
    } else {
      //entry.target.classList.remove(targetActiveClass);
    }
    });
    };

    // Create our observer
    var observer = new IntersectionObserver(callback, {threshold: 0});
    observer.observe(target);
});

$(document).ready(function () {
    var target = document.querySelector('#da');
    var targetActiveClass = 'target-is-active';

    // Call this function when it enters/leaves the viewport
    var callback = function(entries, observer) { 
    entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add(targetActiveClass);
    } else {
      //entry.target.classList.remove(targetActiveClass);
    }
    });
    };

    // Create our observer
    var observer = new IntersectionObserver(callback, {threshold: 0});
    observer.observe(target);
});

$(document).ready(function () {
    var target = document.querySelector('#protocoin');
    var targetActiveClass = 'target-is-active';

    // Call this function when it enters/leaves the viewport
    var callback = function(entries, observer) { 
    entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add(targetActiveClass);
    } else {
      //entry.target.classList.remove(targetActiveClass);
    }
    });
    };

    // Create our observer
    var observer = new IntersectionObserver(callback, {threshold: 0});
    observer.observe(target);
});

$(document).ready(function () {
    var target = document.querySelector('#t1');
    var targetActiveClass = 'target-is-active';

    // Call this function when it enters/leaves the viewport
    var callback = function(entries, observer) { 
    entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add(targetActiveClass);
    } else {
      //entry.target.classList.remove(targetActiveClass);
    }
    });
    };

    // Create our observer
    var observer = new IntersectionObserver(callback, {threshold: 0});
    observer.observe(target);
});