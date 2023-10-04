const images = document.getElementsByTagName('img')

for (const image of images) {
  image.addEventListener('click', event => {
    const instrument = event.target.dataset.instrument
    const audio = new Audio(`./${instrument}.wav`)
    audio.play()
  })
}
