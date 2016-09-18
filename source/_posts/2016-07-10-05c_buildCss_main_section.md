---
layout: post
title: "05c_main"
date: 2016-04-30 14:57:25 +0800
comments: true
categories: ["psd-to-html"]
keywords: "css,psd"
tags: [css,psd]
description: "逐一完成main區塊內的多個子區塊(#primary,#sidebar等等)。並了解如何量測psd來輸入多重漸層背景數值，並了解如何精簡css，css的優先權設定"
demoPic: "/images/coding-note/html/psd-to-html/05c_buildCss_main_section/00_demo.jpg"
oriVideo_link: "http://code.tutsplus.com/tutorials/convert-a-warm-cheerful-web-design-to-html-and-css--net-16799#chapter5c"
---
<div id="intro">
    <img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/00_demo.jpg" class="demo_img" alt="逐一完成main區塊內的多個子區塊(#primary,#sidebar等等)。並了解如何量測psd來輸入多重漸層背景數值，並了解如何精簡css，css的優先權設定">
    <p>逐一完成main區塊內的多個子區塊(#primary,#sidebar等等)。並了解如何量測psd來輸入多重漸層背景數值，並了解如何精簡css，css的優先權設定</p>
</div>
<!--more-->

* list element with functor item
{:toc}
<hr />



## 透過搜尋，跳到指定的註解


<p>接下來開始準備寫MAIN的部份了，因此寫入MAIN的標記</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.01.09.00.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.01.09.00.jpg"/>




<p>現在就可以看得出我們之前替每個css區塊做標記的效果了，舉例來說，當你想要跳至BANNER區塊時，只要搜尋-BANNER就會跳至指定的位置。如此一來，你就不用擔心當你css愈寫愈多時，找不到你所要尋找的區塊在哪裡</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.01.19.07.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.01.19.07.jpg"/>



## #main和banner的內距(padding)


<p>開始寫#main的部份，為了和標題間留點間隔，我們將其內距上端(padding-top)設為50px</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.01.50.07.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.01.50.07.jpg"/>




<p>回到photoshop，觀察原圖，可看到原圖的標題也有保留內距</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.01.52.33.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.01.52.33.jpg"/>



## #main的漸層背景


<p>並且解說#main的背景是由漸層組成的</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.01.58.47.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.01.58.47.jpg"/>




<p>因此我們開始逐步進行背景漸層的設定</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.03.10.73.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.03.10.73.jpg"/>




<p>先量測psd檔中的#main背景顏色，可量測出顏色為#f8eedf</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.03.22.07.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.03.22.07.jpg"/>




<p>讓我們先試試看漸層的效果，先任意填入漸層右端的顏色為紅色</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.03.31.07.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.03.31.07.jpg"/>




<p>運行結果，可看到是有漸層的效果了。但因為子容器浮動(float)的原因，父容器的背景會被子容器蓋住</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.03.34.53.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.03.34.53.jpg"/>




<p>因此，需設定#main層的overflow:hidden</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.03.57.53.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.03.57.53.jpg"/>




<p>運行結果，可看到背景正常顯示了。</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.03.59.27.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.03.59.27.jpg"/>




<p>確定漸層成功後，開始量測真正的漸層顏色。先量測位於右側的漸層顏色(#eeddc6)</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.04.15.93.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.04.15.93.jpg"/>




<p>並將此顏色(#eeddc6)，填入右側的漸層</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.04.28.87.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.04.28.87.jpg"/>




<p>運行結果，漸層成功了。但是漸層顏色的比例不大正確，psd的原圖左右二個欄位的顏色區分是很明顯的。</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.04.32.87.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.04.32.87.jpg"/>




<p>所以要如何調整左右漸層所佔的比例呢?<br />左欄所佔的比例為63.5%(因為左欄的寬度為609px，609/960=0.635)<br />右欄的顏色從63.6%處開始設置</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.04.54.53.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.04.54.53.jpg"/>




<p>運行結果，可看到左右欄位的漸層有明顯的區分了</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.04.57.67.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.04.57.67.jpg"/>




<p>回到photoshop，觀察原圖，可看到左欄位的邊框線也是有顏色的(#fff7ea)</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.05.35.07.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.05.35.07.jpg"/>




<p>因此設置左欄的框線顏色(#fff7ea)和位置(63.6%)</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.05.42.60.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.05.42.60.jpg"/>




<p>回到photoshop，觀察原圖，右欄位也是有框線顏色的(#dfcdb2)</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.05.46.87.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.05.46.87.jpg"/>




<p>因此設置右欄的框線顏色(#dfcdb2)和位置(63.7%)</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.05.51.33.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.05.51.33.jpg"/>




<p>因設置了邊框的漸層，所以右欄的漸層也往後調整位置(63.8%)</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.05.54.53.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.05.54.53.jpg"/>




<p>運行結果，漸層幾乎都設好了，只是邊框顏色有點太明顯了一點，應調整漸層位置，使之看起來平滑一點</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.06.00.73.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.06.00.73.jpg"/>




<p>將左右欄的邊框都設在相同位置(63.6%)</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.06.07.33.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.06.07.33.jpg"/>




<p>運行結果，可看到邊框沒這麼明顯了</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.06.09.87.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.06.09.87.jpg"/>




<p>回到photoshop，量測右欄最右邊的漸層顏色(#f8eedf)</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.06.53.47.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.06.53.47.jpg"/>




<p>剛好和最左邊的漸層顏色一樣(#f8eedf)</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.07.01.13.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.07.01.13.jpg"/>




<p>因此最右側的漸層，就設為#f8eedf</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.07.12.53.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.07.12.53.jpg"/>




<p>運行結果，漸層完全設置好了</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.07.28.73.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.07.28.73.jpg"/>




<p>漸層確定設好後，要確保其它瀏灠器也可以運行漸層功能，所以依序寫入其它瀏灠器的寫法，漸層部份就此大功告成</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.07.57.53.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.07.57.53.jpg"/>



## #main &lt;article


<p>接下來，來處理#main區的&lt;article&gt;部份，為了不要跟右側的欄位過於接近，要在右方留點空間，所以設右內距為50px</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.08.43.00.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.08.43.00.jpg"/>




<p>運行結果，可看到&lt;article&gt;就會和右方欄有些間隔了</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.08.45.00.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.08.45.00.jpg"/>




<p>圖片需和左右對齊，且和其下方文字的間距也要留點間距，所以設margin:0 0 10px</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.09.10.87.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.09.10.87.jpg"/>




<p>運行結果，圖片成功和下方文字產生適當的間距</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.09.17.60.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.09.17.60.jpg"/>




<p>&lt;article&gt;的&lt;h2&gt;標題，需和其下方的&lt;h6&gt;標題貼齊，因此設margin-bottom:0，且不需設為粗體，因此設font-weight:normal</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.09.38.00.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.09.38.00.jpg"/>




<p>想讓滑鼠滑過&lt;h2&gt;標題時，讓底線消失，且設為粗體</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.09.52.53.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.09.52.53.jpg"/>




<p>但是超連結滑過的動作，不應由&lt;h2&gt;負責，應由其內部的子元件&lt;a&gt;來負責</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.09.57.73.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.09.57.73.jpg"/>




<p>運行結果，完成了滑鼠滑過具超連結功能的標題時，標題粗體化的功能</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.09.59.60.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.09.59.60.jpg"/>




<p>大標題&lt;h2&gt;下方的子標題&lt;h6&gt;，分別設定其顏色和斜體</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.10.52.53.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.10.52.53.jpg"/>




<p>運行結果，完成了子標題&lt;h6&gt;的設定。&lt;article&gt;區塊的標題和文字設定完成</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.10.55.13.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.10.55.13.jpg"/>



## SIDEBAR區塊


<p>在psd檔中，解說SIDEBAR區塊的頁籤區塊。設明這一個部份必需考慮到有無啟用javascript時，需套用不同的設計</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.11.16.33.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.11.16.33.jpg"/>




<p>開始了SIDEBAR的部份</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.11.35.53.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.11.35.53.jpg"/>




<p>右側欄SIDEBAR是由3個section所組成的，為了必免浮動造成位置亂跑，所以設clear:both。<br />先設置背景為紅色來觀察其排列方式。<br />3個section需有間距，設置margin-bottom:40px</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.12.03.00.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.12.03.00.jpg"/>




<p>運行結果，可看到SIDEBAR內的&lt;section&gt;位置分佈</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.12.09.47.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.12.09.47.jpg"/>




<p>設置section的img為向左浮動排列</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.12.44.53.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.12.44.53.jpg"/>




<p>運行結果，可看到SPONSORS區內的那2張代表圖片的文字，變成向左浮動排列了</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.12.46.93.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.12.46.93.jpg"/>




<p>確定圖片可向左浮動排列後，加入其圖片的位置</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.13.15.53.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.13.15.53.jpg"/>




<p>運行結果，圖片成功顯示</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.13.18.33.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.13.18.33.jpg"/>



## TABS區塊


<p>接下來為TABS的部份(點選頁籤後，所顯示的欄位區塊)</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.13.52.27.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.13.52.27.jpg"/>




<p>由於父容器&lt;section class=&quot;tabs&quot;&gt;，內會含有子容器&lt;ul&gt;，為防止浮動溢位的問題造成背景無法正常顯示，設其overflow:hidden</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.13.58.40.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.13.58.40.jpg"/>




<p>剛剛設背景為紅色只是為了測試用的而已，現在用不到了，移除這一段紅色背景的設定，並設定好.tabs的背景顏色</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.14.29.00.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.14.29.00.jpg"/>




<p>運行結果，.tabs區塊的背景成功設置了</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.14.31.67.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.14.31.67.jpg"/>




<p>回到photoshop中，觀察.tabs區塊的樣式設定，發現其背景為漸層、邊框有圓角、且和最下方的邊線間有一定的間隔距離</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.14.39.93.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.14.39.93.jpg"/>




<p>因此依序設其漸層背景、圓角、及下方內距</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.15.17.53.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.15.17.53.jpg"/>




<p>運行結果，.tabs區塊成功設置了圓角、漸層背景和下方內距</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.15.21.73.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.15.21.73.jpg"/>




<p>#tabHeadings(頁籤標題列)用來放置切換tab的連結，<br />為了讓內部的元件以區塊式來排列，設display:block;<br />想和下方的.tabf區塊沒有間隔，設margin-bottom:0;<br />設置不同瀏灠器的左上、右上的圓角;<br />overflow先設為visible，觀察背景是否會有問題;<br />最後，設其下框線和背景顏色</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.17.01.53.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.17.01.53.jpg"/>




<p>#tabHeadings 內的&lt;li&gt;，是提供給使用者點選用的，所以需設定選取(selected)、滑過(hover)的視覺回饋。因此設定不同的背景顏色和位移。</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.17.18.27.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.17.18.27.jpg"/>




<p>運行結果，完成了滑鼠滑過時的視覺回饋</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.17.23.60.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.17.23.60.jpg"/>




<p>但不只滑鼠滑過需要視覺回饋，目前是哪一個&lt;li&gt;被點選也需讓使用者知道，所以增加一個selected的類別，運用在目前被點選的&lt;li&gt;上(預設為第一個&lt;li&gt;被點選)</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.17.41.53.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.17.41.53.jpg"/>




<p>運行結果，完成了第一個&lt;li&gt;被點選的視覺效果。但是目前的樣式並不美觀，需修改其排列、寬度等設定。使其成為更容易操作的頁籤標題列。</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.17.50.87.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.17.50.87.jpg"/>




<p>將點選用的頁籤標題&lt;li&gt;，設為向左浮動排列、寬度為83px、文字置中、鼠標滑過時需變成手形(pointer)、內距為10px</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.18.15.53.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.18.15.53.jpg"/>




<p>運行結果，可看到較美觀的頁籤標題了，但其文字顏色和背景仍需加以修改</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.18.20.53.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.18.20.53.jpg"/>




<p>設置超連結頁籤標題顏色為白色</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.18.57.13.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.18.57.13.jpg"/>




<p>運行結果，超連結的字被設為白色了，但是很明顯的頁籤標題列的背景有問題。</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.18.58.20.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.18.58.20.jpg"/>




<p>返回photoshop中，可看到理想的頁籤標題列背景顏色應為黑色，但為何頁籤標題列(#tabHeadings)的背景會不見呢?</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.19.04.33.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.19.04.33.jpg"/>




<p>因為其overflow不應設為visible，應該設為hidden才能讓身為父容器的#tabHeadings的背景正確出現，不被其子容器的背景顏色蓋掉。</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.19.13.33.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.19.13.33.jpg"/>




<p>運行結果，頁籤標題列的樣式設定完成。</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.19.16.53.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.19.16.53.jpg"/>




<p>接下來，設定頁籤頁(.tab)，內的&lt;ul&gt;的樣式。<br />設定padding使其內部的文字和邊框留點距離。<br />margin-bottom設為0，使&lt;ul&gt;能緊緊的靠在一起，不留間距。<br />border-top，設置其上邊線樣式</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.19.39.53.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.19.39.53.jpg"/>




<p>我們來觀察看看，如果margin-bottom不設為0，會有什麼影響</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.19.46.80.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.19.46.80.jpg"/>




<p>運行結果，可看到標題和&lt;ul&gt;會產生不必要的間距</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.19.48.40.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.19.48.40.jpg"/>




<p>先將上邊線設為紅色，來觀察上邊線的位置是在哪裡</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.19.56.00.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.19.56.00.jpg"/>




<p>運行結果，看到了上邊線的位置了</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.19.58.47.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.19.58.47.jpg"/>




<p>觀察完畢，將邊線顏色套用至原先的設定。完成了頁籤區塊的排列樣式，但是文字的樣式尚未設定喔。</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.20.03.13.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.20.03.13.jpg"/>




<p>返回photoshop，觀察Comments區塊的樣式，可發現有邊線、白色字、超連結用的標題</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.20.05.60.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.20.05.60.jpg"/>



## COMMENTS區塊


<p>開始COMMENTS的部份</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.20.11.93.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.20.11.93.jpg"/>




<p>分別設定&lt;li&gt;的下邊線、上邊線、內距、字顏色</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.20.14.53.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.20.14.53.jpg"/>




<p>運行結果，可發現第一個上邊線和最後一個下邊線，產生了重複的邊線</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.20.24.40.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.20.24.40.jpg"/>




<p>所以設定最後一個和第一個&lt;li&gt;的邊線為無</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.21.11.53.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.21.11.53.jpg"/>




<p>運行結果，可看到重複的邊線被成功移除了</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.21.19.60.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.21.19.60.jpg"/>




<p>在&lt;footer&gt;內的&lt;h6&gt;加入超連結</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.21.47.53.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.21.47.53.jpg"/>




<p>運行結果 ，標題的超連結是出現了，但還需設定該&lt;h6&gt;的樣式</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.21.51.00.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.21.51.00.jpg"/>




<p>&lt;h6&gt;需和&lt;li&gt;的下邊線切齊，不留任何間隔，所以設margin-bottom:0;<br />字顏色設白色;<br />不需設為粗體且字大小設為10px，才不會因字太大而分為二行;<br />margin-top設為-13，是為了和上端的&lt;p&gt;靠近，以下會解釋為何這麼做<br /></p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.21.55.53.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.21.55.53.jpg"/>




<p>在firebug中，檢查&lt;p&gt;的邊距設定，可發現預設中&lt;p&gt;的下內距為20px，也因此會產生不必要的間隔。<br />如果將&lt;p&gt;的下內距改為0px，當然也可以解決&lt;p&gt;和&lt;h6&gt;間的間距問題，但這樣改的話，又得要判斷是哪一個&lt;p&gt;需做此設定，所以與其修改&lt;p&gt;，不如直接將&lt;h6&gt;的margin-top設為-13</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.22.34.00.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.22.34.00.jpg"/>




<p>所以這就是為何要將&lt;h6&gt;設為margin-top:-13px的原因</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.22.51.13.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.22.51.13.jpg"/>




<p>運行結果 ，完成了Comments的超連結標題設定</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.22.52.87.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.22.52.87.jpg"/>



## .tabList li的框線設定


<p>接下來， 觀察CATEGORIES和ARCHIVES這二個區塊，可發現它們的共通點，都是清單的形式</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.23.00.00.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.23.00.00.jpg"/>




<p>所以，有關CATEGORIES和ARCHIVES這二個區塊的樣式，都統一設定在#secondary .tabList</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.23.19.53.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.23.19.53.jpg"/>




<p>返回html中，將categories加入樣式tabList</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.23.31.93.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.23.31.93.jpg"/>




<p>archives也同樣加入樣式tabList</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.23.36.53.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.23.36.53.jpg"/>




<p>.tabList內的&lt;li&gt;以區塊式排列、設定上下邊線、內距為10px</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.23.43.27.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.23.43.27.jpg"/>




<p>運行結果， &lt;li&gt;的樣式較清楚了，但有2個問題:<br />1:第一和最後一個&lt;li&gt;有多餘的邊線<br />2:滑鼠移過超連結時，鼠標應呈現手形</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.23.49.80.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.23.49.80.jpg"/>




<p>因此，將&lt;li&gt;滑過時的鼠標設為手形，第一個&lt;li&gt;上邊線和最後一個&lt;li&gt;的下邊線設為無</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.23.54.53.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.23.54.53.jpg"/>



## css屬性重覆時，優先權設定


<p>此時，理論上第一個&lt;li&gt;的border-top和最後一個&lt;li&gt;的border-bottom應該能成功的移除才對</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.24.04.53.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.24.04.53.jpg"/>




<p>運行結果， 但是border-top和border-bottom的邊線仍然存在，剛才的設定並沒有成功，這是為什麼呢?</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.24.14.53.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.24.14.53.jpg"/>




<p>這是因為優先權的原因，css設定屬性時，id名稱屬性的會比類別屬性的優先設定。所以.tabList會被#secondary .tabList給取代掉。如果不想被取代，那就將.tabList改寫為#secondary .tabList</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.24.54.93.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.24.54.93.jpg"/>




<p>運行結果，重覆的上下邊線成功的移除了</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.24.56.40.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.24.56.40.jpg"/>




<p>如果只是要單純的測試是否為優先權問題，可直接在後寫入!important，就可將優先權設為最高。</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.25.01.53.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.25.01.53.jpg"/>




<p>運行結果， 一樣能解決了優先權問題，上下邊線成功移除。</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.25.02.60.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.25.02.60.jpg"/>




<p>為了避免id屬性的#secondary優先權太高而取代了其他設定，也可將#secondary直接移除掉，讓優先權一致</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.25.09.27.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.25.09.27.jpg"/>




<p>運行結果，上下邊線一樣可成功移除， 優先權的問題解決了。</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.25.11.40.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.25.11.40.jpg"/>



## 簡化css，合併用法相近的css


<p>觀察#comments li和.tabList li，所寫的樣式相當的類似，所以保留.tabList li的設定就好，把#commments li給移除。</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.25.27.53.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.25.27.53.jpg"/>




<p>因為#commments li被移除了，所以要讓#comments套用新的樣式tabList</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.25.51.53.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.25.51.53.jpg"/>




<p>運行結果， Comments的樣式大都維持原樣，只是原本的字是白色的，套用了.tabList的樣式後，變成了黑色，所以還需加以設定字的顏色</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.25.53.13.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.25.53.13.jpg"/>




<p>在.tabList li的樣式中，加入了字為白色的設定</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.25.59.60.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.25.59.60.jpg"/>




<p>運行結果， Comments的樣式設定成功</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.26.00.73.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.26.00.73.jpg"/>




<p>我們來觀察&lt;section&gt;內的&lt;ul&gt;所套用的樣式，發現都是使用tabList</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.26.14.47.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.26.14.47.jpg"/>




<p>既然重複用了許多的tabList，那還不如將樣式統一為.tabs &gt;ul</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.26.35.60.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.26.35.60.jpg"/>




<p>因此，將所用原先寫為.tabList li的改為.tabs &gt;ul li</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.26.38.53.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.26.38.53.jpg"/>




<p>運行結果， 得到了一樣的效果，但是卻減少了許多重複的程式碼，使css更加簡潔</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.27.50.33.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.27.50.33.jpg"/>




<p>接下來， 我們希望滑鼠滑過&lt;li&gt;時，背景有些變動，讓使用者知道目前他滑動到哪一個&lt;li&gt;</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.27.56.53.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.27.56.53.jpg"/>




<p>運行結果， 滑鼠經過時，背景成功改變了</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.28.00.33.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.28.00.33.jpg"/>




<p>但目前的.tabs li:hover會套用到全部的&lt;li&gt;，如果你並不想讓Comments的&lt;li&gt;也一起套用這滑鼠滑過的背景設定的話，需指定特定的&lt;li&gt;不需套用相同的設定</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.28.04.87.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.28.04.87.jpg"/>




<p>指定.tab內的第一個&lt;li&gt;滑鼠滑過時，背景不要變</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.28.18.53.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.28.18.53.jpg"/>




<p>指定.tab內的第一個&lt;ul&gt;內的所有&lt;li&gt;滑鼠滑過時，背景不要變</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.28.33.53.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.28.33.53.jpg"/>




<p>運行結果， Comments的所有&lt;li&gt;，滑鼠滑過時，背景就不會變動了</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.28.35.40.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.28.35.40.jpg"/>




<p>當然，剛才只是在教各位如何限定特定&lt;li&gt;的背景特效。在此範例中，所有的&lt;li&gt;在滑鼠滑過時，背景產生變動並無影響，所以我們將限定特定&lt;li&gt;的背景特效的效果給移除掉。&lt;li&gt;背景特效的部份到此設定完成。</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.28.39.07.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.28.39.07.jpg"/>



## #category、#archieve、.tabs樣式設定


<p>接下來， 我們來觀察&lt;ul id =&quot;categories&quot; &gt;，預設的&lt;ul&gt;左右內距為20px，這會造成多餘的內距，所以將左右內距設為0px較好。</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.29.01.53.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.29.01.53.jpg"/>




<p>由於#categories和#archieves都是一樣的清單樣式，所以同樣設定左右內距為0px</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.29.33.53.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.29.33.53.jpg"/>




<p>.tabs內的超連結顏色設為白色</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.30.21.20.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.30.21.20.jpg"/>




<p>運行結果， 超連結成功設為白色了，但是滑鼠移過時，預設會產生底線</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.30.24.80.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.30.24.80.jpg"/>




<p>不希望滑鼠滑過時產生底線，因此將text-decoration設為none</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.30.33.20.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.30.33.20.jpg"/>




<p>返回photoshop，可發現我們已經完成了此頁籤頁(.tab)的所有樣式設定，剩下的部份就只有運用javascript的功能，讓使用者點選頁籤標題時，能切換所需顯示的部份而已。</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.30.38.53.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.30.38.53.jpg"/>




<p>此外，仍需考慮使用者的流灠器是否支援javascript，javascript的支援與否，會決定html的顯示方示。<br />當有支援javascript時，頁籤標題可供點選，所以&lt;ul&gt;內的&lt;h4&gt;不需顯示，需設為display:none。<br />不支援javascript時，頁籤標題就不能點選了，沒有了頁籤標題，&lt;ul&gt;內的&lt;h4&gt;就需顯示。</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.31.12.27.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.31.12.27.jpg"/>




<p>運行結果， 觀察我們已經完成的部份，我們已完成了&lt;header&gt;、&lt;banner&gt;、#main的&lt;article&gt;和tab的部份。</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.31.28.20.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.31.28.20.jpg"/>




<p>接下來， 來處理SPONSORS的部份，二張圖片不需靠這麼緊，設為左右排列較美觀，而且應加外框線。</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.32.10.73.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.32.10.73.jpg"/>



## SPONSOR區塊


<p>開始寫SPOONSORS的css</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.32.26.13.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.32.26.13.jpg"/>




<p>#sponsors內有2個&lt;li&gt;，將第2個&lt;li&gt;設為右浮動排列</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.32.30.33.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.32.30.33.jpg"/>




<p>運行結果， 第2個&lt;li&gt;的圖片向右排列了。完成了圖片一左一右的效果。</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.32.31.87.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.32.31.87.jpg"/>




<p>寫入圖片外框線的樣式</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.33.02.53.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.33.02.53.jpg"/>




<p>運行結果， 外框線成功顯示了</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.33.03.13.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.33.03.13.jpg"/>




<p>但我們希望#secondary內的所有&lt;img&gt;都能有外框線效果，所以改成#secondary img</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.33.27.53.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.33.27.53.jpg"/>




<p>加入陰影的效果</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.33.51.53.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.33.51.53.jpg"/>




<p>運行結果， 邊框和陰影都出現了，但是陰影的顏色太深了一些</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.33.57.93.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.33.57.93.jpg"/>




<p>返回photoshop， 量測邊框中的顏色(#febf5d)</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.34.01.00.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.34.01.00.jpg"/>




<p>再選擇顏色較深的部份(#fdb84d)來做為陰影的顏色</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.34.03.93.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.34.03.93.jpg"/>




<p>運行結果， 邊框的陰影柔和多了，邊框效果完成。</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.34.06.47.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.34.06.47.jpg"/>




<p>返回photoshop， #main的效果幾乎都完成了，只剩下超連結的顏色需要設定綠色和粗體</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.34.47.27.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.34.47.27.jpg"/>




<p>設定#main內&lt;p&gt;區塊內的超連結，顏色為線色且為粗體</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.35.28.73.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.35.28.73.jpg"/>




<p>運行結果，超連結設定完成，完成了#main的所有部份</p>
<img src="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.35.31.33.jpg" alt="/images/coding-note/html/psd-to-html/05c_buildCss_main_section/05c_buildCss_main_section-0.35.31.33.jpg"/>


