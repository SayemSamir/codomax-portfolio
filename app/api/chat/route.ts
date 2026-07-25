import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    let reply = "I am Samir's AI Assistant. How can I help you regarding his profile?";
    const query = message.toLowerCase();

    if (query.includes('skills') || query.includes('tech')) {
      reply = "Samir specializes in C++, Python, JavaScript, React, Next.js, Tailwind CSS, Node.js, and Machine Learning (TensorFlow, Scikit-learn).";
    } else if (query.includes('research') || query.includes('paper')) {
      reply = "Samir focuses on Applied Machine Learning, Computer Vision, and Algorithmic Optimization.";
    } else if (query.includes('experience') || query.includes('intern')) {
      reply = "Samir has experience as a Web Development Intern at Codomax Digital Solutions.";
    } else if (query.includes('education') || query.includes('varsity')) {
      reply = "Samir is studying Computer Science & Engineering at BGC Trust University Bangladesh.";
    }

    return NextResponse.json({ reply });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process chat message' }, { status: 500 });
  }
}
