'use strict';

    const video = document.getElementById('video');
    const snap = document.getElementById("snap");
    const errorMsgElement = document.querySelector('span#errorMsg');
    
    const constraints = {
        audio: true,
        video: {
    
        
            width: 600, height: 350
        }
    };
    
    // Access webcam
    async function init() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia(constraints);
            handleSuccess(stream);
        } catch (e) {
            errorMsgElement.innerHTML = `navigator.getUserMedia error:${e.toString()}`;
        }
    }
    
    // Success
    function handleSuccess(stream) {
        window.stream = stream;
        video.srcObject = stream;
    }
    
    // Load init
    init();
    
    // Draw image
    var link = document.getElementById('link');
    var count=0;
    var bclick=document.getElementById('btn');
    snap.addEventListener("click", function() {
        count++;
        if(count==5)
            {  
                 
            snap.disabled=true;
                var button=document.createElement('button');
                button.innerText="Next";
                button.classList.add('btn');
                button.classList.add('btn-success');
                bclick.appendChild(button);
                
               
               button.onclick = function(){window.location.href = "next_to_photo.hbs";}
    
            }
            
       
           
        var canvas=document.createElement('canvas');
        canvas.classList.add('dynamic');
        document.getElementById('add').appendChild(canvas);
        var context = canvas.getContext('2d');
        context.drawImage(video,0, 0, 180, 110);
        link.setAttribute('download', 'gsn.png');
        link.setAttribute('href', canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));
        link.click();
    
        
    });
    




