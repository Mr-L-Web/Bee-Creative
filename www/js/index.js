/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready

document.addEventListener('deviceready', onDeviceReady, false);

// controller variable for the button functionality
var controller;


function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

    controller = new beeCreative();
    console.log(navigator.camera);

}
// Class containing the BeeCreative model
function beeCreative (){

    //Displays the home page
    function displayHome(){


    var w = document.getElementById("drawButtons");
    var x = document.getElementById("home");
    var y = document.getElementById("comic");
    var z = document.getElementById("life");
    var a = document.getElementById("graphics");
    var b = document.getElementById("saveShareButtons");
    var c = document.getElementById("redoButtons");
    var image = document.getElementById("imagePlaceHolder");
    var activities = document.getElementById("activities");
    var r = document.getElementById("refresh");


    w.style.display = "none";
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";
    a.style.display = "none";
    b.style.display = "none";
    image.style.display = "none";
    activities.style.display = "block";
    r.style.display = "none";
    c.style.display= "none";

    }


// Displays the activities for drawing comic characters.
    function displayComic() {

    var w = document.getElementById("drawButtons");
    var x = document.getElementById("comic");
    var y = document.getElementById("home");
    var z = document.getElementById("comicActivity");
    var r = document.getElementById("refresh");

    // Data for the activities. Unable to access API
    var characters = ["Your setting is a medieval tavern in a small village. Draw the first character you think of in this setting. Spend 5-15 mins",
    "Your setting is a local park with grass, benches and a river. Draw the first character you think of in this setting. Spend 5-15 mins",
    "Your setting is a busy office filled with desks and computers. Draw the first character you think of in this setting. Spend 5-15 mins",
    "Your setting is a Victorian marketplace selling all sorts of goods and services. Draw the first character you think of in this setting. Spend 5-15 mins",
    "Your setting is an alien planet with deserts, trees, and spaceships. Draw the first character you think of in this setting. Spend 5-15 mins"];

    w.style.display = "block";
    x.style.display = "block";
    y.style.display = "none";
    z.textContent = characters[Math.floor(Math.random() * characters.length)];
    r.style.display = "block";
    }

    //Displays activities for life drawing
    function displayLife() {

    var w = document.getElementById("drawButtons");
    var x = document.getElementById("life");
    var y = document.getElementById("home");
    var z = document.getElementById("lifeActivity");
    var r = document.getElementById("refresh");

    // Data for the activities. Unable to access API
    var life = ["Go to your kitchen and take out some cutlery and dishes (plates, bowls, glasses etc). Observe and draw one or more of these items. Spend 5-15 mins",
    "Gather some fruit and place them in a bowl. Observe and draw one or more of these items. Spend 5-15 mins",
    "Go to your nearest park and sit down on a bench. Observe and draw what you see. Spend 5 mins",
    "Go outside your front door and stand in front of your house while facing it. Observe and draw what you see. Spend 5-15 mins",
    "Go to your nearest cafe and (if possible) order one or more items (coffee, cake etc). Observe and draw one or more of these items (and enjoy them too). Spend 5-15 mins"];

    w.style.display = "block";
    x.style.display = "block";
    y.style.display = "none";
    z.textContent = life[Math.floor(Math.random() * life.length)];
    r.style.display = "block";
    }

    //Displays activities for Graphic design
    function displayGraphics() {

    var w = document.getElementById("drawButtons");
    var x = document.getElementById("graphics");
    var y = document.getElementById("home");
    var z = document.getElementById("graphicsActivity");
    var r = document.getElementById("refresh");
    var graphics = ["A new car insurance company, Car-Razy, is looking for a new logo. Design a logo for this company. Spend 5-15 mins",
    "A toy company wants to make a new robot toy with wings and missile launchers. Provide a design for this toy. Spend 5-15 mins",
    "A medieval themed funfair, Middle Zealand, is looking for a logo that includes swords, a shield, and a dragon. Design a logo for this fair. Spend 5-15 mins",
    "A headphone company, Dem Beats, wants to make a new pair of wireless headphones. Provide a design for these headphones. Spend 5-15 mins",
    "A watch company wants to a release a new watch product. Provide a design for this watch. Spend 5-15 mins"];


    w.style.display = "block";
    x.style.display = "block";
    y.style.display = "none";
    z.textContent = graphics[Math.floor(Math.random() * graphics.length)];
    r.style.display = "block";
    }



    //Controller functions

    this.home = function(){
        displayHome();
    };

    this.comic = function(){
        displayComic();
    };

    this.graphic = function(){
        displayGraphics();
    };

    this.life = function(){
        displayLife();
    };

    //Button to refresh the activity if the user wants to do a different one.
    this.refresh = function(){
        var c = document.getElementById("comic");
        var l = document.getElementById ("life");
        var g = document.getElementById("graphics");

        if(c.style.display == "block") {
            displayComic();
        }

        if(l.style.display == "block") {
            displayLife();
        }

        if(g.style.display == "block"){
            displayGraphics();
        }
    };


    //Cordova Camera plugin code. For taking pictures.
    this.photo = function () {
        var options = {correctOrientation: true};
        var saveButtons = document.getElementById("saveShareButtons");
        var drawButtons = document.getElementById("drawButtons");
        var redoButtons = document.getElementById("redoButtons");
        var image = document.getElementById("imagePlaceHolder");
        var activities = document.getElementById("activities");
        var r = document.getElementById("refresh");
        var permissions = cordova.plugins.permissions;
        function onSuccess(data) {
            console.log("Obtained picture data");
            var image = document.getElementById('image');
            image.src = data;

            // Show the image on the page
            image.style.display = "block";
        }

        function onError(error) {
            console.error("Error calling getPicture", error);
        }

        function rError() {
            console.warn('Camera permission is not turned on');
        }

        function rSuccess (status) {
            if (!status.checkPermission) rError();
            navigator.camera.getPicture(onSuccess, onError, options);
        }
        // Hide the image on the page
        image.style.display = "none";

        // Call the cordova-plugin-camera API
        permissions.requestPermission(permissions.CAMERA, rSuccess, rError);
        saveButtons.style.display = "block";
        drawButtons.style.display = "none";
        image.style.display = "block";
        activities.style.display = "none";
        r.style.display = "none";
        redoButtons.style.display= "block";
    };


    //Cordova sketch plugin code. For using a digital sketchpad
    this.sketch = function(){
        var options = {destinationType: navigator.sketch.DestinationType.FILE_URI};
        var saveButtons = document.getElementById("saveShareButtons");
        var drawButtons = document.getElementById("drawButtons");
        var redoButtons = document.getElementById("redoButtons");
        var image = document.getElementById("imagePlaceHolder");
        var activities = document.getElementById("activities");
        var r = document.getElementById("refresh");
        function onSuccess(data) {
          console.log("Obtained picture data");
            var image = document.getElementById('image');

            image.src = data;


            // Show the image on the page
            image.style.display = "block";
        }

        function onFail(error) {
            console.error("Error calling getSketch", error);
        }
        // Hide the image on the page
        image.style.display = "none";
        //Call the sketch API
        navigator.sketch.getSketch(onSuccess, onFail, options);
        saveButtons.style.display = "block";
        drawButtons.style.display = "none";
        image.style.display = "block";
        activities.style.display = "none";
        r.style.display = "none";
        redoButtons.style.display= "block";
    };

    //Cordova plugin for saving the drawing.
    this.save = function(){
        var nativeToJpeg = document.getElementById("image").src;

        function onSaveImageSuccess() {
            console.log('--------------success');
            window.alert("Your image has been saved to your gallery");
            }

        function onSaveImageError(error) {
            console.log('--------------error: ' + error);
        }

        window.cordova.plugins.imagesaver.saveImageToGallery(nativeToJpeg, onSaveImageSuccess, onSaveImageError);

    };
    //Cordova plugin for sharing the drawing.
    this.share = function(){
        var nativeToJpeg = document.getElementById("image").src;
        var options = {
            message: '#BeeCreativeApp',
            subject: 'BeeCreative',
            files:[nativeToJpeg],
            chooserTitle: 'Choose an app'};
        var onSuccess = function(result) {

            console.log("Share completed? " + result.completed); // On Android apps mostly return false even while it's true
            console.log("Shared to app: " + result.app); // On Android result.app since plugin version 5.4.0 this is no longer empty. On iOS it's empty when sharing is cancelled (result.completed=false)
        };

        var onError = function(msg) {
            console.log("Sharing failed with message: " + msg);
        };

        window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);

    };




}
