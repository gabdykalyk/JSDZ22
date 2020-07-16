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



