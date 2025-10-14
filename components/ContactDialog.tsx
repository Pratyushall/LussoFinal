"use client";

import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

export default function ContactDialog({
  triggerClassName = "px-5 py-2.5 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/15",
}: {
  triggerClassName?: string;
}) {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Form fields (match the API)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setOk(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          projectType,
          budget,
          message,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed to send");
      setOk(true);
      // optional: clear the form
      setName("");
      setEmail("");
      setPhone("");
      setProjectType("");
      setBudget("");
      setMessage("");
    } catch (err: any) {
      setOk(false);
      setError(err?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog>
      <DialogTrigger className={triggerClassName}>Let’s Connect</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Let’s Connect</DialogTitle>
          <DialogDescription>Step 1 of 6</DialogDescription>
        </DialogHeader>

        <form onSubmit={onSubmit} className="space-y-4">
          {/* Name & Email (required by API) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl bg-white/10 border border-white/20 px-3 py-2 text-white placeholder-white/50 outline-none"
              placeholder="Your name*"
            />
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl bg-white/10 border border-white/20 px-3 py-2 text-white placeholder-white/50 outline-none"
              placeholder="Email*"
            />
          </div>

          {/* Optional phone */}
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-xl bg-white/10 border border-white/20 px-3 py-2 text-white placeholder-white/50 outline-none"
            placeholder="Phone (optional)"
          />

          {/* Your selects (project type & budget) */}
          <div className="space-y-2">
            <label className="text-white/80 text-sm">Project Type</label>
            <select
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              className="w-full rounded-xl bg-white/10 border border-white/20 px-3 py-2 text-white outline-none"
            >
              <option value="">Select your project type</option>
              <option>Kitchen</option>
              <option>Wardrobe</option>
              <option>Shutters</option>
              <option>Partitions</option>
              <option>Full Home</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-white/80 text-sm">Budget Range</label>
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full rounded-xl bg-white/10 border border-white/20 px-3 py-2 text-white outline-none"
            >
              <option value="">Select your budget range</option>
              <option>₹5–10L</option>
              <option>₹10–20L</option>
              <option>₹20–40L</option>
              <option>₹40L+</option>
            </select>
          </div>

          {/* Message (required by API) */}
          <div className="space-y-2">
            <label className="text-white/80 text-sm">
              Tell us about your dream project
            </label>
            <textarea
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-xl bg-white/10 border border-white/20 px-3 py-2 text-white placeholder-white/50 outline-none"
              placeholder="Describe your vision, style preferences, timeline, and any specific requirements..."
            />
          </div>

          {ok === true && (
            <p className="text-green-300/90 text-sm">
              Thanks! Your message was sent.
            </p>
          )}
          {ok === false && (
            <p className="text-red-300/90 text-sm">Couldn’t send: {error}</p>
          )}

          <DialogFooter>
            <DialogClose className="px-4 py-2 rounded-full border border-white/20 bg-white/5 text-white/80 hover:bg-white/10">
              Cancel
            </DialogClose>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 rounded-full border border-amber-400/30 bg-amber-500/20 text-amber-100 hover:bg-amber-500/30 disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
