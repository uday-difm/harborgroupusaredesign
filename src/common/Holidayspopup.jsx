"use client";
import { useEffect, useState } from "react";

export default function Holidayspopup() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const subscribed = localStorage.getItem("subscribed");
    if (subscribed) return;

    const timer = setTimeout(() => {
      setShow(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubscribe = async () => {
    setError("");
    setMessage("");

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Subscription failed");
        return;
      }

      // ✅ SUCCESS
      setMessage("🎉 Subscribed successfully!");
      setEmail("");
      localStorage.setItem("subscribed", "true");

      setTimeout(() => setShow(false), 2000);
    } catch (err) {
      setError("Server error, please try again later");
    } finally {
      setLoading(false);
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="relative w-full max-w-lg min-h-[400px] rounded-lg p-8 bg-cover bg-center flex flex-col justify-center"
        style={{
          backgroundImage:
            "url('https://harborgroupusa.s3-eu-central-2.ionoscloud.com/Popup_Harbor Group.jpg')",
        }}
      >
        <button
          onClick={() => setShow(false)}
          className="absolute top-2 right-2 text-xl"
        >
          ✕
        </button>

        <h2 className="pt-10 text-center text-2xl font-bold text-sky-900">
          Subscribe Now
        </h2>

        <div className="flex gap-2 mt-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 rounded-lg px-4 py-2 outline-none border border-sky-800"
          />
          <button
            onClick={handleSubscribe}
            disabled={loading}
            className="rounded-lg bg-sky-600 px-5 py-2 text-white hover:bg-sky-700 disabled:opacity-60"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </div>

        {error && (
          <p className="mt-4 text-center text-red-600 font-medium">
            {error}
          </p>
        )}

        {message && (
          <p className="mt-4 text-center text-green-600 font-medium">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
