import sanityClient from "@sanity/client";

import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "l2eg970g",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "sk7369mFwtUa9iNNe6sFrG495Fl8DXHRPf6V0bLwoUMyXy5QuGyEnRsDDlX8FinrhA0x8eOBkJLHQi9zKRgeDxtZplkCORxvdWQqX39u1kJrKdYuM2mX8oNipJM7kvE8MuMiDZbyVpTnda1sz4QQEc4Rcc2DFavrigPfv0yORj8e8iJzUUUt",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
