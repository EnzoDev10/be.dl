let mobileMenuClose = document.getElementById("closeBtn");
let mobileMenuOpen = document.getElementById("mobileMenuToggle");

let langBoxDesk = document.getElementById("langBoxDesk");
let langBoxMob = document.getElementById("langBoxMob");

let errorModal = document.getElementById("error-modal");
let errorCloseBtn = document.getElementById("errorCloseBtn");

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

/* Hides the language buttons when the menu is closed
to prevent a visual bug while using tab
*/

function hideFromTab(event, btnsClass) {
	let checkbox = document.getElementById(event.target.id);
	let langBtns = document.querySelectorAll(btnsClass);

	if (checkbox.checked) {
		checkbox.ariaExpanded = "true";

		langBtns.forEach((btn) => {
			btn.disabled = false;
		});
	} else {
		checkbox.ariaExpanded = "false";

		langBtns.forEach((btn) => {
			btn.disabled = true;
		});
	}
}

langBoxMob.addEventListener("change", function (event) {
	hideFromTab(event, ".lang-mob");
});

langBoxDesk.addEventListener("change", function (event) {
	hideFromTab(event, ".lang-desk");
});

mobileMenuOpen.addEventListener("click", () => {
	openNavigation("mobileMenuToggle", "closeBtn", "mobileNav");
});

mobileMenuClose.addEventListener("click", () => {
	closeNavigation("mobileMenuToggle", "closeBtn", "mobileNav");
});

errorCloseBtn.addEventListener("click", function () {
	errorModal.classList.toggle("hidden");
});
