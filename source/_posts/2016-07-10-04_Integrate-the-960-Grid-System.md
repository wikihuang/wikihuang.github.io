---
layout: post
title: "04_960gs"
date: 2016-04-30 14:57:25 +0800
comments: true
categories: ["psd-to-html"]
keywords: "css"
tags: [css]
description: "運用960gs的格線來劃分網頁的區塊，並了解如何運用clear:both來解決float所造成的浮動問題。"
demoPic: "/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/00_demo.jpg"
oriVideo_link: "http://code.tutsplus.com/tutorials/convert-a-warm-cheerful-web-design-to-html-and-css--net-16799#chapter4"
---
<div id="intro">
    <img src="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/00_demo.jpg" class="demo_img" alt="運用960gs的格線來劃分網頁的區塊，並了解如何運用clear:both來解決float所造成的浮動問題。">
    <p>運用960gs的格線來劃分網頁的區塊，並了解如何運用clear:both來解決float所造成的浮動問題。</p>
</div>
<!--more-->

* list element with functor item
{:toc}
<hr />



## vim指令操作html檔案


<p>用vim的指令生成一個html檔(:e 960.html)，用來測試960GS套用樣式的功能</p>
<img src="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.00.34.00.jpg" alt="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.00.34.00.jpg"/>



## 載入所需的snippet


<p>將所需要用到的css檔複製，準備貼入960.html</p>
<img src="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.00.48.30.jpg" alt="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.00.48.30.jpg"/>




<p>輸入html:5載入html檔常用到的snippet</p>
<img src="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.00.50.20.jpg" alt="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.00.50.20.jpg"/>




<p>貼入960gs所需用到的css</p>
<img src="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.00.53.80.jpg" alt="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.00.53.80.jpg"/>



## 量測psd檔，確認所需格線數量


<p>使用photoshop的尺規工具，量測全圖寬度，確定為960px</p>
<img src="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.01.27.30.jpg" alt="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.01.27.30.jpg"/>




<p>確認使用的格線數量(24格)</p>
<img src="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.01.33.10.jpg" alt="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.01.33.10.jpg"/>



## 製作小範列，解說套用24格線的背景顏色效果


<p>最外層的容器，設為24格寬(960px)</p>
<img src="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.02.04.00.jpg" alt="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.02.04.00.jpg"/>




<p>先設定24格區塊的背景為灰色，之後各個區塊會設為不一樣的顏色，方便觀察每個區塊的寬度</p>
<img src="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.02.24.00.jpg" alt="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.02.24.00.jpg"/>



## 觀察並解說960gs的css


<p>我們來觀察960.gs內的css程式碼，為了方便觀看，請到此網站(www.codebeautifier.com)來將css分行，以方便閱讀</p>
<img src="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.02.54.20.jpg" alt="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.02.54.20.jpg"/>




<p>解說960.gs的各個部份，是如何設定寬度、間距、浮動等等</p>
<img src="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.02.59.00.jpg" alt="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.02.59.00.jpg"/>



## nav區塊overflow:hidden的應用


<p>960.gs介紹完後，到photoshop量測nav區塊所需格數(12格)</p>
<img src="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.03.30.70.jpg" alt="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.03.30.70.jpg"/>




<p>寫入佔12格的nav區塊</p>
<img src="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.03.51.60.jpg" alt="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.03.51.60.jpg"/>




<p>可看到nav區塊出現了，但是覆蓋了其父層的container_24的區塊(overflow的原因)</p>
<img src="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.04.03.00.jpg" alt="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.04.03.00.jpg"/>




<p>container_24為父層的容器，如要不被子層的物件所覆蓋，需設定其overflow:hidden</p>
<img src="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.04.38.50.jpg" alt="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.04.38.50.jpg"/>




<p>和看到設完overflow:hidden後，父層和子層的容器一起出現了，解決了顏色覆蓋的問題</p>
<img src="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.04.41.70.jpg" alt="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.04.41.70.jpg"/>




<p>剛才只是要讓大家了解overflow的應用，所以才將nav設為12格。現在將nav的12格設定移除，讓nav區塊佔滿24格</p>
<img src="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.04.53.00.jpg" alt="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.04.53.00.jpg"/>



## 960gs的grid應用


<p>接下來設定#main區塊，區分為#primary的18格，#sidebar的6格</p>
<img src="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.05.29.00.jpg" alt="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.05.29.00.jpg"/>




<p>設定#main區塊的高度為500px</p>
<img src="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.05.54.00.jpg" alt="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.05.54.00.jpg"/>




<p>分別設定#sidebar和#primary的背景顏色，以區分顯示的區塊</p>
<img src="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.06.06.00.jpg" alt="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.06.06.00.jpg"/>




<p>說明grid的margin間距設定:<br />由於960gs預設的margin-left和margin-right為5px，所以會造成最左和最右的margin產生不必要的間距</p>
<img src="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.06.09.00.jpg" alt="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.06.09.00.jpg"/>



## 960gs的alpha和omega消除grid的margin間距，小範例結束


<p>將最左和最右的grid，分別設alpha和omega(960gs內建的類別)來解決margin間距的問題</p>
<img src="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.07.52.40.jpg" alt="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.07.52.40.jpg"/>




<p>分別設定grid_6的區塊顏色和高度，以顏色區分各個完成的區塊</p>
<img src="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.08.17.70.jpg" alt="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.08.17.70.jpg"/>




<p>透過這簡單的範例，大家應可了解如何運用960gs來達成區分網頁區塊的效果。接下來剛使將960gs的概念，運用在我們實際要完成的網頁上</p>
<img src="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.08.19.70.jpg" alt="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.08.19.70.jpg"/>



## header、banner、main、siteInfo套用24格線


<p>header區塊設為佔24格的容器</p>
<img src="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.09.43.60.jpg" alt="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.09.43.60.jpg"/>




<p>header、section等區塊，皆設為display:block，以確保該容器內的元素以區塊方法排列</p>
<img src="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.10.35.10.jpg" alt="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.10.35.10.jpg"/>




<p>banner-wrap用來放置背景，需佔滿整個網頁，所以由banner設為24格的大小</p>
<img src="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.11.16.90.jpg" alt="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.11.16.90.jpg"/>




<p>footer區塊的設定，和banner區塊的設定是採用相同的原理</p>
<img src="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.11.25.80.jpg" alt="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.11.25.80.jpg"/>




<p>繼續設定主要區塊的大小為24格，將#main設為24格</p>
<img src="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.11.49.30.jpg" alt="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.11.49.30.jpg"/>




<p>及siteInfo區塊也設為24格，完成了主要區塊(container)的部份</p>
<img src="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.11.59.00.jpg" alt="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.11.59.00.jpg"/>



## main區塊內的#primary和&lt;aside&gt;套用grid


<p>接下來開始設定子區塊的大小(grid)，#main區塊內的#primary設為grid_15</p>
<img src="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.12.34.70.jpg" alt="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.12.34.70.jpg"/>




<p>量測子區塊&lt;aside&gt;所佔格數為9格(左邊佔一個空格，右邊佔8格)</p>
<img src="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.12.52.80.jpg" alt="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.12.52.80.jpg"/>




<p>prefix_1就是佔左邊一個空格的意思</p>
<img src="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.13.23.70.jpg" alt="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.13.23.70.jpg"/>



## &lt;section&gt;、&lt;nav&gt;、&lt;form&gt;套用grid


<p>footer內的3個子區塊，分別設定為8格，加起來為24格</p>
<img src="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.14.06.60.jpg" alt="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.14.06.60.jpg"/>




<p>#siteInfo內的&lt;nav&gt;設為17格，&lt;header&gt;內的&lt;nav&gt;也做相同設定</p>
<img src="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.14.58.90.jpg" alt="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.14.58.90.jpg"/>




<p>將&lt;header&gt;內的搜尋區塊設為佔7格</p>
<img src="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.15.24.30.jpg" alt="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.15.24.30.jpg"/>



## clear:both修正#headSocial的float問題


<p>觀看目前所完成的效果，可看到區塊間的分佈有問題。<br />&lt;banner&gt;區塊內的&quot;WELCOME TO OUR SITE&quot;自動補上來，跑到了&lt;header&gt;區的位置。(這是因為#headSocial的區塊，沒有設定float，因此卡住了Search的位置)</p>
<img src="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.15.28.00.jpg" alt="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.15.28.00.jpg"/>




<p>我們先將#headSocial的排列方式設為絕對位置，來觀看Search區塊的排列</p>
<img src="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.15.46.00.jpg" alt="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.15.46.00.jpg"/>




<p>由此可確定2個問題:<br />1:search的區塊會隨著#headSocial的區塊位置改變而位移<br />2:banner區塊的標題，也會因search區塊的位置改變而位移</p>
<img src="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.15.46.90.jpg" alt="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.15.46.90.jpg"/>




<p>了解問題所在後，先將剛剛為了測試用的absolute的設定取消</p>
<img src="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.15.51.50.jpg" alt="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.15.51.50.jpg"/>




<p>我們要先確定，各個區塊的位置排列是否正確，所以分別在不同的區塊上設置不同的顏色，以便觀察區塊排列</p>
<img src="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.16.26.40.jpg" alt="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.16.26.40.jpg"/>




<p>可以看到應該在header區的search區塊，被綠色的banner區蓋住了</p>
<img src="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.16.28.00.jpg" alt="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.16.28.00.jpg"/>




<p>將#banner設為clear:both，目地是讓#banner區佔滿一整列，左右二邊不得有任何其它區塊</p>
<img src="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.16.43.70.jpg" alt="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.16.43.70.jpg"/>




<p>這樣#banner區就不會蓋到位於header區的Search區塊了</p>
<img src="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.16.48.00.jpg" alt="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.16.48.00.jpg"/>




<p>發現了#siteInfo區塊也有會自動向前補位的位移問題</p>
<img src="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.17.06.00.jpg" alt="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.17.06.00.jpg"/>




<p>解決方法和#banner區的方法一樣，設罝clear:both，來確定該區塊佔滿一整列</p>
<img src="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.17.13.40.jpg" alt="/images/coding-note/html/psd-to-html/04_Integrate the 960 Grid System/04_Integrate the 960 Grid System-0.17.13.40.jpg"/>


