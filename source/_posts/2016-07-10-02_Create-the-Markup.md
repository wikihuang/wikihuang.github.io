---
layout: post
title: "02_產生markup"
date: 2016-04-30 14:57:25 +0800
comments: true
categories: ["psd-to-html"]
keywords: "html,css"
tags: [html,css]
description: "了解如何分析psd圖檔，並運用960gs轉為html架構。並運用zen-coding快速完成html的架構"
demoPic: "/images/coding-note/html/psd-to-html/02_Create the Markup/00_demo.jpg"
oriVideo_link: "http://net.tutsplus.com/tutorials/site-builds/convert-a-warm-cheerful-web-design-to-html-and-css/#chapter2"
---
<div id="intro">
    <img src="/images/coding-note/html/psd-to-html/02_Create the Markup/00_demo.jpg" class="demo_img" alt="了解如何分析psd圖檔，並運用960gs轉為html架構。並運用zen-coding快速完成html的架構">
    <p>了解如何分析psd圖檔，並運用960gs轉為html架構。並運用zen-coding快速完成html的架構</p>
</div>
<!--more-->

* list element with functor item
{:toc}
<hr />



## 解說已完成的網頁的功能


<p>完成檔介紹</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.00.40.70.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.00.40.70.jpg"/>




<p>完成檔功能(按鈕滑動特效、陰影(shadow)、javascript特效)</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.00.45.00.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.00.45.00.jpg"/>



## 新增專案資料夾及所需檔案


<p>新增專案-SiteName</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.01.07.00.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.01.07.00.jpg"/>




<p>使用MacVim來編寫siteName專案</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.01.12.00.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.01.12.00.jpg"/>




<p>使用Terminal輸入指令來產生所需檔案</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.01.49.00.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.01.49.00.jpg"/>




<p>生成了css、img、js資料夾，和index.html</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.01.50.00.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.01.50.00.jpg"/>



## Vim編輯該專案，並插入html5、css的snippet


<p>在macVim下執行該專案，可看到專案內檔案的結構</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.02.01.20.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.02.01.20.jpg"/>




<p>開啟Snippet，可看到許多自行定義的常用程式碼</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.02.12.90.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.02.12.90.jpg"/>




<p>搜尋並選擇HTML5常用的程式碼，來插入index.html</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.02.22.70.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.02.22.70.jpg"/>




<p>未來如果要改善舊版IE的效能，可寫指令在&lt;!--[if IE&gt;&lt;![endif]--&gt;之間</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.02.34.00.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.02.34.00.jpg"/>




<p>如果要尋找常用改善舊版IE效能的常用程式碼，可到www.phpied.com/conditional-comments-block-downloads</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.02.45.00.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.02.45.00.jpg"/>




<p>確定執行的瀏灠器版本</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.02.47.20.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.02.47.20.jpg"/>




<p>指定網址列上出現的icon圖示</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.02.53.10.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.02.53.10.jpg"/>




<p>手機、平版電腦所顯示的icon圖示</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.02.59.00.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.02.59.00.jpg"/>




<p>套用的css樣示所在位址</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.03.18.10.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.03.18.10.jpg"/>




<p>手機用的css</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.03.25.10.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.03.25.10.jpg"/>




<p>如果是小於IE9以下的版本，執行可運行html5元件的js，來讓舊的IE也能使用html5元件</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.03.37.80.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.03.37.80.jpg"/>




<p>使用jquery</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.04.28.10.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.04.28.10.jpg"/>



## 觀察psd圖檔尺寸，決定該使用何種960gs的格線(12格、16格、24格)


<p>確認psd圖檔的尺寸大小，是否符合960px</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.04.37.00.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.04.37.00.jpg"/>




<p>下載960gs</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.05.12.00.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.05.12.00.jpg"/>




<p>確認psd圖檔所用的格線類別(12格、16格、24格)，此範例適合用24格的格線</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.05.40.60.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.05.40.60.jpg"/>




<p>複製960gs所需用到的css檔到website專案中</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.05.53.00.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.05.53.00.jpg"/>




<p>建議未來將這3個css檔，合為1個以增進效能</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.06.05.00.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.06.05.00.jpg"/>



## 圖檔轉css的架構分析


<p>使用zen-coding快速輸入html tag</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.07.26.00.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.07.26.00.jpg"/>




<p>解說當網頁內容增多時，背景該如何延展</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.08.16.00.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.08.16.00.jpg"/>




<p>分析網頁架構可分為:header、banner、mainContent、aside、footer</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.09.04.00.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.09.04.00.jpg"/>



## header


<p>運用zen-coding寫法，產生header架構</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.10.41.00.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.10.41.00.jpg"/>




<p>加入&lt;nav&gt;區塊內，超連結的名稱(Hom、ABOUT、PORTFOLIO、BLOG、CONTACT)</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.11.01.00.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.11.01.00.jpg"/>




<p>解說若要統一為大寫，可之後改用CSS的uppercase屬性來統一設定</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.11.10.50.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.11.10.50.jpg"/>




<p>完成#headSocial區塊的架構(icon圖檔區塊)</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.12.15.10.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.12.15.10.jpg"/>




<p>填入icon圖檔的位置</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.12.52.00.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.12.52.00.jpg"/>




<p>填入search輸入框的html tag</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.13.35.40.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.13.35.40.jpg"/>




<p>加入search的標題，及placeholder所顯示的資料(提供搜尋框提示所要輸入的字)</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.14.09.00.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.14.09.00.jpg"/>




<p>完成了header區塊的部份，依序是title、nav、logo、search的部份。(但要注意搜尋框的placeholder要看所運行的瀏灠器是否支援)</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.14.24.20.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.14.24.20.jpg"/>



## banner


<p>填入banner區塊的html tag</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.16.09.90.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.16.09.90.jpg"/>




<p>填入featured區塊的圖片位置</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.16.25.70.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.16.25.70.jpg"/>




<p>填入banner內部的說明文字</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.16.38.80.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.16.38.80.jpg"/>




<p>加入按鈕</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.17.12.80.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.17.12.80.jpg"/>




<p>breadcrumbs的Home字串需加入超連結，利用vim內建的功能，將Home字串給選取，後指定為此字串需套用超連結格式</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.17.49.70.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.17.49.70.jpg"/>




<p>規劃main區塊為二個子區塊:primary和aside</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.18.06.00.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.18.06.00.jpg"/>




<p>在繼續寫main區塊的程式碼前，先將banner-wrap的地方做個結束用的註記。可用&lt;!-- end banner-wrap --&gt;做為結束</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.18.20.00.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.18.20.00.jpg"/>



## main


<p>main之內會有兩個&lt;div&gt;區塊-primary和aside</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.18.31.30.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.18.31.30.jpg"/>




<p>先從primary的部份先開始</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.18.40.00.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.18.40.00.jpg"/>




<p>primary區塊是由&lt;h3&gt;和2個&lt;article&gt;所構成的</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.19.29.00.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.19.29.00.jpg"/>




<p>依序填入&lt;article&gt;區塊內，所需的圖片位置、文字內容</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.20.10.50.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.20.10.50.jpg"/>




<p>到psd的原始圖檔內，可看到字尾有Continue Reading的超連結</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.20.12.10.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.20.12.10.jpg"/>




<p>在&lt;p&gt;的最未端加入超連結</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.20.22.10.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.20.22.10.jpg"/>




<p>最後，加入&lt;button&gt;的部份，完成了#primary的區塊</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.20.55.90.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.20.55.90.jpg"/>



## aside


<p>&lt;aside&gt;的#comments區塊由&lt;p&gt;和&lt;h6&gt;所構成</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.21.52.00.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.21.52.00.jpg"/>




<p>#tabHeadings區塊，內含3個超連結，做為日後點選切換頁面的按鈕</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.23.06.30.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.23.06.30.jpg"/>




<p>此3個超連結分別為:#comments、#categories、#archives，日後使用者點選時，會跳轉頁面到該id的位置</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.23.24.00.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.23.24.00.jpg"/>




<p>寫入#categories的區塊</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.24.02.60.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.24.02.60.jpg"/>




<p>寫入#archives的區塊</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.24.25.90.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.24.25.90.jpg"/>




<p>最後，準備完成&lt;aside&gt;的最後2個區塊，先完成&quot;Who We are&quot;的區塊</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.25.15.80.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.25.15.80.jpg"/>




<p>最後是和&quot;SPONSOR&quot;區塊的圖片和文字，完成了&lt;aside&gt;部份</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.26.12.00.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.26.12.00.jpg"/>



## footer


<p>footer區塊由3個區塊組成，footer-wrap(放背景)、footer(置入子區塊)、section(子區塊的內容)</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.27.49.00.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.27.49.00.jpg"/>




<p>第一個子區塊為表單，供使用者輸入資料</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.28.01.90.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.28.01.90.jpg"/>




<p>依序填入輸入欄的所需資料</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.29.08.80.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.29.08.80.jpg"/>




<p>第二個部份為&quot;Recent Projects&quot;，用來顯示網站過去所完成專案的縮圖</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.29.35.80.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.29.35.80.jpg"/>




<p>依序填入圖片的位置</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.30.09.60.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.30.09.60.jpg"/>




<p>最後為&quot;Twitter Stream&quot;的子區塊，用來顯示該網站每段時間，所發佈在Twitter的訊息</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.30.31.80.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.30.31.80.jpg"/>




<p>填入文字內容後，再來是發佈時間的超連結。<br />完成了footer的區塊</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.31.04.60.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.31.04.60.jpg"/>



## siteInfo


<p>最後是siteInfo的區塊，先輸入網站的所有權說明文字</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.31.50.10.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.31.50.10.jpg"/>




<p>最後是，用來切換頁面的超連結:HOME、ABOUT、PORTFOLIO、BLOG、CONTACT的部份</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.32.14.10.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.32.14.10.jpg"/>




<p>完成了此網站的所有基本架構，下一章，為裁切PSD的原始圖檔的方法，來給此網頁使用。</p>
<img src="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.32.17.50.jpg" alt="/images/coding-note/html/psd-to-html/02_Create the Markup/02_Create the Markup-0.32.17.50.jpg"/>


