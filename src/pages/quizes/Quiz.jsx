import React from 'react'
import Header from '../../partials/Header'

const Quiz = () => {
  return (
    <>
      <Header />
      <>
        <div class="sm:flex flex-wrap justify-center items-center text-center gap-8">
          <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6  shadow-lg rounded-lg dark:bg-gray-800">
            <div class="flex-shrink-0">
              <div class="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="h-6 w-6"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                </svg>
              </div>
            </div>
            <h3 class="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
              Only 30 Questions
            </h3>
            <p class="text-md  text-gray-500 dark:text-gray-300 py-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              sagittis, quam nec venenatis lobortis, mi risus tempus nulla,
            </p>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 mt-6 sm:mt-16 md:mt-20 lg:mt-24 bg-white shadow-lg rounded-lg dark:bg-gray-800">
            <div class="flex-shrink-0">
              <div class="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="h-6 w-6"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                </svg>
              </div>
            </div>
            <h3 class="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
              Complete Question
            </h3>
            <p class="text-md text-gray-500 dark:text-gray-300 py-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              sagittis, quam nec venenatis lobortis, mi risus tempus nulla,
            </p>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mt-6  px-4 py-4 bg-white shadow-lg rounded-lg dark:bg-gray-800">
            <div class="flex-shrink-0">
              <div class="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="h-6 w-6"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                </svg>
              </div>
            </div>
            <h3 class="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
              Top 3 will be paid
            </h3>
            <p class="text-md  text-gray-500 dark:text-gray-300 py-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              sagittis, quam nec venenatis lobortis, mi risus tempus nulla,
            </p>
          </div>
        </div>
      </>
      <div>
        <label for="my-modal" class="btn modal-button">
          open modal
        </label>

        <input type="checkbox" id="my-modal" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box">
            <h3 class="font-bold text-lg">
              Congratulations random Interner user!
            </h3>
            <p class="py-4">
              You've been selected for a chance to get one year of subscription
              to use Wikipedia for free!
            </p>
            <div class="modal-action">
              <label for="my-modal" class="btn">
                Ok!
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Quiz
