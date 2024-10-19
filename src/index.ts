import './index.css';
import houseOne from './images.jpg/HouseOne.jpg';
import houseTwo from './images.jpg/HouseTwo.jpg';
import apartmentOne from './images.jpg/ApartmentOne.jpg';
import apartmentTwo from './images.jpg/ApartmentTwo.jpg';
import hotelOne from './images.jpg/HotelOne.jpg';


import { showReviewTotal, populateUser, showDetails, getTopTwoReviews} from './utils' 
import { Permissions,LoyaltyUser } from './enums' 
import { Review, Property }  from './interfaces'
import MainProperty from './classes'

const propertyContainer = document.querySelector('.properties')
const reviewContainer = document.querySelector('.reviews')
const container = document.querySelector('.container')
const button = document.querySelector('button')
const footer = document.querySelector('.footer')

let isLoggedIn : boolean


const reviews : Review[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: LoyaltyUser.BRONZE_USER,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: LoyaltyUser.SILVER_USER,
        date: '27-03-2021',
    },
]




const you = {
    firstName: 'Koketso',
    lastName: 'Choeu',
    permissions: Permissions.ADMIN,
    isReturning: true,
    age: 23,
    stayedAt: ['Polokwane-home', 'Pretoria-flat', 'Cape town-bungalow']
}


const properties : Property[] = [
    {
        image: houseOne,
        title: 'Khayelitsha Shack',
        price: 45,
        location: {
            firstLine: 'shack 37',
            city: 'Cape Town',
            code: 45632,
            country: 'South Africa'
        },
        contact: [+27689765432,'maryMantji@gmail.com'],
        isAvailable: true  
    },
    {
        image: apartmentOne,
        title: 'Stellenbosch Cottage',
        price: 34,
        location: {
            firstLine: 'no 23',
            city: 'Cape Town',
            code: 343903,
            country: 'South Africa'
        },
        contact: [+27987543298,'guyMan@hotmail.com'],
        isAvailable: false 
    },
    {
        image: apartmentTwo,
        title: 'Cape Flat',
        price: 23,
        location: {
            firstLine: 'flat 15',
            city: 'Cape Town',
            code: 35433,
            country: 'South Africa',
        },
        contact: [+27075824361,'andreaSefakoe@gmail.com'],
        isAvailable: true
    },
    {
        image: hotelOne,
        title: 'Malique Hotel',
        price: 55,
        location: {
            firstLine: 'Room 4',
            city: 'Malique',
            code: 45334,
            country: 'Mozambique'
        },
        contact: [ +60349822083, 'lee34@gmail.com'],
        isAvailable: false
    }
]

populateUser(you.isReturning, you.firstName)
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

let authorityStatus : any

isLoggedIn = false

propertyContainer!.innerHTML = '';

for (let i = 0; i < properties.length; i++) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = properties[i].title
    const image = document.createElement('img')
    image.setAttribute('src', properties[i].image)
    card.appendChild(image)
    propertyContainer?.appendChild(card)
    showDetails(you.permissions, card, properties[i].price)
}

let count = 0
function addReviews(array: Review[] ) : void {
    if (!count ) {
        count++
        const topTwo = getTopTwoReviews(array)
        for (let i = 0; i < topTwo.length; i++) {
            const card = document.createElement('div')
            card.classList.add('review-card')
            card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name
            reviewContainer?.appendChild(card)
        }
        container?.removeChild(button!) 
    }
}

button?.addEventListener('click', () => addReviews(reviews))

let currentLocation: [string, string, number] = ['Simons Town', '11:35', 17]
footer!.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°'

let yourMainProperty = new MainProperty(
    houseTwo, 
    'South African house',
    [{
        name: 'Katlego',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '12-04-2021'
    }] )

const mainImageContainer = document.querySelector('.main-image')
mainImageContainer!.innerHTML = "";
const image = document.createElement('img')
image.setAttribute('src', yourMainProperty.src)
mainImageContainer?.appendChild(image)