/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage, getImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social
  // because staticimage does not support the url directly
  const placehold_image = getImage({
    src: "https://placehold.co/50x50", 
    width: 50,
    height: 50
  });
  return (
    //not sure why the social mastodon is not coming through
    //<a href={`https://pnw.zone/${social?.mastodon || ``}`}>
    <div className="bio">
      {/* <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="http://placehold.co/50x50"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      /> */}
      <img
        className="bio-avatar"
        src="https://placehold.co/50x50"
        alt="Profile picture"
        width={50}
        height={50}
      />
      {author?.name && (
        <p>
          Written by <strong>{author.name}</strong> {author?.summary || null}
          {` `}
          <a href={`https://pnw.zone/@alexh`}>
            You can follow me on mastodon
          </a>
        </p>
      )}
    </div>
  )
}

export default Bio
