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
        className="card-surface-alt animate-modal-in m-auto max-h-[90vh] w-full max-w-[800px] rounded-[20px] border-2 border-brand/40 p-8 text-left text-body backdrop:bg-black/95 sm:p-10"
      >
        <button
          type="button"
          onClick={() => dialogRef.current?.close()}
          aria-label="Close dialog"
          className="absolute top-5 right-5 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border-2 border-white/30 bg-white/10 text-2xl text-white transition-all duration-300 hover:rotate-90 hover:border-danger hover:bg-danger"
        >
          <Icon name="FaTimes" />
        </button>

        <div className="mb-10 text-center">
          <Icon
            name="FaCalendarCheck"
            className="mx-auto mb-5 text-[4rem] text-accent"
          />
          <h2
            id="schedule-modal-title"
            className="mb-2.5 text-[1.6rem] font-bold text-white sm:text-[2rem]"
          >
            Schedule a Meeting with Us
          </h2>
          <p className="text-[1.1rem] text-muted">
            Follow these simple steps to book your consultation
          </p>
        </div>

        <ol className="mb-8 flex flex-col gap-7">
          {scheduleSteps.map((step) => (
            <li
              key={step.number}
              className="flex items-start gap-5 rounded-xl border border-brand/20 bg-brand/5 p-6 transition-all duration-300 hover:translate-x-1.5 hover:border-brand/50 hover:shadow-[0_10px_30px_rgba(79,70,229,0.2)]"
            >
              <span
                aria-hidden="true"
                className="gradient-brand flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[1.3rem] font-bold text-white shadow-[0_5px_15px_rgba(79,70,229,0.4)]"
              >
                {step.number}
              </span>

              <div className="flex-1">
                <h3 className="mb-2.5 text-[1.3rem] font-semibold text-white">
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
                        className="relative pl-6 text-[0.95rem] leading-[1.8] text-nav before:absolute before:left-2 before:text-[1.5rem] before:leading-none before:text-accent before:content-['•']"
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
                        className="flex items-center gap-3 rounded-lg border border-brand/30 bg-black/30 px-4 py-3"
                      >
                        <code className="flex-1 font-mono text-[0.95rem] font-semibold break-all text-accent">
                          {email}
                        </code>
                        <button
                          type="button"
                          onClick={() => copy(email)}
                          aria-label={`Copy ${email}`}
                          className={`flex cursor-pointer items-center gap-1.5 rounded-md border px-3 py-2 text-[0.9rem] transition-all duration-300 ${
                            copied === email
                              ? "border-success bg-success text-white"
                              : "border-brand/40 bg-brand/20 text-accent hover:border-transparent hover:bg-[linear-gradient(135deg,#4f46e5_0%,#7c3aed_100%)] hover:text-white"
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

        <div className="border-t border-brand/20 pt-8 text-center">
          <p className="text-[0.95rem] leading-[1.8] text-muted">
            <Icon
              name="FaInfoCircle"
              className="mr-1.5 inline-block text-accent"
            />
            Need immediate assistance? Contact us directly via{" "}
            <a
              href={contact.messenger}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent transition-colors duration-300 hover:text-brand hover:underline"
            >
              Facebook Messenger
            </a>{" "}
            or call{" "}
            <a
              href={contact.phones[0].href}
              className="font-semibold text-accent transition-colors duration-300 hover:text-brand hover:underline"
            >
              {contact.phones[0].display}
            </a>
          </p>
        </div>
      </dialog>
    </>
  );
}
