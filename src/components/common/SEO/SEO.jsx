import { Helmet } from "react-helmet-async";

const SITE_URL = "https://mynexgo.com";
const OG_IMAGE = `${SITE_URL}/nexgo_og_image.png`;

const SEO = ({
    title,
    description,
    canonical,
    noIndex = false,
    ogType = "website",
}) => {
    const canonicalUrl = canonical
        ? `${SITE_URL}${canonical.startsWith("/") ? canonical : `/${canonical}`}`
        : undefined;

    return (
        <Helmet>
            {/* Basic SEO */}
            <title>{title}</title>

            <meta
                name="description"
                content={description}
            />

            {/* Robots */}
            <meta
                name="robots"
                content={
                    noIndex
                        ? "noindex, nofollow"
                        : "index, follow"
                }
            />

            {/* Canonical */}
            {canonicalUrl && (
                <link
                    rel="canonical"
                    href={canonicalUrl}
                />
            )}

            {/* Open Graph */}
            <meta
                property="og:type"
                content={ogType}
            />

            <meta
                property="og:title"
                content={title}
            />

            <meta
                property="og:description"
                content={description}
            />

            {canonicalUrl && (
                <meta
                    property="og:url"
                    content={canonicalUrl}
                />
            )}

            <meta
                property="og:image"
                content={OG_IMAGE}
            />

            {/* Twitter / X */}
            <meta
                name="twitter:card"
                content="summary_large_image"
            />

            <meta
                name="twitter:title"
                content={title}
            />

            <meta
                name="twitter:description"
                content={description}
            />

            <meta
                name="twitter:image"
                content={OG_IMAGE}
            />
        </Helmet>
    );
};

export default SEO;