var continuousElements = document.getElementsByClassName('trackTitle');
var viewed;
for (var i = 0; i < continuousElements.length; i++) {
 var con = new Waypoint({
    element: continuousElements[i],
    handler: function(direction) {

if (direction=="down") {
    anime({
        targets: ".trackTitle",
        easing: "easeOutExpo",
        opacity:[0,1],
        duration:5000,
        translateY:[0,20],
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



