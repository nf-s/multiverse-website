import ExportedImage from "next-image-export-optimizer";
import Head from "next/head";
import { Fragment, useState } from "react";
import ContentWrapper from "../components/ContentWrapper";
import Layout from "../components/Layout";
import LineupDialog from "../components/LineupDialog";
import LineupIntroMdx from "../content/lineup-intro.mdx";

export interface Artist {
  "ARTIST NAME": string;
  "ARTWORK COMPLETED": string;
  BIO: string;
  FACEBOOK?: string;
  INSTAGRAM?: string;
  SOUNDCLOUD?: string;
  OTHER?: string;
}

const lineup: Record<string, Artist[]> = {
  "Second Release": [
    {
      "ARTIST NAME": "Paris",
      BIO: "Attaining global audiences with millions of streams across releases on This Never Happened (USA), Stil Vor Talent (DE) and Of Leisure (AU) and having toured Europe, UK, India, USA and Mexico numerous times, Australia's PARIS is one of the country's most prolific electronic artists in her lane. With multiple Triple J and Double J high rotation radio ads and Spotify covers in the last two years to DJ spots on Australia's most in-demand festivals including Pitch Music Festival, Beyond The Valley and Splendour In The Grass, PARIS has paved her path.\n\nShe has garnered enthusiasts within the industry from Maceo Plex and Lane 8 to Joseph Capriati and Oliver Koletzki, while also commanding attention from Mixmag, Sirius XM and BBC Radio 1 with official remixes for Grammy winners RÜFÜS DU SOL, plus Cassian and Nils Hoffmann.",
      "ARTWORK COMPLETED": "YES",
      FACEBOOK: "https://www.facebook.com/parismusicau",
      INSTAGRAM:
        "https://open.spotify.com/artist/7ejF235eYuh8PlQDLaJy0N?si=1S2I-CAVQNSq-1rmcqULjw",
      OTHER: "https://www.abc.net.au/triplejunearthed/artist/paris-au/",
    },
    {
      "ARTIST NAME": "Hypertone",
      BIO: "The Hypertone Project expresses deep forest grooves and mysterious soundscapes. The music is fast paced (148-152bpm) and has a strong emphasis on entrancing, rhythmic and psychedelic elements, crafted specifically for melting night-time vibes.",
      "ARTWORK COMPLETED": "YES",
      FACEBOOK: "https://www.facebook.com/Hypertonetunes/",
      INSTAGRAM: "",
      SOUNDCLOUD: "https://soundcloud.com/rustone_offical",
      OTHER: "",
    },
    {
      "ARTIST NAME": "Koshiro",
      BIO: 'Oscar started his musical journey in 2014 dabbling in the realms of digital music production. Only to later form Perspective in 2016, whereby continuing to pave the way for a new wave of sonic explorations. This project "Koshiro" was birthed in 2020 and has captivated listeners since. Born out of a labour of love, Koshiro has been striving to take listeners on a transformative journey with pulsating square basslines, hypnotic rhythms, and funky groovadelic acid leads.\n\nInspired by his love for Japanese culture, Koshiro embarked on a journey to create a unique and groundbreaking style of deep psychedelic trance that would push the boundaries of electronic music. With a desire to break new ground, Koshiro merges the melodic and atmospheric elements of Deep House with the driving energy and the psychedelic intricate textures of PsyTrance. Koshiro\'s commitment to pushing the boundaries of musical genres is evident in his ability to seamlessly blend contrasting elements.',
      "ARTWORK COMPLETED": "YES",
      FACEBOOK: "https://www.facebook.com/KoshiroPsy",
      INSTAGRAM: "",
      SOUNDCLOUD: "https://soundcloud.com/koshiropsy",
      OTHER: "",
    },
    {
      "ARTIST NAME": "Grug",
      BIO: "'Grug', is the solo bass project of Sam Knights, co-founder/director of 8Ball Audio alongside Duos and Bustaflux. The Grug project focuses on a variety of deep electronic bass music influences combining styles  such as halftime, drum and bass, deep dubstep and left field bass.\n\nSince 2010, Sam has been playing an array of bass music styles under an assortment of alias's. Since performing as Sobek across Australia, NZ and the UK over many years, Sam has been focused on pushing his personal boundaries and providing versatile bass under 'Grug'.",
      "ARTWORK COMPLETED": "YES",
      FACEBOOK: "https://www.facebook.com/grugmusic",
      INSTAGRAM: "https://www.instagram.com/grugmusic/",
      SOUNDCLOUD: "https://soundcloud.com/grugmusic#/",
    },
    {
      "ARTIST NAME": "Alterpath",
      BIO: "Alterpath is a duo made up of Sam Sanderson and Bai Sumeng based in Tasmania Australia. They've been making music for 12 years, originally creating dubstep and now branching out into house, garage, UK grime, trap and latin based production. Alterpath leave no stone unturned in exploring sonic aesthetics to build up their repertoire. Sam Sanderson started writing music in 2011 when he was 13. Inspired by the likes of Skrillex, Zomboy and Space Laces, he loved heavy dubstep and spent his first years learning sound design and music theory. Bai Sumeng joined the duo in 2020 when they bonded over their love for music and edm. Having played numerous festivals, bush doofs and headline shows, Alterpath are beginning to spread their sound all across Australia.",
      "ARTWORK COMPLETED": "YES",
      FACEBOOK: "",
      INSTAGRAM: "",
      SOUNDCLOUD: "https://on.soundcloud.com/LoDcnJ8HqAZWTBpV6",
      OTHER:
        "https://open.spotify.com/album/4qBFipawv4W9xnQpab4G8d?si=vlv-Asm9RRurq-VAPgah-g&nd=1&fbclid=IwY2xjawHmR8NleHRuA2FlbQIxMAABHbIA51u7zDxLmPItNc3m4V7POn2l7ijBc2oGQSOdZ2rx6SamylYWs1jYAw_aem_1W2zeNbsDHXZ4PItBG2_0Q&_branch_match_id=1404133728022736935&utm_medium=sharing&_branch_referrer=H4sIAAAAAAAAAw3LzQ6CIAAA4LfpmEk%2FtjbXMFe6zDK3Si8MDAoDdaBDPfTs9d2%2Fd9s2emNZuqlbzoap4NXHmrNjxGWMdwPZMlII%2FnRDk4G%2BxCaQ13UsaHDtINgLkoT9CUIvICFc2p0z%2Bn0kL2EbF3O5uDmXcwWEw0uvAPUhSc%2FPHKh%2BlWI5iOyu7TKDBmEqkX0HI42J9oNHvvh37wDQLJl8FWVUKV69EFG10VS5KWZY8R9%2FWxsftQAAAA%3D%3D",
    },
    {
      "ARTIST NAME": "Billy Bones",
      BIO: "",
      "ARTWORK COMPLETED": "YES",
      FACEBOOK: "",
      INSTAGRAM: "",
      SOUNDCLOUD: "",
      OTHER: "",
    },
    {
      "ARTIST NAME": "Finch",
      BIO: "Finch has been an active part of the Australian dance scene for over 15 years, actively DJing and promoting in the southern island of Tasmania. He has held several residencies, including lounge bars and nightclubs, and has played at events and festivals in Hobart and around Australia. Finch has had the flexibility and talent to support a long list of touring DJs, from the best in Australia (Kid Kenobi, Aston Shuffle, Yolanda Be Cool) to around the world (Roger Sanchez, Thomas Schumacher, Wolfgang Gartner, Fedde Le Grand, Patrick Topping and many more). Finch has incredible versatility and groove, with sounds ranging from underground techno and house, deep tech, to funk, soul & disco. \n\nIn 2016 he co-founded a renegade dance collective called Technobrats, with a focus on local talent, custom lighting, and unique locations. Now into its 8th year of operations, Technobrats have built an underground following for high-quality events, including Multiverse, a 4 day camping music festival held each January.",
      "ARTWORK COMPLETED": "YES",
      FACEBOOK: "",
      INSTAGRAM: "https://www.instagram.com/alterpathmusic/",
      SOUNDCLOUD: "https://soundcloud.com/finch",
      OTHER: "",
    },
    {
      "ARTIST NAME": "Fotti P",
      BIO: "Some music you hear and some music you feel. Fotti P's enthusiastic style draws you in with a hypnotising beat that will get you swaying from the heart and stomping your feet. His infectious sounds span the gamut of disco, house and techno with a strong dose of baseline.",
      "ARTWORK COMPLETED": "YES",
      FACEBOOK: "https://www.facebook.com/djfottip",
      INSTAGRAM: "",
      SOUNDCLOUD: "https://soundcloud.com/fottip",
      OTHER: "",
    },
    {
      "ARTIST NAME": "Guinplex",
      BIO: "Guinplex is a Forest project undertaken by Peter Kokavesis, a DJ and producer who enjoys high BPM music and loitering on the outskirts of the dancefloor.\n\nHaving played at local parties for a small while around Tasmania, Guinplex has cemented himself as a reputable night-psy act with his Forest sets best described as dark, ritualistic and purely psychedelic.\n\nGuinplex is currently 5 years into undertaking his own journey into production and has already started testing his original work on Tassie dancefloors.\n\nIf it's dark, driving and trance-inducing music you're looking for, Guinplex is not one to miss out on!",
      "ARTWORK COMPLETED": "YES",
      FACEBOOK: "",
      INSTAGRAM: "",
      SOUNDCLOUD: "https://www.soundcloud.com/guinplex",
      OTHER: "",
    },
    {
      "ARTIST NAME": "Gÿps & Spice",
      BIO: "Gÿps & Spice are a techno duo from lutruwita (Tasmania) who have been at the forefront of the underground music scene in lutruwita since 2013. Gÿps & Spice are the founders & residents of lutruwita's leading techno movement SPICYMUSIC, which has been running parties & raves since 2015, featuring International & local DJs and Producers. \n\nTheir style has been labeled as groovy & energetic, psychedelic & tribal. Their sets are best known to have a push and pull between hard & fast, sexy & trippy driven sounds, interwoven with tribal groove, a touch of 90s rave and hip-hop vocal influences.\nThe energy in their sets has a lasting, positive effect on others. \n\nAs a duo, they have been headliners at events such as Dark Mofo 2024 and In The Hanging Garden in Tasmania, and interstate at Goodbar & WeLove in Sydney. They perform regularly at club nights & festivals throughout lutruwita along with being invited to perform in other Australian cities for techno nights & festivals such as Babylon Festival in naarm (Melb), Junction Arts Festival, Great Escape Festival, Multiverse Festival, Synergy Festival, & Revel all in lutruwita (Tas).\n\nThey have played main support alongside some of the major techno artists across the globe, such as Setaoc Mass, Peter Van Hoesen, SPFDJ, Henning Baer, Amelie Lens, Charlotte de Witte, Anetha, Perc, Dasha Rush, Bart Skils, Farrago, Boris Of Berlin, Wehbba, Luigi Madonna, Enrico Sangiuliano, Secret Cinema, Arjun Vagale, Pig&Dan, & Mark Reeve among others.",
      "ARTWORK COMPLETED": "YES",
      FACEBOOK: "https://www.facebook.com/SPICYMUSICTAS",
      INSTAGRAM: "https://www.instagram.com/spicymusic_tas/",
      SOUNDCLOUD: "https://soundcloud.com/gypsydj",
      OTHER: "",
    },
    {
      "ARTIST NAME": "Kaedance",
      BIO: '"Art decorates space - music decorates time."\n\nCadence:  \n1: a modulation or inflection of the voice.  \n2: a sequence of notes or chords comprising the close of a musical phrase.\n\nWelcome to the Kaedence frequency - we hope you enjoy your stay! \n\nOn this episode, we will remain true to form, while simultaneously testing the limits of new shapes, flavours and textures.\n\nExpect something along the lines of a "chill, uplifting, melodic, mixed bag of goodies - lucky dip style!"',
      "ARTWORK COMPLETED": "YES",
      FACEBOOK: "",
      INSTAGRAM: "",
      SOUNDCLOUD: "https://on.soundcloud.com/K8vkQWwVBFep6nLi9",
      OTHER: "https://www.mixcloud.com/Kaedense",
    },
    {
      "ARTIST NAME": "Liminality",
      BIO: "Liminality is defined as the feeling of ambiguity and disorientation felt during the middle stage of a transition. \n\nIn the case of Hobart based Liminality, this describes the bittersweet feeling similar to nostalgia felt while flying, travelling or reflecting on the past and/or future. \n\nLiminality's genre bending music tries to recreate these powerful feelings with dream-like atmospheric breakdowns combined with fresh, complex drops ranging from dark and distorted (ft elements from Garage and dubstep) to tight, twitchy and melodic (ft elements from IDM and future bass) and even ethereal, harmonic rich and ambient (ft elements from Downtempo and Electronica). \n\nLiminality's influences include Jon Hopkins, Mr Bill, Bonobo, Koan Sound and Deadmau5.",
      "ARTWORK COMPLETED": "YES",
      FACEBOOK: "",
      INSTAGRAM: "https://www.instagram.com/liminality.music/",
      SOUNDCLOUD: "",
      OTHER: "",
    },
    {
      "ARTIST NAME": "Morphlink",
      BIO: '"To morph into something that my mind set to.."  \n\n"To link earthlings through music.."  \n\nSelf-taught mixer who loves to share her journey of experiencing melody, waves, and rhythm. Delivering a smorgasbord of melody, percussion, and beats from the various range of genres. \n\nCaptivating the hearts and minds, she leads them on a journey to experience darkness, light, and everything in between. Surrounding this spectrum is a silver lining of nostalgic favourites and all-time classics.\n\nShe is on a mission to heal all beings through the power of frequencies in the form of beats that can tingle your cells.',
      "ARTWORK COMPLETED": "YES",
      FACEBOOK: "",
      INSTAGRAM: "",
      SOUNDCLOUD: "https://soundcloud.com/morphlink",
      OTHER: "",
    },
    {
      "ARTIST NAME": "Rosemary",
      BIO: "‘Rosemary’ is a Tasmanian based artist and ecologist, inspired by numerous forms of expression and challenge…or potentially just too distracted to focus on one thing.\n\nWhen not at his day job, counting fish, you’ll find him mixing bass-laden sets at bush doofs, both within Tassie and farther afield on the big rock. With an ear for many sounds, his sets encompass a range of genres and pace, he likes to get you moving at peak-time, but also loves to ease you back down to earth and send you off to bed. As a singer-songwriter, he produces melancholic folk music. One thing you can be sure of for Multiverse 2025, Rosemary will deliver variety that will get grinning and moving.",
      "ARTWORK COMPLETED": "YES",
      FACEBOOK: "",
      INSTAGRAM: "",
      SOUNDCLOUD: "https://soundcloud.com/mattyrose2",
      OTHER: "",
    },
    {
      "ARTIST NAME": "OOC",
      BIO: "A Dynamic DJ Duo with a flair for the funky and a love of the bass. Expect glitchy electronic goodness from bass house to drum and bass, so fat it would make your mama proud. \n\nHaving performed over the last 12 years in local night clubs and festival main stages, including Party In The Paddock, Great Escape, Falls Festival Marion Bay, Highfields Fest and Mona Foma; OOC has perfected the art of dance-floor manipulation. \n\nOOC released their debut single, ‘Back On The Bus (feat. Hugo Bladel) back in 2019 and has since been homing in on their sound design and signature sounds, preparing to share a new era of drum and bass with the world. Bringing live musical attributes and world class turntablism to their performance forefront, OOC has set their wheels in perpetual motion.",
      "ARTWORK COMPLETED": "YES",
      FACEBOOK: "https://www.facebook.com/Outofcontextofficial",
      INSTAGRAM: "https://www.instagram.com/oocmusic",
      SOUNDCLOUD: "",
      OTHER: "",
    },
    {
      "ARTIST NAME": "Sam Price",
      BIO: "Influenced by the sounds from Berlin to Belgrade, Sam Price's sound reflects a deep respect for the origins of techno, while constantly pushing boundaries and exploring new dimensions. \n\nIn 2015, Sam Price co-founded Technobrats, a collective that quickly became synonymous with cutting-edge sound and production, with an underground ethos. ",
      "ARTWORK COMPLETED": "YES",
      FACEBOOK: "",
      INSTAGRAM: "",
      SOUNDCLOUD: "",
      OTHER: "",
    },
    {
      "ARTIST NAME": "Scrubrat",
      BIO: "Scrubrat is a step in the direction toward the deeper realms of Drum&Bass, Garage and Deep Dubstep. Every sound is a raw but tastefully creative journey, whether it be original productions or DJ sets. Minimal percussion & simple yet effective basslines are the bread and butter to his sound, as well as being heavily influenced by organic elements & instruments. Sneaking and scampering out of the cracks by night, the rat will compile a journey through the realms of time and bass for all deep heads to enjoy.",
      "ARTWORK COMPLETED": "YES",
      FACEBOOK: "",
      INSTAGRAM: "",
      SOUNDCLOUD: "https://soundcloud.com/scrubrataus",
      OTHER: "",
    },
    {
      "ARTIST NAME": "Smoley",
      BIO: "Smoley is the alias of Hobart-based DJ, Emma Smolej. She has quickly established herself as a prominent figure in Hobart's club and bar scene, while also gracing the stages of outdoor parties and festivals including Party in the Paddock, Synergy, Multiverse and Re:Pulse. Known for the seamless flow of her sets, Smoley takes listeners on a captivating journey that keeps them engaged and satisfied, yet always wanting more. Moving seamlessly through the melodic, electronic sounds of House, Techno and Bass Music, she delivers a tightly woven listening experience for anyone to dance to. As Smoley continues to extend her mark, beyond the shores of Tasmania's electronic music scene, her reputation for providing unforgettable sets only grows stronger.",
      "ARTWORK COMPLETED": "YES",
      FACEBOOK: "https://www.facebook.com/profile.php?id=100064275330390",
      INSTAGRAM: "",
      SOUNDCLOUD: "https://soundcloud.com/djsmoley",
      OTHER: "",
    },
    {
      "ARTIST NAME": "Vøid",
      BIO: "VØID is the atmospheric bass project of Cal Baker. Blending emotive soundscapes with complex bass design and technical drum breaks, a VØID set seeks to present the work of those pushing the boundaries of electronic music production in journeys stretching across the spectrum of human emotion.",
      "ARTWORK COMPLETED": "YES",
      FACEBOOK: "https://www.facebook.com/VOIDmusicofficial",
      INSTAGRAM: "https://www.instagram.com/void__bass/",
      SOUNDCLOUD: "https://on.soundcloud.com/TF4jE",
      OTHER: "",
    },
    {
      "ARTIST NAME": "Wud",
      BIO: "wud is the alias of lutruwita/Tassie born DJ, Liam Wood.\n\nWith over 7 years playing around the state, Liam has had the chance to play many sets across many styles and genres. He has a strong love for numerous types of electronic music across, and being a man of the north, Techno holds a very special place in his heart.\n\nHaving met many lifelong friends and spending countless (un)forgettable nights on dancefloors over the years, creating similar atmospheres for other punters is what he’s all about.\n\nExpect groovy, dark and bouncy tunes from your friendly neighbourhood wud.",
      "ARTWORK COMPLETED": "YES",
      FACEBOOK: "",
      INSTAGRAM: "",
      SOUNDCLOUD: "https://soundcloud.com/wud_33",
      OTHER: "",
    },
  ],
  "First Release": [
    {
      "ARTIST NAME": "Bayawaka",
      BIO: "Bayawaka is a chameleon, flawlessly adapting his colourful output to space and time. A Label DJ project a part of the Merkaba Music and Shanti Planti families, Bayawaka continues to develop a diverse library of psychedelic downtempo, bass music, breaks and electronica.\n\nA true vagabond of the festival circuit, Bayawaka consistently performs on the revered stages of Boom, Ozora, Mo:dem, Fusion, Rainbow Serpent, Origin and Tribal Gathering, along the way featuring at Universo Paralello, Glastonbury, Esoteric, Noisily, Hadra, Earth Frequency and Wild Horses. \n\nWith his ability to hold the floor from main stages to chillout zones alike, it's no wonder that the  world's biggest alternative music events have given Bayawaka their full support for the past decade.",
      "ARTWORK COMPLETED": "YES",
      FACEBOOK: "https://www.facebook.com/Bayawaka/ ",
      INSTAGRAM: "https://www.instagram.com/bayawaka.golanski/ ",
      SOUNDCLOUD: "https://soundcloud.com/djbayawaka ",
    },

    {
      "ARTIST NAME": "Terrafractyl",
      BIO: "Felix Greenlees, aka Terrafractyl, was raised on a diet of classical music, opera and jazz. Trained as a bassoon player, Felix worked for the Tasmanian and Melbourne Symphony Orchestras as well as freelancing for Opera Australia between 1999-2004.\n\nAt some point in the late 90s Felix had found his way to an outdoor goa trance party in Tasmania, was completely captivated by the psychedelic music he heard there and couldn't resist trying his hand at electronic music production. Since then, he has been weaving the threads of psytrance, jazz and classical music together, incorporating his love/addiction of piano and a new found addiction for building analog synthesizers. This unique melding of styles quickly led him to become one of Australia's most prominent electronic music performers.\n\nIn 2013 Felix established his own record label Kinematic Records, to help further his vision for psychedelic music, and for promoting and releasing music from many innovative and unique psychedelic musicians from Australia and around the world.",
      "ARTWORK COMPLETED": "YES",
      FACEBOOK: "https://www.facebook.com/Terrafractyl ",
      INSTAGRAM: "",
      SOUNDCLOUD: "https://soundcloud.com/terrafractyl",
      OTHER: "",
    },

    {
      "ARTIST NAME": "0dB",
      BIO: "Emerging from Cape Town and now rooted in the Central Coast of Australia, 0dB stands as a formidable DJ and producer signed to the reputable Furthur Progressions Records crew.\n\nHis journey through psytrance has seen him play his immersive soundscapes & rhythms across South Africa, England, Wales, Portugal, Indonesia, Thailand, and the unique terrains of Australia and New Zealand.\n\nHe has a growing portfolio of releases, seen in the company of esteemed figures such as Ninesense, Radikal Moodz, Oxyflux, Shadow Shaman, Dribble, Unexpected, Ace Ventura, Antix, Burn in Noise, Avalon, and more.\n\n0dB's unique sound palette is laden with groovy, nocturnal, and psychedelically soaked frequencies that are sonically charged with explosive energy. He looks forward to gracing our stage and taking us on a transcendent journey.\n",
      "ARTWORK COMPLETED": "YES",
      FACEBOOK: "https://www.facebook.com/0db.psy",
      INSTAGRAM: "",
      SOUNDCLOUD: "https://soundcloud.com/0_db",
      OTHER: "",
    },
    {
      "ARTIST NAME": "Renegade DJ",
      BIO: "Hails from Cape Town, lived in London for 6 years, now living in Australia. Signed to legendary TIP Records. Her sets are full power psychedelic fullon. Each set is a meticulously crafted journey that keeps the dance floor energised and entertained, and her track selection is without fail always spot on for the time of day, venue and crowd. Her enthusiasm behind the decks and passion for the music is captivating and she never fails to impress - securing an ever-expanding fan base originating in Cape Town, reaching all corners of the world.\n\nSince migrating from the dance floor to the decks in 2009, she has played countless gigs in South Africa, the UK, Portugal, France, Germany, Turkey, Israel, the US, Indonesia, Thailand, Japan, Panama and New Zealand.\n\nHer most memorable performances include:\n\n- Noisily Festival 2014, 2015, 2016 | UK\n- Boom Festival 2014 | Portugal (Main Stage)\n- Fusion Festival 2016 | Germany (Trance Floor)\n- Ozora Festival 2016 | Hungary (Main Stage)\n- The Experience Festival 2017, 2019 | Thailand\n- Sunshine Festival 2018 | Japan\n- Tribal Gathering 2019 | Panama (Lotus Stage)\n- Dimension Festival 2023, 2024 | New Zealand (Main Stage)\n- Lost in Paradise NYE 2023 | New Zealand",
      "ARTWORK COMPLETED": "YES",
      FACEBOOK: "https://www.facebook.com/RDJZero1",
      INSTAGRAM: "https://www.instagram.com/renegade_dj/ ",
      SOUNDCLOUD: "https://soundcloud.com/renegadedj ",
      OTHER: "",
    },
    {
      "ARTIST NAME": "Golanski",
      BIO: "Golanski holds the flow steady, delivering deep, dark and hypnotic performances of progressive techno and trance. Bearing the title of Label DJ for Zenon Records and Digital Structures, Golanski explores these label's immense catalogues and beyond.\n\nBorn in Tel Aviv, the nomadic sonic warrior is now based in Berlin, though constantly driven to travel and express himself to the dancefloors of the globe. The Golanski project has featured at Ozora, Mo:dem, Universo Paralello, Fusion, Tribal Gathering, Esoteric, Earth Frequency, Rabbits Eat Lettuce, Wild Horses, Bucht Der Traumer and closed the famed Hammahalle main room at Sisyphos Berlin.\n\nA multi-disciplinary creative, Golan has founded boundary-pushing event platforms, catalyzed compilation releases for hallowed labels (including Digital Structures) and taken to the studios with Captain Hook, Mad Zach, Dekel and Gumi.",
      "ARTWORK COMPLETED": "YES",
      FACEBOOK: "https://www.facebook.com/DJGolanski ",
      INSTAGRAM: "https://www.instagram.com/bayawaka.golanski/ ",
      SOUNDCLOUD: "https://soundcloud.com/golanskidj ",
    },
    {
      "ARTIST NAME": "Hypnagog",
      BIO: "Hypnagog is a musical project of Felix Fractal aka Terrafractyl and Mental Extensions.\n\nAfter years of writing Psychedelic dance music and experimenting with plenty of other sonic forms, Felix started to spend more time listening to downtempo, psychedelic breaks, IDM and the like. It was time to combine these styles with his own to create some kind of hybrid, beat driven, yet melodic sound. As the project has progressed, Felix has also been experimenting with a kind of jazzy progressive trance and has been working to combine these 2 styles into what could maybe be described as Psychedelic ProgStep. As always, his music is hard to describe and difficult to put into boxes and has been surprising and exhilarating audiences around the world for the past couple of years.\n\nHe has released two EP's on UP records , 'Dreaming in Pieces' (2009) and 'Gyroscopic Bebop'(2010) , and in 2012 another EP, 'Infinite Vibrations' on Adapted records. Most Recently, Felix released the debut Hypnagog album, 'Thematic Mathematics', on his own label Kinematic Records. This album represents the last 3 years of Felix's Hypnagogical experimentation, all wrapped up and woven into an intricate and very unique 80 minutes of sonic vibrations.",
      "ARTWORK COMPLETED": "YES",
      FACEBOOK: "https://www.facebook.com/Terrafractyl",
      INSTAGRAM: "",
      SOUNDCLOUD: "https://soundcloud.com/hypnagog",
      OTHER: "",
    },
    {
      "ARTIST NAME": "RVNKNG",
      BIO: "RVNKNG (FKA Milquebarth) navigates the cute, dark, and uncertain realms of underground music culture. His debut LP, I'll figure it out, released through RKS Records, reflects a fascination with hidden spaces and the anonymity they oJer. Influenced by artists like Toma Kami, Joey Beltram, DJ Nobu, Venetian Snares, and MCR-T, RVNKNG's DJ sets focus on unpredictability and a playful embrace of uncertainty",
      "ARTWORK COMPLETED": "YES",
      FACEBOOK: "",
      INSTAGRAM: "https://www.instagram.com/r_k_s_records/",
      SOUNDCLOUD: "https://soundcloud.com/ecb-mixtapes/rvnkng-speed-run",
      OTHER: "",
    },
    {
      "ARTIST NAME": "Stompsy",
      BIO: "StomPsy is the Psychedelic Trance Project of Sean Crole, a established DJ, producer & Co label boss of Tarkine Records based in Tasmania, Australia.\n\nFrom an early age his passion for live music was no secret, attending gigs and outdoor festivals was a frequent occurrence. He first discovered Psytrance at a small outdoor party where Ace Venture Played an unforgettable 3 hour set. He has always been intrigued and inspired by the music industry, and psytrance allowed him to share this passion with others.\n\nSince his move to Hobart in 2015, Stompsy has become a regular fixture in the Psychedelic scene playing at some of the biggest parties across Australia. StomPsys sets can be described as a hybrid blend of Forest, Night Full on and Dark Psy, which results in high energy, floor stomping night time vibes fit for any punter.\n\nHaving released on labels such as Tarkine Records, Sangoma Records and Project 1 music. StomPsy has plenty of original music to get you in the mood to party the night away.",
      "ARTWORK COMPLETED": "YES",
      FACEBOOK: "https://www.facebook.com/StomPsy",
      INSTAGRAM: "https://www.instagram.com/stompsy_aus/",
      SOUNDCLOUD: "https://soundcloud.com/stompsy",
      OTHER: "",
    },
    {
      "ARTIST NAME": "Allan Pillai",
      BIO: "Those across the Tasmanian Techno scene would all have witnessed one of Allan's sets at a club night, or festival.\n\nAllan is a core part of the SPICYMUSIC crew, and has supported some of the world elite including Anetha, Setoac Mass, Perc, Dasha Rush, Marcel Fengler, Henning Baer, and many more.\n\nWith a run of recent productions on labels such as Olympian, Gynoid and Counter Pulse and a long-standing history of other productions on both international and national labels, Allan has continued to refine, and push the boundaries as an artist and producer.\n\nHe can warm up a night with an eclectic selection of tunes, or bring an infectious and rolling energy to close out the night.",
      "ARTWORK COMPLETED": "YES",
      FACEBOOK: "https://www.facebook.com/allanpillaimusic",
      INSTAGRAM: "https://www.instagram.com/allanpmusic_/",
      SOUNDCLOUD: "https://soundcloud.com/allan-pillai",
      OTHER: "",
    },
    {
      "ARTIST NAME": "Delix",
      BIO: "Delix (Del-ix) is the brainchild of Australian born electronic producer Daniel Bower. With over a decade of musical experience playing piano, guitar and brass instruments Delix has focused his creativity on electronic music production since 2017 and has quickly become a formidable presence behind the decks performing explosive and dynamic sets throughout Australia.\n\nDelix‚Äôs debut release Palawa was released on Australian label Sensory Glitch in 2019 and has since released on labels such as Techgnosis Records, Frisson Records and Project:01 Music showcasing a variety of musical genres ranging from Psychedelic Trance, Techno/House and Dub.\n\nReleases On\n\n- Sensory Glitch Records (Aus)\n- Techgnosis Records (Can)\n- Frisson Records (Aus)\n- Subtrail (India)\n- Shadow Wulf Records (USA)\n- Puzzle Records (Aus)",
      "ARTWORK COMPLETED": "YES",
      FACEBOOK: "https://www.facebook.com/dan.delix",
      INSTAGRAM: "https://www.instagram.com/delixandfottip/",
      SOUNDCLOUD: "https://soundcloud.com/delix-140650195",
      OTHER: "",
    },
  ],
};

export default function Lineup() {
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);

  return (
    <Layout>
      <Head>
        <title>Multiverse 2025 | Lineup</title>
      </Head>
      <ContentWrapper>
        <LineupIntroMdx />

        {Object.entries(lineup).map(([heading, artists]) => (
          <Fragment key={heading}>
            <h2>{heading}</h2>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {artists.map((artist) => (
                <button
                  key={artist["ARTIST NAME"]}
                  className="px-4 py-8 md:hover:underline lineup-card flex flex-col justify-center items-center"
                  onClick={() => setSelectedArtist(artist)}
                >
                  <ExportedImage
                    alt={artist["ARTIST NAME"]}
                    src={`/images/lineup/${artist["ARTIST NAME"]}.png`}
                    width={300}
                    height={300}
                    className="lineup-image-greyscale"
                  />
                  <h3 className="mt-2 text-2xl text-center font-light font-mono text-primary-300">
                    {artist["ARTIST NAME"]}
                  </h3>
                </button>
              ))}
            </div>
          </Fragment>
        ))}

        <h2>More artists to be announced soon!</h2>
        <LineupDialog
          selectedArtist={selectedArtist}
          setSelectedArtist={setSelectedArtist}
        />
      </ContentWrapper>
    </Layout>
  );
}
