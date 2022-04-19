import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Timer from '../../components/Games/Timer'
import Header from '../../partials/Header'
import { getInfo, setToLocalStorage } from '../../_services/user.service'

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
    choices: ['Charles Babbage', 'Bill gate', 'Compute', 'Johannes Gutenberg'],
    answer: 'Charles Babbage',
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
    answer: '9999',
  },
  {
    question: 'Which is the smallest planet in our solar system??',
    choices: ['Mercury', 'Venus', 'Mars', 'Earth'],
    answer: 'Mercury',
  },
  {
    question: 'Who invented the Computer?',
    choices: ['Charles Babbage ', 'Bill gate', 'Compute', 'Johannes Gutenberg'],
    answer: 'Charles Babbage ',
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
]

// const mathsQuestion = [
//   {
//     question: 'How many hours are there in a day?',
//     choices: ['24 hours', '12 hours', '20 hours', '48 hours'],
//     answer: '24 hours',
//   },
//   {
//     question: '1 L is equal to how many grams?',
//     choices: ['100 ml', '1000 ml', '10 ml', '10000 ml'],
//     answer: '1000 ml',
//   },
//   {
//     question: 'The largest 4 digit number is?',
//     choices: ['999', '1000', '9999', '9000'],
//     answer: 'Kenya',
//   },
//   {
//     question: 'Which is the smallest planet in our solar system??',
//     choices: ['Mercury', 'Venus', 'Mars', 'Earth'],
//     answer: 'Mercury',
//   },
//   {
//     question: 'Who invented the Computer?',
//     choices: ['Charles Babbage ', 'Bill gate', 'Compute', 'Johannes Gutenberg'],
//     answer: 'Mercury',
//   },
// ]

// const infoQuestions = [
//   {
//     question: 'Who founded Facebook?',
//     choices: ['Marks Zuckerberg', 'John Zuckerberg', 'Bill Gate', 'Elon Mask'],
//     answer: 'Mark Zuckerberg',
//   },
//   {
//     question: 'Which is the longest river on Earth?',
//     choices: [
//       'Nile river',
//       'Victoria river',
//       'minnesota river',
//       'amazon river',
//     ],
//     answer: 'Nile river',
//   },
//   {
//     question: 'The largest 4 digit number is?',
//     choices: ['999', '1000', '9999', '9000'],
//     answer: 'Kenya',
//   },
//   {
//     question: 'Which is the smallest planet in our solar system??',
//     choices: ['Mercury', 'Venus', 'Mars', 'Earth'],
//     answer: 'Mercury',
//   },
//   {
//     question: 'Who invented the Computer?',
//     choices: ['Charles Babbage ', 'Bill gate', 'Compute', 'Johannes Gutenberg'],
//     answer: 'Mercury',
//   },
// ]
const MAX_Q = 10
const Play = () => {
  const navigate = useNavigate()
  const [info] = useState(() => getInfo())
  const [current, setCurrent] = useState(0)
  const [question] = useState(basic_questions)
  const [selected, setSelected] = useState(null)
  const [showAnswer, setshowAnswer] = useState(false)
  const [round, setRound] = useState(1)
  const [incorrect, setIncorrect] = useState(0)
  let i = 1
  console.log(incorrect)
  const selectAnswer = (index, choice) => {
    setshowAnswer(true)
    if (selected !== null) return
    setSelected(index)
    if (choice !== question[current].answer) {
      setIncorrect(incorrect + 1)
      if (incorrect >= 2) {
        navigate('/games/failed')
      }
    }
  }
  const nextQuestions = () => {
    setshowAnswer(false)
    setSelected(null)
    setCurrent(current + 1)
    if (current === 5) {
      setRound(round + 1)
      i = 5
      return
    }
    console.log(info)

    if (current === MAX_Q) {
      setToLocalStorage({
        ...info,
        today: info.today + 20,
        week: info.week + 20,
      })
      navigate('/games/finish')
    }
  }

  const list = []

  for (i; i <= round * 5; i++) {
    list.push(<li className={`step ${current >= i && 'step-primary'}`}>{i}</li>)
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-700 pb-40">
      <Header />

      <div className="mt-20 mx-auto flex w-full justify-center">
        <ul className="steps">{list}</ul>
      </div>
      <div className="px-16 -mt-8 flex justify-end ">
        <Timer />
      </div>
      <div className="mx-auto w-full flex flex-col items-center my-0">
        <div className="card max-w-4xl w-full p-16">
          <div className="mx-auto text-2xl font-black text-green-900 -mt-8 mb-8">
            ROUND {round}
          </div>
          <p className="text-2xl font-bold text-center">
            {question[current].question}
          </p>
          <ul className=" max-w-[480px] mx-auto w-full ">
            {question[current].choices.map((choice, index) => (
              <li
                onClick={(e) => selectAnswer(index, choice)}
                key={index}
                className={`rounded-full px-10 p-3 m-4 border border-indigo-100  ${
                  selected !== index
                    ? ''
                    : choice === question[current].answer
                    ? 'bg-lime-400'
                    : 'bg-red-700 text-white'
                } ${
                  selected === null &&
                  'cursor-pointer hover:border-indigo-700 hover:shadow-lg'
                }`}
              >
                {choice}{' '}
                {showAnswer && choice === question[current].answer && (
                  <span className="bg-green-800 py-1 mx-4 text-white px-4 rounded-md">
                    {' '}
                    Correct!{' '}
                  </span>
                )}
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

export default Play
