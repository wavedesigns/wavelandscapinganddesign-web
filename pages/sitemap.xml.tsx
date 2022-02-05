import { GetServerSideProps } from 'next'
import { SITE_NAV, SITE_URL } from 'utils/constants'

const Sitemap = () => null
export default Sitemap

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const siteLinks = SITE_NAV.map(
    ({ slug }) =>
      `
    <url>
      <loc>${SITE_URL}${slug}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>1.0</priority>
    </url> 
`
  ).join('')

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
        <loc>${SITE_URL}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
      </url>       
      ${siteLinks} 
  </urlset>`

  res.setHeader('Cache-Control', 'max-age=0, s-maxage=86400, stale-while-revalidate')
  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}
