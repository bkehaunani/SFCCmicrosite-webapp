$(document).ready(function() {
  // Handler for .ready() called.
  // have modernizr test to see if the browser supports touch. If it does then we will count this as a mobile device, smartphone, tablet etc. 
  // See http://modernizr.github.com/Modernizr/touch.html
  if (Modernizr.touch){
     // change url of any link with the survey_link class to mobile
     $("a.survey_link").attr("href", "survey.html")
  } else {
     // change any survey_link class URL to desktop
     $("a.survey_link").attr("href", "survey2.html")
     
  }
  
});



