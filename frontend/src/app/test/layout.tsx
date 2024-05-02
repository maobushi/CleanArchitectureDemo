export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <p>Test Header</p>
      {children}
      <p>Test Footer</p>
    </div>
  );
}
