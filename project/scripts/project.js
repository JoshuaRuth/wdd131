// select the DOM elements for output
const year = document.querySelector("#year");

// use the date object
const today = new Date();


year.innerHTML = `<span class="highlight">${today.getFullYear()}© ♋Joshua Ruth ☢ Utah, United States of America</span>`;

let text = document.lastModified;
document.getElementById("lastModified").innerHTML = text;
//==============================================================================//
// Hamburger Menu?

//select for form
const gems = [
  {
    name: "Ruby",
  },
  {
    name: "Topaz",
  },
  {
    name: "Citrine",
  },
  {
    name: "Emerald",
  },
  {
    name: "Sapphire",
  },
  {
    name: "Tanzanite",
  },
  {
    name: "Amethyst",
  },
  {
    name: "Opal",
  },
    {
    name: "Smokey Quartz",
  },
  {
    name: "Other (Please let us know in the text box...)",
  },
];

const select = document.querySelector("#selectGem");
  
gems.forEach(gem =>{
  let option = document.createElement("option");

  option.value = gem.name;
  
  option.textContent = gem.name;

  select.appendChild(option)
});
//==Rock gallery==//

