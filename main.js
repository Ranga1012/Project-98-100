var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function Start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){

    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;
    speak();

    if(Content =="take my selfie"){
        console.log("taking selfie ---");
        speak();
    
    }
}

Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
});
camera = document.getElementById("camera");

function take_snapshot(){

    console.log(img_id);

    Webcam.snap(function(data_uri){
        if(img_id=="selfie1"){
            document.getElementById("result1").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';
        }

        if(img_id=="selfie2"){
            document.getElementById("result2").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';
            }
        
        if(img_id=="selfie3"){
            document.getElementById("result3").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';
            }
    })
}

function speak(){
    var synth = window.speechSynthesis;

    Webcam.attach(camera);

    setTimeout(function(){

        img_id = "selfie1";
        take_snapshot();
        speak_data = "Taking your selfie in the next 5 seconds"
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        save();
    }, 5000);

    setTimeout(function(){

        img_id = "selfie2";
        take_snapshot();
        speak_data = "Taking your selfie in the next 5 seconds"
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        save();
    }, 5000);

    setTimeout(function(){

        img_id = "selfie3";
        take_snapshot();
        speak_data = "Taking your selfie in the next 5 seconds"
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        save();
    }, 5000);
}

function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src ;
    link.href = image;
    link.click();
}



