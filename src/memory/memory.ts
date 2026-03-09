Create memory.ts
export interface VideoMemory {
  title: string;
  views: number;
  likes: number;
  comments: number;
  date: string;
}

export class MemoryStore {

  private videos: VideoMemory[] = [];

  saveVideo(video: VideoMemory) {
    this.videos.push(video);
    console.log("Video guardado en memoria:", video.title);
  }

  getTopVideos() {
    return this.videos.sort((a, b) => b.views - a.views).slice(0, 5);
  }

  getAllVideos() {
    return this.videos;
  }

}
