// ============================================
// jake.info — Portfolio (cursor preview)
// ============================================

// Archive links — add/remove/edit freely
// preview: path to a still or gif shown on hover (optional)
// video: YouTube or Vimeo URL — plays in the cursor preview on hover (optional)
const archiveLinks = [
  // --- Music Videos ---
  { title: "Ye x GLC - Chicago", category: "Music Video", video: "https://pub-0085b0a3f395474b81b3a8b73a9eb3d9.r2.dev/_Chicago_.mp4" },
  { title: "Sneakdissin' - Playboi Carti", video: "https://pub-0085b0a3f395474b81b3a8b73a9eb3d9.r2.dev/Sneakdissin'%20-%20Playboi%20Carti%20(Official%20Music%20Video).mp4" },
  { title: "Playboi Carti - Lyrical Lemonade Recap", video: "https://pub-0085b0a3f395474b81b3a8b73a9eb3d9.r2.dev/PLAYBOI%20CARTI%20LIVE%20%40%20LYRICAL%20LEMONADE%20SUMMER%20SMASH%202019%20_%20No%20Future%20Recap.mp4" },
  { title: "Lucki - More Than Ever", category: "Music Video", video: "https://pub-0085b0a3f395474b81b3a8b73a9eb3d9.r2.dev/Lucki%20-%20More%20Than%20Ever%20(Official%20Music%20Video).mp4" },
  { title: "Yeezy - We Got Love Case Study", category: "Music Video", video: "https://pub-0085b0a3f395474b81b3a8b73a9eb3d9.r2.dev/YEEZY%20WE%20GOT%20LOVE%20CASE%20STUDY.mp4" },
  { title: "Alienware - Everything Counts", category: "Music Video", video: "https://pub-0085b0a3f395474b81b3a8b73a9eb3d9.r2.dev/Alienware%20%EF%BC%82Everything%20Counts%EF%BC%82%2060%20%5B362192154%5D.mp4" },
  { title: "Lucki — Flawless Like Me", category: "Music Video", video: "https://pub-0085b0a3f395474b81b3a8b73a9eb3d9.r2.dev/Lucki%20-%20Flawless%20Like%20Me%20(Official%20Movie).mp4" },
  { title: "Lucki — More Than Ever", category: "Music Video", video: "https://pub-0085b0a3f395474b81b3a8b73a9eb3d9.r2.dev/Lucki%20-%20More%20Than%20Ever%20(Official%20Music%20Video).mp4" },
  { title: "Lucki — Nascar Dashcar", category: "Music Video", preview: "" },
  { title: "Just Don x Jordan — All In", category: "Music Video", video: "https://pub-0085b0a3f395474b81b3a8b73a9eb3d9.r2.dev/Just%20Don%20x%20Jordan.mp4" },
  { title: "Germ — My Little Draco", category: "Music Video", video: "https://pub-0085b0a3f395474b81b3a8b73a9eb3d9.r2.dev/GERM%20-%20MY%20LITTLE%20DRACO%20(Dir.%20%40JAKEOSMUN).mp4" },
  { title: "Lucki - Lowlife", category: "Music Video", video: "https://pub-0085b0a3f395474b81b3a8b73a9eb3d9.r2.dev/Lowlife%20-%20Lucki%20X.mp4" },
  { title: "Lucki - Root Of All", category: "Music Video", video: "https://pub-0085b0a3f395474b81b3a8b73a9eb3d9.r2.dev/LUCKI%20-%20ROOT%20OF%20ALL%20(Dir.%20%40JAKEOSMUN).mp4" },
  { title: "Lucki - Hush", category: "Music Video", video: "https://pub-0085b0a3f395474b81b3a8b73a9eb3d9.r2.dev/LUCKI%20-%20HUSH.mp4" },
  { title: "Lucki - No Wok", category: "Music Video", video: "https://pub-0085b0a3f395474b81b3a8b73a9eb3d9.r2.dev/LUCKI%20%20-%20NO%20WOK.mp4" },
  { title: "Lucki - Don't You Love Me", category: "Music Video", video: "https://pub-0085b0a3f395474b81b3a8b73a9eb3d9.r2.dev/LUCKI%20%20-%20DONT%20YOU%20LOVE%20ME.mp4" },
  { title: "Kanye West Sunday Service In Chicago", category: "Music Video", video: "https://pub-0085b0a3f395474b81b3a8b73a9eb3d9.r2.dev/KANYE%20WEST%20_%20SUNDAY%20SERVICE%20CHICAGO.mp4" },
  { title: "Lil Yachty ft. Donny Osmond — Chef Boyardee", category: "Music Video", video: "https://pub-0085b0a3f395474b81b3a8b73a9eb3d9.r2.dev/Lil%20Yachty%20ft.%20Donny%20Osmond-%20Chef%20Boyardee%20(OFFICIAL%20VIDEO)%20%5B6AvR7EES9SI%5D.mp4" },
  { title: "Groupthink — Killers", category: "Music Video", video: "https://pub-0085b0a3f395474b81b3a8b73a9eb3d9.r2.dev/Groupthink%20-%20KILLERS%20(Official%20Music%20Video)%20%5BV8HnN9yxMSo%5D.mp4" },
  { title: "Vic Mensa — There's Alot Going On", category: "Music Video", video: "https://pub-0085b0a3f395474b81b3a8b73a9eb3d9.r2.dev/Vic%20Mensa%20-%20There's%20Alot%20Going%20On%20(Official%20Music%20Video)%20%5Bd4VflaXIJCQ%5D.mp4" },

  // --- Brand / Commercial ---
  { title: "Injury Reserve — Floss", category: "Album Cover", preview: "/assets/stills/nike-still.jpg" },
  { title: "Injury Reserve — Drive It Like It's Stolen", category: "Album Cover", preview: "/assets/stills/jordan-still.jpg" },
  { title: "Hulu — Originals Summer '22", category: "Promo Campaign", preview: "/assets/stills/hulu-still.jpg" },
  { title: "Foot Locker — Holiday '22", category: "Retail Campaign", preview: "/assets/stills/footlocker-still.jpg" },
  { title: "Alienware — Aurora Launch", category: "Product Film", preview: "/assets/stills/alienware-still.jpg" },
  { title: "White Claw — Summer Campaign", category: "Brand Campaign", preview: "/assets/stills/whiteclaw-still.jpg" },
  { title: "Yeezy — Season Campaign", category: "Brand Campaign", preview: "/assets/stills/yeezy-still.jpg" },
  { title: "Pier 1 — Brand Spot", category: "Brand Campaign", preview: "/assets/stills/pier1-still.jpg" },
  { title: "Roc Nation — Pre-Grammy Brunch 2022", category: "Event Film", preview: "/assets/stills/rocnation-still.jpg" },
  { title: "Roc Nation — Pre-Grammy Brunch 2021", category: "Event Film", preview: "" },
  { title: "Havas — Alienware Aurora R15 :60", category: "Broadcast", preview: "" },
  { title: "Havas — Alienware Social Cutdowns", category: "Social", preview: "" },
  { title: "The Times — Hulu Always Pan Spot", category: "Broadcast", preview: "" },
  { title: "The Times — Foot Locker Back to School", category: "Retail", preview: "" },
  { title: "Foulplay MX Socials", category: "Socials", preview: "https://pub-0085b0a3f395474b81b3a8b73a9eb3d9.r2.dev/v5_edit.mp4" },

  // --- Digital Art / Web3 ---
  { title: "Natively Digital: Glitch-ism — Sotheby's New York", category: "Digital Art", preview: "/assets/stills/sothebys-still.jpg" },
  { title: "Bowie on The Blockchain — David Bowie Foundation", category: "Digital Art", preview: "/assets/stills/bowie-still.jpg" },
  { title: "Bangarang — Verse", category: "Digital Art", preview: "/assets/stills/verse-still.jpg" },
  { title: "SuperRare — Genesis Drop", category: "Digital Art", preview: "" },
  { title: "SuperRare — Dissolve Series", category: "Digital Art", preview: "" },
  { title: "imnotArt — Chicago Exhibition", category: "Digital Art", preview: "" },

  // --- Editorial / Photography ---
  { title: "RSVP Gallery — Neon & Nonsense Editorial", category: "Editorial", preview: "/assets/stills/rsvp-still.jpg" },
  { title: "RSVP Gallery — Off White E-commerce Lookbook SS16", category: "Photography", preview: "" },
  { title: "RSVP Gallery — E-commerce Lookbook FW16", category: "Photography", preview: "" },
  { title: "Vic Mensa — The Autobiography Booklet Art", category: "Design", preview: "" },
  { title: "Vic Mensa — Tour Photography 2015–2018", category: "Photography", preview: "" },
  // --- Press: Flagship ---
  { title: "Billboard — Jake Osmun, Photographer for Vic Mensa & Kanye West", category: "Press", video: "", preview: "", url: "https://www.billboard.com/music/music-news/jake-osmun-photographer-vic-mensa-kanye-west-interview-7735714/" },
  { title: "Billboard — Vic Mensa 'There's Alot Going On' Video", category: "Press", video: "", preview: "", url: "https://www.billboard.com/music/rb-hip-hop/vic-mensa-theres-alot-going-on-music-video-7400173/" },
  { title: "Complex — Jake Osmun Interview", category: "Press", video: "", preview: "", url: "https://www.complex.com/style/a/caitlinlopilato/jake-osmun-interview" },
  { title: "Hypebeast — How To Take Concert Photos", category: "Press", video: "", preview: "", url: "https://hypebeast.com/2016/9/how-to-take-concert-photos" },
  { title: "Hypebeast — Vic Mensa 'There's Alot Going On' Video", category: "Press", video: "", preview: "", url: "https://hypebeast.com/2016/6/vic-mensa-theres-alot-going-on-video" },
  { title: "Hypebeast — Jake Osmun", category: "Press", video: "", preview: "", url: "https://hypebeast.com/tags/jake-osmun" },
  { title: "Rolling Stone — Vic Mensa 'There's Alot Going On' Video", category: "Press", video: "", preview: "", url: "https://www.rollingstone.com/music/music-news/watch-vic-mensas-stark-theres-alot-going-on-video-55145/" },
  { title: "Stereogum — Vic Mensa 'There's Alot Going On'", category: "Press", video: "", preview: "", url: "https://www.stereogum.com/1881209/vic-mensa-theres-alot-going-on-video/mp3s/" },

  // --- Press: Art World & NFT ---
  { title: "Sotheby's — Big Gulp", category: "Press", video: "", preview: "", url: "https://www.sothebys.com/en/buy/auction/2023/glitch-beyond-binary/jakethedegen-1-of-1-nft-2023" },
  { title: "Sotheby's — Glitch", category: "Press", video: "", preview: "", url: "https://www.sothebys.com/en/buy/auction/2023/glitch-beyond-binary?lotFilter=AllLots" },
  { title: "Decrypt — Sotheby's Metaverse NFT Auction", category: "Press", video: "", preview: "", url: "https://decrypt.co/123515/sothebys-paris-metaverse-nft-auction-oddly-satisfying-reddit-glitch" },
  { title: "AOTM — Jake Osmun", category: "Press", video: "", preview: "", url: "https://aotm.gallery/artist/jake-osmun/" },
  { title: "AOTM — Creating True Degenerative Art", category: "Press", video: "", preview: "", url: "https://aotm.gallery/jake-on-creating-true-degenerative-art-and-the-melty-fidenza/" },
  { title: "Verse — Bangarang", category: "Press", video: "", preview: "", url: "https://verse.works/artworks/5a0af683-7387-497b-8e7e-7d72618a3b4a/96" },

  // --- Press: Early Career & Local ---
  { title: "ILLROOTS — 'I'm Not Impressed Anymore' Photobook", category: "Press", video: "", preview: "", url: "https://archive.illroots.com/view/jake-osmun-unveils-im-not-impressed-anymore-photobook" },
  { title: "ILLROOTS — Jake Osmun Director Page", category: "Press", video: "", preview: "", url: "https://archive.illroots.com/directors/jake-osmun" },
  //{ title: "Revolt — Vic Mensa 'There's Alot Going On' Video", category: "Press", video: "", preview: "", url: "https://revolt.tv/stories/2016/06/06/watch-vic-mensas-grim-lot-video-0a7f1d766f" },
  //{ title: "Merry Jane — Vic Mensa 'There's Alot Going On'", category: "Press", video: "", preview: "", url: "https://merryjane.com/music/vic-mensa-gets-personal-in-new-video-for-there-s-alot-going-on/" },
  //{ title: "Video Static — Vic Mensa 'There's Alot Going On'", category: "Press", video: "", preview: "", url: "https://www.videostatic.com/watch-it/2016/06/07/vic-mensa-theres-alot-going-on-jake-osmun-vic-mensa-dir" },
  { title: "IMVDb Page", category: "Press", video: "", preview: "", url: "https://imvdb.com/n/jake-osmun" },
  { title: "CoinTelegraph — Sotheby's Glitch Digital Art Sale", category: "Press", video: "", preview: "", url: "https://cointelegraph.com/news/sotheby-s-relaunches-glitch-digital-art-sale-noob-strikes-it-rich-uncovering-45k-nft-and-more" },
  //{ title: "NFT Plazas — Sotheby's Natively Digital", category: "Press", video: "", preview: "", url: "https://nftplazas.com/sothebys-natively-digital/" },
  { title: "Yahoo Finance — Sotheby's Oddly Satisfying Auction", category: "Press", video: "", preview: "", url: "https://finance.yahoo.com/news/sotheby-auction-oddly-satisfying-reddit-140102377.html" },
  { title: "Lyrical Lemonade — Director Spotlight", category: "Press", preview: "", url: "https://blog.lyricallemonade.com/p/know-jake-osmun/" },
];

// Check if URL is a direct video file
function isDirectVideo(url) {
  return /\.(mp4|webm|mov|ogv)(\?.*)?$/i.test(url);
}

document.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById('portfolio-list');
  const preview = document.getElementById('cursor-preview');
  let currentKey = '';

  // Build list
  archiveLinks.forEach((item, i) => {
    const li = document.createElement('li');
    li.className = 'portfolio-link';
    li.dataset.preview = item.preview || '';
    li.dataset.video = item.video || '';
    li.dataset.url = item.url || '';
    li.dataset.index = i;

    const href = item.url || item.video || item.preview || '#';
    li.innerHTML = `<a href="${href}" target="_blank" rel="noopener" class="portfolio-link-title">${item.title}</a>`;
    list.appendChild(li);
  });

  // Cursor follow
  const offset = { x: 16, y: 16 };

  function positionPreview(e) {
    const x = e.clientX + offset.x;
    const y = e.clientY + offset.y;
    const maxX = window.innerWidth - 300;
    const maxY = window.innerHeight - 200;
    preview.style.left = Math.min(x, maxX) + 'px';
    preview.style.top = Math.min(y, maxY) + 'px';
  }

  function showPreview(link) {
    const video = link.dataset.video;
    const img = link.dataset.preview;
    const url = link.dataset.url;
    const key = video || img || url;

    if (!key) {
      preview.classList.remove('visible');
      currentKey = '';
      return;
    }

    if (key === currentKey) return;
    currentKey = key;

    if (video && isDirectVideo(video)) {
      preview.innerHTML = `<video src="${video}" autoplay muted loop playsinline style="width:100%;height:100%;object-fit:cover;display:block;pointer-events:none;"></video>`;
    } else if (img && !img.endsWith('.mp4')) {
      preview.innerHTML = `<img src="${img}" alt="" style="width:100%;height:100%;object-fit:cover;display:block;">`;
    } else if (url) {
      // Use thum.io to generate a screenshot of the press page
      const thumbUrl = `https://image.thum.io/get/width/640/crop/400/${url}`;
      preview.innerHTML = `<img src="${thumbUrl}" alt="" style="width:100%;height:100%;object-fit:cover;display:block;">`;
    }

    preview.classList.add('visible');
  }

  function hidePreview() {
    preview.classList.remove('visible');
    preview.innerHTML = '';
    currentKey = '';
  }

  list.addEventListener('mouseover', (e) => {
    const link = e.target.closest('.portfolio-link');
    if (!link) return;
    showPreview(link);
  });

  list.addEventListener('mousemove', (e) => {
    if (preview.classList.contains('visible')) positionPreview(e);
  });

  list.addEventListener('mouseleave', () => {
    hidePreview();
  });
});
