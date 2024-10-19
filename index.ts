// Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to 
// all TypeScript weakness flags.
// : number
const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')
const reviewTotalDisplay = document.querySelector('#reviews')

const propertyContainer = document.querySelector('.properties')
const footer = document.querySelector('.footer')

let isOpen : boolean

const reviews : {
    name: string;
    stars: number;
    loyaltyUser: boolean;
    date: string;
}[]= [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
]

function showReviewTotal (value : number, reviewer: string, isLoyalty : boolean) {
    const iconDisplay = isLoyalty ? '⭐' : ''
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay
}

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

const you: {
    firstName: string;
    lastName: string;
    isReturning: boolean;
    age: number;
    stayedAt: string[];
} = {
    firstName: 'Bobby',
    lastName: 'Brown',
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}

const properties : {
    image: string;
    title: string;
    price: number;
    location: {
        firstLine: string;
        city: string;
        code: number;
        country: string;
    };
    contact: [number, string];
    isAvailable: boolean;
}[] = [
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
        contact: [+27689765432,'maryMantji@gmail.com'],
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
        contact: [+27987543298,'guyMan@hotmail.com'],
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
        contact: [+27075824361,'andreaSefakoe@gmail.com'],
        isAvailable: true
    }
]

function populateUser(isReturning : boolean, userName : string ) {
    if (isReturning){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

populateUser(you.isReturning, you.firstName)

for (let i = 0; i < properties.length; i++) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = properties[i].title
    const image = document.createElement('img')
    image.setAttribute('src', properties[i].image)
    card.appendChild(image)
    propertyContainer.appendChild(card)
}

let currentLocation: [string, string, number] = ['London', '11:35', 17]
footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°'

