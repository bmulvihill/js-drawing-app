var App = this.App || {};
(function(){
    App.DrawingCanvas = function(stage){
        this.stage = stage;
        this.OUTLINE_WIDTH = 800;
        this.XLOC = 200;
        this.YLOC = 0;    
        this.canvasPanel = new Kinetic.Layer();     
        this.outline = null;
        this.tool = null;
    }

     //create the Canvas
    App.DrawingCanvas.prototype.createCanvas = function(){    
            var self = this;
            self.outline = new Kinetic.Rect({
            x: self.XLOC,
            y: self.stage.getHeight() * 0.125,
            stroke: '#555',
            strokeWidth: 2,
            width: self.OUTLINE_WIDTH,
            height: self.stage.getHeight() * 0.80,
            cornerRadius: 10
        });
     
        self.canvasPanel.add(self.outline);
        self.stage.add(self.canvasPanel);  
        };

    App.DrawingCanvas.prototype.addEventListeners = function (getTool){
        var self = this;
        var newDrawingLayer = null;
        
        self.outline.on("mousedown", function(evt) {
            if(self.tool != getTool())
            {
            self.tool = getTool();
            newDrawingLayer = new Kinetic.Layer(); 
            self.stage.add(newDrawingLayer);
            }
            var x = newDrawingLayer.getStage().getMousePosition().x;
            var y = newDrawingLayer.getStage().getMousePosition().y;
            self.tool.MouseDown(x, y, newDrawingLayer);
       
        });
            
        self.outline.on("mousemove", function (evt) {
            var x = newDrawingLayer.getStage().getMousePosition().x;
            var y = newDrawingLayer.getStage().getMousePosition().y;
            self.tool.MouseMove(x, y);

        });
        
        self.outline.on("mouseup", function () {
            self.tool.MouseUp();
        });
        
    //    self.outline.on("mouseleave", function (evt) {
    //        self.tool.MouseLeave();
    //
    //    });
    };
})(this);


