interface ProfilePageProps {
  params: { handle: string };
}

export default function ProfilePage({ params }: ProfilePageProps) {
  return (
    <main className="min-h-screen bg-[#0A1F44] text-[#F8F9FC] p-6">
      <h1 className="text-2xl font-semibold">@{params.handle}</h1>
      <p className="mt-2 text-[#C9CDE8]">Creator profile with pinned videos and playlists.</p>
    </main>
  );
}
