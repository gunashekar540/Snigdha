"use client";
import { useState } from "react";

export default function CompanyDashboard() {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      alert("Job posted successfully!");
      setFormData({ title: "", company: "", description: "" });
    } else {
      alert("Error posting job");
    }
  };

  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <div className="max-w-2xl mx-auto bg-white shadow p-6 rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Post a New Job</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Job Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <textarea
            name="description"
            placeholder="Job Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
            Post Job
          </button>
        </form>
      </div>
    </div>
  );
}
