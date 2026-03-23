import { Boxed, Title } from "@/components";
import "@/styles/components/Timeline.scss";

export type TimelineMilestone = {
  year: string;
  title: string;
  description: string;
  badge: string;
  icon: string;
};

type TimelineProps = {
  milestones: TimelineMilestone[];
};

export function Timeline({ milestones }: TimelineProps) {
  return (
    <Boxed padding="none" gap="md">
      {milestones.map((item, index) => (
        <Boxed
          key={`${item.year}-${item.title}`}
          direction="row"
          align="stretch"
          gap="md"
          style={{ width: "100%" }}
        >
          {/* Rail — nó + linha conectora */}
          <div className="timeline-rail">
            {index > 0 && (
              <span className="timeline-connection-top" aria-hidden />
            )}
            {index < milestones.length - 1 && (
              <span className="timeline-connection-bottom" aria-hidden />
            )}

            <span className="timeline-node" aria-hidden>
              {item.icon}
            </span>

            <strong className="timeline-year">
              {item.year}
            </strong>
          </div>

          {/* Card do marco */}
          <Boxed
            centered={false}
            gap="xs"
            style={{
              flex: 1,
              border: "1px solid var(--color-border-subtle)",
              borderRadius: "20px",
              background: "var(--color-surface-base)",
            }}
          >
            <Boxed direction="row" align="center" justify="between" wrap gap="xs" padding="none">
              <Title level={3}>{item.title}</Title>
              <span
                style={{
                  display: "inline-flex",
                  border: "1px solid var(--color-border-accent)",
                  borderRadius: "9999px",
                  padding: "4px 10px",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                }}
              >
                {item.badge}
              </span>
            </Boxed>

            <p style={{ color: "var(--color-text-secondary)" }}>{item.description}</p>

            <Boxed
              padding="sm"
              centered={false}
              style={{
                borderRadius: "12px",
                border: "1px dashed var(--color-border-soft)",
                background: "var(--color-surface-soft)",
                maxWidth: "260px",
              }}
            >
              <small style={{ color: "var(--color-text-tertiary)" }}>
                Foto/registro deste marco (placeholder)
              </small>
            </Boxed>
          </Boxed>
        </Boxed>
      ))}
    </Boxed>
  );
}
