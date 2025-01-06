import Profile from "../assets/img/momentProfile.jpeg"
import { useState, useEffect } from 'react';

const MomentCount = () => {

    // Start date in UTC, manually adjusted for WITA (UTC+8)
    const startDateUTC = new Date('November 11, 2023 00:00:00 GMT').getTime();
    const startDate = new Date(startDateUTC + 8 * 60 * 60 * 1000); // Add 8 hours to UTC for WITA

    // State to store countdown values
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    const updateCountdown = () => {
        const now = new Date();
        const nowWita = new Date(now.getTime() + 8 * 60 * 60 * 1000); // Adjust current time to WITA (UTC+8)

        const difference = nowWita.getTime() - startDate.getTime();

        // Calculate total days, hours, minutes, and seconds
        const totalDays = Math.floor(difference / (1000 * 60 * 60 * 24));
        const totalHours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const totalMinutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const totalSeconds = Math.floor((difference % (1000 * 60)) / 1000);

        setCountdown({ days: totalDays, hours: totalHours, minutes: totalMinutes, seconds: totalSeconds });
    };

    useEffect(() => {
        const interval = setInterval(updateCountdown, 1000);
        return () => clearInterval(interval);
    });

    return (
        <div className="space-y-10">
            <div className="flex justify-center items-center flex-col sm:flex-row gap-5 sm:gap-16">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-transparent hover:border-white hover:scale-105 transition duration-150 ease-in-out">
                    <img src={Profile} alt="Profile Image" className="w-100 h-100 object-cover" />
                </div>
                <div className="text-sm sm:text-md bg-white px-3 py-1 sm:px-5 sm:py-2 rounded-full border-4 border-transparent hover:border-red-600 hover:scale-105 transition duration-150 ease-in-out">
                    how long we&apos;ve been together?
                </div>
            </div>
            <div id="countdown">
                <div className='flex flex-col sm:flex-row gap-10 justify-center items-center'>
                    <div className="flex flex-col justify-center items-center gap-2 transition-transform duration-150 hover:scale-105 cursor-pointer">
                        <div className="text-red-600 text-6xl sm:text-8xl font-bold">{countdown.days}</div>
                        <div className="text-2xl sm:text-3xl font-bold">Days</div>
                    </div>
                    <span className='text-white text-5xl sm:text-7xl hidden sm:block'>:</span>
                    <div className="flex flex-col justify-center items-center gap-2  transition-transform duration-150 hover:scale-105 cursor-pointer">
                        <div className="text-red-600 text-6xl sm:text-8xl font-bold">{countdown.hours}</div>
                        <div className="text-2xl sm:text-3xl font-bold">Hours</div>
                    </div>
                    <span className='text-white text-5xl sm:text-7xl hidden sm:block'>:</span>
                    <div className="flex flex-col justify-center items-center gap-2  transition-transform duration-150 hover:scale-105 cursor-pointer">
                        <div className="text-red-600 text-6xl sm:text-8xl font-bold">{countdown.minutes}</div>
                        <div className="text-2xl sm:text-3xl font-bold">Minutes</div>
                    </div>
                    <span className='text-white text-5xl sm:text-7xl hidden sm:block'>:</span>
                    <div className="flex flex-col justify-center items-center gap-2  transition-transform duration-150 hover:scale-105 cursor-pointer">
                        <div className="text-red-600 text-6xl sm:text-8xl font-bold">{countdown.seconds}</div>
                        <div className="text-2xl sm:text-3xl font-bold">Seconds</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MomentCount