// /src/contact/page.tsx

"use client";

import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import Subtitle from "@/components/layout/Subtitle/Subtitle";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("送信中...");

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (res.ok) {
      setStatus("送信完了しました！");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("送信に失敗しました。");
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-1">
        <Subtitle name="Contact" />
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-4">
          <input
            type="text"
            name="name"
            placeholder="お名前"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="メールアドレス"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <textarea
            name="message"
            placeholder="メッセージ"
            value={formData.message}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            送信
          </button>
          <p>{status}</p>
        </form>
      </div>
      <Footer />
    </div>
  );
}
