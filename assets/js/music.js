let musics = [
    // { src:'musics/We Ride! - Reed Mathis.mp3', title:'xxxxxx', artist:'xxxxxx'},
    { src:'audios/kk_h.mp3' },
    { src:'audios/ccw_full.mp3' },
    { src:'audios/ms_pha.mp3' },
    { src:'audios/wm_d.mp3' },
    { src:'audios/wm_h.mp3' },
    { src:'audios/wm_wiya_1.mp3' },
    { src:'audios/wm_wiya_2.mp3' },
    { src:'audios/oboe_concert.mp3' },
    { src:'audios/dw_jazz.mp3' },
];

let music = document.querySelector('audio');
let indexMusic = 0;

// let musicName = document.querySelector('.description h4');
// let nameArtist = document.querySelector('.description i');
renderMusic(indexMusic);
// function renderMusic(){}

document.querySelector('.btn-play').addEventListener('click', playMusic);

document.querySelector('.btn-pause').addEventListener('click', pauseNow);
// music.addEventListener('timeupdate', actualize);


document.querySelector('.prev').addEventListener('click', () => {
    indexMusic--;
    if (indexMusic < 0) {
        indexMusic = 2;
    }
    pauseNow()
    renderMusic(indexMusic);
});

document.querySelector('.next').addEventListener('click', () => {
    indexMusic++;
    if (indexMusic > 2){
        indexMusic = 0;
    }
    pauseNow()
    renderMusic(indexMusic);
});




// function actualize(){}

// Funções

function renderMusic(index){
    music.setAttribute('src', musics[index].src);
    // music.addEventListener('loadeddata', () => {
    //     musicName.textContent = musics[index].title;
    //     nomeArtist.textContent = musics[index].artist;
    // });
}


function playMusic(){
    music.play();
    document.querySelector('.btn-pause').style.display = 'block';
    document.querySelector('.btn-play').style.display = 'none';
  
}


function pauseNow(){
    music.pause();
    document.querySelector('.btn-pause').style.display = 'none';
    document.querySelector('.btn-play').style.display = 'block';
}


