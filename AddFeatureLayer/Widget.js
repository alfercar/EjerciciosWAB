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
define(['dojo/dom','dojo/_base/declare', 'jimu/BaseWidget', 'esri/layers/FeatureLayer'],
  function(dom,declare, BaseWidget, FeatureLayer) {
    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget], {
      // Custom widget code goes here

      baseClass: 'jimu-widget-customwidget',

      //this property is set by the framework when widget is loaded.
      //name: 'CustomWidget',


      //methods to communication with app container:

      postCreate: function() {
        
        console.log('postCreate');
      },

      startup: function() {
      
       console.log('startup');
      },

      addLayer:function(){

        var terremotos = new FeatureLayer("http://services.arcgis.com/ue9rwulIoeLEI9bj/arcgis/rest/services/Earthquakes/FeatureServer/0");
        
        this.map.addLayer(terremotos)

      },

      añadircapa: function(){
        if(dojo.byId("url").value != ""){

        var urlcapa = dom.byId("url").value;
        var capa = new FeatureLayer (urlcapa);
        this.map.addLayer(capa)}

      },

      selectCapa: function(){

        var USAlayer = new ArcGISDynamicMapServiceLayer("http://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer", {"opacity": 0.4});

      
        USAlayer.setVisibleLayers([0,2,3]);

        var terremotos = new FeatureLayer("http://services.arcgis.com/ue9rwulIoeLEI9bj/arcgis/rest/services/Earthquakes/FeatureServer/0");
        
        this.map.addLayer([terremotos,USAlayer])
    

      },

  

      onOpen: function(){
        console.log('onOpen');

      },

      onClose: function(){
        console.log('onClose');
        
      },

      onMinimize: function(){
        console.log('onMinimize');
      },

      onMaximize: function(){
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