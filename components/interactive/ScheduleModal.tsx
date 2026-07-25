"use client";

import { useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { GradientButton } from "@/components/ui/GradientButton";
import { contact } from "@/lib/content/siteConfig";
import { scheduleSteps, workCta } from "@/lib/content/workProcess";

/**
 * The five-step booking flow. Built on the native <dialog> element, so ESC-to-close
 * and focus trapping come from the platform — the original hand-rolled modal had
 * neither, and no role="dialog" either.
 */
export function ScheduleModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(email);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      setCopied(null);
    }
  };

  return (
    <>
      <GradientButton
        variant="pill"
        onClick={() => dialogRef.current?.showModal()}
      >
        <Icon name="FaCalendarAlt" className="text-[1.2rem]" />
        {workCta.button}
      </GradientButton>

      <dialog
        ref={dialogRef}
        aria-labelledby="schedule-modal-title"
        onClick={(event) => {
          // Close when the backdrop (the dialog element itself) is clicked.
          if (event.target === dialogRef.current) dialogRef.current?.close();
        }}
        className="card-surface animate-modal-in m-auto max-h-[90vh] w-full max-w-[800px] rounded-2xl border-amethyst-500/30 p-8 text-left text-body backdrop:bg-[rgba(7,7,21,0.92)] backdrop:backdrop-blur-sm sm:p-10"
      >
        <button
          type="button"
          onClick={() => dialogRef.current?.close()}
          aria-label="Close dialog"
          className="glass absolute top-5 right-5 flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl text-xl text-white transition-all duration-300 hover:rotate-90 hover:border-danger hover:bg-danger"
        >
          <Icon name="FaTimes" />
        </button>

        <div className="mb-10 text-center">
          <div className="gradient-brand mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl shadow-[0_0_20px_rgba(155,89,182,0.4)]">
            <Icon name="FaCalendarCheck" className="text-2xl text-white" />
          </div>
          <h2
            id="schedule-modal-title"
            className="mb-2.5 text-2xl font-bold text-white sm:text-3xl"
          >
            Schedule a Meeting with Us
          </h2>
          <p className="text-muted">
            Follow these simple steps to book your consultation
          </p>
        </div>

        <ol className="mb-8 flex flex-col gap-7">
          {scheduleSteps.map((step) => (
            <li
              key={step.number}
              className="flex items-start gap-5 rounded-xl border border-amethyst-500/20 bg-white/[0.03] p-6 transition-all duration-300 hover:translate-x-1.5 hover:border-amethyst-500/50 hover:shadow-[0_10px_30px_rgba(155,89,182,0.2)]"
            >
              <span
                aria-hidden="true"
                className="gradient-brand flex h-11 w-11 shrink-0 items-center justify-center rounded-xl font-mono text-lg font-bold text-white shadow-[0_0_20px_rgba(155,89,182,0.4)]"
              >
                {step.number}
              </span>

              <div className="flex-1">
                <h3 className="mb-2.5 text-lg font-bold text-white">
                  {step.title}
                </h3>
                <p className="mb-4 leading-[1.6] text-nav">{step.text}</p>

                {"link" in step && step.link ? (
                  <a
                    href={step.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-lg bg-[linear-gradient(135deg,#4285f4_0%,#34a853_100%)] px-6 py-3 font-semibold text-white shadow-[0_5px_15px_rgba(66,133,244,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(66,133,244,0.5)]"
                  >
                    <Icon name="FaGoogle" />
                    {step.link.label}
                  </a>
                ) : null}

                {"list" in step && step.list ? (
                  <ul className="my-4 space-y-2">
                    {step.list.map((item) => (
                      <li
                        key={item.strong + item.rest}
                        className="relative pl-6 text-sm leading-[1.8] text-nav before:absolute before:left-2 before:text-lg before:leading-none before:text-amethyst-400 before:content-['▸']"
                      >
                        {item.strong ? (
                          <strong className="font-semibold text-white">
                            {item.strong}
                          </strong>
                        ) : null}
                        {item.rest}
                      </li>
                    ))}
                  </ul>
                ) : null}

                {"emails" in step && step.emails ? (
                  <div className="mt-4 flex flex-col gap-3">
                    {contact.emails.map((email) => (
                      <div
                        key={email}
                        className="flex items-center gap-3 rounded-xl border border-amethyst-500/25 bg-base-deep/60 px-4 py-3"
                      >
                        <code className="flex-1 font-mono text-sm font-semibold break-all text-amethyst-300">
                          {email}
                        </code>
                        <button
                          type="button"
                          onClick={() => copy(email)}
                          aria-label={`Copy ${email}`}
                          className={`flex cursor-pointer items-center gap-1.5 rounded-lg border px-3 py-2 text-sm transition-all duration-300 ${
                            copied === email
                              ? "border-success bg-success text-white"
                              : "border-amethyst-500/40 bg-amethyst-500/15 text-amethyst-300 hover:border-transparent hover:bg-[linear-gradient(135deg,#9b59b6,#6a5acd)] hover:text-white"
                          }`}
                        >
                          <Icon name="FaCopy" />
                          {copied === email ? "Copied!" : null}
                        </button>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </li>
          ))}
        </ol>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-sm leading-[1.8] text-muted">
            <Icon
              name="FaInfoCircle"
              className="mr-1.5 inline-block text-amethyst-400"
            />
            Need immediate assistance? Contact us directly via{" "}
            <a
              href={contact.messenger}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-amethyst-300 transition-colors duration-300 hover:text-amethyst-200 hover:underline"
            >
              Facebook Messenger
            </a>{" "}
            or call{" "}
            <a
              href={contact.phones[0].href}
              className="font-semibold text-amethyst-300 transition-colors duration-300 hover:text-amethyst-200 hover:underline"
            >
              {contact.phones[0].display}
            </a>
          </p>
        </div>
      </dialog>
    </>
  );
}
