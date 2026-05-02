<p align="center">
  <h1 align="center">Urban Luxe - E-Commerce Apparel Store</h1>
  <p align="center">An e-commerce apparel store of the luxury clothing brand Urban Luxe.</p>
</p>

<p align="center">
  <a href="https://urbanluxe.vercel.app" target="_blank" rel="noopener noreferrer" align="center">
    <img src="/public/images/urbanluxe_preview.webp" alt="Site Preview"/>
  </a>
</p>

# Overview
Urban Luxe is a _fictional_ and comprehensive e-commerce apparel project designed to hone my front-end development skills. The goal was to build a fully functional, visually polished online store from scratch using Next.js and React, while minimizing external dependencies. The project emphasizes scalable architecture, backend integration patterns, and SEO best practices.

## Tools & Frameworks
- **Core:** HTML, CSS, TypeScript
- **Framework:** Next.js, React
- **Key Libraries:** `react-transition-group`, `react-swipeable`, `sharp`, `ts-node`

## Features
- **Real-World Simulation:** Uses mock data and backend logic to handle user interactions and state management
- **Search & Filtering:** Intuitive product search and dynamic filtering system
- **Responsive Design:** Fully adaptive layout optimized for all screen sizes
- **Premium UX:** Polished animations and transitions for a high-end feel
- **Efficient State Management:** Utilizes React Context API and LocalStorage for seamless data flow
- **Performance Optimization:** Implements blur placeholder images to improve perceived load speeds and Core Web Vitals
- **SEO Optimization:** Dynamic metadata, sitemaps, and OpenGraph tags for better search engine visibility

## Installation

```bash
# Clone the repository:
git clone https://github.com/ecdevv/urban-luxe.git

# Navigate into the repository:
cd urban-luxe

# Install dependencies:
npm install

# Run the app:
npm start or npm run dev
```

## Notes / Potential Improvements / Known Issues

### Notes

- Attempted to make everything reusable and from scratch
- Limited the use of external libraries to: `react-transition-group`, `react-swipeable` (mobile swiping), `sharp` (image optimization/blur data), and `ts-node` (build-time scripts)
- Tailwind CSS is retained despite limited use, as it provides necessary default resets/styling
- Collections and Checkout buttons are currently placeholder links to the homepage
- Login/Registration pages are UI-only with no backend functionality
- Front-end search is lightweight and would need backend/database integration for production scale
- Mobile Navbar/Menu is a separate component for better state handling rather than reusing the desktop variant
- Mock data is stored in two JSON files and would ideally be split into structured schemas/tables for scalability
- Product page image backgrounds are currently dark to match the theme; production would likely use lighter, consistent backgrounds to make selection borders stand out

### Potential Improvements

- Enhance CTAs (add-to-cart, newsletter signup) for better user
  action emphasis
- Add visual elements to increase engagement:
  - Front page: sliders, showcases, or featured collections
  - Product pages: customer reviews section
  - Store pages: secondary navigation or sticky headers

### Known Issues

- **Firefox:** Filter menu transitions on the Store page are buggy
- **Edge:** Carousel on the front page has visual border artifacts
- **Product Carousel:** Doesn't properly set the first index when
  switching between options and selecting the first item
- **URL History:** Navigating to store/product pages via slightly
  malformed URLs causes duplicate entries in browser history
  (UpdateURL component)

## Credits

### Design Inspiration

Aesthetic and layout inspiration drawn from: Louis Vuitton, Versace, Gymshark, Nike, Adidas.

### Image Credits

#### Home Carousel

- Photo 1 by [Force Majeure](https://unsplash.com/photos/woman-and-man-posing-for-photoshoot-a08wHxn7p7A)
- Photo 2 by [Michael DeMoya](https://unsplash.com/photos/2-women-standing-near-wall-during-daytime-qI8xWRvfgGg)
- Photo 3 by [JC Gellidon](https://unsplash.com/photos/woman-leaning-on-wall-OGy5tojr7x8)
- Photo 4 by [Marie-Michèle Bouchard](https://unsplash.com/photos/man-in-white-shirt-and-pants-sitting-on-gray-concrete-floor-J_zYSwczKYA)

#### Products

- Atelier x Luxe Limited Edition Jacket
  - Photo 1 by [Kazi Mizan](https://unsplash.com/photos/a-man-in-a-black-suit-and-scarf-TjvKuYy2kuk)
  - Photo 2 by [Ali Pazani](https://unsplash.com/photos/person-wearing-black-coat-intLk-WtEcA)
  - Photo 3 by [Samia Liamani](https://unsplash.com/photos/woman-in-black-coat-holding-her-chin-Z_wD2N7K_wQ)

- Luxe Mercury
  - Photo 1 by [Adriaan Venner Scheepers](https://unsplash.com/photos/a-man-in-a-gray-hoodie-standing-in-front-of-a-wall-qHnmgJya2Zg)
  - Photo 2 by [Rico Cori](https://unsplash.com/photos/man-standing-near-grey-wlal-eIjEDkRzbOQ)
  - Photo 3 by [Sebastian Pociecha](https://unsplash.com/photos/man-in-green-hoodie-standing-beside-white-brick-wall-D86EPYMO6iE)

- Luxe Jupiter M
  - Photo 1 by [Karsten Winegeart](https://unsplash.com/photos/a-man-in-an-orange-jacket-and-sunglasses-j30dP1-EOeQ)
  - Photo 2 by [Clay Banks](https://unsplash.com/photos/person-in-orange-cap-and-jacket-by-mountain-slopes-om_K0istrAg)
  - Photo 3 by [Sami Sadeghi](https://unsplash.com/photos/a-woman-in-an-orange-jacket-ov6Ok3zQFuE)

- Luxe Jupiter W
  - Photo 1 by [Wesley Tingey](https://unsplash.com/photos/a-woman-with-pink-hair-wearing-a-yellow-jacket-6QWmZhLnFeQ)
  - Photo 2 by [Daniel Bowman](https://unsplash.com/photos/shallow-focus-photography-of-person-facing-trees-fkYugzeEDZo)
  - Photo 3 by [Soha Sh](https://unsplash.com/photos/a-woman-in-an-orange-jacket-ov6Ok3zQFuE)

- Luxe Neptune
  - Photo 1 by [Fabio Nenci](https://unsplash.com/photos/a-man-in-a-blue-sweat-suit-leaning-against-a-blue-wall-4f4Rfvnz6kY)
  - Photo 2 by [Leon Skibitzki](https://unsplash.com/photos/blue-and-white-balenciaga-hoodie-zUxd0TJo0Do)
  - Photo 3 by [Tony Eight Media](https://unsplash.com/photos/a-man-in-a-blue-hoodie-sitting-on-a-bench-WWcxE-MkhNw)

- Luxe Saturn
  - Photo 1 by [Dom Hill](https://unsplash.com/photos/woman-in-yellow-tracksuit-standing-on-basketball-court-side-nimElTcTNyY)
  - Photo 2 by [Karsten Winegeart](https://unsplash.com/photos/a-person-in-a-yellow-jacket-is-walking-through-a-tunnel-VPMV6X5OACQ)
  - Photo 3 by [Soha Sh](https://unsplash.com/photos/a-woman-in-a-yellow-raincoat-standing-next-to-a-van-aRAV1ou7W6I)

- Generic T-Shirt & Generic Shoe
  - (White Option)
    - Photo 1 by [Anomaly](https://unsplash.com/photos/man-wearing-white-crew-neck-t-shirts-WWesmHEgXDs)
    - Photo 2 by [Haryo Setyadi](https://unsplash.com/photos/white-crew-neck-t-shirt-acn5ERAeSb4)
  - (Black Option)
    - Photo 1 by [Luis Quintero](https://unsplash.com/photos/man-wearing-black-crew-neck-t-shirt-3qqiMT2LdR8)
    - Photo 2 by [Sven Ciupka](https://unsplash.com/photos/man-in-black-crew-neck-t-shirt-standing-near-brick-wall-x8Vg7Up6TUc)

#### 404 Not Found Page

- Desktop
  - Photo by [Yuriy Bogdanov](https://unsplash.com/photos/man-wearing-black-coat-leaning-on-brown-brick-wall-MIkxc6WV9QA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)
- Mobile
  - Photo by [Jeremy Beadle](https://unsplash.com/photos/man-holding-his-black-suit-qnU-UR0o5X8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)

## License

The code for this project is licensed under the **MIT License**. See the `LICENSE` file for details.

All **third-party assets** are used strictly for demonstration purposes and remain the property of their respective owners.