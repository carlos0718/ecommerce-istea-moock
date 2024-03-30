export function saveToStorage(product) {
	const products = JSON.parse(localStorage.getItem("products")) || [];
	products.push(product);
	localStorage.setItem("products", JSON.stringify(products));
}

export function readToStorage() {
	const products = JSON.parse(localStorage.getItem("products"));
	return products;
}
