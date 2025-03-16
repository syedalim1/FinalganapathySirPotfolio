# About Component Structure

This directory contains modular components for the About page of the portfolio website.

## Component Structure

- **HeroSection.jsx**: Hero section with profile image and brief introduction.
- **SkillsSection.jsx**: Skills and expertise section with visual skill representations.
- **EducationSection.jsx**: Education timeline and qualifications.
- **ExperienceSection.jsx**: Professional experience and work history.
- **PublicationsSummary.jsx**: Featured publications preview with link to full Publications page.
- **ContactSection.jsx**: Contact information and social media links.

## Features

- All components use Framer Motion for animations
- Responsive design for all screen sizes
- Dark/light mode compatibility
- Consistent styling with the rest of the portfolio

## Usage

Each component accepts common props:
- `isDarkMode`: Boolean for dark/light theme switching
- `containerVariants`: Animation variants for container elements
- `itemVariants`: Animation variants for child elements
- `setActiveTab`: Function to change active tab in navigation

Some components accept additional specific props related to their functionality.

## Integration

These components are imported and used in the main `About.jsx` component. The modular structure allows for:
- Better code organization
- Easier maintenance
- Reusability of components in other sections
- Improved readability
