            /* card-1 and song */

const card1 = document.getElementById("card-1");
const card1song = document.getElementById("card-1-song");


            /* card-2 and song */

const card2 = document.getElementById("card-2");
const card2song = document.getElementById("card-2-song");



             /* card-3 and song */

const card3 = document.getElementById("card-3");
const card3song = document.getElementById("card-3-song");




             /* card-4 and song */

const card4 = document.getElementById("card-4");
const card4song = document.getElementById("card-4-song");




            /* load all songs */


const songs = [

card1song,
card2song,
card3song,
card4song
    
];



         /* playing the current son */
         
let currentSong = null;
         
      
function playSong(song) {


/* if same song was chickes */

if (currentSong === song) {

if (!song.paused) {

/* pause the playing song */
song.pause();
    
}else {

/* on clicking the passed song rest the song and play */ 
    
    song.currentTime = 0;
    song.play();
    
}

return;
    
}


/* when one song is playing other songs shuld atop */

songs.forEach(function (otherSong) {

otherSong.pause();
otherSong.currentTime = 0;
    
});

/* play the new song from the beginning */

 song.currentTime = 0;
 song.play();
 
 currentSong = song;
    
}




/* play only the  card-1-song on click of card-1 */

card1.addEventListener("click", function () {

playSong(card1song);
    
});



/* play only the  card-2-song on click of card-2 */

card2.addEventListener("click", function () {

playSong(card2song);
    
});



/* play only the  card-3-song on click of card-3 */

card3.addEventListener("click", function () {

playSong(card3song);
    
});



/* play only the  card-4-song on click of card-4 */

card4.addEventListener("click", function () {

playSong(card4song);
    
});


