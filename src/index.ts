import { TikTokAgent } from "./agent/agent";

console.log("TikTok AI Agent iniciado");

const agent = new TikTokAgent();

const result = agent.analyzeVideo("Nuevo escándalo político", 120000);

console.log("Resultado del análisis:", result);

const idea = agent.generateIdea("nuevo escándalo político");

console.log("Idea de contenido:");
console.log(idea);
