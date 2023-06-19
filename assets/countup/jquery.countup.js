/**
 * @name		jQuery Count-UP Plugin
 * @author		Martin Angelov
 * @version 	1.0
 * @url			http://tutorialzine.com/2012/09/count-up-jquery/
 * @license		MIT License
 */

(function($){
	
	// Number of seconds in every time division
	var days	= 24*60*60,
		hours	= 60*60,
		minutes	= 60;
	/*
	// Creating the plugin
	$.fn.countup = function(prop){
		
		var options = $.extend({
			callback	: function(){},
			start		: new Date()
		},prop);
		
		var passed = 0, d, h, m, s, 
			positions;

		// Initialize the plugin
		init(this, options);
		
		positions = this.find('.position');
		
		(function tick(){
			
			passed = Math.floor((new Date() - options.start) / 1000);
			
			// Number of days passed
			d = Math.floor(passed / days);
			updateDuo(0, 1, d);
			passed -= d*days;
			
			// Number of hours left
			h = Math.floor(passed / hours);
			updateDuo(2, 3, h);
			passed -= h*hours;
			
			// Number of minutes left
			m = Math.floor(passed / minutes);
			updateDuo(4, 5, m);
			passed -= m*minutes;
			
			// Number of seconds left
			s = passed;
			updateDuo(6, 7, s);
			
			// Calling an optional user supplied callback
			options.callback(d, h, m, s);
			
			// Scheduling another call of this function in 1s
			setTimeout(tick, 1000);
		})();
		
		// This function updates two digit positions at once
		function updateDuo(minor,major,value){
			switchDigit(positions.eq(minor),Math.floor(value/10)%10);
			switchDigit(positions.eq(major),value%10);
		}
		
		return this;
	};*/

	// Creating the plugin
$.fn.countup = function(prop){

    var options = $.extend({
        callback    : function(){},
        start       : new Date()    // Changing this to "start"
    },prop);

    // Tename the "left" variable to "passed"
    var passed = 0, d, h, m, s,
        positions;

    init(this, options);

    positions = this.find('.position');

    (function tick(){

        // Calculate the passed time
        passed = Math.floor((new Date() - options.start) / 1000);

        // Calculate the passed minutes, hours and days     

        d = Math.floor(passed / days);
        updateDuo(0, 1, d);
        passed -= d*days;

        h = Math.floor(passed / hours);
        updateDuo(2, 3, h);
        passed -= h*hours;

        m = Math.floor(passed / minutes);
        updateDuo(4, 5, m);
        passed -= m*minutes;

        // Number of seconds passed
        s = passed;
        updateDuo(6, 7, s);

        // Calling an optional user supplied callback
        options.callback(d, h, m, s);

        // Scheduling another call of this function in 1s
        setTimeout(tick, 1000);
    })();

    // This function updates two digit positions at once
    function updateDuo(minor,major,value){
        switchDigit(positions.eq(minor),Math.floor(value/10)%10);
        switchDigit(positions.eq(major),value%10);
    }

    return this;
};


	function init(elem, options){
		elem.addClass('countdownHolder');
		// Creating the markup inside the container
		a = ['Dias','Horas','Minutos','Segundos'];
		b = 0;
		$.each(['Dias','Horas','Minutos','Segundos'], function(i){
			$('<span class="h'+a[b]+'"><span class="count'+this+'">').html(
				'<span class="position">\
					<span class="digit static">0</span>\
				</span>\
				<span class="position">\
					<span class="digit static">0</span>\
				</span></span>'
			).appendTo(elem);
			b++;
			
			if(this!="Segundos"){
				elem.append('<span class="countDiv countDiv'+i+'"></span>');
			}
		});

	}

	// Creates an animated transition between the two numbers
	function switchDigit(position,number){
		
		var digit = position.find('.digit')
		
		if(digit.is(':animated')){
			return false;
		}
		
		if(position.data('digit') == number){
			// We are already showing this number
			return false;
		}
		
		position.data('digit', number);
		
		var replacement = $('<span>',{
			'class':'digit',
			css:{
				top:'-2.1em',
				opacity:0
			},
			html:number
		});
		
		// The .static class is added when the animation
		// completes. This makes it run smoother.
		
		digit
			.before(replacement)
			.removeClass('static')
			.animate({top:'2.5em',opacity:0},'fast',function(){
				digit.remove();
			})

		replacement
			.delay(100)
			.animate({top:0,opacity:1},'fast',function(){
				replacement.addClass('static');
			});
	}
})(jQuery);