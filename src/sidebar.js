import {readToStorage} from "./storage.js";

export function sidebar() {
	const sidebarContent = renderProductsInSidebar();
	const sidebarCart = `
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Lista de productos</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                         <div class="offcanvas-body">
                            ${sidebarContent}
                        </div>
    `;

	const sidebarElement = document.querySelector("#offcanvasRight");
	sidebarElement.innerHTML = sidebarCart;
}

function renderProductsInSidebar() {
	const products = readToStorage();
	let cardsHorizontal = "";
	if (products) {
		products.forEach((p) => {
			cardsHorizontal += `
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src="..." class="img-fluid rounded-start" alt=${p.title}>
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${p.title}</h5>
                        <p class="card-text">${p.description}</p>
                        <p class="card-text">Precio<small class="text-body-secondary">$ ${p.price}</small></p>
                    </div>
                    </div>
                </div>
            </div>
            `;
		});
	} else {
		cardsHorizontal = "<p>No hay productos en la lista</p>";
	}

	return cardsHorizontal;
}
