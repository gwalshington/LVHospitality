window.addEventListener("DOMContentLoaded", function() {
    /* Menu */
    function menu(){
      document.querySelector('header button').addEventListener("click", function() {
        this.classList.toggle('active');
      });  
    }
    menu();
    
    /* Guide */
    function addEvent(e, t, n) {
        e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n)
    }
    
    function guide() {
        if ("" === this.className) {
            for (var e = 0; e < events.length; e += 1) events[e].className = "";
            this.className = "open"
        } else this.className = ""
    }
    var events = document.querySelectorAll("#guide section > *"),
        i;
        for (i = 0; i < events.length; ++i) addEvent(events[i], "click", guide);
        
    /* Contact */
    function contact(){
        document.querySelector('header #contact').addEventListener("click", function() {
            document.body.classList.toggle('contact');
            document.querySelector('header button').classList.remove('active');
        });
        document.querySelector('#modalBG').addEventListener("click", function() {
            document.body.removeAttribute("class");
        });
        if(document.body.id==='welcomeback'){
            document.querySelector('#updateitinerary').addEventListener("click", function() {
                document.body.classList.toggle('contact');
            });
            document.querySelector('#liason img').addEventListener("click", function() {
                document.body.classList.toggle('contact');
            });
            document.querySelector('#oahu').addEventListener("click", function() {
                document.body.classList.toggle('oahu');
            });
            document.querySelector('#fourseasons').addEventListener("click", function() {
                document.body.classList.toggle('fourseasons');
            });
        }
    }
    contact();
    
    /* Welcome Screen on Mobile */
    function mobile(){
        setInterval(function(){
            if(window.location.href.indexOf("itinerary") != -1){
                document.body.classList.add('itinerary');
            }
        }, 100);
        document.querySelector('header button').classList.remove('active');
        clearInterval(myVar);
    }
    
    document.querySelector('#itineraryNav').addEventListener("click", mobile);
    window.onload = mobile();

}, false);