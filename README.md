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
- [🧹 Bonk/Bater](https://raw.githubusercontent.com/TioMarkZ/apis/main/bonk/urls.json)
- [😼 Bully/Bullying](https://raw.githubusercontent.com/TioMarkZ/apis/main/bully/urls.json)
     
**❓ Como devo usar?**
- Caso queira gerar uma frase para utilizar veja o json de frases [clicando aqui](https://raw.githubusercontent.com/TioMarkZ/apis/main/frasesUrls.json)
- Se deseja utilizar uma api direta que gera automaticamente um link aleatório basta [clicar aqui](https://tiomarkz.github.io/apis/)
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
Para um segunfo exemplo de como ficaria mais ou menos em um bot de whatsapp:
![image](https://github.com/TioMarkZ/apis/assets/78027781/428a9fac-7e23-4a0c-8f50-bae389a2a9ca)

```
// codigo referente ao segundo exemplo que pode ser usada em bots de whatsapp:
let command = "kiss";
  fetch(`https://raw.githubusercontent.com/TioMarkZ/apis/main/${command}/urls.json`)
  .then(response => response.json())
  .then(async data => {
      let urls = data.urls;
      let randomIndex = Math.floor(Math.random() * urls.length);
      let randomUrl = urls[randomIndex];
      // Fetch frases
      fetch('https://raw.githubusercontent.com/TioMarkZ/apis/main/frasesUrls.json')
      .then(response => response.json())
      .then(async data => {
          let frases = data[command];
          let randomFraseIndex = Math.floor(Math.random() * frases.length);
          let marcas1 = `@${m.sender.split('@')[0]}`
          let marcas2 = `@${user2.split('@')[0]}`
          let frase = frases[randomFraseIndex].replace('#user1', marcas1).replace('#user2', marcas2);
  
          await conn.sendMessage(m.chat, {text: frase, mentions: [m.sender, user2]});
          m.reply(await createSticker(false, randomUrl, '', `${name2} ${command} ${name}`, 20))
      })
      .catch(error => console.error('Erro:', error));
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
  
- Esta api serve para quem deseja criar comando relacionado a conhescimento de países. Basta dar fetch da mesma forma que as apis anteriores neste [link](https://raw.githubusercontent.com/TioMarkZ/apis/main/paises.json)
- Uma dica pessoal de uso para este comando é criar um quiz em que exibe a bandeira e o usuário deva digitar qual país é, bom uso.
</details>
<details>
  <summary><code><strong>[😺 Api de animais]</strong></code></summary>
  
- Esta api serve para quem deseja criar comando relacionado a conhescimento de animais. Basta dar fetch da mesma forma que as apis anteriores neste [link](https://raw.githubusercontent.com/TioMarkZ/apis/main/animais/Animais.json)
- Já possui + de 200 animais 🥳
- Caso tenha percebido que faltou animais importantes ou até mesmo espécies de animais, crie uma issue mostrando uma lista de animais como sugestão [clicando aqui](https://github.com/TioMarkZ/apis/issues/new/choose).
- Uma dica pessoal de uso para este comando é criar um quiz em que exibe a imagem do animal e o usuário deve digitar qual animal é, bom uso.
</details>

# 🛠 Sobre os arquivos
- O arquivo `baixar_bandeiras.js` e `exemplo_gif_anime.js` foram as apis utilizadas para baixar image/gif em massa, o arquivo `imagens_backup.zip` é um backup completo de todas as bandeiras em um único zip.

# ✨ Intuito do código
- Este código tem várias apis úteis para bots que não precisa de terceiros para seu uso, logo faz o código ser totalmente seu.
