import { useState } from 'react'
import quiz from '../data/quiz.json'
import QuizCard from "../components/custom/QuizCard"
import Result from "../components/custom/Result"
import Timer from '@/components/custom/Timer'

const Quiz = () => {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [answers, setAnswers] = useState([]);

  const getNextQuiz = (currentAnswer = null) => {
    if (currentQuiz < quiz.length) {
      setAnswers(prevAnswers => [...prevAnswers, currentAnswer]);
      setCurrentQuiz(currentQuiz + 1)
    }
  }

  const resetQuiz = () => {
    setCurrentQuiz(0);
    setAnswers([]);
  }

  return (
    <div className="w-full text-center">
      {
        (() => {
          if (quiz.length > 0) {
            if (currentQuiz < quiz.length) {
              return (<>
                <QuizCard
                  question={quiz[currentQuiz]?.question}
                  options={quiz[currentQuiz]?.answerOptions}
                  onNext={getNextQuiz} />
                <Timer onComplete={getNextQuiz} quizNumber={currentQuiz} />
              </>)
            } else {
              return (<><Result
                questions={quiz.map((q) => q.question)}
                userAnswers={answers}
                quizAnswers={quiz.map(q => q.answerOptions.find(option => option.isCorrect)["text"])}
                onRetry={resetQuiz} />

              </>
              )
            }
          } else {
            return <div>Something went wrong!</div>
          }
        })()
      }
    </div>
  )
}

export default Quiz;