import { CircleCheckBig, CircleX } from "lucide-react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Chart } from "./Chart";
import { Button } from "../ui/button";

const Result = ({ questions, userAnswers, quizAnswers, onRetry }) => {
    const correctAnsCount = userAnswers.reduce((acc, ans, idx) => acc + (ans === quizAnswers[idx] ? 1 : 0), 0);

    return (
        <div className="space-y-5">
            <h1 className="text-2xl font-semibold tracking-tight">Result of this Quiz</h1>
            <Button onClick={() => { onRetry() }}>Try Again</Button>
            <Chart correctAnswers={correctAnsCount} totalQuestions={questions.length} />
            <Table className="max-w-[900px] text-left border rounded-lg mx-auto">
                <TableHeader>
                    <TableRow>
                        <TableHead>Questions</TableHead>
                        <TableHead>Answers</TableHead>
                        <TableHead>Your Answers</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {questions.map((question, index) => (
                        <TableRow key={index + 1}>
                            <TableCell className="font-medium">{`Q${index + 1}. ${question}`}</TableCell>
                            <TableCell>{quizAnswers[index]}</TableCell>
                            <TableCell className="flex items-center">
                                {userAnswers[index] === null ? "Skipped" : userAnswers[index]}&nbsp;
                                {quizAnswers[index] === userAnswers[index] ? <CircleCheckBig className="text-green-500 h-5" /> : <CircleX className="text-red-500 h-5" />}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default Result;