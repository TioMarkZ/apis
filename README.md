#  Exemplos de uso das apis 🔬
By Tio Mark | © | Todos os direitos reservados 

[📱 Contato e links úteis.](https://linktr.ee/irisbot)
<details>
  <summary><code><strong>[🔗 Respostas das apis]</strong></code></summary>

1. - [😘 Kiss/beijo](https://raw.githubusercontent.com/TioMarkZ/apis/main/kiss/urls.json)
2. - [💢 Pat/tapinha](https://github.com/TioMarkZ/apis/raw/main/pat/urls.json)
3. - [💥 Slap/tapão](https://raw.githubusercontent.com/TioMarkZ/apis/main/slap/urls.json)
4. - [😝 Lick/linguada](https://raw.githubusercontent.com/TioMarkZ/apis/main/lick/urls.json)


**❓ Como devo usar?**
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
</details>
<details>
  <summary><code><strong>[🚩 Api de países]</strong></code></summary>
  
- Esta api serve para quem deseja criar comando relacioado a conhescimento de países basta dar fetch da mesma forma que as apis anteriores neste [link](https://raw.githubusercontent.com/TioMarkZ/apis/main/paises.json)
</details>

# 🛠 Sobre os arquivos
- O arquivo `baixar.js` e `exemplo_image_anime.js` foram as apis utilizadas para baixar image/gif em massa, o arquivo `imagens_backup.zip` é um backuo completo de todas as bandeiras em um único zip.

# ✨ Intuito do código
- Este código tem várias apis úteis para bots que não precisa de terceiros para seu uso, logo faz o código ser totalmente seu.
- 
