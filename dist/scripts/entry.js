"use strict";require.config({baseUrl:"src/scripts/modules",paths:{jquery:"//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min",three:"https://cdnjs.cloudflare.com/ajax/libs/three.js/r74/three.min",underscore:"https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min",backbone:"https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.3/backbone-min",tween:"http://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenLite.min",base:".."},shim:{underscore:{exports:"_"},backbone:{exports:"Backbone",deps:["underscore"]},"base/libs/dev/orbit/orbit":{exports:"Orbit",deps:["three"]},"base/libs/prod/events/threex.domevents":{exports:"THREEx",deps:["three"]},tween:{exports:"TweenLite"}}}),require(["base/app"]);