export class TikTokAgent {

  constructor() {
    console.log("Agente de TikTok iniciado");
  }

  analyzeVideo(title: string, views: number) {
    if (views > 100000) {
      return "Formato viral detectado";
    }

    if (views > 20000) {
      return "Buen rendimiento";
    }

    return "Formato normal";
  }

  generateIdea(topic: string) {
    return {
      hook: `ATENCIÓN: ${topic}`,
      caption: `Esto está generando polémica en España.`,
      hashtags: ["#noticias", "#politica", "#viral"],
    };
  }

}
