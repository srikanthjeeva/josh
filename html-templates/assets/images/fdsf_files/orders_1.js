function monthAndYearSelected() {
  return $("#orders_month option:selected").index() !== 0 && $("#orders_year option:selected").index() !== 0;
}

function toggleDateFilterSubmit() {
  if(monthAndYearSelected()) {
    $("#date_filter_submit").removeAttr("disabled");
  } else {
    $("#date_filter_submit").attr("disabled", "disabled");
  }
}

$("#orders_month").change(function() {
   toggleDateFilterSubmit();
});

$("#orders_year").change(function() {
  toggleDateFilterSubmit();
});
