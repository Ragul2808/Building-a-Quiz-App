import { useState } from "react"
export default function Quiz() {
    const [activeQuestionIndex, setActiveQuestionIndex] = useState([]);
    const [userAnswer, setUserAnswer] = useState([])
    return <p>Currentlyactive Question</p>
}