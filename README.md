# SE 2030 Webring

<img src="https://se30webring.com/assets/icon-yellow.svg" alt="SE '30 Webring Icon" width="64" height="64" />

A webring for Software Engineering class of 2030 students at the [University of Waterloo](https://uwaterloo.ca/).

## What's a Webring?

A webring is a collection of websites linked together in a circular structure. Each site in the ring contains links to the previous and next sites, creating a loop that allows visitors to navigate through all member sites!

## Can I Join?

We welcome all students of our cohort to join! If you're not part of our cohort, you might be interested in other UW webrings including the general [SE Webring](https://se-webring.xyz/) and the [CS Webring](https://cs.uwatering.com/).

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
<div style="display: flex; align-items: center; justify-content: center; gap: 12px;">
  <a href="https://se30webring.com?from=https://your-site.com&dir=prev" style="text-decoration: none; color: #FFCE1A; font-size: 1.5rem; line-height: 1; display: flex; align-items: center;">←</a>
  <a href="https://se30webring.com" target="_blank" style="text-decoration: none; display: flex; align-items: center;">
    <img src="https://se30webring.com/assets/icon-yellow.svg" alt="SE '30 Webring" style="width: 32px; height: 32px;" />
  </a>
  <a href="https://se30webring.com?from=https://your-site.com&dir=next" style="text-decoration: none; color: #FFCE1A; font-size: 1.5rem; line-height: 1; display: flex; align-items: center;">→</a>
</div>
<!-- Make sure to replace 'your-site.com' with your actual personal site URL -->
<!-- Note: You can use icon-yellow.svg (default) or icon.svg (black) depending on your site's color scheme -->
```

**JSX:**

```jsx
<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
  <a href={`https://se30webring.com?from=${window.location.href}&dir=prev`} style={{ textDecoration: 'none', color: '#FFCE1A', fontSize: '1.5rem', lineHeight: 1, display: 'flex', alignItems: 'center' }}>←</a>
  <a href="https://se30webring.com" target="_blank" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
    <img 
      src="https://se30webring.com/assets/icon-yellow.svg" 
      alt="SE '30 Webring" 
      style={{ width: '32px', height: '32px' }} 
    />
  </a>
  <a href={`https://se30webring.com?from=${window.location.href}&dir=next`} style={{ textDecoration: 'none', color: '#FFCE1A', fontSize: '1.5rem', lineHeight: 1, display: 'flex', alignItems: 'center' }}>→</a>
</div>
// Note: You can use icon-yellow.svg (default) or icon.svg (black) depending on your site's color scheme
```

**How it works:**
- Clicking the arrows (← or →) navigates to the hub with your site URL and direction
- The hub then redirects you to the previous or next site in the webring
- Clicking the icon takes you to the webring hub homepage

## Credits & Inspiration

This webring was heavily inspired by the works of the general [SE Webring](https://se-webring.xyz/) and the [CS Webring](https://cs.uwatering.com/). Go check them out!
