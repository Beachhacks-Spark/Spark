import React from 'react'

function EventCard({title, description, date, author, avatar}) {
  return (
    <article className="rounded-xl border-2 border-gray-100 bg-[#fff] w-[40vw]">
        <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8 ">
            <a href="#" className="block shrink-0">
            <img
                alt="Speaker"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                className="h-14 w-14 rounded-lg object-cover"
            />
            </a>

            <div>
            <h3 className="text-5xl">
                <a href="#" className="hover:underline text-4xl">
                    Studying for Midterm!!!{title}
                </a>
            </h3>

            <p className="line-clamp-2 text-lg text-gray-700">
                Event Description{description}
            </p>

            <div className="mt-2 sm:flex sm:items-center sm:gap-2">
                <div className="flex items-center gap-1 text-gray-500">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                </svg>

                <p className="text-xs">comments</p>
                </div>

                <span className="hidden sm:block" aria-hidden="true">&middot;</span>

                <p className="hidden sm:block sm:text-xs sm:text-gray-500">
                Posted by
                <a href="#" className="font-medium underline hover:text-gray-700">
                    {author}
                </a>
                </p>
            </div>
            </div>
        </div>
    </article>
  )
}

export default EventCard