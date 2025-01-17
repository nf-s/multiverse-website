import ExportedImage from "next-image-export-optimizer";
import Head from "next/head";
import { Fragment, useState } from "react";
import ContentWrapper from "../components/ContentWrapper";
import Layout from "../components/Layout";
import LineupDialog from "../components/LineupDialog";
import { lineup } from "../content/lineup";
import LineupIntroMdx from "../content/lineup-intro.mdx";

export interface Artist {
  imagePath?: string;
  "ARTIST NAME": string;
  "ARTWORK COMPLETED": string;
  BIO: string;
  FACEBOOK?: string;
  INSTAGRAM?: string;
  SOUNDCLOUD?: string;
  OTHER?: string;
}

const showTitles = false;
const showMoreToCome = false;

// Merge lineup into one list if titles are not shown
const allLineup = showTitles ? lineup : { main: Object.values(lineup).flat() };

export default function Lineup() {
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);

  return (
    <Layout>
      <Head>
        <title>Multiverse 2025 | Lineup</title>
      </Head>
      <ContentWrapper>
        <LineupIntroMdx />

        {Object.entries(allLineup).map(([heading, artists]) => (
          <Fragment key={heading}>
            {showTitles && <h2>{heading}</h2>}

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {artists.map((artist) => (
                <button
                  key={artist["ARTIST NAME"]}
                  className="px-4 py-8 md:hover:underline lineup-card flex flex-col justify-center items-center"
                  onClick={() => setSelectedArtist(artist)}
                >
                  <ExportedImage
                    alt={artist["ARTIST NAME"]}
                    src={
                      artist?.imagePath ??
                      `/images/lineup/${artist?.["ARTIST NAME"]}.png`
                    }
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

        {showMoreToCome && <h2>More artists to be announced soon!</h2>}
        <LineupDialog
          selectedArtist={selectedArtist}
          setSelectedArtist={setSelectedArtist}
        />
      </ContentWrapper>
    </Layout>
  );
}
