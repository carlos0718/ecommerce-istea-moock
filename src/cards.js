import {getProducts} from "./api.js";
import {saveToStorage} from "./storage.js";

export function renderCards() {
	const $ = document;
	const cardContainer = $.querySelector("#card-template");

	getProducts().then((data) => {
		data.forEach((product) => {
			let card = `<div class="col-4">
						<div class="card">
							<img src="https://www.womansworld.com/wp-content/uploads/2024/08/cute-cats.jpg" class="card-img-top" alt="...">
							<div class="card-body">
								<h3 class="card-title">Title</h3>
								<p class="card-text">${product.title}</p>
							</div>
							<div>
								<button id="btn-${product.id}">click me!</button>
							</div>
						</div>
					</div>`;
			cardContainer.innerHTML += card;

			// add event listener to button
			setTimeout(() => {
				let btnProduct = $.querySelector(`#btn-${product.id}`);
				btnProduct.addEventListener("click", () => saveToStorage(product));
			}, 0);
		});
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
tagCardContainer.classList.add("card");
*/
