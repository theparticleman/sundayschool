# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static HTML landing page for Brookside Ward Sunday School that links to Google Slides presentations for weekly lessons. Hosted on GitHub Pages at sundayschool.jonathanandmelinda.com.

## Development & Deployment

No build system - this is a pure static HTML/CSS site.

**To develop:** Edit HTML files directly and open in browser to preview.

**To deploy:** Push to main branch. GitHub Pages automatically serves updates.

## Architecture

- `index.html` - Current year (2026) lessons page
- `2025.html` - Previous year archive
- `styles.css` - Unified stylesheet for all pages
- `CNAME` - GitHub Pages custom domain configuration

Content is hosted externally on Google Slides. This site is a link aggregator only.

## Lesson Schedule Reference

**Which weeks the user teaches (source of truth):** the schedule spreadsheet:

https://docs.google.com/spreadsheets/d/1_Yt436vCcCEIFcKqeCUdkes9gv0iYVufqP_e7D95NbI/edit

Consult this spreadsheet to determine which upcoming week the user is assigned to teach.

**Full-year lesson list (all weeks):** the official Come, Follow Me manual:

https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-old-testament-2026?lang=eng

Use this to look up the date range and scripture block for any week. The manual page lists scripture references per week; the thematic lesson titles used on this site (e.g. "I Am Doing a Great Work" for Jul 27-Aug 2) come from each week's individual lesson page or from the matching slide deck's title.

## Adding New Lesson Links

All 2026 slide decks live in this Drive folder (a new folder will be used after 2026; update this link then):

https://drive.google.com/drive/u/0/folders/1-Pp1m4P2aiTOdrfTffLjIa795QBuisCL

1. Check the schedule spreadsheet (see "Lesson Schedule Reference" above) to identify the next upcoming lesson the user is assigned to teach
2. Search the folder above for a presentation matching the lesson (use `mcp__claude_ai_Google_Drive__search_files` with `mimeType = 'application/vnd.google-apps.presentation'` and the folder as parent)
3. If a matching deck exists, ensure its sharing is "anyone with the link" can view (check with `get_file_permissions`, fix with `share_file`)
4. If no matching deck exists:
   1. Find the most recently modified presentation in the folder
   2. Propose a name for the copy, following the naming convention of the existing decks and the button text in `index.html`, and **show the proposed name to the user for approval before copying**
   3. Copy the deck (`copy_file`) into the same folder with the approved name
   4. Set the copy's sharing to "anyone with the link" can view
   5. The copy still contains the previous lesson's content; the user edits the slides themselves, so don't change the content
5. If `share_file` cannot set "anyone with the link" sharing, stop and tell the user to set it manually. Do not add the button until sharing is confirmed
6. Use the deck's share link (replace the URL suffix with `?usp=sharing`)
7. Edit the appropriate HTML file (index.html for current year)
8. Add a new `<a>` element inside the `<main>` section, following existing format
9. Lessons are listed in reverse chronological order (newest first)
10. Commit (plain imperative subject, no Conventional Commits prefix) and push to main

## Navigation Pattern

Tab-based navigation between years. The current page's tab has the `.current` CSS class applied.
