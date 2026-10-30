import { profile } from '../data/profile';
export default function Home(){
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold">{profile.name}</h1>
      <p className="text-xl text-blue-400">{profile.role}</p>
      <p>{profile.location} | {profile.email}</p>
      <h2 className="text-2xl mt-6 font-bold">About</h2><p>{profile.about}</p>
      <h2 className="text-2xl mt-6 font-bold">Education</h2>
      <p>{profile.education.degree} - {profile.education.college}, {profile.education.university}, {profile.education.year}</p>
      <h2 className="text-2xl mt-6 font-bold">Projects ({profile.projectsCount})</h2>
      {profile.projects.map((p,i)=><div key={i} className="border p-3 my-2 rounded"><h3 className="font-bold">{p.name}</h3><p>{p.tech} - {p.desc}</p><a className="text-blue-400" href={p.repo}>{p.repo}</a></div>)}
      <h2 className="text-2xl mt-6 font-bold">Skills</h2><p>{profile.skills.join(', ')}</p>
      <h2 className="text-2xl mt-6 font-bold">Hobbies</h2><p>{profile.hobbies.join(', ')}</p>
    </div>
  );
}
