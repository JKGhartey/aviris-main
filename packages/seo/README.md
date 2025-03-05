# @aviris/seo

A shared SEO configuration package for Aviris applications.

## Features

- Consistent metadata generation across all Aviris applications
- Viewport configuration
- OpenGraph and Twitter card support
- Favicon and manifest configuration
- Robots configuration

## Usage

### Basic Usage

```typescript
import {
  generateMetadata,
  generateViewport,
} from "@aviris/seo/generateMetadata";

export const viewport = generateViewport();

export const metadata = generateMetadata({
  title: "Your Page Title",
  description: "Your page description",
  keywords: "your, keywords, here",
  ogImage: "/your-og-image.jpg",
  twitterHandle: "@yourhandle",
  ogUrl: "https://yourdomain.com",
});
```

### Special Case for www App

For the main www application, set `isWww: true` to display just "Aviris" as the title:

```typescript
export const metadata = generateMetadata({
  title: "Aviris",
  description: "Your platform description",
  isWww: true,
  // ... other options
});
```

## Configuration Options

| Option        | Type    | Default                            | Description                      |
| ------------- | ------- | ---------------------------------- | -------------------------------- |
| title         | string  | "Default Title"                    | The page title                   |
| description   | string  | "Default description for the page" | The page description             |
| keywords      | string  | "default, keywords"                | SEO keywords                     |
| ogImage       | string  | "/favicon.svg"                     | OpenGraph image URL              |
| ogUrl         | string  | "https://yourdomain.com"           | OpenGraph URL                    |
| twitterHandle | string  | "@yourhandle"                      | Twitter handle                   |
| isWww         | boolean | false                              | Whether this is the main www app |

## Default Configuration

The package includes default configurations for:

- Favicons (SVG, ICO, PNG)
- Apple Touch Icon
- Web Manifest
- Robots meta tags
- OpenGraph and Twitter card metadata
- Viewport settings

## License

MIT
