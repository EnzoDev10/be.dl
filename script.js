/* const navButton = document.getElementById("hamburgerMenu");
const disclosure = document.getElementById("primaryNav");
const listItems = disclosure.querySelectorAll("li a");

// Both functions use CSS classes
// To change the visibility of the menu
// And also change the aria-expanded attribute
// To be more accessible

function openNavigation() {
	navButton.setAttribute("aria-expanded", "true");
	disclosure.classList.remove("hidden");
}

function closeNavigation() {
	navButton.setAttribute("aria-expanded", "false");
	disclosure.classList.add("hidden");
}

// If the menu is closed, it opens, else, it closes.
function toggleNavigation() {
	const open = navButton.getAttribute("aria-expanded");

	open === "false" ? openNavigation() : closeNavigation();
}

navButton.addEventListener("click", toggleNavigation);

// Close the menu if the escape key is pressed
// Only use it if the menu will be visible on desktop
window.addEventListener("keyup", (e) => {
	if (e.key === "Escape") {
		navButton.focus();
		closeNavigation();
	}
});
 */