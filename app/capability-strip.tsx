const capabilities = [
  "IT controls",
  "Cyber risk",
  "Internal audit",
  "Accounting",
  "IFRS support",
  "Finance outsourcing",
];

export default function CapabilityStrip() {
  return (
    <section className="capabilityStrip" aria-label="Core capabilities">
      <div className="capabilityStripInner">
        <ul>
          {capabilities.map((capability) => (
            <li key={capability}>{capability}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
