function updateOutput() {
    const htmlCode = document.getElementById('HTML').value;
    const cssCode = document.getElementById('CSS').value;
    const jsCode = document.getElementById('JS').value;

    const iframe = document.getElementById('frame_content');

    const doc = iframe.contentWindow.document;
    doc.open();
    doc.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>${cssCode}</style>
        </head>
        <body>
            ${htmlCode}
            <script>${jsCode}</script>
        </body>
        </html>
        `);
    doc.close();
}

document.getElementById('HTML').addEventListener('input', updateOutput);
document.getElementById('CSS').addEventListener('input', updateOutput);
document.getElementById('JS').addEventListener('input', updateOutput);