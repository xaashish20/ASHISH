import { GoogleGenerativeAI } from "@google/generative-ai";
import { Book } from "../types";

// Get API key from environment variable
const API_KEY = (window as any).process?.env?.GEMINI_API_KEY || (process.env.GEMINI_API_KEY as string) || "";

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

export const getBookSummary = async (bookTitle: string, author: string): Promise<string> => {
  try {
    const prompt = `Provide a concise 3-sentence academic summary of the book "${bookTitle}" by ${author}. Focus on its importance to college students.`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text() || "Summary not available.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Failed to load summary.";
  }
};

export const getRecommendations = async (userInterests: string, availableBooks: Book[]): Promise<string[]> => {
  try {
    const bookTitles = availableBooks.map(b => b.title).join(", ");
    const prompt = `Based on the user's interests: "${userInterests}", recommend exactly 3 books from this list: [${bookTitles}]. Respond with only the titles separated by commas.`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text.split(',').map(title => title.trim());
  } catch (error) {
    console.error("Recommendation Error:", error);
    return [];
  }
};

export const chatWithLibrarian = async (message: string) => {
  try {
    const chat = model.startChat({
      history: [],
      generationConfig: {
        maxOutputTokens: 1000,
      },
    });
    
    const result = await chat.sendMessage(message);
    const response = await result.response;
    return response.text() || "I'm sorry, I couldn't process that.";
  } catch (error) {
    console.error("Chat Error:", error);
    return "Service unavailable.";
  }
};