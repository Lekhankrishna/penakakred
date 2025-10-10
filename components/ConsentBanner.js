"use client";
import { useEffect, useState } from "react";

export default function ConsentBanner() {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined" && !localStorage.getItem("consent")) {
      setShown(true);
    }
  }, []);
  if (!shown) return null;
  return (
    <div className="fixed bottom-0 inset-x-0 bg-white border-t shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4 text-sm">
        <p>
          We use privacy-safe analytics and essential cookies. By using this site, you acknowledge our{" "}
          <a href="/legal/privacy" className="underline">Privacy Policy</a>.
        </p>
        <button
          className="px-4 py-2 rounded-xl bg-brandBlue text-white"
          onClick={() => { localStorage.setItem("consent", "true"); setShown(false); }}
        >
          I Understand
        </button>
      </div>
    </div>
  );
}
