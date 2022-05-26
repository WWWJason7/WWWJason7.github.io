let backToTopButton = document.querySelector("#back-to-top > a");

backToTopButton.addEventListener("click", function(event) {

	window.scroll({
		top: 0, // The number of pixels from the top edge of the document
		left: 0, // The number of pixels from the left edge of the document
		behavior: "smooth" // It will only smoothly scroll in Chrome & Firefox (not Safari yet)
	});

	event.preventDefault();

});