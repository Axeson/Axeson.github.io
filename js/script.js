particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 384,
            "density": {
                "enable": true,
                "value_area": 2000
            }
        },
        "color": {
            "value": "#000000"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#ff0000"
            },
            "polygon": {
                "nb_sides": 100
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.7536036686067957,
            "random": false,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 0,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 40,
                "size_min": 0.1,
                "sync": true
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#c44800",
            "opacity": 0.6,
            "width": 0.6
        },
        "move": {
            "enable": true,
            "speed": 4,
            "direction": "right",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "window",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "grab"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 220,
                "line_linked": {
                    "opacity": 2

                }
            },
            "bubble": {
                "distance": 3000,
                "size": 10,
                "duration": 1,
                "opacity": 1,
                "speed": 10000
            },
            "repulse": {
                "distance": 100,
                "duration": 0.5
            },
            "push": {
                "particles_nb": 30
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});
