from pydantic import BaseModel

class IdeationRequest(BaseModel):
    topic: str

class ThumbnailRequest(BaseModel):
    title: str
    description: str

class FilmingRequest(BaseModel):
    style: str  # Options: "face video", "animation", "stock images"

class EditingRequest(BaseModel):
    video_content: str

class PublishingRequest(BaseModel):
    video_details: str
