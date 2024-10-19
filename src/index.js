"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to 
// all TypeScript weakness flags.
// : number
const utils_1 = require("./utils");
const enums_1 = require("./enums");
const classes_1 = __importDefault(require("./classes"));
const propertyContainer = document.querySelector('.properties');
const reviewContainer = document.querySelector('.reviews');
const container = document.querySelector('.container');
const button = document.querySelector('button');
const footer = document.querySelector('.footer');
let isLoggedIn;
const reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: enums_1.LoyaltyUser.GOLD_USER,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: enums_1.LoyaltyUser.BRONZE_USER,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: enums_1.LoyaltyUser.SILVER_USER,
        date: '27-03-2021',
    },
];
const you = {
    firstName: 'Bobby',
    lastName: 'Brown',
    permissions: enums_1.Permissions.ADMIN,
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
};
const properties = [
    {
        image: 'images/House-1.jpg',
        title: 'Khayelitsha Shack',
        price: 45,
        location: {
            firstLine: 'shack 37',
            city: 'Cape Town',
            code: 45632,
            country: 'South Africa'
        },
        contact: [+27689765432, 'maryMantji@gmail.com'],
        isAvailable: true
    },
    {
        image: 'images/Apartment-1.jpg',
        title: 'Stellenbosch Cottage',
        price: 34,
        location: {
            firstLine: 'no 23',
            city: 'Cape Town',
            code: 343903,
            country: 'South Africa'
        },
        contact: [+27987543298, 'guyMan@hotmail.com'],
        isAvailable: false
    },
    {
        image: 'images/Apartment-2.jpg',
        title: 'Cape Flat',
        price: 23,
        location: {
            firstLine: 'flat 15',
            city: 'Cape Town',
            code: 35433,
            country: 'South Africa',
        },
        contact: [+27075824361, 'andreaSefakoe@gmail.com'],
        isAvailable: true
    },
    {
        image: 'images/Hotel-1.jpg',
        title: 'Malique Hotel',
        price: 55,
        location: {
            firstLine: 'Room 4',
            city: 'Malique',
            code: 45334,
            country: 'Mozambique'
        },
        contact: [+60349822083, 'lee34@gmail.com'],
        isAvailable: false
    }
];
(0, utils_1.populateUser)(you.isReturning, you.firstName);
(0, utils_1.showReviewTotal)(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
let authorityStatus;
isLoggedIn = false;
for (let i = 0; i < properties.length; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = properties[i].title;
    const image = document.createElement('img');
    image.setAttribute('src', properties[i].image);
    card.appendChild(image);
    propertyContainer === null || propertyContainer === void 0 ? void 0 : propertyContainer.appendChild(card);
    (0, utils_1.showDetails)(you.permissions, card, properties[i].price);
}
let count = 0;
function addReviews(array) {
    if (!count) {
        count++;
        const topTwo = (0, utils_1.getTopTwoReviews)(array);
        for (let i = 0; i < topTwo.length; i++) {
            const card = document.createElement('div');
            card.classList.add('review-card');
            card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name;
            reviewContainer === null || reviewContainer === void 0 ? void 0 : reviewContainer.appendChild(card);
        }
        container === null || container === void 0 ? void 0 : container.removeChild(button);
    }
}
button === null || button === void 0 ? void 0 : button.addEventListener('click', () => addReviews(reviews));
let currentLocation = ['London', '11:35', 17];
footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°';
let yourMainProperty = new classes_1.default('images/House-2.jpg', 'Italian House', [{
        name: 'Katlego',
        stars: 5,
        loyaltyUser: enums_1.LoyaltyUser.GOLD_USER,
        date: '12-04-2021'
    }]);
const mainImageContainer = document.querySelector('.main-image');
const image = document.createElement('img');
image.setAttribute('src', yourMainProperty.src);
mainImageContainer === null || mainImageContainer === void 0 ? void 0 : mainImageContainer.appendChild(image);
