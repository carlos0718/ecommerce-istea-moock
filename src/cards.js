export function renderCards() {
	const $ = document;
	const cardContainer = $.querySelector("#card-template");
	[
		{id: 1, name: "Product 1", price: 100, quantity: 1},
		{id: 2, name: "Product 1", price: 100, quantity: 1},
		{id: 3, name: "Product 1", price: 100, quantity: 1},
		{id: 4, name: "Product 1", price: 100, quantity: 1},
		{id: 5, name: "Product 1", price: 100, quantity: 1},
		{id: 6, name: "Product 1", price: 100, quantity: 1},
		{id: 7, name: "Product 1", price: 100, quantity: 1},
		{id: 8, name: "Product 1", price: 100, quantity: 1},
		{id: 9, name: "Product 1", price: 100, quantity: 1},
		{id: 10, name: "Product 1", price: 100, quantity: 1},
	].forEach((product) => {
		let card = `<div class="col-4">
						<div class="card">
							<img src="" class="card-img-top" alt="...">
							<div class="card-body">
								<h3 class="card-title">Title</h3>
								<p class="card-text">Text</p>
							</div>
							<div>
								<button onclick="alert('clicked id ${product.id}')">click me!</button>
							</div>
						</div>
					</div>`;
		cardContainer.innerHTML += card;
	});
}

/**
 * another approach
 */
/* 
const tagImg = document.createElement("img");
tagImg.src = "...";
tagImg.alt = "...";
tagImg.classList.add("card-img-top");

const tagh3 = document.createElement("h3");
tagh3.textContent = "Title";
tagh3.classList.add("card-title");
const tagp = document.createElement("p");
tagp.textContent = "Text";
tagp.classList.add("card-text");
const tagBodyCard = document.createElement("div");
tagBodyCard.classList.add("card-body");
tagBodyCard.appendChild(tagh3);
tagBodyCard.appendChild(tagp);

const tagButton = document.createElement("button");
tagButton.textContent = "click me!";
tagButton.onclick = () => alert("clicked id 1");
const tagDiv = document.createElement("div");
tagDiv.appendChild(tagButton);

const tagCardContainer = document.createElement("div");
tagCardContainer.classList.add("card"); */
