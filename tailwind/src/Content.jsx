export default function Content() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      {/* Background Grid */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-800"
        >
          <defs>
            <pattern
              id="grid-pattern"
              width="200"
              height="200"
              x="50%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#grid-pattern)"
            strokeWidth="0"
          />
        </svg>
      </div>

      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        {/* Left Section */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold text-indigo-400">
                Strength & Performance
              </p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                Transform Your Body & Mind
              </h1>
              <p className="mt-6 text-xl text-gray-300">
                We’re a community of coaches, trainers, and wellness experts
                dedicated to helping you reach your fitness goals. From
                personalized training to holistic nutrition plans — we combine
                science and motivation to deliver real results.
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1712992031203-45538d32ab43?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=900 "
            alt="People training in a gym"
            className="w-full max-w-none rounded-xl bg-gray-800 shadow-xl ring-1 ring-white/10 sm:w-[36rem]"
          />
        </div>

        {/* Description Section */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base text-gray-400 lg:max-w-lg">
              <p>
                At{" "}
                <span className="text-indigo-400 font-medium">
                  IronForge Fitness
                </span>
                , we started with a simple belief — that fitness should empower
                everyday life, not complicate it. We create structured,
                evidence-based programs for members who want to build strength,
                improve mobility, and feel confident.
              </p>

              <ul role="list" className="mt-8 space-y-8 text-gray-400">
                <li className="flex gap-x-3">
                  <span className="mt-1 size-5 flex-none text-indigo-400">
                    🏋️
                  </span>
                  <span>
                    <strong className="font-semibold text-white">
                      Personalized Coaching
                    </strong>{" "}
                    — Tailored training plans and one-on-one coaching to help
                    you progress safely and efficiently.
                  </span>
                </li>

                <li className="flex gap-x-3">
                  <span className="mt-1 size-5 flex-none text-indigo-400">
                    🍎
                  </span>
                  <span>
                    <strong className="font-semibold text-white">
                      Nutrition & Wellness
                    </strong>{" "}
                    — Customized meal guidance and recovery strategies to
                    complement your training and lifestyle.
                  </span>
                </li>

                <li className="flex gap-x-3">
                  <span className="mt-1 size-5 flex-none text-indigo-400">
                    🏠
                  </span>
                  <span>
                    <strong className="font-semibold text-white">
                      Modern Facilities
                    </strong>{" "}
                    — State-of-the-art equipment, functional training zones,
                    and flexible class schedules for every level.
                  </span>
                </li>
              </ul>

              <p className="mt-8">
                We believe transformation starts with commitment. Our coaches,
                therapists, and community support each other every step of the
                way to create consistent, sustainable habits that last.
              </p>

              <h2 className="mt-16 text-2xl font-bold tracking-tight text-white">
                Start Your Fitness Journey Today
              </h2>
              <p className="mt-6">
                Whether you’re new to training or chasing a new PR — we’ll help
                you set clear goals and build a plan that fits your life and
                ambitions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
