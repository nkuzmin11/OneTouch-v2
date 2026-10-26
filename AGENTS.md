# AGENTS.md — OneTouch-v2

## Project
- Repository: nkuzmin11/OneTouch-v2
- Website/domain: onetouch-connect.org (association NOT VERIFIED)
- Special considerations: OneTouch project; confirm which repository corresponds to the live site and whether this is v2 before editing or deploying. Preserve existing application functions.

## Working principles
- Communicate with the owner in Ukrainian; keep user-facing copy in its appropriate localized language.
- Inspect existing code, routes, assets, and deployment configuration before proposing edits. Do not assume GitHub matches production until source parity is checked.
- Prefer maintainable changes with minimal dependencies; avoid unrelated refactors.
- Record which files were changed, checks performed, unresolved issues, and whether anything was deployed.

## Multilingual implementation (i18n)
- Target languages: Ukrainian (uk), Polish (pl), English (en). German (de) and Spanish (es) are potential additions, not assumed to be published.
- First identify actually implemented locales, default locale, routing, translation format, and language-switcher behavior.
- Preserve all existing languages and translate shared navigation, UI, forms, validation messages, and calls to action consistently.
- Maintain language-specific titles/descriptions, appropriate `html lang`, canonical URLs, reciprocal `hreflang` relationships, and locale-aware sitemaps when applicable.
- Keep language switching on corresponding translated pages where available; test missing-translation fallbacks and links.
- Do not silently publish untranslated or unreviewed machine-translated legal, commercial, or factual text.

## Quality, SEO, and security
- Validate builds and relevant tests when possible; clearly state checks that could not be run.
- Check mobile usability, accessibility, performance, internal links, duplicate content, structured data, sitemap.xml, and robots.txt where relevant.
- Do not claim ranking/indexing or conversion improvements without measured evidence.
- Never commit secrets, tokens, passwords, or sensitive customer data.
- Do not deploy or modify Cloudflare production without explicit approval or an approved deployment procedure. Prefer reviewable changes and a rollback plan.

## To verify after importing source
- Actual framework/build commands: NOT VERIFIED
- Production parity: NOT VERIFIED
- Cloudflare project and deployment method: NOT VERIFIED
- Published locale list and default locale: NOT VERIFIED
