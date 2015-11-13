define(["jquery"], function($) {
    var Dro = function(config){
        
        /* /////    VARS    /// */
        var canvas, context, 
           iData, dots=[], z=5,
           canvasWrapper, tempZ=[], centerPoint = {}, offX=0, offY=0, 
           canvas4, on=true, srcValue, sides = [],
           screenWidth, screenHeight,
           needGrid = false, gridX = 5, gridY = 5;
                 
      canvas = $('#' + config.canvasId);
      context = canvas[0].getContext('2d');
      canvasWrapper = $('#' + config.canvasWrapper);
        
      screenState();  
        
     this.setGrid = function(gridVal){
        needGrid = gridVal;
     };    
        
     this.setGridSize = function(gridSize){
        gridX = gridSize;
        gridY = gridSize;
     };
        
     this.presetImage = function(){
        clr();
        drawImage();
     }; 
        
     this.presetGrid = function(){
        clr();
        drawGrid();
     };
        
     this.getWidth = function(){
        return screenWidth;
     };
        
     this.getHeight = function(){
        return screenHeight;
     };
        
     this.load = function(idata, idots, isides){
          iData = idata;
          dots = idots;
          sides = isides;
          drawToCanvas();
     };
       
     this.setScreen = function(){
        screenState();
     };
        
    this.reRender = function(){
        drawToCanvas();
    };    
        
    
        
      /* //////	SCREEN STATE	//// */
    function screenState(){
        var tmpHeight = Math.floor(canvasWrapper.innerWidth() * 1.2); 
        canvasWrapper.innerHeight(tmpHeight + 'px');
        canvas.attr('width', canvasWrapper.width()-2 + 'px')
              .attr('height', canvasWrapper.height()-6 + 'px');
        screenWidth = canvas.width();
        screenHeight = canvas.height();
        centerPoint = {
            x: screenWidth / 2, 
            y: screenHeight / 2
        };
    };    
    
    /* ///// Draw Grid //// */
    function drawGrid(){
        var height = canvas.height(),
                width = canvas.width(),
                w = width / gridX,
                h = height / gridY,
                i, temp;
            
            context.strokeStyle = "#333";
            for (var i=0; i<gridX-1; i++){
                temp = i * w + w;
                context.beginPath();
                context.moveTo(temp, 0);
                context.lineTo(temp, height);
                context.stroke();    
            }
            for (var i=0; i<gridY-1; i++){
                temp = i * h + h;
                context.beginPath();
                context.moveTo(0, temp);
                context.lineTo(width, temp);
                context.stroke();    
            }
    };

    /*  ///// Clear Screen ///// */
    function clr(){
        context.clearRect(0, 0, screenWidth, screenHeight);
    };    
        
    /* /////  Draw Image ///// */
    function drawImage(){
        var len = (sides.left.length - sides.top.length > 0) ? sides.left.length : sides.top.length;  
            for(var i=0; i<len; i++){
              if (sides.left[i]){
                context.fillStyle = "#"+sides.left[i].dhex;
                context.fillRect(sides.left[i].x, sides.left[i].y, 1,1);
              }
              if (sides.right[i]){
                context.fillStyle = "#"+sides.right[i].dhex;
                context.fillRect(sides.right[i].x, sides.right[i].y, 1,1);
              }  
              if (sides.top[i]){
                context.fillStyle = "#"+sides.top[i].dhex;
                context.fillRect(sides.top[i].x, sides.top[i].y, 1,1);
              }     
              if (sides.bottom[i]){
                context.fillStyle = "#"+sides.bottom[i].dhex;
                context.fillRect(sides.bottom[i].x, sides.bottom[i].y, 1,1);
              }
            }
    };
        
    /*  /////  Draw To Canvas   ///// */
    function drawToCanvas(){        
        clr();
        drawImage();
        if (needGrid)
            drawGrid();
    };
        
        /*	/////    WINDOW TO CANVAS	///// */
            wtc = function(canvas, x, y) {
                var bbox = canvas.getBoundingClientRect();
                return { x: x - bbox.left * (canvas.width / bbox.width),
                        y: y - bbox.top * (canvas.height / bbox.height)
                };
            };    

            canvas.on('touchmove mousemove', function(e){
                e.preventDefault(e); 
                loc = (e.type === 'mousemove') ? wtc(canvas[0],e.clientX,e.clientY) : wtc(canvas[0], e.originalEvent.touches[0].pageX, e.originalEvent.touches[0].pageY);  
               
            }).on('click', function(e){
               on = (on) ? false : true;
            });       
    };
    
    return Dro;
});