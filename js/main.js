
//Show Video 
let playButton = document.querySelector('.play-movie');
let video = document.querySelector('.video-container');
let myvideo = document.querySelector('#myvideo');
let closebtn = document.querySelector('.close-video');

playButton.onclick = () => {
    video.classList.add('show-video');
    // Auto Play When Click On Button
    myvideo.play();
};
closebtn.onclick = () => {
    video.classList.remove('show-video');
    // Pause On Close Video
    myvideo.pause();
};


// Swiper 
let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0];


pop_art_right.addEventListener('click', () => {
    Artists_bx.scrollLeft += 330;
});
pop_art_left.addEventListener('click', () => {
    Artists_bx.scrollLeft -= 330;
});

function myFunction() {
    document.getElementById("myDropdown")
        .classList.toggle("show");
}

function filterFunction() {
    var input, filter, ul, li, a, i;

    input = document.getElementById
        ("search-input");

    filter = input.value.toUpperCase();

    div = document.getElementById
        ("myDropdown");

    a = div.getElementsByTagName("a");

    for (i = 0; i < a.length; i++) {

        if (a[i].innerHTML.toUpperCase()
            .indexOf(filter) > -1) {

            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}