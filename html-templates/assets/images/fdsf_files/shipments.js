$(document).ready(function() {

  $(".delivery-status-table.main").each(function(item) {
    $(this).find("> tbody > tr:gt(0)").hide();
  });

  $("#deliveryBox").on("click", '.details-button', function(event) {
    event.preventDefault();

    var element = $(this),
      lessDetailsText = element.data("less-details"),
      moreDetailsText = element.data("more-details"),
      icon = element.find('i'),
      iconClass = icon.attr('class'),
      span = element.find('span'),
      deliveryElement = element.closest('.infos'),
      statusTableElement = deliveryElement.find('.delivery-status-table.main'),
      statusTableElementRows = statusTableElement.find('> tbody > tr:gt(0)'),
      moreDetailsElement = deliveryElement.find('.more-details'),
      spanText;

    switch (iconClass) {
      case 'icon-plus-sign':
        statusTableElementRows.fadeIn();
        statusTableElement.removeClass('bold');
        moreDetailsElement.slideDown();
        iconClass = 'icon-minus-sign';
        spanText = lessDetailsText;
        break;

      case 'icon-minus-sign':
        statusTableElementRows.fadeOut();
        statusTableElement.addClass('bold');
        moreDetailsElement.slideUp();
        iconClass = 'icon-plus-sign';
        spanText = moreDetailsText;
        break;
    }

    icon.attr('class', iconClass);
    span.html(spanText);
  });

  $('#shipment-type').on("change", { attributeName: "data-marketplace" }, shipmentsFilter);
  $("#tab-actions-deliveries").on("change", '#action-type', { attributeName: "data-action-type" }, shipmentsFilter);

  function shipmentsFilter(event) {
    var type = $(this).children(":selected").attr("id");
    $("div[" + event.data.attributeName + "]").each(function() {
      if ($(this).attr(event.data.attributeName) === type || type === "ALL") {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  }

});
