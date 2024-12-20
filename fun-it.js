import axios from "axios";

let handler = async (m, { conn, text, args }) => {
    const username = "ArchanjoRamos"; // Substitua pelo nome de usuário desejado
    const apiKey = "c2ed4708aa28a0b709a8b845e5aae05d"; // Chave da API do Last.fm
    const apiUrl = `https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${username}&api_key=${apiKey}&format=json`;

    try {
        const response = await axios.get(apiUrl);
        const recentTracks = response.data.recenttracks.track;

        if (recentTracks && recentTracks.length > 0) {
            const latestTrack = recentTracks[0]; // Pega a música mais recente
            const artist = latestTrack.artist["#text"];
            const album = latestTrack.album["#text"];
            const song = latestTrack.name;
            const scrobbles = latestTrack["@attr"]?.nowplaying ? "Escutando agora" : "Scrobble registrado";

            const message = `🎵 *Última música escutada:*\n\n- *Música:* ${song}\n- *Artista:* ${artist}\n- *Álbum:* ${album}\n- *Status:* ${scrobbles}`;
            m.reply(message);
        } else {
            m.reply("Não foi possível encontrar nenhuma música recente.");
        }
    } catch (error) {
        console.error(error);
        m.reply("Ocorreu um erro ao buscar informações da música recente.");
    }
};

handler.help = ['it'];
handler.tags = ['fun'];
handler.command = ["it"];
handler.owner = true 
export default handler;
