# Nextjs App Router CSS Bundle repo

This application is the simple reproduction of the Turbopack CSS issue.

## Getting started

- pnpm install
- pnpm build
- pnpm start

The app runs as normal

## Architecture

- The app has 4 pages: home, dashboard, dashboard/users, and not found
- Header is shared across the entire app via Root layout
- Button is only used in 2 pages: `not found` and `home`

## Issue

- When running the analyzer `pnpm build:analyzer` and visit [http://localhost:4000/](http://localhost:4000/), you can see that the `Button.module.scss` also included in both `dashboard` and `dashboard/users` case. At first, I thought it was the bundle analyzer issue, but the CSS actually loads on the page as well. Worst of all, these are all load with the page and blocking view. On my production project with >100 componentsm it is a massive 11 seconds blocking on Lighthouse, effectively tank our Lighthouse/CWV. Since the Next App router doesn't have a way to extract critical CSS or interfere with CSS loading order, this is very urgent

<img width="4482" height="2690" alt="image" src="https://github.com/user-attachments/assets/aeb09712-84b5-4c10-8443-d431d2fe2a77" />
