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
        });
        document.querySelector('#contactModalbg').addEventListener("click", function() {
            document.body.classList.toggle('contact');
        });
    }
    contact();
}, false);