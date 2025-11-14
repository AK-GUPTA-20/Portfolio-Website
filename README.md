# 🌟 Akshat Gupta - Portfolio Website

A modern, responsive personal portfolio website showcasing skills, projects, and professional journey in Data Science and Backend Development.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📋 Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Sections Overview](#sections-overview)
- [Customization](#customization)
- [Contact Form Setup](#contact-form-setup)
- [Browser Support](#browser-support)
- [License](#license)
- [Contact](#contact)

## ✨ Features

### 🎨 Design & UI
- **Modern & Responsive Design** - Fully responsive across all devices (Desktop, Tablet, Mobile)
- **Smooth Animations** - ScrollReveal animations, typing effects, and floating elements
- **Interactive Components** - Card stack project showcase with Swiper.js
- **Glassmorphism Effects** - Modern UI design with backdrop blur
- **Dark Theme** - Eye-friendly dark color scheme with cyan accents

### 🚀 Functionality
- **Dynamic Navigation** - Active section highlighting on scroll
- **Hamburger Menu** - Mobile-friendly navigation
- **Smooth Scrolling** - Seamless navigation between sections
- **Progress Bars** - Animated skill proficiency indicators
- **Radial Charts** - Visual representation of professional skills
- **Contact Form Integration** - Powered by FormSubmit.co
- **Enhanced Thank You Page** - Beautiful confirmation page with animations

### 📱 Responsive Features
- Adaptive card sizing for projects (260px - 340px based on screen size)
- Mobile-optimized navigation
- Touch-friendly interface
- Optimized images and assets

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **HTML5** | Structure and semantic markup |
| **CSS3** | Styling, animations, and responsive design |
| **JavaScript (ES6)** | Interactive functionality and DOM manipulation |
| **Swiper.js** | Card stack carousel for projects |
| **Typed.js** | Typing animation effect |
| **ScrollReveal.js** | Scroll-based animations |
| **Boxicons** | Icon library |
| **Google Fonts (Poppins)** | Typography |
| **FormSubmit.co** | Contact form backend |

## 📁 Project Structure

```
portfolio/
│
├── index.html              # Main portfolio page
├── thankyou.html          # Form submission success page
├── style.css              # Main stylesheet
├── main.js                # JavaScript functionality
│
├── images/
│   └── About.png          # Profile image
│
└── README.md              # Documentation (this file)
```

## 📥 Installation

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime Text, etc.)
- Basic knowledge of HTML, CSS, and JavaScript

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/AK-GUPTA-20/portfolio.git
   cd portfolio
   ```

2. **Add your profile image**
   - Place your image in the `images/` folder
   - Name it `About.png` or update the image paths in `index.html`

3. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   # Or use a local server (recommended)
   
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   ```

4. **Visit** `http://localhost:8000` (or your configured port)

## 🎯 Usage

### Local Development
1. Make changes to HTML, CSS, or JS files
2. Refresh the browser to see updates
3. Use browser DevTools for debugging

### Deployment Options

#### **Netlify** (Recommended)
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

#### **GitHub Pages**
1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select branch and folder
4. Save and wait for deployment

#### **Vercel**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

## 📄 Sections Overview

| Section | Key Features |
|---------|--------------|
| **Home** | Dynamic typing effect, social links, CTA buttons, profile image |
| **About** | Personal introduction, educational background, career goals |
| **Journey** | Education & experience timeline with interactive cards |
| **Skills** | Backend, Python, Java, MERN stack with hover effects |
| **Proficiencies** | Technical progress bars (75-80%) & professional radial charts (75-90%) |
| **Projects** | 4 projects in Swiper carousel: Voting System, Traffic Management, GreenCart, MERN Form |
| **Contact** | Working form with email/phone, social media integration |
| **Thank You** | Animated success page with navigation & social links |

## 🎨 Customization

### Colors
Edit the CSS variables in `style.css`:
```css
/* Primary Colors */
--primary-color: #0ef;        /* Cyan */
--secondary-color: #00c6ff;   /* Light Blue */
--bg-dark: #081b29;           /* Dark Blue */
--bg-light: #112e42;          /* Medium Blue */
--text-light: #ededed;        /* Off White */
```

### Personal Information

#### **Update Profile Details** (index.html)
```html
<!-- Name -->
<h1>Your Name</h1>

<!-- Bio -->
<p>Your description here...</p>

<!-- Social Links -->
<a href="https://instagram.com/username">...</a>
<a href="https://linkedin.com/in/username">...</a>
```

#### **Update Projects** (index.html)
```html
<div class="swiper-slide">
  <div class="project-card">
    <img src="your-image-url" alt="Project Name" />
    <div class="layer">
      <h5>Project Title</h5>
      <p>Project description...</p>
      <a href="your-github-link">...</a>
    </div>
  </div>
</div>
```

#### **Update Skills** (index.html & style.css)
```css
/* Adjust progress bar widths */
.progress-line.your-skill span {
  width: 85%; /* Your proficiency level */
  background-color: #your-color;
}
```

### Typing Effect
Edit the strings in `main.js`:
```javascript
const typed = new Typed(".text", {
  strings: [
    "Your Role 1",
    "Your Role 2",
    "Your Role 3",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
```

## 📧 Contact Form Setup

The contact form uses **FormSubmit.co** - a free form backend service.

### Configuration Steps:

1. **Current Setup** (already configured in index.html)
   ```html
   <form action="https://formsubmit.co/guptaakshat7795@gmail.com" method="POST">
   ```

2. **Change Email Address**
   - Replace `guptaakshat7795@gmail.com` with your email
   - First submission will send a confirmation email
   - Click the link to activate

3. **Update Redirect URL**
   ```html
   <input type="hidden" name="_next" value="https://your-domain.com/thankyou.html" />
   ```

4. **Additional Features**
   - `_captcha: false` - Disables captcha
   - `_autoresponse` - Automatic reply to sender
   - `_template: table` - Email format

### Alternative Form Services:
- **Formspree** - formspree.io
- **Getform** - getform.io
- **Web3Forms** - web3forms.com

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | ✅ Latest |
| Firefox | ✅ Latest |
| Safari | ✅ Latest |
| Edge | ✅ Latest |
| Opera | ✅ Latest |
| Mobile Browsers | ✅ iOS Safari, Chrome Mobile |

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 Akshat Gupta

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

## 📞 Contact

**Akshat Gupta**

- 📧 Email: [guptaakshat7795@gmail.com](mailto:guptaakshat7795@gmail.com)
- 📱 Phone: [+91 9027278481](tel:+919027278481)
- 💼 LinkedIn: [akshat-gupta-243460280](https://www.linkedin.com/in/akshat-gupta-243460280)
- 🐱 GitHub: [@AK-GUPTA-20](https://github.com/AK-GUPTA-20)
- 📷 Instagram: [@itz_akshatgupta](https://www.instagram.com/itz_akshatgupta)

---

## 🙏 Acknowledgments

- **Swiper.js** - For the amazing carousel library
- **Typed.js** - For the typing animation
- **ScrollReveal.js** - For scroll animations
- **Boxicons** - For beautiful icons
- **FormSubmit.co** - For form handling
- **Google Fonts** - For Poppins font family

---

## 📊 Project Stats
[![GitHub stars](https://img.shields.io/github/stars/AK-GUPTA-20/Portfolio-Website?style=social)](https://github.com/AK-GUPTA-20/Portfolio-Website/stargazers)  
[![GitHub forks](https://img.shields.io/github/forks/AK-GUPTA-20/Portfolio-Website?style=social)](https://github.com/AK-GUPTA-20/Portfolio-Website/network)  
[![GitHub watchers](https://img.shields.io/github/watchers/AK-GUPTA-20/Portfolio-Website?style=social)](https://github.com/AK-GUPTA-20/Portfolio-Website/watchers)  

---

## 🎓 Learning Resources

If you want to learn how to build similar projects:

- [HTML & CSS Course](https://www.youtube.com/watch?v=mU6anWqZJcc) - FreeCodeCamp
- [JavaScript Tutorial](https://javascript.info/) - Modern JavaScript
- [Swiper.js Documentation](https://swiperjs.com/) - Official Docs
- [CSS Animations](https://animate.style/) - Animation Library

---

## 🔮 Future Enhancements

- [ ] Add blog section
- [ ] Implement dark/light theme toggle
- [ ] Add project filters
- [ ] Implement chat widget

---

## 📸 Screenshots

### Desktop View
<img width="1902" height="878" alt="image" src="https://github.com/user-attachments/assets/2e19384f-e56b-4f72-aba8-130de1d63df1" />



---

<div align="center">

### Made with ❤️ by Akshat Gupta

**⭐ Star this repo if you found it helpful!**

[Back to Top](#-akshat-gupta---portfolio-website)

</div>
