import { useEffect, useRef, useState } from 'react'

const Test = () => {
    const [count, setCount] = useState(0);
    const intervalRef = useRef<number | null>(null);

    const stopTimer = () => {
        if (intervalRef.current) window.clearInterval(intervalRef.current);
    }

    useEffect(() => {
        intervalRef.current = window.setInterval(() => {
            setCount(prev => prev + 1);
        }, 1000);

        return () => {
            stopTimer();
        }
    }, [])

    return (
        <div>
            <div>{count}</div>
            <button onClick={stopTimer}>Stop</button>
        </div>
    )
}

export default Test