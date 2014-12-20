











//
// Atlantico's JS components
//


//


$(document).bind('ajaxError', function(event, jqxhr, settings, exception){
  if (jqxhr.status == 401) {
    window.location.replace("/");
  }
});

$(document).ready(function() {
  Atlantico.Manager.setup();
});

// We have a lot of ajax calls that renders new 'componatizable' elements
// while we keep doing ajax via JS in views there is no better way to call
// components initialization
//
// Important: when `Atlantico.Manager` loads a component on an element it adds a
// data attribute `data-loaded="true"` and it will avoid those elements on the
// next call
//
$(document).ajaxSuccess(function() {
  Atlantico.Manager.setup();
});
