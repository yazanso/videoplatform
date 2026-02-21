import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0A1F44] text-[#F8F9FC] p-8">
      <h1 className="text-3xl font-semibold">Vertical Video Platform</h1>
      <p className="mt-3 max-w-xl text-[#C9CDE8]">
        Premium short-form video experience scaffold with algorithmic feed,
        creator studio, and monetization-ready architecture.
      </p>
      <div className="mt-8 flex gap-4">
        <Link className="rounded-xl bg-[#6C3BFF] px-4 py-2" href="/feed">
          Open Feed
        </Link>
        <Link className="rounded-xl border border-[#6C3BFF] px-4 py-2" href="/explore">
          Explore
        </Link>
      </div>
    </main>
  );
}
