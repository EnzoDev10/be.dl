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

/* makes the language buttons selectable with tab, only if the menu is open  */
langBox = document.getElementById("langBox");

langBox.addEventListener("change", function () {
	if (this.checked) {
		this.ariaExpanded = "true";
		langBtns = document.querySelectorAll("button.lang-btn");

		langBtns.forEach((btn) => {
			btn.disabled = false;
		});
	} else {
		this.ariaExpanded = "false";

		langBtns.forEach((btn) => {
			btn.disabled = true;
		});
	}
});
langBoxDesk = document.getElementById("langBoxDesk");

langBoxDesk.addEventListener("change", function () {
	if (this.checked) {
		this.ariaExpanded = "true";
		langBtns = document.querySelectorAll("button.lang-desk");

		langBtns.forEach((btn) => {
			btn.disabled = false;
		});
	} else {
		langBox.ariaExpanded = "false";

		langBtns.forEach((btn) => {
			btn.disabled = true;
		});
	}
})

errorModal = document.getElementById("error-modal");
errorCloseBtn = document.getElementById("errorCloseBtn");

errorCloseBtn.addEventListener("click", function () {
	errorModal.classList.toggle("hidden");
});
