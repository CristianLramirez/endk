<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>ENDK</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,400,700,900" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="css/flipdown/flipdown.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    
    <link rel="stylesheet" href="assets/countup/jquery.countup.css" />
      <!-- 
    <script type="text/javascript" src="js/flipdown/flipdown.js"></script>
    <script type="text/javascript" src="js/main.js"></script>-->

  </head>
  <body>
    <div class="example">
        <!-- 
        <div class="styledimg">
        </div> -->
        <h1></h1>
        <img src="img/pinky_cerebro.png" alt="" class="imgPinky">
       
        <p class="texto">LLEVAMOS:</p>
        <div id="countdown2"></div>
          <!--  <div id="flipdown" class="flipdown"></div>-->
          <div class="box-text">
          <p id="" class="texto-b fancy">⏰ SIN QUE LOS GARROTEROS PIDAN DISCULPAS Y NOS DEN LAS FUENTES DE LAS CITAS</p>
          <div class="deconstructed">
          ENDK
          <div>ENDK</div>
          <div>ENDK</div>
          <div>ENDK</div>
          <div>ENDK </div>
        </div>
          </div>
        <div class="buttons">
          <a href="https://www.youtube.com/watch?v=w4_nLuC9CiY&ab_channel=EdgarPacheco-ENDK" class="button"><i class="fab fa-youtube" style='font-size:22px'></i> <span>YouTube</span></a>
          <audio id = "track" controls loop>
            <source src="assets/music/track1.mp3" type="audio/mpeg">
          </audio>
        </div>
    </div>

    <!-- JavaScript includes -->
    <script src="http://code.jquery.com/jquery-1.8.2.min.js"></script>
    <script src="assets/countup/jquery.countup.js"></script>
    <script src="assets/js/script.js"></script>
    <script type="text/javascript">
       window.onload = (event) => {
        $('#countdown2').countup({start: new Date("June 13, 2023 :00:00")});
        console.log("page is fully loaded");
      };
    </script> 
  </body>
</html>
