---
layout: post
title: "07_表單樣式"
date: 2016-04-30 14:57:25 +0800
comments: true
categories: ["psd-to-html"]
keywords: "css,psd"
tags: [css,psd]
description: "完成form區塊的輸入欄位、接鈕的樣式設定，及#mainhoo、Sidebar的外距修正。"
demoPic: "/images/coding-note/html/psd-to-html/07_style the form elements/00_demo.jpg"
oriVideo_link: "http://net.tutsplus.com/tutorials/site-builds/convert-a-warm-cheerful-web-design-to-html-and-css/#chapter7"
---
<div id="intro">
    <img src="/images/coding-note/html/psd-to-html/07_style the form elements/00_demo.jpg" class="demo_img" alt="完成form區塊的輸入欄位、接鈕的樣式設定，及#mainhoo、Sidebar的外距修正。">
    <p>完成form區塊的輸入欄位、接鈕的樣式設定，及#mainhoo、Sidebar的外距修正。</p>
</div>
<!--more-->

* list element with functor item
{:toc}
<hr />



## 開始FORM ELEMENTS區塊的CSS修改


<p>之前的課程已經完成了大部份的區塊，接下來， 開始細修小部份的區塊，我們先來修改表格物件的部份。</p>
<img src="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.00.59.27.jpg" alt="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.00.59.27.jpg"/>




<p>本課程一樣會使用web developer來進行css的編輯，因此需先將所有的../img改為img，再複製到web developer之內</p>
<img src="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.01.27.73.jpg" alt="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.01.27.73.jpg"/>



## button、input、textarea的樣式設定(圓角、文字樣式)


<p>先設定按鈕和文字輸入欄位的邊框為圓角</p>
<img src="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.02.01.53.jpg" alt="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.02.01.53.jpg"/>




<p>圓角化後，文字統一為置左對齊</p>
<img src="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.02.37.73.jpg" alt="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.02.37.73.jpg"/>




<p>按鈕和輸入欄位都是需要使用者去點選，因此設定滑鼠移過時鼠標呈現為手型</p>
<img src="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.02.49.20.jpg" alt="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.02.49.20.jpg"/>




<p>按鈕不需要外框線，因此設為border:none</p>
<img src="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.03.11.53.jpg" alt="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.03.11.53.jpg"/>




<p>並設定所有按鈕的顏色為白色、字為粗體、字大小為16px</p>
<img src="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.03.35.80.jpg" alt="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.03.35.80.jpg"/>



## button的背景圖片(png、jpg的差異)


<p>接下來， 設定按鈕的背景，讓我們把背景分為2個部份來觀察，分別為背景顏色(red)、背景材質(img/buttonBg.png透明的顏色因此能搭配不同的背景顏色)</p>
<img src="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.04.09.33.jpg" alt="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.04.09.33.jpg"/>




<p>返回photoshop，量測真正的按鈕背景顏色(f6bc60)</p>
<img src="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.04.22.40.jpg" alt="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.04.22.40.jpg"/>




<p>運行結果， 運用材質背景png的版本就完成了</p>
<img src="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.04.28.00.jpg" alt="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.04.28.00.jpg"/>




<p>但是有的舊瀏灠器不支援png檔時，就得用jpg了，此時你仔細觀察按鈕背景，會發現上端的顏色有點不一樣。先暫時不管jpg的背景問題，之後的課程在解決。</p>
<img src="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.04.47.00.jpg" alt="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.04.47.00.jpg"/>




<p>接下來， 設定按鈕文字的陰影</p>
<img src="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.05.08.20.jpg" alt="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.05.08.20.jpg"/>




<p>希望讓按鈕的字能和邊線保持一點距離，因此設定內距，但卻造成jpg的背景問題更明顯了。</p>
<img src="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.05.29.87.jpg" alt="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.05.29.87.jpg"/>




<p>返回photoshop， 量測比較接近jpg顏色的背景顏色</p>
<img src="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.06.06.00.jpg" alt="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.06.06.00.jpg"/>




<p>是有比較接近，但還是一樣看得出背景有問題。</p>
<img src="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.06.11.13.jpg" alt="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.06.11.13.jpg"/>




<p>因此，我們還是改回用png透明材質的方法。至於如何修正jpg背景圖的方法，之後的課程再介紹。</p>
<img src="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.06.20.47.jpg" alt="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.06.20.47.jpg"/>



## button、input、textarea的樣式設定(寬度、陰影、hover特效、大寫字)


<p>量測文字輸入欄位的背景顏色(#f8eedf)</p>
<img src="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.07.11.07.jpg" alt="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.07.11.07.jpg"/>




<p>設置輸入欄位的背景和邊線</p>
<img src="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.07.27.73.jpg" alt="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.07.27.73.jpg"/>




<p>讓字和框線保持一點距離，設定內距padding</p>
<img src="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.07.38.80.jpg" alt="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.07.38.80.jpg"/>




<p>設定文字顏色為綠色(#247184)</p>
<img src="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.07.46.40.jpg" alt="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.07.46.40.jpg"/>




<p>讓輸入欄位之間保持一點距離，設定下外距margin-bottom</p>
<img src="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.08.01.73.jpg" alt="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.08.01.73.jpg"/>




<p>返回photoshop， 量測文字輸入欄位的寬度(269px)</p>
<img src="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.08.14.67.jpg" alt="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.08.14.67.jpg"/>




<p>因此，設定文字輸入欄的寬度為270px(269px和270差不多)</p>
<img src="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.08.28.67.jpg" alt="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.08.28.67.jpg"/>




<p>#timeScale也是文字輸入欄位，因此寬度同樣設為270px</p>
<img src="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.08.49.93.jpg" alt="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.08.49.93.jpg"/>




<p>寬度設完了，換設高度為130px</p>
<img src="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.09.08.40.jpg" alt="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.09.08.40.jpg"/>




<p>接下來， 我們希望輸入欄位和按鈕在和使用者互動時，能產生些微的陰影效果，設置box-shadow</p>
<img src="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.10.12.80.jpg" alt="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.10.12.80.jpg"/>




<p>設置按鈕當滑鼠滑過時，背景顏色能改變</p>
<img src="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.11.06.00.jpg" alt="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.11.06.00.jpg"/>




<p>再加上png檔透明的材質背景，按鈕滑過的效果就完成了。</p>
<img src="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.11.19.07.jpg" alt="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.11.19.07.jpg"/>




<p>設定按鈕和文字輸入欄位的字，統一為大寫</p>
<img src="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.11.55.93.jpg" alt="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.11.55.93.jpg"/>



## #main和#footer-wrap之間設內距


<p>目前的#main和#footer-wrap間的距離太近了點，想要設一點間距。但設定margin-bottom卻造成背景問題</p>
<img src="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.13.12.47.jpg" alt="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.13.12.47.jpg"/>




<p>改為設定下內距padding-bottom背景就不會有問題了</p>
<img src="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.13.26.73.jpg" alt="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.13.26.73.jpg"/>



## 確保&lt;footer&gt;背景能正確顯示


<p>接下來， 先設定&lt;footer&gt;的背景顏色為紅色，來觀察背景是否有浮動問題。如有問題，設為overflow:hidden就能解決背景問題了。</p>
<img src="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.13.51.07.jpg" alt="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.13.51.07.jpg"/>




<p>確保背景沒問題了，將測試用的紅色背景移除，這樣&lt;footer&gt;的背景就設定完成了。</p>
<img src="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.14.10.80.jpg" alt="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.14.10.80.jpg"/>



## &lt;input&gt;和&lt;button&gt;設外距(margin)，以對齊


<p>較短的文字輸入欄寬度設為117px就好，使其能保持在同一行。並設右外距margin-right來保持間距。</p>
<img src="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.15.27.80.jpg" alt="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.15.27.80.jpg"/>




<p>目前的按鈕和輸入欄位並沒有對齊，設置button的margin-roght:20px，來使之對齊。</p>
<img src="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.15.52.07.jpg" alt="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.15.52.07.jpg"/>



## &lt;input&gt;和&lt;button&gt;滑鼠hover時的背景


<p>滑鼠滑過輸入欄和點選時，輸入欄背景需改變，讓使用者知道目前在操作的輸入欄是哪一個</p>
<img src="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.16.31.87.jpg" alt="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.16.31.87.jpg"/>




<p>其它的輸入欄位也做一樣的背景設定，這樣輸入欄在操作時背景都會改變了。但問題是，目前這樣寫，會連button的背景也一起改變成膚色。</p>
<img src="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.16.48.47.jpg" alt="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.16.48.47.jpg"/>




<p>修正button的背景問題，將button的背景程式碼，給移到最下面，這樣它就會最後才執行，就不會被其它的設定給覆蓋了。</p>
<img src="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.16.59.53.jpg" alt="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.16.59.53.jpg"/>



## Sidebar區塊，&lt;img&gt;和&lt;p&gt;之間的外距(margin)


<p>返回photoshop， 觀察Sidebar區塊，量測&lt;img&gt;和&lt;p&gt;之間的距離為20px</p>
<img src="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.17.59.93.jpg" alt="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.17.59.93.jpg"/>




<p>既然&lt;p&gt;和&lt;img&gt;之間要有間距，那就設margin-top，應該就能產生一點間距了。但是設完了後，發現margin-top並沒有作用，問題是出在哪?</p>
<img src="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.18.12.33.jpg" alt="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.18.12.33.jpg"/>




<p>先將背景給設成紅色，觀察問題是出在哪。結果是因為&lt;img&gt;有設float，造成&lt;p&gt;把&lt;img&gt;給包住了，所以設定&lt;p&gt;的margin-top沒有做用。</p>
<img src="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.18.17.20.jpg" alt="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.18.17.20.jpg"/>




<p>既然&lt;p&gt;設margin-top沒用，那就改設為img設置margin-bottom一樣可達成間隔距離的效果。修改好問題後，再把測試用的紅色的背景給移除掉。</p>
<img src="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.18.26.93.jpg" alt="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.18.26.93.jpg"/>



## 完成了css的設定


<p>完成了所有的部份了!把寫好的css複製，準備移到本機的文字編輯器。</p>
<img src="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.18.48.87.jpg" alt="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.18.48.87.jpg"/>




<p>貼回style.css後，再將所有的img/改為../img/就大功告成了!</p>
<img src="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.18.55.73.jpg" alt="/images/coding-note/html/psd-to-html/07_style the form elements/07_style the form elements-0.18.55.73.jpg"/>


