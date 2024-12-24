// Snowfall Effect
function createSnow() {
    const snowContainer = document.querySelector('.snow');
    for (let i = 0; i < 100; i++) {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.style.left = Math.random() * 100 + 'vw';
      snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
      snowflake.style.animationDelay = Math.random() * 5 + 's';
      snowflake.style.opacity = Math.random();
      snowContainer.appendChild(snowflake);
    }
  }
  
  // Snowflake Styling
  const style = document.createElement('style');
  style.innerHTML = `
    .snowflake {
      position: absolute;
      top: -10px;
      width: 5px;
      height: 5px;
      background: white;
      border-radius: 50%;
      box-shadow: 0 0 5px white;
      animation: fall linear infinite;
    }
    @keyframes fall {
      to {
        transform: translateY(500px);
      }
    }
  `;
  document.head.appendChild(style);
  
  // Generate Snowflakes
  document.addEventListener('DOMContentLoaded', createSnow);
