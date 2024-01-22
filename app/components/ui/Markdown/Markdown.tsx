import ReactMarkdown, { type Components, type Options } from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownProps extends Pick<Options, 'children'> {}

const Markdown = ({ children }: MarkdownProps) => {
  const components: Partial<Components> = {
    h1: ({ node, className, ...props }) => {
      return (
        <h1
          {...props}
          className={`${className} font-bold text-2xl border-b-2 border-solid border-[#224b4b] my-4`}></h1>
      );
    },
    h2: ({ node, className, ...props }) => {
      return (
        <h2
          {...props}
          className={`${className} font-bold text-xl border-b border-solid border-[#224b4b] my-3`}></h2>
      );
    },
    h3: ({ node, className, ...props }) => {
      return (
        <h3 {...props} className={`${className} font-bold text-lg my-2`}></h3>
      );
    },
    code: ({ node, className, ...props }) => {
      return (
        <code {...props} className={`${className} bg-white font-bold`}></code>
      );
    },
    pre: ({ node, className, ...props }) => {
      return <pre {...props} className={`${className} bg-white`}></pre>;
    },
    blockquote: ({ node, className, ...props }) => {
      return (
        <blockquote
          {...props}
          className={`${className} border-l-[3px] border-solid border-[#224b4b] text-[#224b4b] pl-[5px] ml-[25px]`}></blockquote>
      );
    },
    a: ({ node, className, ...props }) => {
      return (
        <a {...props} className={`${className} cursor-pointer underline`}></a>
      );
    },
    th: ({ node, className, ...props }) => {
      return (
        <th
          {...props}
          className={`${className} border-[2px] border-solid border-[#224b4b] px-[5px]`}></th>
      );
    },
    td: ({ node, className, ...props }) => {
      return (
        <td
          {...props}
          className={`${className} border-[2px] border-solid border-[#224b4b] px-[5px]`}></td>
      );
    },
    ul: ({ node, className, ...props }) => {
      return (
        <ul
          {...props}
          className={`${className} my-4 pl-10 list-disc [&_ul]:list-circle [&_ul]:m-0 [&_ul]:ps-10 [&_ul_ul]:list-square`}></ul>
      );
    },
    ol: ({ node, className, ...props }) => {
      return (
        <ol {...props} className={`${className} list-decimal my-4 pl-10`}></ol>
      );
    },
    li: ({ node, className, ...props }) => {
      return <li {...props} className={`${className} list-item`}></li>;
    },
    img: ({ node, className, ...props }) => {
      return <img {...props} className={`${className} max-w-[calc(90%)]`} />;
    },
    p: ({ node, className, ...props }) => {
      return <p {...props} className={`${className} my-1`}></p>;
    },
  };

  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {children}
    </ReactMarkdown>
  );
};

export default Markdown;
