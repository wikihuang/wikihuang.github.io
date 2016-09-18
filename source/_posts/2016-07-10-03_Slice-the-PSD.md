---
layout: post
title: "03_裁切psd圖檔"
date: 2016-04-30 14:57:25 +0800
comments: true
categories: ["psd-to-html"]
keywords: "psd"
tags: [psd]
description: "運用快速鍵，快速的指定圖層來裁切psd圖檔的各個區塊，並最佳化為網頁用圖檔。了解重覆性的背景圖如何取最適大小來裁切"
demoPic: "/images/coding-note/html/psd-to-html/03_Slice the PSD/00_demo.jpg"
oriVideo_link: "http://code.tutsplus.com/tutorials/convert-a-warm-cheerful-web-design-to-html-and-css--net-16799#chapter3"
---
<div id="intro">
    <img src="/images/coding-note/html/psd-to-html/03_Slice the PSD/00_demo.jpg" class="demo_img" alt="運用快速鍵，快速的指定圖層來裁切psd圖檔的各個區塊，並最佳化為網頁用圖檔。了解重覆性的背景圖如何取最適大小來裁切">
    <p>運用快速鍵，快速的指定圖層來裁切psd圖檔的各個區塊，並最佳化為網頁用圖檔。了解重覆性的背景圖如何取最適大小來裁切</p>
</div>
<!--more-->

* list element with functor item
{:toc}
<hr />



## 分析psd圖檔上的各個區塊


<p>開始分析網頁psd檔的各個區塊架構，首先先分析&lt;header&gt;的部份</p>
<img src="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.00.41.00.jpg" alt="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.00.41.00.jpg"/>




<p>&lt;header&gt;的nav區塊，由5個超連結組成，供使用者點擊以跳轉至其它頁面</p>
<img src="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.00.55.00.jpg" alt="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.00.55.00.jpg"/>




<p>&lt;header&gt;的search區塊，供使用者搜尋此網站的內容</p>
<img src="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.00.59.90.jpg" alt="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.00.59.90.jpg"/>




<p>&lt;header&gt;的social icon區塊，可供使用者點擊後跳轉至如facebook、twiter等社群網站</p>
<img src="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.01.20.00.jpg" alt="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.01.20.00.jpg"/>




<p>開始分析banner區塊的架構</p>
<img src="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.01.32.10.jpg" alt="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.01.32.10.jpg"/>




<p>banner區塊的按鈕部份，讓使用者看到此網站的簡介後，點擊進入詳細介紹的網頁</p>
<img src="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.01.38.50.jpg" alt="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.01.38.50.jpg"/>




<p>banner區塊的小三角形背景</p>
<img src="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.02.03.00.jpg" alt="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.02.03.00.jpg"/>




<p>main區塊，由primary和aside二大區塊所組成，我們可利用&lt;article&gt;和&lt;section&gt;將其劃分為更明確的區塊</p>
<img src="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.02.07.20.jpg" alt="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.02.07.20.jpg"/>




<p>footer區塊和siteInfo區塊</p>
<img src="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.02.25.20.jpg" alt="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.02.25.20.jpg"/>



## 選取icon區圖層，另存為圖片


<p>進入photoshop,開始進行截取圖片的動作(記得勾選Auto-Select)</p>
<img src="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.02.36.70.jpg" alt="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.02.36.70.jpg"/>




<p>勾選Auto-select後，當你點選該圖層的圖片時，右側的圖層區會跳至該圖片所在的圖層</p>
<img src="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.02.52.00.jpg" alt="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.02.52.00.jpg"/>




<p>選取icon圖片，可在圖層區，點選該圖層(ctrl+滑鼠左鍵)，後複製(ctrl+v)</p>
<img src="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.03.26.70.jpg" alt="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.03.26.70.jpg"/>




<p>開新檔案(會產生一個和所複製的圖型一樣長寬的檔案)</p>
<img src="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.03.50.10.jpg" alt="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.03.50.10.jpg"/>




<p>將png的icon圖檔，轉存為網頁用(ctrl+shift+s)</p>
<img src="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.04.49.00.jpg" alt="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.04.49.00.jpg"/>




<p>轉存為PNG-24的圖片格式</p>
<img src="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.04.56.00.jpg" alt="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.04.56.00.jpg"/>




<p>將圖檔存至-img/icons/facebook.png</p>
<img src="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.05.30.00.jpg" alt="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.05.30.00.jpg"/>




<p>ctrl+w(關閉視窗)，完成截取icon圖片的步驟</p>
<img src="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.06.27.00.jpg" alt="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.06.27.00.jpg"/>




<p>接下來的抓icon圖檔的步驟和之前都是一樣的</p>
<img src="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.06.34.60.jpg" alt="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.06.34.60.jpg"/>



## 選取banner區圖層，圖片壓縮最佳化


<p>截取banner區塊的圖片</p>
<img src="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.07.14.00.jpg" alt="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.07.14.00.jpg"/>




<p>因不需要透明度，所以轉存為JPEG的格式，並比對圖片壓縮後的檔案大小和品質(Quality:60最佳)</p>
<img src="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.08.04.80.jpg" alt="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.08.04.80.jpg"/>




<p>另存圖檔為blogImage.jpg</p>
<img src="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.08.16.90.jpg" alt="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.08.16.90.jpg"/>



## 合併遮照用圖層、取消圖層框線效果


<p>將大圖片和其遮照用的圖層合併，再進行截取</p>
<img src="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.08.43.90.jpg" alt="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.08.43.90.jpg"/>




<p>WHO WE ARE的圖片，截取時需先取消掉黃色邊框的效果，因為我們只需要截取圖片的部份，編輯成網頁時，可用css來產生黃色邊框即可</p>
<img src="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.09.36.20.jpg" alt="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.09.36.20.jpg"/>




<p>另存圖檔為whoWeAre.jpg</p>
<img src="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.09.45.70.jpg" alt="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.09.45.70.jpg"/>




<p>抓取SPONSORS區塊的圖片</p>
<img src="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.10.19.20.jpg" alt="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.10.19.20.jpg"/>




<p>另存圖檔至banners/graphic.jpg</p>
<img src="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.10.31.20.jpg" alt="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.10.31.20.jpg"/>



## 介紹grapicriver.net和themeforest.net


<p>介紹grapicriver.net(一個提供各種原始圖檔素材的網站)</p>
<img src="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.10.36.00.jpg" alt="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.10.36.00.jpg"/>




<p>介紹themforest.net(提供各種網站模版原始檔的網站)</p>
<img src="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.10.51.50.jpg" alt="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.10.51.50.jpg"/>



## 截取RECENT PROJECTS區的圖片


<p>抓取footer區塊內，RECENT PROJECTS的圖片</p>
<img src="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.11.35.10.jpg" alt="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.11.35.10.jpg"/>




<p>將圖檔存至-img/recentProject.jpg</p>
<img src="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.11.44.00.jpg" alt="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.11.44.00.jpg"/>




<p>其它相同類別的3張圖片，也用相同的步驟截取</p>
<img src="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.12.20.40.jpg" alt="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.12.20.40.jpg"/>



## 截取按鈕的背景圖


<p>準備截取SUBMIT按鈕的背景圖片，先將其圖層合併</p>
<img src="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.13.21.50.jpg" alt="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.13.21.50.jpg"/>




<p>按鈕的背景圖片，只需要截取部份的大小即可</p>
<img src="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.13.56.90.jpg" alt="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.13.56.90.jpg"/>




<p>截取最適合的大小，後複製</p>
<img src="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.14.05.00.jpg" alt="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.14.05.00.jpg"/>




<p>另存圖檔至-img/buttonBG.jpg</p>
<img src="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.14.12.00.jpg" alt="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.14.12.00.jpg"/>



## 截取並確認背景圖片的範圍


<p>合併所有圖層，準備截取網頁的背景圖片</p>
<img src="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.15.07.50.jpg" alt="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.15.07.50.jpg"/>




<p>截取最適合的大小，後複製</p>
<img src="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.15.29.30.jpg" alt="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.15.29.30.jpg"/>




<p>另存圖檔至-img/bg.jpg</p>
<img src="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.15.52.30.jpg" alt="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.15.52.30.jpg"/>



## 截取banner的小方點背景圖


<p>banner區塊內的背景，是有許多小方塊所組成的背景，因此截部其中一個小方塊，後複製</p>
<img src="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.16.19.80.jpg" alt="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.16.19.80.jpg"/>




<p>另存圖檔至-img/bannerBg.jpg</p>
<img src="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.16.41.00.jpg" alt="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.16.41.00.jpg"/>




<p>最後為banner的內部的咖啡色背景，截取後存檔為bannerInnerBg.jpg，結束了截取PSD圖檔的所有步驟。</p>
<img src="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.17.08.00.jpg" alt="/images/coding-note/html/psd-to-html/03_Slice the PSD/03_Slice the PSD-0.17.08.00.jpg"/>


