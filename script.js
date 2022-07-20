let songName = document.querySelector('p')
let playBtn = document.getElementById('play');
let forward = document.getElementById('forward');
let backward = document.getElementById('backward');

let audio = document.querySelector('#audio')
let image = document.getElementById('img')

let progressing = document.getElementById('progress');

let songs = ['hey', 'summer', 'ukulele'];


songIndex = 0;
songList(songs[songIndex])

function songList(song){
   audio.src = `music/${song}.mp3`
   image.src = `images/${song}.jpg`
   songName.innerText = song;
}

function playMusic(){
    image.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')

    audio.play()
}


function pauseMusic(){
    image.classList.remove('play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause')
    playBtn.querySelector('i.fas').classList.add('fa-play')
   
    audio.pause()
}

playBtn.addEventListener('click', ()=> {
    const isPlaying = image.classList.contains('play')
    if(isPlaying){
        pauseMusic() 
    }else {
        playMusic()
    }
})

forward.addEventListener('click', nextSong)
backward.addEventListener('click', prevSong)

function nextSong(){
    songIndex++
    if(songIndex == songs.length){
        songIndex = 0
    }
    songList(songs[songIndex])
    playMusic()
}

function prevSong(){
    songIndex --
    if(songIndex < 0){
        songIndex = songs.length - 1
    }
    songList(songs[songIndex])
    playMusic()
}


