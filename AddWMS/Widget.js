///////////////////////////////////////////////////////////////////////////
// Copyright © Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////
define([
  "esri/layers/WMSLayer",
  "esri/layers/WMSLayerInfo",
  "esri/geometry/Extent",



  'dojo/_base/declare', 'jimu/BaseWidget'],

  function (
    WMSLayer,
    WMSLayerInfo,
    Extent,


    declare, BaseWidget) {
    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget], {
      // Custom widget code goes here

      baseClass: 'jimu-widget-customwidget',

      //this property is set by the framework when widget is loaded.
      //name: 'CustomWidget',


      //methods to communication with app container:

      postCreate: function () {

        console.log('postCreate');
      },

      startup: function () {

        console.log('startup');
      },

      addWMS: function () {
        console.log("Bon diiiia");

        if (this.urlwms.value != "") {

          var layerInfo = new WMSLayerInfo({

            name: this.config.nombre_capa,
            title: this.config.titulo_capa

          });

          var resourceInfo = {
            extent: new Extent(-4.416832, 41.765378, -0.198082, 43.225400, { wkid: 4326 }),

            layerInfos: [layerInfo]
          };

          var wmsLayer = new WMSLayer(this.urlwms.value, {

            resourceInfo: resourceInfo,
            visibleLayers: [this.config.nombre_capa]

          });

          console.log("wms Layer", wmsLayer)

          this.map.addLayer(wmsLayer);

          //Ahora para que nos lo centre (en caso de que no tengamos puesto un web map)

          this.map.setExtent(wmsLayer.fullExtent)

        }
      },

      onOpen: function () {
        //Para acceder a la info del config
        //si quisiera acce3der al nombre pondria this.config.name
        console.log('onOpen', this.config);

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