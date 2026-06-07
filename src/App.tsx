import {
  Bot,
  ClipboardList,
  Code2,
  GitPullRequest,
  LockKeyhole,
  Mail,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';

const HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4';
const ABOUT_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4';
const CTA_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4';

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

const navLinks = [
  { label: 'Lifecycle', href: '#lifecycle' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Workflows', href: '#workflows' },
  { label: 'Signals', href: '#signals' },
  { label: 'Launch', href: '#launch' },
];

const metrics = [
  { value: '01', label: 'Issue to intent' },
  { value: '06', label: 'SDLC phases' },
  { value: '24/7', label: 'Context loop' },
];

const lifecycle = [
  {
    phase: 'Plan',
    title: 'Turn ideas into executable work',
    description: 'Agents help convert product asks into issues, acceptance criteria, dependencies, and next actions.',
    Icon: ClipboardList,
  },
  {
    phase: 'Code',
    title: 'Build with repository context',
    description: 'GitHub Copilot and coding agents reason over files, tests, patterns, and implementation constraints.',
    Icon: Code2,
  },
  {
    phase: 'Review',
    title: 'Review pull requests faster',
    description: 'Diff summaries, risk hints, and suggested fixes keep reviewers focused on decisions, not archaeology.',
    Icon: GitPullRequest,
  },
  {
    phase: 'Secure',
    title: 'Shift security into the loop',
    description: 'Secret scanning, code scanning, dependency signals, and branch policies become agent-readable guardrails.',
    Icon: ShieldCheck,
  },
  {
    phase: 'Ship',
    title: 'Release with confidence',
    description: 'Actions, environments, checks, and deployments give agents the evidence needed to judge readiness.',
    Icon: Rocket,
  },
  {
    phase: 'Learn',
    title: 'Feed production back into planning',
    description: 'Incidents, telemetry, and user feedback become structured follow-up work for the next delivery cycle.',
    Icon: Workflow,
  },
];

const capabilityCards = [
  {
    title: 'Context-aware agents',
    description: 'Work from issues, pull requests, code search, dependency graph, security alerts, and workflow status.',
    Icon: Bot,
  },
  {
    title: 'Human approval gates',
    description: 'Agents suggest, summarize, and implement while branch protections, reviews, and environments enforce control.',
    Icon: LockKeyhole,
  },
  {
    title: 'Continuous improvement',
    description: 'Every merge, deployment, rollback, and review comment becomes signal for the next iteration.',
    Icon: Sparkles,
  },
];

const workflowSteps = [
  {
    label: 'Trigger',
    value: 'Issue opened or reopened',
  },
  {
    label: 'Research',
    value: 'Read issue content, labels, related issues, and repository context',
  },
  {
    label: 'Act safely',
    value: 'Apply an allowed label and comment with a short explanation',
  },
  {
    label: 'Remix',
    value: 'Edit the workflow spec, run gh aw compile, and push to your repo',
  },
];

const workflowGallery = [
  {
    title: 'Continuous simplicity',
    summary: 'Agents look for overcomplicated code, duplicated logic, and low-risk simplifications after fast development cycles.',
    command: 'gh aw add-wizard https://github.com/githubnext/agentics/blob/main/workflows/code-simplifier.md',
    link: 'https://github.github.com/gh-aw/blog/2026-01-13-meet-the-workflows-continuous-simplicity/',
  },
  {
    title: 'Continuous documentation',
    summary: 'Documentation agents update docs, maintain glossaries, test docs as new users, audit blogs, and validate responsive docs experiences.',
    command: 'gh aw add-wizard https://github.com/githubnext/agentics/blob/main/workflows/daily-doc-updater.md',
    link: 'https://github.github.com/gh-aw/blog/2026-01-13-meet-the-workflows-documentation/',
  },
  {
    title: 'Testing and validation',
    summary: 'Validation agents improve tests, find coverage gaps, check CLI consistency, optimize CI, and monitor workflow health.',
    command: 'gh aw add-wizard https://github.com/githubnext/agentics/blob/main/workflows/ci-coach.md',
    link: 'https://github.github.com/gh-aw/blog/2026-01-13-meet-the-workflows-testing-validation/',
  },
  {
    title: 'Quality hygiene',
    summary: 'Fault-investigation agents diagnose failed CI, detect schema drift, and flag breaking changes before they reach users.',
    command: 'gh aw add-wizard https://github.com/githubnext/agentics/blob/main/workflows/ci-doctor.md',
    link: 'https://github.github.com/gh-aw/blog/2026-01-13-meet-the-workflows-quality-hygiene/',
  },
  {
    title: 'Metrics analytics',
    summary: 'Meta-agents collect daily metrics, analyze cost and token usage, and audit workflow runs so the agent ecosystem stays observable.',
    command: 'gh aw add-wizard https://github.com/github/gh-aw/blob/v0.45.5/.github/workflows/metrics-collector.md',
    link: 'https://github.github.com/gh-aw/blog/2026-01-13-meet-the-workflows-metrics-analytics/',
  },
];

function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.14c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.18 1.18A11.05 11.05 0 0 1 12 6.05c.98 0 1.96.13 2.88.39 2.2-1.49 3.17-1.18 3.17-1.18.64 1.58.24 2.75.12 3.04.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.42.36.78 1.07.78 2.16v3.12c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.966 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

const socials: Array<{ label: string; href: string; Icon: IconComponent }> = [
  { label: 'Email', href: 'mailto:hello@example.com', Icon: Mail },
  { label: 'GitHub', href: 'https://github.com/features/copilot', Icon: GithubIcon },
  { label: 'X', href: 'https://x.com/github', Icon: XIcon },
];

function VideoBackground({ src }: { src: string }) {
  return (
    <video
      className="absolute inset-0 h-full w-full object-cover opacity-100 brightness-125 saturate-150"
      src={src}
      autoPlay
      loop
      muted
      playsInline
    />
  );
}

function SocialIconButton({ Icon, label, href }: { Icon: IconComponent; label: string; href: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="liquid-glass flex h-12 w-12 items-center justify-center rounded-2xl text-cream transition hover:bg-white/10 sm:h-14 sm:w-14"
    >
      <Icon className="h-5 w-5" />
    </a>
  );
}

function App() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-cream">
      <div className="texture-overlay" />

      <section id="homepage" className="relative min-h-screen overflow-hidden rounded-b-[32px] bg-background">
        <VideoBackground src={HERO_VIDEO} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(111,255,0,0.28),transparent_32%),linear-gradient(90deg,rgba(6,25,92,0.52),rgba(6,25,92,0.24)_52%,rgba(6,25,92,0.04))]" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1831px] flex-col px-5 sm:px-8 lg:px-10">
          <header className="flex items-center justify-between py-6 lg:py-8">
            <a href="#homepage" className="font-grotesk text-[16px] uppercase tracking-[0.18em] text-cream drop-shadow-[0_2px_16px_rgba(0,0,0,0.85)]">
              GitHub ADLC
            </a>

            <nav className="liquid-glass hidden rounded-[28px] px-10 py-5 lg:block">
              <div className="flex items-center gap-9">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="font-grotesk text-[13px] uppercase tracking-wide text-cream transition hover:text-neon"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </nav>

            <a
              href="https://github.com/features/copilot"
              className="hidden font-grotesk text-[13px] uppercase tracking-wide text-cream underline decoration-neon decoration-2 underline-offset-8 transition hover:text-neon lg:block"
            >
              Explore Copilot
            </a>
          </header>

          <div className="absolute right-5 top-28 z-10 hidden flex-col gap-3 sm:right-8 lg:right-10 lg:flex">
            {socials.map((social) => (
              <SocialIconButton key={social.label} {...social} />
            ))}
          </div>

          <div className="grid flex-1 items-center gap-10 py-14 lg:grid-cols-[minmax(0,1fr)_440px] lg:py-20">
            <div className="max-w-[960px] lg:ml-20 xl:ml-32">
              <p className="mb-5 font-mono text-[12px] uppercase tracking-[0.32em] text-neon drop-shadow-[0_0_18px_rgba(111,255,0,0.45)]">
                Agentic software delivery lifecycle
              </p>
              <div className="max-w-full">
                <h1 className="font-grotesk text-[44px] uppercase leading-[1.08] text-cream drop-shadow-[0_8px_34px_rgba(0,0,0,0.9)] sm:text-[64px] md:text-[82px] lg:text-[96px] xl:text-[112px]">
                  Ship software
                  <br />
                  with agents
                  <br />
                  in the loop
                </h1>
                <span className="mt-4 block font-condiment text-[34px] leading-none normal-case text-neon opacity-95 drop-shadow-[0_0_18px_rgba(111,255,0,0.45)] sm:text-[46px] md:text-[54px] lg:text-[60px]">
                  GitHub native
                </span>
              </div>

              <p className="mt-8 max-w-[720px] rounded-3xl bg-cream/14 p-5 font-mono text-[14px] uppercase leading-relaxed text-cream shadow-2xl shadow-black/20 ring-1 ring-white/25 backdrop-blur-xl sm:text-[16px]">
                A cinematic view of how GitHub connects issues, code, pull requests, security, actions, and deployments into one agent-ready delivery system.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#lifecycle"
                  className="liquid-glass inline-flex items-center justify-center rounded-full px-7 py-4 font-grotesk text-[13px] uppercase tracking-wide text-cream transition hover:bg-white/10 hover:text-neon"
                >
                  View lifecycle
                </a>
                <a
                  href="https://github.com/Michael-demo/github-adlc"
                  className="inline-flex items-center justify-center rounded-full bg-neon px-7 py-4 font-grotesk text-[13px] uppercase tracking-wide text-background transition hover:scale-[0.98]"
                >
                  Open repository
                </a>
              </div>

              <div className="mt-8 flex gap-3 lg:hidden">
                {socials.map((social) => (
                  <SocialIconButton key={social.label} {...social} />
                ))}
              </div>
            </div>

            <aside className="liquid-glass rounded-[32px] p-5 ring-1 ring-white/10 sm:p-6 lg:mr-12">
              <p className="font-grotesk text-[15px] uppercase tracking-[0.14em] text-neon">Live delivery signals</p>
              <div className="mt-6 space-y-4">
                {metrics.map((metric) => (
                  <div key={metric.label} className="flex items-end justify-between border-b border-white/10 pb-4 last:border-none last:pb-0">
                    <span className="font-grotesk text-[44px] uppercase leading-none text-cream sm:text-[56px]">
                      {metric.value}
                    </span>
                    <span className="max-w-[150px] text-right font-mono text-[12px] uppercase leading-snug text-cream/85">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="lifecycle" className="relative min-h-screen overflow-hidden bg-background">
        <VideoBackground src={ABOUT_VIDEO} />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,25,92,0.48),rgba(6,25,92,0.34)),radial-gradient(circle_at_78%_18%,rgba(111,255,0,0.24),transparent_30%)]" />
        <div className="relative z-10 mx-auto grid min-h-screen max-w-[1831px] content-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-10 lg:py-28">
          <div>
            <p className="mb-5 font-mono text-[12px] uppercase tracking-[0.32em] text-neon">One connected flow</p>
            <h2 className="font-grotesk text-[36px] uppercase leading-[1.08] text-cream sm:text-[52px] lg:text-[68px]">
              From intent
              <br />
              to production
            </h2>
            <span className="mt-3 block font-condiment text-[42px] leading-none normal-case text-neon drop-shadow-[0_0_18px_rgba(111,255,0,0.45)] sm:text-[56px] lg:text-[64px]">
              automated
            </span>
            <p className="mt-8 max-w-[520px] rounded-3xl bg-cream/14 p-5 font-mono text-[14px] uppercase leading-relaxed text-cream ring-1 ring-white/25 backdrop-blur-xl sm:text-[16px]">
              Agentic SDLC is not one chatbot. It is a system of context, guardrails, feedback, and human approval across the entire GitHub workflow.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {lifecycle.map(({ Icon, phase, title, description }) => (
              <article key={phase} className="liquid-glass rounded-[28px] p-5 ring-1 ring-white/10 transition hover:bg-white/10 sm:p-6">
                <div className="mb-8 flex items-center justify-between">
                  <span className="font-grotesk text-[14px] uppercase tracking-[0.18em] text-neon">{phase}</span>
                  <Icon className="h-6 w-6 text-cream/80" />
                </div>
                <h3 className="font-grotesk text-[25px] uppercase leading-[1.08] text-cream sm:text-[30px]">
                  {title}
                </h3>
                <p className="mt-4 font-mono text-[12px] uppercase leading-relaxed text-cream/82 sm:text-[13px]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="capabilities" className="bg-background px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1831px]">
          <div className="mb-12 grid gap-8 lg:mb-16 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-4 font-condiment text-[36px] leading-none text-neon drop-shadow-[0_0_18px_rgba(111,255,0,0.45)] sm:text-[48px] lg:text-[58px]">
                GitHub native
              </p>
              <h2 className="max-w-[850px] font-grotesk text-[34px] uppercase leading-[1.12] text-cream sm:text-[48px] lg:text-[62px]">
                Capabilities for the agentic SDLC
              </h2>
            </div>

            <a
              href="#launch"
              className="liquid-glass inline-flex w-fit items-center gap-4 rounded-full px-7 py-4 font-grotesk text-[15px] uppercase tracking-[0.16em] text-cream ring-1 ring-white/15 transition hover:bg-white/10 hover:text-neon sm:px-8 sm:py-5 sm:text-[17px]"
              dir="ltr"
            >
              <span>See the flow</span>
              <span className="h-2 w-10 rounded-full bg-neon shadow-[0_0_18px_rgba(111,255,0,0.75)]" />
            </a>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {capabilityCards.map(({ Icon, title, description }) => (
              <article key={title} className="liquid-glass rounded-[32px] p-6 ring-1 ring-white/10 transition hover:bg-white/10 sm:p-8">
                <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-neon text-background shadow-lg shadow-neon/20">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="font-grotesk text-[28px] uppercase leading-[1.16] text-cream sm:text-[34px]">
                  {title}
                </h3>
                <p className="mt-5 font-mono text-[13px] uppercase leading-[1.65] text-cream/84 sm:text-[14px]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="workflows" className="bg-background px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10 lg:pb-28">
        <div className="mx-auto max-w-[1831px]">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
            <div className="liquid-glass rounded-[36px] p-6 ring-1 ring-white/15 sm:p-8 lg:p-10">
            <p className="mb-4 font-condiment text-[38px] leading-none text-neon drop-shadow-[0_0_18px_rgba(111,255,0,0.45)] sm:text-[54px]">
              Agentic workflows
            </p>
            <h2 className="font-grotesk text-[34px] uppercase leading-[1.12] text-cream sm:text-[50px] lg:text-[62px]">
              Add proven workflow patterns to your repo
            </h2>
            <p className="mt-6 font-mono text-[13px] uppercase leading-[1.7] text-cream/86 sm:text-[14px]">
              GitHub Agentic Workflows lets teams describe repo automation in readable markdown. Start with issue triage, then remix patterns for simplicity, docs, validation, hygiene, and analytics.
            </p>

            <a
              href="https://github.github.com/gh-aw/blog/2026-01-13-meet-the-workflows/#using-these-workflows"
              className="mt-8 inline-flex rounded-full bg-neon px-7 py-4 font-grotesk text-[13px] uppercase tracking-[0.16em] text-background transition hover:scale-[0.98]"
            >
              Read the triage workflow
            </a>
            </div>

            <div className="grid gap-5">
            <div className="liquid-glass rounded-[32px] p-5 ring-1 ring-white/15 sm:p-6">
              <p className="font-grotesk text-[15px] uppercase tracking-[0.16em] text-neon">Use this command</p>
              <pre className="mt-5 overflow-x-auto rounded-2xl bg-[#020a25]/80 p-5 text-[12px] leading-relaxed text-cream ring-1 ring-white/10 sm:text-[14px]">
                <code>{'gh aw add-wizard https://github.com/github/gh-aw/blob/v0.45.5/.github/workflows/issue-triage-agent.md'}</code>
              </pre>
              <p className="mt-4 font-mono text-[12px] uppercase leading-[1.7] text-cream/76 sm:text-[13px]">
                Then remix the markdown specification, run <span className="text-neon">gh aw compile</span>, and push the generated workflow files to your repository.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {workflowSteps.map((step) => (
                <article key={step.label} className="liquid-glass rounded-[26px] p-5 ring-1 ring-white/15">
                  <p className="font-grotesk text-[14px] uppercase tracking-[0.18em] text-neon">{step.label}</p>
                  <p className="mt-4 font-mono text-[12px] uppercase leading-[1.65] text-cream/84 sm:text-[13px]">
                    {step.value}
                  </p>
                </article>
              ))}
            </div>

            <div className="rounded-[26px] border border-neon/35 bg-neon/10 p-5">
              <p className="font-mono text-[12px] uppercase leading-[1.7] text-cream/88 sm:text-[13px]">
                Safety model: define permissions, available GitHub toolsets, and safe outputs so the agent can only perform the actions you approve.
              </p>
            </div>
          </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {workflowGallery.map((workflow) => (
              <article key={workflow.title} className="liquid-glass rounded-[30px] p-5 ring-1 ring-white/15 transition hover:bg-white/10 sm:p-6">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <h3 className="font-grotesk text-[26px] uppercase leading-[1.12] text-cream sm:text-[32px]">
                    {workflow.title}
                  </h3>
                  <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-neon shadow-[0_0_18px_rgba(111,255,0,0.85)]" />
                </div>
                <p className="font-mono text-[12px] uppercase leading-[1.65] text-cream/84 sm:text-[13px]">
                  {workflow.summary}
                </p>
                <pre className="mt-5 overflow-x-auto rounded-2xl bg-[#020a25]/80 p-4 text-[11px] leading-relaxed text-cream ring-1 ring-white/10">
                  <code>{workflow.command}</code>
                </pre>
                <a
                  href={workflow.link}
                  className="mt-5 inline-flex font-grotesk text-[13px] uppercase tracking-[0.16em] text-neon underline decoration-neon/70 underline-offset-4 transition hover:text-cream"
                >
                  Read article
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="signals" className="bg-background px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10 lg:pb-28">
        <div className="liquid-glass mx-auto max-w-[1831px] rounded-[36px] p-6 ring-1 ring-white/10 sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-5 font-mono text-[12px] uppercase tracking-[0.32em] text-neon">Signals agents can reason over</p>
              <h2 className="font-grotesk text-[34px] uppercase leading-[1.08] text-cream sm:text-[52px] lg:text-[64px]">
                Every check becomes context
              </h2>
            </div>
            <div className="grid gap-3 font-mono text-[12px] uppercase text-cream/88 sm:text-[13px]">
              {['Issues with acceptance criteria', 'Code search and repository conventions', 'Pull request diffs and review threads', 'CodeQL, Dependabot, and secret scanning alerts', 'Actions checks, environments, and deployment history'].map((signal) => (
                <div key={signal} className="flex items-center justify-between rounded-2xl border border-white/15 bg-white/[0.08] px-4 py-4">
                  <span>{signal}</span>
                  <span className="h-2 w-2 rounded-full bg-neon shadow-[0_0_16px_rgba(111,255,0,0.9)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="launch" className="relative min-h-screen overflow-hidden bg-background">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-100 brightness-125 saturate-150"
          src={CTA_VIDEO}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,25,92,0.6),rgba(6,25,92,0.14)_55%,rgba(6,25,92,0.42))]" />
        <div className="relative z-10 mx-auto grid min-h-screen max-w-[1831px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:items-center lg:px-10 lg:py-28">
          <div className="liquid-glass order-2 w-fit overflow-hidden rounded-[0.75rem] sm:rounded-[1rem] lg:order-1 lg:rounded-[1.25rem]">
            {socials.map(({ Icon, href, label }, index) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className={`flex h-14 w-14 items-center justify-center text-cream transition hover:bg-white/10 sm:h-[5.5rem] sm:w-[14.375rem] md:h-[4.25rem] md:w-[10.78125rem] lg:h-[6.5rem] lg:w-[16.25rem] ${
                  index < socials.length - 1 ? 'border-b border-white/10' : ''
                }`}
              >
                <Icon className="h-5 w-5 lg:h-6 lg:w-6" />
              </a>
            ))}
          </div>

          <div
            className="liquid-glass order-1 rounded-[32px] bg-cream/12 p-5 text-left ring-1 ring-white/25 backdrop-blur-xl sm:p-8 lg:order-2 lg:ml-auto lg:max-w-[980px] lg:p-10"
            dir="ltr"
          >
            <span className="mb-5 block font-condiment text-[34px] leading-none text-neon drop-shadow-[0_0_18px_rgba(111,255,0,0.45)] sm:text-[48px] lg:text-[58px]">
              Ready loop
            </span>
            <h2 className="font-grotesk text-[30px] uppercase leading-[1.14] text-cream drop-shadow-[0_8px_34px_rgba(0,0,0,0.9)] sm:text-[48px] md:text-[58px] lg:text-[68px]">
              Build the loop.
              <br />
              Connect the work.
              <br />
              Keep humans in control.
              <br />
              Let agents move fast.
            </h2>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
