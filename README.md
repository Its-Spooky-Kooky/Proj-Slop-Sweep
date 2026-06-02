# SlopSweep

**SlopSweep** is an advanced, high-end AI content detector designed to identify and filter out "slop"—low-quality, repetitive, or vacuous AI-generated text.

Powered by the robust reasoning capabilities of **Google Gemini 1.5 Flash**, SlopSweep doesn't just give you a generic percentage score; it deeply analyzes the substance of the text.

## 🌟 What Makes SlopSweep Different?

Most AI detectors on the market rely on statistical perplexity or burstiness. They often fail by flagging human-written text that happens to be highly structured, or missing AI text that has been lightly edited. 

SlopSweep takes a fundamentally different approach:

1. **Gemini-Level Reasoning:** Instead of relying on rigid statistical models, we use a highly capable model (Gemini 1.5 Flash) to evaluate the text semantically. It looks for the hallmark signs of AI "slop"—overuse of transitional phrases, lack of concrete examples, robotic neutrality, and circular logic.
2. **Actionable Explanations:** SlopSweep doesn't just return a score of 0 to 100. It provides a detailed, human-readable breakdown of *why* the text was flagged, highlighting the exact reasons it feels artificial.
3. **Premium Experience:** Most developer tools look like raw dashboards. SlopSweep is designed with a luxury, high-end aesthetic (inspired by modern real estate UI) with glassmorphism, elegant typography, and smooth micro-animations. It treats content moderation as a premium experience.
4. **Substance over Syntax:** We care less if a human used AI to fix their grammar, and more if the text itself is completely devoid of original thought or value. 

## 🚀 Tech Stack

- **Frontend:** Next.js (App Router), React, Vanilla CSS (with luxury design tokens)
- **Backend:** Next.js API Routes
- **AI Engine:** Google GenAI SDK (`gemini-1.5-flash`)
- **Database:** Supabase (PostgreSQL)


