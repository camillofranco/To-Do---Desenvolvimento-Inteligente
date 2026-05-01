from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
)
logger = logging.getLogger(__name__)

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# ----- Models -----
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class ContactCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=120)
    email: EmailStr
    company: Optional[str] = Field(None, max_length=120)
    message: str = Field(..., min_length=10, max_length=3000)


class Contact(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    company: Optional[str] = None
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class Project(BaseModel):
    id: str
    title: str
    category: str
    description: str
    image: str
    tags: List[str]
    year: str
    highlight: bool = False


class Service(BaseModel):
    id: str
    icon: str
    title: str
    description: str
    deliverables: List[str]


# ----- Static Mocked Content -----
MOCKED_PROJECTS: List[Project] = [
    Project(
        id="proj-01",
        title="Plataforma de Gestão Logística",
        category="Web App",
        description="Sistema completo de rastreamento e gestão de entregas em tempo real, com dashboards operacionais e integração com ERPs.",
        image="https://images.unsplash.com/photo-1591439657848-9f4b9ce436b9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBzb2Z0d2FyZSUyMGNvZGUlMjBtaW5pbWFsJTIwc2NyZWVufGVufDB8fHx8MTc3NzY1NTYxMHww&ixlib=rb-4.1.0&q=85",
        tags=["React", "Node.js", "PostgreSQL", "AWS"],
        year="2025",
        highlight=True,
    ),
    Project(
        id="proj-02",
        title="Assistente de IA para Atendimento",
        category="IA & Automação",
        description="Agente conversacional integrado ao WhatsApp, capaz de qualificar leads e automatizar 70% do atendimento de primeira linha.",
        image="https://images.unsplash.com/photo-1585384107568-5bc588c7eefd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBzb2Z0d2FyZSUyMGNvZGUlMjBtaW5pbWFsJTIwc2NyZWVufGVufDB8fHx8MTc3NzY1NTYxMHww&ixlib=rb-4.1.0&q=85",
        tags=["Python", "LangChain", "OpenAI", "FastAPI"],
        year="2025",
    ),
    Project(
        id="proj-03",
        title="App Mobile de Saúde Corporativa",
        category="Mobile App",
        description="Aplicativo iOS e Android para programas de bem-estar, com gamificação, telemedicina e integração a wearables.",
        image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85",
        tags=["React Native", "GraphQL", "Firebase"],
        year="2024",
    ),
    Project(
        id="proj-04",
        title="Automação Fiscal Inteligente",
        category="Automação",
        description="Pipeline de RPA + IA para leitura de notas fiscais, conciliação contábil e detecção de inconsistências.",
        image="https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85",
        tags=["Python", "OCR", "Airflow"],
        year="2024",
    ),
    Project(
        id="proj-05",
        title="E-commerce Headless B2B",
        category="Web App",
        description="Plataforma headless com catálogo customizado por cliente, tabelas de preço dinâmicas e checkout integrado a múltiplos gateways.",
        image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85",
        tags=["Next.js", "Stripe", "MongoDB"],
        year="2025",
    ),
    Project(
        id="proj-06",
        title="Dashboard Analítico para Indústria",
        category="Data & BI",
        description="Centralização de dados de chão de fábrica com dashboards em tempo real e alertas preditivos baseados em ML.",
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85",
        tags=["React", "D3.js", "Python", "TimescaleDB"],
        year="2024",
    ),
]

MOCKED_SERVICES: List[Service] = [
    Service(
        id="svc-web",
        icon="Code2",
        title="Desenvolvimento Web",
        description="Aplicações web sob medida, performáticas e escaláveis, construídas com as melhores práticas modernas.",
        deliverables=["Aplicações SaaS", "Portais corporativos", "Dashboards e BI"],
    ),
    Service(
        id="svc-mobile",
        icon="Smartphone",
        title="Aplicativos Mobile",
        description="Apps nativos e híbridos para iOS e Android com experiência fluida e integração com sistemas existentes.",
        deliverables=["React Native", "Publicação nas lojas", "Integrações APIs"],
    ),
    Service(
        id="svc-ai",
        icon="Sparkles",
        title="IA & Agentes Inteligentes",
        description="Assistentes, copilots e pipelines de IA que automatizam decisões e conversas do seu negócio.",
        deliverables=["LLMs customizados", "RAG & Fine-tuning", "Agentes conversacionais"],
    ),
    Service(
        id="svc-automation",
        icon="Workflow",
        title="Automação de Processos",
        description="RPA, integrações e workflows que reduzem custo operacional e eliminam tarefas repetitivas.",
        deliverables=["Integrações ERP/CRM", "Workflows em n8n/Airflow", "Análise de processos"],
    ),
    Service(
        id="svc-cloud",
        icon="Cloud",
        title="Cloud & DevOps",
        description="Infraestrutura resiliente em nuvem com pipelines de CI/CD, observabilidade e segurança de ponta.",
        deliverables=["AWS / GCP / Azure", "Kubernetes & Docker", "Monitoramento 24/7"],
    ),
    Service(
        id="svc-product",
        icon="Rocket",
        title="Product Discovery",
        description="Transformamos ideias em roadmaps claros, com prototipação rápida e validação com usuários reais.",
        deliverables=["Descoberta de produto", "Prototipação", "UX Research"],
    ),
]


# ----- Routes -----
@api_router.get("/")
async def root():
    return {"message": "To,Do - Desenvolvimento Inteligente API"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks


@api_router.get("/projects", response_model=List[Project])
async def list_projects():
    return MOCKED_PROJECTS


@api_router.get("/services", response_model=List[Service])
async def list_services():
    return MOCKED_SERVICES


@api_router.post("/contact", response_model=Contact, status_code=201)
async def create_contact(payload: ContactCreate):
    contact = Contact(**payload.model_dump())
    doc = contact.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    try:
        await db.contacts.insert_one(doc)
    except Exception as exc:  # pragma: no cover
        logger.exception("Failed to persist contact: %s", exc)
        raise HTTPException(status_code=500, detail="Não foi possível salvar seu contato.") from exc
    return contact


@api_router.get("/contact", response_model=List[Contact])
async def list_contacts():
    contacts = await db.contacts.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    for c in contacts:
        if isinstance(c.get('created_at'), str):
            c['created_at'] = datetime.fromisoformat(c['created_at'])
    return contacts


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
