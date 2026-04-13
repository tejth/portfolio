// src/app/api/chat/route.ts
import { NextResponse } from "next/server";
import { aiKnowledge } from "@/lib/data";

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    // Call the Anthropic API (Claude) as the AI backbone
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY || "",
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 500,
        system: aiKnowledge,
        messages: messages.map((m: { role: string; content: string }) => ({
          role: m.role,
          content: m.content,
        })),
      }),
    });

    if (!response.ok) {
      // Fallback to mock responses if API key not set
      return NextResponse.json({
        message: getMockResponse(messages[messages.length - 1]?.content || ""),
      });
    }

    const data = await response.json();
    const assistantMessage = data.content?.[0]?.text || "I couldn't process that. Try asking something else!";

    return NextResponse.json({ message: assistantMessage });
  } catch {
    // Return mock response on error
    const body = await request.json().catch(() => ({ messages: [] }));
    const lastMessage = Array.isArray(body?.messages) ? body.messages[body.messages.length - 1]?.content : "";
    return NextResponse.json({
      message: getMockResponse(lastMessage || ""),
    });
  }
}

/**
 * Mock responses when API key is not configured
 * Covers common questions about the portfolio owner
 */
function getMockResponse(userMessage: string): string {
  const msg = userMessage.toLowerCase();

  if (msg.includes("skill") || msg.includes("tech") || msg.includes("stack")) {
    return "Tejendra is skilled in Python, SQL, React.js, Next.js, and machine learning libraries like Scikit-learn, Pandas, and NumPy. He also works with Power BI, Excel, and Git.";
  }

  if (msg.includes("project") || msg.includes("work") || msg.includes("built")) {
    return "Tejendra has built projects like Support AI (SaaS chatbot platform), SymptoCare (ML-based medical system), and a React portfolio website. These projects focus on real-world problem solving and AI integration.";
  }

  if (msg.includes("experience") || msg.includes("job")) {
    return "Tejendra is currently working as an Associate Software Engineer Intern at Global AI Technologies, where he builds machine learning models and data-driven solutions.";
  }

  if (msg.includes("education") || msg.includes("college")) {
    return "Tejendra is pursuing B.Tech in Computer Science from JECRC University with a CGPA of 9.4.";
  }

  if (msg.includes("hire") || msg.includes("available") || msg.includes("contact")) {
    return "Yes, Tejendra is available for opportunities. You can reach him via the contact section or email.";
  }

  if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey")) {
    return "Hey! 👋 I'm Tejendra's AI assistant. Ask me anything about his skills, projects, or experience!";
  }

  return "Tejendra is a Software Developer skilled in full-stack development and machine learning. Feel free to ask about his projects, skills, or experience!";
}