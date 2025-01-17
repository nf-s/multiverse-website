import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import ExportedImage from "next-image-export-optimizer";
import { useEffect, useRef, useState } from "react";
import Markdown from "react-markdown";
import { SocialIcon } from "react-social-icons";
import { Artist } from "../pages/lineup";

export default function LineupDialog({
  selectedArtist,
  setSelectedArtist,
}: {
  selectedArtist: Artist | null;
  setSelectedArtist: (artist: Artist | null) => void;
}) {
  const [hasScrolledToArtist, setHasScrolledToArtist] = useState<string | null>(
    null
  );

  const panelRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedArtist(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setSelectedArtist]);

  return (
    <Dialog
      open={!!selectedArtist}
      onClose={() => {
        setHasScrolledToArtist(null);
        setSelectedArtist(null);
      }}
      className="relative z-50"
      autoFocus
      onFocus={() => {
        if (hasScrolledToArtist === selectedArtist?.["ARTIST NAME"]) return;
        panelRef.current?.scrollTo(0, 0);
        setTimeout(() => {
          panelRef.current?.scrollTo(0, 0);
        }, 0);
        setHasScrolledToArtist(selectedArtist?.["ARTIST NAME"] ?? null);
      }}
    >
      <div className="fixed inset-0 flex w-screen items-center justify-center sm:p-4 backdrop-blur-sm">
        <Dialog.Panel
          ref={panelRef}
          className={`max-h-full max-w-full md:max-w-3xl space-y-4 bg-slate-900 backdrop-blur bg-opacity-90 text-white p-12 flex flex-col items-center overflow-y-auto`}
          onScroll={(event) => {}}
        >
          <Dialog.Backdrop className="fixed inset-0 bg-black opacity-30" />

          <XMarkIcon
            width={36}
            height={36}
            className="absolute top-4 right-4  text-primary-500 cursor-pointer"
            onClick={() => setSelectedArtist(null)}
          />

          {selectedArtist ? (
            <>
              <ExportedImage
                alt={selectedArtist?.["ARTIST NAME"]}
                src={
                  selectedArtist?.imagePath ??
                  `/images/lineup/${selectedArtist?.["ARTIST NAME"]}.png`
                }
                width={300}
                height={300}
              />
              <div className="w-full">
                <a hidden id="lineup-dialog-top-anchor"></a>
                <h1 className="text-center font-light font-mono text-primary-300">
                  {selectedArtist?.["ARTIST NAME"]}
                </h1>
                <Markdown>{selectedArtist?.BIO || "No bio."}</Markdown>
              </div>
            </>
          ) : null}
          <div className="pt-4 flex gap-4 justify-between w-full items-end">
            <div className="flex gap-2">
              {selectedArtist?.FACEBOOK ? (
                <SocialIcon url={selectedArtist?.FACEBOOK} target="_blank" />
              ) : null}
              {selectedArtist?.INSTAGRAM ? (
                <SocialIcon url={selectedArtist?.INSTAGRAM} target="_blank" />
              ) : null}
              {selectedArtist?.SOUNDCLOUD ? (
                <SocialIcon url={selectedArtist?.SOUNDCLOUD} target="_blank" />
              ) : null}
              {selectedArtist?.OTHER ? (
                <SocialIcon url={selectedArtist?.OTHER} target="_blank" />
              ) : null}
            </div>
            <button
              className="text-primary-500 uppercase"
              onClick={() => setSelectedArtist(null)}
            >
              Close
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
