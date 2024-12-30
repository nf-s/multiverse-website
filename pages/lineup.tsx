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
