window.onload = function () {
    var playerCamara = document.getElementById('playerCamara');
    var playerDesktop = document.getElementById('playerDesktop');


    function getMeadiaStream() {
        const constraints = window.constraints = {
            audio: {
                channelCount: 1,
                sampleSize: 16,
            },
            video: {
                //width: { min: 640, ideal: 640 },
                //height: { min: 400, ideal: 400 },
                frameRate: { ideal: 3, max: 3 }
            }
        };
        //getUserMedia
        navigator.mediaDevices.getUserMedia(constraints)
            .then((stream) => {
                //1.自分のvideoElementを更新する
                if ("srcObject" in playerCamara) {
                    playerCamara.srcObject = stream;
                } else {
                    // Avoid ussing this in new browsers, as it is going away.
                    playerCamara.src = window.URL.createObjectURL(stream);
                }
                playerCamara.onloadedmetadata = function (e) {
                    playerCamara.play();
                };

            })
            .catch((e) => {
                console.log(e);
            });
    }

    function getDeskTop() {
        const constraints = window.constraints = {
            audio: {
                channelCount: 1,
                sampleSize: 16,
            },
            video: {
                //width: { min: 640, ideal: 640 },
                //height: { min: 400, ideal: 400 },
                frameRate: { ideal: 3, max: 3 }
            }
        };
        //getUserMedia
        navigator.mediaDevices.getDisplayMedia(constraints)
            .then((stream) => {
                //1.自分のvideoElementを更新する
                if ("srcObject" in playerDesktop) {
                    playerDesktop.srcObject = stream;
                } else {
                    // Avoid ussing this in new browsers, as it is going away.
                    playerDesktop.src = window.URL.createObjectURL(stream);
                }
                playerDesktop.onloadedmetadata = function (e) {
                    playerDesktop.play();
                };

            })
            .catch((e) => {
                console.log(e);
            });
    }

    document.getElementById("startC").onclick = function () {
        getMeadiaStream();
    };
    document.getElementById("stopC").onclick = function () {
        playerCamara.srcObject = null;
    };


    document.getElementById("startD").onclick = function () {
        getDeskTop();
    };
    document.getElementById("stopD").onclick = function () {
        playerDesktop.srcObject = null;
    };
}