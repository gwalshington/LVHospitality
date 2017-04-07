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
        
    function category() {
        if ("" === this.className) {
            for (var e = 0; e < sections.length; e += 1) sections[e].className = "";
            this.className = "expanded"
        } else this.className = ""
    }
    var sections = document.querySelectorAll("#guide aside"),
        i;
        for (i = 0; i < sections.length; ++i) addEvent(sections[i], "click", category);
        
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
    
    /* Hilight Nav */
    function extractPageName(hrefString) {
        var arr = hrefString.split('/');
        return (arr.length < 2) ? hrefString : arr[arr.length - 2].toLowerCase() + arr[arr.length - 1].toLowerCase();
    }
    
    function setActiveMenu(arr, crtPage) {
        for (var i = 0; i < arr.length; i++) {
            if (extractPageName(arr[i].href) == crtPage) {
                if (arr[i].parentNode.tagName != "nav") {
                    arr[i].className = "currentpage";
                }
            }
        }
    }
    
    function setPage() {
        hrefString = document.location.href ? document.location.href : document.location;
        if (document.querySelector("nav") != null)
            setActiveMenu(document.querySelector("nav").getElementsByTagName("a"), extractPageName(hrefString));
    }
}, false);