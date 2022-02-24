import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../partials/Header'

const Home = () => {
  return (
    <div>
      <Header />
     
      <section>
        <div className="bg-white dark:bg-gray-800 ">
          <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
            <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
              <span className="block">Want to be Earn money ?</span>
              <span className="block text-indigo-500">
                It&#x27;s today or never.
              </span>
            </h2>
            <p className="text-xl mt-4 max-w-md mx-auto text-gray-400">
            There will be a daily winner(one upto three) and there will be a weekly winner
             from daily winners top 3. From the given questions.
            </p>
            <div className="lg:mt-0 lg:flex-shrink-0">
              <div className="mt-12 inline-flex rounded-md shadow">
                <button
                  type="button"
                  className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Daily Quiz 
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-4 md:mx-20 mt-20 flex md:flex-row flex-col  max-w-screen-2xl">
        <div className="w-full p-8">
          <h2 className="font-bold text-primary text-6xl">Play Quiz</h2>
          <p className="my-3 max-w-md text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco
          </p>
          <Link to="/quiz" className="btn-primary-large my-8 w-max block">
            Get Start
          </Link>
        </div>
        <div className="bg-primary rounded-3xl w-full h-80 p-8">
          <h2 className="font-bold text-white text-6xl">Play Game</h2>
          <p className="my-3 max-w-md text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco
          </p>
          <Link
            to="/games"
            className="btn-primary-large bg-blue-600 my-8 w-max block "
          >
            Play
          </Link>
        </div>
      </section>

   
      <section>
        <section>
          <div className="container max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white dark:bg-gray-800">
            <div className="flex flex-wrap -mx-8">
              <div className="w-full lg:w-1/2 px-8">
                <div className="mb-12 lg:mb-0 pb-12 lg:pb-0 border-b lg:border-b-0">
                  <h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading dark:text-white">
                    When you play quiz make sure you know all this this.....{' '}
                  </h2>
                  <p className="mb-8 leading-loose text-gray-500 dark:text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi sagittis, quam nec venenatis lobortis, mi risus tempus
                    nulla, sed porttitor est nibh at nulla. Praesent placerat
                    enim ut ex tincidunt vehicula. Fusce sit amet dui tellus.
                  </p>
                  <div className="w-full md:w-1/3">
                    <button
                      type="button"
                      className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                    >
                      See more
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-8">
                <ul className="space-y-12">
                  <li className="flex -mx-4">
                    <div className="px-4">
                      <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">
                        1
                      </span>
                    </div>
                    <div className="px-4">
                      <h3 className="my-4 text-xl font-semibold dark:text-white">
                        Complete all question
                      </h3>
                      <p className="text-gray-500 dark:text-gray-300 leading-loose">
                        All elements are responsive and provide the best display
                        Finish all questionsIt&#x27;s magic !
                      </p>
                    </div>
                  </li>
                  <li className="flex -mx-4">
                    <div className="px-4">
                      <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">
                        2
                      </span>
                    </div>
                    <div className="px-4">
                      <h3 className="my-4 text-xl font-semibold dark:text-white">
                        Win Daily
                      </h3>
                      <p className="text-gray-500 dark:text-gray-300 leading-loose">
                        Daily winner All question is available 7/24 and joinable
                        every day on our hotline.
                      </p>
                    </div>
                  </li>
                  <li className="flex -mx-4">
                    <div className="px-4">
                      <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">
                        3
                      </span>
                    </div>
                    <div className="px-4">
                      <h3 className="my-4 text-xl font-semibold dark:text-white">
                        Recieve the payment
                      </h3>
                      <p className="text-gray-500 dark:text-gray-300 leading-loose">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}

export default Home
