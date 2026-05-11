import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faDev,
  faHashnode,
  faLinkedin,
  faMediumM,
} from "@fortawesome/free-brands-svg-icons";
import { Article } from "@sanity/types";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ArticleCardProps {
  data: Article;
}

const PLATFORM_ICON_MAP: Record<string, IconDefinition> = {
  linkedIn: faLinkedin,
  hashnode: faHashnode,
  "dev.to": faDev,
  medium: faMediumM,
};

export default function ArticleCard({ data }: ArticleCardProps) {
  const { title, description, links } = data;

  // Use the first link as the primary canonical source for SEO
  const primaryLink = links[0]?.url || "#";

  const dateObj = new Date(data.postedOn + "T00:00:00");
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(dateObj);
  const diffInDays = (Date.now() - dateObj.getTime())/ (1000 * 60 * 60 * 24);
  const isNew = diffInDays >= 0 && diffInDays <= 5;

  return (
    <article
      role="listitem"
      className="article--card"
      aria-labelledby={`title-${data._id}`}
    >
      {isNew && <span 
      className="article--card--new-tag"
      role="status"
      aria-label="Recently published article"
    >
      New
    </span>}
      <div className="article--card--content">
        <h3 id={`title-${data._id}`} className="article--card--title">
          <Link
            href={primaryLink}
            target="_blank"
            rel="noopener noreferrer"
            className="article--primary-link"
          >
            {title}
          </Link>
        </h3>

        <p className="article--card--desc">{description}</p>

        <div className="article--card--footer">
          <p className="article--card--posted-date">Posted On: {formattedDate}</p>
          <div className="article--card--link-container">
            <span className="sr-only">Read this article on:</span>
            {links.map((link) => (
              <Link
                key={`${data._id}_${link.platform}`}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Read on ${link.platform}`}
                className="article--platform-link"
              >
                <div className="article--card--link-item">
                  <FontAwesomeIcon
                    icon={PLATFORM_ICON_MAP[link.platform.toLowerCase()]}
                    size="xl"
                    aria-hidden="true" // Icon is decorative; aria-label on Link handles text
                  />
                  <span className="link-item--tooltip" aria-hidden="true">
                    {link.platform}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
