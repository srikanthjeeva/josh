(function() {
  Atlantico.Manager = {
    components: {},
    setup: function(context) {
      if (context == null) {
        context = 'body';
      }
      _.map($('[data-component]:not([data-loaded])', context), function(element) {
        var component;
        component = $(element).data('component');
        return Atlantico.Manager.instantiateComponent(component, element);
      });
      return Atlantico.Manager.components;
    },
    instantiateComponent: function(componentName, element) {
      var component, formattedComponentName;
      formattedComponentName = this.camelize(componentName);
      if (Atlantico.Components.hasOwnProperty(formattedComponentName)) {
        component = new Atlantico.Components[formattedComponentName]({
          el: element
        });
        element.dataset.loaded = true;
        return Atlantico.Manager.components["" + formattedComponentName + "-" + component.cid] = component;
      }
    },
    camelize: function(string) {
      return string.replace(/(?:^|[-_])(\w)/g, function(i, word) {
        if (word) {
          return word.toUpperCase();
        } else {
          return '';
        }
      });
    }
  };

}).call(this);
