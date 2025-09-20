// select the DOM elements for output
const year = document.querySelector("#year");

// use the date object
const today = new Date();


year.innerHTML = `<span class="highlight">${today.getFullYear()}© ♋Joshua Ruth ☢ Utah, United States of America</span>`;

let text = document.lastModified;
document.getElementById("lastModified").innerHTML = text;

//==============================================================================//
//Weather Stuff
