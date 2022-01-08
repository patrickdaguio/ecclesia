// Page Animations

const sections = document.querySelectorAll('.section');

const scrolling = {
	enabled: true,
	events: 'scroll,wheel,touchmove,pointermove'.split(','),
	prevent: e => {
		if (e.cancelable) e.preventDefault();
	},
	disable() {
		if (scrolling.enabled) {
			scrolling.enabled = false;
			window.addEventListener('scroll', gsap.ticker.tick, { passive: true });
			scrolling.events.forEach((e, i) =>
				(i ? document : window).addEventListener(e, scrolling.prevent, {
					passive: false
				})
			);
		}
	},
	enable() {
		if (!scrolling.enabled) {
			scrolling.enabled = true;
			window.removeEventListener('scroll', gsap.ticker.tick);
			scrolling.events.forEach((e, i) =>
				(i ? document : window).removeEventListener(e, scrolling.prevent)
			);
		}
	}
};

function goToSection(section, anim, i) {
	if (scrolling.enabled) {
		// skip if a scroll tween is in progress
		scrolling.disable();
		gsap.to(window, {
			scrollTo: { y: section, autoKill: false },
			onComplete: scrolling.enable,
			duration: 1
		});

		anim && anim.restart();
	}
}

sections.forEach(section => {
	const intoAnim = gsap
		.timeline({
			defaults: { duration: 1 },
			paused: true,
			immediateRender: true
		})
		.to(
			section.querySelector('.about-page'),
			{ backgroundColor: 'rgba(42,34,23,0.6)' },
			0.8
		)
		.from(
			section.querySelector('.about-h2'),
			{ y: 150, opacity: 0, ease: 'back.out(4)' },
			0.3
		)
		.from(section.querySelector('.image-left'), { x: 200, opacity: 0 }, 0.9)
		.from(section.querySelector('.image-left-picture'), { opacity: 0 }, 1.1)
		.from(section.querySelector('.image-right'), { x: -200, opacity: 0 }, 0.9)
		.from(section.querySelector('.image-right-picture'), { opacity: 0 }, 1.1)
		.from(section.querySelector('.about-text'), { opacity: 0, x: 100 }, 0.9)
		.from(section.querySelector('.about-text-1'), { opacity: 0, x: -100 }, 0.9)
		.from(section.querySelector('.about-p'), { opacity: 0 }, '<.3')
		.from(section.querySelector('.top-row'), { y: -600, opacity: 0 }, 0.3)
		.from(section.querySelector('.bottom-row'), { y: 600, opacity: 0 }, 0.3)
		.from(section.querySelector('.left-line'), { x: -1000, opacity: 0 }, 0.3)
		.from(section.querySelector('.right-line'), { x: 1000, opacity: 0 }, 0.3)
		.from(
			section.querySelector('.middle-icon'),
			{ rotation: 720, opacity: 0 },
			0.3
		)
		.from(section.querySelector('.box-left'), { x: -1000, opacity: 0 }, 0.3)
		.from(section.querySelector('.old-design'), { y: 1000, opacity: 0 }, 0.3)
		.from(section.querySelector('.carousel-background'), { opacity: 0 }, 0.9)
		.from(section.querySelector('.tour'), { scale: 0 }, 0.6)
		.to(section.querySelector('.reviews-title'), { opacity: 1 }, 0.6)
		.from(section.querySelector('.pic-1'), { scale: 0 }, 0.3)
		.from(section.querySelector('.pic-2'), { scale: 0 }, 0.6)
		.from(section.querySelector('.pic-3'), { scale: 0 }, 0.9)
		.from(section.querySelector('.pic-4'), { scale: 0 }, 0.3)
		.from(section.querySelector('.pic-5'), { scale: 0 }, 0.6)
		.from(section.querySelector('.pic-6'), { scale: 0 }, 0.9)
		.from(section.querySelector('.isabelle'), { x: -150, opacity: 0 }, 0.9)
		.from(section.querySelector('.villager'), { x: 150, opacity: 0 }, 0.9)
		.from(section.querySelector('.gator'), { opacity: 0 }, 1.7)
		.from(section.querySelector('.gator .text'), { x: -50 }, 1.7)
		.from(section.querySelector('.gulliver'), { opacity: 0 }, 2)
		.from(section.querySelector('.gulliver .text'), { x: -50 }, 2)
		.from(section.querySelector('.striky'), { opacity: 0 }, 2.3)
		.from(section.querySelector('.striky .text'), { x: -50 }, 2.3)
		.to(section.querySelector('.gallery-title'), { opacity: 1 }, 0.6)
		.from(section.querySelector('.gallery-1'), { x: 250, opacity: 0 }, 1.2)
		.from(section.querySelector('.gallery-2'), { opacity: 0 }, 1.2)
		.from(section.querySelector('.gallery-3'), { x: -250, opacity: 0 }, 1.2)
		.from(section.querySelector('.gallery-4'), { x: 250, opacity: 0 }, 1.2)
		.from(section.querySelector('.gallery-5'), { opacity: 0 }, 1.2)
		.from(section.querySelector('.gallery-6'), { x: -250, opacity: 0 }, 1.2)
		.from(section.querySelector('.gallery-villager-2'), { opacity: 0 }, 1.9)
		.from(section.querySelector('.gallery-villager-5'), { opacity: 0 }, 1.7)
		.from(section.querySelector('.gallery-villager-1'), { opacity: 0 }, 2.7)
		.from(section.querySelector('.gallery-villager-3'), { opacity: 0 }, 2.2)
		.from(section.querySelector('.gallery-villager-4'), { opacity: 0 }, 2.3)
		.from(section.querySelector('.gallery-villager-6'), { opacity: 0 }, 2.5)
		.from(
			section.querySelector('.inner-box h1'),
			{ opacity: 0, ease: 'back.out(1.7)', y: 150 },
			0.3
		)
		.from(
			section.querySelector('.inner-box p'),
			{ opacity: 0, ease: 'back.out(1.7)', y: -100 },
			0.7
		)
		.from(
			section.querySelector('.dodo-left'),
			{ y: -500, x: 500, rotation: -180, opacity: -2 },
			0.5
		)
		.from(
			section.querySelector('.dodo-right'),
			{ y: -500, x: -500, rotation: 180, opacity: -2 },
			0.5
		)
		.from(
			section.querySelector('.flowers'),
			{ y: 100, opacity: 0, scale: 0 },
			1
		)
		.from(
			section.querySelector('.tour-button'),
			{ scale: 2, opacity: 0, ease: Power1.easeOut },
			1
		)
		.from(
			section.querySelectorAll('.footer-socials a img'),
			{ x: 100, opacity: 0, stagger: 0.2 },
			1
		)
		.from(section.querySelector('.footer-text'), { y: 100 }, 1);

	ScrollTrigger.matchMedia({
		'(min-width:601px)': function () {
			ScrollTrigger.create({
				trigger: section,
				start: 'top bottom-=1',
				end: 'bottom top+=1',
				scrub: 1,
				onEnter: () => goToSection(section, intoAnim),
				onEnterBack: () => goToSection(section)
			});
		}
	});

	ScrollTrigger.matchMedia({
		'(min-height:1000px)': function () {
			ScrollTrigger.create({
				trigger: section,
				start: 'top bottom-=300',
				end: 'bottom top+=1',
				scrub: 1,
				onEnter: () => goToSection(section, intoAnim),
				onEnterBack: () => goToSection(section)
			});
		}
	});

	ScrollTrigger.matchMedia({
		'(max-width:600px)': function () {
			TweenLite.set(section.querySelector('.about-page'), {
				clearProps: 'all'
			});
			TweenLite.set(section.querySelector('.about-h2'), { clearProps: 'all' });
			TweenLite.set(section.querySelector('.image-left'), {
				clearProps: 'all'
			});
			TweenLite.set(section.querySelector('.image-left-picture'), {
				clearProps: 'all'
			});
			TweenLite.set(section.querySelector('.image-right'), {
				clearProps: 'all'
			});
			TweenLite.set(section.querySelector('.image-right-picture'), {
				clearProps: 'all'
			});
			TweenLite.set(section.querySelector('.about-text'), {
				clearProps: 'all'
			});
			TweenLite.set(section.querySelector('.about-text-1'), {
				clearProps: 'all'
			});
			TweenLite.set(section.querySelector('.about-p'), {
				clearProps: 'all'
			});
			TweenLite.set(section.querySelector('.top-row'), {
				clearProps: 'all'
			});
			TweenLite.set(section.querySelector('.bottom-row'), {
				clearProps: 'all'
			});
			TweenLite.set(section.querySelector('.left-line'), {
				clearProps: 'all'
			});
			TweenLite.set(section.querySelector('.right-line'), {
				clearProps: 'all'
			});
			TweenLite.set(section.querySelector('.middle-icon'), {
				clearProps: 'all'
			});
			TweenLite.set(section.querySelector('.box-left'), {
				clearProps: 'all'
			});
			TweenLite.set(section.querySelector('.old-design'), {
				clearProps: 'all'
			});
			TweenLite.set(section.querySelector('.carousel-background'), {
				clearProps: 'all'
			});
			TweenLite.set(section.querySelector('.tour'), {
				clearProps: 'all'
			});
			TweenLite.set(section.querySelector('.reviews-title'), {
				clearProps: 'all'
			});
			TweenLite.set(section.querySelector('.pic-1'), {
				clearProps: 'all'
			});
			TweenLite.set(section.querySelector('.pic-2'), {
				clearProps: 'all'
			});
			TweenLite.set(section.querySelector('.pic-3'), {
				clearProps: 'all'
			});
			TweenLite.set(section.querySelector('.pic-4'), {
				clearProps: 'all'
			});
			TweenLite.set(section.querySelector('.pic-5'), {
				clearProps: 'all'
			});
			TweenLite.set(section.querySelector('.pic-6'), {
				clearProps: 'all'
			});
			TweenLite.set(section.querySelector('.isabelle'), {
				clearProps: 'all'
			});
			TweenLite.set(section.querySelector('.villager'), {
				clearProps: 'all'
			});
			TweenLite.set(section.querySelector('.gator'), {
				clearProps: 'all'
			});
			TweenLite.set(section.querySelector('.gator .text'), {
				clearProps: 'all'
			});
			TweenLite.set(section.querySelector('.gulliver'), {
				clearProps: 'all'
			});
			TweenLite.set(section.querySelector('.gulliver .text'), {
				clearProps: 'all'
			});
			TweenLite.set(section.querySelector('.striky'), {
				clearProps: 'all'
			});
			TweenLite.set(section.querySelector('.striky .text'), {
				clearProps: 'all'
			});
			TweenLite.set(section.querySelector('.gallery-title'), {
				clearProps: 'all'
			});
			TweenLite.set(section.querySelector('.gallery-1'), {
				clearProps: 'all'
			});
			TweenLite.set(section.querySelector('.gallery-2'), {
				clearProps: 'all'
			});
			TweenLite.set(section.querySelector('.gallery-3'), {
				clearProps: 'all'
			});
			TweenLite.set(section.querySelector('.gallery-4'), {
				clearProps: 'all'
			});
			TweenLite.set(section.querySelector('.gallery-5'), {
				clearProps: 'all'
			});
			TweenLite.set(section.querySelector('.gallery-6'), {
				clearProps: 'all'
			});
			TweenLite.set(section.querySelector('.gallery-villager-2'), {
				clearProps: 'all'
			});
			TweenLite.set(section.querySelector('.gallery-villager-5'), {
				clearProps: 'all'
			});
			TweenLite.set(section.querySelector('.gallery-villager-1'), {
				clearProps: 'all'
			});
			TweenLite.set(section.querySelector('.gallery-villager-3'), {
				clearProps: 'all'
			});
			TweenLite.set(section.querySelector('.gallery-villager-4'), {
				clearProps: 'all'
			});
			TweenLite.set(section.querySelector('.gallery-villager-6'), {
				clearProps: 'all'
			});
			TweenLite.set(section.querySelector('.inner-box h1'), {
				clearProps: 'all'
			});
			TweenLite.set(section.querySelector('.inner-box p'), {
				clearProps: 'all'
			});
			TweenLite.set(section.querySelector('.dodo-left'), {
				clearProps: 'all'
			});
			TweenLite.set(section.querySelector('.dodo-right'), {
				clearProps: 'all'
			});
			TweenLite.set(section.querySelector('.flowers'), {
				clearProps: 'all'
			});
			TweenLite.set(section.querySelector('.tour-button'), {
				clearProps: 'all'
			});
			TweenLite.set(section.querySelectorAll('.footer-socials a img'), {
				clearProps: 'all'
			});
			TweenLite.set(section.querySelector('.footer-text'), {
				clearProps: 'all'
			});
		}
	});
});

// Middle Icon Animation

let middleIcon = document.querySelectorAll('.middle-icon');
let spinIcon = gsap.from('.middle-icon', {
	duration: 0.7,
	rotation: 320,
	repeat: -1,
	paused: true
});

middleIcon.forEach(icon => {
	icon.addEventListener('mouseenter', () => {
		spinIcon.play();
	});
	icon.addEventListener('mouseleave', () => {
		spinIcon.pause(false);
	});
});

// Hover Page - Page 3

const hoverButtons = document.querySelectorAll('.hover-button');
const hoverBox = document.querySelectorAll('.hover-box');
const overlayBox = document.querySelectorAll('.hover-middle');
const openBox = document.querySelectorAll('.box-open');
const closeBtn = document.querySelectorAll('.close-btn');

hoverButtons.forEach((btns, index) => {
	btns.addEventListener('click', () => {
		if (index % 2 === 0) {
			hoverBox[index].style.backgroundColor = 'transparent';
			hoverBox[index].style.transition = '0.3s ease-out';
			overlayBox[index].style.display = 'none';
			openBox[index].style.display = 'flex';
			hoverBox[index + 1].style.display = 'none';
			closeBtn[index + 1].focus();
		} else {
			hoverBox[index].style.backgroundColor = 'transparent';
			hoverBox[index].style.transition = '0.3s ease-out';
			overlayBox[index].style.display = 'none';
			openBox[index].style.display = 'flex';
			hoverBox[index + -1].style.display = 'none';
		}
	});
});

closeBtn.forEach((btns, index) => {
	btns.addEventListener('click', () => {
		if (index % 2 === 0) {
			hoverBox[index].style.backgroundColor = 'white';
			hoverBox[index].style.transition = '0.3s ease-out';
			overlayBox[index].style.display = 'block';
			openBox[index].style.display = 'none';
			hoverBox[index + 1].style.display = 'flex';
		} else {
			hoverBox[index].style.backgroundColor = 'white';
			hoverBox[index].style.transition = '0.3s ease-out';
			overlayBox[index].style.display = 'block';
			openBox[index].style.display = 'none';
			hoverBox[index + -1].style.display = 'flex';
		}
	});
});

// House Page - Page 4

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

const carouselContainer = document.querySelector('.carousel-container');

const oldCarouselSlide = document.querySelector('.old-design-slide');
const oldCarouselImages = document.querySelectorAll('.old-design-slide img');

// Counter
let counter = 1;

let oldCounter = 1;
let slideId;

let windowSize = window.innerWidth;
let size;
let oldSize;

window.addEventListener('resize', function () {
	if (window.innerHeight !== windowSize) {
		size = carouselImages[0].offsetWidth;
		oldSize = oldCarouselImages[0].clientWidth;
		carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
		oldCarouselSlide.style.transform =
			'translateX(' + -oldSize * oldCounter + 'px)';
	}
});

size = carouselImages[0].offsetWidth;
carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';

oldSize = oldCarouselImages[0].clientWidth;
oldCarouselSlide.style.transform =
	'translateX(' + -oldSize * oldCounter + 'px)';

// Button Listeners

nextBtn.addEventListener('click', () => {
	if (counter >= carouselImages.length - 1) return;
	carouselSlide.style.transition = 'transform 0.4s ease-in-out';
	counter++;
	carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
});

prevBtn.addEventListener('click', () => {
	if (counter <= 0) return;
	carouselSlide.style.transition = 'transform 0.4s ease-in-out';
	counter--;
	carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
	if (carouselImages[counter].id === 'lastClone') {
		carouselSlide.style.transition = 'none';
		counter = carouselImages.length - 2;
		carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
	}
	if (carouselImages[counter].id === 'firstClone') {
		carouselSlide.style.transition = 'none';
		counter = carouselImages.length - counter;
		carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
	}
});

// Old Design - Page 4

const startSlide = () => {
	slideId = setInterval(() => {
		oldCounter++;
		oldCarouselSlide.style.transform =
			'translateX(' + -oldSize * oldCounter + 'px)';
		oldCarouselSlide.style.transition = 'transform 0.4s ease-in-out';
	}, 2000);
};

oldCarouselSlide.addEventListener('transitionend', () => {
	if (oldCarouselImages[oldCounter].id === 'lastClone') {
		oldCarouselSlide.style.transition = 'none';
		oldCounter = oldCarouselImages.length - 2;
		oldCarouselSlide.style.transform =
			'translateX(' + -oldSize * oldCounter + 'px)';
	}
	if (oldCarouselImages[oldCounter].id === 'firstClone') {
		oldCarouselSlide.style.transition = 'none';
		oldCounter = oldCarouselImages.length - oldCounter;
		oldCarouselSlide.style.transform =
			'translateX(' + -oldSize * oldCounter + 'px)';
	}
});

oldCarouselSlide.addEventListener('mouseenter', () => {
	clearInterval(slideId);
});

oldCarouselSlide.addEventListener('mouseleave', startSlide);

document.addEventListener('visibilitychange', function () {
	if (document.visibilityState === 'hidden') {
		clearInterval(slideId);
	} else {
		startSlide();
	}
});

startSlide();

const tourBtn = document.querySelector('.tour');
const formSection = document.querySelector('#book');

let bookCoords = formSection.offsetTop;

tourBtn.addEventListener('click', e => {
	e.preventDefault();
	gsap.to(window, {
		duration: 1.5,
		scrollTo: {
			y: bookCoords,
			ease: Linear.easeNone
		}
	});
});

// Reviews Page - Page 5

const testimonials = document.querySelectorAll('.small-circle img');

testimonials.forEach(icon => {
	const testimonialsMove = gsap
		.timeline({ paused: true })
		.to(icon, { duration: 0.3, y: -10 })
		.to(icon, { duration: 0.3, y: 0 });

	icon.addEventListener('mouseenter', () => {
		testimonialsMove.play();
	});
	icon.addEventListener('mouseleave', () => {
		testimonialsMove.pause(false);
	});
});

// Gallery Page - Page 6

const picturesArray = [
	'images/page6/gallery/img1.png',
	'images/page6/gallery/img2.png',
	'images/page6/gallery/img3.png',
	'images/page6/gallery/img4.png',
	'images/page6/gallery/img5.png',
	'images/page6/gallery/img6.png',
	'images/page6/gallery/img7.png',
	'images/page6/gallery/img8.png',
	'images/page6/gallery/img9.png',
	'images/page6/gallery/img10.png'
];
const galleryBox = document.querySelectorAll('.gallery-picture');

/*
function randomNumber () {
    let randomNumArray = []
    while (randomNumArray.length < 6) {
        let randomNum = Math.floor(Math.random() * picturesArray.length)
        if (randomNumArray.indexOf(randomNum) === - 1) randomNumArray.push(randomNum)
    }
    return randomNumArray;
}
*/

let pictureIndex = 0;

let intervalID = setInterval(function () {
	++pictureIndex;
	if (pictureIndex >= picturesArray.length) {
		pictureIndex = 0;
	}
}, 3000);

function correctIndex(index) {
	if (index === picturesArray.length + 1) {
		return 1;
	} else if (index === picturesArray.length + 2) {
		return 2;
	} else if (index === picturesArray.length + 3) {
		return 3;
	} else if (index === picturesArray.length + 4) {
		return 4;
	} else if (index === picturesArray.length + 5) {
		return 5;
	} else if (index === picturesArray.length) {
		return 0;
	} else {
		return index;
	}
}

function changeImg() {
	let indexOne = pictureIndex + 1;
	let indexTwo = pictureIndex + 2;
	let indexThree = pictureIndex + 3;
	let indexFour = pictureIndex + 4;
	let indexFive = pictureIndex + 5;

	galleryBox[0].src = picturesArray[pictureIndex];
	galleryBox[1].src = picturesArray[correctIndex(indexOne)];
	galleryBox[2].src = picturesArray[correctIndex(indexTwo)];
	galleryBox[3].src = picturesArray[correctIndex(indexThree)];
	galleryBox[4].src = picturesArray[correctIndex(indexFour)];
	galleryBox[5].src = picturesArray[correctIndex(indexFive)];

	setTimeout('changeImg()', 3000);
}

window.onload = changeImg;

const galleryVillagersBot = document.querySelectorAll('.gallery-villager-bot');
const galleryVillagersTop = document.querySelectorAll('.gallery-villager-top');

galleryVillagersBot.forEach(villager => {
	const villagerMove = gsap
		.timeline({ paused: true })
		.to(villager, { duration: 0.6, rotation: 20 })
		.to(villager, { duration: 0.6, rotation: 0 }, 0.3);

	villager.addEventListener('mouseenter', () => {
		villagerMove.play();
	});
	villager.addEventListener('mouseleave', () => {
		villagerMove.pause(false);
	});
});

galleryVillagersTop.forEach(villager => {
	const villagerMove = gsap
		.timeline({ paused: true })
		.to(villager, { duration: 0.6, rotation: -20 })
		.to(villager, { duration: 0.6, rotation: 0 }, 0.3);

	villager.addEventListener('mouseenter', () => {
		villagerMove.play();
	});
	villager.addEventListener('mouseleave', () => {
		villagerMove.pause(false);
	});
});
