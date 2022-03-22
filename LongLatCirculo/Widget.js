
define([

  "esri/map",
  'dojo/dom',

  "esri/geometry/Circle",
  "esri/geometry/Point",

  "esri/symbols/SimpleFillSymbol",
  "esri/symbols/SimpleLineSymbol",
  "esri/symbols/SimpleMarkerSymbol",
  "esri/Color",
  "esri/graphic",

  'dojo/_base/declare', 'jimu/BaseWidget'
],
  function (
    map,
    dom,

    Circle,
    Point,

    SimpleFillSymbol,
    SimpleLineSymbol,
    SimpleMarkerSymbol,
    Color,
    Graphic,





    declare, BaseWidget) {

    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget], {
      // Custom widget code goes here

      baseClass: 'jimu-widget-LongLatCirculo',

      //this property is set by the framework when widget is loaded.
      //name: 'CustomWidget',


      //methods to communication with app container:

      postCreate: function () {

        this.symbol = new SimpleFillSymbol();
        var poligono = this.symbol;

        var line = new SimpleLineSymbol();
        line.setColor(new Color([26, 26, 26, 1]));

        poligono.setOutline(line);
        poligono.setColor(new Color([0, 197, 255, 0.25]));


      },

      startup: function () {

        console.log('startup');
      },

      onOpen: function () {
        console.log('onOpen');
        console.log("this.map", this.map);
      },

      Localizar: function () {

        var latitud = this.Latitud.value;
        var longitud = this.Longitud.value;
        console.log([longitud, latitud])

        // Esto sería sin zoom, lo vamos a meter con zoom mejor

        // this.map.centerAt([longitud,latitud])

        this.map.centerAndZoom([longitud, latitud], 12);


        //Ahora dibujamos el círculo

         var radio = this.Radio.value

        this.map.graphics.clear();

        var circulito = new Circle({
          center: [longitud, latitud],
          radius: radio
          // radius: dom.byId("radi").value,

        });


        var graphic = new Graphic(circulito, this.symbol);

        this.map.graphics.add(graphic);






        if (this.Longitud.value == ""){
          alert ("Introduzca la longitud")
        };

        if (this.Latitud.value == ""){
          alert ("Introduzca la latitud")
        };

        if (this.Radio.value == ""){
          alert ("Introduzca el radio")
        };


        

      },

      onClose: function () {
        console.log('onClose');
      },

      // onMinimize: function(){
      //   console.log('onMinimize');
      // },

      // onMaximize: function(){
      //   console.log('onMaximize');
      // },

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