# OneTouch

OneTouch is a multilingual digital studio website for small and medium businesses in Poland. The site focuses on websites first, with SEO and NFC as complementary services.

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- next-intl
- ESLint
- Prettier

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Useful Scripts

```bash
npm run lint
npm run build
npm run format
```

## Configuration

Contact details and public site URL live in `src/config/site.ts`.

Set `NEXT_PUBLIC_SITE_URL` in production so metadata, canonical URLs, `robots.txt`, and `sitemap.xml` point to the final domain.

## Languages

Polish is the default locale. Ukrainian and English are available at:

- `/uk`
- `/en`

Translations are stored in `messages/pl.json`, `messages/uk.json`, and `messages/en.json`.

## Deployment

Deploy to any Next.js-compatible platform. Before deployment:

1. Replace the contact phone and email in `src/config/site.ts`.
2. Set `NEXT_PUBLIC_SITE_URL`.
3. Run `npm run lint`.
4. Run `npm run build`.
