document.addEventListener("DOMContentLoaded", () => {

    var continuousElements = document.getElementsByClassName('trackTitle-right');
    for (var i = 0; i < continuousElements.length; i++) {
        var con = new Waypoint({
            element: continuousElements[i],
            handler: function (direction) {

                if (direction == "down") {
                    anime({
                        targets: ".trackTitle-right",
                        easing: "easeOutExpo",
                        opacity: [0, 1],
                        duration: 5000,
                        translateY: [0, 20],

                    })


                    this.disable();
                }



            },

            offset: "100%"
        })

        


        

    }

    //

    var continuousElements = document.getElementsByClassName('trackTitle-left');
    for (var i = 0; i < continuousElements.length; i++) {
        var con2 = new Waypoint({
            element: continuousElements[i],
            handler: function (direction) {

                if (direction == "down") {
                    anime({
                        targets: ".trackTitle-left",
                        easing: "easeOutExpo",
                        opacity: [0, 1],
                        duration: 5000,
                        translateY: [0, 20],

                    })

                    this.disable();

                }



            },

            offset: "100%"
        })

     

    }

    //
    var con = [];
    var continuousElements = document.querySelectorAll('.trackContent-right');

    for (var i = 0; i < continuousElements.length; i++) {

        con[i] = new Waypoint({
            element: continuousElements[i],
            handler: function (direction) {

               

                if (direction == "down") {
                    anime({
                        targets: ".trackContent-right",
                        easing: "easeOutExpo",
                        opacity: [0, 1],
                        duration: 5000,
                        translateY: [20, 0],

                    })
                    this.disable();



                }



            },

            offset: "100%"
        })



    }

    //

    var continuousElements = document.getElementsByClassName('trackContent-left');
    for (var i = 0; i < continuousElements.length; i++) {
        var con2 = new Waypoint({
            element: continuousElements[i],
            handler: function (direction) {

                if (direction == "down") {
                    anime({
                        targets: ".trackContent-left",
                        easing: "easeOutExpo",
                        opacity: [0, 1],
                        duration: 5000,
                        translateY: [20, 0]

                    })

                    con2.disable();


                }



            },

            offset: "100%"
        })






    }

    //animation 2


    var textvideo = new Waypoint({
        element: document.querySelector('.text-video'),
        handler: function (direction) {

            if (direction == "down") {
                anime({
                    targets: ".text-video",
                    easing: "easeOutQuint",
                    opacity: [0, 1],
                    duration: 5000,
                    translateX: [-150, 0],




                })
                textvideo.disable();

            }
        },
        offset: '100%'
    })



})

//animation 3



var cardtesti = new Waypoint({
    element: document.querySelector('.card-content-testimony'),
    handler: function (direction) {

        if (direction == "down") {
            anime({
                targets: ".card-content-testimony",
                easing: "easeOutExpo",
                opacity: [0, 1],
                duration: 5000,
                translateY: [100, 0]




            })
            cardtesti.disable();
        }
    },
    offset: '100%'
})


var trackTitlep = new Waypoint({
    element: document.querySelector('.trackTitle-products'),
    handler: function (direction) {

        if (direction == "down") {
            anime({
                targets: ".trackTitle-products",
                easing: "easeOutExpo",
                opacity: [0, 1],
                duration: 5000,
                translateY: [100, 0]




            })
            trackTitlep.disable();
        }
    },
    offset: '100%'
})

var cuadros1 = new Waypoint({
    element: document.querySelector('#cuadros'),
    handler: function (direction) {

        if (direction == "down") {
            anime({
                targets: "#cuadros",
                easing: "easeOutExpo",
                opacity: [0, 1],
                duration: 5000,
                translateX:[-100, 0],
                



            })
            cuadros1.disable();
        }
    },
    offset: '100%'
})

var cuadros2 = new Waypoint({
    element: document.querySelector('.cuadros2'),
    handler: function (direction) {

        if (direction == "down") {
            anime({
                targets: ".cuadros2",
                easing: "easeOutExpo",
                opacity: [0, 1],
                duration: 5000,
                translateX:[-100, 0],





            })
            cuadros2.disable();

        }
    },
    offset: '100%'
})

var cuadros5 = new Waypoint({
    element: document.querySelector('#cuadros5'),
    handler: function (direction) {

        if (direction == "down") {
            anime({
                targets: "#cuadros5",
                easing: "easeOutExpo",
                opacity: [0, 1],
                duration: 5000,
                translateX:[-100, 0],





            })
            cuadros5.disable();

        }
    },
    offset: '100%'
})

var cereal = new Waypoint({
    element: document.querySelector('#cereal'),
    handler: function (direction) {

        if (direction == "down") {
            anime({
                targets: "#cereal",
                easing: "easeOutExpo",
                opacity: [0, 1],
                duration: 5000,
                translateX:[-100, 0],





            })
            cuadros5.disable();

        }
    },
    offset: '100%'
})


        var con2 = new Waypoint({
            element: document.querySelector('.trackButton-par1'),
            handler: function (direction) {

                if (direction == "down") {
                    anime({
                        targets: ".trackButton-par1",
                        easing: "easeOutExpo",
                        duration: 5000,
                        translateX: [-100, 0],
                        opacity: [0, 1]

                    })

                    this.disable();


                }



            },

            offset: "100%"
        })






    

       var con3= new Waypoint({
            element: document.querySelector('.trackButton-impar1'),
            handler: function (direction) {

                if (direction == "down") {
                    anime({
                        targets: ".trackButton-par2",
                        easing: "easeOutExpo",
                        duration: 5000,
                        translateX: [-100, 0],
                        opacity: [0, 1]


                    })

                    this.disable();


                }



            },

            offset: "100%"
        })


        

       var complete= new Waypoint({
        element: document.querySelector('#complete'),
        handler: function (direction) {

            if (direction == "down") {
                anime({
                    targets: "#complete",
                    easing: "easeOutExpo",
                    duration: 5000,
                    translateX: [-100, 0],
                    opacity: [0, 1]


                })

                this.disable();


            }



        },

        offset: "100%"
    })





    

        var con4 = new Waypoint({
            element: document.querySelector('.trackButton-par2'),
            handler: function (direction) {

                if (direction == "down") {
                    anime({
                        targets: ".trackButton-par2",
                        easing: "easeOutExpo",
                        opacity: [0, 1],
                        duration: 5000,
                        translateX: [-100, 0],
                        opacity: [0, 1]


                    })

                    this.disable();


                }



            },

            offset: "100%"
        })






    

    
        var con5 = new Waypoint({
            element: document.querySelector('.trackButton-impar2'),
            handler: function (direction) {

                if (direction == "down") {
                    anime({
                        targets: ".trackButton-impar2",
                        easing: "easeOutExpo",
                        duration: 5000,
                        translateX: [-100, 0],
                        opacity: [0, 1]


                    })

                    this.disable();


                }



            },

            offset: "100%"
        })


        







    








