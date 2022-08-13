function setup(){
    canvas = createCanvas(500,400);
    canvas.position(750,140);
    video = createCapture(VIDEO);
    video.size(500,500);
    video.position(100,90);
    PoseNet = ml5.poseNet(video,modelLoaded);
    PoseNet.on(`pose`,poses);
}

function modelLoaded(){
    console.log("poseNet installed")
}

function poses(results){
    if(results.length > 0){
        console.log(results);
    }
}