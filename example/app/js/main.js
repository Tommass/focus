var domains = {
  "DO_ENTIER": {
    "type": "number",
    "validation": [{
      "type": "number"
    }],
  },
  "DO_DATE": {
    "type": "date"
  },
  "DO_TEXTE_50": {
    "type": "text",
    "validation": [{
      "type": "string",
      "options": {
        "maxLength": 50
      }
    }],
    "style": ["cssClassDomain1", "cssClassDomain2"],
    "decorator": "testHelper"
  },
  "DO_LISTE": {
    "type": "number",
  },
  "DO_ID": {
    "type": "text"
  },
  "DO_TEXTE_30": {
    "type": "text",
    "validation": [{
      "type": "string",
      "options": {
        "maxLength": 30
      }
    }]
  },
  "DO_EMAIL": {
    "type": "email",
    "validation": [{
      "type": "email"
    }, {
      "type": "string",
      "options": {
        "minLength": 4
      }
    }]
  },
  "DO_BOOLEEN":{
    "type": "boolean"
  },
  "DO_DEVISE":{
    "type": "number",
    "validation":{
      "type": "number",
      "options":{"min": 0}
    },
    "formatter": "devise"
  }

};
Fmk.initialize({domains: domains, metadatas: {}});
var TestView = Fmk.Views.CoreView.extend({
  metadatas:{
    firstName: "DO_TEXTE_50",
    template: function(){ return "<p>Test template!!!</p>"}
  }

});
var view = new TestView({model :new Fmk.Models.Model({firstName: "Jon", lastName: "Jiap"})});
console.log(view.render().el);

jQuery.fn.test = function() {
    console.log('JQURY PLUGIN TEST');
    this.each(function() {
       $(this).css("background-color", "#ff00ff");
    });

    return this;
}

Fmk.Helpers.postRenderingHelper.registerHelper({name: "testHelper", fn: jQuery.fn.test})