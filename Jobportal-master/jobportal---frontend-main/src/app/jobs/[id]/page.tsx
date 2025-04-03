"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

interface Job {
  id: string;
  title: string;
  company: string;
  location?: string;
  salary?: string;
  description: string;
}

export default function JobDetails() {
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const params = useParams(); // ✅ Unwrapping `params`

  useEffect(() => {
    if (!params.id) return; // ✅ Ensure `id` exists before fetching

    fetch(`http://localhost:5000/jobs/${params.id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Job not found");
        return res.json();
      })
      .then((data) => {
        setJob(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching job:", err);
        setError(err.message);
        setLoading(false);
      });
  }, [params.id]); // ✅ Using `params.id` safely

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <div className="max-w-2xl mx-auto bg-white p-6 shadow-md rounded-lg">
        <h1 className="text-3xl font-bold">{job?.title}</h1>
        <p className="text-gray-600">{job?.company}</p>
        {job?.location && <p className="text-gray-500">📍 {job.location}</p>}
        {job?.salary && <p className="text-green-500">💰 {job.salary}</p>}
        <p className="mt-4 text-gray-700">{job?.description}</p>
        <button
          className="mt-6 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => router.back()}
        >
          ⬅ Go Back
        </button>
      </div>
    </div>
  );
}
