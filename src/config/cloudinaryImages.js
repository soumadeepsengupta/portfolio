// Cloudinary image URLs - Auto-optimized and CDN delivered
// Images automatically convert to WebP/AVIF for supported browsers

const CLOUDINARY_BASE = 'https://res.cloudinary.com/dtomfl3yj/image/upload';

// Helper function to generate optimized image URL with transformations
export const getOptimizedImage = (url, options = {}) => {
  const {
    width,
    height,
    quality = 'auto:best',
    format = 'auto',
    crop = 'fill',
  } = options;

  const transformations = [
    `q_${quality}`,
    `f_${format}`,
  ];

  if (width) transformations.push(`w_${width}`);
  if (height) transformations.push(`h_${height}`);
  if (crop) transformations.push(`c_${crop}`);

  // Extract the version and public_id from the URL
  const match = url.match(/\/v\d+\/(.+)$/);
  if (!match) return url;
  
  return `${CLOUDINARY_BASE}/${transformations.join(',')}/${match[1]}`;
};

// Centralized image paths - All uploaded to Cloudinary
export const cloudinaryImages = {
  // Profile images
  profileDay: 'https://res.cloudinary.com/dtomfl3yj/image/upload/v1772967808/portfolio/profile_day.jpg',
  profileNight: 'https://res.cloudinary.com/dtomfl3yj/image/upload/v1772967810/portfolio/profile_night.jpg',
  profilePic: 'https://res.cloudinary.com/dtomfl3yj/image/upload/v1772967805/portfolio/profilepic.svg',
  
  // Logo & branding
  logo: 'https://res.cloudinary.com/dtomfl3yj/image/upload/v1772967784/portfolio/logo_dd.svg',
  favicon: 'https://res.cloudinary.com/dtomfl3yj/image/upload/v1772967763/portfolio/favicon_dd.svg',
  
  // Cursors
  cursor: 'https://res.cloudinary.com/dtomfl3yj/image/upload/v1772967750/portfolio/cursor.svg',
  pointer: 'https://res.cloudinary.com/dtomfl3yj/image/upload/v1772967801/portfolio/pointer.svg',
  figmaCursor: 'https://res.cloudinary.com/dtomfl3yj/image/upload/v1772967767/portfolio/figmacursor.svg',
  
  // UI Elements
  mask: 'https://res.cloudinary.com/dtomfl3yj/image/upload/v1772967786/portfolio/mask.svg',
  arrow: 'https://res.cloudinary.com/dtomfl3yj/image/upload/v1772967730/portfolio/arrow.svg',
  moon: 'https://res.cloudinary.com/dtomfl3yj/image/upload/v1772967788/portfolio/moon.svg',
  sun: 'https://res.cloudinary.com/dtomfl3yj/image/upload/v1772967819/portfolio/sun.svg',
  
  // Work projects
  nextStep: 'https://res.cloudinary.com/dtomfl3yj/image/upload/v1773007898/portfolio/next-step.png',
  bookMyDine: 'https://res.cloudinary.com/dtomfl3yj/image/upload/v1773007897/portfolio/bookmydine.png',
  finployee: 'https://res.cloudinary.com/dtomfl3yj/image/upload/v1772967768/portfolio/finployee.png',
  ho5: 'https://res.cloudinary.com/dtomfl3yj/image/upload/v1772967779/portfolio/ho5.jpg',
  health: 'https://res.cloudinary.com/dtomfl3yj/image/upload/v1772967777/portfolio/health.png',
  sakha: 'https://res.cloudinary.com/dtomfl3yj/image/upload/v1772967814/portfolio/sakha.png',
  globio: 'https://res.cloudinary.com/dtomfl3yj/image/upload/v1772967776/portfolio/globio.png',
  dog: 'https://res.cloudinary.com/dtomfl3yj/image/upload/v1772967754/portfolio/dog.png',
  coverJini: 'https://res.cloudinary.com/dtomfl3yj/image/upload/v1772967745/portfolio/coverjini.png',
  tradeBin: 'https://res.cloudinary.com/dtomfl3yj/image/upload/v1772967824/portfolio/tradebin.png',
  pkg: 'https://res.cloudinary.com/dtomfl3yj/image/upload/v1772967800/portfolio/pkg.png',
  chutti: 'https://res.cloudinary.com/dtomfl3yj/image/upload/v1772967735/portfolio/chutti.png',
  nu: 'https://res.cloudinary.com/dtomfl3yj/image/upload/v1772967797/portfolio/nu.jpg',
  vriddhi: 'https://res.cloudinary.com/dtomfl3yj/image/upload/v1772967833/portfolio/vriddhi.png',
  nes: 'https://res.cloudinary.com/dtomfl3yj/image/upload/v1772967792/portfolio/nes.png',
  customart: 'https://res.cloudinary.com/dtomfl3yj/image/upload/v1772967753/portfolio/customart.png',
  ecell: 'https://res.cloudinary.com/dtomfl3yj/image/upload/v1772967758/portfolio/ecell.png',
  threeDRoom: 'https://res.cloudinary.com/dtomfl3yj/image/upload/v1772967728/portfolio/3d.jpg',
  post: 'https://res.cloudinary.com/dtomfl3yj/image/upload/v1772967804/portfolio/post.png',
  
  // Skills logos
  html: 'https://res.cloudinary.com/dtomfl3yj/image/upload/v1772967780/portfolio/html.svg',
  css: 'https://res.cloudinary.com/dtomfl3yj/image/upload/v1772967748/portfolio/css.svg',
  javascript: 'https://res.cloudinary.com/dtomfl3yj/image/upload/v1772967782/portfolio/javascript.svg',
  react: 'https://res.cloudinary.com/dtomfl3yj/image/upload/v1772967811/portfolio/react.svg',
  vite: 'https://res.cloudinary.com/dtomfl3yj/image/upload/v1772967826/portfolio/vite.svg',
  tailwind: 'https://res.cloudinary.com/dtomfl3yj/image/upload/v1772967821/portfolio/tailwindcss.svg',
  figma: 'https://res.cloudinary.com/dtomfl3yj/image/upload/v1772967765/portfolio/figma.svg',
  webflow: 'https://res.cloudinary.com/dtomfl3yj/image/upload/v1772967837/portfolio/webflow.svg',
  framer: 'https://res.cloudinary.com/dtomfl3yj/image/upload/v1772967769/portfolio/framer.svg',
  spline: 'https://res.cloudinary.com/dtomfl3yj/image/upload/v1772967815/portfolio/spline.svg',
  git: 'https://res.cloudinary.com/dtomfl3yj/image/upload/v1772967772/portfolio/git.svg',
  github: 'https://res.cloudinary.com/dtomfl3yj/image/upload/v1772967774/portfolio/github.svg',
  matter: 'https://res.cloudinary.com/dtomfl3yj/image/upload/v1772967787/portfolio/matter.jpg',
  motion: 'https://res.cloudinary.com/dtomfl3yj/image/upload/v1772967790/portfolio/motion.svg',
  youtube: 'https://res.cloudinary.com/dtomfl3yj/image/upload/v1772967839/portfolio/youtube.svg',
  chatgpt: 'https://res.cloudinary.com/dtomfl3yj/image/upload/v1772967733/portfolio/chatgpt.svg',
  spotify: 'https://res.cloudinary.com/dtomfl3yj/image/upload/v1772967816/portfolio/spotify.svg',
};

export default cloudinaryImages;
