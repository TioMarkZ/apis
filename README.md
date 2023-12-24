#  Api de anime e bandeiras 🔬
By Tio Mark | © | Todos os direitos reservados 

[📱 Contato e links úteis.](https://linktr.ee/irisbot)

# Exemplo de uso das API's 🔎
<details>
  <summary><code><strong>[🔗 Respostas das apis]</strong></code></summary>

- [😘 Kiss/beijo](https://raw.githubusercontent.com/TioMarkZ/apis/main/kiss/urls.json)
- [💢 Pat/carinho](https://github.com/TioMarkZ/apis/raw/main/pat/urls.json)
- [💥 Slap/tapa](https://raw.githubusercontent.com/TioMarkZ/apis/main/slap/urls.json)
- [😝 Lick/linguada](https://raw.githubusercontent.com/TioMarkZ/apis/main/lick/urls.json)
- [🔫 Kill/Matar](https://raw.githubusercontent.com/TioMarkZ/apis/main/kill/urls.json)
- [🫂 Hug/Abraço](https://raw.githubusercontent.com/TioMarkZ/apis/main/hug/urls.json)
- [😉 Wink/Piscar](https://raw.githubusercontent.com/TioMarkZ/apis/main/wink/urls.json)
     
**❓ Como devo usar?**
- Se quiser utilizar uma api direta que gera automaticamente um link aleatório basta [clicar aqui](https://tiomarkz.github.io/apis/)
```
// você pode dar fetch da forma que desejar e pegar um link de forma random do "urls" exemplo:
fetch('https://raw.githubusercontent.com/TioMarkZ/apis/main/kiss/urls.json')
    .then(response => response.json())
    .then(data => {
        let urls = data.urls;
        let randomIndex = Math.floor(Math.random() * urls.length);
        let randomUrl = urls[randomIndex];
        console.log(randomUrl);
    })
    .catch(error => console.error('Erro:', error));
```

Caso queira testar se está tudo ok com os retornos, basta **modificar** este código ✅
```
const urlList = [
  "https://raw.githubusercontent.com/TioMarkZ/apis/main/pat/pat01.gif",
  "https://raw.githubusercontent.com/TioMarkZ/apis/main/pat/pat02.gif",
  "https://raw.githubusercontent.com/TioMarkZ/apis/main/pat/pat03.gif",
  "https://raw.githubusercontent.com/TioMarkZ/apis/main/pat/pat04.gif",
  "https://raw.githubusercontent.com/TioMarkZ/apis/main/pat/pat05.gif"
];

async function testUrls() {
  for (const url of urlList) {
    try {
      const response = await fetch(url);
      if (response.status === 404) {
        console.log(`A URL ${url} retornou 404: Not Found`);
      } else {
        console.log(`A URL ${url} está OK`);
      }
    } catch (error) {
      console.error(`Erro ao acessar a URL ${url}: ${error.message}`);
    }
  }
}

testUrls();   
```

</details>
<details>
  <summary><code><strong>[🚩 Api de países]</strong></code></summary>
  
- Esta api serve para quem deseja criar comando relacioado a conhescimento de países basta dar fetch da mesma forma que as apis anteriores neste [link](https://raw.githubusercontent.com/TioMarkZ/apis/main/paises.json)
</details>

# 🛠 Sobre os arquivos
- O arquivo `baixar.js` e `exemplo_image_anime.js` foram as apis utilizadas para baixar image/gif em massa, o arquivo `imagens_backup.zip` é um backuo completo de todas as bandeiras em um único zip.

# ✨ Intuito do código
- Este código tem várias apis úteis para bots que não precisa de terceiros para seu uso, logo faz o código ser totalmente seu.
