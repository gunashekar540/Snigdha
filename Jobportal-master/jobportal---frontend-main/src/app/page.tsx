"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Job {
  id: string;
  title: string;
  company: string;
  location?: string;
  salary?: string;
}

export default function Home() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => {
        // Add default location and salary if missing
        const updatedJobs = data.map((job: Job) => ({
          ...job,
          location: job.location || "Not specified",
          salary: job.salary || "Negotiable",
        }));
        setJobs(updatedJobs);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
        setLoading(false);
      });
  }, []);
  
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

      {loading ? (
        <p className="text-center text-gray-600">Loading jobs...</p>
      ) : jobs.length > 0 ? (
        <div className="grid gap-4 max-w-2xl mx-auto">
          {jobs.map((job) => (
            <div key={job.id} className="p-4 bg-white shadow-md rounded-lg">
              <h2 className="text-xl font-semibold">{job.title}</h2>
              <p className="text-gray-600">{job.company}</p>
              {job.location && <p className="text-gray-500">📍 {job.location}</p>}
              {job.salary && <p className="text-green-500">💰 {job.salary}</p>}
              <Link href={`/jobs/${job.id}`} className="text-blue-500 underline">
                View Details
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No jobs available.</p>
      )}
    </div>
  );
}
