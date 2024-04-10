async function fetchAndSavePages(baseUrl, totalPages) {
    for (let i = 1; i <= totalPages; i++) {
        let pageUrl = `${baseUrl}?pagina=${i}`;

        try {
            let response = await fetch(pageUrl);

            if (response.url !== pageUrl) {
                // If there's a redirect, follow it
                response = await fetch(response.url);
            }

            const html = await response.text();
            const blob = new Blob([html], { type: 'text/html' });

            const downloadLink = document.createElement("a");
            downloadLink.download = `page_${i}_downloader.html`;
            downloadLink.href = window.URL.createObjectURL(blob);
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);

            // To prevent memory leaks, revoke the object URL after a short delay
            setTimeout(() => window.URL.revokeObjectURL(downloadLink.href), 100);
        } catch (error) {
            console.error('Error fetching URL:', pageUrl, error);
        }
    }

    console.log('All pages downloaded.');
}

const baseUrl = 'https://www.imobiliare.ro/vanzare-garsoniere/timisoara';
const totalPages = 25; // Set this to the total number of pages you want to download

// Call the function with the base URL and total pages
fetchAndSavePages(baseUrl, totalPages);
