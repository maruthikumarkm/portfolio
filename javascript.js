document.addEventListener("DOMContentLoaded", () => {
    // Realistic Rain Effect Generator
    // Ultra Realistic Rain Effect Generator
    function createRainDrops() {
      const heavyRain = document.getElementById("heavy-rain")
      const mediumRain = document.getElementById("medium-rain")
      const lightRain = document.getElementById("light-rain")
      const mistRain = document.getElementById("mist-rain")
      const splashContainer = document.getElementById("splash-container")
      const rippleContainer = document.getElementById("ripple-container")
  
      // Enhanced rain drop generation with physics
      function generateRainLayer(container, dropCount, className) {
        for (let i = 0; i < dropCount; i++) {
          const drop = document.createElement("div")
          drop.className = "rain-drop"
          drop.style.left = Math.random() * 100 + "%"
          drop.style.animationDelay = Math.random() * 3 + "s"
  
          // Add variation to drop sizes and speeds
          const sizeVariation = 0.8 + Math.random() * 0.4
          const speedVariation = 0.7 + Math.random() * 0.6
  
          if (className === "heavy") {
            drop.style.width = 2.5 * sizeVariation + "px"
            drop.style.height = 18 * sizeVariation + "px"
            drop.style.animationDuration = 0.4 * speedVariation + "s"
          } else if (className === "medium") {
            drop.style.width = 1.8 * sizeVariation + "px"
            drop.style.height = 14 * sizeVariation + "px"
            drop.style.animationDuration = 0.6 * speedVariation + "s"
          } else if (className === "light") {
            drop.style.width = 1.2 * sizeVariation + "px"
            drop.style.height = 10 * sizeVariation + "px"
            drop.style.animationDuration = 0.9 * speedVariation + "s"
          } else if (className === "mist") {
            drop.style.width = 0.8 * sizeVariation + "px"
            drop.style.height = 6 * sizeVariation + "px"
            drop.style.animationDuration = 1.5 * speedVariation + "s"
          }
  
          container.appendChild(drop)
        }
      }
  
      // Generate different layers of rain with more drops
      generateRainLayer(heavyRain, 200, "heavy") // Increased from 150
      generateRainLayer(mediumRain, 150, "medium") // Increased from 100
      generateRainLayer(lightRain, 100, "light") // Increased from 80
      generateRainLayer(mistRain, 80, "mist") // New mist layer
  
      // Enhanced splash effects
      function createSplash() {
        const splash = document.createElement("div")
        splash.className = "splash"
        splash.style.left = Math.random() * 100 + "%"
        splash.style.animationDelay = Math.random() * 0.3 + "s"
  
        // Add size variation to splashes
        const splashSize = 4 + Math.random() * 4
        splash.style.width = splashSize + "px"
        splash.style.height = splashSize + "px"
  
        splashContainer.appendChild(splash)
  
        setTimeout(() => {
          if (splash.parentNode) {
            splash.parentNode.removeChild(splash)
          }
        }, 800)
      }
  
      // Enhanced water ripples
      function createRipple() {
        const ripple = document.createElement("div")
        ripple.className = "water-ripple"
        ripple.style.left = Math.random() * 100 + "%"
        ripple.style.animationDelay = Math.random() * 0.5 + "s"
  
        rippleContainer.appendChild(ripple)
  
        setTimeout(() => {
          if (ripple.parentNode) {
            ripple.parentNode.removeChild(ripple)
          }
        }, 2000)
      }
  
      // Generate splashes and ripples more frequently
      setInterval(createSplash, 80) // More frequent splashes
      setInterval(createRipple, 300) // Add ripples
  
      // Enhanced wind effect with more realistic physics
      let windStrength = 0
      let windDirection = 1
      setInterval(() => {
        // Create more complex wind patterns
        const time = Date.now() / 3000
        windStrength = Math.sin(time) * 15 + Math.cos(time * 0.7) * 8
        windDirection = Math.sin(time * 0.3) > 0 ? 1 : -1
  
        // Apply wind to different stages of rain fall
        document.documentElement.style.setProperty("--wind-offset-1", windStrength * 0.3 * windDirection + "px")
        document.documentElement.style.setProperty("--wind-offset-2", windStrength * 0.6 * windDirection + "px")
        document.documentElement.style.setProperty("--wind-offset-3", windStrength * 0.8 * windDirection + "px")
        document.documentElement.style.setProperty("--wind-offset-4", windStrength * windDirection + "px")
      }, 100)
  
      // Add realistic rain intensity changes
      function adjustRainIntensity() {
        const hour = new Date().getHours()
        const minute = new Date().getMinutes()
        let intensity = "medium"
  
        // Create more dynamic intensity changes
        const timeBasedIntensity = Math.sin((hour * 60 + minute) / 180) * 0.5 + 0.5
  
        if (timeBasedIntensity > 0.7) {
          intensity = "heavy"
        } else if (timeBasedIntensity < 0.3) {
          intensity = "light"
        }
  
        document.body.setAttribute("data-rain-intensity", intensity)
  
        // Adjust rain opacity based on intensity
        const rainLayers = document.querySelectorAll(".rain-layer")
        rainLayers.forEach((layer) => {
          if (intensity === "heavy") {
            layer.style.opacity = "1"
          } else if (intensity === "medium") {
            layer.style.opacity = "0.8"
          } else {
            layer.style.opacity = "0.6"
          }
        })
      }
  
      // Update intensity every 30 seconds
      adjustRainIntensity()
      setInterval(adjustRainIntensity, 30000)
    }
  
    // Enhanced rain with wind effect
    function addWindEffect() {
      const style = document.createElement("style")
      style.textContent = `
      .rain-drop {
        transform: translateX(var(--wind-offset, 0px));
      }
    `
      document.head.appendChild(style)
    }
  
    // Initialize rain effect
    createRainDrops()
    addWindEffect()
  
    // Add rain intensity control based on time or user interaction
    function adjustRainIntensity() {
      const hour = new Date().getHours()
      let intensity = "medium"
  
      // More intense rain during evening/night hours
      if (hour >= 18 || hour <= 6) {
        intensity = "heavy"
      } else if (hour >= 12 && hour <= 15) {
        intensity = "light"
      }
  
      document.body.setAttribute("data-rain-intensity", intensity)
    }
  
    adjustRainIntensity()
  
    // Add realistic rain sound effect (optional - requires audio file)
    function playRainSound() {
      // Uncomment if you have a rain sound file
      // const rainAudio = new Audio('rain-sound.mp3');
      // rainAudio.loop = true;
      // rainAudio.volume = 0.1;
      // rainAudio.play().catch(e => console.log('Rain audio failed:', e));
    }
  
    // Add thunder sound with lightning (optional)
    function addThunderEffect() {
      const lightning = document.querySelector(".lightning")
      lightning.addEventListener("animationiteration", () => {
        // Uncomment if you have thunder sound file
        // const thunder = new Audio('thunder-sound.mp3');
        // thunder.volume = 0.2;
        // thunder.play().catch(e => console.log('Thunder audio failed:', e));
      })
    }
  
    // Initialize additional effects
    // playRainSound(); // Uncomment if you want sound
    addThunderEffect()
  
    // Modern Geometric Wireframe Background Generator
    function createGeometricBackground() {
      const trianglesContainer = document.getElementById("triangles-container")
  
      // Create geometric lines container
      const geometricLines = document.createElement("div")
      geometricLines.className = "geometric-lines"
      trianglesContainer.appendChild(geometricLines)
  
      // Create wireframe shapes
      const wireframeShapes = [
        { class: "wireframe-circle-1", element: "div" },
        { class: "wireframe-circle-2", element: "div" },
        { class: "wireframe-hexagon", element: "div" },
        { class: "wireframe-triangle", element: "div" },
        { class: "wireframe-square", element: "div" },
      ]
  
      wireframeShapes.forEach((shape) => {
        const element = document.createElement(shape.element)
        element.className = `wireframe-shape ${shape.class}`
        trianglesContainer.appendChild(element)
      })
  
      // Create connection lines
      const connectionLinesContainer = document.createElement("div")
      connectionLinesContainer.className = "connection-lines"
  
      for (let i = 1; i <= 3; i++) {
        const line = document.createElement("div")
        line.className = `connection-line connection-line-${i}`
        connectionLinesContainer.appendChild(line)
      }
  
      trianglesContainer.appendChild(connectionLinesContainer)
  
      // Create floating dots
      const floatingDotsContainer = document.createElement("div")
      floatingDotsContainer.className = "floating-dots"
  
      for (let i = 1; i <= 5; i++) {
        const dot = document.createElement("div")
        dot.className = `floating-dot floating-dot-${i}`
        floatingDotsContainer.appendChild(dot)
      }
  
      trianglesContainer.appendChild(floatingDotsContainer)
  
      // Add mouse interaction effect for wireframes
      document.addEventListener("mousemove", (e) => {
        const mouseX = e.clientX / window.innerWidth
        const mouseY = e.clientY / window.innerHeight
  
        const wireframes = document.querySelectorAll(".wireframe-shape")
        wireframes.forEach((wireframe, index) => {
          const speed = ((index % 3) + 1) * 0.02
          const x = (mouseX - 0.5) * 20 * speed
          const y = (mouseY - 0.5) * 20 * speed
  
          wireframe.style.transform += ` translate(${x}px, ${y}px)`
        })
  
        // Affect floating dots
        const dots = document.querySelectorAll(".floating-dot")
        dots.forEach((dot, index) => {
          const speed = ((index % 4) + 1) * 0.03
          const x = (mouseX - 0.5) * 15 * speed
          const y = (mouseY - 0.5) * 15 * speed
  
          dot.style.transform += ` translate(${x}px, ${y}px)`
        })
      })
  
      // Add scroll-based parallax effect
      window.addEventListener("scroll", () => {
        const scrolled = window.pageYOffset
        const wireframes = document.querySelectorAll(".wireframe-shape")
  
        wireframes.forEach((wireframe, index) => {
          const speed = ((index % 2) + 1) * 0.05
          const yPos = -(scrolled * speed)
          wireframe.style.transform += ` translateY(${yPos}px)`
        })
  
        // Parallax for geometric lines
        const lines = document.querySelector(".geometric-lines")
        if (lines) {
          const yPos = -(scrolled * 0.02)
          lines.style.transform = `translateY(${yPos}px)`
        }
      })
  
      // Dynamic opacity changes based on time
      function updateBackgroundIntensity() {
        const hour = new Date().getHours()
        let intensity = 1
  
        if (hour >= 6 && hour < 12) {
          // Morning - slightly brighter
          intensity = 1.2
        } else if (hour >= 12 && hour < 18) {
          // Afternoon - standard
          intensity = 1
        } else if (hour >= 18 && hour < 22) {
          // Evening - slightly dimmer
          intensity = 0.8
        } else {
          // Night - dimmer
          intensity = 0.6
        }
  
        const wireframes = document.querySelectorAll(".wireframe-shape")
        wireframes.forEach((wireframe) => {
          wireframe.style.opacity = Number.parseFloat(wireframe.style.opacity || 0.1) * intensity
        })
  
        const dots = document.querySelectorAll(".floating-dot")
        dots.forEach((dot) => {
          dot.style.opacity = Number.parseFloat(dot.style.opacity || 0.4) * intensity
        })
      }
  
      updateBackgroundIntensity()
      setInterval(updateBackgroundIntensity, 300000) // Update every 5 minutes
  
      // Add click interaction - create temporary geometric shapes
      document.addEventListener("click", (e) => {
        // Create temporary wireframe circle at click position
        const tempShape = document.createElement("div")
        tempShape.style.position = "fixed"
        tempShape.style.left = e.clientX - 25 + "px"
        tempShape.style.top = e.clientY - 25 + "px"
        tempShape.style.width = "50px"
        tempShape.style.height = "50px"
        tempShape.style.border = "2px solid rgba(65, 105, 225, 0.6)"
        tempShape.style.borderRadius = "50%"
        tempShape.style.background = "transparent"
        tempShape.style.pointerEvents = "none"
        tempShape.style.zIndex = "1000"
        tempShape.style.animation = "clickWireframeEffect 1s ease-out forwards"
  
        document.body.appendChild(tempShape)
  
        setTimeout(() => {
          tempShape.remove()
        }, 1000)
      })
    }
  
    // Initialize geometric background
    createGeometricBackground()
  
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav a")
    navLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault()
        const targetId = this.getAttribute("href")
        const targetSection = document.querySelector(targetId)
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      })
    })
  
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
  
          // Animate skill progress bars when skills section comes into view
          if (entry.target.id === "skills") {
            animateSkillBars()
          }
        }
      })
    }, observerOptions)
  
    // Observe all sections
    const sections = document.querySelectorAll("section")
    sections.forEach((section) => {
      observer.observe(section)
    })
  
    // Animate skill progress bars
    function animateSkillBars() {
      const progressBars = document.querySelectorAll(".skill-progress-bar")
      progressBars.forEach((bar) => {
        const width = bar.getAttribute("data-width")
        setTimeout(() => {
          bar.style.width = width + "%"
        }, 200)
      })
    }
  
    // Add click effect to buttons
    const buttons = document.querySelectorAll(".button, .project-btn, .connect-button")
    buttons.forEach((button) => {
      button.addEventListener("click", function (e) {
        // Create ripple effect
        const ripple = document.createElement("span")
        const rect = this.getBoundingClientRect()
        const size = Math.max(rect.width, rect.height)
        const x = e.clientX - rect.left - size / 2
        const y = e.clientY - rect.top - size / 2
  
        ripple.style.width = ripple.style.height = size + "px"
        ripple.style.left = x + "px"
        ripple.style.top = y + "px"
        ripple.classList.add("ripple")
  
        this.appendChild(ripple)
  
        setTimeout(() => {
          ripple.remove()
        }, 600)
      })
    })
  
    // Add typing effect to main title
    function typeWriter(element, text, speed = 100) {
      let i = 0
      element.innerHTML = ""
  
      function type() {
        if (i < text.length) {
          element.innerHTML += text.charAt(i)
          i++
          setTimeout(type, speed)
        }
      }
      type()
    }
  
    // Add loading animation
    window.addEventListener("load", () => {
      document.body.classList.add("loaded")
  
      // Add typing effect to the main title
      const mainTitle = document.querySelector(".header h1")
      if (mainTitle) {
        const originalText = mainTitle.textContent
        setTimeout(() => {
          typeWriter(mainTitle, originalText, 80)
        }, 500)
      }
    })
  
    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll(".skill-card, .project-card, .education-item, .social-link")
    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", function () {
        this.style.transform += " scale(1.02)"
      })
  
      element.addEventListener("mouseleave", function () {
        this.style.transform = this.style.transform.replace(" scale(1.02)", "")
      })
    })
  
    // Add dynamic background color change based on scroll position
    window.addEventListener("scroll", () => {
      const scrollPercent = window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)
      const hue = Math.floor(scrollPercent * 60) + 220 // Range from 220 to 280 (blue to purple)
  
      document.documentElement.style.setProperty("--dynamic-hue", hue)
    })
  
    // Add performance optimization for animations
    let ticking = false
  
    function updateAnimations() {
      ticking = false
    }
  
    window.addEventListener("scroll", () => {
      if (!ticking) {
        requestAnimationFrame(updateAnimations)
        ticking = true
      }
    })
  
    // Add keyboard navigation support
    document.addEventListener("keydown", (e) => {
      if (e.key === "Tab") {
        document.body.classList.add("keyboard-navigation")
      }
    })
  
    document.addEventListener("mousedown", () => {
      document.body.classList.remove("keyboard-navigation")
    })
  
    // Add contact form functionality
    const connectButton = document.querySelector(".connect-button")
    if (connectButton) {
      connectButton.addEventListener("click", () => {
        const contactSection = document.querySelector("#contact")
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" })
        }
      })
    }
  
    // Add project button functionality
    const projectButtons = document.querySelectorAll(".project-btn")
    projectButtons.forEach((button) => {
      button.addEventListener("click", function (e) {
        e.stopPropagation()
        const buttonText = this.textContent
  
        if (buttonText === "View Live") {
          console.log("Opening live project...")
          // window.open('your-project-url', '_blank');
        } else if (buttonText === "Source Code") {
          console.log("Opening source code...")
          // window.open('your-github-url', '_blank');
        }
      })
    })
  
    // Add triangle interaction on click
    document.addEventListener("click", (e) => {
      // Create temporary triangles at click position
      for (let i = 0; i < 3; i++) {
        const triangle = document.createElement("div")
        triangle.className = "triangle triangle-1"
        triangle.style.position = "fixed"
        triangle.style.left = e.clientX + "px"
        triangle.style.top = e.clientY + "px"
        triangle.style.pointerEvents = "none"
        triangle.style.zIndex = "1000"
        triangle.style.animation = "triangleClickEffect 1s ease-out forwards"
  
        document.body.appendChild(triangle)
  
        setTimeout(() => {
          triangle.remove()
        }, 1000)
      }
    })
  })
  
  // Add CSS for additional effects
  const style = document.createElement("style")
  style.textContent = `
      .ripple {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: scale(0);
          animation: ripple-animation 0.6s linear;
          pointer-events: none;
      }
      
      @keyframes ripple-animation {
          to {
              transform: scale(4);
              opacity: 0;
          }
      }
      
      @keyframes clickWireframeEffect {
          0% {
              transform: scale(0) rotate(0deg);
              opacity: 0.8;
          }
          50% {
              transform: scale(2) rotate(180deg);
              opacity: 0.4;
          }
          100% {
              transform: scale(4) rotate(360deg);
              opacity: 0;
          }
      }
      
      .keyboard-navigation *:focus {
          outline: 2px solid #4169e1;
          outline-offset: 2px;
      }
      
      body:not(.keyboard-navigation) *:focus {
          outline: none;
      }
      
      .loaded {
          animation: fadeIn 0.5s ease-in;
      }
      
      @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
      }
  `
  document.head.appendChild(style)
  