/* //////     CONFIG    /////// */
require.config({
    urlArgs: "bust=" + (new Date()).getTime(),
    baseUrl: 'js/lib',
    paths: {
        'src': '../src'
    },
    enforceDefine: true
});

/* //////     MAIN    /////// */
define(["jquery", "src/ximg", "src/dro"], function($, ximg, Dro) {
    var canvasId, outlineId, dro, currSrc, grid = false;
        
    canvasId = 'canvas';
    currSrc = 'img/samples/07.jpg';
    
    dro = new Dro({
        canvasWrapper: 'wrapper',
        canvasId: canvasId
    });
    
    ximg.loadFile({
        src: currSrc, 
        width: dro.getWidth(),
        height: dro.getHeight(),
        callback: dro.load
    });   
    
    /* /////    Click to toggle Samples     ///// */
    $('.sample').on('click', function(){
        var e = $(this);
        $('.sample').removeClass('active');
        e.toggleClass('active');
        if (e.hasClass('active')){
            currSrc = 'img/samples/'+e.attr('id')+'.jpg';
            ximg.loadFile({ src: currSrc, width: dro.getWidth(),
                        height: dro.getHeight(), callback: dro.load               });
        }
    });
            
    /* /// Auto Resize  /// */
    $(window).resize(function(){
        dro.setScreen();
        ximg.loadFile({ src: currSrc, width: dro.getWidth(),
                        height: dro.getHeight(), callback: dro.load });
    });
    
    /* /// size left /// */
    $('#sizeLeft').on('mouseup touchend', function(e){
        ximg.loadFile({ src: currSrc, width: dro.getWidth(),
                        height: dro.getHeight(), callback: dro.load, valueLeft: this.value });
    });
    
    /* /// size left /// */
    $('#sizeRight').on('mouseup touchend', function(e){
        dro.setGridSize(parseInt(this.value));
        dro.reRender();
    });
    
    $('#leftControl input, #rightControl input').on('mouseup touchend', function(e){
        var config = {
            src: currSrc, width: dro.getWidth(),
            height: dro.getHeight(), callback: dro.load
        };
        config[this.id] = parseInt(this.value);
        ximg.loadFile(config);
    });
    
    /* /////  Custom  File   ///// */
    $('#btn-custom').on('click', function(){
        $('#file').click();
    });
    $('#file').change(function(){   
      var files = this.files,
          reader = new FileReader();
      reader.onload = function(e){
            currSrc = e.target.result;
            $('#custom').attr('src', currSrc);
            ximg.loadFile({ src: currSrc, width: dro.getWidth(),
                        height: dro.getHeight(), callback: dro.load });
        }   
        reader.readAsDataURL(this.files[0]);
    }); 
    
    $('#btn-grid').on('click', function(e){
        grid = (grid) ? false : true;
        dro.setGrid(grid);
        dro.reRender();
    });
    
    $('#saveImage').on('click', function(e){
        dro.presetImage();
        save();
        dro.reRender();
    });
    
    $('#saveGrid').on('click', function(e){
        dro.presetGrid();
        save();
        dro.reRender();
    });
    
    function save(){
        $.post("html/save.php", {
            data: $('#' + canvasId)[0].toDataURL("image/png")
        }, function (file) {
            window.location.href =  "html/download.php?path=" + file
        });
    }
});