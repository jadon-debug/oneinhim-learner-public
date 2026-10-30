Warning: truncated output (original token count: 280353)
... 72834 bytes omitted ...

const embeddedSchema = {
  schemaVersion: "0.1",
  controlledLists: {
    contentTypes: ["full_video", "short_clip", "audio", "book", "book_excerpt", "lesson", "prayer", "question_answer", "journey_package", "speaker_profile"],
    formats: ["watch", "listen", "read", "reflect", "practice", "group_discussion"],
    journeyStages: ["explore", "foundations", "formation", "community", "mission", "multiply"]
  }
};

const resources = [
  {
    id: "vid_jesus_001",
    visualType: "video",
    contentType: "short_clip",
    title: "Why Jesus Came Near",
    speaker: "Example Speaker",
    speakerId: "speaker_001",
    language: "en",
    format: ["watch"],
    length: "90 sec",
    seconds: 92,
    summary: "A short invitation to see Jesus as God coming near, not religion staying distant.",
    topic: "Jesus",
    stage: "explore",
    questions: ["Who is Jesus?", "Does God care about me?", "Where do I start with faith?", "I feel far from God"],
    tone: ["hopeful", "encouraging"],
    nextStep: "Start: Who is Jesus?",
    nextTarget: "journey_start_here",
    showInJourney: false,
    journeyResourceId: "mux_one_basics_1_1_opening_clip",
    shareLine: "This helped me remember that God comes near before I have it all together.",
    transcript: [
      "Jesus shows us that God does not stay distant. He comes close, speaks our language, and meets people in ordinary life.",
      "For someone starting again, the first step is not to pretend everything is fine. It is to turn toward the One who already came near.",
      "A simple prayer can be enough for today: Jesus, if you are real, help me see you clearly and take one honest step."
    ]
  },
  {
    id: "book_prayer_002",
    visualType: "book",
    contentType: "book_excerpt",
    title: "Learning to Pray When Words Feel Hard",
    speaker: "Example Author",
    speakerId: "author_002",
    language: "en",
    format: ["read", "reflect", "practice"],
    length: "5 min read",
    seconds: 300,
    summary: "A gentle passage for someone who wants to pray but does not know what to say.",
    topic: "Prayer",
    stage: "foundations",
    questions: ["How do I pray?", "What if prayer feels awkward?", "Can I talk to God honestly?"],
    tone: ["comforting", "practical"],
    nextStep: "Try a two-minute honest prayer",
    nextTarget: "practice_prayer_002",
    seriesId: "foundations_starter",
    episode: 2,
    shareLine: "This is a gentle place to begin if prayer feels hard.",
    transcript: [
      "Prayer often begins with honesty before it begins with confidence. God is not surprised by silence, confusion, or small beginnings.",
      "A helpful first practice is to name one thing you are grateful for, one thing you are carrying, and one thing you need from God today.",
      "The goal is not impressive words. The goal is relationship: learning to turn toward God in the middle of real life."
    ]
  },
  {
    id: "aud_peace_003",
    visualType: "book",
    contentType: "question_answer",
    title: "Peace When Life Feels Heavy",
    speaker: "One In Him",
    speakerId: "oneinhim_team",
    language: "en",
    format: ["read", "reflect"],
    length: "4 min read",
    seconds: 240,
    summary: "A calm teaching and prayer for someone carrying anxiety or pressure.",
    topic: "Anxiety",
    stage: "formation",
    questions: ["What do I do with anxiety?", "How can I find peace with God?", "Does faith help when life feels heavy?", "I need someone to talk to"],
    tone: ["peaceful", "comforting"],
    nextStep: "Pray for peace today",
    nextTarget: "prayer_peace_003",
    shareLine: "This may help if life feels heavy today.",
    transcript: [
      "Peace in Scripture is not pretending the storm is gone. It is learning that God is present with us inside it.",
      "One small practice is to breathe slowly and name what is true: God is near, this moment is not the whole story, and I can ask for help.",
      "If this weight feels unsafe or overwhelming, the next faithful step may be to talk to a trusted person today."
    ]
  },
  {
    id: "aud_darkness_sonship_004",
    visualType: "audio",
    contentType: "podcast",
    title: "From Darkness to Sonship",
    speaker: "Johan Toet",
    speakerId: "author_johan_toet",
    language: "en",
    primaryMedium: "listen",
    format: ["listen"],
    length: "27 min listen",
    seconds: 1650,
    summary: "A One Gospel podcast episode with Johan Toet about moving from darkness into sonship in Christ.",
    topic: "Identity",
    stage: "foundations",
    questions: [
      "What has Jesus rescued me from?",
      "What does it mean to become a child of God?",
      "How do I see myself in Christ?"
    ],
    tone: ["foundational", "encouraging"],
    nextStep: "Continue with Saved by Grace in the journey",
    nextTarget: "book_one_basics_1_2_saved_by_grace",
    seriesId: "one_gospel_podcast",
    episode: 4,
    showInJourney: false,
    journeyResourceId: "book_one_basics_1_2_saved_by_grace",
    access: { level: "seed_unlock", seedCost: 10 },
    shareLine: "This helped me think about moving from darkness into sonship through Jesus.",
    sourceLabel: "One Gospel podcast",
    posterUrl: "assets/one-gospel-podcast-cover.png",
    videoHost: {
      provider: "mux",
      assetId: "DBadkvCvQwGymsP7grQm3YFpMg4FZEf7eRgBzDNdzjI",
      playbackId: "MaUKmLoPzXo2mzEjNWeOhPkbwnQJUJt288IJehdITFw",
      status: "ready",
      hlsUrl: "https://stream.mux.com/MaUKmLoPzXo2mzEjNWeOhPkbwnQJUJt288IJehdITFw.m3u8",
      thumbnailUrl: "assets/one-gospel-podcast-cover.png",
      verified: true
    },
    transcript: [
      "This One Gospel podcast episode is streamed from Mux as the approved audio source."
    ]
  },
  {
    id: "aud_death_ivan_ilyich_classics",
    visualType: "audio",
    contentType: "audiobook",
    title: "The Death of Ivan Ilyich",
    speaker: "Leo Tolstoy",
    speakerId: "author_leo_tolstoy",
    language: "en",
    primaryMedium: "listen",
    format: ["listen"],
    length: "Audiobook placeholder",
    seconds: 0,
    summary: "A planned classic audiobook placeholder for the Classics shelf.",
    topic: "Classics",
    stage: "formation",
    questions: ["How can classic literature help me reflect on life, death, and meaning?"],
    tone: ["reflective", "classic"],
    nextStep: "Audiobook coming soon",
    nextTarget: "aud_death_ivan_ilyich_classics",
    seriesId: "classics_audiobooks",
    episode: 1,
    showInJourney: false,
    shareLine: "A classic audiobook placeholder for future listening.",
    sourceLabel: "Classics",
    posterUrl: "assets/death-of-ivan-ilyich-classics-audiobook-cover.jpg",
    transcript: [
      "Audiobook placeholder. The audio source will be added when it is ready."
    ]
  },
  {
    id: "mux_one_basics_1_1_full_video",
    visualType: "video",
    contentType: "full_video",
    title: "One Basics 1.1: Eternal Life",
    speaker: "Johan Toet",
    speakerId: "author_johan_toet",
    language: "en",
    primaryMedium: "watch",
    format: ["watch"],
    length: "27 min video",
    seconds: 1620,
    summary: "The full One Basics 1.1 teaching on eternal life and knowing God personally through Jesus.",
    topic: "Eternal life",
    stage: "foundations",
    questions: ["What is eternal life?", "How do I know God personally?", "Where should a new Christian begin?"],
    tone: ["foundational", "clear", "encouraging"],
    nextStep: "Continue the One Basics journey",
    nextTarget: "book_one_basics_1_1_eternal_life",
    seriesId: "one_basics_1",
    episode: 1,
    showInJourney: false,
    journeyResourceId: "book_one_basics_1_1_eternal_life",
    shareLine: "This One Basics episode explains eternal life as knowing God personally through Jesus.",
    sourceLabel: "One Basics full episode",
    posterUrl: "assets/one-basics-1-1-eternal-life-course-cover.png",
    videoHost: {
      provider: "mux",
      playbackId: "167yz8JQrceeB2Lb1fnB4WK5W3pksV6GiE00KL6DUGbs",
      status: "ready",
      hlsUrl: "https://stream.mux.com/167yz8JQrceeB2Lb1fnB4WK5W3pksV6GiE00KL6DUGbs.m3u8",
      thumbnailUrl: "https://image.mux.com/167yz8JQrceeB2Lb1fnB4WK5W3pksV6GiE00KL6DUGbs/thumbnail.jpg?time=1",
      verified: true
    },
    transcript: [
      "This full One Basics episode is streamed from Mux as the approved source video."
    ]
  },
  {
    id: "lesson_bible_004",
    visualType: "video",
    contentType: "lesson",
    title: "How to Read the Bible Without Feeling Lost",
    speaker: "Example Teacher",
    speakerId: "speaker_004",
    language: "en",
    format: ["watch", "read", "practice"],
    length: "7 min",
    seconds: 420,
    summary: "A practical first lesson for opening Scripture with confidence.",
    topic: "Bible",
    stage: "foundations",
    questions: ["How do I read the Bible?", "Where should I start in Scripture?", "What if I do not understand?"],
    tone: ["practical", "encouraging"],
    nextStep: "Read John 1 with one question",
    nextTarget: "practice_bible_004",
    seriesId: "foundations_starter",
    episode: 1,
    shareLine: "This makes starting with the Bible feel possible.",
    transcript: [
      "Start small. Read a short passage and ask: what does this show me about God?",
      "The Bible is not a test to pass. It is a place to meet God and learn his story.",
      "A good first practice is to write down one thing you notice and one honest question."
    ]
  },
  {
    id: "mux_out_of_shadows_documentary",
    visualType: "video",
    contentType: "documentary",
    title: "Out of the Shadows",
    speaker: "Brenda",
    speakerId: "speaker_brenda",
    language: "en",
    format: ["watch"],
    length: "21 min",
    seconds: 1274,
    summary: "Brenda's story of hope, healing, and stepping into the light.",
    topic: "Testimony",
    stage: "explore",
    questions: ["Can God restore my story?", "Where can I find hope?", "Can Jesus heal what feels hidden?"],
    tone: ["hopeful", "honest", "restorative"],
    nextStep: "Watch Brenda's story",
    nextTarget: "out_of_the_shadows",
    seriesId: "documentaries",
    episode: 1,
    showInJourney: false,
    access: { level: "partner_access" },
    shareLine: "Brenda's story is a powerful reminder that hope can break through.",
    videoHost: {
      provider: "mux",
      assetId: "01UcTqv1oG8ulp8y7fb01xT01h5JPyO44LjRIcRERUJjks",
      playbackId: "UEYuKRnSWcVDYYOhCokfkeRhBEYpKStcc4RIyZXP5xM",
      status: "ready",
      hlsUrl: "https://stream.mux.com/UEYuKRnSWcVDYYOhCokfkeRhBEYpKStcc4RIyZXP5xM.m3u8",
      thumbnailUrl: "https://image.mux.com/UEYuKRnSWcVDYYOhCokfkeRhBEYpKStcc4RIyZXP5xM/thumbnail.jpg?time=1",
      verified: true
    },
    transcript: [
      "This full documentary is streamed from Mux as the approved Out of the Shadows source video."
    ]
  },
  {
    id: "mux_oneevent_ps_duane_friday",
    visualType: "video",
    contentType: "event_teaching",
    title: "Ps Duane: Friday Session",
    speaker: "Ps Duane",
    speakerId: "speaker_ps_duane",
    language: "en",
    primaryMedium: "watch",
    format: ["watch"],
    length: "41 min video",
    seconds: 2467,
    summary: "Watch Ps Duane’s Friday session from ONEEVENT Days.",
    topic: "ONEEVENT",
    stage: "formation",
    questions: ["How can I keep growing with Jesus?", "What is God saying to the church?", "How do I respond after an event?"],
    tone: ["teaching", "event", "encouraging"],
    nextStep: "Continue with the Grow Deep Roots journey",
    nextTarget: "oneevent_ps_duane_friday",
    seriesId: "oneevent_days_2026",
    episode: 1,
    showInJourney: false,
    access: { level: "seed_unlock", seedCost: 15 },
    shareLine: "This teaching from ONEEVENT Days is worth watching.",
    sourceLabel: "ONEEVENT Days",
    posterUrl: "assets/OE_May_PsDuaneS_friday.webp",
    videoHost: {
      provider: "mux",
      assetId: "YiScG7b6m29AAywEfPcnQSDSDR7S6L4CxzmjLkBTLeM",
      playbackId: "144dW5nS5AEDCqan01qpKn3ugnJJadx1sC4CmoXHvNXk",
      status: "ready",
      hlsUrl: "https://stream.mux.com/144dW5nS5AEDCqan01qpKn3ugnJJadx1sC4CmoXHvNXk.m3u8",
      thumbnailUrl: "assets/OE_May_PsDuaneS_friday.webp",
      verified: true
    },
    transcript: [
      "This ONEEVENT Days teaching is streamed from Mux as the approved event source video."
    ]
  },
  {
    id: "book_one_basics_1_1_eternal_life",
    visualType: "book",
    contentType: "study_guide",
    title: "One Basics 1.1: Eternal Life",
    speaker: "Johan Toet",
    speakerId: "author_johan_toet",
    language: "en",
    format: ["read", "reflect", "group_discussion"],
    length: "12 min read",
    seconds: 720,
    summary: "A first foundations lesson from the One Basics study guide about eternal life, salvation, and starting with Jesus.",
    topic: "Eternal life",
    stage: "foundations",
    questions: ["What is eternal life?", "How do I know I am saved?", "Where should a new Christian begin?", "What does Jesus offer me?"],
    tone: ["foundational", "clear", "encouraging"],
    nextStep: "Answer the reflection and continue the Section 2 path",
    nextTarget: "one_basics_stage_2_lesson_2",
    seriesId: "one_basics_1",
    episode: 1,
    shareLine: "This is a clear first foundation for understanding eternal life in Jesus.",
    sourceLabel: "One Basics study guide",
    scriptureReferences: ["John 3:16", "John 17:3", "1 John 5:11-13"],
    openingPrompt: "What if eternal life starts with knowing God personally?",
    reflectionPrompt: "What does eternal life with Jesus mean for the way you begin today?",
    notesPrompt: "Write one thing you understood about eternal life and one question you still have.",
    completionMessage: "Good step. You have started the One Basics path.",
    quickCheck: {
      question: "According to this lesson, what is eternal life mainly about?",
      answers: [
        { id: "religious_performance", label: "Trying harder to be religious" },
        { id: "knowing_god", label: "Knowing God personally through Jesus" },
        { id: "waiting_for_heaven", label: "Only waiting for life after death" }
      ],
      correctAnswer: "knowing_god",
      feedback: "Yes. Eternal life begins with knowing God through Jesus, then learning to walk with him."
    },
    readBody: [
      "Eternal life is not only something that starts after death. Jesus describes it as knowing God and receiving the life he gives.",
      "This first One Basics lesson helps a new believer slow down and ask: what has Jesus offered me, how can I receive it, and what does it mean to begin walking with him?",
      "Read the Scripture references, write one honest question, and choose one simple response before moving on."
    ],
    transcript: [
      "Eternal life is God's gift through Jesus, not a prize earned by religious performance.",
      "The beginning of discipleship is receiving what Jesus gives, then learning to follow him one step at a time.",
      "A simple first response is to thank Jesus, ask him to teach you, and share your question with a trusted believer."
    ]
  }
];

const speakers = [
  { id: "speaker_001", name: "Example Speaker", bio: "Warm, clear teaching for people exploring faith and starting again with Jesus.", topics: ["Jesus", "Grace", "Explore"] },
  { id: "author_002", name: "Example Author", bio: "Reflective writing and practices for prayer, formation, and everyday faith.", topics: ["Prayer", "Formation"] },
  { id: "oneinhim_team", name: "One In Him", bio: "Prepared discipleship teaching, care, and honest conversations with God.", topics: ["Anxiety", "Peace"] },
  { id: "speaker_004", name: "Example Teacher", bio: "Practical foundations for Scripture, habits, and following Jesus.", topics: ["Bible", "Foundations"] },
  { id: "author_johan_toet", name: "Johan Toet", bio: "One Basics study guide author for clear first foundations in following Jesus.", topics: ["One Basics", "Eternal life", "Foundations"] },
  { id: "speaker_ps_duane", name: "Ps Duane", bio: "ONEEVENT Days speaker and teacher.", topics: ["ONEEVENT", "Formation", "Teaching"] }
];

const embeddedContentPackages = [{"packageId":"pkg_one_basics_1_1_eternal_life","packageTitle":"One Basics 1.1: Eternal Life","packageType":"journey_lesson","packageGoal":"Help a new believer understand eternal life as knowing God personally through Jesus.","sourceItems":["book_one_basics_1_1_eternal_life"],"primaryItemId":"book_one_basics_1_1_eternal_life","primaryMedium":"read","speakerOrAuthor":{"id":"author_johan_toet","name":"Johan Toet","role":"author"},"language":"en","contentType":"study_guide","length":{"seconds":0,"readingMinutes":7,"display":"7 min read"},"fallbackPlan":{"cannotWatch":"book_one_basics_1_1_eternal_life","cannotListen":"book_one_basics_1_1_eternal_life","cannotRead":"audio_one_basics_1_1_eternal_life_future"},"journeyStage":{"stage":2,"name":"Start Following Jesus","slug":"foundations","colour":"#f6ca35","moduleId":"stage_2_start_following"},"questionsAnswered":["What is eternal life?","Why did God send Jesus?","How can I know God as Father?"],"topics":["Eternal life","One Basics","Jesus","Salvation","New Christian"],"learnerSession":{"openingPrompt":"What if eternal life starts with knowing God personally?","contentSummary":"In the first lesson of this series, we are going to talk about eternal life. In John 3:16, Jesus says: ‘For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life.’ Most people think that this verse is about the fact that you will live forever. Although this verse indeed teaches us that we will not be lost, it means a lot more than only life...","readBody":["In the first lesson of this series, we are going to talk about eternal life. In John 3:16, Jesus says: ‘For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life.’ Most people think that this verse is about the fact that you will live forever. Although this verse indeed teaches us that we will not be lost, it means a lot more than only life after death and never ceasing to exist. The truth is that we as humans are eternal beings. When we physically die, our soul and spirit will go on living. What that means is that you don’t have to be saved to receive eternal life. Everyone, believing or unbelieving, will live forever. So, the verse means something different than what we make of what living forever is. Because each person will continue to exist forever.","Now, you can ask yourself: ‘So, if I don’t get saved, will I still continue to exist forever?’ Correct, that is indeed true. However, the question is: where will you live forever? Will that be in the presence of God, or in the darkest darkness where God is not? When we choose not to give our life to King Jesus – which we are completely free to do – we will be lost, how sad that will be. ‘Lost’ means not being saved to dwell in God’s presence forever. We will then go to a place that was never meant for us humans, a place where God is not there. ‘Hell’. God doesn’t want us to be lost at all (2 Peter 3:9) but that all - that means everyone – come to repentance. ‘God is not mad at us’. He is not out to condemn us. He loves us so intensely, that He gave His only begotten Son, so that whoever believes in Him ‘should not perish’ but have eternal life. ETERNAL LIFE Lesson 1.","He gives us a way out. He is a good God. And He is a good Father. In John 3:17 Jesus says, ‘For God did not send His Son into the world to condemn the world, but that the world through Him might be saved.’ You see, God’s plan from the foundation of the world is that you won’t be lost, but have ‘eternal life’, as He has intended for you. That is, being with Him forever, very close to Him. In 2 Corinthians 6:18 God says, ‘I will be a Father to you, and you shall be My sons and daughters.’ So, God wants to be your Father. He wants you to get to know Him that way! Because that is really the everlasting life that John 3:16 is describing. In John 17:3 Jesus says, ‘And this is eternal life, that they may know You, the only true God, and Jesus Christ whom You have sent.’ You see, you can be forgiven of all your sins and be saved for eternity.","That is beautiful, but that isn’t the only goal for which God gave His only begotten Son Jesus. Jesus came so that you could have eternal life. According to the Bible, this eternal life is that you get to know Father God in an intimate, personal way. In John 10:10, Jesus says that the thief (the enemy, Satan) only comes to steal, kill and destroy. But that Jesus has come so that we may have life and have it more abundantly. Life and abundance is a life with God. An intimate Father and son relationship! God wants you to get to know Him as a loving, merciful, good Father. One you can trust, Who you can always count on, a Father who will never leave nor forsake you. A Father that is never angry with you, does not condemn or reject you, but always believes in you.","A Father who is unconditional love no matter where you come from, what you have done and shouldn’t have done, or what you haven’t done and should have done. A Father that stands with His arms open wide to receive you and love you! That is eternal life, that you get to know Him in ‘that’ way and His Son Whom He gave for you! You may be asking yourself: How can I get to know God the Father in ‘that’ way? If you want to get to know the Father, you need to look at the Son. In John 14:9 Jesus says, ‘He who has seen Me has seen the Father.’ ETERNAL LIFE | 1.1 10 In John 14:6 Jesus says, ‘I am the way, the truth, and the life. No one comes to the Father except through Me.’ In 1 John 5:12 Jesus says, ‘He who has the Son has life; he who does not have the Son of God does not have life!’ What life? Eternal life!","John 17:3 ‘And this is eternal life, that they may know You, the only true God, and Jesus Christ whom You have sent.’ We must get to know Jesus the Son by taking in His Word, by believing Him and looking at Him, because He is the Life and He is the way to the Father. Jesus is the perfect reflection of the Father. We are now allowed to come to the Father like Jesus. We have now in Christ received the ‘spirit of sonship’ by which we cry out, ‘ABBA, Father’. Galatians 4:6 In short: Eternal life is not only being forever with God once we die and depart. But also that we get to know Him as He truly is and in a very personal, intimate way. Eternal life is getting to know Him and His Son Jesus Whom He sent. How truly amazing it is that we can get to know Him like that as our Father and as our God. Amen?","Answers in the back of the study guide 1 Read: John 3:16 ‘For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life.’ Question: Why did God send His Son Jesus to earth? 2 Read: John 17:3 ‘And this is eternal life, that they may know You, the only true God, and Jesus Christ whom You have sent.’ Question: What is eternal life, according to this verse? 3 Read: John 10:10 ‘The thief does not come except to steal, and to kill, and to destroy. I have come that they may have life, and that they may have it more abundantly.’ Question: What kind of life did Jesus come to give us? Reactions and discussion QUESTIONS With lesson 1. ETERNAL LIFE | 1.1"],"scriptureReferences":["John 3:16","John 17:3","John 10:10","John 14:6","John 14:9"],"reflectionPrompt":"What changes when eternal life means knowing God personally, not only life after death?","quickCheck":{"question":"According to this lesson, what is eternal life mainly about?","answers":[{"id":"religious_performance","label":"Trying harder to be religious"},{"id":"knowing_god","label":"Knowing God personally through Jesus"},{"id":"waiting_for_heaven","label":"Only waiting for life after death"}],"correctAnswer":"knowing_god","feedback":"Yes. Eternal life begins with knowing God through Jesus, then learning to walk with him."},"notesPrompt":"Write one thing you understood about eternal life and one question you still have.","completionMessage":"Good step. You have started the One Basics path."},"placement":{"showInDiscover":true,"discoverShelf":"One Basics 1","discoverCardLabel":"Foundation lesson","showInJourney":true,"moduleId":"stage_2_start_following","moduleTitle":"Start Following Jesus","lessonOrder":1,"sourcePage":8,"isCoreLesson":true},"recommendedNextStep":{"label":"Answer the reflection and continue the Stage 2 path","type":"continue_journey","targetId":"stage_2_start_following"},"sharing":{"shareText":"This One Basics lesson helped me think about eternal life as knowing God personally through Jesus.","shareImagePrompt":"Stage 2 gold One In Him share card for One Basics: Eternal Life"},"admin":{"packageStatus":"ready","sourcePreApproved":true,"owner":"One In Him content team","lastUpdated":"2026-05-19","extractionStatus":"real_pdf_text_extracted","sourceRange":"One Basics 1.1"}},{"packageId":"pkg_one_basics_1_2_saved_by_grace","packageTitle":"One Basics 1.2: Saved by Grace","packageType":"journey_lesson","packageGoal":"Help a new Christian understand redemption, grace, and why salvation is received through Jesus rather than earned.","sourceItems":["book_one_basics_1_2_saved_by_grace"],"primaryItemId":"book_one_basics_1_2_saved_by_grace","primaryMedium":"read","speakerOrAuthor":{"id":"author_johan_toet","name":"Johan Toet","role":"author"},"language":"en","contentType":"study_guide","length":{"seconds":0,"readingMinutes":8,"display":"8 min read"},"fallbackPlan":{"cannotWatch":"book_one_basics_1_2_saved_by_grace","cannotListen":"book_one_basics_1_2_saved_by_grace","cannotRead":"audio_one_basics_1_2_saved_by_grace_future"},"journeyStage":{"stage":2,"name":"Start Following Jesus","slug":"foundations","colour":"#f6ca35","moduleId":"stage_2_start_following"},"questionsAnswered":["What do we need to be redeemed from?","Can I save myself?","What is grace?"],"topics":["Saved by grace","One Basics","Foundations","New Christian"],"learnerSession":{"openingPrompt":"Grace means Jesus does what we could never do for ourselves.","contentSummary":"SAVED BY GRACE | 1. In this lesson, we’re going to talk about ‘redemption’. Redemption is necessary when you are ‘bound’ by something. By nature, we are bound by darkness. This has everything to do with the fall of man and the fallen nature in which we were born. We were born as slaves to sin, we are literally imprisoned in it and can’t deliver ourselves out of it. It is our ‘nature’. Psalm 51:5 ‘Behold, I was brough...","readBody":["SAVED BY GRACE | 1. In this lesson, we’re going to talk about ‘redemption’. Redemption is necessary when you are ‘bound’ by something. By nature, we are bound by darkness. This has everything to do with the fall of man and the fallen nature in which we were born. We were born as slaves to sin, we are literally imprisoned in it and can’t deliver ourselves out of it. It is our ‘nature’. Psalm 51:5 ‘Behold, I was brought forth in iniquity, and in sin my mother conceived me.’ We are separated from the light. We are separated from God’s Kingdom. And because we are in the darkness, we can’t see the Kingdom of God. In John 3:3 Jesus says, ‘Most assuredly, I say to you, unless one is born again, he cannot see the kingdom of God.’ You can’t ‘see’ it, because you live in the darkness. So, we have to be delivered from this ‘darkness’, only we can’t do this ourselves.","Sin is equal to death, the price of sin is death. So, to be able to pay the price for sin, blood has to flow. ‘Clean blood’. Our blood is contaminated with ‘sin’. So, our blood can’t pay the price for sin. We are immersed in the sin of our sinful nature. Because of this, we are spiritually dead. We can’t deliver ourselves from this ‘sinful nature’. In Romans 7:24 Paul writes, ‘O wretched man that I am! Who will deliver me from this body of death?’ SAVED BY GRACE Lesson 1. 2NOTES 14 He can’t do it himself! Then he says in Romans 7:25, ‘I thank God—through Jesus Christ our Lord!’ Colossians 1:14 ‘In whom [Christ] we have redemption through His blood, the forgiveness of sins.’ Christ came to this world for our sakes. He became flesh and dwelt among us. John 1:14 He gave Himself for us on the cross and bought us with ‘His precious blood’.","Only His clean blood could buy us back from the body of sin and death. Hebrews 9:12 ‘Not with the blood of goats and calves, but with His own blood He entered the Most Holy Place once for all, having obtained eternal redemption.’ It is only through His blood that forgiveness and redemption is possible. There are many people who try to establish their own redemption. For example, by working hard to earn God’s favor. Think of people who try to keep all kinds of rules and Old Testament laws to guarantee their deliverance that way. There are millions of people who call themselves Christians but push aside Jesus and try to pay the price themselves. They ‘disregard’ the perfect work of our King Jesus. But they are deceived.","Galatians 5:4 ‘You have become estranged from Christ, you who attempt to be justified by law; you have fallen from grace.’ If you try to save and justify yourself through religion and all kinds of works of the law, you are essentially saying, ‘Lord, it’s not enough what you have done on the cross, I still have to add something to it.’ That is terrible! Romans 3:20 says, ‘By the deeds of the law no flesh will be justified in His sight.’ It is impossible for you to be ‘saved’ from your sinful nature, from your old, bound self by making this come to pass ‘yourself’. Not a single person in the whole world has been able to completely fulfill the law and justify himself before God that way. No person by working really hard and doing everything right could save and redeem themselves. SAVED BY GRACE | 1.2 In John 14:6 Jesus says, ‘I am the way, the truth, and the life.","No one comes to the Father except through Me.’ 1 John 5:12 ‘He who has the Son has life; he who does not have the Son of God does not have life.’ You only receive this life by believing who Jesus is and what Jesus has done for you. Not by your own works and goodness, but by His perfect work and goodness! Only by believing that will you receive your redemption by grace. There is no ‘other’ way! Romans 3:23-24 ‘For all have sinned and fall short of the glory of God, being justified freely by His grace through the redemption that is in Christ Jesus.’ There is clearly nothing you can do to redeem yourself. Only King Jesus can redeem you by His precious blood. So there is nothing of which you can ‘boast’. There is nothing you can trust in and can say, ‘Look, how good of me, and of course the gates of Heaven are open for me.","Look at how great I am!’ No, we must humble ourselves and acknowledge that we are hopelessly lost without a Redeemer who can deliver us. Only by God’s grace and undeserved favor can we be saved. Luke 18:9-12 ‘Also He spoke this parable to some who trusted in themselves that they were righteous, and despised others: Two men went up to the temple to pray, one a Pharisee and the other a tax collector. The Pharisee stood and prayed thus with himself, ‘God, I thank You that I am not like other men—extortioners, unjust, adulterers, or even as this tax collector. I fast twice a week; I give tithes of all that I possess.’ This Pharisee was boasting, exalting himself and justifying himself, and flaunting to God how great he was. He did all the right things. He fasted, he prayed, he visited the synagogue, he tithed, and so on.","That is also how it works with many believers today: I do all the right things, so I am holy. That is being religious and legalistic. 16 This Pharisee was righteous in his own eyes and in the eyes of his religious friends. But it was ‘self-righteousness’. Luke 18:13 ‘And the tax collector [sinner], standing afar off, would not so much as raise his eyes to heaven, but beat his breast, saying, ‘God, be merciful to me a sinner!’ You see, this tax collector had nothing to boast of, he didn’t even dare to raise his eyes to heaven. He knew about himself that he was a sinner, that he made mistakes in his life and couldn’t save himself, couldn’t redeem himself and hoped for the grace of God.","Then Jesus continues His story in Luke 18:14: ‘I tell you, this man [this sinner] went down to his house justified rather than the other [righteous man]; for everyone who exalts himself will be humbled, and he who humbles himself will be exalted.’ The tax collector was redeemed and made righteous as opposed to the Pharisee who exalted ‘himself’ and boasted in his works. It’s all grace, grace, grace. Undeserved favor, dear friends. You don’t get what you deserve. Fortunately, otherwise we would all turn into a heap of ashes! God gives us grace because we could otherwise never be delivered out of the body of sin and death. We would absolutely be lost, a single ticket to Hell. But His love and grace sent His Son in our place! Romans 5:8 ‘But God demonstrates His own love toward us, in that while we were still sinners, Christ died for us.’ Without Christ we are all lost.","But thank God that we can be saved by His sacrifice. Our redemption we receive freely, purely and solely by grace. ‘Undeserved favor’. That is good news! Amen? QUESTIONS SAVED BY GRACE | 1. Answers in the back of the study guide 1 Question: What do we need to be redeemed from? 2 Question: What is necessary to be redeemed? And can we establish that redemption ourselves? 3 Question: What is grace? And how do we receive that grace? Reactions and discussion QUESTIONS With lesson 1. 2 18 Bij les 1. RIGHTEOUSNESS BY GRACE"],"scriptureReferences":["Colossians 1:14","Romans 3:23-24","Luke 18:13-14"],"reflectionPrompt":"Where are you tempted to earn what Jesus has already given by grace?","quickCheck":{"question":"What is grace in this lesson?","answers":[{"id":"wrong_1","label":"A reward for perfect religious performance"},{"id":"correct","label":"Undeserved favor received through Jesus"},{"id":"wrong_2","label":"Pretending sin does not matter"}],"correctAnswer":"correct","feedback":"Yes. Grace is not earned performance; it is God saving and redeeming us through Jesus."},"notesPrompt":"Write what grace means in your own words.","completionMessage":"Good. You have seen that following Jesus starts with grace."},"placement":{"showInDiscover":true,"discoverShelf":"One Basics 1","discoverCardLabel":"Grace foundation","showInJourney":true,"moduleId":"stage_2_start_following","moduleTitle":"Start Following Jesus","lessonOrder":2,"sourcePage":13,"isCoreLesson":true},"recommendedNextStep":{"label":"Write what grace means in your own words","type":"reflect","targetId":"reflect_saved_by_grace"},"sharing":{"shareText":"This One Basics lesson helped me think about saved by grace.","shareImagePrompt":"Stage 2 gold One In Him share card for One Basics: Saved by Grace"},"admin":{"packageStatus":"ready","sourcePreApproved":true,"owner":"One In Him content team","lastUpdated":"2026-05-19","extractionStatus":"real_pdf_text_extracted","sourceRange":"One Basics 1.2"}},{"packageId":"pkg_one_basics_1_3_righteousness_by_grace","packageTitle":"One Basics 1.3: Righteousness by Grace","packageType":"journey_lesson","packageGoal":"Help a new Christian understand God's righteousness and freedom from shame, guilt, and performance.","sourceItems":["book_one_basics_1_3_righteousness_by_grace"],"primaryItemId":"book_one_basics_1_3_righteousness_by_grace","primaryMedium":"read","speakerOrAuthor":{"id":"author_johan_toet","name":"Johan Toet","role":"author"},"language":"en","contentType":"study_guide","length":{"seconds":0,"readingMinutes":8,"display":"8 min read"},"fallbackPlan":{"cannotWatch":"book_one_basics_1_3_righteousness_by_grace","cannotListen":"book_one_basics_1_3_righteousness_by_grace","cannotRead":"audio_one_basics_1_3_righteousness_by_grace_future"},"journeyStage":{"stage":2,"name":"Start Following Jesus","slug":"foundations","colour":"#f6ca35","moduleId":"stage_2_start_following"},"questionsAnswered":["What is righteousness by grace?","How do I receive God's righteousness?","What is self-righteousness?"],"topics":["Righteousness","One Basics","Foundations","New Christian"],"learnerSession":{"openingPrompt":"God makes us right with Him through Jesus, not through performance.","contentSummary":"In this lesson, we are going to talk about ‘righteousness’ by grace. It is the continuation of the previous lesson ‘saved by grace’. Being saved and righteous- ness are an automatic result of God’s grace the moment that we accept Jesus as Lord and Savior in faith. Two types of righteousness exist. The first is ‘self-righteousness’, or self-justification. The other is ‘God’s righteousness’. What does ‘self-justificati...","readBody":["In this lesson, we are going to talk about ‘righteousness’ by grace. It is the continuation of the previous lesson ‘saved by grace’. Being saved and righteous- ness are an automatic result of God’s grace the moment that we accept Jesus as Lord and Savior in faith. Two types of righteousness exist. The first is ‘self-righteousness’, or self-justification. The other is ‘God’s righteousness’. What does ‘self-justification’ look like? That Pharisee from Luke 18:11 was justifying ‘himself’. ‘The Pharisee stood and prayed thus with himself, ‘God, I thank You that I am not like other men—extortioners, unjust, adulterers, or even as this tax collector. I fast twice a week; I give tithes of all that I possess.’ There are many people today who pray and walk just like that Pharisee.","They believe that because they live a holy life in their own eyes and because they do a lot of things for God, they are ‘better’ than others. They think that by keeping to all kinds of rules and laws from the Old Testament, they can justify themselves before God. Romans 3:21-24 states, however: ‘But now the righteousness of God apart from the law is revealed, being witnessed by the Law and the Prophets, even the righteousness of God, through faith in Jesus Christ, to all and on all who believe. For there is no difference; for all have sinned and fall short of the glory of God, being justified freely by His grace through the redemption that is in Christ Jesus.’ It is impossible to come into the presence of God through your own righteousness. Your own goodness, your own behavior, can never fulfill the righteousness that is necessary to be in God’s presence.","Nobody is free from sin, nobody is righteous. Romans 3:10-11 ‘As it is written: There is none righteous, no, not one; there is none who understands; there is none who seeks after God.’ RIGHTEOUSNESS BY GRACE Lesson 1. RIGHTEOUSNESS BY GRACE | 1. NOTES 20 In all religions that exist in this world you must ‘do’ all kinds of things for God. Pray six times a day, not eat certain things, you must give, you’re not allowed this, you’re not allowed that, you must perform, etc. You need to do all kinds of things to be ‘good enough’ for God and millions of people worldwide try this, but nobody can live up to that, no one. Nobody can be good enough to enter God’s presence by their own works. But the Gospel, the ‘good news’ of God regarding His Son Jesus, is that now ‘God’s righteousness’ is made available for every person, and not by their own works but by grace through faith!","You can now be made righteous with God’s kind of righteousness with which you can now enter His presence without guilt, shame, or condemnation. The righteousness that is from God makes you capable being in His presence forever, as if you have never sinned. 2 Corinthians 5:21 says, ‘For He made Him who knew no sin to be sin for us, that we might become the righte- ousness of God in Him.’ In Christ we have the redemption of our old sinful nature, He bought us with His precious blood. And as a result of that redemption, we receive the nature of Christ. 2 Corinthians 5:17 ‘Therefore, if anyone is in Christ, he is a new creation; old things have passed away; behold, all things have become new.’ In Him we are a new creation, which means something that wasn’t there before. We have now received His nature.","John 4:17 Because our sinful nature is now done away with, we can enter God’s presence in the same way Jesus can. Boldly, without guilt, without shame, without condemnation. Hallelujah! What a great gift Jesus gives to us! He ‘gives’ to us. For it is not by works, not by your own deserts, but only by grace, ‘undeserved favor’. Please stop using your own works to get into God’s favor if you are doing so! If you think, ‘I haven’t read the Bible today, now God also can’t bless me.’ If you think, ‘I overslept for church, how can I even think that God wants to know me?’ If you think, ‘I have to fast this week, otherwise I will never accomplish what I want to receive from God.’ If you think that you’re never allowed to make ‘mistakes’ and have to be completely ‘perfect’ to go to God, stop that. Immediately!","You can do absolutely nothing, really absolutely nothing to get to God’s righteousness based on your own goodness and achievements. By your own type of righteousness. Nothing! So give up on wanting to do it yourself. To receive God’s righteousness you only have to believe that Jesus accomplished this for you by His death on the cross, by the outpouring of His blood and His resurrection from the dead. You then receive by grace – undeserved favor – God’s type of righteousness that makes you capable of being in His presence forever. There is no ‘other way’ by which you or I can be made righteous for God. Paul writes in the letter to the Philippians that everything that he has learned and done of his own works, trying to keep the law and so forth, he counts as rubbish. For this self-righteousness ‘keeps’ him from entering into God’s righteousness.","Philippians 3:8-9 ‘Yet indeed I also count all things loss for the excellence of the knowledge of Christ Jesus my Lord, for whom I have suffered the loss of all things, and count them as rubbish, that I may gain Christ and be found in Him, not having my own righteousness, which is from the law, but that which is through faith in Christ, the righteousness which is from God by faith.’ Paul knew very well that what he tried to accomplish by his own works and the keeping of the law, only separated him from the grace and righteousness that is by faith. Galatians 5:4 ‘You have become estranged from Christ, you who attempt to be justified by law; you have fallen from grace.’ There is only one way by which we could be made righteous for God and that is ‘by grace through faith’.","Ephesians 2:8-9 ‘For by grace you have been saved through faith, and that not of yourselves; it is the gift of God, not of works, lest anyone should boast.’ Romans 3:28 ‘Therefore we conclude that a man is justified by faith apart from the deeds of the law.’ Dear people, what amazingly good news this is! RIGHTEOUSNESS BY GRACE | 1.3 22 When you realize that you are justified by God’s righteousness, when you realize that it’s not based on your own works or goodness, but that it is granted based on grace through faith, when you realize ‘that’, then you are released from religion. I promise you that! By believing that Jesus has paid everything for you, you can come into the Father’s presence forever, confidently, without guilt, without shame or condemnation. Holy, pure and spotless, as a righteous child of the Most High! Well, if that isn’t good news, I don’t know what is! Hallelujah!","I love God! I don’t deserve it, but I still receive it! Amen? QUESTIONS 23 1 Read: Titus 3:5 ‘Not by works of righteousness which we have done, but according to His mercy He saved us, through the washing of regeneration and renewing of the Holy Spirit.’ Question: Is the righteousness that we need to enter God’s presence a righteousness that we establish ourselves? 2 Read: Romans 3:28 ‘Therefore we conclude that a man is justified by faith apart from the deeds of the law.’ Question: How do we receive God’s righteousness? 3 Question: What is righteousness by the law, or self-righteousness in your own words? Reactions and discussion Answers in the back of the study guide RIGHTEOUSNESS BY GRACE | 1. QUESTIONS With lesson 1. 3"],"scriptureReferences":["Romans 3:21-28","2 Corinthians 5:21","Titus 3:5"],"reflectionPrompt":"Where do you still feel pressure to prove yourself to God?","quickCheck":{"question":"How do we receive God's righteousness?","answers":[{"id":"wrong_1","label":"By comparing ourselves with others"},{"id":"correct","label":"By grace through faith in Jesus"},{"id":"wrong_2","label":"By keeping enough rules to impress God"}],"correctAnswer":"correct","feedback":"Yes. God's righteousness is received through Jesus, not achieved through self-justification."},"notesPrompt":"Write one truth about how God sees you in Christ.","completionMessage":"Good. You have taken another foundations step in grace."},"placement":{"showInDiscover":true,"discoverShelf":"One Basics 1","discoverCardLabel":"Identity foundation","showInJourney":true,"moduleId":"stage_2_start_following","moduleTitle":"Start Following Jesus","lessonOrder":3,"sourcePage":19,"isCoreLesson":true},"recommendedNextStep":{"label":"Rest in what Jesus has done","type":"reflect","targetId":"reflect_righteousness_by_grace"},"sharing":{"shareText":"This One Basics lesson helped me think about righteousness.","shareImagePrompt":"Stage 2 gold One In Him share card for One Basics: Righteousness by Grace"},"admin":{"packageStatus":"ready","sourcePreApproved":true,"owner":"One In Him content team","lastUpdated":"2026-05-19","extractionStatus":"real_pdf_text_extracted","sourceRange":"One Basics 1.3"}},{"packageId":"pkg_one_basics_1_4_intimacy_with_god","packageTitle":"One Basics 1.4: Intimacy with God","packageType":"journey_lesson","packageGoal":"Help a new Christian understand that God wants close relationship with His children through Jesus.","sourceItems":["book_one_basics_1_4_intimacy_with_god"],"primaryItemId":"book_one_basics_1_4_intimacy_with_god","primaryMedium":"read","speakerOrAuthor":{"id":"author_johan_toet","name":"Johan Toet","role":"author"},"language":"en","contentType":"study_guide","length":{"seconds":0,"readingMinutes":8,"display":"8 min read"},"fallbackPlan":{"cannotWatch":"book_one_basics_1_4_intimacy_with_god","cannotListen":"book_one_basics_1_4_intimacy_with_god","cannotRead":"audio_one_basics_1_4_intimacy_with_god_future"},"journeyStage":{"stage":2,"name":"Start Following Jesus","slug":"foundations","colour":"#f6ca35","moduleId":"stage_2_start_following"},"questionsAnswered":["Does God want a relationship with me?","What was lost and restored through Jesus?","How can I know God as Father?"],"topics":["Intimacy with God","One Basics","Foundations","New Christian"],"learnerSession":{"openingPrompt":"God is not far away; He wants relationship with His children.","contentSummary":"In this lesson, we are going to talk about how God wants to have an intimate relationship with us. God is a God of relationships. When He created man, He did this to have relationship with man, an intimate relationship. A relationship in which you really ‘know’ each other. In the beginning, God was in Adam and Adam was in God. He was created in His image [Genesis 1:26]. And God breathed the breath of life into him [G...","readBody":["In this lesson, we are going to talk about how God wants to have an intimate relationship with us. God is a God of relationships. When He created man, He did this to have relationship with man, an intimate relationship. A relationship in which you really ‘know’ each other. In the beginning, God was in Adam and Adam was in God. He was created in His image [Genesis 1:26]. And God breathed the breath of life into him [Genesis 2:7]. God’s Spirit was in Adam and they walked together and were intimately connected to each other. That is how it was ‘intended’ from the beginning of creation. Adam and Eve however rebelled against God by believing Satan and obeying him. They assumed that God didn’t have their best interests at heart, because Satan had cunningly said in Genesis 3:1 and 3:4-5, ‘Has God said, “You shall not eat of every tree of the garden?” You will not surely die.","For God knows that in the day you eat of it your eyes will be opened, and you will be like God.’ In these verses he suggested that God didn’t have their best interests at heart, that God didn’t want them to have the very best there is. They didn’t realize that they were already like God and had everything they ever needed in life. Here they’re being deceived and do the very thing God didn’t want for them. They ate the fruit and died immediately. Everyone knows that Adam and Eve got old, so they didn’t die physically. No, they died ‘spiritually’. The spirit in them was ‘dead’ through sin. God never wanted it that way. But God is holy and can’t have fellowship with sin. So God couldn’t be ‘in’ man anymore, but still He stayed with man. Because God is also love. People often think that God is angry with us because of our sins and that He wants to punish us.","They read the Old Testament and think, ‘Wow, God is really wrathful.’ But everything God did in the Old Testament, He did out of love. People lived completely in sin, but there was no law, so the people didn’t know that this was against the will of God. INTIMACY WITH GOD Lesson 1. INTIMACY WITH GOD | 1. NOTES 26 They weren’t charged with their sin because there was no ‘law’, they didn’t realize how bad they were and that they were lost in darkness. Then God came with ‘Moses and the law’. This was to give parameters, so that people would become aware of their miserable state and that they needed a Savior. The law brought out the sin in us. Paul writes about the law in Romans 7:13: ‘Has then what is good become death to me? Certainly not!","But sin, that it might appear sin, was producing death in me through what is good [the law], so that sin through the commandment might become exceedingly sinful.’ So the law causes an awarenes of our miserable state. That we need a Redeemer. When God created man, He never intended to let us become lost. God is love. 1 John 4:8 He is a good God! But because we weren’t charged for our sins because of a lack of rules, we just had a problem. We couldn’t understand why something was wrong because there were no parameters. That’s why the law came, and that’s why God sometimes was hard on the Jewish people. He had to make them aware that what they did and how they lived was far beneath God’s standard. They had to be shaken up. Otherwise there would never be a virgin left from whom the Savior could be born.","More importantly, the people would have never known that they needed to be redeemed in the first place. What God did in the Old Testament, He did out of love and out of grace. God has always wanted to stay close to man. He has always wanted relationship with us, that is what we were created for. After Adam and Eve sinned, God still visited them. Genesis 3:9 ‘Then the Lord God called to Adam and said to him, “Where are you?”’ When Cain murdered Abel, God still spoke to him and promised to protect him. Genesis 4:15 God’s will is always ‘relationship’. Intimacy. He wants to live in us, except that wasn’t possible anymore because of sin. So He stayed with us in the cloud by day and in the fire by night, He lived with us in the tabernacle, He went before us and protected us. He just couldn’t be ‘in’ us anymore. 27 But His perfect will has always been relationship.","He wants to be our Father and us to be sons and daughters to Him, remember? 2 Corinthians 6:18 In Matthew 18:11 Jesus says, ‘I have come to save that which was lost.’ Not ‘who’ was lost but ‘which’. What was lost? The intimate relationship with the Father. Everyone lived for themselves, far removed from God or ‘separated from God’ as we sometimes say. It says in Isaiah 53:6 that we all like sheep have gone astray, all to our own way. If you walk in complete darkness, you are blind and don’t see anything. In John 12:46 Jesus says, ‘I have come as a light into the world, that whoever believes in Me should not abide in darkness.’ So the law showed us how much we were in darkness. That is not condemnation, that is love, that is grace. Because God didn’t show us our miserable state in order to condemn us, but he showed us the ‘need’ for redemption. He gave us a way out.","We can step out of that darkness. We will get back to that in another lesson. But we keep thinking that God is angry and that we must do all kinds of things to get into His favor. That we can only have a relationship with God if we do everything right in our lives. Religion teaches us that we have to keep God’s law so as to receive forgiveness, but that couldn’t be further from the truth. You need not be perfect for God to save you. As religion wants to teach us. Romans 5:8 ‘But God demonstrates His own love toward us, in that while we were still sinners, Christ died for us.’ He gave His only Son when you and I were still living in deep darkness! When we wanted none of Him, He gave us His only Son! INTIMACY WITH GOD | 1.4 28 The most precious thing He had. Did He do this because He was so angry with us and so disappointed that He actually rather wanted to ‘punish’ us and let us be lost?","No! This testifies of His love! 1 John 3:1 ‘Behold what manner of love the Father has bestowed on us, that we should be called children of God!’ For God so loved the world that He gave His only Son! He gave us His all! That is His true nature, that is who He is! A great, fantastic, loving, gracious, merciful, caring, blessing, healing, delivering, protecting God and Father! Hallelujah! He loves us and wants relationship with us. That is the reason and the essence of everything, dear friends! He is not far away, but very close. He doesn’t punish; He forgives! He doesn’t curse; He blesses! He doesn’t make sick; He heals! He is not a raging God, But a loving Father! He wants to be everything for you if you will let Him.","We can get to know Him as Father and have an intimate relationship with Him, in which He can be in us and we in Him and in which you can fully get to know Him as He really is. ‘Love’. In that is the eternal life that we talked about. Amen? QUESTIONS 29 1 Read: 1 John 4:8 ‘He who does not love does not know God, for God is love.’ Question: What is God’s nature? 2 Read: John 17:3 ‘And this is eternal life, that they may know You, the only true God, and Jesus Christ whom You have sent.’ Question: What was God’s end goal? 3 Read: Romans 12:2 ‘And do not be conformed to this world, but be transformed by the renewing of your mind, that you may prove what is that good and acceptable and perfect will of God.’ Question: How can you really get to know God? Reactions and discussion Answers in the back of the study guide INTIMACY WITH GOD | 1. QUESTIONS With lesson 1. 4"],"scriptureReferences":["Genesis 1:26","John 12:46","2 Corinthians 6:18","1 John 3:1"],"reflectionPrompt":"What would change if you approached God as Father today?","quickCheck":{"question":"What does this lesson say God wants with us?","answers":[{"id":"wrong_1","label":"Distance until we become perfect"},{"id":"correct","label":"A close relationship as Father with His children"},{"id":"wrong_2","label":"Fear without relationship"}],"correctAnswer":"correct","feedback":"Yes. The foundation is not distance from God, but restored relationship through Jesus."},"notesPrompt":"Write one honest prayer to God as Father.","completionMessage":"Good. You have made space for relationship with God."},"placement":{"showInDiscover":true,"discoverShelf":"One Basics 1","discoverCardLabel":"Relationship foundation","showInJourney":true,"moduleId":"stage_2_start_following","moduleTitle":"Start Following Jesus","lessonOrder":4,"sourcePage":25,"isCoreLesson":true},"recommendedNextStep":{"label":"Pray honestly to God as Father","type":"pray","targetId":"pray_to_father"},"sharing":{"shareText":"This One Basics lesson helped me think about intimacy with god.","shareImagePrompt":"Stage 2 gold One In Him share card for One Basics: Intimacy with God"},"admin":{"packageStatus":"ready","sourcePreApproved":true,"owner":"One In Him content team","lastUpdated":"2026-05-19","extractionStatus":"real_pdf_text_extracted","sourceRange":"One Basics 1.4"}},{"packageId":"pkg_one_basics_1_5_repentance","packageTitle":"One Basics 1.5: Repentance","packageType":"journey_lesson","packageGoal":"Help a learner understand repentance as part of the Start Following Jesus path and respond with one clear next step.","sourceItems":["book_one_basics_1_5_repentance"],"primaryItemId":"book_one_basics_1_5_repentance","primaryMedium":"read","speakerOrAuthor":{"id":"author_johan_toet","name":"Johan Toet","role":"author"},"language":"en","contentType":"study_guide","length":{"seconds":0,"readingMinutes":10,"display":"10 min read"},"fallbackPlan":{"cannotWatch":"book_one_basics_1_5_repentance","cannotListen":"book_one_basics_1_5_repentance","cannotRead":"book_one_basics_1_5_repentance_audio_future"},"journeyStage":{"stage":2,"name":"Start Following Jesus","slug":"foundations","colour":"#f6ca35","moduleId":"stage_2_start_following"},"questionsAnswered":["What does repentance mean for following Jesus?","How does Scripture shape my understanding of repentance?","What is one practical response to repentance?"],"topics":["Foundations","One Basics 1","Start Following Jesus","Discipleship"],"learnerSession":{"openingPrompt":"Take one clear step in repentance.","contentSummary":"In the previous lessons we have talked about how eternal life is knowing God, about how we are saved by grace and can be made righteous through God. We have talked about how He wants an intimate relationship with us, how He wants us to get to know Him as a loving Father. Today we’re going to talk about how we can become His children, which steps we should take, because God has already done His part. He wants everythi...","readBody":["In the previous lessons we have talked about how eternal life is knowing God, about how we are saved by grace and can be made righteous through God. We have talked about how He wants an intimate relationship with us, how He wants us to get to know Him as a loving Father. Today we’re going to talk about how we can become His children, which steps we should take, because God has already done His part. He wants everything we talked about to become a reality in your life. But in order to be accepted as His child God has determined a few rules. For it is always your free will, your own conscious decision, and your faith. Jesus says in Mark 1:15, ‘The time is fulfilled, and the kingdom of God is at hand. Repent, and believe in the gospel.’ Ezekiel 18:30-32 (NIV) ‘Repent! Turn away from all your offenses; then sin will not be your downfall.","Rid yourselves of all the offenses you have committed and get a new heart and a new spirit. Why will you die, people of Israel? For I take no pleasure in the death of anyone, declares the Sovereign Lord. Repent and live!’ ‘Repent and live’. God says, ‘Why should you die? Why would you want to be eternally separated from me? Get a new heart and a new spirit.’ Here the word ‘die’ means to leave this earthly existence. It does not mean an eternal death, for we are eternal beings. We can give ourselves a new heart and a new spirit by repenting. It is ‘His will’ that we repent. It says in 2 Peter 3:9 that God doesn’t want anyone to perish, but that all come to ‘repentance’. Repentance is the very first step we need to take so we can belong to Him. REPENTANCE Lesson 1. REPENTANCE","32 When Peter showed thousands of people that Jesus was the Messiah, the Christ, the Anointed One, they asked, Men and brethren, what should we do? ‘What should we do to be saved?’ Acts 2:38 ‘Then Peter said to them, “Repent, and let every one of you be baptized in the name of Jesus Christ for the remission of sins; and you shall receive the gift of the Holy Spirit.”’ So there are a few steps we must take. We will cover this in the coming lessons, but the very first step is to ‘repent’. What exactly does it mean to repent? Repenting in Greek is ‘Metanoia’. It means ‘to think differently’. Repenting also means ‘turning away’ from the old way, ‘changing direction’, to ‘come to oneself’.","So you will start thinking differently, you realize that your way of living and reasoning doesn’t work anymore, you realize that you can’t deliver yourself, you come to yourself, you surrender and make a conscious decision to go in another direction. Repenting is not repeating a few sentences. What is often taught is that if you repeat a ‘sinner’s prayer’ (which is nowhere to be found in the Bible, by the way) you are saved. But I can tell you that repeating a few words will not save you, but that it’s a matter of your ‘heart’. For God sees your heart. 1 Samuel 16:7 Romans 10:8-10 ‘But what does it say? “The word is near you, in your mouth and in your heart” (that is, the word of faith which we preach): that if you confess with your mouth the Lord Jesus and believe in your heart that God has raised Him from the dead, you will be saved.","For with the heart one believes unto righteousness, and with the mouth confession is made unto salvation.’ So you speak with your mouth what you believe in your heart. If you don’t believe the words you speak with your heart, it will be without effect. Then they are just ‘empty’ words. 33 You can have a thousand people repeat a prayer, but if they are not ‘aware’ that they should sincerely repent in their heart, they are just empty words that they are repeating. Repenting is a necessity to start up the new life. Once you repent, once you turn away and turn to Jesus, openly accept Him as your Lord and Savior, you receive new life. For repenting is not the life, but it leads to the life. Once you repent towards Jesus, you are born again. Jesus says in John 3:3, ‘Most assuredly, I say to you, unless one is born again, he cannot see the Kingdom of God.’ He ‘cannot see’ the Kingdom of God.","So what happens when you are born again that you can see the Kingdom of God all of a sudden? When we are in Christ, the Kingdom of God is inside of us: Luke 17:21: ‘nor will they say, “See here!” or “See there!” For indeed, the kingdom of God is within you.’ But as long as we are not yet ‘in Christ’, His Kingdom is also not inside of us. Then a different kingdom is in us: that of the darkness. We are born into darkness and when you are in darkness, you are blinded and you can’t see the Kingdom of God. But once you are born again, you are placed in the light. Colossians 1:13 says: ‘He has delivered us from the power of darkness and conveyed us into the kingdom of the Son of His love.’ So a transformation takes place, a transfer, an exchange. Jesus took your place on the cross, bore all of your sins. He bought you with His blood.","Peter 1:18-19 ‘Knowing that you were not redeemed with corruptible things, like silver or gold, from your aimless conduct received by tradition from your fathers, but with the precious blood of Christ, as of a lamb without blemish and without spot.’ REPENTANCE | 1.5 34 So if you come to Jesus now with a heart that sincerely repents, then complete forgiveness is your part and all your sins will be erased by His blood. Everything will be ‘remitted’ for you because that is what forgiven means. Your old, sinful nature will be taken out of you, banned, destroyed, and God’s Spirit places a new nature in you. He creates a new ‘inner’ man in you. 2 Corinthians 5:17 ‘Therefore, if anyone is in Christ, he is a new creation; old things have passed away; behold, all things have become new.’ You become something you never have been before.","And because of this, God’s Spirit can now come live inside you. You literally become a ‘temple’ of the Holy Spirit. You are now God’s. 1 Corinthians 6:19 ‘Or do you not know that your body is the temple of the Holy Spirit who is in you, whom you have from God, and you are not your own?’ The Holy Spirit can now be in you forever! John 14:17 ‘The Spirit of truth, whom the world cannot receive, because it neither sees Him nor knows Him; but you know Him, for He dwells with you and will be in you.’ Jesus and the Father can now be in you. John 14:23 ‘I and My Father will make Our home with him.’ Luke 17:21 ‘Nor will they say, “See here!” or “See there!” For indeed, the Kingdom of God is within you.’ The Kingdom of God is now within you! His fullness is now in you. Your nature literally is made new and because of that, you are equal to Jesus in your born-again spirit. Holy, pure and spotless.","Even if your sins were as scarlet, He washes them whiter than snow, He puts them away as far as the east is from the west and doesn’t remember them. The handwriting that was against you is nailed to the cross and that is why there is no condemnation for those who are in Christ Jesus. 35 - You ‘were’ darkness, but now you are light. - You ‘were’ lost, but now you are found. - You ‘were’ dead, but now you are alive. - You ‘were’ a slave, but now you are a son. - You ‘were’ blind, but now you can see! Now you can ‘see’ the Kingdom of God! And you can ‘enter’ the Kingdom! John 3:5 ‘Jesus answered, “Most assuredly, I say to you, unless one is born of water and the Spirit, he cannot enter the kingdom of God.”’ You are born again so you can enter it now. Hallelujah! That is the good news! That is the true Gospel! Amen? REPENTANCE | 1.5 36 1 Question: What is repenting?","Read: 2 Corinthians 5:17 ‘Therefore, if anyone is in Christ, he is a new creation; old things have passed away; behold, all things have become new.’ Question: What happens the first time you repent and accept Jesus as your Lord and Savior? 3 Question: After your repentance, can you repent more often? Are there people who have never repented as covered in this lesson, and would like to do that now? Then pray from your heart the prayer below or words to this effect: ‘Dear God, I come before you to acknowledge that I believe with my whole heart that Jesus is Your Son and that He died for me on the cross and paid for all my sins with His blood. I believe that You raised Jesus from the dead and that He lives now. Jesus, I accept You as my Lord and my Savior. I invite you into my life, cover me with Your blood and make me a new person."],"scriptureReferences":[],"reflectionPrompt":"What is one thing you need to understand or practice from Repentance?","quickCheck":{"question":"What is the best response to this lesson on Repentance?","answers":[{"id":"rush","label":"Rush to the next lesson without reflection"},{"id":"respond","label":"Reflect, pray, and take one faithful step"},{"id":"ignore","label":"Ignore it unless it feels easy"}],"correctAnswer":"respond","feedback":"Yes. The goal is not only to finish content, but to respond faithfully."},"notesPrompt":"Write one thought, question, or next step from Repentance.","completionMessage":"Good. You finished one One Basics step."},"placement":{"showInDiscover":true,"discoverShelf":"One Basics 1","discoverCardLabel":"Foundations","showInJourney":true,"moduleId":"stage_2_start_following","moduleTitle":"Start Following Jesus","lessonOrder":5,"sourcePage":31,"isCoreLesson":true},"recommendedNextStep":{"label":"Write one response and continue the path","type":"reflect","targetId":"book_one_basics_1_5_repentance_reflection"},"sharing":{"shareText":"This One Basics lesson helped me think about repentance.","shareImagePrompt":"Start Following Jesus One In Him share card for Repentance"},"admin":{"packageStatus":"ready","sourcePreApproved":true,"owner":"One In Him content team","lastUpdated":"2026-05-19","extractionStatus":"real_pdf_text_extracted","sourceRange":"One Basics 1.5"}},{"packageId":"pkg_one_basics_1_6_water_baptism","packageTitle":"One Basics 1.6: Water Baptism","packageType":"journey_lesson","packageGoal":"Help a learner understand water baptism as part of the Start Following Jesus path and respond with one clear next step.","sourceItems":["book_one_basics_1_6_water_baptism"],"primaryItemId":"book_one_basics_1_6_water_baptism","primaryMedium":"read","speakerOrAuthor":{"id":"author_johan_toet","name":"Johan Toet","role":"author"},"language":"en","contentType":"study_guide","length":{"seconds":0,"readingMinutes":9,"display":"9 min read"},"fallbackPlan":{"cannotWatch":"book_one_basics_1_6_water_baptism","cannotListen":"book_one_basics_1_6_water_baptism","cannotRead":"book_one_basics_1_6_water_baptism_audio_future"},"journeyStage":{"stage":2,"name":"Start Following Jesus","slug":"foundations","colour":"#f6ca35","moduleId":"stage_2_start_following"},"questionsAnswered":["What does water baptism mean for following Jesus?","How does Scripture shape my understanding of water baptism?","What is one practical response to water baptism?"],"topics":["Water Baptism","One Basics 1","Start Following Jesus","Discipleship"],"learnerSession":{"openingPrompt":"Take one clear step in water baptism.","contentSummary":"In the previous lesson, we covered repentance and being born again. How we can be born again by the Spirit and become a new creation in Christ Jesus because of this. This was the first of three steps that we must take to come into the ‘fullness’ that God has for us. There are three ‘baptisms’ that bring us into the fullness that God has for us. ‘First baptism’: Rebirth. The Holy Spirit baptizes you in Christ. 1 Corin...","readBody":["In the previous lesson, we covered repentance and being born again. How we can be born again by the Spirit and become a new creation in Christ Jesus because of this. This was the first of three steps that we must take to come into the ‘fullness’ that God has for us. There are three ‘baptisms’ that bring us into the fullness that God has for us. ‘First baptism’: Rebirth. The Holy Spirit baptizes you in Christ. 1 Corinthians 12:13 ‘For by one Spirit we were all baptized into one body—whether Jews or Greeks, whether slaves or free—and have all been made to drink into one Spirit.’ ‘Second baptism’: Water baptism. The disciple baptizes you in water. John 4:2 ‘Though Jesus Himself did not baptize, but His disciples.’ ‘Third baptism’: Baptism with the Holy Spirit. Jesus baptizes you in the Holy Spirit.","Matthew 3:11 ‘I indeed baptize you with water unto repentance, but He who is coming after me is mightier than I, whose sandals I am not worthy to carry. He will baptize you with the Holy Spirit and fire.’ Today we’re going to talk about the second baptism, water baptism. In Matthew 28:19-20 Jesus says, ‘Go therefore and make disciples of all the nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all things that I have commanded you.’ Go, teach them all, and baptize them. WATER BAPTISM Lesson 1. 6 39 That is clear language. In Acts 2:37 they asked Peter “What shall we do?” during the day of Pentecost in Jerusalem, after they had heard that Jesus was the Christ, the Redeemer, the Savior.","And his answer was: Acts 2:38 ‘Repent, and let every one of you be baptized in the name of Jesus Christ for the remission of sins; and you shall receive the gift of the Holy Spirit.’ That is clear language. So ‘every one of you’ should be baptized! And every one of you just means ‘everyone’ in Greek, Hebrew, English and Dutch. Three thousand people that heard this that day accepted those words with joy and they were baptized ‘immediately the same day’. Acts 2:41 ‘Then those who gladly received his word were baptized ; and that day about three thousand souls were added to them.’ Water baptism is very important and very powerful. It is the confirmation that you have changed identities. From darkness to light, from the position of a slave to one of a son. From the moment you say ‘yes’ to King Jesus, you are born again. Your old, sinful man dies in that moment.","Now you shouldn’t keep carrying that dead corpse on your shoulders, it will stink and it will rot. No, you should bury that old man. Have you already been ‘buried’? You see, water baptism neither more nor less than your funeral. You died with Christ. You are buried with Christ. You rise again with Christ. It is simply obedience in faith to the Word of God. Mark 16:16 says: ‘He who believes and is baptized will be saved; but he who does not believe will be condemned.’ WATER BAPTISM | 1.6 40 People often wonder: Should I be baptized in water to be saved? No. Your rebirth does not depend on water baptism. Water baptism testifies to your rebirth. It is an expression of the choice that you have made to follow Jesus and that you have died with Him.","Imagine that you accept Jesus today, there is no water immediately available and because of that you postpone being baptized until tomorrow, but tonight you die. Will you be ‘lost’ because you were not baptized? No. The moment you repent and accept Jesus you are ‘immediately saved’ and ‘immediately a new creation’. Your water baptism is a testimony of that to the outside world. And it makes a ‘statement’ in the heavenly realm: ‘I belong to King Jesus now!’ It is the next step in faith that you take when you have chosen to follow Jesus. But you should get baptized as soon as possible. Preferably immediately after your repentance, to bury that old man that way. Cornelius the Roman centurion and those who gathered together with him were baptized ‘immediately’. Acts 10:47-48 ‘Can anyone forbid water, that these should not be baptized who have received the Holy Spirit just as we have?","And he commanded them to be baptized in the name of the Lord.’ The Ethiopian eunuch was baptized ‘immediately’. Acts 8:36-38 ‘Now as they went down the road, they came to some water. And the eunuch said, “See, here is water. What hinders me from being baptized?” Then Philip said, “If you believe with all your heart, you may.” And he answered and said, “I believe that Jesus Christ is the Son of God.” So he commanded the chariot to stand still. And both Philip and the eunuch went down into the water, and he baptized him.’ The jailer that guarded Paul and Silas was baptized ‘immediately’. Acts 16:30-33 ‘And he brought them out and said, “Sirs, what must I do to be saved?” So they said, “Believe on the Lord Jesus Christ, and you will be saved, you and your household.” Then they spoke the word of the Lord to him and to all who were in his house.","And he took them the same hour of the night and washed their stripes. And immediately he and all his family were baptized.’ 41 So you shouldn’t break it up into parts by having months or sometimes years in between, that is not how the Word teaches it to us. ‘Yes, but I first have to have my life in order.’ Your life is in order once you say ‘yes’ to Jesus! The Bible teaches us that people got baptized immediately. So why should we do it differently? Even Jesus was baptized! Matthew 3:16-17 ‘When He had been baptized, Jesus came up immediately from the water; and behold, the heavens were opened to Him, and He saw the Spirit of God descending like a dove and alighting upon Him. And suddenly a voice came from heaven, saying, “This is My beloved Son, in whom I am well pleased.”’ We should just be obedient to the Word of God and it teaches us: ‘baptize immediately’.","When we obey, we will be sons and daughters in whom He is ‘well pleased’. How about the so-called ‘child baptism’? It doesn’t exist. There is no such thing as ‘child baptism’ in the Bible. Child baptism is not a replacement for circumcision, it is not a Biblical command and is therefore not ‘valid’. Your parents can’t decide for you if you do or don’t get baptized. It has to be your choice! The Bible teaches us to be baptized immediately after our ‘repentance’. A baby or child that is not conscious of good and evil cannot ‘repent’ at all yet. So, then they cannot ‘choose’ to be baptized and buried with Christ. Child baptism, so called, doesn’t save anybody and is not valid.","So if you were baptized as a child or baby but you now have a ‘living faith’: you have made a choice ‘yourself’ to follow Jesus and accept Him personally as your Lord and Savior, then this means that you still have to be baptized by ‘immersion’. Faith is the key, but without ‘works of faith’ it is a dead faith, so you have to ‘express your faith in deeds’, in actions, in your ‘walk and talk’, otherwise it is a dead and fruitless faith. WATER BAPTISM | 1.6 42 James 2:17-18 ‘Thus also faith by itself, if it does not have works, is dead. But someone will say, “You have faith, and I have works.” Show me your faith without your works, and I will show you my faith by my works.’ The next step after the ‘first baptism’, the one of your repentance and rebirth is the water baptism according to the Bible. And this one takes place ‘immediately’ after your repentance.","Acts 22:16 And now, what are you waiting for? Arise and be baptized! QUESTIONS 43 1 Question: Who baptizes with water baptism? A) Jesus B) The Holy Spirit C) The disciple 2 Question: When were people baptized, according to the Bible? A) After filling in a list of conditions B) After enrolling in a church C) Immediately after repentance 3 Read Acts 22:16 And now why are you waiting? Arise and be baptized! Reactions and discussion If there are people in the study group who have not been baptized by immersion, but want to do this: In the Netherlands we organize several One Events each year always with opportunities to be baptized in water, but you may also ‘baptize immediately’ where there is water. Answers in the back of the study guide WATER BAPTISM | 1. QUESTIONS With lesson 1. 6"],"scriptureReferences":[],"reflectionPrompt":"What is one thing you need to understand or practice from Water Baptism?","quickCheck":{"question":"What is the best response to this lesson on Water Baptism?","answers":[{"id":"rush","label":"Rush to the next lesson without reflection"},{"id":"respond","label":"Reflect, pray, and take one faithful step"},{"id":"ignore","label":"Ignore it unless it feels easy"}],"correctAnswer":"respond","feedback":"Yes. The goal is not only to finish content, but to respond faithfully."},"notesPrompt":"Write one thought, question, or next step from Water Baptism.","completionMessage":"Good. You finished one One Basics step."},"placement":{"showInDiscover":true,"discoverShelf":"One Basics 1","discoverCardLabel":"Foundations","showInJourney":true,"moduleId":"stage_2_start_following","moduleTitle":"Start Following Jesus","lessonOrder":6,"sourcePage":38,"isCoreLesson":true},"recommendedNextStep":{"label":"Write one response and continue the path","type":"reflect","targetId":"book_one_basics_1_6_water_baptism_reflection"},"sharing":{"shareText":"This One Basics lesson helped me think about water baptism.","shareImagePrompt":"Start Following Jesus One In Him share card for Water Baptism"},"admin":{"packageStatus":"ready","sourcePreApproved":true,"owner":"One In Him content team","lastUpdated":"2026-05-19","extractionStatus":"real_pdf_text_extracted","sourceRange":"One Basics 1.6"}},{"packageId":"pkg_one_basics_1_7_baptism_with_the_holy_spirit","packageTitle":"One Basics 1.7: Baptism with the Holy Spirit","packageType":"journey_lesson","packageGoal":"Help a learner understand baptism with the holy spirit as part of the Start Following Jesus path and respond with one clear next step.","sourceItems":["book_one_basics_1_7_baptism_with_the_holy_spirit"],"primaryItemId":"book_one_basics_1_7_baptism_with_the_holy_spirit","primaryMedium":"read","speakerOrAuthor":{"id":"author_johan_toet","name":"Johan Toet","role":"author"},"language":"en","contentType":"study_guide","length":{"seconds":0,"readingMinutes":16,"display":"16 min read"},"fallbackPlan":{"cannotWatch":"book_one_basics_1_7_baptism_with_the_holy_spirit","cannotListen":"book_one_basics_1_7_baptism_with_the_holy_spirit","cannotRead":"book_one_basics_1_7_baptism_with_the_holy_spirit_audio_future"},"journeyStage":{"stage":2,"name":"Start Following Jesus","slug":"foundations","colour":"#f6ca35","moduleId":"stage_2_start_following"},"questionsAnswered":["What does baptism with the holy spirit mean for following Jesus?","How does Scripture shape my understanding of baptism with the holy spirit?","What is one practical response to baptism with the holy spirit?"],"topics":["Holy Spirit","One Basics 1","Start Following Jesus","Discipleship"],"learnerSession":{"openingPrompt":"Take one clear step in baptism with the holy spirit.","contentSummary":"Today we are going to discuss: the baptism in the Holy Spirit. There is a lack of knowledge when it comes to the baptism in the Holy Spirit. Many people think they were baptized in the Holy Spirit when they came to faith, but in most cases they mean a different event. It is important that we know what it ‘really means’ to be baptized in the Holy Spirit. I hope to explore with you today how our lives will be transform...","readBody":["Today we are going to discuss: the baptism in the Holy Spirit. There is a lack of knowledge when it comes to the baptism in the Holy Spirit. Many people think they were baptized in the Holy Spirit when they came to faith, but in most cases they mean a different event. It is important that we know what it ‘really means’ to be baptized in the Holy Spirit. I hope to explore with you today how our lives will be transformed by the baptism in the Holy Spirit. There is a big difference between ‘receiving’ the Holy Spirit and the ‘baptism’ in the Holy Spirit, also known as the Holy Spirit that comes ‘over’ you. The moment we say ‘yes’ to Jesus with a sincere and repenting heart – which we talked about in the previous lessons – the Holy Spirit comes as the ‘resurrection power’ in us and it is He Who makes us into a new person.","Corinthians 5:17 Ephesians 2:1 ‘And you He made alive, who were dead in trespasses and sins.’ We ‘receive’ the Holy Spirit ‘in us’ in this way when we give ourselves to Jesus by repenting. The ‘function’ of the Holy Spirit ‘in you’ is that He takes away your old nature and makes you into a new person, equal to Jesus, 1 John 4:17. He seals the ‘new you’ so that no sin can come in anymore. And He becomes our guarantee. Ephesians 1:13-14 ‘In Him you also trusted, after you heard the word of truth, the gospel of your salvation; in whom also, having believed, you were sealed with the Holy Spirit of promise, who is the guarantee of our inheritance until the redemption of the purchased possession, to the praise of His glory.’ The Holy Spirit will be in you forever. BAPTISM WITH THE HOLY SPIRIT Lesson 1. BAPTISM WITH THE HOLY SPIRIT","46 John 14:16-17 ‘And I will pray the Father, and He will give you another Helper, that He may abide with you forever— the Spirit of truth, whom the world cannot receive, because it neither sees Him nor knows Him; but you know Him, for He dwells with you and will be in you.’ 1 Corinthians 6:19 ‘Or do you not know that your body is the temple of the Holy Spirit who is in you, whom you have from God, and you are not your own?’ Our body has become a ‘temple’ of the Holy Spirit and a few ‘characteristics’ of the Holy Spirit ‘in you’ are: • He convicts you of being God’s child. Romans 8:16 ‘The Spirit Himself bears witness with our spirit that we are children of God.’ • He helps you in your weaknesses. Romans 8:26 ‘Likewise the Spirit also helps in our weaknesses.’ • He comforts you.","John 14:16 (KJV) ‘...and He shall give you another Comforter, that He may abide with you forever.’ • He guides you into the truth. John 16:13 ‘However, when He, the Spirit of truth, has come, He will guide you into all truth.’ • He teaches you and reminds you. John 14:26 ‘But the Helper, the Holy Spirit, whom the Father will send in My name, He will teach you all things, and bring to your remembrance all things that I said to you.’ • He teaches you to be free. 2 Corinthians 3:17 (NIV) ‘Now the Lord is the Spirit; and where the Spirit of the Lord is, there is freedom.’ And there are quite a lot more functions of the Holy Spirit ‘in you’. This is all so that you can grow ‘inwardly’ as a child of God and can get to know Him better. Because of this, you can be led by Him more and more.","But apart from these functions of the Holy Spirit ‘in you’ there is also such a thing as the Holy Spirit ‘over’ you, or ‘on’ you. Often that is seen as one and the same thing, but it is not. 47 Let’s have a look at Jesus and His disciples and how He breathes new life into them after His resurrection. John 20:22 ‘And when He had said this, He breathed on them, and said to them, “Receive the Holy Spirit.”’ And He ‘breathed on them’ and said to them, “Receive the Holy Spirit”. In John 14:19 Jesus says the following: ‘A little while longer and the world will see Me no more, but you will see Me. Because I live, you will live also.’ I live, and you ‘will’ live. It suggests that they were not living at that moment. However, they were breathing, their heart was beating, so physically they were alive. So Jesus means something else here.","They hadn’t received the ‘life’ that God has for us and that is now made available through His death and resurrection yet. But the promise is that they ‘will’ receive. So the moment we read about in John 20:22 is the moment they came to new life, where they were born ‘again’! It is similar to God ‘breathing the breath of life’ into the nostrils of Adam and he became a living being. Genesis 2:7 ‘And the Lord God formed man of the dust of the ground, and breathed into his nostrils the breath of life; and man became a living being.’ Then it says in Acts 1 and in Luke 24:49 that they weren’t allowed to leave Jerusalem because they were to receive the promise of the Father. Acts 1:3-5 ‘To whom He also presented Himself alive after His suffering by many infallible proofs, being seen by them during forty days and speaking of the things pertaining to the kingdom of God.","And being assembled together with them, He commanded them not to depart from Jerusalem, but to wait for the Promise of the Father, “which,” He said, “you have heard from Me; for John truly baptized with water, but you shall be baptized with the Holy Spirit not many days from now.”’ But wait a minute! They already had the Holy Spirit, didn’t they? For He breathed on them and said, “Receive the Holy Spirit.” John 20:22 So from this we can conclude that the Holy Spirit ‘in you’ is a completely different event than the Holy Spirit ‘on you’. BAPTISM WITH THE HOLY SPIRIT | 1.7 48 Let’s look further at what Jesus says in Acts 1:6-8 (NIV): ‘Then they gathered around him and asked him, “Lord, are you at this time going to restore the kingdom to Israel?” He said to them: “It is not for you to know the times or dates the Father has set by his own authority.","But you will receive power when the Holy Spirit comes on you...”’ ‘But you will’ = a promise, to receive the ‘power’ of the Holy Spirit, that will come ‘on’ you. Not ‘in’ you, but ‘on’ you. Why will we receive this power? Acts 1:8 ‘You will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth.’ So this is the primary goal. Something will happen when we receive the ‘power’ over or on us! Let’s look at what will happen. Jesus is taken up into heaven and the disciples travel to Jerusalem and stay there praying in the upper room together with one accord, waiting for the promise of the Father. Acts 2:1-4 ‘When the Day of Pentecost had fully come, they were all with one accord in one place. And suddenly there came a sound from heaven, as of a rushing mighty wind, and it filled the whole house where they were sitting.","Then there appeared to them divided tongues, as of fire, and one sat upon each of them. And they were all filled with the Holy Spirit and began to speak with other tongues.’ The promise was: you will be My witnesses. Acts 2:5 ‘And there were dwelling in Jerusalem Jews, devout men, from every nation under heaven.’ Every nation under heaven. In Genesis 11 in Babel, everyone got scattered and their language became confused, but now through the Holy Spirit, the gospel was made available to the whole world. Everyone could hear them speak with tongues of fire in their own language in which they were born, about the mighty works of God. A memorable moment in history! Now that is a testimony!","Think about Peter, who first cried out without the Holy Spirit, without power: 49 Matthew 26:35 ‘Even if I have to die with You, I will not deny You!’ But he got scared, he counted his cost and denied Jesus three times! Mark 14:72 But when he received a tongue of fire, the power, the promise on him, look at what happened to that same Peter who was first scared to death. What courage he had all of a sudden! All the people who were in Jerusalem heard them speak in their own language in which they were born, about the mighty works of God. They were beside themselves and some even mockingly said: ‘They are full of sweet wine’. In other words: ‘Well, they are drunk’. Acts 2:12 Acts 2:14-21 ‘But Peter, standing up with the eleven, raised his voice and said to them, “Men of Judea and all who dwell in Jerusalem, let this be known to you, and heed my words."],"scriptureReferences":[],"reflectionPrompt":"What is one thing you need to understand or practice from Baptism with the Holy Spirit?","quickCheck":{"question":"What is the best response to this lesson on Baptism with the Holy Spirit?","answers":[{"id":"rush","label":"Rush to the next lesson without reflection"},{"id":"respond","label":"Reflect, pray, and take one faithful step"},{"id":"ignore","label":"Ignore it unless it feels easy"}],"correctAnswer":"respond","feedback":"Yes. The goal is not only to finish content, but to respond faithfully."},"notesPrompt":"Write one thought, question, or next step from Baptism with the Holy Spirit.","completionMessage":"Good. You finished one One Basics step."},"placement":{"showInDiscover":true,"discoverShelf":"One Basics 1","discoverCardLabel":"Foundations","showInJourney":true,"moduleId":"stage_2_start_following","moduleTitle":"Start Following Jesus","lessonOrder":7,"sourcePage":45,"isCoreLesson":true},"recommendedNextStep":{"label":"Write one response and continue the path","type":"reflect","targetId":"book_one_basics_1_7_baptism_with_the_holy_spirit_reflection"},"sharing":{"shareText":"This One Basics lesson helped me think about baptism with the holy spirit.","shareImagePrompt":"Start Following Jesus One In Him share card for Baptism with the Holy Spirit"},"admin":{"packageStatus":"ready","sourcePreApproved":true,"owner":"One In Him content team","lastUpdated":"2026-05-19","extractionStatus":"real_pdf_text_extracted","sourceRange":"One Basics 1.7"}},{"packageId":"pkg_one_basics_1_8_speaking_in_tongues","packageTitle":"One Basics 1.8: Speaking in Tongues","packageType":"journey_lesson","packageGoal":"Help a learner understand speaking in tongues as part of the Start Following Jesus path and respond with one clear next step.","sourceItems":["book_one_basics_1_8_speaking_in_tongues"],"primaryItemId":"book_one_basics_1_8_speaking_in_tongues","primaryMedium":"read","speakerOrAuthor":{"id":"author_johan_toet","name":"Johan Toet","role":"author"},"language":"en","contentType":"study_guide","length":{"seconds":0,"readingMinutes":8,"display":"8 min read"},"fallbackPlan":{"cannotWatch":"book_one_basics_1_8_speaking_in_tongues","cannotListen":"book_one_basics_1_8_speaking_in_tongues","cannotRead":"book_one_basics_1_8_speaking_in_tongues_audio_future"},"journeyStage":{"stage":2,"name":"Start Following Jesus","slug":"foundations","colour":"#f6ca35","moduleId":"stage_2_start_following"},"questionsAnswered":["What does speaking in tongues mean for following Jesus?","How does Scripture shape my understanding of speaking in tongues?","What is one practical response to speaking in tongues?"],"topics":["Holy Spirit","One Basics 1","Start Following Jesus","Discipleship"],"learnerSession":{"openingPrompt":"Take one clear step in speaking in tongues.","contentSummary":"Speaking in tongues is a gift of the Holy Spirit. 1 Corinthians 12:10-11 It is mainly given to us to build ourselves up in the Holy Spirit in order to be spiritually strengthened and have things revealed in the spirit. Jude 1:20 ‘But you, beloved, building yourselves up on your most holy faith, praying in the Holy Spirit.’ There are multiple forms of speaking in tongues. In this lesson, we will list them all. From th...","readBody":["Speaking in tongues is a gift of the Holy Spirit. 1 Corinthians 12:10-11 It is mainly given to us to build ourselves up in the Holy Spirit in order to be spiritually strengthened and have things revealed in the spirit. Jude 1:20 ‘But you, beloved, building yourselves up on your most holy faith, praying in the Holy Spirit.’ There are multiple forms of speaking in tongues. In this lesson, we will list them all. From the moment that we have received the baptism in the Holy Spirit, we have the capacity to speak in tongues. Acts 19:6 ‘And when Paul had laid hands on them, the Holy Spirit came upon them, and they spoke with tongues and prophesied.’ Tongues is a godly language that we don’t speak with our minds but with our spirits. This language of tongues is given to us so that we can bypass our minds, which is often full of noise, to make God great and to strengthen our faith.","In that way, we build ourselves up and we turn off the noise in our minds and we come in line with God and His Spirit. 1 Corinthians 14:14 ‘For if I pray in a tongue, my spirit prays, but my understanding is unfruitful.’ You can both pray in a tongue and pray with your mind at the same time. 1 Corinthians 14:15 ‘What is the conclusion then? I will pray with the spirit, and I will also pray with the understanding. I will sing with the spirit, and I will also sing with the understanding.’ When you come to God, you can first pray in tongues to get your mind in line with God’s truth. Then you can make God great with both your spirit and your mind and build yourself up in your most holy faith. SPEAKING IN TONGUES Lesson 1. SPEAKING IN TONGUES | 1. NOTES 56 Speak in tongues as much and as often as you can and you will notice that your faith life will get an enormous boost in all aspects!","In addition, there is also a form of tongues in which you receive the supernatural ability to speak in another language that you could not speak before. This was for example what happened in the book of Acts on the day of Pentecost. Acts 2:1-4 ‘When the Day of Pentecost had fully come, they were all with one accord in one place. And suddenly there came a sound from heaven, as of a rushing mighty wind, and it filled the whole house where they were sitting. Then there appeared to them divided tongues, as of fire, and one sat upon each of them. And they were all filled with the Holy Spirit and began to speak with other tongues, as the Spirit gave them utterance.’ In that moment they suddenly received the supernatural ability to speak to the people who were present there in their own language about the mighty works of God.","Acts 2:7-11 ‘Then they were all amazed and marveled, saying to one another, “Look, are not all these who speak Galileans? And how is it that we hear, each in our own language in which we were born? Parthians and Medes and Elamites, those dwelling in Mesopotamia, Judea and Cappadocia, Pontus and Asia, Phrygia and Pamphylia, Egypt and the parts of Libya adjoining Cyrene, visitors from Rome, both Jews and proselytes, Cretans and Arabs—we hear them speaking in our own tongues the wonderful works of God.”’ In 1 Corinthians 13:1 Paul says that we can speak in the language of people and of angels. What happened on the day of Pentecost was that they received the gift of tongues and that manifested itself in that moment in the speaking in the languages of people. In this way, they could spread the Gospel among all the nations under heaven. Acts 2:5-6 But this gift is not given to every believer.","We can all speak the language of angels. When we speak in the language of angels we don’t know what we are praying. 1 Corinthians 14:2 ‘For he who speaks in a tongue does not speak to men but to God, for no one under - stands him; however, in the spirit he speaks mysteries.’ This manifestation of the language of tongues is only meant for yourself. To build yourself up. This is not the language of tongues that we speak in church and can then interpret. 57 But that is another gift of the language of tongues. That is the gift of tongues. And the gift of the interpretation of tongues. 1 Corinthians 12:10 We will cover this in lesson 2.17 Gifts of the Spirit. Then an individual speaks in a tongue to build up the church and another can then interpret this. This is specifically meant for in church. That means where believers come together. 1 Corinthians 14:26-28 ‘How is it then, brethren?","Whenever you come together, each of you has a psalm, has a teaching, has a tongue , has a revelation, has an interpretation. Let all things be done for edification. If anyone speaks in a tongue, let there be two or at the most three, each in turn, and let one interpret. But if there is no interpreter, let him keep silent in church, and let him speak to himself and to God.’ Not everyone can speak in the tongues of people or in the tongue meant for the church, these are given to some. But every born-again Christian who is baptized with the Holy Spirit can speak in the language of angels and can apply this non-stop in his personal life. If you have never spoken in this language of tongues before, you can practice this today with each other. If you don’t know for sure if you are baptized in the Holy Spirit, let someone pray for you and you should declare to God that you desire this.","Ask Him for His promise. Ask Jesus to baptize you with the Holy Spirit. And receive this immediately in faith without doubting if you must feel it first to know for sure. It is so because God promises this in His Word. Luke 11:13 ‘If you then, being evil, know how to give good gifts to your children, how much more will your heavenly Father give the Holy Spirit to those who ask Him!’ Ask Him and receive it in faith and then just start worshiping God together. See if the Holy Spirit wants to take over the worship with tongues. Stop thinking about ‘what am I doing’ and start worshiping Him with your mind, which means hearing yourself thinking what you want to say to God. In the meantime, let new sounds come out of your mouth. Just let them come. SPEAKING IN TONGUES | 1.8 58 It might feel a bit awkward, but keep holding on.","You will see that after five or ten minutes streams of living water start coming out of your inner person and you almost can’t stop praying in tongues. Enjoy it, it is your time with God. Amen. 59 1 Question: What is speaking in tongues? A) A godly language B) The language of angels C) A gift of the Spirit D) All of A, B, and C 2 Question: Who can pray in tongues? A) Only those who are called B) Only those who are a child of God C) Only those who are baptized with the Holy Spirit 3 Question: Speaking in tongues is: A) To build yourself up B) To receive revelation C) To praise God D) All of A, B, and C Reactions and discussion Answers in the back of the study guide SPEAKING IN TONGUES | 1. QUESTIONS With lesson 1. 8"],"scriptureReferences":[],"reflectionPrompt":"What is one thing you need to understand or practice from Speaking in Tongues?","quickCheck":{"question":"What is the best response to this lesson on Speaking in Tongues?","answers":[{"id":"rush","label":"Rush to the next lesson without reflection"},{"id":"respond","label":"Reflect, pray, and take one faithful step"},{"id":"ignore","label":"Ignore it unless it feels easy"}],"correctAnswer":"respond","feedback":"Yes. The goal is not only to finish content, but to respond faithfully."},"notesPrompt":"Write one thought, question, or next step from Speaking in Tongues.","completionMessage":"Good. You finished one One Basics step."},"placement":{"showInDiscover":true,"discoverShelf":"One Basics 1","discoverCardLabel":"Foundations","showInJourney":true,"moduleId":"stage_2_start_following","moduleTitle":"Start Following Jesus","lessonOrder":8,"sourcePage":55,"isCoreLesson":true},"recommendedNextStep":{"label":"Write one response and continue the path","type":"reflect","targetId":"book_one_basics_1_8_speaking_in_tongues_reflection"},"sharing":{"shareText":"This One Basics lesson helped me think about speaking in tongues.","shareImagePrompt":"Start Following Jesus One In Him share card for Speaking in Tongues"},"admin":{"packageStatus":"ready","sourcePreApproved":true,"owner":"One In Him content team","lastUpdated":"2026-05-19","extractionStatus":"real_pdf_text_extracted","sourceRange":"One Basics 1.8"}},{"packageId":"pkg_one_basics_1_9_identity_in_christ","packageTitle":"One Basics 1.9: Identity in Christ","packageType":"journey_lesson","packageGoal":"Help a learner understand identity in christ as part of the Start Following Jesus path and respond with one clear next step.","sourceItems":["book_one_basics_1_9_identity_in_christ"],"primaryItemId":"book_one_basics_1_9_identity_in_christ","primaryMedium":"read","speakerOrAuthor":{"id":"author_johan_toet","name":"Johan Toet","role":"author"},"language":"en","contentType":"study_guide","length":{"seconds":0,"readingMinutes":8,"display":"8 min read"},"fallbackPlan":{"cannotWatch":"book_one_basics_1_9_identity_in_christ","cannotListen":"book_one_basics_1_9_identity_in_christ","cannotRead":"book_one_basics_1_9_identity_in_christ_audio_future"},"journeyStage":{"stage":2,"name":"Start Following Jesus","slug":"foundations","colour":"#f6ca35","moduleId":"stage_2_start_following"},"questionsAnswered":["What does identity in christ mean for following Jesus?","How does Scripture shape my understanding of identity in christ?","What is one practical response to identity in christ?"],"topics":["Identity","One Basics 1","Start Following Jesus","Discipleship"],"learnerSession":{"openingPrompt":"Take one clear step in identity in christ.","contentSummary":"Now that we have come into the ‘fullness’ through the rebirth, the baptism in water, and the baptism in the Holy Spirit, our identity is ‘completely’ changed. Today we’re going to talk about how exactly that has come to pass and what that means for you now. John 3:3 and 5 3. ‘Most assuredly, I say to you, unless one is born again, he cannot see the kingdom of God.’ 5. ‘Most assuredly, I say to you, unless one is born...","readBody":["Now that we have come into the ‘fullness’ through the rebirth, the baptism in water, and the baptism in the Holy Spirit, our identity is ‘completely’ changed. Today we’re going to talk about how exactly that has come to pass and what that means for you now. John 3:3 and 5 3. ‘Most assuredly, I say to you, unless one is born again, he cannot see the kingdom of God.’ 5. ‘Most assuredly, I say to you, unless one is born of water and the Spirit, he cannot enter the kingdom of God.’ The Word teaches us that there are two ‘spiritual’ kingdoms, one ‘rich’ in darkness and a Kingdom of God. In Matthew 12:22 we read that Jesus drives out a demon. The Pharisees accuse Him of doing this by Beelzebub, the ruler of demons.","Jesus knows their thoughts and answers in Matthew 12:25-26: ‘Every kingdom divided against itself is brought to desolation, and every city or house divided against itself will not stand. If Satan casts out Satan, he is divided against himself. How then will his kingdom stand?’ In this passage, He indicates that ‘Satan’ has a kingdom. Matthew 12:28 ‘But if I cast out demons by the Spirit of God, surely the kingdom of God has come upon you.’ Here in this verse, Jesus is speaking about the Kingdom of God. So there are two spiritual Kingdoms. One of the darkness and one of the light, the empire of Satan and the Kingdom of God. You can only ‘see’ and ‘enter’ the Kingdom of God when you are ‘born again’. So as long as you are still in ‘darkness’, you cannot see it or enter in. Why not? IDENTITY IN CHRIST Lesson 1. IDENTITY IN CHRIST | 1. NOTES 62 Because you’re still in darkness.","You’re still ‘in’ the kingdom of darkness. Before Christ, before your rebirth, you lived in sin and you weren’t even aware of it. You were under the power of the god of this world. Bound in darkness as a slave of sin, you were subject to the evil one. And you didn’t even know it. Because you lived in a ‘spiritual darkness’. But now something has changed. Colossians 1:13 ‘He has delivered us from the power of darkness and conveyed us into the kingdom of the Son of His love.’ Now you are placed in His light. Now you can see and enter into the Kingdom of God. Now you are made ‘capable’ to dwell in the Kingdom of God. 2 Corinthians 5:17 ‘Therefore, if anyone is in Christ, he is a new creation; old things have passed away; behold, all things have become new.’ You were lost, but now you are found. You were bound, but now you are free. You were dead, but now you are alive.","You were sin, but now you are the righteousness of God. You were a slave, but now you are a son. You were darkness, but now you are light. What fantastic news this is! You are made completely new, holy, pure, and spotless. The question is ‘where’ did you become that? We are a threefold being. As God is Father, Son, and Holy Spirit. He is a Trinity, but He is one. So we have a spirit, a soul, and a body. A threefold being, but one. 1 Thessalonians 5:23 ‘Now may the God of peace Himself sanctify you completely; and may your whole spirit, soul, and body be preserved blameless at the coming of our Lord Jesus Christ.’ 63 Your ‘flesh’ is the ‘body’. If you look at your outward appearance, not much has changed. Your body is still the same after being born again. Your ‘soul’ is your ‘sensory’ person. That which you feel, hear, taste, smell, see, that forms your mind. That is your soul.","That is still the same after being born again. What has been made completely new is your ‘spirit’. It ‘was’ dead, it ‘was’ in darkness, it ‘was’ infected with sin, it ‘was’ your sinful nature. But now you are born ‘again’! You have now received the ‘nature’ of Christ. Your bornagain spirit is identical to the nature of Jesus. God now sees you as ‘complete’ in Christ. Colossians 2:10 ‘And you are complete in Him, who is the head of all principality and power.’ So that deals with insecurity, rejection, and the bad opinion of others and your own messed up image of yourself. If He says that you are ‘complete’, then that’s what you are! Amen? For Jesus is also complete, isn’t He? 1 John 4:17 ‘As He is, so are we in this world.’ So don’t let anyone convince you that you are ‘not good enough’ yet and have to do all kinds of things to be loved by the Father.","Don’t tell yourself that there are still loads of things wrong with you: you are complete! Go and say it to yourself: I am complete in Christ! I am a beloved child of God! Amen! Dear friends, something has radically changed, we are now ‘born of God’. After the ‘fall’ of Adam and Eve, who were ‘born of God’ themselves but died spiritually through the fall, people were only born of blood, flesh and the will of man. Born biologically and naturally, only flesh and blood. Not born of God but of man. IDENTITY IN CHRIST | 1.9 64 John 1:12-13 ‘But as many as received Him [Jesus], to them He gave the right to become children of God, to those who believe in His name: who were born, not of blood, nor of the will of the flesh, nor of the will of man, but of God.’ We now aren’t ‘natural, fleshly’ children anymore but ‘supernatural, spiritual’ children!","And because we are now born of God and thus have become children of God, you should no longer ‘see’ yourself as that old person you were before Christ. He doesn’t live anymore, he is dead. Galatians 2:20 ‘I have been crucified with Christ; it is no longer I who live, but Christ lives in me.’ You ‘were’ a slave of sin and you ‘were’ a slave of the god of this world. But now you no longer are a slave, but a son. Galatians 4:6-7 ‘And because you are sons, God has sent forth the Spirit of His Son into your hearts, crying out, “Abba, Father!” Therefore you are no longer a slave but a son, and if a son, then an heir of God through Christ.’ You have now received the spirit of ‘sonship’ that calls out ‘ABBA! Father!’ You are now a son or daughter of God, that’s why you’re calling out ‘Father’ to Him! That is who you are now, it is your true identity in Christ. A beloved child of the Most High!","You now belong to God, you are the bride of Christ. As far as your identity is concerned, it is not important anymore what you do or what you have, which is the thing most people let their identity depend on. As far as you are concerned, your ‘true identity’ doesn’t depend on what you ‘have’ or on what you ‘do’, but on who you ‘are’. You ‘are’ a child of God now! A child of the King! That is great news! I am not what people say about or think of me. I am also not what I think of myself anymore, if what I think is not in line with the Word of God. I am what God says I am. Amen? 65 1 Read: John 1:12 ‘But as many as received Him, to them He gave the right to become children of God, to those who believe in His name.’ According to this verse we can now be born of God. Question: What is born of God the moment this happens?","A) Body B) Soul C) Spirit 2 Read: 1 John 3:1 ‘Behold what manner of love the Father has bestowed on us, that we should be called children of God!’ According to this verse we are now children of God. Question: So this is now our: A) Nature B) Identity C) Power 3 Read: Colossians 2:10 ‘And you are complete in Him, who is the head of all principality and power.’ Question: What are we now in Him, according to this verse? Reactions and discussion Answers in the back of the study guide IDENTITY IN CHRIST | 1. QUESTIONS With lesson 1. 9"],"scriptureReferences":[],"reflectionPrompt":"What is one thing you need to understand or practice from Identity in Christ?","quickCheck":{"question":"What is the best response to this lesson on Identity in Christ?","answers":[{"id":"rush","label":"Rush to the next lesson without reflection"},{"id":"respond","label":"Reflect, pray, and take one faithful step"},{"id":"ignore","label":"Ignore it unless it feels easy"}],"correctAnswer":"respond","feedback":"Yes. The goal is not only to finish content, but to respond faithfully."},"notesPrompt":"Write one thought, question, or next step from Identity in Christ.","completionMessage":"Good. You finished one One Basics step."},"placement":{"showInDiscover":true,"discoverShelf":"One Basics 1","discoverCardLabel":"Foundations","showInJourney":true,"moduleId":"stage_2_start_following","moduleTitle":"Start Following Jesus","lessonOrder":9,"sourcePage":61,"isCoreLesson":true},"recommendedNextStep":{"label":"Write one response and continue the path","type":"reflect","targetId":"book_one_basics_1_9_identity_in_christ_reflection"},"sharing":{"shareText":"This One Basics lesson helped me think about identity in christ.","shareImagePrompt":"Start Following Jesus One In Him share card for Identity in Christ"},"admin":{"packageStatus":"prepared","sourcePreApproved":true,"owner":"One In Him content team","lastUpdated":"2026-05-19","extractionStatus":"real_pdf_text_extracted","sourceRange":"One Basics 1.9"}},{"packageId":"pkg_one_basics_1_10_dedication","packageTitle":"One Basics 1.10: Dedication","packageType":"journey_lesson","packageGoal":"Help a learner understand dedication as part of the Start Following Jesus path and respond with one clear next step.","sourceItems":["book_one_basics_1_10_dedication"],"primaryItemId":"book_one_basics_1_10_dedication","primaryMedium":"read","speakerOrAuthor":{"id":"author_johan_toet","name":"Johan Toet","role":"author"},"language":"en","contentType":"study_guide","length":{"seconds":0,"readingMinutes":8,"display":"8 min read"},"fallbackPlan":{"cannotWatch":"book_one_basics_1_10_dedication","cannotListen":"book_one_basics_1_10_dedication","cannotRead":"book_one_basics_1_10_dedication_audio_future"},"journeyStage":{"stage":2,"name":"Start Following Jesus","slug":"foundations","colour":"#f6ca35","moduleId":"stage_2_start_following"},"questionsAnswered":["What does dedication mean for following Jesus?","How does Scripture shape my understanding of dedication?","What is one practical response to dedication?"],"topics":["Dedication","One Basics 1","Start Following Jesus","Discipleship"],"learnerSession":{"openingPrompt":"Take one clear step in dedication.","contentSummary":"In previous lessons, we talked about how you can come into the fullness of God. By repentance – rebirth, baptism in water, and the baptism with the Holy Spirit. If you have taken these steps, then you have not only believed what the Word says, but you have also acted on it. That is amazing and completely after God’s heart. You have made a conscious decision to give your life to Jesus. A choice to follow Him and make ...","readBody":["In previous lessons, we talked about how you can come into the fullness of God. By repentance – rebirth, baptism in water, and the baptism with the Holy Spirit. If you have taken these steps, then you have not only believed what the Word says, but you have also acted on it. That is amazing and completely after God’s heart. You have made a conscious decision to give your life to Jesus. A choice to follow Him and make Him Lord of your life. What a party there is in heaven because of you! Of course it is amazing that simply by ‘believing’ and ‘acting’ on what the Word says, we have received everything that the Lord has established for us by ‘grace’ through His death and His resurrection. The step that follows is that we must learn to fully and completely ‘dedicate’ our life to Him. To trust Him fully. That is also what Jesus asks of us!","It doesn’t make much sense to just be ‘saved’ and then not follow Him as Master, to not let Him be Lord in all aspects of your life. To not be a disciple. It misses its goal if you aren’t planning on walking as a disciple of Jesus. Then you miss the most important part of why you are saved. You are not only saved to be in heaven forever and that your sins are forgiven. No, you’re saved so that you can make the ‘difference’, so that you can shine His light. So that you can be His ‘hands and feet’ here on earth, so that you can be His ambassador and establish the Kingdom here on earth in His name. You are no longer your own, you are His. You are His bride, He bought you at a price. Not just with ‘corruptible’ things, but with His precious blood that He poured out on the altar of the Living God. DEDICATION Lesson 1. DEDICATION","68 1 Peter 1:18-19 ‘Knowing that you were not redeemed with corruptible things, like silver or gold, from your aimless conduct received by tradition from your fathers, but with the precious blood of Christ, as of a lamb without blemish and without spot.’ 1 Corinthians 6:20 ‘For you were bought at a price; therefore glorify God in your body and in your spirit, which are God’s.’ Now you belong to the Most High. You are not supposed to live for ‘yourself’ because you have died and were buried, remember? Your old person is dead and you no longer live, but Christ lives in you. Galatians 2:20 The only reason why we should still be living here on earth is Jesus. To live out His will in our lives. So that the Father can be glorified in our lives. We should no longer live for ourselves. No longer my will, but His will. I should become less, He however should become more.","Matthew 16:25 ‘For whoever desires to save his life will lose it, but whoever loses his life for My sake will find it.’ When you choose to lay your life on the altar before the Lord, you will find the super - natural life. The life that He already poured out into you when you were born again. In Luke 14:33, He says, ‘So likewise, whoever of you does not forsake all that he has cannot be My disciple.’ That means no more and no less than that Jesus needs to take the very first place in your life, above your family, your children, your partner, your job, your possessions, and especially above yourself, He should be above ‘everything’. He has your best interests at heart, but we must ‘trust’ Him completely and fully ‘dedicate’ ourselves to Him. Otherwise you are not a real ‘disciple’ of the Master. Jesus says: follow Me, learn from Me, do as I do, walk as I walk and act the way I act.","I am trustworthy and I have your best interests at heart! We must sit and count the cost. To decide if we can or cannot fully serve Him. It is a very conscious decision to lay your life on the altar for the Lord. It is a conscious decision every day again and again. ‘Here I am Lord, I give myself to You.’ 69 He went ‘all in’, will you also go ‘all in’? Luke 14:28-30 ‘For which of you, intending to build a tower, does not sit down first and count the cost, whether he has enough to finish it— lest, after he has laid the foundation, and is not able to finish, all who see it begin to mock him, saying, “This man began to build and was not able to finish?”’ You just have to be sure that now that you have chosen to follow Him, you will also really ‘live’ for Him. So that your actions glorify God through you.","John 15:8 ‘By this My Father is glorified, that you bear much fruit; so you will be My disciples.’ So that His name is not put to shame because you ‘say’ that Jesus has saved and delivered you, but you then continue living the same way as your next-door neighbor who doesn’t believe. That is a bad testimony. It is correct, we all go through a growing phase in which we sometimes still make mistakes. That is not what I’m talking about. God sees our hearts. Make sure that your heart and your focus are on Jesus and doing His will. He must be central in everything you do; people should see that you no longer are the same, that you belong to God now. You are no longer your own, you are supposed to completely entrust your life to Him, with everything you are and all that you have. He will take care of you, this way you will live the life that you were always meant for.","Then you will ‘find’ the true life. It is no punishment to follow Him; it is an honor! Your life wasn’t complete before Christ, otherwise you wouldn’t have needed Him. He has saved you from the curse of the law and the power of sin, saved you from the darkness, saved you from the emptiness within you that you consciously or unconsciously had. Would you not trust Him with everything, with your whole life? With all your heart, with all your soul and with all your mind? It is His first commandment: Matthew 22:37 ‘Jesus said to him, “You shall love the Lord your God with all your heart, with all your soul, and with all your mind.”’ DEDICATION | 1.10 70 It is a process. It is as in a relationship, you must invest time in the other person and if you do, you will get to know them better and better and you will trust each other completely. Then you give yourselves completely to each other.","You trust the other person more and more because he or she has proven to be faithful. God is always faithful. He is really to be trusted and is worth all of our love. He has the best for us. During your walk with Him, you will discover more and more that dedicating your life to God, giving King Jesus first place in your life is not tough and hard, but a true joy! He is worth ‘living for’, since He decided you were worth ‘dying for’. Amen? 71 1 Read: Luke 14:33 ‘So likewise, whoever of you does not forsake all that he has cannot be My disciple.’ Question: What does Jesus mean by leaving everything you have behind? 2 Read: Matthew 16:25 ‘For whoever desires to save his life will lose it, but whoever loses his life for My sake will find it.’ Question: What life will we find?","Read Romans 12:1 ‘I beseech you therefore, brethren, by the mercies of God, that you present your bodies a living sacrifice, holy, acceptable to God, which is your reasonable service.’ Question: What is our reasonable service? Reactions and discussion Answers in the back of the study guide DEDICATION | 1. QUESTIONS With lesson 1. 10"],"scriptureReferences":[],"reflectionPrompt":"What is one thing you need to understand or practice from Dedication?","quickCheck":{"question":"What is the best response to this lesson on Dedication?","answers":[{"id":"rush","label":"Rush to the next lesson without reflection"},{"id":"respond","label":"Reflect, pray, and take one faithful step"},{"id":"ignore","label":"Ignore it unless it feels easy"}],"correctAnswer":"respond","feedback":"Yes. The goal is not only to finish content, but to respond faithfully."},"notesPrompt":"Write one thought, question, or next step from Dedication.","completionMessage":"Good. You finished one One Basics step."},"placement":{"showInDiscover":true,"discoverShelf":"One Basics 1","discoverCardLabel":"Foundations","showInJourney":true,"moduleId":"stage_2_start_following","moduleTitle":"Start Following Jesus","lessonOrder":10,"sourcePage":67,"isCoreLesson":true},"recommendedNextStep":{"label":"Write one response and continue the path","type":"reflect","targetId":"book_one_basics_1_10_dedication_reflection"},"sharing":{"shareText":"This One Basics lesson helped me think about dedication.","shareImagePrompt":"Start Following Jesus One In Him share card for Dedication"},"admin":{"packageStatus":"prepared","sourcePreApproved":true,"owner":"One In Him content team","lastUpdated":"2026-05-19","extractionStatus":"real_pdf_text_extracted","sourceRange":"One Basics 1.10"}},{"packageId":"pkg_one_basics_1_11_dead_to_sin","packageTitle":"One Basics 1.11: Dead to Sin","packageType":"journey_lesson","packageGoal":"Help a learner understand dead to sin as part of the Start Following Jesus path and respond with one clear next step.","sourceItems":["book_one_basics_1_11_dead_to_sin"],"primaryItemId":"book_one_basics_1_11_dead_to_sin","primaryMedium":"read","speakerOrAuthor":{"id":"author_johan_toet","name":"Johan Toet","role":"author"},"language":"en","contentType":"study_guide","length":{"seconds":0,"readingMinutes":13,"display":"13 min read"},"fallbackPlan":{"cannotWatch":"book_one_basics_1_11_dead_to_sin","cannotListen":"book_one_basics_1_11_dead_to_sin","cannotRead":"book_one_basics_1_11_dead_to_sin_audio_future"},"journeyStage":{"stage":2,"name":"Start Following Jesus","slug":"foundations","colour":"#f6ca35","moduleId":"stage_2_start_following"},"questionsAnswered":["What does dead to sin mean for following Jesus?","How does Scripture shape my understanding of dead to sin?","What is one practical response to dead to sin?"],"topics":["Foundations","One Basics 1","Start Following Jesus","Discipleship"],"learnerSession":{"openingPrompt":"Take one clear step in dead to sin.","contentSummary":"Today we are going to talk about sin. When we weren’t in Christ yet we had a ‘sinful nature’. We were born ‘naturally’ of blood, flesh, and the will of man. We were born of the ‘corruptible’ seed of Adam and Eve. We were born in darkness and by nature had a ‘sinful nature’ when we were born to this earth and because of this we lived in sin. You act according to your ‘nature’. If you say to a dog, ‘Don’t bark.’ It wil...","readBody":["Today we are going to talk about sin. When we weren’t in Christ yet we had a ‘sinful nature’. We were born ‘naturally’ of blood, flesh, and the will of man. We were born of the ‘corruptible’ seed of Adam and Eve. We were born in darkness and by nature had a ‘sinful nature’ when we were born to this earth and because of this we lived in sin. You act according to your ‘nature’. If you say to a dog, ‘Don’t bark.’ It will still bark, for it is in his nature. If you say to a sinner, ‘Don’t sin.’ Then he will still sin, for it is in his nature. It is something that is ‘in’ man. Romans 7:14-17 ‘For we know that the law is spiritual, but I am carnal [blood, flesh, will of man, sinful nature], sold under sin. For what I am doing, I do not understand [darkness]. For what I will to do, that I do not practice; but what I hate, that I do.","If, then, I do what I will not to do, I agree with the law that it is good. [For the law brought out sin in us so that we would know that we are exceedingly sinful. Romans 7:13] But now, it is no longer I who do it, but sin that dwells in me.’ Paul says that it is the sin that dwells in us that causes us to sin, even if we wouldn’t want to, we are its slaves and have ‘no power to say no’. It is ‘impossible’ for a sinner not to sin. There is no person on this earth who has never sinned or can conquer it in their own power. DEAD TO SIN Lesson 1. DEAD TO SIN | 1. NOTES 74 Romans 3:9-11 ‘What then? Are we better than they? Not at all. For we have previously charged both Jews and Greeks that they are all under sin. As it is written: “There is none righteous, no, not one; there is none who understands; there is none who seeks after God.”’ Nobody is free from sin.","Not the pope, not the president, not your father, not you, nobody is free from sin. Why is that? Because of the ‘sinful nature’. It is what you are infected with since the day you were born. It is who you are, your identity without Jesus in your life is ‘sinner’. We don’t like hearing that but it is the reality. It is never what God wanted and that’s why He gave us a way out. Jesus the Christ. John 14:6 ‘Jesus said to him, “I am the way, the truth, and the life. No one comes to the Father except through Me.”’ And we have taken this ‘way out’! Amen? Now something significant has changed for you! Through your death and resurrection in Christ, you died to that old person and are consequently no longer obligated to live like that old person! Romans 7:1-6 ‘Or do you not know, brethren (for I speak to those who know the law), that the law has dominion over a man as long as he lives?","For the woman who has a husband is bound by the law to her husband as long as he lives. [We are bound by the law and by sin as long as we live.] But if the husband dies, she is released from the law of her husband. [When we die with Christ, we are released of the law and are made free of the power of sin.] So then if, while her husband lives, she marries another man, she will be called an adulteress; but if her husband dies, she is free from that law, so that she is no adulteress, though she has married another man. Therefore, my brethren, you also have become dead to the law through the body of Christ, that you may be married to another—to Him who was raised from the dead, that we should bear fruit to God.","[We become the bride of King Jesus.] For when we were in the flesh [not yet converted, and slaves of the god of this world], the sinful passions which were aroused by the law were at work in our members to bear fruit to death. But now we have been delivered from the law, having died to what we were held by, so that we should serve in the newness of the Spirit and not in the oldness of the letter.’ 75 You are now dead to sin! Romans 6:6-7 ‘Knowing this, that our old man was crucified with Him, that the body of sin might be done away with, that we should no longer be slaves of sin. For he who has died has been freed from sin.’ When you said ‘yes’ to King Jesus, the resurrection power of the Holy Spirit in you came and took that sinful nature out of you. He ripped it out in one go and raised you up to be a ‘new person’ who is one in Christ.","Ephesians 1:19-20 ‘What is the exceeding greatness of His power toward us who believe, according to the working of His mighty power which He worked in Christ when He raised Him from the dead and seated Him at His right hand in the heavenly places…’ We have been raised up out of the dead by the same resurrection power that raised Jesus from the dead, raised up out of that darkness into the light, raised up from slavery into sonship. It made us free from the law and from the power of sin. That old person is quite dead! 1 Peter 2:24 says that we, having ‘died to sin’, should live for righteousness. 2 Corinthians 5:17 ‘Therefore, if anyone is in Christ, he is a new creation; old things have passed away; behold, all things have become new.’ We are a new person! And this new person is not subject to sin, not to darkness, not to Satan, but to the living God.","We now belong to ‘Another’: Christ our Bridegroom! Hallelujah! We now have His nature. We are now righteous to God. You are now holy, pure, and spotless. You are not a ‘poor sinner’ anymore! Ephesians 2:1 ‘And you He [the Holy Spirit] made alive with Him [Christ], who were dead in trespasses and sins.’ We were subject to Satan and sin as slaves. Ephesians 2:2-6 But now we have been snatched away from this present, evil world and have become ‘citizens of heaven’. You are now free from sin in the spirit (we have talked about this: spirit, soul, and body). You now have the nature of God and God cannot sin! DEAD TO SIN | 1.11 76 Your old, sinful nature is ‘banished’. So not only are your sins all forgiven, no, your whole sinful nature is completely wiped out, eradicated, destroyed, dissolved, deceased! Hallelujah!","The new person that you are in Christ now is ‘sealed’ by the Holy Spirit, so that sin cannot enter in. Ephesians 1:13 ‘In Him you also, having believed, were sealed with the Holy Spirit of promise.’ Sin can’t enter into that new person now; he is immune and dead to sin. You are now (spirit) born of God and you can’t sin with that new person. That new person doesn’t think about sin, doesn’t want to sin and can’t sin. That new person is perfect in Christ. That new person is born of an incorruptible seed. 1 Peter 1:23 ‘having been born again, not of corruptible seed but incorruptible, through the word of God which lives and abides forever.’ In the beginning, we were born of blood, flesh, and the will of man, remember? ‘Natural, fleshly children’. Of a ‘corruptible’ seed. But now we are born of an incorruptible seed. We are now born of God.","And that ‘incorruptible seed’ (the new person) can’t sin! 1 John 3:9 ‘Whoever has been born of God does not sin, for His [incorruptible] seed remains in him; and he cannot sin, because he [new person] has been born of God.’ That really is fantastic, what a powerful truth. How beautiful it is to come to understand this! Your new person cannot sin. He is dead to sin! That means that sin has ‘zero’ influence on that new person. Amen? Having said all that, this ‘doesn’t’ mean, and here is where many people get it wrong, that you never make mistakes again! When you proclaim this good news, people really have problems believing this, because they look at their lives and say, 77 ‘But I still make mistakes, I still sin sometimes.’ Newsflash! We all still make mistakes and we all sin once in a while! The big difference is: You don’t want to sin anymore!","Sometimes we say something we actually shouldn’t say anymore, sometimes we do things we actually shouldn’t do anymore. The moment you did it or said it, you immediately think, ‘I shouldn’t have said or done that.’ You immediately realize, this isn’t who I am anymore, this doesn’t belong to me anymore. In your ‘heart’ you don’t want to do the things that you know really don’t belong to you anymore. You don’t wake up happily in the morning and say, ‘Today I’m going to have a nice day of living in sin.’ Still you make mistakes sometimes. But God sees your heart; He does not hold it against you. It’s important to understand that if you make a mistake, if you commit a sin, that this isn’t your new person (spirit) that sins. Because it cannot sin. It was your flesh, your sensory person. You need to renew your mind with the Word of God (which we will talk about in the coming lessons)."],"scriptureReferences":[],"reflectionPrompt":"What is one thing you need to understand or practice from Dead to Sin?","quickCheck":{"question":"What is the best response to this lesson on Dead to Sin?","answers":[{"id":"rush","label":"Rush to the next lesson without reflection"},{"id":"respond","label":"Reflect, pray, and take one faithful step"},{"id":"ignore","label":"Ignore it unless it feels easy"}],"correctAnswer":"respond","feedback":"Yes. The goal is not only to finish content, but to respond faithfully."},"notesPrompt":"Write one thought, question, or next step from Dead to Sin.","completionMessage":"Good. You finished one One Basics step."},"placement":{"showInDiscover":true,"discoverShelf":"One Basics 1","discoverCardLabel":"Foundations","showInJourney":true,"moduleId":"stage_2_start_following","moduleTitle":"Start Following Jesus","lessonOrder":11,"sourcePage":73,"isCoreLesson":true},"recommendedNextStep":{"label":"Write one response and continue the path","type":"reflect","targetId":"book_one_basics_1_11_dead_to_sin_reflection"},"sharing":{"shareText":"This One Basics lesson helped me think about dead to sin.","shareImagePrompt":"Start Following Jesus One In Him share card for Dead to Sin"},"admin":{"packageStatus":"prepared","sourcePreApproved":true,"owner":"One In Him content team","lastUpdated":"2026-05-19","extractionStatus":"real_pdf_text_extracted","sourceRange":"One Basics 1.11"}},{"packageId":"pkg_one_basics_1_12_the_importance_of_the_word","packageTitle":"One Basics 1.12: The Importance of the Word","packageType":"journey_lesson","packageGoal":"Help a learner understand the importance of the word as part of the Start Following Jesus path and respond with one clear next step.","sourceItems":["book_one_basics_1_12_the_importance_of_the_word"],"primaryItemId":"book_one_basics_1_12_the_importance_of_the_word","primaryMedium":"read","speakerOrAuthor":{"id":"author_johan_toet","name":"Johan Toet","role":"author"},"language":"en","contentType":"study_guide","length":{"seconds":0,"readingMinutes":8,"display":"8 min read"},"fallbackPlan":{"cannotWatch":"book_one_basics_1_12_the_importance_of_the_word","cannotListen":"book_one_basics_1_12_the_importance_of_the_word","cannotRead":"book_one_basics_1_12_the_importance_of_the_word_audio_future"},"journeyStage":{"stage":2,"name":"Start Following Jesus","slug":"foundations","colour":"#f6ca35","moduleId":"stage_2_start_following"},"questionsAnswered":["What does the importance of the word mean for following Jesus?","How does Scripture shape my understanding of the importance of the word?","What is one practical response to the importance of the word?"],"topics":["Bible","One Basics 1","Start Following Jesus","Discipleship"],"learnerSession":{"openingPrompt":"Take one clear step in the importance of the word.","contentSummary":"Today we are going to be talking about the importance of the Word of God. The Word of God is God ‘Himself’ speaking to us. That is why it is very important that His ‘Word’ gets pride of place in your life. Because we ‘hear’ God through His Word. The Word tells us who we are in Him and Who He is in us, what He has done for us, how He looks at us and what He desires of us. All answers to all life’s questions are in God...","readBody":["Today we are going to be talking about the importance of the Word of God. The Word of God is God ‘Himself’ speaking to us. That is why it is very important that His ‘Word’ gets pride of place in your life. Because we ‘hear’ God through His Word. The Word tells us who we are in Him and Who He is in us, what He has done for us, how He looks at us and what He desires of us. All answers to all life’s questions are in God’s Word. The Word of God is always the same. In the Bible the words are just ‘written down’. But the Word Itself ‘lives’, Jesus is the Word. He is the ‘living’ Word! Hebrews 4:12 ‘For the word of God is living and powerful, and sharper than any two-edged sword, piercing even to the division of soul and spirit, and of joints and marrow, and is a discerner of the thoughts and intents of the heart.’ Many believers don’t do very much with the Word.","They might receive a daily verse on their phones or via Facebook. Sometimes they scroll through their app or do a reading plan once if there is some time left in their busy agenda. But the Word of God is the most important thing there is in our lives! It is that which gives us life. Without His Word you would not be here and you would not be saved right now! It is the Word of God that you ‘believed’ that ‘saved’ you! James 1:18 ‘Of His own will He brought us forth by the word of truth, that we might be a kind of firstfruits of His creatures.’ We were created again in the spirit when we ingested the living Word, Christ. THE IMPORTANCE OF THE WORD Lesson 1. THE IMPORTANCE OF THE WORD","82 2 Corinthians 5:17 ‘Therefore, if anyone is in Christ [is in the living Word], he is a new creation; old things have passed away; behold, all things have become new.’ We were born again when we believed and confessed the Word. Romans 10:8-11 ‘The word is near you, in your mouth and in your heart (that is, the word of faith which we preach): that if you confess with your mouth the Lord Jesus and believe in your heart that God has raised Him from the dead, you will be saved. For with the heart one believes unto righteousness, and with the mouth confession is made unto salvation.","For the Scripture [the Word] says, Whoever believes on Him will not be put to shame.’ 1 Peter 1:23 ‘Having been born again, not of corruptible seed but incorruptible, through the word of God which lives and abides forever.’ You see, it is the Word that has brought your salvation, that brought you to life and made you a ‘child’ of God. That made you a ‘temple’ of the Holy Spirit. It is the Word of God that has completely ‘set you free’ from the law and the power of sin. If the Word of God has the power to let something so supernatural take place in your life, then I would pay much attention to it and completely make it my own! What can the Word, mixed with faith, also establish in and through your life? The Word of God is a lamp to my feet and a light to my path. Psalm 119:105 The Word of God teaches me that I don’t have to worry anymore.","Philippians 4:6 It teaches me that God provides for ‘all’ my needs. Philippians 4:19 The Word is the same always and forever. Isaiah 40:8 ‘The grass withers, the flower fades, but the word of our God stands forever.’ The Word really contains ‘everything’ you need to walk in complete peace, happiness, provision, health, freedom, and victory in this life. So, make sure that you let the Word of God dwell in you in ‘great measure’! Colossians 3:16 It is a necessity to take in God’s Word as ‘daily’ food. In Deuteronomy 8:3 it says that man does not live by bread alone, but that man lives by ‘every word’ that comes from the mouth of the Lord. God speaks to you through His Word and that ‘feeds’ your spiritual person. 83 Jesus says the following in John 6:35, ‘I am the bread of life.","He who comes to Me shall never hunger, and he who believes in Me shall never thirst.’ If we take in the Word, we don’t need anything else, then we will be filled and satisfied. So Jesus is the ‘Bread of life’. Jesus is also the ‘Word of God’. Revelation 19:13 ‘He was clothed with a robe dipped in blood, and His name is called The Word of God.’ John 1:1-4 ‘In the beginning was the Word, and the Word was with God, and the Word was God. He was in the beginning with God. All things were made through Him [the Word], and without Him nothing was made that was made. In Him [the Word] was life, and the life was the light of men.’ Jesus, Who is the Bread of Life, is also the living Word of God. He is ‘the Truth’. John 14:6 ‘Jesus said to him, “I am the way, the truth, and the life. No one comes to the Father except through Me.”’ Jesus is the Word, so He is the truth and the truth does what?","John 8:31-32 ‘Then Jesus said to those Jews who believed Him, “If you abide in My word, you are My disciples indeed. And you shall know the truth, and the truth shall make you free.”’ If we ‘take in’ Jesus the Word, we will find the truth, this truth will set us free, because who the Son sets free will be free ‘indeed’. John 8:36 And with this truth (the Word) He leads us into the ‘true’ life. 1 John 5:12 ‘He who has the Son has life; he who does not have the Son of God does not have life.’ All of this is super powerful, people! The importance of the Word is immeasurable, it feeds us, it sets us free and gives us life! His Words are ‘life’ to those who find them and ‘healing’ to ‘all their flesh’. Proverbs 4:22 The Word is immeasurably important for us!","THE IMPORTANCE OF THE WORD | 1.12 84 If we believe the Word and apply it in our lives, if we walk in it and make it completely our own, if we ‘flood’ our minds with it and ‘sow’ it in our hearts, we will come to walk in a life that is like no other! A life of victory, a life of health, of protection, of prosperity, a life of joy and happiness, a life in His fullness. That is what He intended for us, that is why He gave us His Word! It is incredible how much the Word can do in and through our lives! Therefore it is extremely important that we take in the Word daily, ‘meditate’ on it, do our best to ‘memorize’ it and ‘make it our own’. ‘Act’ on it and ‘walk’ in it. ‘Feed’ your spiritual man so that the truth about you in Christ can become more and more visible in your life! Amen? 85 1 Read: John 6:63 ‘It is the Spirit who gives life; the flesh profits nothing.","The words that I speak to you are spirit, and they are life.’ Question: What does the Word of God give, according to this verse? 2 Read: John 8:31-32 ‘Then Jesus said to those Jews who believed Him, “If you abide in My word, you are My disciples indeed. And you shall know the truth, and the truth shall make you free.”’ Question: What does the Word of God do, according to these verses, when you take it in and get to know it? 3 Read: Hosea 4:6 ‘My people are destroyed for lack of knowledge. Because you have rejected know- ledge, I also will reject you from being priest for Me; Because you have forgotten the law of your God, I also will forget your children.’ Question: Is it a matter of life and death that we have His Word and the knowledge of His Word? Reactions and discussion Answers in the back of the study guide THE IMPORTANCE OF THE WORD | 1. QUESTIONS With lesson 1. 12"],"scriptureReferences":[],"reflectionPrompt":"What is one thing you need to understand or practice from The Importance of the Word?","quickCheck":{"question":"What is the best response to this lesson on The Importance of the Word?","answers":[{"id":"rush","label":"Rush to the next lesson without reflection"},{"id":"respond","label":"Reflect, pray, and take one faithful step"},{"id":"ignore","label":"Ignore it unless it feels easy"}],"correctAnswer":"respond","feedback":"Yes. The goal is not only to finish content, but to respond faithfully."},"notesPrompt":"Write one thought, question, or next step from The Importance of the Word.","completionMessage":"Good. You finished one One Basics step."},"placement":{"showInDiscover":true,"discoverShelf":"One Basics 1","discoverCardLabel":"Foundations","showInJourney":true,"moduleId":"stage_2_start_following","moduleTitle":"Start Following Jesus","lessonOrder":12,"sourcePage":81,"isCoreLesson":true},"recommendedNextStep":{"label":"Write one response and continue the path","type":"reflect","targetId":"book_one_basics_1_12_the_importance_of_the_word_reflection"},"sharing":{"shareText":"This One Basics lesson helped me think about the importance of the word.","shareImagePrompt":"Start Following Jesus One In Him share card for The Importance of the Word"},"admin":{"packageStatus":"prepared","sourcePreApproved":true,"owner":"One In Him content team","lastUpdated":"2026-05-19","extractionStatus":"real_pdf_text_extracted","sourceRange":"One Basics 1.12"}},{"packageId":"pkg_one_basics_1_13_renewing_your_mind","packageTitle":"One Basics 1.13: Renewing Your Mind","packageType":"journey_lesson","packageGoal":"Help a learner understand renewing your mind as part of the Start Following Jesus path and respond with one clear next step.","sourceItems":["book_one_basics_1_13_renewing_your_mind"],"primaryItemId":"book_one_basics_1_13_renewing_your_mind","primaryMedium":"read","speakerOrAuthor":{"id":"author_johan_toet","name":"Johan Toet","role":"author"},"language":"en","contentType":"study_guide","length":{"seconds":0,"readingMinutes":9,"display":"9 min read"},"fallbackPlan":{"cannotWatch":"book_one_basics_1_13_renewing_your_mind","cannotListen":"book_one_basics_1_13_renewing_your_mind","cannotRead":"book_one_basics_1_13_renewing_your_mind_audio_future"},"journeyStage":{"stage":2,"name":"Start Following Jesus","slug":"foundations","colour":"#f6ca35","moduleId":"stage_2_start_following"},"questionsAnswered":["What does renewing your mind mean for following Jesus?","How does Scripture shape my understanding of renewing your mind?","What is one practical response to renewing your mind?"],"topics":["Renewing Your Mind","One Basics 1","Start Following Jesus","Discipleship"],"learnerSession":{"openingPrompt":"Take one clear step in renewing your mind.","contentSummary":"In the previous lesson, we talked about the importance of the Word. We have learned how the Word of God brings us all the answers we might need in this life. How the Word provides for all our needs. The Word is God’s ‘truth’. It is His way to ‘communicate’ with us. But as long as the Word of God is just ‘words’ that are pressed on a thin sheet of paper. When the Word is only a book with a beautiful cover on the books...","readBody":["In the previous lesson, we talked about the importance of the Word. We have learned how the Word of God brings us all the answers we might need in this life. How the Word provides for all our needs. The Word is God’s ‘truth’. It is His way to ‘communicate’ with us. But as long as the Word of God is just ‘words’ that are pressed on a thin sheet of paper. When the Word is only a book with a beautiful cover on the bookshelf, then that Word does absolutely nothing ‘in’ you or ‘for’ you. The Bible teaches us in Luke 8:11 that the Word of God is a ‘seed’. So the Bible is full of seed. It is one great supply of seed. In every seed there is destiny. For example: an apple seed brings forth an apple tree. In each ‘Word of God’ (which is seed) there is destiny and has the potential to bring forth that which He gave that Word for.","But as long as you leave that ‘seed’ on the shelf, nothing will come of it. Then it is only a ‘seed with potential’. You need to take that seed and you need to sow it. In this case you need to sow it into your heart. You need to take in the Word of God in such a way that it becomes your ‘bread’, your spiritual food. You need to immerse yourself in it completely and make it your own. You need to ‘renew’ your mind with the Word of God. You can compare your mind with a computer. Your whole life your hard drive has been stuffed with viruses, philosophies of this world, with the traditions of this world. RENEWING YOUR MIND Lesson 1. RENEWING YOUR MIND | 1. NOTES 88 Your whole mind is completely polluted with everything that is in this world. It is flooded with it and has completely determined your view of the world and in life. It is full of lies and full of garbage.","You need to get rid of all of that. So that you don’t think the same way the world thinks, but the way God thinks. You need to reprogram yourself. You need to delete your old mind, defragment it, update it, bring it back to factory settings, hallelujah. So: ‘lies out’, and ‘truth in’. The more lies go out, the more space there is for the truth. You need to replace all your old thinking with the truth of the Word of God. Romans 12:2 ‘And do not be conformed to this world, but be transformed by the renewing of your mind, that you may prove what is that good and acceptable and perfect will of God.’ If you ‘renew’ your mind with the Word of God, you will discover what the good and acceptable and perfect will of God is. Only by renewing your mind, by ‘meditating’ on the Word, ‘believing’ it and also ‘applying’ it, can we put on the new person that is created in Christ.","Ephesians 4:22-24 ‘That you put off, concerning your former conduct, the old man which grows corrupt according to the deceitful lusts, and be renewed in the spirit of your mind, and that you put on the new man which was created according to God, in true righteousness and holiness.’ By renewing your mind, you can put on more and more of that ‘new man’ that you are in Christ now. That new man which is created according to ‘the image of God’. From there on you can walk in it and you will notice that there will be more and more faith and victory in your life. You need to know what the truth is, because if you know the truth, you will recognize the lie. Amen? So firstly, it is important that you take in the Word of God. That you meditate on it. That you reflect on it. Chew on it. Make it your own. Memorize verses. Know what God says. Know Him through His Word.","Jesus says in John 14:9 “He who has seen Me has seen the Father.” Jesus is the ‘Word’. John 1:1 So if you see the ‘Word’ and know it, then you know the Father! How beautiful it is that God gave us His Word and that this Word shows exactly Who He is. For Jesus is the perfect reflection of the Father. By knowing Him, knowing the Word, we can know the Father! Is that not the most important thing there is? That we know the Father? That is what we started with in the first lesson! John 17:3 ‘And this is eternal life, that they may know You, the only true God, and Jesus Christ whom You have sent.’ We can get to know God, the Creator of heaven and earth, in a personal and intimate way and we can do that by taking in His Word. What an amazing gift! So we first need to ‘take in’ the Word. Secondly, we need to ‘apply’ it. You must not only know the Word ‘theoretically’.","Then you become a theologian. ‘I know what it says but no more than that.’ No, the Word that you take in, you need to believe and apply it in your life! Because otherwise it is absolutely useless. We need to imbibe the Word of God that speaks to us, mix it with faith, and then walk in it. James 1:22 ‘But be doers of the Word, and not hearers only, deceiving yourselves.’ You can’t say, ‘the Word of God says’ and then not ‘act on it’. Then it is only empty, dry theory. Then they are only empty words. Hebrews 11:6 says, ‘But without faith it is impossible to please Him, for he who comes to God must believe that He is, and that He is a rewarder of those who diligently seek Him.’ Only ‘saying’ that you believe cannot please God. Only ‘acting faith’ takes possession of all His promises. You need to hear the Word, accept and apply it, so you need to act on it.","RENEWING YOUR MIND | 1.13 90 You can’t carry godly fruit if you don’t ‘act’ on the Word of God. In the beginning of the lesson it was already stated that the Word of God is a seed. You need to take that Word, that seed and ‘sow’ it, otherwise it won’t bear any fruit. ‘If you don’t sow you can’t reap either.’ Mark 4:26-28 ‘And He said, “The kingdom of God is as if a man should scatter seed on the ground, and should sleep by night and rise by day, and the seed should sprout and grow, he himself does not know how. For the earth [heart] yields crops by itself: first the blade, then the head, after that the full grain in the head.”’ [Fruit] The moment you take in the Word of God and sow it in your heart, sow it in your life – so you hear, accept and apply the Word in your life – then you will get blade, head and full grain in the head.","In other words, the fruit that you have sown you will eventually also reap. Hallelujah! This is fantastic news! When you renew your mind with the Word of God, you will eventually not be led by your circumstances anymore. You won’t be determined by what others think and say about you anymore. You won’t be led by what Satan tries to whisper in your ear. You won’t be determined by external factors and sounds. No longer by the news, by fear, by doubt, or by unbelief. No, with a ‘renewed mind’ you will eventually only be led by the Word of God. By what He says and what your whole being is full of. For what the heart is full of, the mouth speaks. Make sure that the Word of God becomes your ultimate truth, get to know it and completely renew your mind with it. You will never be the same again! Amen?","Read: Romans 12:2 ‘And do not be conformed to this world, but be transformed by the renewing of your mind, that you may prove what is that good and acceptable and perfect will of God.’ Question: What should we renew, according to Romans 12:2? 2 Read: Luke 8:11 ‘Now the parable is this: The seed is the word of God.’ According to this verse, the Word is a seed. Question: How do you get the Word sown into your mind? 3 Read: Mark 4:26-28 ‘And He said, “The kingdom of God is as if a man should scatter seed on the ground, and should sleep by night and rise by day, and the seed should sprout and grow, he himself does not know how. For the earth [heart] yields crops by itself: first the blade, then the head, after that the full grain in the head.”’ According to Mark 4:26-28, a process is started when you sow. Question: What process is that? And what can we learn from this principle?","Reactions and discussion Answers in the back of the study guide RENEWING YOUR MIND | 1. QUESTIONS With lesson 1. 13"],"scriptureReferences":[],"reflectionPrompt":"What is one thing you need to understand or practice from Renewing Your Mind?","quickCheck":{"question":"What is the best response to this lesson on Renewing Your Mind?","answers":[{"id":"rush","label":"Rush to the next lesson without reflection"},{"id":"respond","label":"Reflect, pray, and take one faithful step"},{"id":"ignore","label":"Ignore it unless it feels easy"}],"correctAnswer":"respond","feedback":"Yes. The goal is not only to finish content, but to respond faithfully."},"notesPrompt":"Write one thought, question, or next step from Renewing Your Mind.","completionMessage":"Good. You finished one One Basics step."},"placement":{"showInDiscover":true,"discoverShelf":"One Basics 1","discoverCardLabel":"Foundations","showInJourney":true,"moduleId":"stage_2_start_following","moduleTitle":"Start Following Jesus","lessonOrder":13,"sourcePage":87,"isCoreLesson":true},"recommendedNextStep":{"label":"Write one response and continue the path","type":"reflect","targetId":"book_one_basics_1_13_renewing_your_mind_reflection"},"sharing":{"shareText":"This One Basics lesson helped me think about renewing your mind.","shareImagePrompt":"Start Following Jesus One In Him share card for Renewing Your Mind"},"admin":{"packageStatus":"prepared","sourcePreApproved":true,"owner":"One In Him content team","lastUpdated":"2026-05-19","extractionStatus":"real_pdf_text_extracted","sourceRange":"One Basics 1.13"}},{"packageId":"pkg_one_basics_1_14_effective_bible_reading","packageTitle":"One Basics 1.14: Effective Bible Reading","packageType":"journey_lesson","packageGoal":"Help a learner understand effective bible reading as part of the Start Following Jesus path and respond with one clear next step.","sourceItems":["book_one_basics_1_14_effective_bible_reading"],"primaryItemId":"book_one_basics_1_14_effective_bible_reading","primaryMedium":"read","speakerOrAuthor":{"id":"author_johan_toet","name":"Johan Toet","role":"author"},"language":"en","contentType":"study_guide","length":{"seconds":0,"readingMinutes":11,"display":"11 min read"},"fallbackPlan":{"cannotWatch":"book_one_basics_1_14_effective_bible_reading","cannotListen":"book_one_basics_1_14_effective_bible_reading","cannotRead":"book_one_basics_1_14_effective_bible_reading_audio_future"},"journeyStage":{"stage":2,"name":"Start Following Jesus","slug":"foundations","colour":"#f6ca35","moduleId":"stage_2_start_following"},"questionsAnswered":["What does effective bible reading mean for following Jesus?","How does Scripture shape my understanding of effective bible reading?","What is one practical response to effective bible reading?"],"topics":["Bible","One Basics 1","Start Following Jesus","Discipleship"],"learnerSession":{"openingPrompt":"Take one clear step in effective bible reading.","contentSummary":"In this lesson, we are going to look at how we can take in the Word of God effectively. That is to say, how the Word can really stay inside of us and transform us from the inside out into that new man that we now are Christ. The most important motivation to take in God’s Word is that it is your heart’s desire to get to know God better. Not only to gather knowledge because only knowledge puffs up. When we look at Jewi...","readBody":["In this lesson, we are going to look at how we can take in the Word of God effectively. That is to say, how the Word can really stay inside of us and transform us from the inside out into that new man that we now are Christ. The most important motivation to take in God’s Word is that it is your heart’s desire to get to know God better. Not only to gather knowledge because only knowledge puffs up. When we look at Jewish children who are raised with the Tanakh, we can learn a lot from that. They must firstly learn the five books of Moses, also known as the Pentateuch or the Torah, by heart. And if they turn out to be very good, they may also learn the lesser and the major prophets by heart. These children do nothing but recite, meditate, and therefore memorize the Word all day.","What we often hear is that when Christians have read the Bible, they immediately after have forgotten what they have read. It blessed them in the moment of reading, but it has not settled in their hearts. This is because it is often read superficially and not specifically and therefore effectively. Let’s first look at what the Word says about the taking in of the Word and the importance of it. Joshua 1:8 ‘This Book of the Law shall not depart from your mouth, but you shall meditate in it day and night, that you may observe to do according to all that is written in it. For then you will make your way prosperous, and then you will have good success.’ God teaches us that if we meditate in His Word day and night and we learn to do it, this will make us prosperous in all aspects. A wise person obeys and embraces the Word of God as if it were his breath of life.","EFFECTIVE BIBLE READING Lesson 1. EFFECTIVE BIBLE READING | 1. NOTES 94 Deuteronomy 6:6-9 ‘And these words which I command you today shall be in your heart. You shall teach them diligently to your children, and shall talk of them when you sit in your house, when you walk by the way, when you lie down, and when you rise up. You shall bind them as a sign on your hand, and they shall be as frontlets between your eyes. You shall write them on the doorposts of your house and on your gates.’ God teaches us that we must keep His Words in our hearts. This means that we must be very conscious about them in order to understand them and to take them into us in such a way that they can’t be robbed immediately by the evil one. Mark 4:15 And we must not only immerse ourselves in it but also our children. We must talk about it constantly, His Word must constantly be in our mouths.","Our whole being should be immersed in the Word of God. It is so important that we take in the Word. For it shows us our Father, it shows us Jesus our Savior and the Holy Spirit our Comforter and Teacher. Psalm 40:7 ‘Then I said, “Behold, I come; in the scroll of the book it is written of me.”’ Colossians 3:16 ‘Let the word of Christ dwell in you richly…’ The Word is vital for every believer who wants a serious walk with the Lord. 2 Timothy 3:16-17 ‘All Scripture is given by inspiration of God , and is profitable for doctrine, for reproof, for correction, for instruction in righteousness, that the man of God may be complete, thoroughly equipped for every good work.’ The Word of Christ that is given to us through the Holy Spirit should live in us in rich measure, so that we can teach, reprove, and correct with it. So that we can grow spiritually.","We also learn through the knowledge of the Word to walk in our authority and true identity and that is necessary for a victorious life. Also look back at lesson 1.12 for the importance of the Word, which can help you along with this. John 14:26 ‘But the Helper, the Holy Spirit, whom the Father will send in My name, He will teach you all things, and bring to your remembrance all things that I said to you.’ 95 But if we don’t sow the Word of God in our hearts and we don’t have knowledge, the Holy Spirit can’t bring it to our remembrance. So it is very important, necessary even, that we store the word of God in our hearts so that it can renew us and help us to learn to live out of our new man. So how do you do that, how do you store the Word of God in your heart? How do you sow the Word in the good ground of your heart? How do you read the Word of God effectively?","Mark 4:14-20 ‘The sower sows the Word. And these are the ones by the wayside where the word is sown. When they hear, Satan comes immediately and takes away the word that was sown in their hearts. These likewise are the ones sown on stony ground who, when they hear the word, immediately receive it with gladness; and they have no root in themselves, and so endure only for a time. Afterward, when tribulation or persecution arises for the word’s sake, immediately they stumble. Now these are the ones sown among thorns; they are the ones who hear the Word, and the cares of this world, the deceitfulness of riches, and the desires for other things entering in choke the Word, and it becomes unfruitful.","But these are the ones sown on good ground, those who hear the word, accept it, and bear fruit: some thirtyfold, some sixty, and some a hundred.’ So you must first ensure that your heart is good ground to sow into. You do this by practically only making space for the Word and leaving no space for other doctrines, ideologies, perceptions, and worldly philosophies. Then the ground is not covered with all kinds of weeds and the seed has room to grow. This kind of sowing you do by taking in the Word constantly and also doing what the Word says. You hear the Word, you accept it and you apply it as well, then you will bear fruit. Jesus says in Luke 6:47-48: ‘Whoever comes to Me, and hears My sayings and does them, I will show you whom he is like: He is like a man building a house, who dug deep and laid the foundation on the rock.","And when the flood arose, the stream beat vehemently against that house, and could not shake it, for it was founded on the rock.’ Let’s now look at how we can take in the Word effectively. That is to say, so it really comes in, so it becomes a renewing, transforming Word, and a revelation. Firstly: you choose a certain Bible verse that speaks to you or some Bible passage. You write that verse or passage down. Immediately say each word that you are writing out loud. EFFECTIVE BIBLE READING | 1.14 96 We call this reciting; you repeat something that you have read. Do this multiple times. Then you start memorizing the Bible passage. That is to say; you repeat each word, each phrase as many times as it takes until you can easily recite the part without thinking. Then you have memorized it. There are two things we must pay attention to. You can store it in your short-term memory.","You know it the moment that you put it in but after a week you have already forgotten it. This can be useful for a test for example, but when renewing your mind with the Word of God, it is eventually not of much use to you. It will not transform you. Because it didn’t land in your heart. But it can also be stored in your long-term memory and that means simply that you have made the Word completely your own. They sometimes say: ‘You must memorize it.’ In the beginning that might be the case, but it should go down from your head into your heart. If you have taken in that Logos, that written word, it must eventually become Rhema, revelation knowledge in your heart. The Word then essentially comes to life in you and when that happens you will never lose it and you will never forget it. It essentially becomes a part of you.","If you do this, you must let the learned part incubate and resonate inside of you for at least a week! That means that you are engaged with it all week and are repeating it until you can dream it, so to speak. Just start with one to two Bible verses a week. If that is easy for you, you do more. Always first ask the Holy Spirit to help you remember and understand it. He teaches and brings to remembrance. John 14:26 ‘But the Helper, the Holy Spirit, whom the Father will send in My name, He will teach you all things, and bring to your remembrance all things that I said to you.’ Another method is taking a Bible story or passage and studying it thoroughly. You choose a story or passage and write this sentence by sentence. Then you look at all the references that go with that passage. You write down these verses and again their references."],"scriptureReferences":[],"reflectionPrompt":"What is one thing you need to understand or practice from Effective Bible Reading?","quickCheck":{"question":"What is the best response to this lesson on Effective Bible Reading?","answers":[{"id":"rush","label":"Rush to the next lesson without reflection"},{"id":"respond","label":"Reflect, pray, and take one faithful step"},{"id":"ignore","label":"Ignore it unless it feels easy"}],"correctAnswer":"respond","feedback":"Yes. The goal is not only to finish content, but to respond faithfully."},"notesPrompt":"Write one thought, question, or next step from Effective Bible Reading.","completionMessage":"Good. You finished one One Basics step."},"placement":{"showInDiscover":true,"discoverShelf":"One Basics 1","discoverCardLabel":"Foundations","showInJourney":true,"moduleId":"stage_2_start_following","moduleTitle":"Start Following Jesus","lessonOrder":14,"sourcePage":93,"isCoreLesson":true},"recommendedNextStep":{"label":"Write one response and continue the path","type":"reflect","targetId":"book_one_basics_1_14_effective_bible_reading_reflection"},"sharing":{"shareText":"This One Basics lesson helped me think about effective bible reading.","shareImagePrompt":"Start Following Jesus One In Him share card for Effective Bible Reading"},"admin":{"packageStatus":"prepared","sourcePreApproved":true,"owner":"One In Him content team","lastUpdated":"2026-05-19","extractionStatus":"real_pdf_text_extracted","sourceRange":"One Basics 1.14"}},{"packageId":"pkg_one_basics_1_15_our_position_with_god","packageTitle":"One Basics 1.15: Our Position with God","packageType":"journey_lesson","packageGoal":"Help a learner understand our position with god as part of the Start Following Jesus path and respond with one clear next step.","sourceItems":["book_one_basics_1_15_our_position_with_god"],"primaryItemId":"book_one_basics_1_15_our_position_with_god","primaryMedium":"read","speakerOrAuthor":{"id":"author_johan_toet","name":"Johan Toet","role":"author"},"language":"en","contentType":"study_guide","length":{"seconds":0,"readingMinutes":10,"display":"10 min read"},"fallbackPlan":{"cannotWatch":"book_one_basics_1_15_our_position_with_god","cannotListen":"book_one_basics_1_15_our_position_with_god","cannotRead":"book_one_basics_1_15_our_position_with_god_audio_future"},"journeyStage":{"stage":2,"name":"Start Following Jesus","slug":"foundations","colour":"#f6ca35","moduleId":"stage_2_start_following"},"questionsAnswered":["What does our position with god mean for following Jesus?","How does Scripture shape my understanding of our position with god?","What is one practical response to our position with god?"],"topics":["Identity","One Basics 1","Start Following Jesus","Discipleship"],"learnerSession":{"openingPrompt":"Take one clear step in our position with god.","contentSummary":"Today we’re going to talk about our position with the Father. Many people who are a ‘child of God’ do not have a good idea or realization of what that means exactly and what our ‘position’ is with God. I believe that if we better understand our position, our attitude will change and we will approach Him in a totally different way. Before we accepted Christ as our Lord and Savior, we were slaves of the god of this wor...","readBody":["Today we’re going to talk about our position with the Father. Many people who are a ‘child of God’ do not have a good idea or realization of what that means exactly and what our ‘position’ is with God. I believe that if we better understand our position, our attitude will change and we will approach Him in a totally different way. Before we accepted Christ as our Lord and Savior, we were slaves of the god of this world and we wandered around on earth as lost sheep. Isaiah 53:6 ‘All we like sheep have gone astray; we have turned, every one, to his own way.’ We were busy with all kinds of things but didn’t really have an idea about which direction we were heading. Ephesians 4:17 It was in the ‘futility of our mind’ and we were anchored in this Babylonian world. But then a ‘change of identity’ took place. Jesus was the ‘only begotten’ Son of God.","John 3:16 ‘For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life.’ We were born in darkness, born of blood, flesh, and the will of a man. And we only had our own natural parents. Hebrews 12:9 ‘Furthermore, we have had human fathers who corrected us, and we paid them respect.’ So we weren’t children of God. But God never intended for it to be like that. It shouldn’t be that way. That’s why Jesus came. He says in Matthew 18:11 ‘For the Son of Man has come to save that which was lost.’ OUR POSITION WITH GOD Lesson 1. OUR POSITION WITH GOD | 1. NOTES 100 Not ‘who’, but ‘what’… What was lost in the fall was our ‘position’ with the Father. The relationship, the ‘intimacy’ was lost. And Jesus came to restore that.","Ephesians 1:10 ‘That in the dispensation of the fullness of the times He might gather together in one all things in Christ, both which are in heaven and which are on earth—in Him.’ Galatians 4:4-5 ‘But when the fullness of the time had come, God sent forth His Son, born of a woman, born under the law, to redeem those who were under the law, that we might receive the adoption as sons.’ So that we may be ‘in’ God again and He could be ‘in us’. So that we can be one again with our Creator. He chose and predestined us before the foundation of the world to be received as His children.","Ephesians 1:3-6 ‘Blessed be the God and Father of our Lord Jesus Christ, who has blessed us with every spiritual blessing in the heavenly places in Christ, just as He chose us in Him before the foundation of the world, that we should be holy and without blame before Him in love, having predestined us to adoption as sons by Jesus Christ to Himself, according to the good pleasure of His will, to the praise of the glory of His grace, by which He made us accepted in the Beloved.’ Before He created the heavens and the earth, the birds and the bees, He already chose us. It was always His plan, His goal that we would have Him close to us as ‘Father’ and not as a God that is ‘far away’. God wants intimacy and a deep connection with His children, with you and with me.","Corinthians 6:18 ‘I will be a Father to you, and you shall be My sons and daughters, says the Lord Almighty.’ That is His will and His deepest desire. That we would become His Children and He our Dad. That we would call only Him ‘Father’. Matthew 23:9 ‘Do not call anyone on earth your father; for One is your Father, He who is in heaven.’ That speaks of great desire and a deep love. God, the Creator of heaven and earth, the Alpha and Omega, the beginning and the end, 101 the Great I AM, wants to be our only Father! And now in Christ, this is the case! Do you realize that? ‘My father is a firefighter, well my father is a popstar! Oh yeah? Mine is president.’ ‘Oh yeah? My Father is God!’ Hallelujah! He has now become our ‘Father’ and so now we have become His children. We are now sons and daughters of God.","We have now through the death and resurrection of King Jesus come to take part in the divine nature! 2 Peter 1:4 ‘By which have been given to us exceedingly great and precious promises, that through these you may be partakers of the divine nature…’ 1 Peter 1:23 ‘You, having been born again, not of corruptible seed but incorruptible, through the word of God which lives and abides forever.’ We are now born of ‘incorruptible’ seed, born of God and therefore take part in his divine nature. That is really powerful, dear friends! You are no longer just a person born of blood, flesh, and the will of a man. No, you are now born of God and have received His nature! Your position has completely changed because of this: You are now still ‘in’ the world but not ‘of’ the world. John 17:16 You have now become a citizen of Heaven. You ‘were’ a slave to Satan. But now you are a son or daughter of God!","The King of the earth and the universe is our Father. You have now become a ‘child of the King’ in the Kingdom of God. We have now become His ‘heirs’. We will talk about that in the second study guide in lesson 2.20. Galatians 4:6-7 ‘And because you are sons, God has sent forth the Spirit of His Son into your hearts, crying out, “Abba, Father!” Therefore you are no longer a slave but a son.’ OUR POSITION WITH GOD | 1.15 102 We have now received the spirit of sonship by which we can cry out ‘Father’. Our ‘position’ has completely changed. It is no longer about what we ‘do’ but about who we ‘are’. Which of you has children?","How would you like it if your children, when they want something, approach you with a lowly and begging attitude: Dad, daddy, I love you, daddy, if it is your will, daddy, could I, daddy, then maybe, I beg of you, daddy, I don’t want to bother you, but daddy, could I then… You would say: ‘Act normal, what’s the matter? Just ask for it, just say it!’ You see, many of us approach God like that. We beg and we pray and we plead in a way that makes your stomach turn just to get something done by Him. ‘Oh God, Great God in heaven, I know You are busy, I come in all fear and awestruck before your Face, God, to beg and to plead for Your great grace and mercy, that if it is in Your unfailing and incomprehensible will, oh God, I beg of You, God, Father God, etcetera.’ To me that doesn’t sound like an ‘intimate relationship’ with God as Father.","It doesn’t sound like someone who knows Him personally in an intimate way. As someone who knows his ‘identity’ in Christ and knows his position with the Father. Dear friends, He is not a God Who is ‘far away’, but a God Who is near! Firstly, He is ‘in’ you. John 14:23 His Kingdom is ‘in’ you. Luke 17:21 And He is not only Almighty God, but He is also your Father! You can just approach Him as a son. Of course we have respect and awe for Him, He is God, but He is also our Dad! That makes it very personal. You have become His son or daughter. Your position with the Father is that you have received the ‘privilege’ to run into the throne room without notice. You can jump on His lap and tell Him how much you love Him. Your position with God the Father is such that you now have ‘free access’ to the Most Holy Place, through what Jesus has established for you. 103 We can now approach Him boldly.","We don’t have to approach Him in guilt, shame, and condemnation. We are now ‘righteous’ to God. 2 Corinthians 5:21 ‘For He made Him who knew no sin to be sin for us, that we might become the righteousness of God in Him.’ We are now His ‘children’. Galatians 3:26 ‘For you are all sons of God through faith in Christ Jesus.’ We are now His heirs. Galatians 4:7 ‘Therefore you are no longer a slave but a son, and if a son, then an heir of God through Christ.’ We now have an ‘Advocate’ with the Father. 1 John 2:1 ‘My little children, these things I write to you, so that you may not sin. And if anyone sins, we have an Advocate with the Father, Jesus Christ the righteous.’ Because of this, we can always approach Him ‘boldly’. Hebrews 4:16 ‘Let us therefore come boldly to the throne of grace.’ That is our position with the Father! That is amazingly good news!"],"scriptureReferences":[],"reflectionPrompt":"What is one thing you need to understand or practice from Our Position with God?","quickCheck":{"question":"What is the best response to this lesson on Our Position with God?","answers":[{"id":"rush","label":"Rush to the next lesson without reflection"},{"id":"respond","label":"Reflect, pray, and take one faithful step"},{"id":"ignore","label":"Ignore it unless it feels easy"}],"correctAnswer":"respond","feedback":"Yes. The goal is not only to finish content, but to respond faithfully."},"notesPrompt":"Write one thought, question, or next step from Our Position with God.","completionMessage":"Good. You finished one One Basics step."},"placement":{"showInDiscover":true,"discoverShelf":"One Basics 1","discoverCardLabel":"Foundations","showInJourney":true,"moduleId":"stage_2_start_following","moduleTitle":"Start Following Jesus","lessonOrder":15,"sourcePage":99,"isCoreLesson":true},"recommendedNextStep":{"label":"Write one response and continue the path","type":"reflect","targetId":"book_one_basics_1_15_our_position_with_god_reflection"},"sharing":{"shareText":"This One Basics lesson helped me think about our position with god.","shareImagePrompt":"Start Following Jesus One In Him share card for Our Position with God"},"admin":{"packageStatus":"prepared","sourcePreApproved":true,"owner":"One In Him content team","lastUpdated":"2026-05-19","extractionStatus":"real_pdf_text_extracted","sourceRange":"One Basics 1.15"}},{"packageId":"pkg_one_basics_1_16_praying_to_god","packageTitle":"One Basics 1.16: Praying to God","packageType":"journey_lesson","packageGoal":"Help a learner understand praying to god as part of the Start Following Jesus path and respond with one clear next step.","sourceItems":["book_one_basics_1_16_praying_to_god"],"primaryItemId":"book_one_basics_1_16_praying_to_god","primaryMedium":"read","speakerOrAuthor":{"id":"author_johan_toet","name":"Johan Toet","role":"author"},"language":"en","contentType":"study_guide","length":{"seconds":0,"readingMinutes":11,"display":"11 min read"},"fallbackPlan":{"cannotWatch":"book_one_basics_1_16_praying_to_god","cannotListen":"book_one_basics_1_16_praying_to_god","cannotRead":"book_one_basics_1_16_praying_to_god_audio_future"},"journeyStage":{"stage":2,"name":"Start Following Jesus","slug":"foundations","colour":"#f6ca35","moduleId":"stage_2_start_following"},"questionsAnswered":["What does praying to god mean for following Jesus?","How does Scripture shape my understanding of praying to god?","What is one practical response to praying to god?"],"topics":["Prayer","One Basics 1","Start Following Jesus","Discipleship"],"learnerSession":{"openingPrompt":"Take one clear step in praying to god.","contentSummary":"Today we’re going to talk about how we can ‘effectively’ pray to God. We will discover what ‘praying’ actually is. 1 Thessalonians 5:17 says, ‘Pray without ceasing’. The Bible teaches us that we need to pray ‘constantly’. Then Paul writes that we should persevere in ‘prayer and supplication’. Ephesians 6:18 ‘Praying always with all prayer and supplication in the Spirit, being watchful to this end with all perseveranc...","readBody":["Today we’re going to talk about how we can ‘effectively’ pray to God. We will discover what ‘praying’ actually is. 1 Thessalonians 5:17 says, ‘Pray without ceasing’. The Bible teaches us that we need to pray ‘constantly’. Then Paul writes that we should persevere in ‘prayer and supplication’. Ephesians 6:18 ‘Praying always with all prayer and supplication in the Spirit, being watchful to this end with all perseverance and supplication for all the saints.’ Because of this verse many Christians have started thinking that we ‘continually’ need to ‘beg’ God and must ‘push through’ to get something done with Him. That He wants us to pray to Him like ‘that’. But that isn’t what God asks. Today we are going to talk about how we can pray in the ‘right way’ to God and expect results.","What happens a lot in church meetings and prayer meetings is that the praying itself is beautiful, you can see their heart, but it is often not ‘in line’ with the truth. They are often ‘requests’ of something that has long been provided for in His grace and instead of ‘thanking’ Him or claiming it, proclaiming and receiving it, we keep ‘requesting’ it as if He hasn’t done it yet. And then we approach Him with an attitude in which He ‘might’ but also ‘might not’ want to do it. We approach Him as if He is far away and isn’t always as willing to hear us. Sometimes we speak beautiful words, but with no impact into the void. We pray, but we pray ‘without fruit’ because it is done in unbelief. So it is crucial to approach God in the correct way. And that is as a ‘beloved son/daughter’ and not as a ‘supplicating slave’. PRAYING TO GOD Lesson 1.","‘God, please if You will, Oh God will You please intervene, I beg that You will bring a revival, come now with Your Holy Spirit and fill us all, will You heal, will You provide, I pray You will do this for my child and You will do that for my aunt. God, Lord, Father God, Father, Lord God, Father, Lord, Lord, Father.... Will You... Will you...’ We ‘twist’ our voices and repeat our prayers because we are afraid that He didn’t hear us the first time. And that is not a prayer of faith. Real ‘expressions of faith’, the standing in our ‘authority’ and claiming what He ‘has established’ and praising and thanking Him ‘beforehand’, that accomplishes so much more than prayers of supplication and statements of unbelief! So, praying to the Father. It is important ‘how’ we approach God.","James 4:3 ‘You ask and do not receive, because you ask amiss, that you may spend it on your pleasures.’ There is a ‘wrong way of praying’ according to the Bible, so saying that ‘all prayer’ is good does not match the truth. We can pray ‘fleshly’ things to the Father, things that are totally not in line with His Word and are not truth. Then you can pray for a long time, but it will accomplish nothing. Your prayer will remain ‘unfruitful’. Or we pray for things that He has long provided for and so it’s not a question of whether He ‘wants to give’ but more the question whether you believe Him and want to ‘receive it in faith’. God Wants us to worship Him in Spirit and in Truth. John 4:23-24 ‘But the hour is coming, and now is, when the true worshipers will worship the Father in spirit and truth; for the Father [intimacy] is seeking such to worship Him.","God is Spirit and those who worship Him must worship in spirit and truth.’ ‘Worship’ is not just making music and singing for God, no, when you read the Word and meditate you worship Him, when you are good to others you worship Him, when you do His will you worship Him and if you approach Him in prayer you worship Him. Prayer is ‘worship’. It is not an infinitely long list of requests. It is giving thanks and worship. PRAYING TO GOD | 1.16 108 1 Thessalonians 5:16-18 says, ‘Rejoice always, [worship] pray without ceasing, in everything give thanks; for this is the will of God in Christ Jesus for you.’ Psalm 37:4 ‘Delight yourself also in the Lord, and He shall give you the desires of your heart.’ God wants us to always rejoice when we approach him and He wants us to think of Him with gratefulness constantly. Not that we come to Him complaining, whining, and begging for a blessing.","He wants us to come to Him with a grateful and happy heart, because ‘everything has already been given to us’ in Christ after all. He wants us to worship/pray in truth. And the Word of God is the ‘truth’, so everything that we pray according to His Word is truth. ‘Worshipping in spirit’ means not praying ‘from your flesh’ with all kinds of ‘fleshly desires’ that are not according to His will. And not shooting blanks with ‘repetition of words’ to heaven. That accomplishes nothing. Prayer shouldn’t be a religious trade, but speaking of Spirit-filled words full of truth. How does that work practically? The ‘Word’ is the truth. If the Word says that you are blessed with ‘all’ spiritual blessings in the heavenly realms, that is the truth. Ephesians 1:3 If you then pray, ‘Oh, God will You please bless me with spiritual blessing?’ Is that praying in truth? No.","If the Word says ‘that the Holy Spirit will be ‘with’ you and ‘in’ you. John 14:17 And the Word says that ‘His gifts are irrevocable’. Romans 11:29 And you then go to pray: ‘Oh Lord, don’t take Your Spirit away from me, come now with your Spirit and fill me again.’ Then is that worshiping in truth? No. We need to pray the Word, which is ‘truth’! So then pray, ‘Lord, I come before You in all boldness to praise You. Thank You that I don’t have to worry about ‘any’ thing, but that I can make all my desires known to You through prayer and supplication, with ‘thanksgiving’. 109 Thank You that all Your promises to me are ‘yes and amen’ in Christ Jesus. I rejoice in You because You ‘give me everything’ my heart desires!","Thank You that I have become a ‘temple’ of the Holy Spirit, thank You that I am ‘blessed’ with truly every spiritual blessing in the heavenly places, thank You that sickness will not affect me because by Your stripes I have been healed. Thank You that sin has no power over me anymore, for I have been redeemed by the precious blood of Your Son Jesus. Now I am Your beloved child. You make every form of grace abundant in me so that I will always possess what is necessary in everything and can be abundant in every good work! I possess the blessing of Abraham. Such favor, thank You. Thank You that You will do what You say You will do and that You are Who You say You are! Thank You for making sure my children won’t be lost, thank You for protecting, guarding, and preserving us from evil. Thank You that You make all my ways prosperous and that I may bear much fruit for Your Kingdom.","I place all my loved ones and needs in Your loving hand. I love You, I thank You in Jesus’ mighty Name. Amen!’ You see? That is worshiping in Spirit and in truth, you make everything known in joy and with thanksgiving. ‘Supplication’ in this text is not begging as we explain it, by the way. The word ‘supplication’ in the Greek here is ‘Dehaysis’, which just means ‘request’. By praying (thanking) and making supplication (requesting) we make our desires known with thanksgiving to the Lord. Our position with the Father is that we are His children and we can approach Him with thanksgiving in boldness and not in fear and trembling, but in love, joy, and happiness. We can confidently approach Him and believe that He receives us in the Throne Room because we are His righteousness in Christ Jesus. We are the heirs of the Kingdom! Children of the Most High! Amen?","We must simply believe what He says and confess that to Him. We thank Him for what He promises in His Word, even when that is not yet ‘visible’ in our lives. I promise you, that if you approach God in truth, you will achieve different results. If you magnify God and pray His truth over everything in thanksgiving, then your obstacles and problems will be gone with the wind. PRAYING TO GOD | 1.16 110 Don’t pray long, ‘tedious’ prayers by repeating things again and again. Also don’t go into detail about the problems of your uncle, your aunt, your cousin, your distant cousin and your difficult sister, your boss, your neighbor, and everyone else, what their needs are and how much they need saving. Don’t explain in detail everything the doctor said about certain conditions, which defects you have and why, and how badly you want the church to revive again and more people to be saved, etcetera."],"scriptureReferences":[],"reflectionPrompt":"What is one thing you need to understand or practice from Praying to God?","quickCheck":{"question":"What is the best response to this lesson on Praying to God?","answers":[{"id":"rush","label":"Rush to the next lesson without reflection"},{"id":"respond","label":"Reflect, pray, and take one faithful step"},{"id":"ignore","label":"Ignore it unless it feels easy"}],"correctAnswer":"respond","feedback":"Yes. The goal is not only to finish content, but to respond faithfully."},"notesPrompt":"Write one thought, question, or next step from Praying to God.","completionMessage":"Good. You finished one One Basics step."},"placement":{"showInDiscover":true,"discoverShelf":"One Basics 1","discoverCardLabel":"Foundations","showInJourney":true,"moduleId":"stage_2_start_following","moduleTitle":"Start Following Jesus","lessonOrder":16,"sourcePage":106,"isCoreLesson":true},"recommendedNextStep":{"label":"Write one response and continue the path","type":"reflect","targetId":"book_one_basics_1_16_praying_to_god_reflection"},"sharing":{"shareText":"This One Basics lesson helped me think about praying to god.","shareImagePrompt":"Start Following Jesus One In Him share card for Praying to God"},"admin":{"packageStatus":"prepared","sourcePreApproved":true,"owner":"One In Him content team","lastUpdated":"2026-05-19","extractionStatus":"real_pdf_text_extracted","sourceRange":"One Basics 1.16"}},{"packageId":"pkg_one_basics_1_17_answered_prayer","packageTitle":"One Basics 1.17: Answered Prayer","packageType":"journey_lesson","packageGoal":"Help a learner understand answered prayer as part of the Start Following Jesus path and respond with one clear next step.","sourceItems":["book_one_basics_1_17_answered_prayer"],"primaryItemId":"book_one_basics_1_17_answered_prayer","primaryMedium":"read","speakerOrAuthor":{"id":"author_johan_toet","name":"Johan Toet","role":"author"},"language":"en","contentType":"study_guide","length":{"seconds":0,"readingMinutes":10,"display":"10 min read"},"fallbackPlan":{"cannotWatch":"book_one_basics_1_17_answered_prayer","cannotListen":"book_one_basics_1_17_answered_prayer","cannotRead":"book_one_basics_1_17_answered_prayer_audio_future"},"journeyStage":{"stage":2,"name":"Start Following Jesus","slug":"foundations","colour":"#f6ca35","moduleId":"stage_2_start_following"},"questionsAnswered":["What does answered prayer mean for following Jesus?","How does Scripture shape my understanding of answered prayer?","What is one practical response to answered prayer?"],"topics":["Prayer","One Basics 1","Start Following Jesus","Discipleship"],"learnerSession":{"openingPrompt":"Take one clear step in answered prayer.","contentSummary":"In lesson 1.16 we have been able to discover how we can draw near to God in prayer. How we can pray to Him in the right way in spirit and in truth. John 4: In this lesson, we are going to discover how we can be sure that God hears us whenever we pray to Him. The most important principle for this is faith. Hebrews 11:6 ‘But without faith it is impossible to please Him, for he who comes to God must believe that He is, ...","readBody":["In lesson 1.16 we have been able to discover how we can draw near to God in prayer. How we can pray to Him in the right way in spirit and in truth. John 4: In this lesson, we are going to discover how we can be sure that God hears us whenever we pray to Him. The most important principle for this is faith. Hebrews 11:6 ‘But without faith it is impossible to please Him, for he who comes to God must believe that He is, and that He is a rewarder of those who diligently seek Him.’ When we draw near to God with doubt and unbelief in our hearts, our prayer will unfortunately bear no fruit. James 1:6-7 ‘But let him ask in faith, with no doubting, for he who doubts is like a wave of the sea driven and tossed by the wind. For let not that man suppose that he will receive anything from the Lord.’ Billions of prayers to God remain unanswered and without fruit because of doubt and unbelief.","Through empty repetitions and wrong praying. This does not have to be the case. God can and wants to answer and fulfill each prayer immediately. God can and wants to say ‘yes and amen’ to every prayer. Matthew 7:7-8 ‘Ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you. For everyone who asks receives, and he who seeks finds, and to him who knocks it will be opened.’ Jesus didn’t just speak these words for no reason. He spoke these words because it is the truth. Jesus is truth. And the truth will set you free. ANSWERED PRAYER Lesson 1. ANSWERED PRAYER | 1. NOTES 114 Pray, and it will be given to you. Yet many believers don’t see that it is given to them what they have prayed for.","Even though Jesus really says in Mark 11:24: ‘Whatever things you ask when you pray, believe that you receive them, and you will have them.’ According to Jesus, we receive everything whatever we ask for, as long as we believe it. How come we don’t receive so much of what we pray for? James 4:3 ‘You ask and do not receive, because you ask amiss, that you may spend it on your pleasures.’ If we don’t have a pure heart for God and we desire things of Him that are not in truth or in His will, these will not be answered. Jesus says very clearly what the condition is to receive from Him. John 15:7 ‘If you abide in Me, and My words abide in you, you will ask what you desire, and it shall be done for you.’ The condition is to abide in Him and that His truth, His words abide in us.","It is when we know and understand His will and are full of His truth, that we will also come to Him in accordance with that truth. If you truly know Him, you will never desire or long from Him that which you know is not in His will. When we understand what He has established in grace with His sacrifice, then we will also understand that we can only receive what He has provided for in that grace. If God has not provided for it in grace, then we should not pray for it. That prayer, that request will then go unanswered. That would be a wrong prayer. Done in unbelief. Because it has not been made available for us in grace. So we can only desire what has been provided for in grace. That is why it is important that we start discovering everything that He has provided for in grace.","Things like forgiveness of sins, being born again, healing, prosperity, rest and peace, sonship… All God’s promises and so much more Jesus has established for us in His grace. 115 2 Corinthians 1:20 ‘For all the promises of God in Him are Yes, and in Him Amen, to the glory of God through us.’ It is things like these which we may and can believe God for. If we truly know God and desire to be in His will, we will never come to Him with prayers in unbelief or for things that He has never provided for. And we will never pray to Him and beg Him for things He has long provided for. Everything is finished! God has already done it, and in that confidence we must come to Him. That is what we call faith. Faith is knowing for sure. There is no room for doubt. It is just the absolute truth.","Hebrews 11:1 ‘Now faith is the substance of things hoped for, the evidence of things not seen.’ You can’t receive anything from God without believing that He is and that He does what He says He will do. Faith is essentially the key to receiving what has been provided for in grace. You can see everything become manifest in your life what Jesus has established for us in grace, by putting your faith in that grace. Faith alone receives nothing and grace alone gives nothing. It is your faith in that grace that receives what grace has made available for everyone who believes. Your faith essentially appropriates what has already been given to you in grace when you accepted Jesus as your Lord and Savior. Mark 11:22-23 ‘Have faith in God.","For assuredly, I say to you, whoever says to this mountain, ‘Be removed and be cast into the sea,’ and does not doubt in his heart, but believes that those things he says will be done, he will have whatever he says.’ Only by faith in God, without doubt in our hearts, will we receive what we proclaim and by praying desire of the Lord. ANSWERED PRAYER | 1.17 116 So coming to God and desiring things of Him that He has already done and provided for will remain fruitless, because it is prayed in unbelief and not in truth. Desiring things of Him that do not lie in His will, or that have not been provided for in grace, will also never establish anything and those are useless, fruitless prayers. We must come to God in unfailing and rock-solid faith and trust that He wants to give us all the desires of our hearts.","We must come to Him in the right way and that is by only expecting and desiring the things of Him that have been provided for in grace. Everything else, which is outside of His will we should, if we really know God, never want or desire of Him. It is absolutely in the will of the Father that all of our prayers are answered, He wants to give you everything that you desire of Him! As long as it is in truth and in His will what you ask and desire of Him. 1 John 5:14-15 ‘Now this is the confidence that we have in Him, that if we ask anything according to His will, He hears us. And if we know that He hears us, whatever we ask, we know that we have the petitions that we have asked of Him.’ We can have confidence when we come to God, because we know that He always hears us if we pray to Him according to His will. According to His will = all things that are provided for in grace.","If I pray and thank for provision, then that is according to His will. For He has given us all things that belong to godliness. And provision is a part of godliness, since He is Jehovah Jireh, God our Provider. When I pray for healing and beforehand thank God, because it is a fact in my spirit and I want to see it manifest in my body, then that is a prayer according to His will. For by His stripes I have been healed. He is Jehovah Rapha, the Lord your Healer. And if we know that He hears us, then we also know, this is our assurance of faith, that we receive what we have prayed for. There is no room for doubt when we come to God like this and desire things of Him according to His will. 117 When we come to Him in faith, we may already see on our accounts that which we have prayed of Him in the spirit. It already is ‘yes and amen’. You can let it go immediately. It is already given to you.","Don’t think about it anymore, don’t pray for it anymore, don’t doubt about it anymore, don’t ask for it again. If Jesus prayed something to God, He never spoke about it again. According to Him, it was already done. This should be no different for us. I have prayed it, I have believed it, it is in His will, so it is so, period. The only thing that is left for us to do when we have prayed to receive or release something from Him in our lives that He has already given, is to give thanks, give thanks and give thanks. ‘Thank You that You have answered me. Thank You that You have already given it to me. Thank You, I receive the provision for my need in faith, I already have it! In Jesus’ Name!’ 2 Corinthians 5:7 ‘For we walk by faith, not by sight.’ It is so because God says that it is so! Hallelujah!"],"scriptureReferences":[],"reflectionPrompt":"What is one thing you need to understand or practice from Answered Prayer?","quickCheck":{"question":"What is the best response to this lesson on Answered Prayer?","answers":[{"id":"rush","label":"Rush to the next lesson without reflection"},{"id":"respond","label":"Reflect, pray, and take one faithful step"},{"id":"ignore","label":"Ignore it unless it feels easy"}],"correctAnswer":"respond","feedback":"Yes. The goal is not only to finish content, but to respond faithfully."},"notesPrompt":"Write one thought, question, or next step from Answered Prayer.","completionMessage":"Good. You finished one One Basics step."},"placement":{"showInDiscover":true,"discoverShelf":"One Basics 1","discoverCardLabel":"Foundations","showInJourney":true,"moduleId":"stage_2_start_following","moduleTitle":"Start Following Jesus","lessonOrder":17,"sourcePage":113,"isCoreLesson":true},"recommendedNextStep":{"label":"Write one response and continue the path","type":"reflect","targetId":"book_one_basics_1_17_answered_prayer_reflection"},"sharing":{"shareText":"This One Basics lesson helped me think about answered prayer.","shareImagePrompt":"Start Following Jesus One In Him share card for Answered Prayer"},"admin":{"packageStatus":"prepared","sourcePreApproved":true,"owner":"One In Him content team","lastUpdated":"2026-05-19","extractionStatus":"real_pdf_text_extracted","sourceRange":"One Basics 1.17"}},{"packageId":"pkg_one_basics_1_18_being_witnesses","packageTitle":"One Basics 1.18: Being Witnesses","packageType":"journey_lesson","packageGoal":"Help a learner understand being witnesses as part of the Live on Mission path and respond with one clear next step.","sourceItems":["book_one_basics_1_18_being_witnesses"],"primaryItemId":"book_one_basics_1_18_being_witnesses","primaryMedium":"read","speakerOrAuthor":{"id":"author_johan_toet","name":"Johan Toet","role":"author"},"language":"en","contentType":"study_guide","length":{"seconds":0,"readingMinutes":8,"display":"8 min read"},"fallbackPlan":{"cannotWatch":"book_one_basics_1_18_being_witnesses","cannotListen":"book_one_basics_1_18_being_witnesses","cannotRead":"book_one_basics_1_18_being_witnesses_audio_future"},"journeyStage":{"stage":4,"name":"Live on Mission","slug":"mission","colour":"#8b2218","moduleId":"stage_4_live_on_mission"},"questionsAnswered":["What does being witnesses mean for following Jesus?","How does Scripture shape my understanding of being witnesses?","What is one practical response to being witnesses?"],"topics":["Evangelism","One Basics 1","Live on Mission","Discipleship"],"learnerSession":{"openingPrompt":"Take one clear step in being witnesses.","contentSummary":"In this lesson, we are going to talk about being ‘witnesses’. About ‘what’ a witness is. And ‘what’ we must witness about. Acts 1:8 ‘But you shall receive power when the Holy Spirit has come upon you; and you shall be witnesses to Me in Jerusalem, and in all Judea and Samaria, and to the end of the earth.’ If you are baptized with the Holy Spirit, then you receive the ‘power’ of the Holy Spirit which we have talked a...","readBody":["In this lesson, we are going to talk about being ‘witnesses’. About ‘what’ a witness is. And ‘what’ we must witness about. Acts 1:8 ‘But you shall receive power when the Holy Spirit has come upon you; and you shall be witnesses to Me in Jerusalem, and in all Judea and Samaria, and to the end of the earth.’ If you are baptized with the Holy Spirit, then you receive the ‘power’ of the Holy Spirit which we have talked about, and you will be a ‘witness’. That Is the purpose. ‘Being’ a witness. Not only ‘doing’ but also ‘being’. What exactly is a witness? A witness is someone who has ‘seen something’ or ‘heard something’ and he or she passes this ‘truthfully’ on to another. Imagine that you see a collision happening. Someone runs a red light and collides into another car. The police come to ask if anyone has seen anything.","Then you can witness that the person ran a red light, which caused the accident. Now of course there are always people who will give a ‘false witness’, who are ‘unreliable’ and twist the facts. False testimonies were also given against Jesus. Mark 14:56 ‘For many bore false witness against Him, but their testimonies did not agree.’ The Bible teaches us as children of God to not ‘bear false witness’. Mark 10:19 We must always ‘speak the truth’ and if we are witnesses, we must always bear witness of the truth. An honest and righteous person will always give an honest and truthful testimony. Jesus Himself ‘witnessed’ of what He had seen and heard. BEING WITNESSES Lesson 1. 18 121 John 3:32 ‘And what He has seen and heard, that He testifies; and no one receives His testimony.’ They didn’t receive it, but He still spoke the truth because He is the truth! Amen?","Jesus gave His disciples the ‘commission’ to bear witness. John 15:27 ‘And you also will bear witness, because you have been with Me from the beginning.’ Luke 24:46-48 ‘Then He said to them, “Thus it is written, and thus it was necessary for the Christ to suffer and to rise from the dead the third day, and that repentance and remission of sins should be preached in His name to all nations, beginning at Jerusalem. And you are witnesses of these things.”’ They had seen and heard it and they had to bear witness of it. And they did that. Acts 2:32 ‘This Jesus God has raised up, of which we are all witnesses.’ Acts 4:20 ‘For we cannot but speak the things which we have seen and heard.’ They went around everywhere to bear witness of what they had seen and heard. This way they spread the Gospel. The apostle Paul was also called to be a witness.","Acts 22:14-15 ‘Then he said, “The God of our fathers has chosen you that you should know His will, and see the Just One, and hear the voice of His mouth. For you will be His witness to all men of what you have seen and heard.”’ It is so important that we pass on what we have seen and what we have heard. All His disciples witnessed of Him. We too as His disciples should bear witness of Him everywhere. He commands us to do this in Acts 1:8, ‘You shall be witnesses to Me.’ What an honor that King Jesus entrusts us with witnessing ‘for Him’ and ‘of’ Him in this world! We can witness of Him, because we have seen and heard Him. We have seen and heard Him spiritually, that is why we are here! BEING WITNESSES | 1.18 122 And so we can bear witness of what we have seen and heard. Do you need to have studied theology to be able to bear witness? No, a witness is what you ‘are’ and what you ‘do’.","It is about your personal testimony. Not only that you witness about what the Bible says, because people can read that for themselves. But it is good to use Bible verses to substantiate your story. Just bear witness of what God has done in your life. The Bible can then confirm ‘what you say’. A witness doesn’t have to ‘dispute’, by the way. It is your testimony! You can tell/witness to everyone what Jesus has done for you and how that has completely transformed your life. Everyone has a testimony. Maybe you say, ‘Well, I don’t have a stunner of a testimony.’ That is a lie. Everyone who can bear witness of Jesus and of his or her encounter with the living God has a ‘stunner of a testimony’! Because who can say anything like, ‘I know God. He is my ‘Father’. I walk with Him. He saved me!’ Everyone who is a child of God has an amazing testimony to share! Amen?","If we bear witness with our words about Jesus to people, we shouldn’t beat them over the head with ‘loads of’ or ‘only’ Bible verses. The best way you can reach people is with your ‘personal’ story. About your encounter with Jesus. When you get into a conversation with someone you just tell what Jesus has done for you and how that has transformed your life. Just stay close to yourself. Then people can identify with you and you can reach their hearts. In this way you share the Gospel. Because it is good news that they hear, that what God has done for you He also wants to do for them. It is good news, that there is a way out to a better life and that His Name is Jesus. You bear witness of that with your personal story. Amen? You should never point people to their ‘mistakes and failures’, by the way. You will never be able to reach them that way. Jesus didn’t do that either.","Jesus was a friend of the sinners! 123 He came especially for the sinners to die for them! Not to ‘condemn’ them. He didn’t condemn, He didn’t reject anyone, He loved them and reached their hearts. You were a sinner too and He came and died for you. That is what you should bear witness of now, how He saved you. You don’t have to convince the other person of his or her shortcomings, that isn’t important. The important thing, is that he gets saved! This is what God asks of us, that we are just witnesses. But we shouldn’t only be witnesses by sharing it with our words, only by ‘saying’ what God has done for us. A witness is also ‘showing’ what God has done in their life! Believe me, you can use the most beautiful ‘words’ to tell of how amazing God is and all that He has done for you.","But if your ‘behavior’, your ‘walk’ and ‘talk’ ‘shows’ something very different than what you ‘say’, your testimony is useless. You have to ‘show’ how God has changed your life! Be a light in this world, don’t just say, ‘God loves you.’ But also show them. Don’t just say, ‘God wants to help you.’ But really help people. Don’t just say, ‘God really changed me.’ But really show it in everything you do. Only then will you give a good, reliable testimony of King Jesus! Amen? BEING WITNESSES | 1.18 124 1 Read: Acts 1:8 ‘But you shall receive power when the Holy Spirit has come upon you; and you shall be witnesses to Me in Jerusalem, and in all Judea and Samaria, and to the end of the earth.’ Jesus says that we will be ‘witnesses’. Question: What will we be witnesses of? 2 Question: How do we witness of Jesus?","Do we do that by: A) Talking about Him B) Showing Him through our lives C) Both A and B 3 Question: Do you bear witness of Jesus in your life as we have covered in this lesson? Reactions and discussion Answers in the back of the study guide QUESTIONS With lesson 1. 18 BEING WITNESSES"],"scriptureReferences":[],"reflectionPrompt":"What is one thing you need to understand or practice from Being Witnesses?","quickCheck":{"question":"What is the best response to this lesson on Being Witnesses?","answers":[{"id":"rush","label":"Rush to the next lesson without reflection"},{"id":"respond","label":"Reflect, pray, and take one faithful step"},{"id":"ignore","label":"Ignore it unless it feels easy"}],"correctAnswer":"respond","feedback":"Yes. The goal is not only to finish content, but to respond faithfully."},"notesPrompt":"Write one thought, question, or next step from Being Witnesses.","completionMessage":"Good. You finished one One Basics step."},"placement":{"showInDiscover":true,"discoverShelf":"One Basics 1","discoverCardLabel":"Foundations","showInJourney":true,"moduleId":"stage_4_live_on_mission","moduleTitle":"Live on Mission","lessonOrder":18,"sourcePage":120,"isCoreLesson":true},"recommendedNextStep":{"label":"Write one response and continue the path","type":"reflect","targetId":"book_one_basics_1_18_being_witnesses_reflection"},"sharing":{"shareText":"This One Basics lesson helped me think about being witnesses.","shareImagePrompt":"Live on Mission One In Him share card for Being Witnesses"},"admin":{"packageStatus":"prepared","sourcePreApproved":true,"owner":"One In Him content team","lastUpdated":"2026-05-19","extractionStatus":"real_pdf_text_extracted","sourceRange":"One Basics 1.18"}},{"packageId":"pkg_one_basics_1_19_preaching_the_kingdom","packageTitle":"One Basics 1.19: Preaching the Kingdom","packageType":"journey_lesson","packageGoal":"Help a learner understand preaching the kingdom as part of the Live on Mission path and respond with one clear next step.","sourceItems":["book_one_basics_1_19_preaching_the_kingdom"],"primaryItemId":"book_one_basics_1_19_preaching_the_kingdom","primaryMedium":"read","speakerOrAuthor":{"id":"author_johan_toet","name":"Johan Toet","role":"author"},"language":"en","contentType":"study_guide","length":{"seconds":0,"readingMinutes":11,"display":"11 min read"},"fallbackPlan":{"cannotWatch":"book_one_basics_1_19_preaching_the_kingdom","cannotListen":"book_one_basics_1_19_preaching_the_kingdom","cannotRead":"book_one_basics_1_19_preaching_the_kingdom_audio_future"},"journeyStage":{"stage":4,"name":"Live on Mission","slug":"mission","colour":"#8b2218","moduleId":"stage_4_live_on_mission"},"questionsAnswered":["What does preaching the kingdom mean for following Jesus?","How does Scripture shape my understanding of preaching the kingdom?","What is one practical response to preaching the kingdom?"],"topics":["Evangelism","One Basics 1","Live on Mission","Discipleship"],"learnerSession":{"openingPrompt":"Take one clear step in preaching the kingdom.","contentSummary":"In this lesson we will talk about the ‘great commission’, about which message we should be preaching. If you read the New Testament, you only come across one message that is preached and that is: ‘The Kingdom of God’. We must understand ‘why’ this Kingdom was preached and ‘what kind of’ Kingdom this is. When Jesus started His ministry, He immediately preached this ‘Gospel’ of the Kingdom of God: Mark 1:15 ‘The time i...","readBody":["In this lesson we will talk about the ‘great commission’, about which message we should be preaching. If you read the New Testament, you only come across one message that is preached and that is: ‘The Kingdom of God’. We must understand ‘why’ this Kingdom was preached and ‘what kind of’ Kingdom this is. When Jesus started His ministry, He immediately preached this ‘Gospel’ of the Kingdom of God: Mark 1:15 ‘The time is fulfilled, and the kingdom of God is at hand. Repent, and believe in the gospel.’ Jesus is talking about a Kingdom with a King Who would take down the kingdom of ‘darkness’ and render it powerless! A King that was ‘foretold’ in the old ‘scriptures’ that the Jewish people were familiar with. More than 700 years before Christ the prophet Isaiah prophesied. Isaiah 9:6-7 ‘For unto us a Child is born, unto us a Son is given; And the government will be upon His shoulder.","And His name will be called Wonderful, Counselor, Mighty God, Everlasting Father, Prince of Peace . Of the increase of His government and peace there will be no end… From that time forward, even forever.’ Daniel prophesied in Daniel 7:13-14: ‘I was watching in the night visions, and behold, One like the Son of Man, coming with the clouds of heaven! He came to the Ancient of Days [God], and they brought Him near before Him. Then to Him was given dominion and glory and a kingdom, that all peoples, nations, and languages should serve Him. His dominion is an everlasting dominion, which shall not pass away, and His kingdom the one which shall not be destroyed.’ So a King was foretold Who was to ‘reign’ for all eternity. A king cannot be a king without a kingdom. So ‘where’ and ‘when’ will this King be born and this Kingdom be established?","The Jews were looking forward to it because of the many prophecies. PREACHING THE KINGDOM Lesson 1. 19 127 Isaiah prophesies in Isaiah 7:14 ‘Therefore the Lord Himself will give you a sign: Behold, the virgin shall conceive and bear a Son, and shall call His name Immanuel.’ Which means: ‘God with us’. The Lord will give us a sign and this sign we find in the Gospel of Matthew.","After the Holy Spirit had come upon Mary an angel appeared to Joseph: Matthew 1:21-23 ‘And she will bring forth a Son, and you shall call His name ‘Yeshua’ [God saves/redeems], for He will save His people from their sins.” So all this was done that it might be fulfilled which was spoken by the Lord through the prophet, saying: “Behold, the virgin shall be with child, and bear a Son, and they shall call His name Immanuel,” which is translated, “God with us.”’ Jesus is the ‘Son’, the ‘Christ’, the ‘Anointed One’, the ‘Messiah’ Who was foretold! Acts 2:36 ‘Therefore let all the house of Israel know assuredly that God has made this Yeshua, whom you crucified, both Lord and Christ.’ So Jesus is the ‘Lord of lords’ and the ‘King of kings’. He is the ‘Majesty’’. And His Kingdom is Here. With Him the Kingdom of God came to earth.","And this ‘Kingdom’ is what He preached from the very first day of His ‘ministry’ until His last physical day here on earth. Mark 1:14 ‘Now after John was put in prison, Jesus came to Galilee, preaching the gospel of the kingdom of God.’ Acts 1:3 ‘To whom He also presented Himself alive after His suffering by many infallible proofs, being seen by them during forty days and speaking of the things pertaining to the kingdom of God.’ During His ‘ministry’ here on earth He sent the twelve to do exactly the same: Matthew 10:7-8 ‘And as you go, preach, saying, “The kingdom of heaven is at hand.” Heal the sick, cleanse the lepers, raise the dead, cast out demons.’ Now you have probably heard a preacher or pastor say that ‘only the twelve’ were called to go out to do great things in His Name. PREACHING THE KINGDOM | 1.19 128 But the Bible teaches us something ‘very different’.","In Luke chapter 10, we read that he sends out ‘seventy’ more. And then He says in Luke 10:8-9 ‘Whatever city you enter, and they receive you, eat such things as are set before you. And heal the sick there, and say to them, “The kingdom of God has come near to you.’’’ And eventually He sends us ‘all’ to preach this Gospel. After all, He continually calls us to be witnesses of Him. And if we testify of Him then we must also testify of His ‘Kingdom’. It is the great commission for all believers! Matthew 28:19 ‘Go therefore, teach all the nations. ‘ Teach them what? The ‘things’ of the Kingdom. The things that He commanded us to abide by! In Matthew alone Jesus speaks sixty-four times about the Kingdom of God!","The three most important verses in the context of this lesson are: Matthew 4:17, where Jesus Himself preaches: ‘Repent, for the kingdom of heaven is at hand.’ In Matthew 10:7, where He gives the disciples this command: ‘And as you go, preach, saying, “The kingdom of heaven is at hand.’’’ And finally He says in Matthew 24:14 ‘And this gospel of the kingdom will be preached in all the world as a witness to all the nations, and then the end will come.’ So Jesus Himself preached the Kingdom, and everywhere in the New Testament you see that the Kingdom was preached by His disciples. We are His ‘disciples’. He commands us to preach this Kingdom! So it’s clear, the Kingdom of God must be preached. But why is it so important that we do this? That we preach the Kingdom and not just ‘deliverance and ‘being saved’?","Because the coming of Jesus brought ‘so much more’ than only deliverance and being saved. With Him the Kingdom of God came to earth. The Kingdom of God means: a Kingdom of power, a Kingdom of healing. A Kingdom of deliverance, a Kingdom of peace. 129 A Kingdom of joy, a Kingdom of prosperity. A Kingdom of provision, a Kingdom of life. A Kingdom of restoration, a Kingdom of grace. A Kingdom of unconditional love, hallelujah! When this new Kingdom came, it changed the whole world! It was the ‘fulfillment’ of everything they had been looking forward to, a new era had begun! John 1:36 ‘And looking at Jesus as He walked, he [John the Baptist] said, “Behold the Lamb of God!”’ That speaks of the ‘Messiah’ Who was foretold in the Old Scriptures. Andrew, Simon Peter’s brother, was one of the two who had heard this from John and had followed Jesus.","Andrew met his own brother first and said to him, ‘We have found the Messiah’, which is translated as the ‘Christ’. And he led him to Jesus. In John 1:44, Philip had an ‘encounter’ with Jesus and immediately after found his buddy Nathanael and said to him, “We have found Him of whom Moses in the law, and also the prophets, wrote—Jesus of Nazareth, the son of Joseph.” When Nathanael had an encounter with King Jesus, he answered Him out of revelation and said to Him, ‘Rabbi, You are the Son of God! You are the King of Israel! The Christ! That means ‘Anointed One’. Anointed King of a Kingdom. And to this Kingdom of Yeshua the Christ there will never be an end in all eternity! Amen! With the coming of King Yeshua, not only ‘redemption and salvation’ came. When King Yeshua came, there came with Him the ‘Kingdom of God’ on earth. A Kingdom of power and might, of signs and wonders!","So when we preach the Kingdom, signs and wonders will follow, because they part and parcel of the message of the Kingdom. The message of the Kingdom is about the ‘completed work’ of King Jesus. It is a message about Christ Who redeemed us from the curse of the law and the power of sin. It declares that we can now be delivered from the realm of darkness and conveyed into His Kingdom. Into the light. The message of the Kingdom that we preach is about a Kingdom full of life and love and grace, there is no sickness and no misery, no poverty and no pain, there is no depression and no condemnation. There is no damage and there is no shame, it is a Kingdom of restoration, of relationship and of peace with God and an eternal dwelling in His presence. A Kingdom that supplies for all our needs. It is the Kingdom of which we have become heirs in Christ Jesus."],"scriptureReferences":[],"reflectionPrompt":"What is one thing you need to understand or practice from Preaching the Kingdom?","quickCheck":{"question":"What is the best response to this lesson on Preaching the Kingdom?","answers":[{"id":"rush","label":"Rush to the next lesson without reflection"},{"id":"respond","label":"Reflect, pray, and take one faithful step"},{"id":"ignore","label":"Ignore it unless it feels easy"}],"correctAnswer":"respond","feedback":"Yes. The goal is not only to finish content, but to respond faithfully."},"notesPrompt":"Write one thought, question, or next step from Preaching the Kingdom.","completionMessage":"Good. You finished one One Basics step."},"placement":{"showInDiscover":true,"discoverShelf":"One Basics 1","discoverCardLabel":"Foundations","showInJourney":true,"moduleId":"stage_4_live_on_mission","moduleTitle":"Live on Mission","lessonOrder":19,"sourcePage":126,"isCoreLesson":true},"recommendedNextStep":{"label":"Write one response and continue the path","type":"reflect","targetId":"book_one_basics_1_19_preaching_the_kingdom_reflection"},"sharing":{"shareText":"This One Basics lesson helped me think about preaching the kingdom.","shareImagePrompt":"Live on Mission One In Him share card for Preaching the Kingdom"},"admin":{"packageStatus":"prepared","sourcePreApproved":true,"owner":"One In Him content team","lastUpdated":"2026-05-19","extractionStatus":"real_pdf_text_extracted","sourceRange":"One Basics 1.19"}},{"packageId":"pkg_one_basics_1_20_the_power_of_words","packageTitle":"One Basics 1.20: The Power of Words","packageType":"journey_lesson","packageGoal":"Help a learner understand the power of words as part of the Live on Mission path and respond with one clear next step.","sourceItems":["book_one_basics_1_20_the_power_of_words"],"primaryItemId":"book_one_basics_1_20_the_power_of_words","primaryMedium":"read","speakerOrAuthor":{"id":"author_johan_toet","name":"Johan Toet","role":"author"},"language":"en","contentType":"study_guide","length":{"seconds":0,"readingMinutes":13,"display":"13 min read"},"fallbackPlan":{"cannotWatch":"book_one_basics_1_20_the_power_of_words","cannotListen":"book_one_basics_1_20_the_power_of_words","cannotRead":"book_one_basics_1_20_the_power_of_words_audio_future"},"journeyStage":{"stage":4,"name":"Live on Mission","slug":"mission","colour":"#8b2218","moduleId":"stage_4_live_on_mission"},"questionsAnswered":["What does the power of words mean for following Jesus?","How does Scripture shape my understanding of the power of words?","What is one practical response to the power of words?"],"topics":["Bible","One Basics 1","Live on Mission","Discipleship"],"learnerSession":{"openingPrompt":"Take one clear step in the power of words.","contentSummary":"Today we are going to talk about the ‘power’ of our words. The words we utter and confess. Without realizing it, we speak many words each day. On average a person speaks 15.000 words a day! We speak ‘blessing’ and we speak ‘curse’. Words of ‘life’ and words of ‘death’. However, there is a lot of power in our words, so we have to be very careful with what we ‘speak’. King David knew that, he says in Psalm 141:3, ‘Set ...","readBody":["Today we are going to talk about the ‘power’ of our words. The words we utter and confess. Without realizing it, we speak many words each day. On average a person speaks 15.000 words a day! We speak ‘blessing’ and we speak ‘curse’. Words of ‘life’ and words of ‘death’. However, there is a lot of power in our words, so we have to be very careful with what we ‘speak’. King David knew that, he says in Psalm 141:3, ‘Set a guard, O Lord, over my mouth; keep watch over the door of my lips.’ David knew that he could speak things that could harm him or others. We need to guard our mouths from speaking words of ‘unbelief’ that could harm us. We must be aware of our proclamation: Your confession, your ‘proclamation’ should be in line with the Word of God. Imagine you are in a place where you have ‘no faith’ yet, don’t speak out that ‘unbelief’. Don’t speak unbelief!","Don’t proclaim ‘I can’t do that’ or ‘I don’t have that. Be quietly about it until faith rises up in you. So that you can convert your unbelief into faith. Your ‘I can’t’ into ‘I can!’ Your ‘I don’t have’ into ‘I do have!’ God created everything with His Word. Everything is created by His Word and can only exist through His Word. Hebrews 11:3 ‘By faith we understand that the worlds were framed by the word of God, so that the things which are seen were not made of things which are visible.’ THE POWER OF WORDS Lesson 1. THE POWER OF WORDS | 1.20 134 Hebrews 1:3 ‘Who being the brightness of His glory and the express image of His person, and uphol- ding all things by the word of His power…’ God created everything with His ‘Word’. He spoke, ‘Let there be light!’ And there was light. He spoke everything there is into ‘being’.","Romans 4:17 ‘God, who gives life to the dead and calls those things which do not exist as though they did.’ We can learn from the Word that when you want to bring something from the ‘invisible’ into the ‘visible world’, you need words for it. Words are necessary to make ‘spiritual’ truth manifest in the ‘natural’! Without words ‘nothing’ happens. That is why God gave us His Word to speak! But if we don’t speak the words of God, words of life, we automatically speak words of unbelief, of death. This will then also become ‘visible’ in your life. For we are the ‘product’ of our ‘own words’ and of the words that others have ‘uttered’ over us and which we then have ‘believed’. Divorce starts with words; ‘I don’t love you.’ A fight starts with words; ‘You’re an idiot.’ Sickness starts with words; ‘I think I’m getting the flu.’ Failure starts with words; ‘I can’t do it’.","We ‘curse’ ourselves with words and we ‘bless’ ourselves with words. James 3:10 ‘Out of the same mouth proceed blessing and cursing. My brethren, these things ought not to be so.’ We are supposed to speak ‘life’, speak ‘faith’ and not curse ourselves and others. Jesus teaches us in Matthew 6:31 ‘Therefore do not worry, saying, “What shall we eat?” or “What shall we drink?” or “What shall we wear?”’ Why should we not ‘say’ all these things? Because those words are ‘harmful’ to you and they rob you of the truth in Christ! they make His promises not become a reality in your life because you decide to ‘believe something contrary’ to what He says. 135 You shouldn’t ‘confess’ your worries. You must express His truth! God says in His Word, ‘I will supply your every need according to My riches. I am your Shepherd, you will lack nothing! I have blessed you with every spiritual blessing.","I became poor so that you could be rich! Don’t worry, because I take care of you!’ That is what God ‘says’ in His Word. So we must ‘believe and confess’ what God says and not what your ‘circumstances’ say. So don’t speak forth your worries! For our tongue is a dangerous weapon! James 3:5-6 ‘Even so the tongue is a little member and boasts great things. See how great a forest a little fire kindles! And the tongue is a fire, a world of iniquity. The tongue is so set among our members that it defiles the whole body, and sets on fire the course of nature; and it is set on fire by hell.’ With our tongues we can do great harm if we speak from the ‘wrong source’. Proverbs 18:21 ‘Death and life are in the power of the tongue.’ Death and life are in the words that we speak. Therefore set a guard over your lips and only speak words of life and faith!","We can truly cause impossible things to come to pass with our words, Jesus teaches us this truth. Mark 11:23 ‘For assuredly, I [AM] say to you, whoever says to this mountain, “Be removed and be cast into the sea,” and does not doubt in his heart, but believes that those things he says will be done, he will have whatever he says.’ Jesus teaches us the ‘power’ of our words here. We can ‘speak’ against the mountains in our lives. If we don’t doubt but ‘believe’ what we ‘speak’, it will happen what we ‘speak’. ‘Faith is the key to making the words you speak become a reality.’ So it’s important that we speak our words in faith and conviction. And be careful with what you speak! For example, we should never ‘take possession’ of sickness by saying, ‘I ‘have’ this, or I ‘have’ that.’ THE POWER OF WORDS | 1.20 136 Or: ‘The doctor says that I ‘have this’, or ‘this is wrong with me’. Don’t say it!","Don’t repeat it! Don’t confess it! You can say, ‘This sickness ‘is attacking me’, but by His stripes I am healed!’ Don’t take possession of sickness but of God’s promises! Mark 5:35-36 ‘While He was still speaking, some came from the ruler of the synagogue’s house who said, “Your daughter is dead. Why trouble the Teacher any further?” As soon as Jesus heard the word that was spoken, He said to the ruler of the synagogue, “Do not be afraid; only believe.”’ Jesus ‘countered’ that bad news! He says, don’t listen to bad news full of unbelief, don’t listen to circumstances in the natural! Don’t repeat the words expressing bad news! ‘The doctor says;’ ‘My boss says,’ ’The news says.’ No! God says! Only believe God! Isaiah 33:24 ‘And the inhabitant will not say, “I am sick”.’ It’s incredibly important to speak words of life, even when you don’t feel it or even see it for a while.","Let your words be words of faith. Not of fear. Not of worry. Doubt. Unbelief. Make sure that your heart is filled with the Word of God. Then life will flow out of it. Our words exert an incredible influence on our lives. Matthew 12:36-37 ‘But I say to you that for every idle word men may speak, they will give account of it in the day of judgment. For by your words you will be justified, and by your words you will be condemned.’ How were we saved? By the words we spoke and believed in our hearts. Romans 10:8-10 ‘But what does it say? “The word is near you, in your mouth and in your heart” (that is, the word of faith which we preach): that if you confess with your mouth the Lord Jesus and believe in your heart that God has raised Him from the dead, you will be saved.","For with the heart one believes unto righteousness, and with the mouth confession is made unto salvation.’ 137 Your future is in your mouth and in your heart! It’s in the words that we believe and that we speak. If you spoke your own salvation and redemption into being, set your rebirth into motion! Think about how all the other things will come to pass in your life in exactly the same way! By the words you speak and believe! We must speak words of life, only words of life. Jesus only spoke ‘words of life’. John 6:63 ‘It is the Spirit who gives life; the flesh profits nothing. The words that I speak to you are spirit, and they are life.’ He ‘silenced the storm’ with words.","Mark 4:39 ‘Then He arose and rebuked the wind, and said to the sea, “Peace, be still!” And the wind ceased and there was a great calm.’ He ‘forgave’ with words.’ Luke 7:48 ‘Then He said to her, “Your sins are forgiven.”’ He ‘healed’ with words. Matthew 8:8 ‘The centurion answered and said, “Lord, I am not worthy that You should come under my roof. But only speak a word, and my servant will be healed.”’ He ‘cast out demons’ with words. Matthew 8:16 ‘When evening had come, they brought to Him many who were demon-possessed. And He cast out the spirits with a word...’ He ‘raised the dead’ with words. John 11:43 ‘Now when He had said these things, He cried with a loud voice, “Lazarus, come forth!”’ If Jesus ‘spoke’ all these things ‘into being’ with ‘words’, then we must also speak ‘His words’ over every situation in our lives!"],"scriptureReferences":[],"reflectionPrompt":"What is one thing you need to understand or practice from The Power of Words?","quickCheck":{"question":"What is the best response to this lesson on The Power of Words?","answers":[{"id":"rush","label":"Rush to the next lesson without reflection"},{"id":"respond","label":"Reflect, pray, and take one faithful step"},{"id":"ignore","label":"Ignore it unless it feels easy"}],"correctAnswer":"respond","feedback":"Yes. The goal is not only to finish content, but to respond faithfully."},"notesPrompt":"Write one thought, question, or next step from The Power of Words.","completionMessage":"Good. You finished one One Basics step."},"placement":{"showInDiscover":true,"discoverShelf":"One Basics 1","discoverCardLabel":"Foundations","showInJourney":true,"moduleId":"stage_4_live_on_mission","moduleTitle":"Live on Mission","lessonOrder":20,"sourcePage":133,"isCoreLesson":true},"recommendedNextStep":{"label":"Write one response and continue the path","type":"reflect","targetId":"book_one_basics_1_20_the_power_of_words_reflection"},"sharing":{"shareText":"This One Basics lesson helped me think about the power of words.","shareImagePrompt":"Live on Mission One In Him share card for The Power of Words"},"admin":{"packageStatus":"prepared","sourcePreApproved":true,"owner":"One In Him content team","lastUpdated":"2026-05-19","extractionStatus":"real_pdf_text_extracted","sourceRange":"One Basics 1.20"}},{"packageId":"pkg_one_basics_1_21_faith","packageTitle":"One Basics 1.21: Faith","packageType":"journey_lesson","packageGoal":"Help a learner understand faith as part of the Live on Mission path and respond with one clear next step.","sourceItems":["book_one_basics_1_21_faith"],"primaryItemId":"book_one_basics_1_21_faith","primaryMedium":"read","speakerOrAuthor":{"id":"author_johan_toet","name":"Johan Toet","role":"author"},"language":"en","contentType":"study_guide","length":{"seconds":0,"readingMinutes":8,"display":"8 min read"},"fallbackPlan":{"cannotWatch":"book_one_basics_1_21_faith","cannotListen":"book_one_basics_1_21_faith","cannotRead":"book_one_basics_1_21_faith_audio_future"},"journeyStage":{"stage":4,"name":"Live on Mission","slug":"mission","colour":"#8b2218","moduleId":"stage_4_live_on_mission"},"questionsAnswered":["What does faith mean for following Jesus?","How does Scripture shape my understanding of faith?","What is one practical response to faith?"],"topics":["Faith","One Basics 1","Live on Mission","Discipleship"],"learnerSession":{"openingPrompt":"Take one clear step in faith.","contentSummary":"Today we’re going to talk about ‘acting faith’. There are many people who ‘say’ they believe but if you look at their lives you often don’t or hardly see ‘any fruit’ of what they ‘say’ they believe. Or they ‘say’ they believe but then they immediately afterwards say, ‘I don’t do a lot with it’, or ‘I don’t practice it’. You can’t say that you believe and then not ‘do’ what He asks of us! Faith is ‘action’, believing ...","readBody":["Today we’re going to talk about ‘acting faith’. There are many people who ‘say’ they believe but if you look at their lives you often don’t or hardly see ‘any fruit’ of what they ‘say’ they believe. Or they ‘say’ they believe but then they immediately afterwards say, ‘I don’t do a lot with it’, or ‘I don’t practice it’. You can’t say that you believe and then not ‘do’ what He asks of us! Faith is ‘action’, believing is a ‘verb’. James 2:20 says that ‘faith without works is dead’. And those aren’t ‘works of the law’ but ‘works of faith’. You say that you believe something, then show that in your walk and talk! Only ‘saying’ that you believe but not walking out that faith is completely useless. Your life of faith is as dead as a bird according to the Bible. We are talking about ‘acting faith’. If your faith doesn’t act, your faith is ‘dead’.","A dead life of faith is a ‘fruitless’ life of faith. Jesus says, every branch in Me that does not bear fruit will be taken away. John 15:2 Only ‘acting faith’ receives what is provided for in grace. It takes ‘possession of it’ as it were. James 2:15-17 says, ‘If a brother or sister is naked and destitute of daily food, and one of you says to them, “Depart in peace, be warmed and filled,” but you do not give them the things which are needed for the body, what does it profit? Thus also faith by itself, if it does not have works, is dead.’ ‘Saying’ but not ‘doing’ cannot please God. You must add deeds to what you ‘say’ you believe. Showing it in your walk and talk. FAITH Lesson 1. FAITH | 1.21 142 Some people say that they only have a ‘very little bit of faith’ as small as a ‘mustard seed’ and that this is enough for God. That is not what God teaches us, that is not faith at all.","Jesus says in Matthew 17:20, ‘If you have faith as a mustard seed, you will say to this mountain, “Move from here to there,” and it will move; and nothing will be impossible for you.’ Jesus says if you have faith as a mustard seed nothing is impossible anymore. And people think that you need a very ‘small’ or ‘little bit’ of faith to move mountains, but that is not what Jesus is saying here at all! If you really need ‘little faith’ then why does Jesus say to peter in Matthew 14:31 when he sank in the storm: ‘O you of little faith, why did you doubt?’ Because he had ‘little faith’, he sank to the bottom. To the Syro-Phoenician woman who believed Him just for the ‘crumbs’ for her daughter’s healing, he says in Matthew 15:28, ‘O woman, ‘great’ is your faith!’ Because her faith was ‘great’ her daughter was healed.","There is a significant difference in faith ‘as small as a crumb’ or believing that even that crumb is ‘enough’ for a miracle. One is a small ‘brings nothing to pass’ and ‘sinking to the bottom’ faith and the other is a ‘mountain moving’ and ‘great faith’! A Kingdom faith! So Jesus is not talking about a faith as ‘small as a mustard seed’, He is talking about faith ‘as a mustard seed’. If you have faith ‘as’ a mustard seed, you can move mountains and nothing is impossible for you. What kind of ‘faith’ does that mustard seed have? That mustard seed knows its identity, it may be ‘the smallest’ in the natural but it has the potential to become the ‘very greatest’. It is aware of its DNA and is predestined to become the largest tree, in which the birds build nests in its branches and the people can sit in its shade.","So it is not at all considering what it looks like ‘in the natural’, what is before its eyes. It ‘just believes’ that what is put in it will come to pass. That is a Kingdom faith! So just believe God and don’t look at the natural. 143 For with God ‘all’ things are possible! All things! But if you ‘don’t believe’ God, you can make nothing come to pass and you ‘limit’ Him from doing anything. Psalm 78:41 says that the Israelites ‘limited’ the God of Israel. They had forgotten what great things God had done for them and they didn’t trust in Him anymore. You can limit Him! How? By ‘not believing’ Him for what He wants and can do in and through your life! Not walking and talking in it. And you can limit Him by forgetting all His benefits for you. Psalm 103:1-2 ‘Bless the Lord, O my soul; and all that is within me, bless His holy name!","Bless the Lord, O my soul, and forget not all His benefits.’ We should never forget what He did for us! He has always been so faithful, He will always remain faithful. Just believe Him! And walk in it. Because only if you actively believe, you can move mountains. Without acting faith you can do absolutely nothing! Hebrews 11:6 ‘But without [acting] faith it is impossible to please Him, for he who comes to God must believe that He is, and that He is a rewarder of those who diligently seek Him.’ Believing is ‘knowing for sure’. It is the evidence of the things man cannot see. Hebrews 11:1 You must believe, know for sure, that He ‘is’! Not that He ‘can’, that He ‘does’, no, that He ‘is’! God ‘is’ the same yesterday and today and for eternity. Acting faith doesn’t wait, it doesn’t say, ‘If You were here’, or ‘I’ll believe afterwards if’, or ‘I’ll believe it when I see it’.","That also happened with Lazarus. In John 11:1-45 we can read his story. Lazarus had died and Jesus went to his grave. First to fall at His feet, when He arrived was Martha; she says in verse 24, ‘I know that he will rise again in the resurrection at the last day.’ Then Mary falls at His feet and she complains, ‘If You had been here, my brother would not have died.’ FAITH | 1.21 144 And finally after Jesus had raised Lazarus from the dead, the Jews who were present and had seen this suddenly believed. Mary believed for the ‘past’. ‘If You had come earlier’. Verse 32. Martha believed for the ‘future’. ‘I believe in the resurrection’. Verse 24 Yet others only believed when they ‘saw’ it. Verse 45. But we can learn to believe God for ‘now’. When you don’t see anything yet, when it seems almost impossible, that is the moment to believe God and to start acting according to His Word.","You can be the difference! Now! You only have to walk in faith! Go and apply what He says in His Word, throw off all doubt and stand in your new identity and authority! You can learn to see who you are in Christ and what you can do in Him Who gives you power. Just start taking in His Word and walk it out in your life. Just say: ‘If You say it then it is so, I will act according to Your Word. I won’t sit still anymore waiting for lightning to come down from heaven to get moving, I will start standing to your feet and moving because this is what I believe that You ask of me.’ Proclaim the Word, confess the Word, speak it in faith and ‘do what it says’, your life will really never be the same! Amen?","Read: Matthew 17:20 ‘If you have faith as a mustard seed, you will say to this mountain, “Move from here to there,” and it will move; and nothing will be impossible for you.’ Question: What can we do if we believe, according to Jesus? 2 Read: Hebrews 11:6 ‘But without faith it is impossible to please God.’ Question: What must we do to be able to please God, according to this verse? 3 Question: If we decide to believe God and we start ‘doing’ what He says then we can: A) Please God B) Accomplish the impossible C) Receive all His promises D) All of A, B and C Reactions and discussion Answers in the back of the study guide FAITH | 1. QUESTIONS With lesson 1. 21"],"scriptureReferences":[],"reflectionPrompt":"What is one thing you need to understand or practice from Faith?","quickCheck":{"question":"What is the best response to this lesson on Faith?","answers":[{"id":"rush","label":"Rush to the next lesson without reflection"},{"id":"respond","label":"Reflect, pray, and take one faithful step"},{"id":"ignore","label":"Ignore it unless it feels easy"}],"correctAnswer":"respond","feedback":"Yes. The goal is not only to finish content, but to respond faithfully."},"notesPrompt":"Write one thought, question, or next step from Faith.","completionMessage":"Good. You finished one One Basics step."},"placement":{"showInDiscover":true,"discoverShelf":"One Basics 1","discoverCardLabel":"Foundations","showInJourney":true,"moduleId":"stage_4_live_on_mission","moduleTitle":"Live on Mission","lessonOrder":21,"sourcePage":141,"isCoreLesson":true},"recommendedNextStep":{"label":"Write one response and continue the path","type":"reflect","targetId":"book_one_basics_1_21_faith_reflection"},"sharing":{"shareText":"This One Basics lesson helped me think about faith.","shareImagePrompt":"Live on Mission One In Him share card for Faith"},"admin":{"packageStatus":"prepared","sourcePreApproved":true,"owner":"One In Him content team","lastUpdated":"2026-05-19","extractionStatus":"real_pdf_text_extracted","sourceRange":"One Basics 1.21"}},{"packageId":"pkg_one_basics_1_22_the_name_of_jesus","packageTitle":"One Basics 1.22: The Name of Jesus","packageType":"journey_lesson","packageGoal":"Help a learner understand the name of jesus as part of the Live on Mission path and respond with one clear next step.","sourceItems":["book_one_basics_1_22_the_name_of_jesus"],"primaryItemId":"book_one_basics_1_22_the_name_of_jesus","primaryMedium":"read","speakerOrAuthor":{"id":"author_johan_toet","name":"Johan Toet","role":"author"},"language":"en","contentType":"study_guide","length":{"seconds":0,"readingMinutes":9,"display":"9 min read"},"fallbackPlan":{"cannotWatch":"book_one_basics_1_22_the_name_of_jesus","cannotListen":"book_one_basics_1_22_the_name_of_jesus","cannotRead":"book_one_basics_1_22_the_name_of_jesus_audio_future"},"journeyStage":{"stage":4,"name":"Live on Mission","slug":"mission","colour":"#8b2218","moduleId":"stage_4_live_on_mission"},"questionsAnswered":["What does the name of jesus mean for following Jesus?","How does Scripture shape my understanding of the name of jesus?","What is one practical response to the name of jesus?"],"topics":["The Name of Jesus","One Basics 1","Live on Mission","Discipleship"],"learnerSession":{"openingPrompt":"Take one clear step in the name of jesus.","contentSummary":"Today we’re going to continue in a new phase of the study in which we will look at our ‘authority’ in Christ. When we do something for the Kingdom of God, we do or should do that in the ‘Name of Jesus’. In the following lessons we will look at our ‘authority in Christ’, but today I want to zoom in on the ‘Name’ of Jesus. What does the ‘Name’ of Jesus stand for, who and what does this Name represent? It’s important to...","readBody":["Today we’re going to continue in a new phase of the study in which we will look at our ‘authority’ in Christ. When we do something for the Kingdom of God, we do or should do that in the ‘Name of Jesus’. In the following lessons we will look at our ‘authority in Christ’, but today I want to zoom in on the ‘Name’ of Jesus. What does the ‘Name’ of Jesus stand for, who and what does this Name represent? It’s important to know that the name of ‘Jesus’ is a translation of the original Hebrew ‘Yeshua’. Personally, I think that only one person is allowed to carry this Name and that is Yeshua Himself. But there are many people who call their children Jesus or Yeshua. Even before Jesus had come. Unfortunately that is the case. The ‘translation’ of the name Yeshua is Jesus in English. We can essentially look at it like this: Let’s say your name is John.","John is English but in Dutch it means ‘Johannes’ and in Spanish it is ‘Juan’. In Hebrew this name means ‘Yuhanan’ or Yochanan’. Which means ‘Yahweh is gracious’. Or ‘the one graced by God’. What a beautiful meaning this name has! However, no one calls you ‘Juan’ in Spain or ‘John’ in England, you will be called Johannes, because that is your ‘original’ name. Now, we all mean ‘Yeshua’ when we say ‘Jesus’. So it’s not necessarily ‘wrong’ to speak His Name as ‘Jesus’ if you speak this out in faith, but it is more powerful to just use His ‘original Name’. ‘Yeshua’. Yeshua means in Hebrew: Yahweh is ‘salvation’ – or God ‘saves’. THE NAME OF JESUS Lesson 1. THE NAME OF JESUS | 1.22 148 Matthew 1:21 ‘And she will bring forth a Son, and you shall call His name Yeshua, for He will save His people from their sins.’ So He received a ‘specific’ name. His Name had to represent something.","The Name of Yeshua indicates that He is our ‘deliverance’. The Bible says that we can only be saved by the Name of Yeshua. Acts 4:12 ‘Nor is there salvation in any other, for there is no other name under heaven given among men by which we must be saved.’ There is only one Name by which we can be saved and redeemed, by which we can be delivered. And that is the mighty Name of ‘Yeshua’ the ‘Hamashiach’! Romans 10:13 ‘For whoever calls on the name of the Lord [Yeshua] shall be saved.’ Yeshua has gotten many names assigned to Him, such as His Name ‘Immanuel’ which means: ‘God with us’ Yeshua is ‘God with us’. He who delivers His people. Our ‘Savior’. Matthew 12:21 ‘And in His name Gentiles will trust.’ For only ‘life’ is in His Name. Only ‘freedom’ is in His Name. Only ‘deliverance’ is in His Name. Only ‘healing’ is in His Name. Only ‘hope’ is in His Name.","There is only one Name by which we are free of the curse, free of the law and free of the power of sin, and by which we can be made free from darkness. That is the Name of Yeshua! In John 14:6, Yeshua says: ‘I AM the way, the truth, and the life.’ Yeshua is the ‘I AM’ the Way. Yeshua is the ‘I AM’ the Truth. Yeshua is the ‘I AM’ the Life. 149 Yeshua is the ‘Word’. Revelation 19:13 The ‘Word’ = ‘Yeshua’ = the Way = the ‘Word’ = the Truth = the ‘Word’ = the ‘Life’ = ‘Yeshua’. Hallelujah! Yeshua ‘is’ life and that ‘more abundantly’. John 10:10 His Name represents the: King of kings, The Lord of lords, the Majesty. His Name represents He Who is, Who was and Who is to come. The Same yesterday, today and for eternity. His Name represents the Resurrection and the Life. The Beginning and the End, the Alpha and the Omega. The Bread of Life. The true Vine. The Rock, the Door.","The Anchor, the Shepherd. The Healer, the Provider! Man calls His name ‘Wonderful’, ‘Counselor’, ‘Mighty God’, ‘Everlasting Father’, ‘Prince of Peace’, His name represents the great ‘I AM’. He Who gave Himself to the point of death and has received the Name above every name! Philippians 2:9-11 ‘Therefore God also has highly exalted Him and given Him the name which is above every name, that at the name of Jesus [Yeshua] every knee should bow, of those in heaven, and of those on earth, and of those under the earth, and that every tongue should confess that Jesus Christ is Lord, to the glory of God the Father.’ The Name of King Yeshua is placed above every name in existence!","Ephesians 1:21 ‘Far above all principality and power and might and dominion, and every name that is named, not only in this age but also in that which is to come.’ His Name is above sickness, above depression, above fear, above addiction, above poverty, above pain and sadness. His Name is above any ‘power’ there is, above any ‘dominion’ there is, above any ‘name’ that exists, His Name is above ‘every’ name! Hallelujah! We have become ambassadors of the Kingdom of God and we have received the ‘power of attorney’ to go out in the Name of Yeshua and make a difference in this world. THE NAME OF JESUS | 1.22 150 It is so important that we understand ‘Who’ is represented by this Name. Which ‘Power’, which ‘Greatness’, which ‘Majesty’ is behind this wonderful Name. For it is the Name that completely transformed our lives!","Faith in His name has set us free from sin and made us righteous before God. It is the faith in that ‘Name’ that made us a ‘new man’. It is the faith in His Name that made it possible for us to escape from slavery and become ‘sons and daughters’ of God. It is the Name That made us ‘heirs’ of God’s Kingdom. And it is the Name that ‘gives life’ to us for all eternity. What a beautiful Name God has given to us! The Name of Yeshua! His Name is holy. There are people who abuse His Name as a ‘curse’. There are people who abuse His Name for war. There are those who abuse His Name for ‘monetary gain’ and self-interest. There are those who abuse His Name for ‘quackery’. The reason they do these kinds of things in His Name is because a great ‘mystery’ is hidden behind His powerful Name. They know that there is ‘power’ in that Name. That everything ‘bows’ before that Name.","People who ‘abuse’ the Name don’t know Him Who is represented by this Name, otherwise they would never use it like that. It will not be to their benefit, but rather judgment. They will all be held ‘accountable’. Not everyone can ‘just’ use His Name. Matthew 7:21-23 ‘Not everyone who says to Me,”Lord, Lord,” shall enter the kingdom of heaven, but he who does the will of My Father in heaven. Many will say to Me in that day, “Lord, Lord, have we not prophesied in Your name, cast out demons in Your name, and done many wonders in Your name?” And then I will declare to them, “I never knew you; depart from Me, you who practice lawlessness!’’’ So there are people who are not ‘authorized’ to use His Name, but still do so.","Acts 19:13-17 ‘Then some of the itinerant Jewish exorcists took it upon themselves to call the name of the Lord Jesus over those who had evil spirits, saying, “We exorcise you by the Jesus whom Paul preaches.” Also there were seven sons of Sceva, a Jewish chief priest, who did so. And the evil spirit answered and said, “Jesus I know, and Paul I know; but who are you?” 151 Then the man in whom the evil spirit was leaped on them, overpowered them, and prevailed against them, so that they fled out of that house naked and wounded. This became known both to all Jews and Greeks dwelling in Ephesus; and fear fell on them all, and the name of the Lord Jesus was magnified.’ His Name casts out demons, heals the sick and raises the dead. His Name is what billions of people put their hope in and is the Name that billions of people ‘call on’ in prayer and spiritual battle.","But the only people who have received the power of attorney to use His Name are the children of God. And you are one of them! Only we ‘believers’ are ‘legally authorized’ and may go out in His Name. The Mighty Name of Jesus. Amen? THE NAME OF JESUS | 1.22 152 1 Question: What is Jesus’ original Name? And what does this Name mean? 2 Read: Romans 10:13 ‘For whoever calls on the name of the Lord shall be saved.’ Question: What happens when we call on the Name of Jesus in faith? 3 Read: Philippians 2:9 ‘Therefore God also has highly exalted Him and given Him the name which is above every name.‘ Question: The Name of Yeshua is the Name above: A) Some names B) All names C) Most names Reactions and discussion Answers in the back of the study guide QUESTIONS With lesson 1. 22 THE NAME OF JESUS"],"scriptureReferences":[],"reflectionPrompt":"What is one thing you need to understand or practice from The Name of Jesus?","quickCheck":{"question":"What is the best response to this lesson on The Name of Jesus?","answers":[{"id":"rush","label":"Rush to the next lesson without reflection"},{"id":"respond","label":"Reflect, pray, and take one faithful step"},{"id":"ignore","label":"Ignore it unless it feels easy"}],"correctAnswer":"respond","feedback":"Yes. The goal is not only to finish content, but to respond faithfully."},"notesPrompt":"Write one thought, question, or next step from The Name of Jesus.","completionMessage":"Good. You finished one One Basics step."},"placement":{"showInDiscover":true,"discoverShelf":"One Basics 1","discoverCardLabel":"Foundations","showInJourney":true,"moduleId":"stage_4_live_on_mission","moduleTitle":"Live on Mission","lessonOrder":22,"sourcePage":147,"isCoreLesson":true},"recommendedNextStep":{"label":"Write one response and continue the path","type":"reflect","targetId":"book_one_basics_1_22_the_name_of_jesus_reflection"},"sharing":{"shareText":"This One Basics lesson helped me think about the name of jesus.","shareImagePrompt":"Live on Mission One In Him share card for The Name of Jesus"},"admin":{"packageStatus":"prepared","sourcePreApproved":true,"owner":"One In Him content team","lastUpdated":"2026-05-19","extractionStatus":"real_pdf_text_extracted","sourceRange":"One Basics 1.22"}},{"packageId":"pkg_one_basics_1_23_authority_in_christ","packageTitle":"One Basics 1.23: Authority in Christ","packageType":"journey_lesson","packageGoal":"Help a learner understand authority in christ as part of the Live on Mission path and respond with one clear next step.","sourceItems":["book_one_basics_1_23_authority_in_christ"],"primaryItemId":"book_one_basics_1_23_authority_in_christ","primaryMedium":"read","speakerOrAuthor":{"id":"author_johan_toet","name":"Johan Toet","role":"author"},"language":"en","contentType":"study_guide","length":{"seconds":0,"readingMinutes":9,"display":"9 min read"},"fallbackPlan":{"cannotWatch":"book_one_basics_1_23_authority_in_christ","cannotListen":"book_one_basics_1_23_authority_in_christ","cannotRead":"book_one_basics_1_23_authority_in_christ_audio_future"},"journeyStage":{"stage":4,"name":"Live on Mission","slug":"mission","colour":"#8b2218","moduleId":"stage_4_live_on_mission"},"questionsAnswered":["What does authority in christ mean for following Jesus?","How does Scripture shape my understanding of authority in christ?","What is one practical response to authority in christ?"],"topics":["Authority in Christ","One Basics 1","Live on Mission","Discipleship"],"learnerSession":{"openingPrompt":"Take one clear step in authority in christ.","contentSummary":"In the previous lesson, we talked about the mighty Name of Jesus and what this Name represents. Today we are going to talk about our ‘authority in Christ’ and how His Name plays a large role in this. When we accepted Jesus as Lord and Savior, we received the ‘power of attorney’ to use His Name here on earth. We became legal ‘ambassadors’ of the Kingdom of God. What does that mean? Let’s say you are an envoy of the Du...","readBody":["In the previous lesson, we talked about the mighty Name of Jesus and what this Name represents. Today we are going to talk about our ‘authority in Christ’ and how His Name plays a large role in this. When we accepted Jesus as Lord and Savior, we received the ‘power of attorney’ to use His Name here on earth. We became legal ‘ambassadors’ of the Kingdom of God. What does that mean? Let’s say you are an envoy of the Dutch King Willem-Alexander and you would go some- where in the name of the Dutch King. I guarantee you that doors would open and most people would respond obediently, because you come in the name of the king. You have now received the ‘right’, the ‘power of attorney’ to go out in the Name of the King of kings, the Name of Jesus!","Philippians 2:9-11 ‘Therefore God also has highly exalted Him and given Him the name which is above every name, that at the name of Jesus every knee should bow, of those in heaven, and of those on earth, and of those under the earth, and that every tongue should confess that Jesus Christ is Lord, to the glory of God the Father.’ We now have this Name at our disposal. His Name will give us that which is necessary to walk in victory. We may go into the world in this Name to destroy the works of the darkness. To bring the light of the Kingdom. God will give us ‘everything’ in His Name. John 16:24 ‘Until now you have asked nothing in My name. Ask, and you will receive, that your joy may be full.’ We have now received the ‘authority’ to preach the Kingdom, to drive out demons, to heal the sick, and raise the dead in His Name. AUTHORITY IN CHRIST Lesson 1.","Matthew 10:7-8 ‘And as you go, preach, saying, “The kingdom of heaven is at hand.” Heal the sick, cleanse the lepers, raise the dead, cast out demons. Freely you have received, freely give.’ We now have ‘authority’ in Christ. Authority is ‘power’. We now have received power over the enemy. Luke 10:19 ‘Behold, I give you the authority to trample on serpents and scorpions, and over all the power of the enemy, and nothing shall by any means hurt you.’ Let that sink in for a moment… How often don’t we go through life as victims? Defeated by the darkness. We often feel ‘weak’ and not capable enough to resist storms and setbacks that come our way. I think we don’t always realize which Kingdom we now belong to and how much authority and power has been given to us in Christ Jesus!","He says: I give you the power, the authority, to trample on snakes (Satan), and scorpions (demons), and over all the power of the enemy. And ‘nothing’ shall hurt you! We now have authority over ‘all the power of the enemy’, and no matter what storm comes our way, whatever situation we have to deal with, we now have the power to brave ‘every’ storm, to ‘overcome’ every situation in the mighty Name of Jesus! We no longer have to be bound by fear and go through life defeated! Amen? Which of you had a friend when you were little who was stronger than almost all the other kids? Or an older brother or sister, who always stood up for you. And when you then got into a fight or someone picked a fight with you, you weren’t scared for a second, because you knew that your strong friend or brother was looking out for you?","You felt ‘confident and strong’ because someone bigger and stronger than everyone was on ‘your side’. Was for you! Know Who is for you ‘now’! The Great King is for you! The resurrection and the life is for you! The Creator of heaven and earth is for you! He Who is, Who was and Who is to come, is for you! The Beginning and the End is for you! The Alpha and the Omega is for you! The great ‘I AM’ is for you! AUTHORITY IN CHRIST | 1.23 156 We are now ‘more’ than conquerors! Romans 8:37 Because He is now for us! And if He is for us, ‘who’ can then be against us? Romans 8:31 Amen? God is on our side, ‘He’s got your back’. He has given us authority and power to use His Name in every situation in our lives and in the lives of others! Not to abuse His Name as a ‘curse’ or out of ‘self-interest’ or things that are not ‘in line’ with His Word. Because these people also exist.","And they have a problem. Exodus 20:7 ‘You shall not take the name of the Lord your God in vain, for the Lord will not hold him guiltless who takes His name in vain.’ But we as children of God are supposed to apply our ‘God-given authority’ as a ‘weapon against the darkness’ and to approach God. To take down the darkness, to bring light, to make ‘impossible’ situations ‘possible’ to the honor and glory of His Name. We now have received authority in Christ, use this authority with honor and respect. Amen? It is especially important that you know that you are His child. That you know who you are in Him, what your ‘position’ is. For if you don’t belong to Him you have ‘no right’ to use His Name. And if you don’t know ‘what’ this Name represents, then there will also be ‘no authority’ granted to the Name.","We previously mentioned this verse already: Acts 19:13-17 ‘Then some of the itinerant Jewish exorcists took it upon themselves to call the name of the Lord Jesus over those who had evil spirits, saying, “We exorcise you by the Jesus whom Paul preaches.” Also there were seven sons of Sceva, a Jewish chief priest, who did so. And the evil spirit answered and said, “Jesus I know, and Paul I know; but who are you?” Then the man in whom the evil spirit was leaped on them, overpowered them, and prevailed against them, so that they fled out of that house naked and wounded. This became known both to all Jews and Greeks dwelling in Ephesus; and fear fell on them all, and the name of the Lord Jesus was magnified.’ 157 They didn’t know Jesus ‘personally’ and didn’t know ‘Who’ was represented by this name.","They couldn’t ‘grant’ any authority to the Name because they ‘hadn’t received’ this authority in Christ. They had ‘seen and heard’ it, so they thought, let’s also ‘try it’. As a ‘formula’. But that went horribly wrong! Not everyone can just use this authority and the Name of Jesus! Only the children of God have received this right (privilege)! It is not a formula that you use, not a magic word to do tricks and impress others with! Be aware of your God-given authority and the fact that this is only given to you as a child of God! What a privilege. What a grace, and what a responsibility! We now have the authority to ‘speak’ and ‘teach’ in His Name. Acts 4:18 To ‘convert’ people and ‘preach’ the ‘Kingdom’. Mark 16:15 To ‘baptize’ in His Name. John 4:2 And to pray in His Name for the ‘baptism with the Holy Spirit’.","Acts 8:17 To ‘heal the sick’, ‘cast out demons’ and ‘raise the dead’ in His Name. Matthew 10:8 That is our ‘authority’ in Christ. It is His promise to us. John 14:12-14 ‘Most assuredly, I say to you, he who believes in Me, the works that I do he will do also; and greater works than these he will do, because I go to My Father. And whatever you ask in My name, that I will do, that the Father may be glorified in the Son. If you ask anything in My name, I will do it.’ What a promise, what power, our authority in Christ. Use it wisely. Use it to magnify God so that only He is glorified in your life. Amen? AUTHORITY IN CHRIST | 1.23 158 1 Read: John 16:24 ‘Until now you have asked nothing in My name. Ask, and you will receive, that your joy may be full.’ Question: What Name is this verse talking about?","Read: Philippians 2:9 ‘Therefore God also has highly exalted Him and given Him the name which is above every name.‘ Question: Above which names is His Name exalted? Is that: A) The name of all sickness and fear B) The name of all poverty and misery C) All other names D) All of A, B and C 3 Read: Acts 19:13-14 ‘Then some of the itinerant Jewish exorcists took it upon themselves to call the name of the Lord Jesus over those who had evil spirits, saying, “We exorcise you by the Jesus whom Paul preaches.” Also there were seven sons of Sceva, a Jewish chief priest, who did so.’ Question: Does everyone have the right to use the Name of Jesus? Explain! Reactions and discussion Answers in the back of the study guide QUESTIONS With lesson 1. 23 AUTHORITY IN CHRIST"],"scriptureReferences":[],"reflectionPrompt":"What is one thing you need to understand or practice from Authority in Christ?","quickCheck":{"question":"What is the best response to this lesson on Authority in Christ?","answers":[{"id":"rush","label":"Rush to the next lesson without reflection"},{"id":"respond","label":"Reflect, pray, and take one faithful step"},{"id":"ignore","label":"Ignore it unless it feels easy"}],"correctAnswer":"respond","feedback":"Yes. The goal is not only to finish content, but to respond faithfully."},"notesPrompt":"Write one thought, question, or next step from Authority in Christ.","completionMessage":"Good. You finished one One Basics step."},"placement":{"showInDiscover":true,"discoverShelf":"One Basics 1","discoverCardLabel":"Foundations","showInJourney":true,"moduleId":"stage_4_live_on_mission","moduleTitle":"Live on Mission","lessonOrder":23,"sourcePage":154,"isCoreLesson":true},"recommendedNextStep":{"label":"Write one response and continue the path","type":"reflect","targetId":"book_one_basics_1_23_authority_in_christ_reflection"},"sharing":{"shareText":"This One Basics lesson helped me think about authority in christ.","shareImagePrompt":"Live on Mission One In Him share card for Authority in Christ"},"admin":{"packageStatus":"prepared","sourcePreApproved":true,"owner":"One In Him content team","lastUpdated":"2026-05-19","extractionStatus":"real_pdf_text_extracted","sourceRange":"One Basics 1.23"}},{"packageId":"pkg_one_basics_1_24_healing_is_god_s_will","packageTitle":"One Basics 1.24: Healing is God's Will","packageType":"journey_lesson","packageGoal":"Help a learner understand healing is god's will as part of the Live on Mission path and respond with one clear next step.","sourceItems":["book_one_basics_1_24_healing_is_god_s_will"],"primaryItemId":"book_one_basics_1_24_healing_is_god_s_will","primaryMedium":"read","speakerOrAuthor":{"id":"author_johan_toet","name":"Johan Toet","role":"author"},"language":"en","contentType":"study_guide","length":{"seconds":0,"readingMinutes":11,"display":"11 min read"},"fallbackPlan":{"cannotWatch":"book_one_basics_1_24_healing_is_god_s_will","cannotListen":"book_one_basics_1_24_healing_is_god_s_will","cannotRead":"book_one_basics_1_24_healing_is_god_s_will_audio_future"},"journeyStage":{"stage":4,"name":"Live on Mission","slug":"mission","colour":"#8b2218","moduleId":"stage_4_live_on_mission"},"questionsAnswered":["What does healing is god's will mean for following Jesus?","How does Scripture shape my understanding of healing is god's will?","What is one practical response to healing is god's will?"],"topics":["Healing","One Basics 1","Live on Mission","Discipleship"],"learnerSession":{"openingPrompt":"Take one clear step in healing is god's will.","contentSummary":"In the previous two lessons we have talked about the ‘Name’ of Jesus and Who this Name ‘represents’. And we have talked about our ‘authority’ in Christ. Today we are going to talk about the subject of ‘healing’. There is a lot of teaching on healing, about why one does and another doesn’t get healed. What the ten steps to healing are and the three steps to lose it again, etcetera. We are not going to talk about all t...","readBody":["In the previous two lessons we have talked about the ‘Name’ of Jesus and Who this Name ‘represents’. And we have talked about our ‘authority’ in Christ. Today we are going to talk about the subject of ‘healing’. There is a lot of teaching on healing, about why one does and another doesn’t get healed. What the ten steps to healing are and the three steps to lose it again, etcetera. We are not going to talk about all that. We are going to talk about how healing is ‘God’s will’. That God doesn’t want anyone to be sick and that sickness doesn’t come from Him but from the devil. Sickness is ‘demonic’. It is a ‘curse’.","Galatians 3:10 ‘For as many as are of the works of the law are under the curse; for it is written, “Cursed is everyone who does not continue in all things which are written in the book of the law, to do them.”’ This verse teaches us that when you are under the ‘law’ you are automatically under the ‘curse’. The law is a curse. For no one can keep the whole law. There may have been people who could keep a lot of the rules and regulations. They came very close, but still to no avail. James 2:10 ‘For whoever shall keep the whole law, and yet stumble in one point, he is guilty of all.’ You can do so many things right and keep all kinds of rules, but one misstep and you are just as guilty to the whole law as any other. That is why it says in Romans 3:20 that by the works of the law ‘no one is justified’, for we have all ‘sinned’ with no exceptions! Romans 3: HEALING IS GOD’S WILL Lesson 1.","So the law is a curse. And everyone who is ‘under the law’, is ‘under the curse’. Galatians 3:10 How sad it is to know that there are still many billions of Christians today who ‘try’ to keep the law. They believe in gaining God’s favor this way and be justified by ‘works of the law’. But the Bible teaches specifically that you then are ‘under the curse’! If you live ‘under the law’ by keeping all kinds of Old Testament rules and things you think you ‘must do’ for God, you bring yourself under the curse. Galatians 5:4 ‘You have become estranged from Christ, you who attempt to be justified by law; you have fallen from grace.’ What does it mean when you are ‘under the curse’? What happened when you were under the law and didn’t do ‘everything’ that the law commanded?","You were ‘subject’ to what belonged to the curse, everything that is stated in: Deuteronomy 28:15-68 - Read this chapter together - You could essentially say that ‘all sickness and misery’ that is found in this world, everything that could happen here on earth, could also be your ‘part’ if you don’t keep everything the law commands. That is quite something! Once you are under the curse you are ‘cursed’. And all those things will happen to you because God can’t stand between ‘you and the curse’ (all misery of this fallen world) when you break the law. You step away from under ‘His covenant’ and with that from under ‘His protection’. It is not that He ‘punishes’ you because you do these things, but because He can’t protect you ‘lawfully’ against these things. Sin is equal to death, and death means sickness as well as misery, poverty, pain and sadness, even physical death itself.","God Himself doesn’t make people sick. God doesn’t send sickness. He sends no curse. These things have all come into the world because of the fall and are a result of sin. So not as a punishment from God but as a result of sin. The devil caused sin and because of that death, and sickness and misery came into this world. HEALING IS GOD’S WILL | 1.24 162 However, it is the ‘will of the Father’ that we all live in good health and are not subjected to the ‘diseases and misery’ of this world. The world has to deal with all kinds of issues. But as children of God we don’t have to be weighed down by this anymore. What applies to the world, does not apply to you and me anymore! ‘For we are no longer of this world’. John 17:6 So if the world has a ‘crisis’ we don’t have to have one, if the world lives in ‘fear and defeat’ we can stand in victory and live in His perfect love.","While the world is bound by ‘addictions’ and ‘depressions’ we can be totally ‘free’ from that. While the world helplessly becomes a victim of the darkness and everything that belongs to that, we are more than conquerors through Him Who is in us! Psalm 107:19-20 ‘Then they cried out to the Lord in their trouble, and He saved them out of their distresses. He sent His word and healed them, and delivered them from their destructions.’ Amen? God sent His Son to die for you and me, so that we didn’t have to die anymore but could live in His Name! Galatians 3:13 ‘Christ has redeemed us from the curse of the law, having become a curse for us (for it is written, “Cursed is everyone who hangs on a tree”).’ So we are not under the curse anymore! Jesus became a curse for us. We are set free from the curse by ‘grace through faith’ and now walk under the blessing!","Galatians 3:9 ‘So then those who are of faith are blessed with believing Abraham.’ I am under the blessing! I am blessed! Say it out loud: ‘I am blessed! Sickness isn’t for me! Addiction isn’t for me! Fear isn’t for me! I am not under the curse! I am under the blessing! In Jesus’ Name! Amen! Every blessing that is written down in Deuteronomy 28:2-14 has now become your portion. – Read this part together – 163 If you aren’t under the curse anymore, you are automatically under the blessing and you are ‘lawfully released’ from all sickness and misery that belong to that curse! Jesus came and conquered death, and by His stripes healing ‘has come’ for you and for me. [1 Peter 2:24]. It is stated in the present perfect! He didn’t come to destroy the works ‘of God’ but those of the devil! 1 John 3:8 ‘He who sins is of the devil, for the devil has sinned from the beginning.","For this purpose the Son of God was manifested, that He might destroy the works of the devil.’ Satan is the ‘oppressor’, Jesus is our ‘Healer’! Satan is the ‘destroyer’, Jesus ‘restores us’! Satan comes to ‘steal, kill and destroy’, Jesus has come to ‘give life’ and life ‘more abundantly’! Jesus did the ‘will’ of the Father. Acts 10:38 ‘How God anointed Jesus of Nazareth with the Holy Spirit and with power, who went about doing good and healing all who were oppressed by the devil, for God was with Him.’ I have not once read in the Bible that Jesus made someone sick.","That He said, ‘Come, I will make you sick.’ It says in Luke 4:16-21 how Jesus at the start of His ministry cites Isaiah 61 in a synagogue: ‘The Spirit of the Lord is upon Me, because He has anointed Me to preach the gospel to the poor; He has sent Me to heal the brokenhearted, to proclaim liberty to the captives and recovery of sight to the blind, to set at liberty those who are oppressed; to proclaim the acceptable year of the Lord.’ After He had read it He said, ‘Today this Scripture is fulfilled in your hearing.’ Immediately after, from Luke 4:38 on, you read how He ‘went about’ and ‘started doing’ all those things that He cited from Isaiah 61. He healed the sick, He cast out demons, He preached the good news and so forth. Jesus says in John 6:38: ‘For I have come down from heaven, not to do My own will, but the will of Him who sent Me.’ Jesus came to do the will of the Father.","That means that ‘healing the sick’, ‘casting out demons’, ‘destroying the work of the devil’ are all God’s will. HEALING IS GOD’S WILL | 1.24 164 Jesus would never go ‘against’ the will of the Father. We must start ‘seeing and believing’ that healing is absolutely God’s will and that sickness and bondage are not of God, but of the devil. The moment you understand that Jesus came to destroy all the works of Satan, that He brought healing through His stripes, that He carried everything and became a curse for us, - by which you are now free from everything that belongs to that curse – you will no longer ‘accept’ sickness and oppression, curse and misery in your life! Isaiah 53:3-5 ‘He is despised and rejected by men, a Man of sorrows and acquainted with grief. And we hid, as it were, our faces from Him; He was despised, and we did not esteem Him."],"scriptureReferences":[],"reflectionPrompt":"What is one thing you need to understand or practice from Healing is God's Will?","quickCheck":{"question":"What is the best response to this lesson on Healing is God's Will?","answers":[{"id":"rush","label":"Rush to the next lesson without reflection"},{"id":"respond","label":"Reflect, pray, and take one faithful step"},{"id":"ignore","label":"Ignore it unless it feels easy"}],"correctAnswer":"respond","feedback":"Yes. The goal is not only to finish content, but to respond faithfully."},"notesPrompt":"Write one thought, question, or next step from Healing is God's Will.","completionMessage":"Good. You finished one One Basics step."},"placement":{"showInDiscover":true,"discoverShelf":"One Basics 1","discoverCardLabel":"Foundations","showInJourney":true,"moduleId":"stage_4_live_on_mission","moduleTitle":"Live on Mission","lessonOrder":24,"sourcePage":160,"isCoreLesson":true},"recommendedNextStep":{"label":"Write one response and continue the path","type":"reflect","targetId":"book_one_basics_1_24_healing_is_god_s_will_reflection"},"sharing":{"shareText":"This One Basics lesson helped me think about healing is god's will.","shareImagePrompt":"Live on Mission One In Him share card for Healing is God's Will"},"admin":{"packageStatus":"prepared","sourcePreApproved":true,"owner":"One In Him content team","lastUpdated":"2026-05-19","extractionStatus":"real_pdf_text_extracted","sourceRange":"One Basics 1.24"}},{"packageId":"pkg_one_basics_1_25_prayer_ministry","packageTitle":"One Basics 1.25: Prayer Ministry","packageType":"journey_lesson","packageGoal":"Help a learner understand prayer ministry as part of the Live on Mission path and respond with one clear next step.","sourceItems":["book_one_basics_1_25_prayer_ministry"],"primaryItemId":"book_one_basics_1_25_prayer_ministry","primaryMedium":"read","speakerOrAuthor":{"id":"author_johan_toet","name":"Johan Toet","role":"author"},"language":"en","contentType":"study_guide","length":{"seconds":0,"readingMinutes":12,"display":"12 min read"},"fallbackPlan":{"cannotWatch":"book_one_basics_1_25_prayer_ministry","cannotListen":"book_one_basics_1_25_prayer_ministry","cannotRead":"book_one_basics_1_25_prayer_ministry_audio_future"},"journeyStage":{"stage":4,"name":"Live on Mission","slug":"mission","colour":"#8b2218","moduleId":"stage_4_live_on_mission"},"questionsAnswered":["What does prayer ministry mean for following Jesus?","How does Scripture shape my understanding of prayer ministry?","What is one practical response to prayer ministry?"],"topics":["Prayer","One Basics 1","Live on Mission","Discipleship"],"learnerSession":{"openingPrompt":"Take one clear step in prayer ministry.","contentSummary":"We have talked about how healing is God’s will. Today we are going to talk about how we can ‘fight’ against the evil one in our lives and how we can fight for others when they have a need. God was Omnipotent. All power in heaven and on earth was His. Then He gave power over the earth to man, so that they would rule over the earth. Genesis 1:26 ‘Then God said, “Let Us make man in Our image, according to Our likeness; ...","readBody":["We have talked about how healing is God’s will. Today we are going to talk about how we can ‘fight’ against the evil one in our lives and how we can fight for others when they have a need. God was Omnipotent. All power in heaven and on earth was His. Then He gave power over the earth to man, so that they would rule over the earth. Genesis 1:26 ‘Then God said, “Let Us make man in Our image, according to Our likeness; let them have dominion over the fish of the sea, over the birds of the air, and over the cattle, over all the earth and over every creeping thing that creeps on the earth.”’ Man had all ‘power and authority’ over this earth and he could do with it what he wanted. It was his. Man gave the power over to the devil when they obeyed him and not God in Eden.","Luke 4:6-7 ‘And the devil said to Him, “All this authority I will give You, and their glory; for this has been delivered to me, and I give it to whomever I wish. Therefore, if You will worship before me, all will be Yours.”’ So the devil ruled over this earth. In John 12:31, Jesus calls him ‘The ruler of this world’. We were all surrendered to him in ‘sin’. Bound in darkness as slaves of sin, we were hopelessly ‘lost’. For without a savior there is no way out. But then Jesus came! He came and overcame hell, death and the grave. And he declared: Matthew 28:18 ‘All authority has been given to Me in heaven and on earth!’ It is finished! PRAYER MINISTRY Lesson 1. PRAYER MINISTRY | 1.25 168 Death is defeated and Satan has been rendered powerless! Jesus took back the ‘power’ over this earth and made the devil and his companions powerless! He made a public spectacle of them.","Colossians 2:15 Jesus now has all the power and He gave this power back to us believers. Luke 10:19 ‘Behold, I give you the authority to trample on serpents and scorpions, and over all the power of the enemy, and nothing shall by any means hurt you.’ We have the power again to ‘reign’ over Satan, only we can’t give it away anymore like Adam and Eve did. Jesus gives us the authority to use His power. We can only ‘apply’ this power in His Name. Power is ‘authority’. And the ‘key’ to this authority is the Name of Jesus. There is power in His Name, remember? Satan is defeated by the death and resurrection of Jesus. However, his kingdom is still active. We are caught up in a spiritual war. The enemy goes about like a ‘roaring lion’ to see who he can devour, he poses as an ‘angel of light’ and is out to ‘steal, kill and destroy’.","Ephesians 6:12 (NIV) ‘For our struggle is not against flesh and blood, but against the rulers, against the authorities, against the powers of this dark world and against the spiritual forces of evil in the heavenly realms.’ Our warfare is a ‘spiritual warfare’, that’s why God gave us spiritual weapons. 2 Corinthians 10:3-4 ‘For though we walk in the flesh, we do not war according to the flesh. For the weapons of our warfare are not carnal but mighty in God for pulling down strongholds.’ One of those weapons is of course the mighty ‘Name of Jesus’. We talked about that in lesson 1.22 169 Other spiritual weapons are, among others, the ‘resurrection power’ of the Holy Spirit, which we have also covered in a previous lesson, and the armor of God. Ephesians 6:13-18 ‘Therefore take up the whole armor of God, that you may be able to withstand in the evil day, and having done all, to stand.","Stand therefore, having girded your waist with truth, having put on the breastplate of righteousness, and having shod your feet with the preparation of the gospel of peace; above all, taking the shield of faith with which you will be able to quench all the fiery darts of the wicked one. And take the helmet of salvation, and the sword of the Spirit, which is the word of God; praying always with all prayer and supplication in the Spirit, being watchful to this end with all perseverance and supplication for all the saints.’ We now have the weapons and the authority to resist and defeat Satan! We now have the power to say ‘no’ against his temptations and lies! To say ‘no’ to sin! James 4:7 ‘Therefore submit to God. Resist the devil and he will flee from you.’ Think of the war in your mind, the war against sin, you can now overcome these attacks by the Word of God and the Name of Jesus.","When he comes with lies and temptation, you make a stand, take the sword of the Spirit and say, ‘No, ugly devil, it is written…’ And you resist every lie from him with the Word of God. It is important that you know the Word of God! Dear friends, we now have power over the fiery arrows of Satan that are being fired into our lives. We now also have the full authority to rule over demons and over sickness. Through Jesus’ sacrifice there is now redemption, deliverance, freedom, peace, healing available and so much more. It is all provided and paid for by King Jesus! It is all finished. John 19:30 And now He wants us to go out and ‘war’ against sickness and demons, against the rulers, against the authorities, against the powers of this dark world and against the spiritual forces of evil in the heavenly realms. He commands us to do so in His Word!","PRAYER MINISTRY | 1.25 170 Matthew 10:7-8 ‘And as you go, preach, saying, “The kingdom of heaven is at hand.” Heal the sick, cleanse the lepers, raise the dead, cast out demons [Command]. Freely you have received, freely give.’ Mark 16:17-18 ‘And these signs will follow those who believe: In My name they will cast out demons; they will speak with new tongues; they will take up serpents; and if they drink anything deadly, it will by no means hurt them; they will lay hands on the sick, and they will recover.’ John 14:12 ‘Most assuredly, I say to you, he who believes in Me, the works that I do he will do also; and greater works than these he will do, because I go to My Father.’ We now not only have received healing in our born again spirits for our own bodies, but we have also received the ‘ministry’ to go out in His Name. To cast out demons and lay our hands on the sick.","Corinthians 3:4-6 ‘And we have such trust through Christ toward God. Not that we are sufficient of ourselves to think of anything as being from ourselves, but our sufficiency is from God, who also made us sufficient as ministers of the new covenant, not of the letter but of the Spirit; for the letter kills, but the Spirit gives life.’ Sufficiency means being capable. He has equipped us to do His work! We have received power from the Holy Spirit, we have the resurrection power inside of us! And we have the mighty Name of Jesus on our lips! In Acts 3:1-7 we can read that Peter and John walked through the streets of Jerusalem full of the Holy Spirit and found a crippled man at the Temple gate. Peter said, in verse 6: ‘Silver and gold I do not have, but what I do have I give you: In the nameof Jesus Christ of Nazareth, rise up and walk.’ And immediately he stood to his feet and was healed!","Peter says that we have something, we have the Name of Jesus, the Name above EVERY name! Every knee will bow and every tongue confess that Jesus is Lord! Sickness must bow, demons must bow, poverty must bow, depression must bow, addictions must bow, covid must bow, fear must bow, ‘everything’ must bow to the mighty Name of Jesus! Amen? 171 So how do we fight against sickness and demons? We don’t pray against them, we fight against them. Our ‘fight’ is not against flesh and blood. How do you fight? The four most important keys are: 1. SPEAK TO THE MOUNTAIN Mark 11:23 ‘For assuredly, I say to you, whoever says to this mountain, “Be removed and be cast into the sea,” and does not doubt in his heart, but believes that those things he says will be done, he will have whatever he says.’ So you must speak ‘to the mountain’. Not to God about the ‘problem’ but to the ‘problem’ about God. 2.","SPEAK IN AUTHORITY Mark 1:27 ‘Then they were all amazed, so that they questioned among themselves, saying, “What is this? What new doctrine is this? For with authority He commands even the unclean spirits, and they obey Him.”’ So you shouldn’t speak softly, quietly, ‘Oh dear demon, would you please go live some- where else?’ No! You take authority and say, ‘Out you serpent’! 3. LAYING ON OF HANDS Luke 4:40 ‘When the sun was setting, all those who had any that were sick with various diseases brought them to Him; and He laid His hands on every one of them and healed them.’ Acts 28:8 ‘And it happened that the father of Publius lay sick of a fever and dysentery. Paul went in to him and prayed, and he laid his hands on him and healed him.’ When you fight for someone, you lay hands on the problem (if possible) and otherwise on the shoulders or forehead. 4."],"scriptureReferences":[],"reflectionPrompt":"What is one thing you need to understand or practice from Prayer Ministry?","quickCheck":{"question":"What is the best response to this lesson on Prayer Ministry?","answers":[{"id":"rush","label":"Rush to the next lesson without reflection"},{"id":"respond","label":"Reflect, pray, and take one faithful step"},{"id":"ignore","label":"Ignore it unless it feels easy"}],"correctAnswer":"respond","feedback":"Yes. The goal is not only to finish content, but to respond faithfully."},"notesPrompt":"Write one thought, question, or next step from Prayer Ministry.","completionMessage":"Good. You finished one One Basics step."},"placement":{"showInDiscover":true,"discoverShelf":"One Basics 1","discoverCardLabel":"Foundations","showInJourney":true,"moduleId":"stage_4_live_on_mission","moduleTitle":"Live on Mission","lessonOrder":25,"sourcePage":167,"isCoreLesson":true},"recommendedNextStep":{"label":"Write one response and continue the path","type":"reflect","targetId":"book_one_basics_1_25_prayer_ministry_reflection"},"sharing":{"shareText":"This One Basics lesson helped me think about prayer ministry.","shareImagePrompt":"Live on Mission One In Him share card for Prayer Ministry"},"admin":{"packageStatus":"prepared","sourcePreApproved":true,"owner":"One In Him content team","lastUpdated":"2026-05-19","extractionStatus":"real_pdf_text_extracted","sourceRange":"One Basics 1.25"}},{"packageId":"pkg_one_basics_1_26_miracles_glorify_god","packageTitle":"One Basics 1.26: Miracles Glorify God","packageType":"journey_lesson","packageGoal":"Help a learner understand miracles glorify god as part of the Live on Mission path and respond with one clear next step.","sourceItems":["book_one_basics_1_26_miracles_glorify_god"],"primaryItemId":"book_one_basics_1_26_miracles_glorify_god","primaryMedium":"read","speakerOrAuthor":{"id":"author_johan_toet","name":"Johan Toet","role":"author"},"language":"en","contentType":"study_guide","length":{"seconds":0,"readingMinutes":9,"display":"9 min read"},"fallbackPlan":{"cannotWatch":"book_one_basics_1_26_miracles_glorify_god","cannotListen":"book_one_basics_1_26_miracles_glorify_god","cannotRead":"book_one_basics_1_26_miracles_glorify_god_audio_future"},"journeyStage":{"stage":4,"name":"Live on Mission","slug":"mission","colour":"#8b2218","moduleId":"stage_4_live_on_mission"},"questionsAnswered":["What does miracles glorify god mean for following Jesus?","How does Scripture shape my understanding of miracles glorify god?","What is one practical response to miracles glorify god?"],"topics":["Healing","One Basics 1","Live on Mission","Discipleship"],"learnerSession":{"openingPrompt":"Take one clear step in miracles glorify god.","contentSummary":"In this lesson we are going to talk about how God is glorified through signs and wonders in our lives. The Kingdom of God is a ‘Kingdom of signs and wonders’. It is a ‘supernatural’ Kingdom. A ‘heavenly’ Kingdom. A Kingdom that must be ‘preached’ by us. Matthew 24:14 ‘And this gospel of the kingdom will be preached in all the world as a witness to all the nations, and then the end will come.’ Signs and wonders attest...","readBody":["In this lesson we are going to talk about how God is glorified through signs and wonders in our lives. The Kingdom of God is a ‘Kingdom of signs and wonders’. It is a ‘supernatural’ Kingdom. A ‘heavenly’ Kingdom. A Kingdom that must be ‘preached’ by us. Matthew 24:14 ‘And this gospel of the kingdom will be preached in all the world as a witness to all the nations, and then the end will come.’ Signs and wonders attest that the Gospel of the Kingdom is being preached and because of this people believe that the God Who is proclaimed is a living God, a God Who is the Same yesterday, today and for eternity. The Gospel of signs and wonders is a Gospel in which God reveals Himself as a ‘Living God’. God seeks to be known as the ‘Only true God’. There is no other God besides Him. He is the Only God. And He is capable of showing that in ‘might’ and ‘power’.","When miracles happen in His Name, it ensures that people will glorify Him and recognize Him as God. That is why God wants us to bear much fruit for the Kingdom in this way, because if we bear much fruit He is glorified in our lives. John 15:8 ‘By this My Father is glorified, that you bear much fruit; so you will be My disciples.’ Jesus also says that He will do anything we ask in His Name so that the ‘Father’ will be ‘glorified’ in the Son. John 14:13 Jesus taught this after promising that we would do great works. MIRACLES GLORIFY GOD Lesson 1. MIRACLES GLORIFY GOD | 1.26 176 John 14:12 ‘Most assuredly, I say to you, he who believes in Me, the works that I do he will do also; and greater works than these he will do, because I go to My Father.’ Which ‘works’ did Jesus do? Jesus turned water into wine.","He did this as a ‘beginning of the signs’, by which His (God’s) glory was revealed and His disciples believed in Him. John 2:11 He healed the sick, cleansed lepers, raised the dead, cast out demons and so forth. These were all signs and wonders. Matthew 4:23 These ‘works’, these signs and wonders He also promises to us, that we will ‘also’ do these and greater than these if we believe in Him. Why? So that we can be great and boast, ‘Look what I can do!’? We cannot even ‘raise a fly from the dead’, so you can forget about that. No, these works glorify God in our lives. John 17:4 ‘I have glorified You on the earth. I have finished the work which You have given Me to do.’ If we do the work that He gives us to do, God is glorified in our lives. Jesus says that we will do the works that He did.","Jesus says in Mark 16:17-18 ‘And these signs will follow those who believe: In My name they will cast out demons; they will speak with new tongues; they will take up serpents; and if they drink anything deadly, it will by no means hurt them; they will lay hands on the sick, and they will recover.’ When sharing the Gospel somewhere and there are no signs and wonders at all, it has missed its goal. It might have been nice what you shared, but it has done nothing, so no one was ‘touched, convinced, encouraged, healed, set free or saved’ and you can ask yourself whether it really was the ‘Good News’ of the Gospel. For God ‘confirms’ His Word that is spoken with signs and wonders! Mark 16:20 ‘And they went out and preached everywhere, the Lord working with them and confirming the word through the accompanying signs. Amen.’ 177 Signs and wonders happen so that people will ‘believe’.","Signs and wonders are not the goal in themselves. The goal is that people will believe and will glorify God. It is all about Him and His Kingdom. If your life and what you say about God go hand in hand with signs and wonders, this attests that you are walking with the living God. Acts 10:38 ‘How God anointed Jesus of Nazareth with the Holy Spirit and with power, who went about doing good and healing all who were oppressed by the devil, for God was with Him.’ Jesus walked in signs and wonders and this caused people to testify that God was with Him. The Father was glorified in His life. Mark 2:5-7 (The lame man with the mat) ‘When Jesus saw their faith, He said to the paralytic, “Son, your sins are forgiven you.” And some of the scribes were sitting there and reasoning in their hearts, “Why does this Man speak blasphemies like this?","Who can forgive sins but God alone?”’ Who can forgive sins but God alone? Indeed, just as a man cannot forgive the sin of a man, a man can also not ‘supernaturally’ heal a man. Only God can do that. God is capable of doing both and that is why Jesus said in: Mark 2:9-11 ‘Which is easier, to say to the paralytic, “Your sins are forgiven you,” or to say, “Arise, take up your bed and walk?” But that you may know that the Son of Man has power on earth to forgive sins—He said to the paralytic, “I say to you, arise, take up your bed, and go to your house.”’ Again there is a lot in this Bible passage. Such as when you are ‘forgiven’, you are also ‘healed’. It is part of the reconciliation. But what happened when Jesus ‘healed’ this man, when He did this ‘miracle’, was that ‘God was glorified’.","Mark 2:12 ‘Immediately he arose, took up the bed, and went out in the presence of them all, so that all were amazed and glorified God, saying, “We never saw anything like this!”’ MIRACLES GLORIFY GOD | 1.26 178 It confirmed in that moment that the thing Jesus ‘said’ and ‘did’ came directly from God. God also wants to work through you with signs and wonders so that He can also be glorified through your life. Signs and wonders that follow your life by the testimony of the Word of God that you speak make people come to His Kingdom. It proves that God is at work here and not a simple human. It glorifies Him. It gives Him the honor. If Jesus Himself used signs and wonders to change people and bring them to repentance, then we should definitely do so too!","John 4:17 ‘Because as He is, so are we in this world.’ In the Bible Jesus says multiple times, ‘Follow Me!’ That doesn’t just mean hopping after Him! ‘Follow Me’ means: ‘Do what I do, walk as I walk, be as I am, imitate Me.’ Jesus went about doing good, we must go about doing good. Jesus had compassion, we must also have compassion. Jesus loved, we must also love. Jesus healed and cast out demons, we must also walk in healing and the casting out of demons. Jesus raised the dead, we must also raise the dead in Jesus’ Name. Why? First, because He promises and commands us to do this. (Mark 16:17, John 14:12, etc.) But especially because it will glorify the Father in our lives! God wants to work through you today. He wants to do signs and wonders through you. We are the body of which Christ is the Head, we are His hands, feet and mouth.","So rise up and move into action, ‘do what God says that you can do’ and ensure that He will also be ‘glorified’ in your life! Amen. 179 1 Read: John 15:8 ‘By this My Father is glorified, that you bear much fruit; so you will be My disciples.’ Question: What is the effect of us walking in signs and wonders and bearing much fruit? 2 Read: John 14:12 ‘Most assuredly, I say to you, he who believes in Me, the works that I do he will do also; and greater works than these he will do, because I go to My Father.’ Question: Do you believe that God wants to do signs and wonders through your life? 3 Read: Luke 10:3, and verse 8-9 ‘Go your way; behold, I send you out as lambs among wolves.’ ‘Whatever city you enter, and they receive you, eat such things as are set before you.","And heal the sick there, and say to them, ‘The kingdom of God has come near to you.’’ Question: Will you rise up to step out in signs and wonders so that God is also glorified in your life from now on? Reactions and discussion Answers in the back of the study guide MIRACLES GLORIFY GOD | 1. QUESTIONS With lesson 1. 26"],"scriptureReferences":[],"reflectionPrompt":"What is one thing you need to understand or practice from Miracles Glorify God?","quickCheck":{"question":"What is the best response to this lesson on Miracles Glorify God?","answers":[{"id":"rush","label":"Rush to the next lesson without reflection"},{"id":"respond","label":"Reflect, pray, and take one faithful step"},{"id":"ignore","label":"Ignore it unless it feels easy"}],"correctAnswer":"respond","feedback":"Yes. The goal is not only to finish content, but to respond faithfully."},"notesPrompt":"Write one thought, question, or next step from Miracles Glorify God.","completionMessage":"Good. You finished one One Basics step."},"placement":{"showInDiscover":true,"discoverShelf":"One Basics 1","discoverCardLabel":"Foundations","showInJourney":true,"moduleId":"stage_4_live_on_mission","moduleTitle":"Live on Mission","lessonOrder":26,"sourcePage":175,"isCoreLesson":true},"recommendedNextStep":{"label":"Write one response and continue the path","type":"reflect","targetId":"book_one_basics_1_26_miracles_glorify_god_reflection"},"sharing":{"shareText":"This One Basics lesson helped me think about miracles glorify god.","shareImagePrompt":"Live on Mission One In Him share card for Miracles Glorify God"},"admin":{"packageStatus":"prepared","sourcePreApproved":true,"owner":"One In Him content team","lastUpdated":"2026-05-19","extractionStatus":"real_pdf_text_extracted","sourceRange":"One Basics 1.26"}},{"packageId":"pkg_one_basics_1_27_forgive_each_other","packageTitle":"One Basics 1.27: Forgive Each Other","packageType":"journey_lesson","packageGoal":"Help a learner understand forgive each other as part of the Live on Mission path and respond with one clear next step.","sourceItems":["book_one_basics_1_27_forgive_each_other"],"primaryItemId":"book_one_basics_1_27_forgive_each_other","primaryMedium":"read","speakerOrAuthor":{"id":"author_johan_toet","name":"Johan Toet","role":"author"},"language":"en","contentType":"study_guide","length":{"seconds":0,"readingMinutes":10,"display":"10 min read"},"fallbackPlan":{"cannotWatch":"book_one_basics_1_27_forgive_each_other","cannotListen":"book_one_basics_1_27_forgive_each_other","cannotRead":"book_one_basics_1_27_forgive_each_other_audio_future"},"journeyStage":{"stage":4,"name":"Live on Mission","slug":"mission","colour":"#8b2218","moduleId":"stage_4_live_on_mission"},"questionsAnswered":["What does forgive each other mean for following Jesus?","How does Scripture shape my understanding of forgive each other?","What is one practical response to forgive each other?"],"topics":["Relationships","One Basics 1","Live on Mission","Discipleship"],"learnerSession":{"openingPrompt":"Take one clear step in forgive each other.","contentSummary":"In this lesson, we are going talk about a difficult topic: ‘Forgiveness’. Many of us have dealt or had to deal with painful situations. Things that have been done to us by others. Trust that is broken, the enormous pain and disappointment that result from that. It is very hard to forgive the person who did that to us, because what was done to us has hurt and damaged us so deeply. Every time we think of it and are ‘co...","readBody":["In this lesson, we are going talk about a difficult topic: ‘Forgiveness’. Many of us have dealt or had to deal with painful situations. Things that have been done to us by others. Trust that is broken, the enormous pain and disappointment that result from that. It is very hard to forgive the person who did that to us, because what was done to us has hurt and damaged us so deeply. Every time we think of it and are ‘confronted’ with it again, it opens up those ‘old wounds’ again and we experience ‘the same’ pain again. Many can identify with this. Maybe you can as well. Now, ‘Biblically speaking’ we don’t have to be ‘determined’ by what has been done to us, we don’t have to live in the past anymore and can just ‘let it go’. But of course that is easier said than done. But this is also a process. We can discover more and more that it is very ‘normal’ to forgive once you are a child of God.","Matthew 18:21-22 ‘Then Peter came to Him and said, “Lord, how often shall my brother sin against me, and I forgive him? Up to seven times?” Jesus said to him, “I do not say to you, up to seven times, but up to seventy times seven.”’ Peter asked Jesus, ‘Lord, what is the limit?’ There should be a ‘maximum’ to how often I should forgive someone, shouldn’t there? But Jesus said, ‘If you want to know how often, then I say to you, ‘without end.’ For it is one of your new ‘characteristics’. It is who you ‘are’. Your new nature/man is capable of forgiving ‘every time’. FORGIVE EACH OTHER Lesson 1. FORGIVE EACH OTHER | 1.27 182 Ephesians 4:24 ‘And that you put on the new man which was created according to God, in true righteousness and holiness.’ We are now created in His ‘image’. He ‘is’ forgiveness. He ‘is’ love. You are now too in Him! 1 John 4:17 God doesn’t ‘give’ love. He ‘is’ love.","He doesn’t ‘give’ forgiveness. He ‘is’ forgiveness. As He is, so you now are too, because you are made in ‘His image’ and that’s why you are now able to act out of your ‘new nature’, your ‘new man’ as He acts in this world! Jesus forgave ‘everything’ that we did to Him! He forgave us for not recognizing Him as Son of God. He forgave us that we handed Him over and stoned Him. He forgave us for allowing Him to be mutilated with whiplashes for our weaknesses. He forgave us for allowing Him to be crucified. He forgave us all our sins. He forgave us everything, really everything, because that is Who He is! Luke 23:34 ‘Then Jesus said, “Father, forgive them, for they do not know what they do.”’ He always had ‘compassion’ on all His lost sheep. He is love and He is forgiveness. Stephen has the same attitude. For he has the same nature - spirit.","Acts 7:59-60 ‘And they stoned Stephen as he was calling on God and saying, “Lord Jesus, receive my spirit.” Then he knelt down and cried out with a loud voice, “Lord, do not charge them with this sin.” And when he had said this, he fell asleep.’ As God has forgiven you, ‘that’ is how you should forgive others too! Think for a moment about all He has forgiven you… If we look at what Jesus wiped away, erased, cleansed. If we think about how good and how gracious He has been and still is. How we are endlessly forgiven by His great love… Who are we not to forgive others?! 183 Matthew 18:23-35 ‘Therefore the kingdom of heaven is like a certain king who wanted to settle accounts with his servants. And when he had begun to settle accounts, one was brought to him who owed him ten thousand talents.","But as he was not able to pay, his master commanded that he be sold, with his wife and children and all that he had, and that payment be made. The servant therefore fell down before him, saying, “Master, have patience with me, and I will pay you all.” Then the master of that servant was moved with compassion, released him, and forgave him the debt. But that servant went out and found one of his fellow servants who owed him a hundred denarii; and he laid hands on him and took him by the throat, saying, “Pay me what you owe!” So his fellow servant fell down at his feet and begged him, saying, “Have patience with me, and I will pay you all.” And he would not, but went and threw him into prison till he should pay the debt. So when his fellow servants saw what had been done, they were very grieved, and came and told their master all that had been done.","Then his master, after he had called him, said to him, “You wicked servant! I forgave you all that debt because you begged me. Should you not also have had compassion on your fellow servant, just as I had pity on you?” And his master was angry, and delivered him to the torturers until he should pay all that was due to him. So My heavenly Father also will do to you if each of you, from his heart, does not forgive his brother his trespasses.’ So forgive as you have been forgiven. And forgiving is very healthy for you. It helps you! Ephesians 4:31-32 ‘Let all bitterness, wrath, anger, clamor, and evil speaking be put away from you, with all malice. And be kind to one another, tenderhearted, forgiving one another, even as God in Christ forgave you.’ In this way you must also ‘forgive’ so that you don’t become a ‘victim’ yourself of your own ‘unforgiveness’.","For you are hurting no one but yourself and with this you yourself are getting in the way of all that God has for you! FORGIVE EACH OTHER | 1.27 184 Not being ‘able’ to forgive robs you of peace and rest in your heart. It eats you up from the inside. And it ‘binds’ you. After all we pray (Matthew 6:9-12): ‘Our Father in Heaven, Hallowed be Your name. Your kingdom come. Your will be done, on earth as it is in heaven. Give us this day our daily bread. And forgive us our debts, as we forgive our debtors.’ Do we ‘really’? Do we really forgive other people as we have been forgiven ourselves? Matthew 6:14-15 ‘For if you forgive men their trespasses, your heavenly Father will also forgive you.","But if you do not forgive men their trespasses, neither will your Father forgive your trespasses.’ Mark 11:25-26 ‘And whenever you stand praying, if you have anything against anyone, forgive him, that your Father in heaven may also forgive you your trespasses. But if you do not forgive, neither will your Father in heaven forgive your trespasses.’ You cannot approach God and expect all kinds of things from Him but not grant them to someone else. It is true that all our sins are forgiven. But it is also true that we are now in this world as He is and that we have now received His nature, His heart, His character, His DNA. We have access to His Word, so there is zero ‘excuse’ for not being able to forgive someone. You may say, ‘But he hurt me.’ Maybe, but you have also hurt people and God has also forgiven you.","‘Yes, but she lied to me.’ Yes, but you have also lied sometimes and still God has forgiven you. ‘Yes, but he really tried to actively ruin my life.’ That may be, but you have also hurt and disappointed people, and still God has forgiven you. Shall I go on? He has forgiven you of ‘everything’ and no longer charges you with it. He doesn’t remember it anymore! So you must also forgive ‘everything’ and not remember it! 185 We can learn to walk as Jesus did here on earth. We possess the same nature, the same heart, the same characteristics so walk in it, apply it, and be a light. Forgive one another and be free from ‘bitterness’. Approach the Father with a clean and pure heart full of love and not with a heart full of resentment, hate, jealousy and bitterness. It eats you up and breaks you down from the inside, it is not of God. Forgiving blesses the other person and it sets you free!","Should you always let someone know that you have forgiven him or her? No, not necessarily, forgiving is healthy for you. It is nice for the other person, but it sets you free from all that anger and bitterness. It is extremely important to forgive. A little ‘sidenote’ in this lesson is ‘forgiving yourself’. Sometimes it’s easier for us to forgive another than forgiving ourselves. But both are equally important and both are equally ‘unhealthy’ if you don’t apply them. So whatever it is, whatever you blame yourself for, forgive yourself as God forgave you a long time ago! Set yourself free from that bondage, from that judgment. Stop listening to those accusations, they aren’t God’s thoughts. Forgive yourself with all your heart. And forgive others with all your heart, for that is His ‘perfect will’ for your life. Amen?"],"scriptureReferences":[],"reflectionPrompt":"What is one thing you need to understand or practice from Forgive Each Other?","quickCheck":{"question":"What is the best response to this lesson on Forgive Each Other?","answers":[{"id":"rush","label":"Rush to the next lesson without reflection"},{"id":"respond","label":"Reflect, pray, and take one faithful step"},{"id":"ignore","label":"Ignore it unless it feels easy"}],"correctAnswer":"respond","feedback":"Yes. The goal is not only to finish content, but to respond faithfully."},"notesPrompt":"Write one thought, question, or next step from Forgive Each Other.","completionMessage":"Good. You finished one One Basics step."},"placement":{"showInDiscover":true,"discoverShelf":"One Basics 1","discoverCardLabel":"Foundations","showInJourney":true,"moduleId":"stage_4_live_on_mission","moduleTitle":"Live on Mission","lessonOrder":27,"sourcePage":181,"isCoreLesson":true},"recommendedNextStep":{"label":"Write one response and continue the path","type":"reflect","targetId":"book_one_basics_1_27_forgive_each_other_reflection"},"sharing":{"shareText":"This One Basics lesson helped me think about forgive each other.","shareImagePrompt":"Live on Mission One In Him share card for Forgive Each Other"},"admin":{"packageStatus":"prepared","sourcePreApproved":true,"owner":"One In Him content team","lastUpdated":"2026-05-19","extractionStatus":"real_pdf_text_extracted","sourceRange":"One Basics 1.27"}},{"packageId":"pkg_one_basics_1_28_covenant_meal","packageTitle":"One Basics 1.28: Covenant Meal","packageType":"journey_lesson","packageGoal":"Help a learner understand covenant meal as part of the Live on Mission path and respond with one clear next step.","sourceItems":["book_one_basics_1_28_covenant_meal"],"primaryItemId":"book_one_basics_1_28_covenant_meal","primaryMedium":"read","speakerOrAuthor":{"id":"author_johan_toet","name":"Johan Toet","role":"author"},"language":"en","contentType":"study_guide","length":{"seconds":0,"readingMinutes":12,"display":"12 min read"},"fallbackPlan":{"cannotWatch":"book_one_basics_1_28_covenant_meal","cannotListen":"book_one_basics_1_28_covenant_meal","cannotRead":"book_one_basics_1_28_covenant_meal_audio_future"},"journeyStage":{"stage":4,"name":"Live on Mission","slug":"mission","colour":"#8b2218","moduleId":"stage_4_live_on_mission"},"questionsAnswered":["What does covenant meal mean for following Jesus?","How does Scripture shape my understanding of covenant meal?","What is one practical response to covenant meal?"],"topics":["Relationships","One Basics 1","Live on Mission","Discipleship"],"learnerSession":{"openingPrompt":"Take one clear step in covenant meal.","contentSummary":"In this lesson, we are going to look at where Communion or the covenant meal comes from and how we can celebrate it in the right way. The covenant meal is derived from the Jewish feast: the day of unleavened bread. This feast was also called the preparation of Passover. This was instituted when the people of Israel were led out of the land of Egypt. We can read all of this in Exodus 12:1-28. Passover or ‘Pesach’ in H...","readBody":["In this lesson, we are going to look at where Communion or the covenant meal comes from and how we can celebrate it in the right way. The covenant meal is derived from the Jewish feast: the day of unleavened bread. This feast was also called the preparation of Passover. This was instituted when the people of Israel were led out of the land of Egypt. We can read all of this in Exodus 12:1-28. Passover or ‘Pesach’ in Hebrew was the Jewish Easter, which essentially means ‘Passover’. Or: To pass over. The Jewish people had to take a lamb without blemish and they had to kill it. Exodus 12:5-6 Then they had to take the blood and put it on the doorposts of their houses. Exodus 12:7 They had to eat the lamb with their belts tied around their waists, sandals on their feet, and a staff in their hands and in haste. Exodus 12.11 It was the passing of the punishment over their house.","The passing of death over their house. They had to do this every year and they ate it together. Every time they ate this together they remembered the fact that they were led as slaves out of Egypt. Deuteronomy 16:2 It was a feast for the Lord! Exodus 13:6 This whole event under the Old Covenant was a shadow of what was to come. Jesus is now the sacrificial lamb. He is the Passover Lamb that was slain for us! Revelation 5:6 ‘And I looked, and behold, in the midst of the throne and of the four living creatures, and in the midst of the elders, stood a Lamb as though it had been slain, having seven horns and seven eyes, which are the seven Spirits of God sent out into all the earth.’ COVENANT MEAL Lesson 1.","Revelation 5:9 ‘And they sang a new song, saying: “You are worthy to take the scroll, and to open its seals; for You were slain, and have redeemed us to God by Your blood out of every tribe and tongue and people and nation.”’ Let’s take a look at how it came about that it was no longer the shadow in the Old Testament and it became the true covenant meal under the New Testament, which is still in effect today for every believer. Luke 22:1 ‘Now the Feast of Unleavened Bread drew near, which is called Passover.’ Luke 22:7 ‘Then came the Day of Unleavened Bread, when the Passover must be killed.’ Jesus and His disciples went to prepare themselves to celebrate this together according to the habit of the law. Only this time it would get a completely different meaning.","It would never have to be observed again as it was in the shadow, but it was to be celebrated forever as the true sacrifice is. Luke 22:8 ‘And He sent Peter and John, saying, “Go and prepare the Passover for us, that we may eat.”’ Luke 22:14-20 ‘When the hour had come, He sat down, and the twelve apostles with Him.","Then He said to them, “With fervent desire I have desired to eat this Passover with you before I suffer; for I say to you, I will no longer eat of it until it is fulfilled in the kingdom of God.” Then He took the cup, and gave thanks, and said, “Take this and divide it among yourselves; for I say to you, I will not drink of the fruit of the vine until the kingdom of God comes.” And He took bread , gave thanks and broke it, and gave it to them, saying, “This is My body which is given for you; do this in remembrance of Me.” Likewise He also took the cup after supper, saying, “This cup is the new covenant in My blood, which is shed for you.”’ Also read Mark 14:22-24 and Matthew 26:26-28. As we saw, the people of Israel were led out of Egypt as slaves in the Old Testament.","They had to kill a lamb without blemish and put its blood on their doorposts to let the punishment and death pass over them. And they had to eat it in haste and remember this every year and celebrate it as a feast for the Lord. COVENANT MEAL | 1.28 190 Now in the New Testament, we may remember that we are led as slaves out of the world. We were lost without Christ our Savior, slaves of sin, slaves of the god of this world, and under the curse of the law. But He became our Passover Lamb. John 1:29 He gave Himself so He could redeem you and me out of the claws of death. He was slain. Isaiah 53:7 ‘He was oppressed and He was afflicted, Yet He opened not His mouth; He was led as a lamb to the slaughter, and as a sheep before its shearers is silent, so He opened not His mouth.’ We were cleansed by His blood [Hebrews 9:14], and baptized in His death [Romans 6:3].","We were far away, but are now brought near by His blood [Ephesians 2:13]. We were cleansed once and for all of all sin, shame and guilt! We may celebrate and remember this, because we now have a better covenant that is based on better promises than the Old Covenant. Hebrews 8:6 Jesus says that if we don’t take part in His body and in His blood, that we don’t belong to Him. Communion is a blood covenant. A blood covenant is binding and it is eternal. If we take part in the blood covenant with the Lord we are saying: ‘Everything that is mine is Yours and everything that is Yours is mine. I belong to You and You belong to me. We are joined together forever by this blood covenant’.","By celebrating this frequently and commemorating His death and not remembering it as if He still is dead, because He died but see He lives, we confirm time and time again that we are His and belong to Him and not to this world, not to slavery, not to the evil one. There are many faith movements that believe that not everyone can take part in the Lord’s supper or the covenant meal, as it is also known. They are afraid that they bring judgment on themselves by drinking and will die young if they take it when they still have sin. They believe that not every believer Is worthy of taking part in this covenant meal. That not every believer can take part in the meal with the Lord. But that is not based on the truth of the Word! 191 They take the words of Paul out of context.","Corinthians 11:20 ‘Therefore when you come together in one place, it is not to eat the Lord’s Supper.’ Paul spoke to the Corinthians because they had complete binge parties. Some were drunk and others were completely stuffed with food, while others didn’t have anything at all. He tells them how He had delivered to them how Communion should be celebrated, as He had received it from the Lord. 1 Corinthians 11:23-26 And He told them that what they were doing was not celebrating Communion. 1 Corinthians 11:27-29 ‘Therefore whoever eats this bread or drinks this cup of the Lord in an unworthy manner will be guilty of the body and blood of the Lord. But let a man examine himself, and so let him eat of the bread and drink of the cup. For he who eats and drinks in an unworthy manner eats and drinks judgment to himself, not discerning the Lord’s body.’ Also read 1 Corinthians 10:14-21.","These people made no distinction between a banquet or a booze feast and Communion as the Lord had instituted it. If we take part in His body, that means healing for all our flesh, because He was broken for us and by His stripes we are healed. Isaiah 53:4-5 If we take part in His blood, then we recognize by doing so that we have been cleansed from our sins and that we take part in a better covenant, in the New Testament established in His blood. Matthew 26:28 But if we don’t make a distinction and are conscious of this Communion, but just take it as a feast for eating and drinking and not as supper with the Lord, then this will also not have a healing, cleansing effect on our lives. It will do nothing for us. We then miss the promises found in the Lord’s Supper for everyone who takes part in it."],"scriptureReferences":[],"reflectionPrompt":"What is one thing you need to understand or practice from Covenant Meal?","quickCheck":{"question":"What is the best response to this lesson on Covenant Meal?","answers":[{"id":"rush","label":"Rush to the next lesson without reflection"},{"id":"respond","label":"Reflect, pray, and take one faithful step"},{"id":"ignore","label":"Ignore it unless it feels easy"}],"correctAnswer":"respond","feedback":"Yes. The goal is not only to finish content, but to respond faithfully."},"notesPrompt":"Write one thought, question, or next step from Covenant Meal.","completionMessage":"Good. You finished one One Basics step."},"placement":{"showInDiscover":true,"discoverShelf":"One Basics 1","discoverCardLabel":"Foundations","showInJourney":true,"moduleId":"stage_4_live_on_mission","moduleTitle":"Live on Mission","lessonOrder":28,"sourcePage":188,"isCoreLesson":true},"recommendedNextStep":{"label":"Write one response and continue the path","type":"reflect","targetId":"book_one_basics_1_28_covenant_meal_reflection"},"sharing":{"shareText":"This One Basics lesson helped me think about covenant meal.","shareImagePrompt":"Live on Mission One In Him share card for Covenant Meal"},"admin":{"packageStatus":"prepared","sourcePreApproved":true,"owner":"One In Him content team","lastUpdated":"2026-05-19","extractionStatus":"real_pdf_text_extracted","sourceRange":"One Basics 1.28"}},{"packageId":"pkg_one_basics_1_29_divine_flow","packageTitle":"One Basics 1.29: Divine Flow","packageType":"journey_lesson","packageGoal":"Help a learner understand divine flow as part of the Live on Mission path and respond with one clear next step.","sourceItems":["book_one_basics_1_29_divine_flow"],"primaryItemId":"book_one_basics_1_29_divine_flow","primaryMedium":"read","speakerOrAuthor":{"id":"author_johan_toet","name":"Johan Toet","role":"author"},"language":"en","contentType":"study_guide","length":{"seconds":0,"readingMinutes":6,"display":"6 min read"},"fallbackPlan":{"cannotWatch":"book_one_basics_1_29_divine_flow","cannotListen":"book_one_basics_1_29_divine_flow","cannotRead":"book_one_basics_1_29_divine_flow_audio_future"},"journeyStage":{"stage":4,"name":"Live on Mission","slug":"mission","colour":"#8b2218","moduleId":"stage_4_live_on_mission"},"questionsAnswered":["What does divine flow mean for following Jesus?","How does Scripture shape my understanding of divine flow?","What is one practical response to divine flow?"],"topics":["Divine Flow","One Basics 1","Live on Mission","Discipleship"],"learnerSession":{"openingPrompt":"Take one clear step in divine flow.","contentSummary":"Today we are going to talk about how God’s Spirit Who flows ‘in you’ can come out and be a blessing to others. We have had multiple lessons now and by now you should know that you have become a ‘temple’ of the ‘Holy Spirit’. 1 Corinthians 6:19 ‘Or do you not know that your body is the temple of the Holy Spirit who is in you, whom you have from God, and you are not your own?’ God’s Spirit now lives inside of you, you ...","readBody":["Today we are going to talk about how God’s Spirit Who flows ‘in you’ can come out and be a blessing to others. We have had multiple lessons now and by now you should know that you have become a ‘temple’ of the ‘Holy Spirit’. 1 Corinthians 6:19 ‘Or do you not know that your body is the temple of the Holy Spirit who is in you, whom you have from God, and you are not your own?’ God’s Spirit now lives inside of you, you have received His nature. 2 Corinthians 5:17 ‘Therefore, if anyone is in Christ, he is a new creation; old things have passed away; behold, all things have become new.’ You are a completely ‘new creation’. From the ‘core’ of who you now are as a child of the Most High; from the ‘fullness’ that you now possess in Him, you may now go out into the world and manifest ‘His nature’ in you to others. ‘God is love’.","John 4:8 Ephesians 4:22-24 ‘That you put off, concerning your former conduct, the old man which grows corrupt according to the deceitful lusts, and be renewed in the spirit of your mind, and that you put on the new man which was created according to God, in true righteousness and holiness.’ We can now ‘put on’ this new man that is according to His image, which is love. We can now walk like He does. In 1 Corinthians 13:4-7 (NIV) we can read what the nature of God is: ‘Love [God] is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs. Love does not delight in evil but rejoices with the truth. It always protects, always trusts, always hopes, always perseveres.’ DIVINE FLOW Lesson 1.","When we start ‘focusing’ on our identity and are led by the Holy Spirit in us, by His love and compassion for others, then we know that we ‘walk by the Spirit’. Galatians 5:22-23 ‘But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithful- ness, gentleness and self-control.’ You aren’t concerned with ‘yourself’ or what others might think of you. Only ‘goodness’ comes out of you and you only want one thing and that is: Blessing and loving other people. That is God’s nature inside you. That flow of His life sets you free by focusing on His will and His character, His nature. God is good. He is love. He is joy. He is gentle and compassionate. He is grace. And we are ‘as He is’ as we have learned by now. Sometimes we feel ‘burdened’ to approach someone. To share a word or encourage someone.","Then we are so concerned with ‘what might the other person think of it’. You might be thinking, ‘What if I say something weird’ or ‘What will they think of me?’ Then you are being ‘self-centered’. You need to ‘take your focus off of yourself’ and focus on the other person and on God. Then His Spirit in you can ‘flow’ and you can encourage and edify others. When you walk out His love, ‘you radiate’ that to the world around you. That opens doors and makes you a ‘magnet’ for God to lead people to Him. Do you know how you can ensure that you make His love flow?","Philippians 4:8 ‘Finally, brethren, whatever things are true, whatever things are noble, whatever things are just, whatever things are pure, whatever things are lovely, whatever things are of good report, if there is any virtue and if there is anything praiseworthy—meditate on these things.’ If you are ‘focused’ on things that ‘reflect’ God’s character and you start moving in that, His love can be experienced by others through you. When you start ‘meditating’ on how great and gracious He is and all that He has already done for you and what still awaits you; And when you start rejoicing over your relationship with Him and your new identity in Him, you will ‘radiate like the sun’, the joy and happiness will spill over! Everyone will feel ‘drawn’ to you and will want to be in your presence. DIVINE FLOW | 1.29 198 Because then they will automatically be in ‘His presence’.","Then they will be in the ‘presence’ of God’s Spirit. You are the light of the world! Arise and shine! Let His love ‘flow’ and you will see what a blessing you can be for the people around you! It’s really not that hard, it is who you are! Praise the Lord! Amen? Share personal testimonies about this subject. Really take some time together for this. 199 1 Read: 1 Corinthians 6:19 ‘Or do you not know that your body is the temple of the Holy Spirit who is in you, whom you have from God, and you are not your own?’ Question: Whose life is now in you? 2 Read: 1 John 4:17 ‘Love has been perfected among us in this: that we may have boldness in the day of judgment; because as He is, so are we in this world.’ Question: Can we walk in His Divine nature?","Read: Philippians 4:8 ‘Finally, brethren, whatever things are true, whatever things are noble, whatever things are just, whatever things are pure, whatever things are lovely, whatever things are of good report, if there is any virtue and if there is anything praiseworthy—medi- tate on these things.’ Question: Name a minimum of three things on which we should focus to let the Divine current of His Spirit flow. Reactions and discussion Answers in the back of the study guide DIVINE FLOW | 1. QUESTIONS With lesson 1. 29"],"scriptureReferences":[],"reflectionPrompt":"What is one thing you need to understand or practice from Divine Flow?","quickCheck":{"question":"What is the best response to this lesson on Divine Flow?","answers":[{"id":"rush","label":"Rush to the next lesson without reflection"},{"id":"respond","label":"Reflect, pray, and take one faithful step"},{"id":"ignore","label":"Ignore it unless it feels easy"}],"correctAnswer":"respond","feedback":"Yes. The goal is not only to finish content, but to respond faithfully."},"notesPrompt":"Write one thought, question, or next step from Divine Flow.","completionMessage":"Good. You finished one One Basics step."},"placement":{"showInDiscover":true,"discoverShelf":"One Basics 1","discoverCardLabel":"Foundations","showInJourney":true,"moduleId":"stage_4_live_on_mission","moduleTitle":"Live on Mission","lessonOrder":29,"sourcePage":196,"isCoreLesson":true},"recommendedNextStep":{"label":"Write one response and continue the path","type":"reflect","targetId":"book_one_basics_1_29_divine_flow_reflection"},"sharing":{"shareText":"This One Basics lesson helped me think about divine flow.","shareImagePrompt":"Live on Mission One In Him share card for Divine Flow"},"admin":{"packageStatus":"prepared","sourcePreApproved":true,"owner":"One In Him content team","lastUpdated":"2026-05-19","extractionStatus":"real_pdf_text_extracted","sourceRange":"One Basics 1.29"}},{"packageId":"pkg_one_basics_1_30_using_gifts","packageTitle":"One Basics 1.30: Using Gifts","packageType":"journey_lesson","packageGoal":"Help a learner understand using gifts as part of the Live on Mission path and respond with one clear next step.","sourceItems":["book_one_basics_1_30_using_gifts"],"primaryItemId":"book_one_basics_1_30_using_gifts","primaryMedium":"read","speakerOrAuthor":{"id":"author_johan_toet","name":"Johan Toet","role":"author"},"language":"en","contentType":"study_guide","length":{"seconds":0,"readingMinutes":8,"display":"8 min read"},"fallbackPlan":{"cannotWatch":"book_one_basics_1_30_using_gifts","cannotListen":"book_one_basics_1_30_using_gifts","cannotRead":"book_one_basics_1_30_using_gifts_audio_future"},"journeyStage":{"stage":4,"name":"Live on Mission","slug":"mission","colour":"#8b2218","moduleId":"stage_4_live_on_mission"},"questionsAnswered":["What does using gifts mean for following Jesus?","How does Scripture shape my understanding of using gifts?","What is one practical response to using gifts?"],"topics":["Holy Spirit","One Basics 1","Live on Mission","Discipleship"],"learnerSession":{"openingPrompt":"Take one clear step in using gifts.","contentSummary":"In the previous lesson, we talked about the ‘Divine flow’. In this lesson, we are going to talk about the use of ‘Divine gifts’. We belong to the Kingdom of God and that is a ‘serving Kingdom’. Galatians 5:13-14 ‘For you, brethren, have been called to liberty; only do not use liberty as an opportunity for the flesh, but through love serve one another. For all the law is fulfilled in one word, even in this: “You shall...","readBody":["In the previous lesson, we talked about the ‘Divine flow’. In this lesson, we are going to talk about the use of ‘Divine gifts’. We belong to the Kingdom of God and that is a ‘serving Kingdom’. Galatians 5:13-14 ‘For you, brethren, have been called to liberty; only do not use liberty as an opportunity for the flesh, but through love serve one another. For all the law is fulfilled in one word, even in this: “You shall love your neighbor as yourself.”’ We are called to ‘serve one another through love’. To encourage and build up and help along others. To go the ‘extra mile’ and be the difference in the lives of others. To bring the supernatural Kingdom into their lives and to lead them on the ‘eternal road’ of King Jesus. Many of us think that this is only for the ‘specially anointed’. A ‘special’ Christian. But the truth is that we are all ‘special’ Christians!","He is not a respecter of persons. God has also specially anointed you for something. Maybe you don’t realize that yet and maybe you don’t walk in it yet, but you are called to serve too. God has made you capable of being a servant of His. 2 Corinthians 3:4-6 ‘And we have such trust through Christ toward God. Not that we are sufficient of ourselves to think of anything as being from ourselves, but our sufficiency is from God, who also made us sufficient as ministers of the new covenant, not of the letter but of the Spirit; for the letter kills, but the Spirit gives life.’ To be a servant of the ‘New Covenant’, you don’t have to be a pastor or an evangelist. The only thing you need to do is discover which ‘talents’ and ‘gifts’ God has given you. Because He has made you capable of being a servant of the New Covenant! USING GIFTS Lesson 1. USING GIFTS","202 You are specially anointed for something, so that the good news of the Gospel of God with regard to His Son Jesus can be spread through you. You can transfer it to others, through the talents God has given to you. That is good news! 1 Corinthians 12:1-11 ‘Now concerning spiritual gifts, brethren, I do not want you to be ignorant: You know that you were Gentiles, carried away to these dumb idols, however you were led. Therefore I make known to you that no one speaking by the Spirit of God calls Jesus accursed, and no one can say that Jesus is Lord except by the Holy Spirit. [In other words, if you can say: ‘Jesus is Lord’, then you are speaking by the Holy Spirit and you possess spiritual gifts.] There are diversities of gifts, but the same Spirit. There are differences of ministries, but the same Lord.","And there are diversities of activities, but it is the same God who works all in all. But the manifestation of the Spirit is given to each one for the profit of all: for to one is given the word of wisdom through the Spirit, to another the word of knowledge through the same Spirit, to another faith by the same Spirit, to another gifts of healings by the same Spirit, to another the working of miracles, to another prophecy, to another discerning of spirits, to another different kinds of tongues, to another the interpretation of tongues. But one and the same Spirit works all these things, distributing to each one individually as He wills.’ Paul says that there are ‘differences’ of gifts and ministries. Not everyone has the same gift or ministry. But everyone has a gift or a ministry to serve the whole body.","We are all quite necessary because we form the body ‘together’ of which Christ is the Head. 1 Corinthians 12:12-18, 27 ‘For as the body is one and has many members, but all the members of that one body, being many, are one body, so also is Christ. For by one Spirit we were all baptized into one body—whether Jews or Greeks, whether slaves or free—and have all been made to drink into one Spirit. For in fact the body is not one member but many. If the foot should say, “Because I am not a hand, I am not of the body,” is it therefore not of the body? And if the ear should say, “Because I am not an eye, I am not of the body,” is it therefore not of the body? If the whole body were an eye, where would be the hearing? If the whole were hearing, where would be the smelling? But now God has set the members, each one of them, in the body just as He pleased. 27.","Now you are the body of Christ, and members individually.’ 203 So don’t be ‘jealous’ if another christian is allowed to do beautiful things for the Kingdom! Rejoice, because you are part of ‘the same body’ by which we serve the same God and the same purpose! Amen? It is important that together we form the Church that God intended, a church that edifies one another, encourages one another, and serves one another in love. Where we are together to share King Jesus with the world in which we support and take care of one another. This is how it is supposed to be with the church of God and you are a very important part of that, so never let that be taken away from you. You are necessary and you are important because you have gifts and talents that no one else has. Everyone has special gifts and talents. God has given you a special place in the ‘body’ too!","You and I are equally ‘important’ and equally ‘precious’. You don’t have to do what I do to use your gifts for His Kingdom. That is the anointing He has given to me. But you must discover what ‘your gifts’ are and how you can use these for His Kingdom. This doesn’t always have to be spiritual! For you can already make a ‘difference’ by who ‘you are’ and how God has created you. Maybe you are great at cooking and you can make people happy and bless them that way. That, ‘making happy and blessing are characteristics of God; it is that ‘Divine flow’ inside you. You release that by for example cooking for people, just to name something. Maybe you are an enormous ‘positivist’ and you are great at encouraging people. Maybe you always know how to edify people and bless them by the things you ‘say’ and ‘do’. That is a special gift with which you serve His Kingdom.","Maybe you are great with kids, use that, maybe you are great at music, get to work with that. Just start moving! Just start exploring and walking in what you ‘are good at’ and don’t think: ‘Yeah, that’s just who I am.’ No, God created you that way and gave you those special talents and gifts. And you must ‘use’ those gifts God has given you for the Kingdom of God. The more you use your ‘gifts and talents’ for ‘His honor and glory’, the more talents He will give to you. Experience shows that if we start moving and are loyal in the small things, God entrusts us with more and more. Then He might use you for something you would never have USING GIFTS | 1.30 204 dared to dream of. But as long as you think too little of yourself and don’t start moving, that Divine flow can’t start flowing and those Divine gifts can’t manifest and multiply in your life.","So start discovering what your talents are and use them for the profit of His Kingdom and He will give you more and more. Amen? 205 1 Read: Galatians 5:13 ‘For you, brethren, have been called to liberty; only do not use liberty as an opportunity for the flesh, but through love serve one another.’ Question: How are we now allowed to serve the Kingdom of God? 2 Read: 1 Corinthians 12:27 ‘Now you are the body of Christ, and members individually.’ Question: Is everyone in the body of Christ equally important? 3 Read: 1 Corinthians 12:4 ‘There are diversities of gifts, but the same Spirit.’ Question: Have we all received the same gifts? Reactions and discussion Answers in the back of the study guide USING GIFTS | 1. QUESTIONS With lesson 1. 30"],"scriptureReferences":[],"reflectionPrompt":"What is one thing you need to understand or practice from Using Gifts?","quickCheck":{"question":"What is the best response to this lesson on Using Gifts?","answers":[{"id":"rush","label":"Rush to the next lesson without reflection"},{"id":"respond","label":"Reflect, pray, and take one faithful step"},{"id":"ignore","label":"Ignore it unless it feels easy"}],"correctAnswer":"respond","feedback":"Yes. The goal is not only to finish content, but to respond faithfully."},"notesPrompt":"Write one thought, question, or next step from Using Gifts.","completionMessage":"Good. You finished one One Basics step."},"placement":{"showInDiscover":true,"discoverShelf":"One Basics 1","discoverCardLabel":"Foundations","showInJourney":true,"moduleId":"stage_4_live_on_mission","moduleTitle":"Live on Mission","lessonOrder":30,"sourcePage":201,"isCoreLesson":true},"recommendedNextStep":{"label":"Write one response and continue the path","type":"reflect","targetId":"book_one_basics_1_30_using_gifts_reflection"},"sharing":{"shareText":"This One Basics lesson helped me think about using gifts.","shareImagePrompt":"Live on Mission One In Him share card for Using Gifts"},"admin":{"packageStatus":"prepared","sourcePreApproved":true,"owner":"One In Him content team","lastUpdated":"2026-05-19","extractionStatus":"real_pdf_text_extracted","sourceRange":"One Basics 1.30"}},{"packageId":"pkg_one_basics_1_31_the_fivefold_ministry","packageTitle":"One Basics 1.31: The Fivefold Ministry","packageType":"journey_lesson","packageGoal":"Help a learner understand the fivefold ministry as part of the Lead and Multiply path and respond with one clear next step.","sourceItems":["book_one_basics_1_31_the_fivefold_ministry"],"primaryItemId":"book_one_basics_1_31_the_fivefold_ministry","primaryMedium":"read","speakerOrAuthor":{"id":"author_johan_toet","name":"Johan Toet","role":"author"},"language":"en","contentType":"study_guide","length":{"seconds":0,"readingMinutes":15,"display":"15 min read"},"fallbackPlan":{"cannotWatch":"book_one_basics_1_31_the_fivefold_ministry","cannotListen":"book_one_basics_1_31_the_fivefold_ministry","cannotRead":"book_one_basics_1_31_the_fivefold_ministry_audio_future"},"journeyStage":{"stage":5,"name":"Lead and Multiply","slug":"multiply","colour":"#090a0a","moduleId":"stage_5_lead_and_multiply"},"questionsAnswered":["What does the fivefold ministry mean for following Jesus?","How does Scripture shape my understanding of the fivefold ministry?","What is one practical response to the fivefold ministry?"],"topics":["Leadership","One Basics 1","Lead and Multiply","Discipleship"],"learnerSession":{"openingPrompt":"Take one clear step in the fivefold ministry.","contentSummary":"Today we’re going to talk about the ‘fivefold ministry’. Apostle, prophet, evangelist, pastor, teacher. Ephesians 4:11 ‘And He Himself gave some to be apostles, some prophets, some evangelists, and some pastors and teachers.’ He ‘gave some’. ‘To what’ did He give those ‘some’? The fivefold ministry is given ‘to the body’ to equip the church and bring it to perfection, to unity in Christ. Nowadays we find very few chu...","readBody":["Today we’re going to talk about the ‘fivefold ministry’. Apostle, prophet, evangelist, pastor, teacher. Ephesians 4:11 ‘And He Himself gave some to be apostles, some prophets, some evangelists, and some pastors and teachers.’ He ‘gave some’. ‘To what’ did He give those ‘some’? The fivefold ministry is given ‘to the body’ to equip the church and bring it to perfection, to unity in Christ. Nowadays we find very few churches that have the ‘full’ fivefold ministry, doing actively what the Word commands us. There are places where you don’t find it at all and there are places where only a ‘part’ is recognized. Often it won’t be used and applied then in the church as it is ‘commanded’ from the Word. That is a shame, because God has given these ‘gifts’ to equip the church. So if everything is on the shoulders of the ‘pastor’ or the ‘shepherd’ it becomes an unhealthy business.","When people discover that they have this ‘anointing’, this gift, they are often on their own. They do partially operate in it, but don’t touch a very important part of it because no room is given by the church that they are a part of. And there are also Christians who have one or more of the gifts, who then decide to build their own little kingdoms where they think it’s all about them. For they are ‘the anointed ones’, they have the ‘gift’ and now they will go and fix it all, it all depends on them now… ‘Look at me…’ We ignore the fact that everything we ever do, we can only do because of His ‘grace’ and not because we are so great! It’s not you doing it! THE FIVEFOLD MINISTRY Lesson 1. THE FIVEFOLD MINISTRY | 1. NOTES 208 There are many people who have given themselves a ‘title’ and boast in themselves like that to the world and in the body of Christ.","They even have business cards with prophet so and so, or apostle so and so… But God says, ‘He who glories, let him glory in the Lord.’ 1 Corinthians 1:31 You can do nothing of yourself at all, it is Him inside of you, no more and no less. Many of us have a tendency to ‘worship’ these kinds of people. It is important to ‘respect’ people but we shouldn’t ‘worship’ them. There are only ‘instruments’ in the hands of our Maker. Do not think they are anointed because they are ‘so great’ and because God had no one else to work with. 1 Corinthians 4:7 ‘For who makes you differ from another? And what do you have that you did not receive? Now if you did indeed receive it, why do you boast as if you had not received it?’ There is nothing that we have in ourselves that makes us who we are. All good gifts come from above. Everything is His and everything is unto Him.","The people who really have the ‘anointing’ who have really received one or more gifts of the fivefold ministry, know ‘why’ they have received it and will also apply and execute it for that purpose.","Ephesians 4:11-16 ‘And He Himself gave some to be apostles, some prophets, some evangelists, and some pastors and teachers, for the equipping of the saints for the work of ministry, for the edifying of the body of Christ, till we all come to the unity of the faith and of the knowledge of the Son of God, to a perfect man, to the measure of the stature of the fullness of Christ; that we should no longer be children, tossed to and fro and carried about with every wind of doctrine, by the trickery of men, in the cunning craftiness of deceitful plotting, but, speaking the truth in love, may grow up in all things into Him who is the head—Christ— from whom the whole body, joined and knit together by what every joint supplies, according to the effective working by which every part does its share, causes growth of the body for the edifying of itself in love.’ If you have received a ‘gift’ in the fivefold ministry and you run with it yourself and don’t do what is commanded in the Word, then you disregard the anointing and you will be held accountable.","This gift is not for yourself! It is to equip the saints (believers)! So that they too can do the works of service and together with you edify the body! In that way we will come to the ‘unity of the faith’, we will become that mature man or woman and we will find the ‘measure of the stature of the fullness of Christ.’ If the principle of the fivefold ministry is applied in a church, the intention is that the five ministries complement and strengthen each other. If someone has one of the five gifts, he will not only fulfill that, but he will also recognize that ministry in ‘others’ and ‘disciple’ them, so that they can also fulfill their own ministry. It’s important that we do this, because imagine there only being one evangelist that goes out to preach the Gospel in the darkness? No, as many people as possible must ‘go out’. It is the task of the evangelist to equip them for this.","Let’s have a general look at the different gifts, and which of these form the foundation of the church. The apostle has the task to: • Start churches • Teach others how they can do that too and turn them into leaders The apostle starts churches and appoints leaders. When he appoints leaders to lead a church, usually hands are laid on them before the church and they are ordained. Paul did that with Timothy for example. 2 Timothy 1:6 ‘Therefore I remind you to stir up the gift of God which is in you through the laying on of my hands.’ The Apostle Paul started many churches among the heathens. As Peter did among the Jews.","Romans 11:13-14 ‘For I speak to you Gentiles; inasmuch as I am an apostle to the Gentiles, I magnify my ministry, if by any means I may provoke to jealousy those who are my flesh and save some of them.’ THE FIVEFOLD MINISTRY | 1.31 210 1 Timothy 2:7 ‘For which I was appointed a preacher and an apostle—I am speaking the truth in Christ and not lying—a teacher of the Gentiles in faith and truth.’ The apostle also helps with the managing of a church and he brings ‘order’ in churches where disorder was started. 1 Corinthians 11:34 ‘But if anyone is hungry, let him eat at home, lest you come together for judgment.","And the rest I will set in order when I come.’ 1 Corinthians 12:28 ‘And God has appointed these in the church: first apostles, second prophets, third teachers, after that miracles, then gifts of healings, helps, administrations, varieties of tongues.’ The apostle serves the church and equips them so that the churches that he starts or were started are functioning in the correct way. Those who have been given a place in the church, meaning, those who laid the foundation, are initially the ‘apostles and the prophets’.","Ephesians 2:19-22 ‘Now, therefore, you are no longer strangers and foreigners, but fellow citizens with the saints and members of the household of God, having been built on the foundation of the apostles and prophets, Jesus Christ Himself being the chief cornerstone, in whom the whole building, being fitted together, grows into a holy temple in the Lord, in whom you also are being built together for a dwelling place of God in the Spirit.’ The prophet has the task to: • Encourage, edify, and rebuke • Edify up the body • Teach others to do the same The prophet speaks ‘revelation’ that is inspired by ‘the Spirit’. A prophet can travel and visit different churches, or he operates within one church. A prophet in his position can give direction. An example of this is the sending out of Paul and Barnabas in Acts 13:1-5 after the Holy Spirit had spoken about that."],"scriptureReferences":[],"reflectionPrompt":"What is one thing you need to understand or practice from The Fivefold Ministry?","quickCheck":{"question":"What is the best response to this lesson on The Fivefold Ministry?","answers":[{"id":"rush","label":"Rush to the next lesson without reflection"},{"id":"respond","label":"Reflect, pray, and take one faithful step"},{"id":"ignore","label":"Ignore it unless it feels easy"}],"correctAnswer":"respond","feedback":"Yes. The goal is not only to finish content, but to respond faithfully."},"notesPrompt":"Write one thought, question, or next step from The Fivefold Ministry.","completionMessage":"Good. You finished one One Basics step."},"placement":{"showInDiscover":true,"discoverShelf":"One Basics 1","discoverCardLabel":"Foundations","showInJourney":true,"moduleId":"stage_5_lead_and_multiply","moduleTitle":"Lead and Multiply","lessonOrder":31,"sourcePage":207,"isCoreLesson":true},"recommendedNextStep":{"label":"Write one response and continue the path","type":"reflect","targetId":"book_one_basics_1_31_the_fivefold_ministry_reflection"},"sharing":{"shareText":"This One Basics lesson helped me think about the fivefold ministry.","shareImagePrompt":"Lead and Multiply One In Him share card for The Fivefold Ministry"},"admin":{"packageStatus":"prepared","sourcePreApproved":true,"owner":"One In Him content team","lastUpdated":"2026-05-19","extractionStatus":"real_pdf_text_extracted","sourceRange":"One Basics 1.31"}},{"packageId":"pkg_one_basics_1_32_prophets_and_prophecy","packageTitle":"One Basics 1.32: Prophets and Prophecy","packageType":"journey_lesson","packageGoal":"Help a learner understand prophets and prophecy as part of the Lead and Multiply path and respond with one clear next step.","sourceItems":["book_one_basics_1_32_prophets_and_prophecy"],"primaryItemId":"book_one_basics_1_32_prophets_and_prophecy","primaryMedium":"read","speakerOrAuthor":{"id":"author_johan_toet","name":"Johan Toet","role":"author"},"language":"en","contentType":"study_guide","length":{"seconds":0,"readingMinutes":11,"display":"11 min read"},"fallbackPlan":{"cannotWatch":"book_one_basics_1_32_prophets_and_prophecy","cannotListen":"book_one_basics_1_32_prophets_and_prophecy","cannotRead":"book_one_basics_1_32_prophets_and_prophecy_audio_future"},"journeyStage":{"stage":5,"name":"Lead and Multiply","slug":"multiply","colour":"#090a0a","moduleId":"stage_5_lead_and_multiply"},"questionsAnswered":["What does prophets and prophecy mean for following Jesus?","How does Scripture shape my understanding of prophets and prophecy?","What is one practical response to prophets and prophecy?"],"topics":["Holy Spirit","One Basics 1","Lead and Multiply","Discipleship"],"learnerSession":{"openingPrompt":"Take one clear step in prophets and prophecy.","contentSummary":"Today we’re going to talk about prophets and prophecy. Prophet is one of the gifts of the fivefold ministry, which is supposed to serve and equip the body of Christ. Let’s start by looking at what a prophet is. A prophet is someone who speaks ‘on behalf of God’. In the Old Testament you can read a lot about how a prophet made ‘the will of God’ known to the people and called them back to God. He also announced judgmen...","readBody":["Today we’re going to talk about prophets and prophecy. Prophet is one of the gifts of the fivefold ministry, which is supposed to serve and equip the body of Christ. Let’s start by looking at what a prophet is. A prophet is someone who speaks ‘on behalf of God’. In the Old Testament you can read a lot about how a prophet made ‘the will of God’ known to the people and called them back to God. He also announced judgment because of the bad things people were doing. He would then call them to ‘repentance’. You can read this with the prophet Jeremiah for example. Jeremiah 18:11 ‘Now therefore, speak to the men of Judah and to the inhabitants of Jerusalem, saying, ‘Thus says the Lord: “Behold, I am fashioning a disaster and devising a plan against you. Return now every one from his evil way, and make your ways and your doings good.”’ Or with the prophet Ezekiel.","Ezekiel 18:30-32 ‘Therefore I will judge you, O house of Israel, every one according to his ways, says the Lord God. Repent, and turn from all your transgressions, so that iniquity will not be your ruin. Cast away from you all the transgressions which you have committed, and get yourselves a new heart and a new spirit. For why should you die, O house of Israel? For I have no pleasure in the death of one who dies, says the Lord God. Therefore turn and live!’ The prophet kept on calling upon the members of the people to repent of their ‘evil ways’ so that they would walk under the covenant with God again and He could bless them. God’s heart has ‘always’ been that we would ‘believe’ and ‘obey’ Him so that He could do what He wanted to do from the beginning of creation and that is to be our Father and bless us abundantly. PROPHETS AND PROPHECY Lesson 1.","You can read that the prophets under the Old Covenant who were called by God foretold a ‘certain time’ in the future. They foretold the coming of the ‘Messiah’ throughout the centuries. Most of the prophecies about the Messiah come from the prophet Isaiah. Isaiah 53 describes one of the most well-known prophecies of this prophet, which is avoided by the Jews even today, because it undeniably describes our King Jesus who was not born until 630 years later and ‘fulfilled’ this whole prophecy. Grab your Bible and read: Isaiah 53:1-12 All of this is completed by Jesus as was ‘foretold’! Jesus fulfilled a total of no less than 128 Old Testament prophecies. The chance that only one prophecy from the scriptures would be fulfilled by a man was already very small, let alone 128 one after another! Jesus is our King and our Messiah!","Apart from the prophecies about Jesus, the characteristics of prophecies in the Old Testament were mostly ‘warnings and announcements’ of situations, like judgment, punishment, calls to repentance. ‘Direction was given’ to the people and so on. The people under the Old Covenant couldn’t ‘simply’ turn straight towards God. This was always through a middleman, a prophet. 1 Samuel 7:8 ‘So the children of Israel said to Samuel, “Do not cease to cry out to the Lord our God for us, that He may save us from the hand of the Philistines.”’ The prophet in the Old Testament was often called ‘the mouth of God’ because he spoke to the people on behalf of God. But there are also many ‘false’ prophets. They claim to speak ‘on behalf of’ God but they speak according to their own agendas or those of their own organization.","Or they speak from their souls, their flesh or spirit of fortune telling or for profit and nothing from God is there. This still happens today in the modern church as it happened under the Old Covenant. God says this about it: PROPHETS AND PROPHECY | 1.32 218 Jeremiah 14:14-15 ‘And the Lord said to me, “The prophets prophesy lies in My name. I have not sent them, commanded them, nor spoken to them; they prophesy to you a false vision, divination, a worthless thing, and the deceit of their heart. Therefore thus says the Lord concerning the prophets who prophesy in My name, whom I did not send, and who say, ‘Sword and famine shall not be in this land’—‘By sword and famine those prophets shall be consumed!”’ We must be alert when we say that we speak on behalf of God and when people prophesy over us, we must always ‘test’ it against the Word.","Nowadays there are many people who have declared themselves to be prophets. Don’t blindly accept everything. Especially the negative prophets who declare judgment, punishment or any of those types of things about which you can raise questions. The Messiah has already come. The judgment has been placed on Him and now we especially need ‘messengers’ to spread this ‘Good News’. Because Jesus has completed everything and we have become new creations through His death and resurrection and because of this have become temples of the Holy Spirit, He can now speak through all His children. It was already prophesied that this would happen by the prophet Joel in Joel 2:28-29.","Peter repeats those words in: Acts 2:17-18: ‘And it shall come to pass in the last days, says God, that I will pour out of My Spirit on all flesh; your sons and your daughters shall prophesy, your young men shall see visions, your old men shall dream dreams. And on My menservants and on My maidservants I will pour out My Spirit in those days; and they shall prophesy.’ We are now ‘made capable’ by God to utter prophecies over others through the Holy Spirit. So is everyone a prophet now? No, certainly not, not everyone is a prophet, but everyone can ‘prophecy’ and should function in this too. 1 Corinthians 14:31 ‘For you can all prophesy one by one, that all may learn and all may be encouraged.’ So according to the Word we can all ‘prophesy’. Definitely do so, but it doesn’t make you a ‘prophet’! 219 You are a prophet if God has called you to be one and you have the ‘gift of the prophet’.","This is only given to ‘some’. Ephesians 4:11 ‘And He Himself gave some to be apostles, some prophets, some evangelists, and some pastors and teachers.’ But this gift is only given to bring the whole body to ‘maturity’. A prophet has received the task to give guidance and direction in the church. If nowadays someone receives the gift of being a prophet, then that is specifically to ‘equip the church, the body and to encourage the believer, to give direction and foretell certain events’. He doesn’t prophecy disaster, judgment or punishment. That era has passed thanks to King Jesus! But it can happen that a church has to repent or go in another direction if it doesn’t want to fail. Then a prophet speaks this on behalf of God to the church. So what is prophecy?","The Greek word for prophecy is: Prophēteuō - Prof-ate-yoo’-o To foretell events, divine, speak under inspiration, exercise the prophetic office: - prophesy. A ‘New Testament’ prophecy is completely different from uttered under the Old Testament. A present-day prophecy can announce a new season, a new fresh wind. It can encourage you, edify you and teach you about the things of the Lord. It can foretell that God is preparing you to do a work for Him and similar things. He can reveal things from your past, your present, and your future. Whatever it is, it is always encouraging and edifying, we just read it already in: 1 Corinthians 14:31 ‘For you can all prophesy one by one, that all may learn and all may be encouraged.’ 1 Corinthians 14:3-4 ‘But he who prophesies speaks edification and exhortation and comfort to men.","He who speaks in a tongue edifies himself, but he who prophesies edifies the church.’ PROPHETS AND PROPHECY | 1.32 220 So what purpose do present-day prophecies serve and what is the task of someone who has received the gift of being a prophet? Edify, exhort, and comfort. So that everyone learns and is encouraged. ‘Exhort’ in this verse does not mean that you are scolded, punished or get a strong reprimand. No, it also means ‘comfort’. Paraklēsis - Par-ak’-lay-sis From G3870; imploration, hortation, solace: - comfort, consolation, exhortation, intreaty. It is to point out to someone ‘in love’ that there is a ‘better way’ than the way they are going. As the Father can patiently point out something ‘in love’ without getting angry or rejecting you, so that you always feel ‘reassured and loved’, even when you have done something wrong. Is prophecy for unbelievers?"],"scriptureReferences":[],"reflectionPrompt":"What is one thing you need to understand or practice from Prophets and Prophecy?","quickCheck":{"question":"What is the best response to this lesson on Prophets and Prophecy?","answers":[{"id":"rush","label":"Rush to the next lesson without reflection"},{"id":"respond","label":"Reflect, pray, and take one faithful step"},{"id":"ignore","label":"Ignore it unless it feels easy"}],"correctAnswer":"respond","feedback":"Yes. The goal is not only to finish content, but to respond faithfully."},"notesPrompt":"Write one thought, question, or next step from Prophets and Prophecy.","completionMessage":"Good. You finished one One Basics step."},"placement":{"showInDiscover":true,"discoverShelf":"One Basics 1","discoverCardLabel":"Foundations","showInJourney":true,"moduleId":"stage_5_lead_and_multiply","moduleTitle":"Lead and Multiply","lessonOrder":32,"sourcePage":216,"isCoreLesson":true},"recommendedNextStep":{"label":"Write one response and continue the path","type":"reflect","targetId":"book_one_basics_1_32_prophets_and_prophecy_reflection"},"sharing":{"shareText":"This One Basics lesson helped me think about prophets and prophecy.","shareImagePrompt":"Lead and Multiply One In Him share card for Prophets and Prophecy"},"admin":{"packageStatus":"prepared","sourcePreApproved":true,"owner":"One In Him content team","lastUpdated":"2026-05-19","extractionStatus":"real_pdf_text_extracted","sourceRange":"One Basics 1.32"}},{"packageId":"pkg_one_basics_2_1_god_the_father_the_son_and_the_holy_spirit","packageTitle":"One Basics 2.1: God the Father, the Son, and the Holy Spirit","packageType":"journey_lesson","packageGoal":"Help a learner understand god the father, the son, and the holy spirit as part of the Grow Deep Roots path and respond with one clear next step.","sourceItems":["book_one_basics_2_1_god_the_father_the_son_and_the_holy_spirit"],"primaryItemId":"book_one_basics_2_1_god_the_father_the_son_and_the_holy_spirit","primaryMedium":"read","speakerOrAuthor":{"id":"author_johan_toet","name":"Johan Toet","role":"author"},"language":"en","contentType":"study_guide","length":{"seconds":0,"readingMinutes":11,"display":"11 min read"},"fallbackPlan":{"cannotWatch":"book_one_basics_2_1_god_the_father_the_son_and_the_holy_spirit","cannotListen":"book_one_basics_2_1_god_the_father_the_son_and_the_holy_spirit","cannotRead":"book_one_basics_2_1_god_the_father_the_son_and_the_holy_spirit_audio_future"},"journeyStage":{"stage":3,"name":"Grow Deep Roots","slug":"formation","colour":"#446523","moduleId":"stage_3_grow_deep_roots"},"questionsAnswered":["What does god the father, the son, and the holy spirit mean for following Jesus?","How does Scripture shape my understanding of god the father, the son, and the holy spirit?","What is one practical response to god the father, the son, and the holy spirit?"],"topics":["Holy Spirit","One Basics 2","Grow Deep Roots","Discipleship"],"learnerSession":{"openingPrompt":"Take one clear step in god the father, the son, and the holy spirit.","contentSummary":"In this lesson, we are going to cover the Trinity. Matthew 28:19 ‘Go therefore and make disciples of all the nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all things that I have commanded you.’ So, we have God the Father, God the Son, and God the Holy Spirit. These are three Persons, yet still all One. Just like water can freeze, evaporate, and be li...","readBody":["In this lesson, we are going to cover the Trinity. Matthew 28:19 ‘Go therefore and make disciples of all the nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all things that I have commanded you.’ So, we have God the Father, God the Son, and God the Holy Spirit. These are three Persons, yet still all One. Just like water can freeze, evaporate, and be liquid. It is and always will be water. Of course, God is infinite and can never be compared to something finite. But it does paint a picture of how the Trinity could exist. Just like we are spirit, soul, and body, three aspects but still one. He is Father, Son, and Holy Spirit and still One. Deuteronomy 6:4 ‘Hear, O Israel: The Lord our God, the Lord is one!’ This lesson is mainly about what the tasks are that God the Trinity fulfills. Which task which Person fulfills.","Because God is not a thing, but a Person: God the Father, God the Son, God the Holy Spirit. Every Person That is God has a certain role to fulfill in the Trinity. It is important to know these roles so that we get a clear picture of each Person, Who He is and what He does. God the Father Let’s first look at the great I AM. God the Father. God the Father is the Source of all life and all things. He is Jehovah Jireh, our Provider. The Father is the Source of the universe and of all creation. Of everything that is. Genesis 1:1 ‘In the beginning God created the heavens and the earth.’ GOD THE FATHER, THE SON, AND THE HOLY SPIRIT Lesson 2 . 1 7 1 Corinthians 8:6 ‘yet for us there is one God, the Father, of whom are all things…’ The Father is the Source of all revelation. Revelation 1:1 ‘The Revelation of Jesus Christ, which God gave Him…’ The Father is the Source of salvation.","John 14:10 ‘Do you not believe that I am in the Father, and the Father in Me? The words that I speak to you I do not speak on My own authority; but the Father who dwells in Me does the works.’ So, the Father, the Source, He initiates all these things. He is the Creator. Further down we will look at how everything comes back to the Father and that eventually everything revolves around our relationship with Him. God the Son Secondly, we have God the Son. God the Son is the Representative, the Person through Whom God does the works that He does. He works the works through the Son. 1 Corinthians 8:6 ‘yet for us there is one God, the Father, of whom are all things, and we for Him; and one Lord Jesus Christ, through whom are all things, and through whom we live. ’ The Son is the Word, He is there from the beginning.","John 1:1-3 ‘In the beginning was the Word, and the Word was with God, and the Word was God. He was in the beginning with God. All things were made through Him, and without Him nothing was made that was made.’ Through the Son the works are done of which the Father is the Source. It comes to pass in Him and is worked by the Father in Him. Colossians 1:15-17 ‘He is the image of the invisible God, the Firstborn over all creation. For by Him all things were created that are in heaven and that are on earth, visible and invisible, whether thrones or dominions or principalities or powers. All things were created through Him and for Him.","And He is before all things, and in Him all things consist.’ John 14:10 ‘… The words that I speak to you I do not speak on My own authority; but the Father who dwells in Me does the works.’ FATHER,SON AND HOLY SPIRIT | 2.1 8 The Son is the perfect reflection of the Father. John 14:9 ‘… He who has seen Me has seen the Father…’ The Son reveals the things of God the Father. Matthew 11:27 ‘All things have been delivered to Me by My Father, and no one knows the Son except the Father. Nor does anyone know the Father except the Son, and the one to whom the Son wills to reveal Him.’ The Son works the salvation.","Matthew 1:21 ‘And she will bring forth a Son, and you shall call His name Jesus, for He will save His people from their sins.’ 2 Corinthians 5:19 ‘That God was in Christ reconciling the world to Himself, not imputing their trespasses to them…’ God the Holy Spirit Then we have the Person of the Holy Spirit. The Holy Spirit is the Person Who is the executive Power with which God performs works. Genesis 1:2-3 ‘The earth was without form, and void; and darkness was on the face of the deep. And the Spirit of God was hovering over the face of the waters. Then God said, “Let there be light”; and there was light.’ Creation and its maintenance is done by the Holy Spirit. Job 26:13 ‘By His Spirit He adorned the heavens…’ Psalm 104:30 ‘You send forth Your Spirit, they are created; and You renew the face of the earth.’ The divine revelations are also spoken by Him from the Father through the Son.","John 16:13-15 ‘However, when He, the Spirit of truth, has come, He will guide you into all truth; for He will not speak on His own authority, but whatever He hears He will speak; and He will tell you things to come. He will glorify Me, for He will take of what is Mine and declare it to you. All things that the Father has are Mine. Therefore I said that He will take of Mine and declare it to you.’ 9 These revelations are given through the Holy Spirit to us. Ephesians 3:5 ‘Which in other ages was not made known to the sons of men, as it has now been revealed by the Spirit to His holy apostles and prophets.’ The salvation in Christ (the Son) is executed by the power of the Holy Spirit.","John 3:6 ‘That which is born of the flesh is flesh, and that which is born of the Spirit is spirit.’ Titus 3:5 ‘… He saved us, through the washing of regeneration and renewing of the Holy Spirit.’ The Holy Spirit executes the works of the Son. Isaiah 61:1 ‘The Spirit of the Lord God is upon Me, Because the Lord has anointed Me to preach good tidings to the poor; He has sent Me to heal the brokenhearted, to proclaim liberty to the captives, and the opening of the prison to those who are bound.’ Acts 10:38 ‘How God anointed Jesus of Nazareth with the Holy Spirit and with power, Who went about doing good and healing all who were oppressed by the devil, for God was with Him.’ So the Holy Spirit is essentially the driving Force by Whom all works can be done that the Father has initiated in the Son.","Now we have created a small overview of Who the Father is, Who the Son is and Who the Holy Spirit is. They are all One but have three different tasks, so there is a great diversity. Now, how should we look at these things? How can we have a relationship with God in the right way? If the Father is eventually the Source to Whom we all come, it is good to know ‘how’ we can come to Him. 2 Corinthians 13:14 ‘The grace of the Lord Jesus Christ, and the love of God, and the communion of the Holy Spirit be with you all. Amen.’ We can only come to the Father through the Son. John 14:6 ‘Jesus said to him, “I am the way, the truth, and the life. No one comes to the Father except through Me.”’ FATHER,SON AND HOLY SPIRIT | 2.1 10 Jesus came and cleared the way to the Father. He did this through His blood, through His sacrifice, through His death and His resurrection.","He paid the price that had to be paid for us [Revelation 5:9]. He did this by grace [John 1:14]. So Jesus represents grace. Everything that He has established, was established by grace. Through faith in Him, by the grace of our Lord Jesus Christ, we are saved and we can come freely to the Father. Romans 3:23 That was His task and He has successfully accomplished it! John 19:30 So the Son is the Way to the Father. We come to the Father in His Name. The Holy Spirit is there for the fellowship, for relationship with the Father. Jesus the Son established that possibility and His work is now done and that is why He is now seated at the right hand of the Father. He is done. Luke 22:69 The Holy Spirit now essentially performs all the work that Jesus established, has made available. He gives us the power to go out and to witness."],"scriptureReferences":[],"reflectionPrompt":"What is one thing you need to understand or practice from God the Father, the Son, and the Holy Spirit?","quickCheck":{"question":"What is the best response to this lesson on God the Father, the Son, and the Holy Spirit?","answers":[{"id":"rush","label":"Rush to the next lesson without reflection"},{"id":"respond","label":"Reflect, pray, and take one faithful step"},{"id":"ignore","label":"Ignore it unless it feels easy"}],"correctAnswer":"respond","feedback":"Yes. The goal is not only to finish content, but to respond faithfully."},"notesPrompt":"Write one thought, question, or next step from God the Father, the Son, and the Holy Spirit.","completionMessage":"Good. You finished one One Basics step."},"placement":{"showInDiscover":true,"discoverShelf":"One Basics 2","discoverCardLabel":"Going deeper","showInJourney":true,"moduleId":"stage_3_grow_deep_roots","moduleTitle":"Grow Deep Roots","lessonOrder":101,"sourcePage":6,"isCoreLesson":true},"recommendedNextStep":{"label":"Write one response and continue the path","type":"reflect","targetId":"book_one_basics_2_1_god_the_father_the_son_and_the_holy_spirit_reflection"},"sharing":{"shareText":"This One Basics lesson helped me think about god the father, the son, and the holy spirit.","shareImagePrompt":"Grow Deep Roots One In Him share card for God the Father, the Son, and the Holy Spirit"},"admin":{"packageStatus":"ready","sourcePreApproved":true,"owner":"One In Him content team","lastUpdated":"2026-05-19","extractionStatus":"real_pdf_text_extracted","sourceRange":"One Basics 2.1"}},{"packageId":"pkg_one_basics_2_2_once_saved_always_saved","packageTitle":"One Basics 2.2: Once Saved, Always Saved?","packageType":"journey_lesson","packageGoal":"Help a learner understand once saved, always saved? as part of the Grow Deep Roots path and respond with one clear next step.","sourceItems":["book_one_basics_2_2_once_saved_always_saved"],"primaryItemId":"book_one_basics_2_2_once_saved_always_saved","primaryMedium":"read","speakerOrAuthor":{"id":"author_johan_toet","name":"Johan Toet","role":"author"},"language":"en","contentType":"study_guide","length":{"seconds":0,"readingMinutes":11,"display":"11 min read"},"fallbackPlan":{"cannotWatch":"book_one_basics_2_2_once_saved_always_saved","cannotListen":"book_one_basics_2_2_once_saved_always_saved","cannotRead":"book_one_basics_2_2_once_saved_always_saved_audio_future"},"journeyStage":{"stage":3,"name":"Grow Deep Roots","slug":"formation","colour":"#446523","moduleId":"stage_3_grow_deep_roots"},"questionsAnswered":["What does once saved, always saved? mean for following Jesus?","How does Scripture shape my understanding of once saved, always saved??","What is one practical response to once saved, always saved??"],"topics":["Grace","One Basics 2","Grow Deep Roots","Discipleship"],"learnerSession":{"openingPrompt":"Take one clear step in once saved, always saved?.","contentSummary":"In this lesson, we are going to look at the question that many believers have: ‘Am I saved once and for all or can I lose my salvation again?’ There are many believers who live in insecurity when it comes to their salvation. They live in fear because they don’t have the assurance of faith that they are saved once and for all. This comes from the fact that there has been much teaching saying that the keeping of our fa...","readBody":["In this lesson, we are going to look at the question that many believers have: ‘Am I saved once and for all or can I lose my salvation again?’ There are many believers who live in insecurity when it comes to their salvation. They live in fear because they don’t have the assurance of faith that they are saved once and for all. This comes from the fact that there has been much teaching saying that the keeping of our faith is dependent on our good works. Committing or not committing. It is a false doctrine that being saved or not is related to your achievements for God. For this would mean that when you don’t perform properly for a bit and take a wrong step, you can still be lost. There is no assurance of faith. That is a horrible way of living and believing! What do those who preach and believe this base this conviction on? We are going to look at what the Word says about this.","Corinthians 6:9-10 ‘Do not be deceived. Neither fornicators, nor idolaters, nor adulterers, nor homosexuals, nor sodomites, nor thieves, nor covetous, nor drunkards, nor revilers, nor extortioners will inherit the kingdom of God.’ Paul speaks about this again in the letter to the Galatians. Galatians 5:19-21 ‘Now the works of the flesh are evident, which are: adultery, fornication, uncleanness, lewdness, idolatry, sorcery, hatred, contentions, jealousies, outbursts of wrath, selfish ambitions, dissensions, heresies, envy, murders, drunkenness, revelries, and the like; of which I tell you beforehand, just as I also told you in time past, that those who practice such things will not inherit the kingdom of God.’ Well, that is clear language. People who ‘practice’ such things won’t inherit the Kingdom of God! The word ‘practice’ here in this passage means ‘Praso’ in Greek.","ONCE SAVED, ALWAYS SAVED? Lesson 2 . 2 ONCE SAVED, ALWAYS SAVED? | 2.2 That means to consciously, repeatedly and as a habit constantly keep practising. In other words: ‘I do this and I think it is normal, I don’t feel guilty about it and have no problem with it, I do not lose sleep over it. It is just who I am and what I do.’ It is impossible for this passage to be about a born-again, Spirit-filled child of God! He does not wake up in the morning and say: ‘Well, today I am going to have a good time living in sin because that is just what I feel like doing.’ That is scripturally impossible for a new creation! 1 John 3:9 But what does Paul ‘really’ say and in what context are these things being said? In the letter to the Corinthians, Paul speaks to people who are having a lot of struggles among themselves, they sue each other and take each other to secular courts.","They were behaving inappropriately and ‘unrighteously’. ‘The unrighteous’ are those who are still in sin and walk in darkness without Christ, they can’t walk in the things of God. That is also why he says in the following verse: 1 Corinthians 6:9 ‘Do you not know that the unrighteous will not inherit the kingdom of God?’ The unrighteous can’t see or enter into the Kingdom of God. To be able to come into the Kingdom of God, you must be righteous with the righteousness that is from God and if you are without Christ, you can never obtain it. And then Paul continues in verse 11. 1 Corinthians 6:11 ‘And such were some of you [unrighteous, sinners].","But you were washed, but you were sanctified, but you were justified in the name of the Lord Jesus and by the Spirit of our God.’ You were unrighteous, but now you are washed clean by the blood of King Jesus [1 John 1:7], sanctified by the washing of regeneration [Titus 3:5] and made justified by grace through faith [Romans 3:22-23]. You are now a righteous child of God, so stop doing those things that you did before, don’t walk like that anymore, don’t act like that anymore, that is no longer who you are, that is not your new nature in Christ. 2 Corinthians 5:17 That is the message that Paul is trying to convey. 16 In the letter to the Galatians, he emphasizes exactly the same thing. He wants them to understand that they must love each other as themselves. Galatians 5:14 No jealousy, no hate and resentment and bitter envy and other such things.","We have been set free through Christ and that is why we should not act according to our old man in the works of the flesh. That would be dumb. 1 Corinthians 6:12 You are now righteous, so then walk righteously. 1 John 3:7 People who live without God, without the justification that is in Christ, can’t inherit the Kingdom of God. Walk therefore after the Spirit and you will no longer fulfill the works of the flesh. Galatians 5:16 It does not say that when you do those things as a child of God, you will lose your salvation. It says that people who live this way without God can’t inherit the Kingdom because their unrighteousness keeps them from it.","Believers who move in the works of the flesh because they just still make mistakes, can interpret this verse of ‘not inheriting the Kingdom’ as them not experiencing the blessing of the Kingdom in their lives at the moment that they walk in the same works of the flesh. But we are now righteous to God. 2 Corinthians 5:21 And righteous means: Innocent. You stand once and for all as innocent before the face of God. As if you have never sinned. For Jesus accomplished eternal salvation for us. Not ‘tempo- rary’, not ‘conditional’, no, eternal salvation! Hebrews 9:12 And God’s gifts and calling are irrevocable. Romans 11:29 Do not think that God makes you a new creation today and takes away your old sinful nature, but as soon as you make a mistake, He takes your new spotless nature away and gives you your old sinful nature back again.","Just like there is nothing that you can do to justify yourself before God, you can do nothing to lose the righteousness that you have received by grace through faith. You were a sinner with a sinful nature and because of that, you lived in sin. There was nothing that you could do to get rid of that sinful nature. 17 In the same way, you can now as a born-again, righteous, new creation not do anything to ever get rid of that new sin-free nature either. God’s gifts are irrevocable and He can’t lie! That old man is utterly dead, even though you can still make mistakes and live in sin sometimes. And even though sin is very bad and harmful for you, God sees you as holy, spotless, and righteous forever. (also see lesson 1:11 Dead to sin) But what about the following Bible passage?","Hebrews 6:4-6 ‘For it is impossible for those who were once enlightened, and have tasted the heavenly gift, and have become partakers of the Holy Spirit, and have tasted the good word of God and the powers of the age to come, if they fall away, to renew them again to repentance, since they crucify again for themselves the Son of God, and put Him to an open shame.’ This passage speaks of a person who has walked in the fullness of God, full of the Holy Spirit. Who has tasted the supernatural, seen and experienced signs and wonders and is rooted in the Word of God. This speaks of a mature Christian. It is almost impossible for someone who has progressed so far in his walk with the Lord to ever renounce Jesus. That is not realistic.","But imagine that someone like that should reach a point in their lives that they should renounce their faith, then this would be a deliberate and very conscious decision. Do not think that Jesus does not accept them anymore, but someone like that can’t be converted anymore. He no longer wants to. He has rejected it himself. That is what that passage is saying. It says the same in Hebrews 10:29 ‘Of how much worse punishment, do you suppose, will he be thought worthy who has trampled the Son of God underfoot, counted the blood of the covenant by which he was sanctified a common thing, and insulted the Spirit of grace?’ Someone like that can’t be converted anymore, but the chance that someone goes that far is extremely small."],"scriptureReferences":[],"reflectionPrompt":"What is one thing you need to understand or practice from Once Saved, Always Saved??","quickCheck":{"question":"What is the best response to this lesson on Once Saved, Always Saved??","answers":[{"id":"rush","label":"Rush to the next lesson without reflection"},{"id":"respond","label":"Reflect, pray, and take one faithful step"},{"id":"ignore","label":"Ignore it unless it feels easy"}],"correctAnswer":"respond","feedback":"Yes. The goal is not only to finish content, but to respond faithfully."},"notesPrompt":"Write one thought, question, or next step from Once Saved, Always Saved?.","completionMessage":"Good. You finished one One Basics step."},"placement":{"showInDiscover":true,"discoverShelf":"One Basics 2","discoverCardLabel":"Going deeper","showInJourney":true,"moduleId":"stage_3_grow_deep_roots","moduleTitle":"Grow Deep Roots","lessonOrder":102,"sourcePage":14,"isCoreLesson":true},"recommendedNextStep":{"label":"Write one response and continue the path","type":"reflect","targetId":"book_one_basics_2_2_once_saved_always_saved_reflection"},"sharing":{"shareText":"This One Basics lesson helped me think about once saved, always saved?.","shareImagePrompt":"Grow Deep Roots One In Him share card for Once Saved, Always Saved?"},"admin":{"packageStatus":"ready","sourcePreApproved":true,"owner":"One In Him content team","lastUpdated":"2026-05-19","extractionStatus":"real_pdf_text_extracted","sourceRange":"One Basics 2.2"}},{"packageId":"pkg_one_basics_2_3_spirit_soul_and_body","packageTitle":"One Basics 2.3: Spirit, Soul and Body","packageType":"journey_lesson","packageGoal":"Help a learner understand spirit, soul and body as part of the Grow Deep Roots path and respond with one clear next step.","sourceItems":["book_one_basics_2_3_spirit_soul_and_body"],"primaryItemId":"book_one_basics_2_3_spirit_soul_and_body","primaryMedium":"read","speakerOrAuthor":{"id":"author_johan_toet","name":"Johan Toet","role":"author"},"language":"en","contentType":"study_guide","length":{"seconds":0,"readingMinutes":13,"display":"13 min read"},"fallbackPlan":{"cannotWatch":"book_one_basics_2_3_spirit_soul_and_body","cannotListen":"book_one_basics_2_3_spirit_soul_and_body","cannotRead":"book_one_basics_2_3_spirit_soul_and_body_audio_future"},"journeyStage":{"stage":3,"name":"Grow Deep Roots","slug":"formation","colour":"#446523","moduleId":"stage_3_grow_deep_roots"},"questionsAnswered":["What does spirit, soul and body mean for following Jesus?","How does Scripture shape my understanding of spirit, soul and body?","What is one practical response to spirit, soul and body?"],"topics":["Spirit, Soul and Body","One Basics 2","Grow Deep Roots","Discipleship"],"learnerSession":{"openingPrompt":"Take one clear step in spirit, soul and body.","contentSummary":"In this lesson, we are going to discover how we are a threefold being and how we can learn to live out of our new man. We have a spirit, a soul, and a body. It is often assumed that spirit and soul are the same, that the words denote the same thing. For example, if someone talks about mental health, or that someone is mentally confused, they mean your thinking capability, and that is not your spirit, that is your sou...","readBody":["In this lesson, we are going to discover how we are a threefold being and how we can learn to live out of our new man. We have a spirit, a soul, and a body. It is often assumed that spirit and soul are the same, that the words denote the same thing. For example, if someone talks about mental health, or that someone is mentally confused, they mean your thinking capability, and that is not your spirit, that is your soul. That is why it is good to have a good grasp of the different aspects of our threefold being, so that you can learn to understand and then differentiate from which part of your being you are essentially living at a certain moment. Because we are threefold.","Thessalonians 5:23 ‘Now may the God of peace Himself sanctify you completely; and may your whole spirit, soul, and body be preserved blameless at the coming of our Lord Jesus Christ.’ Let’s sum this up: • Spirit • Soul • Body Let’s start with the body. Our body is also called our flesh. It is our fleshly person. Genesis 2:7 ‘And the Lord God formed man of the dust of the ground, and breathed into his nostrils the breath of life; and man became a living being.’ God created our bodies from the dust of the earth. That is our fleshly body. Our body would not be able to function if there were not also a spirit and a soul in it. That’s why it also says: ‘[He] breathed into his nostrils the breath of life; and man became a living being.’ SPIRIT, SOUL AND BODY Lesson 2 . SPIRIT, SOUL AND BODY | 2.3 22 Without the breath of life, the body is a dead thing.","The flesh is the weakest part of our threefold being. Your fleshly man lusts against the Spirit. Galatians 5:17 ‘For the flesh lusts against the Spirit, and the Spirit against the flesh; and these are contrary to one another, so that you do not do the things that you wish.’ There are two aspects of the flesh. The first is that we are a physical body, this has body parts and organs, etcetera and it also consists of fluid, fibers, cells, and bones. This part, the body, is corruptible and subject to deterioration. It is our temporary home. 1 Corinthians 15:53 ‘For this corruptible must put on incorruption, and this mortal must put on immortality.’ There will come a time when we leave the body behind and soon will receive a glorified body.","Philippians 3:20-21 ‘For our citizenship is in heaven, from which we also eagerly wait for the Savior, the Lord Jesus Christ, Who will transform our lowly body that it may be conformed to His glorious body, according to the working by which He is able even to subdue all things to Himself.’ That is a nice future, because our corruptible bodies don’t get more beautiful with age! In addition, the flesh is also the physical part by which you can let yourself be fully led. For example, the body can say: ‘I’m hungry’ and then yo…62152 tokens truncated…nversation to the faith, to Jesus. Just tell the other person what God has done in your life. Be full and joyful when you speak about Him. Show the people that it is real for you. Take them with you in your emotions. Based on your personal testimony you share the true gospel with them. A gospel of love and grace. EVANGELISM | 2.31 KEY 3 - COMPASSION AND EMPATHY. Matthew 9:35-36 ‘Then Jesus went about all the cities and villages, teaching in their synagogues, preaching the gospel of the kingdom , and healing every sickness and every disease among the people.","But when He saw the multitudes, He was moved with compassion for them, because they were weary and scattered, like sheep having no shepherd.’ If there is one thing that is important when it comes to the winning of souls for God’s Kingdom, then that’s compassion and empathy for the lost. When it comes to winning people, it is not just about the number of souls. It is also about you loving them with the same love that Jesus loves them with. Jesus was completely moved with love and compassion for the people. This is the key to having a heart for the world. Without Christ people wander about like sheep, each in his own way. They are in darkness and have no idea which road they should take. That is why Jesus says in John 3:3, 5 that if someone is not born again, he can’t see and enter into the Kingdom of God. That is because people without God walk in darkness.","When you are in darkness you can’t see the light. Jesus shows them the Way that they should take: He is that Way. In John 14:6, Jesus says: ‘I am the way, the truth, and the life. No one comes to the Father except through Me.’ God doesn’t want anyone to be lost but that all should come to repentance. 2 Peter 3:9 God loves us so much that He gave His only begotten Son for us. John 3:16 Jesus considers us so valuable that He bought us with His blood for God. He was slain and was obedient to the death on the cross. This indescribable love of God, this compassion and empathy of our King we may learn to translate to our own lives, and from there reach out to the lost.","Matthew 25:35-36 ‘For I was hungry and you gave Me food; I was thirsty and you gave Me drink; I was a stranger and you took Me in; I was naked and you clothed Me; I was sick and you visited Me; I was in prison and you came to Me.’ 230 When we have compassion, don’t judge but are ready to help, to comfort and to encourage, when we are ready to go that extra mile, to share food, share clothing, share that smile, give that one hug, then we make God very pleased. Matthew 25:40 ‘And the King will answer and say to them, ‘Assuredly, I say to you, inasmuch as you did it to one of the least of these My brethren, you did it to Me.’ That is what outreach is, it means to ‘reach out’. You must reach out to those in need, to those in darkness. Not sharing folders with a gloomy face. Lovingly reaching out to another is the right attitude for evangelism."],"scriptureReferences":[],"reflectionPrompt":"What is one thing you need to understand or practice from Evangelism?","quickCheck":{"question":"What is the best response to this lesson on Evangelism?","answers":[{"id":"rush","label":"Rush to the next lesson without reflection"},{"id":"respond","label":"Reflect, pray, and take one faithful step"},{"id":"ignore","label":"Ignore it unless it feels easy"}],"correctAnswer":"respond","feedback":"Yes. The goal is not only to finish content, but to respond faithfully."},"notesPrompt":"Write one thought, question, or next step from Evangelism.","completionMessage":"Good. You finished one One Basics step."},"placement":{"showInDiscover":true,"discoverShelf":"One Basics 2","discoverCardLabel":"Going deeper","showInJourney":true,"moduleId":"stage_5_lead_and_multiply","moduleTitle":"Lead and Multiply","lessonOrder":131,"sourcePage":225,"isCoreLesson":true},"recommendedNextStep":{"label":"Write one response and continue the path","type":"reflect","targetId":"book_one_basics_2_31_evangelism_reflection"},"sharing":{"shareText":"This One Basics lesson helped me think about evangelism.","shareImagePrompt":"Lead and Multiply One In Him share card for Evangelism"},"admin":{"packageStatus":"prepared","sourcePreApproved":true,"owner":"One In Him content team","lastUpdated":"2026-05-19","extractionStatus":"real_pdf_text_extracted","sourceRange":"One Basics 2.31"}},{"packageId":"pkg_one_basics_2_32_partnership","packageTitle":"One Basics 2.32: Partnership","packageType":"journey_lesson","packageGoal":"Help a learner understand partnership as part of the Lead and Multiply path and respond with one clear next step.","sourceItems":["book_one_basics_2_32_partnership"],"primaryItemId":"book_one_basics_2_32_partnership","primaryMedium":"read","speakerOrAuthor":{"id":"author_johan_toet","name":"Johan Toet","role":"author"},"language":"en","contentType":"study_guide","length":{"seconds":0,"readingMinutes":9,"display":"9 min read"},"fallbackPlan":{"cannotWatch":"book_one_basics_2_32_partnership","cannotListen":"book_one_basics_2_32_partnership","cannotRead":"book_one_basics_2_32_partnership_audio_future"},"journeyStage":{"stage":5,"name":"Lead and Multiply","slug":"multiply","colour":"#090a0a","moduleId":"stage_5_lead_and_multiply"},"questionsAnswered":["What does partnership mean for following Jesus?","How does Scripture shape my understanding of partnership?","What is one practical response to partnership?"],"topics":["Partnership","One Basics 2","Lead and Multiply","Discipleship"],"learnerSession":{"openingPrompt":"Take one clear step in partnership.","contentSummary":"In this lesson, we are going to look at what it means to be a partner with a ministry. Making a fixed monthly donation to a ministry is so much more than just financial support! Partnership is essentially the joining of hands to do the work together which God has called us for. A partner takes part in the ministry with which he becomes a partner. It has become a collaboration. It is a necessary collaboration because ...","readBody":["In this lesson, we are going to look at what it means to be a partner with a ministry. Making a fixed monthly donation to a ministry is so much more than just financial support! Partnership is essentially the joining of hands to do the work together which God has called us for. A partner takes part in the ministry with which he becomes a partner. It has become a collaboration. It is a necessary collaboration because if the one does not give, then the other can’t go. Romans 10:15 ‘And how shall they preach unless they are sent?’ One gives, the other goes and like this they work together as one body to do the work of the Lord. The more believers work together, the more they can accomplish together. The power is in the numbers, For together you achieve more.","When the people in the book of Genesis wanted to build a tower for themselves that would reach up to heaven and they seriously began working together, God said the following: Genesis 11:6 ‘And the Lord said, “Indeed the people are one and they all have one language, and this is what they begin to do; now nothing that they propose to do will be withheld from them.”’ If we join hands we can accomplish the impossible for the Kingdom of God. This applies to everything that we do and most certainly also in the giving of our finances. If we do this systematically the other can go and gather the harvest. PARTNERSHIP Lesson 2 . PARTNERSHIP | 2.32 236 God blesses such a collaboration.","Ecclesiastes 4:9 ‘Two are better than one, because they have a good reward for their labor.’ And that is how it should be, because the Word teaches: John 4:37 ‘One sows and another reaps.’ In the Bible we can read about the Macedonians who were the only partakers in the ministry of Paul. Philippians 4:15 ‘Now you Philippians know also that in the beginning of the gospel, when I departed from Macedonia, no church shared with me concerning giving and receiving but you only.’ Nobody wanted to share the bill. Paul writes the letter to the Philippians, therefore to his partners. In Philippians 1:3-5 Paul writes: ‘I thank my God upon every remembrance of you, always in every prayer of mine making request for you all with joy, for your fellowship in the gospel from the first day until now.’ Paul is thanking the Lord for their fellowship in the Gospel that he preaches.","This word fellowship is the word ‘Koinia’ in Greek, which means partnership. They were partners with him in the message that he preached by connecting their finances to his ministry. In that context Paul then also writes the following verse. Philippians 4:19 ‘And my God shall supply all your need according to His riches in glory by Christ Jesus.’ They were partners with him and gave their finances so that he could do the work and that brought them great blessing. Paul says: ‘Not that I seek the gift, but I seek the fruit that abounds to your account.’ Philippians 4:17 You are investing in my ministry and maintenance and that is why God will bless you abundantly. 237 The Word teaches us that those who give freely and with a cheerful heart will be abnormally blessed by the Lord.","Corinthians 9:8 ‘And God is able to make all grace abound toward you, that you, always having all suffi- ciency in all things, may have an abundance for every good work.’ God can make all grace abundant in us, but He only does that when we walk in His principles. Like sowing and giving cheerfully. 2 Corinthians 9:7 ‘So let each one give as he purposes in his heart, not grudgingly or of necessity; for God loves a cheerful giver.’ In everything that you do God is concerned with your heart condition. If you give with reluctance in your heart, God will also be reluctant to give to you. He is not so much interested in how much you can give, He is interested in ‘how’ you give. Luke 21:1-4 ‘And He looked up and saw the rich putting their gifts into the treasury, and He saw also a certain poor widow putting in two mites.","So He said, “Truly I say to you that this poor widow has put in more than all; for all these out of their abundance have put in offer - ings for God, but she out of her poverty put in all the livelihood that she had.”’ The rich gave out of their abundance and it didn’t really affect them. It was not a real sacrifice, it was not bitter and it did not hurt them. It was fine that they gave to the Lord, but what really touches Him is those who give in faith. Faith is believing that God can supply all your needs if you dare to trust Him with all that you have. He is your Source. Paul also encourages us to prepare our offerings beforehand. 2 Corinthians 9:5 So that this is ready as a blessing and not as a gift given in stinginess. Because in everything it is about your heart and if it is good, then God can command the blessing over it.","Paul writes in 1 Corinthians 16:2: ‘On the first day of the week let each one of you lay something aside, storing up as he may prosper.’ In this we see the principle of systematic giving. Paul was talking about the collection of offerings. PARTNERSHIP | 2.32 238 When we give regularly, e.g. monthly by becoming a partner with a ministry for a fixed amount, that will eventually have more impact in your life than when you sporadically make a donation. Even though that is also a beautiful principle. Because giving is thanksgiving to the Lord. But there really is supernatural power in partnership. It is sowing. And a special blessing rests on it. 2 Corinthians 9:6 ‘He who sows sparingly will also reap sparingly, and he who sows bountifully will also reap bountifully.’ This principle is true in the natural and it is true in the spiritual. Without sowing there will be no harvest.","The more you sow the more you can harvest. The more you sow into the Kingdom, the more seed God will entrust you with. 2 Corinthians 9:10 ‘Now may He who supplies seed to the sower, and bread for food, supply and multiply the seed you have sown and increase the fruits of your righteousness.’ He gives the sower more seed. He gives the sower provision. And the fruits of that righteousness that the sower sows, will increase. He will be able to do more and more and bear more and more fruit. Giving to the Kingdom of God and giving to the poor, which is indirectly giving to God, are works of righteousness. 2 Corinthians 9:9, Matthew 25:40, Hebrews 6:10 God promises a supernatural blessing to those who give freely, who sow, and who are abundant in good works.","Corinthians 9:11 ‘While you are enriched in everything for all liberality, which causes thanksgiving through us to God.’ There is so much joy in giving to God and His work. Acts 20:35 It sets so much in motion. 239 We give Him thanks, we honor Him, we help others, we reach the world with the Gospel, we take part in eternal fruit and sustainable property and will harvest to sow even more! Matthew 6:20, Proverbs 8:18, 2 Corinthians 9:10 I think we all agree that there is a need to win souls for King Jesus. The Gospel should be preached massively to all creation so that Jesus can come and get us. Matthew 24:14 ‘And this gospel of the kingdom will be preached in all the world as a witness to all the nations, and then the end will come.’ To be able to preach the Gospel there are not only people necessary who go and preach, but also people who support them with their finances.","It is a vital collaboration to reach the unbelievers and to disciple the believer. In this way, the world can be reached with the truth of the Gospel and that is what it is all about. John 4:35-36 ‘I say to you, lift up your eyes and look at the fields, for they are already white for harvest! And he who reaps receives wages, and gathers fruit for eternal life, that both he who sows and he who reaps may rejoice together.’ Both the sower and the reaper receive blessing and gather up treasures in heaven. They both take part in the fruit. In heaven there will be crowds of people who will wait for those who gave and those who went to shake their hand for their obedience. We can make the difference. We can make an unmatched impact if we join hands. If we send those who are called by connecting our finances to their calling. Partnership is a Kingdom principle and you can also take part in it."],"scriptureReferences":[],"reflectionPrompt":"What is one thing you need to understand or practice from Partnership?","quickCheck":{"question":"What is the best response to this lesson on Partnership?","answers":[{"id":"rush","label":"Rush to the next lesson without reflection"},{"id":"respond","label":"Reflect, pray, and take one faithful step"},{"id":"ignore","label":"Ignore it unless it feels easy"}],"correctAnswer":"respond","feedback":"Yes. The goal is not only to finish content, but to respond faithfully."},"notesPrompt":"Write one thought, question, or next step from Partnership.","completionMessage":"Good. You finished one One Basics step."},"placement":{"showInDiscover":true,"discoverShelf":"One Basics 2","discoverCardLabel":"Going deeper","showInJourney":true,"moduleId":"stage_5_lead_and_multiply","moduleTitle":"Lead and Multiply","lessonOrder":132,"sourcePage":235,"isCoreLesson":true},"recommendedNextStep":{"label":"Write one response and continue the path","type":"reflect","targetId":"book_one_basics_2_32_partnership_reflection"},"sharing":{"shareText":"This One Basics lesson helped me think about partnership.","shareImagePrompt":"Lead and Multiply One In Him share card for Partnership"},"admin":{"packageStatus":"prepared","sourcePreApproved":true,"owner":"One In Him content team","lastUpdated":"2026-05-19","extractionStatus":"real_pdf_text_extracted","sourceRange":"One Basics 2.32"}},{"packageId":"pkg_why_jesus_came_near_discover","packageTitle":"Why Jesus Came Near","packageType":"discovery_feature","packageGoal":"Give someone curious or unsure a short, warm first taste of the gospel.","sourceItems":["vid_jesus_001"],"primaryItemId":"vid_jesus_001","primaryMedium":"watch","speakerOrAuthor":{"id":"speaker_example","name":"Example Speaker","role":"speaker"},"language":"en","contentType":"short_clip","length":{"seconds":92,"readingMinutes":1,"display":"90 sec"},"fallbackPlan":{"cannotWatch":"read_why_jesus_came_near_001","cannotListen":"vid_jesus_001","cannotRead":"vid_jesus_001"},"journeyStage":{"stage":1,"name":"Explore Jesus","slug":"explore","colour":"#ee7326"},"questionsAnswered":["Who is Jesus?","Does God care about me?","Where do I start with faith?"],"topics":["Jesus","Gospel","Starting point","Explore"],"learnerSession":{"openingPrompt":"Start with one clear thought: God came near.","contentSummary":"Jesus shows us that God does not stay distant. He comes close, speaks our language, and meets people in ordinary life.","readBody":["Jesus shows us that God does not stay distant. He comes close, speaks our language, and meets people in ordinary life.","For someone starting again, the first step is not to pretend everything is fine. It is to turn toward the One who already came near."],"scriptureReferences":["John 1:14","John 3:16-17"],"reflectionPrompt":"What is one honest question you have about Jesus right now?","quickCheck":{"question":"What is the main idea of this short teaching?","answers":[{"id":"god_far_away","label":"God stays far away until we improve"},{"id":"god_came_near","label":"God came near to us in Jesus"},{"id":"faith_is_pressure","label":"Faith starts with pressure"}],"correctAnswer":"god_came_near","feedback":"Yes. The first invitation is to see that God has come near in Jesus."},"notesPrompt":"Write one thing about Jesus that you want to understand more.","completionMessage":"You took a clear first step."},"placement":{"showInDiscover":true,"discoverShelf":"Featured teachings","discoverCardLabel":"Start here","showInJourney":false,"moduleId":"stage_1_explore_jesus","moduleTitle":"Explore Jesus","lessonOrder":1,"isCoreLesson":false},"recommendedNextStep":{"label":"Start the Explore Jesus journey","type":"join_journey","targetId":"stage_1_explore_jesus"},"sharing":{"shareText":"This is a short, clear place to start if you are curious about Jesus.","shareImagePrompt":"Stage 1 orange One In Him share card for Why Jesus Came Near"},"admin":{"packageStatus":"ready","sourcePreApproved":true,"owner":"One In Him content team","lastUpdated":"2026-05-19"}},{"packageId":"pkg_hard_questions_when_life_feels_heavy","packageTitle":"Hard Questions: When Life Feels Heavy","packageType":"journey_lesson","packageGoal":"Give a growing disciple space to bring anxiety, suffering, and unanswered questions to God honestly.","sourceItems":["read_hard_questions_life_heavy"],"primaryItemId":"read_hard_questions_life_heavy","primaryMedium":"read","speakerOrAuthor":{"id":"oneinhim_team","name":"One In Him","role":"team"},"language":"en","contentType":"question_answer","length":{"seconds":0,"readingMinutes":14,"display":"14 min read"},"fallbackPlan":{"cannotWatch":"read_hard_questions_life_heavy","cannotListen":"read_hard_questions_life_heavy","cannotRead":"audio_hard_questions_life_heavy_future"},"journeyStage":{"stage":3,"name":"Grow Deep Roots","slug":"formation","colour":"#446523"},"questionsAnswered":["What do I do with anxiety?","Can I ask God hard questions?","How do I keep faith when life feels heavy?"],"topics":["Hard questions","Anxiety","Suffering","Formation","Prayer"],"learnerSession":{"openingPrompt":"Deep roots grow when we bring honest questions to God, not when we hide them.","contentSummary":"Faith does not require pretending that pain is small. Scripture gives language for lament, trust, questions, and hope.","readBody":["Faith does not require pretending that pain is small. Scripture gives language for lament, trust, questions, and hope.","A growing disciple can learn to bring hard questions to God, ask for help, and stay connected to trusted people instead of carrying everything alone.","This session should be gentle and practical, with space for prayer, reflection, and a wise next step."],"scriptureReferences":["Psalm 13","Philippians 4:6-7","1 Peter 5:7"],"reflectionPrompt":"What is one hard question or heavy thing you can bring honestly to God today?","quickCheck":{"question":"What is a faithful response when life feels heavy?","answers":[{"id":"hide_questions","label":"Hide the hard questions"},{"id":"bring_to_god","label":"Bring the questions to God and seek wise support"},{"id":"pretend_fine","label":"Pretend everything is fine"}],"correctAnswer":"bring_to_god","feedback":"Yes. Deep faith has room for honest prayer, wise support, and patient trust."},"notesPrompt":"Write one honest prayer and one person you could talk to if you need support.","completionMessage":"You made room for honesty with God. That matters."},"placement":{"showInDiscover":true,"discoverShelf":"Hard questions","discoverCardLabel":"Deep roots","showInJourney":true,"moduleId":"stage_3_grow_deep_roots","moduleTitle":"Grow Deep Roots","lessonOrder":4,"isCoreLesson":false},"recommendedNextStep":{"label":"Write one honest prayer","type":"reflect","targetId":"reflection_hard_questions_life_heavy"},"sharing":{"shareText":"This might help if you are carrying hard questions or life feels heavy.","shareImagePrompt":"Stage 3 olive One In Him share card for hard questions"},"admin":{"packageStatus":"prepared","sourcePreApproved":true,"owner":"One In Him content team","lastUpdated":"2026-05-19"}}];

let sharedContentPackages = [];
const WORKSHOP_PUBLISHED_PACKAGES_KEY = "oneinhim.workshop.publishedPackages.v1";
const TEAM_SYNC_CONFIG_KEY = "oneinhim.teamSyncConfig.v1";
const ADMIN_TABLE_NAME = "oih_admin_users";
const TEAM_SYNC_DEFAULT_CONFIG = {
  enabled: false,
  provider: "supabase",
  supabaseUrl: "",
  supabaseAnonKey: "",
  tableName: "oih_content_packages",
  ...(window.ONEINHIM_TEAM_SYNC || window.OIH_TEAM_SYNC_CONFIG || {})
};

const journeyLessons = [
  { id: "journey_1", title: "Who is Jesus?", detail: "A short answer and simple prayer.", resourceId: "vid_jesus_001", status: "current" },
  { id: "journey_2", title: "One Basics: Eternal Life", detail: "Begin Section 2 with a prepared study guide lesson.", resourceId: "book_one_basics_1_1_eternal_life", status: "open" },
  { id: "journey_3", title: "Learning to pray", detail: "Begin honestly with God.", resourceId: "book_prayer_002", status: "open" },
  { id: "journey_4", title: "Peace in real life", detail: "Bring anxiety and pressure to God.", resourceId: "aud_peace_003", status: "locked" }
];

const pathOptions = [
  {
    choice: "exploreJesus",
    icon: "1",
    color: "stage-explore",
    stageColor: "#ee7326",
    titleKey: "stage.explore.title",
    copyKey: "stage.explore.copy",
    metaKey: "stage.explore.meta",
    topicsKey: "stage.explore.topics",
    rangeKey: "stage.explore.range",
    progress: 0
  },
  {
    choice: "startFollowing",
    icon: "2",
    color: "stage-start",
    stageColor: "#f6ca35",
    titleKey: "stage.start.title",
    copyKey: "stage.start.copy",
    metaKey: "stage.start.meta",
    topicsKey: "stage.start.topics",
    rangeKey: "stage.start.range",
    progress: 0
  },
  {
    choice: "growRoots",
    icon: "3",
    color: "stage-grow",
    stageColor: "#446523",
    titleKey: "stage.grow.title",
    copyKey: "stage.grow.copy",
    metaKey: "stage.grow.meta",
    topicsKey: "stage.grow.topics",
    rangeKey: "stage.grow.range",
    progress: 0
  },
  {
    choice: "liveMission",
    icon: "4",
    color: "stage-mission",
    stageColor: "#7f1810",
    titleKey: "stage.mission.title",
    copyKey: "stage.mission.copy",
    metaKey: "stage.mission.meta",
    topicsKey: "stage.mission.topics",
    rangeKey: "stage.mission.range",
    progress: 0
  },
  {
    choice: "leadMultiply",
    icon: "5",
    color: "stage-lead",
    stageColor: "#090a0a",
    titleKey: "stage.lead.title",
    copyKey: "stage.lead.copy",
    metaKey: "stage.lead.meta",
    topicsKey: "stage.lead.topics",
    rangeKey: "stage.lead.range",
    progress: 0
  }
];

const state = {
  schema: embeddedSchema,
  activeView: "gatewayView",
  bootComplete: false,
  userNavigatedDuringBoot: false,
  activeResourceId: "vid_jesus_001",
  activeStageId: "exploreJesus",
  activeModuleIndex: 0,
  gatewayHeroIndex: 0,
  gatewayContentMode: "discover",
  activeShelfIndex: 0,
  activeBrowseShelfKey: "",
  searchQuery: "",
  searchFilter: "all",
  onboardingStep: 0,
  onboardingStartMode: "find",
  onboardingStage: "exploreJesus",
  moduleMode: "watch",
  quizChoice: "",
  quizChecked: false,
  quizKey: "",
  sectionReview: null,
  sectionPicker: null,
  practicalUse: false,
  selectedSectionIndex: 0,
  selectedPathNode: "",
  journeyBannerGroups: {},
  pathPreviewStageId: "exploreJesus",
  guidedPathNode: "",
  nodeMediumPreference: {},
  libraryFilter: "all",
  activeSpeakerId: "speaker_001",
  language: "en",
  lastQuestion: "I feel far from God and do not know where to start",
  feedPosts: [],
  feedLikes: {},
  completed: new Set(),
  completedPieces: new Set(),
  completedPracticals: new Set(),
  completedReviews: new Set(),
  saved: new Set(),
  seeds: 0,
  sharedForSeeds: new Set(),
  seedUnlocked: new Set(),
  partnerAccess: false
};

const GATEWAY_HERO_AUTOPLAY_MS = 5200;
const GATEWAY_HERO_SWIPE_MIN_PX = 8;
const GATEWAY_HERO_SWIPE_AXIS_RATIO = 0.38;
const GATEWAY_HERO_TAP_MAX_PX = 8;
const FEED_POSTS_STORAGE_KEY = "oneinhim.feed.posts.v2";
const FEED_LIKES_STORAGE_KEY = "oneinhim.feed.likes.v2";
const ONBOARDING_PATH_STORAGE_KEY = "oneinhim.onboarding.path.v1";
const LIBRARY_SEEDS_STORAGE_KEY = "oneinhim.library.seeds.v1";
const LIBRARY_SEED_SHARES_STORAGE_KEY = "oneinhim.library.seedShares.v1";
const LIBRARY_SEED_UNLOCKS_STORAGE_KEY = "oneinhim.library.seedUnlocks.v1";
const LIBRARY_PARTNER_ACCESS_STORAGE_KEY = "oneinhim.library.partnerAccess.v1";
const SEEDS_PER_SHARE = 5;
const DEFAULT_SEED_UNLOCK_COST = 10;
let gatewayHeroAutoplayTimer = null;
let discoveryAudioSleepTimer = null;
let journeyContentVersion = 0;
const journeyCurriculum = new Map();
let stickyStageBannerFrame = 0;
let duoPathCurveFrame = 0;
let gatewayNavScrollFrame = 0;
let journeyBannerMarkers = [];
let journeyBannerLayoutKey = "";
let journeyBannerActiveKey = "";
const journeyStructureCache = {
  rawModules: new Map(),
  rawGroups: new Map(),
  packageModules: new Map(),
  sections: new Map()
};
const mobileDocumentTouchScroll = {
  active: false,
  manual: false,
  startX: 0,
  startY: 0,
  startScrollY: 0,
  lastY: 0
};
let supabaseAuthClient = null;
let supabaseAuthClientKey = "";
let adminAuthState = {
  loaded: false,
  session: null,
  profile: null,
  notApproved: false
};
const gatewayHeroSwipe = {
  active: false,
  pointerId: null,
  startX: 0,
  startY: 0,
  lastX: 0,
  lastY: 0,
  moved: false,
  suppressClick: false,
  lastActivationAt: 0,
  lastWheelAt: 0,
  lastTouchAt: 0
};

const viewText = {
  en: {
	    gatewayView: ["Start", "A clear first step for your Christian journey."],
	    accountView: ["Account", "Admin access and content workshop."],
	    feedView: ["Feed", "Thoughts from people walking the journey."],
	    onboardingView: ["Get started", "A few quick choices to find the right first step."],
    pathSelectView: ["Get started", "Choose the place in your discipleship journey that fits today."],
    discoveryDetailView: ["Discover", "Watch or read without leaving discovery."],
    stageDetailView: ["Journey", "Sections, units, and lessons in one path."],
    moduleDetailView: ["Lesson", "Watch, read, reflect, and keep moving."],
    moduleQuizView: ["Quick check", "A simple response to what you just learned."],
    homeView: ["Discover", "High-value starts you can taste straight away."],
    journeyView: ["Journey", "Milestones, short lessons, and simple practices."],
    askView: ["Ask", "A real question, a helpful answer, and a next step."],
    libraryView: ["Library", "Partner access to the growing media library."],
    speakersView: ["Speakers", "Follow trusted voices and explore their teachings."],
    shareView: ["Share", "Something useful for someone you care about."]
  },
  nl: {
	    gatewayView: ["Start", "Een duidelijke eerste stap voor je reis met Jezus."],
	    accountView: ["Account", "Admin toegang en content workshop."],
	    feedView: ["Feed", "Gedachten van mensen op de reis."],
	    onboardingView: ["Begin hier", "Een paar snelle keuzes om de juiste eerste stap te vinden."],
    pathSelectView: ["Begin hier", "Kies de plek in je discipelschapsreis die vandaag past."],
    discoveryDetailView: ["Ontdek", "Kijk, luister of lees zonder ontdekking te verlaten."],
    stageDetailView: ["Reis", "Secties, units en lessen in een pad."],
    moduleDetailView: ["Les", "Kijk, lees, denk na en ga verder."],
    moduleQuizView: ["Korte check", "Een eenvoudige reactie op wat je net hebt geleerd."],
    homeView: ["Ontdek", "Waardevolle starts die je meteen kunt proeven."],
    journeyView: ["Reis", "Mijlpalen, korte lessen en eenvoudige oefeningen."],
    askView: ["Vraag", "Een echte vraag, een helpend antwoord en een volgende stap."],
    libraryView: ["Bibliotheek", "Partner toegang tot de groeiende mediabibliotheek."],
    speakersView: ["Sprekers", "Volg vertrouwde stemmen en ontdek hun onderwijs."],
    shareView: ["Delen", "Iets waardevols voor iemand om wie je geeft."]
  }
};

const i18n = {
  en: {
    "brand.discipleship": "Discipleship",
    "side.today": "Today",
    "nav.start": "Start",
    "nav.home": "Discover",
    "nav.journey": "Journey",
    "nav.ask": "Ask",
    "nav.library": "Library",
    "nav.speakers": "Speakers",
    "nav.share": "Share",
    "top.statePill": "No wasted minutes",
	    "homeNav.discover": "Discover",
	    "homeNav.watch": "Watch",
	    "homeNav.listen": "Listen",
	    "homeNav.feed": "Feed",
	    "homeNav.kids": "Kids",
	    "homeNav.library": "Library",
	    "homeNav.account": "Account",
    "library.eyebrow": "Library",
    "library.partnerTitle": "Become a partner for full access",
    "library.partnerCopy": "Partners and supporters help keep One In Him resources free for people starting their journey. Partner access opens the growing library of teachings, audio, and study guides.",
    "library.partnerButton": "Become a partner",
    "library.alreadyPartner": "Already a partner?",
    "library.signIn": "Sign in",
    "library.partnerNote": "One In Him is a charity. This is support, not buying a product; the core journey remains free.",
    "library.partnerToast": "Partner access flow is ready to connect.",
    "gateway.headline": "Want to grow in your\nChristian journey?",
    "gateway.copy": "Find a clear next step through short teachings, prayer, Scripture, trusted voices, and guided milestones.",
    "gateway.start": "Get started",
    "gateway.browse": "Continue journey",
    "gateway.watchEyebrow": "New to the ONEapp",
    "gateway.watchHeadline": "Out of the Shadows",
    "gateway.watchCopy": "A powerful documentary story of hope, healing, and stepping into the light.",
    "gateway.watchButton": "Watch now",
    "gateway.watchJourney": "Open the journey",
    "gateway.basicsEyebrow": "One Basics",
    "gateway.basicsHeadline": "Start with Eternal Life",
    "gateway.basicsCopy": "Watch the full One Basics 1.1 episode and begin the foundation of knowing God personally through Jesus.",
    "gateway.basicsButton": "Watch full episode",
	    "gateway.accountToast": "Account profiles are coming later. For now, your progress is saved on this device.",
	    "gateway.kidsToast": "Kids content is coming next.",
	    "feed.eyebrow": "Community",
	    "feed.title": "Feed",
	    "feed.copy": "Thoughts, questions, and milestones from people walking the journey.",
	    "feed.composerLabel": "Share a thought from your journey",
	    "feed.placeholder": "What stood out from today's step?",
	    "feed.openJourney": "Open journey",
	    "feed.shareButton": "Share thought",
	    "feed.emptyThought": "Write a thought before sharing.",
	    "feed.saved": "Saved on this device. This is not a public post.",
	    "feed.shareReady": "Share ready",
	    "feed.sharedThought": "shared a thought",
	    "feed.completedStep": "completed a step",
	    "feed.askedQuestion": "asked a question",
	    "feed.likedBy": "Liked by",
	    "feed.andOthers": "and others",
	    "account.eyebrow": "Account",
	    "account.title": "Admin workshop",
	    "account.copy": "Sign in as an admin to open the content workshop and prepare videos, text, audio, and journey clips for the app.",
	    "account.email": "Admin email",
	    "account.password": "Password",
	    "account.signIn": "Sign in as admin",
	    "account.signOut": "Sign out",
	    "account.openWorkshop": "Open content workshop",
	    "account.signedIn": "Admin mode is on",
	    "account.prototypeNote": "Uses Supabase Auth. Only approved admin accounts can open the workshop and publish content.",
	    "account.nextSecurity": "Protected by Supabase Auth and database rules. Public learners can read content, but only admins can edit it.",
	    "account.loginNeeded": "Add your admin email and password to continue.",
	    "account.loginSuccess": "Admin mode is on",
	    "account.logoutSuccess": "Signed out of admin mode",
	    "account.loginFailed": "Could not sign in. Check your email and password.",
	    "account.notApproved": "This account is signed in, but it is not approved as a One In Him admin.",
	    "account.authUnavailable": "Admin sign-in needs the Supabase connection.",
    "gateway.optionsTitle": "Find your starting point",
    "gateway.optionsCopy": "Choose what sounds closest, or ask your own question.",
    "gateway.choiceExploreTitle": "I am exploring Jesus",
    "gateway.choiceExploreCopy": "Start with who Jesus is and why he matters.",
    "gateway.choicePrayerTitle": "I want to learn to pray",
    "gateway.choicePrayerCopy": "Begin with honest, simple prayer.",
    "gateway.choiceBibleTitle": "I want to understand the Bible",
    "gateway.choiceBibleCopy": "Open Scripture without feeling lost.",
    "gateway.choiceCareTitle": "I need peace or support",
    "gateway.choiceCareCopy": "Find a gentle next step and a path toward help.",
    "gateway.ask": "Guide me from my question",
    "gateway.questionDefault": "I feel far from God and do not know where to start",
    "gateway.quotesTitle": "What people say",
    "gateway.quoteOne": "\"I did not know where to start. One short step helped me pray honestly for the first time in a long time.\"",
    "gateway.quoteOneName": "New learner",
    "gateway.quoteTwo": "\"The clips felt easy to finish, but they still gave me something real to think about during the day.\"",
    "gateway.quoteTwoName": "Returning user",
    "gateway.quoteThree": "\"I shared one teaching with a friend because it answered the exact thing we had been talking about.\"",
    "gateway.quoteThreeName": "Group leader",
    "onboarding.skip": "Skip",
    "onboarding.continue": "Continue",
    "onboarding.promptStage": "Where are you starting from?",
    "onboarding.promptMethod": "How would you like to begin?",
    "onboarding.promptAchieve": "Here is what you can build here.",
    "onboarding.promptHabit": "Small steps can become a real habit.",
    "onboarding.stageExploreTitle": "I am exploring Jesus",
    "onboarding.stageExploreCopy": "I am curious, unsure, or asking honest questions.",
    "onboarding.stageStartTitle": "I am new or starting again",
    "onboarding.stageStartCopy": "I want clear foundations for following Jesus.",
    "onboarding.stageGrowTitle": "I want to grow deeper",
    "onboarding.stageGrowCopy": "I want habits, healing, character, and community.",
    "onboarding.stageLeadTitle": "I want to lead or disciple others",
    "onboarding.stageLeadCopy": "I am exploring leadership, mission, or ministry.",
    "onboarding.methodScratchTitle": "Start from the beginning",
    "onboarding.methodScratchCopy": "Give me the simplest first step and build from there.",
    "onboarding.methodFindTitle": "Help me find my best start",
    "onboarding.methodFindCopy": "Use my answer to recommend where I should begin.",
    "onboarding.methodAskTitle": "I have a real question",
    "onboarding.methodAskCopy": "Let me ask what is on my mind and guide me from there.",
    "onboarding.benefitOneTitle": "Clear next steps",
    "onboarding.benefitOneCopy": "Short sessions that help you know what to do next without feeling overwhelmed.",
    "onboarding.benefitTwoTitle": "Watch or read",
    "onboarding.benefitTwoCopy": "Choose the format that fits your day and still stay on the same journey.",
    "onboarding.benefitThreeTitle": "Keep notes and thoughts",
    "onboarding.benefitThreeCopy": "Capture what God is showing you and return to it later in your profile.",
    "onboarding.habitOneTitle": "No wasted minutes",
    "onboarding.habitOneCopy": "Every session should give you something useful, practical, and encouraging.",
    "onboarding.habitTwoTitle": "A journey you can return to",
    "onboarding.habitTwoCopy": "Progress, coming-soon sections, and new content give you reasons to come back.",
    "onboarding.habitThreeTitle": "Share what helps",
    "onboarding.habitThreeCopy": "When something speaks to you, pass it to a friend who may need the same encouragement.",
    "popular.bible": "How should I read my Bible?",
    "popular.newChristian": "A new Christian",
    "popular.jesus": "Who is Jesus?",
    "popular.prayer": "Learn to pray",
    "popular.farFromGod": "I feel far from God",
    "popular.speakers": "Popular speakers",
    "paths.eyebrow": "Choose your section",
    "paths.title": "Choose your starting point",
    "paths.copy": "Tap a section to preview it, then begin at the first node.",
    "path.home": "Home",
    "paths.questionTitle": "Not sure where you fit?",
    "paths.questionCopy": "Ask your real question and we will guide you to a good first step.",
    "stage.explore.title": "Explore Jesus",
    "stage.explore.copy": "For people curious, unsure, hurt by church, or asking big life and faith questions.",
    "stage.explore.meta": "Section 1 · Orange",
    "stage.explore.range": "1 to 6",
    "stage.explore.topics": "Who is Jesus|Is God real?|Why faith?|Feeling far from God",
    "stage.explore.sections": "Who is Jesus?|Start with the heart of the gospel, not pressure.|Who Jesus is, why he came, and how to begin honestly.|100|Who is Jesus?,Why Jesus Came Near,Can I Trust Him?~Start Again|A gentle pathway for returning, questioning, or feeling far away.|Find language for doubt, pain, and hope without pretending.|72|I feel far from God,Is church safe?,A simple prayer~Questions That Matter|Big questions about God, suffering, purpose, and the Bible.|Short answers that invite people forward without rushing them.|34|Is God real?,Why suffering?,Can I trust the Bible?",
    "stage.start.title": "Start Following Jesus",
    "stage.start.copy": "For new Christians or people returning to faith who need clear foundations and simple daily steps.",
    "stage.start.meta": "Section 2 · Gold",
    "stage.start.range": "7 to 14",
    "stage.start.topics": "New Christian|Prayer|Bible basics|Baptism|First 30 days",
    "stage.start.sections": "First 30 Days|A simple first rhythm for following Jesus every day.|Prayer, Scripture, identity, and one small practice at a time.|68|One Basics: Eternal Life,New Christian,Learn to Pray,Read John~Bible and Prayer|Learn how to open Scripture and talk honestly with God.|Practical lessons for prayer, Bible reading, and listening well.|38|How to Read the Bible,Prayer When Words Feel Hard,What Should I Read?~Identity and Baptism|Know who you are in Christ and what baptism means.|Foundation teaching for grace, repentance, baptism, and belonging.|12|Identity in Christ,What is Baptism?,Following Jesus Publicly",
    "stage.grow.title": "Grow Deep Roots",
    "stage.grow.copy": "For disciples building habits, character, healing, community, and a deeper life with God.",
    "stage.grow.meta": "Section 3 · Olive",
    "stage.grow.range": "15 to 24",
    "stage.grow.topics": "Spiritual habits|Freedom|Community|Character|Holy Spirit",
    "stage.grow.sections": "Spiritual Habits|Build practices that keep you close to Jesus.|Scripture, prayer, worship, sabbath, generosity, and obedience.|28|Rule of Life,Hearing God,Daily Scripture~Freedom and Healing|Bring real life, pain, anxiety, and patterns to Jesus.|Gentle formation for peace, confession, forgiveness, and wholeness.|16|Peace When Life Feels Heavy,Forgiveness,Freedom in Christ~Hard Questions|Make space for honest questions without losing your roots.|Thoughtful answers for suffering, doubt, unanswered prayer, sexuality, science, and trusting Scripture.|0|Why suffering?,Unanswered prayer,Can I trust the Bible?~Community and Character|Grow with people and become more like Jesus.|Love, patience, integrity, relationships, and church community.|0|Finding Community,Fruit of the Spirit,Healthy Relationships",
    "stage.mission.title": "Live on Mission",
    "stage.mission.copy": "For disciples ready to serve, share faith, disciple friends, and join God’s work in everyday life.",
    "stage.mission.meta": "Section 4 · Clay",
    "stage.mission.range": "25 to 34",
    "stage.mission.topics": "Serve|Share faith|Disciple a friend|Small group|Justice",
    "stage.mission.sections": "Serve Like Jesus|Discover gifts and serve people with humility and joy.|Simple practices for compassion, generosity, justice, and local mission.|12|Find Your Gifts,Serve Your City,Justice and Mercy~Share Your Faith|Talk about Jesus naturally, clearly, and lovingly.|Stories, questions, testimony, and gospel conversations for real life.|0|Share Your Story,Gospel in 3 Minutes,Answer Hard Questions~Disciple a Friend|Help someone else take their next step with Jesus.|A practical guide to mentoring, prayer, Scripture, and encouragement.|0|Invite a Friend,Read Together,Simple Discipleship",
    "stage.lead.title": "Lead and Multiply",
    "stage.lead.copy": "For people exploring leadership, evangelism, pastoral calling, ministry formation, and multiplying disciples.",
    "stage.lead.meta": "Section 5 · Deep Green",
    "stage.lead.range": "35 to 50",
    "stage.lead.topics": "Leadership|Evangelist|Pastor|Mentoring|Church planting",
    "stage.lead.sections": "Christian Leadership|Build character, wisdom, and practical ministry skill.|Lead from prayer, Scripture, humility, and healthy responsibility.|0|Christian Leadership,Lead a Small Group,Healthy Teams~Become an Evangelist|Learn to reach people clearly, lovingly, and boldly.|Training for gospel clarity, cultural wisdom, and courageous witness.|0|Evangelist Foundations,Public Gospel,Follow-up Well~Pastoral Calling|Explore care, teaching, shepherding, and ministry formation.|A pathway for people discerning pastoral leadership and long-term ministry.|0|Become a Pastor,Pastoral Care,Teaching Scripture",
    "path.explore.title": "Exploring Jesus",
    "path.explore.copy": "For anyone curious, unsure, or starting again.",
    "path.explore.meta": "First steps",
    "path.newChristian.title": "A new Christian",
    "path.newChristian.copy": "Start following Jesus with clear daily foundations.",
    "path.newChristian.meta": "Starter path",
    "path.prayer.title": "Learn to pray",
    "path.prayer.copy": "Simple practices for honest conversation with God.",
    "path.prayer.meta": "Practice",
    "path.bible.title": "Read the Bible",
    "path.bible.copy": "Open Scripture without feeling confused or alone.",
    "path.bible.meta": "Foundations",
    "path.care.title": "Peace and support",
    "path.care.copy": "Gentle help for anxiety, pressure, and heavy seasons.",
    "path.care.meta": "Care",
    "path.community.title": "Find community",
    "path.community.copy": "Learn how to walk with other Christians.",
    "path.community.meta": "Belonging",
    "path.shareFaith.title": "Share my faith",
    "path.shareFaith.copy": "Grow in confidence to talk about Jesus naturally.",
    "path.shareFaith.meta": "Mission",
    "path.smallGroup.title": "Lead a small group",
    "path.smallGroup.copy": "Guide conversations, prayer, and Scripture with others.",
    "path.smallGroup.meta": "Leadership",
    "path.evangelist.title": "Become an evangelist",
    "path.evangelist.copy": "Learn to reach people clearly, lovingly, and boldly.",
    "path.evangelist.meta": "Calling",
    "path.leadership.title": "Christian leadership",
    "path.leadership.copy": "Build character, wisdom, and practical ministry skills.",
    "path.leadership.meta": "Growth",
    "path.pastor.title": "Become a pastor",
    "path.pastor.copy": "Explore pastoral calling, care, teaching, and formation.",
    "path.pastor.meta": "Training",
    "path.multiply.title": "Disciple others",
    "path.multiply.copy": "Learn how to help someone else grow in Jesus.",
    "path.multiply.meta": "Multiply",
    "discover.eyebrow": "Discover",
    "discover.title": "Taste the quality",
    "discover.copy": "Short, useful resources you can finish straight away before choosing a full journey.",
    "discover.more": "Continue my discipleship journey",
    "discover.featuredType": "Featured start",
    "discover.featuredTitle": "Why Jesus Came Near",
    "discover.featuredCopy": "A clear first taste of the heart of the gospel in under two minutes.",
    "discover.video": "Video",
    "discover.explore": "Explore",
    "discover.lesson": "Lesson",
    "discover.bibleTitle": "Read the Bible without feeling lost",
    "discover.bibleCopy": "One simple practice to start today.",
    "discover.foundations": "Foundations",
    "discover.read": "Read",
    "discover.prayerTitle": "A simple prayer for when words feel hard",
    "discover.prayerCopy": "A calm starting point for honest prayer.",
    "discover.practice": "Practice",
    "discover.audio": "Audio",
    "discover.peaceTitle": "Peace when life feels heavy",
    "discover.peaceCopy": "A short encouragement for pressure and anxiety.",
    "discover.care": "Care",
    "homeDiscover.eyebrow": "Discover",
    "homeDiscover.todayTitle": "Start This Week",
    "homeDiscover.todayCopy": "A quick shelf of real videos, study-guide lessons, and guided next steps.",
    "homeDiscover.quickStartsEyebrow": "Questions",
    "homeDiscover.quickStartsTitle": "Helpful starting points",
    "homeDiscover.journeyButton": "Start the guided journey",
    "homeDiscover.stageOne": "Section 1 · Explore Jesus",
    "homeDiscover.stageOneShort": "Discover",
    "homeDiscover.stageTwoShort": "Grow",
    "homeDiscover.stageThreeShort": "Grow deeper",
    "homeDiscover.stageFourShort": "Go",
    "homeDiscover.stageFiveShort": "Lead",
    "homeDiscover.eventsEyebrow": "Events",
    "homeDiscover.eventsTitle": "Events",
    "homeDiscover.eventsCopy": "Fresh teachings and moments from this weekend's ONEEVENT gathering.",
    "homeDiscover.eventLabel": "Event teaching",
    "homeDiscover.psDuaneFridayTitle": "Ps Duane: Friday Session",
    "homeDiscover.psDuaneFridayCopy": "Watch Ps Duane’s Friday session from ONEEVENT Days.",
    "homeDiscover.featureTitle": "Why Jesus Came Near",
    "homeDiscover.featureCopy": "A clear, short invitation for anyone curious, unsure, or starting again.",
    "homeDiscover.miniBasicsTitle": "One Basics: Eternal Life",
    "homeDiscover.miniBasicsCopy": "Section 2 foundation · 12 min read",
    "homeDiscover.miniBibleTitle": "How to read the Bible",
    "homeDiscover.miniBibleCopy": "Section 2 foundation · 7 min",
    "homeDiscover.miniPeaceTitle": "Peace when life feels heavy",
    "homeDiscover.miniPeaceCopy": "Section 3 formation · 4 min read",
    "homeDiscover.miniLeadTitle": "Christian leadership",
    "homeDiscover.miniLeadCopy": "Section 5 training path",
    "homeDiscover.watchEyebrow": "Watch",
    "homeDiscover.watchTitle": "Featured teachings",
    "homeDiscover.watchCopy": "Short, clear videos that give people a taste of the quality before they commit to a path.",
    "homeDiscover.documentariesEyebrow": "Documentaries",
    "homeDiscover.documentariesTitle": "Documentaries",
    "homeDiscover.documentariesCopy": "Long-form stories that help people see what Jesus can do in real lives.",
    "homeDiscover.documentaryLabel": "Documentary",
    "homeDiscover.brendaDocTitle": "Out of the Shadows",
    "homeDiscover.brendaDocCopy": "Brenda’s story of hope, healing, and stepping into the light.",
    "homeDiscover.watchNow": "Watch now",
    "homeDiscover.seriesEyebrow": "Series",
    "homeDiscover.seriesTitle": "Full courses and series",
    "homeDiscover.seriesCopy": "Longer teachings for people ready to sit with a whole theme, still colour-coded to the journey.",
    "homeDiscover.openSeries": "Open series",
    "homeDiscover.oneBasicsSeriesTitle": "One Basics 1: Foundations",
    "homeDiscover.oneBasicsSeriesCopy": "Full video lessons for the first foundations of following Jesus.",
    "homeDiscover.oneBasics11VideoTitle": "1.1 Eternal Life",
    "homeDiscover.oneBasics11VideoCopy": "The full teaching connected to the first One Basics lesson.",
    "homeDiscover.oneBasics2SeriesTitle": "One Basics 2: Going Deeper",
    "homeDiscover.oneBasics2SeriesCopy": "Deeper formation, calling, and discipleship themes for later sections.",
    "homeDiscover.fullVideo": "Full video",
    "homeDiscover.series": "Series",
    "homeDiscover.comingSoon": "Coming soon",
    "homeDiscover.nextEpisodes": "Next episodes",
    "homeDiscover.course": "Course",
    "homeDiscover.training": "Training",
    "homeDiscover.guide": "Guide",
    "homeDiscover.path": "Path",
    "homeDiscover.oneBasicsTitle": "One Basics: Eternal Life",
    "homeDiscover.oneBasicsCopy": "A prepared first lesson from the One Basics study guide.",
    "homeDiscover.podcastTitle": "From Darkness to Sonship",
    "homeDiscover.podcastCopy": "One Gospel podcast with Johan Toet on moving from darkness into sonship in Christ.",
    "homeDiscover.classicsEyebrow": "Audio",
    "homeDiscover.classicsTitle": "Classics",
    "homeDiscover.classicsCopy": "Classic audiobooks prepared for future listening.",
    "homeDiscover.audiobookPlaceholder": "Audiobook placeholder",
    "homeDiscover.shareTitle": "Share your faith naturally",
    "homeDiscover.shareCopy": "A practical pathway for honest conversations about Jesus.",
    "homeDiscover.pastorTitle": "Explore pastoral calling",
    "homeDiscover.pastorCopy": "Care, teaching, character, and ministry formation for emerging leaders.",
    "homeDiscover.mission": "Mission",
    "homeDiscover.leadership": "Leadership",
    "homeDiscover.listenReadEyebrow": "Read and reflect",
    "homeDiscover.listenReadTitle": "Easy to finish, still meaningful",
    "homeDiscover.listenReadCopy": "A mix of book excerpts, devotionals, and practices for people who want something useful right now.",
    "homeDiscover.communityTitle": "Find Christian community",
    "homeDiscover.communityCopy": "A practical guide for walking with other believers.",
    "homeDiscover.community": "Community",
    "homeDiscover.multiplyTitle": "Disciple someone else",
    "homeDiscover.multiplyCopy": "Learn how to help another person grow in Jesus without overcomplicating it.",
    "homeDiscover.multiply": "Multiply",
    "homeDiscover.voiceEyebrow": "Trusted voices",
    "homeDiscover.voiceTitle": "Browse by person",
    "homeDiscover.voiceCopy": "For people who already know a speaker or author they trust, discovery can start with a voice and still stay connected to the journey sections.",
    "homeDiscover.voiceOne": "Jesus, faith questions",
    "homeDiscover.voiceTwo": "Bible, foundations",
    "homeDiscover.voiceThree": "Peace, formation",
    "homeDiscover.moreVoices": "More voices",
    "homeDiscover.moreVoicesCopy": "Speakers, authors, leaders",
    "module.comingSoon": "Coming soon",
    "module.comingSoonCopy": "This lesson is on the way. Soon it will include teaching, notes, Scripture, reflection, and a practical next step.",
    "module.comingSoonLesson": "Coming soon",
    "module.contentPlanned": "Content is being prepared",
    "module.modeWatch": "Watch",
    "module.modeListen": "Listen",
    "module.modeRead": "Read",
    "module.watchLabel": "Watch session",
    "module.listenLabel": "Listen session",
    "module.readLabel": "Read session",
    "module.watchTitle": "Watch",
    "module.listenTitle": "Listen",
    "module.readTitle": "Read",
    "module.sessionPoints": "1 step today",
    "module.notesLabel": "Notes and thoughts",
    "module.notesPlaceholder": "Write what stood out, questions you have, or what you want to do next.",
    "module.saveNotes": "Save on this device",
    "module.notesReady": "Saved on this device for now.",
    "module.notesSaved": "Saved on this device",
    "module.watchBody": "Watch the main teaching, then write down what stood out before you move on.",
    "module.listenBody": "Listen to the audio version for this session. This is useful while walking, driving, or when you want a quieter pace.",
    "module.readBody": "Read the guide at your own pace. Use this session when you want Scripture, notes, and reflection without video.",
    "toast.choose": "Choose your starting point",
    "toast.questionMatched": "Question matched to a next step",
    "toast.questionNeeded": "Write your question first",
    "toast.language": "Language updated",
    "toast.choiceExplore": "Starting with Jesus",
    "toast.choicePrayer": "Prayer path ready",
    "toast.choiceBible": "Bible lesson ready",
    "toast.choiceCare": "A gentle next step is ready",
    "toast.choiceCommunity": "Community path ready",
    "toast.choiceMission": "Mission path ready",
    "toast.choiceLeadership": "Leadership path ready",
    "toast.choicePastor": "Pastoral path ready",
    "toast.choiceMultiply": "Discipleship path ready",
    "toast.quickStart": "Opening that starting point",
    "choice.explore.question": "Who is Jesus and where do I start?",
    "choice.prayer.question": "How do I pray when words feel hard?",
    "choice.bible.question": "How do I read the Bible without feeling lost?",
    "choice.care.question": "I need peace and someone to talk to",
    "choice.community.question": "How do I find Christian community?",
    "choice.shareFaith.question": "How can I share my faith naturally?",
    "choice.smallGroup.question": "How do I lead a small group well?",
    "choice.evangelist.question": "How do I become an evangelist?",
    "choice.leadership.question": "How do I grow as a Christian leader?",
    "choice.pastor.question": "How do I explore becoming a pastor?",
    "choice.multiply.question": "How do I disciple someone else?",
    "quick.bible.question": "How should I read my Bible?",
    "quick.newChristian.question": "I am a new Christian. Where do I start?",
    "quick.jesus.question": "Who is Jesus?",
    "quick.prayer.question": "How do I learn to pray?",
    "quick.farFromGod.question": "I feel far from God and do not know where to start"
  },
  nl: {
    "brand.discipleship": "Discipelschap",
    "side.today": "Vandaag",
    "nav.start": "Start",
    "nav.home": "Ontdek",
    "nav.journey": "Reis",
    "nav.ask": "Vraag",
    "nav.library": "Bibliotheek",
    "nav.speakers": "Sprekers",
    "nav.share": "Delen",
    "top.statePill": "Geen minuut verspild",
	    "homeNav.discover": "Ontdek",
	    "homeNav.watch": "Kijken",
	    "homeNav.listen": "Luisteren",
	    "homeNav.feed": "Feed",
	    "homeNav.kids": "Kids",
	    "homeNav.library": "Bibliotheek",
	    "homeNav.account": "Account",
    "library.eyebrow": "Bibliotheek",
    "library.partnerTitle": "Word partner voor volledige toegang",
    "library.partnerCopy": "Partners en supporters helpen One In Him bronnen gratis beschikbaar te houden voor mensen die hun reis beginnen. Partnertoegang opent de groeiende bibliotheek met teachings, audio en studiegidsen.",
    "library.partnerButton": "Word partner",
    "library.alreadyPartner": "Al partner?",
    "library.signIn": "Log in",
    "library.partnerNote": "One In Him is een goed doel. Dit is support, geen productverkoop; de kernreis blijft gratis.",
    "library.partnerToast": "Partnerflow is klaar om te koppelen.",
    "gateway.headline": "Wil je groeien in je christelijke reis?",
    "gateway.copy": "Vind een duidelijke volgende stap met korte teachings, gebed, de Bijbel, vertrouwde stemmen en begeleide mijlpalen.",
    "gateway.start": "Begin hier",
    "gateway.browse": "Ga verder",
    "gateway.watchEyebrow": "Nieuw in de ONEapp",
    "gateway.watchHeadline": "Out of the Shadows",
    "gateway.watchCopy": "Een krachtige documentaire over hoop, herstel en leven in het licht.",
    "gateway.watchButton": "Bekijk nu",
    "gateway.watchJourney": "Open de reis",
    "gateway.basicsEyebrow": "One Basics",
    "gateway.basicsHeadline": "Begin met eeuwig leven",
    "gateway.basicsCopy": "Bekijk de volledige One Basics 1.1-aflevering en begin bij de basis: God persoonlijk kennen door Jezus.",
    "gateway.basicsButton": "Bekijk volledige aflevering",
	    "gateway.accountToast": "Accountprofielen komen later. Voor nu wordt je voortgang op dit apparaat bewaard.",
	    "gateway.kidsToast": "Kids-content komt later.",
	    "feed.eyebrow": "Community",
	    "feed.title": "Feed",
	    "feed.copy": "Gedachten, vragen en mijlpalen van mensen die de reis volgen.",
	    "feed.composerLabel": "Deel een gedachte uit je reis",
	    "feed.placeholder": "Wat viel je op in de stap van vandaag?",
	    "feed.openJourney": "Open reis",
	    "feed.shareButton": "Deel gedachte",
	    "feed.emptyThought": "Schrijf eerst een gedachte.",
	    "feed.saved": "Opgeslagen op dit apparaat. Dit is geen openbaar bericht.",
	    "feed.shareReady": "Delen staat klaar",
	    "feed.sharedThought": "deelde een gedachte",
	    "feed.completedStep": "rondde een stap af",
	    "feed.askedQuestion": "stelde een vraag",
	    "feed.likedBy": "Geliked door",
	    "feed.andOthers": "en anderen",
	    "account.eyebrow": "Account",
	    "account.title": "Admin workshop",
	    "account.copy": "Log in als admin om de content workshop te openen en video's, tekst, audio en journey clips voor de app klaar te zetten.",
	    "account.email": "Admin e-mail",
	    "account.password": "Wachtwoord",
	    "account.signIn": "Log in als admin",
	    "account.signOut": "Uitloggen",
	    "account.openWorkshop": "Open content workshop",
	    "account.signedIn": "Adminmodus staat aan",
	    "account.prototypeNote": "Gebruikt Supabase Auth. Alleen goedgekeurde adminaccounts kunnen de workshop openen en content publiceren.",
	    "account.nextSecurity": "Beveiligd met Supabase Auth en database-regels. Publieke gebruikers kunnen content lezen, maar alleen admins kunnen die aanpassen.",
	    "account.loginNeeded": "Vul je admin e-mail en wachtwoord in om verder te gaan.",
	    "account.loginSuccess": "Adminmodus staat aan",
	    "account.logoutSuccess": "Uitgelogd uit adminmodus",
	    "account.loginFailed": "Inloggen lukt niet. Controleer je e-mail en wachtwoord.",
	    "account.notApproved": "Dit account is ingelogd, maar is niet goedgekeurd als One In Him admin.",
	    "account.authUnavailable": "Admin-login heeft de Supabase-verbinding nodig.",
    "gateway.optionsTitle": "Vind jouw startpunt",
    "gateway.optionsCopy": "Kies wat het beste past, of stel je eigen vraag.",
    "gateway.choiceExploreTitle": "Ik ontdek wie Jezus is",
    "gateway.choiceExploreCopy": "Begin met wie Jezus is en waarom Hij ertoe doet.",
    "gateway.choicePrayerTitle": "Ik wil leren bidden",
    "gateway.choicePrayerCopy": "Begin met eerlijk en eenvoudig gebed.",
    "gateway.choiceBibleTitle": "Ik wil de Bijbel begrijpen",
    "gateway.choiceBibleCopy": "Open de Bijbel zonder je verloren te voelen.",
    "gateway.choiceCareTitle": "Ik zoek rust of steun",
    "gateway.choiceCareCopy": "Vind een zachte volgende stap en richting naar hulp.",
    "gateway.ask": "Leid mij vanuit mijn vraag",
    "gateway.questionDefault": "Ik voel mij ver van God en weet niet waar ik moet beginnen",
    "gateway.quotesTitle": "Wat mensen zeggen",
    "gateway.quoteOne": "\"Ik wist niet waar ik moest beginnen. Een korte stap hielp mij om voor het eerst in lange tijd eerlijk te bidden.\"",
    "gateway.quoteOneName": "Nieuwe gebruiker",
    "gateway.quoteTwo": "\"De clips waren makkelijk af te kijken, maar gaven mij toch iets echts om over na te denken.\"",
    "gateway.quoteTwoName": "Terugkerende gebruiker",
    "gateway.quoteThree": "\"Ik deelde een teaching met een vriend, omdat het precies aansloot bij ons gesprek.\"",
    "gateway.quoteThreeName": "Groepsleider",
    "onboarding.skip": "Overslaan",
    "onboarding.continue": "Verder",
    "onboarding.promptStage": "Waar begin je vandaag?",
    "onboarding.promptMethod": "Hoe wil je beginnen?",
    "onboarding.promptAchieve": "Dit kun je hier opbouwen.",
    "onboarding.promptHabit": "Kleine stappen kunnen een echt ritme worden.",
    "onboarding.stageExploreTitle": "Ik ontdek wie Jezus is",
    "onboarding.stageExploreCopy": "Ik ben nieuwsgierig, onzeker, of stel eerlijke vragen.",
    "onboarding.stageStartTitle": "Ik ben nieuw of begin opnieuw",
    "onboarding.stageStartCopy": "Ik wil duidelijke fundamenten om Jezus te volgen.",
    "onboarding.stageGrowTitle": "Ik wil dieper groeien",
    "onboarding.stageGrowCopy": "Ik wil gewoontes, herstel, karakter en gemeenschap.",
    "onboarding.stageLeadTitle": "Ik wil leiden of anderen discipelen",
    "onboarding.stageLeadCopy": "Ik verken leiderschap, missie of bediening.",
    "onboarding.methodScratchTitle": "Begin bij het begin",
    "onboarding.methodScratchCopy": "Geef mij de eenvoudigste eerste stap en bouw vanaf daar.",
    "onboarding.methodFindTitle": "Help mij mijn beste start te vinden",
    "onboarding.methodFindCopy": "Gebruik mijn antwoord om aan te bevelen waar ik begin.",
    "onboarding.methodAskTitle": "Ik heb een echte vraag",
    "onboarding.methodAskCopy": "Laat mij vragen wat op mijn hart ligt en leid mij vandaar.",
    "onboarding.benefitOneTitle": "Duidelijke volgende stappen",
    "onboarding.benefitOneCopy": "Korte sessies die helpen weten wat je volgende stap is zonder overweldigd te raken.",
    "onboarding.benefitTwoTitle": "Kijk, luister of lees",
    "onboarding.benefitTwoCopy": "Kies de vorm die past bij je dag en blijf toch op dezelfde reis.",
    "onboarding.benefitThreeTitle": "Bewaar notities en gedachten",
    "onboarding.benefitThreeCopy": "Leg vast wat God je laat zien en kom er later op terug in je profiel.",
    "onboarding.habitOneTitle": "Geen minuut verspild",
    "onboarding.habitOneCopy": "Elke sessie moet iets nuttigs, praktisch en bemoedigends geven.",
    "onboarding.habitTwoTitle": "Een reis om naar terug te keren",
    "onboarding.habitTwoCopy": "Voortgang, toekomstige secties en nieuwe content geven redenen om terug te komen.",
    "onboarding.habitThreeTitle": "Deel wat helpt",
    "onboarding.habitThreeCopy": "Als iets je raakt, geef het door aan een vriend die dezelfde bemoediging nodig kan hebben.",
    "popular.bible": "Hoe lees ik mijn Bijbel?",
    "popular.newChristian": "Nieuwe christen",
    "popular.jesus": "Wie is Jezus?",
    "popular.prayer": "Leren bidden",
    "popular.farFromGod": "Ik voel mij ver van God",
    "popular.speakers": "Populaire sprekers",
    "paths.eyebrow": "Kies je sectie",
    "paths.title": "Kies je startpunt",
    "paths.copy": "Tik op een sectie voor een preview en begin daarna bij de eerste stap.",
    "path.home": "Home",
    "paths.questionTitle": "Weet je niet zeker waar je past?",
    "paths.questionCopy": "Stel je echte vraag en we leiden je naar een goede eerste stap.",
    "stage.explore.title": "Jezus ontdekken",
    "stage.explore.copy": "Voor mensen die nieuwsgierig zijn, twijfelen, pijn door kerk hebben, of grote levens- en geloofsvragen stellen.",
    "stage.explore.meta": "Sectie 1 · Oranje",
    "stage.explore.range": "1 tot 6",
    "stage.explore.topics": "Wie is Jezus|Bestaat God?|Waarom geloof?|Ver van God",
    "stage.explore.sections": "Wie is Jezus?|Begin met het hart van het evangelie, niet met druk.|Wie Jezus is, waarom Hij kwam, en hoe je eerlijk begint.|100|Wie is Jezus?,Waarom Jezus dichtbij kwam,Kan ik Hem vertrouwen?~Opnieuw beginnen|Een zachte route voor terugkeer, twijfel of afstand.|Taal voor twijfel, pijn en hoop zonder te doen alsof.|72|Ik voel mij ver van God,Is kerk veilig?,Een eenvoudig gebed~Vragen die ertoe doen|Grote vragen over God, lijden, doel en de Bijbel.|Korte antwoorden die mensen vooruit helpen zonder haast.|34|Bestaat God?,Waarom lijden?,Kan ik de Bijbel vertrouwen?",
    "stage.start.title": "Jezus gaan volgen",
    "stage.start.copy": "Voor nieuwe christenen of mensen die terugkeren en heldere fundamenten en dagelijkse stappen nodig hebben.",
    "stage.start.meta": "Sectie 2 · Goud",
    "stage.start.range": "7 tot 14",
    "stage.start.topics": "Nieuwe christen|Gebed|Bijbelbasis|Doop|Eerste 30 dagen",
    "stage.start.sections": "Eerste 30 dagen|Een eenvoudig ritme om Jezus dagelijks te volgen.|Gebed, Bijbel, identiteit en kleine oefeningen stap voor stap.|68|One Basics: Eeuwig leven,Nieuwe christen,Leren bidden,Lees Johannes~Bijbel en gebed|Leer de Bijbel openen en eerlijk met God praten.|Praktische lessen voor gebed, Bijbellezen en luisteren.|38|De Bijbel lezen,Bidden als woorden moeilijk zijn,Waar begin ik?~Identiteit en doop|Ontdek wie je bent in Christus en wat doop betekent.|Fundamenten over genade, bekering, doop en erbij horen.|12|Identiteit in Christus,Wat is doop?,Jezus publiek volgen",
    "stage.grow.title": "Diepe wortels",
    "stage.grow.copy": "Voor discipelen die groeien in gewoontes, karakter, herstel, gemeenschap en een dieper leven met God.",
    "stage.grow.meta": "Sectie 3 · Olijf",
    "stage.grow.range": "15 tot 24",
    "stage.grow.topics": "Gewoontes|Vrijheid|Gemeenschap|Karakter|Heilige Geest",
    "stage.grow.sections": "Geestelijke gewoontes|Bouw praktijken die je dicht bij Jezus houden.|Bijbel, gebed, aanbidding, sabbat, vrijgevigheid en gehoorzaamheid.|28|Leefregel,God verstaan,Dagelijkse Bijbel~Vrijheid en herstel|Breng echte pijn, angst en patronen bij Jezus.|Zachte vorming voor vrede, belijden, vergeving en heelheid.|16|Rust als het leven zwaar voelt,Vergeving,Vrijheid in Christus~Moeilijke vragen|Maak ruimte voor eerlijke vragen zonder je wortels te verliezen.|Doordachte antwoorden over lijden, twijfel, onbeantwoord gebed, seksualiteit, wetenschap en vertrouwen in de Bijbel.|0|Waarom lijden?,Onbeantwoord gebed,Kan ik de Bijbel vertrouwen?~Gemeenschap en karakter|Groei met mensen en word meer zoals Jezus.|Liefde, geduld, integriteit, relaties en kerkgemeenschap.|0|Gemeenschap vinden,Vrucht van de Geest,Gezonde relaties",
    "stage.mission.title": "Leef met missie",
    "stage.mission.copy": "Voor discipelen die willen dienen, geloof delen, vrienden discipelen en meedoen met Gods werk.",
    "stage.mission.meta": "Sectie 4 · Klei",
    "stage.mission.range": "25 tot 34",
    "stage.mission.topics": "Dienen|Geloof delen|Discipel een vriend|Kring|Recht doen",
    "stage.mission.sections": "Dienen als Jezus|Ontdek gaven en dien mensen met nederigheid en vreugde.|Eenvoudige praktijken voor bewogenheid, vrijgevigheid, recht en missie.|12|Ontdek je gaven,Dien je stad,Recht en genade~Geloof delen|Praat natuurlijk, helder en liefdevol over Jezus.|Verhalen, vragen, getuigenis en evangeliegesprekken voor echt leven.|0|Deel je verhaal,Evangelie in 3 minuten,Moeilijke vragen~Discipel een vriend|Help iemand anders zijn volgende stap met Jezus zetten.|Praktische begeleiding voor mentorschap, gebed, Bijbel en bemoediging.|0|Nodig een vriend uit,Lees samen,Eenvoudig discipelschap",
    "stage.lead.title": "Leid en vermenigvuldig",
    "stage.lead.copy": "Voor mensen die leiderschap, evangelisatie, pastorale roeping, bediening en vermenigvuldiging verkennen.",
    "stage.lead.meta": "Sectie 5 · Diepgroen",
    "stage.lead.range": "35 tot 50",
    "stage.lead.topics": "Leiderschap|Evangelist|Pastor|Mentoring|Kerkplanting",
    "stage.lead.sections": "Christelijk leiderschap|Bouw karakter, wijsheid en praktische bediening.|Leid vanuit gebed, Bijbel, nederigheid en gezonde verantwoordelijkheid.|0|Christelijk leiderschap,Leid een kring,Gezonde teams~Evangelist worden|Leer mensen helder, liefdevol en moedig te bereiken.|Training voor evangeliehelderheid, culturele wijsheid en moedige getuigenis.|0|Basis evangelist,Publiek evangelie,Goed opvolgen~Pastorale roeping|Verken zorg, onderwijs, herderschap en bediening.|Een route voor mensen die pastoraal leiderschap en bediening onderscheiden.|0|Pastor worden,Pastorale zorg,De Bijbel onderwijzen",
    "path.explore.title": "Jezus ontdekken",
    "path.explore.copy": "Voor wie nieuwsgierig is, twijfelt, of opnieuw begint.",
    "path.explore.meta": "Eerste stap",
    "path.newChristian.title": "Nieuwe christen",
    "path.newChristian.copy": "Begin Jezus te volgen met duidelijke dagelijkse fundamenten.",
    "path.newChristian.meta": "Startpad",
    "path.prayer.title": "Leren bidden",
    "path.prayer.copy": "Eenvoudige oefeningen voor eerlijk gesprek met God.",
    "path.prayer.meta": "Oefening",
    "path.bible.title": "De Bijbel lezen",
    "path.bible.copy": "Open de Bijbel zonder verwarring of eenzaam gevoel.",
    "path.bible.meta": "Fundament",
    "path.care.title": "Rust en steun",
    "path.care.copy": "Zachte hulp bij angst, druk en zware seizoenen.",
    "path.care.meta": "Zorg",
    "path.community.title": "Gemeenschap vinden",
    "path.community.copy": "Leer hoe je met andere christenen wandelt.",
    "path.community.meta": "Verbonden",
    "path.shareFaith.title": "Mijn geloof delen",
    "path.shareFaith.copy": "Groei in vertrouwen om natuurlijk over Jezus te praten.",
    "path.shareFaith.meta": "Missie",
    "path.smallGroup.title": "Kring leiden",
    "path.smallGroup.copy": "Leid gesprekken, gebed en Bijbel met anderen.",
    "path.smallGroup.meta": "Leiderschap",
    "path.evangelist.title": "Evangelist worden",
    "path.evangelist.copy": "Leer mensen helder, liefdevol en moedig te bereiken.",
    "path.evangelist.meta": "Roeping",
    "path.leadership.title": "Christelijk leiderschap",
    "path.leadership.copy": "Bouw karakter, wijsheid en praktische bediening.",
    "path.leadership.meta": "Groei",
    "path.pastor.title": "Pastor worden",
    "path.pastor.copy": "Verken pastorale roeping, zorg, onderwijs en vorming.",
    "path.pastor.meta": "Training",
    "path.multiply.title": "Anderen discipelen",
    "path.multiply.copy": "Leer hoe je iemand anders helpt groeien in Jezus.",
    "path.multiply.meta": "Vermenigvuldig",
    "discover.eyebrow": "Ontdek",
    "discover.title": "Proef de kwaliteit",
    "discover.copy": "Korte, waardevolle bronnen die je meteen kunt bekijken voordat je een volledige reis kiest.",
    "discover.more": "Ga verder met mijn discipelschapsreis",
    "discover.featuredType": "Aanbevolen start",
    "discover.featuredTitle": "Waarom Jezus dichtbij kwam",
    "discover.featuredCopy": "Een heldere eerste kennismaking met het hart van het evangelie in minder dan twee minuten.",
    "discover.video": "Video",
    "discover.explore": "Ontdekken",
    "discover.lesson": "Les",
    "discover.bibleTitle": "De Bijbel lezen zonder je verloren te voelen",
    "discover.bibleCopy": "Een eenvoudige oefening om vandaag te beginnen.",
    "discover.foundations": "Fundament",
    "discover.read": "Lezen",
    "discover.prayerTitle": "Een eenvoudig gebed wanneer woorden moeilijk voelen",
    "discover.prayerCopy": "Een rustig startpunt voor eerlijk gebed.",
    "discover.practice": "Oefening",
    "discover.audio": "Audio",
    "discover.peaceTitle": "Rust wanneer het leven zwaar voelt",
    "discover.peaceCopy": "Een korte bemoediging voor druk en angst.",
    "discover.care": "Zorg",
    "homeDiscover.eyebrow": "Ontdek",
    "homeDiscover.todayTitle": "Begin deze week",
    "homeDiscover.todayCopy": "Een snelle rij met echte video's, studiegidslessen en begeleide volgende stappen.",
    "homeDiscover.quickStartsEyebrow": "Vragen",
    "homeDiscover.quickStartsTitle": "Handige startpunten",
    "homeDiscover.journeyButton": "Start de begeleide reis",
    "homeDiscover.stageOne": "Sectie 1 · Jezus ontdekken",
    "homeDiscover.stageOneShort": "Ontdek",
    "homeDiscover.stageTwoShort": "Groei",
    "homeDiscover.stageThreeShort": "Groei verder",
    "homeDiscover.stageFourShort": "Ga",
    "homeDiscover.stageFiveShort": "Leid",
    "homeDiscover.eventsEyebrow": "Events",
    "homeDiscover.eventsTitle": "Events",
    "homeDiscover.eventsCopy": "Nieuwe teachings en momenten van de ONEEVENT-bijeenkomst van dit weekend.",
    "homeDiscover.eventLabel": "Event teaching",
    "homeDiscover.psDuaneFridayTitle": "Ps Duane: vrijdag sessie",
    "homeDiscover.psDuaneFridayCopy": "Bekijk de vrijdagboodschap van Ps Duane tijdens ONEEVENT Days.",
    "homeDiscover.featureTitle": "Waarom Jezus dichtbij kwam",
    "homeDiscover.featureCopy": "Een korte, heldere uitnodiging voor wie nieuwsgierig is, twijfelt, of opnieuw begint.",
    "homeDiscover.miniBasicsTitle": "One Basics: Eeuwig leven",
    "homeDiscover.miniBasicsCopy": "Sectie 2 fundament · 12 min lezen",
    "homeDiscover.miniBibleTitle": "Hoe lees je de Bijbel",
    "homeDiscover.miniBibleCopy": "Sectie 2 fundament · 7 min",
    "homeDiscover.miniPeaceTitle": "Rust wanneer het leven zwaar voelt",
    "homeDiscover.miniPeaceCopy": "Sectie 3 vorming · 4 min lezen",
    "homeDiscover.miniLeadTitle": "Christelijk leiderschap",
    "homeDiscover.miniLeadCopy": "Sectie 5 trainingspad",
    "homeDiscover.watchEyebrow": "Kijken",
    "homeDiscover.watchTitle": "Aanbevolen teachings",
    "homeDiscover.watchCopy": "Korte, heldere video's die mensen de kwaliteit laten proeven voordat ze een pad kiezen.",
    "homeDiscover.documentariesEyebrow": "Documentaires",
    "homeDiscover.documentariesTitle": "Documentaires",
    "homeDiscover.documentariesCopy": "Langere verhalen die laten zien wat Jezus in echte levens kan doen.",
    "homeDiscover.documentaryLabel": "Documentaire",
    "homeDiscover.brendaDocTitle": "Uit de schaduw",
    "homeDiscover.brendaDocCopy": "Brenda's verhaal van hoop, herstel en opnieuw in het licht stappen.",
    "homeDiscover.watchNow": "Bekijk nu",
    "homeDiscover.seriesEyebrow": "Series",
    "homeDiscover.seriesTitle": "Volledige cursussen en series",
    "homeDiscover.seriesCopy": "Langere lessen voor mensen die klaar zijn om bij een heel thema stil te staan, met dezelfde kleuren als de reis.",
    "homeDiscover.openSeries": "Open serie",
    "homeDiscover.oneBasicsSeriesTitle": "One Basics 1: Fundamenten",
    "homeDiscover.oneBasicsSeriesCopy": "Volledige videolessen voor de eerste fundamenten van Jezus volgen.",
    "homeDiscover.oneBasics11VideoTitle": "1.1 Eeuwig leven",
    "homeDiscover.oneBasics11VideoCopy": "De volledige les die hoort bij de eerste One Basics-les.",
    "homeDiscover.oneBasics2SeriesTitle": "One Basics 2: Verdieping",
    "homeDiscover.oneBasics2SeriesCopy": "Verdieping, roeping en discipelschap voor latere secties.",
    "homeDiscover.fullVideo": "Volledige video",
    "homeDiscover.series": "Serie",
    "homeDiscover.comingSoon": "Binnenkort",
    "homeDiscover.nextEpisodes": "Volgende afleveringen",
    "homeDiscover.course": "Cursus",
    "homeDiscover.training": "Training",
    "homeDiscover.guide": "Gids",
    "homeDiscover.path": "Pad",
    "homeDiscover.oneBasicsTitle": "One Basics: Eeuwig leven",
    "homeDiscover.oneBasicsCopy": "Een voorbereide eerste les uit de One Basics studiegids.",
    "homeDiscover.podcastTitle": "Van duisternis naar zoonschap",
    "homeDiscover.podcastCopy": "One Gospel-podcast met Johan Toet over van duisternis naar zoonschap in Christus.",
    "homeDiscover.classicsEyebrow": "Audio",
    "homeDiscover.classicsTitle": "Klassiekers",
    "homeDiscover.classicsCopy": "Klassieke audioboeken die voorbereid worden voor later luisteren.",
    "homeDiscover.audiobookPlaceholder": "Audioboek placeholder",
    "homeDiscover.shareTitle": "Deel je geloof natuurlijk",
    "homeDiscover.shareCopy": "Een praktisch pad voor eerlijke gesprekken over Jezus.",
    "homeDiscover.pastorTitle": "Verken pastorale roeping",
    "homeDiscover.pastorCopy": "Zorg, onderwijs, karakter en vorming voor opkomende leiders.",
    "homeDiscover.mission": "Missie",
    "homeDiscover.leadership": "Leiderschap",
    "homeDiscover.listenReadEyebrow": "Lees en reflecteer",
    "homeDiscover.listenReadTitle": "Makkelijk af te maken, toch betekenisvol",
    "homeDiscover.listenReadCopy": "Een mix van boekfragmenten, overdenkingen en oefeningen voor wie nu iets waardevols wil.",
    "homeDiscover.communityTitle": "Vind christelijke gemeenschap",
    "homeDiscover.communityCopy": "Een praktische gids om met andere gelovigen op weg te gaan.",
    "homeDiscover.community": "Gemeenschap",
    "homeDiscover.multiplyTitle": "Discipel iemand anders",
    "homeDiscover.multiplyCopy": "Leer hoe je iemand helpt groeien in Jezus zonder het ingewikkeld te maken.",
    "homeDiscover.multiply": "Vermenigvuldig",
    "homeDiscover.voiceEyebrow": "Vertrouwde stemmen",
    "homeDiscover.voiceTitle": "Ontdek per persoon",
    "homeDiscover.voiceCopy": "Voor mensen die al een spreker of auteur vertrouwen, kan ontdekking bij een stem beginnen en toch verbonden blijven met de reissecties.",
    "homeDiscover.voiceOne": "Jezus, geloofsvragen",
    "homeDiscover.voiceTwo": "Bijbel, fundamenten",
    "homeDiscover.voiceThree": "Rust, vorming",
    "homeDiscover.moreVoices": "Meer stemmen",
    "homeDiscover.moreVoicesCopy": "Sprekers, auteurs, leiders",
    "module.comingSoon": "Binnenkort",
    "module.comingSoonCopy": "Deze les komt eraan. Binnenkort bevat hij teaching, notities, Bijbelteksten, reflectie en een praktische volgende stap.",
    "module.comingSoonLesson": "Binnenkort",
    "module.contentPlanned": "Content wordt voorbereid",
    "module.modeWatch": "Kijken",
    "module.modeListen": "Luisteren",
    "module.modeRead": "Lezen",
    "module.watchLabel": "Kijksessie",
    "module.listenLabel": "Luistersessie",
    "module.readLabel": "Leessessie",
    "module.watchTitle": "Kijken",
    "module.listenTitle": "Luisteren",
    "module.readTitle": "Lezen",
    "module.sessionPoints": "1 stap vandaag",
    "module.notesLabel": "Notities en gedachten",
    "module.notesPlaceholder": "Schrijf op wat opviel, welke vragen je hebt, of wat je volgende stap is.",
    "module.saveNotes": "Bewaar op dit apparaat",
    "module.notesReady": "Voor nu opgeslagen op dit apparaat.",
    "module.notesSaved": "Opgeslagen op dit apparaat",
    "module.watchBody": "Bekijk de hoofdteaching en schrijf daarna op wat je opviel voordat je verdergaat.",
    "module.listenBody": "Luister naar de audioversie van deze sessie. Dit is handig tijdens wandelen, reizen, of wanneer je een rustiger tempo wilt.",
    "module.readBody": "Lees de gids in je eigen tempo. Gebruik deze sessie wanneer je Bijbeltekst, notities en reflectie wilt zonder video.",
    "toast.choose": "Kies jouw startpunt",
    "toast.questionMatched": "Je vraag is gekoppeld aan een volgende stap",
    "toast.questionNeeded": "Schrijf eerst je vraag op",
    "toast.language": "Taal bijgewerkt",
    "toast.choiceExplore": "Beginnen met Jezus",
    "toast.choicePrayer": "Gebedspad staat klaar",
    "toast.choiceBible": "Bijbelles staat klaar",
    "toast.choiceCare": "Een zachte volgende stap staat klaar",
    "toast.choiceCommunity": "Gemeenschapspad staat klaar",
    "toast.choiceMission": "Missiepad staat klaar",
    "toast.choiceLeadership": "Leiderschapspad staat klaar",
    "toast.choicePastor": "Pastoraal pad staat klaar",
    "toast.choiceMultiply": "Discipelschapspad staat klaar",
    "toast.quickStart": "Dit startpunt wordt geopend",
    "choice.explore.question": "Wie is Jezus en waar begin ik?",
    "choice.prayer.question": "Hoe bid ik als woorden moeilijk voelen?",
    "choice.bible.question": "Hoe lees ik de Bijbel zonder mij verloren te voelen?",
    "choice.care.question": "Ik heb rust nodig en iemand om mee te praten",
    "choice.community.question": "Hoe vind ik christelijke gemeenschap?",
    "choice.shareFaith.question": "Hoe kan ik mijn geloof natuurlijk delen?",
    "choice.smallGroup.question": "Hoe leid ik een kring goed?",
    "choice.evangelist.question": "Hoe word ik evangelist?",
    "choice.leadership.question": "Hoe groei ik als christelijke leider?",
    "choice.pastor.question": "Hoe verken ik pastor worden?",
    "choice.multiply.question": "Hoe discipel ik iemand anders?",
    "quick.bible.question": "Hoe lees ik mijn Bijbel?",
    "quick.newChristian.question": "Ik ben een nieuwe christen. Waar begin ik?",
    "quick.jesus.question": "Wie is Jezus?",
    "quick.prayer.question": "Hoe leer ik bidden?",
    "quick.farFromGod.question": "Ik voel mij ver van God en weet niet waar ik moet beginnen"
  }
};

const gatewayArtByLanguage = {
  en: "assets/oneinhim-characters-international.png",
  nl: "assets/oneinhim-characters-dutch.png"
};

const els = {
  schemaPill: document.getElementById("schemaPill"),
  statePill: document.getElementById("statePill"),
  viewTitle: document.getElementById("viewTitle"),
  viewSubtitle: document.getElementById("viewSubtitle"),
  langButtons: document.querySelectorAll("[data-lang]"),
  popularRail: document.getElementById("popularRail"),
	  gatewayQuestion: document.getElementById("gatewayQuestion"),
	  gatewayCharacterArt: document.getElementById("gatewayCharacterArt"),
	  adminEmail: document.getElementById("adminEmail"),
	  adminPassword: document.getElementById("adminPassword"),
	  adminLogin: document.getElementById("adminLogin"),
	  adminLogout: document.getElementById("adminLogout"),
	  adminSignedOut: document.getElementById("adminSignedOut"),
	  adminSignedIn: document.getElementById("adminSignedIn"),
	  adminSessionLabel: document.getElementById("adminSessionLabel"),
	  adminWorkshopLink: document.getElementById("adminWorkshopLink"),
	  feedComposer: document.getElementById("feedComposer"),
	  feedPostButton: document.getElementById("feedPostButton"),
	  feedPostList: document.getElementById("feedPostList"),
	  feedStatus: document.getElementById("feedStatus"),
  onboardingPrompt: document.getElementById("onboardingPrompt"),
  onboardingContent: document.getElementById("onboardingContent"),
  onboardingGuideArt: document.getElementById("onboardingGuideArt"),
  onboardingBack: document.getElementById("onboardingBack"),
  onboardingContinue: document.getElementById("onboardingContinue"),
  pathGrid: document.getElementById("pathGrid"),
  stageAppHeader: document.getElementById("stageAppHeader"),
  stageDetailHeader: document.getElementById("stageDetailHeader"),
  stageDetailEyebrow: document.getElementById("stageDetailEyebrow"),
  stageDetailTitle: document.getElementById("stageDetailTitle"),
  stageDetailCopy: document.getElementById("stageDetailCopy"),
  stageRange: document.getElementById("stageRange"),
  stageSummaryCard: document.getElementById("stageSummaryCard"),
  stageProgressFill: document.getElementById("stageProgressFill"),
  stageStatusRow: document.getElementById("stageStatusRow"),
  stageQuestProgress: document.getElementById("stageQuestProgress"),
  journeyCallout: document.getElementById("journeyCallout"),
  stageSectionList: document.getElementById("stageSectionList"),
  moduleHeader: document.getElementById("moduleHeader"),
  moduleSessionProgress: document.getElementById("moduleSessionProgress"),
  moduleSessionPoints: document.getElementById("moduleSessionPoints"),
  moduleHero: document.getElementById("moduleHero"),
  moduleEyebrow: document.getElementById("moduleEyebrow"),
  moduleTitle: document.getElementById("moduleTitle"),
  moduleCopy: document.getElementById("moduleCopy"),
  moduleTags: document.getElementById("moduleTags"),
  moduleFallback: document.getElementById("moduleFallback"),
  modulePlayer: document.getElementById("modulePlayer"),
  moduleContentGrid: document.getElementById("moduleContentGrid"),
  moduleNextStep: document.getElementById("moduleNextStep"),
  moduleSkipStep: document.getElementById("moduleSkipStep"),
  modulePlayIcon: document.getElementById("modulePlayIcon"),
  modulePlayerLabel: document.getElementById("modulePlayerLabel"),
  moduleReadTitle: document.getElementById("moduleReadTitle"),
  moduleRead: document.getElementById("moduleRead"),
  sectionContentQueue: document.getElementById("sectionContentQueue"),
  practicalUsePanel: document.getElementById("practicalUsePanel"),
  practicalUseContent: document.getElementById("practicalUseContent"),
  quizProgressFill: document.getElementById("quizProgressFill"),
  quizKicker: document.getElementById("quizKicker"),
  quizQuestion: document.getElementById("quizQuestion"),
  quizOptions: document.getElementById("quizOptions"),
  quizFeedback: document.getElementById("quizFeedback"),
  quizCheck: document.getElementById("quizCheck"),
  moduleNotes: document.getElementById("moduleNotes"),
  moduleNotesLabel: document.getElementById("moduleNotesLabel"),
  moduleSaveNotes: document.getElementById("moduleSaveNotes"),
  moduleNoteStatus: document.getElementById("moduleNoteStatus"),
  discoverWatchMedia: document.getElementById("discoverWatchMedia"),
  discoverWatchPlay: document.getElementById("discoverWatchPlay"),
  discoverDetailTitle: document.getElementById("discoverDetailTitle"),
  discoverDetailMeta: document.getElementById("discoverDetailMeta"),
  discoverDetailSummary: document.getElementById("discoverDetailSummary"),
  discoverJoinJourney: document.getElementById("discoverJoinJourney"),
  discoverRelatedTitle: document.getElementById("discoverRelatedTitle"),
  discoverRelatedList: document.getElementById("discoverRelatedList"),
  shelfDetailTitle: document.getElementById("shelfDetailTitle"),
  shelfDetailGrid: document.getElementById("shelfDetailGrid"),
  homeHeroTitle: document.getElementById("homeHeroTitle"),
  homeHeroSummary: document.getElementById("homeHeroSummary"),
  homeHeroTags: document.getElementById("homeHeroTags"),
  homeHeroVisual: document.getElementById("homeHeroVisual"),
  homeVisualTitle: document.getElementById("homeVisualTitle"),
  homeVisualMeta: document.getElementById("homeVisualMeta"),
  homeLessons: document.getElementById("homeLessons"),
  homeMoments: document.getElementById("homeMoments"),
  journeyPath: document.getElementById("journeyPath"),
  journeyRecommended: document.getElementById("journeyRecommended"),
  askInput: document.getElementById("askInput"),
  answerCard: document.getElementById("answerCard"),
  askRecommendations: document.getElementById("askRecommendations"),
  librarySearch: document.getElementById("librarySearch"),
  libraryGrid: document.getElementById("libraryGrid"),
  topicList: document.getElementById("topicList"),
  speakerName: document.getElementById("speakerName"),
  speakerBio: document.getElementById("speakerBio"),
  speakerResources: document.getElementById("speakerResources"),
  speakerList: document.getElementById("speakerList"),
  shareTitle: document.getElementById("shareTitle"),
  shareSummary: document.getElementById("shareSummary"),
  friendPreview: document.getElementById("friendPreview"),
  guidebookOverlay: document.getElementById("guidebookOverlay"),
  guidebookContent: document.getElementById("guidebookContent"),
  guidebookBack: document.getElementById("guidebookBack"),
  toast: document.getElementById("toast")
};

function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  }[char]));
}

const HOME_CONTENT_STORAGE_KEY = "oneinhim.homeContent.v2";
const HOME_CONTENT_DRAFT_PARAM = "draft";
const APP_RELEASE_VERSION = "233";
const APP_RELEASE_STORAGE_KEY = "oneinhim.appReleaseVersion";
const APP_LANGUAGE_STORAGE_KEY = "oneinhim.language";
const DEFAULT_HOME_CONTENT = {
  heroSlides: [
    {
      id: "one_basics_hero",
      mode: "discover watch",
      mobileArtwork: "assets/one-basics-1-1-eternal-life-desktop-hero-mobile.webp",
      artwork: "assets/one-basics-1-1-eternal-life-desktop-hero-mobile.webp",
      desktopArtwork: "assets/one-basics-1-1-eternal-life-desktop-hero-v3.jpg",
      targetType: "discover",
      target: "mux_one_basics_1_1_full_video",
      contentId: "mux_one_basics_1_1_full_video",
      alt: "One Basics Eternal Life",
      eyebrow: "One Basics",
      title: "Start with Eternal Life",
      description: "Watch the full One Basics episode and begin the foundation of knowing God personally through Jesus.",
      cta: "Watch full episode"
    },
    {
      id: "out_of_the_shadows_hero",
      mode: "discover watch",
      mobileArtwork: "assets/outoftheshadows_documentary_hero_mobile.webp",
      artwork: "assets/outoftheshadows_documentary_hero_mobile.webp",
      desktopArtwork: "assets/outoftheshadows_documentary-coverart_16x9.webp",
      targetType: "discover",
      target: "mux_out_of_shadows_documentary",
      alt: "Out of the Shadows",
      eyebrow: "",
      title: "",
      description: "A powerful documentary of hope, healing, and stepping into the light.",
      cta: "Watch now"
    },
    {
      id: "journey_hero",
      mode: "discover",
      mobileArtwork: "assets/oneinhim-journey-hero-custom-mobile.webp",
      artwork: "assets/oneinhim-journey-hero-custom-mobile.webp",
      desktopArtwork: "assets/oneinhim-journey-hero-custom-desktop.webp",
      targetType: "journey",
      target: "stageDetailView",
      contentId: "book_one_basics_1_1_eternal_life",
      alt: "One In Him discipleship journey",
      eyebrow: "Guided path",
      title: "Start your discipleship journey",
      description: "Take the next clear step through short teachings, prayer, Scripture, and guided milestones.",
      cta: "Open Journey"
    }
  ],
  contentAccess: {
    mux_one_basics_1_1_full_video: { level: "free" },
    mux_out_of_shadows_documentary: { level: "free" },
    aud_darkness_sonship_004: { level: "free" },
    mux_oneevent_ps_duane_friday: { level: "free" },
    aud_death_ivan_ilyich_classics: { level: "partner_access" }
  },
  shelves: [
    {
      id: "start_this_week",
      title: "Start This Week",
      mode: "discover",
      cardSize: "wide",
      items: [
        { id: "one_basics_course", artwork: "assets/one-basics-1-1-eternal-life-course-cover.png", targetType: "discover", target: "mux_one_basics_1_1_full_video", contentId: "mux_one_basics_1_1_full_video", alt: "One Basics 1.1 Eternal Life" },
        { id: "darkness_sonship", artwork: "assets/one-gospel-podcast-cover.png", targetType: "discover", target: "aud_darkness_sonship_004", alt: "From Darkness to Sonship" },
        { id: "out_of_the_shadows", artwork: "assets/outoftheshadows_documentary-coverart_16x9.webp", targetType: "discover", target: "mux_out_of_shadows_documentary", alt: "Out of the Shadows", locked: true }
      ]
    },
    {
      id: "listen_this_week",
      title: "Listen This Week",
      mode: "discover listen",
      cardSize: "square",
      items: [
        { id: "darkness_sonship_audio", artwork: "assets/one-gospel-podcast-cover.png", targetType: "discover", target: "aud_darkness_sonship_004", alt: "From Darkness to Sonship" },
        { id: "ivan_ilyich", artwork: "assets/death-of-ivan-ilyich-classics-audiobook-cover.jpg", targetType: "discover", target: "aud_death_ivan_ilyich_classics", alt: "The Death of Ivan Ilyich" }
      ]
    },
    {
      id: "watch_this_week",
      title: "Conferences",
      mode: "discover watch",
      cardSize: "poster",
      items: [
        { id: "oneevent_watch", artwork: "assets/OE_May_PsDuaneS_friday.webp", targetType: "discover", target: "mux_oneevent_ps_duane_friday", alt: "ONEEVENT Friday teaching" },
        { id: "artwork_only_1781433446659", artwork: "assets/OE_May_JohanToet_friday.webp", targetType: "none", target: "", contentId: "", alt: "Coming soon", placeholder: true, locked: true },
        { id: "artwork_only_1781435680260", artwork: "assets/OE_May_JohanToet_saturday2.webp", targetType: "none", target: "", contentId: "", alt: "Coming soon", placeholder: true, locked: true },
        { id: "artwork_only_1781437780877", artwork: "assets/OE_May_Duanesheriff_saturday2.webp", targetType: "none", target: "", contentId: "", alt: "Coming soon", placeholder: true, locked: true }
      ]
    },
    {
      id: "classics",
      title: "Classics",
      mode: "discover listen",
      cardSize: "square",
      items: [
        { id: "death_ivan_classics", artwork: "assets/death-of-ivan-ilyich-classics-audiobook-cover.jpg", targetType: "discover", target: "aud_death_ivan_ilyich_classics", alt: "The Death of Ivan Ilyich" }
      ]
    },
    {
      id: "shelf_1781379195538",
      title: "Documentaries",
      mode: "discover watch",
      cardSize: "poster",
      items: [
        { id: "mux_out_of_shadows_documentary_1781379431168", artwork: "assets/outoftheshadows_documentary-coverart.webp", targetType: "discover", target: "mux_out_of_shadows_documentary", contentId: "mux_out_of_shadows_documentary", alt: "Out of the Shadows" }
      ]
    },
    {
      id: "shelf_1781437768568",
      title: "New shelf",
      mode: "discover",
      cardSize: "wide",
      items: []
    }
  ],
  browseSections: [
    { key: "podcast-shows", icon: "shows", title: "Podcast Shows", copy: "Podcasts and conversations", detailTitle: "Podcast Shows", cardSize: "wide", filter: "video watch podcast series" },
    { key: "podcast-series", icon: "series", title: "Podcast Series", copy: "Browse by series and collections", detailTitle: "Podcast Series", cardSize: "wide", filter: "series podcast audio video" },
    { key: "topics", icon: "topic", title: "Topics", copy: "Browse by themes and questions", detailTitle: "Topics", cardSize: "wide", filter: "anger conflict anxiety fear grief loss prayer bible scripture family marriage identity purpose money generosity forgiveness holy spirit mission calling spiritual growth depression hope community church gospel faith trials", topicThemes: ["Anger & Conflict", "Anxiety & Fear", "Grief & Loss", "Prayer", "Bible & Scripture", "Family & Marriage", "Identity & Purpose", "Money & Generosity", "Forgiveness", "Holy Spirit", "Mission & Calling", "Spiritual Growth", "Depression & Hope", "Community & Church", "The Gospel", "Faith in Trials"] },
    { key: "people", icon: "people", title: "People", copy: "Browse teachers and voices", detailTitle: "People", cardSize: "wide", filter: "johan toet duane sheriff ps duane brenda one in him oneinhim_team team speaker author pastor teacher" },
    { key: "livestream", icon: "live", title: "Livestream Schedule", copy: "Upcoming live broadcasts", detailTitle: "Livestream Schedule", cardSize: "wide", filter: "live event livestream", live: true }
  ],
  supporterBand: {
    enabled: true,
    eyebrow: "Go deeper",
    title: "Become a supporter",
    copy: "Keep the core Journey free and unlock deeper teaching, partner updates, and new discipleship resources.",
    benefits: [
      "Journey stays free",
      "New content",
      "Library access"
    ],
    cta: "Explore supporter access",
    ctaTarget: "libraryView",
    secondary: "Partner access can unlock the full Library."
  }
};

const BROWSE_TOPIC_THEMES = [
  "Anger & Conflict",
  "Anxiety & Fear",
  "Grief & Loss",
  "Prayer",
  "Bible & Scripture",
  "Family & Marriage",
  "Identity & Purpose",
  "Money & Generosity",
  "Forgiveness",
  "Holy Spirit",
  "Mission & Calling",
  "Spiritual Growth",
  "Depression & Hope",
  "Community & Church",
  "The Gospel",
  "Faith in Trials"
];

const HOME_LANGUAGE_OVERRIDES = {
  nl: {
    common: {
      browse: "Bladeren",
      seeAll: "Alles bekijken",
      comingSoon: "Binnenkort",
      browseTopic: "Bekijk thema",
      liveNow: "Live nu",
      featured: "Aanbevolen",
      shelf: "Rij"
    },
    heroSlides: {
      one_basics_hero: {
        eyebrow: "One Basics",
        title: "Begin met eeuwig leven",
        description: "Bekijk de volledige One Basics-aflevering en leg het fundament om God persoonlijk te kennen door Jezus.",
        cta: "Bekijk volledige aflevering"
      },
      out_of_the_shadows_hero: {
        title: "",
        description: "Een krachtige documentaire over hoop, herstel en opnieuw in het licht stappen.",
        cta: "Bekijk nu"
      },
      journey_hero: {
        eyebrow: "Begeleid pad",
        title: "Start je discipelschapsreis",
        description: "Zet je volgende duidelijke stap door korte teachings, gebed, Bijbel en begeleide mijlpalen.",
        cta: "Open Reis"
      }
    },
    shelves: {
      start_this_week: { title: "Begin deze week" },
      listen_this_week: { title: "Luister deze week" },
      watch_this_week: { title: "Conferenties" },
      classics: { title: "Klassiekers" },
      shelf_1781379195538: { title: "Documentaires" },
      shelf_1781437768568: { title: "Aanbevolen audioboeken" }
    },
    browseSections: {
      "podcast-shows": { title: "Podcastshows", copy: "Podcasts en gesprekken", detailTitle: "Podcastshows" },
      "podcast-series": { title: "Podcastseries", copy: "Blader per serie en collectie", detailTitle: "Podcastseries" },
      topics: { title: "Thema's", copy: "Blader per thema en vraag", detailTitle: "Thema's" },
      people: { title: "Personen", copy: "Blader door teachers en stemmen", detailTitle: "Personen" },
      livestream: { title: "Livestreamschema", copy: "Aankomende live-uitzendingen", detailTitle: "Livestreamschema" }
    },
    topicThemes: {
      "Anger & Conflict": "Boosheid & conflict",
      "Anxiety & Fear": "Angst & vrees",
      "Grief & Loss": "Rouw & verlies",
      "Prayer": "Gebed",
      "Bible & Scripture": "Bijbel & Schrift",
      "Family & Marriage": "Familie & huwelijk",
      "Identity & Purpose": "Identiteit & doel",
      "Money & Generosity": "Geld & vrijgevigheid",
      "Forgiveness": "Vergeving",
      "Holy Spirit": "Heilige Geest",
      "Mission & Calling": "Missie & roeping",
      "Spiritual Growth": "Geestelijke groei",
      "Depression & Hope": "Depressie & hoop",
      "Community & Church": "Gemeenschap & kerk",
      "The Gospel": "Het evangelie",
      "Faith in Trials": "Geloof in beproeving"
    },
    supporterBand: {
      eyebrow: "Ga dieper",
      title: "Word supporter",
      copy: "Houd de kernreis gratis en ontgrendel diepere teachings, partnerupdates en nieuwe discipelschapsbronnen.",
      cta: "Ontdek supportertoegang",
      secondary: "Partnertoegang kan de volledige Bibliotheek openen.",
      benefits: {
        "Journey stays free": "Reis blijft gratis",
        "New content": "Nieuwe content",
        "Library access": "Bibliotheektoegang"
      }
    }
  }
};

function homeLocalized(group, id, field, fallback = "") {
  return HOME_LANGUAGE_OVERRIDES[state.language]?.[group]?.[id]?.[field] || fallback || "";
}

function homeCommonText(key, fallback = "") {
  return HOME_LANGUAGE_OVERRIDES[state.language]?.common?.[key] || fallback || key;
}

function localizedField(value, fallback = "") {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value[state.language] || value.en || Object.values(value).find((item) => typeof item === "string") || fallback || "";
  }
  return value === undefined || value === null ? (fallback || "") : value;
}

function localizedArray(value) {
  const localized = localizedField(value, value);
  if (Array.isArray(localized)) return localized;
  return Array.isArray(value) ? value : [];
}

function resourceTitle(resource, fallback = "") {
  return String(localizedField(resource?.title, localizedField(resource?.packageTitle, fallback)) || fallback || "");
}

function resourceSummary(resource, fallback = "") {
  return String(localizedField(resource?.summary, localizedField(resource?.shareLine, localizedField(resource?.packageGoal, fallback))) || fallback || "");
}

function resourceSpeakerName(resource) {
  return String(localizedField(resource?.speaker, localizedField(resource?.speakerOrAuthor?.name, "")) || "");
}

function homeLocalizedBrowseSection(section) {
  if (!section) return section;
  const translated = HOME_LANGUAGE_OVERRIDES[state.language]?.browseSections?.[section.key] || {};
  return {
    ...section,
    ...translated,
    title: translated.title || localizedField(section.title, section.title),
    copy: translated.copy || localizedField(section.copy, section.copy),
    detailTitle: translated.detailTitle || localizedField(section.detailTitle, localizedField(section.title, section.title))
  };
}

function homeLocalizedTopicTheme(theme) {
  return HOME_LANGUAGE_OVERRIDES[state.language]?.topicThemes?.[theme] || theme;
}

function homeLocalizedSupporterBenefit(item) {
  return HOME_LANGUAGE_OVERRIDES[state.language]?.supporterBand?.benefits?.[item] || item;
}

function normalizeHomeContent(layout) {
  const defaultSlidesById = new Map(DEFAULT_HOME_CONTENT.heroSlides.map((slide) => [slide.id, slide]));
  const defaultContentAccess = {
    ...(DEFAULT_HOME_CONTENT.contentAccess || {})
  };
  const normalizeHomeItemTarget = (item) => {
    if (item.targetType === "none" || item.placeholder || (!item.target && !item.contentId)) {
      return {
        target: "",
        contentId: "",
        targetType: "none",
        placeholder: true,
        locked: item.locked !== false,
        comingSoon: item.comingSoon !== false
      };
    }
    const shouldUpgradeOneBasicsWatchTarget = ["one_basics_hero", "one_basics_course", "one_basics_watch"].includes(item.id)
      && (item.target === "book_one_basics_1_1_eternal_life" || item.contentId === "book_one_basics_1_1_eternal_life");
    const rawTarget = shouldUpgradeOneBasicsWatchTarget ? "mux_one_basics_1_1_full_video" : (item.target || "");
    if (item.targetType === "journey") {
      const viewTarget = item.id === "journey_hero"
        ? "onboardingView"
        : (rawTarget === "moduleDetailView" || rawTarget === "stageDetailView" || rawTarget === "onboardingView" || rawTarget === "pathSelectView"
          ? (rawTarget === "pathSelectView" ? "onboardingView" : rawTarget)
          : "onboardingView");
      const contentId = resolveContentTargetId(item.contentId || rawTarget || "book_one_basics_1_1_eternal_life");
      return { target: viewTarget, contentId };
    }
    const resolvedTarget = resolveContentTargetId(shouldUpgradeOneBasicsWatchTarget ? rawTarget : (item.contentId || rawTarget));
    return { target: resolvedTarget, contentId: shouldUpgradeOneBasicsWatchTarget ? resolvedTarget : (item.contentId || resolvedTarget) };
  };
  const contentAccess = {
    ...defaultContentAccess,
    ...(layout.contentAccess || {})
  };
  (layout.shelves || []).forEach((shelf) => {
    (shelf.items || []).forEach((item) => {
      const target = item.contentId || item.target || "";
      if (target && item.locked && normalizedAccessLevel(contentAccess[target]?.level || contentAccess[target]) === "free") {
        contentAccess[target] = { level: "partner_access" };
      }
    });
  });
  const defaultSupporterBand = DEFAULT_HOME_CONTENT.supporterBand || {};
  const layoutSupporterBand = layout.supporterBand || {};
  const supporterBand = {
    ...defaultSupporterBand,
    ...layoutSupporterBand,
    benefits: Array.isArray(layoutSupporterBand.benefits)
      ? layoutSupporterBand.benefits
      : (Array.isArray(defaultSupporterBand.benefits) ? defaultSupporterBand.benefits : [])
  };
  return {
    ...DEFAULT_HOME_CONTENT,
    ...layout,
    contentAccess,
    browseSections: Array.isArray(layout.browseSections) ? layout.browseSections : DEFAULT_HOME_CONTENT.browseSections,
    supporterBand,
    heroSlides: (layout.heroSlides || DEFAULT_HOME_CONTENT.heroSlides).map((slide, index) => {
      const merged = {
        ...(defaultSlidesById.get(slide.id) || DEFAULT_HOME_CONTENT.heroSlides[index] || {}),
        ...slide
      };
      const mobileArtwork = merged.mobileArtwork || merged.artwork || merged.desktopArtwork || "";
      const desktopArtwork = merged.desktopArtwork || merged.artwork || merged.mobileArtwork || "";
      const resolvedTarget = normalizeHomeItemTarget(merged);
      return {
        ...merged,
        ...resolvedTarget,
        mobileArtwork,
        artwork: mobileArtwork,
        desktopArtwork
      };
    }),
    shelves: (layout.shelves || DEFAULT_HOME_CONTENT.shelves).map((shelf) => ({
      ...shelf,
      items: (shelf.items || []).map((item) => {
        return {
          ...item,
          ...normalizeHomeItemTarget(item)
        };
      })
    }))
  };
}

function readHomeContent() {
  const published = window.ONEINHIM_PUBLISHED_HOME_CONTENT;
  const publishedLayout = published && Array.isArray(published.heroSlides) && Array.isArray(published.shelves)
    ? normalizeHomeContent(published)
    : normalizeHomeContent(DEFAULT_HOME_CONTENT);
  const useDraft = new URLSearchParams(window.location.search).get(HOME_CONTENT_DRAFT_PARAM) === "1";
  if (!useDraft) return publishedLayout;
  try {
    const raw = window.localStorage.getItem(HOME_CONTENT_STORAGE_KEY);
    if (!raw) {
      return publishedLayout;
    }
    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.heroSlides) || !Array.isArray(parsed.shelves)) {
      return publishedLayout;
    }
    return normalizeHomeContent(parsed);
  } catch (error) {
    console.warn("Home content override could not be read.", error);
    return publishedLayout;
  }
}

function homeActionAttributes(item) {
  if (!item) return "";
  const target = item.contentId || item.target || "";
  if (item.targetType === "none" || item.placeholder || !target) return `data-home-disabled="true" aria-disabled="true"`;
  if (item.targetType === "journey") {
    const resourceId = resolveContentTargetId(item.contentId || target);
    const viewTarget = item.target && item.target !== "pathSelectView" ? item.target : "stageDetailView";
    return `data-nav-jump="${esc(viewTarget)}" data-linked-resource="${esc(resourceId)}"`;
  }
  if (item.targetType === "choice") return `data-gateway-choice="${esc(target || "exploreJesus")}"`;
  return `data-discover-open="${esc(resolveContentTargetId(target))}"`;
}

function homeHeroArtworkStyle(slide) {
  const declarations = [];
  if (slide?.mobileArtworkPosition) declarations.push(`--home-mobile-artwork-position:${esc(String(slide.mobileArtworkPosition))}`);
  if (slide?.mobileArtworkScale) declarations.push(`--home-mobile-artwork-scale:${esc(String(slide.mobileArtworkScale))}`);
  if (slide?.mobileArtworkOrigin) declarations.push(`--home-mobile-artwork-origin:${esc(String(slide.mobileArtworkOrigin))}`);
  return declarations.length ? `style="${declarations.join(";")}"` : "";
}

function homeLockBadge(item) {
  return homeItemIsLocked(item) ? contentLockBadgeMarkup() : "";
}

function homeContentAccessLevel(content, id) {
  const access = content?.contentAccess?.[id];
  return normalizedAccessLevel(access?.level || access || "free");
}

function homeItemIsLocked(item, content = readHomeContent()) {
  if (!item) return false;
  if (item.targetType === "none" || item.placeholder) return item.locked !== false;
  if (item.locked) return true;
  const target = item.contentId || item.target || "";
  if (!target) return true;
  return homeContentAccessLevel(content, target) !== "free";
}

function homeItemIsComingSoon(item) {
  if (!item) return false;
  if (item.comingSoon === false) return false;
  return Boolean(item.comingSoon || item.placeholder || item.targetType === "none");
}

function normalizeGatewayContentMode(mode) {
  return mode === "watch" || mode === "listen" ? mode : "discover";
}

function homeModeTokens(value) {
  return new Set(String(value || "discover").toLowerCase().split(/\s+/).filter(Boolean));
}

function homeResourceForItem(item) {
  const target = resolveContentTargetId(item?.contentId || item?.target || "");
  return resources.find((resource) => resource.id === target) || null;
}

function homeResourceMediaKind(resource, fallbackId = "") {
  const id = String(resource?.id || fallbackId || "").toLowerCase();
  const values = [
    resource?.primaryMedium,
    resource?.visualType,
    resource?.contentType,
    ...(Array.isArray(resource?.format) ? resource.format : [])
  ].map((value) => String(value || "").toLowerCase());
  if (id.startsWith("aud_") || values.some((value) => ["listen", "audio", "audiobook", "podcast"].includes(value))) return "audio";
  if (id.startsWith("mux_") || id.startsWith("vid_") || values.some((value) => ["watch", "video", "full_video", "short_clip", "documentary", "event_teaching"].includes(value))) return "video";
  return "other";
}

function homeItemMediaKind(item) {
  const target = item?.contentId || item?.target || "";
  return homeResourceMediaKind(homeResourceForItem(item), target);
}

function homeItemMatchesGatewayMode(item, shelf, mode = state.gatewayContentMode) {
  const currentMode = normalizeGatewayContentMode(mode);
  if (currentMode === "discover") return true;
  const itemModes = homeModeTokens(item?.mode || "");
  const shelfModes = homeModeTokens(shelf?.mode || "");
  if (itemModes.has(currentMode) || shelfModes.has(currentMode)) return true;
  if (item?.targetType === "none" || item?.placeholder || !(item?.target || item?.contentId)) return false;
  const mediaKind = homeItemMediaKind(item);
  if (currentMode === "watch") return mediaKind === "video";
  if (currentMode === "listen") return mediaKind === "audio";
  return true;
}

function homeResolvedItemDisplay(item) {
  const linkedResource = homeResourceForItem(item);
  const isPlaceholder = item?.targetType === "none" || item?.placeholder || !(item?.target || item?.contentId);
  const artwork = isPlaceholder
    ? (item?.artwork || "")
    : (item?.artworkOverride || item?.placementArtwork || item?.artwork || homeResourceArtwork(linkedResource) || "");
  const title = localizedField(item?.titleOverride, resourceTitle(linkedResource, localizedField(item?.alt, item?.id || "Untitled")));
  const copy = localizedField(item?.descriptionOverride, resourceSummary(linkedResource, localizedField(item?.description, "")));
  const alt = localizedField(item?.alt, resourceTitle(linkedResource, title));
  return { linkedResource, artwork, title, copy, alt };
}

function visibleHomeShelves(mode = state.gatewayContentMode) {
  const content = readHomeContent();
  const currentMode = normalizeGatewayContentMode(mode);
  const shelves = Array.isArray(content.shelves) ? content.shelves : [];
  return shelves.map((shelf, index) => ({
    shelf,
    index,
    items: (shelf.items || []).filter((item) => homeItemMatchesGatewayMode(item, shelf, currentMode))
  })).filter(({ items }) => currentMode === "discover" || items.length);
}

function homeShelfCardMarkup(item, shelf, content, options = {}) {
  const currentMode = normalizeGatewayContentMode(options.mode || state.gatewayContentMode);
  const mediaKind = homeItemMediaKind(item);
  const contentKind = mediaKind === "other" && currentMode === "watch" ? "video" : (mediaKind === "other" && currentMode === "listen" ? "audio" : mediaKind);
  const locked = homeItemIsLocked(item, content);
  const comingSoon = homeItemIsComingSoon(item);
  const shape = normalizeShelfCardShape(shelf.cardSize);
  const display = homeResolvedItemDisplay(item);
  const label = display.alt || item.id || "Open item";
  if (options.detail) {
    return `
      <button class="shelf-detail-card ${esc(shape)}${locked ? " locked" : ""}${comingSoon ? " coming-soon" : ""}" type="button" data-content-kind="${esc(contentKind)}" ${item.podcastSeriesId ? `data-open-browse-series="${esc(item.podcastSeriesId)}"` : homeActionAttributes(item)} aria-label="${esc(display.title || label)}">
        <span class="shelf-detail-art">
          ${display.artwork ? `<img src="${esc(display.artwork)}" alt="" loading="lazy" />` : shelfArtworkFallback(display.linkedResource, display.title)}
          ${comingSoon ? `<span class="home-card-overlay"><span>${esc(item.comingSoonLabel || homeCommonText("comingSoon", "Coming soon"))}</span></span>` : ""}
          ${locked ? contentLockBadgeMarkup() : ""}
        </span>
        <span class="shelf-detail-card-title">${esc(display.title)}</span>
        ${display.copy ? `<span class="shelf-detail-card-copy">${esc(display.copy)}</span>` : ""}
      </button>
    `;
  }
  return `
    <button class="weekly-media-card artwork-home-card artwork-card-${esc(shape)}${locked ? " is-content-locked" : ""}${comingSoon ? " is-coming-soon" : ""}" type="button" data-content-kind="${esc(contentKind)}" ${homeActionAttributes(item)} aria-label="${esc(label)}">
      <span class="home-card-art">
        ${display.artwork ? `<img src="${esc(display.artwork)}" alt="" loading="lazy" />` : shelfArtworkFallback(display.linkedResource, display.title)}
        ${comingSoon ? `<span class="home-card-overlay"><span>${esc(item.comingSoonLabel || homeCommonText("comingSoon", "Coming soon"))}</span></span>` : ""}
        ${locked ? contentLockBadgeMarkup() : ""}
      </span>
    </button>
  `;
}

function homeBrowseIcon(kind) {
  const icons = {
    shows: `<svg viewBox="0 0 32 32" aria-hidden="true" fill="none" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="8" width="20" height="14" rx="2"></rect><path d="M12 26h8"></path></svg>`,
    series: `<svg viewBox="0 0 32 32" aria-hidden="true" fill="none" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 10h8l3 3h11v11H5z"></path></svg>`,
    book: `<svg viewBox="0 0 32 32" aria-hidden="true" fill="currentColor"><path d="M10 6h12a2 2 0 0 1 2 2v18.5a1 1 0 0 1-1.45.9L16 23.65 9.45 27.4A1 1 0 0 1 8 26.5V8a2 2 0 0 1 2-2Z"></path></svg>`,
    article: `<svg viewBox="0 0 32 32" aria-hidden="true" fill="none" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 7h14v18H9z"></path><path d="M13 12h6M13 16h6M13 20h4"></path></svg>`,
    live: `<svg viewBox="0 0 32 32" aria-hidden="true" fill="none" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="11" width="18" height="13" rx="2"></rect><path d="m14 15 6 3-6 3z"></path><path d="M12 7h8"></path></svg>`,
    topic: `<svg viewBox="0 0 32 32" aria-hidden="true" fill="none" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M16 5v22M7 10h18M7 16h18M7 22h18"></path></svg>`,
    people: `<svg viewBox="0 0 32 32" aria-hidden="true" fill="none" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="11" r="4"></circle><circle cx="21" cy="13" r="3"></circle><path d="M5 25c1.4-4.2 3.7-6.2 7-6.2s5.6 2 7 6.2M18 20c2.8.2 4.8 1.9 6 5"></path></svg>`
  };
  return icons[kind] || icons.topic;
}

function homeBrowseRowMarkup(item) {
  const row = homeLocalizedBrowseSection(item);
  return `
    <button class="home-browse-row" type="button" data-open-browse-shelf="${esc(row.key)}">
      <span class="home-browse-row-icon">${homeBrowseIcon(row.icon)}</span>
      <span>
        <strong>${esc(row.title)}</strong>
        <span>${esc(row.copy)}</span>
      </span>
      <span>
        ${row.live ? `<span class="home-browse-live">${esc(homeCommonText("liveNow", "Live now"))}</span>` : ""}
        <span class="home-browse-arrow" aria-hidden="true">&rsaquo;</span>
      </span>
    </button>
  `;
}

function homeBrowseMarkup() {
  const content = readHomeContent();
  const rows = Array.isArray(content.browseSections) && content.browseSections.length
    ? content.browseSections
    : DEFAULT_HOME_CONTENT.browseSections;
  return `
    <section class="home-browse-section" data-home-mode="discover">
      <h2 class="home-browse-title">${esc(homeCommonText("browse", "Browse"))}</h2>
      <div class="home-browse-panel">
        ${rows.map(homeBrowseRowMarkup).join("")}
      </div>
    </section>
  `;
}

function normalizeShelfCardShape(shape) {
  return ["wide", "square", "poster", "topic-list"].includes(shape) ? shape : "wide";
}

function homeSupporterBandMarkup(band) {
  if (!band || band.enabled === false) return "";
  const benefits = Array.isArray(band.benefits) ? band.benefits.map((item) => String(item || "").trim()).filter(Boolean) : [];
  const ctaTarget = band.ctaTarget || "libraryView";
  const translated = HOME_LANGUAGE_OVERRIDES[state.language]?.supporterBand || {};
  return `
    <section class="home-supporter-band" data-home-mode="discover">
      <div class="home-supporter-copy">
        ${(translated.eyebrow || band.eyebrow) ? `<span class="home-supporter-eyebrow">${esc(translated.eyebrow || band.eyebrow)}</span>` : ""}
        <h2>${esc(translated.title || band.title || "Go deeper")}</h2>
        ${(translated.copy || band.copy) ? `<p>${esc(translated.copy || band.copy)}</p>` : ""}
      </div>
      ${benefits.length ? `<div class="home-supporter-benefits">${benefits.map((item) => `<span class="home-supporter-benefit">${esc(homeLocalizedSupporterBenefit(item))}</span>`).join("")}</div>` : ""}
      <div class="home-supporter-actions">
        ${(translated.cta || band.cta) ? `<button class="home-supporter-cta" type="button" data-nav-jump="${esc(ctaTarget)}">${esc(translated.cta || band.cta)}</button>` : ""}
        ${(translated.secondary || band.secondary) ? `<span class="home-supporter-secondary">${esc(translated.secondary || band.secondary)}</span>` : ""}
      </div>
    </section>
  `;
}

function homeResourceArtwork(resource) {
  if (!resource) return "";
  if (resource.posterUrl) return resource.posterUrl;
  if (resource.thumbnailUrl) return resource.thumbnailUrl;
  if (resource.artwork) return resource.artwork;
  if (resource.videoHost?.thumbnailUrl && !String(resource.videoHost.thumbnailUrl).startsWith("https://image.mux.com/")) {
    return resource.videoHost.thumbnailUrl;
  }
  if (resource.videoHost?.thumbnail && !String(resource.videoHost.thumbnail).startsWith("https://image.mux.com/")) {
    return resource.videoHost.thumbnail;
  }
  if (resource.contentType === "podcast" || /podcast/i.test(resource.seriesId || "")) return "assets/one-gospel-podcast-cover.png";
  return "";
}

function homeResourceToShelfItem(resource) {
  return {
    id: `browse_${resource.id}`,
    artwork: homeResourceArtwork(resource),
    targetType: "discover",
    target: resource.id,
    contentId: resource.id,
    alt: resourceTitle(resource, "Content"),
    description: resourceSummary(resource, "")
  };
}

function homeBrowseSlug(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function homeBrowseTopicFilter(title) {
  return String(title || "")
    .replace(/^the\s+/i, "")
    .replace(/&/g, " ")
    .toLowerCase();
}

function homeBrowseResourceText(resource) {
  return [
    resourceTitle(resource),
    resourceSummary(resource),
    localizedField(resource?.topic, ""),
    localizedField(resource?.stage, ""),
    resourceSpeakerName(resource),
    resource?.speakerId,
    resource?.contentType,
    resource?.seriesId,
    ...(localizedArray(resource?.topics)),
    ...(localizedArray(resource?.questions)),
    ...(Array.isArray(resource?.format) ? resource.format : [])
  ].join(" ").toLowerCase();
}

function homeBrowseFilterMatches(resource, filter) {
  const text = homeBrowseResourceText(resource);
  const cleanFilter = String(filter || "").toLowerCase().trim();
  if (!cleanFilter) return false;
  const phraseTerms = cleanFilter.split(/[,;\n]+/).map((term) => term.trim()).filter(Boolean);
  const wordTerms = cleanFilter.split(/\s+/).map((term) => term.trim()).filter((term) => term.length > 2);
  return [...phraseTerms, ...wordTerms].some((term) => text.includes(term));
}

function homeBrowseTopicThemes(section) {
  const configured = Array.isArray(section?.topicThemes) && section.topicThemes.length
    ? section.topicThemes
    : BROWSE_TOPIC_THEMES;
  const generated = resources.flatMap((resource) => localizedArray(resource?.topics))
    .map((theme) => String(theme || "").trim())
    .filter(Boolean);
  const seen = new Set();
  return [...configured, ...generated].map((theme) => String(theme || "").trim()).filter((theme) => {
    const key = homeBrowseSlug(theme);
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function homeBrowseTopicCardMarkup(theme) {
  const slug = homeBrowseSlug(theme);
  const label = homeLocalizedTopicTheme(theme);
  return `
    <button class="browse-topic-card" type="button" data-open-browse-topic="${esc(slug)}">
      <span class="browse-topic-icon">${homeBrowseIcon("topic")}</span>
      <span>
        <strong>${esc(label)}</strong>
        <span>${esc(homeCommonText("browseTopic", "Browse topic"))}</span>
      </span>
      <span class="browse-topic-arrow" aria-hidden="true">&rsaquo;</span>
    </button>
  `;
}

function homeBrowsePeople() {
  const seen = new Set();
  return resources.map((resource) => {
    const name = resourceSpeakerName(resource);
    return {
      id: resource?.speakerId || resource?.speakerOrAuthor?.id || homeBrowseSlug(name),
      name,
      role: localizedField(resource?.speakerOrAuthor?.role, "")
    };
  }).filter((person) => {
    const key = homeBrowseSlug(person.name || person.id);
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  }).sort((a, b) => a.name.localeCompare(b.name));
}

function homeBrowsePersonCardMarkup(person) {
  const name = person?.name || "Person";
  const slug = homeBrowseSlug(person?.id || name);
  return `
    <button class="browse-topic-card" type="button" data-open-browse-person="${esc(slug)}">
      <span class="browse-topic-icon">${homeBrowseIcon("people")}</span>
      <span>
        <strong>${esc(name)}</strong>
        <span>${esc(person?.role ? labelize(person.role) : homeCommonText("browsePerson", "Browse person"))}</span>
      </span>
      <span class="browse-topic-arrow" aria-hidden="true">&rsaquo;</span>
    </button>
  `;
}

function homeBrowseResourceMatches(resource, key) {
  const content = readHomeContent();
  const section = (content.browseSections || []).find((item) => item.key === key);
  if (Array.isArray(section?.contentIds) && section.contentIds.length) {
    return section.contentIds.includes(resource?.id);
  }
  if (key === "podcast-shows" || key === "podcast-series") return resourceIsPodcast(resource);
  const filter = String(section?.filter || "").toLowerCase().trim();
  if (filter) {
    return homeBrowseFilterMatches(resource, filter);
  }
  const text = homeBrowseResourceText(resource);
  const mediaKind = homeResourceMediaKind(resource, resource?.id);
  if (key === "topics") return text.includes("jesus") || text.includes("gospel") || text.includes("salvation") || text.includes("disciple") || text.includes("foundation") || text.includes("prayer") || text.includes("scripture") || text.includes("bible") || text.includes("healing") || text.includes("hope") || text.includes("restore") || text.includes("anxiety") || text.includes("peace") || text.includes("anger") || text.includes("lust") || text.includes("politic") || text.includes("grace") || text.includes("freedom");
  if (key === "people") return text.includes("johan") || text.includes("duane") || text.includes("brenda") || text.includes("one in him") || text.includes("oneinhim_team") || text.includes("speaker") || text.includes("author") || text.includes("pastor") || text.includes("teacher");
  if (key === "livestream") return text.includes("live") || text.includes("event");
  return false;
}

function resourceIsPodcast(resource) {
  return resource?.contentType === "podcast" || resource?.isPodcast === true || Boolean(resource?.podcastShowId) || /(^|_)podcast($|_)/i.test(resource?.seriesId || "");
}

function podcastShowItems() {
  const shows = new Map();
  resources.filter(resourceIsPodcast).forEach(resource => {
    const id = resource.podcastShowId || resource.seriesId || resource.id;
    const show = shows.get(id) || { resource, count: 0 };
    show.count++; shows.set(id, show);
  });
  return [...shows].map(([id, { resource, count }]) => ({
    ...homeResourceToShelfItem(resource),
    podcastSeriesId: resource.seriesId || "",
    titleOverride: resource.seriesTitle || (id === "one_gospel_podcast" ? "One Gospel" : labelize(id)),
    descriptionOverride: state.language === "nl" ? `${count} aflevering${count === 1 ? "" : "en"} · ${resourceSpeakerName(resource)}` : `${count} episode${count === 1 ? "" : "s"} · ${resourceSpeakerName(resource)}`
  }));
}

function shelfArtworkFallback(resource, title) {
  const label = resource?.format?.includes("watch") ? (state.language === "nl" ? "KIJKEN" : "WATCH") : resource?.format?.includes("listen") ? (state.language === "nl" ? "LUISTEREN" : "LISTEN") : (state.language === "nl" ? "LEZEN" : "READ");
  return `<span class="shelf-art-placeholder" aria-hidden="true"><span>${esc(label)}</span><strong>${esc(title)}</strong><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h6a3 3 0 0 1 2 1 3 3 0 0 1 2-1h6v15h-6a3 3 0 0 0-2 1 3 3 0 0 0-2-1H4zM12 5v15"/></svg></span>`;
}

function homeBrowseShelfForKey(key) {
  const content = readHomeContent();
  const customSection = (content.browseSections || []).find((item) => item.key === key);
  const config = homeLocalizedBrowseSection(customSection || {
    "podcast-shows": { title: "Podcast Shows", cardSize: "wide" },
    "podcast-series": { title: "Podcast Series", cardSize: "wide" },
    topics: { title: "Topics", cardSize: "wide" },
    people: { title: "People", cardSize: "wide" },
    livestream: { title: "Livestream Schedule", cardSize: "wide" }
  }[key] || { title: "Browse", cardSize: "wide" });
  if (key === "podcast-shows" || key === "podcast-series") {
    return { shelf: { id: `browse_${key}`, title: config.detailTitle || config.title, mode: "listen", cardSize: "wide", podcastShows: true }, index: -1, items: podcastShowItems() };
  }
  if (key === "topics") {
    return {
      shelf: { id: "browse_topics", title: config.detailTitle || config.title || homeLocalized("browseSections", "topics", "title", "Topics"), mode: "discover", cardSize: "topic-list" },
      index: -1,
      topicThemes: homeBrowseTopicThemes(config),
      items: []
    };
  }
  if (key === "people") {
    return {
      shelf: { id: "browse_people", title: config.detailTitle || config.title || homeLocalized("browseSections", "people", "title", "People"), mode: "discover", cardSize: "topic-list" },
      index: -1,
      people: homeBrowsePeople(),
      items: []
    };
  }
  if (key.startsWith("topic:")) {
    const topicSection = (content.browseSections || []).find((item) => item.key === "topics");
    const themes = homeBrowseTopicThemes(topicSection);
    const slug = key.slice("topic:".length);
    const rawTitle = themes.find((theme) => homeBrowseSlug(theme) === slug) || "Topic";
    const title = homeLocalizedTopicTheme(rawTitle);
    const filter = homeBrowseTopicFilter(rawTitle);
    const seen = new Set();
    const items = resources
      .filter((resource) => homeBrowseFilterMatches(resource, filter))
      .map(homeResourceToShelfItem)
      .filter((item) => {
        const id = item.contentId || item.target || item.id;
        if (seen.has(id)) return false;
        seen.add(id);
        return true;
      });
    return {
      shelf: { id: `browse_topic_${slug}`, title, mode: "discover", cardSize: "wide" },
      index: -1,
      items
    };
  }
  if (key.startsWith("person:")) {
    const slug = key.slice("person:".length);
    const person = homeBrowsePeople().find((item) => homeBrowseSlug(item.id || item.name) === slug || homeBrowseSlug(item.name) === slug);
    const title = person?.name || "Person";
    const items = resources
      .filter((resource) => {
        const speaker = homeBrowseSlug(resourceSpeakerName(resource));
        const id = homeBrowseSlug(resource?.speakerId || resource?.speakerOrAuthor?.id || "");
        return speaker === slug || id === slug;
      })
      .map(homeResourceToShelfItem);
    return {
      shelf: { id: `browse_person_${slug}`, title, mode: "discover", cardSize: "wide" },
      index: -1,
      items
    };
  }
  if (key.startsWith("series:")) {
    const seriesId = key.slice("series:".length);
    const series = homeBrowseSeries().find((item) => item.id === seriesId);
    const items = resources
      .filter((resource) => String(resource?.seriesId || "") === seriesId)
      .map(homeResourceToShelfItem);
    return {
      shelf: { id: `browse_series_${seriesId}`, title: series?.title || labelize(seriesId), mode: "discover", cardSize: "wide" },
      index: -1,
      items
    };
  }
  const seen = new Set();
  const items = resources
    .filter((resource) => homeBrowseResourceMatches(resource, key))
    .map(homeResourceToShelfItem)
    .filter((item) => {
      const id = item.contentId || item.target || item.id;
      if (seen.has(id)) return false;
      seen.add(id);
      return true;
    });
  return {
    shelf: { id: `browse_${key}`, title: config.detailTitle || config.title, mode: "discover", cardSize: normalizeShelfCardShape(config.cardSize) },
    index: -1,
    items
  };
}

function searchFilterMatchesResource(resource, filter) {
  const mediaKind = homeResourceMediaKind(resource, resource?.id);
  const formats = Array.isArray(resource?.format) ? resource.format.map((item) => String(item).toLowerCase()) : [];
  if (filter === "watch") return mediaKind === "video";
  if (filter === "listen") return mediaKind === "audio";
  if (filter === "read") return resource?.primaryMedium === "read" || formats.includes("read") || resource?.contentType === "study_guide";
  return true;
}

function searchQueryMatchesText(text, query) {
  const cleanQuery = String(query || "").trim().toLowerCase();
  if (!cleanQuery) return true;
  return cleanQuery.split(/\s+/).filter(Boolean).every((term) => String(text || "").toLowerCase().includes(term));
}

function homeBrowseSeries() {
  const seen = new Map();
  resources.forEach((resource) => {
    const id = String(resource?.seriesId || "").trim();
    if (!id) return;
    const title = localizedField(resource?.seriesTitle, labelize(id));
    const current = seen.get(id) || { id, title, count: 0 };
    current.count += 1;
    seen.set(id, current);
  });
  return [...seen.values()].sort((a, b) => a.title.localeCompare(b.title));
}

function homeBrowseSeriesCardMarkup(series) {
  return `
    <button class="browse-topic-card" type="button" data-open-browse-series="${esc(series.id)}">
      <span class="browse-topic-icon">${homeBrowseIcon("series")}</span>
      <span>
        <strong>${esc(series.title)}</strong>
        <span>${esc(`${series.count} item${series.count === 1 ? "" : "s"}`)}</span>
      </span>
      <span class="browse-topic-arrow" aria-hidden="true">&rsaquo;</span>
    </button>
  `;
}

function searchSpecialResults(filter, query) {
  if (filter === "topics") {
    const topicSection = (readHomeContent().browseSections || []).find((item) => item.key === "topics");
    return homeBrowseTopicThemes(topicSection)
      .filter((theme) => searchQueryMatchesText(`${theme} ${homeLocalizedTopicTheme(theme)}`, query))
      .map(homeBrowseTopicCardMarkup)
      .join("");
  }
  if (filter === "people") {
    return homeBrowsePeople()
      .filter((person) => searchQueryMatchesText(`${person.name} ${person.role || ""}`, query))
      .map(homeBrowsePersonCardMarkup)
      .join("");
  }
  if (filter === "series") {
    return homeBrowseSeries()
      .filter((series) => searchQueryMatchesText(`${series.id} ${series.title}`, query))
      .map(homeBrowseSeriesCardMarkup)
      .join("");
  }
  return "";
}

function renderShelfSearchResults() {
  const panel = document.querySelector(".shelf-search-panel");
  const results = document.getElementById("shelfSearchResults");
  const empty = panel?.querySelector(".shelf-search-empty");
  if (!results) return;
  const filter = state.searchFilter || "all";
  const query = state.searchQuery || "";
  document.querySelectorAll("[data-search-filter]").forEach((button) => {
    const selected = button.dataset.searchFilter === filter;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  if (["topics", "people", "series"].includes(filter)) {
    results.className = "shelf-search-results topic-list";
    results.innerHTML = searchSpecialResults(filter, query);
  } else {
    const content = readHomeContent();
    const shelf = { id: "search_results", title: "Search", mode: "discover", cardSize: "wide" };
    const items = resources
      .filter((resource) => searchFilterMatchesResource(resource, filter))
      .filter((resource) => searchQueryMatchesText(homeBrowseResourceText(resource), query))
      .map(homeResourceToShelfItem);
    results.className = "shelf-search-results wide";
    results.innerHTML = items.map((item) => homeShelfCardMarkup(item, shelf, content, {
      mode: state.gatewayContentMode,
      detail: true
    })).join("");
  }
  const hasResults = Boolean(results.innerHTML.trim());
  if (empty) empty.hidden = hasResults;
  results.hidden = !hasResults;
  results.querySelectorAll("[data-discover-open]").forEach((button) => {
    button.onclick = () => setDiscoveryResource(button.dataset.discoverOpen);
  });
  results.querySelectorAll("[data-open-browse-topic]").forEach((button) => {
    button.onclick = () => openBrowseShelf(`topic:${button.dataset.openBrowseTopic}`);
  });
  results.querySelectorAll("[data-open-browse-person]").forEach((button) => {
    button.onclick = () => openBrowseShelf(`person:${button.dataset.openBrowsePerson}`);
  });
  results.querySelectorAll("[data-open-browse-series]").forEach((button) => {
    button.onclick = () => openBrowseShelf(`series:${button.dataset.openBrowseSeries}`);
  });
}

function renderArtworkHome() {
  const content = readHomeContent();
  const currentMode = normalizeGatewayContentMode(state.gatewayContentMode);
  const heroRoot = document.querySelector(".gateway-landing.home-hero");
  const shelvesRoot = document.querySelector(".gateway-discover");
  if (heroRoot && Array.isArray(content.heroSlides)) {
    heroRoot.innerHTML = `
      ${content.heroSlides.map((slide, index) => {
        const eyebrow = homeLocalized("heroSlides", slide.id, "eyebrow", slide.eyebrow);
        const title = homeLocalized("heroSlides", slide.id, "title", slide.title);
        const description = homeLocalized("heroSlides", slide.id, "description", slide.description);
        const cta = homeLocalized("heroSlides", slide.id, "cta", slide.cta);
        return `
        <button class="gateway-slide home-hero-slide artwork-home-slide${index === 0 ? " active" : ""}" type="button" data-gateway-hero-slide="${index}" data-hero-mode="${esc(slide.mode || "discover")}" ${homeHeroArtworkStyle(slide)} ${homeActionAttributes(slide)} aria-label="${esc(slide.alt || `Home slide ${index + 1}`)}">
          <picture class="home-artwork-picture">
            <source media="(min-width: 761px)" srcset="${esc(slide.desktopArtwork || slide.mobileArtwork || slide.artwork || "")}" />
            <img class="home-artwork-image" src="${esc(slide.mobileArtwork || slide.artwork || slide.desktopArtwork || "")}" alt="${esc(slide.alt || "")}" loading="${index === 0 ? "eager" : "lazy"}" />
          </picture>
          <span class="home-hero-copy">
            ${eyebrow ? `<span class="home-hero-eyebrow">${esc(eyebrow)}</span>` : ""}
            ${title ? `<span class="home-hero-title">${esc(title)}</span>` : ""}
            ${description ? `<span class="home-hero-description">${esc(description)}</span>` : ""}
            ${cta ? `<span class="home-hero-cta">${esc(cta)}</span>` : ""}
          </span>
        </button>
      `;
      }).join("")}
      <div class="gateway-hero-controls" aria-label="Hero slides">
        <div class="gateway-hero-dots">
          ${content.heroSlides.map((_, index) => `<button class="gateway-hero-dot${index === 0 ? " active" : ""}" type="button" data-hero-dot="${index}" aria-label="Show hero slide ${index + 1}"></button>`).join("")}
        </div>
      </div>
    `;
  }
  if (shelvesRoot && Array.isArray(content.shelves)) {
    const shelfMarkup = visibleHomeShelves(currentMode).map(({ shelf, items, index }) => {
      const shelfMode = currentMode === "discover" ? (shelf.mode || "discover") : `${shelf.mode || "discover"} ${currentMode}`;
      const shelfTitle = homeLocalized("shelves", shelf.id, "title", shelf.title || homeCommonText("featured", "Featured"));
      const shelfMarkup = `
      <section class="discovery-band dark artwork-home-shelf" data-home-mode="${esc(shelfMode)}">
        <div class="discovery-section-head">
          <h2>${esc(shelfTitle)}</h2>
          <button class="home-shelf-see-all" type="button" data-open-shelf="${index}">${esc(homeCommonText("seeAll", "See all"))}</button>
        </div>
        <div class="weekly-media-shelf artwork-card-shelf artwork-card-shelf-${esc(normalizeShelfCardShape(shelf.cardSize))}" aria-label="${esc(shelfTitle)}">
          ${items.map((item) => homeShelfCardMarkup(item, shelf, content, { mode: currentMode })).join("")}
        </div>
      </section>
    `;
      const shouldInsertBrowse = currentMode === "discover" && (shelf.id === "watch_this_week" || String(shelf.title || "").toLowerCase() === "conferences");
      return `${shelfMarkup}${shouldInsertBrowse ? homeBrowseMarkup() : ""}`;
    }).join("");
    shelvesRoot.innerHTML = `${shelfMarkup}${currentMode === "discover" ? homeSupporterBandMarkup(content.supporterBand) : ""}`;
  }
}

function renderShelfDetail() {
  const content = readHomeContent();
  const browseShelf = state.activeBrowseShelfKey ? homeBrowseShelfForKey(state.activeBrowseShelfKey) : null;
  const shelves = browseShelf ? [browseShelf] : visibleHomeShelves(state.gatewayContentMode);
  if (!shelves.length) {
    if (els.shelfDetailTitle) els.shelfDetailTitle.textContent = "Shelf";
    if (els.shelfDetailGrid) els.shelfDetailGrid.innerHTML = "";
    return;
  }
  const selected = browseShelf || shelves.find(({ index }) => index === state.activeShelfIndex) || shelves[0];
  if (!browseShelf) state.activeShelfIndex = selected.index;
  if (els.shelfDetailTitle) els.shelfDetailTitle.textContent = selected.shelf.title || "Shelf";
  if (els.shelfDetailGrid) {
    const shape = normalizeShelfCardShape(selected.shelf.cardSize);
    els.shelfDetailGrid.className = `shelf-detail-grid ${shape}${selected.shelf.podcastShows ? " podcast-show-grid" : ""}`;
    if (shape === "topic-list") {
      els.shelfDetailGrid.innerHTML = selected.people
        ? selected.people.map(homeBrowsePersonCardMarkup).join("")
        : (selected.topicThemes || []).map(homeBrowseTopicCardMarkup).join("");
    } else {
      els.shelfDetailGrid.innerHTML = selected.items.map((item) => homeShelfCardMarkup(item, selected.shelf, content, {
        mode: state.gatewayContentMode,
        detail: true
      })).join("") || `
        <div class="shelf-detail-empty">
          <strong>${esc(homeCommonText("comingSoon", "Coming soon"))}</strong>
          <span>${esc("No content has been added here yet.")}</span>
        </div>
      `;
    }
    bindShelfDetailActions();
  }
}

function bindShelfDetailActions() {
  const root = els.shelfDetailGrid;
  if (!root) return;
  root.querySelectorAll("[data-discover-open]").forEach((button) => {
    button.onclick = () => setDiscoveryResource(button.dataset.discoverOpen);
  });
  root.querySelectorAll("[data-open-browse-topic]").forEach((button) => {
    button.onclick = () => openBrowseShelf(`topic:${button.dataset.openBrowseTopic}`);
  });
  root.querySelectorAll("[data-open-browse-person]").forEach((button) => {
    button.onclick = () => openBrowseShelf(`person:${button.dataset.openBrowsePerson}`);
  });
  root.querySelectorAll("[data-open-browse-series]").forEach((button) => {
    button.onclick = () => openBrowseShelf(`series:${button.dataset.openBrowseSeries}`);
  });
  root.querySelectorAll("[data-nav-jump]").forEach((button) => {
    button.onclick = () => {
      const target = button.dataset.navJump;
      const linkedResource = button.dataset.linkedResource;
      if (linkedResource) state.activeResourceId = linkedResource;
      if (target) setView(target);
    };
  });
}

function labelize(value) {
  return String(value || "")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function readableTextColor(color) {
  const hex = String(color || "").trim().replace("#", "");
  const fullHex = hex.length === 3
    ? hex.split("").map((char) => char + char).join("")
    : hex;
  if (!/^[0-9a-f]{6}$/i.test(fullHex)) return "#fff";
  const [red, green, blue] = [0, 2, 4].map((start) => parseInt(fullHex.slice(start, start + 2), 16) / 255);
  const luminance = [red, green, blue].map((channel) =>
    channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4
  );
  return (0.2126 * luminance[0]) + (0.7152 * luminance[1]) + (0.0722 * luminance[2]) > 0.58 ? "#090a0a" : "#fff";
}

function compactText(value, limit = 190) {
  const text = String(value || "").replace(/\s+/g, " ").trim();
  if (text.length <= limit) return text;
  const clipped = text.slice(0, limit).replace(/\s+\S*$/, "");
  return `${clipped}...`;
}

function t(key) {
  return (i18n[state.language] && i18n[state.language][key]) || i18n.en[key] || key;
}

function currentViewText(viewId) {
  return (viewText[state.language] && viewText[state.language][viewId])
    || viewText.en[viewId]
    || viewText.en.discoverView
    || ["One In Him", ""];
}

function activeStage() {
  return pathOptions.find((stage) => stage.choice === state.activeStageId) || pathOptions[0];
}

function stageForChoice(choice) {
  return pathOptions.find((stage) => stage.choice === choice) || activeStage();
}

function pathNodeKey(kind, stage, groupIndex) {
  const stageChoice = stage && stage.choice ? stage.choice : activeStage().choice;
  return `${kind}:${stageChoice}:${groupIndex || 0}`;
}

function parsePathNodeKey(key) {
  const parts = String(key || "").split(":");
  if (parts.length >= 3) {
    return {
      kind: parts[0],
      stageChoice: parts[1],
      groupIndex: Number(parts[2]) || 0
    };
  }
  return {
    kind: parts[0] || "content",
    stageChoice: activeStage().choice,
    groupIndex: Number(parts[1]) || 0
  };
}

function parseStageGroupTarget(value) {
  const parsed = parsePathNodeKey(`content:${value || ""}`);
  if (String(value || "").includes(":")) return parsed;
  return {
    kind: "content",
    stageChoice: activeStage().choice,
    groupIndex: Number(value) || 0
  };
}

function gatewayHeroSlideAllowed(slide) {
  if (!slide) return false;
  const mode = normalizeGatewayContentMode(state.gatewayContentMode);
  const modes = String(slide.dataset.heroMode || "discover").split(/\s+/).filter(Boolean);
  if (mode === "watch") return modes.includes("watch");
  if (mode === "listen") return modes.includes("listen");
  return modes.includes("discover");
}

function normalizeGatewayHeroIndex(index, slides = Array.from(document.querySelectorAll("[data-gateway-hero-slide]"))) {
  if (!slides.length) return 0;
  const startIndex = ((Number(index) || 0) + slides.length) % slides.length;
  if (gatewayHeroSlideAllowed(slides[startIndex])) return startIndex;
  for (let offset = 1; offset <= slides.length; offset += 1) {
    const nextIndex = (startIndex + offset) % slides.length;
    if (gatewayHeroSlideAllowed(slides[nextIndex])) return nextIndex;
  }
  return startIndex;
}

function renderGatewayHeroSlider() {
  const slides = Array.from(document.querySelectorAll("[data-gateway-hero-slide]"));
  if (!slides.length) return;
  const activeIndex = normalizeGatewayHeroIndex(state.gatewayHeroIndex, slides);
  state.gatewayHeroIndex = activeIndex;
  slides.forEach((slide, index) => {
    const isActive = index === activeIndex && gatewayHeroSlideAllowed(slide);
    slide.classList.toggle("active", isActive);
    slide.setAttribute("aria-hidden", isActive ? "false" : "true");
    slide.toggleAttribute("inert", !isActive);
  });
  const activeSlide = slides[activeIndex];
  const isDocumentaryHero = activeSlide?.classList.contains("documentary-hero");
  const isOneBasicsHero = activeSlide?.classList.contains("one-basics-hero");
  const isArtworkHero = activeSlide?.classList.contains("artwork-home-slide");
  const isDarkHero = Boolean(isDocumentaryHero || isOneBasicsHero || isArtworkHero);
  document.body.classList.toggle("documentary-hero-active", isDocumentaryHero);
  document.body.classList.toggle("one-basics-hero-active", isOneBasicsHero);
  document.body.classList.toggle("dark-gateway-hero-active", isDarkHero);
  document.documentElement.classList.toggle("dark-gateway-hero-active", isDarkHero);
  setGatewayChromeColor(isDarkHero);
  updateGatewayNavScrollState();
  document.querySelectorAll("[data-hero-dot]").forEach((dot) => {
    const dotIndex = Number(dot.dataset.heroDot);
    const isAllowed = gatewayHeroSlideAllowed(slides[dotIndex]);
    dot.hidden = !isAllowed;
    dot.classList.toggle("active", isAllowed && dotIndex === activeIndex);
  });
}

function setGatewayChromeColor(isDarkHero) {
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  const statusMeta = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
  const mobileAppChrome = window.innerWidth <= 760 && !document.body.classList.contains("app-chrome-hidden");
  const chromeScrolled = document.body.classList.contains("gateway-nav-scrolled") || window.scrollY > 18;
  const forceLightMobileChrome = mobileAppChrome && document.body.classList.contains("journey-mode");
  const forceDarkMobileChrome = mobileAppChrome && ["library-mode", "shelf-detail-mode", "discovery-detail-mode", "feed-mode"].some(name => document.body.classList.contains(name));
  const useDarkChrome = !forceLightMobileChrome && (forceDarkMobileChrome || isDarkHero || (mobileAppChrome && chromeScrolled));
  if (themeMeta) themeMeta.setAttribute("content", useDarkChrome ? "#090a0a" : "#ffffff");
  if (statusMeta) statusMeta.setAttribute("content", useDarkChrome ? "black-translucent" : "default");
  document.documentElement.classList.toggle("dark-app-chrome-active", useDarkChrome);
  document.body.classList.toggle("dark-app-chrome-active", useDarkChrome);
}

function updateGatewayNavScrollState() {
  const shouldShowBackground = !document.body.classList.contains("app-chrome-hidden") && window.scrollY > 18;
  document.body.classList.toggle("gateway-nav-scrolled", shouldShowBackground);
  document.documentElement.classList.toggle("gateway-nav-scrolled", shouldShowBackground);
  setGatewayChromeColor(document.body.classList.contains("dark-gateway-hero-active"));
}

function scrollGatewayToTop() {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  updateGatewayNavScrollState();
}

function setGatewayHero(index, options = {}) {
  const slides = Array.from(document.querySelectorAll("[data-gateway-hero-slide]"));
  if (!slides.length) return;
  if (options.scrollToHeroTop && window.innerWidth <= 760 && state.activeView === "gatewayView") {
    scrollGatewayToTop();
  }
  state.gatewayHeroIndex = normalizeGatewayHeroIndex(index, slides);
  renderGatewayHeroSlider();
  updateGatewayNavScrollState();
  if (options.restartAutoplay !== false) scheduleGatewayHeroAutoplay();
}

function stopGatewayHeroAutoplay() {
  if (!gatewayHeroAutoplayTimer) return;
  window.clearTimeout(gatewayHeroAutoplayTimer);
  gatewayHeroAutoplayTimer = null;
}

function scheduleGatewayHeroAutoplay() {
  stopGatewayHeroAutoplay();
  const slides = document.querySelectorAll("[data-gateway-hero-slide]");
  if (state.activeView !== "gatewayView" || document.hidden || slides.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches || document.querySelector(".home-hero:focus-within, .home-hero:hover")) return;
  gatewayHeroAutoplayTimer = window.setTimeout(() => {
    gatewayHeroAutoplayTimer = null;
    if (state.activeView !== "gatewayView" || document.hidden) return;
    setGatewayHero(state.gatewayHeroIndex + 1);
  }, GATEWAY_HERO_AUTOPLAY_MS);
}

function resetGatewayHeroSwipe() {
  const hero = document.querySelector(".gateway-landing.home-hero");
  if (hero) {
    hero.classList.remove("is-dragging");
    hero.style.removeProperty("--gateway-hero-drag-x");
  }
  gatewayHeroSwipe.active = false;
  gatewayHeroSwipe.pointerId = null;
  gatewayHeroSwipe.startX = 0;
  gatewayHeroSwipe.startY = 0;
  gatewayHeroSwipe.lastX = 0;
  gatewayHeroSwipe.lastY = 0;
  gatewayHeroSwipe.moved = false;
}

function heroSwipeControlTarget(target) {
  return target instanceof Element && Boolean(target.closest("[data-hero-dot], .gateway-hero-controls, input, textarea, select"));
}

function gatewayHeroEventPoint(event) {
  const touch = event.touches?.[0] || event.changedTouches?.[0];
  if (touch) return { x: touch.clientX, y: touch.clientY };
  return { x: event.clientX, y: event.clientY };
}

function handleGatewayHeroSwipeStart(event) {
  if (event.button !== undefined && event.button !== 0) return;
  if (event.type?.startsWith("touch")) {
    gatewayHeroSwipe.lastTouchAt = Date.now();
  } else if (Date.now() - gatewayHeroSwipe.lastTouchAt < 700) {
    return;
  }
  if (heroSwipeControlTarget(event.target)) return;
  const point = gatewayHeroEventPoint(event);
  if (!Number.isFinite(point.x) || !Number.isFinite(point.y)) return;
  gatewayHeroSwipe.active = true;
  gatewayHeroSwipe.pointerId = event.pointerId ?? null;
  gatewayHeroSwipe.startX = point.x;
  gatewayHeroSwipe.startY = point.y;
  gatewayHeroSwipe.lastX = point.x;
  gatewayHeroSwipe.lastY = point.y;
  gatewayHeroSwipe.moved = false;
  event.currentTarget?.classList.add("is-dragging");
  event.currentTarget?.style.setProperty("--gateway-hero-drag-x", "0px");
  stopGatewayHeroAutoplay();
  if (event.currentTarget?.setPointerCapture && gatewayHeroSwipe.pointerId !== null) {
    try {
      event.currentTarget.setPointerCapture(gatewayHeroSwipe.pointerId);
    } catch (_) {
      // Pointer capture is optional; the swipe still works without it.
    }
  }
}

function handleGatewayHeroSwipeMove(event) {
  if (!gatewayHeroSwipe.active) return;
  if (gatewayHeroSwipe.pointerId !== null && event.pointerId !== gatewayHeroSwipe.pointerId) return;
  const point = gatewayHeroEventPoint(event);
  if (!Number.isFinite(point.x) || !Number.isFinite(point.y)) return;
  gatewayHeroSwipe.lastX = point.x;
  gatewayHeroSwipe.lastY = point.y;
  const deltaX = gatewayHeroSwipe.lastX - gatewayHeroSwipe.startX;
  const deltaY = gatewayHeroSwipe.lastY - gatewayHeroSwipe.startY;
  if (Math.hypot(deltaX, deltaY) > GATEWAY_HERO_TAP_MAX_PX) {
    gatewayHeroSwipe.moved = true;
  }
  if (Math.abs(deltaX) > 2 && Math.abs(deltaX) > Math.abs(deltaY) * GATEWAY_HERO_SWIPE_AXIS_RATIO) {
    event.preventDefault?.();
    const width = event.currentTarget?.clientWidth || window.innerWidth || 390;
    const clampedDelta = Math.max(width * -0.28, Math.min(width * 0.28, deltaX));
    event.currentTarget?.style.setProperty("--gateway-hero-drag-x", `${Math.round(clampedDelta)}px`);
  }
}

function handleGatewayHeroSwipeEnd(event) {
  if (!gatewayHeroSwipe.active) return;
  if (event && gatewayHeroSwipe.pointerId !== null && event.pointerId !== gatewayHeroSwipe.pointerId) return;
  const deltaX = gatewayHeroSwipe.lastX - gatewayHeroSwipe.startX;
  const deltaY = gatewayHeroSwipe.lastY - gatewayHeroSwipe.startY;
  const movedBeyondTap = gatewayHeroSwipe.moved || Math.hypot(deltaX, deltaY) > GATEWAY_HERO_TAP_MAX_PX;
  resetGatewayHeroSwipe();
  if (Math.abs(deltaX) < GATEWAY_HERO_SWIPE_MIN_PX || Math.abs(deltaX) < Math.abs(deltaY) * GATEWAY_HERO_SWIPE_AXIS_RATIO) {
    if (movedBeyondTap) {
      gatewayHeroSwipe.suppressClick = true;
      window.setTimeout(() => {
        gatewayHeroSwipe.suppressClick = false;
      }, 450);
    }
    return;
  }
  gatewayHeroSwipe.suppressClick = true;
  window.setTimeout(() => {
    gatewayHeroSwipe.suppressClick = false;
  }, 450);
  setGatewayHero(state.gatewayHeroIndex + (deltaX < 0 ? 1 : -1));
}

function handleGatewayHeroWheel(event) {
  if (heroSwipeControlTarget(event.target)) return;
  if (Math.abs(event.deltaX) < GATEWAY_HERO_SWIPE_MIN_PX || Math.abs(event.deltaX) < Math.abs(event.deltaY) * GATEWAY_HERO_SWIPE_AXIS_RATIO) return;
  const now = Date.now();
  if (now - gatewayHeroSwipe.lastWheelAt < 650) return;
  gatewayHeroSwipe.lastWheelAt = now;
  gatewayHeroSwipe.suppressClick = true;
  window.setTimeout(() => {
    gatewayHeroSwipe.suppressClick = false;
  }, 450);
  event.preventDefault();
  stopGatewayHeroAutoplay();
  setGatewayHero(state.gatewayHeroIndex + (event.deltaX > 0 ? 1 : -1));
}

function wireGatewayHeroSwipe() {
  const hero = document.querySelector(".gateway-landing.home-hero");
  if (!hero) return;
  hero.addEventListener("pointerdown", handleGatewayHeroSwipeStart);
  hero.addEventListener("pointermove", handleGatewayHeroSwipeMove);
  hero.addEventListener("pointerup", handleGatewayHeroSwipeEnd);
  hero.addEventListener("pointercancel", resetGatewayHeroSwipe);
  hero.addEventListener("touchstart", handleGatewayHeroSwipeStart, { passive: true });
  hero.addEventListener("touchmove", handleGatewayHeroSwipeMove, { passive: false });
  hero.addEventListener("touchend", handleGatewayHeroSwipeEnd, { passive: true });
  hero.addEventListener("touchcancel", resetGatewayHeroSwipe, { passive: true });
  hero.addEventListener("wheel", handleGatewayHeroWheel, { passive: false });
  hero.addEventListener("click", (event) => {
    if (!gatewayHeroSwipe.suppressClick) return;
    gatewayHeroSwipe.suppressClick = false;
    event.preventDefault();
    event.stopPropagation();
  }, true);
}

	function setGatewayNavActive(target) {
	  document.querySelectorAll("[data-gateway-nav]").forEach((button) => {
	    const selected = button.dataset.gatewayNav === target;
      button.classList.toggle("active", selected);
      if (selected) button.setAttribute("aria-current", "page");
      else button.removeAttribute("aria-current");
	  });
	}

	function appNavTargetForView(viewId) {
	  if (["stageDetailView", "moduleDetailView", "moduleQuizView", "onboardingView"].includes(viewId)) return "journey";
      if (viewId === "feedView") return "feed";
	  if (viewId === "accountView") return "account";
	  if (viewId === "libraryView") return "library";
	  if (viewId === "gatewayView") return normalizeGatewayContentMode(state.gatewayContentMode);
	  if (viewId === "shelfDetailView") return normalizeGatewayContentMode(state.gatewayContentMode);
	  if (viewId === "discoveryDetailView") return normalizeGatewayContentMode(state.gatewayContentMode);
	  return "";
	}

function setGatewayContentMode(mode = "discover") {
  const nextMode = normalizeGatewayContentMode(mode);
  state.gatewayContentMode = nextMode;
  document.body.classList.toggle("gateway-filter-watch", nextMode === "watch");
  document.body.classList.toggle("gateway-filter-listen", nextMode === "listen");
  renderArtworkHome();
  setGatewayHero(state.gatewayHeroIndex, { restartAutoplay: false });
  bindDynamicActions();
  enhanceDesktopShelves();
  updateAllShelfArrowStates();
  scheduleGatewayHeroAutoplay();
}

function scrollHomeSection(target) {
  const section = document.querySelector(`[data-home-section="${target}"]`);
  if (!section) return;
  section.scrollIntoView({ behavior: "smooth", block: "start" });
}

function openGatewayFilteredMode(target) {
  setGatewayNavActive(target);
  setGatewayContentMode(target);
  if (state.activeView !== "gatewayView") {
    setView("gatewayView");
  } else if (state.bootComplete) {
    recordAppRoute();
  }
  window.requestAnimationFrame(() => {
    scrollGatewayToTop();
    window.requestAnimationFrame(scrollGatewayToTop);
  });
}

function openShelfDetail(index) {
  state.activeBrowseShelfKey = "";
  state.activeShelfIndex = Number(index) || 0;
  document.body.classList.remove("shelf-search-mode");
  renderShelfDetail();
  setView("shelfDetailView");
  scrollGatewayToTop();
  window.requestAnimationFrame(() => {
    scrollGatewayToTop();
    window.requestAnimationFrame(scrollGatewayToTop);
  });
}

function openBrowseShelf(key) {
  state.activeBrowseShelfKey = key || "";
  document.body.classList.remove("shelf-search-mode");
  renderShelfDetail();
  setView("shelfDetailView");
  scrollGatewayToTop();
  window.requestAnimationFrame(() => {
    scrollGatewayToTop();
    window.requestAnimationFrame(scrollGatewayToTop);
  });
}

function openShelfSearch() {
  document.body.classList.add("shelf-search-mode");
  renderShelfSearchResults();
  window.requestAnimationFrame(() => {
    const input = document.getElementById("shelfSearchInput");
    input?.focus({ preventScroll: true });
  });
}

function closeShelfSearch() {
  document.body.classList.remove("shelf-search-mode");
  const input = document.getElementById("shelfSearchInput");
  if (input) input.value = "";
  state.searchQuery = "";
  state.searchFilter = "all";
  renderShelfSearchResults();
}

function getSupabaseAuthClient() {
  const config = getTeamSyncConfig();
  if (!teamSyncIsReady(config) || !window.supabase?.createClient) return null;
  const cacheKey = `${config.supabaseUrl}|${config.supabaseAnonKey}`;
  if (!supabaseAuthClient || supabaseAuthClientKey !== cacheKey) {
    supabaseAuthClient = window.supabase.createClient(config.supabaseUrl, config.supabaseAnonKey);
    supabaseAuthClientKey = cacheKey;
  }
  return supabaseAuthClient;
}

async function loadAdminAuthState() {
  const client = getSupabaseAuthClient();
  adminAuthState = { loaded: true, session: null, profile: null, notApproved: false };
  if (!client) return adminAuthState;

  const { data: sessionData } = await client.auth.getSession();
  const session = sessionData?.session || null;
  if (!session) return adminAuthState;

  const { data: profile, error } = await client
    .from(ADMIN_TABLE_NAME)
    .select("email, role, active")
    .maybeSingle();

  adminAuthState.session = session;
  if (!error && profile?.active) {
    adminAuthState.profile = profile;
    adminAuthState.notApproved = false;
  } else {
    adminAuthState.notApproved = true;
  }
  return adminAuthState;
}

async function getAdminSession() {
  const auth = await loadAdminAuthState();
  if (!auth.session || !auth.profile) return null;
  return {
    admin: true,
    email: auth.profile.email || auth.session.user?.email,
    role: auth.profile.role || "admin",
    signedInAt: auth.session.user?.last_sign_in_at || auth.session.user?.created_at
  };
}

async function renderAdminAccount() {
  if (!els.adminSignedOut || !els.adminSignedIn) return;
  const session = await getAdminSession();
  els.adminSignedOut.hidden = Boolean(session);
  els.adminSignedIn.hidden = !session;
  if (els.adminWorkshopLink) {
    els.adminWorkshopLink.href = "oneinhim_admin_workshop.html";
  }
	  if (els.adminSessionLabel) {
	    if (session) {
	      const signedInDate = session.signedInAt ? new Date(session.signedInAt) : null;
	      const dateText = signedInDate && !Number.isNaN(signedInDate.getTime())
	        ? signedInDate.toLocaleString()
	        : "";
	      els.adminSessionLabel.textContent = `${session.email || "Admin"}${session.role ? ` · ${labelize(session.role)}` : ""}${dateText ? ` · ${dateText}` : ""}`;
	    } else if (adminAuthState.notApproved) {
	      els.adminSessionLabel.textContent = t("account.notApproved");
	    }
	  }
	  renderLibrary();
	  bindDynamicActions();
	}

async function handleAdminLogin() {
  if (!els.adminEmail || !els.adminPassword) return;
  const email = els.adminEmail.value.trim();
  const password = els.adminPassword.value.trim();
  if (!email || !password) {
    toast(t("account.loginNeeded"));
    return;
  }
  const client = getSupabaseAuthClient();
  if (!client) {
    toast(t("account.authUnavailable"));
    return;
  }
  const { error } = await client.auth.signInWithPassword({ email, password });
  els.adminPassword.value = "";
  if (error) {
    toast(t("account.loginFailed"));
    return;
  }
  const session = await getAdminSession();
  if (!session) {
    await client.auth.signOut();
    await loadAdminAuthState();
    await renderAdminAccount();
    toast(t("account.notApproved"));
    return;
  }
  await renderAdminAccount();
  toast(t("account.loginSuccess"));
}

async function handleAdminLogout() {
  const client = getSupabaseAuthClient();
  if (client) await client.auth.signOut();
  adminAuthState = { loaded: true, session: null, profile: null, notApproved: false };
  await renderAdminAccount();
  toast(t("account.logoutSuccess"));
}

	function handleGatewayNav(target) {
    if (target === "journey") { openDefaultJourneyPath(); return; }
	  if (target === "account") {
	    setGatewayNavActive(target);
	    setGatewayContentMode("discover");
	    setView("accountView");
    renderAdminAccount();
    return;
  }
  if (target === "feed") {
    setGatewayNavActive(target);
    setGatewayContentMode("discover");
    setView("feedView");
    renderFeed();
	    return;
	  }
	  if (target === "library") {
	    setGatewayNavActive(target);
	    setGatewayContentMode("discover");
	    setView("libraryView");
	    renderLibrary();
	    return;
	  }
	  if (target === "kids") {
	    setGatewayNavActive(target);
	    toast(t("gateway.kidsToast"));
	    return;
  }
  if (target === "watch") {
    openGatewayFilteredMode("watch");
    return;
  }
  if (target === "listen") {
    openGatewayFilteredMode("listen");
    return;
  }
  if (target === "discover") {
    setGatewayNavActive(target);
    setGatewayContentMode("discover");
    if (state.activeView !== "gatewayView") {
      setView("gatewayView");
    } else if (state.bootComplete) {
      recordAppRoute();
    }
    window.requestAnimationFrame(scrollGatewayToTop);
    return;
  }
  setGatewayContentMode("discover");
  setGatewayNavActive(target);
  if (state.activeView !== "gatewayView") {
    setView("gatewayView");
    window.requestAnimationFrame(() => scrollHomeSection(target));
    return;
  }
  scrollHomeSection(target);
}

function applyLanguage(language, showToast = false) {
  const nextLanguage = i18n[language] ? language : "en";
  const shouldClearGatewayQuestion = !cleanQuestionInput(els.gatewayQuestion.value);
  const shouldClearAskQuestion = !cleanQuestionInput(els.askInput.value);
  state.language = nextLanguage;
  try {
    window.localStorage.setItem(APP_LANGUAGE_STORAGE_KEY, nextLanguage);
  } catch (error) {
    // Language still changes for this session if storage is unavailable.
  }
  document.documentElement.lang = nextLanguage;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.getAttribute("data-i18n"));
  });
  els.langButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === nextLanguage);
  });
  if (els.gatewayCharacterArt) els.gatewayCharacterArt.src = gatewayArtByLanguage[nextLanguage] || gatewayArtByLanguage.en;
  if (els.gatewayQuestion) els.gatewayQuestion.placeholder = t("gateway.questionDefault");
  if (els.askInput) els.askInput.placeholder = t("gateway.questionDefault");
  if (els.feedComposer) els.feedComposer.placeholder = t("feed.placeholder");
  if (shouldClearGatewayQuestion) els.gatewayQuestion.value = "";
  if (shouldClearAskQuestion) els.askInput.value = "";
  const [title, subtitle] = currentViewText(state.activeView);
  els.viewTitle.textContent = title;
  els.viewSubtitle.textContent = subtitle;
  renderArtworkHome();
  renderGatewayHeroSlider();
  renderShelfDetail();
  renderPathSelect();
  renderOnboarding();
  renderFeed();
  renderLearnerAccount();
  renderLibrary();
  renderDiscoveryDetail();
  bindDynamicActions();
  if (showToast) toast(t("toast.language"));
}

function savedLanguage() {
  try {
    const stored = window.localStorage.getItem(APP_LANGUAGE_STORAGE_KEY);
    return i18n[stored] ? stored : "en";
  } catch (error) {
    return "en";
  }
}

function openOnboarding() {
  state.onboardingStep = 0;
  renderOnboarding();
  setView("onboardingView");
  bindDynamicActions();
}

function activeResource() {
  return resources.find((item) => item.id === state.activeResourceId) || resources[0];
}

const CONTENT_TARGET_ALIASES = {
  mux_one_basics_1_1_opening_clip: "mux_one_basics_1_1_full_video",
  pathSelectView: "book_one_basics_1_1_eternal_life",
  oneevent_ps_duane_friday: "mux_oneevent_ps_duane_friday",
  out_of_the_shadows: "mux_out_of_shadows_documentary",
  journey_start_here: "book_one_basics_1_1_eternal_life",
  practice_prayer_002: "book_prayer_002",
  prayer_peace_003: "aud_peace_003",
  practice_bible_004: "lesson_bible_004"
};

function resolveContentTargetId(id) {
  const requestedId = String(id || "").trim();
  if (!requestedId) return resources[0]?.id || "";
  if (resources.some((item) => item.id === requestedId)) return requestedId;
  const alias = CONTENT_TARGET_ALIASES[requestedId];
  if (alias && resources.some((item) => item.id === alias)) return alias;
  return requestedId;
}

function resourceMuxPlaybackId(resource) {
  return cleanMuxPlaybackId(
    resource?.videoHost?.playbackId
      || resource?.muxVirtualClip?.playbackId
      || resource?.muxVirtualClip?.sourcePlaybackId
      || ""
  );
}

function sortJourneyResources(items) {
  return [...items].sort((a, b) => {
    const unitDiff = (Number(a.unitNumber) || 999) - (Number(b.unitNumber) || 999);
    if (unitDiff) return unitDiff;
    const lessonDiff = resourceLessonOrder(a) - resourceLessonOrder(b);
    if (lessonDiff) return lessonDiff;
    return (a.episode || 0) - (b.episode || 0);
  });
}

function journeyResourceForResource(resource) {
  if (!resource || resource.showInJourney !== false) return resource;
  const explicitJourneyResourceId = resource.journeyResourceId
    || resource.nextJourneyResourceId
    || resource.recommendedJourneyResourceId
    || "";
  if (explicitJourneyResourceId) {
    const explicitJourneyResource = resources.find((item) =>
      item.id === explicitJourneyResourceId && item.showInJourney !== false
    );
    if (explicitJourneyResource) return explicitJourneyResource;
  }
  const playbackId = resourceMuxPlaybackId(resource);
  const samePlayback = playbackId
    ? resources.filter((item) =>
      item.id !== resource.id
        && item.showInJourney !== false
        && resourceMuxPlaybackId(item) === playbackId
        && Number(item.clipEndSeconds) > 0
    )
    : [];
  if (samePlayback.length) return sortJourneyResources(samePlayback)[0];

  return resource;
}

function moduleTargetForResource(id) {
  const resolvedId = resolveContentTargetId(id);
  const requestedResource = resources.find((item) => item.id === resolvedId) || resources[0];
  const resource = journeyResourceForResource(requestedResource) || requestedResource;
  const stageByResourceStage = {
    explore: "exploreJesus",
    foundations: "startFollowing",
    formation: "growRoots",
    community: "growRoots",
    mission: "liveMission",
    multiply: "leadMultiply"
  };
  const specific = {
    vid_jesus_001: { stageId: "startFollowing", moduleIndex: 0, mode: "watch" },
    mux_one_basics_1_1_full_video: { stageId: "startFollowing", moduleIndex: 0, mode: "watch" },
    book_one_basics_1_1_eternal_life: { stageId: "startFollowing", moduleIndex: 0, mode: "read" },
    book_prayer_002: { stageId: "startFollowing", moduleIndex: 1, mode: "read" },
    aud_peace_003: { stageId: "growRoots", moduleIndex: 1, mode: "read" },
    lesson_bible_004: { stageId: "startFollowing", moduleIndex: 2, mode: "watch" }
  };
  const fallbackMode = resource.format.includes("watch")
    ? "watch"
    : resource.format.includes("listen")
      ? "listen"
      : "read";
  const stageId = stageByResourceStage[resource.stage] || "exploreJesus";
  const stage = pathOptions.find((option) => option.choice === stageId);
  if (stage) {
    const packagedIndex = packageModulesForStage(stage).findIndex((item) => item.id === resource.id);
    if (packagedIndex >= 0) {
      return { stageId, moduleIndex: packagedIndex, mode: fallbackMode };
    }
  }
  return specific[resource.id] || specific[resolvedId] || {
    stageId,
    moduleIndex: 0,
    mode: fallbackMode
  };
}

function selectedSectionIndexForModule(stageId, moduleIndex) {
  const stage = stageForChoice(stageId);
  return Math.max(0, Math.floor((Number(moduleIndex) || 0) / stageSectionSize(stage)));
}

function tag(text, color = "") {
  return `<span class="tag ${esc(color)}">${esc(text)}</span>`;
}

function onboardingStageChoices() {
  return [
    ["exploreJesus", "?", "var(--oih-orange)", "#fff", t("onboarding.stageExploreTitle"), t("onboarding.stageExploreCopy")],
    ["startFollowing", "✦", "var(--oih-gold)", "var(--oih-black)", t("onboarding.stageStartTitle"), t("onboarding.stageStartCopy")],
    ["growRoots", "↗", "var(--oih-olive-deep)", "#fff", t("onboarding.stageGrowTitle"), t("onboarding.stageGrowCopy")],
    ["leadMultiply", "+", "var(--oih-black)", "#fff", t("onboarding.stageLeadTitle"), t("onboarding.stageLeadCopy")]
  ];
}

function applyOnboardingStageChoice(stageChoice, options = {}) {
  const { persist = true, rerender = true } = options;
  const stage = stageForChoice(stageChoice || "exploreJesus");
  state.onboardingStage = stage.choice;
  state.activeStageId = stage.choice;
  state.pathPreviewStageId = stage.choice;
  state.selectedSectionIndex = 0;
  state.selectedPathNode = "";
  state.guidedPathNode = "";
  if (persist) writeLocalJson(ONBOARDING_PATH_STORAGE_KEY, stage.choice);
  if (rerender) renderOnboarding();
  return stage;
}

function loadOnboardingStageChoice() {
  const storedChoice = readLocalJson(ONBOARDING_PATH_STORAGE_KEY, "");
  if (!storedChoice) return;
  applyOnboardingStageChoice(storedChoice, { persist: false, rerender: false });
}

function renderOnboarding() {
  if (!els.onboardingContent) return;
  const step = 0;
  const prompts = [t("onboarding.promptStage"), t("onboarding.promptMethod"), t("onboarding.promptAchieve"), t("onboarding.promptHabit")];
  els.onboardingPrompt.textContent = prompts[step] || prompts[0];
  document.getElementById("onboardingSupport").textContent = state.language === "nl" ? "Kies wat het beste bij je past. Je kunt dit later veranderen." : "Choose what feels closest. You can change this later.";
  document.getElementById("onboardingEyebrow").textContent = state.language === "nl" ? "JOUW STARTPUNT" : "YOUR STARTING POINT";
  els.onboardingGuideArt.src = gatewayArtByLanguage[state.language] || gatewayArtByLanguage.en;
  els.onboardingContinue.textContent = t("onboarding.continue");

  if (step === 0) {
    els.onboardingContent.className = "onboarding-panel";
    els.onboardingContent.innerHTML = onboardingStageChoices().map(([value, icon, color, textColor, title, copy]) => `
      <button class="onboarding-choice ${state.onboardingStage === value ? "selected" : ""}" type="button" data-onboarding-stage="${esc(value)}" aria-pressed="${state.onboardingStage === value}" style="--choice-color: ${esc(color)}; --choice-text: ${esc(textColor)}">
        <span class="onboarding-choice-icon">${esc(icon)}</span>
        <span><strong>${esc(title)}</strong><span>${esc(copy)}</span></span>
      </button>
    `).join("");
    return;
  }

  if (step === 1) {
    const choices = [
      ["scratch", "1", "var(--oih-gold)", "var(--oih-black)", t("onboarding.methodScratchTitle"), t("onboarding.methodScratchCopy")],
      ["find", "⌖", "var(--oih-orange)", "#fff", t("onboarding.methodFindTitle"), t("onboarding.methodFindCopy")],
      ["ask", "?", "var(--oih-olive-deep)", "#fff", t("onboarding.methodAskTitle"), t("onboarding.methodAskCopy")]
    ];
    els.onboardingContent.className = "onboarding-panel";
    els.onboardingContent.innerHTML = choices.map(([value, icon, color, textColor, title, copy]) => `
      <button class="onboarding-choice ${state.onboardingStartMode === value ? "selected" : ""}" type="button" data-onboarding-mode="${esc(value)}" style="--choice-color: ${esc(color)}; --choice-text: ${esc(textColor)}">
        <span class="onboarding-choice-icon">${esc(icon)}</span>
        <span><strong>${esc(title)}</strong><span>${esc(copy)}</span></span>
      </button>
    `).join("");
    return;
  }

  const benefits = step === 2 ? [
    ["↗", t("onboarding.benefitOneTitle"), t("onboarding.benefitOneCopy")],
    ["▶", t("onboarding.benefitTwoTitle"), t("onboarding.benefitTwoCopy")],
    ["✎", t("onboarding.benefitThreeTitle"), t("onboarding.benefitThreeCopy")]
  ] : [
    ["✓", t("onboarding.habitOneTitle"), t("onboarding.habitOneCopy")],
    ["●", t("onboarding.habitTwoTitle"), t("onboarding.habitTwoCopy")],
    ["+", t("onboarding.habitThreeTitle"), t("onboarding.habitThreeCopy")]
  ];
  els.onboardingContent.className = "onboarding-benefits";
  els.onboardingContent.innerHTML = benefits.map(([icon, title, copy]) => `
    <div class="onboarding-benefit">
      <span class="onboarding-benefit-icon">${esc(icon)}</span>
      <span><strong>${esc(title)}</strong><span>${esc(copy)}</span></span>
    </div>
  `).join("");
}

function finishOnboarding() {
  const stage = applyOnboardingStageChoice(state.onboardingStage || "exploreJesus", { persist: true, rerender: false });
  state.selectedSectionIndex = 0;
  state.selectedPathNode = "";
  state.guidedPathNode = "";
  state.sectionPicker = null;
  state.sectionReview = null;
  state.practicalUse = false;
  state.quizChoice = "";
  state.quizChecked = false;
  state.activeModuleIndex = 0;
  renderStageDetail();
  setView("stageDetailView");
  bindDynamicActions();
}

async function loadSchema() {
  try {
    if (window.location.protocol === "file:") throw new Error("Local file mode");
    const response = await fetch("oneinhim_content_tagging_schema.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Schema file unavailable");
    state.schema = await response.json();
    els.schemaPill.textContent = `Schema ${state.schema.schemaVersion || "0.1"}`;
  } catch (error) {
    state.schema = embeddedSchema;
    els.schemaPill.textContent = `Schema ${state.schema.schemaVersion || "0.1"} fallback`;
  }
}

const MUX_PLAYBACK_ID_REPLACEMENTS = {
  rR8P8mSaKDzzO2TsftugTUdI00cQPJX00Oy: "167yz8JQrceeB2Lb1fnB4WK5W3pksV6GiE00KL6DUGbs"
};

function cleanMuxPlaybackId(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  const attrMatch = raw.match(/(?:playback-id|playbackId)=["']([^"']+)["']/i);
  if (attrMatch) return MUX_PLAYBACK_ID_REPLACEMENTS[attrMatch[1].trim()] || attrMatch[1].trim();
  const srcMatch = raw.match(/src=["']([^"']+)["']/i);
  const candidate = srcMatch ? srcMatch[1] : raw;
  let playbackId = "";
  try {
    const url = new URL(candidate);
    const pathParts = url.pathname.split("/").filter(Boolean);
    const lastPart = pathParts[pathParts.length - 1] || "";
    playbackId = lastPart.replace(/\.m3u8$/i, "").replace(/\.[a-z0-9]+$/i, "").trim();
  } catch (error) {
    playbackId = candidate
      .replace(/^https?:\/\/[^/]+\//i, "")
      .replace(/^stream\.mux\.com\//i, "")
      .replace(/^player\.mux\.com\//i, "")
      .replace(/^image\.mux\.com\//i, "")
      .split(/[?#]/)[0]
      .replace(/\.m3u8$/i, "")
      .replace(/\.[a-z0-9]+$/i, "")
      .replace(/^playback:/i, "")
      .replace(/["'<>]/g, "")
      .replace(/\s+/g, "")
      .trim();
  }
  return MUX_PLAYBACK_ID_REPLACEMENTS[playbackId] || playbackId;
}

function hasReadableSession(session) {
  return Boolean(
    (Array.isArray(session?.readBody) && session.readBody.length)
      || session?.contentSummary
      || session?.openingPrompt
  );
}

function mixedLessonMedium(pieceNumber, fallbackMedium = "read") {
  const rhythm = ["watch", "read", "watch", "read", "watch", "read"];
  const index = Number(pieceNumber);
  if (Number.isFinite(index) && index > 0) return rhythm[(index - 1) % rhythm.length];
  return fallbackMedium || "read";
}

function lessonPieceNumberFromPlacement(placement = {}, contentPackage = {}) {
  const muxPlacement = contentPackage.muxVirtualClip?.placement || {};
  const directCandidates = [
    placement.pieceNumber,
    muxPlacement.pieceNumber,
    contentPackage.lessonPieceNumber
  ].map(Number);
  const direct = directCandidates.find((value) => Number.isFinite(value) && value > 0);
  if (direct) return direct;

  const orderCandidates = [
    placement.lessonOrder,
    muxPlacement.lessonOrder,
    contentPackage.lessonOrder
  ].map(Number);
  const encodedOrder = orderCandidates.find((value) => Number.isFinite(value) && value >= 100);
  if (encodedOrder) {
    const encodedPiece = encodedOrder % 10;
    if (encodedPiece > 0) return encodedPiece;
  }

  return null;
}

function chooseAvailableMedium(requested, availability) {
  const wanted = ["watch", "listen", "read"].includes(requested) ? requested : "read";
  if (wanted === "watch" && availability.hasVideo) return "watch";
  if (wanted === "listen" && availability.hasAudio) return "listen";
  if (wanted === "read" && availability.hasReadable) return "read";
  if (availability.hasReadable) return "read";
  if (availability.hasAudio) return "listen";
  if (availability.hasVideo) return "watch";
  return "read";
}

function formatListForMedium(primaryMedium, availability) {
  const list = [primaryMedium];
  if (availability.hasVideo) list.push("watch");
  if (availability.hasAudio) list.push("listen");
  if (availability.hasReadable) list.push("read");
  list.push("reflect");
  return [...new Set(list)];
}

function visualTypeForMedium(primaryMedium) {
  if (primaryMedium === "watch") return "video";
  if (primaryMedium === "listen") return "audio";
  return "book";
}

function iconForResourceMedium(resource) {
  const medium = resource?.primaryMedium || (resource?.format?.includes("watch")
    ? "watch"
    : resource?.format?.includes("listen")
      ? "listen"
      : "read");
  if (medium === "listen") return "♪";
  if (medium === "read") return "“";
  return "▶";
}

function packageHasSourceText(contentPackage) {
  return Boolean(
    contentPackage
      && !contentPackage.muxVirtualClip
      && Array.isArray(contentPackage.learnerSession?.readBody)
      && contentPackage.learnerSession.readBody.length
  );
}

function sourcePackageIds(contentPackage) {
  return [
    contentPackage.textSourcePackageId,
    contentPackage.sourceTextPackageId,
    contentPackage.sourcePackageId,
    contentPackage.textSource?.packageId,
    contentPackage.muxVirtualClip?.textSourcePackageId,
    contentPackage.muxVirtualClip?.sourceTextPackageId,
    contentPackage.muxVirtualClip?.placement?.textSourcePackageId,
    ...(Array.isArray(contentPackage.sourceItems) ? contentPackage.sourceItems : [])
  ].filter(Boolean).map((value) => String(value));
}

function packageIdentityKeys(contentPackage) {
  return [
    contentPackage.packageId,
    contentPackage.primaryItemId,
    ...(Array.isArray(contentPackage.sourceItems) ? contentPackage.sourceItems : [])
  ].filter(Boolean).map((value) => String(value));
}

function oneBasicsSourceKey(value) {
  const match = String(value || "").match(/one\s*basics\s*(\d+)\s*[.:]\s*(\d+)/i);
  return match ? `one-basics-${match[1]}-${match[2]}` : "";
}

function sourceSearchText(contentPackage) {
  return [
    contentPackage.packageTitle,
    contentPackage.title,
    contentPackage.admin?.sourceRange,
    contentPackage.muxVirtualClip?.sourceVideoTitle,
    contentPackage.muxVirtualClip?.placement?.lessonTitle,
    contentPackage.placement?.unitTitle
  ].filter(Boolean).join(" ");
}

function sourceTextPackageFor(contentPackage) {
  if (!contentPackage || !Array.isArray(sharedContentPackages)) return null;
  const candidates = sharedContentPackages.filter((pkg) => pkg !== contentPackage && packageHasSourceText(pkg));
  const explicitIds = sourcePackageIds(contentPackage);
  const explicit = candidates.find((pkg) => {
    const keys = packageIdentityKeys(pkg);
    return explicitIds.some((id) => keys.includes(id));
  });
  if (explicit) return explicit;

  const lessonKey = oneBasicsSourceKey(sourceSearchText(contentPackage));
  if (!lessonKey) return null;
  return candidates.find((pkg) => oneBasicsSourceKey(sourceSearchText(pkg)) === lessonKey) || null;
}

function sourceReadBodyForPiece(sourceSession, pieceNumber, fallbackBody = []) {
  const sourceBody = Array.isArray(sourceSession?.readBody) ? sourceSession.readBody : [];
  if (!sourceBody.length) return Array.isArray(fallbackBody) ? fallbackBody : [];
  const spans = [
    [0, 2],
    [2, 4],
    [4, 6],
    [5, 7]
  ];
  const piece = Math.max(1, Number(pieceNumber) || 1);
  const [start, end] = spans[(piece - 1) % spans.length];
  const slice = sourceBody.slice(start, Math.min(end, sourceBody.length));
  return slice.length ? slice : sourceBody.slice(0, Math.min(2, sourceBody.length));
}

function packageToResource(contentPackage) {
  const session = contentPackage.learnerSession || {};
  const placement = contentPackage.placement || {};
  const stageSlug = contentPackage.journeyStage?.slug || "foundations";
  const unitNumber = Number(placement.unitNumber) || null;
  const pieceNumber = lessonPieceNumberFromPlacement(placement, contentPackage);
  const isGeneratedMuxClip = Boolean(contentPackage.muxVirtualClip)
    || String(contentPackage.packageType || "").includes("journey")
    || String(contentPackage.packageId || "").includes("clip");
  const rawPlaybackId = contentPackage.videoHost?.playbackId
    || contentPackage.muxVirtualClip?.sourcePlaybackId
    || contentPackage.muxVirtualClip?.playbackId
    || contentPackage.sourcePlaybackId
    || "";
  const playbackId = cleanMuxPlaybackId(rawPlaybackId);
  const hasMuxClip = Boolean(playbackId);
  const sourcePackage = hasMuxClip ? sourceTextPackageFor(contentPackage) : null;
  const sourceSession = sourcePackage?.learnerSession || null;
  const displaySession = sourceSession || session;
  const readBody = sourceSession
    ? sourceReadBodyForPiece(sourceSession, pieceNumber, session.readBody || [])
    : (session.readBody || []);
  const availability = {
    hasVideo: hasMuxClip,
    hasAudio: Boolean(contentPackage.audioHost?.url || contentPackage.audioHost?.storagePath || contentPackage.audioUrl),
    hasReadable: hasReadableSession(session) || hasReadableSession(sourceSession)
  };
  const clipMedium = contentPackage.muxVirtualClip?.placement?.lessonMedium
    || contentPackage.muxVirtualClip?.lessonMedium
    || "";
  const explicitMedium = isGeneratedMuxClip
    ? [placement.lessonMedium, placement.primaryMedium, session.lessonMedium, clipMedium]
        .find((medium) => ["read", "listen"].includes(medium)) || ""
    : (placement.lessonMedium
      || placement.primaryMedium
      || session.lessonMedium
      || clipMedium
      || "");
  const packageMedium = isGeneratedMuxClip && contentPackage.primaryMedium === "watch"
    ? ""
    : (contentPackage.primaryMedium || "");
  const declaredMedium = explicitMedium || packageMedium;
  const rhythmMedium = mixedLessonMedium(pieceNumber, "");
  const explicitNonVideoMedium = [
    placement.lessonMedium,
    placement.primaryMedium,
    session.lessonMedium,
    clipMedium
  ].find((medium) => ["read", "listen"].includes(medium));
  const requestedMedium = isGeneratedMuxClip && rhythmMedium
    ? (explicitNonVideoMedium || rhythmMedium)
    : (declaredMedium || rhythmMedium || "read");
  const primaryMedium = chooseAvailableMedium(requestedMedium, availability);
  const videoHost = hasMuxClip ? { ...(contentPackage.videoHost || {}), playbackId } : (contentPackage.videoHost || null);
  const muxVirtualClip = contentPackage.muxVirtualClip ? { ...contentPackage.muxVirtualClip, playbackId } : null;
  return {
    id: contentPackage.primaryItemId || contentPackage.packageId,
    packageId: contentPackage.packageId,
    visualType: visualTypeForMedium(primaryMedium),
    contentType: contentPackage.contentType || contentPackage.packageType || "lesson",
    title: contentPackage.packageTitle || contentPackage.title || "Untitled lesson",
    speaker: contentPackage.speakerOrAuthor?.name || "One In Him",
    speakerId: contentPackage.speakerOrAuthor?.id || "oneinhim_team",
    language: contentPackage.language || "en",
    format: formatListForMedium(primaryMedium, availability),
    length: contentPackage.length?.display || "Short session",
    seconds: contentPackage.length?.seconds || (contentPackage.length?.readingMinutes || 5) * 60,
    summary: displaySession.contentSummary || session.contentSummary || contentPackage.packageGoal,
    topic: contentPackage.topics?.[0] || "Discipleship",
    stage: stageSlug,
    questions: contentPackage.questionsAnswered || [],
    tone: ["clear", "encouraging"],
    nextStep: contentPackage.recommendedNextStep?.label || "Continue journey",
    nextTarget: contentPackage.recommendedNextStep?.targetId || placement.moduleId || "",
    seriesId: placement.moduleId || contentPackage.packageId,
    episode: placement.lessonOrder || 1,
    showInDiscover: placement.showInDiscover !== false,
    showInJourney: placement.showInJourney !== false,
    discoverShelf: placement.discoverShelf || "",
    discoverCardLabel: placement.discoverCardLabel || "",
    access: {
      level: normalizedAccessLevel(contentPackage.access?.level || placement.accessLevel || contentPackage.admin?.accessLevel),
      seedCost: Math.max(1, Number(contentPackage.access?.seedCost || placement.seedCost || DEFAULT_SEED_UNLOCK_COST) || DEFAULT_SEED_UNLOCK_COST),
      note: contentPackage.access?.note || ""
    },
    shareLine: contentPackage.sharing?.shareText || "",
    sourceLabel: placement.discoverShelf || "Prepared package",
    unitNumber,
    unitTitle: placement.unitTitle || "",
    pieceNumber,
    sectionNumber: Number(placement.sectionNumber) || null,
    primaryMedium,
    scriptureReferences: displaySession.scriptureReferences || [],
    openingPrompt: displaySession.openingPrompt || "",
    reflectionPrompt: displaySession.reflectionPrompt || "",
    notesPrompt: displaySession.notesPrompt || "",
    completionMessage: displaySession.completionMessage || "",
    quickCheck: displaySession.quickCheck || null,
    readBody,
    transcript: session.transcript || readBody,
    videoHost,
    muxVirtualClip,
    isMuxClip: hasMuxClip,
    clipStartSeconds: contentPackage.muxVirtualClip?.virtualClip?.startSeconds ?? contentPackage.clipStartSeconds ?? null,
    clipEndSeconds: contentPackage.muxVirtualClip?.virtualClip?.endSeconds ?? contentPackage.clipEndSeconds ?? null
  };
}

function readLocalJson(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch (error) {
    return fallback;
  }
}

function writeLocalJson(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    return false;
  }
}

function normalizedAccessLevel(value) {
  return ["free", "seed_unlock", "partner_access"].includes(value) ? value : "free";
}

function libraryAccessKey(resource) {
  return resource?.id || resource?.packageId || "";
}

function loadLibraryAccessState() {
  state.seeds = Math.max(0, Number(readLocalJson(LIBRARY_SEEDS_STORAGE_KEY, 0)) || 0);
  state.sharedForSeeds = new Set(readLocalJson(LIBRARY_SEED_SHARES_STORAGE_KEY, []));
  state.seedUnlocked = new Set(readLocalJson(LIBRARY_SEED_UNLOCKS_STORAGE_KEY, []));
  state.partnerAccess = Boolean(readLocalJson(LIBRARY_PARTNER_ACCESS_STORAGE_KEY, false));
}

function saveLibraryAccessState() {
  writeLocalJson(LIBRARY_SEEDS_STORAGE_KEY, state.seeds);
  writeLocalJson(LIBRARY_SEED_SHARES_STORAGE_KEY, Array.from(state.sharedForSeeds));
  writeLocalJson(LIBRARY_SEED_UNLOCKS_STORAGE_KEY, Array.from(state.seedUnlocked));
  writeLocalJson(LIBRARY_PARTNER_ACCESS_STORAGE_KEY, state.partnerAccess);
}

function seedCounterInnerMarkup() {
  return `<span class="seed-icon" aria-hidden="true"></span><span data-seed-count>${esc(state.seeds)}</span>`;
}

function updateSeedDisplays() {
  document.querySelectorAll("[data-seed-count]").forEach((counter) => {
    counter.textContent = String(state.seeds);
  });
}

function userHasFullLibraryAccess() {
  return Boolean(state.partnerAccess || adminAuthState.profile?.active || adminAuthState.profile);
}

function resourceAccessLevel(resource) {
  const homeContent = readHomeContent();
  const homeAccess = homeContent?.contentAccess?.[resource?.id];
  const configured = normalizedAccessLevel(homeAccess?.level || homeAccess || resource?.access?.level || resource?.accessLevel);
  if (configured === "free") return "free";
  if (resource?.showInJourney && resource?.access?.lockJourney !== true) return "free";
  return configured;
}

function resourceSeedCost(resource) {
  return Math.max(1, Number(resource?.access?.seedCost || resource?.seedCost || DEFAULT_SEED_UNLOCK_COST) || DEFAULT_SEED_UNLOCK_COST);
}

function resourceIsUnlocked(resource) {
  const level = resourceAccessLevel(resource);
  if (level === "free") return true;
  if (userHasFullLibraryAccess()) return true;
  if (level === "seed_unlock") return state.seedUnlocked.has(libraryAccessKey(resource));
  return false;
}

function contentLockBadgeMarkup() {
  return `<span class="content-lock-badge" aria-hidden="true"></span>`;
}

function lockBadgeTargetForCard(card) {
  return card.querySelector(".tile-art, .weekly-cover-art, .resource-art") || card;
}

function setContentCardLockedState(card, locked) {
  const target = lockBadgeTargetForCard(card);
  const existingBadge = target.querySelector(":scope > .content-lock-badge");
  card.classList.toggle("is-content-locked", locked);
  card.toggleAttribute("data-content-locked", locked);
  if (locked && !existingBadge) {
    target.insertAdjacentHTML("beforeend", contentLockBadgeMarkup());
  } else if (!locked && existingBadge) {
    existingBadge.remove();
  }
}

function refreshContentLockBadges(root = document) {
  root.querySelectorAll(".weekly-media-card[data-discover-open], .discovery-tile[data-discover-open], .discover-card[data-discover-open], .voice-button[data-discover-open]").forEach((card) => {
    const resourceId = resolveContentTargetId(card.dataset.discoverOpen);
    if (resourceId !== card.dataset.discoverOpen) card.dataset.discoverOpen = resourceId;
    const resource = resources.find((item) => item.id === resourceId);
    setContentCardLockedState(card, Boolean(resource && !resourceIsUnlocked(resource)));
  });
}

function normalizeRenderedContentTargets(root = document) {
  root.querySelectorAll("[data-discover-open]").forEach((element) => {
    const resolvedId = resolveContentTargetId(element.dataset.discoverOpen);
    if (resolvedId && resolvedId !== element.dataset.discoverOpen) {
      element.dataset.discoverOpen = resolvedId;
    }
  });
  root.querySelectorAll("[data-open]").forEach((element) => {
    const resolvedId = resolveContentTargetId(element.dataset.open);
    if (resolvedId && resolvedId !== element.dataset.open) {
      element.dataset.open = resolvedId;
    }
  });
  root.querySelectorAll("[data-nav-jump='pathSelectView']").forEach((element) => {
    element.dataset.navJump = "stageDetailView";
  });
}

function accessLabelForResource(resource) {
  const level = resourceAccessLevel(resource);
  if (level === "free") return "Free";
  if (userHasFullLibraryAccess()) return "Full access";
  if (level === "seed_unlock") {
    return state.seedUnlocked.has(libraryAccessKey(resource)) ? "Unlocked" : `${resourceSeedCost(resource)} Seeds`;
  }
  return "Partner access";
}

function accessCopyForResource(resource) {
  const level = resourceAccessLevel(resource);
  if (level === "free") return "Included in the free core experience.";
  if (userHasFullLibraryAccess()) return "Opened through partner, supporter, or staff access.";
  if (level === "seed_unlock") {
    const cost = resourceSeedCost(resource);
    const needed = Math.max(0, cost - state.seeds);
    if (state.seedUnlocked.has(libraryAccessKey(resource))) return "Unlocked with Seeds.";
    return needed ? `Share from Journey to earn ${needed} more Seed${needed === 1 ? "" : "s"}.` : `Ready to unlock for ${cost} Seeds.`;
  }
  return "Partners, supporters, and approved staff can open the full Library directly.";
}

function earnSeedsForShare(resource) {
  const key = libraryAccessKey(resource);
  if (!key || state.sharedForSeeds.has(key)) return 0;
  state.sharedForSeeds.add(key);
  state.seeds += SEEDS_PER_SHARE;
  saveLibraryAccessState();
  updateSeedDisplays();
  return SEEDS_PER_SHARE;
}

function unlockSeedResource(resource) {
  const key = libraryAccessKey(resource);
  if (!key || resourceAccessLevel(resource) !== "seed_unlock") return false;
  if (resourceIsUnlocked(resource)) return true;
  const cost = resourceSeedCost(resource);
  if (state.seeds < cost) return false;
	  state.seeds -= cost;
	  state.seedUnlocked.add(key);
	  saveLibraryAccessState();
	  renderLibrary();
	  bindDynamicActions();
	  return true;
	}

function activatePrototypePartnerAccess() {
	  state.partnerAccess = true;
	  saveLibraryAccessState();
	  renderLibrary();
	  bindDynamicActions();
	  toast("Full Library access active for this prototype.");
	}

function handleLockedResource(resource) {
  if (!resource) return;
  state.libraryFilter = "all";
  renderLibrary();
  setView("libraryView");
  const level = resourceAccessLevel(resource);
  if (level === "seed_unlock") {
    toast(`${resource.title} can unlock with Seeds earned from Journey sharing.`);
    return;
  }
  toast("This is partner Library content.");
}

async function shareResource(resource) {
  if (!resource) return;
  const shareUrl = new URL(window.location.href);
  shareUrl.searchParams.delete("refresh");
  shareUrl.hash = encodeURIComponent(resource.id);
  const shareText = resource.shareLine || resource.summary || resource.title;
  try {
    let copied = false;
    if (navigator.share) {
      await navigator.share({ title: resource.title, text: shareText, url: shareUrl.href });
    } else if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(`${shareText}\n${shareUrl.href}`);
      copied = true;
    } else {
      toast(state.language === "nl" ? "Delen is niet beschikbaar in deze browser." : "Sharing is unavailable in this browser.");
      return;
    }
    const earned = earnSeedsForShare(resource);
    const message = state.language === "nl" ? (copied ? "Link gekopieerd." : "Gedeeld.") : (copied ? "Link copied." : "Shared.");
    toast(`${message}${earned ? ` +${earned} Seeds.` : ""}`);
  } catch (error) {
    if (error.name !== "AbortError") toast(state.language === "nl" ? "Delen is niet gelukt. Probeer het opnieuw." : "Could not share. Please try again.");
  }
}

function journeyShareResourceForNode(stageChoice, groupIndex) {
  const stage = stageForChoice(stageChoice || state.activeStageId);
  const groups = stageSectionGroups(stage);
  const safeGroupIndex = Math.max(0, Number(groupIndex) || 0);
  const group = groups[safeGroupIndex] || groups[0];
  const firstLesson = group && group.modules.find((item) => moduleResourceFor(stage, item.moduleIndex));
  const firstResource = firstLesson ? moduleResourceFor(stage, firstLesson.moduleIndex) : null;
  if (firstResource) return firstResource;
  const title = group?.title || t(stage.titleKey);
  return {
    id: `journey_node_${stage.choice}_${safeGroupIndex}`,
    title,
    summary: sectionThemeDescription(stage, { title }),
    shareLine: `I am taking this One In Him Journey step: ${title}.`
  };
}

async function shareCurrentJourneyResource() {
  const stage = activeStage();
  const resource = moduleResourceFor(stage, state.activeModuleIndex)
    || journeyShareResourceForNode(stage.choice, state.selectedSectionIndex)
    || activeResource();
  await shareResource(resource);
}

function handleJourneyShareAction(event) {
  const target = event.target instanceof Element ? event.target : event.target?.parentElement;
  if (!target) return;
  const nodeShareButton = target.closest("[data-share-journey-node]");
  if (nodeShareButton) {
    event.preventDefault();
    event.stopImmediatePropagation();
    const [stageChoice, groupIndex] = String(nodeShareButton.dataset.shareJourneyNode || "").split(":");
    shareResource(journeyShareResourceForNode(stageChoice, Number(groupIndex) || 0));
    return;
  }
  const journeyShareButton = target.closest("[data-share-journey]");
  if (journeyShareButton) {
    event.preventDefault();
    event.stopImmediatePropagation();
    shareCurrentJourneyResource();
  }
}

function feedSamplePosts() {
  const samples = {
    en: [
      {
        id: "sample_eternal_life",
        author: "Katie",
        action: t("feed.sharedThought"),
        age: "5 days",
        text: "I realised eternal life is not only something later. It starts with knowing the Father now.",
        context: "One Basics 1.1 · Eternal Life",
        color: "#ee7326",
        avatar: "K",
        likes: 12,
        likedBy: "Veronica",
        kind: "thought"
      },
      {
        id: "sample_step_completed",
        author: "Nanda",
        action: t("feed.completedStep"),
        age: "2 days",
        text: "Completed the first One Basics step.",
        context: "Section 2 · Start Following Jesus",
        color: "#446523",
        avatar: "N",
        likes: 2,
        likedBy: "Celeste",
        kind: "milestone",
        streak: "1"
      },
      {
        id: "sample_prayer_question",
        author: "David",
        action: t("feed.askedQuestion"),
        age: "Today",
        text: "How do I keep praying when I feel distant from God?",
        context: "Prayer · Grow Deep Roots",
        color: "#f6ca35",
        avatar: "D",
        likes: 5,
        likedBy: "Miriam",
        kind: "question"
      }
    ],
    nl: [
      {
        id: "sample_eternal_life",
        author: "Katie",
        action: t("feed.sharedThought"),
        age: "5 dagen",
        text: "Ik besefte dat eeuwig leven niet alleen later is. Het begint nu met de Vader kennen.",
        context: "One Basics 1.1 · Eeuwig leven",
        color: "#ee7326",
        avatar: "K",
        likes: 12,
        likedBy: "Veronica",
        kind: "thought"
      },
      {
        id: "sample_step_completed",
        author: "Nanda",
        action: t("feed.completedStep"),
        age: "2 dagen",
        text: "De eerste One Basics-stap afgerond.",
        context: "Sectie 2 · Jezus volgen",
        color: "#446523",
        avatar: "N",
        likes: 2,
        likedBy: "Celeste",
        kind: "milestone",
        streak: "1"
      },
      {
        id: "sample_prayer_question",
        author: "David",
        action: t("feed.askedQuestion"),
        age: "Vandaag",
        text: "Hoe blijf ik bidden als God ver weg voelt?",
        context: "Gebed · Diepe wortels",
        color: "#f6ca35",
        avatar: "D",
        likes: 5,
        likedBy: "Miriam",
        kind: "question"
      }
    ]
  };
  return samples[state.language] || samples.en;
}

function loadFeedState() {
  const posts = readLocalJson(FEED_POSTS_STORAGE_KEY, []);
  const likes = readLocalJson(FEED_LIKES_STORAGE_KEY, {});
  state.feedPosts = Array.isArray(posts) ? posts : [];
  state.feedLikes = likes && typeof likes === "object" && !Array.isArray(likes) ? likes : {};
}

function saveFeedPosts() {
  try {
    localStorage.setItem(FEED_POSTS_STORAGE_KEY, JSON.stringify(state.feedPosts.slice(0, 40)));
    return true;
  } catch (error) {
    return false;
  }
}

function saveFeedLikes() {
  try {
    localStorage.setItem(FEED_LIKES_STORAGE_KEY, JSON.stringify(state.feedLikes));
  } catch (error) {
    // Feed likes are non-critical.
  }
}

function displayFeedPosts() {
  return [...state.feedPosts, ...feedSamplePosts()].map((post) => ({
    ...post,
    likes: (Number(post.likes) || 0) + (Number(state.feedLikes[post.id]) || 0),
    liked: Boolean(state.feedLikes[post.id])
  }));
}

function feedPostHtml(post) {
  const actionText = post.action || t("feed.sharedThought");
  const likedFaces = [
    { label: "V", color: "#ee7326" },
    { label: "C", color: "#446523" },
    { label: "M", color: "#56a7db" }
  ];
  const body = post.kind === "milestone"
    ? `
      <div class="feed-milestone">
        <p>${esc(post.text)}</p>
        <span class="feed-streak-mark">${esc(post.streak || "1")}</span>
      </div>
    `
    : `
      <div class="feed-bubble">
        <p class="feed-post-text">${esc(post.text)}</p>
        <p class="feed-post-context">${esc(post.context || "")}</p>
      </div>
    `;
  return `
    <article class="feed-post" data-feed-post="${esc(post.id)}">
      <div class="feed-post-avatar" style="--post-color: ${esc(post.color || "#ee7326")};" aria-hidden="true">${esc(post.avatar || "Y")}</div>
      <div>
        <header class="feed-post-head">
          <strong>${esc(post.author || "You")} ${esc(actionText)}</strong>
          <span>${esc(post.age || "Now")}</span>
        </header>
        ${body}
        <div class="feed-actions">
          <button class="feed-action ${post.liked ? "active" : ""}" type="button" data-feed-like="${esc(post.id)}" aria-label="Like ${esc(post.author || "post")}">
            <span aria-hidden="true">♡</span>
            <span>${esc(post.likes)}</span>
          </button>
          <button class="feed-action" type="button" data-feed-share="${esc(post.id)}" aria-label="Share ${esc(post.author || "post")}">↥</button>
        </div>
        <div class="feed-liked" ${post.id.startsWith("local_") ? "hidden" : ""}>
          <span class="feed-liked-faces" aria-hidden="true">
            ${likedFaces.map((face) => `<i style="--face-color:${face.color};">${face.label}</i>`).join("")}
          </span>
          <span>${esc(t("feed.likedBy"))} <strong>${esc(post.likedBy || "Veronica")}</strong> ${esc(t("feed.andOthers"))}</span>
        </div>
      </div>
    </article>
  `;
}

function renderFeed() {
  if (!els.feedPostList) return;
  els.feedPostList.innerHTML = displayFeedPosts().map(feedPostHtml).join("");
}

function handleFeedSubmit() {
  if (!els.feedComposer) return;
  const text = els.feedComposer.value.trim();
  if (!text) {
    if (els.feedStatus) els.feedStatus.textContent = t("feed.emptyThought");
    toast(t("feed.emptyThought"));
    return;
  }
  const stage = activeStage();
  const post = {
    id: `local_${Date.now()}`,
    author: "You",
    action: t("feed.sharedThought"),
    age: "Now",
    text,
    context: t(stage.titleKey),
    color: stage.stageColor || "#ee7326",
    avatar: "Y",
    likes: 0,
    likedBy: "One In Him",
    kind: "thought"
  };
  state.feedPosts = [post, ...state.feedPosts].slice(0, 40);
  els.feedComposer.value = "";
  if (els.feedStatus) els.feedStatus.textContent = t("feed.saved");
  const saved = saveFeedPosts();
  const message = saved ? t("feed.saved") : (state.language === "nl" ? "Alleen bewaard voor deze sessie; opslag is niet beschikbaar." : "Kept for this session only; device storage is unavailable.");
  if (els.feedStatus) els.feedStatus.textContent = message;
  renderFeed();
  toast(message);
}

async function handleFeedAction(event) {
  const target = event.target instanceof Element ? event.target.closest("[data-feed-like], [data-feed-share]") : null;
  if (!target) return;
  const likeId = target.dataset.feedLike;
  if (likeId) {
    state.feedLikes[likeId] = state.feedLikes[likeId] ? 0 : 1;
    if (!state.feedLikes[likeId]) delete state.feedLikes[likeId];
    saveFeedLikes();
    renderFeed();
    return;
  }
  if (target.dataset.feedShare) {
    const post = displayFeedPosts().find(post => post.id === target.dataset.feedShare);
    if (!post) return;
    try {
      if (navigator.share) {
        await navigator.share({ title: "One In Him", text: post.text });
        toast(state.language === "nl" ? "Gedeeld." : "Shared.");
      } else if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(post.text);
        toast(state.language === "nl" ? "Gedachte gekopieerd." : "Thought copied.");
      } else toast(state.language === "nl" ? "Delen is niet beschikbaar." : "Sharing is unavailable.");
    } catch (error) {
      if (error.name !== "AbortError") toast(state.language === "nl" ? "Delen is niet gelukt." : "Could not share.");
    }
  }
}

function cleanSupabaseUrl(value) {
  return String(value || "").trim().replace(/\/+$/, "");
}

function getTeamSyncConfig() {
  const stored = readLocalJson(TEAM_SYNC_CONFIG_KEY, {});
  return {
    ...TEAM_SYNC_DEFAULT_CONFIG,
    ...stored,
    supabaseUrl: cleanSupabaseUrl(stored.supabaseUrl || TEAM_SYNC_DEFAULT_CONFIG.supabaseUrl),
    supabaseAnonKey: String(stored.supabaseAnonKey || TEAM_SYNC_DEFAULT_CONFIG.supabaseAnonKey || "").trim(),
    tableName: String(stored.tableName || TEAM_SYNC_DEFAULT_CONFIG.tableName || "oih_content_packages").trim()
  };
}

function teamSyncIsReady(config = getTeamSyncConfig()) {
  return Boolean(config.enabled && config.supabaseUrl && config.supabaseAnonKey && config.tableName);
}

function supabaseHeaders(config) {
  return {
    apikey: config.supabaseAnonKey,
    Authorization: `Bearer ${config.supabaseAnonKey}`,
    "Content-Type": "application/json"
  };
}

function readWorkshopPublishedPackages() {
  const parsed = readLocalJson(WORKSHOP_PUBLISHED_PACKAGES_KEY, []);
  return Array.isArray(parsed) ? parsed : (Array.isArray(parsed.packages) ? parsed.packages : []);
}

async function readTeamPublishedPackages() {
  const config = getTeamSyncConfig();
  if (!teamSyncIsReady(config)) return [];
  const url = `${config.supabaseUrl}/rest/v1/${encodeURIComponent(config.tableName)}?select=payload,updated_at&order=updated_at.desc`;
  const response = await fetch(url, { headers: supabaseHeaders(config), cache: "no-store" });
  if (!response.ok) throw new Error("Team sync unavailable");
  const rows = await response.json();
  return rows.map((row) => row.payload).filter(Boolean);
}

function mergeSharedContentPackages(packages) {
  if (!Array.isArray(packages) || !packages.length) return;
  const existingPackages = new Map(sharedContentPackages.map((pkg) => [
    pkg.packageId || pkg.primaryItemId || pkg.id,
    pkg
  ]));
  packages.forEach((pkg) => {
    existingPackages.set(pkg.packageId || pkg.primaryItemId || pkg.id, pkg);
  });
  sharedContentPackages = Array.from(existingPackages.values());
  packages.map(packageToResource).forEach((resource) => {
    const index = resources.findIndex((item) => item.id === resource.id);
    if (index >= 0) {
      resources[index] = { ...resources[index], ...resource };
    } else {
      resources.push(resource);
    }
  });
  clearJourneyStructureCache();
}

async function loadContentPackages() {
  mergeSharedContentPackages(embeddedContentPackages);
  try {
    if (window.location.protocol === "file:") throw new Error("Local file mode");
    const response = await fetch("oneinhim_content_packages.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Content packages unavailable");
    const data = await response.json();
    mergeSharedContentPackages(data.packages || []);
    els.schemaPill.textContent = `${els.schemaPill.textContent} · packages`;
  } catch (error) {
    if (embeddedContentPackages.length) {
      els.schemaPill.textContent = `${els.schemaPill.textContent} · embedded packages`;
    }
  }
  const workshopPackages = readWorkshopPublishedPackages();
  if (workshopPackages.length) {
    mergeSharedContentPackages(workshopPackages);
    els.schemaPill.textContent = `${els.schemaPill.textContent} · workshop sync`;
  }
  try {
    const teamPackages = await readTeamPublishedPackages();
    if (teamPackages.length) {
      mergeSharedContentPackages(teamPackages);
      els.schemaPill.textContent = `${els.schemaPill.textContent} · team sync`;
    }
  } catch (error) {
    if (teamSyncIsReady()) {
      els.schemaPill.textContent = `${els.schemaPill.textContent} · team sync offline`;
    }
  }
  installFirstJourneyUnit();
  installFiveModuleCurriculum();
}

function primeMobileDocumentScroll(viewId) {
  resetMobileDocumentTouchScroll();
}

function mobileDocumentScrollTargetAllowed(target) {
  if (!window.matchMedia("(max-width: 760px)").matches || state.activeView === "gatewayView") return false;
  if (!(target instanceof Element)) return true;
  if (target.closest("input, textarea, select, video, audio, mux-player, .gateway-landing")) return false;
  return true;
}

function handleMobileDocumentTouchStart(event) {
  if (event.touches.length !== 1 || !mobileDocumentScrollTargetAllowed(event.target)) {
    mobileDocumentTouchScroll.active = false;
    return;
  }
  const touch = event.touches[0];
  mobileDocumentTouchScroll.active = true;
  mobileDocumentTouchScroll.manual = false;
  mobileDocumentTouchScroll.startX = touch.clientX;
  mobileDocumentTouchScroll.startY = touch.clientY;
  mobileDocumentTouchScroll.lastY = touch.clientY;
  mobileDocumentTouchScroll.startScrollY = window.scrollY;
}

function handleMobileDocumentTouchMove(event) {
  if (!mobileDocumentTouchScroll.active || event.touches.length !== 1) return;
  const touch = event.touches[0];
  const deltaX = touch.clientX - mobileDocumentTouchScroll.startX;
  const deltaYTotal = touch.clientY - mobileDocumentTouchScroll.startY;
  const deltaY = mobileDocumentTouchScroll.lastY - touch.clientY;
  if (!mobileDocumentTouchScroll.manual) {
    const verticalIntent = Math.abs(deltaYTotal) > 8 && Math.abs(deltaYTotal) > Math.abs(deltaX) * 1.25;
    const nativeScrollHasNotStarted = Math.abs(window.scrollY - mobileDocumentTouchScroll.startScrollY) < 1;
    const canScrollDown = deltaY > 0 && window.scrollY < document.documentElement.scrollHeight - window.innerHeight - 1;
    const canScrollUp = deltaY < 0 && window.scrollY > 0;
    mobileDocumentTouchScroll.manual = verticalIntent && nativeScrollHasNotStarted && (canScrollDown || canScrollUp);
  }
  if (mobileDocumentTouchScroll.manual) {
    event.preventDefault();
    window.scrollBy(0, deltaY);
  }
  mobileDocumentTouchScroll.lastY = touch.clientY;
}

function resetMobileDocumentTouchScroll() {
  mobileDocumentTouchScroll.active = false;
  mobileDocumentTouchScroll.manual = false;
}

function setView(viewId, options = {}) {
  closeGuidebook();
	  const deprecatedViews = {
	    homeView: "gatewayView",
	    journeyView: "stageDetailView",
	    pathSelectView: "stageDetailView",
	    speakersView: "gatewayView",
	    shareView: "gatewayView"
  };
  const nextViewId = deprecatedViews[viewId] || viewId;
  if (nextViewId !== "shelfDetailView") {
    document.body.classList.remove("shelf-search-mode");
  }
  if (!state.bootComplete && !options.initial) {
    state.userNavigatedDuringBoot = true;
  }
  const previousViewId = state.activeView;
  if (nextViewId === "accountView" && previousViewId !== "accountView") {
    try { if (!sessionStorage.getItem("oih.auth.return")) sessionStorage.setItem("oih.auth.return", window.location.hash); } catch (_) {}
  }
  if (previousViewId && previousViewId !== nextViewId) {
    stopEmbeddedMediaInView(previousViewId);
  }
	  state.activeView = nextViewId;
  if (nextViewId === "moduleDetailView") window.OIHLearnerAccounts?.scheduleSync();
	  const appChromeHidden = nextViewId === "onboardingView" || nextViewId === "moduleDetailView" || nextViewId === "moduleQuizView";
	  document.body.classList.toggle("app-chrome-hidden", appChromeHidden);
	  document.body.classList.toggle("onboarding-mode", nextViewId === "onboardingView");
	  document.body.classList.toggle("gateway-mode", nextViewId === "gatewayView");
  if (nextViewId === "gatewayView") {
    scheduleGatewayHeroAutoplay();
  } else {
    stopGatewayHeroAutoplay();
    document.body.classList.remove("documentary-hero-active");
    document.body.classList.remove("one-basics-hero-active");
    document.body.classList.remove("dark-gateway-hero-active");
    document.body.classList.remove("gateway-nav-scrolled");
    document.documentElement.classList.remove("dark-gateway-hero-active");
    document.documentElement.classList.remove("gateway-nav-scrolled");
    setGatewayChromeColor(false);
  }
  document.body.classList.toggle("discovery-detail-mode", nextViewId === "discoveryDetailView");
  document.body.classList.toggle("discovery-audio-detail-mode", nextViewId === "discoveryDetailView" && isAudioResource(activeResource()));
  document.body.classList.toggle("shelf-detail-mode", nextViewId === "shelfDetailView");
  document.body.classList.toggle("feed-mode", nextViewId === "feedView");
  document.body.classList.toggle("library-mode", nextViewId === "libraryView");
  document.body.classList.toggle("journey-mode", nextViewId === "stageDetailView");
	  document.body.classList.toggle("learning-mode", nextViewId === "moduleDetailView" || nextViewId === "moduleQuizView");
	  document.body.classList.toggle("section-picker-mode", nextViewId === "moduleQuizView" && Boolean(state.sectionPicker));
	  const appNavTarget = appNavTargetForView(nextViewId);
	  setGatewayNavActive(appNavTarget || "");
  if (nextViewId !== "moduleQuizView") document.body.classList.remove("quiz-checked");
  document.querySelectorAll(".view").forEach((view) => {
    const isActiveView = view.id === nextViewId;
    view.classList.toggle("active", isActiveView);
    view.setAttribute("aria-hidden", isActiveView ? "false" : "true");
  });
  document.querySelectorAll(".nav-btn").forEach((button) => button.classList.toggle("active", button.dataset.nav === nextViewId));
  refreshActiveViewMedia(nextViewId);
	  const [title, subtitle] = currentViewText(nextViewId);
	  els.viewTitle.textContent = title;
	  els.viewSubtitle.textContent = subtitle;
	  if (nextViewId === "accountView") { renderLearnerAccount(); renderAdminAccount(); }
	  if (nextViewId === "feedView") renderFeed();
  if (nextViewId === "onboardingView") renderOnboarding();
  window.scrollTo({ top: 0, behavior: "auto" });
  updateGatewayNavScrollState();
  primeMobileDocumentScroll(nextViewId);
  if (state.bootComplete && options.history !== false) recordAppRoute();
  if (!options.initial) {
    const view = document.getElementById(nextViewId);
    if (view) { view.tabIndex = -1; view.focus({ preventScroll: true }); }
  }
  if (nextViewId === "stageDetailView") {
    const targetStageChoice = state.activeStageId;
    const targetSectionIndex = Number.isFinite(state.selectedSectionIndex) ? state.selectedSectionIndex : 0;
    window.requestAnimationFrame(() => {
      updateDuoPathCurve();
      scrollActiveJourneySectionIntoView(targetStageChoice, targetSectionIndex);
      updateStickyStageBanner();
    });
  }
}

function setActiveResource(id, view = "moduleDetailView") {
  const resolvedId = resolveContentTargetId(id);
  const target = moduleTargetForResource(resolvedId);
  state.activeResourceId = resolvedId;
  state.activeStageId = target.stageId;
  state.activeModuleIndex = target.moduleIndex;
  state.selectedSectionIndex = selectedSectionIndexForModule(target.stageId, target.moduleIndex);
  state.selectedPathNode = pathNodeKey("content", stageForChoice(target.stageId), state.selectedSectionIndex);
  state.moduleMode = target.mode;
  state.quizChoice = "";
  state.quizChecked = false;
  state.practicalUse = false;
  renderAll();
  setView(view);
}

function setDiscoveryResource(id) {
  const resolvedId = resolveContentTargetId(id);
  const resource = resources.find((item) => item.id === resolvedId);
  if (resource && !resourceIsUnlocked(resource)) {
    handleLockedResource(resource);
    bindDynamicActions();
    return;
  }
  state.activeResourceId = resolvedId;
  renderDiscoveryDetail();
  setView("discoveryDetailView");
  bindDynamicActions();
}

const sourceBackedQuickStarts = {
  bible: "book_one_basics_1_14_effective_bible_reading",
  newChristian: "book_one_basics_1_1_eternal_life",
  jesus: "book_one_basics_1_1_eternal_life",
  prayer: "book_one_basics_1_16_praying_to_god"
};

function handleGatewayChoice(choice) {
  const choices = {
    explore: {
      resourceId: "vid_jesus_001",
      question: t("choice.explore.question"),
      view: "stageDetailView",
      stageId: "exploreJesus",
      message: t("toast.choiceExplore")
    },
    prayer: {
      resourceId: sourceBackedQuickStarts.prayer,
      question: t("choice.prayer.question"),
      view: "moduleDetailView",
      message: t("toast.choicePrayer")
    },
    bible: {
      resourceId: sourceBackedQuickStarts.bible,
      question: t("choice.bible.question"),
      view: "moduleDetailView",
      message: t("toast.choiceBible")
    },
    care: {
      resourceId: "aud_peace_003",
      question: t("choice.care.question"),
      view: "stageDetailView",
      stageId: "growRoots",
      message: t("toast.choiceCare")
    },
    exploreJesus: {
      resourceId: "vid_jesus_001",
      question: t("quick.newChristian.question"),
      view: "stageDetailView",
      message: t("toast.choiceExplore")
    },
    startFollowing: {
      resourceId: sourceBackedQuickStarts.newChristian,
      question: t("quick.newChristian.question"),
      view: "stageDetailView",
      message: t("toast.choiceBible")
    },
    growRoots: {
      resourceId: "lesson_bible_004",
      question: t("choice.leadership.question"),
      view: "stageDetailView",
      message: t("toast.choiceLeadership")
    },
    liveMission: {
      resourceId: "vid_jesus_001",
      question: t("choice.shareFaith.question"),
      view: "stageDetailView",
      message: t("toast.choiceMission")
    },
    leadMultiply: {
      resourceId: "lesson_bible_004",
      question: t("choice.pastor.question"),
      view: "stageDetailView",
      message: t("toast.choicePastor")
    },
    newChristian: {
      resourceId: sourceBackedQuickStarts.newChristian,
      question: t("quick.newChristian.question"),
      view: "moduleDetailView",
      stageId: "startFollowing",
      message: t("toast.choiceExplore")
    },
    community: {
      resourceId: "book_prayer_002",
      question: t("choice.community.question"),
      view: "stageDetailView",
      stageId: "growRoots",
      message: t("toast.choiceCommunity")
    },
    shareFaith: {
      resourceId: "vid_jesus_001",
      question: t("choice.shareFaith.question"),
      view: "stageDetailView",
      stageId: "liveMission",
      message: t("toast.choiceMission")
    },
    smallGroup: {
      resourceId: "lesson_bible_004",
      question: t("choice.smallGroup.question"),
      view: "stageDetailView",
      stageId: "liveMission",
      message: t("toast.choiceLeadership")
    },
    evangelist: {
      resourceId: "vid_jesus_001",
      question: t("choice.evangelist.question"),
      view: "stageDetailView",
      stageId: "liveMission",
      message: t("toast.choiceMission")
    },
    leadership: {
      resourceId: "lesson_bible_004",
      question: t("choice.leadership.question"),
      view: "stageDetailView",
      stageId: "leadMultiply",
      message: t("toast.choiceLeadership")
    },
    pastor: {
      resourceId: "book_prayer_002",
      question: t("choice.pastor.question"),
      view: "stageDetailView",
      stageId: "leadMultiply",
      message: t("toast.choicePastor")
    },
    multiply: {
      resourceId: "lesson_bible_004",
      question: t("choice.multiply.question"),
      view: "stageDetailView",
      stageId: "leadMultiply",
      message: t("toast.choiceMultiply")
    }
  };
  const selected = choices[choice] || choices.explore;
  if (selected.stageId) state.activeStageId = selected.stageId;
  if (pathOptions.some((stage) => stage.choice === choice)) state.activeStageId = choice;
  state.pathPreviewStageId = state.activeStageId;
  state.selectedSectionIndex = 0;
  state.selectedPathNode = "";
  state.guidedPathNode = "";
  state.practicalUse = false;
  state.activeResourceId = resolveContentTargetId(selected.resourceId);
  if (selected.view === "moduleDetailView" || selected.view === "stageDetailView") {
    const target = moduleTargetForResource(selected.resourceId);
    state.activeStageId = target.stageId;
    state.pathPreviewStageId = state.activeStageId;
    state.activeModuleIndex = target.moduleIndex;
    state.selectedSectionIndex = selectedSectionIndexForModule(target.stageId, target.moduleIndex);
    state.selectedPathNode = pathNodeKey("content", stageForChoice(target.stageId), state.selectedSectionIndex);
    state.moduleMode = target.mode;
    state.quizChoice = "";
    state.quizChecked = false;
    state.practicalUse = false;
  }
  state.lastQuestion = selected.question;
  els.askInput.value = selected.question;
  renderAll();
  toast(selected.message);
  setView(selected.view);
}

function openJourneySectionStart(stageChoice) {
  const stage = stageForChoice(stageChoice);
  state.activeStageId = stage.choice;
  state.pathPreviewStageId = stage.choice;
  state.selectedSectionIndex = 0;
  state.selectedPathNode = "";
  state.guidedPathNode = "";
  state.sectionPicker = null;
  state.sectionReview = null;
  state.practicalUse = false;
  state.quizChoice = "";
  state.quizChecked = false;
  renderStageDetail();
  setView("stageDetailView");
  bindDynamicActions();
}

function openJourneyPath(stageChoice = state.activeStageId) {
  const stage = stageForChoice(stageChoice || state.pathPreviewStageId || state.activeStageId);
  const groups = stageSectionGroups(stage);
  const maxSectionIndex = Math.max(groups.length - 1, 0);
  const sectionIndex = Number.isFinite(state.selectedSectionIndex)
    ? Math.max(0, Math.min(maxSectionIndex, state.selectedSectionIndex))
    : currentSectionGroupIndex(groups);
  state.activeStageId = stage.choice;
  state.pathPreviewStageId = stage.choice;
  state.selectedSectionIndex = sectionIndex;
  if (!state.selectedPathNode || !state.selectedPathNode.includes(`:${stage.choice}:`)) {
    state.selectedPathNode = pathNodeKey("content", stage, sectionIndex);
  }
  state.guidedPathNode = "";
  state.sectionPicker = null;
  state.sectionReview = null;
  state.practicalUse = false;
  state.quizChoice = "";
  state.quizChecked = false;
  renderStageDetail();
  setView("stageDetailView");
  bindDynamicActions();
}

function openDefaultJourneyPath() {
  openJourneyPath(state.pathPreviewStageId || state.activeStageId || "exploreJesus");
}

function handlePopularStart(choice) {
  const starts = {
    bible: {
      resourceId: sourceBackedQuickStarts.bible,
      question: t("quick.bible.question"),
      view: "moduleDetailView"
    },
    newChristian: {
      resourceId: sourceBackedQuickStarts.newChristian,
      question: t("quick.newChristian.question"),
      view: "moduleDetailView",
      stageId: "startFollowing"
    },
    jesus: {
      resourceId: sourceBackedQuickStarts.jesus,
      question: t("quick.jesus.question"),
      view: "moduleDetailView"
    },
    prayer: {
      resourceId: sourceBackedQuickStarts.prayer,
      question: t("quick.prayer.question"),
      view: "moduleDetailView"
    },
    farFromGod: {
      resourceId: "vid_jesus_001",
      question: t("quick.farFromGod.question"),
      view: "stageDetailView",
      stageId: "exploreJesus"
    },
    speakers: {
      resourceId: state.activeResourceId,
      question: state.lastQuestion,
      view: "stageDetailView",
      stageId: "leadMultiply"
    }
  };
  const selected = starts[choice] || starts.newChristian;
  if (selected.stageId) state.activeStageId = selected.stageId;
  state.pathPreviewStageId = state.activeStageId;
  state.selectedSectionIndex = 0;
  state.selectedPathNode = "";
  state.guidedPathNode = "";
  state.practicalUse = false;
  state.activeResourceId = resolveContentTargetId(selected.resourceId);
  if (selected.view === "moduleDetailView" || selected.view === "stageDetailView") {
    const target = moduleTargetForResource(selected.resourceId);
    state.activeStageId = target.stageId;
    state.pathPreviewStageId = state.activeStageId;
    state.activeModuleIndex = target.moduleIndex;
    state.selectedSectionIndex = selectedSectionIndexForModule(target.stageId, target.moduleIndex);
    state.selectedPathNode = pathNodeKey("content", stageForChoice(target.stageId), state.selectedSectionIndex);
    state.moduleMode = target.mode;
    state.quizChoice = "";
    state.quizChecked = false;
    state.practicalUse = false;
  }
  state.lastQuestion = selected.question;
  els.askInput.value = selected.question;
  renderAll();
  toast(t("toast.quickStart"));
  setView(selected.view);
}

function renderHome() {
  const item = activeResource();
  els.homeHeroTitle.textContent = item.title;
  els.homeHeroSummary.textContent = item.summary;
  els.homeHeroTags.innerHTML = [
    tag(item.topic, "green"),
    tag(labelize(item.stage), "blue"),
    tag(item.length, "orange")
  ].join("");
  els.homeHeroVisual.className = `visual-card ${item.visualType}`;
  els.homeVisualTitle.textContent = item.title;
  els.homeVisualMeta.textContent = `${item.length} · ${labelize(item.stage)}`;
  els.homeLessons.innerHTML = journeyLessons.slice(0, 3).map((lesson, index) => {
    const resource = resources.find((entry) => entry.id === lesson.resourceId);
    return rowHtml(resource, `${index + 1}. ${lesson.title}`, lesson.detail, "Open", `data-discover-open="${resolveContentTargetId(resource.id)}"`);
  }).join("");
  els.homeMoments.innerHTML = resources.slice(1).map((resource) => rowHtml(resource, resource.title, `${resource.length} · ${resource.topic}`, "Open", `data-discover-open="${resolveContentTargetId(resource.id)}"`)).join("");
}

function discoveryRelatedItems(item) {
  const nextEpisodes = item.seriesId
    ? resources
      .filter((resource) => resource.seriesId === item.seriesId && (resource.episode || 0) > (item.episode || 0))
      .sort((a, b) => (a.episode || 0) - (b.episode || 0))
    : [];
  if (nextEpisodes.length) {
    return { title: state.language === "nl" ? "Verder ontdekken" : "Keep exploring", items: nextEpisodes };
  }
  return {
    title: "Recommended next",
    items: resources
      .filter((resource) => resource.id !== item.id)
      .sort((a, b) => Number(b.stage === item.stage) - Number(a.stage === item.stage))
      .slice(0, 3)
  };
}

function isAudioResource(resource) {
  if (!resource) return false;
  const formats = Array.isArray(resource.format) ? resource.format : [];
  return resource.visualType === "audio"
    || resource.primaryMedium === "listen"
    || resource.contentType === "podcast"
    || resource.contentType === "audiobook"
    || (formats.includes("listen") && !formats.includes("watch"));
}

function resourceHasPlayableAudio(resource) {
  if (!isAudioResource(resource)) return false;
  const statusText = [
    resource?.status,
    resource?.admin?.packageStatus,
    resource?.contentStatus
  ].map((value) => String(value || "").toLowerCase()).join(" ");
  if (statusText.includes("placeholder") || statusText.includes("coming soon")) return false;
  return Boolean(
    resourceMuxPlaybackId(resource)
    || resource?.audioUrl
    || resource?.audioHost?.url
    || resource?.audioHost?.playbackId
  );
}

function resourceArtwork(resource) {
  return resource?.posterUrl || resource?.thumbnailUrl || resource?.artwork || resource?.videoHost?.thumbnailUrl || resource?.videoHost?.thumbnail || homeResourceArtwork(resource) || "";
}

function formatClock(seconds) {
  const total = Math.max(0, Math.floor(Number(seconds) || 0));
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const secs = total % 60;
  if (hours) return `${hours}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  return `${minutes}:${String(secs).padStart(2, "0")}`;
}

function audioMuxPlayerElementHtml(resource) {
  if (!resourceHasPlayableAudio(resource)) return "";
  const playbackId = resourceMuxPlaybackId(resource);
  if (!playbackId) return "";
  const title = resourceTitle(resource, "One In Him audio");
  const poster = resourceArtwork(resource);
  const attrs = [
    `id="discoverAudioPlayer"`,
    `class="discover-audio-engine"`,
    `playback-id="${esc(playbackId)}"`,
    `stream-type="on-demand"`,
    `accent-color="#ee7326"`,
    `video-title="${esc(title)}"`,
    `metadata-video-title="${esc(title)}"`,
    `playsinline`,
    `no-tooltips`
  ];
  if (poster) attrs.push(`poster="${esc(poster)}"`);
  return `<mux-player ${attrs.join(" ")}></mux-player>`;
}

function clearDiscoveryAudioSleepTimer() {
  if (!discoveryAudioSleepTimer) return;
  window.clearTimeout(discoveryAudioSleepTimer);
  discoveryAudioSleepTimer = null;
}

function discoverAudioNextEpisode(item) {
  if (!item?.seriesId) return null;
  return resources
    .filter((resource) =>
      resource.id !== item.id
      && resource.seriesId === item.seriesId
      && isAudioResource(resource)
      && (Number(resource.episode) || 0) > (Number(item.episode) || 0)
    )
    .sort((a, b) => (Number(a.episode) || 0) - (Number(b.episode) || 0))[0] || null;
}

function bindDiscoveryAudioControls(item) {
  const player = document.getElementById("discoverAudioPlayer");
  const playButton = document.getElementById("discoverAudioPlay");
  const range = document.getElementById("discoverAudioRange");
  const currentLabel = document.getElementById("discoverAudioCurrent");
  const durationLabel = document.getElementById("discoverAudioDuration");
  const speedButton = document.getElementById("discoverAudioSpeed");
  const timerSelect = document.getElementById("discoverAudioTimer");
  const nextButton = document.querySelector("[data-audio-next]");
  const nextEpisode = discoverAudioNextEpisode(item);
  const speeds = [1, 1.25, 1.5, 2];

  function durationSeconds() {
    const playerDuration = Number(player?.duration);
    return Number.isFinite(playerDuration) && playerDuration > 0 ? playerDuration : Number(item.seconds) || 0;
  }

  function syncProgress() {
    const duration = durationSeconds();
    const current = Math.max(0, Number(player?.currentTime) || 0);
    if (range) {
      range.max = String(Math.max(duration, 1));
      if (document.activeElement !== range) range.value = String(Math.min(current, duration || current));
    }
    if (currentLabel) currentLabel.textContent = formatClock(current);
    if (durationLabel) durationLabel.textContent = duration ? formatClock(duration) : "--:--";
  }

  function syncPlayState() {
    if (!playButton) return;
    playButton.textContent = player && !player.paused ? "Pause" : "Listen";
  }

  if (!player) {
    [playButton, range, speedButton, timerSelect].filter(Boolean).forEach((control) => {
      control.disabled = true;
      control.setAttribute("aria-disabled", "true");
    });
    syncProgress();
    return;
  }

  syncProgress();
  syncPlayState();

  playButton?.addEventListener("click", async () => {
    try {
      if (player.paused) {
        await player.play();
      } else {
        player.pause();
      }
    } catch (error) {
      toast("Tap once more to start audio.");
    }
    syncPlayState();
  });

  document.querySelectorAll("[data-audio-skip]").forEach((button) => {
    button.addEventListener("click", () => {
      const delta = Number(button.dataset.audioSkip) || 0;
      const duration = durationSeconds();
      player.currentTime = Math.max(0, Math.min(duration || Number.MAX_SAFE_INTEGER, (Number(player.currentTime) || 0) + delta));
      syncProgress();
    });
  });

  range?.addEventListener("input", () => {
    player.currentTime = Number(range.value) || 0;
    syncProgress();
  });

  speedButton?.addEventListener("click", () => {
    const currentSpeed = Number(player.playbackRate) || 1;
    const nextSpeed = speeds[(speeds.indexOf(currentSpeed) + 1) % speeds.length] || 1;
    player.playbackRate = nextSpeed;
    speedButton.textContent = `${nextSpeed}x`;
  });

  timerSelect?.addEventListener("change", () => {
    clearDiscoveryAudioSleepTimer();
    const minutes = Number(timerSelect.value) || 0;
    if (!minutes) return;
    discoveryAudioSleepTimer = window.setTimeout(() => {
      player.pause();
      syncPlayState();
      timerSelect.value = "";
      discoveryAudioSleepTimer = null;
    }, minutes * 60 * 1000);
  });

  nextButton?.addEventListener("click", () => {
    if (nextEpisode) setDiscoveryResource(nextEpisode.id);
  });

  player.addEventListener("loadedmetadata", syncProgress);
  player.addEventListener("durationchange", syncProgress);
  player.addEventListener("timeupdate", syncProgress);
  player.addEventListener("play", syncPlayState);
  player.addEventListener("pause", syncPlayState);
  player.addEventListener("ended", () => {
    clearDiscoveryAudioSleepTimer();
    if (nextEpisode) setDiscoveryResource(nextEpisode.id);
  });
}

function renderDiscoveryAudioDetail(item) {
  clearDiscoveryAudioSleepTimer();
  const shell = document.querySelector(".discover-watch-shell");
  const buttons = document.querySelector(".discover-watch-buttons");
  const target = moduleTargetForResource(item.id);
  const related = discoveryRelatedItems(item);
  const nextEpisode = discoverAudioNextEpisode(item);
  const artwork = resourceArtwork(item);
  const playableAudio = resourceHasPlayableAudio(item);
  const playerMarkup = audioMuxPlayerElementHtml(item);

  shell?.classList.add("audio-detail");
  stopEmbeddedMediaInElement(els.discoverWatchMedia);
  els.discoverWatchMedia.className = `discover-watch-media audio-cover${artwork ? " has-cover-art" : ""}${playerMarkup ? " has-audio-player" : ""}`;
  els.discoverWatchMedia.innerHTML = `
    ${artwork ? `<img class="discover-watch-cover-art" src="${esc(artwork)}" alt="" />` : `<span class="discover-watch-placeholder-badge">${esc(t("homeDiscover.comingSoon"))}</span>`}
    ${playerMarkup}
  `;

  if (buttons) {
    buttons.innerHTML = `
      <button class="primary-btn" type="button" id="discoverJoinJourney">Open journey step</button>
      ${playableAudio && nextEpisode ? `<button class="soft-btn" type="button" data-audio-next>Next episode</button>` : ""}
      <button class="soft-btn" type="button" data-share="${esc(item.id)}">${state.language === "nl" ? "Delen" : "Share"}</button>
    `;
    els.discoverJoinJourney = document.getElementById("discoverJoinJourney");
  }

  if (isAudioResource(item) && journeyResourceForResource(item)?.showInJourney === false) {
    els.discoverJoinJourney.textContent = state.language === "nl" ? "Luister nu" : "Listen now";
  }
  els.discoverDetailTitle.textContent = resourceTitle(item, item.title);
  els.discoverDetailMeta.textContent = `${labelize(item.contentType)} · ${localizedField(item.length, item.length)} · ${resourceSpeakerName(item)}`;
  els.discoverDetailSummary.textContent = resourceSummary(item, item.summary);
  els.discoverRelatedTitle.textContent = related.title;
  els.discoverJoinJourney.onclick = () => {
    if (journeyResourceForResource(item)?.showInJourney === false) {
      const player = els.discoverWatchMedia.querySelector("mux-player, video, audio");
      if (player?.play) Promise.resolve(player.play()).catch(() => toast(state.language === "nl" ? "Gebruik de afspeelknop in de video." : "Use the play button on the video."));
      else els.discoverWatchMedia.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    state.activeStageId = target.stageId;
    state.activeModuleIndex = target.moduleIndex;
    state.moduleMode = "listen";
    state.selectedSectionIndex = selectedSectionIndexForModule(target.stageId, target.moduleIndex);
    state.quizChoice = "";
    state.quizChecked = false;
    renderStageDetail();
    renderModuleDetail();
    setView("moduleDetailView");
    bindDynamicActions();
  };

  const duration = Number(item.seconds) || 0;
  const details = document.querySelector(".discover-watch-details");
  if (details) {
    details.innerHTML = playableAudio ? `
      <p class="discover-watch-meta" id="discoverDetailMeta">${esc(labelize(item.contentType))} · ${esc(localizedField(item.length, item.length))} · ${esc(resourceSpeakerName(item))}</p>
      <div class="discover-audio-progress" aria-label="Audio progress">
        <input class="discover-audio-range" id="discoverAudioRange" type="range" min="0" max="${esc(String(Math.max(duration, 1)))}" value="0" step="1" />
        <div class="discover-audio-time">
          <span id="discoverAudioCurrent">0:00</span>
          <span id="discoverAudioDuration">${esc(duration ? formatClock(duration) : "--:--")}</span>
        </div>
      </div>
      <div class="discover-audio-controls" aria-label="Audio controls">
        <button class="soft-btn" type="button" data-audio-skip="-15">-15</button>
        <button class="primary-btn discover-audio-play" type="button" id="discoverAudioPlay">Listen</button>
        <button class="soft-btn" type="button" data-audio-skip="30">+30</button>
        <button class="soft-btn" type="button" id="discoverAudioSpeed">1x</button>
        <select class="discover-audio-timer" id="discoverAudioTimer" aria-label="Sleep timer">
          <option value="">Timer off</option>
          <option value="5">5 min</option>
          <option value="10">10 min</option>
          <option value="15">15 min</option>
          <option value="30">30 min</option>
        </select>
      </div>
      <p class="discover-watch-summary" id="discoverDetailSummary">${esc(resourceSummary(item, item.summary))}</p>
    ` : `
      <p class="discover-watch-meta" id="discoverDetailMeta">${esc(labelize(item.contentType))} · ${esc(localizedField(item.length, item.length))} · ${esc(resourceSpeakerName(item))}</p>
      <div class="discover-audio-unavailable">
        <strong>${esc(homeCommonText("comingSoon", "Coming soon"))}</strong>
        <span>${esc("Audio is not available yet.")}</span>
      </div>
      <p class="discover-watch-summary" id="discoverDetailSummary">${esc(resourceSummary(item, item.summary))}</p>
    `;
    els.discoverDetailMeta = document.getElementById("discoverDetailMeta");
    els.discoverDetailSummary = document.getElementById("discoverDetailSummary");
  }

  els.discoverRelatedList.innerHTML = related.items.map((resource) => `
    <button class="discover-related-card" type="button" data-discover-open="${esc(resource.id)}">
      <span class="discover-related-thumb">${esc(isAudioResource(resource) ? "♪" : resource.format.includes("read") && !resource.format.includes("watch") ? "“" : "▶")}</span>
      <span>
        <strong>${esc(resourceTitle(resource, resource.title))}</strong>
        <span>${esc(localizedField(resource.length, resource.length))} · ${esc(localizedField(resource.topic, resource.topic))}</span>
      </span>
    </button>
  `).join("");
  if (playableAudio) bindDiscoveryAudioControls(item);
}

function renderDiscoveryMedia(item, options = {}) {
  const playIcon = item.format.includes("read") && !item.format.includes("watch") ? "“" : item.format.includes("listen") && !item.format.includes("watch") ? "♪" : "▶";
  const allowMedia = options.allowMedia ?? state.activeView === "discoveryDetailView";
  const isMuxPlayable = item.format.includes("watch") || item.format.includes("listen");
  const playerMarkup = allowMedia && isMuxPlayable ? muxPlayerElementHtml(item) : "";
  const playerUrl = !playerMarkup && allowMedia && isMuxPlayable ? muxPlayerUrl(item) : "";
  stopEmbeddedMediaInElement(els.discoverWatchMedia);
  els.discoverWatchMedia.className = `discover-watch-media ${esc(item.visualType)}${playerMarkup || playerUrl ? " has-mux" : ""}`;
  if (playerMarkup) {
    els.discoverWatchMedia.innerHTML = playerMarkup;
    els.discoverWatchPlay = null;
  } else if (playerUrl) {
    els.discoverWatchMedia.innerHTML = `
      <iframe
        class="mux-frame"
        src="${esc(playerUrl)}"
        title="${esc(item.title || "One In Him media")}"
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
        allowfullscreen
      ></iframe>
    `;
    els.discoverWatchPlay = null;
  } else if (item.posterUrl || item.thumbnailUrl) {
    const coverUrl = item.posterUrl || item.thumbnailUrl;
    els.discoverWatchMedia.classList.add("has-cover-art");
    els.discoverWatchMedia.innerHTML = `
      <img class="discover-watch-cover-art" src="${esc(coverUrl)}" alt="" />
      <span class="discover-watch-placeholder-badge">${esc(t("homeDiscover.comingSoon"))}</span>
    `;
    els.discoverWatchPlay = null;
  } else {
    els.discoverWatchMedia.innerHTML = `<button class="discover-watch-play" type="button" id="discoverWatchPlay">${esc(playIcon)}</button>`;
    els.discoverWatchPlay = document.getElementById("discoverWatchPlay");
  }
}

function renderDiscoveryDetail() {
  const item = activeResource();
  const shell = document.querySelector(".discover-watch-shell");
  const buttons = document.querySelector(".discover-watch-buttons");
  if (isAudioResource(item)) {
    renderDiscoveryAudioDetail(item);
    return;
  }
  clearDiscoveryAudioSleepTimer();
  shell?.classList.remove("audio-detail");
  if (buttons) {
    buttons.innerHTML = `
      <button class="primary-btn" type="button" id="discoverJoinJourney">${state.language === "nl" ? "Start deze les" : "Start this lesson"}</button>
      <button class="soft-btn" type="button" data-share="${esc(item.id)}">${state.language === "nl" ? "Delen" : "Share"}</button>
    `;
    els.discoverJoinJourney = document.getElementById("discoverJoinJourney");
  }
  const details = document.querySelector(".discover-watch-details");
  if (details) {
    details.innerHTML = `
      <p class="discover-watch-meta" id="discoverDetailMeta"></p>
      <p class="discover-watch-summary" id="discoverDetailSummary"></p>
    `;
    els.discoverDetailMeta = document.getElementById("discoverDetailMeta");
    els.discoverDetailSummary = document.getElementById("discoverDetailSummary");
  }
  const target = moduleTargetForResource(item.id);
  const linked = journeyResourceForResource(item)?.showInJourney !== false;
  const primary = document.getElementById("discoverJoinJourney");
  if (!linked) {
    primary.textContent = state.language === "nl" ? "Bekijk de boodschap" : "Watch message";
    buttons.insertAdjacentHTML("beforeend", `<button type="button" class="learner-text-button" id="discoverExploreJourney">${state.language === "nl" ? "Ontdek de discipelschapsreis" : "Explore the discipleship journey"}</button>`);
    document.getElementById("discoverExploreJourney").onclick = () => handleGatewayNav("journey");
  }
  const related = discoveryRelatedItems(item);
  renderDiscoveryMedia(item);
  els.discoverDetailTitle.textContent = resourceTitle(item, item.title);
  els.discoverDetailMeta.textContent = `${labelize(item.contentType)} · ${localizedField(item.length, item.length)} · ${resourceSpeakerName(item)}`;
  els.discoverDetailSummary.textContent = resourceSummary(item, item.summary);
  els.discoverRelatedTitle.textContent = related.title;
  els.discoverJoinJourney.onclick = () => {
    if (journeyResourceForResource(item)?.showInJourney === false) {
      const player = els.discoverWatchMedia.querySelector("mux-player, video, audio");
      if (player?.play) Promise.resolve(player.play()).catch(() => toast(state.language === "nl" ? "Gebruik de afspeelknop in de video." : "Use the play button on the video."));
      else els.discoverWatchMedia.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    state.activeStageId = target.stageId;
    state.activeModuleIndex = target.moduleIndex;
    state.moduleMode = target.mode;
    state.selectedSectionIndex = 0;
    state.quizChoice = "";
    state.quizChecked = false;
    renderStageDetail();
    renderModuleDetail();
    setView("moduleDetailView");
    bindDynamicActions();
  };
  els.discoverRelatedList.innerHTML = related.items.map((resource) => `
    <button class="discover-related-card" type="button" data-discover-open="${esc(resource.id)}">
      <span class="discover-related-thumb">${esc(resource.format.includes("listen") ? "♪" : resource.format.includes("read") && !resource.format.includes("watch") ? "“" : "▶")}</span>
      <span>
        <strong>${esc(resourceTitle(resource, resource.title))}</strong>
        <span>${esc(localizedField(resource.length, resource.length))} · ${esc(localizedField(resource.topic, resource.topic))}</span>
      </span>
    </button>
  `).join("");
}

function renderPathSelect() {
  const previewChoice = pathOptions.some((option) => option.choice === state.pathPreviewStageId)
    ? state.pathPreviewStageId
    : state.activeStageId;
  const activeOption = pathOptions.find((option) => option.choice === previewChoice) || pathOptions[0];
  const activeTopics = t(activeOption.topicsKey).split("|").filter(Boolean);
  const activeUnits = stageSectionGroups(activeOption).length || parseStageSections(activeOption).length;
  els.pathGrid.innerHTML = `
    <div class="path-map-card" aria-label="Journey sections">
      ${pathOptions.map((option) => {
        const isActive = option.choice === activeOption.choice;
        const stageText = option.color === "stage-start" ? "var(--oih-black)" : "#fff";
        const mobilePreviewTopics = t(option.topicsKey).split("|").filter(Boolean);
        const mobilePreviewUnits = stageSectionGroups(option).length || parseStageSections(option).length;
        return `
          <button
            class="path-map-node ${esc(option.color)}${isActive ? " active" : ""}"
            type="button"
            data-path-preview-section="${esc(option.choice)}"
            aria-pressed="${isActive ? "true" : "false"}"
            style="--stage-color: ${esc(option.stageColor)}; --stage-text: ${stageText};"
          >
            <span class="path-map-index">${esc(option.icon)}</span>
            <span class="path-map-label">
              <strong>${esc(t(option.titleKey))}</strong>
              <span>${esc(t(option.copyKey))}</span>
            </span>
            <span class="path-map-progress">${esc(option.progress ? `${option.progress}%` : "New")}</span>
          </button>
          ${isActive ? `
            <div class="path-map-mobile-preview" style="--stage-color: ${esc(option.stageColor)}; --stage-text: ${stageText};">
              <p>${esc(t(option.copyKey))}</p>
              <div class="path-preview-topics">
                ${mobilePreviewTopics.map((topic) => `<span class="path-preview-topic">${esc(topic)}</span>`).join("")}
              </div>
              <p class="path-map-mobile-units">${esc(`${mobilePreviewUnits} unit${mobilePreviewUnits === 1 ? "" : "s"} ready to explore.`)}</p>
              <button class="primary-btn" type="button" data-path-section-start="${esc(option.choice)}">Begin section</button>
            </div>
          ` : ""}
        `;
      }).join("")}
    </div>
    <aside class="path-preview-card ${esc(activeOption.color)}" style="--stage-color: ${esc(activeOption.stageColor)}; --stage-text: ${activeOption.color === "stage-start" ? "var(--oih-black)" : "#fff"};">
      <span class="path-preview-kicker">${esc(t(activeOption.metaKey))}</span>
      <h3>${esc(t(activeOption.titleKey))}</h3>
      <p>${esc(t(activeOption.copyKey))}</p>
      <div class="path-preview-topics">
        ${activeTopics.map((topic) => `<span class="path-preview-topic">${esc(topic)}</span>`).join("")}
      </div>
      <p>${esc(`${activeUnits} unit${activeUnits === 1 ? "" : "s"} ready to explore.`)}</p>
      <button class="primary-btn" type="button" data-path-section-start="${esc(activeOption.choice)}">Begin section</button>
    </aside>
  `;
}

function parseStageSections(stage) {
  return t(`${stage.titleKey.replace(".title", ".sections")}`).split("~").map((raw, index) => {
    const [title, subtitle, detail, progress, courses = ""] = raw.split("|");
    return {
      title,
      subtitle,
      detail,
      progress: 0,
      courses: courses.split(",").map((item) => item.trim()).filter(Boolean),
      range: `${index * 5 + 1} to ${index * 5 + 5}`
    };
  });
}

function stageChoiceModuleId(stage) {
  return {
    exploreJesus: "stage_1_explore_jesus",
    startFollowing: "stage_2_start_following",
    growRoots: "stage_3_grow_deep_roots",
    liveMission: "stage_4_live_on_mission",
    leadMultiply: "stage_5_lead_and_multiply"
  }[stage.choice] || "";
}

function clearJourneyStructureCache() {
  journeyContentVersion += 1;
  journeyStructureCache.rawModules.clear();
  journeyStructureCache.rawGroups.clear();
  journeyStructureCache.packageModules.clear();
  journeyStructureCache.sections.clear();
  state.journeyBannerGroups = {};
}

function journeyCacheKey(stage, suffix = "") {
  return `${journeyContentVersion}:${stage.choice}${suffix ? `:${suffix}` : ""}`;
}

function rawPackageModulesForStage(stage) {
  const cacheKey = journeyCacheKey(stage);
  if (journeyStructureCache.rawModules.has(cacheKey)) return journeyStructureCache.rawModules.get(cacheKey);
  if (journeyCurriculum.has(stage.choice)) return journeyCurriculum.get(stage.choice);
  const moduleId = stageChoiceModuleId(stage);
  if (!moduleId) return [];
  const modules = resources
    .filter((resource) => resource.seriesId === moduleId && resource.showInJourney !== false)
    .sort((a, b) => {
      const unitDiff = resourceUnitNumber(a, stage) - resourceUnitNumber(b, stage);
      if (unitDiff) return unitDiff;
      const lessonDiff = resourceLessonOrder(a) - resourceLessonOrder(b);
      if (lessonDiff) return lessonDiff;
      return (a.episode || 0) - (b.episode || 0);
    });
  journeyStructureCache.rawModules.set(cacheKey, modules);
  return modules;
}

// A content module is a distinct source segment; questions remain separate steps.
function installFirstJourneyUnit() {
  const book = resources.find(item => item.id === "book_one_basics_1_1_eternal_life");
  const video = resources.find(item => item.id === "mux_one_basics_1_1_full_video");
  if (!book?.readBody?.length || !resourceMuxPlaybackId(video)) return;
  const definitions = [
    { slug: "opening", title: "Eternal Life · Part 1", medium: "watch", start: 0, end: 360 },
    { slug: "living-forever", title: "More than living forever", medium: "read", paragraphs: [0, 2] },
    { slug: "teaching-audio", title: "Eternal Life · Part 2 (audio)", medium: "listen", start: 360, end: 720 },
    { slug: "knowing-the-father", title: "Knowing the Father through Jesus", medium: "read", paragraphs: [2, 6] },
    { slug: "closing", title: "Eternal Life · Part 3", medium: "watch", start: 720, end: 1080 }
  ];
  definitions.forEach((definition, index) => {
    const isReading = definition.medium === "read";
    const body = isReading ? book.readBody.slice(...definition.paragraphs) : [];
    const minutes = isReading ? Math.max(1, Math.ceil(body.join(" ").split(/\s+/).length / 200)) : (definition.end - definition.start) / 60;
    const id = `journey_explore_unit_1_${definition.slug}`;
    const resource = {
      ...book, id, packageId: id, title: definition.title,
      openingPrompt: definition.title, summary: isReading ? body[0] : `One Basics 1.1: Eternal Life · ${formatClock(definition.start)}–${formatClock(definition.end)}${definition.medium === "listen" ? " · audio from the original teaching" : ""}`,
      primaryMedium: definition.medium, format: [definition.medium, "reflect"],
      visualType: visualTypeForMedium(definition.medium),
      contentType: isReading ? "book_excerpt" : definition.medium === "listen" ? "audio" : "short_clip",
      sourceResourceId: isReading ? book.id : video.id,
      sourceLabel: isReading ? "One Basics 1.1 · study guide" : "One Basics 1.1 · original teaching",
      readBody: body, transcript: body, videoHost: isReading ? null : video.videoHost,
      muxVirtualClip: null, isMuxClip: !isReading,
      clipStartSeconds: isReading ? null : definition.start, clipEndSeconds: isReading ? null : definition.end,
      length: `${minutes} min ${definition.medium === "read" ? "read" : definition.medium === "listen" ? "audio" : "video"}`,
      seconds: minutes * 60, seriesId: "stage_1_explore_jesus", stage: "explore",
      unitNumber: 1, unitTitle: "Knowing God through Jesus", pieceNumber: index + 1,
      episode: index + 1, showInJourney: true, showInDiscover: false,
      quickCheck: firstUnitChecks()[index],
      curatedUnit: true, access: { level: "free" }
    };
    const existing = resources.findIndex(item => item.id === id);
    if (existing >= 0) resources[existing] = resource;
    else resources.push(resource);
  });
  clearJourneyStructureCache();
}


// These checks are grounded in the supplied Eternal Life guide and its Scripture references.
function firstUnitChecks() {
  return [
    ["According to John 17:3, what is eternal life?", "Knowing the Father and Jesus Christ", "Never needing to learn or grow", "Earning God's acceptance through good works", "John 17:3 describes eternal life as knowing the only true God and Jesus Christ whom he sent."],
    ["According to John 3:16, why did God give his Son?", "So that whoever believes in him should not perish but have eternal life", "So that people could earn salvation by religious effort", "So that only people with no past mistakes could approach him", "John 3:16 connects God's love and the gift of his Son with salvation and eternal life for those who believe."],
    ["In John 10:10, what does Jesus say he came to give?", "Life, and life more abundantly", "A life that never needs a relationship with God", "Acceptance based on perfect religious performance", "Jesus says he came so that people may have life, and have it more abundantly (John 10:10)."],
    ["According to John 14:9, how does Jesus reveal the Father?", "Whoever has seen Jesus has seen the Father", "Jesus shows that the Father cannot be known", "Jesus reveals a completely different character from the Father", "Jesus says, 'He who has seen Me has seen the Father' (John 14:9)."],
    ["According to John 14:6, how do we come to the Father?", "Through Jesus, the way, the truth and the life", "By being more religious than other people", "By knowing every answer before we begin", "In John 14:6, Jesus says that no one comes to the Father except through him."]
  ].map(([question, correct, wrongOne, wrongTwo, feedback]) => ({
    question, answers: [{id: "truth", label: correct}, {id: "wrong_one", label: wrongOne}, {id: "wrong_two", label: wrongTwo}],
    correctAnswer: "truth", feedback
  }));
}

function teachingParagraphs(resource) {
  // PDF question pages sometimes start in the middle of a paragraph. Keep the teaching before them.
  const result = [];
  for (const raw of resource.readBody || []) {
    const text = String(raw);
    const boundary = text.search(/\bQUESTIONS\b|Answers in the back of the study guide|Reactions and discussion|(?:^|\s)\d*\s*Read:\s.*?\bQuestion:/);
    const teaching = (boundary < 0 ? text : text.slice(0, boundary)).trim();
    if (teaching) result.push(teaching);
    if (boundary >= 0) break;
  }
  return result;
}

function splitReadingIntoModules(source, count, stage, legacyKeys = []) {
  const body = teachingParagraphs(source);
  if (body.length < count) throw new Error(`Not enough supplied teaching to split ${source.id} into ${count} modules`);
  return Array.from({length: count}, (_, index) => {
    const start = Math.floor(index * body.length / count);
    const end = Math.floor((index + 1) * body.length / count);
    const paragraphs = body.slice(start, end);
    const minutes = Math.max(1, Math.ceil(paragraphs.join(" ").split(/\s+/).length / 200));
    const title = `${source.title.replace(/^One Basics\s+\d+\.\d+:\s*/, "")} · Part ${index + 1} of ${count}`;
    return {
      ...source, id: `${source.id}__${stage.choice}_part_${index + 1}_of_${count}`,
      title, openingPrompt: title, summary: paragraphs[0], readBody: paragraphs, transcript: paragraphs,
      sourceResourceId: source.id, curriculumSourceId: source.id, sourceParagraphRange: [start, end], legacyProgressKeys: legacyKeys,
      primaryMedium: "read", format: ["read", "reflect"], videoHost: null, isMuxClip: false,
      clipStartSeconds: null, clipEndSeconds: null, visualType: "book", contentType: "book_excerpt",
      length: `${minutes} min read`, seconds: minutes * 60, showInDiscover: false, curatedUnit: true
    };
  });
}

function installFiveModuleCurriculum() {
  // Capture the v231 numeric ordering before rebuilding it. Stable IDs prevent regrouping from
  // awarding progress to a different lesson; old completions still map to their actual source.
  journeyCurriculum.clear();
  clearJourneyStructureCache();
  const previous = new Map(pathOptions.map(stage => [stage.choice, packageModulesForStage(stage).map(item => item.id)]));
  pathOptions.forEach(stage => {
    let modules = rawPackageModulesForStage(stage).map(resource => ({
      ...resource, curriculumSourceId: resource.id,
      legacyProgressKeys: previous.get(stage.choice).flatMap((id, index) => id === resource.id ? [`${stage.choice}:${index}`] : [])
    }));
    if (stage.choice === "exploreJesus") {
      modules = modules.filter(resource => resource.curatedUnit);
      ["book_one_basics_1_2_saved_by_grace", "book_one_basics_1_4_intimacy_with_god"].forEach(id => {
        const source = resources.find(resource => resource.id === id);
        if (source) modules.push(...splitReadingIntoModules(source, 5, stage));
      });
    } else {
      // Episode values in book two start at 101. They are source order, not unit numbers.
      modules.sort((a, b) => (Number(a.episode) || 0) - (Number(b.episode) || 0) || a.id.localeCompare(b.id));
      modules = modules.map(resource => resource.primaryMedium === "read"
        ? {...resource, readBody: teachingParagraphs(resource), transcript: teachingParagraphs(resource)}
        : resource);
      const remainder = modules.length % 5;
      if (remainder) {
        const tail = modules.splice(modules.length - remainder);
        const counts = tail.map(() => 1);
        while (counts.reduce((sum, count) => sum + count, 0) < 5) {
          const candidates = tail.map((resource, index) => ({index, size: (resource.readBody || []).length / counts[index]}))
            .filter(({index}) => tail[index].primaryMedium === "read" && tail[index].readBody.length > counts[index]);
          candidates.sort((a, b) => b.size - a.size);
          if (!candidates.length) throw new Error(`Five sourced modules unavailable for ${stage.choice}`);
          counts[candidates[0].index] += 1;
        }
        tail.forEach((resource, index) => modules.push(...(counts[index] === 1 ? [resource]
          : splitReadingIntoModules(resource, counts[index], stage, resource.legacyProgressKeys))));
      }
    }
    modules = modules.map((resource, index) => {
      const unitNumber = Math.floor(index / 5) + 1;
      const titles = stageSectionTitles(stage);
      const exploreTitles = ["Knowing God through Jesus", "Saved by grace", "Growing close to God"];
      return {...resource, unitNumber, pieceNumber: index % 5 + 1, curatedUnit: true,
        unitTitle: stage.choice === "exploreJesus" ? exploreTitles[unitNumber - 1] : titles[unitNumber - 1] || `Unit ${unitNumber}`};
    });
    journeyCurriculum.set(stage.choice, modules);
  });
  clearJourneyStructureCache();
}

function nodeMediumPreferenceKey(stage, unitNumber) {
  return `${stage.choice}:${unitNumber || 1}`;
}

function rawNodeGroupsForStage(stage) {
  const cacheKey = journeyCacheKey(stage);
  if (journeyStructureCache.rawGroups.has(cacheKey)) return journeyStructureCache.rawGroups.get(cacheKey);
  const grouped = new Map();
  rawPackageModulesForStage(stage).forEach((resource) => {
    const unitNumber = resourceUnitNumber(resource, stage);
    if (!grouped.has(unitNumber)) grouped.set(unitNumber, []);
    grouped.get(unitNumber).push(resource);
  });
  journeyStructureCache.rawGroups.set(cacheKey, grouped);
  return grouped;
}

function nodeMediumAvailability(modules = []) {
  const textSourceCount = modules.filter((resource) =>
    resourceSupportsMode(resource, "read") && !resource.isMuxClip
  ).length;
  return {
    mixed: modules.length >= 1,
    watch: modules.filter((resource) => resourceSupportsMode(resource, "watch")).length >= 5,
    read: textSourceCount >= 5 || modules.filter((resource) => resourceSupportsMode(resource, "read")).length >= 5,
    listen: modules.filter((resource) => resourceSupportsMode(resource, "listen")).length >= 5
  };
}

function effectiveNodeMediumPreference(stage, unitNumber, modules = []) {
  const requested = state.nodeMediumPreference[nodeMediumPreferenceKey(stage, unitNumber)] || "mixed";
  const availability = nodeMediumAvailability(modules);
  if (requested !== "mixed" && !availability[requested]) return "mixed";
  return requested;
}

function mixedNodeModules(modules = []) {
  if (modules.some(resource => resource.curatedUnit)) return modules.filter(resource => resource.curatedUnit).sort((a,b) => a.pieceNumber - b.pieceNumber).slice(0, 5);
  const pattern = ["watch", "read", "watch", "read", "watch"];
  const selected = [];
  const usedIds = new Set();
  pattern.forEach((medium) => {
    const match = modules.find((resource) =>
      !usedIds.has(resource.id) && resourceSupportsMode(resource, medium)
    );
    if (match) {
      selected.push(match);
      usedIds.add(match.id);
    }
  });
  modules.forEach((resource) => {
    if (selected.length < 5 && !usedIds.has(resource.id)) {
      selected.push(resource);
      usedIds.add(resource.id);
    }
  });
  return selected.slice(0, 5);
}

function modulesForNodePreference(stage, unitNumber, modules = []) {
  const preference = effectiveNodeMediumPreference(stage, unitNumber, modules);
  if (preference === "mixed") return mixedNodeModules(modules);
  if (preference === "read") {
    const textSourceModules = modules.filter((resource) =>
      resourceSupportsMode(resource, "read") && !resource.isMuxClip
    );
    if (textSourceModules.length >= 5) return textSourceModules.slice(0, 5);
  }
  return modules.filter((resource) => resourceSupportsMode(resource, preference)).slice(0, 5);
}

function nodeMediumPreferenceSignature(stage, rawGroups = rawNodeGroupsForStage(stage)) {
  return Array.from(rawGroups.keys())
    .sort((a, b) => a - b)
    .map((unitNumber) => `${unitNumber}:${state.nodeMediumPreference[nodeMediumPreferenceKey(stage, unitNumber)] || "mixed"}`)
    .join("|");
}

function packageModulesForStage(stage) {
  const rawGroups = rawNodeGroupsForStage(stage);
  if (!rawGroups.size) return [];
  const cacheKey = journeyCacheKey(stage, nodeMediumPreferenceSignature(stage, rawGroups));
  if (journeyStructureCache.packageModules.has(cacheKey)) return journeyStructureCache.packageModules.get(cacheKey);
  const modules = Array.from(rawGroups.entries())
    .sort(([a], [b]) => a - b)
    .flatMap(([unitNumber, modules]) => modulesForNodePreference(stage, unitNumber, modules));
  journeyStructureCache.packageModules.set(cacheKey, modules);
  return modules;
}

function resourceUnitNumber(resource, stage) {
  const explicit = Number(resource && resource.unitNumber);
  if (Number.isFinite(explicit) && explicit > 0) return explicit;
  const episode = Number(resource && resource.episode) || 1;
  return Math.max(1, Math.ceil(episode / ({growRoots: 6, liveMission: 6, leadMultiply: 4}[stage.choice] || 5)));
}

function resourceUnitTitle(resource, stage, unitNumber) {
  const titles = stageSectionTitles(stage);
  return (resource && resource.unitTitle) || titles[unitNumber - 1] || `Unit ${unitNumber}`;
}

function resourceLessonOrder(resource) {
  const piece = Number(resource && resource.pieceNumber);
  if (Number.isFinite(piece) && piece > 0) return piece;
  return 50 + (Number(resource && resource.episode) || 0);
}

function stageSections(stage) {
  const packaged = packageModulesForStage(stage);
  if (!packaged.length) return parseStageSections(stage);
  const cacheKey = journeyCacheKey(stage, nodeMediumPreferenceSignature(stage));
  if (journeyStructureCache.sections.has(cacheKey)) return journeyStructureCache.sections.get(cacheKey);
  const sections = packaged.map((resource, index) => {
    const title = resource.title.replace(/^One Basics\s+/, "");
    const unitNumber = resourceUnitNumber(resource, stage);
    const unitTitle = resourceUnitTitle(resource, stage, unitNumber);
    return {
      title,
      subtitle: resource.summary,
      detail: resource.readBody && resource.readBody[0] ? resource.readBody[0] : resource.summary,
      progress: 0,
      courses: [resource.topic, resource.length, resource.sourceLabel].filter(Boolean),
      range: `${index + 1} of ${packaged.length}`,
      unitNumber,
      unitTitle,
      lessonOrder: resourceLessonOrder(resource),
      moduleIndex: index,
      resourceId: resource.id,
      quickCheck: resource.quickCheck
    };
  });
  journeyStructureCache.sections.set(cacheKey, sections);
  return sections;
}

function stageSectionTitles(stage) {
  return {
    exploreJesus: ["Exploring Jesus"],
    startFollowing: ["New Life in Jesus", "First Foundations", "Living as a Disciple", "Daily Walk"],
    growRoots: ["Knowing God Deeply", "Grace, Rest and Worship", "Faith through Challenges", "Life in the Spirit", "Life and Eternity"],
    liveMission: ["Share Faith", "Serve and Pray", "Gifts for Serving", "Generosity and Stewardship"],
    leadMultiply: ["Leadership Foundations", "Pastoral and Multiplying Callings"]
  }[stage.choice] || ["Section"];
}

function stageSectionSize(stage) {
  return 5;
}

function sectionProgressKey(stage, groupIndex) {
  const ids = stageSectionGroups(stage)[groupIndex]?.modules.map(item => item.resourceId).join("|") || String(groupIndex);
  return `${stage.choice}:unit:${stableQuizHash(ids)}`;
}

function pieceProgressKey(stage, moduleIndex) {
  const resource = packageModulesForStage(stage)[moduleIndex];
  if (resource?.curatedUnit) return `${stage.choice}:${resource.id}`;
  return `${stage.choice}:${moduleIndex}`;
}

function learningPieceComplete(stage, moduleIndex) {
  if (state.completedPieces.has(pieceProgressKey(stage, moduleIndex))) return true;
  const resource = packageModulesForStage(stage)[moduleIndex];
  if (resource?.legacyProgressKeys?.some(key => state.completedPieces.has(key))) return true;
  return Boolean(stage.choice === "exploreJesus" && resource?.id === "journey_explore_unit_1_opening" &&
    (state.completedPieces.has("exploreJesus:0") || state.completed.has("mux_one_basics_1_1_opening_clip")));
}

function sectionDynamicProgress(stage, group, groupIndex, baseProgress) {
  if (!group || !group.modules || !group.modules.length) return 0;
  const completedPieces = group.modules.filter((item) =>
    learningPieceComplete(stage, item.moduleIndex)
  ).length;
  return Math.round((completedPieces / group.modules.length) * 100);
}

function journeyNodeIcon(resource, type = "content") {
  if (type === "review") return "↻";
  if (type === "practice") return "✓";
  if (!resource) return "★";
  return iconForResourceMedium(resource);
}

function stageSectionGroups(stage) {
  const modules = stageSections(stage);
  const packaged = packageModulesForStage(stage);
  if (!packaged.length) {
    return modules.map((module, index) => ({
      title: `Unit ${index + 1}`,
      progress: sectionDynamicProgress(stage, { modules: [{ moduleIndex: index }] }, index, 0),
      range: module.range,
      modules: [{ ...module, moduleIndex: index }]
    }));
  }
  const titles = stageSectionTitles(stage);
  const rawGroups = rawNodeGroupsForStage(stage);
  const grouped = new Map();
  modules.forEach((module) => {
    const unitNumber = module.unitNumber || 1;
    if (!grouped.has(unitNumber)) grouped.set(unitNumber, []);
    grouped.get(unitNumber).push(module);
  });
  return Array.from(grouped.entries())
    .sort(([a], [b]) => a - b)
    .map(([unitNumber, groupModules], groupIndex) => {
    const baseProgress = Math.round(groupModules.reduce((sum, module) => sum + module.progress, 0) / groupModules.length);
    const rawModules = rawGroups.get(unitNumber) || [];
    return {
      title: groupModules[0]?.unitTitle || titles[unitNumber - 1] || `Unit ${unitNumber}`,
      progress: sectionDynamicProgress(stage, { modules: groupModules }, groupIndex, baseProgress),
      range: `${groupModules[0].moduleIndex + 1} to ${groupModules[groupModules.length - 1].moduleIndex + 1}`,
      unitNumber,
      mediumPreference: effectiveNodeMediumPreference(stage, unitNumber, rawModules),
      mediumAvailability: nodeMediumAvailability(rawModules),
      modules: groupModules
    };
  });
}

function unitAccentColor(stage, groupIndex) {
  return stage.stageColor;
}

function activeSectionInfo(stage, moduleIndex) {
  const groups = stageSectionGroups(stage);
  const groupIndex = groups.findIndex((group) =>
    group.modules.some((item) => item.moduleIndex === moduleIndex)
  );
  return {
    group: groups[groupIndex] || groups[0],
    groupIndex: groupIndex >= 0 ? groupIndex : 0
  };
}

function activeSectionPieceInfo(stage, moduleIndex) {
  const info = activeSectionInfo(stage, moduleIndex);
  const pieceIndex = info.group
    ? info.group.modules.findIndex((item) => item.moduleIndex === moduleIndex)
    : -1;
  return {
    ...info,
    pieceIndex: pieceIndex >= 0 ? pieceIndex : 0,
    pieceCount: info.group ? info.group.modules.length : 1
  };
}

function nodeLessonProgress(stage, moduleIndex) {
  const info = activeSectionPieceInfo(stage, moduleIndex);
  const lessons = info.group && Array.isArray(info.group.modules) ? info.group.modules : [];
  if (!lessons.length) return { completed: 0, total: 1, percent: 0 };
  const completed = lessons.filter((item) =>
    learningPieceComplete(stage, item.moduleIndex)
  ).length;
  return {
    completed,
    total: lessons.length,
    percent: Math.round((completed / lessons.length) * 100)
  };
}

function sectionReviewQuiz(stage, review) {
  const moduleTitles = review.modules.map((module) => module.title);
  const first = moduleTitles[0] || "the first lesson";
  const second = moduleTitles[1] || "the next lesson";
  const third = moduleTitles[2] || "another lesson";
  const answers = [
    { id: "remember", label: `Remember ${first}`, detail: "Recall one key truth from this section." },
    { id: "respond", label: "Choose one honest next step", detail: "Let the section become practice, not just information." },
    { id: "skip", label: `Skip past ${second || third}`, detail: "Move on without reflection." }
  ];
  return {
    kicker: "Section review",
    question: `Before the next section, what is the best response to ${review.title}?`,
    options: orderedQuizOptions(answers, "respond", `${stage.choice}|${review.title}|review`),
    answer: "respond",
    feedback: `Good. ${review.title} is complete when it leads to one faithful response before you continue.`
  };
}

function lessonTheme(resource, module) {
  const title = String(resource?.title || module?.title || "this lesson")
    .replace(/^One Basics\s+/, "")
    .replace(/^\d+(?:\.\d+)?:\s*/, "")
    .trim();
  return title || resource?.topic || module?.title || "this lesson";
}

function lessonResponseLabel(resource, module) {
  const next = resource?.recommendedNextStep?.label || resource?.nextStep || resource?.notesPrompt || "";
  if (next) return next.replace(/\.$/, "");
  return `Respond to ${lessonTheme(resource, module)}`;
}

function lessonPracticeOptions(stage, module, resource, reflection) {
  const theme = lessonTheme(resource, module);
  const scripture = Array.isArray(resource?.scriptureReferences) && resource.scriptureReferences.length
    ? resource.scriptureReferences[0]
    : "";
  const topic = resource?.topic || theme;
  const responseLabel = lessonResponseLabel(resource, module);
  const answers = [
    {
      id: "remember",
      icon: "1",
      label: `Name the truth about ${theme}`,
      detail: `Write one sentence you want to remember from ${theme}.`
    },
    {
      id: "pray",
      icon: "2",
      label: scripture ? `Pray through ${scripture}` : `Pray about ${topic}`,
      detail: scripture
        ? `Turn ${scripture} into a short honest prayer.`
        : "Tell God honestly what stood out and where you need help."
    },
    {
      id: "respond",
      icon: "3",
      label: responseLabel,
      detail: reflection
    }
  ];
  if (stage.choice === "exploreJesus") {
    answers[2] = {
      id: "respond",
      icon: "3",
      label: `Ask one honest question about ${theme}`,
      detail: reflection
    };
  }
  return answers;
}

function practicalUsePrompt(stage, module, resource) {
  const title = resource ? resource.title : module.title;
  const reflection = resource && resource.reflectionPrompt
    ? resource.reflectionPrompt
    : "What is one honest next step you can take before you leave this section?";
  const specificActions = lessonPracticeOptions(stage, module, resource, reflection);
  const stageActions = {
    exploreJesus: [
      { id: "pray", icon: "1", label: "Pray one honest sentence", detail: "Tell God what you are really wondering or feeling." },
      { id: "share", icon: "2", label: "Send this to a friend", detail: "Share the piece with someone who may need a first step." },
      { id: "notice", icon: "3", label: "Notice where Jesus is near", detail: "Look for one ordinary moment where God may be inviting you closer." }
    ],
    startFollowing: [
      { id: "scripture", icon: "1", label: "Read the Scripture again", detail: "Slowly reread one verse and write down one word that stands out." },
      { id: "pray", icon: "2", label: "Pray it back to God", detail: "Turn what you learned into a simple prayer before you move on." },
      { id: "practice", icon: "3", label: "Live one truth today", detail: reflection }
    ],
    growRoots: [
      { id: "habit", icon: "1", label: "Make one small habit", detail: "Choose a simple practice you can repeat this week." },
      { id: "talk", icon: "2", label: "Talk with someone trusted", detail: "Bring one question or struggle into honest conversation." },
      { id: "practice", icon: "3", label: "Practice it this week", detail: reflection }
    ],
    liveMission: [
      { id: "serve", icon: "1", label: "Serve someone nearby", detail: "Do one small act of love today without making it complicated." },
      { id: "share", icon: "2", label: "Share your faith naturally", detail: "Tell someone one thing Jesus is teaching you." },
      { id: "practice", icon: "3", label: "Put mission into action", detail: reflection }
    ],
    leadMultiply: [
      { id: "lead", icon: "1", label: "Lead one simple conversation", detail: "Ask someone what they are learning and listen well." },
      { id: "prepare", icon: "2", label: "Prepare one next step", detail: "Write down how you would help another person apply this." },
      { id: "practice", icon: "3", label: "Help someone else take a step", detail: reflection }
    ]
  };
  const answer = resource
    ? "respond"
    : stage.choice === "exploreJesus" ? "notice" : "practice";
  const answers = resource ? specificActions : (stageActions[stage.choice] || stageActions.startFollowing);
  return {
    kind: "reflection",
    kicker: "Choose a practical step · No right or wrong answer",
    question: resource && resource.reflectionPrompt ? resource.reflectionPrompt : `How could you live out ${title} today?`,
    options: orderedQuizOptions(answers, answer, `${stage.choice}|${resource?.id || module.title}|practical`),
    answer,
    feedback: "Choose a time to put this step into practice."
  };
}

function moduleNoteKey(stage, moduleIndex) {
  return `oneinhim.moduleNotes.${window.OIHLearnerAccounts?.owner() || "guest"}.${stage.choice}.${moduleResourceFor(stage, moduleIndex)?.id || moduleIndex}`;
}

function getModuleNote(stage, moduleIndex) {
  try {
    const saved = localStorage.getItem(moduleNoteKey(stage, moduleIndex));
    if (saved !== null) return saved;
    const resource = moduleResourceFor(stage, moduleIndex);
    const owner = window.OIHLearnerAccounts?.owner() || "guest";
    for (const key of resource?.legacyProgressKeys || []) {
      const index = key.slice(key.lastIndexOf(":") + 1);
      const legacy = localStorage.getItem(`oneinhim.moduleNotes.${owner}.${stage.choice}.${index}`)
        ?? (owner === "guest" ? localStorage.getItem(`oneinhim.moduleNotes.${stage.choice}.${index}`) : null);
      if (legacy !== null) return legacy;
    }
    return "";
  } catch (error) {
    return "";
  }
}

function saveModuleNote(stage, moduleIndex, value) {
  try {
    localStorage.setItem(moduleNoteKey(stage, moduleIndex), value);
  } catch (error) {
    return false;
  }
  return true;
}

const moduleResourceMap = {
  exploreJesus: { 0: "mux_one_basics_1_1_opening_clip" },
  startFollowing: {
    0: "book_one_basics_1_1_eternal_life",
    1: "book_prayer_002",
    2: "lesson_bible_004"
  },
  growRoots: {
    1: "aud_peace_003",
    2: "read_hard_questions_life_heavy"
  }
};

function moduleResourceFor(stage, moduleIndex) {
  const packaged = packageModulesForStage(stage);
  if (packaged[moduleIndex]) return packaged[moduleIndex];
  const resourceId = moduleResourceMap[stage.choice] && moduleResourceMap[stage.choice][moduleIndex];
  return resourceId ? resources.find((item) => item.id === resourceId) : null;
}

function preferredModeForResource(resource) {
  if (!resource) return "watch";
  if (resource.primaryMedium && resource.format.includes(resource.primaryMedium)) return resource.primaryMedium;
  if (resource.format.includes("watch")) return "watch";
  if (resource.format.includes("listen")) return "listen";
  return "read";
}

function resourceSupportsMode(resource, mode) {
  return !resource || resource.format.includes(mode);
}

function moduleFallbackInfo(resource, activeMode, modes, stage, sectionInfo) {
  const order = activeMode === "watch"
    ? ["read"]
    : activeMode === "listen"
      ? ["read", "watch"]
      : ["watch"];
  const group = sectionInfo && sectionInfo.group;
  if (group && Array.isArray(group.modules)) {
    for (const targetMode of order) {
      const forward = group.modules
        .map((item, index) => ({ item, index, resource: moduleResourceFor(stage, item.moduleIndex) }))
        .find(({ item, index, resource: itemResource }) =>
          index > sectionInfo.pieceIndex
            && resourceSupportsMode(itemResource, targetMode)
            && !learningPieceComplete(stage, item.moduleIndex)
        );
      if (forward && forward.resource) {
        return {
          mode: targetMode,
          label: modes[targetMode].label,
          resourceId: forward.resource.id,
          moduleIndex: forward.item.moduleIndex
        };
      }
    }
    for (const targetMode of order) {
      const forward = group.modules
        .map((item, index) => ({ item, index, resource: moduleResourceFor(stage, item.moduleIndex) }))
        .find(({ index, resource: itemResource }) =>
          index > sectionInfo.pieceIndex && resourceSupportsMode(itemResource, targetMode)
        );
      if (forward && forward.resource) {
        return {
          mode: targetMode,
          label: modes[targetMode].label,
          resourceId: forward.resource.id,
          moduleIndex: forward.item.moduleIndex
        };
      }
    }
    return { mode: "", label: "", resourceId: "", moduleIndex: null, unavailable: true };
  }
  const sameResourceMode = resource && order.find((mode) => resource.format.includes(mode));
  if (sameResourceMode) {
    return { mode: sameResourceMode, label: modes[sameResourceMode].label, resourceId: resource.id };
  }
  const alternate = resource && resources.find((item) =>
    item.id !== resource.id &&
    item.showInJourney !== false &&
    item.stage === resource.stage &&
    order.some((mode) => item.format.includes(mode))
  );
  if (alternate) {
    const targetMode = order.find((mode) => alternate.format.includes(mode)) || preferredModeForResource(alternate);
    return { mode: targetMode, label: modes[targetMode].label, resourceId: alternate.id };
  }
  const fallbackMode = nextModuleMode(activeMode);
  return { mode: fallbackMode, label: modes[fallbackMode].label, resourceId: resource ? resource.id : "" };
}

function nextModuleMode(mode) {
  const order = ["watch", "read"];
  const index = order.indexOf(mode);
  return order[(index + 1 + order.length) % order.length];
}

function stableQuizHash(value) {
  const text = String(value || "");
  let hash = 2166136261;
  for (let index = 0; index < text.length; index += 1) {
    hash ^= text.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function seededQuizShuffle(items, seedText) {
  const shuffled = [...items];
  let seed = stableQuizHash(seedText) || 1;
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    seed = Math.imul(seed ^ (seed >>> 15), 2246822507) >>> 0;
    seed = Math.imul(seed ^ (seed >>> 13), 3266489909) >>> 0;
    const target = seed % (index + 1);
    [shuffled[index], shuffled[target]] = [shuffled[target], shuffled[index]];
  }
  return shuffled;
}

function orderedQuizOptions(answers, correctAnswer, seedText) {
  const normalised = answers.map((answer, index) => ({
    id: answer.id || String(index),
    label: answer.label || answer,
    detail: answer.detail || "",
    sourceIndex: index
  }));
  const correct = normalised.find((answer) => answer.id === correctAnswer);
  if (!correct || normalised.length < 2) {
    return normalised.map((answer, index) => ({ ...answer, icon: index + 1 }));
  }

  const wrongAnswers = seededQuizShuffle(
    normalised.filter((answer) => answer.id !== correctAnswer),
    `${seedText}:wrong`
  );
  const seedNumbers = (String(seedText || "").match(/\d+/g) || [])
    .reduce((total, value) => total + Number(value), 0);
  const correctSlot = (stableQuizHash(`${seedText}:correct-slot`) + seedNumbers) % normalised.length;

  const ordered = [...wrongAnswers];
  ordered.splice(correctSlot, 0, correct);
  return ordered.map((answer, index) => ({ ...answer, icon: index + 1 }));
}

function moduleQuiz(stage, module, mode) {
  const quickCheck = module.quickCheck;
  const isGenericQuickCheck = quickCheck && /best response to this lesson/i.test(quickCheck.question || "");
  if (quickCheck && !isGenericQuickCheck) {
    const answers = module.quickCheck.answers || [];
    const seedText = [
      stage.choice,
      module.id,
      module.title,
      module.quickCheck.question,
      module.lessonOrder
    ].join("|");
    return {
      kicker: `${mode.label} check`,
      question: module.quickCheck.question,
      options: orderedQuizOptions(answers, module.quickCheck.correctAnswer, seedText).map((answer) => ({
        id: answer.id,
        icon: answer.icon,
        label: answer.label,
        detail: answer.id === module.quickCheck.correctAnswer ? "This is the heart of the lesson." : "Think back to the main point."
      })),
      answer: module.quickCheck.correctAnswer,
      feedback: module.quickCheck.feedback || "Good. The aim is to understand and respond with one clear next step."
    };
  }
  const stageTitle = t(stage.titleKey);
  const theme = lessonTheme(moduleResourceFor(stage, state.activeModuleIndex), module);
  const reflection = module.reflectionPrompt || module.subtitle || `Take one faithful step from ${theme}.`;
  const fallbackAnswers = [
    { id: "rush", label: `Rush past ${theme}`, detail: "Move on without responding." },
    { id: "respond", label: lessonResponseLabel(moduleResourceFor(stage, state.activeModuleIndex), module), detail: reflection },
    { id: "save", label: "Only save it for later", detail: "Keep the idea but do not act yet." }
  ];
  const seedText = [stage.choice, module.id, module.title, mode.key || mode.label].join("|");
  return {
    kicker: `${mode.label} check`,
    question: `What is a good response to ${theme}?`,
    options: orderedQuizOptions(fallbackAnswers, "respond", seedText).map((answer) => ({
      id: answer.id,
      icon: answer.icon,
      label: answer.label,
      detail: answer.detail
    })),
    answer: "respond",
    feedback: `Good. In ${stageTitle}, the aim is not just to consume content. It is to receive one clear next step and respond honestly.`
  };
}

function currentSectionGroupIndex(groups) {
  const incomplete = groups.findIndex((group) => group.progress < 95);
  return incomplete >= 0 ? incomplete : Math.max(0, groups.length - 1);
}

function journeyNodeMeta(stage, group, index) {
  const formats = [...new Set(group.modules.map((item) => {
    const resource = moduleResourceFor(stage, item.moduleIndex);
    return sectionContentFormat(resource, nodeModeForResource(stage, group, resource));
  }))].filter(Boolean);
  return `${group.modules.length} lessons · ${formats.slice(0, 3).join(" · ") || group.range}`;
}

function nodeModeLabel(mode) {
  if (mode === "watch") return "Watch";
  if (mode === "listen") return "Listen";
  if (mode === "read") return "Read";
  return "Mixed";
}

function nodeModeForResource(stage, group, resource) {
  const preference = group?.mediumPreference || "mixed";
  if (preference !== "mixed" && resourceSupportsMode(resource, preference)) return preference;
  return preferredModeForResource(resource);
}

function renderNodeMediumControls(node, stage) {
  const availability = node.mediumAvailability || {};
  const active = node.mediumPreference || "mixed";
  const unitNumber = node.unitNumber || node.groupIndex + 1;
  const options = [
    ["mixed", "Mix"],
    ["watch", "Video"],
    ["read", "Text"],
    ["listen", "Audio"]
  ];
  return `
    <div class="node-medium-switch" aria-label="Lesson format">
      ${options.map(([medium, label]) => {
        const disabled = medium !== "mixed" && !availability[medium];
        const suffix = disabled && medium === "listen" ? " coming later" : disabled ? " not ready" : "";
        return `
          <button
            type="button"
            class="${active === medium ? "active" : ""}"
            data-node-medium="${esc(`${stage.choice}:${unitNumber}:${medium}`)}"
            ${disabled ? "disabled" : ""}
            aria-label="${esc(`${label}${suffix}`)}"
          >${esc(label)}</button>
        `;
      }).join("")}
    </div>
  `;
}

function sectionThemeDescription(stage, node) {
  const title = String(node && node.title ? node.title : "");
  if (stage.choice === "exploreJesus") {
    return "A gentle section for honest questions about Jesus, God coming near, and where faith begins.";
  }
  if (stage.choice === "startFollowing" && title.includes("New Life")) {
    return "A foundations section on eternal life, grace, righteousness, intimacy with God, and repentance.";
  }
  if (stage.choice === "startFollowing") {
    return "A foundations section with Scripture, simple teaching, reflection, and one clear next step.";
  }
  if (stage.choice === "growRoots" && title.includes("Hard Questions")) {
    return "A formation section for bringing anxiety, suffering, doubt, and honest questions to God.";
  }
  if (stage.choice === "growRoots") {
    return "A formation section for habits, character, healing, community, and a deeper life with God.";
  }
  if (stage.choice === "liveMission") {
    return "A mission section for serving people, sharing faith, and discipling others in everyday life.";
  }
  if (stage.choice === "leadMultiply") {
    return "A leadership section for calling, pastoral formation, evangelism, and multiplying disciples.";
  }
  return "A guided section with teaching, Scripture, reflection, and one practical next step.";
}

function renderNodeLessonList(node, stage) {
  const items = (node.modules || []).slice(0, 5).map((item, index) => {
    const resource = moduleResourceFor(stage, item.moduleIndex);
    const title = resource ? resource.title.replace(/^One Basics\s+/, "") : item.title || `Lesson ${index + 1}`;
    const mode = nodeModeForResource(stage, node, resource);
    const meta = resource ? `${sectionContentFormat(resource, mode)} · ${resource.length || item.range || "Short"}` : item.range || "Lesson";
    const complete = learningPieceComplete(stage, item.moduleIndex);
    return `
      <span class="${complete ? "is-complete" : ""}">
        <b aria-label="${complete ? "Completed" : `Module ${index + 1}`}">${complete ? "✓" : esc(index + 1)}</b>
        <em>
          <strong>${esc(title)}</strong>
          <small>${esc(meta)}</small>
        </em>
      </span>
    `;
  }).join("");
  return `<div class="duo-node-piece-list">${items}</div>`;
}

function renderDuoNodePopout(node, stage) {
  if (node.kind === "practice") {
    return `
      <div class="duo-node-popout ${node.locked ? "locked-popout" : ""}">
        <h3>${esc(node.title)}</h3>
        <p>${esc(node.meta)}</p>
        ${node.locked ? `
          <button class="soft-btn" type="button" disabled>Locked</button>
        ` : `
          <button class="primary-btn" type="button" data-section-practical-start="${esc(`${stage.choice}:${node.groupIndex}`)}">Start practice</button>
        `}
      </div>
    `;
  }
  if (node.kind === "review") {
    return `
      <div class="duo-node-popout ${node.locked ? "locked-popout" : ""}">
        <h3>${esc(node.title)}</h3>
        <p>${esc(node.meta)}</p>
        ${node.locked ? `
          <button class="soft-btn" type="button" disabled>Locked</button>
        ` : `
          <button class="primary-btn" type="button" data-section-review="${esc(`${stage.choice}:${node.groupIndex}`)}">Review</button>
        `}
      </div>
    `;
  }
  return `
    <div class="duo-node-popout ${node.locked ? "locked-popout" : ""}">
      <h3>${esc(node.title)}</h3>
      <p>${esc(sectionThemeDescription(stage, node))}</p>
      <p class="duo-unit-summary">${esc(`${node.progress || 0}% ${state.language === "nl" ? "voltooid" : "complete"} · ${(node.modules || []).filter(item => learningPieceComplete(stage, item.moduleIndex)).length}/${(node.modules || []).length} modules`)}<small>${state.language === "nl" ? "Vragen en oefeningen tellen apart." : "Questions and practice are separate."}</small></p>
      ${renderNodeLessonList(node, stage)}
      ${node.locked ? `
        <button class="soft-btn" type="button" disabled>Locked</button>
      ` : `
        <div class="duo-popout-actions">
          <button class="primary-btn" type="button" data-section-node-start="${esc(`${stage.choice}:${node.groupIndex}`)}">${node.completed ? "Review unit" : node.progress > 0 ? "Continue unit" : "Start unit"}</button>
          <button class="soft-btn" type="button" data-share-journey-node="${esc(`${stage.choice}:${node.groupIndex}`)}">Share +5 Seeds</button>
        </div>
      `}
    </div>
  `;
}

function renderStageDetail() {
  const stage = activeStage();
  const allStageEntries = pathOptions
    .map((pathStage, stageIndex) => {
      const groups = stageSectionGroups(pathStage);
      return {
        stage: pathStage,
        stageIndex,
        groups,
        currentGroupIndex: currentSectionGroupIndex(groups)
      };
    })
    .filter((entry) => entry.groups.length);
  const activeEntry = allStageEntries.find((entry) => entry.stage.choice === stage.choice) || allStageEntries[0] || {
    stage,
    stageIndex: 0,
    groups: stageSectionGroups(stage),
    currentGroupIndex: 0
  };
  state.journeyBannerGroups = allStageEntries.reduce((groupsByStage, entry) => {
    groupsByStage[entry.stage.choice] = entry.groups.map((group, index) => ({
      title: group.title,
      color: unitAccentColor(entry.stage, index)
    }));
    return groupsByStage;
  }, {});
  if (!state.journeyBannerGroups[activeEntry.stage.choice]) {
    state.journeyBannerGroups[activeEntry.stage.choice] = activeEntry.groups.map((group, index) => ({
      title: group.title,
      color: unitAccentColor(activeEntry.stage, index)
    }));
  }
  const sections = stageSections(stage);
  const sectionGroups = activeEntry.groups;
  if (state.activeModuleIndex >= sections.length) state.activeModuleIndex = 0;
  const currentGroupIndex = activeEntry.currentGroupIndex;
  const selectedKey = state.selectedPathNode || "";
  const selectedGroupIndex = Math.max(0, Math.min(
    sectionGroups.length - 1,
    Number.isFinite(state.selectedSectionIndex) ? state.selectedSectionIndex : currentGroupIndex
  ));
  const selectedSection = sectionGroups[selectedGroupIndex] || sectionGroups[currentGroupIndex] || sectionGroups[0];

  els.stageDetailHeader.textContent = t(stage.titleKey);
  els.stageDetailEyebrow.textContent = t(stage.metaKey);
  els.stageDetailTitle.textContent = t(stage.titleKey);
  els.stageDetailCopy.textContent = t(stage.copyKey);
  els.stageRange.textContent = t(stage.rangeKey);
  els.stageSummaryCard.className = `stage-summary-card ${stage.color}`;
  els.stageAppHeader.style.setProperty("--stage-color", stage.stageColor);
  els.stageSummaryCard.style.setProperty("--stage-color", stage.stageColor);
  const stageProgress = sectionGroups.length ? Math.round(sectionGroups.reduce((sum, group) => sum + group.progress, 0) / sectionGroups.length) : 0;
  els.stageProgressFill.style.setProperty("--stage-color", stage.stageColor);
  els.stageProgressFill.style.setProperty("--progress", `${stageProgress}%`);
  els.stageStatusRow.style.setProperty("--stage-color", stage.stageColor);
  els.stageQuestProgress.style.setProperty("--stage-color", stage.stageColor);
  els.stageQuestProgress.style.setProperty("--progress", `${stageProgress}%`);
  els.stageStatusRow.innerHTML = [
    { icon: "▰", label: `${stageProgress}% ${state.language === "nl" ? "voltooid" : "complete"}` },
    { icon: "◆", label: `${sectionGroups.length} units` },
    { icon: "", label: `${state.seeds} Seeds`, seed: true },
    { icon: "⚡", label: state.language === "nl" ? "Doel: 1 stap per dag" : "Goal: 1 step a day" }
  ].map((item) => `
    <div class="status-pill">
      <span class="status-icon ${item.seed ? "seed-status-icon" : ""}">${item.seed ? "" : esc(item.icon)}</span>
      <span>${item.seed ? `<span data-seed-count>${esc(state.seeds)}</span> Seeds` : esc(item.label)}</span>
    </div>
  `).join("");
  els.journeyCallout.innerHTML = `
    <strong>${esc(selectedSection ? selectedSection.title : t(stage.titleKey))}</strong>
    <p>Open the node, complete the lessons, then practice what you learned.</p>
  `;

  const pathNodes = [];
  let globalGroupIndex = 0;
  allStageEntries.forEach((entry) => {
    entry.groups.forEach((group, index) => {
      const pathStage = entry.stage;
      const unitColor = unitAccentColor(pathStage, index);
      const completed = group.progress >= 95;
      const current = pathStage.choice === state.activeStageId && index === entry.currentGroupIndex;
      const contentKey = pathNodeKey("content", pathStage, index);
      const isGuidedTarget = state.guidedPathNode === contentKey;
      const contentLocked = group.progress <= 0 && !current && !isGuidedTarget;
      const globalIndex = globalGroupIndex;
      globalGroupIndex += 1;
      pathNodes.push({
        kind: "divider",
        key: pathNodeKey("divider", pathStage, index),
        stage: pathStage,
        stageChoice: pathStage.choice,
        stageIndex: entry.stageIndex,
        groupIndex: index,
        globalIndex,
        title: index === 0 ? t(pathStage.titleKey) : group.title,
        unitTitle: group.title,
        color: unitColor,
        locked: contentLocked
      });
      pathNodes.push({
        kind: "content",
        key: contentKey,
        stage: pathStage,
        stageChoice: pathStage.choice,
        stageIndex: entry.stageIndex,
        groupIndex: index,
        globalIndex,
        title: group.title,
        meta: journeyNodeMeta(pathStage, group, index),
        icon: completed ? "✓" : index + 1,
        color: unitColor,
        unitNumber: group.unitNumber,
        mediumPreference: group.mediumPreference,
        mediumAvailability: group.mediumAvailability,
        progress: group.progress,
        sectionStart: index === 0,
        current,
        completed,
        locked: contentLocked,
        modules: group.modules
      });
      pathNodes.push({
        kind: "chest",
        key: pathNodeKey("chest", pathStage, index),
        stage: pathStage,
        stageChoice: pathStage.choice,
        stageIndex: entry.stageIndex,
        groupIndex: index,
        globalIndex,
        title: "Unit reward",
        meta: contentLocked || group.progress < 100 ? "Complete the unit to unlock this." : "A small encouragement for finishing well.",
        icon: "▣",
        color: unitColor,
        current: false,
        completed: group.progress === 100,
        locked: contentLocked || group.progress < 100,
        modules: group.modules
      });
      pathNodes.push({
        kind: "practice",
        key: pathNodeKey("practice", pathStage, index),
        stage: pathStage,
        stageChoice: pathStage.choice,
        stageIndex: entry.stageIndex,
        groupIndex: index,
        globalIndex,
        title: "Practical use",
        meta: contentLocked || group.progress < 100 ? "Complete the lessons above to unlock this." : "Live out one simple next step today.",
        icon: "↻",
        color: unitColor,
        current: false,
        completed: state.completedPracticals.has(sectionProgressKey(pathStage, index)),
        locked: contentLocked || group.progress < 100,
        modules: group.modules
      });
      pathNodes.push({
        kind: "review",
        key: pathNodeKey("review", pathStage, index),
        stage: pathStage,
        stageChoice: pathStage.choice,
        stageIndex: entry.stageIndex,
        groupIndex: index,
        globalIndex,
        title: `${group.title} review`,
        meta: contentLocked || group.progress < 100 ? "Complete the unit first." : "Practice past concepts and strengthen the unit.",
        icon: "★",
        color: unitColor,
        current: false,
        completed: state.completedReviews.has(sectionProgressKey(pathStage, index)),
        locked: contentLocked || group.progress < 100,
        modules: group.modules
      });
    });
  });

  const selectedNode = selectedKey ? pathNodes.find((node) => node.key === selectedKey) : null;
  const getNodeOffset = (node) => {
    const flip = node.globalIndex % 2 === 0 ? 1 : -1;
    if (node.kind === "content") return 0;
    if (node.kind === "chest") return -158 * flip;
    if (node.kind === "practice") return -18 * flip;
    if (node.kind === "review") return 150 * flip;
    return 0;
  };
	  els.stageSectionList.className = "stage-section-list duo-lesson-path";
	  els.stageSectionList.innerHTML = `
    <div class="duo-unit-banner" style="--stage-color: ${esc(unitAccentColor(stage, selectedGroupIndex))}">
      <button class="duo-unit-back" type="button" data-nav-jump="stageDetailView" aria-label="Back to sections">
        <span>
          <strong>${esc(t(stage.metaKey).replace(/\s+·\s+.+$/, ` · ${t(stage.titleKey)}`))}</strong>
          <small class="duo-banner-next-step">Next step</small>
          <span class="duo-banner-unit-title">${esc(selectedSection ? selectedSection.title : t(stage.titleKey))}</span>
        </span>
      </button>
      <button class="duo-guidebook" type="button" data-duo-guidebook>Guidebook</button>
    </div>
    <svg class="duo-path-curve" viewBox="0 0 620 1820" aria-hidden="true" focusable="false">
      <path />
    </svg>
    ${pathNodes.map((node, index) => {
      if (node.kind === "divider") {
        return `
          <article class="duo-unit-divider ${node.groupIndex === 0 ? "section-title-divider" : ""}" data-unit-divider="${node.groupIndex}" data-stage-choice="${esc(node.stageChoice)}" data-section-index="${node.groupIndex}" style="--stage-color: ${esc(node.color)};">
            <div class="duo-path-break">${esc(node.title)}</div>
          </article>
        `;
      }
      const isSelected = selectedNode && selectedNode.key === node.key;
      const nodeOffset = getNodeOffset(node);
      const mobileNodeOffset = Math.max(-78, Math.min(78, nodeOffset * 0.5));
      const isPathSpine = node.kind === "content" || node.kind === "chest" || node.kind === "practice" || node.kind === "review";
      return `
        <article class="duo-path-node ${node.kind} ${isSelected ? "selected" : ""}" data-stage-choice="${esc(node.stageChoice)}" data-section-index="${node.groupIndex}" data-section-title="${esc(node.title)}" style="--stage-color: ${esc(node.color || node.stage.stageColor)}; --section-color: ${esc(node.stage.stageColor)}; --section-text: ${esc(readableTextColor(node.stage.stageColor))}; --node-x: ${nodeOffset}px; --mobile-node-x: ${mobileNodeOffset}px;">
          <div class="duo-node-anchor">
            ${node.sectionStart ? `<div class="duo-start-tag">Start</div>` : ""}
            ${node.kind === "content" ? `<span class="duo-unit-control"><svg class="duo-unit-ring" viewBox="0 0 100 100" preserveAspectRatio="none" role="progressbar" aria-label="${esc(`${node.title} completion`)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${node.progress}"><circle class="duo-unit-track" cx="50" cy="50" r="46"/><circle class="duo-unit-fill" cx="50" cy="50" r="46" pathLength="100" stroke-dasharray="${node.progress} 100" transform="rotate(-90 50 50)"/></svg>` : ""}
            <button class="duo-node-button ${node.kind} ${node.current ? "current" : ""} ${node.completed ? "completed" : ""} ${node.locked ? "locked" : ""}" type="button" data-duo-node-select="${esc(node.key)}" ${isPathSpine ? "data-path-spine=\"true\"" : ""} aria-label="${esc(node.title)}">${esc(node.icon)}</button>
            ${node.kind === "content" ? `<span class="duo-unit-percentage">${node.progress}%</span></span>` : ""}
            ${isSelected ? renderDuoNodePopout(node, node.stage || stage) : ""}
          </div>
        </article>
      `;
	    }).join("")}
	  `;
	  resetJourneyBannerCache();
	  window.requestAnimationFrame(() => {
	    updateDuoPathCurve();
	    updateStickyStageBanner();
	  });
	}

function updateDuoPathCurve() {
  if (!els.stageSectionList || !els.stageSectionList.classList.contains("duo-lesson-path")) return;
  const svg = els.stageSectionList.querySelector(".duo-path-curve");
  if (!svg) return;
  const buttons = [...els.stageSectionList.querySelectorAll(".duo-path-node:not(.unit) .duo-node-button[data-path-spine='true']")];
  const pathLine = svg.querySelector("path");
  if (buttons.length < 2 || !pathLine) return;
  const containerRect = els.stageSectionList.getBoundingClientRect();
  const points = buttons.map((button) => {
    const rect = button.getBoundingClientRect();
    const node = button.closest(".duo-path-node");
    return {
      stageChoice: node ? node.dataset.stageChoice || "" : "",
      x: rect.left - containerRect.left + rect.width / 2,
      y: rect.top - containerRect.top + rect.height / 2
    };
  });
  const groupedPoints = points.reduce((groups, point) => {
    const lastGroup = groups[groups.length - 1];
    if (!lastGroup || lastGroup.stageChoice !== point.stageChoice) {
      groups.push({ stageChoice: point.stageChoice, points: [point] });
    } else {
      lastGroup.points.push(point);
    }
    return groups;
  }, []);
  const segmentPath = (segmentPoints) => segmentPoints.reduce((path, point, index) => {
    if (index === 0) return `M ${point.x.toFixed(1)} ${point.y.toFixed(1)}`;
    const previous = segmentPoints[index - 1];
    const distance = point.y - previous.y;
    const c1y = previous.y + distance * 0.58;
    const c2y = point.y - distance * 0.58;
    return `${path} C ${previous.x.toFixed(1)} ${c1y.toFixed(1)}, ${point.x.toFixed(1)} ${c2y.toFixed(1)}, ${point.x.toFixed(1)} ${point.y.toFixed(1)}`;
  }, "");
  const d = groupedPoints
    .map((group) => group.points.length > 1 ? segmentPath(group.points) : "")
    .filter(Boolean)
    .join(" ");
  svg.setAttribute("viewBox", `0 0 ${Math.max(1, containerRect.width).toFixed(1)} ${Math.max(1, containerRect.height).toFixed(1)}`);
  pathLine.setAttribute("d", d);
}

function scheduleDuoPathCurveUpdate() {
  if (duoPathCurveFrame) return;
  duoPathCurveFrame = window.requestAnimationFrame(() => {
    duoPathCurveFrame = 0;
    updateDuoPathCurve();
  });
}

function scheduleStickyStageBannerUpdate() {
  if (stickyStageBannerFrame) return;
  stickyStageBannerFrame = window.requestAnimationFrame(() => {
    stickyStageBannerFrame = 0;
    updateStickyStageBanner();
  });
}

function scheduleGatewayNavScrollState() {
  if (gatewayNavScrollFrame) return;
  gatewayNavScrollFrame = window.requestAnimationFrame(() => {
    gatewayNavScrollFrame = 0;
    updateGatewayNavScrollState();
  });
}

function resetJourneyBannerCache() {
  journeyBannerMarkers = [];
  journeyBannerLayoutKey = "";
  journeyBannerActiveKey = "";
}

function closeSelectedPathNode() {
  if (!state.selectedPathNode) return false;
  state.selectedPathNode = "";
  renderStageDetail();
  bindDynamicActions();
  return true;
}

function handleJourneyOutsideClick(event) {
  if (state.activeView !== "stageDetailView" || !state.selectedPathNode) return;
  const target = event.target instanceof Element ? event.target : null;
  if (!target) return;
  if (target.closest(".duo-node-popout, .duo-node-button")) return;
  closeSelectedPathNode();
}

function updateStickyStageBanner() {
  if (state.activeView !== "stageDetailView" || !els.stageSectionList) return;
  const banner = els.stageSectionList.querySelector(".duo-unit-banner");
  if (!banner) return;
  const wideJourney = window.innerWidth >= 1024;
  const stageMain = wideJourney ? document.querySelector("#stageDetailView .stage-web-main") : null;
  if (stageMain) {
    const mainRect = stageMain.getBoundingClientRect();
    const layoutKey = `${Math.round(mainRect.left)}:${Math.round(mainRect.width)}`;
    if (layoutKey !== journeyBannerLayoutKey) {
      journeyBannerLayoutKey = layoutKey;
      banner.style.setProperty("--duo-banner-left", `${mainRect.left}px`);
      banner.style.setProperty("--duo-banner-width", `${mainRect.width}px`);
    }
  }
  if (!journeyBannerMarkers.length) {
    journeyBannerMarkers = [...els.stageSectionList.querySelectorAll(".duo-path-node.content[data-section-index], .duo-unit-divider[data-section-index]")]
      .map((node) => ({
        stageChoice: node.dataset.stageChoice || state.activeStageId,
        sectionIndex: Number(node.dataset.sectionIndex) || 0,
        top: window.scrollY + node.getBoundingClientRect().top
      }));
  }
  if (!journeyBannerMarkers.length) return;
  const bannerRect = banner.getBoundingClientRect();
  const compactMobileJourney = window.innerWidth <= 760;
  const threshold = window.scrollY + bannerRect.bottom + (compactMobileJourney ? 150 : 360);
  let activeMarker = journeyBannerMarkers[0];
  journeyBannerMarkers.forEach((marker) => {
    if (marker.top <= threshold) activeMarker = marker;
  });
  const activeStageChoice = activeMarker.stageChoice || state.activeStageId;
  const stage = stageForChoice(activeStageChoice);
  const groups = state.journeyBannerGroups[stage.choice] || [];
  if (!groups.length) return;
  let activeIndex = Number(activeMarker.sectionIndex) || 0;
  activeIndex = Math.max(0, Math.min(groups.length - 1, activeIndex));
  const nextActiveKey = `${stage.choice}:${activeIndex}`;
  if (nextActiveKey === journeyBannerActiveKey) return;
  journeyBannerActiveKey = nextActiveKey;
  state.selectedSectionIndex = activeIndex;
  state.activeStageId = stage.choice;
  const meta = banner.querySelector(".duo-unit-back strong");
  const title = banner.querySelector(".duo-banner-unit-title");
  banner.style.setProperty("--stage-color", groups[activeIndex]?.color || unitAccentColor(stage, activeIndex));
  if (meta) meta.textContent = t(stage.metaKey).replace(/\s+·\s+.+$/, ` · ${t(stage.titleKey)}`);
  if (title) title.textContent = groups[activeIndex]?.title || t(stage.titleKey);
}

function scrollActiveJourneySectionIntoView(stageChoiceOverride = "", sectionIndexOverride = null) {
  if (state.activeView !== "stageDetailView" || !els.stageSectionList) return;
  const rawStageChoice = stageChoiceOverride || state.activeStageId || activeStage().choice;
  const stageChoice = CSS.escape(rawStageChoice);
  const sectionIndex = Number.isFinite(sectionIndexOverride) ? sectionIndexOverride : (Number.isFinite(state.selectedSectionIndex) ? state.selectedSectionIndex : 0);
  const target = els.stageSectionList.querySelector(`.duo-path-node.content[data-stage-choice="${stageChoice}"][data-section-index="${sectionIndex}"]`)
    || els.stageSectionList.querySelector(`.duo-unit-divider[data-stage-choice="${stageChoice}"][data-section-index="${sectionIndex}"]`);
  if (!target) return;
  const banner = els.stageSectionList.querySelector(".duo-unit-banner");
  const bannerRect = banner ? banner.getBoundingClientRect() : { bottom: 0, height: 0 };
  const compactMobileJourney = window.matchMedia("(max-width: 760px)").matches;
  const targetOffset = compactMobileJourney ? bannerRect.bottom + 44 : bannerRect.height + 210;
  const targetTop = window.scrollY + target.getBoundingClientRect().top - targetOffset;
  window.scrollTo({ top: Math.max(0, targetTop), behavior: "auto" });
  state.activeStageId = rawStageChoice;
  state.selectedSectionIndex = sectionIndex;
  updateStickyStageBanner();
}

function stageGuidebookData(stage, section) {
  const title = section ? section.title : t(stage.titleKey);
  const base = {
    purpose: sectionThemeDescription(stage, { title }),
    truths: [
      "The goal is response, not just finishing content.",
      "Take one clear step with Jesus before moving on.",
      "Write down honest questions so they can be carried forward."
    ],
    tips: [
      "Start with the next open node on the path.",
      "If you cannot watch or read right now, use the alternate format and keep moving.",
      "After the content, use the short check and practical step to make it real today."
    ]
  };
  const byStage = {
    exploreJesus: {
      purpose: "This section helps someone curious, unsure, or hurt by church take an honest first look at Jesus.",
      truths: [
        "Jesus comes near before people have everything worked out.",
        "Questions are welcome here; pressure is not.",
        "A small honest prayer can be a real first step."
      ],
      tips: [
        "Keep sessions short, warm, and easy to share.",
        "Use plain language for people who may not know church words.",
        "Invite one clear next step: ask, pray, watch, or start the journey."
      ]
    },
    startFollowing: {
      purpose: "This section builds first foundations for a new Christian: grace, eternal life, repentance, prayer, Scripture, and daily trust.",
      truths: [
        "Following Jesus starts with grace, not performance.",
        "Eternal life is knowing God personally through Jesus.",
        "Simple daily steps help faith become a lived relationship."
      ],
      tips: [
        "Read slowly and let Scripture be the anchor.",
        "Use the reflection question before moving to the next piece.",
        "Look for one practical response you can do today."
      ]
    },
    growRoots: {
      purpose: "This section helps disciples grow deeper roots through habits, healing, character, community, and honest questions.",
      truths: [
        "Deep growth comes from abiding with Jesus over time.",
        "Hard questions can be brought into faith, prayer, and trusted support.",
        "Character and freedom grow through small repeated obedience."
      ],
      tips: [
        "Do not rush deep-dive content; give it room to settle.",
        "Use notes to track questions, patterns, and Scriptures to revisit.",
        "Choose one habit or conversation to practice this week."
      ]
    },
    liveMission: {
      purpose: "This section turns learning outward: serving people, sharing faith, discipling friends, and joining God's work in everyday life.",
      truths: [
        "Mission begins with love for real people nearby.",
        "Sharing faith can be natural, humble, and clear.",
        "Discipleship grows when someone helps someone else follow Jesus."
      ],
      tips: [
        "Think of one person, not a crowd.",
        "Practice simple words before bigger conversations.",
        "Let the practical step become an action in normal life."
      ]
    },
    leadMultiply: {
      purpose: "This section forms leaders who can care, teach, evangelize, pastor, and multiply disciples with wisdom.",
      truths: [
        "Leadership is service before platform.",
        "Calling grows through character, faithfulness, and community confirmation.",
        "Multiplication means helping others become mature disciples."
      ],
      tips: [
        "Expect longer-form content and deeper reflection here.",
        "Turn lessons into leadership practices with people you already serve.",
        "Use review to strengthen foundations before moving too fast."
      ]
    }
  };
  return byStage[stage.choice] || base;
}

function renderGuidebookPieces(stage, section) {
  const items = (section && section.modules ? section.modules : []).slice(0, 8);
  if (!items.length) {
    return `<p class="panel-copy">This unit does not have lessons attached yet.</p>`;
  }
  return items.map((item, index) => {
    const resource = moduleResourceFor(stage, item.moduleIndex);
    const title = resource ? resource.title.replace(/^One Basics\s+/, "") : item.title || `Lesson ${index + 1}`;
    const meta = resource ? `${sectionContentFormat(resource, nodeModeForResource(stage, section, resource))} · ${resource.length || "Short"}` : item.range || "Lesson";
    return `
      <article class="guidebook-piece">
        <b>${esc(index + 1)}</b>
        <span>
          <strong>${esc(title)}</strong>
          <span>${esc(meta)}</span>
        </span>
      </article>
    `;
  }).join("");
}

function openGuidebook() {
  if (!els.guidebookOverlay || !els.guidebookContent) return;
  const stage = activeStage();
  const groups = stageSectionGroups(stage);
  const currentGroupIndex = currentSectionGroupIndex(groups);
  const selectedIndex = Math.max(0, Math.min(
    groups.length - 1,
    Number.isFinite(state.selectedSectionIndex) ? state.selectedSectionIndex : currentGroupIndex
  ));
  const section = groups[selectedIndex] || groups[currentGroupIndex] || groups[0];
  const guide = stageGuidebookData(stage, section);
  els.guidebookOverlay.style.setProperty("--stage-color", stage.stageColor);
  els.guidebookContent.innerHTML = `
    <section class="guidebook-hero">
      <div class="guidebook-mark">${esc(stage.icon || selectedIndex + 1)}</div>
      <div>
        <p class="eyebrow">${esc(t(stage.metaKey))} · Guidebook</p>
        <h2>${esc(section ? section.title : t(stage.titleKey))}</h2>
        <p>${esc(guide.purpose)}</p>
      </div>
    </section>
    <div class="guidebook-grid">
      <section class="guidebook-block">
        <h3>Key truths</h3>
        <ul class="guidebook-list">
          ${guide.truths.map((truth) => `<li>${esc(truth)}</li>`).join("")}
        </ul>
      </section>
      <section class="guidebook-block">
        <h3>How to use this unit</h3>
        <ul class="guidebook-list">
          ${guide.tips.map((tip) => `<li>${esc(tip)}</li>`).join("")}
        </ul>
      </section>
      <section class="guidebook-block">
        <h3>Included lessons</h3>
        <div class="guidebook-list">
          ${renderGuidebookPieces(stage, section)}
        </div>
      </section>
    </div>
  `;
  els.guidebookOverlay.classList.add("show");
  els.guidebookOverlay.setAttribute("aria-hidden", "false");
  window.scrollTo({ top: 0, behavior: "auto" });
}

function closeGuidebook() {
  if (!els || !els.guidebookOverlay) return;
  els.guidebookOverlay.classList.remove("show");
  els.guidebookOverlay.setAttribute("aria-hidden", "true");
}

function stopEmbeddedMediaInElement(root) {
  if (!root) return;
  root.querySelectorAll("iframe").forEach((frame) => {
    try {
      frame.contentWindow?.postMessage({ type: "pause" }, "*");
      frame.contentWindow?.postMessage(JSON.stringify({ type: "pause" }), "*");
    } catch (error) {
      // Cross-origin players are stopped by clearing their source below.
    }
    frame.removeAttribute("srcdoc");
    frame.setAttribute("src", "about:blank");
  });
  root.querySelectorAll("video, audio").forEach((media) => {
    try {
      media.pause();
      media.currentTime = 0;
    } catch (error) {
      // Best effort only; native media controls may reject while unloading.
    }
  });
  root.querySelectorAll("mux-player, mux-video").forEach((player) => {
    try {
      if (typeof player.pause === "function") player.pause();
      player.currentTime = 0;
    } catch (error) {
      // Best effort only; custom players vary by browser.
    }
  });
}

function stopEmbeddedMediaInView(viewId) {
  if (viewId === "discoveryDetailView") clearDiscoveryAudioSleepTimer();
  stopEmbeddedMediaInElement(document.getElementById(viewId));
}

function stopModulePlayback() {
  stopEmbeddedMediaInView("moduleDetailView");
}

function moduleModeOptions() {
  return {
    watch: { label: t("module.modeWatch"), icon: "▶", title: t("module.watchTitle"), player: t("module.watchLabel"), body: t("module.watchBody") },
    listen: { label: t("module.modeListen"), icon: "♪", title: t("module.listenTitle"), player: t("module.listenLabel"), body: t("module.listenBody") },
    read: { label: t("module.modeRead"), icon: "“", title: t("module.readTitle"), player: t("module.readLabel"), body: t("module.readBody") }
  };
}

function currentModulePlayerContext() {
  const stage = activeStage();
  const sections = stageSections(stage);
  if (state.activeModuleIndex >= sections.length) state.activeModuleIndex = 0;
  const module = sections[state.activeModuleIndex] || sections[0] || {};
  const resource = moduleResourceFor(stage, state.activeModuleIndex);
  const isComingSoon = !resource && module.progress === 0;
  const modes = moduleModeOptions();
  const preferredMode = preferredModeForResource(resource);
  const requestedMode = modes[state.moduleMode] ? state.moduleMode : preferredMode;
  const activeMode = resourceSupportsMode(resource, requestedMode) ? requestedMode : preferredMode;
  state.moduleMode = activeMode;
  return {
    stage,
    sections,
    module,
    resource,
    isComingSoon,
    modes,
    activeMode,
    mode: modes[activeMode]
  };
}

function renderActiveModuleMedia() {
  const context = currentModulePlayerContext();
  renderModulePlayer(context.resource, context.activeMode, context.mode, context.isComingSoon, { allowMedia: true });
}

function refreshActiveViewMedia(viewId) {
  if (viewId === "moduleDetailView") {
    renderActiveModuleMedia();
    return;
  }
  if (viewId === "moduleQuizView") {
    stopModulePlayback();
    return;
  }
  if (viewId === "discoveryDetailView") {
    renderDiscoveryDetail();
  }
}

function muxPlayerUrl(resource) {
  const playbackId = resourceMuxPlaybackId(resource);
  if (!playbackId) return "";
  const params = new URLSearchParams();
  if (resource.title) params.set("metadata-video-title", resource.title);
  const bounds = muxClipBounds(resource);
  if (bounds) {
    const clipParams = new URLSearchParams({
      asset_start_time: String(bounds.start),
      asset_end_time: String(bounds.end)
    });
    params.set("extra-source-params", clipParams.toString());
    params.set("start-time", "0");
    params.set("thumbnail-time", String(bounds.start));
    params.set("default-duration", String(bounds.duration));
  }
  const query = params.toString();
  return `https://player.mux.com/${encodeURIComponent(playbackId)}${query ? `?${query}` : ""}`;
}

function muxClipBounds(resource) {
  const start = Number(resource?.clipStartSeconds);
  const end = Number(resource?.clipEndSeconds);
  const hasStart = Number.isFinite(start) && start >= 0;
  const hasEnd = Number.isFinite(end) && end > 0;
  if (!hasStart || !hasEnd || end <= start) return null;
  return {
    start: Math.floor(start),
    end: Math.floor(end),
    duration: Math.max(0, Math.floor(end - start))
  };
}

function muxPlayerElementHtml(resource) {
  const playbackId = resourceMuxPlaybackId(resource);
  if (!playbackId) return "";
  const videoTitle = resource?.title || "One In Him media";
  const poster = resource?.posterUrl || resource?.thumbnailUrl || resource?.videoHost?.thumbnailUrl || "";
  const attrs = [
    `class="mux-frame"`,
    `playback-id="${esc(playbackId)}"`,
    `stream-type="on-demand"`,
    `accent-color="#ee7326"`,
    `video-title="${esc(videoTitle)}"`,
    `metadata-video-title="${esc(videoTitle)}"`,
    `playsinline`,
    `no-tooltips`
  ];
  if (resource.primaryMedium === "listen") attrs.push("audio");
  if (poster) attrs.push(`poster="${esc(poster)}"`);
  const bounds = muxClipBounds(resource);
  if (bounds) {
    attrs.push(`asset-start-time="${esc(String(bounds.start))}"`);
    attrs.push(`asset-end-time="${esc(String(bounds.end))}"`);
    attrs.push(`start-time="0"`);
    attrs.push(`thumbnail-time="${esc(String(bounds.start))}"`);
    attrs.push(`default-duration="${esc(String(bounds.duration))}"`);
  }
  return `<mux-player ${attrs.join(" ")}></mux-player>`;
}

function renderModulePlayer(resource, activeMode, mode, isComingSoon, options = {}) {
  if (!els.modulePlayer) return;
  const allowMedia = options.allowMedia ?? state.activeView === "moduleDetailView";
  const isMuxPlayableMode = activeMode === "watch" || activeMode === "listen";
  const playerMarkup = allowMedia && isMuxPlayableMode && !isComingSoon ? muxPlayerElementHtml(resource) : "";
  const playerUrl = !playerMarkup && allowMedia && isMuxPlayableMode && !isComingSoon ? muxPlayerUrl(resource) : "";
  stopEmbeddedMediaInElement(els.modulePlayer);
  els.modulePlayer.classList.toggle("has-mux", Boolean(playerMarkup || playerUrl));
  if (playerMarkup) {
    els.modulePlayer.innerHTML = playerMarkup;
    els.modulePlayIcon = null;
    els.modulePlayerLabel = null;
    return;
  }
  if (playerUrl) {
    els.modulePlayer.innerHTML = `
      <iframe
        class="mux-frame"
        src="${esc(playerUrl)}"
        title="${esc(resource.title || "One In Him media")}"
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
        allowfullscreen
      ></iframe>
    `;
    els.modulePlayIcon = null;
    els.modulePlayerLabel = null;
    return;
  }
  els.modulePlayer.innerHTML = `
    <span class="module-play" id="modulePlayIcon">${esc(isComingSoon ? "+" : mode.icon)}</span>
    <span class="module-player-label" id="modulePlayerLabel">${esc(isComingSoon ? t("module.comingSoon") : mode.player)}</span>
  `;
  els.modulePlayIcon = document.getElementById("modulePlayIcon");
  els.modulePlayerLabel = document.getElementById("modulePlayerLabel");
}

function renderModuleDetail() {
  document.body.classList.remove("quiz-checked");
  const context = currentModulePlayerContext();
  const { stage, sections, module, resource, isComingSoon, modes, activeMode, mode } = context;
  const readParagraphs = Array.isArray(resource && resource.readBody) ? resource.readBody : [];
  const sectionInfo = activeSectionPieceInfo(stage, state.activeModuleIndex);
  const section = sectionInfo.group;
  const sectionItems = section ? section.modules : [];
  const fallback = moduleFallbackInfo(resource, activeMode, modes, stage, sectionInfo);
  const lessonProgress = nodeLessonProgress(stage, state.activeModuleIndex);
  const practice = practicalUsePrompt(stage, module, resource);
  els.moduleHeader.textContent = t(stage.titleKey);
  els.moduleHero.style.setProperty("--stage-color", stage.stageColor);
  els.moduleContentGrid.style.setProperty("--stage-color", stage.stageColor);
  els.moduleHero.classList.toggle("watch-session", activeMode === "watch");
  els.moduleHero.classList.toggle("listen-session", activeMode === "listen");
  els.moduleHero.classList.toggle("read-session", activeMode === "read");
  els.moduleContentGrid.classList.toggle("read-session", activeMode === "read");
  els.moduleSessionProgress.style.setProperty("--stage-color", stage.stageColor);
  els.moduleSessionProgress.style.setProperty("--progress", `${lessonProgress.percent}%`);
  els.moduleSessionPoints.classList.add("seed-counter");
  els.moduleSessionPoints.setAttribute("aria-label", "Seeds earned");
  els.moduleSessionPoints.innerHTML = seedCounterInnerMarkup();
  const lessonPrompt = resource ? (resource.openingPrompt || resource.title) : module.title;
  const lessonCardTitle = resource ? resource.title : module.title;
  const lessonCardLede = resource ? compactText(resource.summary || module.subtitle, 210) : compactText(module.detail || module.subtitle, 210);
  const lessonParagraphs = readParagraphs.length
    ? readParagraphs
    : resource && resource.transcript
      ? resource.transcript
      : [module.detail || module.subtitle];
  const scriptureChips = resource && resource.scriptureReferences && resource.scriptureReferences.length
    ? `<div class="duo-scripture-row">${resource.scriptureReferences.map((ref) => `<span>${esc(ref)}</span>`).join("")}</div>`
    : "";
  els.moduleEyebrow.textContent = `${isComingSoon ? t("module.comingSoon") : mode.label} · Unit ${sectionInfo.groupIndex + 1} · Lesson ${sectionInfo.pieceIndex + 1} of ${sectionInfo.pieceCount}`;
  els.moduleTitle.textContent = lessonPrompt;
  els.moduleTitle.setAttribute("aria-label", lessonPrompt);
  els.moduleCopy.textContent = resource ? resource.title : module.subtitle;
  els.moduleTags.innerHTML = "";
  const fixedMediumNode = section && section.mediumPreference && section.mediumPreference !== "mixed";
  const hideFallback = fixedMediumNode || fallback.unavailable;
  els.moduleFallback.style.display = hideFallback ? "none" : "";
  if (!hideFallback) {
    els.moduleFallback.textContent = activeMode === "watch"
      ? `Can't watch right now? ${fallback.label} instead`
      : activeMode === "listen"
        ? `Can't listen right now? ${fallback.label} instead`
        : `Can't read right now? ${fallback.label} instead`;
    els.moduleFallback.setAttribute("aria-label", els.moduleFallback.textContent);
    els.moduleFallback.dataset.moduleFallbackMode = fallback.mode;
    els.moduleFallback.dataset.moduleFallbackResourceId = fallback.resourceId || "";
    els.moduleFallback.dataset.moduleFallbackIndex = Number.isFinite(Number(fallback.moduleIndex)) ? String(fallback.moduleIndex) : "";
  } else {
    els.moduleFallback.dataset.moduleFallbackMode = "";
    els.moduleFallback.dataset.moduleFallbackResourceId = "";
    els.moduleFallback.dataset.moduleFallbackIndex = "";
  }
  renderModulePlayer(resource, activeMode, mode, isComingSoon);
  els.moduleReadTitle.textContent = isComingSoon ? t("module.comingSoon") : mode.title;
  const videoSummaryMarkup = `
    <div class="duo-reading-card video-lesson-summary">
      <p class="lesson-card-kicker">${esc(mode.label)} · Lesson ${sectionInfo.pieceIndex + 1} of ${sectionInfo.pieceCount}</p>
      <h3>${esc(lessonCardTitle)}</h3>
      ${scriptureChips}
    </div>
  `;
  const readingMarkup = `
    <div class="duo-reading-card">
      <p class="lesson-card-kicker">${esc(mode.label)} · Lesson ${sectionInfo.pieceIndex + 1} of ${sectionInfo.pieceCount}</p>
      <h3>${esc(lessonCardTitle)}</h3>
      <p class="lesson-card-lede">${esc(lessonCardLede)}</p>
      <div class="duo-reading-scroll">
        ${lessonParagraphs.map((paragraph) => `<p>${esc(paragraph)}</p>`).join("")}
        <p><strong>Reflection:</strong> ${esc(resource && resource.reflectionPrompt ? resource.reflectionPrompt : "What is one honest next step you can take before you leave this lesson?")}</p>
        ${resource && resource.notesPrompt ? `<p><strong>Notes:</strong> ${esc(resource.notesPrompt)}</p>` : ""}
      </div>
      ${scriptureChips}
    </div>
  `;
  els.moduleRead.innerHTML = isComingSoon ? `
    <div class="duo-reading-card">
      <p class="lesson-card-kicker">Coming soon</p>
      <h3>${esc(module.title)}</h3>
      <p class="lesson-card-lede">${esc(module.detail)}</p>
      <div class="duo-reading-scroll">
        <p>${esc(t("module.comingSoonCopy"))}</p>
      </div>
    </div>
  ` : (activeMode === "watch" ? videoSummaryMarkup : readingMarkup);
  els.moduleNotesLabel.textContent = t("module.notesLabel");
  els.moduleNotes.placeholder = t("module.notesPlaceholder");
  els.moduleNotes.value = getModuleNote(stage, state.activeModuleIndex);
  els.moduleSaveNotes.textContent = t("module.saveNotes");
  els.moduleNoteStatus.textContent = t("module.notesReady");
  if (els.moduleSkipStep) els.moduleSkipStep.textContent = "Skip";
  els.moduleNextStep.textContent = "Continue";
  if (els.sectionContentQueue) {
    els.sectionContentQueue.style.setProperty("--stage-color", stage.stageColor);
    els.sectionContentQueue.style.display = "none";
    els.sectionContentQueue.innerHTML = `
      <h3>In this unit</h3>
      <div class="section-content-list">
        ${sectionItems.map((item, index) => {
          const itemResource = moduleResourceFor(stage, item.moduleIndex);
          const active = item.moduleIndex === state.activeModuleIndex;
          const itemTitle = itemResource ? itemResource.title : item.title;
          const itemMeta = itemResource ? `${sectionContentFormat(itemResource, nodeModeForResource(stage, section, itemResource))} · ${itemResource.length}` : item.range;
          return `
            <button class="section-content-item ${active ? "active" : ""}" type="button" data-section-content="${esc(item.moduleIndex)}">
              <span class="section-content-number">${index + 1}</span>
              <span>
                <strong>${esc(itemTitle)}</strong>
                <small>${esc(itemMeta)}</small>
              </span>
              <span class="section-content-status">${active ? "Now" : "Open"}</span>
            </button>
          `;
        }).join("")}
      </div>
    `;
  }
  if (els.practicalUsePanel && els.practicalUseContent) {
    els.practicalUsePanel.style.setProperty("--stage-color", stage.stageColor);
    els.practicalUsePanel.style.display = "none";
    els.practicalUseContent.innerHTML = `
      <p>${esc(practice.question)}</p>
      <div class="practical-use-list">
        ${practice.options.map((option) => `
          <div class="practical-use-item">
            <span class="practical-use-icon">${esc(option.icon)}</span>
            <span>
              <strong>${esc(option.label)}</strong>
              <span>${esc(option.detail)}</span>
            </span>
          </div>
        `).join("")}
      </div>
    `;
  }
  renderModuleQuiz();
}

function openSectionPicker(sectionIndex) {
  const stage = activeStage();
  const groups = stageSectionGroups(stage);
  const section = groups[sectionIndex];
  if (!section || !section.modules.length) return;
  state.selectedSectionIndex = sectionIndex;
  state.selectedPathNode = pathNodeKey("content", stage, sectionIndex);
  const firstContent = section.modules.find(item => !learningPieceComplete(stage, item.moduleIndex)) || section.modules[0];
  state.activeModuleIndex = Number(firstContent.moduleIndex) || 0;
  const firstResource = moduleResourceFor(stage, state.activeModuleIndex);
  state.moduleMode = nodeModeForResource(stage, section, firstResource);
  state.sectionPicker = null;
  state.sectionReview = null;
  state.practicalUse = false;
  state.quizChoice = "";
  state.quizChecked = false;
  renderModuleDetail();
  setView("moduleDetailView");
  bindDynamicActions();
}

function sectionContentFormat(resource, mode = "") {
  if (!resource) return "Content";
  if (mode === "read") return "Read";
  if (mode === "watch") return "Watch";
  if (mode === "listen") return "Listen";
  if (resource.visualType === "book") return "Read";
  if (resource.visualType === "video") return "Watch";
  if (resource.visualType === "audio") return "Listen";
  return labelize(resource.visualType || "Content");
}

function markCurrentLearningStepComplete() {
  const stage = activeStage();
  const info = activeSectionPieceInfo(stage, state.activeModuleIndex);
  const sectionKey = sectionProgressKey(stage, info.groupIndex);
  if (state.sectionReview) {
    state.completedReviews.add(sectionKey);
    saveLearningProgress();
    return;
  }
  if (state.practicalUse) {
    state.completedPracticals.add(sectionKey);
    saveLearningProgress();
    return;
  }
  const resource = moduleResourceFor(stage, state.activeModuleIndex);
  if (!resource) return;
  if (!learningPieceComplete(stage, state.activeModuleIndex)) state.completedPieces.add(pieceProgressKey(stage, state.activeModuleIndex));
  state.completed.add(resource.id);
  saveLearningProgress();
}

function resetModuleStepState() {
  state.quizChoice = "";
  state.quizChecked = false;
  state.sectionReview = null;
  state.sectionPicker = null;
  state.practicalUse = false;
}

function openNextModuleStep() {
  stopModulePlayback();
  const stage = activeStage();
  const info = activeSectionPieceInfo(stage, state.activeModuleIndex);
  const nextPiece = info.group && info.group.modules[info.pieceIndex + 1];
  resetModuleStepState();
  if (nextPiece) {
    state.activeModuleIndex = Number(nextPiece.moduleIndex) || 0;
    const nextResource = moduleResourceFor(stage, state.activeModuleIndex);
    state.moduleMode = nodeModeForResource(stage, info.group, nextResource);
    state.selectedSectionIndex = info.groupIndex;
    state.selectedPathNode = pathNodeKey("content", stage, info.groupIndex);
    renderModuleDetail();
    setView("moduleDetailView");
    bindDynamicActions();
    return;
  }
  renderStageDetail();
  setView("stageDetailView");
  bindDynamicActions();
}

function currentLearningQuiz() {
  const stage = activeStage();
  const module = stageSections(stage)[state.activeModuleIndex];
  const resource = moduleResourceFor(stage, state.activeModuleIndex);
  const preferred = preferredModeForResource(resource);
  const mode = resourceSupportsMode(resource, state.moduleMode) ? state.moduleMode : preferred;
  return state.sectionReview ? sectionReviewQuiz(stage, state.sectionReview)
    : state.practicalUse ? practicalUsePrompt(stage, module, resource)
    : moduleQuiz(stage, module, {label: t(`module.mode${mode[0].toUpperCase()}${mode.slice(1)}`)});
}

function learningQuizOutcome(quiz) {
  if (!quiz.options.some(option => option.id === state.quizChoice)) return "";
  return quiz.kind === "reflection" ? "reflection" : state.quizChoice === quiz.answer ? "correct" : "incorrect";
}

function renderModuleQuiz() {
  const stage = activeStage();
  const sections = stageSections(stage);
  if (state.activeModuleIndex >= sections.length) state.activeModuleIndex = 0;
  if (state.sectionPicker) {
    document.body.classList.remove("quiz-checked");
    const picker = state.sectionPicker;
    const firstContent = picker.modules[0];
    const contentCount = picker.modules.length;
    const contentCountLabel = `${contentCount} ${contentCount === 1 ? "lesson" : "lessons"}`;
    const formatList = [...new Set(picker.modules.map((item) => {
      const resource = moduleResourceFor(stage, item.moduleIndex);
      return sectionContentFormat(resource);
    }))].slice(0, 3).join(" · ");
    const lessonPreview = picker.modules.slice(0, 5).map((item, index) => {
      const resource = moduleResourceFor(stage, item.moduleIndex);
      const mode = nodeModeForResource(stage, picker, resource);
      return `
        <span class="section-picker-lesson">
          <b>${index + 1}</b>
          <span>${esc(resource ? resource.title : item.title)}</span>
          <em>${esc(sectionContentFormat(resource, mode))}</em>
        </span>
      `;
    }).join("");
    const pickerCompleted = picker.modules.filter((item) =>
      learningPieceComplete(stage, item.moduleIndex)
    ).length;
    const pickerProgress = picker.modules.length
      ? Math.round((pickerCompleted / picker.modules.length) * 100)
      : 0;
    els.quizProgressFill.style.setProperty("--stage-color", stage.stageColor);
    els.quizProgressFill.style.setProperty("--progress", `${pickerProgress}%`);
    els.quizKicker.textContent = `Unit ${picker.sectionIndex + 1} · ${t(stage.titleKey)}`;
    els.quizKicker.style.setProperty("--stage-color", stage.stageColor);
    els.quizQuestion.textContent = picker.title;
    els.quizOptions.innerHTML = `
      <div class="quiz-option" style="--stage-color: ${esc(stage.stageColor)}">
        <span class="quiz-option-symbol">${picker.sectionIndex + 1}</span>
        <span>
          <strong>${esc(firstContent ? firstContent.title : picker.title)}</strong>
          <small>${esc(contentCountLabel)} · ${esc(formatList || "Content")}</small>
          <span class="section-picker-lessons">${lessonPreview}</span>
        </span>
      </div>
    `;
    els.quizFeedback.classList.remove("show");
    els.quizFeedback.textContent = "";
    els.quizCheck.disabled = false;
    els.quizCheck.textContent = "Start";
    document.body.classList.add("section-picker-mode");
    return;
  }
  document.body.classList.remove("section-picker-mode");
  const review = state.sectionReview;
  const module = sections[state.activeModuleIndex] || sections[0];
  const resource = moduleResourceFor(stage, state.activeModuleIndex);
  const modes = {
    watch: { label: t("module.modeWatch"), icon: "▶" },
    listen: { label: t("module.modeListen"), icon: "♪" },
    read: { label: t("module.modeRead"), icon: "“" }
  };
  const preferredMode = preferredModeForResource(resource);
  const requestedMode = modes[state.moduleMode] ? state.moduleMode : preferredMode;
  const activeMode = resourceSupportsMode(resource, requestedMode) ? requestedMode : preferredMode;
  const quiz = currentLearningQuiz();
  const quizKey = [
    stage.choice,
    review ? `review:${review.groupIndex ?? review.title}` : `${state.activeModuleIndex}:${resource?.id || module?.title || ""}:${activeMode}`,
    state.practicalUse ? "practical" : "quiz",
    quiz.question
  ].join(":");
  if (state.quizKey !== quizKey) {
    state.quizKey = quizKey;
    state.quizChoice = "";
    state.quizChecked = false;
    document.body.classList.remove("quiz-checked");
  }
  const lessonProgress = nodeLessonProgress(stage, state.activeModuleIndex);
  const quizProgress = review || state.practicalUse ? 100 : lessonProgress.percent;
  els.quizProgressFill.style.setProperty("--stage-color", stage.stageColor);
  els.quizProgressFill.style.setProperty("--progress", `${quizProgress}%`);
  els.quizKicker.textContent = quiz.kicker;
  els.quizKicker.style.setProperty("--stage-color", stage.stageColor);
  els.quizQuestion.textContent = quiz.question;
  els.quizOptions.innerHTML = quiz.options.map((option, index) => {
    const selected = state.quizChoice === option.id;
    const correct = state.quizChecked && learningQuizOutcome(quiz) === "correct" && option.id === quiz.answer;
    const incorrect = state.quizChecked && learningQuizOutcome(quiz) === "incorrect" && selected;
    return `
      <button class="quiz-option ${selected ? "selected" : ""} ${correct ? "correct" : ""} ${incorrect ? "incorrect" : ""}" type="button" aria-pressed="${selected}" data-quiz-choice="${esc(option.id)}" style="--stage-color: ${esc(stage.stageColor)}">
        <span class="quiz-option-symbol">${esc(option.icon)}</span>
        <span>
          <strong>${esc(option.label)}</strong>
          ${state.quizChecked && selected && option.detail ? `<span class="quiz-option-detail">${esc(option.detail)}</span>` : ""}
          <small>${index + 1}</small>
        </span>
      </button>
    `;
  }).join("");
  els.quizFeedback.classList.toggle("show", state.quizChecked);
  const outcome = state.quizChecked ? learningQuizOutcome(quiz) : "";
  els.quizFeedback.textContent = !outcome ? "" : outcome === "incorrect"
    ? "Not quite. Think back to the teaching and try another answer."
    : outcome === "reflection" ? `Your choice: ${quiz.options.find(option => option.id === state.quizChoice).label}. ${quiz.feedback}`
    : `Correct. ${quiz.feedback}`;
  els.quizFeedback.setAttribute("role", "status");
  ["correct", "incorrect", "reflection"].forEach(value => document.body.classList.toggle(`quiz-result-${value}`, outcome === value));
  document.body.classList.toggle("quiz-checked", Boolean(state.quizChecked));
  els.quizCheck.disabled = !state.quizChoice;
  els.quizCheck.textContent = state.quizChecked ? (outcome === "incorrect" ? "Try again" : "Continue") : quiz.kind === "reflection" ? "Choose this step" : "Check";
  els.moduleNotesLabel.textContent = t("module.notesLabel");
  els.moduleNotes.placeholder = t("module.notesPlaceholder");
  els.moduleNotes.value = getModuleNote(stage, state.activeModuleIndex);
  els.moduleSaveNotes.textContent = t("module.saveNotes");
  els.moduleNoteStatus.textContent = t("module.notesReady");
}

function rowHtml(resource, title, subtitle, actionLabel, attr) {
  const safeAttr = String(attr || "")
    .replace(/data-discover-open="([^"]+)"/g, (_match, id) => `data-discover-open="${esc(resolveContentTargetId(id))}"`)
    .replace(/data-open="([^"]+)"/g, (_match, id) => `data-open="${esc(resolveContentTargetId(id))}"`);
  return `
    <button class="mini-row" type="button" ${safeAttr}>
      <span class="mini-thumb ${esc(resource.visualType)}"></span>
      <span>
        <strong>${esc(title)}</strong>
        <span>${esc(subtitle)}</span>
      </span>
      <span class="arrow">${esc(actionLabel)}</span>
    </button>
  `;
}

function renderJourney() {
  els.journeyPath.innerHTML = journeyLessons.map((lesson, index) => {
    const resource = resources.find((entry) => entry.id === lesson.resourceId);
    const done = state.completed.has(lesson.resourceId);
    const locked = lesson.status === "locked" && !done;
    const current = lesson.status === "current" && !done;
    const status = done ? "Done" : locked ? "Later" : current ? "Today" : "Open";
    return `
      <article class="path-node ${current ? "current" : ""} ${locked ? "locked" : ""}">
        <div class="node-badge">${done ? "OK" : index + 1}</div>
        <div>
          <h3>${esc(lesson.title)}</h3>
          <p>${esc(lesson.detail)}</p>
          <div class="tag-row">${tag(resource.topic, "green")}${tag(resource.length, "orange")}${tag(labelize(resource.stage), "blue")}</div>
        </div>
        <button class="primary-btn" type="button" ${locked ? "disabled" : `data-open="${resource.id}"`}>${esc(status)}</button>
      </article>
    `;
  }).join("");
  const rec = resources.find((item) => item.stage === "explore") || activeResource();
  els.journeyRecommended.innerHTML = rowHtml(rec, rec.title, rec.summary, "Start", `data-open="${rec.id}"`);
}

function cleanQuestionInput(value) {
  const question = String(value || "").trim();
  const defaultQuestions = [i18n.en["gateway.questionDefault"], i18n.nl["gateway.questionDefault"]]
    .map((item) => String(item || "").trim().toLowerCase());
  return defaultQuestions.includes(question.toLowerCase()) ? "" : question;
}

function questionHasAny(text, terms) {
  return terms.some((term) => text.includes(term));
}

function resourceStageSlugForStageChoice(stageChoice) {
  return {
    exploreJesus: "explore",
    startFollowing: "foundations",
    growRoots: "formation",
    liveMission: "mission",
    leadMultiply: "multiply"
  }[stageChoice] || "explore";
}

function questionGuideFor(question) {
  const text = cleanQuestionInput(question).toLowerCase();
  const rules = [
    { stageChoice: "leadMultiply", groupIndex: 1, terms: ["pastor", "pastoral", "minister", "ministry", "church plant", "church planting", "mentor", "mentoring", "multiply", "disciple someone", "disciple others"] },
    { stageChoice: "leadMultiply", groupIndex: 0, terms: ["leader", "leadership", "calling", "called", "gift"] },
    { stageChoice: "liveMission", groupIndex: 2, terms: ["disciple a friend", "disciple friend", "small group", "help someone follow", "read together"] },
    { stageChoice: "liveMission", groupIndex: 1, terms: ["share faith", "evangel", "gospel conversation", "testimony", "tell people", "talk about jesus", "mission"] },
    { stageChoice: "liveMission", groupIndex: 0, terms: ["serve", "serving", "justice", "mercy", "city", "poor"] },
    { stageChoice: "growRoots", groupIndex: 3, terms: ["community", "friend", "relationships", "character", "fruit of the spirit", "church community"] },
    { stageChoice: "growRoots", groupIndex: 2, terms: ["doubt", "unanswered", "science", "sexuality", "trust the bible", "hard question"] },
    { stageChoice: "growRoots", groupIndex: 1, terms: ["anxiety", "anxious", "heavy", "depressed", "peace", "worry", "fear", "healing", "forgive", "forgiveness", "freedom", "addiction", "pain", "suffering"] },
    { stageChoice: "growRoots", groupIndex: 0, terms: ["habit", "habits", "discipline", "sabbath", "worship", "generosity", "obedience", "daily scripture"] },
    { stageChoice: "startFollowing", groupIndex: 2, terms: ["baptism", "identity", "who am i in christ", "belong"] },
    { stageChoice: "startFollowing", groupIndex: 1, terms: ["pray", "prayer", "bible", "scripture", "read the bible", "read john", "words feel hard"] },
    { stageChoice: "startFollowing", groupIndex: 0, terms: ["new christian", "new believer", "saved", "salvation", "grace", "repent", "repentance", "eternal life", "first 30", "following jesus", "start following"] },
    { stageChoice: "exploreJesus", groupIndex: 2, terms: ["is god real", "god real", "why suffering", "can i trust the bible", "big question", "questions that matter", "purpose"] },
    { stageChoice: "exploreJesus", groupIndex: 1, terms: ["far from god", "far away", "hurt by church", "church hurt", "start again", "returning", "back to god", "feel lost", "not know where to start", "where to start"] },
    { stageChoice: "exploreJesus", groupIndex: 0, terms: ["who is jesus", "jesus", "gospel", "faith", "curious", "unsure", "is god there", "does god care"] }
  ];
  const matchedRule = rules.find((rule) => questionHasAny(text, rule.terms)) || {
    stageChoice: "exploreJesus",
    groupIndex: text.includes("start") ? 1 : 0
  };
  const stage = stageForChoice(matchedRule.stageChoice);
  const groups = stageSectionGroups(stage);
  const maxGroupIndex = Math.max(0, groups.length - 1);
  const groupIndex = Math.max(0, Math.min(maxGroupIndex, matchedRule.groupIndex || 0));
  const group = groups[groupIndex] || groups[0] || null;
  return {
    stage,
    stageChoice: stage.choice,
    groupIndex,
    group,
    label: group?.title || t(stage.titleKey),
    nodeKey: pathNodeKey("content", stage, groupIndex),
    resourceStageSlug: resourceStageSlugForStageChoice(stage.choice)
  };
}

function openQuestionGuide(question, sourceInput = null) {
  const cleanQuestion = cleanQuestionInput(question);
  if (!cleanQuestion) {
    toast(t("toast.questionNeeded"));
    if (sourceInput) sourceInput.focus();
    return;
  }
  const guide = questionGuideFor(cleanQuestion);
  state.lastQuestion = cleanQuestion;
  els.gatewayQuestion.value = cleanQuestion;
  els.askInput.value = cleanQuestion;
  state.activeStageId = guide.stageChoice;
  state.pathPreviewStageId = guide.stageChoice;
  state.selectedSectionIndex = guide.groupIndex;
  state.selectedPathNode = guide.nodeKey;
  state.guidedPathNode = guide.nodeKey;
  state.sectionPicker = null;
  state.sectionReview = null;
  state.practicalUse = false;
  state.quizChoice = "";
  state.quizChecked = false;
  if (guide.group && guide.group.modules && guide.group.modules.length) {
    state.activeModuleIndex = Number(guide.group.modules[0].moduleIndex) || 0;
    const resource = moduleResourceFor(guide.stage, state.activeModuleIndex);
    if (resource) {
      state.activeResourceId = resource.id;
      state.moduleMode = nodeModeForResource(guide.stage, guide.group, resource);
    }
  }
  renderAll();
  toast(`${t("toast.questionMatched")}: ${guide.label}`);
  setView("stageDetailView");
}

function matchResources(question) {
  const text = String(question || "").toLowerCase();
  const guide = questionGuideFor(question);
  const sourceBackedBoosts = [
    { id: sourceBackedQuickStarts.bible, terms: ["bible", "scripture", "read my bible", "read the bible", "word of god"] },
    { id: sourceBackedQuickStarts.prayer, terms: ["pray", "prayer", "talk to god", "praying"] },
    { id: sourceBackedQuickStarts.newChristian, terms: ["new christian", "new believer", "where do i start", "starting again", "follow jesus"] },
    { id: sourceBackedQuickStarts.jesus, terms: ["who is jesus", "why jesus", "jesus"] }
  ];
  return resources
    .map((resource) => {
      const questionScore = resource.questions.some((q) => q.toLowerCase().split(/\W+/).filter((word) => word.length > 3).some((word) => text.includes(word))) ? 4 : 0;
      const topicScore = text.includes(resource.topic.toLowerCase()) ? 3 : 0;
      const careScore = text.includes("talk") || text.includes("someone") ? (resource.topic === "Anxiety" ? 2 : 0) : 0;
      const startScore = text.includes("start") || text.includes("far") ? (resource.stage === "explore" ? 2 : 0) : 0;
      const guideScore = resource.stage === guide.resourceStageSlug ? 3 : 0;
      const sourceScore = sourceBackedBoosts.some((entry) =>
        entry.id === resource.id && entry.terms.some((term) => text.includes(term))
      ) ? 8 : 0;
      return { resource, score: questionScore + topicScore + careScore + startScore + guideScore + sourceScore };
    })
    .sort((a, b) => b.score - a.score)
    .map((entry) => entry.resource);
}

function renderAsk() {
  const question = cleanQuestionInput(state.lastQuestion) || t("gateway.questionDefault");
  const matches = matchResources(question);
  const best = matches[0] || resources[0];
  const guide = questionGuideFor(question);
  els.answerCard.innerHTML = `
    <div>
      <h3>${esc(answerTitle(question))}</h3>
      <p>${esc(answerCopy(best, question))}</p>
      <p><strong>Recommended:</strong> ${esc(t(guide.stage.titleKey))} · ${esc(guide.label)}</p>
      <div class="tag-row">${tag(best.topic, "green")}${tag(labelize(best.stage), "blue")}${tag(best.length, "orange")}</div>
    </div>
    <div class="row-actions">
      <button class="primary-btn" type="button" data-question-guide-start>Start the best path</button>
      <button class="soft-btn" type="button" data-discover-open="${esc(best.id)}">Open content now</button>
    </div>
  `;
  els.askRecommendations.innerHTML = matches.slice(0, 3).map(askDiscoveryCard).join("");
}

function resourceStageNumber(resource) {
  return {
    explore: 1,
    foundations: 2,
    formation: 3,
    mission: 4,
    multiply: 5
  }[resource.stage] || 1;
}

function resourceIcon(resource) {
  return iconForResourceMedium(resource);
}

function askDiscoveryCard(resource) {
  const stageNumber = resourceStageNumber(resource);
  return `
    <button class="ask-discovery-card stage-${stageNumber}" type="button" data-discover-open="${esc(resource.id)}">
      <span class="ask-card-top">
        <span class="ask-card-icon">${esc(resourceIcon(resource))}</span>
        <span class="content-kind">${esc(labelize(resource.contentType))}</span>
      </span>
      <div class="ask-card-copy">
        <h4>${esc(resource.title)}</h4>
        <p>${esc(whyRecommended(resource, state.lastQuestion))}</p>
      </div>
      <span class="tile-meta">
        <span class="stage-chip">Section ${stageNumber}</span>
        <span class="content-chip">${esc(resource.length)}</span>
      </span>
    </button>
  `;
}

function questionJourneyAttr(question) {
  const text = question.toLowerCase();
  if (text.includes("pastor")) return `data-gateway-choice="pastor"`;
  if (text.includes("leader") || text.includes("leadership")) return `data-gateway-choice="leadership"`;
  if (text.includes("evangel")) return `data-gateway-choice="evangelist"`;
  if (text.includes("share") || text.includes("mission")) return `data-gateway-choice="shareFaith"`;
  if (text.includes("anxiety") || text.includes("heavy") || text.includes("peace")) return `data-gateway-choice="care"`;
  if (text.includes("pray")) return `data-gateway-choice="prayer"`;
  if (text.includes("bible") || text.includes("scripture")) return `data-gateway-choice="bible"`;
  return `data-gateway-choice="exploreJesus"`;
}

function answerTitle(question) {
  const text = question.toLowerCase();
  if (text.includes("pastor")) return "Explore calling with formation, not pressure.";
  if (text.includes("leader") || text.includes("leadership")) return "Leadership starts with character and faithful practice.";
  if (text.includes("evangel")) return "Start with clarity, love, and courage.";
  if (text.includes("pray")) return "Start with honesty, not perfect words.";
  if (text.includes("anxiety") || text.includes("heavy")) return "God meets you inside the weight.";
  if (text.includes("talk") || text.includes("someone")) return "Content can help, and a trusted person may help too.";
  return "You can begin with one honest step.";
}

function answerCopy(resource, question) {
  const text = question.toLowerCase();
  if (text.includes("pastor")) {
    return "That belongs in the Lead and Multiply section. The next useful step is not just consuming more content, but exploring calling, character, care, teaching, and whether trusted leaders can walk with you.";
  }
  if (text.includes("leader") || text.includes("leadership")) {
    return "That is a leadership formation question. Start with a guided path that joins teaching, habits, service, feedback, and real people around you.";
  }
  if (text.includes("evangel")) {
    return "That fits the Live on Mission section. The goal is to learn how to share Jesus clearly and naturally, without turning people into projects.";
  }
  if (text.includes("talk") || text.includes("someone")) {
    return "It may help to listen first, but this should also lead toward a real conversation with someone trusted. This resource is a gentle place to start.";
  }
  return `${resource.summary} This fits because it is ${resource.length}, connected to ${resource.topic}, and made for the ${labelize(resource.stage)} section.`;
}

function whyRecommended(resource, question) {
  const words = resource.questions[0] || resource.topic;
  return `${resource.length} · answers "${words}"`;
}

function renderLibrary() {
  updateSeedDisplays();
  if (!els.libraryGrid || !els.topicList) return;
  const query = els.librarySearch ? els.librarySearch.value.trim().toLowerCase() : "";
  const filtered = resources.filter((item) => {
    const haystack = [item.title, item.topic, item.speaker, item.stage, item.summary, item.format.join(" ")].join(" ").toLowerCase();
    const queryOk = !query || haystack.includes(query);
    const filter = state.libraryFilter;
    const filterOk = filter === "all"
      || (filter === "video" && item.format.includes("watch"))
      || (filter === "audio" && item.format.includes("listen"))
      || (filter === "read" && item.format.includes("read"))
      || filter === item.stage;
    return queryOk && filterOk;
  });
  els.libraryGrid.innerHTML = filtered.map(resourceCard).join("");
  const topics = [...new Set(resources.map((item) => item.topic))];
  els.topicList.innerHTML = topics.map((topicName) => {
    const first = resources.find((item) => item.topic === topicName);
    return rowHtml(first, topicName, `${resources.filter((item) => item.topic === topicName).length} resource`, "View", `data-topic="${topicName}"`);
  }).join("");
}

function resourceCard(resource) {
  const level = resourceAccessLevel(resource);
  const unlocked = resourceIsUnlocked(resource);
  const seedAccessResource = level === "seed_unlock";
  const displayLevel = seedAccessResource && !unlocked ? "partner_access" : level;
  const displayAccessLabel = seedAccessResource ? (unlocked ? "Unlocked" : "Partner access") : accessLabelForResource(resource);
  const displayAccessCopy = seedAccessResource
    ? (unlocked ? "Access is active for this resource." : "Partners, supporters, and approved staff can open this Library resource directly.")
    : accessCopyForResource(resource);
  const action = unlocked
    ? `<button class="primary-btn" type="button" data-discover-open="${esc(resource.id)}">Open</button>`
    : `<button class="primary-btn" type="button" data-action="partner-access">Partner access</button>`;
  return `
    <article class="resource-card ${unlocked ? "" : "locked"}" data-access-level="${esc(displayLevel)}">
      <div class="resource-art ${esc(resource.visualType)}">${unlocked ? "" : contentLockBadgeMarkup()}</div>
      <div class="resource-body">
        <strong>${esc(resource.title)}</strong>
        <span>${esc(resource.summary)}</span>
        <div class="tag-row">
          ${tag(resource.topic, "green")}
          ${tag(resource.length, "orange")}
          ${tag(labelize(resource.stage), "blue")}
          <span class="access-pill ${esc(displayLevel)}">${esc(displayAccessLabel)}</span>
        </div>
        <span class="access-copy">${esc(displayAccessCopy)}</span>
        <div class="row-actions">
          ${action}
        </div>
      </div>
    </article>
  `;
}

function renderSpeakers() {
  const speaker = speakers.find((item) => item.id === state.activeSpeakerId) || speakers[0];
  els.speakerName.textContent = speaker.name;
  els.speakerBio.textContent = speaker.bio;
  els.speakerResources.innerHTML = resources.filter((resource) => resource.speakerId === speaker.id).map(resourceCard).join("");
  els.speakerList.innerHTML = speakers.map((item) => `
    <button class="speaker-row" type="button" data-speaker="${esc(item.id)}">
      <span class="mini-thumb"></span>
      <span>
        <strong>${esc(item.name)}</strong>
        <span>${esc(item.topics.join(", "))}</span>
      </span>
      <span class="arrow">View</span>
    </button>
  `).join("");
}

function renderShare() {
  const item = activeResource();
  els.shareTitle.textContent = item.title;
  els.shareSummary.textContent = item.shareLine;
  els.friendPreview.textContent = `${item.shareLine} It opens straight to ${item.title}, then offers one gentle next step.`;
}

function renderAll() {
  renderArtworkHome();
  renderGatewayHeroSlider();
  scheduleGatewayHeroAutoplay();
  renderHome();
  renderDiscoveryDetail();
  renderShelfDetail();
  renderPathSelect();
  renderStageDetail();
  renderModuleDetail();
  renderFeed();
  renderJourney();
  renderAsk();
  renderLibrary();
  renderSpeakers();
  renderShare();
  bindDynamicActions();
}

function bindDynamicActions() {
  normalizeRenderedContentTargets();
  refreshContentLockBadges();
  document.querySelectorAll("[data-open]").forEach((button) => {
    button.onclick = () => setActiveResource(button.dataset.open);
  });
  document.querySelectorAll("[data-discover-open]").forEach((button) => {
    if (button.closest(".home-hero-slide")) return;
    button.onclick = () => setDiscoveryResource(button.dataset.discoverOpen);
  });
  document.querySelectorAll("[data-open-shelf]").forEach((button) => {
    button.onclick = () => openShelfDetail(button.dataset.openShelf);
  });
  document.querySelectorAll("[data-open-browse-shelf]").forEach((button) => {
    button.onclick = () => openBrowseShelf(button.dataset.openBrowseShelf);
  });
  document.querySelectorAll("[data-open-browse-topic]").forEach((button) => {
    button.onclick = () => openBrowseShelf(`topic:${button.dataset.openBrowseTopic}`);
  });
  document.querySelectorAll("[data-open-browse-person]").forEach((button) => {
    button.onclick = () => openBrowseShelf(`person:${button.dataset.openBrowsePerson}`);
  });
  document.querySelectorAll("[data-open-browse-series]").forEach((button) => {
    button.onclick = () => openBrowseShelf(`series:${button.dataset.openBrowseSeries}`);
  });
  document.querySelectorAll("[data-shelf-back]").forEach((button) => {
    button.onclick = () => {
      if (document.body.classList.contains("shelf-search-mode")) {
        closeShelfSearch();
        return;
      }
      if (String(state.activeBrowseShelfKey || "").startsWith("topic:")) {
        openBrowseShelf("topics");
        return;
      }
      if (String(state.activeBrowseShelfKey || "").startsWith("person:")) {
        openBrowseShelf("people");
        return;
      }
      setView("gatewayView");
      window.requestAnimationFrame(scrollGatewayToTop);
    };
  });
  document.querySelectorAll("[data-shelf-search]").forEach((button) => {
    button.onclick = openShelfSearch;
  });
  document.querySelectorAll("[data-shelf-search-close]").forEach((button) => {
    button.onclick = closeShelfSearch;
  });
  document.querySelectorAll("[data-shelf-search-clear]").forEach((button) => {
    button.onclick = () => {
      const input = document.getElementById("shelfSearchInput");
      if (input?.value) {
        input.value = "";
        input.focus({ preventScroll: true });
      } else {
        closeShelfSearch();
      }
    };
  });
  document.querySelectorAll("[data-search-filter]").forEach((button) => {
    button.onclick = () => {
      state.searchFilter = button.dataset.searchFilter || "all";
      renderShelfSearchResults();
    };
  });
  const shelfSearchInput = document.getElementById("shelfSearchInput");
  if (shelfSearchInput) {
    shelfSearchInput.oninput = () => {
      state.searchQuery = shelfSearchInput.value || "";
      renderShelfSearchResults();
    };
  }
  document.querySelectorAll("[data-nav-jump]").forEach((button) => {
    if (button.closest(".home-hero-slide")) return;
    button.onclick = () => {
      let targetView = button.dataset.navJump;
      if (button.dataset.linkedResource) {
        setActiveResource(button.dataset.linkedResource, targetView === "stageDetailView" ? "stageDetailView" : targetView);
        return;
      }
      if (targetView === "pathSelectView") {
        openDefaultJourneyPath();
        return;
      }
      if (state.sectionPicker && (targetView === "moduleDetailView" || targetView === "stageDetailView")) {
        state.sectionPicker = null;
        targetView = "stageDetailView";
      }
      const shouldRestoreModulePlayer = targetView === "moduleDetailView" && state.activeView === "moduleQuizView";
      if (shouldRestoreModulePlayer) renderModuleDetail();
      if (targetView === "gatewayView") {
        setGatewayContentMode("discover");
        setGatewayNavActive("discover");
      }
      setView(targetView);
      if (shouldRestoreModulePlayer) bindDynamicActions();
    };
  });
  document.querySelectorAll("[data-speaker]").forEach((button) => {
    button.onclick = () => {
      state.activeSpeakerId = button.dataset.speaker;
      renderSpeakers();
    };
  });
  document.querySelectorAll("[data-gateway-choice]").forEach((button) => {
    button.onclick = () => handleGatewayChoice(button.dataset.gatewayChoice);
  });
  document.querySelectorAll("[data-hero-dot]").forEach((button) => {
    button.onclick = () => setGatewayHero(Number(button.dataset.heroDot) || 0, { scrollToHeroTop: true });
  });
  document.querySelectorAll("[data-question-guide-start]").forEach((button) => {
    button.onclick = (event) => {
      event.stopPropagation();
      openQuestionGuide(state.lastQuestion, els.askInput);
    };
  });
  document.querySelectorAll("[data-path-section-start]").forEach((button) => {
    button.onclick = () => openJourneySectionStart(button.dataset.pathSectionStart);
  });
  document.querySelectorAll("[data-path-preview-section]").forEach((button) => {
    button.onclick = () => {
      state.pathPreviewStageId = button.dataset.pathPreviewSection;
      renderPathSelect();
      bindDynamicActions();
    };
  });
  document.querySelectorAll("[data-module]").forEach((button) => {
    button.onclick = () => {
      state.activeModuleIndex = Number(button.dataset.module) || 0;
      state.moduleMode = "watch";
      state.quizChoice = "";
      state.quizChecked = false;
      state.sectionReview = null;
      state.practicalUse = false;
      renderModuleDetail();
      setView("moduleDetailView");
      bindDynamicActions();
    };
  });
  document.querySelectorAll("[data-section-toggle]").forEach((button) => {
    button.onclick = () => {
      const sectionIndex = Number(button.dataset.sectionToggle) || 0;
      openSectionPicker(sectionIndex);
    };
  });
  document.querySelectorAll("[data-section-select]").forEach((button) => {
    button.onclick = () => {
      state.selectedSectionIndex = Number(button.dataset.sectionSelect) || 0;
      renderStageDetail();
      bindDynamicActions();
    };
  });
  document.querySelectorAll("[data-path-node-select]").forEach((button) => {
    button.onclick = () => {
      state.selectedSectionIndex = Number(button.dataset.pathNodeSelect) || 0;
      renderStageDetail();
      bindDynamicActions();
    };
  });
  document.querySelectorAll("[data-section-node-select]").forEach((button) => {
    button.onclick = () => {
      state.selectedSectionIndex = Number(button.dataset.sectionNodeSelect) || 0;
      renderStageDetail();
      bindDynamicActions();
    };
  });
  document.querySelectorAll("[data-duo-node-select]").forEach((button) => {
    button.onclick = (event) => {
      event.stopPropagation();
      const key = button.dataset.duoNodeSelect || "";
      const target = parsePathNodeKey(key);
      if (target.stageChoice) state.activeStageId = target.stageChoice;
      if (Number.isFinite(target.groupIndex)) state.selectedSectionIndex = target.groupIndex;
      state.selectedPathNode = state.selectedPathNode === key ? "" : key;
      renderStageDetail();
      bindDynamicActions();
    };
  });
  document.querySelectorAll(".duo-node-popout").forEach((popout) => {
    popout.addEventListener("click", (event) => event.stopPropagation());
  });
  document.querySelectorAll("[data-duo-guidebook]").forEach((button) => {
    button.onclick = () => {
      openGuidebook();
    };
  });
  document.querySelectorAll("[data-node-medium]").forEach((button) => {
    button.onclick = (event) => {
      event.stopPropagation();
      if (button.disabled) return;
      const [stageChoice, unitNumber, medium] = String(button.dataset.nodeMedium || "").split(":");
      const stage = stageForChoice(stageChoice);
      if (stageChoice !== stage.choice || !unitNumber || !medium) return;
      state.activeStageId = stage.choice;
      state.nodeMediumPreference[nodeMediumPreferenceKey(stage, Number(unitNumber) || 1)] = medium;
      state.selectedSectionIndex = Number(unitNumber) - 1;
      state.selectedPathNode = pathNodeKey("content", stage, state.selectedSectionIndex);
      renderStageDetail();
      bindDynamicActions();
    };
  });
  document.querySelectorAll("[data-section-node-start]").forEach((button) => {
    button.onclick = () => {
      const target = parseStageGroupTarget(button.dataset.sectionNodeStart);
      const stage = stageForChoice(target.stageChoice);
      state.activeStageId = stage.choice;
      const sectionIndex = target.groupIndex;
      const groups = stageSectionGroups(stage);
      const section = groups[sectionIndex];
      const guidedTarget = state.guidedPathNode === pathNodeKey("content", stage, sectionIndex);
      const currentTarget = sectionIndex === currentSectionGroupIndex(groups);
      if (!section || !section.modules.length || (section.progress === 0 && !currentTarget && !guidedTarget)) return;
      openSectionPicker(sectionIndex);
    };
  });
  document.querySelectorAll("[data-section-practical-start]").forEach((button) => {
    button.onclick = () => {
      const target = parseStageGroupTarget(button.dataset.sectionPracticalStart);
      const stage = stageForChoice(target.stageChoice);
      state.activeStageId = stage.choice;
      const sectionIndex = target.groupIndex;
      const groups = stageSectionGroups(stage);
      const section = groups[sectionIndex];
      if (!section || !section.modules.length) return;
      state.selectedSectionIndex = sectionIndex;
      state.selectedPathNode = pathNodeKey("practice", stage, sectionIndex);
      state.activeModuleIndex = Number(section.modules[section.modules.length - 1].moduleIndex) || 0;
      state.moduleMode = "read";
      state.sectionReview = null;
      state.sectionPicker = null;
      state.practicalUse = true;
      state.quizChoice = "";
      state.quizChecked = false;
      renderModuleQuiz();
      setView("moduleQuizView");
      bindDynamicActions();
    };
  });
  document.querySelectorAll("[data-path-node-start]").forEach((button) => {
    button.onclick = () => {
      const nodeIndex = Number(button.dataset.pathNodeStart) || 0;
      const stage = activeStage();
      const groups = stageSectionGroups(stage);
      const currentGroupIndex = Math.max(0, groups.findIndex((group) => group.modules.some((module) => module.progress < 100)));
      const section = groups[currentGroupIndex] || groups[0];
      if (!section) return;
      const selected = section.modules[nodeIndex];
      state.quizChoice = "";
      state.quizChecked = false;
      state.sectionPicker = null;
      state.practicalUse = false;
      if (selected) {
        state.activeModuleIndex = Number(selected.moduleIndex) || 0;
        const resource = moduleResourceFor(stage, state.activeModuleIndex);
        state.moduleMode = nodeModeForResource(stage, section, resource);
        state.sectionReview = null;
        renderModuleDetail();
        setView("moduleDetailView");
      } else {
        const isReview = nodeIndex > section.modules.length;
        state.activeModuleIndex = section.modules[section.modules.length - 1]?.moduleIndex || 0;
        state.moduleMode = "read";
        state.sectionReview = isReview ? section : null;
        state.practicalUse = !isReview;
        renderModuleQuiz();
        setView("moduleQuizView");
      }
      bindDynamicActions();
    };
  });
  document.querySelectorAll("[data-section-review]").forEach((button) => {
    button.onclick = () => {
      const target = parseStageGroupTarget(button.dataset.sectionReview);
      const stage = stageForChoice(target.stageChoice);
      state.activeStageId = stage.choice;
      const reviewIndex = target.groupIndex;
      const groups = stageSectionGroups(stage);
      const review = groups[reviewIndex];
      if (!review) return;
      state.sectionReview = review;
      state.sectionPicker = null;
      state.activeModuleIndex = review.modules[review.modules.length - 1].moduleIndex;
      state.selectedSectionIndex = reviewIndex;
      state.selectedPathNode = pathNodeKey("review", stage, reviewIndex);
      state.quizChoice = "";
      state.quizChecked = false;
      renderModuleQuiz();
      setView("moduleQuizView");
      bindDynamicActions();
    };
  });
  document.querySelectorAll("[data-section-content]").forEach((button) => {
    button.onclick = () => {
      stopModulePlayback();
      state.activeModuleIndex = Number(button.dataset.sectionContent) || 0;
      const resource = moduleResourceFor(activeStage(), state.activeModuleIndex);
      const info = activeSectionPieceInfo(activeStage(), state.activeModuleIndex);
      state.moduleMode = nodeModeForResource(activeStage(), info.group, resource);
      state.quizChoice = "";
      state.quizChecked = false;
      state.sectionReview = null;
      state.sectionPicker = null;
      state.practicalUse = false;
      state.selectedSectionIndex = info.groupIndex;
      state.selectedPathNode = pathNodeKey("content", activeStage(), info.groupIndex);
      renderModuleDetail();
      bindDynamicActions();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  });
  if (els.moduleFallback) {
    els.moduleFallback.onclick = () => {
      stopModulePlayback();
      const fallbackResourceId = els.moduleFallback.dataset.moduleFallbackResourceId || "";
      const fallbackModuleIndex = Number(els.moduleFallback.dataset.moduleFallbackIndex);
      if (Number.isFinite(fallbackModuleIndex) && fallbackModuleIndex >= 0) {
        state.activeModuleIndex = fallbackModuleIndex;
        const info = activeSectionPieceInfo(activeStage(), state.activeModuleIndex);
        state.selectedSectionIndex = info.groupIndex;
        state.selectedPathNode = pathNodeKey("content", activeStage(), info.groupIndex);
        state.moduleMode = els.moduleFallback.dataset.moduleFallbackMode || nodeModeForResource(activeStage(), info.group, moduleResourceFor(activeStage(), state.activeModuleIndex));
      } else if (fallbackResourceId && fallbackResourceId !== (moduleResourceFor(activeStage(), state.activeModuleIndex) || {}).id) {
        const target = moduleTargetForResource(fallbackResourceId);
        state.activeStageId = target.stageId;
        state.activeModuleIndex = target.moduleIndex;
        state.moduleMode = els.moduleFallback.dataset.moduleFallbackMode || target.mode;
      } else {
        state.moduleMode = els.moduleFallback.dataset.moduleFallbackMode || nextModuleMode(state.moduleMode);
      }
      state.quizChoice = "";
      state.quizChecked = false;
      state.sectionReview = null;
      state.practicalUse = false;
      renderStageDetail();
      renderModuleDetail();
      bindDynamicActions();
    };
  }
  document.querySelectorAll("[data-quiz-choice]").forEach((button) => {
    button.onclick = () => {
      state.quizChoice = button.dataset.quizChoice || "";
      if (state.quizChecked) state.quizChecked = false;
      renderModuleQuiz();
      bindDynamicActions();
    };
  });
  if (els.moduleNextStep) {
    els.moduleNextStep.onclick = () => {
      stopModulePlayback();
      state.quizChoice = "";
      state.quizChecked = false;
      state.sectionReview = null;
      state.practicalUse = false;
      markCurrentLearningStepComplete();
      renderModuleQuiz();
      setView("moduleQuizView");
      bindDynamicActions();
    };
  }
  if (els.moduleSkipStep) {
    els.moduleSkipStep.onclick = () => openNextModuleStep();
  }
  if (els.quizCheck) {
    els.quizCheck.onclick = () => {
      if (state.sectionPicker) {
        const firstContent = state.sectionPicker.modules[0];
        if (!firstContent) return;
        state.activeModuleIndex = Number(firstContent.moduleIndex) || 0;
        const firstResource = moduleResourceFor(activeStage(), state.activeModuleIndex);
        state.moduleMode = nodeModeForResource(activeStage(), state.sectionPicker, firstResource);
        state.sectionPicker = null;
        state.sectionReview = null;
        state.practicalUse = false;
        state.quizChoice = "";
        state.quizChecked = false;
        renderModuleDetail();
        setView("moduleDetailView");
        bindDynamicActions();
        return;
      }
      if (!state.quizChoice) return;
      const quiz = currentLearningQuiz();
      if (state.quizChecked) {
        if (learningQuizOutcome(quiz) === "incorrect") {
          state.quizChecked = false;
          state.quizChoice = "";
          renderModuleQuiz();
          bindDynamicActions();
          if (window.matchMedia("(max-width: 760px)").matches) els.quizOptions.scrollIntoView({block: "center", behavior: "smooth"});
          return;
        }
        if (state.sectionReview || state.practicalUse) {
          state.sectionReview = null;
          state.practicalUse = false;
          renderStageDetail();
          setView("stageDetailView");
          bindDynamicActions();
          return;
        }
        const info = activeSectionPieceInfo(activeStage(), state.activeModuleIndex);
        const nextPiece = info.group && info.group.modules[info.pieceIndex + 1];
        if (nextPiece) {
          state.activeModuleIndex = Number(nextPiece.moduleIndex) || 0;
          const nextResource = moduleResourceFor(activeStage(), state.activeModuleIndex);
          state.moduleMode = nodeModeForResource(activeStage(), info.group, nextResource);
          state.selectedSectionIndex = info.groupIndex;
          state.selectedPathNode = pathNodeKey("content", activeStage(), info.groupIndex);
          state.quizChoice = "";
          state.quizChecked = false;
          renderModuleDetail();
          setView("moduleDetailView");
          bindDynamicActions();
          return;
        }
        state.practicalUse = true;
        state.selectedSectionIndex = info.groupIndex;
        state.selectedPathNode = pathNodeKey("practice", activeStage(), info.groupIndex);
        state.quizChoice = "";
        state.quizChecked = false;
        renderModuleQuiz();
        setView("moduleQuizView");
        bindDynamicActions();
        return;
      }
      state.quizChecked = true;
      if ((state.sectionReview || state.practicalUse) && learningQuizOutcome(quiz) !== "incorrect") markCurrentLearningStepComplete();
      renderModuleQuiz();
      bindDynamicActions();
      if (window.matchMedia("(max-width: 760px)").matches) els.quizFeedback.scrollIntoView({block: "center", behavior: "smooth"});
    };
  }
  if (els.moduleSaveNotes) {
    els.moduleSaveNotes.onclick = () => {
      const saved = saveModuleNote(activeStage(), state.activeModuleIndex, els.moduleNotes.value);
      els.moduleNoteStatus.textContent = saved ? t("module.notesSaved") : t("module.notesReady");
    };
  }
  document.querySelectorAll("[data-topic]").forEach((button) => {
    button.onclick = () => {
      if (els.librarySearch) els.librarySearch.value = button.dataset.topic;
      renderLibrary();
    };
  });
}

function updateShelfArrowState(frame) {
  const rail = frame && frame.querySelector(".weekly-media-shelf, .discovery-row");
  if (!rail) return;
  const maxScroll = rail.scrollWidth - rail.clientWidth;
  const hasOverflow = maxScroll > 8;
  frame.classList.toggle("is-scrollable", hasOverflow);
  frame.classList.toggle("has-left", hasOverflow && rail.scrollLeft > 6);
  frame.classList.toggle("has-right", hasOverflow && rail.scrollLeft < maxScroll - 6);
}

function updateAllShelfArrowStates() {
  document.querySelectorAll(".shelf-scroll-frame").forEach(updateShelfArrowState);
}

function enhanceDesktopShelves() {
  document.querySelectorAll(".weekly-media-shelf, .discovery-row").forEach((rail) => {
    if (rail.closest(".shelf-scroll-frame")) return;
    const frame = document.createElement("div");
    frame.className = "shelf-scroll-frame";
    rail.parentElement.insertBefore(frame, rail);
    frame.appendChild(rail);
    frame.insertAdjacentHTML("beforeend", `
      <button class="shelf-scroll-arrow prev" type="button" data-shelf-scroll="-1" aria-label="Previous shelf items">‹</button>
      <button class="shelf-scroll-arrow next" type="button" data-shelf-scroll="1" aria-label="Next shelf items">›</button>
    `);
    let pendingUpdate = false;
    rail.addEventListener("scroll", () => {
      if (pendingUpdate) return;
      pendingUpdate = true;
      requestAnimationFrame(() => {
        pendingUpdate = false;
        updateShelfArrowState(frame);
      });
    }, { passive: true });
    updateShelfArrowState(frame);
  });
}

function handleShelfArrowClick(event) {
  const button = event.target.closest("[data-shelf-scroll]");
  if (!button) return;
  const frame = button.closest(".shelf-scroll-frame");
  const rail = frame && frame.querySelector(".weekly-media-shelf, .discovery-row");
  if (!rail) return;
  event.preventDefault();
  const direction = Number(button.dataset.shelfScroll) || 1;
  const distance = Math.max(rail.clientWidth * 0.78, 320);
  rail.scrollBy({ left: direction * distance, behavior: "smooth" });
  window.setTimeout(() => updateShelfArrowState(frame), 260);
}

function activateHomeTarget(element) {
  if (!element) return false;
  const discoverTarget = element.dataset.discoverOpen;
  if (discoverTarget) {
    setDiscoveryResource(discoverTarget);
    return true;
  }
  const choiceTarget = element.dataset.gatewayChoice;
  if (choiceTarget) {
    handleGatewayChoice(choiceTarget);
    return true;
  }
  let targetView = element.dataset.navJump;
  if (!targetView) return false;
  if (element.dataset.linkedResource) {
    setActiveResource(element.dataset.linkedResource, targetView === "stageDetailView" ? "stageDetailView" : targetView);
    return true;
  }
  if (targetView === "pathSelectView") {
    openDefaultJourneyPath();
    return true;
  }
  if (state.sectionPicker && (targetView === "moduleDetailView" || targetView === "stageDetailView")) {
    state.sectionPicker = null;
    targetView = "stageDetailView";
  }
  if (targetView === "gatewayView") {
    setGatewayContentMode("discover");
    setGatewayNavActive("discover");
  }
  setView(targetView);
  return true;
}

function handleHomeHeroActivation(event) {
  if (event.defaultPrevented || gatewayHeroSwipe.suppressClick) return;
  const now = Date.now();
  if (now - gatewayHeroSwipe.lastActivationAt < 700) {
    event.preventDefault();
    event.stopPropagation();
    return;
  }
  if (event.target.closest("[data-hero-dot]")) return;
  const hero = event.target.closest(".home-hero");
  if (!hero || state.activeView !== "gatewayView") return;
  const slide = event.target.closest(".home-hero-slide[data-gateway-hero-slide]")
    || hero.querySelector(".home-hero-slide.active[data-gateway-hero-slide]");
  if (!slide || !slide.classList.contains("active")) return;
  if (activateHomeTarget(slide)) {
    gatewayHeroSwipe.lastActivationAt = now;
    stopGatewayHeroAutoplay();
    event.preventDefault();
    event.stopPropagation();
  }
}

function wireStaticActions() {
  window.addEventListener("scroll", () => {
    scheduleStickyStageBannerUpdate();
    scheduleGatewayNavScrollState();
  }, { passive: true });
  window.addEventListener("resize", () => {
    resetJourneyBannerCache();
    scheduleDuoPathCurveUpdate();
    scheduleStickyStageBannerUpdate();
    updateGatewayNavScrollState();
    updateAllShelfArrowStates();
  });
  window.addEventListener("popstate", () => restoreAppRoute());
  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-detail-back]")) handleGatewayNav(state.gatewayContentMode === "listen" ? "listen" : "watch");
    if (event.target.closest(".feed-bell")) toast(state.language === "nl" ? "Dit is een voorbeeldfeed. Er zijn geen meldingen." : "This is a preview feed. There are no notifications.");
  });
  const hero = document.querySelector(".home-hero");
  hero?.addEventListener("mouseenter", stopGatewayHeroAutoplay);
  hero?.addEventListener("focusin", stopGatewayHeroAutoplay);
  hero?.addEventListener("mouseleave", scheduleGatewayHeroAutoplay);
  hero?.addEventListener("focusout", () => requestAnimationFrame(scheduleGatewayHeroAutoplay));
  document.addEventListener("click", handleJourneyOutsideClick);
  document.addEventListener("pointerdown", handleJourneyOutsideClick, { capture: true });
  document.addEventListener("click", handleJourneyShareAction, { capture: true });
  document.addEventListener("click", handleLibraryAccessAction);
  document.addEventListener("click", handleShelfArrowClick);
  document.addEventListener("click", handleHomeHeroActivation, { capture: true });
  enhanceDesktopShelves();
  document.querySelectorAll(".nav-btn").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.nav));
  });
  document.querySelectorAll("[data-gateway-nav]").forEach((button) => {
    button.addEventListener("click", () => handleGatewayNav(button.dataset.gatewayNav));
  });
  document.querySelectorAll("[data-hero-dot]").forEach((button) => {
    button.addEventListener("click", () => setGatewayHero(Number(button.dataset.heroDot) || 0, { scrollToHeroTop: true }));
  });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopGatewayHeroAutoplay();
    else scheduleGatewayHeroAutoplay();
  });
  wireGatewayHeroSwipe();
	  els.langButtons.forEach((button) => {
	    button.addEventListener("click", () => applyLanguage(button.dataset.lang, true));
	  });
	  if (els.adminLogin) {
	    els.adminLogin.addEventListener("click", handleAdminLogin);
	  }
	  if (els.adminPassword) {
	    els.adminPassword.addEventListener("keydown", (event) => {
	      if (event.key === "Enter") handleAdminLogin();
	    });
	  }
	  if (els.adminLogout) {
	    els.adminLogout.addEventListener("click", handleAdminLogout);
	  }
	  if (els.feedPostButton) {
	    els.feedPostButton.addEventListener("click", handleFeedSubmit);
	  }
	  if (els.feedComposer) {
	    els.feedComposer.addEventListener("keydown", (event) => {
	      if ((event.metaKey || event.ctrlKey) && event.key === "Enter") handleFeedSubmit();
	    });
	  }
	  if (els.feedPostList) {
	    els.feedPostList.addEventListener("click", handleFeedAction);
	  }
	  document.querySelectorAll("[data-popular-start]").forEach((button) => {
	    button.addEventListener("click", () => handlePopularStart(button.dataset.popularStart));
	  });
  document.querySelectorAll("[data-popular-scroll]").forEach((button) => {
    button.addEventListener("click", () => {
      const direction = Number(button.dataset.popularScroll) || 1;
      if (els.popularRail) els.popularRail.scrollBy({ left: direction * 260, behavior: "smooth" });
    });
  });
  const gatewayStartButton = document.getElementById("gatewayStart");
  if (gatewayStartButton) {
    gatewayStartButton.addEventListener("click", () => {
      openOnboarding();
    });
  }
  els.onboardingBack.addEventListener("click", () => setView("gatewayView"));
  els.onboardingContent.addEventListener("click", (event) => {
    const stageButton = event.target.closest("[data-onboarding-stage]");
    if (stageButton) {
      applyOnboardingStageChoice(stageButton.dataset.onboardingStage || "exploreJesus");
      return;
    }
    const modeButton = event.target.closest("[data-onboarding-mode]");
    if (modeButton) {
      state.onboardingStartMode = modeButton.dataset.onboardingMode || "find";
      renderOnboarding();
    }
  });
  els.onboardingContinue.addEventListener("click", () => {
    finishOnboarding();
  });
  if (els.guidebookBack) {
    els.guidebookBack.addEventListener("click", closeGuidebook);
  }
  if (els.guidebookOverlay) {
    els.guidebookOverlay.addEventListener("click", (event) => {
      if (event.target === els.guidebookOverlay) closeGuidebook();
    });
  }
  [els.gatewayQuestion, els.askInput].forEach((input) => {
    if (!input) return;
    input.addEventListener("focus", () => {
      if (!cleanQuestionInput(input.value)) input.value = "";
    });
  });
  document.getElementById("gatewayAsk").addEventListener("click", (event) => {
    event.stopPropagation();
    openQuestionGuide(els.gatewayQuestion.value, els.gatewayQuestion);
  });
  document.querySelector("[data-action='play-daily']").addEventListener("click", () => setDiscoveryResource(activeResource().id));
  document.getElementById("askButton").addEventListener("click", (event) => {
    event.stopPropagation();
    openQuestionGuide(els.askInput.value, els.askInput);
  });
  document.querySelectorAll("[data-question]").forEach((button) => {
    button.addEventListener("click", () => {
      els.askInput.value = button.dataset.question;
      state.lastQuestion = button.dataset.question;
      renderAsk();
      bindDynamicActions();
    });
  });
  if (els.librarySearch) {
    els.librarySearch.addEventListener("input", renderLibrary);
  }
  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.libraryFilter = button.dataset.filter;
      document.querySelectorAll("[data-filter]").forEach((filterButton) => filterButton.classList.toggle("active", filterButton === button));
      renderLibrary();
    });
  });
  document.getElementById("followSpeaker").addEventListener("click", () => toast("Speaker followed"));
  document.querySelector("[data-action='share-speaker']").addEventListener("click", () => {
    setView("gatewayView");
    toast("Speaker share ready");
  });
  document.getElementById("copyShare").addEventListener("click", () => toast("Smart link copied"));
  document.getElementById("inviteFriend").addEventListener("click", () => toast("Invite ready"));
}

function handleLibraryAccessAction(event) {
  const shareButton = event.target.closest("[data-share]");
  if (shareButton) {
    event.preventDefault();
    const resource = resources.find((item) => item.id === shareButton.dataset.share);
    shareResource(resource);
    return;
  }
  const unlockButton = event.target.closest("[data-seed-unlock]");
  if (unlockButton) {
    event.preventDefault();
    const resource = resources.find((item) => item.id === unlockButton.dataset.seedUnlock);
    if (!resource) return;
    if (unlockSeedResource(resource)) {
      toast(`${resource.title} unlocked.`);
    } else {
      toast(`Open Journey and share a lesson to earn ${Math.max(0, resourceSeedCost(resource) - state.seeds)} more Seeds.`);
    }
    return;
  }
  const partnerButton = event.target.closest("[data-action='partner-access']");
  if (partnerButton) {
    event.preventDefault();
    activatePrototypePartnerAccess();
  }
}

function toast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  window.clearTimeout(toast.timer);
  toast.timer = window.setTimeout(() => els.toast.classList.remove("show"), 1300);
}

async function ensureFreshAppVersion() {
  try {
    const storedVersion = window.localStorage.getItem(APP_RELEASE_STORAGE_KEY);
    if (storedVersion === APP_RELEASE_VERSION) return;
    window.localStorage.setItem(APP_RELEASE_STORAGE_KEY, APP_RELEASE_VERSION);
    if (window.location.protocol === "file:") return;
    const refreshSessionKey = `oneinhim-auto-refresh-${APP_RELEASE_VERSION}`;
    if (window.sessionStorage.getItem(refreshSessionKey)) return;
    window.sessionStorage.setItem(refreshSessionKey, "1");
    if ("serviceWorker" in navigator) {
      const registrations = await navigator.serviceWorker.getRegistrations();
      const appScope = new URL("./", window.location.href).href;
      await Promise.allSettled(registrations.filter(registration => registration.scope === appScope).map(registration => registration.unregister()));
    }
    if ("caches" in window) {
      const keys = await caches.keys();
      await Promise.allSettled(keys.filter((key) => key.startsWith("oneinhim-")).map((key) => caches.delete(key)));
    }
    const freshUrl = new URL(window.location.href);
    freshUrl.searchParams.set("v", APP_RELEASE_VERSION);
    freshUrl.searchParams.set("refresh", String(Date.now()));
    window.location.replace(freshUrl.toString());
    await new Promise(() => {});
  } catch (error) {
    console.warn("App cache refresh skipped.", error);
  }
}

function registerAppInstallWorker() {
  if (!("serviceWorker" in navigator) || window.location.protocol === "file:") return;
  const workerRefreshKey = `oneinhim-sw-refresh-v${APP_RELEASE_VERSION}`;
  let refreshingWorker = false;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (refreshingWorker || sessionStorage.getItem(workerRefreshKey)) return;
    refreshingWorker = true;
    sessionStorage.setItem(workerRefreshKey, "1");
    window.location.reload();
  });
  navigator.serviceWorker.register(`oneinhim_service_worker.js?v=${APP_RELEASE_VERSION}`, { updateViaCache: "none" }).then((registration) => {
    const activateWaitingWorker = () => {
      if (registration.waiting) registration.waiting.postMessage({ type: "SKIP_WAITING" });
    };
    activateWaitingWorker();
    registration.addEventListener("updatefound", () => {
      const nextWorker = registration.installing;
      if (!nextWorker) return;
      nextWorker.addEventListener("statechange", () => {
        if (nextWorker.state === "installed" && navigator.serviceWorker.controller) {
          nextWorker.postMessage({ type: "SKIP_WAITING" });
        }
      });
    });
    registration.update().catch(() => {});
  }).catch(() => {
    // The app still works in the browser if install support is unavailable.
  });
}

async function boot() {
  await ensureFreshAppVersion();
  registerAppInstallWorker();
  await loadSchema();
  await loadContentPackages();
  loadLearningProgress();
  loadFeedState();
  loadLibraryAccessState();
  loadOnboardingStageChoice();
  wireStaticActions();
  applyLanguage(savedLanguage());
	  renderAll();
	  renderAsk();
	  renderOnboarding();
	  await renderAdminAccount();
	  renderLibrary();
	  bindDynamicActions();
	  if (!state.userNavigatedDuringBoot) {
	    if (!restoreAppRoute()) setView("gatewayView", { initial: true });
	  }
	  document.documentElement.classList.remove("app-booting");
	  state.bootComplete = true;
  recordAppRoute(true);
  await window.OIHLearnerAccounts?.init();
	}


const LEARNING_PROGRESS_KEY = "oneinhim.learning.progress.v1";
const PROGRESS_FIELDS = ["completed", "completedPieces", "completedPracticals", "completedReviews"];
function loadLearningProgress() {
  const saved = readLocalJson(window.OIHLearnerAccounts?.key() || LEARNING_PROGRESS_KEY, {});
  for (const key of PROGRESS_FIELDS) state[key] = new Set(Array.isArray(saved?.[key]) ? saved[key].filter(value => typeof value === "string") : []);
}
function saveLearningProgress() {
  window.OIHLearnerAccounts?.scheduleSync();
  window.OIHLearnerAccounts?.promptSave();
  const saved = Object.fromEntries(PROGRESS_FIELDS.map(key => [key, [...state[key]]]));
  if (!writeLocalJson(window.OIHLearnerAccounts?.key() || LEARNING_PROGRESS_KEY, saved)) toast(state.language === "nl" ? "Voortgang blijft alleen deze sessie bewaard." : "Progress is kept for this session only; device storage is unavailable.");
}
function renderLearnerAccount() {
  window.OIHLearnerAccounts?.render();
  const continueButton = document.querySelector('#accountView [data-i18n="account.continue"]');
  if (continueButton) continueButton.textContent = state.completedPieces.size ? t('account.continue') : (state.language === 'nl' ? 'Begin je reis' : 'Start your journey');
  const summary = document.getElementById("learnerProgressSummary");
  if (summary) summary.textContent = state.language === "nl" ? `${state.completedPieces.size} lessen voltooid${window.OIHLearnerAccounts?.user() ? " in je account" : " op dit apparaat"}` : `${state.completedPieces.size} ${state.completedPieces.size === 1 ? "lesson" : "lessons"} completed${window.OIHLearnerAccounts?.user() ? " in your account" : " on this device"}`;
}
function recordAppRoute(replace = false) {
  const route = { view: state.activeView, mode: state.gatewayContentMode, stage: state.activeStageId, module: state.activeModuleIndex, resource: state.activeResourceId, shelf: state.activeShelfIndex, browse: state.activeBrowseShelfKey, medium: state.moduleMode };
  const params = new URLSearchParams(route);
  const url = new URL(window.location.href);
  url.hash = params.toString();
  if (!replace && url.href === window.location.href) return;
  try { history[replace ? "replaceState" : "pushState"](route, "", url); } catch (_) { /* File previews still work without history. */ }
}
function restoreAppRoute() {
  const raw = window.location.hash.slice(1);
  if (!raw) { if (state.bootComplete) handleGatewayNav("discover"); return false; }
  const params = new URLSearchParams(raw);
  const legacyId = params.has("view") ? "" : (() => { try { return decodeURIComponent(raw); } catch (_) { return ""; } })();
  const shared = resources.find(item => item.id === legacyId);
  if (shared) {
    const wasComplete = state.bootComplete;
    state.bootComplete = false;
    try { setDiscoveryResource(shared.id); } finally { state.bootComplete = wasComplete; }
    return true;
  }
  const view = params.get("view");
  if (!["gatewayView", "discoveryDetailView", "stageDetailView", "moduleDetailView", "moduleQuizView", "accountView", "feedView", "libraryView", "shelfDetailView", "onboardingView"].includes(view)) return false;
  state.gatewayContentMode = normalizeGatewayContentMode(params.get("mode"));
  state.activeStageId = pathOptions.some(stage => stage.choice === params.get("stage")) ? params.get("stage") : "exploreJesus";
  state.activeModuleIndex = Math.max(0, Number(params.get("module")) || 0);
  if (["watch", "read", "listen"].includes(params.get("medium"))) state.moduleMode = params.get("medium");
  const resource = resources.find(item => item.id === params.get("resource"));
  if (resource) state.activeResourceId = resource.id;
  state.activeShelfIndex = Math.max(0, Number(params.get("shelf")) || 0);
  state.activeBrowseShelfKey = params.get("browse") || "";
  const wasComplete = state.bootComplete;
  state.bootComplete = false;
  try {
    setGatewayContentMode(state.gatewayContentMode);
    if (view === "shelfDetailView") {
      if (state.activeBrowseShelfKey) openBrowseShelf(state.activeBrowseShelfKey);
      else openShelfDetail(state.activeShelfIndex);
    } else if (view === "discoveryDetailView") setDiscoveryResource(state.activeResourceId);
    else {
      if (view === "stageDetailView") renderStageDetail();
      if (view === "moduleDetailView" || view === "moduleQuizView") renderModuleDetail();
      setView(view === "moduleQuizView" ? "moduleDetailView" : view, { initial: !wasComplete, history: false });
    }
    bindDynamicActions();
  } finally { state.bootComplete = wasComplete; }
  return true;
}
Object.assign(i18n.en, {
  "journey.savedTitle": "Your saved progress", "journey.deviceCopy": "Completed lessons and personal notes are saved in this browser. Open Account to see your progress and account options.", "journey.viewProgress": "View my progress",
  "homeNav.journey": "Journey", "account.learnerTitle": "Your journey", "account.learnerCopy": "Learn at your own pace. Completed lessons and notes are saved in this browser on this device.",
  "account.continue": "Continue your journey", "account.deviceNote": "Guest progress and personal notes are saved in this browser. Clearing browser data removes them.",
  "account.teamOnly": "Team sign-in", "feed.preview": "Preview feed · Sample posts are shown below. Your thoughts stay on this device and are not published to other people.",
  "feed.shareButton": "Save thought", "library.returnFree": "Explore the free journey", "library.accessPreview": "Partner sign-in is not available in this prototype. You can continue with the free journey.", "detail.back": "Back to browse"
});
Object.assign(i18n.nl, {
  "journey.savedTitle": "Je opgeslagen voortgang", "journey.deviceCopy": "Voltooide lessen en persoonlijke notities worden in deze browser bewaard. Open Account voor je voortgang en accountopties.", "journey.viewProgress": "Bekijk mijn voortgang",
  "homeNav.journey": "Reis", "account.learnerTitle": "Jouw reis", "account.learnerCopy": "Leer in je eigen tempo. Voltooide lessen en notities worden in deze browser op dit apparaat bewaard.",
  "account.continue": "Ga verder met je reis", "account.deviceNote": "Gastvoortgang en persoonlijke notities blijven in deze browser. Ze verdwijnen als je browsergegevens wist.",
  "account.teamOnly": "Inloggen voor het team", "feed.preview": "Voorbeeldfeed · Hieronder staan voorbeeldberichten. Je gedachten blijven op dit apparaat en worden niet met anderen gedeeld.",
  "feed.shareButton": "Bewaar gedachte", "library.returnFree": "Ontdek de gratis reis", "library.accessPreview": "Inloggen als partner is nog niet beschikbaar in dit prototype. Je kunt verder met de gratis reis.", "detail.back": "Terug naar overzicht"
});

boot();
