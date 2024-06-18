document.addEventListener("DOMContentLoaded", function () {
	// Слайдер для карточек с этапами преображения
	const itemsAdaptive = document.querySelector(".stages__cards.adaptive");
	const items = itemsAdaptive.querySelectorAll(".stages__cards-item");
	const dots = document.querySelectorAll(".participants__top-navigation-dot");
	const prevButton = document.querySelector(
		".participants__top-navigation-prev"
	);
	const nextButton = document.querySelector(
		".participants__top-navigation-next"
	);
	let currentIndex = 0;

	function showItem(index) {
		items.forEach((item, i) => {
			item.classList.toggle("active", i === index);
		});
		dots.forEach((dot, i) => {
			dot.classList.toggle("active", i === index);
		});
	}

	function nextItem() {
		currentIndex = (currentIndex + 1) % items.length;
		showItem(currentIndex);
	}

	function prevItem() {
		currentIndex = (currentIndex - 1 + items.length) % items.length;
		showItem(currentIndex);
	}

	dots.forEach((dot, index) => {
		dot.addEventListener("click", () => {
			currentIndex = index;
			showItem(currentIndex);
		});
	});

	nextButton.addEventListener("click", nextItem);
	prevButton.addEventListener("click", prevItem);

	showItem(currentIndex);

	// Слайдер для карточек с шахматистами

	const prevBtn = document.getElementById("prevBtn");
	const nextBtn = document.getElementById("nextBtn");
	const sliderCounter = document.getElementById("sliderCounter");
	const cardsContainer = document.getElementById("participantsCards");
	const cards = document.querySelectorAll(".participants__cards-card");
	const totalCards = cards.length;
	const visibleCards = 3;
	const autoSwitchInterval = 4000;

	if (window.innerWidth <= 425) {
		visibleCards = 1;
	}

	function updateSlider() {
		const cardWidthPercentage = 100 / visibleCards;
		const translateXValue =
			currentIndex * (cardWidthPercentage - 100 / totalCards);
		cardsContainer.style.transform = `translateX(-${translateXValue}%)`;
		sliderCounter.textContent = `${currentIndex + 1}/${totalCards}`;
	}

	function showNextCard() {
		currentIndex = (currentIndex + 1) % totalCards;
		updateSlider();
	}

	function showPrevCard() {
		currentIndex = (currentIndex - 1 + totalCards) % totalCards;
		updateSlider();
	}

	prevBtn.addEventListener("click", () => {
		showPrevCard();
		resetAutoSwitch();
	});

	nextBtn.addEventListener("click", () => {
		showNextCard();
		resetAutoSwitch();
	});

	let autoSwitch = setInterval(showNextCard, autoSwitchInterval);

	function resetAutoSwitch() {
		clearInterval(autoSwitch);
		autoSwitch = setInterval(showNextCard, autoSwitchInterval);
	}

	updateSlider();
});
