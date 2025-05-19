document.addEventListener("DOMContentLoaded", () => {
  const skills = ["Full Stack Web Developer", "MERN Stack", " DSA in Java"];
  const typewriter = document.getElementById("typewriter");
  let skillIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;
  let pauseAfterTyping = 1000;

  function typeEffect() {
    const currentSkill = skills[skillIndex];
    if (isDeleting) {
      typewriter.textContent = currentSkill.substring(0, charIndex--);
    } else {
      typewriter.textContent = currentSkill.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentSkill.length) {
      isDeleting = true;
      setTimeout(typeEffect, pauseAfterTyping);
      return;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      skillIndex = (skillIndex + 1) % skills.length;
    }
    setTimeout(typeEffect, isDeleting ? 50 : typingSpeed);
  }

  typeEffect();
});
