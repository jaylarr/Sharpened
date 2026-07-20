import type { ArticleBlock } from "../../content/blog";

type ArticleContentProps = {
  blocks: ArticleBlock[];
};

export function ArticleContent({ blocks }: ArticleContentProps) {
  return (
    <div className="article-content">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          return (
            <h2 className="article-heading" id={`section-${index}`} key={`${block.text}-${index}`}>
              {block.text}
            </h2>
          );
        }

        if (block.type === "list") {
          return (
            <ul className="article-list" key={`list-${index}`}>
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }

        if (block.type === "numbered") {
          return (
            <ol className="article-numbered" key={`numbered-${index}`}>
              {block.items.map((item, itemIndex) => (
                <li className="article-numbered-item" key={item.title}>
                  <span className="article-number">{itemIndex + 1}</span>
                  <div>
                    <h2>{item.title}</h2>
                    <p>{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          );
        }

        return <p key={`${block.text}-${index}`}>{block.text}</p>;
      })}
    </div>
  );
}

