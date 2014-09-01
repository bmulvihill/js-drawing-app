var App = this.App || {};
App.ToolBox = function(stage){
 //create the toolbox
    var toolPanel = new Kinetic.Layer({
        draggable: false, 
    }); 
    
App.ToolBox.prototype.createToolBox = function (stage){    
      var OUTLINE_WIDTH = 180;
      var RADIUS = 12.5;
      var PADDING = 10;
      var XLOC = 10;
      var YLOC = stage.getHeight() * 0.125;
     
        var outline = new Kinetic.Rect({
        x: XLOC,
        y: YLOC,
        stroke: '#555',
        strokeWidth: 2,
        width: OUTLINE_WIDTH,
        height: stage.getHeight() * 0.80,
        cornerRadius: 10
    });
      

    toolPanel.add(outline);
    
    //add tool images to the layer
    var sources = new Array();
    for(var i=0; i<tools.length; i++)
    {
       sources[i] = 'Styles/images/' + tools[i].name + '.gif'; 
    }
    
    var images = [];
    var loadedImages = 0;
    var numImages = 0;
    for (var src in sources) {
        numImages++;
    }
    for (var src in sources) {
        images[src] = new Image();
        images[src].onload = function() {
            if (++loadedImages >= numImages) {
                App.drawImages(images);
                stage.add(toolPanel);
            }
        };
        images[src].src = sources[src];
    }
    
};

      
App.drawImages = function(images) {
        var toolImg =[];
        var width = 100;
        var height = 100;
        
        for(var i =0; i < images.length; i++){
            var toolImg = new Kinetic.Image({
            image: images[i],
            offset: [width / 2],
            width: width,
            height: height,
            name: tools[i]
        });
        
        toolImg.on('click tap', function(evt){
            selectedTool = evt.targetNode.getName();
        });
        
        toolImg.setPosition(180/2, 100 * (i + 1));
        toolPanel.add(toolImg);
        }        
      }
      
//input tool to add to the tool box
App.ToolBox.prototype.addTool = function(tool){
    tools.push(tool);
};

App.ToolBox.prototype.getTool = function(){
    return selectedTool;
};
      
      var selectedTool = null;
      var tools = [];

}
