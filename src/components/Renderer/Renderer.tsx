// /src/components/Render/Render.tsx

import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

interface Props {
  content: string
}

export default function Renderer(props: Props){
  return (
    <div className="">
      <Markdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          h1: ({ children }) => <h1 className="text-3xl font-bold pt-4 underline">{children}</h1>,
          h2: ({ children }) => <h2 className="text-2xl font-semibold">{children}</h2>,
          p: ({ children }) => <p className="text-lg mt-4">{children}</p>,
          a: ({ children, href }) => (
            <a href={href} className="text-lg mt-4 underline text-blue-500 hover:text-blue-700">
              {children}
            </a>
          ),
          ul: ({ children }) => <ul className="list-disc ml-5">{children}</ul>,
          ol: ({ children }) => <ol className="list-decimal ml-5">{children}</ol>,
          li: ({ children }) => <li className="text-lg mt-1">{children}</li>,
          table: ({ children }) => (
            <table className="border border-collapse border-gray-500 w-full mt-4">{children}</table>
          ),
          thead: ({ children }) => <thead className="border border-gray-500">{children}</thead>,
          tbody: ({ children }) => <tbody className="border border-gray-500">{children}</tbody>,
          tr: ({ children }) => <tr className="border border-gray-500">{children}</tr>,
          th: ({ children }) => <th className="border border-gray-500 px-2 py-2 text-center">{children}</th>,
          td: ({ children }) => <td className="border border-gray-500 px-2 py-2">{children}</td>,
        }}
      >
        {props.content}
      </Markdown>
    </div>
  );
}
