// TASK 1
function list() {
    let newList = document.createElement('ol')
    document.body.prepend(newList)
    for (let i = 1; i < 21; i++) {
        let newListItem = document.createElement('li')
        newListItem.innerHTML = "<h3>Hi</h3>"
        function createList() {
            
            newList.appendChild(newListItem)
        }
        if (i % 3 == 0) {
            newListItem.style.color = "blue"
            createList()
        } else if (i % 5 == 0) {
            newListItem.style.color = "green"
            createList()
        } else {
            createList()
        }
    }
}

list()

// TASK 2
function name() {
    let name = prompt("Введите ваше имя")
    let h1 = document.querySelector("#user-name")
    h1.innerHTML = `${name}`

}
name()

// TASK 3
function fill() {
    let arr = ["First", "Second", "Third", "Fourth"]
    let ul = document.querySelector(".ul")
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li')
        li.innerHTML = arr[i]
        ul.append(li)
    }
}

fill()

// TASK 4
function elem() {
    let elem = document.querySelector('#elem1')
    elem.append('!!!')
    elem.prepend('!!!')
    elem.before('!!!')
    elem.after('!!!')
}
elem()

// TASK 5
function setBg(element, color) {
    let p = document.querySelector(element)
    p.style.backgroundColor = color
    
}

setBg('p', 'yellow')

// TASK 6
let playList = [
    {
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC/DC",
        song: "BACK IN BLACK"
    },
    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song: "ENTER SANDMAN"
    }
];

function songList() {
    let songList = document.createElement('ol')
    document.body.append(songList)
    for (let i = 0; i < playList.length; i++) {
        let newListItem = document.createElement('li')
        newListItem.innerHTML = `${playList[i].author} - ${playList[i].song}`
        songList.append(newListItem)
    }
}
songList()

// TASK 7
let camaro = {
    name: 'Camaro',
    year: 2012,
    weight: 1500,
    engine: 2,
    transmission: 'auto',
    wheelDrive: 'back',
    seats: 4,
    tankVolume: 72,
    clearance: 127,
    cabriolet: false,
    image: '<img style="width:300px" src="https://cnet2.cbsistatic.com/img/_QfcIuGXIft53H15HTs88NN7CDA=/1200x675/2012/08/20/567a53dd-bb76-11e2-8a8e-0291187978f3/35414242_OVR.jpg">'
}

let teslaX = {
    name: 'TeslaX',
    year: 2015,
    weight: 2350,
    transmission: 'reductor',
    wheelDrive: 'full',
    seats: 5,
    clearance: 175,
    cabriolet: false,
    image: '<img style="width:300px" src="https://static.carsdn.co/cldstatic/wp-content/uploads/19-tesla-model-x-2018-angle--doors--exterior--front--grey.jpg">'
}

let mini = {
    name: 'Mini',
    year: 2014,
    weight: 1440,
    engine: 1.5,
    transmission: 'manual',
    wheelDrive: 'front',
    seats: 5,
    tankVolume: 51,
    clearance: 165,
    cabriolet: false,
    image: '<img style="width:300px" src="https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/long-term-review/legacy/1-mini-5dr-cooper-s-2019-lt-hero-front.jpg">'
}

let mustang = {
    name: 'Mustang',
    year: 2017,
    weight: 1900,
    engine: 1.5,
    transmission: 'manual',
    wheelDrive: 'front',
    seats: 4,
    tankVolume: 51,
    clearance: 165,
    cabriolet: true,
    image: '<img style="width:300px" src="https://i.ytimg.com/vi/bg5Ct_EPUcw/maxresdefault.jpg">'
}

let lamborghini = {
    name: 'Lamborghini',
    year: 2016,
    weight: 1500,
    engine: 5.2,
    transmission: 'robot',
    wheelDrive: 'full',
    seats: 2,
    tankVolume: 80,
    clearance: 100,
    cabriolet: true,
    image: '<img style="width:300px" src="https://media.ed.edmunds-media.com/lamborghini/huracan/2018/oem/2018_lamborghini_huracan_convertible_performante-spyder_fq_oem_2_500.jpg">'
}

let cars = [camaro, teslaX, mini, mustang, lamborghini]
function car() {
    let carsName;
    let carsYear;
    let newList = document.createElement('ol')
    let li;
    document.body.append(newList)
    for (let i = 0; i < cars.length; i++) {
        li = document.createElement('li');
        let list = '';
        for (key in cars[i]) {
            if (cars[i][key] && cars[i][key] !== true) {
                carsName = cars[i][key]
                list += `${cars[i][key]} <br>`
            }
        }
        li.innerHTML = list
        newList.append(li)
    } 
    }


car()