import { useState, useEffect, useCallback } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { AlarmClock } from "lucide-react"

export default function Timer({ initialTime = 60, onComplete = () => { }, quizNumber }) {
    const [time, setTime] = useState(initialTime)

    const formatTime = useCallback((seconds) => {
        const minutes = Math.floor(seconds / 60)
        const remainingSeconds = seconds % 60
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
    }, [])

    useEffect(() => {
        setTime(initialTime) // Reset time when quizNumber changes

        const interval = setInterval(() => {
            setTime((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(interval)
                    onComplete()
                    return 0
                }
                return prevTime - 1
            })
        }, 1000)

        return () => clearInterval(interval)
    }, [initialTime, onComplete, quizNumber])

    return (
        <Card className="absolute top-16 right-12 ">
            <CardContent className="p-3 flex items-center justify-center gap-1">
                <AlarmClock />
                <div
                    className={`text-xl font-bold text-center ${ time < 10 ? "text-red-600": ""}`}
                    aria-live="polite"
                    aria-label="Remaining time"
                >
                    {formatTime(time)}
                </div>
            </CardContent>
        </Card>
    )
}