export type Lang = 'en' | 'si';
export type Mood = 'sad' | 'nature' | 'sunset' | 'hope';

export const FACEBOOK = 'https://www.facebook.com/share/1BYnTvPcCb/';

export const moods: Record<Mood, { en: string; si: string; emoji: string; color: string }> = {
  sad: { en: 'Sad mood', si: 'දුක්බර', emoji: '🌧️', color: '#7c8cff' },
  nature: { en: 'Nature', si: 'සොබාදහම', emoji: '🌿', color: '#4ade80' },
  sunset: { en: 'Sunset', si: 'හිරු බැසීම', emoji: '🌅', color: '#fb923c' },
  hope: { en: 'Hope', si: 'බලාපොරොත්තුව', emoji: '✨', color: '#e879f9' },
};

// Reels from the Echomood page. Files live in public/media (compressed for the web).
export const reels = [
  { id: 'rainy-evening', file: 'sad-1', mood: 'sad', length: '1:09', en: ['A rainy evening', 'Lost between loneliness and faded memories.'], si: ['වැසි සවසක්', 'තනිකම සහ මැකුණු මතකයන් අතර අතරමං වූ මොහොතක...'] },
  { id: 'magical-nature', file: 'nature-1', mood: 'nature', length: '0:30', en: ['Magical nature', 'Waterfalls and green hills in the mist.'], si: ['මායාවී සොබාදහම', 'මීදුමේ සැඟවුණු දිය ඇලි සහ කොළ පැහැ කඳු.'] },
  { id: 'mountain-road', file: 'nature-2', mood: 'nature', length: '0:36', en: ['The mountain road', 'A quiet drive through the rain forest.'], si: ['කඳුකර මාවත', 'වැසි වනාන්තරය මැදින් නිහඬ ගමනක්.'] },
  { id: 'green-silence', file: 'nature-3', mood: 'nature', length: '0:30', en: ['Green silence', 'The silent beauty and calm of nature.'], si: ['කොළ පැහැ නිහඬතාව', 'ස්වභාවධර්මයේ නිහඬ සුන්දරත්වය සහ සන්සුන් බව.'] },
  { id: 'golden-sea', file: 'sunset-1', mood: 'sunset', length: '0:30', en: ['Golden sea', 'An evening sky painted gold over the ocean.'], si: ['රන්වන් මුහුද', 'හැන්දෑ යාමයේ රන්වන් පැහැයෙන් හැඩවුණු අහස.'] },
] as const;
export type Reel = (typeof reels)[number];

// Daily reflections. Sinhala is the original; English is a translation.
export const quotes: { id: string; mood: Mood; si: string; en: string }[] = [
  { id: 'memories', mood: 'sad', si: 'සමහර මතකයන් අමතක කරන්න හැදුවත්, ඒවා හදවතේ තදින්ම ලියවිලා තියෙනවා.', en: 'Some memories stay written on the heart, however hard we try to forget them.' },
  { id: 'rain', mood: 'sad', si: 'වැස්සට තෙමුණු පාරවල් වගේ, සමහර දුක් ටික වෙලාවකින් වේළිලා යනවා.', en: 'Like roads soaked in rain, some sorrows dry in time.' },
  { id: 'alone', mood: 'sad', si: 'තනිවෙලා ඉන්න වෙලාවල තමයි අපිට අපිවම හොඳටම ඇහෙන්නේ.', en: 'It is in our loneliest hours that we hear ourselves most clearly.' },
  { id: 'fall', mood: 'hope', si: 'වැටෙන හැම පාරකම අලුත් පාඩමක් ඉගෙන ගන්න. ජීවිතය පටන් ගන්නේ එතනින්.', en: 'Learn something new every time you fall. That is where life begins.' },
  { id: 'slow', mood: 'hope', si: 'හෙමින් ගියත් කමක් නැහැ, නවතින්නේ නැතුව යන්න.', en: 'It does not matter how slowly you go, as long as you do not stop.' },
  { id: 'small', mood: 'hope', si: 'අද කරන පොඩි උත්සාහය හෙට ලොකු වෙනසක් වෙනවා.', en: 'The small effort you make today becomes a big change tomorrow.' },
  { id: 'night', mood: 'sunset', si: 'හැම අඳුරු රාත්‍රියකටම පස්සේ ලස්සන දවසක් උදාවෙනවාමයි.', en: 'After every dark night, a beautiful day always comes.' },
  { id: 'golden', mood: 'sunset', si: 'හිරු බැහැගන්නේ හෙට ආයෙත් එන්න පොරොන්දු වෙලා.', en: 'The sun sets with a promise to rise again tomorrow.' },
  { id: 'evening', mood: 'sunset', si: 'සමහර හැන්දෑවල් වචන නැතුවම හිත හදනවා.', en: 'Some evenings heal the heart without a single word.' },
  { id: 'trees', mood: 'nature', si: 'ගස් අපිට උගන්නනවා, මුල් ශක්තිමත් නම් සුළඟට බය වෙන්න ඕනේ නැහැ කියලා.', en: 'Trees teach us that with strong roots there is no need to fear the wind.' },
  { id: 'river', mood: 'nature', si: 'ගඟක් වගේ ගලාගෙන යන්න. ගල් හම්බවුණත් පාර හොයාගන්න.', en: 'Flow like a river. Even when you meet stones, find your way.' },
  { id: 'mist', mood: 'nature', si: 'මීදුම පහව යනකම් ඉවසන්න, කන්ද එතනමයි තියෙන්නේ.', en: 'Wait for the mist to clear; the mountain is still there.' },
];

export const ui = {
  en: {
    other: 'සිංහල', desc: 'Echomood — Sound & Feeling. Short reels of nature, sunsets and quiet moods with Sinhala reflections, and free quote wallpapers you can make yourself.',
    nav: { reels: 'Reels', reflections: 'Reflections', wallpaper: 'Wallpaper maker', about: 'About' },
    tagline: 'A place where feelings echo', taglineSi: 'හැඟුමන් දෝංකාර දෙන තැන...',
    watch: 'Watch the reels', follow: 'Follow on Facebook', sound: 'Sound & Feeling',
    feelTitle: 'How do you feel right now?', feelIntro: 'Pick a mood and Echomood will find a reel and a few words for you.',
    forYou: 'For you right now', watchThis: 'Watch this reel', another: 'Another one',
    reelsTitle: 'Recent creations', reelsIntro: 'Choose a mood and tap a reel to watch it with sound.', all: 'All',
    play: 'Play', close: 'Close', prev: 'Previous reel', next: 'Next reel', share: 'Share', copied: 'Link copied',
    reflTitle: 'Daily reflections', reflIntro: 'Words that touch the heart. Turn any of them into a phone wallpaper.', makeWall: 'Make wallpaper', copy: 'Copy text',
    wallTitle: 'Wallpaper maker', wallIntro: 'Turn a reflection, or your own words, into a phone wallpaper or a square post. Free, and made right here in your browser.',
    pickQuote: 'Choose a reflection', ownText: 'Or write your own', ownPh: 'Type your own words…', background: 'Background', format: 'Size', phone: 'Phone wallpaper', square: 'Square post', textSize: 'Text size', showEn: 'Add the English line', download: 'Download PNG', preview: 'Preview',
    storeTitle: 'Echomood store', storeIntro: 'Premium creations that speak to your heart, coming soon.', soon: 'Coming soon',
    products: [['Premium wallpapers', 'Aesthetic, minimalist phone wallpapers in high resolution.'], ['Artistic prints', 'Wall art that echoes a feeling, printed in high quality.']],
    notify: 'Message us on Facebook to hear first',
    aboutTitle: 'About Echomood', about: 'Echomood is a Sinhala content page that shares short reels of nature, sunsets and quiet moods, each with a few words for the heart. This website is a portfolio project by Malinga Prabhath, rebuilt in 2026 with Astro and Tailwind CSS.',
    footer: 'Echomood · Sound & Feeling · website by Malinga Prabhath', theme: 'Toggle dark mode',
  },
  si: {
    other: 'English', desc: 'Echomood — Sound & Feeling. සොබාදහම, හිරු බැසීම සහ නිහඬ හැඟීම්වල කෙටි reels, සිංහල සිතුවිලි සහ ඔබම හදාගන්න පුළුවන් නොමිලේ wallpapers.',
    nav: { reels: 'Reels', reflections: 'සිතුවිලි', wallpaper: 'Wallpaper හදන්න', about: 'අප ගැන' },
    tagline: 'හැඟුමන් දෝංකාර දෙන තැන...', taglineSi: 'A place where feelings echo',
    watch: 'Reels නරඹන්න', follow: 'Facebook එකෙන් follow කරන්න', sound: 'Sound & Feeling',
    feelTitle: 'දැන් ඔබට දැනෙන්නේ කොහොමද?', feelIntro: 'හැඟීමක් තෝරන්න, Echomood ඔබට reel එකක් සහ වදන් කිහිපයක් හොයලා දෙයි.',
    forYou: 'දැන් ඔබට', watchThis: 'මේ reel එක බලන්න', another: 'තව එකක්',
    reelsTitle: 'අලුත්ම නිර්මාණ', reelsIntro: 'හැඟීමක් තෝරලා, reel එකක් ශබ්දය සමඟ බලන්න tap කරන්න.', all: 'සියල්ල',
    play: 'නරඹන්න', close: 'වසන්න', prev: 'කලින් reel එක', next: 'ඊළඟ reel එක', share: 'බෙදාගන්න', copied: 'Link එක copy වුණා',
    reflTitle: 'දෛනික සිතුවිලි', reflIntro: 'හදවතට දැනෙන වදන් සහ සිතුවිලි. ඕනෑම එකක් phone wallpaper එකක් කරගන්න.', makeWall: 'Wallpaper හදන්න', copy: 'Copy කරන්න',
    wallTitle: 'Wallpaper හදන්න', wallIntro: 'සිතුවිල්ලක් හෝ ඔබේම වදන් phone wallpaper එකක් හෝ square post එකක් කරගන්න. නොමිලේ, ඔබේ browser එකේම හැදෙනවා.',
    pickQuote: 'සිතුවිල්ලක් තෝරන්න', ownText: 'නැත්නම් ඔබේම වදන් ලියන්න', ownPh: 'ඔබේ වදන් මෙතන ලියන්න…', background: 'පසුබිම', format: 'ප්‍රමාණය', phone: 'Phone wallpaper', square: 'Square post', textSize: 'අකුරු ප්‍රමාණය', showEn: 'ඉංග්‍රීසි පේළියත් එකතු කරන්න', download: 'PNG බාගන්න', preview: 'පෙරදසුන',
    storeTitle: 'Echomood store', storeIntro: 'ඔබේ හදවතට දැනෙන Premium නිර්මාණ ළඟදීම...', soon: 'ළඟදීම',
    products: [['Premium wallpapers', 'Aesthetic සහ minimalist ඉහළ තත්ත්වයේ phone wallpapers.'], ['Artistic prints', 'හැඟීම් දෝංකාර දෙන උසස් තත්ත්වයේ wall art.']],
    notify: 'මුලින්ම දැනගන්න Facebook එකෙන් message කරන්න',
    aboutTitle: 'Echomood ගැන', about: 'Echomood යනු සොබාදහම, හිරු බැසීම සහ නිහඬ හැඟීම්වල කෙටි reels, හදවතට දැනෙන වදන් කිහිපයක් සමඟ බෙදාගන්නා සිංහල content page එකක්. මෙම වෙබ් අඩවිය මාලිංග ප්‍රභාත්ගේ portfolio project එකක් වන අතර 2026දී Astro සහ Tailwind CSS සමඟ නැවත හදන ලදී.',
    footer: 'Echomood · Sound & Feeling · වෙබ් අඩවිය මාලිංග ප්‍රභාත්', theme: 'Dark mode මාරු කරන්න',
  },
};
export type UI = typeof ui.en;
export const t = (l: Lang) => ui[l] as UI;

const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const url = (p = '') => `${base}/${p.replace(/^\//, '')}`;
export const page = (l: Lang, p = '') => url((l === 'si' ? 'si/' : '') + p.replace(/^\//, ''));
