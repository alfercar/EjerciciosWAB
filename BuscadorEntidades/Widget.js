
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

      baseClass: 'jimu-widget-BuscadorEntidades',

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
        console.log("this.map", this.map)


      },




      cargaPlanes: function () {


        console.log("Plan", this.selectPlan.value);
        // let codigoPlan = this.selectPlan.value;
        // if (codigoPlan == -1) { return };
        // this.listaPlanes.innerHTML = "";


        distritos = this.map.getLayer("Datos_PlanApp_9427");
        console.log("Distritos", distritos);

        bares = this.map.getLayer("Datos_PlanApp_4644");
        console.log("Bares", bares);

        cines = this.map.getLayer("Datos_PlanApp_9581");
        console.log("Cines", cines);

        deporte = this.map.getLayer("Datos_PlanApp_4115");
        console.log("Deporte", deporte);

        museos = this.map.getLayer("Datos_PlanApp_4750");
        console.log("Museos", museos);

        ocioNocturno = this.map.getLayer("Datos_PlanApp_4235");
        console.log("Ocio Nocturno", ocioNocturno);

        parques = this.map.getLayer("Datos_PlanApp_3480");
        console.log("Parques", parques);

        teatros = this.map.getLayer("Datos_PlanApp_6757");
        console.log("Teatros", teatros);

        tiendas = this.map.getLayer("Datos_PlanApp_7723");
        console.log("Tiendas", tiendas);

        var capas = [distritos, bares, cines, deporte, museos, ocioNocturno, parques, teatros, tiendas];

        console.log("capas", capas)


        if (this.selectPlan.value == "-1") {
          tiendas.setDefinitionExpression(`1=1`);
          teatros.setDefinitionExpression(`1=1`);
          bares.setDefinitionExpression(`1=1`);
          deporte.setDefinitionExpression(`1=1`);
          cines.setDefinitionExpression(`1=1`);
          museos.setDefinitionExpression(`1=1`);
          parques.setDefinitionExpression(`1=1`);
          ocioNocturno.setDefinitionExpression(`1=1`);

        }


        else if (this.selectPlan.value == "1") {

          tiendas.setDefinitionExpression(`1=1`);

          // tiendas.setDefinitionExpression(`codplan = '${this.selectPlan.value}'`);

          bares.setDefinitionExpression('1=0');
          ocioNocturno.setDefinitionExpression('1=0');
          cines.setDefinitionExpression('1=0');
          teatros.setDefinitionExpression('1=0');
          museos.setDefinitionExpression('1=0');
          parques.setDefinitionExpression('1=0');
          deporte.setDefinitionExpression('1=0');

          // Esto saca las de artesanía tiendas.setDefinitionExpression('codsubcategoria = 11')

        }

        else if (this.selectPlan.value == "20") {

          teatros.setDefinitionExpression(`1=1`);

          bares.setDefinitionExpression('1=0');
          ocioNocturno.setDefinitionExpression('1=0');
          cines.setDefinitionExpression('1=0');
          tiendas.setDefinitionExpression('1=0');
          museos.setDefinitionExpression('1=0');
          parques.setDefinitionExpression('1=0');
          deporte.setDefinitionExpression('1=0');

        }

        else if (this.selectPlan.value == "30") {

          parques.setDefinitionExpression(`1=1`);

          bares.setDefinitionExpression('1=0');
          ocioNocturno.setDefinitionExpression('1=0');
          cines.setDefinitionExpression('1=0');
          tiendas.setDefinitionExpression('1=0');
          museos.setDefinitionExpression('1=0');
          teatros.setDefinitionExpression('1=0');
          deporte.setDefinitionExpression('1=0');

        }

        else if (this.selectPlan.value == "40") {

          ocioNocturno.setDefinitionExpression(`1=1`);

          bares.setDefinitionExpression('1=0');
          teatros.setDefinitionExpression('1=0');
          cines.setDefinitionExpression('1=0');
          tiendas.setDefinitionExpression('1=0');
          museos.setDefinitionExpression('1=0');
          parques.setDefinitionExpression('1=0');
          deporte.setDefinitionExpression('1=0');

        }

        else if (this.selectPlan.value == "50") {

          museos.setDefinitionExpression(`1=1`);

          bares.setDefinitionExpression('1=0');
          ocioNocturno.setDefinitionExpression('1=0');
          cines.setDefinitionExpression('1=0');
          tiendas.setDefinitionExpression('1=0');
          teatros.setDefinitionExpression('1=0');
          parques.setDefinitionExpression('1=0');
          deporte.setDefinitionExpression('1=0');

        }

        else if (this.selectPlan.value == "60") {

          deporte.setDefinitionExpression(`1=1`);

          bares.setDefinitionExpression('1=0');
          ocioNocturno.setDefinitionExpression('1=0');
          cines.setDefinitionExpression('1=0');
          tiendas.setDefinitionExpression('1=0');
          museos.setDefinitionExpression('1=0');
          parques.setDefinitionExpression('1=0');
          teatros.setDefinitionExpression('1=0');

        }

        else if (this.selectPlan.value == "70") {

          cines.setDefinitionExpression(`1=1`);

          bares.setDefinitionExpression('1=0');
          ocioNocturno.setDefinitionExpression('1=0');
          teatros.setDefinitionExpression('1=0');
          tiendas.setDefinitionExpression('1=0');
          museos.setDefinitionExpression('1=0');
          parques.setDefinitionExpression('1=0');
          deporte.setDefinitionExpression('1=0');

        }

        else if (this.selectPlan.value == "90") {

          bares.setDefinitionExpression(`1=1`);

          teatros.setDefinitionExpression('1=0');
          ocioNocturno.setDefinitionExpression('1=0');
          cines.setDefinitionExpression('1=0');
          tiendas.setDefinitionExpression('1=0');
          museos.setDefinitionExpression('1=0');
          parques.setDefinitionExpression('1=0');
          deporte.setDefinitionExpression('1=0');

        }







      },


      onClose: function () {

        distritos = this.map.getLayer("Datos_PlanApp_9427");

        bares = this.map.getLayer("Datos_PlanApp_4644");

        cines = this.map.getLayer("Datos_PlanApp_9581");

        deporte = this.map.getLayer("Datos_PlanApp_4115");

        museos = this.map.getLayer("Datos_PlanApp_4750");

        ocioNocturno = this.map.getLayer("Datos_PlanApp_4235");

        parques = this.map.getLayer("Datos_PlanApp_3480");

        teatros = this.map.getLayer("Datos_PlanApp_6757");

        tiendas = this.map.getLayer("Datos_PlanApp_7723");


        bares.setDefinitionExpression(`1=1`);

        teatros.setDefinitionExpression('1=1');
        ocioNocturno.setDefinitionExpression('1=1');
        cines.setDefinitionExpression('1=1');
        tiendas.setDefinitionExpression('1=1');
        museos.setDefinitionExpression('1=1');
        parques.setDefinitionExpression('1=1');
        deporte.setDefinitionExpression('1=1');
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