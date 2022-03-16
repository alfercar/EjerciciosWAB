define(['dojo/_base/declare', 'jimu/BaseWidget',
'esri/symbols/SimpleMarkerSymbol', 'esri/symbols/SimpleLineSymbol',
'dojo/_base/lang', 'dojo/dom', 'esri/graphic', 'esri/Color'],
  function(declare, BaseWidget, SimpleMarkerSymbol, SimpleLineSymbol, lang, dom, Graphic, Color) {
    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget], {
      baseClass: 'jimu-widget-customwidget',

      symbol: null,

      postCreate: function() {
        this.symbol = new SimpleMarkerSymbol();
        var marker = this.symbol;
        var line = new SimpleLineSymbol();
        line.setColor(new Color([133,133,133,1]));
        marker.setOutline(line);
        marker.setColor(new Color([0,77,168,0.25]));
      },

      onOpen: function(){
        // Docu lang.hitch https://gis.stackexchange.com/questions/384025/lang-hitch-use-in-arcgis-api-for-javascript
        this.map.on('click', lang.hitch(this,function(event) {
          if (dom.byId('activado').checked) {
            this.map.graphics.clear();

            var point = event.mapPoint;
            var graphic = new Graphic(point, this.symbol);

            this.map.graphics.add(graphic);
          }
        }));

        this.map.graphics.show();
      },

      onClose: function(){
        this.map.graphics.hide();
      },
    });
  });