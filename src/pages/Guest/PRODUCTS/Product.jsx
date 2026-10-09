import { useState } from 'react';

export default function BlazeProductSection() {
const [habits, setHabits] = useState([
    {
    id: 1,
    title: 'Code for 60 minutes',
    time: 'Deep work · 8:30 AM',
    streak: '12 day streak',
    completed: true,
    icon: '</>',
    },
    {
    id: 2,
    title: 'Read 20 pages',      time: 'Learning · 12:30 PM',
    streak: '8 day streak',
    completed: true,
    icon: '📖',
    },
    {
    id: 3,
    title: 'Exercise',
    time: 'Health · 5:30 PM',
    streak: '3 day streak',
    completed: false,
    icon: '🧡',
    },
]);

const toggleHabit = (id) => {
    setHabits(
    habits.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
    )
    );
};

const completedCount = habits.filter((h) => h.completed).length;
  const progressPercent = Math.round((completedCount / habits.length) * 100);

return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center pt-8 pb-16 px-4 font-sans text-gray-800">
      {/* Top Banner Navigation */}
    <div className="flex items-center gap-3 mb-6">
        <button className="bg-orange-600 text-white text-xs font-medium px-4 py-2 rounded-full flex items-center gap-1.5 shadow-sm hover:bg-orange-700 transition">
        Get started free <span>→</span>
        </button>
        <button className="bg-white border border-gray-200 text-gray-700 text-xs font-medium px-4 py-2 rounded-full shadow-sm hover:bg-gray-50 transition">
        Explore Blaze
        </button>
    </div>

      {/* Social Proof Bar */}
    <div className="flex items-center gap-2 mb-10 text-xs text-gray-500">
        <div className="flex -space-x-1">
        <span className="w-5 h-5 rounded-full bg-amber-200 border border-white flex items-center justify-center text-[9px]">VK</span>
        <span className="w-5 h-5 rounded-full bg-orange-300 border border-white flex items-center justify-center text-[9px]">AM</span>
        <span className="w-5 h-5 rounded-full bg-stone-300 border border-white flex items-center justify-center text-[9px]">JS</span>
        </div>
        <span>Join focused people building better days</span>
    </div>

      {/* Main UI Preview Card Frame */}
    <div className="w-full max-w-4xl bg-[#f7f7f5] rounded-2xl shadow-2xl overflow-hidden border border-gray-200 flex min-h-[520px]">
        
        {/* Dark Sidebar */}
        <aside className="w-52 bg-[#211f1c] text-gray-400 p-5 flex flex-col justify-between shrink-0">
        <div>
            <div className="flex items-center gap-2 text-white font-semibold text-sm mb-8">
            <span className="bg-orange-600 text-white rounded p-1 text-xs">⚡</span> Blaze DHT
            </div>
            
            <nav className="flex flex-col gap-1.5 text-xs">
            <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-[#2e2b27] text-white font-medium cursor-pointer">
                <span>⌂</span> Overview
            </div>
            <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:text-gray-200 cursor-pointer">
                <span>✓</span> My habits
            </div>
            <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:text-gray-200 cursor-pointer">
                <span>📅</span> Calendar
            </div>
            <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:text-gray-200 cursor-pointer">
                <span>📊</span> Insights
            </div>
            </nav>
        </div>
        </aside>

        {/* Dashboard Content */}
        <main className="flex-1 p-8 flex flex-col justify-between">
          <div>
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-0.5">
                  Wednesday, May 21
                </span>
                <h1 className="text-2xl font-semibold text-gray-900">
                  Good morning, Vyke.
                </h1>
              </div>
              <div className="w-7 h-7 rounded-full bg-stone-800 text-white flex items-center justify-center text-xs font-semibold">
                VK
              </div>
            </div>

            {/* Widgets Row */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {/* Progress Widget */}
              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center gap-4 shadow-sm">
                <div className="relative w-16 h-16 shrink-0">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-gray-100"
                      strokeWidth="3.5"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-orange-500 transition-all duration-300"
                      strokeDasharray={`${progressPercent}, 100`}
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center leading-none">
                    <span className="text-sm font-bold text-gray-900">{progressPercent}%</span>
                    <span className="text-[8px] text-gray-400 uppercase tracking-tight">complete</span>
                  </div>
                </div>
                <div>
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider block">
                    Today's Progress
                  </span>
                  <h4 className="text-xs font-bold text-gray-800 mt-0.5">
                    Keep your momentum.
                  </h4>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    {completedCount} of {habits.length} habits complete
                  </p>
                </div>
              </div>

              {/* Streak Widget */}
              <div className="bg-white border border-gray-100 rounded-xl p-4 flex flex-col justify-between shadow-sm">
                <div>
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider block">
                    Current Streak
                  </span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-2xl font-bold text-gray-900">16</span>
                    <span className="text-[10px] text-gray-400">days</span>
                  </div>
                </div>
                {/* Bar chart mockup */}
                <div className="flex items-end gap-1 h-6">
                  <span className="w-1.5 h-2 bg-orange-200 rounded-xs"></span>
                  <span className="w-1.5 h-3 bg-orange-300 rounded-xs"></span>
                  <span className="w-1.5 h-4 bg-orange-400 rounded-xs"></span>
                  <span className="w-1.5 h-3 bg-orange-300 rounded-xs"></span>
                  <span className="w-1.5 h-5 bg-orange-500 rounded-xs"></span>
                  <span className="w-1.5 h-6 bg-orange-600 rounded-xs"></span>
                </div>
              </div>
            </div>

            {/* Habits List Section */}
            <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xs font-bold text-gray-800">Today's habits</h3>
                <span className="text-[10px] text-gray-400">
                  {habits.length - completedCount} remaining
                </span>
              </div>

              <div className="divide-y divide-gray-50">
                {habits.map((habit) => (
                  <div
                    key={habit.id}
                    onClick={() => toggleHabit(habit.id)}
                    className="py-2.5 flex items-center justify-between cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-4 h-4 rounded border flex items-center justify-center text-[10px] transition ${
                          habit.completed
                            ? 'bg-orange-500 border-orange-500 text-white'
                            : 'border-gray-200 group-hover:border-gray-300'
                        }`}
                      >
                        {habit.completed && '✓'}
                      </div>
                      <div className="w-6 h-6 rounded bg-orange-50 text-orange-600 flex items-center justify-center text-xs">
                        {habit.icon}
                      </div>
                      <div>
                        <p className={`text-xs font-medium ${habit.completed ? 'text-gray-900' : 'text-gray-700'}`}>
                          {habit.title}
                        </p>
                        <p className="text-[10px] text-gray-400">{habit.time}</p>
                      </div>
                    </div>
                    <span className="text-[10px] text-gray-400 font-medium">
                      {habit.streak}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>

      <div className="mt-8 text-center">
        <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest">
          Designed for Consistency
        </span>
      </div>
    </div>
);
}