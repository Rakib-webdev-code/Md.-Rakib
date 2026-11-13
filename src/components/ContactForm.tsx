"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const field = "w-full rounded-xl border border-line bg-bg px-4 py-3 outline-none transition-colors focus:border-accent";
type Toast = { kind: "ok" | "error"; text: string } | null;

export default function ContactForm() {
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState<Toast>(null);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 4500);
    return () => clearTimeout(t);
  }, [toast]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setSending(true);
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(new FormData(form))) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      form.reset();
      setToast({ kind: "ok", text: "Message sent. I'll reply by email soon." });
    } catch (err) {
      setToast({ kind: "error", text: err instanceof Error ? err.message : "Could not send. Please email me directly." });
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <form onSubmit={onSubmit} className="grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <input name="name" required placeholder="Your name" aria-label="Your name" className={field} />
          <input name="email" type="email" required placeholder="Your email" aria-label="Your email" className={field} />
        </div>
        <textarea name="message" required rows={6} placeholder="How can I help?" aria-label="Message" className={field} />
        <button disabled={sending} className="justify-self-start rounded-full bg-accent px-7 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-90 disabled:opacity-50">
          {sending ? "Sending..." : "Send message"}
        </button>
      </form>
      <AnimatePresence>
        {toast && (
          <motion.div role="status" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 24 }}
            className={`fixed bottom-6 right-6 z-50 max-w-sm rounded-xl border bg-card px-5 py-4 text-sm shadow-lg ${toast.kind === "ok" ? "border-accent" : "border-red-500"}`}>
            {toast.text}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
