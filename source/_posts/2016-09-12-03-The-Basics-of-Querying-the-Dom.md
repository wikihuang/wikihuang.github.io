---
layout: post
title: "2.3_基本的DOM元素選取法"
date: 2016-09-12 10:00:00 +0800
comments: true
categories: [jQuery-30day]
keywords: "dom,children,eq,parent"
tags: [dom,children,eq,parent]
description: "分別介紹如何使用children()、eq()、next()、prev()來選取元素;及parent()和closest()的不同處。"
demoPic: "/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/00_demo.jpg"
oriVideo_link: "https://tutsplus.com/lesson/the-basics-of-querying-the-dom/"
---
<div id="intro">
    <img src="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/00_demo.jpg" class="demo_img" alt="分別介紹如何使用children()、eq()、next()、prev()來選取元素;及parent()和closest()的不同處。">
    <p>分別介紹如何使用children()、eq()、next()、prev()來選取元素;及parent()和closest()的不同處。</p>
</div>
<!--more-->

* list element with functor item
{:toc}
<hr />



## 尋找dom物件的子層及子孫層的方法


<p>$(&#x27;ul.emphasis&#x27;).children(&#x27;li&#x27;)<br />//用來選取&lt;ul class=&quot;emphasis&quot;&gt;的子節點&lt;li&gt;</p>
<img src="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.01.14.71.jpg" alt="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.01.14.71.jpg"/>




<p>解說 &lt;li&gt;item&lt;li&gt;是&lt;ul class=&quot;emphasis&quot;&gt;的子層<br />而&lt;li&gt;&lt;ul&gt;&lt;li&gt;Hello&lt;/li&gt;&lt;/li&gt;是其子孫層</p>
<img src="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.01.45.71.jpg" alt="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.01.45.71.jpg"/>




<p>解說如用css的語法，是如何選取子層的，如:ul.emphasis&gt;li</p>
<img src="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.01.57.79.jpg" alt="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.01.57.79.jpg"/>




<p>選取子孫層的，如:ul.emphasis li</p>
<img src="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.02.02.83.jpg" alt="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.02.02.83.jpg"/>



## 找到符合的子層dom後，套用css樣式


<p>套用css的方法 </p>
<img src="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.02.28.71.jpg" alt="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.02.28.71.jpg"/>




<p>運行結果，全部的&lt;li&gt;都變成紅色的</p>
<img src="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.02.32.46.jpg" alt="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.02.32.46.jpg"/>




<p>將&lt;li&gt;設為黑色</p>
<img src="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.02.44.71.jpg" alt="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.02.44.71.jpg"/>




<p>運行結果，可看到子孫層的&lt;li&gt;保持黑色</p>
<img src="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.02.52.83.jpg" alt="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.02.52.83.jpg"/>




<p>將&lt;ul&gt;的子層設為綠色(子孫層沒變喔)</p>
<img src="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.03.07.29.jpg" alt="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.03.07.29.jpg"/>




<p>運行結果，可看到子層的&lt;li&gt;變為綠色，子孫層維持黑色</p>
<img src="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.03.10.83.jpg" alt="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.03.10.83.jpg"/>



## 運用first()、nth-child、eq()等方法來指定特定的dom


<p>如想只套用至第一個&lt;li&gt;，且套用.emphasis這個類別</p>
<img src="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.04.49.71.jpg" alt="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.04.49.71.jpg"/>




<p>運行結果，可看到只有第一個&lt;li&gt;套用為綠色的樣式了</p>
<img src="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.04.56.08.jpg" alt="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.04.56.08.jpg"/>




<p>也可使用jquery的first()的方法</p>
<img src="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.05.37.71.jpg" alt="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.05.37.71.jpg"/>




<p>如想改變第2個&lt;li&gt;的文字內容該如何修改呢?<br />children(&#x27;li:nth-child(2))</p>
<img src="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.06.09.71.jpg" alt="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.06.09.71.jpg"/>




<p>運行結果，可看到第2 個&lt;li&gt;被改成-added with jQuery</p>
<img src="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.06.13.12.jpg" alt="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.06.13.12.jpg"/>




<p>也可使用eq的方法來指定第幾個要修改，如寫成-<br />$(&#x27;ul.emphasis&#x27;).children(&#x27;li&#x27;).eq(1)就是改第2 個節點(因為是從0開始)</p>
<img src="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.06.23.71.jpg" alt="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.06.23.71.jpg"/>




<p>運行結果，第2個&lt;li&gt;放成&quot;added with jQuery&quot;(eq(0)為第一個)</p>
<img src="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.06.26.71.jpg" alt="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.06.26.71.jpg"/>




<p>如想改變第4個的下一個?</p>
<img src="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.07.52.71.jpg" alt="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.07.52.71.jpg"/>




<p>運行結果，第4個的下一個&lt;li&gt;被修改了</p>
<img src="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.08.19.71.jpg" alt="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.08.19.71.jpg"/>




<p>如果是第4個的上一個呢?</p>
<img src="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.08.32.71.jpg" alt="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.08.32.71.jpg"/>




<p>運行結果，可看到第4個的上一個被修改了</p>
<img src="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.08.36.71.jpg" alt="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.08.36.71.jpg"/>




<p>想直接套用css的搜尋法至jQuery中?</p>
<img src="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.09.07.54.jpg" alt="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.09.07.54.jpg"/>




<p>運行結果，第3個&lt;li&gt;被修改了</p>
<img src="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.09.09.21.jpg" alt="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.09.09.21.jpg"/>



## 程式碼分行，更易閱讀


<p>想將程式碼分行，以便閱讀?</p>
<img src="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.09.43.71.jpg" alt="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.09.43.71.jpg"/>




<p>運行結果，效果一樣正確</p>
<img src="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.09.50.42.jpg" alt="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.09.50.42.jpg"/>



## 經由子層來控制父層的樣式


<p>想經由子層的&lt;li&gt;控制父層的&lt;ul&gt;的樣式?</p>
<img src="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.10.41.58.jpg" alt="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.10.41.58.jpg"/>




<p>運行結果，可看到&lt;ul&gt;的綠色樣式被移除了</p>
<img src="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.10.42.71.jpg" alt="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.10.42.71.jpg"/>




<p>在console檢測程式碼，可看到&lt;ul&gt;的class被移除了</p>
<img src="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.10.49.88.jpg" alt="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.10.49.88.jpg"/>




<p>寫成$(&#x27;li&#x27;).parent(&#x27;ul&#x27;).removeclass(&#x27;emphasis&#x27;);閱讀上更加明確</p>
<img src="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.10.55.58.jpg" alt="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.10.55.58.jpg"/>




<p>如要移除&lt;li&gt;上上層的樣式，該如何修改?</p>
<img src="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.11.54.71.jpg" alt="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.11.54.71.jpg"/>




<p>移除最近節點中相同類別的</p>
<img src="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.12.03.71.jpg" alt="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.12.03.71.jpg"/>




<p>進入api.jquery.com查詢closest()的API</p>
<img src="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.12.38.71.jpg" alt="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.12.38.71.jpg"/>




<p>查閱closest()的定義</p>
<img src="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.12.44.71.jpg" alt="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.12.44.71.jpg"/>




<p>比較closest()和parents()的不同處</p>
<img src="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.13.35.83.jpg" alt="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.13.35.83.jpg"/>




<p>console畫面的結果為<br />[&lt;div class=&quot;container&quot;&gt;&lt;div class=&quot;conainer&quot;&gt;&lt;/div&gt;]//2個上一層<br />[div class=&quot;container&quot;&gt;//closes]//只有最近的一層</p>
<img src="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.13.40.71.jpg" alt="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.13.40.71.jpg"/>




<p>closest是指最接近的上一層，但如果要查詢的class放在同一層又會找到那層呢?</p>
<img src="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.14.16.62.jpg" alt="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.14.16.62.jpg"/>




<p>一樣執行console.log($(&#x27;ul&#x27;).closest(&#x27;.container&#x27;))來比較closest和parents的相異處;</p>
<img src="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.14.23.71.jpg" alt="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.14.23.71.jpg"/>




<p>執行結果可看到 $(&#x27;ul&#x27;).closest(&#x27;.container&#x27;)，最接近的類別為自己本身</p>
<img src="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.14.31.71.jpg" alt="/images/coding-note/javascript/jQuery-30day/03-The-Basics-of-Querying-the-Dom/03-The-Basics-of-Querying-the-Dom-0.14.31.71.jpg"/>


