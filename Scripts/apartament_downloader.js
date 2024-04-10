async function fetchAndSaveURLs(urlList) {
    for (const url of urlList) {
        try {
            let response = await fetch(url);

            // Check if the URL has been redirected and fetch the final URL content
            if (response.url !== url) {
                response = await fetch(response.url);
            }

            const html = await response.text();
            const blob = new Blob([html], {type: 'text/html'});

            // Extract the UUID from the URL using a regex pattern
            const uuidMatch = url.match(/garsoniera-de-vanzare-([^/]+)/);
            const uuid = uuidMatch ? uuidMatch[1] : 'download';

            const downloadLink = document.createElement("a");
            downloadLink.download = `downloaded_page_${uuid}.html`;
            downloadLink.href = window.URL.createObjectURL(blob);
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);

            // To prevent memory leaks, revoke the object URL after a short delay
            setTimeout(() => window.URL.revokeObjectURL(downloadLink.href), 100);
        } catch (error) {
            console.error('Error fetching URL:', url, error);
        }
    }

    console.log('All files downloaded.');
}


const urls = ['https://www.imobiliare.ro/vanzare-garsoniere/timisoara/aradului/garsoniera-de-vanzare-X02K0009Q', 'https://www.imobiliare.ro/vanzare-garsoniere/timisoara/torontalului/garsoniera-de-vanzare-XB870006V', 'https://www.imobiliare.ro/vanzare-garsoniere/timisoara/torontalului/garsoniera-de-vanzare-XEVN00000', 'https://www.imobiliare.ro/vanzare-garsoniere/timisoara/torontalului/garsoniera-de-vanzare-XB8O0000M', 'https://www.imobiliare.ro/vanzare-garsoniere/timisoara/braytim/garsoniera-de-vanzare-XF0N00003',
    'https://www.imobiliare.ro/vanzare-garsoniere/timisoara/aradului/garsoniera-de-vanzare-X02K0009Q', 'https://www.imobiliare.ro/vanzare-garsoniere/timisoara/braytim/garsoniera-de-vanzare-XEQB00003', 'https://www.imobiliare.ro/vanzare-garsoniere/timisoara/medicina/garsoniera-de-vanzare-X8VU00029', 'https://www.imobiliare.ro/vanzare-garsoniere/timisoara/complex-studentesc/garsoniera-de-vanzare-X8NT0019F', 'https://www.imobiliare.ro/vanzare-garsoniere/timisoara/sagului/garsoniera-de-vanzare-X9JJ0008V', 'https://www.imobiliare.ro/vanzare-garsoniere/timisoara/buziasului/garsoniera-de-vanzare-XE2S0001K', 'https://www.imobiliare.ro/vanzare-garsoniere/timisoara/lipovei/garsoniera-de-vanzare-XE2P100GK', 'https://www.imobiliare.ro/vanzare-garsoniere/timisoara/take-ionescu/garsoniera-de-vanzare-X8VU0002T', 'https://www.imobiliare.ro/vanzare-garsoniere/timisoara/braytim/garsoniera-de-vanzare-XDF1100J4', 'https://www.imobiliare.ro/vanzare-garsoniere/timisoara/torontalului/garsoniera-de-vanzare-XDRN1006G?lista=82494852&listing=1&pagina=lista&sla=lista&sla=lista&imoidviz=4239785372', 'https://www.imobiliare.ro/vanzare-garsoniere/timisoara/badea-cartan/garsoniera-de-vanzare-XBE0003A3', 'https://www.imobiliare.ro/vanzare-garsoniere/timisoara/girocului/garsoniera-de-vanzare-X89S101P7', 'https://www.imobiliare.ro/vanzare-garsoniere/timisoara/girocului/garsoniera-de-vanzare-X84C100JN', 'https://www.imobiliare.ro/vanzare-garsoniere/timisoara/central/garsoniera-de-vanzare-XE2P100G6', 'https://www.imobiliare.ro/vanzare-garsoniere/timisoara/complex-studentesc/garsoniera-de-vanzare-X8NT0019H', 'https://www.imobiliare.ro/vanzare-garsoniere/timisoara/medicina/garsoniera-de-vanzare-X8VU00023', 'https://www.imobiliare.ro/vanzare-garsoniere/timisoara/medicina/garsoniera-de-vanzare-X8VU00021', 'https://www.imobiliare.ro/vanzare-garsoniere/timisoara/medicina/garsoniera-de-vanzare-X8VU0002L', 'https://www.imobiliare.ro/vanzare-garsoniere/timisoara/torontalului/garsoniera-de-vanzare-X3SH104RN', 'https://www.imobiliare.ro/vanzare-garsoniere/timisoara/braytim/garsoniera-de-vanzare-X3SH107SS', 'https://www.imobiliare.ro/vanzare-garsoniere/timisoara/freidorf/garsoniera-de-vanzare-X9B9101SL', 'https://www.imobiliare.ro/vanzare-garsoniere/timisoara/aradului/garsoniera-de-vanzare-X8NT001BU', 'https://www.imobiliare.ro/vanzare-garsoniere/timisoara/aradului/garsoniera-de-vanzare-X6SD101TK', 'https://www.imobiliare.ro/vanzare-garsoniere/timisoara/braytim/garsoniera-de-vanzare-XCKU0001B', 'https://www.imobiliare.ro/vanzare-garsoniere/timisoara/simion-barnutiu/garsoniera-de-vanzare-X0Q610PAU',
    'https://www.imobiliare.ro/vanzare-garsoniere/timisoara/braytim/garsoniera-de-vanzare-XCB3100AA'];


// Call the function with your URLs
fetchAndSaveURLs(urls);
