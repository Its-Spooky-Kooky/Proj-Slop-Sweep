# SlopSweep

**SlopSweep** is an advanced, high-end AI content detector designed to identify and filter out "slop"—low-quality, repetitive, or vacuous AI-generated text.

Powered by the robust reasoning capabilities of **Groq free API model**, SlopSweep doesn't just give you a generic percentage score; it deeply analyzes the substance of the text.


## 🌟 What Makes SlopSweep Different?

Most AI detectors on the market rely on statistical perplexity or burstiness. They often fail by flagging human-written text that happens to be highly structured, or missing AI text that has been lightly edited. 

SlopSweep takes a fundamentally different approach:

1. **Gemini-Level Reasoning:** Instead of relying on rigid statistical models, we use a highly capable model (Gemini 1.5 Flash) to evaluate the text semantically. It looks for the hallmark signs of AI "slop"—overuse of transitional phrases, lack of concrete examples, robotic neutrality, and circular logic.
2. **Actionable Explanations:** SlopSweep doesn't just return a score of 0 to 100. It provides a detailed, human-readable breakdown of *why* the text was flagged, highlighting the exact reasons it feels artificial.
3. **Premium Experience:** Most developer tools look like raw dashboards. SlopSweep is designed with a luxury, high-end aesthetic (inspired by modern real estate UI) with glassmorphism, elegant typography, and smooth micro-animations. It treats content moderation as a premium experience.
4. **Substance over Syntax:** We care less if a human used AI to fix their grammar, and more if the text itself is completely devoid of original thought or value.


## 🚀 Tech Stack

- **Frontend:** React (Vite), Vanilla CSS (with luxury design tokens)
- **Backend:** Node.js & Express.js
- **AI Engine:** Google GenAI SDK (`gemini-2.0-flash`)
- **Database:** MongoDB (via Mongoose)

---


## 🏃 How to Run SlopSweep Locally

Since this project uses a separated architecture (React Frontend + Node.js Backend), you need to run two servers simultaneously.

### Prerequisites
Ensure you have your `.env` file set up inside the `backend/` folder with your valid `GEMINI_API_KEY` and `MONGO_URI`.

### Step 1: Start the Backend Server
You need to start the Express API so that the AI analysis and database connections work.

1. Open a new terminal window.
2. Navigate to the backend folder:
   ```bash
   cd backend
   ```
3. Start the server:
   ```bash
   node server.js
   ```
   *You should see a message saying the API is running on port 5000 and MongoDB is connected.*
   **Keep this terminal window open.**

### Step 2: Start the Frontend Server
You need to start the React UI so you can interact with the app in your browser.

1. Open a **second, separate** terminal window.
2. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   *You should see a message saying the server is running (usually on `http://localhost:5173`).*
   **Keep this terminal window open.**

### Step 3: Use the Application
1. Open your web browser.
2. Go to the URL provided by Vite (typically **http://localhost:5173**).
3. Paste your text into the luxurious text area and click **Sweep for Slop**!

### Common Issues
- **"Rate limit reached":** You have hit the Google Gemini free-tier per-minute quota. Just wait exactly 60 seconds and try clicking analyze again.
- **"MongoDB Connection Error":** Double check that your current IP address is whitelisted in your MongoDB Atlas dashboard under "Network Access".
