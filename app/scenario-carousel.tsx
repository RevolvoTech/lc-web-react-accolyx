"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const scenarios = [
  {
    practice: "IT Audit & Consultancy",
    title: "Controls exist, but confidence in them does not.",
    copy: "Access, change, backup, security, or automated controls need an independent review before an audit, a board discussion, or a major systems decision.",
    outcome: "Start with a focused risk and control scoping conversation.",
  },
  {
    practice: "Audit, Accounting & Outsourcing",
    title: "The finance team is carrying too much operational pressure.",
    copy: "Close activities keep slipping, reconciliations need attention, or reporting is consuming the capacity your team needs for higher-value work.",
    outcome: "Define which processes should be stabilised, supported, or outsourced.",
  },
  {
    practice: "Connected support",
    title: "A finding is known, but the route to closure is not.",
    copy: "The issue crosses technology, finance, process ownership, or documentation, and the response needs clearer design, evidence, and accountability.",
    outcome: "Turn the finding into a sequenced, evidence-ready action plan.",
  },
];

export default function ScenarioCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scenario = scenarios[activeIndex];

  function move(direction: number) {
    setActiveIndex(
      (current) => (current + direction + scenarios.length) % scenarios.length,
    );
  }

  return (
    <div className="scenarioCarousel reveal">
      <div className="scenarioMeta">
        <span>
          {String(activeIndex + 1).padStart(2, "0")} / {String(scenarios.length).padStart(2, "0")}
        </span>
        <p>{scenario.practice}</p>
      </div>

      <div className="scenarioContent" aria-live="polite">
        <h3>{scenario.title}</h3>
        <p>{scenario.copy}</p>
        <strong>{scenario.outcome}</strong>
      </div>

      <div className="scenarioControls" aria-label="Browse engagement scenarios">
        <button type="button" onClick={() => move(-1)} aria-label="Previous scenario">
          <ArrowLeft aria-hidden="true" size={20} strokeWidth={1.8} />
        </button>
        <button type="button" onClick={() => move(1)} aria-label="Next scenario">
          <ArrowRight aria-hidden="true" size={20} strokeWidth={1.8} />
        </button>
      </div>
    </div>
  );
}
