import React from "react";

const Card = ({ post }) => {
  return (
    <article className="flex flex-col bg-gray-900">
      <div>
        <img
          alt={post.title}
          className="object-cover w-full h-52 bg-gray-500"
          src={post.img}
        />
      </div>
      <div className="flex flex-col flex-1 p-6">
        <h2 className="text-2xl text-gray-100">{post.title}</h2>
        <p className="flex-1 py-2 text-xs text-gray-100">
          {post.short.length > 50
            ? post.short.slice(0, 50) + "..."
            : post.short}
        </p>
        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
          <span>June 1, 2023</span>
          <span>2.1K views</span>
        </div>
      </div>
    </article>
  );
};

export default Card;
