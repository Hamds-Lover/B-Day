document.addEventListener("DOMContentLoaded", () => {
    // Create confetti effect
    const confettiContainer = document.querySelector(".confetti-container")
    const colors = ["#f2d74e", "#95c3de", "#ff9a9a", "#a9cf54", "#9e7eb9"]
  
    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement("div")
      confetti.className = "confetti"
      confetti.style.left = Math.random() * 100 + "vw"
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
      confetti.style.width = Math.random() * 10 + 5 + "px"
      confetti.style.height = Math.random() * 10 + 5 + "px"
      confetti.style.animationDuration = Math.random() * 3 + 2 + "s"
      confetti.style.animationDelay = Math.random() * 5 + "s"
      // Start confetti from random positions above the viewport
      confetti.style.top = Math.random() * 100 - 150 + "vh"
      confettiContainer.appendChild(confetti)
    }
  
    // Envelope functionality
    const giftIcon = document.getElementById("giftIcon")
    const envelopeContainer = document.getElementById("envelopeContainer")
    const envelope = document.querySelector(".envelope")
    const closeButton = document.getElementById("closeButton")
  
    giftIcon.addEventListener("click", () => {
      envelopeContainer.classList.add("show")
  
      // Open the envelope after a short delay
      setTimeout(() => {
        envelope.classList.add("open")
      }, 500)
    })
  
    closeButton.addEventListener("click", () => {
      envelope.classList.remove("open")
  
      // Hide the envelope container after the flap closes
      setTimeout(() => {
        envelopeContainer.classList.remove("show")
      }, 500)
    })
  })
  
  