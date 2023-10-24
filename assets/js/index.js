
function addMobileNav() {
	let nav = document.getElementById('mobile-navbar');

	nav.classList.toggle("open-nav");
}

// scroll show

const scrolling = document.querySelector('.scroll-up');

window.addEventListener("scroll", function() {

	const scrollHeight = window.scrollY;

	if (scrollHeight >= 900) {
		scrolling.style.display = 'flex';
	}
	else {
		scrolling.style.display = 'none';
	}
});

// Form validation

let id = (id) => document.getElementById(id);

let form = id('book-a-car'), 
	errorMessage = id('error-message'),	
	carType = id('car-type'),
	pickUpLocation = id('pick-up-location'),
	dropLocation = id('drop-location'),
	pickDate = id('pick-date'),
	dropDate = id('drop-date'),
	bookingModal = id('booking-modal'),
	modalOverlay = id('modal-overlay'),
	reserveNow = id('reserve-now'),
	infoForm = id('info-form'),
	bookingDone = id('booking-done'),
	pickUp = id('pickUp'),
	activeModal = document.querySelector('.modal-overlay');

form.addEventListener("submit", (e) => {
	e.preventDefault();	
})

function bookACar() {

		if (carType.value === '' || 
			pickUpLocation.value === '' || 
			dropLocation.value === '' ||
			pickDate.value === '' ||
			dropDate.value === '')  {
				errorMessage.style.display = "flex";
		}
		else {
			errorMessage.style.display = "none";
			bookingModal.classList.add('active-modal');
			activeModal.classList.add('active-modal');
			document.body.style.overflow = 'hidden';
		}
}
	
function confirmMessage() {
	bookingDone.style.display = 'none';
}


function displayValues() {

	const carName = document.querySelector('.car-name');
	const drop = document.querySelector('#drop');
	const pickUpDate =document.querySelector('.pick-up-date');
	const dropOfDate = document.querySelector('.drop-of-date');
	const carImage = id('car-image');

	pickUp.innerHTML = pickUpLocation.value;
	carName.innerHTML = carType.value;
	drop.innerHTML = dropLocation.value;
	pickUpDate.innerHTML = `${pickDate.value} / `;
	dropOfDate.innerHTML = `${dropDate.value} / `;
 
 	// Add car image
	const carImages = ["./assets/images/cars-big/audia1.jpg",
					   './assets/images/cars-big/golf6.jpg',
					   './assets/images/cars-big/toyotacamry.jpg',
					   './assets/images/cars-big/bmw320.jpg',
					   './assets/images/cars-big/benz.jpg',
					   './assets/images/cars-big/passatcc.jpg',];

	const carNames = ['Audi A1 S-Line', 
					  'VW Golf 6', 
					  'Toyota Camry', 
					  'BMW 320 ModernLine', 
					  'Mercedes-Benz GLK', 
					  'VW Passat CC'];

	for (image in carImages) {
		
		for (name in carNames) {
			if (carNames[name] === carType.value) 
				carImage.src = carImages[name];
		}
		break;
	}
}

// Reserve Now

const fname = id('fname');
const number = id('number');
const email = id('email');
const address = id('address');
const city = id('city');
const zipcode = id('zipcode');
const pickTime = id('pick-time');
const dropTime = id('drop-time');

infoForm.addEventListener("submit", (e) => {
	e.preventDefault();
	validateInput();
})

function validateInput() {
	const fnameVal = fname.value.trim();
	const numberVal = number.value.trim();
	const emailVal = email.value.trim();
	const addressVal = address.value.trim();
	const cityVal = city.value.trim();
	const zipcodeVal = zipcode.value.trim();
	const pickTimeVal = pickTime.value;
	const dropTimeVal = dropTime.value;

	if(fnameVal === '') {
		setError(fname, "First Name is required");
	}
	else {
		setSuccess(fname);
	}

	if(numberVal === '') {
		setError(number, 'Mobile Number is required');
	}
	else if(numberVal.length !== 10 || numberVal.length > 10) {
		setError(number, 'Please enter 10 digit mobile number');
	}
	else {
		setSuccess(number);
	}

	if(emailVal === '') {
		setError(email, 'Email is required');
	}
	else {
		setSuccess(email);
	}

	if(addressVal === '') {
		setError(address, 'Address is required');
	}
	else {
		setSuccess(address);
	}

	if(cityVal === '') {
		setError(city, 'City is required');
	}
	else {
		setSuccess(city);
	}

	if(zipcodeVal === '') {
		setError(zipcode, 'Zipcode is required');
	}
	else {
		setSuccess(zipcode);
	}

	if (pickTimeVal === '') {
		setError(pickTime, 'Please provide pick up time');
	}
	else {
		setSuccess(pickTime);
	}

	if (dropTimeVal === '') {
		setError(dropTime, 'Please provide drop time');
	}
	else {
		setSuccess(dropTime);
	}

	if(fnameVal !== '' &&
       numberVal !== '' &&
       emailVal !== '' &&
       addressVal !== '' &&
       cityVal !== '' &&
       zipcodeVal !== '' &&
       pickTimeVal !== '' &&
       dropTimeVal !== '') {
		(function() {
			document.body.style.overflow = 'auto';
			bookingDone.style.display = 'flex';
			bookingModal.classList.remove('active-modal');
			activeModal.classList.remove('active-modal');
			carType.value = '';
			pickUpLocation.value = '';
			dropLocation.value = '';
			pickDate.value = '';
			dropDate.value = '';
		})();
	}

	
}

function setError(element, message) {
	const inputGroup = element.parentElement;
	const errorElement = inputGroup.querySelector('.error-modal');
	errorElement.style.display = 'block';
	errorElement.innerHTML = message;
}

function setSuccess(element) {
	const inputGroup = element.parentElement;
	const errorElement = inputGroup.querySelector('.error-modal');
	errorElement.style.display = 'none';
	errorElement.innerHTML = '';

}

function cancel() {
	bookingModal.classList.remove('active-modal');	
	document.body.style.overflow = 'auto';
	activeModal.classList.remove('active-modal');
}

// Vehicle Model

const carData = [
	{
      name: "Audi A1 S-Line",
      price: "45",
      img: './assets/images/cars-big/audia1.jpg',
      model: "Audi",
      mark: "A1",
      year: "2012",
      doors: "4/5",
      air: "Yes",
      transmission: "Manual",
      fuel: "Gasoline",
      color: "colored-button"
    },
    {
      name: "VW Golf 6",
      price: "37",
      img: './assets/images/cars-big/golf6.jpg',
      model: "Golf 6",
      mark: "Volkswagen",
      year: "2008",
      doors: "4/5",
      air: "Yes",
      transmission: "Manual",
      fuel: "Diesel",
      color: "colored-button"
    },
    {
      name: "Toyota Camry",
      price: "30",
      img: './assets/images/cars-big/toyotacamry.jpg',
      model: "Camry",
      mark: "Toyota",
      year: "2006",
      doors: "4/5",
      air: "Yes",
      transmission: "Automatic",
      fuel: "Hybrid",
    },
    {
      name: "BMW 320 ModernLine",
      price: "35",
      img: './assets/images/cars-big/bmw320.jpg',
      model: "320",
      mark: "BMW",
      year: "2012",
      doors: "4/5",
      air: "Yes",
      transmission: "Manual",
      fuel: "Diesel",
    },
    {
      name: "Mercedes-Benz GLK",
      price: "50",
      img: './assets/images/cars-big/benz.jpg',
      model: "Benz GLK",
      mark: "Mercedes",
      year: "2006",
      doors: "4/5",
      air: "Yes",
      transmission: "Manual",
      fuel: "Diesel",
    },
    {
      name: "VW Passat CC",
      price: "25",
      img: './assets/images/cars-big/passatcc.jpg',
      model: "Passat CC",
      mark: "Volkswagen",
      year: "2008",
      doors: "4/5",
      air: "Yes",
      transmission: "Automatic",
      fuel: "Gasoline",
    },
  ];

let pickModal = document.querySelector('.pick-box'),
    carModal = document.querySelector('#car-modal'),
    price = id('price'),
    model = id('model'),
    mark = id('mark'),
    year = id('year'),
    doors = id('doors'),
    air = id('air'),
    transmission = id('transmission'),
    fuel = id('fuel');

Array.from(document.getElementsByClassName("button")).forEach(e => e.addEventListener("click", function() {
    
    let btn = document.getElementById(this.id).innerText;
	
	for (data in carData) {
		if(carData[data].name === btn) {
			carModal.src = carData[data].img;
			price.innerHTML = carData[data].price;
			model.innerHTML = carData[data].model;
			mark.innerHTML = carData[data].mark;
			year.innerHTML = carData[data].year;
			doors.innerHTML = carData[data].doors;
			air.innerHTML = carData[data].air;
			transmission.innerHTML = carData[data].transmission;
			fuel.innerHTML = carData[data].fuel;
		}
	}
}))

// Color change when click

const buttons = document.querySelectorAll('.button');

function handleButtonClick(event) {
  buttons.forEach(button => button.classList.remove('colored-button'));

  event.target.classList.add('colored-button');
}

buttons.forEach(button => {
  button.addEventListener('click', handleButtonClick);
});

// FAQ

function toggleAnswer(answerNumber) {
        const answerId = `answer${answerNumber}`;
        const questionId = `question${answerNumber}`;
        const answer = document.querySelector(`#${answerId}`);
        const question = document.querySelector(`#${questionId}`);

        const allAnswers = document.querySelectorAll(".faq-box__answer");
        const allQuestions = document.querySelectorAll(".faq-box__question");

        const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('click', handleButtonClick);
});
            allAnswers.forEach((ans) => {
                if (ans !== answer) {
                	ans.classList.remove('active-answer');
                    ans.style.maxHeight = null;
                }
                
            });

            allQuestions.forEach((ques) => {
          		if (ques !== question) {
            		ques.classList.remove('active-question');
               	} 
               	else {
            		question.classList.add('active-question');
               	}
            });

        if (answer.style.maxHeight) {
            question.classList.remove('active-question');
            answer.style.maxHeight = null;
        } 
        	else {
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    }

    