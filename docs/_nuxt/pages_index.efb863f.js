(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{158:function(e,t,n){"use strict";n.r(t);n(98);var o=n(155),l=n.n(o),r=n(156),h=n.n(r),c=n(157),d=n.n(c),m='<section><h1>🎉 Nuxt Prune HTML</h1>\n<p><a href="https://npmjs.com/package/@luxdamore/nuxt-prune-html"><img src="https://img.shields.io/npm/v/@luxdamore/nuxt-prune-html/latest.svg?style=flat-square" alt="npm version"></a>\n<a href="https://npmjs.com/package/@luxdamore/nuxt-prune-html"><img src="https://img.shields.io/npm/dt/@luxdamore/nuxt-prune-html.svg?style=flat-square" alt="npm downloads"></a>\n<a href="https://circleci.com/gh/LuXDAmore/nuxt-prune-html"><img src="https://img.shields.io/circleci/project/github/LuXDAmore/nuxt-prune-html.svg?style=flat-square" alt="Circle CI"></a>\n<a href="https://npmjs.com/package/@luxdamore/nuxt-prune-html"><img src="https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg?style=flat-square" alt="Dependencies"></a>\n<a href="https://npmjs.com/package/@luxdamore/nuxt-prune-html"><img src="https://img.shields.io/npm/l/@luxdamore/nuxt-prune-html.svg?style=flat-square" alt="License"></a>\n<a href="https://www.paypal.com/paypalme2/luxdamore"><img src="https://img.shields.io/badge/paypal-donate-black.svg?style=flat-square" alt="Donate"></a></p>\n<blockquote>\n<p>Nuxt module to prune html before sending it to the browser (it removes elements matching CSS selector(s)), useful for boosting performance showing a different HTML for bots by removing all the scripts with dynamic rendering.</p>\n</blockquote>\n<h2>💘 Motivation</h2>\n<p>Due to the versatility of Nuxt (and of the SSR in general), a website generated (or served) via node, has everything it needs already injected (in the HTML, ex. styles).\nSo, usually, for a bot or for a human, the website its almost visually the same without Javascript.</p>\n<p>These library was born to remove the scripts injected in the HTML only if a visitor is a <strong>Bot</strong> or a &quot;<strong>Chrome Lighthouse</strong>&quot;. This should <strong>speed up</strong> (<strong>blazing fast</strong>) your <em>nuxt-website</em> up to a value of <strong>~95</strong> in <strong>performance</strong> during an <em>Audit</em> because it <a href="https://web.dev/lighthouse-performance/">cheats various scenarios</a>.</p>\n<blockquote>\n<p>Obviously this could cause some unexpected behaviors.</p>\n</blockquote>\n<h3>Pro et contra</h3>\n<p><strong><em>N.B. : Valid for Bots, PageSpeed Insights, Google Measure and Lighthouse Audits. This is known as <a href="https://developers.google.com/search/docs/guides/dynamic-rendering">Dynamic Rendering</a></em></strong></p>\n<p><strong>Cons:</strong></p>\n<ul>\n<li>no SPA navigation;</li>\n<li>no lazy-load for images (only if <a href="https://web.dev/native-lazy-loading/">native</a>, or with a custom <code>script</code> or with <code>selectorToKeep</code> );</li>\n<li>no <code>&lt;client-only&gt;</code> <a href="https://nuxtjs.org/api/components-client-only/">html</a>.</li>\n</ul>\n<p><strong>Pro:</strong></p>\n<ul>\n<li>some of these features aren\'t &quot;used by&quot; a Bot or a Lighthouse Audit, so you don\'t really need them (ex. Bots doesn\'t need <code>SPA navigation</code>, <code>client-only</code> tags could lead in a slower TTI);</li>\n<li>less HTML;</li>\n<li>BOTS only have the Javascript they need;</li>\n<li><a href="https://developers.google.com/speed/pagespeed/insights/">PageSpeed Insights</a>, <a href="https://web.dev/measure/">Measure</a> and <a href="https://developers.google.com/web/tools/lighthouse">Lighthouse Audit in Chrome</a> are already triggered by the plugin without the needing of change any value;</li>\n<li>fast TTI, fast FCP, fast FMP, <em>fast all</em>.</li>\n</ul>\n<p>Inspired by this <a href="https://github.com/nuxt/rfcs/issues/22">rcfs</a> and this <a href="https://github.com/nuxt/nuxt.js/issues/2822">issue</a>.</p>\n<hr>\n<h3>Advices</h3>\n<ul>\n<li>Before setting up the module, try to <a href="https://developers.google.com/web/tools/chrome-devtools/javascript/disable">Disable JavaScript With Chrome DevTools</a> while navigate your website, <strong>this is how your website appear to a Bot (with this module activated)</strong>;</li>\n<li>If you <code>generate</code> your site it\'s not possibile to check the <em>user-agent</em>, so i choose to always prune HTML (you can disable this behavior by setting the <code>hookGeneratePage</code> configuration value to <code>false</code>);</li>\n<li>If you use some <code>&lt;client-only&gt;</code> components, you should prepare a version that is visually the same with the <a href="https://nuxtjs.org/api/components-client-only/">placeholder slot</a>;</li>\n<li>This plugin was thought for Bots and uses only the <code>remove()</code> method of <code>Cheerio</code>;</li>\n<li>You can check the website as a GoogleBot, following <a href="https://developers.google.com/web/tools/chrome-devtools/device-mode/override-user-agent">this guide</a>.</li>\n</ul>\n<h3>Related things you should know</h3>\n<ul>\n<li>It use the <a href="http://hgoebl.github.io/mobile-detect.js/">MobileDetect</a> library to check if <code>.is( \'bot\' )</code>, <code>.match( options.lighthouseUserAgent )</code> or <code>.match( options.matchUserAgent )</code>;</li>\n<li>Nuxt <a href="https://nuxtjs.org/api/configuration-hooks/">hooks</a>, so the plugin has access to <code>req.headers[ \'user-agent\' ]</code> only if the project is <strong>running as a server</strong> (ex. <code>nuxt start</code>);</li>\n<li>It use <a href="https://github.com/cheeriojs/cheerio">Cheerio</a>, <em>jQuery for servers</em>, library to prune the html.</li>\n</ul>\n<hr>\n<h4>💡 Lighthouse</h4>\n<p><img src="./example/static/lighthouse/before.jpg" alt="Lighthouse Audit before">\n<img src="./example/static/lighthouse/after.jpg" alt="Lighthouse Audit after"></p>\n<hr>\n<h2>Setup</h2>\n<ol>\n<li>Add <code>@luxdamore/nuxt-prune-html</code> dependency to your project;</li>\n<li>Add <code>@luxdamore/nuxt-prune-html</code> in the <code>modules</code> section of your <code>nuxt.config.js</code>;</li>\n</ol>\n<pre><code class="language-bash">\n    yarn add @luxdamore/nuxt-prune-html <span class="hljs-comment"># or npm install --save @luxdamore/nuxt-prune-html</span>\n\n</code></pre>\n<h2>Configuration</h2>\n<p><strong><em>N.B. : the config is only shallow merged, not deep merged.</em></strong></p>\n<pre><code class="language-js">\n    <span class="hljs-comment">// nuxt.config.js</span>\n    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n\n        <span class="hljs-comment">// Module installation</span>\n        <span class="hljs-attr">modules</span>: [ <span class="hljs-string">\'@luxdamore/nuxt-prune-html\'</span> ],\n\n        <span class="hljs-comment">// Module config</span>\n        <span class="hljs-attr">pruneHtml</span>: {\n            <span class="hljs-attr">hideErrorsInConsole</span>: <span class="hljs-literal">false</span>,\n            <span class="hljs-attr">hideGenericMessagesInConsole</span>: <span class="hljs-literal">false</span>, <span class="hljs-comment">// Disabled in production</span>\n            <span class="hljs-attr">enabled</span>: <span class="hljs-literal">false</span>, <span class="hljs-comment">// Disabled in dev-mode due to the hot reload (is client-side)</span>\n            <span class="hljs-attr">selectors</span>: [ <span class="hljs-comment">// Css selectors to prune</span>\n                <span class="hljs-string">\'link[rel="preload"][as="script"]\'</span>,\n                <span class="hljs-string">\'script:not([type="application/ld+json"])\'</span>,\n            ],\n            <span class="hljs-attr">selectorToKeep</span>: <span class="hljs-literal">null</span>, <span class="hljs-comment">// Disallow pruning of scripts with this class, N.B.: this selector will be appended to every selectors, `ex. script:not([type="application/ld+json"]):not(__VALUE__)`</span>\n            <span class="hljs-attr">script</span>: [], <span class="hljs-comment">// Inject custom scripts only for matched UA (BOTS-only)</span>\n            <span class="hljs-attr">link</span>: [], <span class="hljs-comment">// Inject custom links only for matched UA (BOTS-only)</span>\n            <span class="hljs-attr">cheerio</span>: { <span class="hljs-comment">// It use Cheerio under the hood, so this is the config passed in the cheerio.load() method</span>\n                <span class="hljs-attr">xmlMode</span>: <span class="hljs-literal">false</span>,\n            },\n            <span class="hljs-attr">ignoreBotOrLighthouse</span>: <span class="hljs-literal">false</span>, <span class="hljs-comment">// Remove selectors in any case, not depending on Bot or Lighthouse</span>\n            <span class="hljs-attr">isBot</span>: <span class="hljs-literal">true</span>, <span class="hljs-comment">// Remove selectors if is a bot</span>\n            <span class="hljs-attr">isLighthouse</span>: <span class="hljs-literal">true</span>, <span class="hljs-comment">// Remove selectors if match the Lighthouse UserAgent</span>\n            <span class="hljs-attr">matchUserAgent</span>: <span class="hljs-literal">null</span>, <span class="hljs-comment">// Remove selectors if this userAgent is matched, either as String or RegExp (a string will be converted to a case-insensitive RegExp in the MobileDetect library)</span>\n            <span class="hljs-attr">hookRenderRoute</span>: <span class="hljs-literal">true</span>, <span class="hljs-comment">// Activate the prune during the `hook:render:route`</span>\n            <span class="hljs-attr">hookGeneratePage</span>: <span class="hljs-literal">true</span>, <span class="hljs-comment">// Activate the prune during the `hook:generate:page`</span>\n            <span class="hljs-attr">lighthouseUserAgent</span>: <span class="hljs-string">\'lighthouse\'</span>, <span class="hljs-comment">// Value of the Lighthouse UserAgent, either as String or RegExp (a string will be converted to a case-insensitive RegExp in the MobileDetect library)</span>\n            <span class="hljs-attr">headerName</span>: <span class="hljs-string">\'user-agent\'</span>, <span class="hljs-comment">// Value of a custom header name passed from a Lambda Edge function, or similar</span>\n        },\n\n    };\n\n</code></pre>\n<p>With <code>link</code> and <code>script</code> it\'s possibile to add one or more objects ex.:</p>\n<pre><code class="language-javascript">\n    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n        <span class="hljs-attr">pruneHtml</span>: {\n            <span class="hljs-attr">script</span>: [\n                {\n                    <span class="hljs-attr">src</span>: <span class="hljs-string">\'/my-custom-lazy-load-for-bots.js\'</span>,\n                    <span class="hljs-attr">lazy</span>: <span class="hljs-literal">true</span>,\n                    <span class="hljs-attr">defer</span>: <span class="hljs-literal">true</span>,\n                },\n            ],\n            <span class="hljs-attr">link</span>: [\n                {\n                    <span class="hljs-attr">src</span>: <span class="hljs-string">\'/my-custom-lazy-load-for-bots.js\'</span>,\n                    <span class="hljs-attr">rel</span>: <span class="hljs-string">\'preload\'</span>,\n                    <span class="hljs-attr">as</span>: <span class="hljs-string">\'script\'</span>,\n                    <span class="hljs-attr">position</span>: <span class="hljs-string">\'phead\'</span>, <span class="hljs-comment">// Default value is \'body\' --&gt; Other allowed values are: \'phead\', \'head\' and \'pbody\'</span>\n                },\n            ],\n        },\n    };\n\n</code></pre>\n<hr>\n<h2>Development</h2>\n<ol>\n<li>Clone this repository;</li>\n<li>Install dependencies using <code>yarn install</code> or <code>npm install</code>;</li>\n<li>Start development server using <code>yarn dev</code> or <code>npm run dev</code>;</li>\n<li>Build <em>Github Pages</em> using <code>yarn generate</code> or <code>npm run generate</code> (the content is automatically generated into the <code>/docs</code> folder).</li>\n</ol>\n<h2>🐞 Issues</h2>\n<p>Please make sure to read the <a href="/.github/ISSUE_TEMPLATE/bug_report.md">Issue Reporting Checklist</a> before opening an issue. Issues not conforming to the guidelines may be closed immediately.</p>\n<h2>👥 Contribution</h2>\n<p>Please make sure to read the <a href="/.github/ISSUE_TEMPLATE/feature_request.md">Contributing Guide</a> before making a pull request.</p>\n<h2>📖 Changelog</h2>\n<p>Details changes for each release are documented in the <a href="./CHANGELOG.md"><strong>release notes</strong></a>.</p>\n<h3>📃 License</h3>\n<p><a href="./LICENSE">MIT License</a> // Copyright (©) 2019-present <a href="https://lucaiaconelli.it">Luca Iaconelli</a></p>\n<h4>💸 Are you feeling generous today?  :)</h4>\n<p>Do you want to share a beer? We can be good friends..\n<strong><a href="https://www.paypal.me/luxdamore">Paypal</a> // <a href="https://www.patreon.com/luxdamore">Patreon</a></strong></p>\n<blockquote>\n<p><em>It\'s always a good day to be magnanimous - cit</em></p>\n</blockquote>\n<h4>💼 Hire me</h4>\n<p><a href="https://lucaiaconelli.it"><img src="https://img.shields.io/badge/email-Contact%20me-success" alt="Contacts"></a></p>\n<p><a href="https://ko-fi.com/luxdamore"><img src="https://www.ko-fi.com/img/githubbutton_sm.svg" alt="ko-fi"></a></p>\n</section>\n'.split("./example/static/").join("");l.a.registerLanguage("bash",h.a),l.a.registerLanguage("javascript",d.a);var f={name:"homepage",computed:{readme:()=>m},mounted(){this.$nextTick(()=>{this.initHighlight(),this.initReadmeLinks()})},methods:{initHighlight(){document.querySelectorAll("pre").forEach(e=>l.a.highlightBlock(e))},initReadmeLinks(){for(var e=document.querySelectorAll(".readme > article a, .readme > article pre"),i=0;i<e.length;i++)"A"===e[i].tagName&&(e[i].setAttribute("target","_blank"),e[i].setAttribute("rel","noopener"),e[i].setAttribute("title",e[i].textContent))}}},j=n(21),component=Object(j.a)(f,(function(){var e=this.$createElement,t=this._self._c||e;return t("main",{staticClass:"container readme"},[this.readme?t("article",{staticClass:"markdown-body",domProps:{innerHTML:this._s(this.readme)}}):this._e()])}),[],!1,null,null,null);t.default=component.exports}}]);