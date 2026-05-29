Why Your Body Stays on Guard — Landing Page
Eat the Trees, Drink the Leaves

What's in this folder
FilePurposeindex.htmlThe complete landing page — ready to deploycover.pngAdd the guide cover image here (rename it cover.png)vercel.jsonVercel configurationREADME.mdThese instructions

How to Deploy (Daniel — 3 steps)
Step 1 — Add the cover image

Take the guide cover image (the mountain backdrop one)
Rename it cover.png
Drop it into this folder alongside index.html

Step 2 — Push to GitHub
bashgit init
git add .
git commit -m "Add landing page"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/eatthetrees-landing.git
git push -u origin main
Step 3 — Deploy to Vercel

Go to vercel.com
Click "Add New Project"
Import from GitHub — select this repo
Click Deploy
Done! ✅


Connect your domain
In Vercel dashboard:

Go to your project → Settings → Domains
Add eatthetreesdrinktheleaves.com
Follow Vercel's DNS instructions


Connect the form to Hostinger Reach
In index.html, find the handleSubmit function and replace the
setTimeout block with a fetch call to your Hostinger Reach API endpoint.
Patty can get the endpoint from Hostinger Reach → Settings → API.

Colors (for reference)

Forest Green: #2D5A27
Sage: #7A9E7E
Linen: #F5F0E8
Warm Brown: #8B6914

Fonts

Cormorant Garamond (headings + scripture)
Jost (body text)
Both loaded from Google Fonts — no installation needed.
