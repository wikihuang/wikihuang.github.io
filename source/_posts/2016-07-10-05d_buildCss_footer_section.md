---
layout: post
title: "05d_footer"
date: 2016-04-30 14:57:25 +0800
comments: true
categories: ["psd-to-html"]
keywords: "css,psd"
tags: [css,psd]
description: "使用webDeveloper toolbar來完成footer和其子區塊，並運用miscellaneous量測網頁物件是否對齊。"
demoPic: "/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/00_demo.jpg"
oriVideo_link: "http://code.tutsplus.com/tutorials/convert-a-warm-cheerful-web-design-to-html-and-css--net-16799#chapter5d"
---
<div id="intro">
    <img src="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/00_demo.jpg" class="demo_img" alt="使用webDeveloper toolbar來完成footer和其子區塊，並運用miscellaneous量測網頁物件是否對齊。">
    <p>使用webDeveloper toolbar來完成footer和其子區塊，並運用miscellaneous量測網頁物件是否對齊。</p>
</div>
<!--more-->

* list element with functor item
{:toc}
<hr />



## 解說footer區塊


<p>返回photoshop， 解說footer的區塊由3個欄位所組成(GET A FREE QUOTE、RECENTPROJECTS、TWITTER STREAM)</p>
<img src="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.00.46.60.jpg" alt="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.00.46.60.jpg"/>



## web developer toolbar編寫css


<p>此次，我們使用web developer toolbar來編寫css，好處是可以即時預覽所編寫的css</p>
<img src="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.01.13.40.jpg" alt="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.01.13.40.jpg"/>




<p>我們可用firefox來下載Web Developer這一套外掛，安裝完畢後，可至View/Toolbars/Web developer Toolbar來使用其功能</p>
<img src="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.01.32.20.jpg" alt="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.01.32.20.jpg"/>




<p>Web developer Toolbar提供了許多編寫網頁時，常用到的功能。例如disable javascript、編寫css、尺規等等</p>
<img src="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.01.43.40.jpg" alt="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.01.43.40.jpg"/>




<p>要特別注意的一點是，在Edit CSS的模式中，所有的圖片位置需加以修改，如:url(../img/bg.jpg)需改為url(img/bg.jpg)，不然圖片會無法顯示。</p>
<img src="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.02.08.00.jpg" alt="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.02.08.00.jpg"/>




<p>改成url(img/bg.jpg)，圖片就可正常顯示了。接下來需將其它圖片的位置也一起修改</p>
<img src="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.02.21.90.jpg" alt="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.02.21.90.jpg"/>




<p>在文字編輯器中，利用搜尋的功能，將所有的../img/取代為img/</p>
<img src="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.02.49.50.jpg" alt="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.02.49.50.jpg"/>



## #footer-wrap的背景和框線


<p>圖片都正常出現了，接下來， 開始寫FOOTER的部份</p>
<img src="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.03.07.00.jpg" alt="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.03.07.00.jpg"/>




<p>footer區塊的寫法和之前所教的banner區塊的寫法是一樣的，一樣分為放背景和放內容的2大區塊。<br />footer-wrap放背景、&lt;footer&gt;放入24格的內容</p>
<img src="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.03.45.20.jpg" alt="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.03.45.20.jpg"/>




<p>#footer-wrap放入背景的圖片bannerInnerBg.jpg，且為了防此子容器的浮動，造成背景問題，設overflow:hidden</p>
<img src="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.04.34.20.jpg" alt="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.04.34.20.jpg"/>




<p>返回photoshop， 量測邊線的顏色(#8e786e)</p>
<img src="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.04.52.10.jpg" alt="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.04.52.10.jpg"/>




<p>設置上邊線border-top的樣式</p>
<img src="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.05.01.00.jpg" alt="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.05.01.00.jpg"/>




<p>返回photoshop， 發現上邊線的上面還有一條邊線，顏色為#3a2c25</p>
<img src="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.05.18.50.jpg" alt="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.05.18.50.jpg"/>




<p>使用擬元素(::before)，在#footer-wrap之前加入一個空的內容，並設置一個紅色的邊線</p>
<img src="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.06.02.90.jpg" alt="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.06.02.90.jpg"/>




<p>將#footer-wrap的外邊線設為綠色，而利用擬元素::before產生的邊線設為紅色，就會呈現雙外邊線的效果。</p>
<img src="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.06.12.70.jpg" alt="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.06.12.70.jpg"/>




<p>返回photoshop， 量測位於下端邊線的顏色(#8e786e)</p>
<img src="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.06.18.50.jpg" alt="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.06.18.50.jpg"/>




<p>分別填入2個上邊線的顏色，完成了雙上邊線的效果。</p>
<img src="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.06.25.60.jpg" alt="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.06.25.60.jpg"/>




<p>footer的上下內距設為50px，以便和內部的區塊留點距離。</p>
<img src="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.07.09.00.jpg" alt="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.07.09.00.jpg"/>




<p>內部的按鈕統一設為向右浮動排列</p>
<img src="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.07.26.60.jpg" alt="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.07.26.60.jpg"/>



## Recent Project區塊


<p>開始設定Recent Project的區塊</p>
<img src="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.07.37.00.jpg" alt="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.07.37.00.jpg"/>




<p>#recentProjects由4個&lt;li&gt;所組成，<br />設為向左浮動排列，<br />為了使4個&lt;li&gt;有間隔，設其右外距、下外距為20px，<br />內距設為3px，是為了讓黃色背景能夠稍稍顯現，達成黃色邊框的效果。</p>
<img src="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.07.39.00.jpg" alt="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.07.39.00.jpg"/>




<p>此外，當滑鼠滑過時背景需改變、且產生一外框線outline，來造成視覺回饋。</p>
<img src="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.09.10.00.jpg" alt="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.09.10.00.jpg"/>




<p>button的右外距設為40px，好讓#recenProjects內的物件可以對齊</p>
<img src="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.09.40.10.jpg" alt="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.09.40.10.jpg"/>




<p>使用webdeveloper tools的Miscellaneous來量測網頁元件是否對齊</p>
<img src="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.09.52.00.jpg" alt="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.09.52.00.jpg"/>



## Twitter區塊


<p>開始寫Twitter的部份</p>
<img src="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.10.13.00.jpg" alt="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.10.13.00.jpg"/>




<p>我們希望文字段落&lt;p&gt;之內的&lt;span&gt;可以獨立為一行，不要和其它文字擠在一起，所以設為區塊式排列display:block</p>
<img src="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.10.41.30.jpg" alt="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.10.41.30.jpg"/>




<p>超連結&lt;span&gt;和&lt;a&gt;的顏色都設為綠色，也一起設為區塊式排列。顏色是設好了，但這卻會造成&lt;a&gt;也獨立為一行了，我們希望的效果是&lt;span&gt;&lt;a&gt;&lt;/a&gt;&lt;/span&gt;內的所有文字都能獨立為一行。</p>
<img src="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.11.12.10.jpg" alt="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.11.12.10.jpg"/>




<p>因此修改#twitter內的&lt;a&gt;為同一行排列(display:inline)的方式，這樣&lt;span&gt;&lt;a&gt;&lt;/a&gt;&lt;/span&gt;內的文字才能保持同一行。</p>
<img src="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.11.27.10.jpg" alt="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.11.27.10.jpg"/>




<p>最後，將&lt;span&gt;和&lt;a&gt;的字型設為斜體，完成了Twitter的部份</p>
<img src="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.11.39.00.jpg" alt="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.11.39.00.jpg"/>



## Site info區塊


<p>最後，為Site Info的部份</p>
<img src="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.12.15.00.jpg" alt="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.12.15.00.jpg"/>




<p>先設置背景</p>
<img src="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.12.45.10.jpg" alt="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.12.45.10.jpg"/>




<p>#siteInfo的高度限制在50px，行高(line-height)也為50，字為白色，為防止浮動所造成背景問題，設overflow:hidden</p>
<img src="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.13.30.30.jpg" alt="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.13.30.30.jpg"/>




<p>Site Info是由&lt;p&gt;Copyright&lt;/p&gt;和&lt;nav&gt;&lt;/nav&gt;二大區塊組成，設置&lt;nav&gt;為向右浮動排列。讓&lt;p&gt;和&lt;nav&gt;一左一右排列。</p>
<img src="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.13.54.80.jpg" alt="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.13.54.80.jpg"/>




<p>&lt;nav&gt;內的5個&lt;li&gt;元件(&lt;li&gt;HOME&lt;li&gt;、&lt;li&gt;ABOUT&lt;li&gt;、等)設為向左排列</p>
<img src="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.14.08.20.jpg" alt="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.14.08.20.jpg"/>




<p>#siteInfo的行高(line-height)雖然有設定line-height:50px，但是沒有作用，&lt;p&gt;Copy Right--WebsiteName--All rights Reserved&lt;/p&gt;並沒有移到指定的行高位置，這是為何?<br />這是因為&lt;p&gt;在先前設定全域的css時，已被設為其它的值了</p>
<img src="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.14.25.00.jpg" alt="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.14.25.00.jpg"/>




<p>因此，要設定#siteInfo內的&lt;p&gt;的行高，就必需再度在此區塊內再設定一次，如下圖，就可看到&lt;p&gt;移到指定的行高了。Copyright區塊設定完畢。</p>
<img src="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.14.26.90.jpg" alt="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.14.26.90.jpg"/>




<p>繼續設定&lt;nav&gt;的區塊，設定&lt;nav&gt;的超連結顏色為白色</p>
<img src="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.14.41.20.jpg" alt="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.14.41.20.jpg"/>




<p>返回photoshop， 可看到每個連結之間，都有一條白色直線做區分。</p>
<img src="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.14.55.00.jpg" alt="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.14.55.00.jpg"/>




<p>運用之前所教的擬元素的用法(:before)，來在每個&lt;li&gt;之前加入白色的分隔線。可看到分隔線都出現了，但是第一個&lt;li&gt;我們並不需要分隔線</p>
<img src="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.15.30.70.jpg" alt="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.15.30.70.jpg"/>




<p>因此，將第一個&lt;li&gt;之前的分隔線設為無(conent:&#x27; &#x27;)，就不會產生多餘的分隔線了。</p>
<img src="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.16.11.00.jpg" alt="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.16.11.00.jpg"/>




<p>最後，是字的陰影設定，我們將所有#siteInfo區塊的陰影統一設在#siteInfo內。這樣其它重複的陰影設定就可以移除了。</p>
<img src="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.16.21.00.jpg" alt="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.16.21.00.jpg"/>



## css編寫完後的注意事項


<p>大功告成!複製所有在web developer toolbar內編寫完成的css，準備貼回本機端的文字檔</p>
<img src="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.17.04.10.jpg" alt="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.17.04.10.jpg"/>




<p>貼回文字編輯器後，記得將所有的img/改為../img/</p>
<img src="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.17.16.00.jpg" alt="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.17.16.00.jpg"/>




<p>運行結果， 再次使用web developer toolbar，觀察物件間是否對齊</p>
<img src="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.17.48.50.jpg" alt="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.17.48.50.jpg"/>




<p>目前已經完成了一個基本的網頁了，但如果希望在各種不同的平台上(電腦、手機、平板)都能方便的瀏灠，網頁需能自動調整成適合寬螢幕和窄螢幕的設定。</p>
<img src="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.17.59.00.jpg" alt="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.17.59.00.jpg"/>




<p>如果想要了解如何讓網頁自動調整大小，可至CSS-TRICKS網頁，來觀察它的效果</p>
<img src="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.18.37.70.jpg" alt="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.18.37.70.jpg"/>




<p>試著改變視窗的大小，可以發現網頁的排列，會因視窗大小而自動改變排列的方式。</p>
<img src="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.18.44.90.jpg" alt="/images/coding-note/html/psd-to-html/05d_buildCss_footer_section/05d_buildCss_footer_section-0.18.44.90.jpg"/>


