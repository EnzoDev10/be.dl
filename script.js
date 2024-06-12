const navBtn = document.querySelector("#mobileMenuToggle");
const closeBtn = document.querySelector("#closeBtn");
const disclosure = document.querySelector("#mobileNav");

function openNavigation(toggle, close, menu) {
	const navBtn = document.getElementById(toggle);
	const closeBtn = document.getElementById(close);
	const disclosure = document.getElementById(menu);

	navBtn.setAttribute("aria-expanded", "true");
	navBtn.classList.add("hidden");
	disclosure.classList.remove("hidden");
	closeBtn.classList.remove("hidden");
}

function closeNavigation(toggle, close, menu) {
	const navBtn = document.getElementById(toggle);
	const closeBtn = document.getElementById(close);
	const disclosure = document.getElementById(menu);

	navBtn.setAttribute("aria-expanded", "false");
	navBtn.classList.remove("hidden");
	disclosure.classList.add("hidden");
	closeBtn.classList.add("hidden");
}

// If the menu is closed, it opens, else, it closes.
function toggleNavigation(toggle, close, menu) {
	const open = document.getElementById(toggle).getAttribute("aria-expanded");

	open === "false"
		? openNavigation(toggle, close, menu)
		: closeNavigation(toggle, close, menu);
}