document.addEventListener("DOMContentLoaded", () =>{

    var continuousElements = document.getElementsByClassName('trackTitle-right');
    var viewed;
    for (var i = 0; i < continuousElements.length; i++) {
     var con = new Waypoint({
        element: continuousElements[i],
        handler: function(direction) {
    
    if (direction=="down") {
        anime({
            targets: ".trackTitle-right",
            easing: "easeOutExpo",
            opacity:[0,1],
            duration:5000,
            translateY:[0,20],
            "font-size":["3vw","3vw"]

           })
    
        viewed = 1;
    
    }        
    
    
    
        },
    
        offset:"100%"
      })
    
     if (viewed==1) {
        con.disable();
    
         
     }
    
    }

    //

    var continuousElements = document.getElementsByClassName('trackTitle-left');
    var viewed;
    for (var i = 0; i < continuousElements.length; i++) {
     var con2 = new Waypoint({
        element: continuousElements[i],
        handler: function(direction) {
    
    if (direction=="down") {
        anime({
            targets: ".trackTitle-left",
            easing: "easeOutExpo",
            opacity:[0,1],
            duration:5000,
            translateY:[0,20],
            "font-size":["3vw","3vw"]

           })
    
        viewed = 1;
    
    }        
    
    
    
        },
    
        offset:"100%"
      })
    
     if (viewed==1) {
enabled:false;    
         
     }
    
    }

    //

    var continuousElements = document.getElementsByClassName('trackContent-right');
    var viewed;
    for (var i = 0; i < continuousElements.length; i++) {
     var con2 = new Waypoint({
        element: continuousElements[i],
        handler: function(direction) {
    
    if (direction=="down") {
        anime({
            targets: ".trackContent-right",
            easing: "easeOutExpo",
            opacity:[0,1],
            duration:5000,
            translateY:[20,0],
            "font-size":["1.5vw","1.5vw"]

           })
    
        viewed = 1;
    
    }        
    
    
    
        },
    
        offset:"95%"
      })
    
     if (viewed==1) {
        con2.disable();
    
         
     }
    
    }

    //

    var continuousElements = document.getElementsByClassName('trackContent-left');
    var viewed;
    for (var i = 0; i < continuousElements.length; i++) {
     var con2 = new Waypoint({
        element: continuousElements[i],
        handler: function(direction) {
    
    if (direction=="down") {
        anime({
            targets: ".trackContent-left",
            easing: "easeOutExpo",
            opacity:[0,1],
            duration:5000,
            translateY:[20,0],
            "font-size":["1.5vw","1.5vw"]

           })
    
        viewed = 1;
    
    }        
    
    
    
        },
    
        offset:"95%"
      })
    
     if (viewed==1) {
        con2.disable();
    
         
     }
    
    }
    
    //animation 2
    
    var way = new Waypoint({
        element: document.querySelector('.text-video'),
        handler: function(direction) {
            
            if (direction=="down") {
                anime({
                    targets: ".text-video",
                    easing: "easeOutExpo",
                    opacity:[0,1],
                    duration:5000,
                    "font-size":[0,"5vw"]
    
                   
                   
                   })
            }      
        },
        offset: '100%'
      })
    
      way.enable();


})

//animation 3



var way = new Waypoint({
    element: document.querySelector('.card-content-testimony'),
    handler: function(direction) {
        
        if (direction=="down") {
            anime({
                targets: ".card-content-testimony",
                easing: "easeOutExpo",
                opacity:[0,1],
                duration:5000,
                "font-size":[0,"1.2vw"],
                translateY:[100,0],


               
               
               })
        }      
    },
    offset: '100%'
  })





