interface SectionLabelProps {
  children: React.ReactNode;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        marginBottom: '1rem',
      }}
    >
      <div
        style={{
          width: '32px',
          height: '1px',
          backgroundColor: '#D4AF37',
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.7rem',
          fontWeight: 500,
          letterSpacing: '0.2em',
          textTransform: 'uppercase' as const,
          color: '#D4AF37',
        }}
      >
        {children}
      </span>
    </div>
  );
}
