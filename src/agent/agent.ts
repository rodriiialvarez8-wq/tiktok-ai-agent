import { MemoryStore } from "../memory/memory";

export class TikTokAgent {

  private memory: MemoryStore;

constructor() {
  console.log("Agente de TikTok iniciado");
  this.memory = new MemoryStore();
}

  analyzeVideo(title: string, views: number) {

    const videoData = {
  title: title,
  views: views,
  likes: 0,
  comments: 0,
  date: new Date().toISOString()
};

this.memory.saveVideo(videoData);

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
