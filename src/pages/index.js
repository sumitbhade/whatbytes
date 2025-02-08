import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Skill Test Dashboard</h1>
        <Link
          href="/skill-test"
          className="bg-blue-800 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          View Skill Test Results
        </Link>
      </div>
    </div>
  );
}
