export interface ExpertiseItem {
  title: string;
  desc: string;
}

export interface ExpertiseCategory {
  category: string;
  items: ExpertiseItem[];
}

export interface Project {
  id: number;
  slug: string;
  num: string;
  title: string;
  tags: string[];
  desc: string;
  link: string;
  details: string[];
  featured?: boolean;
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  details: string[];
}

export interface Education {
  degree: string;
  school: string;
  cgpa: string;
  specialization: string;
}

export const expertiseCategories: ExpertiseCategory[] = [
  {
    category: "Generative AI & Agents",
    items: [
      { 
        title: "Agentic AI", 
        desc: "I architect autonomous agents using LangGraph that perform multi-step planning, complex tool interaction, and adaptive decision-making to solve non-linear tasks." 
      },
      { 
        title: "LLM Fine-Tuning", 
        desc: "I specialize in adapting large models to niche domains using advanced SFT, DPO, and PEFT (LoRA/QLoRA) techniques, ensuring high accuracy and task-specific performance." 
      },
      { 
        title: "Image Gen Fine-Tuning", 
        desc: "I customize diffusion models (Stable Diffusion, Flux) using Dreambooth and LoRA to capture specific artistic styles or brand-specific character consistencies." 
      },
    ]
  },
  {
    category: "AI Product & Engineering",
    items: [
      { 
        title: "AI Based SaaS", 
        desc: "I build AI-native platforms from scratch, focusing on scalable inference backends, efficient resource management, and low-latency user interfaces for production." 
      },
      { 
        title: "AI Mobile Apps", 
        desc: "I deliver intelligent mobile experiences by bridging the gap between on-device ML for privacy/speed and cloud-based AI services for heavy computational tasks." 
      },
      { 
        title: "Monitoring Integration", 
        desc: "I implement full-stack observability with real-time drift detection and automated retraining pipelines to ensure AI systems remain accurate as data evolves." 
      },
    ]
  },
  {
    category: "Core ML & Algorithms",
    items: [
      { 
        title: "Reinforcement Learning", 
        desc: "I train complex decision-making agents using Gymnasium and PPO in simulation environments, optimizing for long-term rewards and autonomous efficiency." 
      },
      { 
        title: "Traditional ML Training", 
        desc: "I develop predictive models using XGBoost, SVM, and deep feature engineering to extract high-value insights from structured business data." 
      },
      { 
        title: "Inference Optimization", 
        desc: "I accelerate model deployment using TensorRT and ONNX, reducing latency and operational costs while maintaining high precision for real-time applications." 
      },
    ]
  },
  {
    category: "Infrastructure & Data Ops",
    items: [
      { 
        title: "Data Pipelines & EDA", 
        desc: "I design event-driven architectures and scalable data pipelines on Databricks to handle high-velocity AI processing and real-time analytics." 
      },
      { 
        title: "Cloud Infrastructure", 
        desc: "I architect resilient, secure, and cost-effective production environments on Azure and AWS specifically tailored for intensive AI/ML workloads." 
      },
    ]
  }
];

export const stackData = {
  aiMl: ["Scikit Learn", "PyTorch", "TensorFlow", "HuggingFace Transformer", "MlOps", "LangChain", "LangGraph", "RAG"],
  languages: ["Python", "JavaScript"],
  infrastructure: ["Docker", "Kubernetes", "Terraform", "Microsoft Azure Cloud", "Databricks", "Kafka", "Redis", "GitHub"],
  webDev: ["Next.js", "FastAPI", "Node.js"],
  databases: {
    core: ["PostgreSQL", "MongoDB", "MySQL"],
    vector: ["Pinecone", "ChromaDB", "Qdrant"]
  }
};

export const projectsData: Project[] = [
  {
    id: 1,
    slug: "lf2-game-agent",
    num: "01",
    title: "LF2 RL Game Agent",
    tags: ["Reinforcement Learning", "Gymnasium"],
    desc: "A sophisticated AI agent for Little Fighter 2 that combines real-time computer vision with PPO-based reinforcement learning for autonomous gameplay.",
    link: "https://github.com/vermaashish20/AI-lf2",
    featured: true,
    details: [
      "Designed an AI agent for LF2 using a YOLOv8n model for real-time detection of game state from raw pixel data.",
      "Implemented a hybrid control system using rule-based logic and a Gymnasium-trained PPO agent for complex combat decisions.",
    ],
  },
  {
    id: 2,
    slug: "perceptual-index",
    num: "02",
    title: "Perceptual Index",
    tags: ["AI SaaS", "Next.js/LLM"],
    desc: "A full-stack AI discovery platform that uses autonomous agents to crawl, analyze, and list SaaS products with structured intelligence.",
    link: "https://perceptual-index.vercel.app",
    featured: true,
    details: [
      "Built a production-grade SaaS platform using Next.js, FastAPI, and MongoDB to categorize and discover emerging AI tools.",
      "Engineered a LangGraph-powered crawler that analyzes external URLs and automatically generates structured product listings.",
    ],
  },
];

export const experienceData: Experience[] = [
  {
    period: "Jan 2025 — Current",
    role: "AIML Engineer",
    company: "Alphabin Technology Consulting",
    details: [
      "Architected an AI microservice for automated test failure analysis using Python, FastAPI, and Azure Container Apps, reducing manual debugging time by 40%.",
      "Developed an integration microservice in Node.js/TypeScript to handle secure OAuth2 flows for major enterprise platforms like Asana and Slack.",
      "Led the end-to-end launch of a SaaS listing on Microsoft Marketplace, including technical compliance and SOC 2 governance.",
      "Built a VS Code extension agent that leverages LLMs to convert natural language test cases into executable, high-precision Playwright scripts.",
      "Implemented an automated disaster recovery system, ensuring high availability for critical AI-driven infrastructure."
    ]
  }
];

export const educationData: Education = {
  degree: "B.Tech in Computer Engineering (AIML)",
  school: "P.P. Savani University",
  cgpa: "8.01",
  specialization: "Artificial Intelligence and Machine Learning"
};
