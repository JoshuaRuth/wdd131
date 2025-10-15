// select the DOM elements for output
const year = document.querySelector("#year");

// use the date object
const today = new Date();


year.innerHTML = `<span class="highlight">${today.getFullYear()}© ♋Joshua Ruth ☢ Utah, United States of America</span>`;

let text = document.lastModified;
document.getElementById("lastModified").innerHTML = text;
//==============================================================================//

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

/*localStorage*/

// 1️⃣ Initialize display element variable
const visitsDisplay = document.querySelector(".visits");

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `WELCOME FIRST TIME VISITOR!`;
}

// 4️⃣ increment the number of visits by one.
numVisits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);

// 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.

//========//
const cbutton = document.getElementById("catButton")

function sendMessage(){
  alert("HAVE A GOOD DAY!!!");
}

cbutton.addEventListener("click", sendMessage)


