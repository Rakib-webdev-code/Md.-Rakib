export const profile = {
  name: "Md Rakib",
  title: "Full-stack developer",
  tagline: "I build web applications with Next.js, TypeScript and MongoDB, from the interface down to the database.",
  bio: "I'm a full-stack web developer who builds modern, production-minded web applications. I care about clean interfaces, secure authentication, and the details that make a product feel reliable, from server-side validation to motion that never gets in the way. I'm looking for a team where I can keep growing and ship real products.",
  email: "tamimislam100100@gmail.com",
  gmail: "https://mail.google.com/mail/?view=cm&to=tamimislam100100@gmail.com",
  github: "https://github.com/Rakib-webdev-code",
  linkedin: "https://www.linkedin.com/in/md-rakib-dv/",
  x: "https://x.com/IslamTamim5867",
  resume: "https://drive.google.com/file/d/1V0rBp8mLGcmBN7vUkIK2rd5_CFh1N-ev/view?usp=sharing",
};

export const projects = [
  {
    slug: "shopsphere",
    title: "ShopSphere",
    blurb: "A full-stack store with secure Stripe checkout, server-verified prices and stock, and separate customer and admin dashboards.",
    image: "/shopsphere-home.png",
    tags: ["Next.js", "TypeScript", "MongoDB", "Better Auth", "Stripe", "Tailwind"],
    live: "https://shopsphere-v2.vercel.app/",
    repo: "https://github.com/Rakib-webdev-code/Shopsphere-v2",
  },
  {
    slug: "common-ground",
    title: "Common Ground",
    blurb: "A community events platform where people find local events, join them, and organise their own.",
    image: "/common-ground-home.png",
    tags: ["Next.js", "TypeScript", "Express", "MongoDB", "Better Auth", "shadcn/ui"],
    live: "https://common-ground-client.vercel.app/",
    repo: "https://github.com/Rakib-webdev-code/common-ground-client",
  },
];

export const details: Record<string, { problem: string; solution: string; features: string[]; gallery: string[] }> = {
  shopsphere: {
    problem: "A store that only looks good breaks in the details: two people buy the last item, a price is changed in the browser, or a payment is submitted twice.",
    solution: "Every price, discount and stock level is checked again on the server at checkout. Stock is reserved while a customer pays, checkout requests are idempotent, and Stripe signed webhooks confirm payment before an order counts as paid.",
    features: ["Product search, filters and categories", "Cart, wishlist and coupons", "Reviews and ratings", "Secure Stripe card checkout", "Customer dashboard with order history", "Admin dashboard: analytics, inventory, orders, customers, promotions", "Role-based authorization with Better Auth", "Catalog-based shopping assistant", "Light, dark and system themes"],
    gallery: ["/shopsphere-home.png", "/shopsphere-admin.png"],
  },
  "common-ground": {
    problem: "Local community events are scattered across chats and posters, so people miss them and organisers struggle to reach anyone.",
    solution: "One place to find events, join them in a click and run your own. Only an event's owner can edit or delete it, and duplicate registrations are blocked.",
    features: ["Event search, filtering and sorting", "Create, edit and delete your own events", "Join events with duplicate-registration protection", "Google sign-in with Better Auth", "Profile and impact dashboard", "Separate Next.js client and Express API, secured with JWT", "Light and dark themes"],
    gallery: ["/common-ground-home.png"],
  },
};
