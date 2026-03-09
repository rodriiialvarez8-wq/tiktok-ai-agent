console.log("TikTok AI Agent iniciado");

function generateTikTokIdea(topic: string) {
  return {
    hook: `ÚLTIMA HORA: ${topic}`,
    caption: `Esto está generando mucha polémica ahora mismo.`,
    hashtags: ["#politica", "#noticias", "#actualidad", "#viral"],
    idea: `Video corto explicando ${topic} en menos de 20 segundos`
  };
}

const idea = generateTikTokIdea("nuevo escándalo político");

console.log(idea);
