//Tools Test Suite
describe('Tools Library', function() {
    
    //LineTool
    describe("Line Tool contructor", function() {
        var line = new App.LineTool(function() {
            return 'red';
        });
             
        it('is a base tool', function(){
           expect(line instanceof App.BaseTool).toBe(true);
        });
         
        it('the name to be LineTool', function() {
            expect(line.name).toBe("LineTool")
        });

        
        it('the color is red', function() {
           var color = line.color();
           expect(color).toBe('red');
        });

        it('is not moving', function() {
            expect(line.moving).toBe(false);
        });

        it('returns a LineTool instance', function() {
            expect(line.getToolInstance()).toEqual(line);
        });
             

    });
         
 //ScribbleTool
 describe("Scribble Tool contructor", function() {
      var scribble = new App.ScribbleTool(function() {
                                      return 'red';
                                      });
      
      it('is a base tool', function(){
         expect(scribble instanceof App.BaseTool).toBe(true);
         });
      
      it('the name to be ScribbleTool', function() {
         expect(scribble.name).toBe("ScribbleTool")
         });
      
      
      it('the color is red', function() {
         var color = scribble.color();
         expect(color).toBe('red');
         });
      
      it('is not moving', function() {
         expect(scribble.moving).toBe(false);
         });
      
      it('returns a ScribbleTool instance', function() {
         expect(scribble.getToolInstance()).toEqual(scribble);
         });
 });

         
 //EraserTool
 describe("Eraser Tool contructor", function() {
          var eraser = new App.EraserTool();
          
          it('is a eraser tool', function(){
             expect(eraser instanceof App.ScribbleTool).toBe(true);
             });
          it('is a base tool', function(){
             expect(eraser instanceof App.BaseTool).toBe(true);
             });
          
          it('the name to be EraserTool', function() {
             expect(eraser.name).toBe("EraserTool")
             });
          
          
          it('the color is white', function() {
             var color = eraser.color();
             expect(color).toBe('white');
             });
          
          it('the color is not red', function() {
             var eraser2 = new App.EraserTool('red');
             expect(eraser2.color()).not.toBe('red');
             expect(eraser2.color()).toBe('white');
             });
          
          it('is not moving', function() {
             expect(eraser.moving).toBe(false);
             });
          
          it('returns a EraserTool instance', function() {
             expect(eraser.getToolInstance()).toEqual(eraser);
             });
    });
    //touch/mouse down method
//     describe('the mousedown method', function() {
//         var line, canvasPanel = null;
// 
//         beforeEach(function() {
//             spyOn(LineTool.prototype, 'addClick');
//             line = new LineTool(function() {
//                 return 'red';
//             });
//             canvasPanel = new Kinetic.Layer();
//             line.MouseDown(1, 1, canvasPanel);
//         });
// 
//         it('saves the click', function() {
//             expect(LineTool.prototype.addClick).toHaveBeenCalled();
//         });
// 
//         it('starts moving', function() {
//             expect(line.moving).toBe(true);
//         });
// 
//     });
// 
//     //touch/mouse move method
//     describe('the mousemove method', function() {
//         beforeEach(function() {
//             spyOn(LineTool.prototype, 'addClick');
//             line = new LineTool(function() {
//                 return 'red';
//             });
//             canvasPanel = new Kinetic.Layer();
//             line.MouseDown(1, 1, canvasPanel);
//             line.MouseMove(2, 2);
//         });
// 
//         it('the tool should be moving', function() {
//             expect(line.moving).toBe(true);
//         });
// 
//         it('saves the moving point', function() {
//             expect(LineTool.prototype.addClick).toHaveBeenCalled();
//         });
// 
//         it('should add 2 points', function() {
//             expect(LineTool.prototype.addClick.callCount).toEqual(2);
//         });
// 
//     });
// 
//     //touch/mouse upmethod
//     describe('the mouseup method', function() {
//         beforeEach(function() {
//             spyOn(LineTool.prototype, 'addClick');
//             line = new LineTool(function() {
//                 return 'red';
//             });
//             canvasPanel = new Kinetic.Layer();
//             line.MouseDown(1, 1, canvasPanel);
//             line.MouseMove(2, 2);
//             line.MouseUp();
//         });
//         it('the tool should no longer be moving', function() {
//             expect(line.moving).not.toBe(true);
//         });
// 
//     });
//     
//     //the addclick method
//     describe('the addClick method', function() {
//          beforeEach(function() {
//             spyOn(LineTool.prototype, 'addClick');
//             line = new LineTool(function() {
//                 return 'red';
//             }); 
//             canvasPanel = new Kinetic.Layer();
//             line.MouseDown(1,1,canvasPanel);
//             //simulate add point method
//             line.lineTool.getPoints()[0].x = 3;
//             line.lineTool.getPoints()[0].y = 4
//             line.lineTool.getPoints()[1].x = 5
//             line.lineTool.getPoints()[1].y = 6
//         });
//         
//         it('should add an initial point', function(){            
//             expect(line.lineTool.getPoints()[0].x).toBe(3);
//             expect(line.lineTool.getPoints()[0].y).toBe(4);
//             expect(line.lineTool.getPoints()[1].x).toBe(5);
//             expect(line.lineTool.getPoints()[1].y).toBe(6);
//         });
//     });
// 
});