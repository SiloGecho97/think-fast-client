import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Timer from '../../components/Games/Timer'
import Header from '../../partials/Header'

const trailQuestions = [
  {
    question: 'Who founded Facebook?',
    choices: ['Marks Zuckerberg', 'John Zuckerberg', 'Bill Gate', 'Elon Mask'],
    answer: 'Marks Zuckerberg',
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

const MAX_Q = 50
const ChampionsPlay = () => {
  const navigate = useNavigate()
  const [current, setCurrent] = useState(0)
  const [question] = useState(trailQuestions)
  const [selected, setSelected] = useState(null)
  const [showAnswer, setshowAnswer] = useState(false)

  const selectAnswer = (index)=>{
    setshowAnswer(true)
    if(!selected)setSelected(index)
  }
  const nextQuestions = () => {
    setshowAnswer(false)
    setSelected(null)
    setCurrent(current + 1)
    if (current === 9) {
      navigate('/trial/finish')
      return
    }
  }

  const list = []

  for (let i=0; i<MAX_Q/3;i++) {
    list.push(<li class={`step ${current > i && 'step-primary'}`}>{i}</li>
    )
  }

  return (
    <div className="bg-gray-50 pb-40">
      <Header />

      <div className="mt-20 mx-auto flex w-full justify-center">
        <ul className="steps">
          {list}
        </ul>
      </div>
      <div className="px-16 -mt-8 flex justify-end ">
        <Timer />
      </div>
      <div className="mx-auto w-full flex flex-col items-center my-0">
        <div className="card max-w-4xl w-full p-16">
          <p className="text-2xl font-bold text-center">
            {question[current].question}
          </p>
          <ul className="m-6 max-w-[480px] mx-auto w-full">
            {question[current].choices.map((choice, index) => (
              <li
                onClick={(e) => selectAnswer(index)}
                key={index}
                className={`rounded-full px-10 p-3 m-4 border border-indigo-100  ${
                  selected !== index
                    ? ''
                   : choice===question[current].answer  ? 'bg-green-800'  : 'bg-red-900 text-white'  
                } ${!selected && 'cursor-pointer hover:border-indigo-700 hover:shadow-lg'}`}
              >
                {choice} {showAnswer && choice===question[current].answer && <span className='bg-green-700 py-1 mx-4 text-white px-4 rounded-md'> Correct! </span>}
              </li> 
            ))}
          </ul>
          <div onClick={(e) => nextQuestions()} className="float-right mx-auto">
            <button className="btn btn-wide mt-8 text-xl mx-auto">
              Next Question
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChampionsPlay
