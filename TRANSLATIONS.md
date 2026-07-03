# Tamil translation status — DRAFT ONLY

Every Tamil string in this prototype (`src/data/*.ts`) is a **draft written
during prototyping to demonstrate the bilingual architecture**. None of it has
been through the review process the design spec requires (section 17.4):

> - Tamil is a co-equal language, not a translation add-on — Tamil QA happens
>   before any page is published
> - Every Tamil translation must go through subject-expert review, not machine
>   translation alone
> - A controlled bilingual glossary governs all job titles, qualification
>   names, and system terms
> - Student and teacher testing of Tamil phrasing is required in pilot
>   districts before full launch

## Before launch

1. Build the controlled bilingual glossary (job titles, qualification names,
   system terms such as NVQ / UGC / Z-score) and reconcile every string
   against it.
2. Subject-expert review of all Tamil content, especially pathway stages and
   safeguarding text.
3. Student/teacher phrasing tests in pilot districts.

## Where the strings live

| File | Contents |
| --- | --- |
| `src/data/strings.ts` | All UI labels, headings, and shared copy |
| `src/data/jobs.ts` | Job profile content and pathway maps |
| `src/data/sectors.ts` | Sector names and descriptions |
| `src/data/providers.ts` | Provider and course names |
| `src/data/quiz.ts` | Quiz questions, options, clusters |
| `src/data/districts.ts` | District names |

Each bilingual string is an `{ en, ta }` object, so review can be done field
by field without touching component code.
