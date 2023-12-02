const watchnow = document.getElementById("watchnow");

function openvideowindow() {
    let videowindow = document.getElementById("videowindow");
    videowindow.classList.add("show");
}

watchnow.addEventListener("click", openvideowindow);



