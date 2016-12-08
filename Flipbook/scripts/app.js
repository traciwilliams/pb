$(‘#flipbook’).turn({width:800, height:600});






yepnope({
     test : Modernizr.csstransforms,
     yep: ['lib/turn.js', 'css/flipbook-html5.css']
     nope : ['lib/turn.html4.js', 'css/flipbook-html4.css']
});