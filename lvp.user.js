// ==UserScript==
// @name         Latest Viewed Project
// @namespace    http://scratch.mit.edu/user/7Snails
// @version      1.0
// @description  Adds your latest viewed project to a studio
// @author       @7Snails
// @match        https://scratch.mit.edu/projects/*
// @match        http://scratch.mit.edu/projects/*
// @downloadURL  https://github.com/7Snails/last-viewed-project/raw/master/lvp.user.js
// @updateURL    https://github.com/7Snails/last-viewed-project/raw/master/lvp.user.js
// ==/UserScript==

var currentURL = window.location.href;

// Add your studio ID below
var studio = "3708707";

if (currentURL.includes("scratch.mit.edu/projects/") === true) {
var ID = currentURL.substring(33, currentURL.length - 1);
$.ajax({
          type: "PUT",
          url: "https://scratch.mit.edu/site-api/projects/in/" + studio + "/add/?pks=" + ID
});
}
