
define(['dojo/_base/lang', 'dojo/_base/declare', 'jimu/BaseWidget'],
  function (lang, declare, BaseWidget) {
    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget], {
      // Custom widget code goes here

      baseClass: 'jimu-widget-ScaleWidget',

      //this property is set by the framework when widget is loaded.
      //name: 'CustomWidget',


      //methods to communication with app container:

      postCreate: function () {

        console.log('postCreate');
      },

      startup: function () {

        console.log('startup');
      },

      onOpen: function () {

        var Scale = this.map.getScale();

        this.escala.innerHTML = "1:"+ Math.round(Scale);

        //El math.round es una propiedad de javascript que se usa para redondear valores


        //Ahora para que cada vez que se haga zoom con el scroll aparezca

        //El lang es para referirnos a eventos que aparecen en el mapa
        this.map.on('zoom-end', lang.hitch(this, function () {

          var Scale = this.map.getScale();

          this.escala.innerHTML = "1:"+ Math.round(Scale);

        }));
      },

      onClose: function () {
        console.log('onClose');
      },

      onMinimize: function () {
        console.log('onMinimize');
      },

      onMaximize: function () {
        console.log('onMaximize');
      },

      // onSignIn: function(credential){
      //   /* jshint unused:false*/
      //   console.log('onSignIn');
      // },

      // onSignOut: function(){
      //   console.log('onSignOut');
      // }

      // onPositionChange: function(){
      //   console.log('onPositionChange');
      // },

      // resize: function(){
      //   console.log('resize');
      // }

      //methods to communication between widgets:

    });
  });