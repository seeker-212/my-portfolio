"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Check, Mail, MapPin, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig, contactInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/brand-icons";

const socials = [
  { label: "GitHub", href: siteConfig.socials.github, Icon: GitHubIcon },
  { label: "LinkedIn", href: siteConfig.socials.linkedin, Icon: LinkedInIcon },
  { label: "X", href: siteConfig.socials.twitter, Icon: XIcon },
];

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email);

    if (!values.name.trim() || !emailOk || !values.message.trim()) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      const formData = {
        access_key: process.env.NEXT_PUBLIC_WEB3_ACCESS_KEY,
        subject: `New Portfolio Message from ${values.name}`,
        from_name: values.name,
        name: values.name,
        email: values.email,
        message: values.message,
        botcheck: "",
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      console.log("Status:", res.status);
      console.log("Response:", data);

      if (res.ok && data.success) {
        setStatus("success");
        setValues({
          name: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error(data.message || "Failed to send message.");
      }
    } catch (error) {
      console.error("Web3Forms Error:", error);
      setStatus("error");
    }
  }

  const field =
    "h-11 bg-background/60 dark:bg-input/30 border-border focus-visible:border-ring";

  return (
    <section id="contact" className="section-padding relative scroll-mt-24">
      <div className="pointer-events-none absolute right-0 top-10 size-[28rem] rounded-full glow opacity-25" />
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <SectionHeading
              eyebrow="Contact"
              title="Let's build something"
              highlight="build"
              description="Have a project in mind, or just want to say hello? My inbox is always open."
            />
            <p className="text-pretty text-muted-foreground">
              {contactInfo.note}
            </p>

            <div className="mt-2 flex flex-col gap-3">
              <a
                href={siteConfig.socials.email}
                className="inline-flex items-center gap-3 rounded-xl px-1 py-1 text-foreground transition-colors hover:text-brand-1"
              >
                <span className="grid size-10 place-items-center rounded-lg bg-muted">
                  <Mail className="size-4" />
                </span>
                {siteConfig.email}
              </a>
              <div className="inline-flex items-center gap-3 rounded-xl px-1 py-1 text-muted-foreground">
                <span className="grid size-10 place-items-center rounded-lg bg-muted">
                  <MapPin className="size-4" />
                </span>
                {siteConfig.location}
              </div>
            </div>

            <div className="mt-2 flex items-center gap-2">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-brand-gradient hover:text-white"
                >
                  <Icon className="size-[18px]" />
                </a>
              ))}
            </div>
          </div>

          <Reveal x={24}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="glass flex flex-col gap-4 rounded-3xl p-6 sm:p-8"
            >
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
              />
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Ada Lovelace"
                  value={values.name}
                  onChange={(e) =>
                    setValues((v) => ({ ...v, name: e.target.value }))
                  }
                  className={field}
                  required
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={values.email}
                  onChange={(e) =>
                    setValues((v) => ({ ...v, email: e.target.value }))
                  }
                  className={field}
                  required
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project…"
                  rows={5}
                  value={values.message}
                  onChange={(e) =>
                    setValues((v) => ({ ...v, message: e.target.value }))
                  }
                  className="min-h-32 resize-none bg-background/60 dark:bg-input/30 border-border focus-visible:border-ring"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={status === "submitting"}
                className={cn(
                  "mt-1 h-12 gap-2 bg-brand-gradient text-white shadow-lg shadow-brand-1/25 hover:opacity-90",
                )}
              >
                {status === "submitting" ? (
                  "Sending…"
                ) : (
                  <>
                    Send message
                    <Send className="size-4" />
                  </>
                )}
              </Button>

              {status === "success" && (
                <p className="flex items-center gap-2 text-sm font-medium text-emerald-500">
                  <Check className="size-4" />
                  Thanks! Your message has been sent — I&apos;ll reply soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm font-medium text-destructive">
                  Something went wrong. Please check your details and try again.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
