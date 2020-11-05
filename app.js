
            var numberOfFaces =5;
            function generateFaces(){
             theLeftSide = document.getElementById("leftside");
             theRightSide = document.getElementById("rightside");
             for(i=0;i<numberOfFaces;i++){
               var image = document.createElement('img');
               image.src= "Image/smiley.png";
               var random_image_left = Math.floor(Math.random() * 400);
               image.style.top = random_image_left + "px";
               var random_image_right = Math.floor(Math.random() * 400);
               image.style.left = random_image_right + "px";
               theLeftSide.appendChild(image);
             }
             var leftSideImages = theLeftSide.cloneNode(true);
             leftSideImages.removeChild(leftSideImages.lastChild);
             theRightSide.appendChild(leftSideImages);

             var theBody = document.getElementsByTagName("body")[0];

             theLeftSide.lastChild.onclick = function nextLevel(event){
                event.stopPropagation();
                numberOfFaces += 5;
                while(theLeftSide.firstChild)
                theLeftSide.removeChild(theLeftSide.firstChild);
                while(theRightSide.firstChild)
                theRightSide.removeChild(theRightSide.firstChild);
                generateFaces();
             };
            theBody.onclick = function gameOver(){
                alert("Game Over!");
                theBody.onclick = null;
                theLeftSide.lastChild.onclick = null;
                while(theLeftSide.firstChild)
                theLeftSide.removeChild(theLeftSide.firstChild);
                while(theRightSide.firstChild)
                theRightSide.removeChild(theRightSide.firstChild);
            }
    }
