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
    g_name: "Ruby",
  },
  {
    g_name: "Topaz",
      },
  {
    g_name: "Citrine",
      },
  {
    g_name: "Emerald",
      },
  {
    g_name: "Sapphire",
      },
  {
    g_name: "Tanzanite",
      },
  {
    g_name: "Amethyst",
      },
  {
    g_name: "Opal",
      },
  {
    g_name: "Smokey Quartz",
      },
  {
    g_name: "Other (Please let us know in the text box...)"
      },
  ];

const select = document.querySelector("#selectGem");
  
gems.forEach(gem =>{
  let option = document.createElement("option");

  option.value = gem.g_name;
  
  option.textContent = gem.g_name;

  select.appendChild(option)
});

