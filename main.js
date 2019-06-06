(() => {
    "use strict";

    function exec(code) {
        eval(code)
    }

    let previousLog = console.log;
    let previousError = console.error;

    const app = document.getElementById('application');

    const inputCode = document.getElementById('input-code');
    const execBtn = document.getElementById('exec-btn');
    execBtn.addEventListener('click', () => exec(inputCode.value));

    const textarea = document.createElement('div');
    textarea.classList = 'console';

    console.log = (message) => {
        const row = document.createElement('div');
        row.textContent = `> ${message}`;
        textarea.appendChild(row);
        previousLog.apply(console);
    };

    console.error = (err) => {
        const row = document.createElement('div');
        row.textContent = `> ${err}`;
        row.classList = 'error';
        textarea.appendChild(row);
        previousError.apply(console);
    };

    app.appendChild(textarea);

    exec('console.log("HELLO");');
    exec('console.error("404");');
})();
