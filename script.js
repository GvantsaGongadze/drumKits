document.addEventListener('keypress', (event) => {

    for (i = 97; i <=122; i++){
        if (event.keyCode == i) {
            let audio = document.getElementById(i);
            
            if(audio) {
                audio.currentTime = 0;
                audio.play(); 
                let play = audio.parentElement;
                play.setAttribute("id", "play")
                
                setTimeout(function(){
                    play.removeAttribute("id");
                }, 100);
            }            
        }
    }
});


