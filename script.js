const videos = [
  {
    title: "My First Video",
    sources: {
      "4K": "https://mega.nz/folder/7SZVSKZZ#mfZvix5tjnl20WVA_5JCvA/file/XGpCzLzA",
      "1080p": "https://mega.nz/folder/7SZVSKZZ#mfZvix5tjnl20WVA_5JCvA/file/XGpCzLzA",
      "720p": "https://mega.nz/folder/7SZVSKZZ#mfZvix5tjnl20WVA_5JCvA/file/XGpCzLzA"
    }
  },
  {
    title: "Another Video",
    sources: {
      "4K": "https://mega.nz/folder/7SZVSKZZ#mfZvix5tjnl20WVA_5JCvA/file/2PBFATbK",
      "1080p": "https://mega.nz/folder/7SZVSKZZ#mfZvix5tjnl20WVA_5JCvA/file/2PBFATbK",
      "720p": "https://mega.nz/folder/7SZVSKZZ#mfZvix5tjnl20WVA_5JCvA/file/2PBFATbK"
    }
  }
];

function displayVideos() {
  const videoContainer = document.getElementById("video-list");
  videoContainer.innerHTML = ""; // Clear previous videos

  videos.forEach(video => {
    const videoWrapper = document.createElement("div");

    const titleElement = document.createElement("h3");
    titleElement.innerText = video.title;

    // Video Element (Default to 1080p)
    const videoElement = document.createElement("iframe");
    videoElement.src = video.sources["1080p"]; // Default to 1080p
    videoElement.width = "640";
    videoElement.height = "360";
    videoElement.allow = "fullscreen";
    videoElement.setAttribute("id", `video-${video.title.replace(/\s+/g, '')}`);

    // Quality Dropdown
    const qualitySelect = document.createElement("select");
    Object.keys(video.sources).forEach(quality => {
      const option = document.createElement("option");
      option.value = video.sources[quality];
      option.textContent = quality;
      if (quality === "1080p") option.selected = true; // Set default to 1080p
      qualitySelect.appendChild(option);
    });

    // Change Video Source on Quality Change
    qualitySelect.addEventListener("change", function () {
      videoElement.src = this.value;
    });

    videoWrapper.appendChild(titleElement);
    videoWrapper.appendChild(videoElement);
    videoWrapper.appendChild(qualitySelect);

    videoContainer.appendChild(videoWrapper);
  });
}

displayVideos();
