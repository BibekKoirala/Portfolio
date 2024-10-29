import React from 'react'
import INFO from '../MyInfo'

function Education() {
    return (
        <section id='education' className="bg-gray-100 py-10">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-color3">Education</h2>
            </div>
            <hr />
            <div className='px-5 py-10'>

                <ol className="items-center sm:flex justify-center">
                    {
                        INFO.education.map((value) => {
                            return (
                                <li className="relative mb-6 sm:mb-0" key={value.degree}>
                                    <div className="flex items-center">
                                        <div className="z-10 flex items-center justify-center w-6 h-6 bg-color6 rounded-full ring-0 ring-white dark:bg-color2 sm:ring-8 dark:ring-color3 shrink-0">
                                            <svg className="w-2.5 h-2.5 text-color5 dark:text-color6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                            </svg>
                                        </div>
                                        <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                                    </div>
                                    <div className="mt-3 sm:pe-8">
                                        <h3 className="text-lg font-semibold text-gray-900 ">{value.degree}</h3>
                                        <h5>{value.institution} , {value.location}</h5>
                                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{ }{value.period}</time>
                                        <p className="text-justify font-normal text-gray-500 dark:text-gray-400">{value.description}</p>
                                    </div>
                                </li>
                            )
                        })
                    }


                </ol>


            </div>
        </section>

    )
}

export default Education