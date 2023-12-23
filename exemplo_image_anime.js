import fetch from 'node-fetch';
import fs from 'fs/promises';
import axios from 'axios';
import path from 'path';

let image_num = 300 // número de imagens que deseja

async function fetchDataAndSaveUrls(numFetches) {
    const urls = [];
    const url2 = [];
    const downloadErrors = [];
  
    for (let i = 0; i < numFetches; i++) {
      const response = await fetch('https://api.waifu.pics/sfw/hug');
      const data = await response.json();
      console.log(data.url);
      urls.push(data.url);
    }
  
    const jsonData = JSON.stringify({ urls }, null, 2);
  
    await fs.writeFile('urls.json', jsonData);
    console.log('as urls foram salvas no arquivo urls.json');
  
    await downloadGifsFromUrls(urls, url2, downloadErrors);
  
    const jsonData2 = JSON.stringify( {urls: url2}, null, 2);
    await fs.writeFile('url2.json', jsonData2);
    console.log('arquivo url2.json foi gerado');
  
    if (downloadErrors.length > 0) {
      console.log(`Os seguintes gifs não foram baixados com sucesso: ${downloadErrors.join(', ')}`);
    }
}

async function downloadGifsFromUrls(urls, url2, downloadErrors) {
    const currentWorkingDirectory = process.cwd();
    const downloadedUrls = new Set();
  
    const downloadPromises = urls.map(async (url, index) => {
      try {
        const response = await axios.get(url, { responseType: 'arraybuffer' });
        const gifFileName = `hug${(index + 1).toString().padStart(2, '0')}.gif`;
        const filePath = path.join(currentWorkingDirectory, gifFileName);
  
        await fs.writeFile(filePath, response.data, 'binary');
        console.log(`Downloaded: ${gifFileName}`);
  
        if (downloadedUrls.has(url)) {
          console.log(`O gif ${gifFileName} é repetido`);
        } else {
          downloadedUrls.add(url);
          url2.push(url);
        }
      } catch (error) {
        console.error(`Erro ao baixar o gif ${index + 1}: ${error.message}`);
        downloadErrors.push(index + 1);
      }
    });
  
    await Promise.all(downloadPromises);
}

fetchDataAndSaveUrls(image_num);
