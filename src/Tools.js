
var App = this.App || {};
(function(){
    App.BaseTool = function(color){
        this.name = null;
        this.curColor = null;
        this.strokeSize = 10;
        this.clickX = [],
        this.clickY = [],
        this.clickDrag = [];
        this.moving = false;
        this.drawingLayer = null;
        this.color = color;
    }

    App.BaseTool.prototype.getToolInstance = function() {
        return this;
    };


    
    App.ScribbleTool = function(color) {
        App.BaseTool.call(this,color);
        this.name = 'ScribbleTool';
    }

    App.ScribbleTool.prototype = new App.BaseTool();

    App.ScribbleTool.prototype.MouseDown = function(x, y, newDrawingLayer) {
        this.drawingLayer = newDrawingLayer;
        this.curColor = this.color();
        this.clickX = [];
        this.clickY = [];
        this.clickDrag = [];
        if (this.moving) {
            this.moving = false;
        }
        else {

            this.moving = true;
            //this.curColor.push();
            this.addClick(x, y, false);
            
            this.redraw();

        }
    };
    App.ScribbleTool.prototype.MouseMove = function(x, y) {
        if (this.moving) {
            this.addClick(x, y, true);
            this.redraw();
            this.moving = true;
        }
    };

    App.ScribbleTool.prototype.MouseUp = function() {
        this.moving = false;

    };

    App.ScribbleTool.prototype.addClick = function(x, y, dragging) {
        this.clickX.push(x);
        this.clickY.push(y);
        this.clickDrag.push(dragging);
    };

    App.ScribbleTool.prototype.MouseLeave = function() {
        this.moving = false;

    };

    App.ScribbleTool.prototype.redraw = function() {
        var context = this.drawingLayer.getContext();
        for (var i = 0; i < this.clickX.length; i += 1) {
            // Set the drawing path            
            context.beginPath();

            //   If dragging then draw a line between the two points
            if (this.clickDrag[i] && i) {
                context.moveTo(this.clickX[i - 1], this.clickY[i - 1]);
            }
            else {

                // The x position is moved over one pixel so a circle even if not dragging
                context.moveTo(this.clickX[i] - 1, this.clickY[i]);
            }
            context.lineTo(this.clickX[i], this.clickY[i]);
            context.strokeStyle = this.curColor;
            context.lineCap = "round";
            context.lineJoin = "round";
            context.lineWidth = this.strokeSize;
            context.stroke();

        }
        context.closePath();
        context.restore();
    };
    
    App.LineTool = function(color) {
        //constructors
        App.BaseTool.call(this, color);
        this.name = 'LineTool';
    }
    App.LineTool.prototype = new App.BaseTool();

    App.LineTool.prototype.MouseDown = function(x, y, newDrawingLayer) {
        this.drawingLayer = newDrawingLayer;
        this.curColor = this.color();
        if (this.moving) {
            this.moving = false;
        }
        else {
            this.moving = true;
            this.addClick(x, y, false);
            this.redraw();

        }
    };
    App.LineTool.prototype.MouseMove = function(x, y) {
        if (this.moving) {
            this.addClick(x, y, true);
            this.redraw();
            this.moving = true;
        }
    };

    App.LineTool.prototype.MouseUp = function() {
        this.moving = false;
    };

    App.LineTool.prototype.addClick = function(x, y, dragging) {
        
        if(!dragging){
            this.clickX[0] = x;
            this.clickY[0] = y;
        }
            this.clickX[1] = x;
            this.clickY[1] = y;
    };

    App.LineTool.prototype.MouseLeave = function() {
        this.moving = false;

    };

    App.LineTool.prototype.redraw = function() {
        var context = this.drawingLayer.getContext();
            // Set the drawing path
            context.clearRect(0, 0, this.drawingLayer.getCanvas().getWidth(), this.drawingLayer.getCanvas().getHeight());
            context.beginPath();
            context.strokeStyle = this.curColor;
            context.moveTo(this.clickX[0], this.clickY[0]);
            context.lineTo(this.clickX[1], this.clickY[1]);
            context.lineCap = "round";
            context.lineJoin = "round";
            context.lineWidth = 5;
            context.stroke();

        
        context.closePath();
        //context.restore();
    };


    //Eraser Tool inherits Scribble Tool
    App.EraserTool = function(){
        this.strokeSize = 25;
        this.name = 'EraserTool';
        this.color = function(){ return 'white'; }
    }
    App.EraserTool.prototype = new App.ScribbleTool();
})(this);


