interface GoldDividerProps {
  width?: string;
  className?: string;
}

export default function GoldDivider({ width = '60px', className }: GoldDividerProps) {
  return (
    <div
      className={className}
      style={{
        width,
        height: '1px',
        backgroundColor: '#D4AF37',
        opacity: 0.7,
      }}
    />
  );
}
