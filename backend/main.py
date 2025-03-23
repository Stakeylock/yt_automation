from fastapi import FastAPI
from models import IdeationRequest, ThumbnailRequest, FilmingRequest, EditingRequest, PublishingRequest
from utils import chat
from word_generator import generate_word_document

app = FastAPI()

from fastapi.middleware.cors import CORSMiddleware

# Add CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow requests from any frontend (use specific domain in production)
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, OPTIONS, etc.)
    allow_headers=["*"],  # Allow all headers
)


@app.post("/generate_idea")
def generate_idea(request: IdeationRequest):
    response = chat(f"Generate a unique video idea based on the topic: {request.topic}")
    return {"idea": response}

@app.post("/generate_thumbnail")
def generate_thumbnail(request: ThumbnailRequest):
    response = chat(f"Describe how the thumbnail should look for a video titled '{request.title}' with the description '{request.description}'.")
    return {"thumbnail_description": response}

@app.post("/suggest_filming")
def suggest_filming(request: FilmingRequest):
    response = chat(f"Suggest the best filming approach for a {request.style} video.")
    return {"filming_suggestion": response}

@app.post("/generate_editing_flow")
def generate_editing_flow(request: EditingRequest):
    response = chat(f"Create an editing guide for a video with the following content: {request.video_content}")
    return {"editing_flow": response}

@app.post("/suggest_publishing")
def suggest_publishing(request: PublishingRequest):
    response = chat(f"Suggest video descriptions, tags, and publishing strategy for: {request.video_details}")
    return {"publishing_suggestions": response}

@app.get("/trending_videos")
def get_trending_videos():
    prompt = "Fetch the top trending videos on YouTube right now."
    response = chat(prompt)
    return {"trending_videos": response}


@app.get("/notifications")
def get_notifications():
    prompt = "Fetch the latest notifications for the user regarding video performance and trends."
    response = chat(prompt)
    return {"notifications": response}

@app.post("/generate_document")
def generate_document():
    idea = chat("Generate a video idea.")
    thumbnail_desc = chat("Describe a thumbnail for the video.")
    filming_suggestion = chat("Suggest filming techniques.")
    editing_flow = chat("Provide an editing guide.")
    publishing_suggestions = chat("Suggest video descriptions and tags.")
    
    file_path = generate_word_document(idea, thumbnail_desc, filming_suggestion, editing_flow, publishing_suggestions)
    return {"document_path": file_path}
