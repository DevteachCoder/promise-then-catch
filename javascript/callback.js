console.log("Start");

function loginUser(email, password, callback) {
    setTimeout(()=> {
        console.log("we gave new data"); 
       callback({userName: email});
    }, 2000)
}

function getUserVideos(email,callback) {
    setTimeout(() => {
        callback(["video1","video2","video3"])
    },2000)
}

function videoDetails(video,callback) {
    setTimeout(() => {
        callback("title of the video")
    },2000)
}

const user = loginUser("doniyor@gmail.com",12345, user => {
    console.log(user);
    getUserVideos(user.userName,video => {
        console.log(video);
        videoDetails(video[0],title => {
            console.log(title);
        })
    })
});
console.log(user);


console.log("Finish");
