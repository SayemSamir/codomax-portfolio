<div align="center">

  # 🚀 Modern Personal Portfolio & Showcase

  An ultra-modern, interactive, and responsive portfolio website built with glassmorphism design principles, dynamic lighting, 3D card tilt effects, and smooth scroll animations.

  [Live Demo](https://samir-personal-portfolio.netlify.app/) • [Report Bug](https://github.com/SayemSamir/MY-Portfolio/issues) • [Request Feature](https://github.com/SayemSamir/MY-Portfolio/issues)

  <br />

  <!-- Badges -->
  [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
  [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  [![Netlify Status](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://samir-porfolio-website.netlify.app/)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack & Dependencies](#-tech-stack--dependencies)
- [Project Architecture](#-project-architecture)
- [Live Demo & Previews](#-live-demo--previews)
- [Getting Started & Local Setup](#-getting-started--local-setup)
- [Deployment Guide](#-deployment-guide)
- [Customization Guide](#-customization-guide)
- [Performance & SEO Optimizations](#-performance--seo-optimizations)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact & Author](#-contact--author)

---

## 🌐 Overview

This repository houses the source code for the personal developer portfolio of **Gazi Sayem Uddin Samir**. Designed from the ground up to reflect modern frontend engineering standards, the website highlights academic achievements, technical skills, open-source projects, research interests, and professional internship experience.

The core design language leverages **Dark Glassmorphism**, combining frosted glass backgrounds, subtle dynamic neon gradients, dynamic ambient lighting blobs, and real-time cursor-based 3D card tilts.

---

## ✨ Key Features

### 🎨 Visual & UI/UX Excellence
* **Dark Glassmorphism System:** Translucent glass cards featuring CSS `backdrop-filter: blur(20px)` and multi-layered gradient borders.
* **Dynamic Ambient Lighting:** Animated glowing background orbs that shift position and scale smoothly over time.
* **Interactive 3D Tilt:** Integration with `vanilla-tilt.js` to render realistic 3D perspective shifts and reflection glares on card hover.
* **Smooth Scroll Animations:** Scroll-triggered element reveals powered by `AOS (Animate On Scroll)`.
* **Adaptive Navigation:** Floating, glass-styled top navigation menu that adapts smoothly across screen sizes.

### 💼 Portfolio Content Sections
* **Hero Section:** Clean intro banner with action buttons (Contact Me, Download Resume) and social links.
* **About & Focus:** Concise professional summary highlighting computer science coursework, focus areas (ML, C++, Web Development), and language proficiency.
* **Education Timeline:** Structural cards detailing academic history from secondary education to undergraduate studies.
* **Experience & Selection Letters:** Verified records of internship offers, work tenure, and professional development.
* **Projects Showcase:** Filterable/grid-based display of software applications with direct repository links and live demo links.
* **Skills Breakdown:** Categorized skill cards spanning programming languages, web tools, machine learning frameworks, and developer utilities.
* **Interactive Contact Form:** Clean user form with input field highlight styling and smooth focus transitions.

---

## 🛠️ Tech Stack & Dependencies

### **Core Technologies**
| Category | Technology | Usage |
| :--- | :--- | :--- |
| **Markup** | **HTML5** | Semantic web document layout and structural elements |
| **Styling** | **CSS3 / Tailwind CSS** | Custom property variables, glassmorphism FX, keyframes, utilities |
| **Scripting** | **JavaScript (ES6+)** | DOM interaction, tilt initialization, theme toggling, scroll handling |

### **External Libraries & CDN Services**
* 🎨 [**Font Awesome v6.4.0**](https://fontawesome.com/) — High-quality vector icons for navigation, tech tags, and contact links.
* ✨ [**AOS (Animate On Scroll)**](https://michalsnik.github.io/aos/) — Lightweight library for scroll animations.
* 📦 [**Vanilla-Tilt.js v1.8.0**](https://micku7zu.github.io/vanilla-tilt.js/) — Smooth 3D tilt effects with glare overlays.
* 🔤 [**Google Fonts**](https://fonts.google.com/) — *Outfit* (for high-impact headings) and *Plus Jakarta Sans* (for optimal body readability).

---

## 📂 Project Architecture

A clean, modular file structure ensures high maintainability and straightforward scalability:

```text
MY-Portfolio/
├── index.html              # Main HTML markup document
├── style.css               # Core CSS rules, variables, keyframe animations, glassmorphism
├── script.js               # Main JavaScript file handling UI events and library triggers
├── README.md               # Repository documentation and instructions
├── LICENSE                 # MIT License file
└── assets/                 # Static asset directory
    ├── images/             # Project screenshots, banners, and personal profile assets
    ├── docs/               # Downloadable PDF documents (e.g., Resume, Certificates)
    └── icons/              # Favicons and brand graphics
