// src/utils/analytics.js

const isAnalyticsReady = () => {
    return typeof window !== "undefined" && typeof window.gtag === "function";
  };
  
  const track = (eventName, params = {}) => {
    if (!isAnalyticsReady()) return;
  
    window.gtag("event", eventName, params);
  };
  
  const analytics = {
    // Resume
    resume(location = "unknown") {
      track("resume_download", {
        location,
      });
    },
  
    // GitHub
    github(location = "unknown") {
      track("github_click", {
        location,
      });
    },
  
    // LinkedIn
    linkedin(location = "unknown") {
      track("linkedin_click", {
        location,
      });
    },
  
    // Email
    email(location = "unknown") {
      track("email_click", {
        location,
      });
    },
  
    // Contact Form
    contact() {
      track("contact_submit");
    },
  
    // Hero Button
    heroCTA() {
      track("hero_cta_click");
    },
  
    // Hire Me Button
    hireMe() {
      track("hire_me_click");
    },
  
    // Project Click
    project(projectName) {
      track("project_open", {
        project_name: projectName,
      });
    },
  
    // Social Links
    twitter() {
      track("twitter_click");
    },
  
    instagram() {
      track("instagram_click");
    },
  
    youtube() {
      track("youtube_click");
    },
  
    leetcode() {
      track("leetcode_click");
    },
  
    codeforces() {
      track("codeforces_click");
    },
  
    githubRepo(repoName) {
      track("github_repository_open", {
        repository: repoName,
      });
    },
  
    // Section Views
    viewSection(sectionName) {
      track("section_view", {
        section: sectionName,
      });
    },
  
    // Generic Event
    custom(eventName, params = {}) {
      track(eventName, params);
    },
  };
  
  export default analytics;