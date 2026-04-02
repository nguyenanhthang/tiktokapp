# AI Desktop App (Electron + React + Python)

Project này kết hợp 3 phần:

- **React**: giao diện người dùng.
- **Python FastAPI**: AI service (`/health`, `/chat`).
- **Electron**: đóng gói React thành desktop app.

## Điểm đã chỉnh để dễ chạy hơn

Phiên bản này **không còn dùng** `concurrently`, `wait-on`, `cross-env`.
Mọi thứ được chạy bằng script Node thuần ở `scripts/dev-runner.js` để giảm phụ thuộc npm.

## Cấu trúc chính

- `electron-main.js`: Electron main process, tự start Python khi mở app.
- `electron-preload.js`: preload bridge.
- `python_ai/server.py`: backend AI mẫu.
- `src/pages/AIAssistant/*`: màn hình AI.
- `src/Services/aiService.jsx`: gọi Python API.
- `scripts/dev-runner.js`: chạy nhiều process dev không cần thêm package orchestrator.

## Cài đặt

### 1) Node dependencies

```bash
npm install
```

> Nếu môi trường của bạn chặn npm registry (403), bạn vẫn có thể chạy web + python nếu máy đã có sẵn dependencies từ trước.

### 2) Python dependencies

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r python_ai/requirements.txt
```

## Chạy

### Chạy web + python (không mở Electron)

```bash
npm run start:web-ai
```

### Chạy desktop Electron + python + react

```bash
npm run start:desktop
```

Lưu ý: script desktop dùng `npx electron .`, nên khi chạy lần đầu máy cần tải `electron` package.

## API

### `GET /health`

Kiểm tra service đang sống.

### `POST /chat`

```json
{
  "prompt": "Hãy gợi ý kiến trúc app AI"
}
```

```json
{
  "answer": "..."
}
```
