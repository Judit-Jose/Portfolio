(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const o={name:"Judit Jose",role:"Java Backend Application Developer",summary:"Software Developer with 5+ years of experience in Java and Spring Boot. Proven track record of successfully contributing to the development of innovative solutions in fast-paced work environments. Skilled in Kafka, Microservices, and Automation.",contact:{email:"juditjose.pdve@gmail.com",phone:"+91-95-62-640-620",location:"Bangalore, India",linkedin:"#"},experience:[{company:"Fulcrum Digital Pvt Ltd",logo:"/fulcrum.png",role:"Senior Software Engineer Delivery",duration:"July 2025 Present",location:"Pune, India",highlights:["Working for client Mastercard in ETL process, migrating data from Oracle to Ozone.","Designing scalable data pipelines and ensuring data integrity during migration.","Collaborating with cross-functional teams to optimize ETL workflows."]},{company:"Tata Consultancy Services",logo:"/tcs.png",role:"Developer II",duration:"Jan 2023 – July 2025",location:"Bangalore, India",highlights:["Designed and implemented several Kafka Spring Boot applications to fulfil client-requested features.","Actively contributed to low-level design suggestions, development, and maintenance of the application suite.","Developed and deployed multiple shell scripts for Linux software migration.","Facilitated Escrow Handover: Transferred source code and ensured functionality.","Addressed Numerous Minor and Major Bugs in existing spring boot applications.","Built a Taiko-based custom internal automation framework reducing manual testing requirements."]},{company:"Fidelity National Information Services (FIS)",logo:"/fis.png",role:"Software Engineer",duration:"October 2020 – Jan 2023",location:"Bangalore, India",highlights:["Developed microservices for FIS Digital One Teller using Java and Spring Boot, enhancing transaction efficiency.","Played a pivotal role in migrating Struts-based applications to Spring Boot (FIS Modern Banking Platform).","Contributed to Internal Automation Framework Setup using Spring Boot and Selenium.","Led a 4-member team in FIS InnovateIN48 contests, creating prototypes with Spring Boot and Angular.","Provided middle layer support for a Banking Automation Project.","Integrated Agile/Scrum methodologies using JIRA, boosting productivity."]}],education:[{institution:"Christ University",degree:"Bachelor of Technology in Computer Science and Engineering",score:"7.5 CGPA",duration:"2016 – 2020",location:"Bangalore, India"},{institution:"Higher Secondary",degree:"Science & Mathematics",score:"78%",duration:"2014 – 2016",location:"Kerala, India"}],skills:{languages:["Core Java 8 & 17","SQL (MYSQL, Oracle)","Shell Scripting"],frameworks:["Spring Boot","Kafka","J2EE","Angular","Taiko","Hibernate"],tools:["Git","SVN","Maven","Docker","Postman","JUnit & Mockito","JIRA"],web:["HTML/CSS","JSON","XML","REST Web Services"],others:["Problem Solving","Creativity","Agile/Scrum","Linux/Solaris"]}};document.addEventListener("DOMContentLoaded",()=>{c(),l(),d(),u(),g(),m(),p()});function c(){const n=document.getElementById("hero");n.innerHTML=`
    <div class="container">
      <img src="/profile.png" alt="${o.name}" class="hero-profile-img">
      <h1 class="hero-name">Mechanical engineer focusing on robotic systems and semiconductors</h1>
      <h2 class="hero-subtitle">${o.role} at TCS. Currently designing scalable Spring Boot applications and managing Kafka streams.</h2>
      
      <div class="hero-buttons">
         <a href="#" class="cta-button">LinkedIn</a>
         <a href="#" class="cta-button secondary">Resume</a>
      </div>
    </div>
  `,n.innerHTML=`
    <div class="container">
      <img src="/profile.jpg" alt="${o.name}" class="hero-profile-img">
      <h1 class="hero-name">${o.role} focusing on scalable backend systems and cloud architecture</h1>
      <p class="hero-subtitle">${o.summary}</p> 
      <div class="hero-buttons">
         <a href="${o.contact.linkedin}" class="cta-button">LinkedIn</a>
         <a href="#contact" class="cta-button secondary">Contact</a>
      </div>
    </div>
  `}function l(){const n=document.getElementById("about-content");n.innerHTML=`
    <div class="about-text">
      <p>${o.summary}</p>
      <p>I enjoy creating things that live on the internet. My interest in web development started back in 2016 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
    </div>
  `}function d(){const n=document.getElementById("experience-list");o.experience.forEach((e,i)=>{const a=document.createElement("div");a.className="job-card",a.style.animationDelay=`${i*100}ms`,a.innerHTML=`
      <div class="job-header">
        <div class="job-company-row">
           ${e.logo?`<img src="${e.logo}" alt="${e.company} Logo" class="company-logo">`:""}
           <div>
              <h3 class="job-title">${e.role}</h3>
              <span class="company-at">@ ${e.company}</span>
           </div>
        </div>
        <p class="job-duration">${e.duration}</p>
      </div>
      <ul class="job-details">
        ${e.highlights.map(t=>`<li>${t}</li>`).join("")}
      </ul>
    `,n.appendChild(a)})}function u(){const n=document.getElementById("skills-grid");Object.entries(o.skills).forEach(([e,i])=>{const a=document.createElement("div");a.className="skill-category",a.innerHTML=`
      <h3 class="category-title">${h(e)}</h3>
      <div class="skill-tags">
        ${i.map(t=>`<span class="skill-tag">${t}</span>`).join("")}
      </div>
    `,n.appendChild(a)})}function g(){const n=document.getElementById("education-list");o.education.forEach(e=>{const i=document.createElement("div");i.className="edu-card",i.innerHTML=`
      <h3>${e.institution}</h3>
      <p class="edu-degree">${e.degree}</p>
      <p class="edu-meta">${e.duration} | ${e.location}</p>
      <p class="edu-score">${e.score}</p>
    `,n.appendChild(i)})}function m(){const n=document.getElementById("contact-content");n.innerHTML=`
        <h2 class="big-heading">Get In Touch</h2>
        <p>Although I'm currently not looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
        <a class="cta-button" href="mailto:${o.contact.email}">Say Hello</a>
        <div class="contact-links">
           <p>${o.contact.phone}</p>
           <p>${o.contact.location}</p>
        </div>
    `}function p(){const n=new IntersectionObserver(e=>{e.forEach(i=>{i.isIntersecting&&i.target.classList.add("visible")})},{threshold:.1});document.querySelectorAll(".section").forEach(e=>{e.classList.add("hidden"),n.observe(e)})}function h(n){return n.charAt(0).toUpperCase()+n.slice(1)}
