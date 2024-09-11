import { ChevronRight, SkipForward } from "lucide-react"
import { Button } from "../ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useState } from "react"

const QuizCard = ({ question, options, onNext }) => {
    const [clicked, setClicked] = useState(null);
    const [answer, setAnswer] = useState("");

    const handleAnswered = (ans, optionNo) => {
        setAnswer(ans);
        setClicked(optionNo);
    }

    return (
        <Card className="max-w-[600px] mx-auto">
            <CardHeader>
                <CardTitle>
                    <p className="text-2xl font-semibold">
                        Q. {question}
                    </p>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 gap-4">
                    {options.map((option, idx) => (
                        <Button
                            className={`flex items-center justify-between hover:bg-blue-500 ${clicked === (idx + 1) ? "bg-blue-500" : ""}`}
                            onClick={() => { handleAnswered(option.text, idx + 1) }}
                            key={idx + 1}>
                            {`${idx + 1}. ${option.text}`}
                        </Button>)
                    )}
                </div>
            </CardContent>
            <CardFooter>
                <div className="w-full flex items-center justify-between">
                    <Button onClick={() => { onNext(); setAnswer(""); setClicked(null); }}>Skip <SkipForward className="h-5" /></Button>
                    <Button onClick={() => { onNext(answer); setAnswer(""); setClicked(null); }} disabled={answer === "" ? true : false}>Next <ChevronRight className="h-5" /></Button>
                </div>
            </CardFooter>
        </Card>
    )
}

export default QuizCard;