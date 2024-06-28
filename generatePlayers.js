const { v4: uuidv4 } = require('uuid')
const fs = require('fs')

// Функция для генерации случайных имен
function generateUniqueNames() {
    const names = [
        'Liam',
        'Noah',
        'Oliver',
        'Elijah',
        'William',
        'James',
        'Benjamin',
        'Lucas',
        'Henry',
        'Alexander',
        'Mason',
        'Michael',
        'Ethan',
        'Daniel',
        'Jacob',
        'Logan',
        'Jackson',
        'Levi',
        'Sebastian',
        'Mateo',
        'Jack',
        'Owen',
        'Theodore',
        'Aiden',
        'Samuel',
        'Joseph',
        'John',
        'David',
        'Wyatt',
        'Matthew',
        'Luke',
        'Asher',
        'Carter',
        'Julian',
        'Grayson',
        'Leo',
        'Jayden',
        'Gabriel',
        'Isaac',
        'Lincoln',
        'Anthony',
        'Hudson',
        'Dylan',
        'Ezra',
        'Thomas',
        'Charles',
        'Christopher',
        'Jaxon',
        'Maverick',
        'Josiah',
        'Isaiah',
        'Andrew',
        'Elias',
        'Joshua',
        'Nathan',
        'Caleb',
        'Ryan',
        'Adrian',
        'Miles',
        'Eli',
        'Nolan',
        'Christian',
        'Aaron',
        'Cameron',
        'Ezekiel',
        'Colton',
        'Luca',
        'Landon',
        'Hunter',
        'Jonathan',
        'Santiago',
        'Axel',
        'Easton',
        'Cooper',
        'Jeremiah',
        'Angel',
        'Roman',
        'Connor',
        'Jameson',
        'Robert',
        'Greyson',
        'Jordan',
        'Ian',
        'Carson',
        'Jaxson',
        'Leonardo',
        'Nicholas',
        'Dominic',
        'Austin',
        'Everett',
        'Brooks',
        'Xavier',
        'Kai',
        'Jose',
        'Parker',
        'Adam',
        'Jace',
        'Wesley',
        'Kayden',
        'Silas',
    ]
    return names.slice(0, 100)
}

function getRandomDescription() {
    const descriptions = [
        'A brave warrior',
        'A skilled archer',
        'A wise mage',
        'A stealthy rogue',
        'A strong knight',
    ]
    return descriptions[Math.floor(Math.random() * descriptions.length)]
}

function generateSkins() {
    const skins = ['robbert', 'stream', 'wooder']
    return skins[Math.floor(Math.random() * skins.length)]
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const uniqueNames = generateUniqueNames()
const players = {}
for (let i = 0; i < 100; i++) {
    const id = uuidv4()
    players[id] = {
        name: uniqueNames[i],
        hp: 100,
        counts: {
            kills: 0,
            deaths: 0,
        },
        sex: Math.random() > 0.5 ? 'male' : 'female',
        description: getRandomDescription(),
        friendIds: [],
        status: 'idle',
        skin: generateSkins(),
        team: '',
        points: getRandomInt(500, 10000),
    }
}

fs.writeFileSync(
    './src/shared/config/structure/players.json',
    JSON.stringify(players, null, 2)
)
