# Care Guide Markdown Integration - Setup Instructions

## What Was Done

The Care Guide page has been upgraded to render comprehensive content from a Markdown file instead of hardcoded JSX.

### Changes Made:

1. **Dependencies Added** (`package.json`):
   - `react-markdown` (^9.0.1) - Renders Markdown in React
   - `remark-gfm` (^4.0.0) - GitHub Flavored Markdown support (tables, strikethrough, etc.)
   - `@tailwindcss/typography` (^0.5.10) - Beautiful prose styling

2. **Markdown File Copied**:
   - `content/Rug-Care-Guide.md` → `public/Rug-Care-Guide.md`
   - Now accessible at runtime via fetch

3. **Component Updated** (`src/components/CareGuide.jsx`):
   - Fetches MD file on mount
   - Renders with `ReactMarkdown` component
   - Styled with Tailwind Typography plugin
   - Loading and error states included
   - Enhanced CTA section with Email, WhatsApp, and Contact links

4. **Tailwind Config Updated** (`tailwind.config.js`):
   - Added typography plugin for prose classes

## Installation Steps

Since PowerShell execution policy blocked npm, you need to install dependencies manually:

### Option 1: Run as Administrator
```powershell
# Open PowerShell as Administrator
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Then navigate to the project and run:
```bash
cd c:\Users\SEPLe-Admin\Desktop\juteCraft\Jute_Crafts
npm install
```

### Option 2: Use CMD Instead
```cmd
cd c:\Users\SEPLe-Admin\Desktop\juteCraft\Jute_Crafts
npm install
```

### Option 3: Use Git Bash or WSL
```bash
cd /c/Users/SEPLe-Admin/Desktop/juteCraft/Jute_Crafts
npm install
```

## Testing

After installation, start the dev server:
```bash
npm start
```

Navigate to: `http://localhost:3000/care-guide`

### What to Check:
- ✅ Page loads without errors
- ✅ Markdown content renders with proper formatting
- ✅ Headings have correct hierarchy and styling
- ✅ Lists, bold text, and links work
- ✅ Contact buttons (Email, WhatsApp, Contact Form) are functional
- ✅ Responsive design on mobile/tablet

## Content Management

### To Update Care Guide Content:

**Edit the source file:**
```
content/Rug-Care-Guide.md
```

**Then copy to public folder:**
```bash
Copy-Item "content\Rug-Care-Guide.md" "public\Rug-Care-Guide.md"
```

Or on Linux/Mac:
```bash
cp content/Rug-Care-Guide.md public/Rug-Care-Guide.md
```

### Why Two Files?

- `content/Rug-Care-Guide.md` - **Source of truth** (version controlled, easy to edit)
- `public/Rug-Care-Guide.md` - **Runtime file** (served to browser)

**Future Enhancement**: Set up a build script to auto-copy during `npm run build`.

## Styling Customization

The Markdown is styled using Tailwind's prose classes in `CareGuide.jsx` (lines 604-621).

To customize:
- **Headings**: Modify `prose-h1:`, `prose-h2:`, etc.
- **Text color**: Change `prose-p:text-textDark/80`
- **Links**: Update `prose-a:text-primary`
- **Spacing**: Adjust `prose-ul:my-4`, `prose-li:space-y-2`

## Troubleshooting

### Error: "Failed to load care guide"
- Check that `public/Rug-Care-Guide.md` exists
- Verify file permissions
- Check browser console for 404 errors

### Styling Not Applied
- Ensure `@tailwindcss/typography` is installed
- Verify `tailwind.config.js` has the plugin
- Restart dev server after config changes

### Markdown Not Rendering
- Check that `react-markdown` and `remark-gfm` are installed
- Verify imports in `CareGuide.jsx`
- Check for console errors

## Benefits of This Approach

✅ **Single Source of Truth** - Edit one file, not JSX code
✅ **Easy Updates** - Non-developers can edit Markdown
✅ **Version Control** - Track content changes in Git
✅ **SEO Friendly** - Proper semantic HTML from Markdown
✅ **Maintainable** - Separate content from presentation
✅ **Comprehensive** - Full 279-line guide vs. 6 bullet points

## Next Steps (Optional)

1. **Auto-copy script**: Add to `package.json` scripts
   ```json
   "copy:content": "cp content/*.md public/"
   ```

2. **Image optimization**: Compress the 20MB background image
   ```bash
   # Use tools like tinypng.com or imagemagick
   ```

3. **Add more MD pages**: FAQ, Blog posts, Product descriptions

4. **CMS Integration**: Connect to Contentful, Sanity, or Strapi for dynamic content

---

**Status**: ✅ Ready to install and test
**Last Updated**: 2025-10-08
