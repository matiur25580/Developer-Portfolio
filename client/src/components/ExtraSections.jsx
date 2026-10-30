import { profile } from '../data/profile';
export default function ExtraSections(){
  return (
    <div className="dark:text-white">
      <section className="p-8 bg-white dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-6">🛠️ Skills & Programming</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          <div className="border p-4 rounded-xl"><h3 className="font-bold text-blue-600">Frontend</h3><p className="text-sm mt-2">{profile.skills.frontend.join(', ')}</p></div>
          <div className="border p-4 rounded-xl"><h3 className="font-bold text-green-600">Backend</h3><p className="text-sm mt-2">{profile.skills.backend.join(', ')}</p></div>
          <div className="border p-4 rounded-xl"><h3 className="font-bold text-purple-600">Database</h3><p className="text-sm mt-2">{profile.skills.database.join(', ')}</p></div>
          <div className="border p-4 rounded-xl"><h3 className="font-bold text-orange-600">Tools</h3><p className="text-sm mt-2">{profile.skills.tools.join(', ')}</p></div>
        </div>
        <div className="max-w-4xl mx-auto mt-6 grid md:grid-cols-2 gap-4">
          <div className="border p-4 rounded-xl"><h3 className="font-bold">💻 Programming Languages</h3><p className="text-sm mt-2">{profile.programming.join(', ')}</p></div>
          <div className="border p-4 rounded-xl"><h3 className="font-bold">🧠 Knowledge</h3><p className="text-sm mt-2">{profile.knowledge.join(', ')}</p></div>
        </div>
      </section>

      <section className="p-8 bg-gray-50 dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-6">💼 Experience</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {profile.experience.map((e,i)=>(
            <div key={i} className="bg-white dark:bg-gray-700 p-5 rounded-xl shadow">
              <h3 className="font-bold text-lg">{e.title}</h3>
              <p className="text-sm text-blue-600 dark:text-blue-400">{e.period}</p>
              <p className="text-sm mt-2">{e.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="p-8 bg-white dark:bg-gray-900 text-center">
        <h2 className="text-3xl font-bold mb-6">🌐 Website & Social Media</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <a href={profile.socialMedia.github} className="bg-black text-white px-6 py-2 rounded-full dark:bg-white dark:text-black">GitHub</a>
          <a href={profile.socialMedia.linkedin} className="bg-blue-700 text-white px-6 py-2 rounded-full">LinkedIn</a>
          <a href={profile.socialMedia.twitter} className="bg-black text-white px-6 py-2 rounded-full">Twitter / X</a>
          <a href={profile.website} className="bg-green-600 text-white px-6 py-2 rounded-full">Portfolio Website</a>
        </div>
        <h3 className="text-2xl font-bold mt-8 mb-3">🗣️ Languages</h3>
        <p>{profile.languages.join(' | ')}</p>
        <h3 className="text-2xl font-bold mt-6 mb-3">📩 Contact</h3>
        <p>📧 {profile.email} | 📍 {profile.location}</p>
      </section>
    </div>
  );
}
