noseX = 0;
noseY = 0;

function preload()
{
   mask = loadImage('https://i.postimg.cc/ZnS6zxJY/il-570x-N-2401652949-nl9q-removebg-preview.png');
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(mask, noseX - 43, noseY - 25, 100,100)
}

function modelLoaded(){
    console.log("Model Is Loaded");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

function take_snapshot(){
    save('myFilterImage.png');
}