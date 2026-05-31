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

## Adding New Lesson Links

1. Check the memory file for Bro. Turner's lesson schedule to identify the next upcoming lesson
2. Search Google Drive for a presentation matching the lesson title (use `mcp__claude_ai_Google_Drive__search_files` with the lesson title and `mimeType = 'application/vnd.google-apps.presentation'`)
3. If a matching slide deck is found, use its share link (replace the URL suffix with `?usp=sharing`)
4. If no matching slide deck is found, ask the user to create one first
5. Edit the appropriate HTML file (index.html for current year)
6. Add a new `<a>` element inside the `<main>` section, following existing format
7. Lessons are listed in reverse chronological order (newest first)

## Navigation Pattern

Tab-based navigation between years. The current page's tab has the `.current` CSS class applied.
