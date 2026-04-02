# AI Desktop App (Electron + React + Python)

Project này đã được mở rộng từ giao diện React hiện có để chạy như một **desktop app với Electron** và gọi sang **Python AI API**.

## Kiến trúc

- **Electron main process**: tạo cửa sổ desktop và tự chạy Python service.
- **React renderer**: giao diện người dùng (route `/ai`).
- **Python FastAPI**: endpoint AI (`POST /chat`).

## Cấu trúc mới

- `electron-main.js`: Electron bootstrap + lifecycle + start Python process.
- `electron-preload.js`: preload bridge cho renderer.
- `python_ai/server.py`: Python AI API.
- `python_ai/requirements.txt`: dependency backend.
- `src/pages/AIAssistant/*`: giao diện chat prompt.
- `src/Services/aiService.jsx`: client gọi API Python.

## Cài đặt

### 1) Cài dependency Node

```bash
npm install
```

### 2) Cài dependency Python

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r python_ai/requirements.txt
```

## Chạy ứng dụng desktop

```bash
npm run start:desktop
```

Lệnh này sẽ chạy cùng lúc:

1. Python AI server tại `http://127.0.0.1:8000`
2. React dev server tại `http://localhost:3000`
3. Electron window load React app

## API hiện tại

### `GET /health`

Kiểm tra service.

### `POST /chat`

Body:

```json
{
  "prompt": "Hãy gợi ý kiến trúc app AI"
}
```

Response:

```json
{
  "answer": "..."
}
```

## Gợi ý mở rộng AI thật

- Gắn OpenAI API hoặc model local (Transformers/Ollama).
- Thêm streaming response (SSE/WebSocket).
- Thêm prompt history + lưu local database (SQLite).
