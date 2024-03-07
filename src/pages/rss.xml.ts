import rss from "@astrojs/rss"
import { getCollection } from "astro:content"
import type { APIContext } from "astro"

export const GET = async (context: APIContext) => {
    const posts = await getCollection("posts")
    return rss({
        title: "TanoC Blog",
        description: "",
        site: context.site!,
        items: posts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: "",
            link: `/posts/${post.slug}`,
        })),
    })
}
