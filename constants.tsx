
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
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600',
      stats: [{ label: 'Speedup', value: '45%' }, { label: 'Params', value: '1.2M' }]
    },
    {
      id: 'ai-2',
      title: 'Vision GPT Integration',
      description: 'Multi-modal reasoning agent for real-time industrial defect detection.',
      tags: ['LLM', 'CV', 'LangChain'],
      link: '#',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600'
    }
  ],
  [Domain.HUGGING_FACE]: [
    {
      id: 'hf-1',
      title: 'TinyLlama Fine-Tuning',
      description: 'A community-standard instruction tuning of the TinyLlama model for medical FAQ.',
      tags: ['Transformers', 'PEFT', 'Datasets'],
      link: '#',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4628c7185?auto=format&fit=crop&q=80&w=600',
      stats: [{ label: 'Downloads', value: '10k+' }, { label: 'Likes', value: '250' }]
    },
    {
      id: 'hf-2',
      title: 'Multimodal Spaces Demo',
      description: 'Interactive Gradio application showcasing stable diffusion for texture synthesis.',
      tags: ['Gradio', 'Diffusers', 'Spaces'],
      link: '#',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600'
    }
  ],
  [Domain.DATA_SCIENCE]: [
    {
      id: 'ds-1',
      title: 'Climate Impact Analysis',
      description: 'Comprehensive study on urban heat islands using satellite imagery and IoT sensors.',
      tags: ['R', 'Tableau', 'Scikit-learn'],
      link: '#',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
      stats: [{ label: 'P-Value', value: '0.001' }, { label: 'Dataset', value: '4TB' }]
    },
    {
      id: 'ds-2',
      title: 'Predictive Churn Modeling',
      description: 'Advanced ensemble techniques for predicting customer churn in SaaS ecosystems.',
      tags: ['XGBoost', 'EDA', 'Pandas'],
      link: '#',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600'
    }
  ],
  [Domain.WEB3]: [
    {
      id: 'web3-1',
      title: 'DEX Liquidity Aggregator',
      description: 'A high-performance aggregator for multi-chain liquidity providing optimal swap rates.',
      tags: ['Solidity', 'Ethers.js', 'React'],
      link: '#',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=600',
      stats: [{ label: 'TVL', value: '$4.2M' }, { label: 'Chains', value: '5' }]
    },
    {
      id: 'web3-2',
      title: 'NFT Governance Protocol',
      description: 'On-chain voting system for community-owned digital asset management.',
      tags: ['Hardhat', 'IPFS', 'TheGraph'],
      link: '#',
      image: 'https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&q=80&w=600',
      stats: [{ label: 'Proposals', value: '120+' }, { label: 'Users', value: '15k' }]
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
