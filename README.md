# Daily Habit Tracker — AI Accountability Coach

A digital performance journal where you log daily habits and write a brief check-in. An AI coach analyses your patterns and delivers personalised feedback to keep you on track.

![App Preview](./preview.png)

---

## What it does

- **Daily habit logging** — check off habits each day and write a short reflection
- **AI accountability coaching** — submits your check-in to an AI model that analyses consistency, spots patterns, and gives personalised nudges
- **Habit streaks** — tracks consecutive days to keep momentum visible
- **Progress dashboard** — visualises your completion rate over time

---

## Tech stack

| Layer | Technology |
|---|---|
| Frontend | React + Vite |
| Styling | CSS Modules / Tailwind |
| AI | Anthropic Claude API |
| State | React useState / useEffect |
| Storage | localStorage |

---

## Getting started

### Prerequisites
- Node.js 18+
- An Anthropic API key → [Get one here](https://console.anthropic.com)

### Installation

```bash
git clone https://github.com/muriithivyke-code/Daily-Habit-Tracker-AI-Accountability-Coach.git
cd Daily-Habit-Tracker-AI-Accountability-Coach
npm install
```

### Environment setup

Create a `.env` file in the root:

```env
VITE_ANTHROPIC_API_KEY=your_api_key_here
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## How it works

1. Add the habits you want to build (e.g. "Read 20 mins", "Exercise", "No social media before 10am")
2. Each day, check off completed habits and write a short reflection
3. Hit **Get Coaching** — your entry is sent to Claude, which returns a personalised analysis
4. Review your streaks and completion rate on the dashboard

---

## Project structure

```
src/
├── components/
│   ├── HabitList.jsx       # Daily habit checklist
│   ├── Journal.jsx         # Text check-in input
│   ├── CoachFeedback.jsx   # AI response display
│   └── Dashboard.jsx       # Streaks and progress charts
├── utils/
│   └── claudeApi.js        # Anthropic API integration
└── App.jsx
```

---

## Roadmap

- [ ] User authentication
- [ ] Weekly and monthly analytics
- [ ] Email digest with weekly AI summary
- [ ] Mobile app (React Native)

---

## Author

**Vyke Muriithi** · [GitHub](https://github.com/muriithivyke-code) · [LinkedIn](#)

---

## License

MIT
