# Polymath Portfolio | Saqib

A production-ready, high-performance professional portfolio landing page designed to showcase expertise across multiple technical domains: **Artificial Intelligence**, **Hugging Face Open Source**, **Data Science & Research**, and **Web3 Development**.

## 🚀 Overview

This project features a dynamic, theme-swapping architecture that adapts the visual identity of the entire site based on the selected technical domain. It provides an intuitive user experience for exploring complex technical work, from deep learning models on Hugging Face to decentralized protocols in Web3.

## 🛠 Tech Stack

- **React 19**: Leveraging the latest features for a reactive and performant UI.
- **Tailwind CSS**: Contemporary utility-first styling for a sleek, responsive design.
- **TypeScript**: Ensuring type safety across domain configurations and project data.
- **Recharts**: Data visualization for research impact and performance metrics.
- **ESM Modules**: Modern browser-native module loading for optimal delivery.

## ✨ Key Features

- **Multi-Domain Theming**: 5 distinct visual identities (Home, AI, HF, Data Science, Web3) with smooth transitions.
- **Box Grid Parallax**: A modern, high-tech background effect for the main landing page.
- **Project Showcase**: Detailed cards for research papers, model weights (EffiSwinT, CNN_VIT), and interactive Spaces.
- **Interactive Experience Timeline**: A vertical chronological journey through professional leadership roles.
- **Skill Proficiency Visualization**: Gradient-based progress indicators for specialized toolsets.
- **Responsive Layout**: Mobile-first architecture that scales gracefully to tablet and desktop resolutions.

## 📂 Project Structure

- `App.tsx`: Main application logic and layout orchestration.
- `constants.tsx`: The "Source of Truth" for all portfolio content (Projects, Skills, Experiences).
- `types.ts`: TypeScript interfaces defining the data structures.
- `components/`: Modular UI units:
    - `ProjectCard.tsx`: Reusable project display with stats and tags.
    - `SkillItem.tsx`: Proficiency bars with domain-aware gradients.
    - `SectionHeader.tsx`: Consistent typography and decorative elements.
    - `DataViz.tsx`: Recharts-powered visualization for research impact.

## 🔧 Customization

To update the portfolio content, modify `constants.tsx`:

1.  **Add Projects**: Update the `PROJECTS` object with new objects in the appropriate domain array.
2.  **Update Experience**: Modify the `EXPERIENCES` array to reflect your latest career moves.
3.  **Adjust Skills**: Fine-tune proficiency levels in the `SKILLS` object.
4.  **Theming**: Tweak colors in the `THEMES` object to match your personal brand.

## 🌐 Deployment

The application is built to be served as a static site. Ensure all dependencies are resolved via the `importmap` in `index.html`.

---
*Built with ❤️ for the technical community.*
