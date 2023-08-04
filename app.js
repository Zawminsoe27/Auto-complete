const autoCompleteTag = document.querySelector(".autoCompleteInput");
const resultContainerTag = document.querySelector(".resultContainer");
autoCompleteTag.addEventListener("keyup", (e) => {
	const searchText = e.target.value.toLowerCase();
	const filterProducts = products.filter((product) => {
		return product.title.toLocaleLowerCase().includes(searchText);
	});
	const hasProductToShow = filterProducts.length > 0;
	if (hasProductToShow) {
		for (let i = 0; i < filterProducts.length; i++) {

			const productItemContainer = document.createElement("div");
			productItemContainer.id = filterProducts[i].id;
			productItemContainer.classList.add("productItemContainer");

			const productName = document.createElement("div")
			productName.classList.add("productName");
			productName.append(filterProducts[i].title);

		const productImage = document.createElement("img")
		productImage.src = filterProducts[i].image;
	productImage.classList.add("productImage")
	productItemContainer.append(productName,productImage);
	resultContainerTag.append(productItemContainer)
		}
	}
});
function eleCreate(para){
return	document.createElement(para)
};
