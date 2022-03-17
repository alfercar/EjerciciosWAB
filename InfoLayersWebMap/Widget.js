

define(["esri/map", "esri/arcgis/Portal", 'dojo/_base/declare', 'jimu/BaseWidget'],

  function (map, Portal, declare, BaseWidget) {
    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget], {
      // Custom widget code goes here

      baseClass: 'jimu-widget-InfoLayersWebMap',

      //this property is set by the framework when widget is loaded.
      //name: 'CustomWidget',


      //methods to communication with app container:

      postCreate: function () {

      },

      startup: function () {

        console.log("This.map", this.map)

        this.Nombre1.innerHTML = this.map.itemInfo.item.title;

        this.identificador1.innerHTML = 'Identificador: ' + this.map.itemId;

        this.Tipo1.innerHTML = 'Tipo: ' + this.map.itemInfo.item.type;

        this.Acceso1.innerHTML = 'Acceso: ' + this.map.itemInfo.item.access;

        this.Etiquetas1.innerHTML = 'Etiquetas: ' + this.map.itemInfo.item.tags;

        var capas = this.map.itemInfo.itemData.operationalLayers
        console.log("capas", capas);

        for (var capa of capas) {


          this.label1.innerHTML += "<tr><td>" + capa.id + " " + "</td>" + "<td>" + capa.title + " " + "</td></tr>";

        };

        //OTRA MANERA DE HACERLO
        // for (let i = 0; i<this.capas.length; i++) {

        //   this.label1.innerHTML += "<tr><td><p>" + this.capas[i].title + "</p></td><td><p>" + this.capas[i].id + "</p></td></tr>"

        // }

      },

      onOpen: function () {

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