
define([

  "esri/tasks/QueryTask",
  "esri/tasks/query",
  "esri/SpatialReference",

  'dojo/_base/lang',

  "esri/graphic",
  "esri/symbols/SimpleFillSymbol",
  "esri/symbols/SimpleLineSymbol",
  "esri/Color",


  'dojo/_base/declare',
  'jimu/BaseWidget'],

  function (
    QueryTask,
    Query,
    SpatialReference,

    lang,

    Graphic,
    SimpleFillSymbol,
    SimpleLineSymbol,
    Color,


    declare,
    BaseWidget) {
    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget], {
      // Custom widget code goes here

      baseClass: 'jimu-widget-BuscaPlanes',

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
        console.log('onOpen');
      },



      cargaPlanes: function () {


        console.log("Código de Planes", this.selectPlan.value);
        let codigoPlan = this.selectPlan.value;
        if (codigoPlan == -1) { return };
        this.listaPlanes.innerHTML = "";

        // console.log("array de layers",this.map.itemInfo.itamData.operationalLayers)

        // console.log("Servicio de las entidades", this.config.concellosService)

        const queryTask = new QueryTask("https://services5.arcgis.com/zZdalPw2d0tQx8G1/arcgis/rest/services/Datos_PlanApp/FeatureServer/8");

        const query = new Query();
        query.returnGeometry = false;

        query.outFields = ["nombre", "objectid", "codplan", "codsubcategoria", "subtipo"];
        query.where = `codplan=${this.selectPlan.value}`;

        console.log("query", query);

        queryTask.execute(query, lang.hitch(this, function (results) {

          console.log("results", results)

          opt = document.createElement("option");
          opt.value = "-1";
          opt.innerHTML = "Selecciona un establecimiento";
          this.listaPlanes.add(opt);

          for (var i = 0; i < results.features.length; i++) {
            opt = document.createElement("option");
            opt.value = results.features[i].attributes.objectid;
            opt.innerHTML = results.features[i].attributes.nombre;
            this.listaPlanes.add(opt);
          }

        }))


      },



      zoomEstablecimiento: function () {

        console.log("Código de Planes", this.selectPlan.value);
        let codigoPlan = this.selectPlan.value;
        if (codigoPlan == -1) { return };


        console.log("Servicio de los concellos", this.config.concellosService)

        const queryTask = new QueryTask("https://services5.arcgis.com/zZdalPw2d0tQx8G1/arcgis/rest/services/Datos_PlanApp/FeatureServer/8");

        const query = new Query();
        query.returnGeometry = true;
        query.outSpatialReference = new SpatialReference(102100);
        query.outFields = ["nombre", "objectid", "codplan", "codsubcategoria", "subtipo"];
        query.where = `codplan=${this.selectPlan.value}`;

        console.log("query2", query);

        queryTask.execute(query, lang.hitch(this, function (results2) {

          console.log("results2", results2);
          if (results2.features.length > 0) {
            var geometria = results2.features[0].geometry;
            this.map.graphics.clear();


            var line = new SimpleLineSymbol();
            line.setColor(new Color([26, 26, 26, 1]));
            var fill = new SimpleFillSymbol();
            fill.setColor(new Color([0, 197, 255, 0.25]));
            fill.setOutline(line);


            var graphic = new Graphic(geometria, fill);

            this.map.graphics.add(graphic);

            this.map.setExtent(geometria.getExtent(), true);

          }



        }))

      },

      onClose: function () {
        console.log('Que pena que se cierre :(');
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