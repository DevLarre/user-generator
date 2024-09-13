import React, { useEffect } from 'react';
import './HackerEffect.css';

const HackerEffect = () => {
  useEffect(() => {

    let canvas = document.getElementById('hacker-canvas');
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.id = 'hacker-canvas';
    }

    const ctx = canvas.getContext('2d');
    const container = document.querySelector('.hacker-effect');

    if (!container.contains(canvas)) {
      container.appendChild(canvas);
    }

    const resizeCanvas = () => {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let columns = Math.floor(canvas.width / 20);
    let drops = Array(columns).fill(0);

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' +
                    '阿贝色德饿艾非阿嘎阿什伊柔塔卡艾力艾米艾尼哦佩克艾和艾丝特乌维大布柳希斯伊普苏伦贼' +
                    'ابتثجحخدذرزسشصضطظعغفقكلمنهوي';

    const fontSize = 20;
    ctx.font = `${fontSize}px monospace`;

    const neonColors = ['#39ff14', '#0ff'];

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < columns; i++) {
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
        ctx.fillRect(x, y, fontSize, fontSize);

        const char = letters[Math.floor(Math.random() * letters.length)];
        const colorIndex = Math.floor(Math.random() * neonColors.length);
        ctx.fillStyle = neonColors[colorIndex];
        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const intervalId = setInterval(draw, 60);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <div className="hacker-effect"></div>;
};

export default HackerEffect;