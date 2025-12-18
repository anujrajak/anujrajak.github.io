# Portfolio Website

A minimal, clean portfolio website inspired by modern design principles. Built with HTML, CSS, JavaScript, and Tailwind CSS.

## Features

- **Minimal Design**: Clean and focused layout
- **Responsive**: Works on all devices
- **Smooth Animations**: Fade-in effects and scroll animations
- **Interactive Elements**: Chat modal and smooth scrolling
- **Tailwind CSS**: Utility-first CSS framework via CDN

## Customization

### Update Personal Information

1. **Hero Section** (`index.html`):

   - Replace "Your Name" with your actual name
   - Update the title and description
   - Modify the "Chat with Me!" button if needed

2. **Recent Work Section**:

   - Add your project details
   - Replace placeholder images with your project screenshots
   - Update project descriptions

3. **About Section**:

   - Update your bio
   - Change location, current work, and skills
   - Modify the grid items as needed

4. **Contact Section**:
   - Update the email address in the "Get in Touch" link
   - Customize the tagline

### Styling

- Colors can be customized in Tailwind classes
- Font is Inter (Google Fonts) - can be changed in the `<head>` section
- Gradient text color can be modified in the `.gradient-text` class

### Adding More Sections

Simply add new sections following the same pattern:

```html
<section class="min-h-screen py-20 px-6">
  <!-- Your content here -->
</section>
```

## Local Development

1. Open `index.html` in your browser
2. No build process required - works directly with Tailwind CDN

## Deployment

This site can be deployed to:

- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

Just upload the `index.html` and `script.js` files.
