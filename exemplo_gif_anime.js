import fetch from 'node-fetch';
import fs from 'fs/promises';
import axios from 'axios';
import path from 'path';

let image_num = 50 // número de gifs que deseja

async function fetchDataAndSaveUrls(numFetches) {
    const urls = [];
    const url2 = [];
    const downloadErrors = [];
    const downloadedUrls = new Set();
  
    for (let i = 0; i < numFetches; i++) {
      const response = await fetch('https://api.waifu.pics/sfw/kill');
      const data = await response.json();
      console.log(data.url);
      urls.push(data.url);
    }
  
    const jsonData = JSON.stringify({ urls }, null, 2);
  
    await fs.writeFile('urls.json', jsonData);
    console.log('as urls foram salvas no arquivo urls.json');
  
    await downloadGifsFromUrls(urls, url2, downloadErrors, downloadedUrls);
  
    const jsonData2 = JSON.stringify( {urls: url2}, null, 2);
    await fs.writeFile('url2.json', jsonData2);
    console.log('arquivo url2.json foi gerado');
  
    if (downloadErrors.length > 0) {
      console.log(`Os seguintes gifs não foram baixados com sucesso: ${downloadErrors.join(', ')}`);
    }

    const url3 = [];
    for (let i = 1; i <= 500; i++) {
      if (!downloadErrors.includes(i)) {
        let paddedNumber = String(i).padStart(3, '0');
        url3.push(`https://raw.githubusercontent.com/TioMarkZ/apis/main/kill/kill${paddedNumber}.gif`);
      }
    }
    const jsonData3 = JSON.stringify( {"criador": "Tio Mark </>", "status": "ok", urls: url3}, null, 2);
    await fs.writeFile('url3.json', jsonData3);
    console.log('arquivo url3.json foi gerado');
}

async function downloadGifsFromUrls(urls, url2, downloadErrors, downloadedUrls) {
    const currentWorkingDirectory = process.cwd();
  
    const downloadPromises = urls.map(async (url, index) => {
      if (downloadedUrls.has(url)) {
        console.log(`O gif ${index + 1} é repetido e não será baixado`);
        return;
      }
  
      try {
        const response = await axios.get(url, { responseType: 'arraybuffer' });
        const gifFileName = `kill${(index + 1).toString().padStart(2, '0')}.gif`;
        const filePath = path.join(currentWorkingDirectory, gifFileName);
  
        await fs.writeFile(filePath, response.data, 'binary');
        console.log(`Downloaded: ${gifFileName}`);
  
        downloadedUrls.add(url);
        url2.push(url);
      } catch (error) {
        console.error(`Erro ao baixar o gif ${index + 1}: ${error.message}`);
        downloadErrors.push(index + 1);
      }
    });
  
    await Promise.all(downloadPromises);
}

fetchDataAndSaveUrls(image_num);
