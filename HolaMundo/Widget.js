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
define(['dojo/dom','dojo/_base/declare', 'jimu/BaseWidget'],
  function(dom, declare, BaseWidget) {
    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget], {
      // Custom widget code goes here

      baseClass: 'jimu-widget-helloWorld',

      //this property is set by the framework when widget is loaded.
      //name: 'CustomWidget',


      //methods to communication with app container:

      postCreate: function() {
        console.log('postCreate');
      },

      sayHello:function(){
        // alert("waazaaaaaa");
        let currentExtent = this.map.extent;
        dom.byId("xMin").innerHTML = "xMin: " + currentExtent.xmin;

        //Habria que hacerlo 4 veces

        dom.byId("yMin").innerHTML = "yMin: " + currentExtent.ymin;

        dom.byId("yMax").innerHTML = "yMax: " + currentExtent.ymax;

        dom.byId("xMax").innerHTML = "xMax: " + currentExtent.xmax;
        
        
      },

      startup: function() {
       console.log('startup');
      },

      onOpen: function(){
        console.log('onOpen', this.map.extent);
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