/** All copy, stats, images & links — edit here to update the page */
window.CONTENT = {
  brand: {
    name: 'BA CAREER MEETUP',
    tagline: 'GROW WITH US',
    // 首页和内页顶栏都使用文件里的黑底 Logo
    logoFull: 'icons/Icon black.png',
    logoIcon: 'icons/Icon black.png',
    logoFallback: 'logo/logo-full.svg',
    logoIconFallback: 'logo/logo-icon.svg',
  },

  opening: {
    badge: 'WE DID IT TOGETHER!',
    headline: '3,000',
    headlineScript: 'Members',
    subcopy:
      'One growing community. Thank you for being part of our journey.',
    collage: [
      'opening/collage-1.jpg',
      'opening/collage-2.jpg',
      'opening/collage-3.jpg',
      'opening/collage-4.jpg',
      'opening/collage-5.jpg',
      'opening/collage-6.jpg',
    ],
  },

  journey: {
    title: 'Our Journey',
    subtitle: 'From a small idea in 2023 to 3,000 members today.',
    timeline: [
      {
        year: '2023',
        icon: 'sprout',
        text: 'We started with a simple idea, to support Business Analysts and build a welcoming space.',
      },
      {
        year: '2024',
        icon: 'people',
        text: 'More events, more connections, stronger community across Aotearoa New Zealand.',
      },
      {
        year: '2025',
        icon: 'flag',
        text: 'We celebrated 2,000 members and saw the community continue to grow through events, stories and shared support.',
      },
      {
        year: '2026',
        icon: 'party',
        text: "Now we’re 3,000 strong, and the journey is still growing.",
        highlight: true,
      },
    ],
    details: [
      {
        year: '2023',
        title: 'The First Step',
        text: 'Started with a simple idea to support Business Analysts in the community.',
        image: null,
      },
      {
        year: '2024',
        title: 'Growing Together',
        text: 'Grew across New Zealand with more events, speakers, and connections.',
        image: null,
      },
      {
        year: '2025',
        title: 'Building Momentum',
        text: 'Reached 2,000 members. Stronger events and deeper community support.',
        image: null,
      },
      {
        year: '2026',
        title: '3,000 Members!',
        text: 'A bigger community. Stronger together. And this is just the beginning.',
        highlight: true,
        image: null,
      },
    ],
  },

  stats: {
    title: 'By the Numbers',
    subtitle: 'A look back at our impact together.',
    items: [
      { value: 3000, suffix: '+', label: 'Members', subtitle: '', color: 'purple', icon: 'members' },
      { value: 40, suffix: '+', label: 'Events Hosted', subtitle: 'Online & in-person', color: 'orange', icon: 'calendar' },
      { value: 60, suffix: '+', label: 'Guest Speakers', subtitle: 'Sharing their stories', color: 'green', icon: 'speaker' },
      { value: 22, suffix: '+', label: 'Volunteers', subtitle: 'Powering our community', color: 'blue', icon: 'handsHeart' },
      { value: 35, suffix: '+', label: 'Countries', subtitle: 'Our members come from', color: 'purple', icon: 'globe' },
      { valueText: '4.8 / 5', label: 'Avg. Event Rating', subtitle: 'From 341 feedbacks', color: 'yellow', icon: 'star' },
    ],
    note: 'Thank you for making these numbers meaningful.',
  },

  moments: [
    { image: 'moments/moment-1.jpg', caption: 'Learning together' },
    { image: 'moments/moment-2.jpg', caption: 'Networking night' },
    { image: 'moments/moment-3.jpg', caption: 'Sharing stories' },
    { image: 'moments/moment-4.jpg', caption: 'Growing together' },
    { image: 'moments/moment-5.jpg', caption: 'Community in action' },
  ],

  thankYou: {
    title: 'Thank You',
    subtitle: 'Tap a card to see our thanks',
    categories: {
      members: {
        title: 'Our Members',
        color: 'purple',
        text: [
          'To everyone who followed, attended, or shared — this milestone is yours.',
          'Your curiosity and generosity keep this community growing.',
        ],
        image: null,
      },
      speakers: {
        title: 'Our Speakers',
        color: 'yellow',
        text: [
          'Thank you for sharing your stories, experience and insights. You helped our community learn, reflect and grow.',
        ],
        image: null,
      },
      partners: {
        title: 'Our Partners',
        color: 'green',
        text: [
          'Thank you for supporting our mission and helping create more opportunities for the community.',
        ],
        image: 'partners/partner-honeycomb.png',
        logos: [
          { name: 'Otago Polytechnic', logo: 'partners/logos/otago-polytechnic.png' },
          { name: 'IIBA', logo: 'partners/logos/iiba.png' },
          { name: 'AUT', logo: 'partners/logos/aut.png' },
          { name: 'redvespa', logo: 'partners/logos/redvespa.png' },
          { name: 'Victoria University of Wellington', logo: 'partners/logos/victoria-wellington.png' },
          { name: 'nextwork', logo: 'partners/logos/nextwork.png' },
          { name: 'Dev Academy Aotearoa', logo: 'partners/logos/dev-academy.png' },
          { name: 'Potentia', logo: 'partners/logos/potentia.png' },
          { name: 'Summer of Tech', logo: 'partners/logos/summer-of-tech.png' },
          { name: 'CITANZ', logo: 'partners/logos/citanz.png' },
          { name: 'Bridging the Gap', logo: 'partners/logos/bridging-the-gap.png' },
          { name: 'Kiwibank', logo: 'partners/logos/kiwibank.png' },
          { name: 'Inside Business Analysis', logo: 'partners/logos/inside-ba.png' },
          { name: 'Powrsuit', logo: 'partners/logos/powsuit.png' },
          { name: 'ProductTank', logo: 'partners/logos/product-tank.png' },
          { name: 'ba&beyond', logo: 'partners/logos/ba-beyond.png' },
          { name: 'Timmy', logo: 'partners/logos/timmy.png' },
          { name: 'INSIDE on purpose', logo: 'partners/logos/inside-on-purpose.png' },
          { name: 'Hudson', logo: 'partners/logos/hudson.png' },
        ],
      },
      volunteers: {
        title: 'Our Volunteers',
        color: 'blue',
        text: [
          'Thank you for your time, energy and care behind the scenes. You helped make this community possible.',
        ],
        image: null,
      },
    },
  },

  whatsNext: {
    title: "What's Next",
    subtitle: "Here’s what we hope to keep building together.",
    bottomImage: 'whats-next/cutted.png',
    items: [
      {
        text: 'More practical career support',
        detail: 'Guidance, resources and support for BA careers.',
        icon: 'whats-next/icon-career-support-transparent.png',
      },
      {
        text: 'More real-world BA stories',
        detail: 'Stories and insights from real BA journeys.',
        icon: 'whats-next/icon-ba-stories-transparent.png',
      },
      {
        text: 'More opportunities to connect',
        detail: 'More ways to learn, meet and grow together.',
        icon: 'whats-next/icon-connect-transparent.png',
      },
    ],
  },

  feedback: {
    title: 'Your Voice',
    subtitle: 'is part of our story.',
    question: 'What has BA Career meant to you?',
    prompt: 'Share a memory, a message, or an idea for what you would like to see next.',
    placeholder: 'Write your message...',
    maxLength: 500,
    note: 'Your message will help us celebrate where we have been and shape what comes next.',
    successTitle: 'Message shared!',
    successText: 'Thank you for adding your voice to our story.',
    formspreeEndpoint: '',
  },

  closing: {
    image: 'ending/ChatGPT Image Jul 13, 2026, 06_41_08 PM.png',
    headline: "Here's to",
    headlineScript: '3,000 Members',
    subline: 'and many more to come!',
    cta: 'Stay connected with us',
    tagline: 'See you at the next meetup!',
    footerScript: 'Grow with us.\nWe grow together.',
    links: [
      { id: 'meetup', label: 'Meetup', url: 'https://www.meetup.com/ba-career-meetup-group/', color: 'purple' },
      { id: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/company/ba-career', color: 'blue' },
      { id: 'youtube', label: 'YouTube', url: 'https://www.youtube.com/@bacareermeetup', color: 'red' },
      { id: 'website', label: 'Website', url: 'https://analysis.nz/', color: 'dark' },
    ],
  },
};
