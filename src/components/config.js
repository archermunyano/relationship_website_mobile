const config = {
  /* 
  ████████████████████████████████████████
  🔧 BASIC SETTINGS (EDIT FREELY)
  ████████████████████████████████████████
  */

  // 🔐 Passcode Page
  correctPasscode: "0728", // Change this to any 4-digit code (the passcode for access)
  passcodeTitle: "Mamalihug sakos password diay", // Title displayed on the passcode entry page
  successMessage: "Niceka gwapa :)", // Message shown upon successful passcode entry
  redirectMessage: "Redirecting...", // Message displayed while redirecting after success
  incorrectPasscodeMessage: "Tip; Birthday ni nimo, gwapa hehe", // Message shown for incorrect passcode
  cancelButtonText: "Cancel", // Text for the cancel button

  // 🔍 Question Page
  searchPlaceholder: "Search Google or type a URL", // Placeholder text in the search input
  trendingTitle: "Trending searches", // Title for the trending searches section
  trendingSearches: [
    "When is Shelby's Birthday?", // Example trending search query
    "Asa mani padulong? Dejk", // Another example query
    `Where did Shelby study for her degree in International Studies?`, // A personalized trending search
  ],
  proTip: 'Pro tip: try searching "How long have we been talking?" gwapa', // Helpful tip for users

  // ⏳ Timer Page
  anniversaryDate: "2025-06-11", // 📅 Set your anniversary date here (used for the timer)
  timerTitle: "We've been talking for (BFF Premium Employee ang style ani):", // Title displayed on the timer page
  timerMessage: "Laysho Laysho", // Message shown alongside the timer
  timeUnits: {
    days: "15 days", // Label for days in the timer
    hours: "7 hours", // Label for hours in the timer
    minutes: "24 minutes", // Label for minutes in the timer
    seconds: "15 seconds", // Label for seconds in the timer
  },

  // 📸 Recap Page
  recapTitle: "Let's recap our time together", // Title for the recap page
  clickMeText: "Click me!", // Text prompting users to interact

  recapSections: [
    { label: "Messages", path: "/recap/message", icon: "Message" }, // Section for messages
    { label: "Pictures", path: "/recap/pictures", icon: "Image" }, // Section for pictures
    { label: "Music", path: "/recap/music", icon: "Music" }, // Section for music
  ],

  // 🎵 Music Page
  musicTitle: "Songs that remind me of you", // Title for the music page
  musicGallery: [
    {
      title: "Folded", // Title of the song
      artist: "Kehlani", // Artist of the song
      left: "5%", // Positioning on the page
      top: "5%", // Positioning on the page
    },
    {
      title: "Distraction",
      artist: "Kehlani",
      left: "40%",
      top: "15%",
    },
    {
      title: "Snooze",
      artist: "SZA",
      left: "15%",
      top: "40%",
    },
    {
      title: "Prinsesa",
      artist: "6cyclemind",
      left: "30%",
      top: "75%",
    },
    {
      title: "Straight up & Down",
      artist: "Bruno Mars",
      left: "5%",
      top: "65%",
    },
    {
      title: "dtMF",
      artist: "Bad Bunny",
      left: "25%",
      top: "90%",
    },
    {
      title: "Let's Do It Again",
      artist: "J Boog",
      left: "35%",
      top: "50%",
    },
    {
      title: "Boyfriend",
      artist: "Arianna Grande, Social House",
      left: "10%",
      top: "25%",
    },
  ],

    // 📝 Message Recap Page
    messageTitle: "Our Messages", // Title for the messages recap page
    messageGallery: [
      { title: "June 11, 2025", description: "First meet, first day in surigao, and also my first time meeting someone as beautiful as you gwapa, nakahitch pajud ug first kiss heh" }, // Message entry
      { title: "June 12, 2025", description: "Despiras Day nani, nagkuyog nasab ta balik ani and wanted to ask the (unsa may plano nmo nako gwapa?) question kay para ka andam ta mag tinarong ba or lingaw2 lang AHAHHAHAHAHAHA" },
      { title: "June 14, 2025", description: "By far the best, and also the worst day nako ni, the best, kay I actually got to be intimate with you and get to know you alot more, but also the worst, kay last ni nato kita gwapa, my fav pic of you diay sab ni heh" },
    ],
  
    // 📸 Picture Recap Page
    pictureTitle: "Our Pictures", // Title for the pictures recap page
    pictureGallery: [
      { title: "Lanusa", description: "Hahays sayang wa kaayo ka pic ta duha gwapa" }, // Picture entry
      { title: "Surf Camp", description: "Kuwang kayng pics kay malimtan ang phone basta kita mag tabi bb" },
      { title: "Surigao", description: "Laysho memories, na apiki lagi kay murag mawang phone basta kita kuyog madam" },
    ],
  

  // 💌 Love Letter Page
  loveLetterMessage: "Congratulations once again, Shelby Eliane Espinosa Bagcat💖", // Message displayed on the love letter page

  // 🎇 Closing Page
  closingMessage: "As one door closes, another opens, Life will be kind to you, and all the good fortunes will come in time, Gwapa :).", // Closing message displayed

  /* 
  ████████████████████████████████████████
  ⚠️ ADVANCED SETTINGS (DO NOT TOUCH UNLESS YOU KNOW WHAT YOU'RE DOING)
  ████████████████████████████████████████
  */

  // 📌 Paths (Only change if you are a developer or modifying routes)
  redirectPath: "/question", // Path to redirect after passcode entry
  timerRedirectPath: "/timer", // Path to redirect to the timer page
  questionRedirectPath: "/question", // Path to redirect to the question page
  recapRedirectPath: "/recap", // Path to redirect to the recap page
  recapPreviousPage: "/timer", // Path to the previous page in the recap
  recapNextPage: "/letter", // Path to the next page in the recap
  letterNextPage: "/closing", // Path to the next page after the letter
  letterPreviousPage: "/letter", // Path to the previous page before the letter
  previousPageText: "Previous page", // Text for the previous page button
  nextPageText: "Next page", // Text for the next page button

  // 🔍 Search Queries (Only change if modifying search functionality)
  correctSearchQueries: [
    "How long have we been talking?", // Example of a correct search query
    "how long have we been talking", // Another example of a correct search query
  ],
};

export default config;
