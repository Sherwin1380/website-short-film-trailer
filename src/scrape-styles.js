const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://venecoslapelicula.com/');

    const cssHandles = await page.$$eval('link[rel="stylesheet"]', links => links.map(link => link.href));

    for (let url of cssHandles) {
        if (url.startsWith('http')) {
            const response = await page.goto(url);
            const css = await response.text();
            fs.writeFileSync(`./styles/${url.split('/').pop()}`, css);
        }
    }

    await browser.close();
})();
