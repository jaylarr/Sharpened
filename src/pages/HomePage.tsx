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
import { PageMeta } from "../components/blog/PageMeta";
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
  {
    title: "Discovery call",
    description: "Initial alignment call to understand operations."
  },
  {
    title: "Workflow review",
    description: "Deep dive analysis into actual task sequences."
  },
  {
    title: "Bottleneck mapping",
    description: "Identifying key speed bumps and delay zones."
  },
  {
    title: "Recommendation roadmap",
    description: "Actionable recommendations for tech or process changes."
  },
  {
    title: "Optional implementation",
    description: "Collaborative configuration and handoff systems."
  }
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
  align?: "left" | "center";
};

function SectionHeader({
  eyebrow,
  title,
  description,
  theme = "light",
  align = "left"
}: SectionHeaderProps) {
  const isDark = theme === "dark";
  const centered = align === "center";

  return (
    <div className={`mb-12 ${centered ? "mx-auto max-w-3xl text-center" : "max-w-4xl lg:grid lg:max-w-none lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16"}`}>
      <div>
        {eyebrow ? (
          <p className={`mb-3 text-xs font-extrabold uppercase tracking-[0.18em] ${isDark ? "text-[#FFC107]" : "text-[#1D4ED8]"}`}>
            {eyebrow}
          </p>
        ) : null}
        <h2 className={`font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.035em] sm:text-4xl lg:text-[2.75rem] ${isDark ? "text-white" : "text-[#0D1B3D]"}`}>
          {title}
        </h2>
      </div>
      <p className={`mt-5 max-w-2xl text-base leading-8 lg:mt-0 ${isDark ? "text-white/70" : "text-[#52565E]"}`}>
        {description}
      </p>
    </div>
  );
}

export function HomePage() {
  return (
    <>
      <PageMeta
        description="Sharpened helps law firms reduce repetitive intake, filing, follow-up, and handoff work through practical workflow assessment and automation."
        path="/"
        title="Workflow Automation for Law Firms"
      />

      <section className="relative isolate min-h-[calc(100vh-5rem)] overflow-hidden bg-[#0D1B3D] text-white">
        <div className="absolute inset-0 -z-20">
          <img
            src="/images/hero-bg.png"
            alt="Modern office with laptop dashboard"
            className="h-full w-full object-cover object-center opacity-20"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#0D1B3D_0%,rgba(13,27,61,0.97)_44%,rgba(13,27,61,0.78)_100%)]" />
        <div className="absolute inset-y-0 left-[52%] -z-10 hidden w-px bg-white/10 lg:block" />

        <div className="mx-auto grid min-h-[calc(100vh-5rem)] w-full max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:px-8 lg:py-24">
          <div>
            <div className="mb-7 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.18em] text-[#FFC107]">
              <span className="h-px w-9 bg-[#FFC107]" aria-hidden="true" />
              Law firm automation systems
            </div>
            <h1 className="font-display max-w-3xl text-[2.7rem] font-extrabold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-[4rem]">
              Workflow automation for law firms
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/72 sm:text-xl">
              We help law firms reduce repetitive tasks, filing, follow-up, and handoff
              work through practical workflow assessment and automation.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                href="/workflow-assessment"
                icon={<Calendar aria-hidden="true" size={18} />}
                size="lg"
                variant="primary"
              >
                Schedule a Workflow Assessment
              </Button>
              <Button href="#services" size="lg" variant="inverse">
                View Services
              </Button>
            </div>
            <p className="mt-7 max-w-xl border-t border-white/12 pt-6 text-sm leading-7 text-white/60">
              Workflow-first, tool-agnostic, and designed to improve existing operations before recommending implementation.
            </p>
          </div>

          <figure className="relative mx-auto w-full max-w-xl lg:ml-auto">
            <div className="absolute -inset-5 -z-10 rounded-[2rem] border border-white/8" />
            <div className="overflow-hidden rounded-2xl border border-white/15 bg-[#F7F8FA] text-[#0D1B3D] shadow-[0_32px_80px_rgba(2,8,23,0.4)]">
              <div className="border-b border-[#D8DCE3] px-5 py-4 sm:px-6">
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#1D4ED8]">Assessment preview</p>
                  <p className="font-display mt-2 text-lg font-bold leading-snug sm:text-xl">From scattered steps to a clear workflow roadmap</p>
                </div>
              </div>
              <div className="relative p-5 sm:p-6 before:absolute before:bottom-9 before:left-[37px] before:top-9 before:w-px before:bg-[#1D4ED8]/20 sm:before:left-[41px]">
                <ol className="space-y-3">
                  {processSteps.map((step, index) => (
                    <li className="relative flex items-center gap-4 rounded-xl border border-[#D8DCE3] bg-white p-3.5" key={step.title}>
                      <span className="z-10 flex size-8 shrink-0 items-center justify-center rounded-full bg-[#1D4ED8] text-xs font-bold text-white">{index + 1}</span>
                      <span className="text-sm font-bold">{step.title}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </figure>
        </div>
      </section>

      <section id="solutions" className="bg-white py-20 sm:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            description="We build intelligent automations that eliminate manual tasks, reduce delays, and keep your firm's operations running smoothly from intake to case resolution."
            eyebrow="Solutions"
            title="Every minute your team spends on repetitive work is time taken away from your clients."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map(({ description, icon: Icon, title }, index) => (
              <article
                className={`group relative overflow-hidden border border-[#D8DCE3] bg-white p-6 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-1 hover:border-[#1D4ED8]/35 hover:shadow-[0_18px_45px_rgba(13,27,61,0.09)] sm:p-7 ${index === 0 ? "rounded-2xl sm:col-span-2 lg:col-span-1 lg:row-span-2 lg:flex lg:flex-col lg:justify-end lg:bg-[#F2F4F7] lg:p-9" : "rounded-2xl"}`}
                key={title}
              >
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-[#E9EEFB] text-[#1D4ED8] transition-colors group-hover:bg-[#1D4ED8] group-hover:text-white">
                  <Icon aria-hidden="true" size={21} />
                </span>
                {index === 0 ? <span className="absolute right-6 top-5 font-display text-5xl font-extrabold text-[#0D1B3D]/5 lg:text-7xl">01</span> : null}
                <h3 className={`font-display mt-6 font-bold leading-snug text-[#0D1B3D] ${index === 0 ? "text-2xl" : "text-lg"}`}>{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#62666D]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-[#D8DCE3] bg-[#F2F4F7] py-20 sm:py-28">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8">
          <div className="relative min-h-[420px] overflow-hidden rounded-2xl bg-[#0D1B3D] shadow-[0_24px_60px_rgba(13,27,61,0.16)]">
            <img src="/images/solution-bg.png" alt="Team collaborating in modern office" className="absolute inset-0 h-full w-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B3D] via-[#0D1B3D]/25 to-transparent" />
          </div>
          <div className="lg:pl-8">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-[#1D4ED8]">Solution</p>
            <h2 className="font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.035em] text-[#0D1B3D] sm:text-4xl lg:text-[2.75rem]">
              Diagnose before automating
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#52565E]">
              Sharpened starts by understanding the workflow. The assessment identifies
              what should be simplified, documented, automated, or left human.
            </p>
            <ol className="mt-8 grid gap-3 sm:grid-cols-2">
              {processSteps.map((step, index) => (
                <li className="grid grid-cols-[auto_1fr] gap-3 border-t border-[#D8DCE3] py-3 text-[#0D1B3D]" key={step.title}>
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#E9EEFB] text-xs font-bold text-[#1D4ED8]">{index + 1}</span>
                  <div>
                    <p className="text-sm font-bold">{step.title}</p>
                    <p className="mt-1 text-xs leading-5 text-[#62666D]">Clarify the current state and move toward a practical next step.</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8">
              <Button href="/workflow-assessment" icon={<ArrowRight aria-hidden="true" size={18} />}>
                Schedule Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="relative overflow-hidden bg-[#0D1B3D] py-20 text-white sm:py-28" aria-label="Workflow areas Sharpened can improve">
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            description="Each service area is tied to an operational outcome, with the Workflow Assessment as the recommended starting point."
            eyebrow="Services"
            title="Workflow areas Sharpened can improve"
            theme="dark"
          />
          <div className="grid overflow-hidden rounded-2xl border border-white/12 bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ description, icon: Icon, title }, index) => (
              <article className="group relative min-h-64 border-b border-white/12 p-6 transition-colors hover:bg-white/[0.08] sm:p-8 sm:[&:nth-child(odd)]:border-r lg:[&:nth-child(odd)]:border-r-0 lg:[&:not(:nth-child(3n))]:border-r lg:[&:nth-last-child(-n+3)]:border-b-0" key={title}>
                <div className="flex items-start justify-between">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-white/10 text-[#FFC107] transition-colors group-hover:bg-[#FFC107] group-hover:text-[#0D1B3D]">
                    <Icon aria-hidden="true" size={21} />
                  </span>
                  <span className="text-xs font-bold tabular-nums text-white/30">0{index + 1}</span>
                </div>
                <h3 className="font-display mt-8 text-xl font-bold leading-snug">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">{description}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex justify-start sm:justify-end">
            <Button href="/services" icon={<ArrowRight aria-hidden="true" size={18} />} variant="inverse">Explore Services</Button>
          </div>
        </div>
      </section>

      <section id="systems" className="bg-white py-20 sm:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            description="Whether it's intake, document collection, case management, or client communication, we create automations that save time and keep your practice running smoothly."
            eyebrow="Systems"
            title="Better systems create better client experiences."
          />
          <ol className="relative grid gap-4 lg:grid-cols-5 lg:gap-0">
            <div className="absolute left-[10%] right-[10%] top-6 hidden h-px bg-[#D8DCE3] lg:block" aria-hidden="true" />
            {processSteps.map((step, index) => (
              <li className="group relative grid grid-cols-[auto_1fr] gap-4 rounded-xl border border-[#D8DCE3] bg-[#F7F8FA] p-5 lg:block lg:rounded-none lg:border-0 lg:bg-transparent lg:px-5 lg:py-0" key={step.title}>
                <span className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border-4 border-white bg-[#0D1B3D] font-display text-sm font-extrabold text-[#FFC107] shadow-sm transition-transform group-hover:-translate-y-1">
                  {index + 1}
                </span>
                <div className="lg:mt-6">
                  <h3 className="font-display text-base font-bold text-[#0D1B3D]">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#62666D]">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y border-[#D8DCE3] bg-[#F2F4F7] py-20 sm:py-28">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20 lg:px-8">
          <div>
            <h2 className="font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.035em] text-[#0D1B3D] sm:text-4xl">
              Automation should feel like an upgrade—not a disruption.
            </h2>
            <p className="mt-5 text-base leading-8 text-[#52565E]">
              Every engagement starts with understanding how your firm works today. We
              recommend practical improvements that fit your existing workflows—not
              unnecessary software or complicated system changes.
            </p>
            <div className="mt-8">
              <Button href="/contact" icon={<ArrowRight aria-hidden="true" size={18} />} variant="secondary">Discuss Your Workflow</Button>
            </div>
          </div>
          <ul className="overflow-hidden rounded-2xl border border-[#D8DCE3] bg-white shadow-[0_18px_50px_rgba(13,27,61,0.07)]">
            {trustItems.map((item, index) => (
              <li className="grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-[#E4E7EC] px-5 py-5 last:border-b-0 sm:px-7" key={item}>
                <Shield aria-hidden="true" className="text-[#1D4ED8]" size={20} />
                <span className="text-sm font-semibold leading-6 text-[#333841] sm:text-base">{item}</span>
                <span className="font-display text-xs font-bold text-[#B3BAC6]">0{index + 1}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="faqs" className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-8">
          <div>
            <h2 className="font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.035em] text-[#0D1B3D] sm:text-4xl">Common questions before scheduling</h2>
            <p className="mt-5 text-base leading-8 text-[#52565E]">A few practical answers before scheduling a workflow conversation.</p>
          </div>
          <div className="border-t border-[#0D1B3D]">
            {faqs.map(({ answer, question }) => (
              <details className="group border-b border-[#D8DCE3] py-1 [&_summary::-webkit-details-marker]:hidden" key={question}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-base font-bold text-[#0D1B3D] outline-none transition-colors hover:text-[#1D4ED8] focus-visible:ring-2 focus-visible:ring-[#1D4ED8] focus-visible:ring-offset-4 sm:text-lg">
                  <span>{question}</span>
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-[#D8DCE3] text-xl font-normal transition-all group-open:rotate-45 group-open:border-[#1D4ED8] group-open:bg-[#1D4ED8] group-open:text-white" aria-hidden="true">+</span>
                </summary>
                <p className="max-w-2xl pb-6 pr-10 text-sm leading-7 text-[#52565E] sm:text-base">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-[#0D1B3D] px-6 py-12 text-white sm:px-10 sm:py-16 lg:grid lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16 lg:px-16">
          <div className="absolute bottom-0 right-0 h-1 w-1/3 bg-[#FFC107]" />
          <div className="relative max-w-3xl">
            <h2 className="font-display text-3xl font-extrabold leading-[1.08] tracking-[-0.035em] sm:text-4xl lg:text-5xl">Ready to find the workflow worth fixing first?</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">Start with a focused, confidential workflow conversation and walk away with a clear assessment roadmap for your practice.</p>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <Button href="/workflow-assessment" icon={<Calendar aria-hidden="true" size={18} />} size="lg" variant="primary">Schedule Assessment</Button>
          </div>
        </div>
      </section>
    </>
  );
}
