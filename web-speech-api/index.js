const startRead = () => {
  const articleContent = document.getElementById('articleBody').textContent
  const synth = window.speechSynthesis
  const utterance = new SpeechSynthesisUtterance(articleContent)
  synth.speak(utterance)
}

document.getElementById('readButton').addEventListener('click', startRead)