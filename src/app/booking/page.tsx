import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import getUserProfile from "@/libs/getUserProfile";
import DateReserve from "@/components/DateReserve";

export default async function BookingPage() {
  const session = await getServerSession(authOptions);
  let profile = null;
  let profileError = false;
  if (session?.user.token) {
    try {
      profile = (await getUserProfile(session.user.token)).data;
    } catch {
      profileError = true;
    }
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-bold text-emerald-950">Book a venue</h1>
      <p className="mt-3 text-zinc-600">Plan a gathering worth remembering.</p>
      {profile && (
        <section aria-labelledby="profile-heading" className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
          <h2 id="profile-heading" className="text-xl font-semibold text-emerald-950">Your profile</h2>
          <dl className="mt-4 grid gap-4 sm:grid-cols-2">
            <div><dt className="text-sm text-zinc-600">Name</dt><dd className="font-medium">{profile.name}</dd></div>
            <div><dt className="text-sm text-zinc-600">Email</dt><dd className="break-words font-medium">{profile.email}</dd></div>
            <div><dt className="text-sm text-zinc-600">Tel.</dt><dd className="font-medium">{profile.tel}</dd></div>
            <div><dt className="text-sm text-zinc-600">Member Since</dt><dd className="font-medium">{new Date(profile.createdAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })}</dd></div>
          </dl>
        </section>
      )}
      {profileError && <p role="alert" className="mt-6 rounded-xl bg-amber-50 p-4 text-amber-900">Unable to load your profile. Please try again or <Link className="underline" href="/api/auth/signout">sign out</Link> and sign in again.</p>}
      {!session && <p className="mt-6 text-zinc-600"><Link className="font-semibold underline" href="/api/auth/signin?callbackUrl=/booking">Sign-In</Link> to see your member profile.</p>}
      <section aria-label="Booking details" className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <DateReserve />
      </section>
    </main>
  );
}
