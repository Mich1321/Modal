const actionBtn = document.querySelector(".action-btn");

const modal = (body = {}) => {
	return `<div tabindex="10" class="modal">

    <p class="modal-title ${body.type || "info"}">
        <i class="modal-title-icon" data-feather="${
					body.modal_icon || "info"
				}"></i>
        ${body.title || "drugi modal"}
    </p>
    <p class="modal-description">
        ${body.description || "to jest drugi modal i jego opis"}
    </p>
    <div class="modal-buttons">
        <button class="modal-accept modal-action-btn">${
					body.accept_btn || "tak"
				}</button>
        <button class="modal-decline modal-action-btn">${
					body.decline_btn || "nie"
				}</button>
    </div>
    <button class="modal-close-icon"><i data-feather="x"></i></button>
</div>`;
};

const createModal = (value) => {
	const modalContainer = document.createElement("div");
	modalContainer.className = "modal-container";
	modalContainer.innerHTML = modal(value);
	document.body.appendChild(modalContainer);

	const closeIcon = document.querySelector(".modal-close-icon");

	closeIcon.addEventListener("click", () => {
		const modal = document.querySelector(".modal-container");
		modal.remove();
		document.body.style.overflow = "hidden";
	});

	const closeButtons = document.querySelectorAll(".modal-action-btn");
	closeButtons.forEach((btn) =>
		btn.addEventListener("click", () => {
			const modal = document.querySelector(".modal-container");
			modal.remove();
			document.body.style.overflow = "auto";
		})
	);
	const modalActive = document.querySelector(".modal");
	modalActive.focus();
	modalActive.addEventListener("keydown", (e) => {
		if (e.key === "Escape") {
			const modal = document.querySelector(".modal-container");
			modal.remove();
			document.body.style.overflow = "auto";
		}
	});

	const modalActiveContainer = document.querySelector(".modal-container");

	modalActiveContainer.addEventListener("click", (e) => {
		if (e.target.classList.contains("modal-container")) {
			e.target.remove();
		}
	});
	feather.replace();
	document.body.style.overflow = "hidden";
};

const firstModal = () => {
	createModal({
		type: "warning",
		modal_icon: "alert-triangle",
		title: "Lorem ipsum dolor",
		description:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto magni, odit ",
		accept_btn: "Zaakceptuj",
		decline_btn: "Anuluj",
	});
};

actionBtn.addEventListener("click", firstModal);

const secondModal = document
	.querySelector(".action-second-btn")
	.addEventListener("click", () => {
		createModal();
	});
