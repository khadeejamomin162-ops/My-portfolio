import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="max-w-content mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-display italic text-lg">Ready to run your next campaign?</p>
          <a
            href={`mailto:${profile.email}`}
            className="text-sm text-blue hover:underline"
          >
            {profile.email}
          </a>
        </div>
        <div className="flex items-center gap-5 text-sm text-stone">
          <a href={profile.instagram.url} target="_blank" rel="noreferrer" className="hover:text-ivory transition-colors">
            Instagram
          </a>
          <a href={profile.upwork} target="_blank" rel="noreferrer" className="hover:text-ivory transition-colors">
            Upwork
          </a>
          <a href={profile.fiverr} target="_blank" rel="noreferrer" className="hover:text-ivory transition-colors">
            Fiverr
          </a>
        </div>
      </div>
    </footer>
  );
}
