// Create sms namespace
var sms = sms || {};
// Create a active namespace
var active = active || {};

// Blueprints for models, views and collections
// Create the model
sms.model = Backbone.Model.extend({
  initialize: function(){
    console.log("a model has been instantiated");
  }
});

// Create the collection
sms.collection = Backbone.Collection.extend({
  model: sms.model,
  initialize: function(){
    console.log("a collection has been instantiated");
  }
});

// Create the model view
sms.modelView = Backbone.View.extend({
  el: $('.list'),
  initialize: function(){
    console.log("a modelView has been instantiated");
  },
  render: function(){
    var data;
    var tpl = "Sent from: " + data.sender + " >> " + data.message;
    this.$el.append(tpl);
  }
});

// Create the collection view
sms.collectionView = Backbone.View.extend({
  events: {
    'click button': 'render'
  },
  initialize: function(){
    console.log("a collectionView has been instantiated");

  },
  render: function(){
    console.log('ow! you clicked me!');
  }
});
// End Blueprints


// active
$(document).ready(function(){
  active.collection = new sms.collection();
  active.collectionView = new sms.collectionView({
    el: $('.ui'),
    collection: active.collection
  });
});

// end active
