---
title: "App RouterとPages Routerの違い"
img: "/others/dummy.png"
date: "2025-03-29"
description: "自作ブログを作るために奮闘した記録を残します．"
tags: []
---

1. App RouterとPages Routerの公式Docsの違い

初めに言うことがそこかいと思うかもしれませんが，改めてここで強調させてください．

### 公式Docsを読む時は，Pages RouterとApp Routerのどちらのものか確認してから読むべし

これに関しては，実際に確認してみるのが一番わかりやすいと思います．一度[Next.jsの公式Docs](https://nextjsjp.org/docs)を見てみましょう．どうせなら日本語版にしてみます．

![nextjsja/docs](/posts/docs1.png)

左上の「Using App Router」から，現在App RouterについてのDocsとなっていることがわかります．

ここで，動的ルーティングについて知りたくなったとします(動的ルーティングについては今後の記事で追加します)．そんな時は右上の検索バーで入力して...

![nextjsja/docs](/posts/docs2.png)

Enterキーを押せば！

![nextjsja/docs](/posts/docs3.png)

あれぇ？ということで，なぜか勝手にPages RouterのDocsに飛ばされてしまいました．このように，App RouterとPages Routerは本当に混ざりやすく，知らぬ間に逆のDocsを読んでいたと言うことが頻発しますので，必ず今どちらのDocsを読んでいるのかを強く意識することをお勧めします．
