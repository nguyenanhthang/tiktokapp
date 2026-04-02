import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './AIAssistant.module.scss';
import { askAI } from '~/Services/aiService';

const cx = classNames.bind(styles);

function AIAssistant() {
    const [prompt, setPrompt] = useState('');
    const [answer, setAnswer] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            const response = await askAI(prompt);
            setAnswer(response);
        } catch (error) {
            setAnswer('Không thể kết nối Python AI service. Hãy kiểm tra backend đang chạy ở cổng 8000.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className={cx('wrapper')}>
            <h1 className={cx('title')}>AI Assistant (Electron + Python)</h1>
            <p className={cx('description')}>
                Nhập prompt, React/Electron sẽ gọi Python API để nhận câu trả lời.
            </p>

            <form className={cx('form')} onSubmit={handleSubmit}>
                <textarea
                    className={cx('textarea')}
                    value={prompt}
                    onChange={(event) => setPrompt(event.target.value)}
                    placeholder="Ví dụ: Hãy gợi ý kiến trúc AI app bằng Electron + Python"
                />
                <button className={cx('button')} disabled={loading}>
                    {loading ? 'Đang xử lý...' : 'Gửi prompt'}
                </button>
            </form>

            {answer ? <div className={cx('answer')}>{answer}</div> : null}
        </section>
    );
}

export default AIAssistant;
