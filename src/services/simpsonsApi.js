export const getQuotes = async () => {
    const res = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
    const json = await res.json();
    return {
        text: json[0].quote,
        character: json[0].character,
        img: json[0].image
    }
}
