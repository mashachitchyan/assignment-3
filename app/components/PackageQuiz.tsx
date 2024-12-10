"use client";

import React, { useState } from 'react';

const PackageQuiz = () => {
  // Separate state for each question's answer
  const [usage, setUsage] = useState('');
  const [collaboration, setCollaboration] = useState('');
  const [projects, setProjects] = useState('');
  const [support, setSupport] = useState('');

  const [packageResult, setPackageResult] = useState('');
  const [currentStep, setCurrentStep] = useState(-1); // Start at -1 to show start page
  const [error, setError] = useState('');

  const questions = [
    {
      question: 'Are you planning on using this product for personal or professional purposes?',
      options: ['Personal', 'Professional'],
      setter: setUsage,
      state: usage
    },
    {
      question: 'How many people will you be collaborating with?',
      options: ['Just me', '1-10', '11+'],
      setter: setCollaboration,
      state: collaboration
    },
    {
      question: 'How many projects are you planning to use this platform for at the same time?',
      options: ['1', '2-5', '6+'],
      setter: setProjects,
      state: projects
    },
    {
      question: 'How many months of premium support do you want to include with your bundle?',
      options: ['6', '12', 'Lifetime'],
      setter: setSupport,
      state: support
    }
  ];

  // Function to calculate package based on the answers
  const calculatePackage = () => {
    if (usage === 'Professional' || collaboration !== 'Just me' || projects !== '1' || support !== '6') {
      return 'Premium - $99/month';
    } else if (usage === 'Personal' && collaboration === 'Just me' && projects === '1' && support === '6') {
      return 'Starter - $29/month';
    } else {
      return 'Professional - $49/month';
    }
  };

  // Handle the next step (move to the next question)
  const handleNext = () => {
    if (questions[currentStep].state === '') {
      setError('Please select an answer before proceeding.');
      return;
    }
  
    setError('');
  
    if (currentStep === questions.length - 1) {
      // Calculate the package when reaching the last question
      const result = calculatePackage();
      setPackageResult(result);
      setCurrentStep(currentStep + 1);
    } else {
      // Move to the next step
      setCurrentStep(currentStep + 1);
    }
  };

  // Handle selection of answers for each question
  const handleSelection = (setter: React.Dispatch<React.SetStateAction<string>>, value: string) => {
    setter(value);
  };

  // Restart the quiz by resetting all states
  const handleRestart = () => {
    setUsage('');
    setCollaboration('');
    setProjects('');
    setSupport('');
    setPackageResult('');
    setCurrentStep(-1);
    setError('');
  };

  // Start the quiz
  const handleStartQuiz = () => {
    setCurrentStep(0);
  };

  return (
    <div className='start-page mx-auto mx-24 my-8 px-24 py-8 justify-between text-center border-solid border-2 border-dark-grey box-content rounded-3xl'>

      {currentStep === -1 && (
        <div className="start-page">
          <p className='2xl:text-lg xl:text-lg lg:text-base md:text-base sm:text-base'>Unsure about which package is best suited for you needs?</p>
          <h2 className='2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl font-light pb-4 pt-2'>Take a quick quiz and find out!</h2>
          <button className="px-6 py-4 bg-lime rounded-full font-weight-bolder text-black hover:bg-lime-hover text-base bold-font" onClick={handleStartQuiz}>Start Quiz</button>
        </div>
      )}

      {currentStep >= 0 && currentStep <= questions.length ? (
        currentStep < questions.length ? (
          <div className="question-section">
            <h2 className='2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl font-light pb-4 pt-2'>{questions[currentStep].question}</h2>
            {questions[currentStep].options.map((option) => (
              <label className='flex justify-center items-center w-auto space-x-3 cursor-pointer hover:bg-white-10 p-4 rounded-lg transition-colors' key={option}>
              <input
                 type="radio"
                 name={questions[currentStep].question}
                 value={option}
                 onChange={() => handleSelection(questions[currentStep].setter, option)}
                 checked={questions[currentStep].state === option}
                 className="appearance-none h-5 w-5 border-2 border-dark-grey rounded-full 
                            checked:bg-lime checked:border-lime checked:hover:bg-lime
                            hover:bg-white-10 hover:border-lime
                            focus:outline-none focus:ring-2 focus:ring-lime"
              />
              <span className='text-xl'>{option}</span>
             </label>
            ))}

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <button className='px-8 py-4 rounded-full font-weight-lighter text-white hover:underline text-base light-font' onClick={handleNext}>
              {currentStep === questions.length - 1 ? 'See Your Package' : 'Next'}
            </button>
          </div>
        ) : (
          // Show result after all questions have been answered
          <div>
            <h2>Your Selected Package:</h2>
            <p>{packageResult}</p>

            <button onClick={handleRestart}>Restart Quiz</button>
          </div>
        )
      ) : null}
    </div>
  );
};

export default PackageQuiz;