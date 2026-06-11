export default function Tooltip({
  data,
  children,
}: {
  data: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="group relative inline-block">
        {children}
        <div className="border-foreground bg-background pointer-events-none absolute top-full right-0 z-50 mt-1 rounded border px-2 py-1 text-sm font-bold whitespace-nowrap opacity-0 delay-300 group-hover:opacity-100">
          {data}
        </div>
      </div>
    </>
  );
}
