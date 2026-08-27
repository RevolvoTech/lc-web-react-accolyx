"use client";

import { KeyboardEvent, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

type Practice = {
  title: string;
  tone: string;
  services: readonly {
    title: string;
    copy: string;
  }[];
};

type ServiceExplorerProps = {
  practices: readonly Practice[];
};

export default function ServiceExplorer({ practices }: ServiceExplorerProps) {
  const [activePractice, setActivePractice] = useState(0);
  const [activeService, setActiveService] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const practice = practices[activePractice];

  function selectPractice(index: number) {
    setActivePractice(index);
    setActiveService(0);
  }

  function handleTabKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    let nextIndex = index;

    if (event.key === "ArrowRight") nextIndex = (index + 1) % practices.length;
    if (event.key === "ArrowLeft") {
      nextIndex = (index - 1 + practices.length) % practices.length;
    }
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = practices.length - 1;

    if (nextIndex === index) return;

    event.preventDefault();
    selectPractice(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <div className="serviceExplorer reveal">
      <div className="practiceTabs" role="tablist" aria-label="Choose a practice">
        {practices.map((item, index) => (
          <button
            id={`practice-tab-${index}`}
            type="button"
            role="tab"
            aria-selected={activePractice === index}
            aria-controls="service-explorer-panel"
            tabIndex={activePractice === index ? 0 : -1}
            ref={(node) => {
              tabRefs.current[index] = node;
            }}
            onClick={() => selectPractice(index)}
            onKeyDown={(event) => handleTabKeyDown(event, index)}
            key={item.title}
          >
            <span>{index === 0 ? "Systems" : "Finance"}</span>
            {item.title}
          </button>
        ))}
      </div>

      <div
        className={`servicePanels ${practice.tone}`}
        id="service-explorer-panel"
        role="tabpanel"
        aria-labelledby={`practice-tab-${activePractice}`}
      >
        {practice.services.map((service, index) => {
          const expanded = activeService === index;

          return (
            <button
              type="button"
              className={`servicePanel ${expanded ? "isActive" : ""}`}
              aria-expanded={expanded}
              onClick={() => setActiveService(index)}
              key={service.title}
            >
              <span className="servicePanelTitle">
                <span>{service.title}</span>
                <ArrowUpRight aria-hidden="true" size={20} strokeWidth={1.8} />
              </span>
              <span className="servicePanelCopy">{service.copy}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
