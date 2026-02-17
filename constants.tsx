
import React from 'react';
import { Domain, DomainTheme, Project, Skill, Experience } from './types';

export const THEMES: Record<Domain, DomainTheme> = {
  [Domain.HOME]: {
    primary: 'from-slate-700 to-slate-900',
    secondary: 'bg-slate-100',
    accent: 'text-slate-800',
    bg: 'bg-white',
    text: 'text-slate-900',
    cardBg: 'bg-slate-50',
    icon: 'text-slate-700'
  },
  [Domain.AI]: {
    primary: 'from-blue-600 to-indigo-700',
    secondary: 'bg-indigo-50',
    accent: 'text-indigo-600',
    bg: 'bg-slate-950',
    text: 'text-slate-100',
    cardBg: 'bg-slate-900/50',
    icon: 'text-cyan-400'
  },
  [Domain.HUGGING_FACE]: {
    primary: 'from-orange-400 to-yellow-500',
    secondary: 'bg-orange-50',
    accent: 'text-orange-600',
    bg: 'bg-amber-50',
    text: 'text-amber-950',
    cardBg: 'bg-white',
    icon: 'text-orange-500'
  },
  [Domain.DATA_SCIENCE]: {
    primary: 'from-emerald-600 to-teal-700',
    secondary: 'bg-emerald-50',
    accent: 'text-emerald-700',
    bg: 'bg-zinc-50',
    text: 'text-zinc-900',
    cardBg: 'bg-white',
    icon: 'text-emerald-600'
  },
  [Domain.WEB3]: {
    primary: 'from-fuchsia-600 to-purple-700',
    secondary: 'bg-fuchsia-50',
    accent: 'text-fuchsia-600',
    bg: 'bg-slate-950',
    text: 'text-slate-100',
    cardBg: 'bg-slate-900/50',
    icon: 'text-fuchsia-400'
  },
  [Domain.VIDEO_EDITOR]: {
    primary: 'from-rose-600 to-indigo-900',
    secondary: 'bg-rose-50',
    accent: 'text-rose-600',
    bg: 'bg-slate-950',
    text: 'text-slate-100',
    cardBg: 'bg-slate-900/40',
    icon: 'text-rose-400'
  },
  [Domain.ALL_PROJECTS]: {
    primary: 'from-slate-800 to-black',
    secondary: 'bg-slate-800',
    accent: 'text-blue-400',
    bg: 'bg-slate-950',
    text: 'text-slate-100',
    cardBg: 'bg-slate-900/80',
    icon: 'text-slate-400'
  },
  [Domain.CONTACT]: {
    primary: 'from-slate-600 to-slate-800',
    secondary: 'bg-slate-50',
    accent: 'text-slate-700',
    bg: 'bg-white',
    text: 'text-slate-900',
    cardBg: 'bg-slate-50',
    icon: 'text-slate-600'
  },
  [Domain.SKILLS_PAGE]: {
    primary: 'from-violet-600 to-indigo-600',
    secondary: 'bg-violet-50',
    accent: 'text-violet-700',
    bg: 'bg-slate-50',
    text: 'text-slate-900',
    cardBg: 'bg-white',
    icon: 'text-violet-600'
  }
};

export const PROJECTS: Record<Domain, Project[]> = {
  [Domain.HOME]: [],
  [Domain.AI]: [
    {
      id: 'ai-devcost',
      title: 'DevcostAI',
      description: 'Intelligent project estimation tool leveraging Gemini 3 Pro and Gemini 2.5 Flash models to analyze technical documentation and architectural diagrams.',
      tags: ['Gemini 3 Pro', 'Costing', 'Next.js'],
      link: 'https://gitlab.com/saqib99/DevcostAI',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'ai-fitcheck',
      title: 'Fit Check',
      description: 'An interactive fashion modeling application where users try on clothing virtually via Google Gemini API.',
      tags: ['Gemini API', 'Fashion-AI', 'Vue'],
      link: 'https://gitlab.com/saqib99/Fit-Check',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'ai-airaware',
      title: 'AirAware',
      description: 'Saaf Hawa: Real-time air quality metrics and health recommendations specialized for Pakistan.',
      tags: ['Health-Tech', 'Real-time', 'Next.js'],
      link: 'https://gitlab.com/saqib99/AirAware-AI3',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'ai-edumind',
      title: 'EduMind',
      description: 'Adaptive learning platform utilizing Generative AI to provide personalized study experiences.',
      tags: ['EdTech', 'LLMs', 'Personalization'],
      link: 'https://gitlab.com/saqib99/EduMind',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'ai-yolo11',
      title: 'YOLO11 PPE Detection',
      description: 'Computer vision pipeline for detecting Personal Protective Equipment in workplaces.',
      tags: ['Computer Vision', 'YOLO11', 'Safety'],
      link: 'https://gitlab.com/saqib99/Yolo11_Custom_data',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'ai-navigator',
      title: 'AI Knowledge Navigator',
      description: 'Multi-agent system designed for task automation and resource discovery in software engineering.',
      tags: ['Multi-Agent', 'Automation', 'Python'],
      link: 'https://gitlab.com/saqib99/ai-knowledge-navigator',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'ai-marketing',
      title: 'Marketing Crew',
      description: 'Agentic marketing platform powered by CrewAI for automated market research and SEO creation.',
      tags: ['CrewAI', 'Automation', 'SEO'],
      link: 'https://gitlab.com/saqib99/marketing_crew',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'ai-hr',
      title: 'HR AI Agents',
      description: 'LangChain-powered resume screening and candidate ranking system utilizing Gemini models.',
      tags: ['LangChain', 'Gemini', 'HR-Tech'],
      link: 'https://gitlab.com/saqib99/hr_ai_agents',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800'
    }
  ],
  [Domain.HUGGING_FACE]: [
    {
      id: 'hf-effiswint',
      title: 'EffiSwinT',
      description: 'Efficient Deep Fake Detection using EfficientNet-Swin Transformer Hybrid Architecture.',
      tags: ['EfficientNet', 'Swin Transformer', 'Hybrid'],
      link: 'https://huggingface.co/Saqib772/EffiSwinT',
      image: 'https://images.unsplash.com/photo-1633412802994-5c058f151b66?auto=format&fit=crop&q=80&w=800',
      stats: [{ label: 'Backbone', value: 'B3' }, { label: 'Type', value: 'Hybrid' }]
    },
    {
      id: 'hf-cnn-vit',
      title: 'CNN_VIT_DeepFake',
      description: 'Ensemble-Based Deep Learning Architecture for Deepfake Detection achieving 94.87% accuracy.',
      tags: ['CNN', 'Vision Transformers', 'Ensemble'],
      link: 'https://huggingface.co/Saqib772/CNN_VIT_DeepFake',
      image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=800',
      stats: [{ label: 'Accuracy', value: '94.87%' }, { label: 'Models', value: 'Ensemble' }]
    },
    {
      id: 'hf-fashion-dataset',
      title: 'Fashion Dataset',
      description: 'Comprehensive dataset hosted on Hugging Face for fashion image analysis and generative research.',
      tags: ['Dataset', 'Vision', 'Fashion'],
      link: 'https://huggingface.co/datasets/Saqib772/fashion',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'hf-space-exoplanet',
      title: 'Exoplanet Detection Space',
      description: 'Interactive application for detecting potential exoplanets using advanced ML algorithms.',
      tags: ['Space', 'Astronomy', 'Gradio'],
      link: 'https://huggingface.co/spaces/Saqib772/Exoplanet_detection',
      image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'hf-space-astronomy',
      title: 'Astronomy Image Classification',
      description: 'Deep learning demo for classifying celestial objects and galactic phenomena with high precision.',
      tags: ['CV', 'Astronomy', 'PyTorch'],
      link: 'https://huggingface.co/spaces/Saqib772/Astronomy_image_classfication',
      image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'hf-space-crew',
      title: 'CrewAgents',
      description: 'Multi-agent system powered by CrewAI for automated technical content orchestration.',
      tags: ['Multi-Agent', 'LLMs', 'CrewAI'],
      link: 'https://huggingface.co/spaces/Saqib772/Blogs_Agent',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800'
    }
  ],
  [Domain.DATA_SCIENCE]: [
    {
      id: 'ds-real-estate',
      title: 'Real Estate Price Predictor',
      description: 'End-to-End machine learning project to predict median home values using regression modeling.',
      tags: ['Kaggle', 'ML', 'Regression'],
      link: 'https://www.kaggle.com/code/saqibiqbal2/real-estate-price-predictor',
      image: 'https://images.unsplash.com/photo-1582408921715-18e7806365c1?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'ds-cultural',
      title: 'Cultural Heritage Recommender',
      description: 'Specialized recommender system designed to curate cultural heritage experiences.',
      tags: ['Kaggle', 'RecSys', 'Analytics'],
      link: 'https://www.kaggle.com/writeups/saqibiqbal2/a-simple-recommender-system-for-cultural-heritage',
      image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'ds-mayan',
      title: 'Mayan Inscriptions',
      description: 'Quantitative study and data exploration of Mayan glyphs and historical inscriptions.',
      tags: ['Kaggle', 'History', 'NLP'],
      link: 'https://www.kaggle.com/code/saqibiqbal2/mayan-inscriptions',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'ds-ember',
      title: 'Ember Multiclass',
      description: 'Multi-class classification pipeline on the Ember dataset for advanced feature prioritization.',
      tags: ['Kaggle', 'Classification', 'ML'],
      link: 'https://www.kaggle.com/code/saqibiqbal2/ember-with-multiclass-classification',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'ds-vit-diabetic',
      title: 'Diabetic Retinopathy ViT',
      description: 'Using Vision Transformers to identify diabetic retinopathy in retinal scans with high sensitivity.',
      tags: ['Kaggle', 'ViT', 'Medical AI'],
      link: 'https://www.kaggle.com/code/saqibiqbal2/diabetic-retinopathy-vision-transformer-vit',
      image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'ds-cars',
      title: 'Cars Collection 2025',
      description: 'Machine learning and data analysis project for exploring and modeling the Cars Dataset.',
      tags: ['GitHub', 'EDA', 'Modeling'],
      link: 'https://github.com/orbimatrix/Cars-Collection-DS',
      image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=800'
    }
  ],
  [Domain.WEB3]: [
    {
      id: 'web3-trivia-main',
      title: 'Web3 Trivia',
      description: 'Trivia game fused with blockchain — players test knowledge, earn crypto/NFTs, and chat live.',
      tags: ['Web3', 'Gaming', 'Crypto'],
      link: 'https://www.web3trivia.com/',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'web3-card-rush',
      title: 'Card Rush',
      description: 'Skill-based card game platform where strategy meets rewards. Compete for tokens and NFTs.',
      tags: ['Solidity', 'Next.js', 'Gaming'],
      link: 'https://cardrush.vercel.app/',
      image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'web3-deauth',
      title: 'DeAuth - Decentralized Social',
      description: 'Decentralized social media app powered by Somnia chain and cutting-edge AI technology.',
      tags: ['Solidity', 'Social', 'AI'],
      link: 'https://deauth-theta.vercel.app/',
      image: 'https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'web3-dao',
      title: 'Socialfy DAO',
      description: 'DAO platform empowering communities to fund and govern social impact projects through blockchain.',
      tags: ['DAO', 'Governance', 'Impact'],
      link: 'https://dao-nu.vercel.app/',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'web3-farmer',
      title: 'Farmer Tycoon',
      description: 'Blockchain-based farming game that combines P2E mechanics with cutting-edge NFT tech.',
      tags: ['Blockchain', 'NFT', 'P2E'],
      link: 'https://farmertycoon.vercel.app/',
      image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'web3-token-lock',
      title: 'Token Lock App',
      description: 'Modern web application for managing token locking and claiming on BEP-20 chain.',
      tags: ['DeFi', 'Token Lock', 'Next.js'],
      link: 'https://usdtlocking.vercel.app/',
      image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800'
    }
  ],
  [Domain.VIDEO_EDITOR]: [
    {
      id: 'video-ak-gaming',
      title: 'AK Gaming',
      description: 'High-energy gaming content, walkthroughs, and highlight reels. Expertly edited for pacing and maximum engagement.',
      tags: ['YouTube', 'Gaming', 'Editing'],
      link: 'https://www.youtube.com/@Akgaming-games',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800',
      stats: [{ label: 'Genre', value: 'Gaming' }, { label: 'Role', value: 'Video Editor' }]
    },
    {
      id: 'video-one-minute-rumor',
      title: 'One Minute Rumor',
      description: 'Fast-paced story-driven content. Specializing in rapid storytelling, visual hooks, and concise narration for short-form retention.',
      tags: ['Storytelling', 'YouTube', 'Short-form'],
      link: 'https://www.youtube.com/@OneMinuteRumor',
      image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800',
      stats: [{ label: 'Genre', value: 'Storytelling' }, { label: 'Style', value: 'High Retention' }]
    },
    {
      id: 'video-towards-better',
      title: 'Towards Better Understanding',
      description: 'Educational and knowledge-based content. Clear visual explanations, motion graphics, and structured information delivery.',
      tags: ['Educational', 'Documentary', 'Knowledge'],
      link: 'https://www.youtube.com/@TowardsBetterUnderstanding',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800',
      stats: [{ label: 'Genre', value: 'Knowledge' }, { label: 'Impact', value: 'Educational' }]
    }
  ],
  [Domain.ALL_PROJECTS]: [], // Will be populated dynamically below
  [Domain.CONTACT]: [],
  [Domain.SKILLS_PAGE]: []
};

// Dynamic mapping from individual domain project lists for a comprehensive vault
PROJECTS[Domain.ALL_PROJECTS] = Object.values(Domain)
  .filter(d => d !== Domain.ALL_PROJECTS && d !== Domain.HOME)
  .flatMap(d => (PROJECTS[d as Domain] || []));

export const SKILLS: Record<Domain, Skill[]> = {
  [Domain.HOME]: [
    { name: 'System Architecture', level: 95 },
    { name: 'Technical Leadership', level: 92 },
    { name: 'Full Stack Development', level: 90 },
    { name: 'Cloud Engineering', level: 88 }
  ],
  [Domain.AI]: [
    { name: 'PyTorch / TensorFlow', level: 95 },
    { name: 'LLM Fine-tuning', level: 90 },
    { name: 'Computer Vision', level: 85 }
  ],
  [Domain.HUGGING_FACE]: [
    { name: 'Transformers Library', level: 98 },
    { name: 'Datasets Hub', level: 95 }
  ],
  [Domain.DATA_SCIENCE]: [
    { name: 'Statistical Modeling', level: 95 },
    { name: 'Python Analytics', level: 98 }
  ],
  [Domain.WEB3]: [
    { name: 'Solidity Smart Contracts', level: 92 },
    { name: 'EVM Architecture', level: 85 }
  ],
  [Domain.VIDEO_EDITOR]: [
    { name: 'Adobe Premiere Pro', level: 98 },
    { name: 'Adobe After Effects', level: 95 },
    { name: 'DaVinci Resolve', level: 92 },
    { name: 'YouTube Content Strategy', level: 90 }
  ],
  [Domain.ALL_PROJECTS]: [
    { name: 'Multi-stack Engineering', level: 98 },
    { name: 'Web3 & Blockchain', level: 95 },
    { name: 'Generative AI', level: 92 }
  ],
  [Domain.CONTACT]: [],
  [Domain.SKILLS_PAGE]: [
    // Languages
    { name: 'Python', level: 98, category: 'Languages' },
    { name: 'Java', level: 90, category: 'Languages' },
    { name: 'C++', level: 85, category: 'Languages' },
    { name: 'C#', level: 85, category: 'Languages' },
    { name: 'R', level: 80, category: 'Languages' },
    { name: 'Golang', level: 85, category: 'Languages' },
    { name: 'Rust', level: 80, category: 'Languages' },
    { name: 'Solidity', level: 90, category: 'Languages' },
    { name: 'SQL', level: 95, category: 'Languages' },
    { name: 'NoSQL', level: 92, category: 'Languages' },
    // AI/ML
    { name: 'RAG Pipelines', level: 95, category: 'AI/ML' },
    { name: 'Large Language Models', level: 95, category: 'AI/ML' },
    { name: 'LangChain', level: 95, category: 'AI/ML' },
    { name: 'TensorFlow', level: 90, category: 'AI/ML' },
    { name: 'PyTorch', level: 92, category: 'AI/ML' },
    { name: 'Scikit-learn', level: 90, category: 'AI/ML' },
    { name: 'Crew AI', level: 95, category: 'AI/ML' },
    { name: 'Keras', level: 88, category: 'AI/ML' },
    { name: 'Hugging Face', level: 98, category: 'AI/ML' },
    { name: 'Transformers', level: 95, category: 'AI/ML' },
    { name: 'LlamaIndex', level: 92, category: 'AI/ML' },
    { name: 'Agentic AI', level: 95, category: 'AI/ML' },
    { name: 'Azure ML', level: 88, category: 'AI/ML' },
    { name: 'MLflow', level: 85, category: 'AI/ML' },
    { name: 'Computer Vision', level: 85, category: 'AI/ML' },
    // Data & Analytics
    { name: 'NumPy', level: 95, category: 'Data & Analytics' },
    { name: 'Pandas', level: 98, category: 'Data & Analytics' },
    { name: 'Power BI', level: 85, category: 'Data & Analytics' },
    { name: 'Tableau', level: 80, category: 'Data & Analytics' },
    { name: 'Matplotlib', level: 90, category: 'Data & Analytics' },
    { name: 'Seaborn', level: 90, category: 'Data & Analytics' },
    { name: 'PySpark', level: 85, category: 'Data & Analytics' },
    { name: 'ETL Pipelines', level: 92, category: 'Data & Analytics' },
    { name: 'Vector Databases', level: 90, category: 'Data & Analytics' },
    { name: 'PostgreSQL', level: 90, category: 'Data & Analytics' },
    // Web & Backend
    { name: 'React', level: 95, category: 'Web & Backend' },
    { name: 'Node.js', level: 92, category: 'Web & Backend' },
    { name: 'Next.js', level: 95, category: 'Web & Backend' },
    { name: 'Express', level: 90, category: 'Web & Backend' },
    { name: 'Angular', level: 80, category: 'Web & Backend' },
    { name: 'Vite', level: 90, category: 'Web & Backend' },
    { name: 'Flask', level: 92, category: 'Web & Backend' },
    { name: 'Django', level: 88, category: 'Web & Backend' },
    { name: 'FastAPI', level: 95, category: 'Web & Backend' },
    // DevOps & Cloud
    { name: 'Azure', level: 90, category: 'DevOps & Cloud' },
    { name: 'GCP', level: 88, category: 'DevOps & Cloud' },
    { name: 'AWS', level: 85, category: 'DevOps & Cloud' },
    { name: 'Docker', level: 92, category: 'DevOps & Cloud' },
    { name: 'Kubernetes', level: 85, category: 'DevOps & Cloud' },
    { name: 'Git', level: 95, category: 'DevOps & Cloud' },
    { name: 'GitLab', level: 92, category: 'DevOps & Cloud' },
    { name: 'CI/CD', level: 90, category: 'DevOps & Cloud' }
  ]
};

export const EXPERIENCES: Experience[] = [
  {
    role: 'CHIEF EXECUTIVE OFFICER',
    company: 'ORBIMATRIX',
    period: '01/04/2024 – PRESENT',
    location: 'REMOTE, PAKISTAN',
    description: [
      'Architected Generative AI Platforms: Designed and launched a multi-tenant platform on Azure Kubernetes Service (AKS) and AWS EKS.',
      'Engineering Leadership: Led a cross-functional squad of 12 engineers, boosting sprint throughput by 10%.',
      'System Optimization: Managed high-traffic systems handling >150 queries per second with <250ms latency.',
      'MLOps Management: Implemented end-to-end ML lifecycle using Azure ML, reducing model drift by 35%.'
    ]
  },
  {
    role: 'SOFTWARE DEVELOPER',
    company: 'FREELANCE PLATFORMS',
    period: '10/09/2023 – PRESENT',
    location: 'REMOTE',
    description: [
      'Advanced Prompt Engineering: Optimized complex system prompts for GPT-4/Claude to improve output accuracy.',
      'Full Stack AI Development: Built React/Next.js frontends integrated with Python (FastAPI) backends.',
      'Blockchain Integration: Developed decentralized applications (dApps) and smart contracts for global clients.'
    ]
  },
  {
    role: 'AMBASSADOR',
    company: 'ZBYTE',
    period: '01/06/2024 – 01/11/2024',
    location: 'SAN FRANCISCO, UNITED STATES',
    description: [
      'Developed user-friendly dApps using SDKs and CLIs to demonstrate platform capabilities.',
      'Utilized low-code/no-code tools to accelerate blockchain development and reduce boilerplate code.',
      'Integrated DPlat tokens to power transactions and on-chain rewards.'
    ]
  },
  {
    role: 'CHIEF TECHNOLOGY OFFICER',
    company: 'NIBLS',
    period: '01/10/2023 – 01/04/2024',
    location: 'NEW YORK CITY, UNITED STATES',
    description: [
      'Defined technology vision for Smart Ball IoT, AI, and blockchain ecosystem in global sports leagues.',
      'Implemented Azure IoT Hub and AWS Greengrass for real-time edge data processing.',
      'Modernized legacy monolithic systems into microservices on GCP Cloud Run.',
      'Reduced compute costs by 28% through infrastructure optimization.'
    ]
  },
  {
    role: 'ARTIFICIAL INTELLIGENCE ENGINEER',
    company: 'CHURN',
    period: '01/11/2023 – 01/01/2024',
    location: 'NEW YORK CITY, UNITED STATES',
    description: [
      'Developed an AI model achieving 92% accuracy in detecting credit card fraud.',
      'Processed a dataset of 500,000+ fintech entries via APIs ensuring data integrity.',
      'Analyzed 100+ KPIs using Python and Power BI to present business insights.'
    ]
  },
  {
    role: 'BLOCKCHAIN DEVELOPER',
    company: 'VAURSE',
    period: '01/05/2023 – 01/08/2023',
    location: 'UNITED ARAB EMIRATES',
    description: [
      'Developed and audited 10+ smart contracts on BNB Chain, including KYC modules.',
      'Ensured high standards of compliance and security across decentralized protocols.',
      'Streamlined information retrieval by scraping data for 500+ job listings.'
    ]
  }
];
