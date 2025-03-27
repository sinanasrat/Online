const videos = [
    {
        title: "Sample Video 1",
        hd: "https://mega.nz/embed/https://mega.nz/folder/7SZVSKZZ#mfZvix5tjnl20WVA_5JCvA/file/XGpCzLzA,
        sd: "https://mega.nz/https://mega.nz/folder/7SZVSKZZ#mfZvix5tjnl20WVA_5JCvA/file/SKRhEbTY
    },
    {
        title: "Sample Video 2",
        hd: "https://mega.nz/embed/YOUR_VIDEO_ID_2",
        sd: "https://mega.nz/embed/YOUR_VIDEO_ID_2_SD"
    }
];

function loadVideos() {
    const videoList = document.getElementById("videoList");
    videoList.innerHTML = "";

    videos.forEach((video, index) => {
        const videoContainer = document.createElement("div");
        videoContainer.classList.add("video-container");

        videoContainer.innerHTML = `
            <h2>${video.title}</h2>
            <select class="quality-selector" onchange="changeQuality(${index}, this.value)">
                <option value="hd">HD</option>
                <option value="sd">SD</option>
            </select>
            <iframe id="video-${index}" src="${video.hd}" frameborder="0" allowfullscreen></iframe>
        `;

        videoList.appendChild(videoContainer);
    });
}

function changeQuality(index, quality) {
    const videoFrame = document.getElementById(`video-${index}`);
    videoFrame.src = videos[index][quality];
}

function searchVideos() {
    const searchTerm = document.getElementById("search").value.toLowerCase();
    const videoList = document.getElementById("videoList");
    
    videoList.innerHTML = "";
    
    videos.forEach((video, index) => {
        if (video.title.toLowerCase().includes(searchTerm)) {
            const videoContainer = document.createElement("div");
            videoContainer.classList.add("video-container");

            videoContainer.innerHTML = `
                <h2>${video.title}</h2>
                <select class="quality-selector" onchange="changeQuality(${index}, this.value)">
                    <option value="hd">HD</option>
                    <option value="sd">SD</option>
                </select>
                <iframe id="video-${index}" src="${video.hd}" frameborder="0" allowfullscreen></iframe>
            `;

            videoList.appendChild(videoContainer);
        }
    });
}

loadVideos();
