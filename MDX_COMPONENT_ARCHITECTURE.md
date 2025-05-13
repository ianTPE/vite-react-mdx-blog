# MDX Component Architecture

This document explains the architecture and principles behind our MDX component system.

## Overview

This blog platform is built with a component-first architecture that allows:

1. Global MDX components available to all articles
2. Article-specific components visible only to that article
3. Clear separation between content and metadata

## Directory Structure

```
vite-blog/
├── src/
│   ├── components/
│   │   └── mdx/          # Global MDX components
│   │
│   ├── content/
│   │   └── articles/
│   │       └── article-slug/ 
│   │           ├── index.mdx     # Content
│   │           ├── metadata.ts   # TypeScript metadata
│   │           └── components/   # Article-specific components
│   │
│   └── lib/
│       ├── mdx-utils.ts          # MDX handling utilities
│       └── component-registry.ts # Component registry
```

## Components System

### Global Components

Global components are defined in `src/components/mdx/` and are available to all MDX content. These typically include:

- Custom heading components
- Code blocks with syntax highlighting
- Callouts and alerts
- Tables and other formatting utilities

### Article-Specific Components

Each article can define its own components in `src/content/articles/[slug]/components/`. These are:

- Only loaded for that specific article
- Can access article metadata
- Perfect for interactive demos or visualizations specific to one post

## Metadata Management

Metadata is kept separate from content in TypeScript files (`metadata.ts`), which provides:

- Type safety for metadata
- Easier programmatic access
- Clear separation between content and metadata

## Runtime Component Resolution

The system dynamically loads components and resolves them at runtime:

1. Global components are loaded first
2. Article-specific components are loaded and override any global components with the same name
3. The `MDXProvider` makes these components available to the MDX content

## Build-time Processing

The build system:

1. Extracts and validates all article metadata
2. Generates a centralized registry through the middleware
3. Ensures that only published articles are included in production builds

## Adding New Articles

To add a new article:

1. Create a new directory in `src/content/articles/[your-slug]/`
2. Add `index.mdx` with your content (no frontmatter needed)
3. Create `metadata.ts` with your article metadata
4. Optionally add custom components in `components/`
5. Run the middleware generator script to update the registry

## Benefits of This Approach

- **Type Safety**: TypeScript everywhere provides type checking for metadata and components
- **Component Isolation**: Article-specific components don't affect other articles
- **Performance**: Only loads components needed for the current article
- **Developer Experience**: Clear separation of concerns makes editing easier
