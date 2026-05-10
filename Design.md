# Portfolio Design System & Guidelines

This document defines the core design tokens and rules for the portfolio to ensure visual consistency across all pages and components.

## 1. Core Principles
- **Minimalist & Bold**: High contrast, clean layouts, and focused typography.
- **Authority**: The design should reflect professional AI/ML engineering expertise.
- **Accessibility**: High contrast is mandatory. 
  - **No "ghosted" (low opacity) text**: All text must be solid black.
  - **No "ghosted" lines**: All dividers and borders must be solid black.

## 2. Color Palette
| Token | Value | Usage |
| :--- | :--- | :--- |
| **Primary** | `#4f46e5` (Indigo 600) | Accents, links, indicators, active states. |
| **Text** | `#000000` (Solid Black) | All body text, headings, and descriptions. |
| **Lines / Borders** | `#000000` (Solid Black) | Dividers, section borders, component outlines. |
| **Background** | `#ffffff` (Solid White) | Main page background. |

## 3. Standardized Typography System
All sections must adhere to these four standard typography types to ensure uniformity.

| Type | Mobile | Desktop (lg+) | Usage |
| :--- | :--- | :--- | :--- |
| **Section Header** | `text-4xl` | `text-6xl` | Main section titles (e.g., "Core Expertise"). |
| **Items-Header** | `text-xl` | `text-2xl` | Category groupings (e.g., "Generative AI & Agents", "AI / ML"). |
| **Items-Subheader**| `text-base` | `text-xl` | Item names (e.g., "Agentic AI", Project Name, Role). |
| **Items-Body** | `text-sm` | `text-base` | Descriptions, bullet points, tool lists. |
| **Labels / UI** | `text-[10px]` | `text-xs` | Nav links, Project tags, small lifecycle steps. |

### Typography Rules:
- **Section Headers**: Must be `font-bold tracking-tighter`.
- **Items-Header**: Must be `font-black uppercase tracking-widest`.
- **Items-Subheader**: Must be `font-bold tracking-tight`.
- **Items-Body**: Must be `font-medium leading-relaxed`.

## 4. Spacing System (Tailwind Scale)
- **Section Padding**: `py-24` to `py-32` (Desktop); `py-16` (Mobile).
- **Max Content Width**: `max-w-7xl` (1280px).
- **Page Gutters**: `px-6` (Mobile); `px-12` (Tablet); `px-16` (Desktop).

## 5. UI Rules
- **Text Color**: Always use `text-black` for readability. 
- **Line Color**: Always use `border-black` or `bg-black` for internal component dividers. Note: No horizontal lines should be used *between* main sections.
- **Indicators**: Use the `indigo-600` color for active states.
- **Animations**: 
  - Hover: `transition-all duration-300`.
  - Image Scale: `transition-transform duration-700`.
