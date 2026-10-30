import { profile } from '../data/profile';
export default function Projects(){
  return (
    <section id="projects" className="p-8 bg-white dark:bg-gray-900 dark:text-white">
      <h2 className="text-4xl font-bold text-center mb-8">🚀 My Enterprise Projects ({profile.projectsCount})</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {profile.projects.map((p,i)=>(
          <div key={i} className="border rounded-2xl p-5 shadow-lg hover:scale-105 transition bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
            <h3 className="font-bold text-xl mb-2">{i+1}. {p.name}</h3>
            <p className="text-sm text-purple-600 dark:text-purple-400 font-semibold">{p.tech}</p>
            <p className="my-2">{p.desc}</p>
            <a href={p.repo} className="text-blue-600 font-semibold">🔗 GitHub Repo →</a>
          </div>
        ))}
      </div>
    </section>
  );
}
