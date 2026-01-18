
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";
const ai = new GoogleGenAI({ apiKey: API_KEY });

export async function getAiResponse(userMessage: string, history: {role: 'user' | 'model', text: string}[]) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history.map(h => ({ role: h.role, parts: [{ text: h.text }] })),
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: `أنت مساعد ذكي لمصنع Pro Business المتخصص في الفواكه المجففة بالتبريد (Freeze Dried) والخضروات المقلية بالفراغ (Vacuum Fried) والحلويات المجففة. 
        أهدافك:
        1. شرح فوائد التجفيد (التبريد): الحفاظ على 97% من العناصر الغذائية، الوزن الخفيف، عدم وجود مواد حافظة، والقرمشة اللذيذة.
        2. شرح فوائد القلي بالفراغ: استخدام زيت غير مهدرج، درجة حرارة منخفضة تمنع أكسدة الزيت، قرمشة عالية ودهون أقل بكثير من القلي العادي.
        3. الترويج لمنتجات الكاندي والمارشميلو المجففة كفئة ممتعة ومقرمشة.
        4. الرد بأسلوب احترافي وودي وباللغة العربية.
        5. ذكر أن المصنع "Pro Business" يلتزم بأعلى معايير الجودة.`,
        temperature: 0.7,
      },
    });
    return response.text || "عذراً، لم أستطع معالجة طلبك حالياً.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "حدث خطأ أثناء التواصل مع الذكاء الاصطناعي.";
  }
}
