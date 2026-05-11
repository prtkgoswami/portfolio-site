import React from "react";
import { Article } from "@sanity/types";
import ArticleCard from "./ArticleCard";
import { ARTICLES_QUERY } from "@/sanity/queries";
import { client as sanityClient } from "@sanity/lib/client";
import "./index.css";

const getArticlesSchema = (articles: Article[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Technical Articles by Pratik Goswami",
    description:
      "A collection of write-ups on Frontend Engineering, React, and System Design.",
    itemListElement: articles.map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Article",
        headline: article.title,
        description: article.description,
        datePublished: article.postedOn, 
        dateModified: article.postedOn,
        url: article.links[0]?.url, // Canonical link to the external post
        author: {
          "@type": "Person",
          name: "Pratik Goswami",
          url: "https://pratikgoswami.dev", // Links back to your identity
        },
        publisher: {
          "@type": "Person",
          name: "Pratik Goswami",
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": article.links[0]?.url,
        },
      },
    })),
  };
};

export default async function ArticleSection() {
  const articles: Article[] = await sanityClient.fetch(ARTICLES_QUERY);

  return (
    <section
      id="article-section"
      className="pages"
      aria-labelledby="article-title"
    >
      <div className="section-content">
        <h2 id="article-title" className="section-title">
          Write-Ups &amp; Articles
        </h2>

        {articles && articles.length > 0 ? (
          <div id="article-container" role="list">
            {articles.map(
              (article) =>
                article && <ArticleCard key={article._id} data={article} />,
            )}
          </div>
        ) : (
          <p id="article-container-empty" aria-live="polite">
            Articles Coming Soon
          </p>
        )}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getArticlesSchema(articles)),
        }}
      />
    </section>
  );
}
