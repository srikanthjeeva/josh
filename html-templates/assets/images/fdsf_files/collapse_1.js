(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Atlantico.Components = Atlantico.Components || {};

  Atlantico.Components.Collapse = (function(_super) {
    __extends(Collapse, _super);

    function Collapse() {
      return Collapse.__super__.constructor.apply(this, arguments);
    }

    Collapse.prototype.events = {
      'click [data-header]': 'toggleCollapse'
    };

    Collapse.prototype.toggleCollapse = function(e) {
      e.preventDefault();
      $(e.currentTarget).toggleClass('active');
      return this.$el.find('[data-body]').toggleClass('active');
    };

    return Collapse;

  })(Backbone.View);

}).call(this);
