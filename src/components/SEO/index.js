import React from 'react';
import Helmet from 'react-helmet';
import { withPrefix } from 'gatsby-link';

const getSchemaOrgJSONLD = ({
  isBlogPost,
  siteUrl,
  url,
  parentUrl,
  title,
  image,
  description,
  datePublished,
  author,
  organizationTitle
}) => {
  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url,
      name: title,
      alternateName: ''
    }
  ];

  return isBlogPost
    ? [
      ...schemaOrgJSONLD,
      {
        '@context': 'http://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@id': parentUrl,
              name: 'Статті' // TODO: move to config
            }
          },
          {
            '@type': 'ListItem',
            position: 2,
            item: {
              '@id': url,
              name: title,
              image
            }
          }
        ]
      },
      {
        '@context': 'http://schema.org',
        '@type': 'BlogPosting',
        url,
        name: title,
        alternateName: '',
        headline: title,
        image: {
          '@type': 'ImageObject',
          url: image
        },
        description,
        author: {
          '@type': 'Person',
          name: author
        },
        publisher: {
          '@type': 'Organization',
          url: siteUrl,
          logo: '',
          name: organizationTitle
        },
        mainEntityOfPage: {
          '@type': 'WebSite',
          '@id': ''
        },
        datePublished
      }
    ]
    : schemaOrgJSONLD;
};

const SEO = ({ data = {}, isBlogPost, defaults = {} }) => {
  const url = `${defaults.url}/${data.url || ''}`;
  const parentUrl = `${defaults.url}/${data.parentUrl || ''}`;
  const title = `${data.title || defaults.title}${defaults.titleTemplate || ''}`;
  const description = data.metaDescription || data.excerpt || defaults.metaDescription;
  const keywords = data.metaKeywords || defaults.metaDescription;
  const fbDescription = data.fbDescription || defaults.fbDescription || description;
  const image = `${defaults.url}${withPrefix(data.image || data.fbImage || defaults.fbImage)}`;
  const datePublished = isBlogPost ? data.datePublished : false;
  const author = data.author || defaults.defaultAuthor;

  const schemaOrgJSONLD = getSchemaOrgJSONLD({
    isBlogPost,
    siteUrl: defaults.url,
    url,
    parentUrl,
    title: data.title,
    image,
    description,
    datePublished,
    author,
    organizationTitle: defaults.organizationTitle
  });

  return (
    <Helmet>
      {/* General tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="image" content={image} />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      {isBlogPost ? <meta property="og:type" content="article" /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={fbDescription} />
      <meta property="og:image" content={image} />
      { data.fbAppID
        ? <meta property="fb:app_id" content={data.fbAppID} />
        : null }
      <link rel="shortcut icon" type="image/x-icon" href={withPrefix(data.favicon || defaults.favicon)} />
    </Helmet>
  );
};

export default SEO;
