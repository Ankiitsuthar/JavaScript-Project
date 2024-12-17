        document.addEventListener('DOMContentLoaded', function() {
            const contactLinks = document.querySelectorAll('.contact a');
            contactLinks.forEach(link => {
                link.addEventListener('mouseover', () => {
                    link.style.color = '#0056b3';
                });
                link.addEventListener('mouseout', () => {
                    link.style.color = '#007BFF';
                });
            });

            const downloadButton = document.createElement('button');
            downloadButton.textContent = 'Download Resume';
            downloadButton.style.display = 'block';
            downloadButton.style.margin = '20px auto';
            document.body.appendChild(downloadButton);

            downloadButton.addEventListener('click', (event) => {
                event.preventDefault();

                const blob = new Blob([document.documentElement.outerHTML], { type: 'text/html' });
                const url = URL.createObjectURL(blob);

                const a = document.createElement('a');
                a.href = url;
                a.download = 'Ankit_Kumar_Resume.html';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            });
        });