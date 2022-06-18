const keyElements = document.querySelectorAll('.key');      //Variabile che contiene tutti i tasti.
console.log(keyElements);

const notes = {                                             //Elenco di tutti i suoni.
    do: '01-do.mp3',
    dodiesis: '02-dodiesis.mp3',
    re: '03-re.mp3',
    rediesis: '04-rediesis.mp3',
    mi: '05-mi.mp3',
    fa: '06-fa.mp3',
    fadiesis: '07-fadiesis.mp3',
    sol: '08-sol.mp3',
    soldiesis: '09-soldiesis.mp3',
    la: '10-la.mp3',
    ladiesis: '11-ladiesis.mp3',
    si: '12-si.mp3',
}

function playSound(key) {                                   //Funzione chiama alla pressione di un tasto.
    const audioElement = new Audio();                       //Crea una variabile che contiene un suono.
    const note = notes[key];                                //Prende la nota associata al tasto premuto.   
    audioElement.src = 'sounds/' + note;                    //Prende il file mp3 contenente quella nota.
    console.log(audioElement.src);                          
    audioElement.play();                                    //Riproduce il suono.
}

keyElements.forEach(function(keyElement) {                  //Per ogni tasto...
    keyElement.addEventListener("click", function() {       //Associa la funzione "playSound(key)" alla pressione dei tasti.
        const key = keyElement.id;
        playSound(key);
    });
});
// /* keyElement.addEventListener('touchend', function() {    solo per dispositivi touch */





 
