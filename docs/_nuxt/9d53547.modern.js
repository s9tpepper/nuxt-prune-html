(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{255:function(e,n,t){var content=t(262);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(39).default)("4f39745d",content,!0,{sourceMap:!1})},261:function(e,n,t){"use strict";t(255)},262:function(e,n,t){(n=t(38)(!1)).push([e.i,".readme[data-v-9407f738] >section>p:nth-child(2){display:flex;flex:1 1 100%;flex-direction:row;flex-wrap:nowrap;min-height:36px;padding:6px 12px;overflow-x:auto;font-size:0;background-color:rgba(220,230,240,.63);border-radius:5px}.readme[data-v-9407f738]  a{display:inline-block;margin:2px 1px}.readme[data-v-9407f738]  blockquote{margin:1rem auto;padding:4px 0 4px 1.5rem;color:#819198;border-left:.3rem solid #dce6f0}.readme[data-v-9407f738]  blockquote p{margin:0}.readme[data-v-9407f738]  code{display:inline-block;padding:0 3px;overflow-y:hidden;vertical-align:middle;background-color:#dce6f0;border-radius:6px}.readme[data-v-9407f738]  pre code{display:block;padding:.5em;overflow-x:auto;vertical-align:inherit;background-color:#f8f8f8}",""]),e.exports=n},264:function(e,n,t){"use strict";t.r(n);t(14),t(51),t(21);var o=t(4),r=t(256),l=t.n(r),c=t(257),h=t.n(c),d=t(258),m=t.n(d),f='<section><h1>🔌⚡ Nuxt Prune HTML</h1>\n<p><a href="https://luxdamore.github.io/nuxt-prune-html/"><img src="https://img.shields.io/badge/code%20quality-A-informational?style=flat" alt="Code Quality"></a><br>\n<a href="https://npmjs.com/package/@luxdamore/nuxt-prune-html"><img src="https://img.shields.io/npm/v/@luxdamore/nuxt-prune-html/latest.svg?style=flat&amp;color=darkorange&amp;label=version" alt="Version"></a><br>\n<a href="https://npmjs.com/package/@luxdamore/nuxt-prune-html"><img src="https://img.shields.io/npm/dt/@luxdamore/nuxt-prune-html.svg?style=flat&amp;color=darkgreen" alt="Downloads"></a><br>\n<a href="https://npmjs.com/package/@luxdamore/nuxt-prune-html"><img src="https://img.shields.io/badge/dependencies-up%20to%20date-darkgreen.svg?style=flat" alt="Dependencies"></a><br>\n<a href="https://circleci.com/gh/LuXDAmore/nuxt-prune-html"><img src="https://img.shields.io/circleci/project/github/LuXDAmore/nuxt-prune-html.svg?style=flat&amp;color=darkgreen" alt="Circle CI"></a><br>\n<a href="https://www.paypal.me/luxdamore"><img src="https://img.shields.io/badge/paypal-donate-black.svg?style=flat" alt="Donate"></a></p>\n<blockquote>\n<p>Nuxt module to prune html before sending it to the browser (it removes elements matching CSS selector(s)), useful for boosting performance showing a different HTML for bots/audits by removing all the scripts with dynamic rendering.</p>\n</blockquote>\n<h2>💘 Motivation</h2>\n<p>Due to the versatility of Nuxt (and of the SSR in general), a website generated (or served) via node server, has everything it needs already injected (in the HTML, ex. styles). So, usually, for a bot or for a human, the website its almost visually the same without Javascript.</p>\n<p>This library is born to remove the scripts injected in the HTML <strong>only</strong> if a visitor is a <strong>Bot</strong> (or a &quot;<strong>Performance Audit</strong>&quot;, ex. <strong>Lighthouse</strong>).<br>\nThis should <strong>speed up</strong> (<strong>blazing fast</strong>) your <em>nuxt-website</em> up to a value of <strong>~95</strong> in <strong>performance</strong> during an <em>Audit</em> because it <a href="https://web.dev/lighthouse-performance/">cheats various scenarios</a>.</p>\n<blockquote>\n<p>Inspired by this <a href="https://github.com/nuxt/rfcs/issues/22">rcfs</a> and this <a href="https://github.com/nuxt/nuxt.js/issues/2822">issue</a>.</p>\n</blockquote>\n<h3>Features</h3>\n<ul>\n<li>Prune based on <strong>mobile detection</strong>;\n<ul>\n<li>Match the <strong>user agent</strong>;</li>\n<li>Match a <strong>bot</strong>;</li>\n<li>Match an <strong>audit</strong>;</li>\n</ul>\n</li>\n<li>Prune based on <strong>headers values</strong> (<em>useful in Lambdas</em>);</li>\n<li>Prune based on <strong>query parameters</strong> (<em>useful during navigation or generation, for an hybrid-experience</em>).</li>\n</ul>\n<h3>Pro et contra</h3>\n<blockquote>\n<p>This could cause some unexpected behaviors.</p>\n</blockquote>\n<p><strong>Cons.:</strong></p>\n<ul>\n<li>no <a href="https://nuxtjs.org/docs/2.x/concepts/server-side-rendering/#server-side-rendering-steps-with-nuxtjs"><code>SPA routing</code></a> on <code>client-side</code> for <strong>bots and audits</strong>;</li>\n<li>no <a href="https://ssr.vuejs.org/guide/hydration.html"><code>hydration</code></a> on <code>client-side</code> for <strong>bots and audits</strong>:\n<ul>\n<li>ex. <a href="https://github.com/maoberlehner/vue-lazy-hydration"><code>vue-lazy-hydration</code></a>, <em>hydrateOnInteraction</em>, <em>hydrateWhenIdle</em> and <em>hydrateWhenVisible</em> are <strong>javascript client-side code</strong> so they\'re pruned out;</li>\n</ul>\n</li>\n<li>no <a href="https://nuxtjs.org/api/components-client-only/"><code>&lt;client-only&gt;</code> components</a>;</li>\n<li>can break <code>lazy-load</code> for images.</li>\n</ul>\n<p><strong>Pros.:</strong></p>\n<ul>\n<li>some of these features <strong>aren\'t &quot;used by&quot;</strong> a bot/audit, so you don\'t really need them:\n<ul>\n<li>bots doesn\'t handle <code>SPA routing</code>;</li>\n<li><a href="https://nuxtjs.org/api/components-client-only/"><code>&lt;client-only&gt;</code> components</a> could lead in a slower TTI;</li>\n<li><a href="https://nuxtjs.org/api/components-client-only/"><code>&lt;client-only&gt;</code> components</a> can contain a <a href="https://nuxtjs.org/api/components-client-only/">static placeholder</a>;</li>\n</ul>\n</li>\n<li><code>lazy-load</code> for images can be fixed with a <a href="https://web.dev/native-lazy-loading/">native attribute</a>, or with a custom <code>script</code>/<code>selectorToKeep</code> (<em>check the configuration</em>);</li>\n<li><code>hydration</code> <strong>decrease</strong> performance, so it\'s ok to prune it for <code>bots or audits</code>;</li>\n<li>less HTML, assets and resources are served to browsers and clients;</li>\n<li>bot/audit only have the Javascript they need;</li>\n<li>with <strong>less assets</strong> to download, the number of urls crawled are <strong>widely boosted</strong>;</li>\n<li>bots, <a href="https://developers.google.com/speed/pagespeed/insights/">PageSpeed Insights</a>, <a href="https://web.dev/measure/">Google Measure</a> and <a href="https://developers.google.com/web/tools/lighthouse">Lighthouse Audit</a> are already pruned by the plugin with the default configuration;</li>\n<li>faster <a href="https://web.dev/vitals/">web-vitals</a>, faster TTI, faster FCP, faster FMP, <strong>faster all</strong>.</li>\n</ul>\n<p><strong>N.B.:</strong> <em>This is known as <a href="https://developers.google.com/search/docs/guides/dynamic-rendering">Dynamic Rendering</a> and <strong>it\'s not</strong> considered <a href="https://www.wordstream.com/black-hat-seo">black-hat</a> or <a href="https://en.wikipedia.org/wiki/Cloaking">cloaking</a></em>.</p>\n<hr>\n<h4>💡 Lighthouse</h4>\n<p><img src="./src/static/lighthouse/before.jpg" alt="Lighthouse Audit before"><br>\n<img src="./src/static/lighthouse/after.jpg" alt="Lighthouse Audit after"></p>\n<hr>\n<h2>Setup</h2>\n<ol>\n<li>Install <code>@luxdamore/nuxt-prune-html</code> as a dependency:\n<ul>\n<li><code>yarn add @luxdamore/nuxt-prune-html</code>;</li>\n<li>or, <code>npm install --save @luxdamore/nuxt-prune-html</code>;</li>\n</ul>\n</li>\n<li>Add <code>@luxdamore/nuxt-prune-html</code> in the <code>modules</code> array of your <code>nuxt.config.js</code>.</li>\n</ol>\n<h2>Configuration</h2>\n<pre><code class="language-js">\n    <span class="hljs-comment">// nuxt.config.js</span>\n    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n\n        <span class="hljs-comment">// Module - extension</span>\n        <span class="hljs-attr">modules</span>: [ <span class="hljs-string">&#x27;@luxdamore/nuxt-prune-html&#x27;</span> ],\n\n        <span class="hljs-comment">// Module - default config</span>\n        <span class="hljs-attr">pruneHtml</span>: {\n            <span class="hljs-attr">enabled</span>: <span class="hljs-literal">false</span>, <span class="hljs-comment">// `true` in production</span>\n            <span class="hljs-attr">hideGenericMessagesInConsole</span>: <span class="hljs-literal">false</span>, <span class="hljs-comment">// `false` in production</span>\n            <span class="hljs-attr">hideErrorsInConsole</span>: <span class="hljs-literal">false</span>, <span class="hljs-comment">// disable the `console.error` method</span>\n            <span class="hljs-attr">hookRenderRoute</span>: <span class="hljs-literal">true</span>, <span class="hljs-comment">// Activate in `hook:render:route`</span>\n            <span class="hljs-attr">hookGeneratePage</span>: <span class="hljs-literal">true</span>, <span class="hljs-comment">// Activate in `hook:generate:page`</span>\n            <span class="hljs-attr">selectors</span>: [\n                <span class="hljs-comment">// CSS selectors to prune</span>\n                <span class="hljs-string">&#x27;link[rel=&quot;preload&quot;][as=&quot;script&quot;]&#x27;</span>,\n                <span class="hljs-string">&#x27;script:not([type=&quot;application/ld+json&quot;])&#x27;</span>,\n            ],\n            <span class="hljs-attr">selectorsToKeep</span>: <span class="hljs-literal">null</span>, <span class="hljs-comment">// disallow pruning of scripts with this class (could be an array of classes), N.B.: each `selectorsToKeep` will be appended to every `selectors`, ex.: `script:not([type=&quot;application/ld+json&quot;]):not(__selectorToKeep__)`</span>\n            <span class="hljs-attr">link</span>: [], <span class="hljs-comment">// Inject custom links, only if pruned</span>\n            <span class="hljs-attr">script</span>: [], <span class="hljs-comment">// Inject custom scripts, only if pruned</span>\n            <span class="hljs-attr">htmlElementClass</span>: <span class="hljs-literal">null</span>, <span class="hljs-comment">// this is a string added as a class to the &lt;html&gt; element</span>\n            <span class="hljs-attr">cheerio</span>: {\n                <span class="hljs-comment">// this is the config passed in the `cheerio.load(__config__)` method</span>\n                <span class="hljs-attr">xmlMode</span>: <span class="hljs-literal">false</span>,\n            },\n            <span class="hljs-attr">types</span>: [\n                <span class="hljs-comment">// it&#x27;s possibile to add different rules/types of pruning</span>\n                <span class="hljs-comment">// array of values: [ &#x27;default-detect&#x27;, &#x27;query-parameters&#x27;, &#x27;headers-exist&#x27; ]</span>\n                <span class="hljs-comment">// ex.: `[ &#x27;headers-exist&#x27; ]` force only to check query-parameters values</span>\n                <span class="hljs-string">&#x27;default-detect&#x27;</span>,\n            ],\n            <span class="hljs-comment">// 👇🏻 Type: `default-detect`</span>\n            <span class="hljs-attr">headerNameForDefaultDetection</span>: <span class="hljs-string">&#x27;user-agent&#x27;</span>, <span class="hljs-comment">// The header-key base for `default-detect`, `req.headers[ headerNameForDefaultDetection ]`</span>\n            <span class="hljs-attr">isBot</span>: <span class="hljs-literal">true</span>, <span class="hljs-comment">// remove selectors if is a bot</span>\n            <span class="hljs-attr">isAudit</span>: <span class="hljs-literal">true</span>, <span class="hljs-comment">// remove selectors if match the `auditUserAgent`</span>\n            <span class="hljs-attr">ignoreBotOrAudit</span>: <span class="hljs-literal">false</span>, <span class="hljs-comment">// remove selectors in any case, not depending on Bot or Audit</span>\n            <span class="hljs-attr">auditUserAgent</span>: <span class="hljs-string">&#x27;lighthouse&#x27;</span>, <span class="hljs-comment">// prune if `res.header[ headerNameForDefaultDetection ]` match with this value, could be a string or an array of strings</span>\n            <span class="hljs-attr">matchUserAgent</span>: <span class="hljs-literal">null</span>, <span class="hljs-comment">// prune if `res.header[ headerNameForDefaultDetection ]` match with this value, could be a string or an array of strings</span>\n            <span class="hljs-comment">// 👇🏻 Type: &#x27;query-parameters&#x27;, (you can also specify routes in the `nuxt.config`, ex.: `{ generate: { routes: [ &#x27;/?prune=true&#x27; ] } }` )</span>\n            <span class="hljs-attr">queryParametersToPrune</span>: [\n                <span class="hljs-comment">// array of objects (key-value), trigger the pruning if &#x27;query-parameters&#x27; is present in `types` and at least one value, ex. `/?prune=true`</span>\n                {\n                    <span class="hljs-attr">key</span>: <span class="hljs-string">&#x27;prune&#x27;</span>,\n                    <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;true&#x27;</span>,\n                },\n            ],\n            <span class="hljs-attr">queryParametersToExcludePrune</span>: [], <span class="hljs-comment">// same as `queryParametersToPrune`, exclude the pruning if &#x27;query-parameters&#x27; is present in `types` and at least one value is matched, this priority is over than `queryParametersToPrune`</span>\n            <span class="hljs-comment">// 👇🏻 Type: &#x27;headers-exist&#x27;</span>\n            <span class="hljs-attr">headersToPrune</span>: [], <span class="hljs-comment">// same as `queryParametersToPrune`, but it checks `req.headers`</span>\n            <span class="hljs-attr">headersToExcludePrune</span>: [], <span class="hljs-comment">// same as `queryParamToExcludePrune`, but it checks `req.headers`, this priority is over than `headersToPrune`</span>\n            <span class="hljs-comment">// Emitted events for callbacks methods</span>\n            <span class="hljs-attr">onBeforePrune</span>: <span class="hljs-literal">null</span>, <span class="hljs-comment">// ({ result, [ headers, res ] }) =&gt; {}, `headers` and `res` are not available on `generate`</span>\n            <span class="hljs-attr">onAfterPrune</span>: <span class="hljs-literal">null</span>, <span class="hljs-comment">// ({ result, [ headers, res ] }) =&gt; {}, `headers` and `res` are not available on `generate`</span>\n        },\n\n    };\n\n</code></pre>\n<p>With <code>link</code> and <code>script</code> it\'s possibile to add one or more objects on the pruned HTML, ex.:</p>\n<pre><code class="language-javascript">\n    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n        <span class="hljs-attr">pruneHtml</span>: {\n            <span class="hljs-attr">link</span>: [\n                {\n                    <span class="hljs-attr">rel</span>: <span class="hljs-string">&#x27;preload&#x27;</span>,\n                    <span class="hljs-attr">as</span>: <span class="hljs-string">&#x27;script&#x27;</span>,\n                    <span class="hljs-attr">href</span>: <span class="hljs-string">&#x27;/my-custom-lazy-load-for-bots.js&#x27;</span>,\n                    <span class="hljs-attr">position</span>: <span class="hljs-string">&#x27;phead&#x27;</span>, <span class="hljs-comment">// Default value is &#x27;body&#x27;, other allowed values are: &#x27;phead&#x27;, &#x27;head&#x27; and &#x27;pbody&#x27;</span>\n                },\n                {\n                    <span class="hljs-attr">rel</span>: <span class="hljs-string">&#x27;stylesheet&#x27;</span>,\n                    <span class="hljs-attr">href</span>: <span class="hljs-string">&#x27;/my-custom-styles-for-bots.css&#x27;</span>,\n                    <span class="hljs-attr">position</span>: <span class="hljs-string">&#x27;head&#x27;</span>,\n                },\n            ],\n            <span class="hljs-attr">script</span>: [\n                {\n                    <span class="hljs-attr">src</span>: <span class="hljs-string">&#x27;/my-custom-lazy-load-for-bots.js&#x27;</span>,\n                    <span class="hljs-attr">lazy</span>: <span class="hljs-literal">true</span>,\n                    <span class="hljs-attr">defer</span>: <span class="hljs-literal">true</span>,\n                },\n            ],\n        },\n    };\n\n</code></pre>\n<blockquote>\n<p><strong>N.B.:</strong> <em>the config is only shallow merged, not deep merged</em>.</p>\n</blockquote>\n<hr>\n<h3>Related things you should know</h3>\n<ul>\n<li>Usage with <code>types: [ \'default-detect\' ]</code>, load the <a href="http://hgoebl.github.io/default-detect.js/">MobileDetect</a> library and check if <code>req.headers[ headerNameForDefaultDetection ]</code>:\n<ul>\n<li><code>.is( \'bot\' )</code>;</li>\n<li>and/or <code>.match( options.auditUserAgent )</code>;</li>\n<li>and/or <code>.match( options.matchUserAgent )</code>;</li>\n</ul>\n</li>\n<li>Nuxt <a href="https://nuxtjs.org/api/configuration-hooks/">hooks</a>, the plugin has access to <code>req.headers</code> only if the project is <strong>running as a server</strong> (ex. <code>nuxt start</code>);</li>\n<li>It use <a href="https://github.com/cheeriojs/cheerio">Cheerio</a>, <em>jQuery for servers</em>, library to <strong>filter and prune</strong> the html.</li>\n</ul>\n<hr>\n<h3>Advices</h3>\n<ul>\n<li>Before setting up the module, try to <a href="https://developers.google.com/web/tools/chrome-devtools/javascript/disable">Disable JavaScript With Chrome DevTools</a> while navigate your website, <strong>this is how your website appear (when <em>prune</em> is activated)</strong>;</li>\n<li>If you <code>generate</code> your site it\'s not possibile to check <em>req.headers</em>, so, I choose to <strong>always prune</strong> (for types <code>default-detect</code> and/or <code>headers-exist</code>), but You can disable this behavior by setting <code>hookGeneratePage</code> to <code>false</code> (or by using type <code>query-parameters</code>);</li>\n<li>If you use <a href="https://nuxtjs.org/api/components-client-only/"><code>&lt;client-only&gt;</code> components</a> you should prepare a version that is visually the same with the <a href="https://nuxtjs.org/api/components-client-only/">placeholder slot</a>;</li>\n<li>This plugin was thought for <em>Bots / Audits</em> and uses only few <code>methods</code> from the <code>Cheerio</code> library;</li>\n<li>You can check the website as a <em>GoogleBot</em>, following <a href="https://developers.google.com/web/tools/chrome-devtools/device-mode/override-user-agent">this guide</a>.</li>\n</ul>\n<hr>\n<h2>👩🏻‍💻👨🏻‍💻 Development</h2>\n<ol>\n<li><strong>Clone</strong> this repository:\n<ul>\n<li><code>git clone https://github.com/LuXDAmore/nuxt-prune-html.git</code>;</li>\n</ul>\n</li>\n<li><strong>Install</strong> the dependencies:\n<ul>\n<li><code>yarn install</code> (or <code>npm install</code>);</li>\n</ul>\n</li>\n<li><strong>Start</strong> the development server:\n<ul>\n<li><code>yarn dev</code> (or <code>npm run dev</code>);</li>\n</ul>\n</li>\n<li><strong>Extra</strong>, generate the documentation (<a href="https://pages.github.com/"><em>Github Pages</em></a>):\n<ul>\n<li><code>yarn generate</code> (or <code>npm run generate</code>);</li>\n<li><em>the content is automatically generated into the <code>/docs</code> folder</em>.</li>\n</ul>\n</li>\n</ol>\n<h2>🐞 Issues</h2>\n<p>Please make sure to read the <a href="/.github/ISSUE_TEMPLATE/bug_report.md">Issue Reporting Checklist</a> before opening an issue. Issues not conforming to the guidelines may be closed immediately.</p>\n<h2>👥 Contribution</h2>\n<p>Please make sure to read the <a href="/.github/ISSUE_TEMPLATE/feature_request.md">Contributing Guide</a> before making a pull request.</p>\n<h2>📖 Changelog</h2>\n<p>Details changes for each release are documented in the <a href="./CHANGELOG.md"><strong>release notes</strong></a>.</p>\n<h3>📃 License</h3>\n<p><a href="./LICENSE">MIT License</a> // Copyright (©) 2019-present <a href="https://lucaiaconelli.it">Luca Iaconelli</a></p>\n<h4>💼 Hire me</h4>\n<p><a href="https://lucaiaconelli.it"><img src="https://img.shields.io/badge/Contact%20Me-Let\'s%20Talk-informational?style=social&amp;logo=minutemailer" alt="Contacts"></a></p>\n<h4>💸 Are you feeling generous today?</h4>\n<p>If You want to share a beer, we can be really good friends 😄</p>\n<p><strong><a href="https://www.paypal.me/luxdamore">Paypal</a> // <a href="https://www.patreon.com/luxdamore">Patreon</a> // <a href="https://ko-fi.com/luxdamore">Ko-fi</a></strong></p>\n<blockquote>\n<p>☀ <em>It\'s always a good day to be magnanimous</em> - cit.</p>\n</blockquote>\n</section>\n'.split("./src/static/").join("");l.a.registerLanguage("bash",h.a),l.a.registerLanguage("javascript",m.a);var y={name:"homepage",computed:{readme:()=>f},mounted(){var e=this;return Object(o.a)((function*(){yield e.$nextTick(),e.initHighlight(),e.initReadmeLinks()}))()},methods:{initHighlight(){var e=document.querySelectorAll(".readme code");for(var n of e)l.a.highlightBlock(n)},initReadmeLinks(){var e=document.querySelectorAll(".readme a");for(var link of e)link.setAttribute("target","_blank"),link.setAttribute("rel","noopener"),link.textContent&&link.setAttribute("title",link.textContent)}}},x=(t(259),t(261),t(49)),component=Object(x.a)(y,(function(){var e=this.$createElement,n=this._self._c||e;return this.readme?n("article",{staticClass:"readme markdown-body",domProps:{innerHTML:this._s(this.readme)}}):this._e()}),[],!1,null,"9407f738",null);n.default=component.exports}}]);