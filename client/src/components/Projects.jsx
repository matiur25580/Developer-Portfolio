import { profile } from '../data/profile';
const colors=["from-blue-500 to-cyan-400","from-purple-500 to-pink-500","from-green-500 to-emerald-400","from-orange-500 to-red-400","from-indigo-500 to-blue-500","from-pink-500 to-rose-400"];
export default function Projects(){
  return (
    <section id="projects" className="p-8 bg-gradient-to-br from-violet-50 via-white to-cyan-50 dark:from-gray-900 dark:to-black dark:text-white min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-8">🚀 <span className="bg-gradient-to-r from-violet-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">My Colourful Projects ({profile.projectsCount})</span></h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {profile.projects.map((p,i)=>(
          <div key={i} className={`bg-gradient-to-br ${colors[i%6]} p-1 rounded-3xl shadow-2xl hover:scale-105 transition transform`}>
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-5 h-full">
              <div className={`inline-block px-3 py-1 rounded-full text-white text-xs font-bold bg-gradient-to-r ${colors[i%6]} mb-3`}>Project {i+1}</div>
              <h3 className="font-bold text-lg mb-2">{p.name}</h3>
              <p className="text-sm font-bold text-purple-600 dark:text-purple-400">{p.tech}</p>
              <p className="my-2 text-sm opacity-80">{p.desc}</p>
              <a href={p.repo} className="inline-block mt-2 bg-black dark:bg-white dark:text-black text-white px-4 py-2 rounded-full text-sm font-bold">🔗 GitHub →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
