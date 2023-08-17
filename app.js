const autoCompleteTag = document.querySelector(".autoCompleteInput");
const resultContainerTag = document.querySelector(".resultContainer");
const showResultTag = document.querySelector(".showResult");
let filterProducts = [];
autoCompleteTag.addEventListener("keyup", (e) => {
	if (e.key === "Enter" || e.key === "ArrowUp" || e.key === "ArrowDown") {
		navigateAndSelectProducts(e.key);
		return;
	}
	resultContainerTag.innerHTML = "";
	const searchText = e.target.value.toLowerCase();
	if (searchText.length === 0) {
		return;
	}
	filterProducts = products.filter((product) => {
		return product.title.toLocaleLowerCase().includes(searchText);
	});
	const hasProductToShow = filterProducts.length > 0;
	if (hasProductToShow) {
		for (let i = 0; i < filterProducts.length; i++) {
			const productItemContainer = document.createElement("div");
			productItemContainer.id = filterProducts[i].id;
			productItemContainer.classList.add("productItemContainer");

			const productName = document.createElement("div");
			productName.classList.add("productName");
			productName.append(filterProducts[i].title);

			const productImage = document.createElement("img");
			productImage.src = filterProducts[i].image;
			productImage.classList.add("productImage");
			productItemContainer.append(productName, productImage);
			resultContainerTag.append(productItemContainer);
		}
	}
});
function eleCreate(para) {
	return document.createElement(para);
}
let indexToselect = -1;

function navigateAndSelectProducts(key) {
	if (key === "ArrowDown") {
		if (indexToselect === filterProducts.length - 1) {
			indexToselect = -1;
			deselectProduct();
			return;
		}
		indexToselect += 1;
		const productItemContainerToSelect = selectProduct(indexToselect);
		if (indexToselect > 0) {
			deselectProduct();
		}
		productItemContainerToSelect.classList.add("selected");
	} else if (key === "ArrowUp") {
		if (indexToselect === -1) {
			indexToselect = filterProducts.length - 1;
			const productItemContainerToSelect = selectProduct(indexToselect);
			productItemContainerToSelect.classList.add("selected");
			return;
		}
		if (indexToselect === 0) {
			deselectProduct();
			indexToselect = -1;
			return;
		}
		indexToselect -= 1;
		deselectProduct();
		const productItemContainerToSelect = selectProduct(indexToselect);
		productItemContainerToSelect.classList.add("selected");
	} else {
		const selectedProduct = selectProduct(indexToselect);

		console.log(selectedProduct);
	}
}
function selectProduct(index) {
	const productIdToSelect = filterProducts[index].id.toString();
	const productItemContainerToSelect =
		document.getElementById(productIdToSelect);
	productItemContainerToSelect.style.backgroundColor = "rgb(20 20 193 /90%)";
	productItemContainerToSelect.firstChild.style.color = "white";
	return productItemContainerToSelect;
}
function deselectProduct() {
	const productToDeselected = document.getElementsByClassName("selected")[0];
	productToDeselected.style.backgroundColor = "white";
	productToDeselected.firstChild.style.color = "black";
	productToDeselected.classList.remove("selected");
}
