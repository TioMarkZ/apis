// main.js
import fetch from 'node-fetch';
import fs from 'fs/promises';
import axios from 'axios';
import path from 'path';


async function fetchDataAndSaveUrls(numFetches) {
    const urls = [];
  
    for (let i = 0; i < numFetches; i++) {
      const response = await fetch('https://api.waifu.pics/sfw/lick');
      const data = await response.json();
      console.log(data.url);
      urls.push(data.url);
    }
  
    const jsonData = JSON.stringify({ urls }, null, 2);
  
    await fs.writeFile('urls.json', jsonData);
    console.log('Urls saved to urls.json');
  
    await downloadGifsFromUrls(urls);
  }
  
  async function downloadGifsFromUrls(urls) {
    const currentWorkingDirectory = process.cwd();
  
    const downloadPromises = urls.map(async (url, index) => {
      try {
        const response = await axios.get(url, { responseType: 'arraybuffer' });
        const gifFileName = `lick${(index + 1).toString().padStart(2, '0')}.gif`;
        const filePath = path.join(currentWorkingDirectory, gifFileName);
  
        await fs.writeFile(filePath, response.data, 'binary');
        console.log(`Downloaded: ${gifFileName}`);
      } catch (error) {
        console.error(`Error downloading gif ${index + 1}: ${error.message}`);
      }
    });
  
    await Promise.all(downloadPromises);
  }
  
fetchDataAndSaveUrls(200)