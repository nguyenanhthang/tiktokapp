const { spawn } = require('child_process');
const http = require('http');

const services = [];

function run(name, cmd, args, env = {}) {
    const child = spawn(cmd, args, {
        stdio: 'inherit',
        shell: false,
        env: {
            ...process.env,
            ...env,
        },
    });

    child.on('exit', (code) => {
        if (code !== 0) {
            console.error(`[${name}] exited with code ${code}`);
            shutdown(code || 1);
        }
    });

    services.push(child);
    return child;
}

function shutdown(exitCode = 0) {
    while (services.length) {
        const child = services.pop();
        if (!child.killed) {
            child.kill('SIGTERM');
        }
    }
    process.exit(exitCode);
}

function waitForPort(port, timeoutMs = 60000) {
    const startedAt = Date.now();

    return new Promise((resolve, reject) => {
        const check = () => {
            const req = http.get(`http://127.0.0.1:${port}`, () => {
                req.destroy();
                resolve(true);
            });

            req.on('error', () => {
                if (Date.now() - startedAt > timeoutMs) {
                    reject(new Error(`Timeout waiting for port ${port}`));
                    return;
                }

                setTimeout(check, 600);
            });
        };

        check();
    });
}

async function startDesktop() {
    run('python', 'python3', ['python_ai/server.py']);
    run('react', 'npm', ['run', 'start'], { BROWSER: 'none' });

    try {
        await waitForPort(3000);
        run('electron', 'npx', ['electron', '.']);
    } catch (error) {
        console.error(`[desktop] ${error.message}`);
        shutdown(1);
    }
}

async function startWebOnly() {
    run('python', 'python3', ['python_ai/server.py']);
    run('react', 'npm', ['run', 'start'], { BROWSER: 'none' });
}

process.on('SIGINT', () => shutdown(0));
process.on('SIGTERM', () => shutdown(0));

const mode = process.argv[2] || 'desktop';
if (mode === 'web') {
    startWebOnly();
} else {
    startDesktop();
}
