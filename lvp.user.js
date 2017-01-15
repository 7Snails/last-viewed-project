// ==UserScript==
// @name         Latest Viewed Project
// @namespace    http://scratch.mit.edu/user/7Snails
// @version      1.0
// @description  Adds your latest viewed project to a studio
// @author       @7Snails
// @match        https://scratch.mit.edu/projects/*
// ==/UserScript==

var URL = window.location.href;
var studio = "3708707";
if (URL.includes("scratch.mit.edu/projects/") === true) {
var ID = URL.substring(33, URL.length - 1);
$.ajax({
          type: "PUT",
          url: "https://scratch.mit.edu/site-api/projects/in/" + studio + "/add/?pks=" + ID
});
}
