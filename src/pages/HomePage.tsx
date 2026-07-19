import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  ClipboardList,
  Clock,
  FileText,
  GitBranch,
  Mail,
  MessageCircle,
  Settings,
  Shield,
  Users
} from "lucide-react";
import { Button } from "../components/ui/Button";

const problems = [
  {
    icon: Clock,
    title: "Slow intake follow-up",
    description:
      "New leads and claimant questions can sit too long when follow-up depends on manual reminders."
  },
  {
    icon: FileText,
    title: "Missing document tracking",
    description:
      "Forms, signatures, and supporting documents become harder to manage as case volume grows."
  },
  {
    icon: GitBranch,
    title: "Filing handoff friction",
    description:
      "Work slows down when intake, filing, and case teams do not share a clear handoff process."
  },
  {
    icon: MessageCircle,
    title: "Repeated client updates",
    description:
      "Routine status questions pull staff away from higher-value client support and case work."
  },
  {
    icon: ClipboardList,
    title: "Inconsistent task ownership",
    description:
      "Teams lose time when ownership, reminders, and next steps are not visible in one workflow."
  },
  {
    icon: Users,
    title: "Staff time lost to admin",
    description:
      "Repetitive operational work compounds across intake, filing, follow-up, and documentation."
  }
];

const services = [
  {
    icon: CheckCircle2,
    title: "Workflow Assessment",
    description: "Identify bottlenecks, handoff gaps, and automation opportunities before implementation."
  },
  {
    icon: MessageCircle,
    title: "Intake Workflow Automation",
    description: "Improve lead capture, qualification, follow-up, and intake-to-filing handoff."
  },
  {
    icon: FileText,
    title: "Filing Workflow Automation",
    description: "Support document tracking, signature reminders, filing preparation, and status visibility."
  },
  {
    icon: ClipboardList,
    title: "Case Management Support",
    description: "Reduce repetitive reminders, updates, and internal coordination across active cases."
  },
  {
    icon: Mail,
    title: "Client Follow-Up Systems",
    description: "Automate routine communication while keeping sensitive conversations human."
  },
  {
    icon: Settings,
    title: "SOP and Documentation",
    description: "Document improved workflows so teams can maintain and improve them over time."
  }
];

const processSteps = [
  "Discovery call",
  "Workflow review",
  "Bottleneck mapping",
  "Recommendation roadmap",
  "Optional implementation"
];

const trustItems = [
  "Expertise in case intake and filing workflows.",
  "Workflow-first recommendations before tool decisions",
  "Designed to upgrade your existing systems, not disrupt your process.",
  "Privacy-safe public inquiry process",
  "Documentation and handoff built into implementation"
];

const faqs = [
  {
    question: "Is Sharpened a software platform?",
    answer:
      "No. Sharpened is a workflow automation consultancy that helps firms improve processes and connect tools where useful."
  },
  {
    question: "Do we need to replace our current systems?",
    answer:
      "The starting point is understanding the current workflow. Replacement is not assumed or required."
  },
  {
    question: "What happens during a Workflow Assessment?",
    answer:
      "Sharpened reviews high-level workflow context, maps bottlenecks, and recommends prioritized improvements."
  },
  {
    question: "Should we submit claimant or client details?",
    answer:
      "No. Public forms should only include high-level workflow context, not sensitive claimant or client information."
  }
];

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
  theme?: "light" | "dark";
};

function SectionHeader({ eyebrow, title, description, theme = "light" }: SectionHeaderProps) {
  const isDark = theme === "dark";
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {eyebrow ? (
        <p className={`mb-3 text-xs font-extrabold uppercase tracking-[0.15em] ${isDark ? "text-[#FFC107]" : "text-[#1D4ED8]"}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`font-display text-3xl font-extrabold tracking-tight sm:text-4xl ${isDark ? "text-white" : "text-[#0D1B3D]"}`}>
        {title}
      </h2>
      <p className={`mt-4 text-base leading-relaxed sm:text-lg ${isDark ? "text-white/80" : "text-[#52565E]"}`}>
        {description}
      </p>
    </div>
  );
}

export function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-[#0D1B3D] py-20 sm:py-28 lg:py-32">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg.png"
            alt="Modern office with laptop dashboard"
            className="h-full w-full object-cover object-center opacity-35 select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B3D] via-[#0D1B3D]/90 to-[#0D1B3D]/75" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="flex flex-col justify-center text-white">
            <p className="mb-4 text-xs sm:text-sm font-extrabold uppercase tracking-[0.15em] text-[#FFC107]">
              Law firm automation systems
            </p>
            <h1 className="font-display max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Workflow automation for law firms
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
              We help law firms reduce repetitive tasks, filing, follow-up, and handoff
              work through practical workflow assessment and automation.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                href="/workflow-assessment"
                icon={<Calendar aria-hidden="true" size={18} />}
                variant="primary"
                className="shadow-xl shadow-[#FFC107]/20 hover:scale-[1.02] transition-transform duration-150"
              >
                Schedule a Workflow Assessment
              </Button>
              <Button
                href="#services"
                icon={<ArrowRight aria-hidden="true" size={18} />}
                variant="inverse"
                className="hover:scale-[1.02] transition-transform duration-150"
              >
                View Services
              </Button>
            </div>
            <p className="mt-6 max-w-xl text-xs sm:text-sm leading-relaxed text-white/60">
              Workflow-first, tool-agnostic, and designed to improve existing operations before recommending implementation.
            </p>
          </div>

          <div className="flex items-center">
            {/* Glassmorphism Card */}
            <div className="w-full rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-md shadow-2xl">
              <p className="text-xs font-bold uppercase tracking-wider text-[#FFC107]">Assessment preview</p>
              <h2 className="font-display mt-3 text-2xl font-bold text-white leading-snug">
                From scattered steps to a clear workflow roadmap
              </h2>
              <ol className="mt-8 space-y-5">
                {processSteps.map((step, index) => (
                  <li className="flex items-start gap-4 group" key={step}>
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-white border border-white/10 group-hover:bg-[#FFC107] group-hover:text-[#0D1B3D] group-hover:border-[#FFC107] transition-all duration-200">
                      {index + 1}
                    </span>
                    <div className="pt-1">
                      <span className="text-base font-semibold text-white/90 group-hover:text-white transition-colors">{step}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="bg-white py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            description="We build intelligent automations that eliminate manual tasks, reduce delays, and keep your firm's operations running smoothly from intake to case resolution."
            eyebrow="Solutions"
            title="Every minute your team spends on repetitive work is time taken away from your clients."
          />
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {problems.map(({ description, icon: Icon, title }) => (
              <article
                className="group rounded-xl border border-[#D8DCE3] bg-white p-5 sm:p-8 hover:-translate-y-1 hover:shadow-lg hover:border-[#1D4ED8]/30 transition-all duration-200"
                key={title}
              >
                <span className="inline-flex items-center justify-center rounded-lg bg-[#F2F4F7] p-3 text-[#1D4ED8] group-hover:bg-[#1D4ED8] group-hover:text-white transition-colors duration-200">
                  <Icon aria-hidden="true" size={24} />
                </span>
                <h3 className="font-display mt-4 sm:mt-6 text-[17px] sm:text-xl font-bold text-[#0D1B3D]">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#52565E]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative overflow-hidden py-20 sm:py-24 border-y border-[#D8DCE3]/60">
        {/* Background Image with Light Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/solution-bg.png"
            alt="Team collaborating in modern office"
            className="h-full w-full object-cover object-center opacity-30 select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F2F4F7]/95 via-[#F2F4F7]/80 to-[#F2F4F7]/65" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="flex flex-col justify-center">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.15em] text-[#1D4ED8]">
              Solution
            </p>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#0D1B3D] sm:text-4xl">
              Diagnose before automating
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#52565E] sm:text-lg">
              Sharpened starts by understanding the workflow. The assessment identifies
              what should be simplified, documented, automated, or left human.
            </p>
            <div className="mt-8">
              <Button href="/workflow-assessment" icon={<ArrowRight aria-hidden="true" size={18} />}>
                Schedule Assessment
              </Button>
            </div>
          </div>
          <div className="rounded-2xl border border-[#D8DCE3] bg-white p-8 shadow-sm">
            <ol className="space-y-6">
              {processSteps.map((step, index) => (
                <li className="flex gap-4 group" key={step}>
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#D8DCE3] text-sm font-bold text-[#0D1B3D] group-hover:border-[#1D4ED8] group-hover:bg-[#1D4ED8] group-hover:text-white transition-all duration-200">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-[#0D1B3D] group-hover:text-[#1D4ED8] transition-colors pt-1.5">{step}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#62666D]">
                      Clarify the current state and move toward a practical next step.
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative overflow-hidden bg-[#0D1B3D] py-20 sm:py-24" aria-label="Workflow areas Sharpened can improve">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/services-bg.png"
            alt="Analytics dashboard on screen"
            className="h-full w-full object-cover object-center opacity-25 select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B3D]/95 via-[#0D1B3D]/90 to-[#0D1B3D]/95" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            description="Each service area is tied to an operational outcome, with the Workflow Assessment as the recommended starting point."
            eyebrow="Services"
            title="Workflow areas Sharpened can improve"
            theme="dark"
          />
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ description, icon: Icon, title }) => (
              <article
                className="group rounded-xl border border-white/10 bg-white/5 p-5 sm:p-8 backdrop-blur-sm hover:-translate-y-1 hover:shadow-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                key={title}
              >
                <span className="inline-flex items-center justify-center rounded-lg bg-white/10 p-3 text-[#FFC107] group-hover:bg-[#FFC107] group-hover:text-[#0D1B3D] transition-colors duration-200">
                  <Icon aria-hidden="true" size={24} />
                </span>
                <h3 className="font-display mt-4 sm:mt-6 text-[17px] sm:text-xl font-bold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70 group-hover:text-white/80 transition-colors">{description}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Button href="/services" icon={<ArrowRight aria-hidden="true" size={18} />} variant="inverse">
              Explore Services
            </Button>
          </div>
        </div>
      </section>

      {/* Systems Section */}
      <section id="systems" className="py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            description="Whether it's intake, document collection, case management, or client communication, we create automations that save time and keep your practice running smoothly."
            eyebrow="Systems"
            title="Better systems create better client experiences."
          />
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <article
                className="relative rounded-xl border border-[#D8DCE3] bg-white p-5 sm:p-6 hover:shadow-md hover:border-[#1D4ED8]/30 transition-all duration-200 group overflow-hidden"
                key={step}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#1D4ED8] transition-colors duration-200" />
                <span className="font-display text-sm font-extrabold uppercase tracking-wider text-[#1D4ED8]">
                  Step {index + 1}
                </span>
                <h3 className="font-display mt-3 text-[16px] sm:text-lg font-bold text-[#0D1B3D]">
                  {step}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#62666D]">
                  {index === 0 && "Initial alignment call to understand operations."}
                  {index === 1 && "Deep dive analysis into actual task sequences."}
                  {index === 2 && "Identifying key speed bumps and delay zones."}
                  {index === 3 && "Actionable recommendations for tech or process changes."}
                  {index === 4 && "Collaborative configuration and handoff systems."}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-[#0D1B3D] py-20 text-white sm:py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-[#1D4ED8]/20 blur-2xl" />
        <div className="absolute -right-16 -bottom-16 h-48 w-48 rounded-full bg-[#FFC107]/10 blur-2xl" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              Automation should feel like an upgrade—not a disruption.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
              Every engagement starts with understanding how your firm works today. We
              recommend practical improvements that fit your existing workflows—not
              unnecessary software or complicated system changes.
            </p>
            <div className="mt-8">
              <Button href="/contact" icon={<ArrowRight aria-hidden="true" size={18} />} variant="inverse">
                Discuss Your Workflow
              </Button>
            </div>
          </div>
          <ul className="space-y-4 flex flex-col justify-center">
            {trustItems.map((item) => (
              <li className="flex gap-4 items-start p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all duration-150" key={item}>
                <Shield aria-hidden="true" className="mt-0.5 shrink-0 text-[#FFC107]" size={22} />
                <span className="leading-relaxed text-white/90 text-[15px]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faqs" className="bg-white py-20 sm:py-24">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            description="A few practical answers before scheduling a workflow conversation."
            title="Common questions before scheduling"
          />
          <div className="space-y-4">
            {faqs.map(({ answer, question }) => (
              <details
                className="group border border-[#D8DCE3] rounded-xl bg-white p-5 transition-all duration-200 open:shadow-md [&_summary::-webkit-details-marker]:hidden"
                key={question}
              >
                <summary className="flex items-center justify-between cursor-pointer list-none font-display font-bold text-[#0D1B3D] focus:outline-none hover:text-[#1D4ED8]">
                  <span className="pr-4">{question}</span>
                  <span className="flex size-6 items-center justify-center rounded-full bg-[#F2F4F7] text-[#0D1B3D] transition-transform duration-200 group-open:rotate-180 group-open:bg-[#1D4ED8] group-open:text-white">
                    <svg
                      className="size-3.5 fill-none stroke-current stroke-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="mt-4 pt-4 border-t border-[#D8DCE3]/60 text-sm leading-relaxed text-[#52565E] animate-in fade-in duration-200">
                  {answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA / Contact Section */}
      <section id="contact" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[#0D1B3D] px-8 py-12 shadow-2xl sm:px-12 sm:py-16 lg:grid lg:grid-cols-2 lg:gap-x-12 lg:px-16 lg:py-20">
            {/* Background elements */}
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#1D4ED8]/20 blur-3xl" />
            <div className="absolute -left-20 -bottom-20 h-60 w-60 rounded-full bg-[#FFC107]/10 blur-3xl" />

            <div className="relative z-10 flex flex-col justify-center">
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Ready to find the workflow worth fixing first?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/80">
                Start with a focused, confidential workflow conversation and walk away with a clear assessment roadmap for your practice.
              </p>
            </div>
            <div className="relative z-10 mt-10 flex items-center lg:mt-0 lg:justify-end">
              <Button
                href="/workflow-assessment"
                icon={<Calendar aria-hidden="true" size={18} />}
                variant="primary"
                size="lg"
                className="shadow-xl shadow-[#FFC107]/20 hover:scale-[1.02] transition-transform duration-150"
              >
                Schedule Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
