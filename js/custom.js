
    		//Activate WOW
    		new WOW().init();

            //Type introduction
            $(function(){
                $("#typed").typed({
                    strings: ["a <strong>computer engineer </strong>", "a <strong>web developer</strong>", "an <strong>aspiring entrepreneur</strong>", "<strong>Cristian Bedoya</strong> "],
                    typeSpeed: 40,
                    backDelay: 400,
                    
                });
            });

            //Activate bar graph when user scrolls down
            $(function() {
                var oTop = $('.c_skill').offset().top - window.innerHeight;
                var count = 0;
                $(window).scroll(function(){
                
                    var pTop = $('body').scrollTop();
                    console.log( pTop + ' - ' + oTop );
                    if( (pTop > oTop) && count <= 0){
                        count = count + 1;
                        start_bar_animation();
                    }
                });
            });

            //Start all the increasing bar animations
            function start_bar_animation(){

            	var w = window.innerWidth;

            	//If large screen
            	if (w > 700) {
	            	//Add your code here
	                increment_bar($('.c_skill'),$('.c_skill_percent'), 85);
	                increment_bar($('.py_skill'),$('.py_skill_percent'), 95);
	                increment_bar($('.matlab_skill'),$('.matlab_skill_percent'), 90);
	                increment_bar($('.html_skill'),$('.html_skill_percent'), 95);
	                increment_bar($('.js_skill'),$('.js_skill_percent'), 80);
	                increment_bar($('.responsive_skill'),$('.responsive_skill_percent'), 85);
	                increment_bar($('.verilog_skill'),$('.verilog_skill_percent'), 85);
	                increment_bar($('.vhdl_skill'),$('.vhdl_skill_percent'), 80);
	                increment_bar($('.cadence_skill'),$('.cadence_skill_percent'), 85);
            	}
            	else {
            		//Add your code here
	                increment_bar_small($('.c_skill'),$('.c_skill_percent'), 85);
	                increment_bar_small($('.py_skill'),$('.py_skill_percent'), 95);
	                increment_bar_small($('.matlab_skill'),$('.matlab_skill_percent'), 90);
	                increment_bar_small($('.html_skill'),$('.html_skill_percent'), 95);
	                increment_bar_small($('.js_skill'),$('.js_skill_percent'), 80);
	                increment_bar_small($('.responsive_skill'),$('.responsive_skill_percent'), 85);
	                increment_bar_small($('.verilog_skill'),$('.verilog_skill_percent'), 85);
	                increment_bar_small($('.vhdl_skill'),$('.vhdl_skill_percent'), 80);
	                increment_bar_small($('.cadence_skill'),$('.cadence_skill_percent'), 85);
            	}


            }


            //Increment Skills chart for normal (large) screens
            function increment_bar(progressBar, percent, final_val){
               

                var height = 20;
                var percent_val = 20;

                progressBar.height(height);
                percent.text(percent_val);


                var interval = setInterval(function() {
                    height += 1;
                    percent_val += 1;

                    progressBar.css('height', height + '%');
                    percent.text(percent_val + '%') ;
                    //console.log(name + ' ' + percent_val);

                    if (height >= final_val) {
                        clearInterval(interval);
                    }
                }, 9)
            }

            //Increment Skills chart for small screens
            function increment_bar_small(progressBar, percent, final_val){
               

                var percent_val = 20;
                var jedi = '';
                percent.text(percent_val);


                var interval = setInterval(function() {
                    
                    percent_val += 1;

                    //What level of jedi to appear
                    if (percent_val < 40){
                    	jedi = 'Youngling';
                    }
                    else if (percent_val < 60){
                    	jedi = 'Padawan';
                    }
                    else if (percent_val < 80){
                    	jedi = 'Jedi Knight';
                    }
                    else if (percent_val < 100){
                    	jedi = 'Jedi Master';
                    }	
                    else{
                    	jedi = 'Jedi Grand Master';
                    }



                    percent.text(percent_val + '% -' + jedi ) ;
                   

                    if (percent_val >= final_val) {
                        clearInterval(interval);
                    }
                }, 10)
            }


            //Scroll smoothly to section of page
			$(function() {
			  $('a[href*=#]:not([href=#])').click(function() {
			    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

			      var target = $(this.hash);
			      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			      if (target.length) {
			        $('html,body').animate({
			          scrollTop: target.offset().top
			        }, 1000);
			        return false;
			      }
			    }
			  });
			});
	