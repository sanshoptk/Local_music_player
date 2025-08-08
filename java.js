const music =document.querySelector('Audio');
const img =document.querySelector('img');

const play= document.getElementById('masterPlay');
const title= document.getElementById('title');
const prev= document.getElementById('prev');
const next= document.getElementById('next');

const songs=[{
    name:"1.Love-Me-Like-You-Do(PaglaSongs)",
    title:"1.Love-Me-Like-You-Do",
    
},{
    name:"2.Camila_Cabello_-_Shameless_(Jesusful.com)",
    title:"2.Camila_Cabello_-_Shameless",
    
},{
    name:"3.All Time Low",
    title:"3.All Time Low",
    
},{
    name:"4.Animals_Maroon5",
    title:"4.Animals_Maroon5",
    
},{
    name:"5.Coolio_Gangsta's_Paradise_feat_L_V",
    title:"5.Gangsta's_Paradise",
    
},{
    name:"6.Maroon-5-Girls-Like-You---ft.-Cardi-B",
    title:"6.Maroon-5-Girls-Like-You---ft.-Cardi-B",
    
},{
    name:"7.One-Dance-Remix(PagalWorld)",
    title:"7.One-Dance-Remix(PagalWorld)",
    
},{
    name:"8.I-Will-Never-Fall-In-Love(PagalWorld)",
    title:"8.I-Will-Never-Fall-In-Love",
    
},{
    name:"9.No-Lie(PaglaSongs)",
    title:"9.No-Lie",
    
},{
    name:"10.Rihanna_-_Diamonds",
    title:"10.Rihanna_-_Diamonds",
    
}
]

let isPlay = false;

//for play function
const  playMusic= () =>{
    isPlay = true;
    music.play();
    
    play.classList.replace('fa-play',"fa-pause")
    img.classList.add("anime")
} ;

//for pause function
const  pauseMusic= ()=>{
    isPlay = false;
    music.pause();
    
    play.classList.replace('fa-pause',"fa-play")
    img.classList.remove("anime")
};

play.addEventListener('click',()=>{
   // if(isPlay){
        //pauseMusic();
   // }else{
       // playMusic();
   // }

    isPlay ? pauseMusic() : playMusic();

});

//changing

const loadSong =(songs) =>{
    title.textContent=songs.title;
    music.src="music/" + songs.name + ".mp3";
};

songIndex = -1;

//loadSong(songs[3]);

const nextSong=()=>{
    songIndex=(songIndex+1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};
const prevSong=()=>{
    songIndex=(songIndex-1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

next.addEventListener('click',nextSong);
prev.addEventListener('click',prevSong);








