var App = this.App || {};
//<summary>
//<input> colorGrid colors to be used in this palette</input>
//<output>kineticLayer - add this layer to the stage
//</summary>

//TODO
// Add dragevent animation that animates ands loads a different color pallet
//add arrow that will open list view with all different color pallet
(function(){
  App.ColorPalette = function(colorGrid, color){
        //constants DO NOT CHANGE
        var OUTLINE_WIDTH = 800;
        var XLOC = 200;
        var RADIUS = 25;
        var PADDING = 10;
        var XSPACE = 60;
    
        var rowCount = colorGrid.rows.length;
        var columnCount = colorGrid.rows[0].length;
        var paletteWidth = ((RADIUS * 2) * (columnCount-1)) + ((XSPACE-(RADIUS * 2)) * (columnCount-1))
        
        var colorPanel = new Kinetic.Layer();
    
       
        var outline = new Kinetic.Rect({
          x: XLOC,
          y: 10,
          stroke: '#555',
          strokeWidth: 2,
          width: OUTLINE_WIDTH,
          height: 75, //simpleText.getHeight() + (rowCount * 30) + PADDING,
          cornerRadius: 10
        });

        var group = new Kinetic.Group({
            //center colors
           x: XLOC + (outline.getWidth()/2) - RADIUS/2 - (paletteWidth / 2) ,
           y: PADDING,
        });

      group.on('click tap', function(evt){
          //possibly do a callback here to show selected color in different window?
          color.value = evt.targetNode.getName();
      });

      
        for (var i = 0; i < rowCount; i++) {
          for (var j = 0; j < columnCount; j++) {
   
            (function () {
              var circle = new Kinetic.Circle({
                x:  (j  * XSPACE) + RADIUS,
                y: RADIUS + PADDING,
                radius: RADIUS,
                fill: colorGrid.rows[i][j],
                stroke: 'black',
                strokeWidth: 2,
                draggable: false,
                name: colorGrid.rows[i][j],
              });
              
              group.add(circle);

            })();
          }
        }     

       // colorPanel.add(simpleText);
        colorPanel.add(outline);
        colorPanel.add(group);
        return colorPanel;

  };
})(this);