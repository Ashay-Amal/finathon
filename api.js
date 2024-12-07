import { GoogleGenerativeAI } from "@google/generative-ai";

const api_key = "AIzaSyCqy5Se5BIt1iM_gIKdvyDOxTUdssVcwCk";

const genAI = new GoogleGenerativeAI(api_key);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "Explain how AI works";

const result = await model.generateContent(prompt);
console.log(result.response.text());