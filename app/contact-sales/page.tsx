"use client";

import { useState, type FormEvent } from "react";

const teamSizes = ["1–10", "11–50", "51–200", "201–1000", "1000+"] as const;

interface FormData {
  firstName: string;
  lastName: string;
  workEmail: string;
  company: string;
  jobTitle: string;
  teamSize: string;
  message: string;
}

const initial: FormData = {
  firstName: "",
  lastName: "",
  workEmail: "",
  company: "",
  jobTitle: "",
  teamSize: "",
  message: "",
};

export default function ContactSalesPage() {
  const [form, setForm] = useState<FormData>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  function set(field: keyof FormData) {
    return (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSending(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 800));
    setSending(false);
    setSubmitted(true);
  }

  return (
    <div className="w-full min-h-screen bg-white">
      <section className="mx-auto max-w-6xl px-6 pt-36 pb-24">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-semibold tracking-[3px] text-[var(--primary)] uppercase">
            Contact Sales
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl font-semibold text-text-0 leading-[1.15]">
            Let&apos;s find the right plan for your team
          </h1>
          <p className="mt-5 text-base leading-relaxed text-grey-5">
            Tell us about your needs and we&apos;ll get back to you within one
            business day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 lg:gap-24">
          {/* ─── Form ─── */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-start gap-4 rounded-2xl border border-grey-1 bg-grey-0 p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary)]">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-grey-9">
                  Thanks, {form.firstName}!
                </h2>
                <p className="text-grey-5 leading-relaxed">
                  We&apos;ve received your request. A member of our sales team
                  will reach out to{" "}
                  <strong className="text-grey-8">{form.workEmail}</strong>{" "}
                  within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field
                    label="First name"
                    value={form.firstName}
                    onChange={set("firstName")}
                    required
                  />
                  <Field
                    label="Last name"
                    value={form.lastName}
                    onChange={set("lastName")}
                    required
                  />
                </div>

                <Field
                  label="Work email"
                  type="email"
                  value={form.workEmail}
                  onChange={set("workEmail")}
                  required
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field
                    label="Company"
                    value={form.company}
                    onChange={set("company")}
                    required
                  />
                  <Field
                    label="Job title"
                    value={form.jobTitle}
                    onChange={set("jobTitle")}
                  />
                </div>

                {/* Team size */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-grey-8">
                    Team size
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {teamSizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() =>
                          setForm((f) => ({ ...f, teamSize: size }))
                        }
                        className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                          form.teamSize === size
                            ? "border-[var(--primary)] bg-[var(--primary-light-default)] text-[var(--brand-8)]"
                            : "border-grey-1 text-grey-5 hover:border-grey-2 hover:text-grey-7"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-grey-8">
                    Anything else you&apos;d like us to know?
                    <span className="ml-1 text-grey-3 font-normal">
                      Optional
                    </span>
                  </label>
                  <textarea
                    value={form.message}
                    onChange={set("message")}
                    rows={4}
                    className="w-full resize-none rounded-xl border border-grey-1 bg-white px-4 py-3 text-sm text-grey-9 outline-none transition-colors placeholder:text-grey-3 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-light-active)]"
                    placeholder="Tell us about your use case, timeline, or specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={
                    sending ||
                    !form.firstName ||
                    !form.lastName ||
                    !form.workEmail ||
                    !form.company
                  }
                  className="inline-flex items-center gap-2 rounded-full bg-grey-9 px-7 py-3 text-sm font-semibold text-white transition-all hover:bg-[var(--primary)] disabled:opacity-40 disabled:pointer-events-none"
                >
                  {sending ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Sending…
                    </>
                  ) : (
                    "Get in touch"
                  )}
                </button>

                <p className="text-xs text-grey-3 leading-relaxed">
                  By submitting this form you agree to our{" "}
                  <a
                    href="/privacy-policy"
                    className="underline hover:text-grey-5"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
              </form>
            )}
          </div>

          {/* ─── Sidebar ─── */}
          <aside className="flex flex-col gap-8 lg:pt-2">
            <SideBlock
              title="Enterprise features"
              items={[
                "Custom AI model training on your data",
                "SSO & advanced team permissions",
                "Dedicated account manager",
                "Priority support with SLA",
                "Custom integrations & API access",
              ]}
            />
            <SideBlock
              title="Trusted by teams at"
              items={[
                "500+ companies worldwide",
                "Fortune 500 enterprises",
                "Fast-growing startups",
              ]}
            />
            <div className="rounded-2xl border border-grey-1 bg-grey-0 p-6">
              <p className="text-sm text-grey-5 leading-relaxed">
                &ldquo;LUCI transformed how our team captures and acts on
                meeting insights. We went from losing 80% of action items to
                completing 95% of them.&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold text-grey-8">
                Sarah Chen
              </p>
              <p className="text-xs text-grey-4">VP of Operations</p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

/* ─── Reusable field ─── */

function Field({
  label,
  type = "text",
  value,
  onChange,
  required,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-grey-8">
        {label}
        {required && <span className="ml-0.5 text-[var(--primary)]">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-xl border border-grey-1 bg-white px-4 py-3 text-sm text-grey-9 outline-none transition-colors placeholder:text-grey-3 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-light-active)]"
      />
    </div>
  );
}

/* ─── Sidebar block ─── */

function SideBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold text-grey-9 uppercase tracking-wider">
        {title}
      </h3>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 text-sm text-grey-5"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="mt-0.5 shrink-0"
            >
              <path
                d="M3 8.5L6.5 12L13 4"
                stroke="var(--primary)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
