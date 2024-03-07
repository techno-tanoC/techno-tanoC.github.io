---
title: ブログを作り始めました
slug: first-post
pubDate: 2024-03-07
---
## Astroに入門した
ブログを作りたいとずっと思っていて、以前からいくつかのフレームワークを試していました。

例えば [Next.js](https://nextjs.org/) や [Hugo](https://gohugo.io/) を試してみたのですが、どうにも思った通りに動かないことややりたいことを実現できなくて困っていたところ、 [Astro](https://astro.build/) が非常に上手くハマったのでAstroでブログを作り始めました。

チュートリアルをやってから、ドキュメントを見ながら検証をしていたのですが、その中でドキュメントには書いてなさそうな事項があったので今回の記事ではそれを書いてみようと思います。

## ページネーションの型について
Astroでは [ページネーションを実装することができます](https://docs.astro.build/ja/guides/routing/#%E3%83%9A%E3%83%BC%E3%82%B8%E3%83%8D%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3) 。

この時に `getStaticPaths` の引数で `{ paginate }` を受け取るのですが、TypeScriptを使っている場合、ドキュメント記載のコードではエラーが出ました。

このエラーは `GetStaticPathsOptions` をインポートして指定することで解消することができます。

```
import type { GetStaticPathsOptions } from "astro"

export const getStaticPaths = async ({ paginate }: GetStaticPathsOptions) => {
}
```

## エンドポイントの型について
Astroには js/ts で [静的ファイルのエンドポイント](https://docs.astro.build/ja/guides/endpoints/#%E9%9D%99%E7%9A%84%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%81%AE%E3%82%A8%E3%83%B3%E3%83%89%E3%83%9D%E3%82%A4%E3%83%B3%E3%83%88) を作成することができます。

ブログを作る際に使うことはあまり多くないと思うのですが、 [RSSフィードを作る](https://docs.astro.build/ja/guides/rss/) 時には必要になってきます。

この時もページネーションと同様に型アノテーションが必要となるのですが、 `APIContext` をインポートして指定することで解消できました。

```
import type { APIContext } from "astro"

export const GET = async (context: APIContext) => {
}
```

## 最後に
まだまだ作成途中のブログですが、「とりあえず公開してみる」というのが大事だと思ったので記事を書きながらブログを作っていこうと思います。
