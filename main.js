Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90,
})

var camera = document.getElementById("camera")

Webcam.attach(camera)

function take_snapshot(){
    Webcam.snap(function(data_urI){
    document.getElementById("result").innerHTML ='<img id="capture_image" src ="'+data_urI+'"/>'
    })
}

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/QaTIcT2LI/model.json",model_loaded)

function model_loaded(){
    console.log("model loaded")
}