export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 px-4 py-10">
      <div className="mx-auto max-w-6xl text-center space-y-6">
        {/* About the Scheme */}
        <p className="mx-auto max-w-3xl text-sm leading-relaxed text-slate-300">
          Pradhan Mantri Bhartiya Jan Aushadhi Pariyojana is a Government of
          India initiative aimed at making quality generic medicines available
          and affordable to all citizens through dedicated Jan Aushadhi Kendras.
        </p>

        {/* Official Link */}
        <div>
          <a
            href="https://janaushadhi.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md border border-slate-600 px-5 py-2 text-sm font-medium text-slate-100 transition hover:bg-slate-800 hover:text-white"
          >
            Visit Official Website
          </a>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-slate-700" />

        {/* Disclaimer / Copyright */}
        <div className="space-y-2">
          <p className="text-xs text-slate-400">
            © Pradhan Mantri Bhartiya Jan Aushadhi Pariyojana
          </p>
          <p className="text-xs text-slate-400">
            This site is managed by private Janaushadhi Kendra, Govt. of India
            is not liable for it.
          </p>
        </div>
      </div>
    </footer>
  );
}
