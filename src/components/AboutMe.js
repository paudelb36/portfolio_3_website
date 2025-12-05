import { currentStory } from "@/data/data"

export default function AboutMe() {
  return (
    <div className="mb-4">
      <div>
        <h2 className="text-xl font-semibold font-display">About Me</h2>
      </div>
      <div className="card p-4 text-sage-700 space-y-4">
        <div>
          <p className="mt-1">
            Web developer focused on creating clean, easy-to-use websites and learning through real projects.
            Always exploring better ways to design, build, and improve the web.
          </p>
        </div>
        <div>
          <div className="mt-2 flex flex-wrap gap-2">
            {currentStory.skills?.map((s) => (
              <span key={s} className="px-3 py-1 rounded-full bg-sage-100 text-sage-700 text-sm border border-sage-300">
                {s}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-base font-semibold font-display underline">Personal</h3>
          <ul className="mt-2 space-y-1 text-sm">
            {currentStory.status && (
              <li><span className="font-medium">Status:</span> {currentStory.status}</li>
            )}
            {currentStory.currentWork && (
              <li><span className="font-medium">Current Work:</span> {currentStory.currentWork}</li>
            )}
            {currentStory.location && (
              <li><span className="font-medium">Location:</span> {currentStory.location}</li>
            )}
            {currentStory.timezone && (
              <li><span className="font-medium">Timezone:</span> {currentStory.timezone}</li>
            )}
          </ul>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="card p-4 text-sage-700 space-y-3">
          <h3 className="text-base font-semibold font-display underline">Experience</h3>
          <div className="space-y-2">
            <div>
              <div className="font-medium">Frontend Developer Intern</div>
              <div className="text-sm text-sage-600">Redis Digital • Jan 2025 – Apr 2025</div>
            </div>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Assisted in developing and maintaining company websites</li>
              <li>Created interactive UI components using JavaScript and CSS</li>
              <li>Participated in code reviews and implemented feedback</li>
            </ul>
          </div>
        </div>
        <div className="card p-4 text-sage-700 space-y-3">
          <h3 className="text-base font-semibold font-display underline">Education</h3>
          <div className="space-y-3 text-sm">
            <div>
              <div className="font-medium">Bachelor in Computer Application</div>
              <div className="text-sage-600">Tribhuvan University • 2021 – Present</div>
              <div className="mt-2">Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems, Software Engineering</div>
            </div>
            <div>
              <div className="font-medium">Milestone International College</div>
              <div className="text-sage-600">High School • 2019 – 2020</div>
            </div>
            <div>
              <div className="font-medium">Sainik Awasiya Mahavidyalaya</div>
              <div className="text-sage-600">School • 2011 – 2018</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <a href="/assets/Bibek_Paudel_Fresher_Software_Engineer_CV.pdf" target="_blank" rel="noreferrer" className="px-3 py-2 rounded-md bg-sage-100 hover:bg-sage-200 text-sage-700 text-sm transition-colors duration-200">View Resume</a>
        <a href="/assets/Bibek_Paudel_Fresher_Software_Engineer_CV.pdf" download className="px-3 py-2 rounded-md bg-sage-700 hover:bg-sage-800 text-cream text-sm transition-colors duration-200">Download Resume</a>
      </div>
    </div>
  )
}
