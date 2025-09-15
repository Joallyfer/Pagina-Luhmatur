// app/teste/[id]/page.tsx
export default function P({ params }: { params: { id: string } }) {
  return <div style={{ padding: 24 }}>id: {params.id}</div>;
}