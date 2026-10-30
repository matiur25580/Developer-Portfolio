import { profile } from '../data/profile';
export default function Hero(){
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center p-8 bg-gradient-to-br from-indigo-100 via-white to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-black dark:text-white">
      <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-4xl font-bold text-white mb-4">RA</div>
      <h1 className="text-5xl font-extrabold">{profile.name}</h1>
      <p className="text-2xl text-blue-600 dark:text-blue-400 mt-2">{profile.role}</p>
      <p className="mt-3 max-w-2xl">{profile.about}</p>
      <div className="flex gap-4 mt-6">
        <a href={profile.github} className="bg-black dark:bg-white dark:text-black text-white px-6 py-2 rounded-full">GitHub</a>
        <a href="#projects" className="bg-blue-600 text-white px-6 py-2 rounded-full">View Projects</a>
        <a href="#contact" className="bg-green-600 text-white px-6 py-2 rounded-full">Hire Me</a>
      </div>
      <div className="grid grid-cols-3 gap-6 mt-10 text-center">
        <div><h3 className="text-3xl font-bold text-purple-600">6+</h3><p>Enterprise Projects</p></div>
        <div><h3 className="text-3xl font-bold text-blue-600">14+</h3><p>Tech Skills</p></div>
        <div><h3 className="text-3xl font-bold text-green-600">3 Years</h3><p>Experience Level</p></div>
      </div>
    </section>
  );
}
