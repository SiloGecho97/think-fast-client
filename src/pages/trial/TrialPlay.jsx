import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Timer from '../../components/Games/Timer'
import Header from '../../partials/Header'

const trailQuestions = [
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

const TrialPlay = () => {
  const navigate = useNavigate()
  const [current, setCurrent] = useState(0)
  const [question, setQuestion] = useState(trailQuestions)
  const [selected, setSelected] = useState(null)
  const modalRef = useRef()
  useEffect(() => {
    modalRef.current.click()
  }, [])

  const nextQuestions = () => {
    setSelected(null)
    setCurrent(current + 1)
    if (current === 9) {
      navigate('/trial/finish')
      return
    }
  }
  return (
    <div className="bg-gray-50 pb-40">
      <Header />

      <label for="my-modal" ref={modalRef} class="btn modal-button hidden">
        open modal
      </label>
      <input type="checkbox" id="my-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg">This is Trial Game</h3>
          <p class="py-4">
            This is trial game to practice with system, You will not won price
            or earn anything
          </p>
          <div class="modal-action">
            <label for="my-modal" class="btn">
              Continue
            </label>
          </div>
        </div>
      </div>

      <div class="mt-20 mx-auto flex w-full justify-center">
        <ul class="steps">
          <li class={`step ${current>0 && 'step-primary'}`}>start</li>
          <li class={`step ${current>1 && 'step-primary'}`}>2</li>
          <li class={`step ${current>2 && 'step-primary'}`}>3</li>
          <li class={`step ${current>3 && 'step-primary'}`}>4</li>
          <li class={`step ${current>4 && 'step-primary'}`}>5</li>
          <li class={`step ${current>5 && 'step-primary'}`}>6</li>
          <li class={`step ${current>6 && 'step-primary'}`}>7</li>
          <li class={`step ${current>7 && 'step-primary'}`}>8</li>
          <li class={`step ${current>8 && 'step-primary'}`}>9</li>
          <li class={`step ${current>9 && 'step-primary'}`}>10</li>
        </ul>
      </div>
      <div className="px-16 -mt-8 flex justify-end ">
      
        <Timer />
      </div>
      <div className="mx-auto w-full flex flex-col items-center my-0">
       
        <div className="card max-w-4xl w-full p-16">
          <p className="text-3xl font-bold text-center">
            {question[current].question}
          </p>
          <ul className="m-6 max-w-lg mx-auto w-full">
            {question[current].choices.map((choice, index) => (
              <li
                onClick={(e) => setSelected(index)}
                key={index}
                className={` ${
                  selected !== index
                    ? 'bg-gray-200 rounded-full px-10 p-3 m-4 text-primary hover:bg-primary hover:text-white hover:shadow-xl cursor-pointer'
                    : 'rounded-full px-10 p-3 m-4 hover:text-white bg-primary hover:bg-primary text-white hover:shadow-xl cursor-pointer'
                }`}
              >
                {choice}
              </li>
            ))}
          </ul>
          <div onClick={(e) => nextQuestions()} className="float-right mx-auto">
            <button className="btn-primary mt-8 text-xl w-max mx-auto">Next Question</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrialPlay
