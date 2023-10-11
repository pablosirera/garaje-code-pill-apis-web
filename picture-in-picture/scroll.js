const video = document.getElementById('myVideo')
let pictureInPictureActivated = false

const playPictureInPicture = (isVisible = false) => {
  if (document.pictureInPictureEnabled && !video.disabledPictureInPicture && !isVisible && !pictureInPictureActivated) {
    video.requestPictureInPicture()
    pictureInPictureActivated = true
    return
  }
}

const isVideoVisible = () => {
  const rect = video.getBoundingClientRect()
  const windowHeight = window.innerHeight || document.documentElement.clientHeight

  return rect.top <= windowHeight && rect.bottom >= 0
}

document.addEventListener('scroll', () => {
  playPictureInPicture(isVideoVisible())
})