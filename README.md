# SE 2030 Webring

A webring for Software Engineering class of 2030 students at the University of Waterloo.

## Join the Webring

To add yourself to the webring:

1. Fork this repository
2. Add your profile picture:
   - Add your profile picture image file to the `public/assets/pfps/` directory
   - Use a descriptive filename (e.g., `your-name.jpg` or `your-name.png`)
   - Recommended: Square image, at least 200x200 pixels
3. Open `src/data/students.ts`
4. Add your entry at the bottom of the `students` array:
   ```typescript
   {
     name: "Your Full Name",
     website: "https://your-site.com",
     pfp: "assets/pfps/your-name.jpg" // Do not include 'public/' in the path!
   }
   ```
   - Make sure the `pfp` path matches the filename you added in step 2
5. Create a pull request with your changes (include both the image file and the updated `students.ts`)
6. Once approved, your site will be added to the webring!

## Embed The Webring Widget

Here's what to add to your personal website in order to be part of the webring functionality:

**Note:** Make sure to customize the style to your liking! The examples below are just starting points.

**HTML:**

```html
<div style="display: flex; align-items: center; justify-content: center; gap: 8px;">
  <a href="https://se30webring.com?from=https://your-site.com&dir=prev" style="text-decoration: none; color: #FFCE1A;">←</a>
  <a href="https://se30webring.com?from=https://your-site.com" target="_blank" style="text-decoration: none;">
    <img src="https://se30webring.com/assets/icon-yellow.svg" alt="SE '30 Webring" style="width: 24px; height: 24px;" />
  </a>
  <a href="https://se30webring.com?from=https://your-site.com&dir=next" style="text-decoration: none; color: #FFCE1A;">→</a>
</div>
<!-- Make sure to replace 'your-site.com' with your actual personal site URL -->
<!-- Note: You can use icon-yellow.svg (default) or icon.svg (black) depending on your site's color scheme -->
```

**JSX:**

```jsx
<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
  <a href={`https://se30webring.com?from=${window.location.href}&dir=prev`} style={{ textDecoration: 'none', color: '#FFCE1A' }}>←</a>
  <a href={`https://se30webring.com?from=${window.location.href}`} target="_blank" style={{ textDecoration: 'none' }}>
    <img 
      src="https://se30webring.com/assets/icon-yellow.svg" 
      alt="SE '30 Webring" 
      style={{ width: '24px', height: '24px', opacity: 0.8 }} 
    />
  </a>
  <a href={`https://se30webring.com?from=${window.location.href}&dir=next`} style={{ textDecoration: 'none', color: '#FFCE1A' }}>→</a>
</div>
// Note: You can use icon-yellow.svg (default) or icon.svg (black) depending on your site's color scheme
```

**How it works:**
- Clicking the arrows (← or →) navigates to the hub with your site URL and direction
- The hub then redirects you to the previous or next site in the webring
- Clicking the icon takes you to the webring hub homepage

## Credits & Inspiration

This webring was heavily inspired by the works of the general [SE Webring](https://se-webring.xyz/) and the [CS Webring](https://cs.uwatering.com/).
