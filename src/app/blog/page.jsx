"use client";
import Card from "@/components/Card";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Blog = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://basic-blog.teamrabbil.com/api/post-newest"
      );
      const newData = await res.json();
      setData(newData);
    }
    fetchData();
  }, []);
  return (
    <div>
      <section className="py-6 sm:py-12  text-gray-900">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">
              Welcome to NewsNook Blog page!
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {data.map((post) => (
              <Link href={`/blog/${post.id}`}>
                <Card key={post.id} post={post}></Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
