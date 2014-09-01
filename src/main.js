var App = this.App || {};
(function(){
    root = this
    root.App = root.App || {}

     //getter / setter for Color property
    App.Color = function(val){
            var value = val;
        this.__defineGetter__("value", function(){
             return value;
        });
    
        this.__defineSetter__("value", function(val){
            value = val;
        });
    };

    App.initialize = function(){

        //initialize default color
        var selectedColor = new App.Color("black");

        //main stage element
        console.log(new root.Kinetic.Stage({container: 'container'}))
        var stage = new root.Kinetic.Stage({
            container: 'container',
            width: 1024,
            height: 768
        });
         
        //create new matrix
        var standardColors = new App.Matrix();
        standardColors.rows[0] = new Array('red', 'orange', 'yellow','green', 'blue', 'purple','black', 'white', 'pink');
        
        var pastelColors = new App.Matrix();
        pastelColors.rows[0] = new Array('#389090', '#f47e7d', '#b5d045', '#fb8335', '#81c0c5', '#e0c7a8', '#be4856', '#ebecec', '#f4e790');

        //pass in color Matrix and color object
        var colorPanel = new App.ColorPalette(standardColors, selectedColor);
         stage.add(colorPanel); 
         
         //create toolbox and add tools to panel
        var toolBox = new App.ToolBox();
        toolBox.addTool(new App.ScribbleTool(function(){return selectedColor.value;}));
        toolBox.addTool(new App.EraserTool());
        toolBox.addTool(new App.LineTool(function(){return selectedColor.value;}));
        toolBox.createToolBox(stage);

        //add drawing canvas and event listeners
        var drawingCanvas = new App.DrawingCanvas(stage);   
        drawingCanvas.createCanvas();
        drawingCanvas.addEventListeners(function(){return toolBox.getTool();});
    };     
 })(this);