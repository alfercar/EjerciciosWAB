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

  "esri/map",
  "esri/layers/FeatureLayer",

  'dojo/_base/declare',
  'jimu/BaseWidget'],


  function (

    map,
    FeatureLayer,


    declare,
    BaseWidget) {
    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget], {
      // Custom widget code goes here

      baseClass: 'jimu-widget-HappyWidget',

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
        console.log('This.map', this.map);
        layer = this.map.getLayer("Felicidad_2016_1798");
        console.log("layer", layer)
      },

      onClose: function () {
        console.log('onClose');
      },



      clickBotonPais: function () {
        console.log("hecho1");

        var array = layer._graphicsVal

        ///Aqui nos complicamos la vida, pero salimos mas fuertes

        // for (let i = 0; i<this.array.length; i++){
        //   if (array[i].attributes.Country == inputPais.value){
        //     console.log("Guay")
        //   }
        // };

        // for(var todos of array){

        //   if (todos.attributes.Country == this.inputPais.value){
        //         console.log("Guay")
        //     }

        // }

        ///AQUI NO NOS COMLICAMOS

        layer1 = this.map.getLayer("Felicidad_2016_1798");
        console.log("layer1", layer1)

        // layer1.setDefinitionExpression(`Country = '${this.inputPais.value}'`);

        if (this.inputPais.value == "") {
          layer1.setDefinitionExpression(`1=1`)

        }

        if (this.inputPais.value != "") {
          layer1.setDefinitionExpression(`Country = '${this.inputPais.value}'`)

        }




      },

      clickBotonRank: function () {
        console.log("hecho2");

        var array2 = layer._graphicsVal



        layer2 = this.map.getLayer("Felicidad_2016_1798");
        console.log("layer2", layer2)


        if (this.inputRank.value == "") {
          layer2.setDefinitionExpression(`1=1`)

        }

        if (this.inputRank.value != "") {
          layer2.setDefinitionExpression(`Happiness_Rank = '${this.inputRank.value}'`)

        }
      },

      clickBotonRestaurar: function () {

        console.log("hecho2");



        layer2 = this.map.getLayer("Felicidad_2016_1798");


        //Modo 1

        // layer2.setDefinitionExpression(`1=1`)
        // this.inputRank.value = ""
        // this.inputPais.value = ""

        // Modo 2

        layer2.setDefinitionExpression(layer2.defaultDefinitionExpression);

      }





      // onMinimize: function () {
      //   console.log('onMinimize');
      // },

      // onMaximize: function () {
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