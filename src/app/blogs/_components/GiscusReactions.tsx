"use client";

import { useEffect, useState } from "react";
import { Drawer } from "vaul";
import Giscus from "@giscus/react";

type GiscusResponse = {
  discussion: {
    totalCommentCount: number;
    reactions: Record<string, { count: number }>;
  };
};

const EMOJIS = {
  THUMBS_UP: "👍",
  THUMBS_DOWN: "👎",
  LAUGH: "😄",
  HOORAY: "🎉",
  CONFUSED: "😕",
  HEART: "❤️",
  ROCKET: "🚀",
  EYES: "👀",
};

export default function GiscusReactions() {
  const [commentscount, setCommentsCount] = useState(0);
  const [reactions, setReactions] = useState<
    GiscusResponse["discussion"]["reactions"] | undefined
  >(undefined);
  useEffect(() => {
    function handleMessage(event: MessageEvent<{ giscus: GiscusResponse }>) {
      if (event.origin !== "https://giscus.app") return;
      if (!(typeof event.data === "object" && event.data.giscus)) return;

      const giscusData = event.data.giscus;

      if ("discussion" in giscusData) {
        setCommentsCount(giscusData.discussion.totalCommentCount);
        setReactions(giscusData.discussion.reactions);
      }
    }

    window.addEventListener("message", handleMessage);

    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <>
      <Drawer.Root shouldScaleBackground>
        <Drawer.Trigger asChild>
          <div className="flex w-auto flex-wrap items-center gap-2">
            {!reactions && <p className="!m-0">Loading reactions...</p>}
            {reactions && (
              <div className="cursor-pointer rounded-lg border bg-card px-4 py-2 transition-colors hover:bg-accent">
                Add comment ({commentscount})
              </div>
            )}
            {reactions && Object.keys(reactions).length && (
              <div className="flex cursor-pointer items-center justify-between gap-3 rounded-lg border bg-card px-4 py-2 transition-colors hover:bg-accent">
                {Object.entries(reactions).map(([key, value]) => {
                  if (!value.count) return;
                  return (
                    <div className="flex gap-2" key={key}>
                      <p className="!m-0">{value.count}</p>
                      <p className="!m-0">
                        {EMOJIS[key as keyof typeof EMOJIS]}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="fixed bottom-0 left-0 right-0 mt-24 flex h-[80%] max-h-[80%] flex-col rounded-t-[10px] bg-card">
            <div className="flex-1 overflow-y-auto rounded-t-[10px] bg-card p-4">
              {/* <div className="mx-auto mb-8 h-1.5 w-12 flex-shrink-0 rounded-full bg-zinc-300" /> */}
              <div className="mx-auto max-w-4xl ">
                <Drawer.Title className="my-4 text-center text-xl font-medium">
                  Share your thoughts on the post
                </Drawer.Title>
                <Giscus
                  repo="AaronClaes/my-site"
                  repoId="R_kgDOMB3btA"
                  category="Giscus Comments"
                  categoryId="DIC_kwDOMB3btM4CgIzm"
                  mapping="pathname"
                  strict="0"
                  reactionsEnabled="1"
                  emitMetadata="1"
                  inputPosition="top"
                  theme="dark"
                  lang="en"
                  loading="eager"
                />
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
      {/* Ugly solution but needed to get the initial reactions & comments for the buttons */}
      <div className="hidden">
        <Giscus
          repo="AaronClaes/my-site"
          repoId="R_kgDOMB3btA"
          category="Giscus Comments"
          categoryId="DIC_kwDOMB3btM4CgIzm"
          mapping="pathname"
          strict="0"
          reactionsEnabled="1"
          emitMetadata="1"
          inputPosition="top"
          theme="dark"
          lang="en"
          loading="eager"
        />
      </div>
    </>
  );
}
