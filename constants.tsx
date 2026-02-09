
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
  }
};

export const PROJECTS: Record<Domain, Project[]> = {
  [Domain.HOME]: [],
  [Domain.AI]: [
    {
      id: 'ai-1',
      title: 'Neural Architecture Explorer',
      description: 'Automated tool for visualizing and optimizing transformer layers for edge devices.',
      tags: ['PyTorch', 'ONNX', 'Python'],
      link: '#',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
      stats: [{ label: 'Speedup', value: '45%' }, { label: 'Params', value: '1.2M' }]
    },
    {
      id: 'ai-2',
      title: 'Vision GPT Integration',
      description: 'Multi-modal reasoning agent for real-time industrial defect detection.',
      tags: ['LLM', 'CV', 'LangChain'],
      link: '#',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
    }
  ],
  [Domain.HUGGING_FACE]: [
    {
      id: 'hf-effiswint',
      title: 'EffiSwinT',
      description: 'Efficient Deep Fake Detection using EfficientNet-Swin Transformer Hybrid Architecture. Combines EfficientNet-B3 and Swin Transformer for robust detection.',
      tags: ['EfficientNet', 'Swin Transformer', 'Hybrid Architecture'],
      link: 'https://huggingface.co/Saqib772/EffiSwinT',
      image: 'https://images.unsplash.com/photo-1633412802994-5c058f151b66?auto=format&fit=crop&q=80&w=800',
      stats: [{ label: 'Backbone', value: 'B3' }, { label: 'Type', value: 'Hybrid' }]
    },
    {
      id: 'hf-cnn-vit',
      title: 'CNN_VIT_DeepFake',
      description: 'Ensemble-Based Deep Learning Architecture for Deepfake Detection. System achieves 94.87% accuracy by leveraging three complementary architectures.',
      tags: ['CNN', 'Vision Transformers', 'Ensemble'],
      link: 'https://huggingface.co/Saqib772/CNN_VIT_DeepFake',
      image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=800',
      stats: [{ label: 'Accuracy', value: '94.87%' }, { label: 'Models', value: 'Ensemble' }]
    },
    {
      id: 'hf-fashion-dataset',
      title: 'Fashion Dataset',
      description: 'Comprehensive dataset hosted on Hugging Face for fashion image analysis, classification, and generative modeling research.',
      tags: ['Dataset', 'Computer Vision', 'Fashion'],
      link: 'https://huggingface.co/datasets/Saqib772/fashion',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=800',
      stats: [{ label: 'Format', value: 'Parquet' }, { label: 'Task', value: 'Classification' }]
    },
    {
      id: 'hf-space-exoplanet',
      title: 'Exoplanet Detection Space',
      description: 'Interactive application for detecting potential exoplanets from planetary data using advanced machine learning algorithms.',
      tags: ['Space', 'Astronomy', 'Gradio'],
      link: 'https://huggingface.co/spaces/Saqib772/Exoplanet_detection',
      image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&q=80&w=800',
      stats: [{ label: 'Domain', value: 'Astro-ML' }, { label: 'UI', value: 'Gradio' }]
    },
    {
      id: 'hf-space-astronomy',
      title: 'Astronomy Image Classification',
      description: 'Deep learning demo for classifying celestial objects and galactic phenomena with high precision.',
      tags: ['Computer Vision', 'Astronomy', 'PyTorch'],
      link: 'https://huggingface.co/spaces/Saqib772/Astronomy_image_classfication',
      image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=800',
      stats: [{ label: 'Modality', value: 'Vision' }, { label: 'Framework', value: 'HF Hub' }]
    },
    {
      id: 'hf-space-crew',
      title: 'CrewAgents',
      description: 'Multi-agent system powered by CrewAI for automated technical blog generation and content orchestration.',
      tags: ['Multi-Agent', 'LLMs', 'CrewAI'],
      link: 'https://huggingface.co/spaces/Saqib772/Blogs_Agent',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
      stats: [{ label: 'Agents', value: 'Autonomous' }, { label: 'Use-case', value: 'NLP' }]
    },
    {
      id: 'hf-space-deepfake',
      title: 'Deepfake Analysis Space',
      description: 'Real-time interactive dashboard for testing facial images against state-of-the-art deepfake detection models.',
      tags: ['Security', 'Deep Learning', 'Deepfake'],
      link: 'https://huggingface.co/spaces/Saqib772/deepfake',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
      stats: [{ label: 'Safety', value: 'Critical' }, { label: 'Model', value: 'EffiSwinT' }]
    }
  ],
  [Domain.DATA_SCIENCE]: [
    {
      id: 'ds-real-estate',
      title: 'Real Estate Price Predictor',
      description: 'An End-to-End machine learning project to predict median home values using exploratory data analysis and regression modeling.',
      tags: ['Kaggle', 'ML', 'Regression', 'EDA'],
      link: 'https://www.kaggle.com/code/saqibiqbal2/real-estate-price-predictor',
      image: 'https://images.unsplash.com/photo-1582408921715-18e7806365c1?auto=format&fit=crop&q=80&w=800',
      stats: [{ label: 'Platform', value: 'Kaggle' }, { label: 'Model', value: 'Regressor' }]
    },
    {
      id: 'ds-cultural-heritage',
      title: 'Cultural Heritage Recommender',
      description: 'A specialized recommender system designed to curate and suggest cultural heritage experiences based on user profiles.',
      tags: ['Kaggle', 'RecSys', 'Analytics'],
      link: 'https://www.kaggle.com/writeups/saqibiqbal2/a-simple-recommender-system-for-cultural-heritage',
      image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800',
      stats: [{ label: 'Type', value: 'Writeup' }, { label: 'Field', value: 'Heritage' }]
    },
    {
      id: 'ds-mayan',
      title: 'Mayan Inscriptions Analysis',
      description: 'Quantitative study and data exploration of Mayan glyphs and historical inscriptions.',
      tags: ['Kaggle', 'Analysis', 'History'],
      link: 'https://www.kaggle.com/code/saqibiqbal2/mayan-inscriptions',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800',
      stats: [{ label: 'Domain', value: 'Archaeology' }, { label: 'Method', value: 'NLP/Stats' }]
    },
    {
      id: 'ds-ember',
      title: 'Ember Multiclass Classification',
      description: 'Multi-class classification pipeline on the Ember dataset for advanced feature prioritization.',
      tags: ['Kaggle', 'Classification', 'ML'],
      link: 'https://www.kaggle.com/code/saqibiqbal2/ember-with-multiclass-classification',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
      stats: [{ label: 'Dataset', value: 'Ember' }, { label: 'Classes', value: 'Multi' }]
    },
    {
      id: 'ds-astronomy-kaggle',
      title: 'Astronomy Image Classification (Kaggle)',
      description: 'Kaggle implementation of astronomical object classification using deep convolutional neural networks.',
      tags: ['Kaggle', 'Computer Vision', 'Astronomy'],
      link: 'https://www.kaggle.com/code/saqibiqbal2/astronomy-image-classification',
      image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=800',
      stats: [{ label: 'Framework', value: 'PyTorch' }, { label: 'Data', value: 'Stars/Galaxies' }]
    },
    {
      id: 'ds-effiswint-kaggle',
      title: 'EffiSwinT Deepfake Detection (Kaggle)',
      description: 'Full training and evaluation pipeline for the EffiSwinT architecture on Kaggle environment.',
      tags: ['Kaggle', 'Deep Learning', 'Deepfake'],
      link: 'https://www.kaggle.com/code/saqibiqbal2/effiswint-deepfake-detection',
      image: 'https://images.unsplash.com/photo-1633412802994-5c058f151b66?auto=format&fit=crop&q=80&w=800',
      stats: [{ label: 'Model', value: 'Hybrid' }, { label: 'Efficiency', value: 'High' }]
    },
    {
      id: 'ds-diabetic',
      title: 'Diabetic Retinopathy ViT',
      description: 'Using Vision Transformers (ViT) to identify diabetic retinopathy in retinal scans with high sensitivity.',
      tags: ['Kaggle', 'ViT', 'Medical AI'],
      link: 'https://www.kaggle.com/code/saqibiqbal2/diabetic-retinopathy-vision-transformer-vit',
      image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=800',
      stats: [{ label: 'Domain', value: 'Healthcare' }, { label: 'Architecture', value: 'ViT' }]
    },
    {
      id: 'ds-disease',
      title: 'Disease Prediction Engine',
      description: 'A predictive modeling project aimed at diagnosing various health conditions from patient symptoms data.',
      tags: ['Kaggle', 'Predictive', 'Healthcare'],
      link: 'https://www.kaggle.com/code/saqibiqbal2/disease-prediction',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
      stats: [{ label: 'Target', value: 'Diagnosis' }, { label: 'Accuracy', value: '95%+' }]
    },
    {
      id: 'ds-cars',
      title: 'Cars Collection DS 2025',
      description: 'A machine learning and data analysis project for exploring, processing, and modeling the Cars Dataset 2025.',
      tags: ['GitHub', 'EDA', 'Modeling'],
      link: 'https://github.com/orbimatrix/Cars-Collection-DS',
      image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=800',
      stats: [{ label: 'Year', value: '2025' }, { label: 'Repo', value: 'GitHub' }]
    }
  ],
  [Domain.WEB3]: [
    {
      id: 'web3-trivia',
      title: 'Web3 Trivia',
      description: 'A one-stop hub bringing together people of all ages eager to explore the future of gaming and earning via online crypto games.',
      tags: ['Web3', 'Gaming', 'Crypto'],
      link: 'https://web3trivia.com',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800',
      stats: [{ label: 'Platform', value: 'web3trivia.com' }, { label: 'Users', value: 'Global' }]
    },
    {
      id: 'web3-farmer',
      title: 'Farmer Tycoon',
      description: 'A revolutionary blockchain-based farming game that combines traditional farming mechanics with cutting-edge NFT technology and blockchain integration.',
      tags: ['Blockchain', 'NFT', 'P2E'],
      link: 'https://github.com/orbimatrix/farmertycoon',
      image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800',
      stats: [{ label: 'Technology', value: 'NFT/Chain' }, { label: 'Status', value: 'Open Source' }]
    },
    {
      id: 'web3-genesis',
      title: 'Genesis NFT TCG',
      description: 'Callers of the Current is a cutting-edge NFT trading card game built on Solana. Features a unique booster system powered by Chainlink VRF.',
      tags: ['Solana', 'Chainlink VRF', 'TCG'],
      link: 'https://github.com/orbimatrix/SolanaNFT',
      image: 'https://images.unsplash.com/photo-1635322966219-b75ed372eb3c?auto=format&fit=crop&q=80&w=800',
      stats: [{ label: 'Network', value: 'Solana' }, { label: 'Oracle', value: 'Chainlink' }]
    },
    {
      id: 'web3-deauth',
      title: 'DeAuth - Decentralized Social',
      description: 'Groundbreaking social platform designed to revolutionize interactions with deep fake integration, chatbot assistance, and privacy priority.',
      tags: ['Decentralized', 'Social Media', 'AI'],
      link: 'https://gitlab.com/saqib99/social-dapp',
      image: 'https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?auto=format&fit=crop&q=80&w=800',
      stats: [{ label: 'Type', value: 'Social dApp' }, { label: 'Security', value: 'Privacy-First' }]
    },
    {
      id: 'web3-solana-gen',
      title: 'Solana Code Generator',
      description: 'A powerful AI-powered tool for generating Solana smart contract code and tests using Google\'s Gemini AI.',
      tags: ['Solana', 'AI', 'Rust', 'GenAI'],
      link: 'https://gitlab.com/saqib99/rust_ai',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
      stats: [{ label: 'Core', value: 'Gemini AI' }, { label: 'Language', value: 'Rust' }]
    },
    {
      id: 'web3-solidity-forge',
      title: 'SolidityForge AI',
      description: 'A powerful AI-powered platform for generating, optimizing, and testing Solidity smart contracts with ease.',
      tags: ['Solidity', 'AI', 'Smart Contracts'],
      link: 'https://gitlab.com/saqib99/solidityforge',
      image: 'https://images.unsplash.com/photo-1621504450181-5d356f63d3ee?auto=format&fit=crop&q=80&w=800',
      stats: [{ label: 'Platform', value: 'Forge AI' }, { label: 'EVM', value: 'Solidity' }]
    },
    {
      id: 'web3-socialfy',
      title: 'Socialfy DAO',
      description: 'Decentralized autonomous organization platform that empowers communities to fund and govern social impact projects through blockchain.',
      tags: ['DAO', 'Governance', 'Impact'],
      link: 'https://gitlab.com/saqib99/dao',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800',
      stats: [{ label: 'Concept', value: 'DAO' }, { label: 'Mission', value: 'Governance' }]
    },
    {
      id: 'web3-token-lock',
      title: 'Token Lock App',
      description: 'A modern web application for managing token locking and claiming on the blockchain. Built with Next.js and thirdweb.',
      tags: ['DeFi', 'Token Lock', 'Next.js'],
      link: 'https://gitlab.com/saqib99/usdt_bep_20_locking',
      image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800',
      stats: [{ label: 'Protocol', value: 'BEP-20' }, { label: 'Frontend', value: 'Next.js' }]
    }
  ]
};

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
    { name: 'Computer Vision', level: 85 },
    { name: 'Model Optimization', level: 80 },
    { name: 'Reinforcement Learning', level: 75 },
  ],
  [Domain.HUGGING_FACE]: [
    { name: 'Transformers Library', level: 98 },
    { name: 'Datasets & Hub Management', level: 95 },
    { name: 'Gradio / Streamlit', level: 90 },
    { name: 'PEFT / Diffusers', level: 88 },
    { name: 'Community Leadership', level: 85 },
  ],
  [Domain.DATA_SCIENCE]: [
    { name: 'Statistical Modeling', level: 95 },
    { name: 'Python (Pandas/NumPy)', level: 98 },
    { name: 'R / MATLAB', level: 80 },
    { name: 'Data Visualization', level: 92 },
    { name: 'SQL / BigQuery', level: 88 },
  ],
  [Domain.WEB3]: [
    { name: 'Solidity Smart Contracts', level: 92 },
    { name: 'EVM Architecture', level: 85 },
    { name: 'Web3.js / Ethers.js', level: 90 },
    { name: 'DeFi Protocols', level: 80 },
    { name: 'ZK Proofs', level: 65 },
  ],
};

export const EXPERIENCES: Experience[] = [
  {
    role: 'CHIEF EXECUTIVE OFFICER',
    company: 'ORBIMATRIX',
    period: '01/04/2024 – 01/01/2026',
    location: 'REMOTE, PAKISTAN',
    description: [
      'Architected Generative AI Platforms: Designed and launched a multi-tenant platform on Azure Kubernetes Service (AKS) and AWS EKS.',
      'System Optimization: Managed high-traffic systems handling >150 queries per second with <250ms latency.',
      'MLOps & Lifecycle Management: Implemented end-to-end ML lifecycle using Azure ML and MLflow, reducing model drift by 35%.',
      'Engineering Leadership: Led a cross-functional squad of 12 engineers, boosting sprint throughput by 10%.',
      'Product Development: Shipped Web3 AI-powered games processing 3,000+ on-chain transactions daily with 120k followers.'
    ]
  },
  {
    role: 'SOFTWARE DEVELOPER',
    company: 'FREELANCE PLATFORMS',
    period: '10/09/2023 – 20/12/2025',
    location: 'REMOTE',
    description: [
      'Advanced Prompt Engineering: Optimized complex system prompts for GPT-4/Claude to improve output accuracy for NLP tasks.',
      'Full Stack AI Development: Built React/Next.js frontends integrated with Python (FastAPI) backends to serve AI models.',
      'Web3 & Blockchain Integration: Developed decentralized applications (dApps) and smart contracts for international clients.',
      'Automated Content Systems: Engineered automated workflows for content generation using RAG architectures.'
    ]
  },
  {
    role: 'AMBASSADOR',
    company: 'ZBYTE',
    period: '01/06/2024 – 01/11/2024',
    location: 'SAN FRANCISCO, UNITED STATES',
    description: [
      'Developed user-friendly dApps using SDKs and CLIs to demonstrate platform capabilities.',
      'Promoted platform accessibility and scalability to support global blockchain adoption.',
      'Utilized low-code/no-code tools to accelerate blockchain development and reduce boilerplate code.',
      'Integrated DPlat tokens to power transactions, incentives, and on-chain rewards.'
    ]
  },
  {
    role: 'CHIEF TECHNOLOGY OFFICER',
    company: 'NIBLS',
    period: '01/10/2023 – 01/04/2024',
    location: 'NEW YORK CITY, UNITED STATES',
    description: [
      'Defined technology vision for Smart Ball IoT, AI, and blockchain ecosystem in global sports leagues.',
      'Implemented Azure IoT Hub and AWS Greengrass for edge orchestration and real-time data processing.',
      'Modernized legacy monolithic systems into microservices on GCP Cloud Run, integrating Chainlink oracles.',
      'Developed ML ensemble models to auto-label data, saving approximately $6M in manual labeling costs.',
      'Reduced compute costs by 28% through infrastructure optimization and serverless architecture adoption.'
    ]
  },
  {
    role: 'ARTIFICIAL INTELLIGENCE ENGINEER',
    company: 'CHURN',
    period: '01/11/2023 – 01/01/2024',
    location: 'NEW YORK CITY, UNITED STATES',
    description: [
      'Developed an AI model achieving 92% accuracy in detecting credit card fraud.',
      'Processed a dataset of 500,000+ fintech entries via APIs, ensuring strict data integrity in SQL.',
      'Analyzed 100+ KPIs using Python, Seaborn, and Power BI to present actionable business insights.',
      'Conducted system analysis and provided customer segmentation recommendations to capture market share.'
    ]
  },
  {
    role: 'BLOCKCHAIN DEVELOPER',
    company: 'VAURSE',
    period: '01/05/2023 – 01/08/2023',
    location: 'UNITED ARAB EMIRATES',
    description: [
      'Developed and audited 10+ smart contracts on BNB Chain, including KYC and onboarding modules.',
      'Ensured high standards of compliance and security across decentralized protocols.',
      'Streamlined information retrieval by scraping data for 500+ job listings to enhance platform functionality.'
    ]
  }
];
