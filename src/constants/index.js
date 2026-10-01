import {
  mobile,
  backend,
  web,
  fullstack,
  javascript,
  java,
  reactjs,
  ubuntu,
  tailwind,
  postgresql,
  aws,
  python,
  cplusplus,
  typescript,
  axelotlanding,
  netdashlanding,
  securebankdashboard,
  atsscreenerlanding,
  allergyguard,
  knowledgegraph,
  dischargeclarity,
  pythonanalysis,
  financialflowimage,
  lm,
  twinmo,
  ss,
  oi,
  sk,
  github,
  mongodb,
  docker,
  google
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "education", title: "Education" },
  { id: "work", title: "Work" },
  { id: "certifications", title: "Certifications" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Data Scientist", icon: web },
  { title: "Machine Learning Engineer", icon: mobile },
  { title: "Artificial Intelligence", icon: backend },
  { title: "GenAI Specialist", icon: fullstack },
];

const education = [
  {
    title: "Master of Science in Data Science",
    company_name: "Illinois Institute of Technology, Chicago, IL",
    icon: backend,
    iconBg: "#fff",
    date: "Aug 2024 - May 2026",
    points: [
      "Relevant Coursework: Machine Learning, Natural Language Processing, Statistical Modeling, Big Data Technologies, Data Preparation & Analysis, Regression Analysis, Monte Carlo Simulation Methods",
    ],
  },
  {
    title: "Bachelor of Engineering in Computer Science",
    company_name: "University of Mumbai, India",
    icon: web,
    iconBg: "#fff",
    date: "Aug 2020 - May 2024",
    points: [
      "Coursework: Machine Learning, Database Organisation, Data Structures and Algorithms, Object Oriented Programming",
    ],
  },
];

const technologies = [
  { name: "Python", icon: python },
  { name: "C++", icon: cplusplus },
  { name: "Java", icon: java },
  { name: "JavaScript", icon: javascript },
  { name: "PostgreSQL", icon: postgresql },
  { name: "AWS", icon: aws },
  { name: "Docker", icon: docker },
  { name: "MongoDB", icon: mongodb },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "TypeScript", icon: typescript },
];

const itTools = [];
const cybersecurityTools = [];
const designTools = [];

const extracurricular = [
  {
    title: "Certified Generative AI Architect with Knowledge Graphs",
    icon: backend,
    type: "Professional Certification | Udemy",
    category: "Certifications",
    date: "Credential ID: UC-6d4acb4e-522b-4f0b-b1d6-7f89d700f0c8",
    points: [
      "Mastered enterprise knowledge graph architecture, RDF graph analytics, and semantic vector retrieval with FAISS.",
      "Orchestrated multi-agent LLM systems with autonomous reasoning and structured knowledge synthesis."
    ],
    credential: "https://www.udemy.com/certificate/UC-6d4acb4e-522b-4f0b-b1d6-7f89d700f0c8/",
  },
  {
    title: "AWS Cloud Technical Essentials",
    icon: aws,
    type: "Professional Certification | Amazon Web Services",
    category: "Certifications",
    date: "Issued: Dec 2025 | ID: E38M5OR5YE2S",
    points: [
      "Demonstrated proficiency in AWS compute (EC2, Lambda), storage (S3), and database systems.",
      "Architected secure, scalable cloud infrastructure using IAM, VPCs, and AWS security best practices."
    ],
    credential: "https://aws.amazon.com/",
  },
  {
    title: "Introduction to Information Technology & AWS Cloud",
    icon: aws,
    type: "Professional Certification | Amazon Web Services",
    category: "Certifications",
    date: "Issued: Jun 2025 | ID: PCYIJU6WK60W",
    points: [
      "Covered IT infrastructure foundations, networking essentials, operating systems, and virtualization.",
      "Applied cloud adoption frameworks, shared responsibility models, and cloud security governance."
    ],
    credential: "https://aws.amazon.com/",
  },
  {
    title: "Google Cloud Platform Developer Campaign",
    icon: google,
    type: "Specialized Training | Google Cloud",
    category: "Certifications",
    date: "Completed: Dec 2022",
    points: [
      "Completed 30+ hours of hands-on cloud engineering labs on Google Cloud Platform.",
      "Practiced cloud infrastructure deployment, BigQuery data analytics, containerization, and IAM security controls."
    ],
    credential: "https://cloud.google.com/",
  },
  {
    title: "Data Science Fellow",
    icon: fullstack,
    type: "Fellowship | The Build Fellowship (Open Avenues)",
    category: "Fellowships",
    date: "March 2025 – April 2025",
    points: [
      "Analyzed and visualized sex-disaggregated public health datasets applying ethical data design frameworks.",
      "Audited 15 data visual assets for equity and statistical representation, improving visual data clarity by 40% (90% peer score)."
    ],
    credential: "https://www.openavenuesfoundation.org/",
  },
  {
    title: "Generative AI Job Simulation",
    icon: backend,
    type: "Applied Simulation | Boston Consulting Group (Forage)",
    category: "Fellowships",
    date: "July 2025",
    points: [
      "Engineered an AI-powered financial assistant using NLP intent recognition, automating responses to 50+ standardized inquiries.",
      "Conducted exploratory data analysis and risk-driver identification, boosting simulation decision accuracy by 15%."
    ],
    credential: "https://www.theforage.com/simulations/bcg",
  },
  {
    title: "Data Science Job Simulation",
    icon: web,
    type: "Applied Simulation | British Airways (Forage)",
    category: "Fellowships",
    date: "June 2025",
    points: [
      "Constructed predictive models evaluating customer lounge eligibility at London Heathrow Terminal 3, lifting access accuracy by 18%.",
      "Modeled customer purchasing behavior using XGBoost classification, generating commercial insights that lifted upsell potential by 12%."
    ],
    credential: "https://www.theforage.com/simulations/british-airways",
  },
  {
    title: "Research Paper: SAKHI Behavioral Health Tracking",
    icon: mobile,
    type: "Published Research Paper | ICSTEMSD 2024",
    category: "Publications",
    date: "Published: 2024 | 2nd Edition",
    points: [
      "Published 'SAKHI (Supportive Assistant Keeping Hope Intact): An Intelligent Framework for Adaptive Behavioral Health Tracking'.",
      "Integrated machine learning classification, real-time survey evaluation, and accessible user interfaces for behavioral health tracking."
    ],
    credential: "https://icstemsd.org/",
  },
  {
    title: "Documentation Head & Lead Volunteer",
    icon: fullstack,
    type: "Community Leadership | NSS India (Atharva Chapter)",
    category: "Leadership",
    date: "Sep 2021 – Apr 2023 | 240+ Hours",
    points: [
      "Led a 6-member documentation team over 20+ projects, and mentored 100+ junior student volunteers in reporting standards.",
      "Spearheaded 7-day rural outreach camp (Atgaon), Dharivali village adoption, Mission Green Mumbai, and coastal beach cleanups."
    ],
    credential: "https://nss.gov.in/",
  },
];

const testimonials = [];

const experiences = [
  {
    title: "Data Science Co-op",
    company_name: "Labelmaster",
    icon: lm,
    iconBg: "#fff",
    date: "Jan 2026 - Apr 2026",
    points: [
      "Architected an automated recommendation engine combining LLM embeddings and hazard classes (1–9), unlocking $370K in uncaptured revenue.",
      "Implemented RapidFuzz entity matching at an 85% threshold across 75K+ accounts over 7 years, cutting pipeline discrepancies by 20%.",
      "Designed a neighbor-site validation layer using a 0.3 similarity threshold to corroborate automated prescriptions against historical purchasing data."
    ],
  },
  {
    title: "AI Engineer Intern",
    company_name: "Twinmo.ai",
    icon: twinmo,
    iconBg: "#fff",
    date: "Feb 2026 - Present",
    points: [
      "Built LangGraph agentic pipelines on AWS to parse 200+ regulatory PDFs, lifting extraction accuracy from 77% → 95% and cutting turnaround from 2 hours to 5 mins.",
      "Developed an ensemble doneness-prediction model (ARIMA, XGBoost, LSTM), achieving 92% accuracy with an RMSE of 1.8 min in production.",
      "Improved cross-domain model generalization by 35% across 5 real-world datasets through targeted feature engineering and bias-variance calibration."
    ],
  },
  {
    title: "Data Scientist",
    company_name: "SoundSafe.ai",
    icon: ss,
    iconBg: "#fff",
    date: "Aug 2025 - Nov 2025",
    points: [
      "Designed CNN-RNN encoder with ArcFace loss (PyTorch) for real-time deepfake detection, achieving 95% TPR at 1% FPR.",
      "Deployed containerized inference services with Docker + CI/CD supporting 10+ concurrent sessions.",
      "Implemented model monitoring via SHA-256 hash-chained audit logs, enforcing Responsible AI.",
      "Manipulated structured and unstructured audio data using pandas and SQL (PostgreSQL); trimmed pipeline latency to ≤800 ms/segment via FastAPI.",
    ],
  },
  {
    title: "Data Scientist",
    company_name: "Oasis Infobyte",
    icon: oi,
    iconBg: "#fff",
    date: "Jan 2024 - Aug 2024",
    points: [
      "Constructed XGBoost forecasting models on 75,000+ financial records with hyperparameter tuning and cross-validation.",
      "Boosted operational efficiency by 20% across 3 business units, cutting reporting turnaround by 20%.",
      "Spearheaded A/B tests on automated vs. manual workflows; translated evaluation metrics into actionable business decisions.",
    ],
  },
  {
    title: "Artificial Intelligence Intern",
    company_name: "SmartKnower",
    icon: sk,
    iconBg: "#fff",
    date: "Aug 2022 - Sep 2022",
    points: [
      "Optimized TensorFlow models via PCA-based feature engineering (40% feature reduction, 94% variance retained).",
      "Accelerated training by 25%; built Bias Detection-integrated dashboards raising stakeholder confidence by 25%.",
    ],
  },
];

const projects = [
  {
    name: "Allergy Guard",
    description:
      "🏆 5th Place Overall, Claude Builders Hackathon. Co-designed an autonomous AI compliance agent utilizing Claude 3.7 Vision and Anthropic's Model Context Protocol (MCP) to automate policy checking by grounding visual layout parsing against local health codes and allergen databases.",
    tags: [
      { name: "Claude Vision 3.7", color: "pink-text-gradient" },
      { name: "Anthropic MCP", color: "green-text-gradient" },
      { name: "Python", color: "blue-text-gradient" },
    ],
    image: allergyguard,
    source_code_link: "https://github.com/ishaa-25/AllergyGuard",
    live_project_link: "https://allergyguard.onrender.com",
  },
  {
    name: "Autonomous AML/Fraud Copilot",
    description:
      "An agentic AML and fraud investigation copilot that integrates RDF graph analytics, semantic vector retrieval (FAISS), and multi-agent LLM orchestration to analyze suspicious accounts and generate structured Suspicious Activity Report (SAR) narratives.",
    tags: [
      { name: "RDF Graphs", color: "blue-text-gradient" },
      { name: "FAISS", color: "pink-text-gradient" },
      { name: "Multi-Agent LLMs", color: "green-text-gradient" },
    ],
    image: knowledgegraph,
    source_code_link: "https://github.com/ishaa-25/Generative-AI-Architect-with-Knowledge-Graphs",
  },
  {
    name: "Fine-Tuned Job Title Embedding Model",
    description:
      "Fine-tuned MiniLM on 50K synthetic pairs via Contrastive/Triplet Loss with hyperparameter tuning, boosting accuracy from 89% to 94%. Direct GenAI fine-tuning for production use cases.",
    tags: [
      { name: "PyTorch", color: "blue-text-gradient" },
      { name: "Hugging Face", color: "green-text-gradient" },
      { name: "Transformers", color: "pink-text-gradient" },
    ],
    image: atsscreenerlanding,
    source_code_link: "https://github.com/ishaa-25/fine-tuning-build-project-public",
    live_project_link: "https://huggingface.co",
  },
  {
    name: "Large-Scale E-Commerce Streaming Pipeline",
    description:
      "Built a distributed streaming data pipeline combining Apache Kafka and Apache Spark (PySpark) to ingest and process 1,000,000+ transactional e-commerce records, cutting latency by 45% with interactive KPI dashboards.",
    tags: [
      { name: "Apache Spark", color: "blue-text-gradient" },
      { name: "Kafka", color: "green-text-gradient" },
      { name: "Plotly", color: "pink-text-gradient" },
    ],
    image: financialflowimage,
    source_code_link: "https://github.com/ishaa-25",
  },
  {
    name: "Production ML Pipeline",
    description:
      "Built an end-to-end predictive classification pipeline across 1.2M+ records applying PySpark, cost-sensitive loss, and stratified cross-validation. Exported models via ONNX Runtime for low-latency scoring with programmatic schema validation gates.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "scikit-learn", color: "green-text-gradient" },
      { name: "MLflow", color: "pink-text-gradient" },
    ],
    image: pythonanalysis,
    source_code_link: "https://github.com/ishaa-25/Production-ML-Pipeline",
    live_project_link: "https://github.com",
  },
  {
    name: "Discharge Clarity Assistant",
    description:
      "Discharge Clarity Assistant is a hackathon-ready MVP for healthcare AI. It converts dense hospital discharge instructions into a simple, patient-friendly care plan using the OpenAI Responses API.",
    tags: [
      { name: "Healthcare AI", color: "blue-text-gradient" },
      { name: "OpenAI", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
    ],
    image: dischargeclarity,
    source_code_link: "https://github.com/ishaa-25/Discharge-Clarity-Assistant",
    live_project_link: "https://discharge-clarity-assistant.onrender.com",
  },
];

export {
  services,
  technologies,
  itTools,
  cybersecurityTools,
  designTools,
  experiences,
  extracurricular,
  projects,
  education,
  testimonials
};
