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
  aiMl: ["PyTorch", "TensorFlow", "Scikit-learn", "HuggingFace Transformers", "LangChain", "LangGraph", "RAG", "MLOps", "YOLO", "MCP"],
  languages: ["Python", "JavaScript", "TypeScript"],
  infrastructure: ["Docker", "Kubernetes", "Terraform", "Microsoft Azure", "Azure AI Foundry", "MLFlow", "Databricks", "Kafka", "GitHub Actions", "CircleCI"],
  webDev: ["Next.js", "FastAPI", "Node.js"],
  databases: {
    core: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
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
    desc: "An AI agent for Little Fighter 2 that combines YOLO-powered game perception with a custom Gymnasium environment and PPO-based reinforcement learning.",
    link: "https://github.com/vermaashish20/AI-lf2",
    featured: true,
    details: [
      "Collected and labeled gameplay data to train a YOLOv8n detector for real-time character, enemy, and weapon detection.",
      "Built a rule-based combat agent that uses detected positions for proximity-aware targeting and attacks.",
      "Created a custom Gymnasium environment using game RAM memory addresses for direct hero and enemy state detection.",
      "Modeled character movesets and special moves, then trained a PPO agent up to 6000 steps for autonomous enemy combat without vision-action delay.",
    ],
  },
  {
    id: 2,
    slug: "zeno-youtube-rag",
    num: "02",
    title: "Zeno - YouTube RAG",
    tags: ["RAG", "FastAPI", "Next.js"],
    desc: "A full-stack YouTube RAG platform that turns public videos and playlists into searchable, citation-backed learning workspaces.",
    link: "https://github.com/vermaashish20/zeno",
    featured: true,
    details: [
      "Built a FastAPI, Next.js, and LangGraph platform that downloads and transcribes public YouTube videos and playlists.",
      "Used a quantized 16-bit Whisper tiny model with semantic chunking to store playlist-level transcriptions in ChromaDB workspaces.",
      "Implemented timestamp citations so answers link directly back to source video moments.",
      "Added persistent chat memory, markdown workspace export, and multi-provider LLM support across Ollama, NVIDIA, and Gemini.",
    ],
  },
  {
    id: 3,
    slug: "bookish-ai-authoring",
    num: "03",
    title: "Bookish AI Authoring Platform",
    tags: ["Multi-Agent", "LangGraph", "RAG"],
    desc: "A full-stack multi-agent book authoring platform for planning, researching, drafting, editing, and fact-checking long-form AI-generated content.",
    link: "https://github.com/vermaashish20/bookish",
    featured: true,
    details: [
      "Built a Next.js, TypeScript, and FastAPI platform with real-time agent interaction and rich-text editing for long-form content generation.",
      "Orchestrated Planner, Researcher, World Builder, Writer, Editor, Memory Keeper, and Fact-Checker agents through a LangGraph DAG workflow.",
      "Integrated Langfuse for observability, RAG tracing, and multi-agent execution monitoring.",
      "Engineered a memory-driven RAG pipeline with MongoDB episodic memory and ChromaDB vector search for persistent state and factual grounding.",
      "Designed the workflow to support publication-scale drafts of 25K+ words with contextual continuity across agents.",
    ],
  },
];

export const experienceData: Experience[] = [
  {
    period: "Jan 2025 — Current",
    role: "AIML Engineer",
    company: "Alphabin Technology Consulting",
    details: [
      "Architected and deployed an AI microservice for automated test failure analysis on Azure Container Apps, using an online learning pipeline to categorize actual bugs, UI changes, flaky tests, and miscellaneous failures with 60-70% accuracy.",
      "Built an embedding-based error grouping and analytics pipeline that clusters semantically similar test failures and visualizes high-impact errors by time range, branch, and error type.",
      "Integrated LLM-powered CI/CD summaries that post contextual test run insights and probable failure causes directly to GitHub PRs and commits.",
      "Architected the TestDino MCP server so AI coding assistants can query test results, analyze failure patterns, manage suites, and create or update manual tests in natural language.",
      "Designed a VS Code extension AI agent with TypeScript, LangGraph, OpenAI, and Playwright that converts natural language test cases into executable browser automation scripts.",
      "Built a Node.js and TypeScript integration microservice with OAuth2 connections for Asana, Linear, monday.com, Azure DevOps, and Slack, automating issue creation with logs, screenshots, and attachments.",
      "Led SOC 2 and ISO 27001 compliance governance and built Azure disaster recovery and failover automation with Terraform and Azure Front Door.",
      "Designed and developed an internal construction SaaS platform that compiles 500-700+ page DPRs from spreadsheets, drawings, PDFs, and images into an AI-assisted editor with one-click PDF export."
    ]
  }
];

export const educationData: Education = {
  degree: "B.Tech in Computer Engineering (AIML)",
  school: "P.P. Savani University",
  cgpa: "8.01",
  specialization: "Artificial Intelligence and Machine Learning"
};
