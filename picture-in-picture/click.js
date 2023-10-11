const video = document.getElementById('myVideo')

const playPictureInPicture = () => {
  if (document.pictureInPictureElement === video) {
    document.exitPictureInPicture()
  } else {
    video.requestPictureInPicture()
  }
}

document.getElementById('toggle').addEventListener('click', () => {
  playPictureInPicture()
})
