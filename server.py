from fastapi import FastAPI, Response
import cv2
import uvicorn

app = FastAPI()

# Abrir la cámara
cap = cv2.VideoCapture(1)  # Asegúrate de usar el índice correcto

@app.get("/video")
def video_feed():
    success, frame = cap.read()
    if not success:
        return Response(status_code=500)

    _, buffer = cv2.imencode('.jpg', frame)
    return Response(content=buffer.tobytes(), media_type="image/jpeg")

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
