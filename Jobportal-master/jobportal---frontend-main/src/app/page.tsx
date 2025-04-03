"use client";
import { useState } from "react";
import Link from "next/link";

interface Job {
  id: string;
  title: string;
  company: string;
  location?: string;
  salary?: string;
}

export default function Home() {
  const [jobs] = useState<Job[]>([
    {
      id: "1",
      title: "Frontend Developer",
      company: "Tech Corp",
      location: "Remote",
      salary: "$80,000/year",
    },
    {
      id: "2",
      title: "Backend Developer",
      company: "Code Inc.",
      location: "New York",
      salary: "Negotiable",
    },
  ]);

  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Job Listings</h1>
        <Link href="/jobs/add">
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            ➕ Post a Job
          </button>
        </Link>
      </div>

      <div className="grid gap-4 max-w-2xl mx-auto">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div key={job.id} className="p-4 bg-white shadow-md rounded-lg">
              <h2 className="text-xl font-semibold">{job.title}</h2>
              <p className="text-gray-600">{job.company}</p>
              <p className="text-gray-500">📍 {job.location || "Not specified"}</p>
              <p className="text-green-500">💰 {job.salary || "Negotiable"}</p>
              <Link href={`/jobs/${job.id}`} className="text-blue-500 underline">
                View Details
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No jobs available.</p>
        )}
      </div>
    </div>
  );
}
