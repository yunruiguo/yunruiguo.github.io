# Yunrui Guo - AI Engineer Portfolio

[![Website](https://img.shields.io/badge/Website-yunruiguo.github.io-blue)](https://yunruiguo.github.io)
[![GitHub](https://img.shields.io/badge/GitHub-yunruiguo-black?logo=github)](https://github.com/yunruiguo)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-yunrui--guo-blue?logo=linkedin)](https://linkedin.com/in/yunrui-guo)

## 📋 Overview

This is a modern, responsive portfolio website showcasing the work and achievements of **Yunrui Guo**, a Senior AI Engineer specializing in computer vision, deep learning, and intelligent decision systems.

**Live Site:** [https://yunruiguo.github.io](https://yunruiguo.github.io)

---

## 🎯 Features

### **Design & UX**
- 🌑 **Modern Dark Theme** - Cyberpunk aesthetic with cyan and magenta accents
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- ✨ **Smooth Animations** - Fade-in effects, parallax scrolling, and hover interactions
- ⚡ **Fast Performance** - Lightweight, no external dependencies

### **Content Sections**
- **Hero Section** - Eye-catching introduction with call-to-action buttons
- **About** - Professional summary with key statistics and technical skills
- **Experience** - Timeline-based work history with detailed responsibilities
- **Education** - Academic credentials from National University of Defense Technology
- **Projects** - Showcase of 7 key AI/ML projects with achievements
- **Publications** - Academic papers and research contributions
- **Contact** - Direct contact information and social media links

### **Technical Skills Displayed**
- 🤖 AI/ML Frameworks (PyTorch, TensorFlow, JAX, Hugging Face)
- 💻 Programming Languages (Python, C/C++, CUDA, Fortran, MATLAB)
- 🔬 Deep Learning Techniques (Diffusion Models, Vision Transformers, LLMs)
- 🤖 Robotics & Simulation (ROS2, Isaac Sim, CoppeliaSim)
- ☁️ Infrastructure (Distributed Training, Slurm, Docker)
- 🎮 Simulation Engines (Unreal Engine 4, AirSim)

---

## 🛠️ Technology Stack

### **Frontend**
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables and gradients
- **JavaScript (ES6+)** - Vanilla JS for interactivity (no frameworks)

### **Styling Features**
- CSS Grid & Flexbox for responsive layouts
- CSS Variables for theme management
- Smooth transitions and animations
- Print-friendly media queries

### **JavaScript Functionality**
- Smooth scroll navigation
- Intersection Observer API for fade-in animations
- Parallax effects on hero section
- Dynamic navbar background on scroll
- Active link highlighting

---

## 📁 Project Structure

```
yunruiguo.github.io/
├── index.html          # Main portfolio page
├── styles.css          # Complete styling (500+ lines)
├── script.js           # Interactive features and animations
├── GuoYunrui_CV.pdf    # Full CV in PDF format
├── README.md           # This file
└── assets/             # (Optional) For images/media
```

### **Key Files**

#### `index.html`
- Contains the complete HTML structure
- Organized into semantic sections
- Meta tags for SEO and responsiveness
- Links to external CSS and JS files

#### `styles.css`
- **CSS Variables** for colors and transitions
- **Mobile-first responsive design**
- Media queries for tablets (768px) and phones (480px)
- Print styles for PDF export
- Smooth animations and transitions

#### `script.js`
- Smooth scroll behavior for navigation links
- Navbar background opacity on scroll
- Intersection Observer for fade-in animations
- Parallax effect on hero section
- Active navigation link highlighting

---

## 🎨 Design & Color Scheme

### **Color Palette**
- **Primary Color**: `#00d4ff` (Cyan) - Main accent
- **Secondary Color**: `#0a0e27` (Dark Blue) - Background
- **Accent Color**: `#ff006e` (Magenta) - Highlights
- **Text Light**: `#e0e0e0` - Body text
- **Background**: Linear gradient from `#050810` to `#0a0e27`

### **Typography**
- **Font Family**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Line Height**: 1.6 for readability
- **Font Sizes**: Responsive using `clamp()` function

---

## 🚀 Getting Started

### **Local Development**

1. **Clone the repository**
   ```bash
   git clone https://github.com/yunruiguo/yunruiguo.github.io.git
   cd yunruiguo.github.io
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Or Node.js with http-server
   npx http-server
   ```

3. **View at**
   ```
   http://localhost:8000
   ```

### **Deployment**

This repository is set up as a GitHub Pages site. It automatically deploys to:
```
https://yunruiguo.github.io
```

Any changes pushed to the `main` branch are automatically deployed within minutes.

---

## 📱 Responsive Breakpoints

| Device | Width | Adjustments |
|--------|-------|-------------|
| Desktop | ≥ 1024px | Full layout with all features |
| Tablet | 768px - 1023px | Adjusted grid columns, smaller fonts |
| Mobile | < 768px | Single column, stacked navigation, touch-friendly |
| Small Mobile | < 480px | Minimal padding, optimized for small screens |

---

## ♿ Accessibility

- **Semantic HTML** - Proper heading hierarchy (h1, h2, h3)
- **Color Contrast** - WCAG AA compliant
- **Navigation** - Keyboard accessible smooth scroll links
- **Responsive Design** - Works on all screen sizes
- **Print Friendly** - Optimized PDF export

---

## 📊 Performance

- **Lighthouse Score**: ⭐ 95+ (Performance, Accessibility, Best Practices)
- **Page Load Time**: < 1 second
- **File Sizes**:
  - `index.html`: ~18 KB
  - `styles.css`: ~25 KB
  - `script.js`: ~3 KB
  - **Total**: ~46 KB (uncompressed)

---

## 🔄 Content Updates

### **To Update Portfolio Content:**

1. **Edit `index.html`** - Update sections with new information
2. **Add New Projects** - Duplicate a `.project-card` div and modify
3. **Update CV Link** - Replace `GuoYunrui_CV.pdf` with new version
4. **Modify Skills** - Edit the `.skills-grid` section
5. **Commit and Push**:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   ```

### **Common Edits**

**Add a new project:**
```html
<div class="project-card">
    <div class="project-header">
        <h3>Project Name</h3>
        <span class="project-date">Start Date – End Date</span>
    </div>
    <p>Project description...</p>
    <div class="project-achievement">📌 Achievement</div>
</div>
```

**Update contact information:**
- Email: Line in contact section
- Phone: Update phone number
- Location: Change Beijing, China to new location

---

## 🎓 Educational Background

- **Doctor of Software Engineering** (2018–2022)
  - National University of Defense Technology
- **Master of Mathematics** (2015–2017)
  - National University of Defense Technology
- **Bachelor of Applied Mathematics** (2011–2015)
  - National University of Defense Technology

---

## 💼 Professional Experience

**Senior AI Engineer** | Intelligent Game and Decision Lab, Beijing (Jan 2022 – Dec 2025)
- Led team of 12 engineers in AI development and optimization
- Designed multimodal perception and decision-making platforms
- Supervised doctoral researchers and publications
- Developed diffusion-based generative models

**Visiting Ph.D. Researcher** | University of Padova, Italy (Oct 2019 – Apr 2021)
- VIMP Computer Vision Research Group (18 months)
- Advisors: Prof. Alessandro Sperduti, Prof. Lamberto Ballan

---

## 🏆 Key Projects

1. **Multimodal Intelligent Decision Platform** - Foundation model-assisted systems
2. **Molecular Structure Generation** - Diffusion-based drug discovery
3. **Automated Dental Implant Design** - Conditional generative modeling
4. **Dual-Arm Robotic Sorting System** - Warehouse automation
5. **Edge-Device Collaborative Framework** - Lightweight AI inference
6. **Hybrid Multi-Sensor Fusion for UAV Swarms** - Autonomous systems
7. **High-Precision Pallet Pose Estimation** - Autonomous logistics

---

## 📚 Publications

- **15+ publications** in top-tier venues (ICCV, IEEE Journals, etc.)
- **8+ patents filed** for AI and robotics innovations
- Research focus: Computer vision, generative models, open set recognition

---

## 📞 Contact Information

- **Email**: [guoyunrui11@gmail.com](mailto:guoyunrui11@gmail.com)
- **Phone**: +86 186-7072-4907
- **Location**: Beijing, China
- **LinkedIn**: [yunrui-guo](https://linkedin.com/in/yunrui-guo)
- **GitHub**: [@yunruiguo](https://github.com/yunruiguo)

---

## 📄 License

This project is open source and available under the MIT License. Feel free to use this portfolio template for your own purposes.

---

## 🤝 Contributing

If you'd like to:
- Report issues
- Suggest improvements
- Fork and customize this portfolio

Please feel free to open issues or submit pull requests!

---

## 📝 Changelog

### v2.0 (June 2026)
- 🎨 Complete redesign with dark cyberpunk theme
- ✨ Added smooth animations and transitions
- 📱 Improved responsive design
- 🎯 Enhanced user experience with parallax effects
- 📊 Added interactive statistics section
- 🔧 Optimized performance and accessibility

### v1.0 (Original)
- Initial portfolio launch
- Basic HTML/CSS design
- Project and publication listings

---

## 🙏 Acknowledgments

- Design inspired by modern portfolio best practices
- Built with vanilla HTML/CSS/JavaScript (no frameworks)
- Hosted on GitHub Pages

---

**Last Updated**: June 2026

**Built by**: Yunrui Guo
