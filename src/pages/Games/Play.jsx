import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Timer from '../../components/Games/Timer'
import Header from '../../partials/Header'

const basic_questions = [
  {
    question: 'Who invented the Light Bulb?',
    choices: [
      'Thomas Alva Edison',
      'Charles Babbage',
      'Jefferson John',
      'Albert Enstein',
    ],
    answer: 'Thomas Alva Edison',
  },
  {
    question:
      'In which year of First World War Germany declared war on Russia and France?',
    choices: ['1914', '1915', '1916', '1918'],
    answer: '1914',
  },
  {
    question: 'The Leopard is the national animal of?',
    choices: ['Kenya', 'Tanzania', 'Ethiopia', 'Brazil'],
    answer: 'Kenya',
  },
  {
    question: 'Which is the smallest planet in our solar system??',
    choices: ['Mercury', 'Venus', 'Mars', 'Earth'],
    answer: 'Mercury',
  },
  {
    question: 'Who invented the Computer?',
    choices: ['Charles Babbage ', 'Bill gate', 'Compute', 'Johannes Gutenberg'],
    answer: 'Mercury',
  },
]

const mathsQuestion = [
  {
    question: 'How many hours are there in a day?',
    choices: ['24 hours', '12 hours', '20 hours', '48 hours'],
    answer: '24 hours',
  },
  {
    question: '1 L is equal to how many grams?',
    choices: ['100 ml', '1000 ml', '10 ml', '10000 ml'],
    answer: '1000 ml',
  },
  {
    question: 'The largest 4 digit number is?',
    choices: ['999', '1000', '9999', '9000'],
    answer: 'Kenya',
  },
  {
    question: 'Which is the smallest planet in our solar system??',
    choices: ['Mercury', 'Venus', 'Mars', 'Earth'],
    answer: 'Mercury',
  },
  {
    question: 'Who invented the Computer?',
    choices: ['Charles Babbage ', 'Bill gate', 'Compute', 'Johannes Gutenberg'],
    answer: 'Mercury',
  },
]

const infoQuestions = [
  {
    question: 'Who founded Facebook?',
    choices: ['Marks Zuckerberg', 'John Zuckerberg', 'Bill Gate', 'Elon Mask'],
    answer: 'Mark Zuckerberg',
  },
  {
    question: 'Which is the longest river on Earth?',
    choices: [
      'Nile river',
      'Victoria river',
      'minnesota river',
      'amazon river',
    ],
    answer: 'Nile river',
  },
  {
    question: 'The largest 4 digit number is?',
    choices: ['999', '1000', '9999', '9000'],
    answer: 'Kenya',
  },
  {
    question: 'Which is the smallest planet in our solar system??',
    choices: ['Mercury', 'Venus', 'Mars', 'Earth'],
    answer: 'Mercury',
  },
  {
    question: 'Who invented the Computer?',
    choices: ['Charles Babbage ', 'Bill gate', 'Compute', 'Johannes Gutenberg'],
    answer: 'Mercury',
  },
]

const Play = () => {
  const navigate = useNavigate()
  const [current, setCurrent] = useState(0)
  const [question, setQuestion] = useState(basic_questions)
  const [selected, setSelected] = useState(null)

  const nextQuestions = () => {
    setSelected(null)
    setCurrent(current + 1)
    if (current === 4) {
      navigate('/games/finish')
      return
    }
  }
  return (
    <div className="bg-gray-50 pb-40">
      <Header />
      <div className="px-16 flex justify-end ">
        <Timer />
      </div>
      <div className="mx-auto w-full flex flex-col items-center my-0">
        <p className="text-3xl my-4">
          Question{' '}
          <span className="text-primary font-bold">{current + 1} </span>
          out 5
        </p>
        <div className="card max-w-2xl w-full p-16">
          <p className="text-3xl font-bold text-center">
            {question[current].question}
          </p>
          <ul className="m-6 max-w-lg">
            {question[current].choices.map((choice, index) => (
              <li
                onClick={(e) => setSelected(index)}
                key={index}
                className={` ${
                  selected !== index
                    ? 'bg-gray-200 rounded-full px-10 p-4 m-4 text-primary hover:bg-primary hover:text-white hover:shadow-xl cursor-pointer'
                    : 'rounded-full px-10 p-4 m-4 hover:text-white bg-primary hover:bg-primary text-white hover:shadow-xl cursor-pointer'
                }`}
              >
                {choice}
              </li>
            ))}
          </ul>
          <div onClick={(e) => nextQuestions()} className="float-right">
            <button className="btn-primary mt-8 text-xl">Next Question</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Play
