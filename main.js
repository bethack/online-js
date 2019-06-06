(() => {
    const app = document.getElementById('application');
    const textarea = document.createElement('div');
    textarea.classList = 'console';
    let previosLog = console.log;
    console.log = (message) => {
        const row = document.createElement('div');
        row.textContent = `> ${message}`;
        textarea.appendChild(row);
        previosLog.apply(console);
    }
    let previosError = console.error;
    console.error = (err) => {
        const row = document.createElement('div');
        row.textContent = `> ${err}`;
        row.classList = 'error';
        textarea.appendChild(row);
        previosError.apply(console);
    }
    app.appendChild(textarea);
    console.log("HELLO");
    console.error("404");
    console.log("HELLO");
    console.log("HELLO");
    console.log("HELLO");
    console.log("HELLO");
    console.log("HELLO");
    console.error("404");
    console.log("HELLO");
})();