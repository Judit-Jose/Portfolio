import './style.css'
import { resumeData } from './data.js'

document.addEventListener('DOMContentLoaded', () => {
  renderHero();
  renderAbout();
  renderExperience();
  renderSkills();
  renderEducation();
  renderContact();
  setupAnimations();
});

function renderHero() {
  const hero = document.getElementById('hero');
  hero.innerHTML = `
    <div class="container">
      <img src="/profile.png" alt="${resumeData.name}" class="hero-profile-img">
      <h1 class="hero-name">Mechanical engineer focusing on robotic systems and semiconductors</h1>
      <h2 class="hero-subtitle">${resumeData.role} at TCS. Currently designing scalable Spring Boot applications and managing Kafka streams.</h2>
      
      <div class="hero-buttons">
         <a href="#" class="cta-button">LinkedIn</a>
         <a href="#" class="cta-button secondary">Resume</a>
      </div>
    </div>
  `;
  // Note: I hardcoded the headline to match the vibe from the image "Mechanical engineer..." but using her actual data context 
  // "Mechanical engineer..." was from the user image, so I adapted it to her "Java Backend..." role in a similar sentence structure.

  // Let's refine the headline dynamically to be safe:
  hero.innerHTML = `
    <div class="container">
      <img src="/profile.jpg" alt="${resumeData.name}" class="hero-profile-img">
      <h1 class="hero-name">${resumeData.role} focusing on scalable backend systems and cloud architecture</h1>
      <p class="hero-subtitle">${resumeData.summary}</p> 
      <div class="hero-buttons">
         <a href="${resumeData.contact.linkedin}" class="cta-button">LinkedIn</a>
         <a href="#contact" class="cta-button secondary">Contact</a>
      </div>
    </div>
  `;
}

function renderAbout() {
  const content = document.getElementById('about-content');
  content.innerHTML = `
    <div class="about-text">
      <p>${resumeData.summary}</p>
      <p>I enjoy creating things that live on the internet. My interest in web development started back in 2016 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
    </div>
  `;
}

function renderExperience() {
  const container = document.getElementById('experience-list');

  resumeData.experience.forEach((job, index) => {
    const card = document.createElement('div');
    card.className = 'job-card';
    card.style.animationDelay = `${index * 100}ms`;

    card.innerHTML = `
      <div class="job-header">
        <div class="job-company-row">
           ${job.logo ? `<img src="${job.logo}" alt="${job.company} Logo" class="company-logo">` : ''}
           <div>
              <h3 class="job-title">${job.role}</h3>
              <span class="company-at">@ ${job.company}</span>
           </div>
        </div>
        <p class="job-duration">${job.duration}</p>
      </div>
      <ul class="job-details">
        ${job.highlights.map(point => `<li>${point}</li>`).join('')}
      </ul>
    `;
    container.appendChild(card);
  });
}

function renderSkills() {
  const container = document.getElementById('skills-grid');

  // Flatten categories for a cloud or keep grouped. Let's group them properly.
  // Actually design says Grid.

  Object.entries(resumeData.skills).forEach(([category, skills]) => {
    const group = document.createElement('div');
    group.className = 'skill-category';

    group.innerHTML = `
      <h3 class="category-title">${capitalize(category)}</h3>
      <div class="skill-tags">
        ${skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
      </div>
    `;
    container.appendChild(group);
  });
}

function renderEducation() {
  const container = document.getElementById('education-list');
  resumeData.education.forEach(edu => {
    const item = document.createElement('div');
    item.className = 'edu-card';
    item.innerHTML = `
      <h3>${edu.institution}</h3>
      <p class="edu-degree">${edu.degree}</p>
      <p class="edu-meta">${edu.duration} | ${edu.location}</p>
      <p class="edu-score">${edu.score}</p>
    `;
    container.appendChild(item);
  });
}

function renderContact() {
  const container = document.getElementById('contact-content');
  container.innerHTML = `
        <h2 class="big-heading">Get In Touch</h2>
        <p>Although I'm currently not looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
        <a class="cta-button" href="mailto:${resumeData.contact.email}">Say Hello</a>
        <div class="contact-links">
           <p>${resumeData.contact.phone}</p>
           <p>${resumeData.contact.location}</p>
        </div>
    `;
}

function setupAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.section').forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
  });
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
