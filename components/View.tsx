import React from "react";
import Ping from "./Ping";
import { EyeIcon } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";
import { formatViews } from "@/lib/utils";
import { writeClient } from "@/sanity/lib/write-client";
import { unstable_after as after }  from "next/server";

type Props = {};

const Views = async ({ id }: { id: string }) => {
    const { views: totalViews } = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUP_VIEWS_QUERY, { id })

    after(
        async () =>
          await writeClient
            .patch(id)
            .set({ views: totalViews + 1 })
            .commit(),
      );

  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>

      <p className="view-text flex">
        <span className="font-black pr-1">{formatViews(totalViews)}
        </span>
        <EyeIcon />
      </p>
    </div>
  );
};

export default Views;
