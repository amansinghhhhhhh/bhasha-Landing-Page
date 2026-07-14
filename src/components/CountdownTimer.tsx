import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export default function CountdownTimer() {
  // Initialize with 2 hours, 14 minutes, and 35 seconds for urgency
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 14,
    seconds: 35,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset to 2 hours to keep the landing page alive and high-converting
          return { hours: 2, minutes: 14, seconds: 35 };
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    return num < 10 ? `0${num}` : num;
  };

  return (
    <div className="flex items-center space-x-3 bg-secondary p-3.5 rounded-2xl text-white w-fit shadow-xl border border-white/5">
      {/* Hours */}
      <div className="text-center px-3 border-r border-slate-700/60">
        <div className="text-xl font-black text-accent font-mono tracking-tight">
          {formatNumber(timeLeft.hours)}
        </div>
        <div className="text-[9px] uppercase opacity-60 font-semibold tracking-wider">Hrs</div>
      </div>

      {/* Minutes */}
      <div className="text-center px-3 border-r border-slate-700/60">
        <div className="text-xl font-black text-accent font-mono tracking-tight">
          {formatNumber(timeLeft.minutes)}
        </div>
        <div className="text-[9px] uppercase opacity-60 font-semibold tracking-wider">Mins</div>
      </div>

      {/* Seconds */}
      <div className="text-center px-3">
        <div className="text-xl font-black text-accent font-mono tracking-tight animate-pulse">
          {formatNumber(timeLeft.seconds)}
        </div>
        <div className="text-[9px] uppercase opacity-60 font-semibold tracking-wider">Secs</div>
      </div>

      {/* Limited Offer Label */}
      <div className="pl-3 pr-1 text-xs font-semibold leading-tight text-slate-200">
        Limited Batch Offer:<br />
        <span className="text-accent font-black">30% Scholarship Available</span>
      </div>
    </div>
  );
}
