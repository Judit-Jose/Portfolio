(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();const i={name:"Judit Jose",role:"Java Backend Application Developer",summary:"Senior Java Backend Developer with over 5 years of experience specializing in building scalable backend systems and cloud architecture. Currently driving ETL optimization and data migration projects at Fulcrum Digital for Mastercard. Proven expertise in Microservices, Kafka, and Spring Boot, with a strong background in developing robust banking application frameworks at TCS and FIS. Adept at rapid problem-solving and delivering innovative automation solutions in agile environments.",contact:{email:"juditjose.pdve@gmail.com",phone:"+91-95-62-640-620",location:"Bangalore, India",linkedin:"https://www.linkedin.com/in/judit-jose"},experience:[{company:"Fulcrum Digital Pvt Ltd",logo:"fulcrum.png",role:"Senior Software Engineer Delivery",duration:"July 2025 Present",location:"Pune, India",highlights:["Working for client Mastercard in ETL process, migrating data from Oracle to Ozone.","Designing scalable data pipelines and ensuring data integrity during migration.","Collaborating with cross-functional teams to optimize ETL workflows."]},{company:"Tata Consultancy Services",logo:"tcs.png",role:"Developer II",duration:"Jan 2023 – July 2025",location:"Bangalore, India",highlights:["Designed and implemented several Kafka Spring Boot applications to fulfil client-requested features.","Actively contributed to low-level design suggestions, development, and maintenance of the application suite.","Developed and deployed multiple shell scripts for Linux software migration.","Facilitated Escrow Handover: Transferred source code and ensured functionality.","Addressed Numerous Minor and Major Bugs in existing spring boot applications.","Built a Taiko-based custom internal automation framework reducing manual testing requirements."]},{company:"Fidelity National Information Services (FIS)",logo:"fis.png",role:"Software Engineer",duration:"October 2020 – Jan 2023",location:"Bangalore, India",highlights:["Developed microservices for FIS Digital One Teller using Java and Spring Boot, enhancing transaction efficiency.","Played a pivotal role in migrating Struts-based applications to Spring Boot (FIS Modern Banking Platform).","Contributed to Internal Automation Framework Setup using Spring Boot and Selenium.","Led a 4-member team in FIS InnovateIN48 contests, creating prototypes with Spring Boot and Angular.","Provided middle layer support for a Banking Automation Project.","Integrated Agile/Scrum methodologies using JIRA, boosting productivity."]}],education:[{institution:"Christ University",degree:"Bachelor of Technology in Computer Science and Engineering",score:"7.5 CGPA",duration:"2016 – 2020",location:"Bangalore, India"},{institution:"Higher Secondary",degree:"Science & Mathematics",score:"78%",duration:"2014 – 2016",location:"Kerala, India"}],skills:{languages:["Java (8, 17)","SQL","PL/SQL","Shell Scripting"],frameworks:["Spring Boot","Microservices","Kafka","Hibernate","Angular","Taiko","Jakarta EE"],tools:["Git","Maven","Docker","Postman","JIRA","JUnit","Mockito","SVN"],web:["HTML5","CSS3","JSON","XML","REST APIs"],"soft skills":["Problem Solving","Agile / Scrum","System Design","Technical Leadership"]}};document.addEventListener("DOMContentLoaded",()=>{c(),l(),d(),u(),g(),p(),m()});function c(){const t=document.getElementById("hero");t.innerHTML=`
    <div class="container">
      <img src="/profile.png" alt="${i.name}" class="hero-profile-img">
      <h1 class="hero-name">Mechanical engineer focusing on robotic systems and semiconductors</h1>
      <h2 class="hero-subtitle">${i.role} at TCS. Currently designing scalable Spring Boot applications and managing Kafka streams.</h2>
      
      <div class="hero-buttons">
         <a href="#" class="cta-button">LinkedIn</a>
         <a href="#" class="cta-button secondary">Resume</a>
      </div>
    </div>
  `,t.innerHTML=`
    <div class="container">
      <img src="profile.jpg" alt="${i.name}" class="hero-profile-img">
      <h1 class="hero-name">${i.role} focusing on scalable backend systems and cloud architecture</h1>
      <p class="hero-subtitle">${i.summary}</p> 
      <div class="hero-buttons">
         <a href="${i.contact.linkedin}" class="cta-button">LinkedIn</a>
         <a href="#contact" class="cta-button secondary">Contact</a>
      </div>
    </div>
  `}function l(){const t=document.getElementById("about-content");t.innerHTML=`
    <div class="about-text">
      <p>${i.summary}</p>
    </div>
  `}function d(){const t=document.getElementById("experience-list");i.experience.forEach((e,o)=>{const a=document.createElement("div");a.className="job-card",a.style.animationDelay=`${o*100}ms`,a.innerHTML=`
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
        ${e.highlights.map(n=>`<li>${n}</li>`).join("")}
      </ul>
    `,t.appendChild(a)})}function u(){const t=document.getElementById("skills-grid");Object.entries(i.skills).forEach(([e,o])=>{const a=document.createElement("div");a.className="skill-category",a.innerHTML=`
      <h3 class="category-title">${h(e)}</h3>
      <div class="skill-tags">
        ${o.map(n=>`<span class="skill-tag">${n}</span>`).join("")}
      </div>
    `,t.appendChild(a)})}function g(){const t=document.getElementById("education-list");i.education.forEach(e=>{const o=document.createElement("div");o.className="edu-card",o.innerHTML=`
      <h3>${e.institution}</h3>
      <p class="edu-degree">${e.degree}</p>
      <p class="edu-meta">${e.duration} | ${e.location}</p>
      <p class="edu-score">${e.score}</p>
    `,t.appendChild(o)})}function p(){const t=document.getElementById("contact-content");t.innerHTML=`
        <h2 class="big-heading">Get In Touch</h2>
        <p>Although I'm currently not looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
        <a class="cta-button" href="mailto:${i.contact.email}">Say Hello</a>
        <div class="contact-links">
           <p>${i.contact.phone}</p>
           <p>${i.contact.location}</p>
        </div>
    `}function m(){const t=new IntersectionObserver(e=>{e.forEach(o=>{o.isIntersecting&&o.target.classList.add("visible")})},{threshold:.1});document.querySelectorAll(".section").forEach(e=>{e.classList.add("hidden"),t.observe(e)})}function h(t){return t.charAt(0).toUpperCase()+t.slice(1)}
