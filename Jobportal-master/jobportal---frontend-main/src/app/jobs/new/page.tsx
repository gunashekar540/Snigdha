"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewJob() {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    description: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch("http://localhost:5000/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) throw new Error("Failed to create job");
      router.push("/jobs"); // Redirect to jobs list
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <div className="max-w-2xl mx-auto bg-white p-6 shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Post a New Job</h1>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="title" placeholder="Job Title" value={formData.title} onChange={handleChange} required className="w-full p-2 border rounded" />
          <input type="text" name="company" placeholder="Company" value={formData.company} onChange={handleChange} required className="w-full p-2 border rounded" />
          <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} className="w-full p-2 border rounded" />
          <input type="text" name="salary" placeholder="Salary" value={formData.salary} onChange={handleChange} className="w-full p-2 border rounded" />
          <textarea name="description" placeholder="Job Description" value={formData.description} onChange={handleChange} required className="w-full p-2 border rounded"></textarea>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full" disabled={loading}>{loading ? "Posting..." : "Post Job"}</button>
        </form>
      </div>
    </div>
  );
}
