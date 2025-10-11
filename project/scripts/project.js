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




//==Rock gallery==//
const pictures = [
  {
    pictureName: "Azurite and Malachite",
    imageUrl:
    "images/azurite_malachite.webp"
  },
  {
    pictureName: "Calcite",
    imageUrl:
    "images/calcite.webp"
  },
  {
    pictureName: "Feldspar variety",
    imageUrl:
    "images/feldspars.webp"
  },
    {
    pictureName: "Garnets",
    imageUrl:
    "images/garnets.webp"
  },
    {
    pictureName: "Another Picture of Garnets",
    imageUrl:
    "images/garnets_two.webp"
  },
    {
    pictureName: "Geodes and Thunder Egg",
    imageUrl:
    "images/geodes_and_thunder_egg.webp"
  },
    {
    pictureName: "Lapiz Lazuli",
    imageUrl:
    "images/lapis.webp"
  },
    {
    pictureName: "Opal",
    imageUrl:
    "images/opals.webp"
  },
      {
    pictureName: "Quartz",
    imageUrl:
    "images/quartz.webp"
  },
      {
    pictureName: "Rubies and Ruby Matrixes",
    imageUrl:
    "images/rubies_rocks_w_rubies.webp"
  },
      {
    pictureName: "Mixed Gems",
    imageUrl:
    "images/variety_one.webp"
  },
  {
    pictureName: "More Mixed Gems",
    imageUrl:
    "images/variety_two.webp"
  }
];

createPictureCard(pictures); 

function createPictureCard() {
	pictures.forEach(picture => {
		let card = document.createElement("section");
		let name = document.createElement("h3");
		let img = document.createElement("img");

		name.textContent = picture.pictureName;
		img.setAttribute("src", picture.imageUrl);
		img.setAttribute("alt",`${picture.pictureName}`);
		img.setAttribute("loading", "lazy");

		card.appendChild(name);
		card.appendChild(img);

		document.querySelector(".gallery_grid").appendChild(card);

	});

}