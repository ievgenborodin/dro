<!DOCTYPE html>
<html>
<head>
  <title>dro</title>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> 
  <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
  <link rel="shortcut icon" href="css/tri.ico" />
  <link href="css/bootstrap.min.css" rel="stylesheet" />
  <link href="css/style.css" rel="stylesheet" />
  <script data-main="js/app" src="js/lib/require.js"></script>
</head>
<body>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-10 col-md-offset-1">
       
       <!-- //// header //// -->
        <div id="header" class="row">
          <div class="col-xs-12">
            <div >
              <h2 id="title">Dro</h2>
              <span id="description">will teach you to draw</span>
            </div>
          </div>  
        </div>
        
        <!-- //// main ///// -->
        <div id="main" class="row">
           
            <!-- /// left side /// -->
            <div class="col-xs-9">
               
                <!-- // menu // -->
                <div class="row" id="menu"> 
                    <div id="size-div" class="col-xs-5 col-sm-5 col-md-5 size">
                        <input type="range" id="sizeLeft" min="0" max="128" step="1" value="80"> 
                    </div>
                    <div class="col-xs-1 img-label" id="btn-grid">
                        <img class="img-responsive" src="img/_grid2.png">
                    </div>
                    <div id="size-div" class="col-xs-5 col-sm-5 col-md-5 size">
                        <input type="range" id="sizeRight" min="128" max="255" step="1" value="120"> 
                    </div>
                    <div class="clear"></div>
                </div>
                
                <!-- // wrapper-canvas // -->
                <div class="row">
                    <div class="col-xs-12" id="wrapper">
                      <canvas id="canvas">Canvas is not supported!</canvas>
                    </div>
                    <div class="img-label" id="btn-full">
                        <img class="img-responsive" src="img/_full.png">
                    </div>
                </div>
                
            </div>
            
            <!-- /// right side ///-->
            <div id="side-block" class="col-xs-3">
                    <div class="row">
                        <div class="col-xs-6 c-sample" id="div-custom">
                            <img id="custom" class="img-responsive" src="img/_blank.png">
                            <span id="btn-custom" class="btn-regular">custom</span>
                        </div>
                        <div class="col-xs-6 sample" id="01">
                            <img class="img-responsive" src="img/previews/01.jpg">
                        </div>
                        <div class="col-xs-6 sample" id="02">
                            <img  class="img-responsive" src="img/previews/02.jpg">
                        </div>
                        <div class="col-xs-6 sample" id="03">
                            <img class="img-responsive" src="img/previews/03.jpg">
                        </div>
                        <div class="col-xs-6 sample" id="04">
                            <img class="img-responsive" src="img/previews/04.jpg">
                        </div>
                        <div class="col-xs-6 sample" id="05">
                            <img class="img-responsive" src="img/previews/05.jpg">
                        </div>
                        <div class="col-xs-6 sample" id="06">
                            <img class="img-responsive" src="img/previews/06.jpg">
                        </div>
                        <div class="col-xs-6 sample" id="07">
                            <img class="img-responsive" src="img/previews/07.jpg">
                        </div>
                        <div class="col-xs-6 sample" id="08">
                            <img class="img-responsive" src="img/previews/08.jpg">
                        </div>
                        <div class="col-xs-6 sample" id="09">
                            <img class="img-responsive" src="img/previews/09.jpg">
                        </div>
                        <div class="col-xs-6 sample" id="10">
                            <img class="img-responsive" src="img/previews/10.jpg">
                        </div>
                        <div class="clear"></div>
                      <hr class="hr-clear">
                      <div class="col-xs-12">
                        <span class="btn-regular">save image</span>
                      </div>
                      <div class="col-xs-12">
                        <span class="btn-regular">save grid</span>
                      </div>
                </div>
            </div>
        </div>
        
        <div id="hid">
            <input type="file" id="file" accept="image/*">
        </div>
        
        <div class="clear"></div>
        
        <!-- /// controls ////-->
        <div class="row" id="controls">
            <div class="col-xs-5" id="leftControl">
               <label>left control:</label><br>
                red<input type="range" id="lr" min="0" max="128" step="1" value="80"> 
                green<input type="range" id="lg" min="0" max="128" step="1" value="80"> 
                blue<input type="range" id="lb" min="0" max="128" step="1" value="80"> 
                alpha<input type="range" id="la" min="0" max="128" step="1" value="130">
            </div>
            
            <div class="col-xs-5 col-xs-offset-1" id="rightControl">
                <label>right control:</label><br>
                red<input type="range" id="rr" min="128" max="255" step="1" value="100">
                green<input type="range" id="rg" min="128" max="255" step="1" value="100">
                blue<input type="range" id="rb" min="128" max="255" step="1" value="100">
                alpha<input type="range" id="ra" min="128" max="255" step="1" value="130">
            </div>
        </div>    
        
        <div class="clear"></div>
        
        <!-- //////  footer  ///// -->
        <div id="foot" class="row">
          <div class="col-xs-12">
            <p>* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est sapiente adipisci incidunt fugit voluptates ex veritatis nobis error, dicta, harum autem asperiores? Commodi quasi pariatur id, natus ipsa, vel praesentium doloribus inventore enim aliquid repudiandae quidem quam est saepe. Ducimus.</p>
            <p>* Porem dolor sit amet, consectetur.</p>
            <p>* Natus nisi alias blanditiis! Repellat mollitia, id obcaecati.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
