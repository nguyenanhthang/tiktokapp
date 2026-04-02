from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title='Electron Python AI Service', version='1.0.0')


class PromptRequest(BaseModel):
    prompt: str


@app.get('/health')
def health_check():
    return {'status': 'ok'}


@app.post('/chat')
def chat(payload: PromptRequest):
    prompt = payload.prompt.strip()
    if not prompt:
        return {'answer': 'Bạn chưa nhập nội dung. Hãy nhập câu hỏi để mình hỗ trợ nhé!'}

    lowered_prompt = prompt.lower()

    if 'react' in lowered_prompt and 'electron' in lowered_prompt:
        answer = (
            'Bạn có thể dùng React làm renderer của Electron. '
            'Luồng chuẩn: Electron main process mở cửa sổ, '
            'React xử lý giao diện, Python xử lý AI qua HTTP API.'
        )
    elif 'python' in lowered_prompt and 'ai' in lowered_prompt:
        answer = (
            'Để chạy AI với Python, bạn có thể bắt đầu bằng FastAPI + model inference. '
            'Sau đó Electron/React gọi API /chat để lấy phản hồi.'
        )
    else:
        answer = (
            f'Đã nhận prompt: "{prompt}". '\
            'Mẫu hiện tại là AI service cơ bản để bạn dễ mở rộng sang '
            'OpenAI, Hugging Face hoặc model local sau này.'
        )

    return {'answer': answer}


if __name__ == '__main__':
    import uvicorn

    uvicorn.run('server:app', host='127.0.0.1', port=8000, reload=False)
