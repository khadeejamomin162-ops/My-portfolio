import { useState } from "react";
import { profile } from "../data/profile";

const helpOptions = [
  "Google Ads setup",
  "Meta Ads setup",
  "Both Google & Meta Ads",
  "Website / landing page",
  "Not sure yet",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    website: "",
    budget: "",
    help: helpOptions[0],
    message: "",
  });
  const [sent, setSent] = useState(false);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New inquiry from ${form.name || "your portfolio site"}`);
    const bodyLines = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Business: ${form.business || "—"}`,
      `Website: ${form.website || "—"}`,
      `Monthly ad budget: ${form.budget || "—"}`,
      `Needs help with: ${form.help}`,
      "",
      "Message:",
      form.message,
    ];
    const body = encodeURIComponent(bodyLines.join("\n"));
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="glass rounded-2xl p-8 text-center max-w-xl mx-auto">
        <p className="font-display text-2xl italic mb-2">Almost there</p>
        <p className="text-stone text-sm leading-relaxed">
          Your email app should be opening with everything filled in — just hit send.
          If it didn't open, email me directly at{" "}
          <a href={`mailto:${profile.email}`} className="text-blue hover:underline">
            {profile.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5 max-w-2xl">
      <Field label="Name" required>
        <input
          required
          value={form.name}
          onChange={update("name")}
          className="input"
          type="text"
          name="name"
        />
      </Field>
      <Field label="Email" required>
        <input
          required
          value={form.email}
          onChange={update("email")}
          className="input"
          type="email"
          name="email"
        />
      </Field>
      <Field label="Business / Company">
        <input value={form.business} onChange={update("business")} className="input" type="text" name="business" />
      </Field>
      <Field label="Website (optional)">
        <input value={form.website} onChange={update("website")} className="input" type="text" name="website" />
      </Field>
      <Field label="Monthly advertising budget (optional)">
        <input value={form.budget} onChange={update("budget")} className="input" type="text" name="budget" placeholder="e.g. ₹20,000" />
      </Field>
      <Field label="What do you need help with?">
        <select value={form.help} onChange={update("help")} className="input" name="help">
          {helpOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </Field>
      <div className="sm:col-span-2">
        <Field label="Message" required>
          <textarea
            required
            value={form.message}
            onChange={update("message")}
            className="input min-h-[120px]"
            name="message"
          />
        </Field>
      </div>
      <button
        type="submit"
        className="sm:col-span-2 bg-blue-dark text-ivory px-6 py-3 rounded-full text-sm font-medium hover:bg-blue transition-colors w-fit"
      >
        Send message
      </button>
    </form>
  );
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="block text-sm text-stone mb-1.5">
        {label} {required && <span className="text-blue">*</span>}
      </span>
      {children}
    </label>
  );
}
