/* Sequence.js */
;(function(e){function n(n,r,i,s){function f(){o.afterLoaded();o.settings.hideFramesUntilPreloaded&&o.settings.preloader!==undefined&&o.settings.preloader!==!1&&o.frames.show();if(o.settings.preloader!==undefined&&o.settings.preloader!==!1)if(o.settings.hidePreloaderUsingCSS&&o.transitionsSupported){o.prependPreloadingCompleteTo=o.settings.prependPreloadingComplete===!0?o.settings.preloader:e(o.settings.prependPreloadingComplete);o.prependPreloadingCompleteTo.addClass("preloading-complete");setTimeout(g,o.settings.hidePreloaderDelay)}else o.settings.preloader.fadeOut(o.settings.hidePreloaderDelay,function(){clearInterval(o.defaultPreloader);g()});else g()}function h(t,n){var r=[];if(!n)for(var i=t;i>0;i--)o.frames.eq(o.settings.preloadTheseFrames[i-1]-1).find("img").each(function(){r.push(e(this)[0])});else for(var s=t;s>0;s--)r.push(e("body").find('img[src="'+o.settings.preloadTheseImages[s-1]+'"]'));return r}function p(t,n){function c(){var t=e(f),r=e(l);s&&(l.length?s.reject(u,t,r):s.resolve(u));e.isFunction(n)&&n.call(i,u,t,r)}function h(t,n){if(t.src===r||e.inArray(t,a)!==-1)return;a.push(t);n?l.push(t):f.push(t);e.data(t,"imagesLoaded",{isBroken:n,src:t.src});o&&s.notifyWith(e(t),[n,u,e(f),e(l)]);if(u.length===a.length){setTimeout(c);u.unbind(".imagesLoaded")}}var r="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",i=t,s=e.isFunction(e.Deferred)?e.Deferred():0,o=e.isFunction(s.notify),u=i.find("img").add(i.filter("img")),a=[],f=[],l=[];e.isPlainObject(n)&&e.each(n,function(e,t){e==="callback"?n=t:s&&s[e](t)});u.length?u.bind("load.imagesLoaded error.imagesLoaded",function(e){h(e.target,e.type==="error")}).each(function(t,n){var i=n.src,s=e.data(n,"imagesLoaded");if(s&&s.src===i){h(n,s.isBroken);return}if(n.complete&&n.naturalWidth!==undefined){h(n,n.naturalWidth===0||n.naturalHeight===0);return}if(n.readyState||n.complete){n.src=r;n.src=i}}):c()}function g(){function t(e,t){var r,i;for(i in t){i==="left"||i==="right"?r=n[i]:r=i;e===parseFloat(r)&&o._initCustomKeyEvent(t[i])}}function r(){o.canvas.on("touchmove.sequence",i);u=null;f=!1}function i(e){o.settings.swipePreventsDefault&&e.preventDefault();if(f){var t=e.originalEvent.touches[0].pageX,n=e.originalEvent.touches[0].pageY,i=u-t,s=a-n;if(Math.abs(i)>=o.settings.swipeThreshold){r();i>0?o._initCustomKeyEvent(o.settings.swipeEvents.left):o._initCustomKeyEvent(o.settings.swipeEvents.right)}else if(Math.abs(s)>=o.settings.swipeThreshold){r();s>0?o._initCustomKeyEvent(o.settings.swipeEvents.down):o._initCustomKeyEvent(o.settings.swipeEvents.up)}}}function s(e){if(e.originalEvent.touches.length===1){u=e.originalEvent.touches[0].pageX;a=e.originalEvent.touches[0].pageY;f=!0;o.canvas.on("touchmove.sequence",i)}}e(o.settings.preloader).remove();o.nextButton=o._renderUiElements(o.settings.nextButton,".sequence-next");o.prevButton=o._renderUiElements(o.settings.prevButton,".sequence-prev");o.pauseButton=o._renderUiElements(o.settings.pauseButton,".sequence-pause");o.pagination=o._renderUiElements(o.settings.pagination,".sequence-pagination");o.nextButton!==undefined&&o.nextButton!==!1&&o.settings.showNextButtonOnInit===!0&&o.nextButton.show();o.prevButton!==undefined&&o.prevButton!==!1&&o.settings.showPrevButtonOnInit===!0&&o.prevButton.show();o.pauseButton!==undefined&&o.pauseButton!==!1&&o.settings.showPauseButtonOnInit===!0&&o.pauseButton.show();if(o.settings.pauseIcon!==!1){o.pauseIcon=o._renderUiElements(o.settings.pauseIcon,".sequence-pause-icon");o.pauseIcon!==undefined&&o.pauseIcon.hide()}else o.pauseIcon=undefined;if(o.pagination!==undefined&&o.pagination!==!1){o.paginationLinks=o.pagination.children();o.paginationLinks.on("click.sequence",function(){var t=e(this).index()+1;o.goTo(t)});o.settings.showPaginationOnInit===!0&&o.pagination.show()}o.nextFrameID=o.settings.startingFrameID;if(o.settings.hashTags===!0){o.frames.each(function(){o.frameHashID.push(e(this).prop(o.getHashTagFrom))});o.currentHashTag=location.hash.replace("#","");if(o.currentHashTag===undefined||o.currentHashTag==="")o.nextFrameID=o.settings.startingFrameID;else{o.frameHashIndex=e.inArray(o.currentHashTag,o.frameHashID);o.frameHashIndex!==-1?o.nextFrameID=o.frameHashIndex+1:o.nextFrameID=o.settings.startingFrameID}}o.nextFrame=o.frames.eq(o.nextFrameID-1);o.nextFrameChildren=o.nextFrame.children();o.pagination!==undefined&&e(o.paginationLinks[o.settings.startingFrameID-1]).addClass("current");if(o.transitionsSupported)if(!o.settings.animateStartingFrameIn){o.currentFrameID=o.nextFrameID;o.settings.moveActiveFrameToTop&&o.nextFrame.css("z-index",o.numberOfFrames);o._resetElements(o.transitionPrefix,o.nextFrameChildren,"0s");o.nextFrame.addClass("animate-in");if(o.settings.hashTags&&o.settings.hashChangesOnFirstFrame){o.currentHashTag=o.nextFrame.prop(o.getHashTagFrom);document.location.hash="#"+o.currentHashTag}setTimeout(function(){o._resetElements(o.transitionPrefix,o.nextFrameChildren,"")},100);o._resetAutoPlay(!0,o.settings.autoPlayDelay)}else if(o.settings.reverseAnimationsWhenNavigatingBackwards&&o.settings.autoPlayDirection-1&&o.settings.animateStartingFrameIn){o._resetElements(o.transitionPrefix,o.nextFrameChildren,"0s");o.nextFrame.addClass("animate-out");o.goTo(o.nextFrameID,-1,!0)}else o.goTo(o.nextFrameID,1,!0);else{o.container.addClass("sequence-fallback");o.currentFrameID=o.nextFrameID;if(o.settings.hashTags&&o.settings.hashChangesOnFirstFrame){o.currentHashTag=o.nextFrame.prop(o.getHashTagFrom);document.location.hash="#"+o.currentHashTag}o.frames.addClass("animate-in");o.frames.not(":eq("+(o.nextFrameID-1)+")").css({display:"none",opacity:0});o._resetAutoPlay(!0,o.settings.autoPlayDelay)}o.nextButton!==undefined&&o.nextButton.bind("click.sequence",function(){o.next()});o.prevButton!==undefined&&o.prevButton.bind("click.sequence",function(){o.prev()});o.pauseButton!==undefined&&o.pauseButton.bind("click.sequence",function(){o.pause(!0)});if(o.settings.keyNavigation){var n={left:37,right:39};e(document).bind("keydown.sequence",function(e){var n=String.fromCharCode(e.keyCode);if(n>0&&n<=o.numberOfFrames&&o.settings.numericKeysGoToFrames){o.nextFrameID=n;o.goTo(o.nextFrameID)}t(e.keyCode,o.settings.keyEvents);t(e.keyCode,o.settings.customKeyEvents)})}o.canvas.on({"mouseenter.sequence":function(){if(o.settings.pauseOnHover&&o.settings.autoPlay&&!o.hasTouch){o.isBeingHoveredOver=!0;o.isHardPaused||o.pause()}},"mouseleave.sequence":function(){if(o.settings.pauseOnHover&&o.settings.autoPlay&&!o.hasTouch){o.isBeingHoveredOver=!1;o.isHardPaused||o.unpause()}}});o.settings.hashTags&&e(window).bind("hashchange.sequence",function(){var t=location.hash.replace("#","");if(o.currentHashTag!==t){o.currentHashTag=t;o.frameHashIndex=e.inArray(o.currentHashTag,o.frameHashID);if(o.frameHashIndex!==-1){o.nextFrameID=o.frameHashIndex+1;o.goTo(o.nextFrameID)}}});if(o.settings.swipeNavigation&&o.hasTouch){var u,a,f=!1;o.canvas.on("touchstart.sequence",s)}}var o=this;o.container=e(n);o.canvas=o.container.children(".sequence-canvas");o.frames=o.canvas.children("li");o._modernizrForSequence();var u={WebkitTransition:"-webkit-",WebkitAnimation:"-webkit-",MozTransition:"-moz-","MozAnimation ":"-moz-",OTransition:"-o-",OAnimation:"-o-",msTransition:"-ms-",msAnimation:"-ms-",transition:"",animation:""},a={WebkitTransition:"webkitTransitionEnd.sequence",WebkitAnimation:"webkitAnimationEnd.sequence",MozTransition:"transitionend.sequence",MozAnimation:"animationend.sequence",OTransition:"otransitionend.sequence",OAnimation:"oanimationend.sequence",msTransition:"MSTransitionEnd.sequence",msAnimation:"MSAnimationEnd.sequence",transition:"transitionend.sequence",animation:"animationend.sequence"};o.transitionPrefix=u[ModernizrForSequence.prefixed("transition")],o.animationPrefix=u[ModernizrForSequence.prefixed("animation")],o.transitionProperties={},o.transitionEnd=a[ModernizrForSequence.prefixed("transition")]+" "+a[ModernizrForSequence.prefixed("animation")],o.numberOfFrames=o.frames.length,o.transitionsSupported=o.transitionPrefix!==undefined?!0:!1,o.hasTouch="ontouchstart"in window?!0:!1,o.isPaused=!1,o.isBeingHoveredOver=!1,o.container.removeClass("sequence-destroyed");o.paused=function(){},o.unpaused=function(){},o.beforeNextFrameAnimatesIn=function(){},o.afterNextFrameAnimatesIn=function(){},o.beforeCurrentFrameAnimatesOut=function(){},o.afterCurrentFrameAnimatesOut=function(){},o.afterLoaded=function(){};o.destroyed=function(){};o.settings=e.extend({},i,r);o.settings.preloader=o._renderUiElements(o.settings.preloader,".sequence-preloader");o.isStartingFrame=o.settings.animateStartingFrameIn?!0:!1;o.settings.unpauseDelay=o.settings.unpauseDelay===null?o.settings.autoPlayDelay:o.settings.unpauseDelay;o.getHashTagFrom=o.settings.hashDataAttribute?"data-sequence-hashtag":"id";o.frameHashID=[];o.direction=o.settings.autoPlayDirection;o.settings.hideFramesUntilPreloaded&&o.settings.preloader!==undefined&&o.settings.preloader!==!1&&o.frames.hide();o.transitionPrefix==="-o-"&&(o.transitionsSupported=o._operaTest());o.frames.removeClass("animate-in");var l=o.settings.preloadTheseFrames.length,c=o.settings.preloadTheseImages.length;if(o.settings.preloader===undefined||o.settings.preloader===!1||l===0&&c===0)if(t===!0){f();e(this).unbind("load.sequence")}else e(window).bind("load.sequence",function(){f();e(this).unbind("load.sequence")});else{var d=h(l),v=h(c,!0),m=e(d.concat(v));p(m,f)}}var t=!1;e(window).bind("load",function(){t=!0});n.prototype={startAutoPlay:function(e){var t=this;e=e===undefined?t.settings.autoPlayDelay:e;t.unpause();t._resetAutoPlay();t.autoPlayTimer=setTimeout(function(){t.settings.autoPlayDirection===1?t.next():t.prev()},e)},stopAutoPlay:function(){var e=this;e.pause(!0);clearTimeout(e.autoPlayTimer)},pause:function(e){var t=this;if(!t.isSoftPaused){if(t.pauseButton!==undefined){t.pauseButton.addClass("paused");t.pauseIcon!==undefined&&t.pauseIcon.show()}t.paused();t.isSoftPaused=!0;t.isHardPaused=e?!0:!1;t.isPaused=!0;t._resetAutoPlay()}else t.unpause()},unpause:function(e){var t=this;if(t.pauseButton!==undefined){t.pauseButton.removeClass("paused");t.pauseIcon!==undefined&&t.pauseIcon.hide()}t.isSoftPaused=!1;t.isHardPaused=!1;t.isPaused=!1;if(!t.active){e!==!1&&t.unpaused();t._resetAutoPlay(!0,t.settings.unpauseDelay)}else t.delayUnpause=!0},next:function(){var e=this;id=e.currentFrameID!==e.numberOfFrames?e.currentFrameID+1:1;e.active===!1||e.active===undefined?e.goTo(id,1):e.goTo(id,1,!0)},prev:function(){var e=this;id=e.currentFrameID===1?e.numberOfFrames:e.currentFrameID-1;e.active===!1||e.active===undefined?e.goTo(id,-1):e.goTo(id,-1,!0)},goTo:function(t,n,r){var i=this;i.nextFrameID=parseFloat(t);var s=r===!0?0:i.settings.transitionThreshold;if(i.nextFrameID===i.currentFrameID||i.settings.navigationSkip&&i.navigationSkipThresholdActive||!i.settings.navigationSkip&&i.active||!i.transitionsSupported&&i.active||!i.settings.cycle&&n===1&&i.currentFrameID===i.numberOfFrames||!i.settings.cycle&&n===-1&&i.currentFrameID===1||i.settings.preventReverseSkipping&&i.direction!==n&&i.active)return!1;if(i.settings.navigationSkip&&i.active){i.navigationSkipThresholdActive=!0;i.settings.fadeFrameWhenSkipped&&i.nextFrame.stop().animate({opacity:0},i.settings.fadeFrameTime);clearTimeout(i.transitionThresholdTimer);setTimeout(function(){i.navigationSkipThresholdActive=!1},i.settings.navigationSkipThreshold)}if(!i.active||i.settings.navigationSkip){i.active=!0;i._resetAutoPlay();n===undefined?i.direction=i.nextFrameID>i.currentFrameID?1:-1:i.direction=n;i.currentFrame=i.canvas.children(".animate-in");i.nextFrame=i.frames.eq(i.nextFrameID-1);i.currentFrameChildren=i.currentFrame.children();i.nextFrameChildren=i.nextFrame.children();if(i.pagination!==undefined){i.paginationLinks.removeClass("current");e(i.paginationLinks[i.nextFrameID-1]).addClass("current")}if(i.transitionsSupported){if(i.currentFrame.length!==undefined){i.beforeCurrentFrameAnimatesOut();i.settings.moveActiveFrameToTop&&i.currentFrame.css("z-index",1);i._resetElements(i.transitionPrefix,i.nextFrameChildren,"0s");if(!i.settings.reverseAnimationsWhenNavigatingBackwards||i.direction===1){i.nextFrame.removeClass("animate-out");i._resetElements(i.transitionPrefix,i.currentFrameChildren,"")}else if(i.settings.reverseAnimationsWhenNavigatingBackwards&&i.direction===-1){i.nextFrame.addClass("animate-out");i._reverseTransitionProperties()}}else i.isStartingFrame=!1;i.active=!0;i.currentFrame.unbind(i.transitionEnd);i.nextFrame.unbind(i.transitionEnd);i.settings.fadeFrameWhenSkipped&&i.settings.navigationSkip&&i.nextFrame.css("opacity",1);i.beforeNextFrameAnimatesIn();i.settings.moveActiveFrameToTop&&i.nextFrame.css("z-index",i.numberOfFrames);if(!i.settings.reverseAnimationsWhenNavigatingBackwards||i.direction===1){setTimeout(function(){i._resetElements(i.transitionPrefix,i.nextFrameChildren,"");i._waitForAnimationsToComplete(i.nextFrame,i.nextFrameChildren,"in");(i.afterCurrentFrameAnimatesOut!=="function () {}"||i.settings.transitionThreshold===!0&&r!==!0)&&i._waitForAnimationsToComplete(i.currentFrame,i.currentFrameChildren,"out",!0,1)},50);setTimeout(function(){if(i.settings.transitionThreshold===!1||i.settings.transitionThreshold===0||r===!0){i.currentFrame.toggleClass("animate-out animate-in");i.nextFrame.addClass("animate-in")}else{i.currentFrame.toggleClass("animate-out animate-in");i.settings.transitionThreshold!==!0&&(i.transitionThresholdTimer=setTimeout(function(){i.nextFrame.addClass("animate-in")},s))}},50)}else if(i.settings.reverseAnimationsWhenNavigatingBackwards&&i.direction===-1){setTimeout(function(){i._resetElements(i.transitionPrefix,i.currentFrameChildren,"");i._resetElements(i.transitionPrefix,i.nextFrameChildren,"");i._reverseTransitionProperties();i._waitForAnimationsToComplete(i.nextFrame,i.nextFrameChildren,"in");(i.afterCurrentFrameAnimatesOut!=="function () {}"||i.settings.transitionThreshold===!0&&r!==!0)&&i._waitForAnimationsToComplete(i.currentFrame,i.currentFrameChildren,"out",!0,-1)},50);setTimeout(function(){if(i.settings.transitionThreshold===!1||i.settings.transitionThreshold===0||r===!0){i.currentFrame.removeClass("animate-in");i.nextFrame.toggleClass("animate-out animate-in")}else{i.currentFrame.removeClass("animate-in");i.settings.transitionThreshold!==!0&&(i.transitionThresholdTimer=setTimeout(function(){i.nextFrame.toggleClass("animate-out animate-in")},s))}},50)}}else{function o(){i._setHashTag();i.active=!1;i._resetAutoPlay(!0,i.settings.autoPlayDelay)}switch(i.settings.fallback.theme){case"fade":i.frames.css({position:"relative"});i.beforeCurrentFrameAnimatesOut();i.currentFrame=i.frames.eq(i.currentFrameID-1);i.currentFrame.animate({opacity:0},i.settings.fallback.speed,function(){i.currentFrame.css({display:"none","z-index":"1"});i.afterCurrentFrameAnimatesOut();i.beforeNextFrameAnimatesIn();i.nextFrame.css({display:"block","z-index":i.numberOfFrames}).animate({opacity:1},500,function(){i.afterNextFrameAnimatesIn()});o()});i.frames.css({position:"relative"});break;case"slide":default:var u={},a={},f={};if(i.direction===1){u.left="-100%";a.left="100%"}else{u.left="100%";a.left="-100%"}f.left="0";f.opacity=1;i.currentFrame=i.frames.eq(i.currentFrameID-1);i.beforeCurrentFrameAnimatesOut();i.currentFrame.animate(u,i.settings.fallback.speed,function(){i.currentFrame.css({display:"none","z-index":"1"});i.afterCurrentFrameAnimatesOut()});i.beforeNextFrameAnimatesIn();i.nextFrame.show().css(a);i.nextFrame.css({display:"block","z-index":i.numberOfFrames}).animate(f,i.settings.fallback.speed,function(){o();i.afterNextFrameAnimatesIn()})}}i.currentFrameID=i.nextFrameID}},destroy:function(t){var n=this;n.container.addClass("sequence-destroyed");n.nextButton!==undefined&&n.nextButton.unbind("click.sequence");n.prevButton!==undefined&&n.prevButton.unbind("click.sequence");n.pauseButton!==undefined&&n.pauseButton.unbind("click.sequence");n.pagination!==undefined&&n.paginationLinks.unbind("click.sequence");e(document).unbind("keydown.sequence");n.canvas.unbind("mouseenter.sequence, mouseleave.sequence, touchstart.sequence, touchmove.sequence");e(window).unbind("hashchange.sequence");n.stopAutoPlay();clearTimeout(n.transitionThresholdTimer);n.canvas.children("li").remove();n.canvas.prepend(n.frames);n.frames.removeClass("animate-in animate-out").removeAttr("style");n.frames.eq(n.currentFrameID-1).addClass("animate-in");n.nextButton!==undefined&&n.nextButton!==!1&&n.nextButton.hide();n.prevButton!==undefined&&n.prevButton!==!1&&n.prevButton.hide();n.pauseButton!==undefined&&n.pauseButton!==!1&&n.pauseButton.hide();n.pauseIcon!==undefined&&n.pauseIcon!==!1&&n.pauseIcon.hide();n.pagination!==undefined&&n.pagination!==!1&&n.pagination.hide();t!==undefined&&t();n.destroyed();n.container.removeData()},_initCustomKeyEvent:function(e){var t=this;switch(e){case"next":t.next();break;case"prev":t.prev();break;case"pause":t.pause(!0)}},_resetElements:function(e,t,n){var r=this;t.css(r._prefixCSS(e,{"transition-duration":n,"transition-delay":n,"transition-timing-function":""}))},_reverseTransitionProperties:function(){var t=this,n=[],r=[];t.currentFrameChildren.each(function(){n.push(parseFloat(e(this).css(t.transitionPrefix+"transition-duration").replace("s",""))+parseFloat(e(this).css(t.transitionPrefix+"transition-delay").replace("s","")))});t.nextFrameChildren.each(function(){r.push(parseFloat(e(this).css(t.transitionPrefix+"transition-duration").replace("s",""))+parseFloat(e(this).css(t.transitionPrefix+"transition-delay").replace("s","")))});var i=Math.max.apply(Math,n),s=Math.max.apply(Math,r),o=i-s,u=0,a=0;o<0&&!t.settings.preventDelayWhenReversingAnimations?u=Math.abs(o):o>0&&(a=Math.abs(o));var f=function(n,r,i,s){function o(e){e=e.split(",")[0];var t={linear:"cubic-bezier(0.0,0.0,1.0,1.0)",ease:"cubic-bezier(0.25, 0.1, 0.25, 1.0)","ease-in":"cubic-bezier(0.42, 0.0, 1.0, 1.0)","ease-in-out":"cubic-bezier(0.42, 0.0, 0.58, 1.0)","ease-out":"cubic-bezier(0.0, 0.0, 0.58, 1.0)"};e.indexOf("cubic-bezier")<0&&(e=t[e]);return e}r.each(function(){var r=parseFloat(e(this).css(t.transitionPrefix+"transition-duration").replace("s","")),u=parseFloat(e(this).css(t.transitionPrefix+"transition-delay").replace("s","")),a=e(this).css(t.transitionPrefix+"transition-timing-function");if(a.indexOf("cubic")===-1)var a=o(a);var f=a.replace("cubic-bezier(","").replace(")","").split(",");e.each(f,function(e,t){f[e]=parseFloat(t)});var l=[1-f[2],1-f[3],1-f[0],1-f[1]];a="cubic-bezier("+l+")";var c=r+u;n["transition-duration"]=r+"s";n["transition-delay"]=i-c+s+"s";n["transition-timing-function"]=a;e(this).css(t._prefixCSS(t.transitionPrefix,n))})};f(t.transitionProperties,t.currentFrameChildren,i,u);f(t.transitionProperties,t.nextFrameChildren,s,a)},_prefixCSS:function(e,t){var n=this,r={};for(var i in t)r[e+i]=t[i];return r},_resetAutoPlay:function(e,t){var n=this;if(e===!0){if(n.settings.autoPlay&&!n.isSoftPaused){clearTimeout(n.autoPlayTimer);n.autoPlayTimer=setTimeout(function(){n.settings.autoPlayDirection===1?n.next():n.prev()},t)}}else clearTimeout(n.autoPlayTimer)},_renderUiElements:function(t,n){var r=this;switch(t){case!1:return undefined;case!0:n===".sequence-preloader"&&r._defaultPreloader(r.container,r.transitionsSupported,r.animationPrefix);return e(n);default:return e(t)}},_waitForAnimationsToComplete:function(t,n,r,i,s){var o=this;if(r==="out")var u=function(){o.afterCurrentFrameAnimatesOut();o.settings.transitionThreshold===!0&&(s===1?o.nextFrame.addClass("animate-in"):s===-1&&o.nextFrame.toggleClass("animate-out animate-in"))};else if(r==="in")var u=function(){o.afterNextFrameAnimatesIn();o._setHashTag();o.active=!1;if(!o.isHardPaused&&!o.isBeingHoveredOver)if(!o.delayUnpause)o.unpause(!1);else{o.delayUnpause=!1;o.unpause()}};n.data("animationEnded",!1);t.bind(o.transitionEnd,function(r){e(r.target).data("animationEnded",!0);var i=!0;n.each(function(){if(e(this).data("animationEnded")===!1){i=!1;return!1}});if(i){t.unbind(o.transitionEnd);u()}})},_setHashTag:function(){var t=this;if(t.settings.hashTags){t.currentHashTag=t.nextFrame.prop(t.getHashTagFrom);t.frameHashIndex=e.inArray(t.currentHashTag,t.frameHashID);if(t.frameHashIndex!==-1&&(t.settings.hashChangesOnFirstFrame||!t.isStartingFrame||!t.transitionsSupported)){t.nextFrameID=t.frameHashIndex+1;document.location.hash="#"+t.currentHashTag}else{t.nextFrameID=t.settings.startingFrameID;t.isStartingFrame=!1}}},_modernizrForSequence:function(){window.ModernizrForSequence=function(e,t,n){function r(e){v.cssText=e}function i(e,t){return r(prefixes.join(e+";")+(t||""))}function s(e,t){return typeof e===t}function o(e,t){return!!~(""+e).indexOf(t)}function u(e,t){for(var r in e){var i=e[r];if(!o(i,"-")&&v[i]!==n)return t=="pfx"?i:!0}return!1}function a(e,t,r){for(var i in e){var o=t[e[i]];if(o!==n)return r===!1?e[i]:s(o,"function")?o.bind(r||t):o}return!1}function f(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+b.join(r+" ")+r).split(" ");return s(t,"string")||s(t,"undefined")?u(i,t):(i=(e+" "+w.join(r+" ")+r).split(" "),a(i,t,n))}var l="2.6.1",c={},h=t.documentElement,p="modernizrForSequence",d=t.createElement(p),v=d.style,m,g={}.toString,y="Webkit Moz O ms",b=y.split(" "),w=y.toLowerCase().split(" "),E={svg:"http://www.w3.org/2000/svg"},S={},x={},T={},N=[],C=N.slice,k,L={}.hasOwnProperty,A;!s(L,"undefined")&&!s(L.call,"undefined")?A=function(e,t){return L.call(e,t)}:A=function(e,t){return t in e&&s(e.constructor.prototype[t],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(e){var t=self;if(typeof t!="function")throw new TypeError;var n=C.call(arguments,1),r=function(){if(self instanceof r){var i=function(){};i.prototype=t.prototype;var s=new i,o=t.apply(s,n.concat(C.call(arguments)));return Object(o)===o?o:s}return t.apply(e,n.concat(C.call(arguments)))};return r}),S.svg=function(){return!!t.createElementNS&&!!t.createElementNS(E.svg,"svg").createSVGRect};for(var O in S)A(S,O)&&(k=O.toLowerCase(),c[k]=S[O](),N.push((c[k]?"":"no-")+k));return c.addTest=function(e,t){if(typeof e=="object")for(var r in e)A(e,r)&&c.addTest(r,e[r]);else{e=e.toLowerCase();if(c[e]!==n)return c;t=typeof t=="function"?t():t,enableClasses&&(h.className+=" "+(t?"":"no-")+e),c[e]=t}return c},r(""),d=m=null,c._version=l,c._domPrefixes=w,c._cssomPrefixes=b,c.testProp=function(e){return u([e])},c.testAllProps=f,c.prefixed=function(e,t,n){return t?f(e,t,n):f(e,"pfx")},c}(self,self.document)},_defaultPreloader:function(t,n,r){var i='<div class="sequence-preloader"><svg class="preloading" xmlns="http://www.w3.org/2000/svg"><circle class="circle" cx="6" cy="6" r="6" /><circle class="circle" cx="22" cy="6" r="6" /><circle class="circle" cx="38" cy="6" r="6" /></svg></div>';e("head").append("<style>.sequence-preloader{height: 100%;position: absolute;width: 100%;z-index: 999999;}@"+r+"keyframes preload{0%{opacity: 1;}50%{opacity: 0;}100%{opacity: 1;}}.sequence-preloader .preloading .circle{fill: #ff9442;display: inline-block;height: 12px;position: relative;top: -50%;width: 12px;"+r+"animation: preload 1s infinite; animation: preload 1s infinite;}.preloading{display:block;height: 12px;margin: 0 auto;top: 50%;margin-top:-6px;position: relative;width: 48px;}.sequence-preloader .preloading .circle:nth-child(2){"+r+"animation-delay: .15s; animation-delay: .15s;}.sequence-preloader .preloading .circle:nth-child(3){"+r+"animation-delay: .3s; animation-delay: .3s;}.preloading-complete{opacity: 0;visibility: hidden;"+r+"transition-duration: 1s; transition-duration: 1s;}div.inline{background-color: #ff9442; margin-right: 4px; float: left;}</style>");t.prepend(i);if(!ModernizrForSequence.svg&&!n){e(".sequence-preloader").prepend('<div class="preloading"><div class="circle inline"></div><div class="circle inline"></div><div class="circle inline"></div></div>');setInterval(function(){e(".sequence-preloader .circle").fadeToggle(500)},500)}else n||setInterval(function(){e(".sequence-preloader").fadeToggle(500)},500)},_operaTest:function(){e("body").append('<span id="sequence-opera-test"></span>');var t=e("#sequence-opera-test");t.css("-o-transition","1s");if(t.css("-o-transition")!=="1s"){t.remove();return!1}t.remove();return!0}};var r={startingFrameID:1,cycle:!0,animateStartingFrameIn:!1,transitionThreshold:!1,reverseAnimationsWhenNavigatingBackwards:!0,preventDelayWhenReversingAnimations:!1,moveActiveFrameToTop:!0,autoPlay:!1,autoPlayDirection:1,autoPlayDelay:5e3,navigationSkip:!0,navigationSkipThreshold:250,fadeFrameWhenSkipped:!0,fadeFrameTime:150,preventReverseSkipping:!1,nextButton:!1,showNextButtonOnInit:!0,prevButton:!1,showPrevButtonOnInit:!0,pauseButton:!1,unpauseDelay:null,pauseOnHover:!0,pauseIcon:!1,showPauseButtonOnInit:!0,pagination:!1,showPaginationOnInit:!0,preloader:!1,preloadTheseFrames:[1],preloadTheseImages:[],hideFramesUntilPreloaded:!0,prependPreloadingComplete:!0,hidePreloaderUsingCSS:!0,hidePreloaderDelay:0,keyNavigation:!0,numericKeysGoToFrames:!0,keyEvents:{left:"prev",right:"next"},customKeyEvents:{},swipeNavigation:!0,swipeThreshold:20,swipePreventsDefault:!1,swipeEvents:{left:"prev",right:"next",up:!1,down:!1},hashTags:!1,hashDataAttribute:!1,hashChangesOnFirstFrame:!1,fallback:{theme:"slide",speed:500}};e.fn.sequence=function(t){return this.each(function(){e.data(this,"sequence")||e.data(this,"sequence",new n(e(this),t,r))})}})(jQuery);

/* jQuery UI - v1.10.3 */

;(function(e,t){function i(t,i){var s,n,r,o=t.nodeName.toLowerCase();return"area"===o?(s=t.parentNode,n=s.name,t.href&&n&&"map"===s.nodeName.toLowerCase()?(r=e("img[usemap=#"+n+"]")[0],!!r&&a(r)):!1):(/input|select|textarea|button|object/.test(o)?!t.disabled:"a"===o?t.href||i:i)&&a(t)}function a(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}var s=0,n=/^ui-id-\d+$/;e.ui=e.ui||{},e.extend(e.ui,{version:"1.10.3",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({focus:function(t){return function(i,a){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),a&&a.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),scrollParent:function(){var t;return t=e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(var a,s,n=e(this[0]);n.length&&n[0]!==document;){if(a=n.css("position"),("absolute"===a||"relative"===a||"fixed"===a)&&(s=parseInt(n.css("zIndex"),10),!isNaN(s)&&0!==s))return s;n=n.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++s)})},removeUniqueId:function(){return this.each(function(){n.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,a){return!!e.data(t,a[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var a=e.attr(t,"tabindex"),s=isNaN(a);return(s||a>=0)&&i(t,!s)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(i,a){function s(t,i,a,s){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,a&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),s&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===a?["Left","Right"]:["Top","Bottom"],r=a.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+a]=function(i){return i===t?o["inner"+a].call(this):this.each(function(){e(this).css(r,s(this,i)+"px")})},e.fn["outer"+a]=function(t,i){return"number"!=typeof t?o["outer"+a].call(this,t):this.each(function(){e(this).css(r,s(this,t,!0,i)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,i,a){var s,n=e.ui[t].prototype;for(s in a)n.plugins[s]=n.plugins[s]||[],n.plugins[s].push([i,a[s]])},call:function(e,t,i){var a,s=e.plugins[t];if(s&&e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType)for(a=0;s.length>a;a++)e.options[s[a][0]]&&s[a][1].apply(e.element,i)}},hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var a=i&&"left"===i?"scrollLeft":"scrollTop",s=!1;return t[a]>0?!0:(t[a]=1,s=t[a]>0,t[a]=0,s)}})})(jQuery);(function(e,t){var i=0,s=Array.prototype.slice,a=e.cleanData;e.cleanData=function(t){for(var i,s=0;null!=(i=t[s]);s++)try{e(i).triggerHandler("remove")}catch(n){}a(t)},e.widget=function(i,s,a){var n,r,o,h,l={},u=i.split(".")[0];i=i.split(".")[1],n=u+"-"+i,a||(a=s,s=e.Widget),e.expr[":"][n.toLowerCase()]=function(t){return!!e.data(t,n)},e[u]=e[u]||{},r=e[u][i],o=e[u][i]=function(e,i){return this._createWidget?(arguments.length&&this._createWidget(e,i),t):new o(e,i)},e.extend(o,r,{version:a.version,_proto:e.extend({},a),_childConstructors:[]}),h=new s,h.options=e.widget.extend({},h.options),e.each(a,function(i,a){return e.isFunction(a)?(l[i]=function(){var e=function(){return s.prototype[i].apply(this,arguments)},t=function(e){return s.prototype[i].apply(this,e)};return function(){var i,s=this._super,n=this._superApply;return this._super=e,this._superApply=t,i=a.apply(this,arguments),this._super=s,this._superApply=n,i}}(),t):(l[i]=a,t)}),o.prototype=e.widget.extend(h,{widgetEventPrefix:r?h.widgetEventPrefix:i},l,{constructor:o,namespace:u,widgetName:i,widgetFullName:n}),r?(e.each(r._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete r._childConstructors):s._childConstructors.push(o),e.widget.bridge(i,o)},e.widget.extend=function(i){for(var a,n,r=s.call(arguments,1),o=0,h=r.length;h>o;o++)for(a in r[o])n=r[o][a],r[o].hasOwnProperty(a)&&n!==t&&(i[a]=e.isPlainObject(n)?e.isPlainObject(i[a])?e.widget.extend({},i[a],n):e.widget.extend({},n):n);return i},e.widget.bridge=function(i,a){var n=a.prototype.widgetFullName||i;e.fn[i]=function(r){var o="string"==typeof r,h=s.call(arguments,1),l=this;return r=!o&&h.length?e.widget.extend.apply(null,[r].concat(h)):r,o?this.each(function(){var s,a=e.data(this,n);return a?e.isFunction(a[r])&&"_"!==r.charAt(0)?(s=a[r].apply(a,h),s!==a&&s!==t?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):t):e.error("no such method '"+r+"' for "+i+" widget instance"):e.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+r+"'")}):this.each(function(){var t=e.data(this,n);t?t.option(r||{})._init():e.data(this,n,new a(r,this))}),l}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,s){s=e(s||this.defaultElement||this)[0],this.element=e(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),s!==this&&(e.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===s&&this.destroy()}}),this.document=e(s.style?s.ownerDocument:s.document||s),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(i,s){var a,n,r,o=i;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof i)if(o={},a=i.split("."),i=a.shift(),a.length){for(n=o[i]=e.widget.extend({},this.options[i]),r=0;a.length-1>r;r++)n[a[r]]=n[a[r]]||{},n=n[a[r]];if(i=a.pop(),s===t)return n[i]===t?null:n[i];n[i]=s}else{if(s===t)return this.options[i]===t?null:this.options[i];o[i]=s}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,a){var n,r=this;"boolean"!=typeof i&&(a=s,s=i,i=!1),a?(s=n=e(s),this.bindings=this.bindings.add(s)):(a=s,s=this.element,n=this.widget()),e.each(a,function(a,o){function h(){return i||r.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?r[o]:o).apply(r,arguments):t}"string"!=typeof o&&(h.guid=o.guid=o.guid||h.guid||e.guid++);var l=a.match(/^(\w+)\s*(.*)$/),u=l[1]+r.eventNamespace,c=l[2];c?n.delegate(c,u,h):s.bind(u,h)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var a,n,r=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],n=i.originalEvent)for(a in n)a in i||(i[a]=n[a]);return this.element.trigger(i,s),!(e.isFunction(r)&&r.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,a,n){"string"==typeof a&&(a={effect:a});var r,o=a?a===!0||"number"==typeof a?i:a.effect||i:t;a=a||{},"number"==typeof a&&(a={duration:a}),r=!e.isEmptyObject(a),a.complete=n,a.delay&&s.delay(a.delay),r&&e.effects&&e.effects.effect[o]?s[t](a):o!==t&&s[o]?s[o](a.duration,a.easing,n):s.queue(function(i){e(this)[t](),n&&n.call(s[0]),i()})}})})(jQuery);(function(e){var t=!1;e(document).mouseup(function(){t=!1}),e.widget("ui.mouse",{version:"1.10.3",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(i){return!0===e.data(i.target,t.widgetName+".preventClickEvent")?(e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):undefined}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!t){this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var s=this,a=1===i.which,n="string"==typeof this.options.cancel&&i.target.nodeName?e(i.target).closest(this.options.cancel).length:!1;return a&&!n&&this._mouseCapture(i)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){s.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,!this._mouseStarted)?(i.preventDefault(),!0):(!0===e.data(i.target,this.widgetName+".preventClickEvent")&&e.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return s._mouseMove(e)},this._mouseUpDelegate=function(e){return s._mouseUp(e)},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),t=!0,!0)):!0}},_mouseMove:function(t){return e.ui.ie&&(!document.documentMode||9>document.documentMode)&&!t.button?this._mouseUp(t):this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})})(jQuery);(function(e){e.widget("ui.draggable",e.ui.mouse,{version:"1.10.3",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"!==this.options.helper||/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture:function(t){var i=this.options;return this.helper||i.disabled||e(t.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(t),this.handle?(e(i.iframeFix===!0?"iframe":i.iframeFix).each(function(){e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(e(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(t){var i=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offsetParent=this.helper.offsetParent(),this.offsetParentCssPosition=this.offsetParent.css("position"),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},this.offset.scroll=!1,e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_mouseDrag:function(t,i){if("fixed"===this.offsetParentCssPosition&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),!i){var a=this._uiHash();if(this._trigger("drag",t,a)===!1)return this._mouseUp({}),!1;this.position=a.position}return this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var i=this,a=!1;return e.ui.ddmanager&&!this.options.dropBehaviour&&(a=e.ui.ddmanager.drop(this,t)),this.dropped&&(a=this.dropped,this.dropped=!1),"original"!==this.options.helper||e.contains(this.element[0].ownerDocument,this.element[0])?("invalid"===this.options.revert&&!a||"valid"===this.options.revert&&a||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,a)?e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",t)!==!1&&i._clear()}):this._trigger("stop",t)!==!1&&this._clear(),!1):!1},_mouseUp:function(t){return e("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){return this.options.handle?!!e(t.target).closest(this.element.find(this.options.handle)).length:!0},_createHelper:function(t){var i=this.options,a=e.isFunction(i.helper)?e(i.helper.apply(this.element[0],[t])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return a.parents("body").length||a.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),a[0]===this.element[0]||/(fixed|absolute)/.test(a.css("position"))||a.css("position","absolute"),a},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){var t=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&e.ui.ie)&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var e=this.element.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,a,s=this.options;return s.containment?"window"===s.containment?(this.containment=[e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,e(window).scrollLeft()+e(window).width()-this.helperProportions.width-this.margins.left,e(window).scrollTop()+(e(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],undefined):"document"===s.containment?(this.containment=[0,0,e(document).width()-this.helperProportions.width-this.margins.left,(e(document).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],undefined):s.containment.constructor===Array?(this.containment=s.containment,undefined):("parent"===s.containment&&(s.containment=this.helper[0].parentNode),i=e(s.containment),a=i[0],a&&(t="hidden"!==i.css("overflow"),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(t?Math.max(a.scrollWidth,a.offsetWidth):a.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(a.scrollHeight,a.offsetHeight):a.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=i),undefined):(this.containment=null,undefined)},_convertPositionTo:function(t,i){i||(i=this.position);var a="absolute"===t?1:-1,s="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent;return this.offset.scroll||(this.offset.scroll={top:s.scrollTop(),left:s.scrollLeft()}),{top:i.top+this.offset.relative.top*a+this.offset.parent.top*a-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top)*a,left:i.left+this.offset.relative.left*a+this.offset.parent.left*a-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)*a}},_generatePosition:function(t){var i,a,s,n,r=this.options,o="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,l=t.pageX,h=t.pageY;return this.offset.scroll||(this.offset.scroll={top:o.scrollTop(),left:o.scrollLeft()}),this.originalPosition&&(this.containment&&(this.relative_container?(a=this.relative_container.offset(),i=[this.containment[0]+a.left,this.containment[1]+a.top,this.containment[2]+a.left,this.containment[3]+a.top]):i=this.containment,t.pageX-this.offset.click.left<i[0]&&(l=i[0]+this.offset.click.left),t.pageY-this.offset.click.top<i[1]&&(h=i[1]+this.offset.click.top),t.pageX-this.offset.click.left>i[2]&&(l=i[2]+this.offset.click.left),t.pageY-this.offset.click.top>i[3]&&(h=i[3]+this.offset.click.top)),r.grid&&(s=r.grid[1]?this.originalPageY+Math.round((h-this.originalPageY)/r.grid[1])*r.grid[1]:this.originalPageY,h=i?s-this.offset.click.top>=i[1]||s-this.offset.click.top>i[3]?s:s-this.offset.click.top>=i[1]?s-r.grid[1]:s+r.grid[1]:s,n=r.grid[0]?this.originalPageX+Math.round((l-this.originalPageX)/r.grid[0])*r.grid[0]:this.originalPageX,l=i?n-this.offset.click.left>=i[0]||n-this.offset.click.left>i[2]?n:n-this.offset.click.left>=i[0]?n-r.grid[0]:n+r.grid[0]:n)),{top:h-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top),left:l-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(t,i,a){return a=a||this._uiHash(),e.ui.plugin.call(this,t,[i,a]),"drag"===t&&(this.positionAbs=this._convertPositionTo("absolute")),e.Widget.prototype._trigger.call(this,t,i,a)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,i){var a=e(this).data("ui-draggable"),s=a.options,n=e.extend({},i,{item:a.element});a.sortables=[],e(s.connectToSortable).each(function(){var i=e.data(this,"ui-sortable");i&&!i.options.disabled&&(a.sortables.push({instance:i,shouldRevert:i.options.revert}),i.refreshPositions(),i._trigger("activate",t,n))})},stop:function(t,i){var a=e(this).data("ui-draggable"),s=e.extend({},i,{item:a.element});e.each(a.sortables,function(){this.instance.isOver?(this.instance.isOver=0,a.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=this.shouldRevert),this.instance._mouseStop(t),this.instance.options.helper=this.instance.options._helper,"original"===a.options.helper&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",t,s))})},drag:function(t,i){var a=e(this).data("ui-draggable"),s=this;e.each(a.sortables,function(){var n=!1,r=this;this.instance.positionAbs=a.positionAbs,this.instance.helperProportions=a.helperProportions,this.instance.offset.click=a.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(n=!0,e.each(a.sortables,function(){return this.instance.positionAbs=a.positionAbs,this.instance.helperProportions=a.helperProportions,this.instance.offset.click=a.offset.click,this!==r&&this.instance._intersectsWith(this.instance.containerCache)&&e.contains(r.instance.element[0],this.instance.element[0])&&(n=!1),n})),n?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=e(s).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return i.helper[0]},t.target=this.instance.currentItem[0],this.instance._mouseCapture(t,!0),this.instance._mouseStart(t,!0,!0),this.instance.offset.click.top=a.offset.click.top,this.instance.offset.click.left=a.offset.click.left,this.instance.offset.parent.left-=a.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=a.offset.parent.top-this.instance.offset.parent.top,a._trigger("toSortable",t),a.dropped=this.instance.element,a.currentItem=a.element,this.instance.fromOutside=a),this.instance.currentItem&&this.instance._mouseDrag(t)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",t,this.instance._uiHash(this.instance)),this.instance._mouseStop(t,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),a._trigger("fromSortable",t),a.dropped=!1)})}}),e.ui.plugin.add("draggable","cursor",{start:function(){var t=e("body"),i=e(this).data("ui-draggable").options;t.css("cursor")&&(i._cursor=t.css("cursor")),t.css("cursor",i.cursor)},stop:function(){var t=e(this).data("ui-draggable").options;t._cursor&&e("body").css("cursor",t._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,i){var a=e(i.helper),s=e(this).data("ui-draggable").options;a.css("opacity")&&(s._opacity=a.css("opacity")),a.css("opacity",s.opacity)},stop:function(t,i){var a=e(this).data("ui-draggable").options;a._opacity&&e(i.helper).css("opacity",a._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(){var t=e(this).data("ui-draggable");t.scrollParent[0]!==document&&"HTML"!==t.scrollParent[0].tagName&&(t.overflowOffset=t.scrollParent.offset())},drag:function(t){var i=e(this).data("ui-draggable"),a=i.options,s=!1;i.scrollParent[0]!==document&&"HTML"!==i.scrollParent[0].tagName?(a.axis&&"x"===a.axis||(i.overflowOffset.top+i.scrollParent[0].offsetHeight-t.pageY<a.scrollSensitivity?i.scrollParent[0].scrollTop=s=i.scrollParent[0].scrollTop+a.scrollSpeed:t.pageY-i.overflowOffset.top<a.scrollSensitivity&&(i.scrollParent[0].scrollTop=s=i.scrollParent[0].scrollTop-a.scrollSpeed)),a.axis&&"y"===a.axis||(i.overflowOffset.left+i.scrollParent[0].offsetWidth-t.pageX<a.scrollSensitivity?i.scrollParent[0].scrollLeft=s=i.scrollParent[0].scrollLeft+a.scrollSpeed:t.pageX-i.overflowOffset.left<a.scrollSensitivity&&(i.scrollParent[0].scrollLeft=s=i.scrollParent[0].scrollLeft-a.scrollSpeed))):(a.axis&&"x"===a.axis||(t.pageY-e(document).scrollTop()<a.scrollSensitivity?s=e(document).scrollTop(e(document).scrollTop()-a.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<a.scrollSensitivity&&(s=e(document).scrollTop(e(document).scrollTop()+a.scrollSpeed))),a.axis&&"y"===a.axis||(t.pageX-e(document).scrollLeft()<a.scrollSensitivity?s=e(document).scrollLeft(e(document).scrollLeft()-a.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<a.scrollSensitivity&&(s=e(document).scrollLeft(e(document).scrollLeft()+a.scrollSpeed)))),s!==!1&&e.ui.ddmanager&&!a.dropBehaviour&&e.ui.ddmanager.prepareOffsets(i,t)}}),e.ui.plugin.add("draggable","snap",{start:function(){var t=e(this).data("ui-draggable"),i=t.options;t.snapElements=[],e(i.snap.constructor!==String?i.snap.items||":data(ui-draggable)":i.snap).each(function(){var i=e(this),a=i.offset();this!==t.element[0]&&t.snapElements.push({item:this,width:i.outerWidth(),height:i.outerHeight(),top:a.top,left:a.left})})},drag:function(t,i){var a,s,n,r,o,l,h,u,d,c,p=e(this).data("ui-draggable"),f=p.options,m=f.snapTolerance,g=i.offset.left,v=g+p.helperProportions.width,y=i.offset.top,b=y+p.helperProportions.height;for(d=p.snapElements.length-1;d>=0;d--)o=p.snapElements[d].left,l=o+p.snapElements[d].width,h=p.snapElements[d].top,u=h+p.snapElements[d].height,o-m>v||g>l+m||h-m>b||y>u+m||!e.contains(p.snapElements[d].item.ownerDocument,p.snapElements[d].item)?(p.snapElements[d].snapping&&p.options.snap.release&&p.options.snap.release.call(p.element,t,e.extend(p._uiHash(),{snapItem:p.snapElements[d].item})),p.snapElements[d].snapping=!1):("inner"!==f.snapMode&&(a=m>=Math.abs(h-b),s=m>=Math.abs(u-y),n=m>=Math.abs(o-v),r=m>=Math.abs(l-g),a&&(i.position.top=p._convertPositionTo("relative",{top:h-p.helperProportions.height,left:0}).top-p.margins.top),s&&(i.position.top=p._convertPositionTo("relative",{top:u,left:0}).top-p.margins.top),n&&(i.position.left=p._convertPositionTo("relative",{top:0,left:o-p.helperProportions.width}).left-p.margins.left),r&&(i.position.left=p._convertPositionTo("relative",{top:0,left:l}).left-p.margins.left)),c=a||s||n||r,"outer"!==f.snapMode&&(a=m>=Math.abs(h-y),s=m>=Math.abs(u-b),n=m>=Math.abs(o-g),r=m>=Math.abs(l-v),a&&(i.position.top=p._convertPositionTo("relative",{top:h,left:0}).top-p.margins.top),s&&(i.position.top=p._convertPositionTo("relative",{top:u-p.helperProportions.height,left:0}).top-p.margins.top),n&&(i.position.left=p._convertPositionTo("relative",{top:0,left:o}).left-p.margins.left),r&&(i.position.left=p._convertPositionTo("relative",{top:0,left:l-p.helperProportions.width}).left-p.margins.left)),!p.snapElements[d].snapping&&(a||s||n||r||c)&&p.options.snap.snap&&p.options.snap.snap.call(p.element,t,e.extend(p._uiHash(),{snapItem:p.snapElements[d].item})),p.snapElements[d].snapping=a||s||n||r||c)}}),e.ui.plugin.add("draggable","stack",{start:function(){var t,i=this.data("ui-draggable").options,a=e.makeArray(e(i.stack)).sort(function(t,i){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(i).css("zIndex"),10)||0)});a.length&&(t=parseInt(e(a[0]).css("zIndex"),10)||0,e(a).each(function(i){e(this).css("zIndex",t+i)}),this.css("zIndex",t+a.length))}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,i){var a=e(i.helper),s=e(this).data("ui-draggable").options;a.css("zIndex")&&(s._zIndex=a.css("zIndex")),a.css("zIndex",s.zIndex)},stop:function(t,i){var a=e(this).data("ui-draggable").options;a._zIndex&&e(i.helper).css("zIndex",a._zIndex)}})})(jQuery);(function(e){function t(e,t,i){return e>t&&t+i>e}e.widget("ui.droppable",{version:"1.10.3",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var t=this.options,i=t.accept;this.isover=!1,this.isout=!0,this.accept=e.isFunction(i)?i:function(e){return e.is(i)},this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight},e.ui.ddmanager.droppables[t.scope]=e.ui.ddmanager.droppables[t.scope]||[],e.ui.ddmanager.droppables[t.scope].push(this),t.addClasses&&this.element.addClass("ui-droppable")},_destroy:function(){for(var t=0,i=e.ui.ddmanager.droppables[this.options.scope];i.length>t;t++)i[t]===this&&i.splice(t,1);this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(t,i){"accept"===t&&(this.accept=e.isFunction(i)?i:function(e){return e.is(i)}),e.Widget.prototype._setOption.apply(this,arguments)},_activate:function(t){var i=e.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),i&&this._trigger("activate",t,this.ui(i))},_deactivate:function(t){var i=e.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),i&&this._trigger("deactivate",t,this.ui(i))},_over:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",t,this.ui(i)))},_out:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",t,this.ui(i)))},_drop:function(t,i){var a=i||e.ui.ddmanager.current,s=!1;return a&&(a.currentItem||a.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var t=e.data(this,"ui-droppable");return t.options.greedy&&!t.options.disabled&&t.options.scope===a.options.scope&&t.accept.call(t.element[0],a.currentItem||a.element)&&e.ui.intersect(a,e.extend(t,{offset:t.element.offset()}),t.options.tolerance)?(s=!0,!1):undefined}),s?!1:this.accept.call(this.element[0],a.currentItem||a.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",t,this.ui(a)),this.element):!1):!1},ui:function(e){return{draggable:e.currentItem||e.element,helper:e.helper,position:e.position,offset:e.positionAbs}}}),e.ui.intersect=function(e,i,a){if(!i.offset)return!1;var s,n,r=(e.positionAbs||e.position.absolute).left,o=r+e.helperProportions.width,l=(e.positionAbs||e.position.absolute).top,h=l+e.helperProportions.height,u=i.offset.left,d=u+i.proportions.width,c=i.offset.top,p=c+i.proportions.height;switch(a){case"fit":return r>=u&&d>=o&&l>=c&&p>=h;case"intersect":return r+e.helperProportions.width/2>u&&d>o-e.helperProportions.width/2&&l+e.helperProportions.height/2>c&&p>h-e.helperProportions.height/2;case"pointer":return s=(e.positionAbs||e.position.absolute).left+(e.clickOffset||e.offset.click).left,n=(e.positionAbs||e.position.absolute).top+(e.clickOffset||e.offset.click).top,t(n,c,i.proportions.height)&&t(s,u,i.proportions.width);case"touch":return(l>=c&&p>=l||h>=c&&p>=h||c>l&&h>p)&&(r>=u&&d>=r||o>=u&&d>=o||u>r&&o>d);default:return!1}},e.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(t,i){var a,s,n=e.ui.ddmanager.droppables[t.options.scope]||[],r=i?i.type:null,o=(t.currentItem||t.element).find(":data(ui-droppable)").addBack();e:for(a=0;n.length>a;a++)if(!(n[a].options.disabled||t&&!n[a].accept.call(n[a].element[0],t.currentItem||t.element))){for(s=0;o.length>s;s++)if(o[s]===n[a].element[0]){n[a].proportions.height=0;continue e}n[a].visible="none"!==n[a].element.css("display"),n[a].visible&&("mousedown"===r&&n[a]._activate.call(n[a],i),n[a].offset=n[a].element.offset(),n[a].proportions={width:n[a].element[0].offsetWidth,height:n[a].element[0].offsetHeight})}},drop:function(t,i){var a=!1;return e.each((e.ui.ddmanager.droppables[t.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&e.ui.intersect(t,this,this.options.tolerance)&&(a=this._drop.call(this,i)||a),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),a},dragStart:function(t,i){t.element.parentsUntil("body").bind("scroll.droppable",function(){t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)})},drag:function(t,i){t.options.refreshPositions&&e.ui.ddmanager.prepareOffsets(t,i),e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var a,s,n,r=e.ui.intersect(t,this,this.options.tolerance),o=!r&&this.isover?"isout":r&&!this.isover?"isover":null;o&&(this.options.greedy&&(s=this.options.scope,n=this.element.parents(":data(ui-droppable)").filter(function(){return e.data(this,"ui-droppable").options.scope===s}),n.length&&(a=e.data(n[0],"ui-droppable"),a.greedyChild="isover"===o)),a&&"isover"===o&&(a.isover=!1,a.isout=!0,a._out.call(a,i)),this[o]=!0,this["isout"===o?"isover":"isout"]=!1,this["isover"===o?"_over":"_out"].call(this,i),a&&"isout"===o&&(a.isout=!1,a.isover=!0,a._over.call(a,i)))}})},dragStop:function(t,i){t.element.parentsUntil("body").unbind("scroll.droppable"),t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)}}})(jQuery);

/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011â€“2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
;!function(a){function f(a,b){if(!(a.originalEvent.touches.length>1)){a.preventDefault();var c=a.originalEvent.changedTouches[0],d=document.createEvent("MouseEvents");d.initMouseEvent(b,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null),a.target.dispatchEvent(d)}}if(a.support.touch="ontouchend"in document,a.support.touch){var e,b=a.ui.mouse.prototype,c=b._mouseInit,d=b._mouseDestroy;b._touchStart=function(a){var b=this;!e&&b._mouseCapture(a.originalEvent.changedTouches[0])&&(e=!0,b._touchMoved=!1,f(a,"mouseover"),f(a,"mousemove"),f(a,"mousedown"))},b._touchMove=function(a){e&&(this._touchMoved=!0,f(a,"mousemove"))},b._touchEnd=function(a){e&&(f(a,"mouseup"),f(a,"mouseout"),this._touchMoved||f(a,"click"),e=!1)},b._mouseInit=function(){var b=this;b.element.bind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),c.call(b)},b._mouseDestroy=function(){var b=this;b.element.unbind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),d.call(b)}}}(jQuery);

var dragCheck=false;
$(function() {
	

   $( ".navBtn" ).draggable({
   		cancel:false, 
   		containment: "window",
   		 drag: function(){
   		        // On drag set that flag to true
   		        $(".dragInfo").fadeOut();
   		       	dragCheck = true;
   		 },
   		 stop: function(){
   		           // On stop of dragging reset the flag back to false
   		       dragCheck = false;
   		 }
	});
	$('.navBtn').bind('mouseup', function(){
		if(dragCheck == false){
			if($("nav").is(":visible") == true){
				$("nav").height($("nav").height());

			}
			$('nav').slideToggle(400,function () {
				$('nav .wrap').addClass('navVis')
			});
			$(this).toggleClass('navCloseBtn')
		}

	});
 });


/* jQuery Nivo Slider v3.2 */

(function(e){var t=function(t,n){var r=e.extend({},e.fn.nivoSlider.defaults,n);var i={currentSlide:0,currentImage:"",totalSlides:0,running:false,paused:false,stop:false,controlNavEl:false};var s=e(t);s.data("nivo:vars",i).addClass("nivoSlider");var o=s.children();o.each(function(){var t=e(this);var n="";if(!t.is("img")){if(t.is("a")){t.addClass("nivo-imageLink");n=t}t=t.find("img:first")}var r=r===0?t.attr("width"):t.width(),s=s===0?t.attr("height"):t.height();if(n!==""){n.css("display","none")}t.css("display","none");i.totalSlides++});if(r.randomStart){r.startSlide=Math.floor(Math.random()*i.totalSlides)}if(r.startSlide>0){if(r.startSlide>=i.totalSlides){r.startSlide=i.totalSlides-1}i.currentSlide=r.startSlide}if(e(o[i.currentSlide]).is("img")){i.currentImage=e(o[i.currentSlide])}else{i.currentImage=e(o[i.currentSlide]).find("img:first")}if(e(o[i.currentSlide]).is("a")){e(o[i.currentSlide]).css("display","block")}var u=e("<img/>").addClass("nivo-main-image");u.attr("src",i.currentImage.attr("src")).show();s.append(u);e(window).resize(function(){s.children("img").width(s.width());u.attr("src",i.currentImage.attr("src"));u.stop().height("auto");e(".nivo-slice").remove();e(".nivo-box").remove()});s.append(e('<div class="nivo-caption"></div>'));var a=function(t){var n=e(".nivo-caption",s);if(i.currentImage.attr("title")!=""&&i.currentImage.attr("title")!=undefined){var r=i.currentImage.attr("title");if(r.substr(0,1)=="#")r=e(r).html();if(n.css("display")=="block"){setTimeout(function(){n.html(r)},t.animSpeed)}else{n.html(r);n.stop().fadeIn(t.animSpeed)}}else{n.stop().fadeOut(t.animSpeed)}};a(r);var f=0;if(!r.manualAdvance&&o.length>1){f=setInterval(function(){d(s,o,r,false)},r.pauseTime)}if(r.directionNav){s.append('<div class="nivo-directionNav"><a class="nivo-prevNav">'+r.prevText+'</a><a class="nivo-nextNav">'+r.nextText+"</a></div>");e(s).on("click","a.nivo-prevNav",function(){if(i.running){return false}clearInterval(f);f="";i.currentSlide-=2;d(s,o,r,"prev")});e(s).on("click","a.nivo-nextNav",function(){if(i.running){return false}clearInterval(f);f="";d(s,o,r,"next")})}if(r.controlNav){i.controlNavEl=e('<div class="nivo-controlNav"></div>');s.after(i.controlNavEl);for(var l=0;l<o.length;l++){if(r.controlNavThumbs){i.controlNavEl.addClass("nivo-thumbs-enabled");var c=o.eq(l);if(!c.is("img")){c=c.find("img:first")}if(c.attr("data-thumb"))i.controlNavEl.append('<a class="nivo-control" rel="'+l+'"><img src="'+c.attr("data-thumb")+'" alt="" /></a>')}else{i.controlNavEl.append('<a class="nivo-control" rel="'+l+'">'+(l+1)+"</a>")}}e("a:eq("+i.currentSlide+")",i.controlNavEl).addClass("active");e("a",i.controlNavEl).bind("click",function(){if(i.running)return false;if(e(this).hasClass("active"))return false;clearInterval(f);f="";u.attr("src",i.currentImage.attr("src"));i.currentSlide=e(this).attr("rel")-1;d(s,o,r,"control")})}if(r.pauseOnHover){s.hover(function(){i.paused=true;clearInterval(f);f=""},function(){i.paused=false;if(f===""&&!r.manualAdvance){f=setInterval(function(){d(s,o,r,false)},r.pauseTime)}})}s.bind("nivo:animFinished",function(){u.attr("src",i.currentImage.attr("src"));i.running=false;e(o).each(function(){if(e(this).is("a")){e(this).css("display","none")}});if(e(o[i.currentSlide]).is("a")){e(o[i.currentSlide]).css("display","block")}if(f===""&&!i.paused&&!r.manualAdvance){f=setInterval(function(){d(s,o,r,false)},r.pauseTime)}r.afterChange.call(this)});var h=function(t,n,r){if(e(r.currentImage).parent().is("a"))e(r.currentImage).parent().css("display","block");e('img[src="'+r.currentImage.attr("src")+'"]',t).not(".nivo-main-image,.nivo-control img").width(t.width()).css("visibility","hidden").show();var i=e('img[src="'+r.currentImage.attr("src")+'"]',t).not(".nivo-main-image,.nivo-control img").parent().is("a")?e('img[src="'+r.currentImage.attr("src")+'"]',t).not(".nivo-main-image,.nivo-control img").parent().height():e('img[src="'+r.currentImage.attr("src")+'"]',t).not(".nivo-main-image,.nivo-control img").height();for(var s=0;s<n.slices;s++){var o=Math.round(t.width()/n.slices);if(s===n.slices-1){t.append(e('<div class="nivo-slice" name="'+s+'"><img src="'+r.currentImage.attr("src")+'" style="position:absolute; width:'+t.width()+"px; height:auto; display:block !important; top:0; left:-"+(o+s*o-o)+'px;" /></div>').css({left:o*s+"px",width:t.width()-o*s+"px",height:i+"px",opacity:"0",overflow:"hidden"}))}else{t.append(e('<div class="nivo-slice" name="'+s+'"><img src="'+r.currentImage.attr("src")+'" style="position:absolute; width:'+t.width()+"px; height:auto; display:block !important; top:0; left:-"+(o+s*o-o)+'px;" /></div>').css({left:o*s+"px",width:o+"px",height:i+"px",opacity:"0",overflow:"hidden"}))}}e(".nivo-slice",t).height(i);u.stop().animate({height:e(r.currentImage).height()},n.animSpeed)};var p=function(t,n,r){if(e(r.currentImage).parent().is("a"))e(r.currentImage).parent().css("display","block");e('img[src="'+r.currentImage.attr("src")+'"]',t).not(".nivo-main-image,.nivo-control img").width(t.width()).css("visibility","hidden").show();var i=Math.round(t.width()/n.boxCols),s=Math.round(e('img[src="'+r.currentImage.attr("src")+'"]',t).not(".nivo-main-image,.nivo-control img").height()/n.boxRows);for(var o=0;o<n.boxRows;o++){for(var a=0;a<n.boxCols;a++){if(a===n.boxCols-1){t.append(e('<div class="nivo-box" name="'+a+'" rel="'+o+'"><img src="'+r.currentImage.attr("src")+'" style="position:absolute; width:'+t.width()+"px; height:auto; display:block; top:-"+s*o+"px; left:-"+i*a+'px;" /></div>').css({opacity:0,left:i*a+"px",top:s*o+"px",width:t.width()-i*a+"px"}));e('.nivo-box[name="'+a+'"]',t).height(e('.nivo-box[name="'+a+'"] img',t).height()+"px")}else{t.append(e('<div class="nivo-box" name="'+a+'" rel="'+o+'"><img src="'+r.currentImage.attr("src")+'" style="position:absolute; width:'+t.width()+"px; height:auto; display:block; top:-"+s*o+"px; left:-"+i*a+'px;" /></div>').css({opacity:0,left:i*a+"px",top:s*o+"px",width:i+"px"}));e('.nivo-box[name="'+a+'"]',t).height(e('.nivo-box[name="'+a+'"] img',t).height()+"px")}}}u.stop().animate({height:e(r.currentImage).height()},n.animSpeed)};var d=function(t,n,r,i){var s=t.data("nivo:vars");if(s&&s.currentSlide===s.totalSlides-1){r.lastSlide.call(this)}if((!s||s.stop)&&!i){return false}r.beforeChange.call(this);if(!i){u.attr("src",s.currentImage.attr("src"))}else{if(i==="prev"){u.attr("src",s.currentImage.attr("src"))}if(i==="next"){u.attr("src",s.currentImage.attr("src"))}}s.currentSlide++;if(s.currentSlide===s.totalSlides){s.currentSlide=0;r.slideshowEnd.call(this)}if(s.currentSlide<0){s.currentSlide=s.totalSlides-1}if(e(n[s.currentSlide]).is("img")){s.currentImage=e(n[s.currentSlide])}else{s.currentImage=e(n[s.currentSlide]).find("img:first")}if(r.controlNav){e("a",s.controlNavEl).removeClass("active");e("a:eq("+s.currentSlide+")",s.controlNavEl).addClass("active")}a(r);e(".nivo-slice",t).remove();e(".nivo-box",t).remove();var o=r.effect,f="";if(r.effect==="random"){f=new Array("sliceDownRight","sliceDownLeft","sliceUpRight","sliceUpLeft","sliceUpDown","sliceUpDownLeft","fold","fade","boxRandom","boxRain","boxRainReverse","boxRainGrow","boxRainGrowReverse");o=f[Math.floor(Math.random()*(f.length+1))];if(o===undefined){o="fade"}}if(r.effect.indexOf(",")!==-1){f=r.effect.split(",");o=f[Math.floor(Math.random()*f.length)];if(o===undefined){o="fade"}}if(s.currentImage.attr("data-transition")){o=s.currentImage.attr("data-transition")}s.running=true;var l=0,c=0,d="",m="",g="",y="";if(o==="sliceDown"||o==="sliceDownRight"||o==="sliceDownLeft"){h(t,r,s);l=0;c=0;d=e(".nivo-slice",t);if(o==="sliceDownLeft"){d=e(".nivo-slice",t)._reverse()}d.each(function(){var n=e(this);n.css({top:"0px"});if(c===r.slices-1){setTimeout(function(){n.animate({opacity:"1.0"},r.animSpeed,"",function(){t.trigger("nivo:animFinished")})},100+l)}else{setTimeout(function(){n.animate({opacity:"1.0"},r.animSpeed)},100+l)}l+=50;c++})}else if(o==="sliceUp"||o==="sliceUpRight"||o==="sliceUpLeft"){h(t,r,s);l=0;c=0;d=e(".nivo-slice",t);if(o==="sliceUpLeft"){d=e(".nivo-slice",t)._reverse()}d.each(function(){var n=e(this);n.css({bottom:"0px"});if(c===r.slices-1){setTimeout(function(){n.animate({opacity:"1.0"},r.animSpeed,"",function(){t.trigger("nivo:animFinished")})},100+l)}else{setTimeout(function(){n.animate({opacity:"1.0"},r.animSpeed)},100+l)}l+=50;c++})}else if(o==="sliceUpDown"||o==="sliceUpDownRight"||o==="sliceUpDownLeft"){h(t,r,s);l=0;c=0;var b=0;d=e(".nivo-slice",t);if(o==="sliceUpDownLeft"){d=e(".nivo-slice",t)._reverse()}d.each(function(){var n=e(this);if(c===0){n.css("top","0px");c++}else{n.css("bottom","0px");c=0}if(b===r.slices-1){setTimeout(function(){n.animate({opacity:"1.0"},r.animSpeed,"",function(){t.trigger("nivo:animFinished")})},100+l)}else{setTimeout(function(){n.animate({opacity:"1.0"},r.animSpeed)},100+l)}l+=50;b++})}else if(o==="fold"){h(t,r,s);l=0;c=0;e(".nivo-slice",t).each(function(){var n=e(this);var i=n.width();n.css({top:"0px",width:"0px"});if(c===r.slices-1){setTimeout(function(){n.animate({width:i,opacity:"1.0"},r.animSpeed,"",function(){t.trigger("nivo:animFinished")})},100+l)}else{setTimeout(function(){n.animate({width:i,opacity:"1.0"},r.animSpeed)},100+l)}l+=50;c++})}else if(o==="fade"){h(t,r,s);m=e(".nivo-slice:first",t);m.css({width:t.width()+"px"});m.animate({opacity:"1.0"},r.animSpeed*2,"",function(){t.trigger("nivo:animFinished")})}else if(o==="slideInRight"){h(t,r,s);m=e(".nivo-slice:first",t);m.css({width:"0px",opacity:"1"});m.animate({width:t.width()+"px"},r.animSpeed*2,"",function(){t.trigger("nivo:animFinished")})}else if(o==="slideInLeft"){h(t,r,s);m=e(".nivo-slice:first",t);m.css({width:"0px",opacity:"1",left:"",right:"0px"});m.animate({width:t.width()+"px"},r.animSpeed*2,"",function(){m.css({left:"0px",right:""});t.trigger("nivo:animFinished")})}else if(o==="boxRandom"){p(t,r,s);g=r.boxCols*r.boxRows;c=0;l=0;y=v(e(".nivo-box",t));y.each(function(){var n=e(this);if(c===g-1){setTimeout(function(){n.animate({opacity:"1"},r.animSpeed,"",function(){t.trigger("nivo:animFinished")})},100+l)}else{setTimeout(function(){n.animate({opacity:"1"},r.animSpeed)},100+l)}l+=20;c++})}else if(o==="boxRain"||o==="boxRainReverse"||o==="boxRainGrow"||o==="boxRainGrowReverse"){p(t,r,s);g=r.boxCols*r.boxRows;c=0;l=0;var w=0;var E=0;var S=[];S[w]=[];y=e(".nivo-box",t);if(o==="boxRainReverse"||o==="boxRainGrowReverse"){y=e(".nivo-box",t)._reverse()}y.each(function(){S[w][E]=e(this);E++;if(E===r.boxCols){w++;E=0;S[w]=[]}});for(var x=0;x<r.boxCols*2;x++){var T=x;for(var N=0;N<r.boxRows;N++){if(T>=0&&T<r.boxCols){(function(n,i,s,u,a){var f=e(S[n][i]);var l=f.width();var c=f.height();if(o==="boxRainGrow"||o==="boxRainGrowReverse"){f.width(0).height(0)}if(u===a-1){setTimeout(function(){f.animate({opacity:"1",width:l,height:c},r.animSpeed/1.3,"",function(){t.trigger("nivo:animFinished")})},100+s)}else{setTimeout(function(){f.animate({opacity:"1",width:l,height:c},r.animSpeed/1.3)},100+s)}})(N,T,l,c,g);c++}T--}l+=100}}};var v=function(e){for(var t,n,r=e.length;r;t=parseInt(Math.random()*r,10),n=e[--r],e[r]=e[t],e[t]=n);return e};var m=function(e){if(this.console&&typeof console.log!=="undefined"){console.log(e)}};this.stop=function(){if(!e(t).data("nivo:vars").stop){e(t).data("nivo:vars").stop=true;m("Stop Slider")}};this.start=function(){if(e(t).data("nivo:vars").stop){e(t).data("nivo:vars").stop=false;m("Start Slider")}};r.afterLoad.call(this);return this};e.fn.nivoSlider=function(n){return this.each(function(r,i){var s=e(this);if(s.data("nivoslider")){return s.data("nivoslider")}var o=new t(this,n);s.data("nivoslider",o)})};e.fn.nivoSlider.defaults={effect:"random",slices:15,boxCols:8,boxRows:4,animSpeed:500,pauseTime:3e3,startSlide:0,directionNav:true,controlNav:true,controlNavThumbs:false,pauseOnHover:true,manualAdvance:false,prevText:"Prev",nextText:"Next",randomStart:false,beforeChange:function(){},afterChange:function(){},slideshowEnd:function(){},lastSlide:function(){},afterLoad:function(){}};e.fn._reverse=[].reverse})(jQuery)

//Activating Nivo Slider
$(window).load(function() {
    $('.nivoSlider').nivoSlider({
        effect: 'fade',                 // Specify sets like: 'fold,fade,sliceDown'
        directionNav: false,             // Next & Prev navigation
        pauseOnHover: true,             // Stop animation while hovering
        manualAdvance: false,           // Force manual transitions
    });
});

/* jQuery Transit - CSS3 transitions and transformations for MEGAFOLIO*/
(function(k){k.transit={version:"0.9.9",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:true,useTransitionEnd:false};var d=document.createElement("div");var q={};function b(v){if(v in d.style){return v}var u=["Moz","Webkit","O","ms"];var r=v.charAt(0).toUpperCase()+v.substr(1);if(v in d.style){return v}for(var t=0;t<u.length;++t){var s=u[t]+r;if(s in d.style){return s}}}function e(){d.style[q.transform]="";d.style[q.transform]="rotateY(90deg)";return d.style[q.transform]!==""}var a=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;q.transition=b("transition");q.transitionDelay=b("transitionDelay");q.transform=b("transform");q.transformOrigin=b("transformOrigin");q.filter=b("Filter");q.transform3d=e();var i={transition:"transitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"};var f=q.transitionEnd=i[q.transition]||null;for(var p in q){if(q.hasOwnProperty(p)&&typeof k.support[p]==="undefined"){k.support[p]=q[p]}}d=null;k.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};k.cssHooks["transit:transform"]={get:function(r){return k(r).data("transform")||new j()},set:function(s,r){var t=r;if(!(t instanceof j)){t=new j(t)}if(q.transform==="WebkitTransform"&&!a){s.style[q.transform]=t.toString(true)}else{s.style[q.transform]=t.toString()}k(s).data("transform",t)}};k.cssHooks.transform={set:k.cssHooks["transit:transform"].set};k.cssHooks.filter={get:function(r){return r.style[q.filter]},set:function(r,s){r.style[q.filter]=s}};if(k.fn.jquery<"1.8"){k.cssHooks.transformOrigin={get:function(r){return r.style[q.transformOrigin]},set:function(r,s){r.style[q.transformOrigin]=s}};k.cssHooks.transition={get:function(r){return r.style[q.transition]},set:function(r,s){r.style[q.transition]=s}}}n("scale");n("translate");n("rotate");n("rotateX");n("rotateY");n("rotate3d");n("perspective");n("skewX");n("skewY");n("x",true);n("y",true);function j(r){if(typeof r==="string"){this.parse(r)}return this}j.prototype={setFromString:function(t,s){var r=(typeof s==="string")?s.split(","):(s.constructor===Array)?s:[s];r.unshift(t);j.prototype.set.apply(this,r)},set:function(s){var r=Array.prototype.slice.apply(arguments,[1]);if(this.setter[s]){this.setter[s].apply(this,r)}else{this[s]=r.join(",")}},get:function(r){if(this.getter[r]){return this.getter[r].apply(this)}else{return this[r]||0}},setter:{rotate:function(r){this.rotate=o(r,"deg")},rotateX:function(r){this.rotateX=o(r,"deg")},rotateY:function(r){this.rotateY=o(r,"deg")},scale:function(r,s){if(s===undefined){s=r}this.scale=r+","+s},skewX:function(r){this.skewX=o(r,"deg")},skewY:function(r){this.skewY=o(r,"deg")},perspective:function(r){this.perspective=o(r,"px")},x:function(r){this.set("translate",r,null)},y:function(r){this.set("translate",null,r)},translate:function(r,s){if(this._translateX===undefined){this._translateX=0}if(this._translateY===undefined){this._translateY=0}if(r!==null&&r!==undefined){this._translateX=o(r,"px")}if(s!==null&&s!==undefined){this._translateY=o(s,"px")}this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var r=(this.scale||"1,1").split(",");if(r[0]){r[0]=parseFloat(r[0])}if(r[1]){r[1]=parseFloat(r[1])}return(r[0]===r[1])?r[0]:r},rotate3d:function(){var t=(this.rotate3d||"0,0,0,0deg").split(",");for(var r=0;r<=3;++r){if(t[r]){t[r]=parseFloat(t[r])}}if(t[3]){t[3]=o(t[3],"deg")}return t}},parse:function(s){var r=this;s.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(t,v,u){r.setFromString(v,u)})},toString:function(t){var s=[];for(var r in this){if(this.hasOwnProperty(r)){if((!q.transform3d)&&((r==="rotateX")||(r==="rotateY")||(r==="perspective")||(r==="transformOrigin"))){continue}if(r[0]!=="_"){if(t&&(r==="scale")){s.push(r+"3d("+this[r]+",1)")}else{if(t&&(r==="translate")){s.push(r+"3d("+this[r]+",0)")}else{s.push(r+"("+this[r]+")")}}}}}return s.join(" ")}};function m(s,r,t){if(r===true){s.queue(t)}else{if(r){s.queue(r,t)}else{t()}}}function h(s){var r=[];k.each(s,function(t){t=k.camelCase(t);t=k.transit.propertyMap[t]||k.cssProps[t]||t;t=c(t);if(q[t]){t=c(q[t])}if(k.inArray(t,r)===-1){r.push(t)}});return r}function g(s,v,x,r){var t=h(s);if(k.cssEase[x]){x=k.cssEase[x]}var w=""+l(v)+" "+x;if(parseInt(r,10)>0){w+=" "+l(r)}var u=[];k.each(t,function(z,y){u.push(y+" "+w)});return u.join(", ")}k.fn.transition=k.fn.transit=function(A,t,z,D){var E=this;var v=0;var x=true;var r=jQuery.extend(true,{},A);if(typeof t==="function"){D=t;t=undefined}if(typeof t==="object"){z=t.easing;v=t.delay||0;x=t.queue||true;D=t.complete;t=t.duration}if(typeof z==="function"){D=z;z=undefined}if(typeof r.easing!=="undefined"){z=r.easing;delete r.easing}if(typeof r.duration!=="undefined"){t=r.duration;delete r.duration}if(typeof r.complete!=="undefined"){D=r.complete;delete r.complete}if(typeof r.queue!=="undefined"){x=r.queue;delete r.queue}if(typeof r.delay!=="undefined"){v=r.delay;delete r.delay}if(typeof t==="undefined"){t=k.fx.speeds._default}if(typeof z==="undefined"){z=k.cssEase._default}t=l(t);var F=g(r,t,z,v);var C=k.transit.enabled&&q.transition;var u=C?(parseInt(t,10)+parseInt(v,10)):0;if(u===0){var B=function(G){E.css(r);if(D){D.apply(E)}if(G){G()}};m(E,x,B);return E}var y={};var s=function(I){var H=false;var G=function(){if(H){E.unbind(f,G)}if(u>0){E.each(function(){this.style[q.transition]=(y[this]||null)})}if(typeof D==="function"){D.apply(E)}if(typeof I==="function"){I()}};if((u>0)&&(f)&&(k.transit.useTransitionEnd)){H=true;E.bind(f,G)}else{window.setTimeout(G,u)}E.each(function(){if(u>0){this.style[q.transition]=F}k(this).css(A)})};var w=function(G){this.offsetWidth;s(G)};m(E,x,w);return this};function n(s,r){if(!r){k.cssNumber[s]=true}k.transit.propertyMap[s]=q.transform;k.cssHooks[s]={get:function(v){var u=k(v).css("transit:transform");return u.get(s)},set:function(v,w){var u=k(v).css("transit:transform");u.setFromString(s,w);k(v).css({"transit:transform":u})}}}function c(r){return r.replace(/([A-Z])/g,function(s){return"-"+s.toLowerCase()})}function o(s,r){if((typeof s==="string")&&(!s.match(/^[\-0-9\.]+$/))){return s}else{return""+s+r}}function l(s){var r=s;if(typeof r==="string"&&(!r.match(/^[\-0-9\.]+/))){r=k.fx.speeds[r]||k.fx.speeds._default}return o(r,"ms")}k.transit.getTransitionValue=g})(jQuery);

// SOME ERROR MESSAGES IN CASE THE PLUGIN CAN NOT BE LOADED
function revslider_showDoubleJqueryError(sliderID) {
	var errorMessage = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
	errorMessage += "<br> This includes make eliminates the revolution slider libraries, and make it not work.";
	errorMessage += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.";
	errorMessage += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";
	errorMessage = "<span style='font-size:16px;color:#BC0C06;'>" + errorMessage + "</span>"
		jQuery(sliderID).show().html(errorMessage);
}

/* ! fancyBox v2.1.4 fancyapps.com | fancyapps.com/fancybox/#license */
;(function(c,j,i,a){var d=i(c),g=i(j),k=i.fancybox=function(){k.open.apply(this,arguments)},u=navigator.userAgent.match(/msie/),o=null,A=j.createTouch!==a,y=function(b){return b&&b.hasOwnProperty&&b instanceof i},e=function(b){return b&&"string"===i.type(b)},v=function(b){return e(b)&&0<b.indexOf("%")},h=function(b,l){var f=parseInt(b,10)||0;l&&v(b)&&(f*=k.getViewport()[l]/100);return Math.ceil(f)},m=function(l,f){return h(l,f)+"px"};i.extend(k,{version:"2.1.4",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!A,fitToView:!0,aspectRatio:!1,topRatio:0.5,leftRatio:0.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3000,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+(u?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:i.noop,beforeLoad:i.noop,afterLoad:i.noop,beforeShow:i.noop,afterShow:i.noop,beforeChange:i.noop,beforeClose:i.noop,afterClose:i.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(b,f){if(b&&(i.isPlainObject(f)||(f={}),!1!==k.close(!0))){return i.isArray(b)||(b=y(b)?i(b).get():[b]),i.each(b,function(w,x){var q={},t,s,r,n,p;"object"===i.type(x)&&(x.nodeType&&(x=i(x)),y(x)?(q={href:x.data("fancybox-href")||x.attr("href"),title:x.data("fancybox-title")||x.attr("title"),isDom:!0,element:x},i.metadata&&i.extend(!0,q,x.metadata())):q=x);t=f.href||q.href||(e(x)?x:null);s=f.title!==a?f.title:q.title||"";n=(r=f.content||q.content)?"html":f.type||q.type;!n&&q.isDom&&(n=x.data("fancybox-type"),n||(n=(n=x.prop("class").match(/fancybox\.(\w+)/))?n[1]:null));e(t)&&(n||(k.isImage(t)?n="image":k.isSWF(t)?n="swf":"#"===t.charAt(0)?n="inline":e(x)&&(n="html",r=x)),"ajax"===n&&(p=t.split(/\s+/,2),t=p.shift(),p=p.shift()));r||("inline"===n?t?r=i(e(t)?t.replace(/.*(?=#[^\s]+$)/,""):t):q.isDom&&(r=x):"html"===n?r=t:!n&&(!t&&q.isDom)&&(n="inline",r=x));i.extend(q,{href:t,type:n,content:r,title:s,selector:p});b[w]=q}),k.opts=i.extend(!0,{},k.defaults,f),f.keys!==a&&(k.opts.keys=f.keys?i.extend({},k.defaults.keys,f.keys):!1),k.group=b,k._start(k.opts.index)}},cancel:function(){var b=k.coming;b&&!1!==k.trigger("onCancel")&&(k.hideLoading(),k.ajaxLoad&&k.ajaxLoad.abort(),k.ajaxLoad=null,k.imgPreload&&(k.imgPreload.onload=k.imgPreload.onerror=null),b.wrap&&b.wrap.stop(!0,!0).trigger("onReset").remove(),k.coming=null,k.current||k._afterZoomOut(b))},close:function(b){k.cancel();!1!==k.trigger("beforeClose")&&(k.unbindEvents(),k.isActive&&(!k.isOpen||!0===b?(i(".fancybox-wrap").stop(!0).trigger("onReset").remove(),k._afterZoomOut()):(k.isOpen=k.isOpened=!1,k.isClosing=!0,i(".fancybox-item, .fancybox-nav").remove(),k.wrap.stop(!0,!0).removeClass("fancybox-opened"),k.transitions[k.current.closeMethod]())))},play:function(b){var l=function(){clearTimeout(k.player.timer)},f=function(){l();k.current&&k.player.isActive&&(k.player.timer=setTimeout(k.next,k.current.playSpeed))},n=function(){l();i("body").unbind(".player");k.player.isActive=!1;k.trigger("onPlayEnd")};if(!0===b||!k.player.isActive&&!1!==b){if(k.current&&(k.current.loop||k.current.index<k.group.length-1)){k.player.isActive=!0,i("body").bind({"afterShow.player onUpdate.player":f,"onCancel.player beforeClose.player":n,"beforeLoad.player":l}),f(),k.trigger("onPlayStart")}}else{n()}},next:function(b){var f=k.current;f&&(e(b)||(b=f.direction.next),k.jumpto(f.index+1,b,"next"))},prev:function(b){var f=k.current;f&&(e(b)||(b=f.direction.prev),k.jumpto(f.index-1,b,"prev"))},jumpto:function(b,l,f){var n=k.current;n&&(b=h(b),k.direction=l||n.direction[b>=n.index?"next":"prev"],k.router=f||"jumpto",n.loop&&(0>b&&(b=n.group.length+b%n.group.length),b%=n.group.length),n.group[b]!==a&&(k.cancel(),k._start(b)))},reposition:function(b,n){var l=k.current,p=l?l.wrap:null,f;p&&(f=k._getPosition(n),b&&"scroll"===b.type?(delete f.position,p.stop(!0,!0).animate(f,200)):(p.css(f),l.pos=i.extend({},l.dim,f)))},update:function(b){var l=b&&b.type,f=!l||"orientationchange"===l;f&&(clearTimeout(o),o=null);k.isOpen&&!o&&(o=setTimeout(function(){var n=k.current;n&&!k.isClosing&&(k.wrap.removeClass("fancybox-tmp"),(f||"load"===l||"resize"===l&&n.autoResize)&&k._setDimension(),"scroll"===l&&n.canShrink||k.reposition(b),k.trigger("onUpdate"),o=null)},f&&!A?0:300))},toggle:function(b){k.isOpen&&(k.current.fitToView="boolean"===i.type(b)?b:!k.current.fitToView,A&&(k.wrap.removeAttr("style").addClass("fancybox-tmp"),k.trigger("onUpdate")),k.update())},hideLoading:function(){g.unbind(".loading");i("#fancybox-loading").remove()},showLoading:function(){var b,f;k.hideLoading();b=i('<div id="fancybox-loading"><div class="demo-3"><ul class="bokeh"><li></li><li></li><li></li><li></li></ul></div></div>').click(k.cancel).appendTo("body");g.bind("keydown.loading",function(l){if(27===(l.which||l.keyCode)){l.preventDefault(),k.cancel()}});k.defaults.fixed||(f=k.getViewport(),b.css({position:"absolute",top:0.5*f.h+f.y,left:0.5*f.w+f.x}))},getViewport:function(){var b=k.current&&k.current.locked||!1,f={x:d.scrollLeft(),y:d.scrollTop()};b?(f.w=b[0].clientWidth,f.h=b[0].clientHeight):(f.w=A&&c.innerWidth?c.innerWidth:d.width(),f.h=A&&c.innerHeight?c.innerHeight:d.height());return f},unbindEvents:function(){k.wrap&&y(k.wrap)&&k.wrap.unbind(".fb");g.unbind(".fb");d.unbind(".fb")},bindEvents:function(){var b=k.current,f;b&&(d.bind("orientationchange.fb"+(A?"":" resize.fb")+(b.autoCenter&&!b.locked?" scroll.fb":""),k.update),(f=b.keys)&&g.bind("keydown.fb",function(n){var p=n.which||n.keyCode,l=n.target||n.srcElement;if(27===p&&k.coming){return !1}!n.ctrlKey&&(!n.altKey&&!n.shiftKey&&!n.metaKey&&(!l||!l.type&&!i(l).is("[contenteditable]")))&&i.each(f,function(r,q){if(1<b.group.length&&q[p]!==a){return k[r](q[p]),n.preventDefault(),!1}if(-1<i.inArray(p,q)){return k[r](),n.preventDefault(),!1}})}),i.fn.mousewheel&&b.mouseWheel&&k.wrap.bind("mousewheel.fb",function(r,s,l,q){for(var p=i(r.target||null),n=!1;p.length&&!n&&!p.is(".fancybox-skin")&&!p.is(".fancybox-wrap");){n=p[0]&&!(p[0].style.overflow&&"hidden"===p[0].style.overflow)&&(p[0].clientWidth&&p[0].scrollWidth>p[0].clientWidth||p[0].clientHeight&&p[0].scrollHeight>p[0].clientHeight),p=i(p).parent()}if(0!==s&&!n&&1<k.group.length&&!b.canShrink){if(0<q||0<l){k.prev(0<q?"down":"left")}else{if(0>q||0>l){k.next(0>q?"up":"right")}}r.preventDefault()}}))},trigger:function(b,l){var f,n=l||k.coming||k.current;if(n){i.isFunction(n[b])&&(f=n[b].apply(n,Array.prototype.slice.call(arguments,1)));if(!1===f){return !1}n.helpers&&i.each(n.helpers,function(q,p){p&&(k.helpers[q]&&i.isFunction(k.helpers[q][b]))&&(p=i.extend(!0,{},k.helpers[q].defaults,p),k.helpers[q][b](p,n))});i.event.trigger(b+".fb")}},isImage:function(b){return e(b)&&b.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp)((\?|#).*)?$)/i)},isSWF:function(b){return e(b)&&b.match(/\.(swf)((\?|#).*)?$/i)},_start:function(b){var l={},f,n;b=h(b);f=k.group[b]||null;if(!f){return !1}l=i.extend(!0,{},k.opts,f);f=l.margin;n=l.padding;"number"===i.type(f)&&(l.margin=[f,f,f,f]);"number"===i.type(n)&&(l.padding=[n,n,n,n]);l.modal&&i.extend(!0,l,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}});l.autoSize&&(l.autoWidth=l.autoHeight=!0);"auto"===l.width&&(l.autoWidth=!0);"auto"===l.height&&(l.autoHeight=!0);l.group=k.group;l.index=b;k.coming=l;if(!1===k.trigger("beforeLoad")){k.coming=null}else{n=l.type;f=l.href;if(!n){return k.coming=null,k.current&&k.router&&"jumpto"!==k.router?(k.current.index=b,k[k.router](k.direction)):!1}k.isActive=!0;if("image"===n||"swf"===n){l.autoHeight=l.autoWidth=!1,l.scrolling="visible"}"image"===n&&(l.aspectRatio=!0);"iframe"===n&&A&&(l.scrolling="scroll");l.wrap=i(l.tpl.wrap).addClass("fancybox-"+(A?"mobile":"desktop")+" fancybox-type-"+n+" fancybox-tmp "+l.wrapCSS).appendTo(l.parent||"body");i.extend(l,{skin:i(".fancybox-skin",l.wrap),outer:i(".fancybox-outer",l.wrap),inner:i(".fancybox-inner",l.wrap)});i.each(["Top","Right","Bottom","Left"],function(q,p){l.skin.css("padding"+p,m(l.padding[q]))});k.trigger("onReady");if("inline"===n||"html"===n){if(!l.content||!l.content.length){return k._error("content")}}else{if(!f){return k._error("href")}}"image"===n?k._loadImage():"ajax"===n?k._loadAjax():"iframe"===n?k._loadIframe():k._afterLoad()}},_error:function(b){i.extend(k.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:b,content:k.coming.tpl.error});k._afterLoad()},_loadImage:function(){var b=k.imgPreload=new Image;b.onload=function(){this.onload=this.onerror=null;k.coming.width=this.width;k.coming.height=this.height;k._afterLoad()};b.onerror=function(){this.onload=this.onerror=null;k._error("image")};b.src=k.coming.href;!0!==b.complete&&k.showLoading()},_loadAjax:function(){var b=k.coming;k.showLoading();k.ajaxLoad=i.ajax(i.extend({},b.ajax,{url:b.href,error:function(f,l){k.coming&&"abort"!==l?k._error("ajax",f):k.hideLoading()},success:function(l,f){"success"===f&&(b.content=l,k._afterLoad())}}))},_loadIframe:function(){var b=k.coming,f=i(b.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",A?"auto":b.iframe.scrolling).attr("src",b.href);i(b.wrap).bind("onReset",function(){try{i(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(l){}});b.iframe.preload&&(k.showLoading(),f.one("load",function(){i(this).data("ready",1);A||i(this).bind("load.fb",k.update);i(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();k._afterLoad()}));b.content=f.appendTo(b.inner);b.iframe.preload||k._afterLoad()},_preloadImages:function(){var b=k.group,q=k.current,p=b.length,r=q.preload?Math.min(q.preload,p-1):0,n,l;for(l=1;l<=r;l+=1){n=b[(q.index+l)%p],"image"===n.type&&n.href&&((new Image).src=n.href)}},_afterLoad:function(){var b=k.coming,q=k.current,p,r,f,n,l;k.hideLoading();if(b&&!1!==k.isActive){if(!1===k.trigger("afterLoad",b,q)){b.wrap.stop(!0).trigger("onReset").remove(),k.coming=null}else{q&&(k.trigger("beforeChange",q),q.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());k.unbindEvents();p=b.content;r=b.type;f=b.scrolling;i.extend(k,{wrap:b.wrap,skin:b.skin,outer:b.outer,inner:b.inner,current:b,previous:q});n=b.href;switch(r){case"inline":case"ajax":case"html":b.selector?p=i("<div>").html(p).find(b.selector):y(p)&&(p.data("fancybox-placeholder")||p.data("fancybox-placeholder",i('<div class="fancybox-placeholder"></div>').insertAfter(p).hide()),p=p.show().detach(),b.wrap.bind("onReset",function(){i(this).find(p).length&&p.hide().replaceAll(p.data("fancybox-placeholder")).data("fancybox-placeholder",!1)}));break;case"image":p=b.tpl.image.replace("{href}",n);break;case"swf":p='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+n+'"></param>',l="",i.each(b.swf,function(t,s){p+='<param name="'+t+'" value="'+s+'"></param>';l+=" "+t+'="'+s+'"'}),p+='<embed src="'+n+'" type="application/x-shockwave-flash" width="100%" height="100%"'+l+"></embed></object>"}(!y(p)||!p.parent().is(b.inner))&&b.inner.append(p);k.trigger("beforeShow");b.inner.css("overflow","yes"===f?"scroll":"no"===f?"hidden":f);k._setDimension();k.reposition();k.isOpen=!1;k.coming=null;k.bindEvents();if(k.isOpened){if(q.prevMethod){k.transitions[q.prevMethod]()}}else{i(".fancybox-wrap").not(b.wrap).stop(!0).trigger("onReset").remove()}k.transitions[k.isOpened?b.nextMethod:b.openMethod]();k._preloadImages()}}},_setDimension:function(){var ad=k.getViewport(),ab=0,aa=!1,ac=!1,aa=k.wrap,W=k.skin,Z=k.inner,Y=k.current,ac=Y.width,X=Y.height,V=Y.minWidth,J=Y.minHeight,U=Y.maxWidth,I=Y.maxHeight,N=Y.scrolling,R=Y.scrollOutside?Y.scrollbarWidth:0,f=Y.margin,T=h(f[1]+f[3]),P=h(f[0]+f[2]),b,S,L,M,Q,F,O,K,x;aa.add(W).add(Z).width("auto").height("auto").removeClass("fancybox-tmp");f=h(W.outerWidth(!0)-W.width());b=h(W.outerHeight(!0)-W.height());S=T+f;L=P+b;M=v(ac)?(ad.w-S)*h(ac)/100:ac;Q=v(X)?(ad.h-L)*h(X)/100:X;if("iframe"===Y.type){if(x=Y.content,Y.autoHeight&&1===x.data("ready")){try{x[0].contentWindow.document.location&&(Z.width(M).height(9999),F=x.contents().find("body"),R&&F.css("overflow-x","hidden"),Q=F.height())}catch(l){}}}else{if(Y.autoWidth||Y.autoHeight){Z.addClass("fancybox-tmp"),Y.autoWidth||Z.width(M),Y.autoHeight||Z.height(Q),Y.autoWidth&&(M=Z.width()),Y.autoHeight&&(Q=Z.height()),Z.removeClass("fancybox-tmp")}}ac=h(M);X=h(Q);K=M/Q;V=h(v(V)?h(V,"w")-S:V);U=h(v(U)?h(U,"w")-S:U);J=h(v(J)?h(J,"h")-L:J);I=h(v(I)?h(I,"h")-L:I);F=U;O=I;Y.fitToView&&(U=Math.min(ad.w-S,U),I=Math.min(ad.h-L,I));S=ad.w-T;P=ad.h-P;Y.aspectRatio?(ac>U&&(ac=U,X=h(ac/K)),X>I&&(X=I,ac=h(X*K)),ac<V&&(ac=V,X=h(ac/K)),X<J&&(X=J,ac=h(X*K))):(ac=Math.max(V,Math.min(ac,U)),Y.autoHeight&&"iframe"!==Y.type&&(Z.width(ac),X=Z.height()),X=Math.max(J,Math.min(X,I)));if(Y.fitToView){if(Z.width(ac).height(X),aa.width(ac+f),ad=aa.width(),T=aa.height(),Y.aspectRatio){for(;(ad>S||T>P)&&(ac>V&&X>J)&&!(19<ab++);){X=Math.max(J,Math.min(I,X-10)),ac=h(X*K),ac<V&&(ac=V,X=h(ac/K)),ac>U&&(ac=U,X=h(ac/K)),Z.width(ac).height(X),aa.width(ac+f),ad=aa.width(),T=aa.height()}}else{ac=Math.max(V,Math.min(ac,ac-(ad-S))),X=Math.max(J,Math.min(X,X-(T-P)))}}R&&("auto"===N&&X<Q&&ac+f+R<S)&&(ac+=R);Z.width(ac).height(X);aa.width(ac+f);ad=aa.width();T=aa.height();aa=(ad>S||T>P)&&ac>V&&X>J;ac=Y.aspectRatio?ac<F&&X<O&&ac<M&&X<Q:(ac<F||X<O)&&(ac<M||X<Q);i.extend(Y,{dim:{width:m(ad),height:m(T)},origWidth:M,origHeight:Q,canShrink:aa,canExpand:ac,wPadding:f,hPadding:b,wrapSpace:T-W.outerHeight(!0),skinSpace:W.height()-X});!x&&(Y.autoHeight&&X>J&&X<I&&!ac)&&Z.height("auto")},_getPosition:function(b){var q=k.current,p=k.getViewport(),r=q.margin,n=k.wrap.width()+r[1]+r[3],l=k.wrap.height()+r[0]+r[2],r={position:"absolute",top:r[0],left:r[3]};q.autoCenter&&q.fixed&&!b&&l<=p.h&&n<=p.w?r.position="fixed":q.locked||(r.top+=p.y,r.left+=p.x);r.top=m(Math.max(r.top,r.top+(p.h-l)*q.topRatio));r.left=m(Math.max(r.left,r.left+(p.w-n)*q.leftRatio));return r},_afterZoomIn:function(){var b=k.current;b&&(k.isOpen=k.isOpened=!0,k.wrap.css("overflow","visible").addClass("fancybox-opened"),k.update(),(b.closeClick||b.nextClick&&1<k.group.length)&&k.inner.css("cursor","pointer").bind("click.fb",function(f){!i(f.target).is("a")&&!i(f.target).parent().is("a")&&(f.preventDefault(),k[b.closeClick?"close":"next"]())}),b.closeBtn&&i(b.tpl.closeBtn).appendTo(k.skin).bind("click.fb",function(f){f.preventDefault();k.close()}),b.arrows&&1<k.group.length&&((b.loop||0<b.index)&&i(b.tpl.prev).appendTo(k.outer).bind("click.fb",k.prev),(b.loop||b.index<k.group.length-1)&&i(b.tpl.next).appendTo(k.outer).bind("click.fb",k.next)),k.trigger("afterShow"),!b.loop&&b.index===b.group.length-1?k.play(!1):k.opts.autoPlay&&!k.player.isActive&&(k.opts.autoPlay=!1,k.play()))},_afterZoomOut:function(b){b=b||k.current;i(".fancybox-wrap").trigger("onReset").remove();i.extend(k,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null});k.trigger("afterClose",b)}});k.transitions={getOrigPosition:function(){var w=k.current,s=w.element,r=w.orig,t={},q=50,p=50,n=w.hPadding,l=w.wPadding,b=k.getViewport();!r&&(w.isDom&&s.is(":visible"))&&(r=s.find("img:first"),r.length||(r=s));y(r)?(t=r.offset(),r.is("img")&&(q=r.outerWidth(),p=r.outerHeight())):(t.top=b.y+(b.h-p)*w.topRatio,t.left=b.x+(b.w-q)*w.leftRatio);if("fixed"===k.wrap.css("position")||w.locked){t.top-=b.y,t.left-=b.x}return t={top:m(t.top-n*w.topRatio),left:m(t.left-l*w.leftRatio),width:m(q+l),height:m(p+n)}},step:function(b,r){var q,s,p=r.prop;s=k.current;var n=s.wrapSpace,l=s.skinSpace;if("width"===p||"height"===p){q=r.end===r.start?1:(b-r.start)/(r.end-r.start),k.isClosing&&(q=1-q),s="width"===p?s.wPadding:s.hPadding,s=b-s,k.skin[p](h("width"===p?s:s-n*q)),k.inner[p](h("width"===p?s:s-n*q-l*q))}},zoomIn:function(){var b=k.current,n=b.pos,l=b.openEffect,p="elastic"===l,f=i.extend({opacity:1},n);delete f.position;p?(n=this.getOrigPosition(),b.openOpacity&&(n.opacity=0.1)):"fade"===l&&(n.opacity=0.1);k.wrap.css(n).animate(f,{duration:"none"===l?0:b.openSpeed,easing:b.openEasing,step:p?this.step:null,complete:k._afterZoomIn})},zoomOut:function(){var b=k.current,l=b.closeEffect,f="elastic"===l,n={opacity:0.1};f&&(n=this.getOrigPosition(),b.closeOpacity&&(n.opacity=0.1));k.wrap.animate(n,{duration:"none"===l?0:b.closeSpeed,easing:b.closeEasing,step:f?this.step:null,complete:k._afterZoomOut})},changeIn:function(){var b=k.current,q=b.nextEffect,p=b.pos,r={opacity:1},n=k.direction,l;p.opacity=0.1;"elastic"===q&&(l="down"===n||"up"===n?"top":"left","down"===n||"right"===n?(p[l]=m(h(p[l])-200),r[l]="+=200px"):(p[l]=m(h(p[l])+200),r[l]="-=200px"));"none"===q?k._afterZoomIn():k.wrap.css(p).animate(r,{duration:b.nextSpeed,easing:b.nextEasing,complete:k._afterZoomIn})},changeOut:function(){var b=k.previous,l=b.prevEffect,f={opacity:0.1},n=k.direction;"elastic"===l&&(f["down"===n||"up"===n?"top":"left"]=("up"===n||"left"===n?"-":"+")+"=200px");b.wrap.animate(f,{duration:"none"===l?0:b.prevSpeed,easing:b.prevEasing,complete:function(){i(this).trigger("onReset").remove()}})}};k.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!A,fixed:!0},overlay:null,fixed:!1,create:function(b){b=i.extend({},this.defaults,b);this.overlay&&this.close();this.overlay=i('<div class="fancybox-overlay"></div>').appendTo("body");this.fixed=!1;b.fixed&&k.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(b){var f=this;b=i.extend({},this.defaults,b);this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(b);this.fixed||(d.bind("resize.overlay",i.proxy(this.update,this)),this.update());b.closeClick&&this.overlay.bind("click.overlay",function(l){i(l.target).hasClass("fancybox-overlay")&&(k.isActive?k.close():f.close())});this.overlay.css(b.css).show()},close:function(){i(".fancybox-overlay").remove();d.unbind("resize.overlay");this.overlay=null;!1!==this.margin&&(i("body").css("margin-right",this.margin),this.margin=!1);this.el&&this.el.removeClass("fancybox-lock")},update:function(){var l="100%",f;this.overlay.width(l).height("100%");u?(f=Math.max(j.documentElement.offsetWidth,j.body.offsetWidth),g.width()>f&&(l=g.width())):g.width()>d.width()&&(l=g.width());this.overlay.width(l).height(g.height())},onReady:function(l,f){i(".fancybox-overlay").stop(!0,!0);this.overlay||(this.margin=g.height()>d.height()||"scroll"===i("body").css("overflow-y")?i("body").css("margin-right"):!1,this.el=j.all&&!j.querySelector?i("html"):i("body"),this.create(l));l.locked&&this.fixed&&(f.locked=this.overlay.append(f.wrap),f.fixed=!1);!0===l.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(l,f){f.locked&&(this.el.addClass("fancybox-lock"),!1!==this.margin&&i("body").css("margin-right",h(this.margin)+f.scrollbarWidth));this.open(l)},onUpdate:function(){this.fixed||this.update()},afterClose:function(b){this.overlay&&!k.isActive&&this.overlay.fadeOut(b.speedOut,i.proxy(this.close,this))}};k.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(b){var l=k.current,f=l.title,n=b.type;i.isFunction(f)&&(f=f.call(l.element,l));if(e(f)&&""!==i.trim(f)){l=i('<div class="fancybox-title fancybox-title-'+n+'-wrap">'+f+"</div>");switch(n){case"inside":n=k.skin;break;case"outside":n=k.wrap;break;case"over":n=k.inner;break;default:n=k.skin,l.appendTo("body"),u&&l.width(l.width()),l.wrapInner('<span class="child"></span>'),k.current.margin[2]+=Math.abs(h(l.css("margin-bottom")))}l["top"===b.position?"prependTo":"appendTo"](n)}}};i.fn.fancybox=function(b){var n,l=i(this),p=this.selector||"",f=function(w){var t=i(this).blur(),s=n,r,q;!w.ctrlKey&&(!w.altKey&&!w.shiftKey&&!w.metaKey)&&!t.is(".fancybox-wrap")&&(r=b.groupAttr||"data-fancybox-group",q=t.attr(r),q||(r="rel",q=t.get(0)[r]),q&&(""!==q&&"nofollow"!==q)&&(t=p.length?i(p):l,t=t.filter("["+r+'="'+q+'"]'),s=t.index(this)),b.index=s,!1!==k.open(t,b)&&w.preventDefault())};b=b||{};n=b.index||0;!p||!1===b.live?l.unbind("click.fb-start").bind("click.fb-start",f):g.undelegate(p,"click.fb-start").delegate(p+":not('.fancybox-item, .fancybox-nav')","click.fb-start",f);this.filter("[data-fancybox-start=1]").trigger("click");return this};g.ready(function(){i.scrollbarWidth===a&&(i.scrollbarWidth=function(){var p=i('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),n=p.children(),n=n.innerWidth()-n.height(99).innerWidth();p.remove();return n});if(i.support.fixedPosition===a){var b=i.support,l=i('<div style="position:fixed;top:20px;"></div>').appendTo("body"),f=20===l[0].offsetTop||15===l[0].offsetTop;l.remove();b.fixedPosition=f}i.extend(k.defaults,{scrollbarWidth:i.scrollbarWidth(),fixed:i.support.fixedPosition,parent:i("body")})})})(window,document,jQuery);

/* jquery.themepunch.megafolio.js */
;(function(e,t){function n(t,n){t.find(">.mega-entry").each(function(){var r=e(this);r.removeClass("tp-layout-first-item").removeClass("tp-layout-last-item").removeClass("very-last-item");r.addClass("tp-notordered").addClass("mega-entry-added");r.wrapInner('<div class="mega-entry-innerwrap"></div>');var i=r.find(".mega-entry-innerwrap");i.css({background:"url("+r.data("src")+")",backgroundPosition:"50% 49%",backgroundSize:"cover","background-repeat":"no-repeat"});r.find(".mega-show-more").each(function(){var i=e(this);i.data("entid",r.attr("id"));i.click(function(){var r=e(this);var i=t.find("#"+r.data("entid"));i.addClass("mega-in-detailview");n.detailview="on"})})})}function r(t,n){t.find(">.mega-entry-added").each(function(r){var i=e(this);if(!i.hasClass("tp-layout")){i.removeClass("tp-layout-first-item").removeClass("tp-layout-last-item").removeClass("very-last-item");i.addClass("tp-notordered");i.wrapInner('<div class="mega-entry-innerwrap"></div>');var s=i.find(".mega-entry-innerwrap");s.css({background:"url("+i.data("src")+")",backgroundPosition:"50% 49%",backgroundSize:"cover","background-repeat":"no-repeat"});i.find(".mega-show-more").each(function(){var r=e(this);r.data("entid",i.attr("id"));r.click(function(){var r=e(this);var i=t.find("#"+r.data("entid"));i.addClass("mega-in-detailview");n.detailview="on"})})}})}function i(t){t.find(">.mega-entry.tp-layout").each(function(){var t=e(this);t.removeClass("tp-layout").addClass("tp-notordered")})}function s(n,r){var i=n.data("ie");var s=n.data("ie9");var o=n.data("opt");if(o.filterChangeSpeed==t)o.filterChangeSpeed=Math.round(Math.random()*500+100);o.filter=r;var u=1;var a=1;n.find(">.mega-entry").each(function(n){var u=e(this);var f=o.filterChangeRotate;if(f==t)f=30;if(f==99)f=Math.round(Math.random()*50-25);u.removeClass("tp-layout-first-item").removeClass("tp-layout-last-item").removeClass("very-last-item");var l=r.split(",");var c=false;for(var h=0;h<l.length;h++){if(u.hasClass(l[h])){c=true;console.log("has class")}}if(c||r=="*"){u.removeClass("tp-layout").addClass("tp-notordered")}else{u.removeClass("tp-ordered").removeClass("tp-layout");setTimeout(function(){if(i||s){u.animate({scale:0,opacity:0},{queue:false,duration:o.filterChangeSpeed})}else{if(o.filterChangeAnimation=="fade"){u.transition({scale:1,opacity:0,rotate:0},o.filterChangeSpeed);u.find(".mega-entry-innerwrap").transition({scale:1,opacity:1,perspective:"10000px",rotateX:"0deg"},o.filterChangeSpeed)}else if(o.filterChangeAnimation=="scale"){u.transition({scale:o.filterChangeScale,opacity:0,rotate:0},o.filterChangeSpeed);u.find(".mega-entry-innerwrap").transition({scale:1,opacity:1,perspective:"10000px",rotateX:"0deg"},o.filterChangeSpeed)}else if(o.filterChangeAnimation=="rotate"){u.transition({scale:1,opacity:0,rotate:f},o.filterChangeSpeed);u.find(".mega-entry-innerwrap").transition({scale:1,opacity:1,perspective:"10000px",rotateX:"0deg"},o.filterChangeSpeed)}else if(o.filterChangeAnimation=="rotatescale"){u.transition({scale:o.filterChangeScale,opacity:0,rotate:f},o.filterChangeSpeed);u.find(".mega-entry-innerwrap").transition({scale:1,opacity:1,perspective:"10000px",rotateX:"0deg"},o.filterChangeSpeed)}else if(o.filterChangeAnimation=="pagetop"||o.filterChangeAnimation=="pagebottom"||o.filterChangeAnimation=="pagemiddle"){u.find(".mega-entry-innerwrap").removeClass("pagemiddle").removeClass("pagetop").removeClass("pagebottom").addClass(o.filterChangeAnimation);u.transition({opacity:0},o.filterChangeSpeed);u.find(".mega-entry-innerwrap").transition({scale:1,opacity:0,perspective:"10000px",rotateX:"90deg"},o.filterChangeSpeed)}}setTimeout(function(){u.css({visibility:"hidden"})},o.filterChangeSpeed)},a*o.delay/2);a++}})}function o(n){var r=n.data("ie");var i=n.data("ie9");var s=n.data("opt");if(s.filterChangeSpeed==t)s.filterChangeSpeed=Math.round(Math.random()*500+100);if(s.filterChangeScale==t)s.filterChangeScale=.8;var o=0;var u=0;n.find(">.mega-entry").each(function(n){var o=e(this);var u=s.filterChangeRotate;if(u==t)u=30;if(u==99)u=Math.round(Math.random()*360);if(r||i){o.css({opacity:0})}else{if(s.filterChangeAnimation=="fade")o.transition({scale:1,opacity:0,rotate:0,duration:1,queue:false});else if(s.filterChangeAnimation=="scale"){o.transition({scale:s.filterChangeScale,opacity:0,rotate:0,duration:1,queue:false})}else if(s.filterChangeAnimation=="rotate")o.transition({scale:1,opacity:0,rotate:u,duration:1,queue:false});else if(s.filterChangeAnimation=="rotatescale"){o.transition({scale:s.filterChangeScale,opacity:0,rotate:u,duration:1,queue:false})}else if(s.filterChangeAnimation=="pagetop"||s.filterChangeAnimation=="pagebottom"||s.filterChangeAnimation=="pagemiddle"){o.find(".mega-entry-innerwrap").addClass(s.filterChangeAnimation);o.transition({opacity:0,duration:1,queue:false});o.find(".mega-entry-innerwrap").transition({scale:1,opacity:1,perspective:"10000px",rotateX:"90deg",duration:1,queue:false})}}})}function u(t,n){if(n==0){var r=new Array}else var r=t.data("lastorder");var i=t.width();var s=t.data("order");if(n>s.length-1)n=0;var o=t.find(">.mega-entry.tp-notordered");var a=12;if(o.length<9)a=o.length;var l=s[n];var c=false;var h=!e.support.opacity;var p=!e.support.htmlSerialize;if(s[n]==0||l<2||l>23)if(h){l=9}else{l=Math.round(Math.random()*a+1)}if(l<2)l=2;if(l>23)l=23;r.push(l);var d=l;if(l==10||l==14)d=3;if(l==11||l==15)d=4;if(l==12||l==16)d=5;if(l==13||l==17)d=6;if(l==11||l==12||l==13||l==15||l==16||l==17)if(i<840&&i>721)d=4;else if(i<720)d=3;if(l==18||l==19||l==20)d=1;if(l==21||l==22||l==23)d=2;o.slice(0,d).each(function(t){var n=e(this);n.removeClass("tp-layout-first-item").removeClass("tp-layout-last-item").removeClass("very-last-item");n.addClass("tp-ordered tp-layout");n.data("layout",l);n.data("child",t);if(t==0)n.addClass("tp-layout-first-item");if(t==d-1){n.addClass("tp-layout-last-item")}n.removeClass("tp-notordered")});n=n+1;t.data("lastorder",r);if(t.find(">.mega-entry.tp-notordered").length>0)u(t,n);else{try{f(t).addClass("very-last-item")}catch(v){}return t}}function a(t,n,r){if(n==0){var i=new Array}else var i=t.data("lastorder");var s=t.width();var o=t.data("order");if(n>o.length-1)n=0;var u=t.find(">.mega-entry.tp-ordered");var l=12;if(u.length<9)l=u.length;var h=o[n];var p=false;var d=!e.support.opacity;var v=!e.support.htmlSerialize;if(o[n]==0||h<2||h>23)if(d){h=9}else{h=Math.round(Math.random()*l+1)}if(h<2)h=2;if(h>23)h=23;i.push(h);var m=h;if(h==10||h==14)m=3;if(h==11||h==15)m=4;if(h==12||h==16)m=5;if(h==13||h==17)m=6;if(h==11||h==12||h==13||h==15||h==16||h==17)if(s<840&&s>721)m=4;else if(s<720)m=3;if(h==18||h==19||h==20)m=1;if(h==21||h==22||h==23)m=2;var g=u.length-r;u.slice(g,g+m).each(function(t){var n=e(this);n.removeClass("tp-layout-first-item").removeClass("tp-layout-last-item").removeClass("very-last-item");n.addClass("tp-ordered tp-layout");n.data("layout",h);n.data("child",t);if(t==0)n.addClass("tp-layout-first-item");if(t==m-1){n.addClass("tp-layout-last-item")}n.removeClass("tp-notordered")});n=n+1;t.data("lastorder",i);r=r-m;if(r>0)a(t,n,r);else{f(t).addClass("very-last-item");c(t);return t}}function f(t){var n;t.find(">.mega-entry.tp-layout.tp-ordered").each(function(){n=e(this)});return n}function l(e){return e}function c(n,r){var i=0;var s=n.data("defaultwidth");var o=n.data("opt");var u=o.delay;var a=0;if(o.firststart==1){a=1;o.firststart=0}var f=n.width();var c=f/s;var h=185;var p=n.data("paddingh");var d=n.data("paddingv");var v=1;var m=1;var g=n.data("ie");var y=n.data("ie9");var b=5*c;var w=0;var E=f;var S=l(b*160);var x=l(b*158);var T=l(b*152);var N=l(b*148);var C=l(b*132);var k=l(b*123);var L=l(b*122);var A=l(b*119);var O=l(b*113);var M=l(b*112);var _=l(b*98);var D=l(b*84);var P=l(b*83);var H=l(b*79);var B=l(b*78);var j=l(b*77);var F=l(b*74);var I=l(b*73);var q=l(b*69);var R=l(b*68);var U=l(b*67);var z=l(b*65.3);var W=l(b*49);var X=l(b*48);var V=l(b*45);var J=l(b*44);var K=l(b*39.2);var Q=l(b*39);var G=l(b*38);var Y=l(b*37);var Z=l(b*36);var et=l(b*32.66);var tt=l(b*222);var nt=N;var rt=l(b*111);var it=F;var st=I;var ot=W;var ut=X;var at=Y;var ft=Z;var lt=new Array(0,0,0,0,0,0,0,0,0);var ct=new Array(0,0,0,0,0,0,0,0,0);var ht=0;var pt=0;var dt=n.find(">.mega-entry.tp-layout").length;n.find(">.mega-entry.tp-layout").each(function(n){var r=e(this);var u=r.find(".mega-entry-innerwrap");pt=r.data("layout");if(pt==11||pt==12||pt==13)if(f<840&&f>721)pt=11;else if(f<720)pt=10;if(pt==15||pt==16||pt==17)if(f<840&&f>721)pt=15;else if(f<720)pt=14;var l=500;var c,h,v;var m=p;var b=d;var S=i;var C=at;if(f>480){if(pt==2){if(f>767){if(r.data("child")==0){c=O;h=it;v=0;C=it}if(r.data("child")==1){c=P;h=it;v=O;m=0;i=i+it;C=it}}else{if(f>480&&f<768){if(r.data("child")==0){c=D;h=it;v=0;C=it}if(r.data("child")==1){c=M;h=it;v=D;m=0;i=i+it;C=it}}}}if(pt==3){if(f>767){if(r.data("child")==0){c=B;h=it;v=0;C=it}if(r.data("child")==1){c=V;h=it;v=B;C=it}if(r.data("child")==2){c=I;h=it;v=k;i=i+it;C=it;m=0}}else{if(f>480&&f<768){if(r.data("child")==0){c=F;h=it;v=0;C=it}if(r.data("child")==1){c=B;h=it;v=F;C=it}if(r.data("child")==2){c=J;h=it;v=T;C=it;i=i+it;m=0}}}}if(pt==4){if(f>767){if(r.data("child")==0){c=D;h=it;v=0;C=370}if(r.data("child")==1){c=Q;h=at;v=D}if(r.data("child")==2){c=I;h=it;v=k;m=0;i=i+at;C=it}if(r.data("child")==3){c=Q;h=at;v=D;i=i+at}}else{if(f>480&&f<768){if(r.data("child")==0){c=Q;h=at;v=D}if(r.data("child")==1){c=D;h=it;v=0;i=i+at}if(r.data("child")==2){c=Q;h=at;v=D;i=i-at}if(r.data("child")==3){c=I;h=it;v=k;m=0;i=i+it;C=it}}}}if(pt==5){if(f>767){if(r.data("child")==0){c=D;h=at;v=0}if(r.data("child")==1){c=Q;h=at;v=D}if(r.data("child")==2){c=I;h=it;v=k;m=0;i=i+at;C=it}if(r.data("child")==3){c=J;h=at;v=0}if(r.data("child")==4){c=H;h=at;v=J;i=i+at}}else{if(f>480&&f<768){if(r.data("child")==0){c=D;h=at;v=0}if(r.data("child")==1){c=Q;h=at;v=D}if(r.data("child")==2){c=I;h=at;v=k;m=0;i=i+at}if(r.data("child")==3){c=_;h=at;v=0}if(r.data("child")==4){c=_;h=at;v=_;m=0;i=i+at}}}}if(pt==6){if(f>767){if(r.data("child")==0){c=F;h=it;v=0;C=it}if(r.data("child")==1){c=V;h=at;v=F}if(r.data("child")==2){c=j;h=at;v=A;m=0;i=i+at}if(r.data("child")==3){c=V;h=at;v=F}if(r.data("child")==4){c=Q;h=at;v=A}if(r.data("child")==5){c=G;h=at;v=x;m=0;i=i+at}}else{if(f>480&&f<768){if(r.data("child")==0){c=V;h=it;v=0;C=it}if(r.data("child")==1){c=R;h=it;v=V;C=it}if(r.data("child")==2){c=Q;h=at;v=O}if(r.data("child")==3){c=J;h=at;v=T;m=0;i=i+at}if(r.data("child")==4){c=Q;h=at;v=O}if(r.data("child")==5){c=J;h=at;v=T;m=0;i=i+at}}}}if(pt==7){if(f>767){if(r.data("child")==0){c=O;h=it;v=0;C=it}if(r.data("child")==1){c=P;h=at;v=O;m=0;i=i+at}if(r.data("child")==2){c=Q;h=at;v=O}if(r.data("child")==3){c=J;h=it;v=T;m=0;i=i+at;C=it}if(r.data("child")==4){c=V;h=at;v=0}if(r.data("child")==5){c=R;h=at;v=V}if(r.data("child")==6){c=Q;h=at;v=O;i=i+at}}else{if(f>480&&f<768){if(r.data("child")==0){c=O;h=it;v=0;C=it}if(r.data("child")==1){c=P;h=at;v=O;m=0;i=i+at}if(r.data("child")==2){c=Q;h=at;v=O}if(r.data("child")==3){c=J;h=at;v=T;m=0;i=i+at}if(r.data("child")==4){c=V;h=at;v=0}if(r.data("child")==5){c=R;h=at;v=V}if(r.data("child")==6){c=P;h=at;v=O;m=0;i=i+at}}}}if(pt==8){if(f>767){if(r.data("child")==0){c=P;h=at;v=0}if(r.data("child")==1){c=q;h=it;v=P;C=it}if(r.data("child")==2){c=J;h=at;v=T;m=0;i=i+at}if(r.data("child")==3){c=Q;h=at;v=0}if(r.data("child")==4){c=J;h=at;v=Q}if(r.data("child")==5){c=J;h=it;v=T;m=0;i=i+at;C=at}if(r.data("child")==6){c=P;h=at;v=0}if(r.data("child")==7){c=q;h=at;v=P;i=i+at}}else{if(f>480&&f<768){if(r.data("child")==0){c=P;h=at;v=0}if(r.data("child")==1){c=Q;h=at;v=P}if(r.data("child")==2){c=F;h=at;v=L;m=0;i=i+at;C=it}if(r.data("child")==3){c=Q;h=at;v=0}if(r.data("child")==4){c=P;h=at;v=Q}if(r.data("child")==5){c=F;h=it;v=L;m=0;i=i+at;C=it}if(r.data("child")==6){c=P;h=at;v=0}if(r.data("child")==7){c=Q;h=at;v=P;i=i+at}}}}if(pt==9){if(f>767){if(r.data("child")==0){c=O;h=it;v=0;C=it}if(r.data("child")==1){c=P;h=at;v=O;m=0;i=i+at}if(r.data("child")==2){c=Q;h=at;v=O}if(r.data("child")==3){c=J;h=it;v=T;m=0;i=i+at;C=it}if(r.data("child")==4){c=V;h=it;v=0;C=it}if(r.data("child")==5){c=R;h=it;v=V;C=it}if(r.data("child")==6){c=Q;h=at;v=O;i=i+at}if(r.data("child")==7){c=Q;h=at;v=O}if(r.data("child")==8){c=J;h=at;v=T;m=0;i=i+at}}else{if(f>480&&f<768){if(r.data("child")==0){c=F;h=it;v=0;C=it}if(r.data("child")==1){c=X;h=it;v=F;C=it}if(r.data("child")==2){c=F;h=it;v=L;m=0;i=i+it;C=it}if(r.data("child")==3){c=X;h=it;v=0;C=it}if(r.data("child")==4){c=F;h=it;v=X;C=it}if(r.data("child")==5){c=F;h=it;v=L;m=0;i=i+it;C=it}if(r.data("child")==6){c=F;h=it;v=0;C=it}if(r.data("child")==7){c=F;h=it;v=F;C=it}if(r.data("child")==8){c=X;h=it;v=N;m=0;i=i+it;C=it}}}}if(pt>9&&pt<14){if(pt==10){c=Math.round(z);c=c+m/3}else if(pt==11){c=Math.round(W);c=c+m/4}else if(pt==12){c=Math.round(K);c=c+m/5}else if(pt==13){c=Math.round(et);c=c+m/6}var h=c;var U=r.data("child");v=c*U;C=h;if(U==2&&pt==10||U==3&&pt==11||U==4&&pt==12||U==5&&pt==13||r.hasClass("tp-layout-last-item")){i=i+h}}if(pt==18){c=Math.round(E);c=c+m;var h=c;var U=r.data("child");v=c*U;C=h;i=i+h}if(pt==19){c=Math.round(E);c=c+m;var h=c/2;var U=r.data("child");v=c*U;C=h;i=i+h}if(pt==20){c=Math.round(E);c=c+m;var h=c/3;var U=r.data("child");v=c*U;C=h;i=i+h}if(pt==21){c=Math.round(_);c=c+m/2;var h=c;var U=r.data("child");v=c*U;C=h;if(U==1)i=i+h}if(pt==22){c=Math.round(_);c=c+m/2;var h=c/2;var U=r.data("child");v=c*U;C=h;if(U==1)i=i+h}if(pt==23){c=Math.round(_);c=c+m/2;var h=c/3;var U=r.data("child");v=c*U;C=h;if(U==1)i=i+h}if(pt>13&&pt<18){if(pt==14){c=Math.round(z);c=c+m/3}else if(pt==15){c=Math.round(W);c=c+m/4}else if(pt==16){c=Math.round(K);c=c+m/5}else if(pt==17){c=Math.round(et);c=c+m/6}var U=r.data("child");var Y=c/r.data("width");h=r.data("height")*Y;v=c*r.data("child");S=lt[U];C=h*Y;ct[U]=C;i=S+h;lt[U]=i}}else{h=Math.round(r.data("height")*(f/r.data("width")));c=f;m=0;v=0;S=i;i=i+h}var Z=1;var tt=1;var nt=0;var rt=0;var st=o.filterChangeRotate;if(st==t)rt=30;if(st==99)st=Math.round(Math.random()*360);var ot=o.filter.split(",");var ut=false;for(var ft=0;ft<ot.length;ft++){if(r.hasClass(ot[ft])){ut=true;console.log("has class")}}if(ut||o.filter=="*"){r.css({visibility:"visible"});if(g||y){Z=1;tt=1}else{if(o.filterChangeAnimation=="pagetop"||o.filterChangeAnimation=="pagebottom"||o.filterChangeAnimation=="pagemiddle"){rt=0;nt=0;Z=1;tt=1;eiscal=1;eiopaa=1;eirx=0}else{Z=1;rt=0;tt=1;eiscal=1;eiopaa=1;eirx=0}}}if(o.detailview=="on"&&tt==1)tt=.4;if(r.hasClass("mega-in-detailview"))tt=1;r.removeClass("mega-square").removeClass("mega-portrait").removeClass("mega-landscape");var ht=Math.floor(c/100);var dt=Math.floor(h/100);if(ht>dt)r.addClass("mega-landscape");if(dt>ht)r.addClass("mega-portrait");if(ht==dt)r.addClass("mega-square");var vt=n*o.delay;if(g||y){r.find(".mega-socialbar").animate({width:c+"px"});r.animate({scale:Z,opacity:tt,width:c+"px",height:h+"px",left:v+"px",top:S+"px",paddingBottom:b+"px",paddingRight:m+"px"},{queue:false,duration:400});u.animate({"background-position":"50% 49%","background-size":"cover"},{queue:false,duration:400});if(g){var mt=u.find(".ieimg");var gt=Math.round(r.data("width"))/Math.round(r.data("height"));var yt=Math.round(c)/Math.round(h);var bt=c;var wt=bt/r.data("width")*r.data("height");if(wt<h){wt=h;bt=wt/r.data("height")*r.data("width")}mt.css({width:bt+"px",height:wt+"px"})}}else{var Y=f/s*100-16;if(r.data("lowsize")!=t)if(Y<=r.data("lowsize"))r.addClass("mega-lowsize");else r.removeClass("mega-lowsize");if(a){vt=vt+100;r.transition({opacity:0,top:S+"px",left:v+"px",width:c,height:h,paddingBottom:b+"px",paddingRight:m+"px",duration:1,queue:false})}setTimeout(function(){r.transition({scale:Z,opacity:tt,rotate:rt,"z-index":1,width:c,height:h,top:S+"px",left:v+"px",paddingBottom:b+"px",paddingRight:m+"px",duration:o.filterChangeSpeed,queue:false});setTimeout(function(){r.find(".mega-entry-innerwrap").transition({scale:eiscal,opacity:eiopaa,perspective:"10000px",rotateX:eirx,duration:o.filterChangeSpeed,queue:false});r.removeClass("mega-entry-added")},50);u.transition({"background-position":"50% 49%","background-size":"cover",duration:o.filterChangeSpeed,queue:false})},vt)}if(r.hasClass("very-last-item")&&!r.hasClass("tp-layout-last-item")){i=i+C}else{}if(w<S+h)w=S+h});if(pt>13&&pt<18){i=lt[0];for(allh=0;allh<lt.length;allh++){if(i<lt[allh])i=lt[allh]}}n.css({height:w+"px"})}e.fn.extend({megafoliopro:function(r){var i={filterChangeAnimation:"rotatescale",filterChangeSpeed:400,filterChangeRotate:99,filterChangeScale:.6,delay:20,defaultWidth:980,paddingHorizontal:10,paddingVertical:10,layoutarray:[11],lowSize:50,startFilter:"*"};r=e.extend({},i,r);return this.each(function(){if(!e.support.transition)e.fn.transition=e.fn.animate;var i=r;i.detaiview="off";i.firststart=1;if(i.filter==t)i.filter="*";if(i.delay==t)i.delay=0;var f=i.firefox13=false;var l=i.ie=!e.support.opacity;var h=i.ie9=!e.support.htmlSerialize;if(l)e("body").addClass("ie8");if(h)e("body").addClass("ie9");var p=e(this);p.data("defaultwidth",i.defaultWidth);p.data("paddingh",i.paddingHorizontal);p.data("paddingv",i.paddingVertical);p.data("order",i.layoutarray);p.data("ie",l);p.data("ie9",h);p.data("ff",f);p.data("opt",i);n(p,i);u(p,0);s(p,"*");o(p);u(p,0);setTimeout(function(){c(p)},400);if(i.startFilter!="*"&&i.startFilter!=t){s(p,i.startFilter);u(p,0);c(p)}e(window).resize(function(){clearTimeout(p.data("resized"));p.data("resized",setTimeout(function(){a(p,0,p.find(">.mega-entry.tp-ordered").length)},150))});if(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i)){e(".mega-entry").click(function(){})}})},megamethode:function(t){return this.each(function(){var t=e(this)})},megagetcurrentorder:function(){var t=e(this);return t.data("lastorder")},megaappendentry:function(t){var n=e(this);var i=e(t);i.addClass("mega-entry-added");n.append(i);var o=n.data("opt");r(n,o);u(n,0);c(n,1);setTimeout(function(){s(n,o.filter);u(n,0);c(n,1)},200)},megaremix:function(n){return this.each(function(){var r=e(this);if(n!=t)r.data("order",n);i(r);u(r,0);c(r)})},megafilter:function(t){return this.each(function(){var n=e(this);if(n.data("nofilterinaction")!=1){n.data("nofilterinaction",1);s(n,t);u(n,0);c(n);setTimeout(function(){n.data("nofilterinaction",0)},1200)}else{clearInterval(n.data("nextfiltertimer"));n.data("nextfiltertimer",setInterval(function(){if(n.data("nofilterinaction")!=1){clearInterval(n.data("nextfiltertimer"));s(n,t);u(n,0);c(n);n.data("nofilterinaction",1);setTimeout(function(){n.data("nofilterinaction",0)},1200)}},10))}})},megaanimchange:function(t,n,r,i){return this.each(function(){var o=e(this);var a=o.data("opt");var f=a.filter;a.filterChangeAnimation=t;a.filterChangeSpeed=n;a.filterChangeRotate=r;a.filterChangeScale=i;s(o,"");s(o,f);setTimeout(function(){u(o,0);c(o)},2*a.filterChangeSpeed);o.data("opt",a)})}})})(jQuery)

jQuery(document).ready(function() {
	var api=jQuery('.megafolio-container').megafoliopro(
		{
			filterChangeAnimation:"fade",		// fade, rotate, scale, rotatescale, pagetop, pagebottom,pagemiddle
			filterChangeSpeed:500,					// Speed of Transition
			filterChangeRotate:99,					// If you ue scalerotate or rotate you can set the rotation (99 = random !!)
			filterChangeScale:0.6,					// Scale Animation Endparameter
			delay:20,								// The Time between the Animation of single mega-entry points
			paddingHorizontal:10,					// Padding between the mega-entrypoints
			paddingVertical:10,
			layoutarray:[1],					 	// Defines the Layout Types which can be used in the Gallery. 2-9 or "random". You can define more than one, like {5,2,6,4} where the first items will be orderd in layout 5, the next comming items in layout 2, the next comming items in layout 6 etc... You can use also simple {9} then all item ordered in Layout 9 type.
		});
	// CALL FILTER FUNCTION IF ANY FILTER HAS BEEN CLICKED
	jQuery('.filterList li').click(function() {	api.megafilter(jQuery(this).data('category'));    });	
	$('.fancybox').fancybox({
		'width':'100%',
		'height':'100%',
		'type':'iframe',
		'autoScale':'false'
	});
});
$('#portLBClose').click(function() {
    parent.$.fancybox.close();
});

/*! skrollr 0.6.17 (2013-10-19) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr | Free to use under terms of MIT license */
(function(e,t,r){"use strict";function n(r){if(o=t.documentElement,a=t.body,K(),it=this,r=r||{},ut=r.constants||{},r.easing)for(var n in r.easing)U[n]=r.easing[n];yt=r.edgeStrategy||"set",ct={beforerender:r.beforerender,render:r.render},ft=r.forceHeight!==!1,ft&&(zt=r.scale||1),pt=r.mobileDeceleration||E,gt=r.smoothScrolling!==!1,dt=r.smoothScrollingDuration||x,vt={targetTop:it.getScrollTop()},Bt=(r.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent||navigator.vendor||e.opera)})(),Bt?(st=t.getElementById("skrollr-body"),st&&at(),X(),Ft(o,[y,S],[T])):Ft(o,[y,b],[T]),it.refresh(),St(e,"resize orientationchange",function(){var e=o.clientWidth,t=o.clientHeight;(t!==Lt||e!==It)&&(Lt=t,It=e,Mt=!0)});var i=Y();return function l(){Z(),bt=i(l)}(),it}var o,a,i=e.skrollr={get:function(){return it},init:function(e){return it||new n(e)},VERSION:"0.6.17"},l=Object.prototype.hasOwnProperty,s=e.Math,c=e.getComputedStyle,f="touchstart",u="touchmove",p="touchcancel",m="touchend",g="skrollable",d=g+"-before",v=g+"-between",h=g+"-after",y="skrollr",T="no-"+y,b=y+"-desktop",S=y+"-mobile",w="linear",k=1e3,E=.004,x=200,A="start",F="end",C="center",D="bottom",H="___skrollable_id",P=/^(?:input|textarea|button|select)$/i,V=/^\s+|\s+$/g,z=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,N=/\s*([\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,O=/^([a-z\-]+)\[(\w+)\]$/,q=/-([a-z])/g,I=function(e,t){return t.toUpperCase()},L=/[\-+]?[\d]*\.?[\d]+/g,M=/\{\?\}/g,$=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,B=/[a-z\-]+-gradient/g,_="",G="",K=function(){var e=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(c){var t=c(a,null);for(var n in t)if(_=n.match(e)||+n==n&&t[n].match(e))break;if(!_)return _=G="",r;_=_[0],"-"===_.slice(0,1)?(G=_,_={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[_]):G="-"+_.toLowerCase()+"-"}},Y=function(){var t=e.requestAnimationFrame||e[_.toLowerCase()+"RequestAnimationFrame"],r=Ht();return(Bt||!t)&&(t=function(t){var n=Ht()-r,o=s.max(0,1e3/60-n);return e.setTimeout(function(){r=Ht(),t()},o)}),t},R=function(){var t=e.cancelAnimationFrame||e[_.toLowerCase()+"CancelAnimationFrame"];return(Bt||!t)&&(t=function(t){return e.clearTimeout(t)}),t},U={begin:function(){return 0},end:function(){return 1},linear:function(e){return e},quadratic:function(e){return e*e},cubic:function(e){return e*e*e},swing:function(e){return-s.cos(e*s.PI)/2+.5},sqrt:function(e){return s.sqrt(e)},outCubic:function(e){return s.pow(e-1,3)+1},bounce:function(e){var t;if(.5083>=e)t=3;else if(.8489>=e)t=9;else if(.96208>=e)t=27;else{if(!(.99981>=e))return 1;t=91}return 1-s.abs(3*s.cos(1.028*e*t)/t)}};n.prototype.refresh=function(e){var n,o,a=!1;for(e===r?(a=!0,lt=[],$t=0,e=t.getElementsByTagName("*")):e=[].concat(e),n=0,o=e.length;o>n;n++){var i=e[n],l=i,s=[],c=gt,f=yt;if(i.attributes){for(var u=0,p=i.attributes.length;p>u;u++){var m=i.attributes[u];if("data-anchor-target"!==m.name)if("data-smooth-scrolling"!==m.name)if("data-edge-strategy"!==m.name){var d=m.name.match(z);if(null!==d){var v={props:m.value,element:i};s.push(v);var h=d[1];h=h&&ut[h.substr(1)]||0;var y=d[2];/p$/.test(y)?(v.isPercentage=!0,v.offset=((0|y.slice(0,-1))+h)/100):v.offset=(0|y)+h;var T=d[3],b=d[4]||T;T&&T!==A&&T!==F?(v.mode="relative",v.anchors=[T,b]):(v.mode="absolute",T===F?v.isEnd=!0:v.isPercentage||(v.frame=v.offset*zt,delete v.offset))}}else f=m.value;else c="off"!==m.value;else if(l=t.querySelector(m.value),null===l)throw'Unable to find anchor target "'+m.value+'"'}if(s.length){var S,w,k;!a&&H in i?(k=i[H],S=lt[k].styleAttr,w=lt[k].classAttr):(k=i[H]=$t++,S=i.style.cssText,w=At(i)),lt[k]={element:i,styleAttr:S,classAttr:w,anchorTarget:l,keyFrames:s,smoothScrolling:c,edgeStrategy:f},Ft(i,[g],[])}}}for(Et(),n=0,o=e.length;o>n;n++){var E=lt[e[n][H]];E!==r&&(J(E),et(E))}return it},n.prototype.relativeToAbsolute=function(e,t,r){var n=o.clientHeight,a=e.getBoundingClientRect(),i=a.top,l=a.bottom-a.top;return t===D?i-=n:t===C&&(i-=n/2),r===D?i+=l:r===C&&(i+=l/2),i+=it.getScrollTop(),0|i+.5},n.prototype.animateTo=function(e,t){t=t||{};var n=Ht(),o=it.getScrollTop();return mt={startTop:o,topDiff:e-o,targetTop:e,duration:t.duration||k,startTime:n,endTime:n+(t.duration||k),easing:U[t.easing||w],done:t.done},mt.topDiff||(mt.done&&mt.done.call(it,!1),mt=r),it},n.prototype.stopAnimateTo=function(){mt&&mt.done&&mt.done.call(it,!0),mt=r},n.prototype.isAnimatingTo=function(){return!!mt},n.prototype.setScrollTop=function(t,r){return ht=r===!0,Bt?_t=s.min(s.max(t,0),Vt):e.scrollTo(0,t),it},n.prototype.getScrollTop=function(){return Bt?_t:e.pageYOffset||o.scrollTop||a.scrollTop||0},n.prototype.getMaxScrollTop=function(){return Vt},n.prototype.on=function(e,t){return ct[e]=t,it},n.prototype.off=function(e){return delete ct[e],it},n.prototype.destroy=function(){var e=R();e(bt),kt(),Ft(o,[T],[y,b,S]);for(var t=0,n=lt.length;n>t;t++)ot(lt[t].element);o.style.overflow=a.style.overflow="auto",o.style.height=a.style.height="auto",st&&i.setStyle(st,"transform","none"),it=r,st=r,ct=r,ft=r,Vt=0,zt=1,ut=r,pt=r,Nt="down",Ot=-1,It=0,Lt=0,Mt=!1,mt=r,gt=r,dt=r,vt=r,ht=r,$t=0,yt=r,Bt=!1,_t=0,Tt=r};var X=function(){var n,i,l,c,g,d,v,h,y,T,b,S;St(o,[f,u,p,m].join(" "),function(e){var o=e.changedTouches[0];for(c=e.target;3===c.nodeType;)c=c.parentNode;switch(g=o.clientY,d=o.clientX,T=e.timeStamp,P.test(c.tagName)||e.preventDefault(),e.type){case f:n&&n.blur(),it.stopAnimateTo(),n=c,i=v=g,l=d,y=T;break;case u:h=g-v,S=T-b,it.setScrollTop(_t-h,!0),v=g,b=T;break;default:case p:case m:var a=i-g,w=l-d,k=w*w+a*a;if(49>k){if(!P.test(n.tagName)){n.focus();var E=t.createEvent("MouseEvents");E.initMouseEvent("click",!0,!0,e.view,1,o.screenX,o.screenY,o.clientX,o.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null),n.dispatchEvent(E)}return}n=r;var x=h/S;x=s.max(s.min(x,3),-3);var A=s.abs(x/pt),F=x*A+.5*pt*A*A,C=it.getScrollTop()-F,D=0;C>Vt?(D=(Vt-C)/F,C=Vt):0>C&&(D=-C/F,C=0),A*=1-D,it.animateTo(0|C+.5,{easing:"outCubic",duration:A})}}),e.scrollTo(0,0),o.style.overflow=a.style.overflow="hidden"},j=function(){var e,t,r,n,a,i,l,c,f;for(c=0,f=lt.length;f>c;c++)for(e=lt[c],t=e.element,r=e.anchorTarget,n=e.keyFrames,a=0,i=n.length;i>a;a++){l=n[a];var u=l.offset;l.isPercentage&&(u*=o.clientHeight,l.frame=u),"relative"===l.mode&&(ot(t),l.frame=it.relativeToAbsolute(r,l.anchors[0],l.anchors[1])-u,ot(t,!0)),ft&&!l.isEnd&&l.frame>Vt&&(Vt=l.frame)}for(Vt=s.max(Vt,xt()),c=0,f=lt.length;f>c;c++){for(e=lt[c],n=e.keyFrames,a=0,i=n.length;i>a;a++)l=n[a],l.isEnd&&(l.frame=Vt-l.offset);e.keyFrames.sort(Pt)}},W=function(e,t){for(var r=0,n=lt.length;n>r;r++){var o,a,s=lt[r],c=s.element,f=s.smoothScrolling?e:t,u=s.keyFrames,p=u[0].frame,m=u[u.length-1].frame,y=p>f,T=f>m,b=u[y?0:u.length-1];if(y||T){if(y&&-1===s.edge||T&&1===s.edge)continue;switch(Ft(c,[y?d:h],[d,v,h]),s.edge=y?-1:1,s.edgeStrategy){case"reset":ot(c);continue;case"ease":f=b.frame;break;default:case"set":var S=b.props;for(o in S)l.call(S,o)&&(a=nt(S[o].value),i.setStyle(c,o,a));continue}}else 0!==s.edge&&(Ft(c,[g,v],[d,h]),s.edge=0);for(var w=0,k=u.length-1;k>w;w++)if(f>=u[w].frame&&u[w+1].frame>=f){var E=u[w],x=u[w+1];for(o in E.props)if(l.call(E.props,o)){var A=(f-E.frame)/(x.frame-E.frame);A=E.props[o].easing(A),a=rt(E.props[o].value,x.props[o].value,A),a=nt(a),i.setStyle(c,o,a)}break}}},Z=function(){Mt&&(Mt=!1,Et());var e,t,n=it.getScrollTop(),o=Ht();if(mt)o>=mt.endTime?(n=mt.targetTop,e=mt.done,mt=r):(t=mt.easing((o-mt.startTime)/mt.duration),n=0|mt.startTop+t*mt.topDiff),it.setScrollTop(n,!0);else if(!ht){var a=vt.targetTop-n;a&&(vt={startTop:Ot,topDiff:n-Ot,targetTop:n,startTime:qt,endTime:qt+dt}),vt.endTime>=o&&(t=U.sqrt((o-vt.startTime)/dt),n=0|vt.startTop+t*vt.topDiff)}if(Bt&&st&&i.setStyle(st,"transform","translate(0, "+-_t+"px) "+Tt),ht||Ot!==n){Nt=n>Ot?"down":Ot>n?"up":Nt,ht=!1;var l={curTop:n,lastTop:Ot,maxTop:Vt,direction:Nt},s=ct.beforerender&&ct.beforerender.call(it,l);s!==!1&&(W(n,it.getScrollTop()),Ot=n,ct.render&&ct.render.call(it,l)),e&&e.call(it,!1)}qt=o},J=function(e){for(var t=0,r=e.keyFrames.length;r>t;t++){for(var n,o,a,i,l=e.keyFrames[t],s={};null!==(i=N.exec(l.props));)a=i[1],o=i[2],n=a.match(O),null!==n?(a=n[1],n=n[2]):n=w,o=o.indexOf("!")?Q(o):[o.slice(1)],s[a]={value:o,easing:U[n]};l.props=s}},Q=function(e){var t=[];return $.lastIndex=0,e=e.replace($,function(e){return e.replace(L,function(e){return 100*(e/255)+"%"})}),G&&(B.lastIndex=0,e=e.replace(B,function(e){return G+e})),e=e.replace(L,function(e){return t.push(+e),"{?}"}),t.unshift(e),t},et=function(e){var t,r,n={};for(t=0,r=e.keyFrames.length;r>t;t++)tt(e.keyFrames[t],n);for(n={},t=e.keyFrames.length-1;t>=0;t--)tt(e.keyFrames[t],n)},tt=function(e,t){var r;for(r in t)l.call(e.props,r)||(e.props[r]=t[r]);for(r in e.props)t[r]=e.props[r]},rt=function(e,t,r){var n,o=e.length;if(o!==t.length)throw"Can't interpolate between \""+e[0]+'" and "'+t[0]+'"';var a=[e[0]];for(n=1;o>n;n++)a[n]=e[n]+(t[n]-e[n])*r;return a},nt=function(e){var t=1;return M.lastIndex=0,e[0].replace(M,function(){return e[t++]})},ot=function(e,t){e=[].concat(e);for(var r,n,o=0,a=e.length;a>o;o++)n=e[o],r=lt[n[H]],r&&(t?(n.style.cssText=r.dirtyStyleAttr,Ft(n,r.dirtyClassAttr)):(r.dirtyStyleAttr=n.style.cssText,r.dirtyClassAttr=At(n),n.style.cssText=r.styleAttr,Ft(n,r.classAttr)))},at=function(){Tt="translateZ(0)",i.setStyle(st,"transform",Tt);var e=c(st),t=e.getPropertyValue("transform"),r=e.getPropertyValue(G+"transform"),n=t&&"none"!==t||r&&"none"!==r;n||(Tt="")};i.setStyle=function(e,t,r){var n=e.style;if(t=t.replace(q,I).replace("-",""),"zIndex"===t)n[t]=isNaN(r)?r:""+(0|r);else if("float"===t)n.styleFloat=n.cssFloat=r;else try{_&&(n[_+t.slice(0,1).toUpperCase()+t.slice(1)]=r),n[t]=r}catch(o){}};var it,lt,st,ct,ft,ut,pt,mt,gt,dt,vt,ht,yt,Tt,bt,St=i.addEvent=function(t,r,n){var o=function(t){return t=t||e.event,t.target||(t.target=t.srcElement),t.preventDefault||(t.preventDefault=function(){t.returnValue=!1}),n.call(this,t)};r=r.split(" ");for(var a,i=0,l=r.length;l>i;i++)a=r[i],t.addEventListener?t.addEventListener(a,n,!1):t.attachEvent("on"+a,o),Gt.push({element:t,name:a,listener:n})},wt=i.removeEvent=function(e,t,r){t=t.split(" ");for(var n=0,o=t.length;o>n;n++)e.removeEventListener?e.removeEventListener(t[n],r,!1):e.detachEvent("on"+t[n],r)},kt=function(){for(var e,t=0,r=Gt.length;r>t;t++)e=Gt[t],wt(e.element,e.name,e.listener);Gt=[]},Et=function(){var e=it.getScrollTop();Vt=0,ft&&!Bt&&(a.style.height="auto"),j(),ft&&!Bt&&(a.style.height=Vt+o.clientHeight+"px"),Bt?it.setScrollTop(s.min(it.getScrollTop(),Vt)):it.setScrollTop(e,!0),ht=!0},xt=function(){var e=st&&st.offsetHeight||0,t=s.max(e,a.scrollHeight,a.offsetHeight,o.scrollHeight,o.offsetHeight,o.clientHeight);return t-o.clientHeight},At=function(t){var r="className";return e.SVGElement&&t instanceof e.SVGElement&&(t=t[r],r="baseVal"),t[r]},Ft=function(t,n,o){var a="className";if(e.SVGElement&&t instanceof e.SVGElement&&(t=t[a],a="baseVal"),o===r)return t[a]=n,r;for(var i=t[a],l=0,s=o.length;s>l;l++)i=Dt(i).replace(Dt(o[l])," ");i=Ct(i);for(var c=0,f=n.length;f>c;c++)-1===Dt(i).indexOf(Dt(n[c]))&&(i+=" "+n[c]);t[a]=Ct(i)},Ct=function(e){return e.replace(V,"")},Dt=function(e){return" "+e+" "},Ht=Date.now||function(){return+new Date},Pt=function(e,t){return e.frame-t.frame},Vt=0,zt=1,Nt="down",Ot=-1,qt=Ht(),It=0,Lt=0,Mt=!1,$t=0,Bt=!1,_t=0,Gt=[]})(window,document);
if(!isMobile.any){
	if($('body').hasClass('culturePg')){
		$('body').prepend($('<div id="skrollr-body"></div>'));
		jQuery(document).ready(function() {
			var s = skrollr.init({
				forceHeight: false
			});
		});
	}	
}



/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)}else{a(jQuery)}}(function(f){var a=/\+/g;function d(i){return b.raw?i:encodeURIComponent(i)}function g(i){return b.raw?i:decodeURIComponent(i)}function h(i){return d(b.json?JSON.stringify(i):String(i))}function c(i){if(i.indexOf('"')===0){i=i.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")}try{i=decodeURIComponent(i.replace(a," "));return b.json?JSON.parse(i):i}catch(j){}}function e(j,i){var k=b.raw?j:c(j);return f.isFunction(i)?i(k):k}var b=f.cookie=function(q,p,v){if(p!==undefined&&!f.isFunction(p)){v=f.extend({},b.defaults,v);if(typeof v.expires==="number"){var r=v.expires,u=v.expires=new Date();u.setTime(+u+r*86400000)}return(document.cookie=[d(q),"=",h(p),v.expires?"; expires="+v.expires.toUTCString():"",v.path?"; path="+v.path:"",v.domain?"; domain="+v.domain:"",v.secure?"; secure":""].join(""))}var w=q?undefined:{};var s=document.cookie?document.cookie.split("; "):[];for(var o=0,m=s.length;o<m;o++){var n=s[o].split("=");var j=g(n.shift());var k=n.join("=");if(q&&q===j){w=e(k,p);break}if(!q&&(k=e(k))!==undefined){w[j]=k}}return w};b.defaults={};f.removeCookie=function(j,i){if(f.cookie(j)===undefined){return false}f.cookie(j,"",f.extend({},i,{expires:-1}));return !f.cookie(j)}}));

//Adding Drag information for 1st time users 
if(!$.cookie('navDragInfo')){
	$.cookie('navDragInfo','true');
	var dragInfo = '<div class="dragInfo"><p>Click the wheel<br>to open menu.</p><button class="dragInfoClose">Ok, Got it!</button></div>';
	$(dragInfo).insertAfter('header');	
}

//Adding Drag information for 1st time users 
if($.cookie('navBtn') == 'yes') {
	$('.navBtn').removeClass('active');
}
$.cookie('navBtn', 'yes', {expires: 7 });


/*!
	Colorbox v1.5.9 - 2014-04-25
	jQuery lightbox and modal window plugin
	(c) 2014 Jack Moore - http://www.jacklmoore.com/colorbox
	license: http://www.opensource.org/licenses/mit-license.php
*/
(function ($, document, window) {
	var
	// Default settings object.
	// See http://jacklmoore.com/colorbox for details.
	defaults = {
		// data sources
		html: false,
		photo: false,
		iframe: false,
		inline: false,

		// behavior and appearance
		transition: "elastic",
		speed: 300,
		fadeOut: 300,
		width: false,
		initialWidth: "600",
		innerWidth: false,
		maxWidth: false,
		height: false,
		initialHeight: "450",
		innerHeight: false,
		maxHeight: false,
		scalePhotos: true,
		scrolling: true,
		opacity: 0.9,
		preloading: true,
		className: false,
		overlayClose: true,
		escKey: true,
		arrowKey: true,
		top: false,
		bottom: false,
		left: false,
		right: false,
		fixed: false,
		data: undefined,
		closeButton: true,
		fastIframe: true,
		open: false,
		reposition: true,
		loop: true,
		slideshow: false,
		slideshowAuto: true,
		slideshowSpeed: 2500,
		slideshowStart: "start slideshow",
		slideshowStop: "stop slideshow",
		photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,

		// alternate image paths for high-res displays
		retinaImage: false,
		retinaUrl: false,
		retinaSuffix: '@2x.$1',

		// internationalization
		current: "image {current} of {total}",
		previous: "previous",
		next: "next",
		close: "close",
		xhrError: "This content failed to load.",
		imgError: "This image failed to load.",

		// accessbility
		returnFocus: true,
		trapFocus: true,

		// callbacks
		onOpen: false,
		onLoad: false,
		onComplete: false,
		onCleanup: false,
		onClosed: false,

		rel: function() {
			return this.rel;
		},
		href: function() {
			// using this.href would give the absolute url, when the href may have been inteded as a selector (e.g. '#container')
			return $(this).attr('href');
		},
		title: function() {
			return this.title;
		}
	},


	// Abstracting the HTML and event identifiers for easy rebranding
	colorbox = 'colorbox',
	prefix = 'cbox',
	boxElement = prefix + 'Element',
	
	// Events
	event_open = prefix + '_open',
	event_load = prefix + '_load',
	event_complete = prefix + '_complete',
	event_cleanup = prefix + '_cleanup',
	event_closed = prefix + '_closed',
	event_purge = prefix + '_purge',

	// Cached jQuery Object Variables
	$overlay,
	$box,
	$wrap,
	$content,
	$topBorder,
	$leftBorder,
	$rightBorder,
	$bottomBorder,
	$related,
	$window,
	$loaded,
	$loadingBay,
	$loadingOverlay,
	$title,
	$current,
	$slideshow,
	$next,
	$prev,
	$close,
	$groupControls,
	$events = $('<a/>'), // $({}) would be prefered, but there is an issue with jQuery 1.4.2
	
	// Variables for cached values or use across multiple functions
	settings,
	interfaceHeight,
	interfaceWidth,
	loadedHeight,
	loadedWidth,
	index,
	photo,
	open,
	active,
	closing,
	loadingTimer,
	publicMethod,
	div = "div",
	requests = 0,
	previousCSS = {},
	init;

	// ****************
	// HELPER FUNCTIONS
	// ****************
	
	// Convenience function for creating new jQuery objects
	function $tag(tag, id, css) {
		var element = document.createElement(tag);

		if (id) {
			element.id = prefix + id;
		}

		if (css) {
			element.style.cssText = css;
		}

		return $(element);
	}
	
	// Get the window height using innerHeight when available to avoid an issue with iOS
	// http://bugs.jquery.com/ticket/6724
	function winheight() {
		return window.innerHeight ? window.innerHeight : $(window).height();
	}

	function Settings(element, options) {
		if (options !== Object(options)) {
			options = {};
		}

		this.cache = {};
		this.el = element;

		this.value = function(key) {
			var dataAttr;

			if (this.cache[key] === undefined) {
				dataAttr = $(this.el).attr('data-cbox-'+key);

				if (dataAttr !== undefined) {
					this.cache[key] = dataAttr;
				} else if (options[key] !== undefined) {
					this.cache[key] = options[key];
				} else if (defaults[key] !== undefined) {
					this.cache[key] = defaults[key];
				}
			}

			return this.cache[key];
		};

		this.get = function(key) {
			var value = this.value(key);
			return $.isFunction(value) ? value.call(this.el, this) : value;
		};
	}

	// Determine the next and previous members in a group.
	function getIndex(increment) {
		var
		max = $related.length,
		newIndex = (index + increment) % max;
		
		return (newIndex < 0) ? max + newIndex : newIndex;
	}

	// Convert '%' and 'px' values to integers
	function setSize(size, dimension) {
		return Math.round((/%/.test(size) ? ((dimension === 'x' ? $window.width() : winheight()) / 100) : 1) * parseInt(size, 10));
	}
	
	// Checks an href to see if it is a photo.
	// There is a force photo option (photo: true) for hrefs that cannot be matched by the regex.
	function isImage(settings, url) {
		return settings.get('photo') || settings.get('photoRegex').test(url);
	}

	function retinaUrl(settings, url) {
		return settings.get('retinaUrl') && window.devicePixelRatio > 1 ? url.replace(settings.get('photoRegex'), settings.get('retinaSuffix')) : url;
	}

	function trapFocus(e) {
		if ('contains' in $box[0] && !$box[0].contains(e.target) && e.target !== $overlay[0]) {
			e.stopPropagation();
			$box.focus();
		}
	}

	function setClass(str) {
		if (setClass.str !== str) {
			$box.add($overlay).removeClass(setClass.str).addClass(str);
			setClass.str = str;
		}
	}

	function getRelated(rel) {
		index = 0;
		
		if (rel && rel !== false) {
			$related = $('.' + boxElement).filter(function () {
				var options = $.data(this, colorbox);
				var settings = new Settings(this, options);
				return (settings.get('rel') === rel);
			});
			index = $related.index(settings.el);
			
			// Check direct calls to Colorbox.
			if (index === -1) {
				$related = $related.add(settings.el);
				index = $related.length - 1;
			}
		} else {
			$related = $(settings.el);
		}
	}

	function trigger(event) {
		// for external use
		$(document).trigger(event);
		// for internal use
		$events.triggerHandler(event);
	}

	var slideshow = (function(){
		var active,
			className = prefix + "Slideshow_",
			click = "click." + prefix,
			timeOut;

		function clear () {
			clearTimeout(timeOut);
		}

		function set() {
			if (settings.get('loop') || $related[index + 1]) {
				clear();
				timeOut = setTimeout(publicMethod.next, settings.get('slideshowSpeed'));
			}
		}

		function start() {
			$slideshow
				.html(settings.get('slideshowStop'))
				.unbind(click)
				.one(click, stop);

			$events
				.bind(event_complete, set)
				.bind(event_load, clear);

			$box.removeClass(className + "off").addClass(className + "on");
		}

		function stop() {
			clear();
			
			$events
				.unbind(event_complete, set)
				.unbind(event_load, clear);

			$slideshow
				.html(settings.get('slideshowStart'))
				.unbind(click)
				.one(click, function () {
					publicMethod.next();
					start();
				});

			$box.removeClass(className + "on").addClass(className + "off");
		}

		function reset() {
			active = false;
			$slideshow.hide();
			clear();
			$events
				.unbind(event_complete, set)
				.unbind(event_load, clear);
			$box.removeClass(className + "off " + className + "on");
		}

		return function(){
			if (active) {
				if (!settings.get('slideshow')) {
					$events.unbind(event_cleanup, reset);
					reset();
				}
			} else {
				if (settings.get('slideshow') && $related[1]) {
					active = true;
					$events.one(event_cleanup, reset);
					if (settings.get('slideshowAuto')) {
						start();
					} else {
						stop();
					}
					$slideshow.show();
				}
			}
		};

	}());


	function launch(element) {
		var options;

		if (!closing) {

			options = $(element).data('colorbox');

			settings = new Settings(element, options);
			
			getRelated(settings.get('rel'));

			if (!open) {

				open = active = true; // Prevents the page-change action from queuing up if the visitor holds down the left or right keys.

				setClass(settings.get('className'));
				
				// Show colorbox so the sizes can be calculated in older versions of jQuery
				$box.css({visibility:'hidden', display:'block', opacity:''});
				
				$loaded = $tag(div, 'LoadedContent', 'width:0; height:0; overflow:hidden; visibility:hidden');
				$content.css({width:'', height:''}).append($loaded);

				// Cache values needed for size calculations
				interfaceHeight = $topBorder.height() + $bottomBorder.height() + $content.outerHeight(true) - $content.height();
				interfaceWidth = $leftBorder.width() + $rightBorder.width() + $content.outerWidth(true) - $content.width();
				loadedHeight = $loaded.outerHeight(true);
				loadedWidth = $loaded.outerWidth(true);

				// Opens inital empty Colorbox prior to content being loaded.
				var initialWidth = setSize(settings.get('initialWidth'), 'x');
				var initialHeight = setSize(settings.get('initialHeight'), 'y');
				var maxWidth = settings.get('maxWidth');
				var maxHeight = settings.get('maxHeight');

				settings.w = (maxWidth !== false ? Math.min(initialWidth, setSize(maxWidth, 'x')) : initialWidth) - loadedWidth - interfaceWidth;
				settings.h = (maxHeight !== false ? Math.min(initialHeight, setSize(maxHeight, 'y')) : initialHeight) - loadedHeight - interfaceHeight;

				$loaded.css({width:'', height:settings.h});
				publicMethod.position();

				trigger(event_open);
				settings.get('onOpen');

				$groupControls.add($title).hide();

				$box.focus();
				
				if (settings.get('trapFocus')) {
					// Confine focus to the modal
					// Uses event capturing that is not supported in IE8-
					if (document.addEventListener) {

						document.addEventListener('focus', trapFocus, true);
						
						$events.one(event_closed, function () {
							document.removeEventListener('focus', trapFocus, true);
						});
					}
				}

				// Return focus on closing
				if (settings.get('returnFocus')) {
					$events.one(event_closed, function () {
						$(settings.el).focus();
					});
				}
			}

			$overlay.css({
				opacity: parseFloat(settings.get('opacity')) || '',
				cursor: settings.get('overlayClose') ? 'pointer' : '',
				visibility: 'visible'
			}).show();
			
			if (settings.get('closeButton')) {
				$close.html(settings.get('close')).appendTo($content);
			} else {
				$close.appendTo('<div/>'); // replace with .detach() when dropping jQuery < 1.4
			}

			load();
		}
	}

	// Colorbox's markup needs to be added to the DOM prior to being called
	// so that the browser will go ahead and load the CSS background images.
	function appendHTML() {
		if (!$box && document.body) {
			init = false;
			$window = $(window);
			$box = $tag(div).attr({
				id: colorbox,
				'class': $.support.opacity === false ? prefix + 'IE' : '', // class for optional IE8 & lower targeted CSS.
				role: 'dialog',
				tabindex: '-1'
			}).hide();
			$overlay = $tag(div, "Overlay").hide();
			$loadingOverlay = $([$tag(div, "LoadingOverlay")[0],$tag(div, "LoadingGraphic")[0]]);
			$wrap = $tag(div, "Wrapper");
			$content = $tag(div, "Content").append(
				$title = $tag(div, "Title"),
				$current = $tag(div, "Current"),
				$prev = $('<button type="button"/>').attr({id:prefix+'Previous'}),
				$next = $('<button type="button"/>').attr({id:prefix+'Next'}),
				$slideshow = $tag('button', "Slideshow"),
				$loadingOverlay
			);

			$close = $('<button type="button"/>').attr({id:prefix+'Close'});
			
			$wrap.append( // The 3x3 Grid that makes up Colorbox
				$tag(div).append(
					$tag(div, "TopLeft"),
					$topBorder = $tag(div, "TopCenter"),
					$tag(div, "TopRight")
				),
				$tag(div, false, 'clear:left').append(
					$leftBorder = $tag(div, "MiddleLeft"),
					$content,
					$rightBorder = $tag(div, "MiddleRight")
				),
				$tag(div, false, 'clear:left').append(
					$tag(div, "BottomLeft"),
					$bottomBorder = $tag(div, "BottomCenter"),
					$tag(div, "BottomRight")
				)
			).find('div div').css({'float': 'left'});
			
			$loadingBay = $tag(div, false, 'position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;');
			
			$groupControls = $next.add($prev).add($current).add($slideshow);

			$(document.body).append($overlay, $box.append($wrap, $loadingBay));
		}
	}

	// Add Colorbox's event bindings
	function addBindings() {
		function clickHandler(e) {
			// ignore non-left-mouse-clicks and clicks modified with ctrl / command, shift, or alt.
			// See: http://jacklmoore.com/notes/click-events/
			if (!(e.which > 1 || e.shiftKey || e.altKey || e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				launch(this);
			}
		}

		if ($box) {
			if (!init) {
				init = true;

				// Anonymous functions here keep the public method from being cached, thereby allowing them to be redefined on the fly.
				$next.click(function () {
					publicMethod.next();
				});
				$prev.click(function () {
					publicMethod.prev();
				});
				$close.click(function () {
					publicMethod.close();
				});
				$overlay.click(function () {
					if (settings.get('overlayClose')) {
						publicMethod.close();
					}
				});
				
				// Key Bindings
				$(document).bind('keydown.' + prefix, function (e) {
					var key = e.keyCode;
					if (open && settings.get('escKey') && key === 27) {
						e.preventDefault();
						publicMethod.close();
					}
					if (open && settings.get('arrowKey') && $related[1] && !e.altKey) {
						if (key === 37) {
							e.preventDefault();
							$prev.click();
						} else if (key === 39) {
							e.preventDefault();
							$next.click();
						}
					}
				});

				if ($.isFunction($.fn.on)) {
					// For jQuery 1.7+
					$(document).on('click.'+prefix, '.'+boxElement, clickHandler);
				} else {
					// For jQuery 1.3.x -> 1.6.x
					// This code is never reached in jQuery 1.9, so do not contact me about 'live' being removed.
					// This is not here for jQuery 1.9, it's here for legacy users.
					$('.'+boxElement).live('click.'+prefix, clickHandler);
				}
			}
			return true;
		}
		return false;
	}

	// Don't do anything if Colorbox already exists.
	if ($.colorbox) {
		return;
	}

	// Append the HTML when the DOM loads
	$(appendHTML);


	// ****************
	// PUBLIC FUNCTIONS
	// Usage format: $.colorbox.close();
	// Usage from within an iframe: parent.jQuery.colorbox.close();
	// ****************
	
	publicMethod = $.fn[colorbox] = $[colorbox] = function (options, callback) {
		var settings;
		var $obj = this;

		options = options || {};

		if ($.isFunction($obj)) { // assume a call to $.colorbox
			$obj = $('<a/>');
			options.open = true;
		} else if (!$obj[0]) { // colorbox being applied to empty collection
			return $obj;
		}


		if (!$obj[0]) { // colorbox being applied to empty collection
			return $obj;
		}
		
		appendHTML();

		if (addBindings()) {

			if (callback) {
				options.onComplete = callback;
			}

			$obj.each(function () {
				var old = $.data(this, colorbox) || {};
				$.data(this, colorbox, $.extend(old, options));
			}).addClass(boxElement);

			settings = new Settings($obj[0], options);
			
			if (settings.get('open')) {
				launch($obj[0]);
			}
		}
		
		return $obj;
	};

	publicMethod.position = function (speed, loadedCallback) {
		var
		css,
		top = 0,
		left = 0,
		offset = $box.offset(),
		scrollTop,
		scrollLeft;
		
		$window.unbind('resize.' + prefix);

		// remove the modal so that it doesn't influence the document width/height
		$box.css({top: -9e4, left: -9e4});

		scrollTop = $window.scrollTop();
		scrollLeft = $window.scrollLeft();

		if (settings.get('fixed')) {
			offset.top -= scrollTop;
			offset.left -= scrollLeft;
			$box.css({position: 'fixed'});
		} else {
			top = scrollTop;
			left = scrollLeft;
			$box.css({position: 'absolute'});
		}

		// keeps the top and left positions within the browser's viewport.
		if (settings.get('right') !== false) {
			left += Math.max($window.width() - settings.w - loadedWidth - interfaceWidth - setSize(settings.get('right'), 'x'), 0);
		} else if (settings.get('left') !== false) {
			left += setSize(settings.get('left'), 'x');
		} else {
			left += Math.round(Math.max($window.width() - settings.w - loadedWidth - interfaceWidth, 0) / 2);
		}
		
		if (settings.get('bottom') !== false) {
			top += Math.max(winheight() - settings.h - loadedHeight - interfaceHeight - setSize(settings.get('bottom'), 'y'), 0);
		} else if (settings.get('top') !== false) {
			top += setSize(settings.get('top'), 'y');
		} else {
			top += Math.round(Math.max(winheight() - settings.h - loadedHeight - interfaceHeight, 0) / 2);
		}

		$box.css({top: offset.top, left: offset.left, visibility:'visible'});
		
		// this gives the wrapper plenty of breathing room so it's floated contents can move around smoothly,
		// but it has to be shrank down around the size of div#colorbox when it's done.  If not,
		// it can invoke an obscure IE bug when using iframes.
		$wrap[0].style.width = $wrap[0].style.height = "9999px";
		
		function modalDimensions() {
			$topBorder[0].style.width = $bottomBorder[0].style.width = $content[0].style.width = (parseInt($box[0].style.width,10) - interfaceWidth)+'px';
			$content[0].style.height = $leftBorder[0].style.height = $rightBorder[0].style.height = (parseInt($box[0].style.height,10) - interfaceHeight)+'px';
		}

		css = {width: settings.w + loadedWidth + interfaceWidth, height: settings.h + loadedHeight + interfaceHeight, top: top, left: left};

		// setting the speed to 0 if the content hasn't changed size or position
		if (speed) {
			var tempSpeed = 0;
			$.each(css, function(i){
				if (css[i] !== previousCSS[i]) {
					tempSpeed = speed;
					return;
				}
			});
			speed = tempSpeed;
		}

		previousCSS = css;

		if (!speed) {
			$box.css(css);
		}

		$box.dequeue().animate(css, {
			duration: speed || 0,
			complete: function () {
				modalDimensions();
				
				active = false;
				
				// shrink the wrapper down to exactly the size of colorbox to avoid a bug in IE's iframe implementation.
				$wrap[0].style.width = (settings.w + loadedWidth + interfaceWidth) + "px";
				$wrap[0].style.height = (settings.h + loadedHeight + interfaceHeight) + "px";
				
				if (settings.get('reposition')) {
					setTimeout(function () {  // small delay before binding onresize due to an IE8 bug.
						$window.bind('resize.' + prefix, publicMethod.position);
					}, 1);
				}

				if (loadedCallback) {
					loadedCallback();
				}
			},
			step: modalDimensions
		});
	};

	publicMethod.resize = function (options) {
		var scrolltop;
		
		if (open) {
			options = options || {};
			
			if (options.width) {
				settings.w = setSize(options.width, 'x') - loadedWidth - interfaceWidth;
			}

			if (options.innerWidth) {
				settings.w = setSize(options.innerWidth, 'x');
			}

			$loaded.css({width: settings.w});
			
			if (options.height) {
				settings.h = setSize(options.height, 'y') - loadedHeight - interfaceHeight;
			}

			if (options.innerHeight) {
				settings.h = setSize(options.innerHeight, 'y');
			}

			if (!options.innerHeight && !options.height) {
				scrolltop = $loaded.scrollTop();
				$loaded.css({height: "auto"});
				settings.h = $loaded.height();
			}

			$loaded.css({height: settings.h});

			if(scrolltop) {
				$loaded.scrollTop(scrolltop);
			}
			
			publicMethod.position(settings.get('transition') === "none" ? 0 : settings.get('speed'));
		}
	};

	publicMethod.prep = function (object) {
		if (!open) {
			return;
		}
		
		var callback, speed = settings.get('transition') === "none" ? 0 : settings.get('speed');

		$loaded.remove();

		$loaded = $tag(div, 'LoadedContent').append(object);
		
		function getWidth() {
			settings.w = settings.w || $loaded.width();
			settings.w = settings.mw && settings.mw < settings.w ? settings.mw : settings.w;
			return settings.w;
		}
		function getHeight() {
			settings.h = settings.h || $loaded.height();
			settings.h = settings.mh && settings.mh < settings.h ? settings.mh : settings.h;
			return settings.h;
		}
		
		$loaded.hide()
		.appendTo($loadingBay.show())// content has to be appended to the DOM for accurate size calculations.
		.css({width: getWidth(), overflow: settings.get('scrolling') ? 'auto' : 'hidden'})
		.css({height: getHeight()})// sets the height independently from the width in case the new width influences the value of height.
		.prependTo($content);
		
		$loadingBay.hide();
		
		// floating the IMG removes the bottom line-height and fixed a problem where IE miscalculates the width of the parent element as 100% of the document width.
		
		$(photo).css({'float': 'none'});

		setClass(settings.get('className'));

		callback = function () {
			var total = $related.length,
				iframe,
				complete;
			
			if (!open) {
				return;
			}
			
			function removeFilter() { // Needed for IE8 in versions of jQuery prior to 1.7.2
				if ($.support.opacity === false) {
					$box[0].style.removeAttribute('filter');
				}
			}
			
			complete = function () {
				clearTimeout(loadingTimer);
				$loadingOverlay.hide();
				trigger(event_complete);
				settings.get('onComplete');
			};

			
			$title.html(settings.get('title')).show();
			$loaded.show();
			
			if (total > 1) { // handle grouping
				if (typeof settings.get('current') === "string") {
					$current.html(settings.get('current').replace('{current}', index + 1).replace('{total}', total)).show();
				}
				
				$next[(settings.get('loop') || index < total - 1) ? "show" : "hide"]().html(settings.get('next'));
				$prev[(settings.get('loop') || index) ? "show" : "hide"]().html(settings.get('previous'));
				
				slideshow();
				
				// Preloads images within a rel group
				if (settings.get('preloading')) {
					$.each([getIndex(-1), getIndex(1)], function(){
						var img,
							i = $related[this],
							settings = new Settings(i, $.data(i, colorbox)),
							src = settings.get('href');

						if (src && isImage(settings, src)) {
							src = retinaUrl(settings, src);
							img = document.createElement('img');
							img.src = src;
						}
					});
				}
			} else {
				$groupControls.hide();
			}
			
			if (settings.get('iframe')) {
				iframe = document.createElement('iframe');
				
				if ('frameBorder' in iframe) {
					iframe.frameBorder = 0;
				}
				
				if ('allowTransparency' in iframe) {
					iframe.allowTransparency = "true";
				}

				if (!settings.get('scrolling')) {
					iframe.scrolling = "no";
				}
				
				$(iframe)
					.attr({
						src: settings.get('href'),
						name: (new Date()).getTime(), // give the iframe a unique name to prevent caching
						'class': prefix + 'Iframe',
						allowFullScreen : true // allow HTML5 video to go fullscreen
					})
					.one('load', complete)
					.appendTo($loaded);
				
				$events.one(event_purge, function () {
					iframe.src = "//about:blank";
				});

				if (settings.get('fastIframe')) {
					$(iframe).trigger('load');
				}
			} else {
				complete();
			}
			
			if (settings.get('transition') === 'fade') {
				$box.fadeTo(speed, 1, removeFilter);
			} else {
				removeFilter();
			}
		};
		
		if (settings.get('transition') === 'fade') {
			$box.fadeTo(speed, 0, function () {
				publicMethod.position(0, callback);
			});
		} else {
			publicMethod.position(speed, callback);
		}
	};

	function load () {
		var href, setResize, prep = publicMethod.prep, $inline, request = ++requests;
		
		active = true;
		
		photo = false;
		
		trigger(event_purge);
		trigger(event_load);
		settings.get('onLoad');
		
		settings.h = settings.get('height') ?
				setSize(settings.get('height'), 'y') - loadedHeight - interfaceHeight :
				settings.get('innerHeight') && setSize(settings.get('innerHeight'), 'y');
		
		settings.w = settings.get('width') ?
				setSize(settings.get('width'), 'x') - loadedWidth - interfaceWidth :
				settings.get('innerWidth') && setSize(settings.get('innerWidth'), 'x');
		
		// Sets the minimum dimensions for use in image scaling
		settings.mw = settings.w;
		settings.mh = settings.h;
		
		// Re-evaluate the minimum width and height based on maxWidth and maxHeight values.
		// If the width or height exceed the maxWidth or maxHeight, use the maximum values instead.
		if (settings.get('maxWidth')) {
			settings.mw = setSize(settings.get('maxWidth'), 'x') - loadedWidth - interfaceWidth;
			settings.mw = settings.w && settings.w < settings.mw ? settings.w : settings.mw;
		}
		if (settings.get('maxHeight')) {
			settings.mh = setSize(settings.get('maxHeight'), 'y') - loadedHeight - interfaceHeight;
			settings.mh = settings.h && settings.h < settings.mh ? settings.h : settings.mh;
		}
		
		href = settings.get('href');
		
		loadingTimer = setTimeout(function () {
			$loadingOverlay.show();
		}, 100);
		
		if (settings.get('inline')) {
			var $target = $(href);
			// Inserts an empty placeholder where inline content is being pulled from.
			// An event is bound to put inline content back when Colorbox closes or loads new content.
			$inline = $('<div>').hide().insertBefore($target);

			$events.one(event_purge, function () {
				$inline.replaceWith($target);
			});

			prep($target);
		} else if (settings.get('iframe')) {
			// IFrame element won't be added to the DOM until it is ready to be displayed,
			// to avoid problems with DOM-ready JS that might be trying to run in that iframe.
			prep(" ");
		} else if (settings.get('html')) {
			prep(settings.get('html'));
		} else if (isImage(settings, href)) {

			href = retinaUrl(settings, href);

			photo = new Image();

			$(photo)
			.addClass(prefix + 'Photo')
			.bind('error',function () {
				prep($tag(div, 'Error').html(settings.get('imgError')));
			})
			.one('load', function () {
				if (request !== requests) {
					return;
				}

				// A small pause because some browsers will occassionaly report a 
				// img.width and img.height of zero immediately after the img.onload fires
				setTimeout(function(){
					var percent;

					$.each(['alt', 'longdesc', 'aria-describedby'], function(i,val){
						var attr = $(settings.el).attr(val) || $(settings.el).attr('data-'+val);
						if (attr) {
							photo.setAttribute(val, attr);
						}
					});

					if (settings.get('retinaImage') && window.devicePixelRatio > 1) {
						photo.height = photo.height / window.devicePixelRatio;
						photo.width = photo.width / window.devicePixelRatio;
					}

					if (settings.get('scalePhotos')) {
						setResize = function () {
							photo.height -= photo.height * percent;
							photo.width -= photo.width * percent;
						};
						if (settings.mw && photo.width > settings.mw) {
							percent = (photo.width - settings.mw) / photo.width;
							setResize();
						}
						if (settings.mh && photo.height > settings.mh) {
							percent = (photo.height - settings.mh) / photo.height;
							setResize();
						}
					}
					
					if (settings.h) {
						photo.style.marginTop = Math.max(settings.mh - photo.height, 0) / 2 + 'px';
					}
					
					if ($related[1] && (settings.get('loop') || $related[index + 1])) {
						photo.style.cursor = 'pointer';
						photo.onclick = function () {
							publicMethod.next();
						};
					}

					photo.style.width = photo.width + 'px';
					photo.style.height = photo.height + 'px';
					prep(photo);
				}, 1);
			});
			
			photo.src = href;

		} else if (href) {
			$loadingBay.load(href, settings.get('data'), function (data, status) {
				if (request === requests) {
					prep(status === 'error' ? $tag(div, 'Error').html(settings.get('xhrError')) : $(this).contents());
				}
			});
		}
	}
		
	// Navigates to the next page/image in a set.
	publicMethod.next = function () {
		if (!active && $related[1] && (settings.get('loop') || $related[index + 1])) {
			index = getIndex(1);
			launch($related[index]);
		}
	};
	
	publicMethod.prev = function () {
		if (!active && $related[1] && (settings.get('loop') || index)) {
			index = getIndex(-1);
			launch($related[index]);
		}
	};

	// Note: to use this within an iframe use the following format: parent.jQuery.colorbox.close();
	publicMethod.close = function () {
		if (open && !closing) {
			
			closing = true;
			open = false;
			trigger(event_cleanup);
			settings.get('onCleanup');
			$window.unbind('.' + prefix);
			$overlay.fadeTo(settings.get('fadeOut') || 0, 0);
			
			$box.stop().fadeTo(settings.get('fadeOut') || 0, 0, function () {
				$box.hide();
				$overlay.hide();
				trigger(event_purge);
				$loaded.remove();
				
				setTimeout(function () {
					closing = false;
					trigger(event_closed);
					settings.get('onClosed');
				}, 1);
			});
		}
	};

	// Removes changes Colorbox made to the document, but does not remove the plugin.
	publicMethod.remove = function () {
		if (!$box) { return; }

		$box.stop();
		$.colorbox.close();
		$box.stop().remove();
		$overlay.remove();
		closing = false;
		$box = null;
		$('.' + boxElement)
			.removeData(colorbox)
			.removeClass(boxElement);

		$(document).unbind('click.'+prefix);
	};

	// A method for fetching the current element Colorbox is referencing.
	// returns a jQuery object.
	publicMethod.element = function () {
		return $(settings.el);
	};

	publicMethod.settings = defaults;

}(jQuery, document, window));

!function(){function a(b){var c=a.modules[b];if(!c)throw new Error('failed to require "'+b+'"');return"exports"in c||"function"!=typeof c.definition||(c.client=c.component=!0,c.definition.call(this,c.exports={},c),delete c.definition),c.exports}a.modules={},a.register=function(b,c){a.modules[b]={definition:c}},a.define=function(b,c){a.modules[b]={exports:c}},a.register("component~emitter@1.1.2",function(a,b){function c(a){return a?d(a):void 0}function d(a){for(var b in c.prototype)a[b]=c.prototype[b];return a}b.exports=c,c.prototype.on=c.prototype.addEventListener=function(a,b){return this._callbacks=this._callbacks||{},(this._callbacks[a]=this._callbacks[a]||[]).push(b),this},c.prototype.once=function(a,b){function c(){d.off(a,c),b.apply(this,arguments)}var d=this;return this._callbacks=this._callbacks||{},c.fn=b,this.on(a,c),this},c.prototype.off=c.prototype.removeListener=c.prototype.removeAllListeners=c.prototype.removeEventListener=function(a,b){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var c=this._callbacks[a];if(!c)return this;if(1==arguments.length)return delete this._callbacks[a],this;for(var d,e=0;e<c.length;e++)if(d=c[e],d===b||d.fn===b){c.splice(e,1);break}return this},c.prototype.emit=function(a){this._callbacks=this._callbacks||{};var b=[].slice.call(arguments,1),c=this._callbacks[a];if(c){c=c.slice(0);for(var d=0,e=c.length;e>d;++d)c[d].apply(this,b)}return this},c.prototype.listeners=function(a){return this._callbacks=this._callbacks||{},this._callbacks[a]||[]},c.prototype.hasListeners=function(a){return!!this.listeners(a).length}}),a.register("dropzone",function(b,c){c.exports=a("dropzone/lib/dropzone.js")}),a.register("dropzone/lib/dropzone.js",function(b,c){(function(){var b,d,e,f,g,h,i,j,k={}.hasOwnProperty,l=function(a,b){function c(){this.constructor=a}for(var d in b)k.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},m=[].slice;d="undefined"!=typeof Emitter&&null!==Emitter?Emitter:a("component~emitter@1.1.2"),i=function(){},b=function(a){function b(a,d){var e,f,g;if(this.element=a,this.version=b.version,this.defaultOptions.previewTemplate=this.defaultOptions.previewTemplate.replace(/\n*/g,""),this.clickableElements=[],this.listeners=[],this.files=[],"string"==typeof this.element&&(this.element=document.querySelector(this.element)),!this.element||null==this.element.nodeType)throw new Error("Invalid dropzone element.");if(this.element.dropzone)throw new Error("Dropzone already attached.");if(b.instances.push(this),this.element.dropzone=this,e=null!=(g=b.optionsForElement(this.element))?g:{},this.options=c({},this.defaultOptions,e,null!=d?d:{}),this.options.forceFallback||!b.isBrowserSupported())return this.options.fallback.call(this);if(null==this.options.url&&(this.options.url=this.element.getAttribute("action")),!this.options.url)throw new Error("No URL provided.");if(this.options.acceptedFiles&&this.options.acceptedMimeTypes)throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");this.options.acceptedMimeTypes&&(this.options.acceptedFiles=this.options.acceptedMimeTypes,delete this.options.acceptedMimeTypes),this.options.method=this.options.method.toUpperCase(),(f=this.getExistingFallback())&&f.parentNode&&f.parentNode.removeChild(f),this.previewsContainer=this.options.previewsContainer?b.getElement(this.options.previewsContainer,"previewsContainer"):this.element,this.options.clickable&&(this.clickableElements=this.options.clickable===!0?[this.element]:b.getElements(this.options.clickable,"clickable")),this.init()}var c;return l(b,a),b.prototype.events=["drop","dragstart","dragend","dragenter","dragover","dragleave","addedfile","removedfile","thumbnail","error","errormultiple","processing","processingmultiple","uploadprogress","totaluploadprogress","sending","sendingmultiple","success","successmultiple","canceled","canceledmultiple","complete","completemultiple","reset","maxfilesexceeded","maxfilesreached"],b.prototype.defaultOptions={url:null,method:"post",withCredentials:!1,parallelUploads:2,uploadMultiple:!1,maxFilesize:256,paramName:"file",createImageThumbnails:!0,maxThumbnailFilesize:10,thumbnailWidth:100,thumbnailHeight:100,maxFiles:null,params:{},clickable:!0,ignoreHiddenFiles:!0,acceptedFiles:null,acceptedMimeTypes:null,autoProcessQueue:!0,autoQueue:!0,addRemoveLinks:!1,previewsContainer:null,dictDefaultMessage:"Drop files here to upload",dictFallbackMessage:"Your browser does not support drag'n'drop file uploads.",dictFallbackText:"Please use the fallback form below to upload your files like in the olden days.",dictFileTooBig:"File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",dictInvalidFileType:"You can't upload files of this type.",dictResponseError:"Server responded with {{statusCode}} code.",dictCancelUpload:"Cancel upload",dictCancelUploadConfirmation:"Are you sure you want to cancel this upload?",dictRemoveFile:"Remove file",dictRemoveFileConfirmation:null,dictMaxFilesExceeded:"You can not upload any more files.",accept:function(a,b){return b()},init:function(){return i},forceFallback:!1,fallback:function(){var a,c,d,e,f,g;for(this.element.className=""+this.element.className+" dz-browser-not-supported",g=this.element.getElementsByTagName("div"),e=0,f=g.length;f>e;e++)a=g[e],/(^| )dz-message($| )/.test(a.className)&&(c=a,a.className="dz-message");return c||(c=b.createElement('<div class="dz-message"><span></span></div>'),this.element.appendChild(c)),d=c.getElementsByTagName("span")[0],d&&(d.textContent=this.options.dictFallbackMessage),this.element.appendChild(this.getFallbackForm())},resize:function(a){var b,c,d;return b={srcX:0,srcY:0,srcWidth:a.width,srcHeight:a.height},c=a.width/a.height,b.optWidth=this.options.thumbnailWidth,b.optHeight=this.options.thumbnailHeight,(null==b.optWidth||null==b.optHeigh)&&(null==b.optWidth&&null==b.optHeight?(b.optWidth=b.srcWidth,b.optHeight=b.srcHeight):null==b.optWidth?b.optWidth=c*b.optHeight:null==b.optHeight&&(b.optHeight=1/c*b.optWidth)),d=b.optWidth/b.optHeight,a.height<b.optHeight||a.width<b.optWidth?(b.trgHeight=b.srcHeight,b.trgWidth=b.srcWidth):c>d?(b.srcHeight=a.height,b.srcWidth=b.srcHeight*d):(b.srcWidth=a.width,b.srcHeight=b.srcWidth/d),b.srcX=(a.width-b.srcWidth)/2,b.srcY=(a.height-b.srcHeight)/2,b},drop:function(){return this.element.classList.remove("dz-drag-hover")},dragstart:i,dragend:function(){return this.element.classList.remove("dz-drag-hover")},dragenter:function(){return this.element.classList.add("dz-drag-hover")},dragover:function(){return this.element.classList.add("dz-drag-hover")},dragleave:function(){return this.element.classList.remove("dz-drag-hover")},paste:i,reset:function(){return this.element.classList.remove("dz-started")},addedfile:function(a){var c,d,e,f,g,h,i,j,k,l,m,n,o,p=this;for(this.element===this.previewsContainer&&this.element.classList.add("dz-started"),a.previewElement=b.createElement(this.options.previewTemplate.trim()),a.previewTemplate=a.previewElement,this.previewsContainer.appendChild(a.previewElement),l=a.previewElement.querySelectorAll("[data-dz-name]"),f=0,i=l.length;i>f;f++)c=l[f],c.textContent=a.name;for(m=a.previewElement.querySelectorAll("[data-dz-size]"),g=0,j=m.length;j>g;g++)c=m[g],c.innerHTML=this.filesize(a.size);for(this.options.addRemoveLinks&&(a._removeLink=b.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>'+this.options.dictRemoveFile+"</a>"),a.previewElement.appendChild(a._removeLink)),d=function(c){return c.preventDefault(),c.stopPropagation(),a.status===b.UPLOADING?b.confirm(p.options.dictCancelUploadConfirmation,function(){return p.removeFile(a)}):p.options.dictRemoveFileConfirmation?b.confirm(p.options.dictRemoveFileConfirmation,function(){return p.removeFile(a)}):p.removeFile(a)},n=a.previewElement.querySelectorAll("[data-dz-remove]"),o=[],h=0,k=n.length;k>h;h++)e=n[h],o.push(e.addEventListener("click",d));return o},removedfile:function(a){var b;return null!=(b=a.previewElement)&&b.parentNode.removeChild(a.previewElement),this._updateMaxFilesReachedClass()},thumbnail:function(a,b){var c,d,e,f,g;for(a.previewElement.classList.remove("dz-file-preview"),a.previewElement.classList.add("dz-image-preview"),f=a.previewElement.querySelectorAll("[data-dz-thumbnail]"),g=[],d=0,e=f.length;e>d;d++)c=f[d],c.alt=a.name,g.push(c.src=b);return g},error:function(a,b){var c,d,e,f,g;for(a.previewElement.classList.add("dz-error"),"String"!=typeof b&&b.error&&(b=b.error),f=a.previewElement.querySelectorAll("[data-dz-errormessage]"),g=[],d=0,e=f.length;e>d;d++)c=f[d],g.push(c.textContent=b);return g},errormultiple:i,processing:function(a){return a.previewElement.classList.add("dz-processing"),a._removeLink?a._removeLink.textContent=this.options.dictCancelUpload:void 0},processingmultiple:i,uploadprogress:function(a,b){var c,d,e,f,g;for(f=a.previewElement.querySelectorAll("[data-dz-uploadprogress]"),g=[],d=0,e=f.length;e>d;d++)c=f[d],g.push(c.style.width=""+b+"%");return g},totaluploadprogress:i,sending:i,sendingmultiple:i,success:function(a){return a.previewElement.classList.add("dz-success")},successmultiple:i,canceled:function(a){return this.emit("error",a,"Upload canceled.")},canceledmultiple:i,complete:function(a){return a._removeLink?a._removeLink.textContent=this.options.dictRemoveFile:void 0},completemultiple:i,maxfilesexceeded:i,maxfilesreached:i,previewTemplate:'<div class="dz-preview dz-file-preview">\n  <div class="dz-details">\n    <div class="dz-filename"><span data-dz-name></span></div>\n    <div class="dz-size" data-dz-size></div>\n    <img data-dz-thumbnail />\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-success-mark"><span>✔</span></div>\n  <div class="dz-error-mark"><span>✘</span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n</div>'},c=function(){var a,b,c,d,e,f,g;for(d=arguments[0],c=2<=arguments.length?m.call(arguments,1):[],f=0,g=c.length;g>f;f++){b=c[f];for(a in b)e=b[a],d[a]=e}return d},b.prototype.getAcceptedFiles=function(){var a,b,c,d,e;for(d=this.files,e=[],b=0,c=d.length;c>b;b++)a=d[b],a.accepted&&e.push(a);return e},b.prototype.getRejectedFiles=function(){var a,b,c,d,e;for(d=this.files,e=[],b=0,c=d.length;c>b;b++)a=d[b],a.accepted||e.push(a);return e},b.prototype.getFilesWithStatus=function(a){var b,c,d,e,f;for(e=this.files,f=[],c=0,d=e.length;d>c;c++)b=e[c],b.status===a&&f.push(b);return f},b.prototype.getQueuedFiles=function(){return this.getFilesWithStatus(b.QUEUED)},b.prototype.getUploadingFiles=function(){return this.getFilesWithStatus(b.UPLOADING)},b.prototype.getActiveFiles=function(){var a,c,d,e,f;for(e=this.files,f=[],c=0,d=e.length;d>c;c++)a=e[c],(a.status===b.UPLOADING||a.status===b.QUEUED)&&f.push(a);return f},b.prototype.init=function(){var a,c,d,e,f,g,h,i=this;for("form"===this.element.tagName&&this.element.setAttribute("enctype","multipart/form-data"),this.element.classList.contains("dropzone")&&!this.element.querySelector(".dz-message")&&this.element.appendChild(b.createElement('<div class="dz-default dz-message"><span>'+this.options.dictDefaultMessage+"</span></div>")),this.clickableElements.length&&(d=function(){return i.hiddenFileInput&&document.body.removeChild(i.hiddenFileInput),i.hiddenFileInput=document.createElement("input"),i.hiddenFileInput.setAttribute("type","file"),(null==i.options.maxFiles||i.options.maxFiles>1)&&i.hiddenFileInput.setAttribute("multiple","multiple"),i.hiddenFileInput.className="dz-hidden-input",null!=i.options.acceptedFiles&&i.hiddenFileInput.setAttribute("accept",i.options.acceptedFiles),i.hiddenFileInput.style.visibility="hidden",i.hiddenFileInput.style.position="absolute",i.hiddenFileInput.style.top="0",i.hiddenFileInput.style.left="0",i.hiddenFileInput.style.height="0",i.hiddenFileInput.style.width="0",document.body.appendChild(i.hiddenFileInput),i.hiddenFileInput.addEventListener("change",function(){var a,b,c,e;if(b=i.hiddenFileInput.files,b.length)for(c=0,e=b.length;e>c;c++)a=b[c],i.addFile(a);return d()})},d()),this.URL=null!=(g=window.URL)?g:window.webkitURL,h=this.events,e=0,f=h.length;f>e;e++)a=h[e],this.on(a,this.options[a]);return this.on("uploadprogress",function(){return i.updateTotalUploadProgress()}),this.on("removedfile",function(){return i.updateTotalUploadProgress()}),this.on("canceled",function(a){return i.emit("complete",a)}),this.on("complete",function(){return 0===i.getUploadingFiles().length&&0===i.getQueuedFiles().length?setTimeout(function(){return i.emit("queuecomplete")},0):void 0}),c=function(a){return a.stopPropagation(),a.preventDefault?a.preventDefault():a.returnValue=!1},this.listeners=[{element:this.element,events:{dragstart:function(a){return i.emit("dragstart",a)},dragenter:function(a){return c(a),i.emit("dragenter",a)},dragover:function(a){var b;try{b=a.dataTransfer.effectAllowed}catch(d){}return a.dataTransfer.dropEffect="move"===b||"linkMove"===b?"move":"copy",c(a),i.emit("dragover",a)},dragleave:function(a){return i.emit("dragleave",a)},drop:function(a){return c(a),i.drop(a)},dragend:function(a){return i.emit("dragend",a)}}}],this.clickableElements.forEach(function(a){return i.listeners.push({element:a,events:{click:function(c){return a!==i.element||c.target===i.element||b.elementInside(c.target,i.element.querySelector(".dz-message"))?i.hiddenFileInput.click():void 0}}})}),this.enable(),this.options.init.call(this)},b.prototype.destroy=function(){var a;return this.disable(),this.removeAllFiles(!0),(null!=(a=this.hiddenFileInput)?a.parentNode:void 0)&&(this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput),this.hiddenFileInput=null),delete this.element.dropzone,b.instances.splice(b.instances.indexOf(this),1)},b.prototype.updateTotalUploadProgress=function(){var a,b,c,d,e,f,g,h;if(d=0,c=0,a=this.getActiveFiles(),a.length){for(h=this.getActiveFiles(),f=0,g=h.length;g>f;f++)b=h[f],d+=b.upload.bytesSent,c+=b.upload.total;e=100*d/c}else e=100;return this.emit("totaluploadprogress",e,c,d)},b.prototype._getParamName=function(a){return"function"==typeof this.options.paramName?this.options.paramName(a):""+this.options.paramName+(this.options.uploadMultiple?"["+a+"]":"")},b.prototype.getFallbackForm=function(){var a,c,d,e;return(a=this.getExistingFallback())?a:(d='<div class="dz-fallback">',this.options.dictFallbackText&&(d+="<p>"+this.options.dictFallbackText+"</p>"),d+='<input type="file" name="'+this._getParamName(0)+'" '+(this.options.uploadMultiple?'multiple="multiple"':void 0)+' /><input type="submit" value="Upload!"></div>',c=b.createElement(d),"FORM"!==this.element.tagName?(e=b.createElement('<form action="'+this.options.url+'" enctype="multipart/form-data" method="'+this.options.method+'"></form>'),e.appendChild(c)):(this.element.setAttribute("enctype","multipart/form-data"),this.element.setAttribute("method",this.options.method)),null!=e?e:c)},b.prototype.getExistingFallback=function(){var a,b,c,d,e,f;for(b=function(a){var b,c,d;for(c=0,d=a.length;d>c;c++)if(b=a[c],/(^| )fallback($| )/.test(b.className))return b},f=["div","form"],d=0,e=f.length;e>d;d++)if(c=f[d],a=b(this.element.getElementsByTagName(c)))return a},b.prototype.setupEventListeners=function(){var a,b,c,d,e,f,g;for(f=this.listeners,g=[],d=0,e=f.length;e>d;d++)a=f[d],g.push(function(){var d,e;d=a.events,e=[];for(b in d)c=d[b],e.push(a.element.addEventListener(b,c,!1));return e}());return g},b.prototype.removeEventListeners=function(){var a,b,c,d,e,f,g;for(f=this.listeners,g=[],d=0,e=f.length;e>d;d++)a=f[d],g.push(function(){var d,e;d=a.events,e=[];for(b in d)c=d[b],e.push(a.element.removeEventListener(b,c,!1));return e}());return g},b.prototype.disable=function(){var a,b,c,d,e;for(this.clickableElements.forEach(function(a){return a.classList.remove("dz-clickable")}),this.removeEventListeners(),d=this.files,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(this.cancelUpload(a));return e},b.prototype.enable=function(){return this.clickableElements.forEach(function(a){return a.classList.add("dz-clickable")}),this.setupEventListeners()},b.prototype.filesize=function(a){var b;return a>=109951162777.6?(a/=109951162777.6,b="TiB"):a>=107374182.4?(a/=107374182.4,b="GiB"):a>=104857.6?(a/=104857.6,b="MiB"):a>=102.4?(a/=102.4,b="KiB"):(a=10*a,b="b"),"<strong>"+Math.round(a)/10+"</strong> "+b},b.prototype._updateMaxFilesReachedClass=function(){return null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(this.getAcceptedFiles().length===this.options.maxFiles&&this.emit("maxfilesreached",this.files),this.element.classList.add("dz-max-files-reached")):this.element.classList.remove("dz-max-files-reached")},b.prototype.drop=function(a){var b,c;a.dataTransfer&&(this.emit("drop",a),b=a.dataTransfer.files,b.length&&(c=a.dataTransfer.items,c&&c.length&&null!=c[0].webkitGetAsEntry?this._addFilesFromItems(c):this.handleFiles(b)))},b.prototype.paste=function(a){var b,c;if(null!=(null!=a?null!=(c=a.clipboardData)?c.items:void 0:void 0))return this.emit("paste",a),b=a.clipboardData.items,b.length?this._addFilesFromItems(b):void 0},b.prototype.handleFiles=function(a){var b,c,d,e;for(e=[],c=0,d=a.length;d>c;c++)b=a[c],e.push(this.addFile(b));return e},b.prototype._addFilesFromItems=function(a){var b,c,d,e,f;for(f=[],d=0,e=a.length;e>d;d++)c=a[d],null!=c.webkitGetAsEntry&&(b=c.webkitGetAsEntry())?b.isFile?f.push(this.addFile(c.getAsFile())):b.isDirectory?f.push(this._addFilesFromDirectory(b,b.name)):f.push(void 0):null!=c.getAsFile?null==c.kind||"file"===c.kind?f.push(this.addFile(c.getAsFile())):f.push(void 0):f.push(void 0);return f},b.prototype._addFilesFromDirectory=function(a,b){var c,d,e=this;return c=a.createReader(),d=function(a){var c,d,f;for(d=0,f=a.length;f>d;d++)c=a[d],c.isFile?c.file(function(a){return e.options.ignoreHiddenFiles&&"."===a.name.substring(0,1)?void 0:(a.fullPath=""+b+"/"+a.name,e.addFile(a))}):c.isDirectory&&e._addFilesFromDirectory(c,""+b+"/"+c.name)},c.readEntries(d,function(a){return"undefined"!=typeof console&&null!==console?"function"==typeof console.log?console.log(a):void 0:void 0})},b.prototype.accept=function(a,c){return a.size>1024*this.options.maxFilesize*1024?c(this.options.dictFileTooBig.replace("{{filesize}}",Math.round(a.size/1024/10.24)/100).replace("{{maxFilesize}}",this.options.maxFilesize)):b.isValidFile(a,this.options.acceptedFiles)?null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(c(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}",this.options.maxFiles)),this.emit("maxfilesexceeded",a)):this.options.accept.call(this,a,c):c(this.options.dictInvalidFileType)},b.prototype.addFile=function(a){var c=this;return a.upload={progress:0,total:a.size,bytesSent:0},this.files.push(a),a.status=b.ADDED,this.emit("addedfile",a),this._enqueueThumbnail(a),this.accept(a,function(b){return b?(a.accepted=!1,c._errorProcessing([a],b)):(a.accepted=!0,c.options.autoQueue&&c.enqueueFile(a)),c._updateMaxFilesReachedClass()})},b.prototype.enqueueFiles=function(a){var b,c,d;for(c=0,d=a.length;d>c;c++)b=a[c],this.enqueueFile(b);return null},b.prototype.enqueueFile=function(a){var c=this;if(a.status!==b.ADDED||a.accepted!==!0)throw new Error("This file can't be queued because it has already been processed or was rejected.");return a.status=b.QUEUED,this.options.autoProcessQueue?setTimeout(function(){return c.processQueue()},0):void 0},b.prototype._thumbnailQueue=[],b.prototype._processingThumbnail=!1,b.prototype._enqueueThumbnail=function(a){var b=this;return this.options.createImageThumbnails&&a.type.match(/image.*/)&&a.size<=1024*this.options.maxThumbnailFilesize*1024?(this._thumbnailQueue.push(a),setTimeout(function(){return b._processThumbnailQueue()},0)):void 0},b.prototype._processThumbnailQueue=function(){var a=this;if(!this._processingThumbnail&&0!==this._thumbnailQueue.length)return this._processingThumbnail=!0,this.createThumbnail(this._thumbnailQueue.shift(),function(){return a._processingThumbnail=!1,a._processThumbnailQueue()})},b.prototype.removeFile=function(a){return a.status===b.UPLOADING&&this.cancelUpload(a),this.files=j(this.files,a),this.emit("removedfile",a),0===this.files.length?this.emit("reset"):void 0},b.prototype.removeAllFiles=function(a){var c,d,e,f;for(null==a&&(a=!1),f=this.files.slice(),d=0,e=f.length;e>d;d++)c=f[d],(c.status!==b.UPLOADING||a)&&this.removeFile(c);return null},b.prototype.createThumbnail=function(a,b){var c,d=this;return c=new FileReader,c.onload=function(){var e;return e=document.createElement("img"),e.onload=function(){var c,f,g,i,j,k,l,m;return a.width=e.width,a.height=e.height,g=d.options.resize.call(d,a),null==g.trgWidth&&(g.trgWidth=g.optWidth),null==g.trgHeight&&(g.trgHeight=g.optHeight),c=document.createElement("canvas"),f=c.getContext("2d"),c.width=g.trgWidth,c.height=g.trgHeight,h(f,e,null!=(j=g.srcX)?j:0,null!=(k=g.srcY)?k:0,g.srcWidth,g.srcHeight,null!=(l=g.trgX)?l:0,null!=(m=g.trgY)?m:0,g.trgWidth,g.trgHeight),i=c.toDataURL("image/png"),d.emit("thumbnail",a,i),null!=b?b():void 0},e.src=c.result},c.readAsDataURL(a)},b.prototype.processQueue=function(){var a,b,c,d;if(b=this.options.parallelUploads,c=this.getUploadingFiles().length,a=c,!(c>=b)&&(d=this.getQueuedFiles(),d.length>0)){if(this.options.uploadMultiple)return this.processFiles(d.slice(0,b-c));for(;b>a;){if(!d.length)return;this.processFile(d.shift()),a++}}},b.prototype.processFile=function(a){return this.processFiles([a])},b.prototype.processFiles=function(a){var c,d,e;for(d=0,e=a.length;e>d;d++)c=a[d],c.processing=!0,c.status=b.UPLOADING,this.emit("processing",c);return this.options.uploadMultiple&&this.emit("processingmultiple",a),this.uploadFiles(a)},b.prototype._getFilesWithXhr=function(a){var b,c;return c=function(){var c,d,e,f;for(e=this.files,f=[],c=0,d=e.length;d>c;c++)b=e[c],b.xhr===a&&f.push(b);return f}.call(this)},b.prototype.cancelUpload=function(a){var c,d,e,f,g,h,i;if(a.status===b.UPLOADING){for(d=this._getFilesWithXhr(a.xhr),e=0,g=d.length;g>e;e++)c=d[e],c.status=b.CANCELED;for(a.xhr.abort(),f=0,h=d.length;h>f;f++)c=d[f],this.emit("canceled",c);this.options.uploadMultiple&&this.emit("canceledmultiple",d)}else((i=a.status)===b.ADDED||i===b.QUEUED)&&(a.status=b.CANCELED,this.emit("canceled",a),this.options.uploadMultiple&&this.emit("canceledmultiple",[a]));return this.options.autoProcessQueue?this.processQueue():void 0},b.prototype.uploadFile=function(a){return this.uploadFiles([a])},b.prototype.uploadFiles=function(a){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J=this;for(t=new XMLHttpRequest,u=0,y=a.length;y>u;u++)d=a[u],d.xhr=t;t.open(this.options.method,this.options.url,!0),t.withCredentials=!!this.options.withCredentials,q=null,f=function(){var b,c,e;for(e=[],b=0,c=a.length;c>b;b++)d=a[b],e.push(J._errorProcessing(a,q||J.options.dictResponseError.replace("{{statusCode}}",t.status),t));return e},r=function(b){var c,e,f,g,h,i,j,k,l;if(null!=b)for(e=100*b.loaded/b.total,f=0,i=a.length;i>f;f++)d=a[f],d.upload={progress:e,total:b.total,bytesSent:b.loaded};else{for(c=!0,e=100,g=0,j=a.length;j>g;g++)d=a[g],(100!==d.upload.progress||d.upload.bytesSent!==d.upload.total)&&(c=!1),d.upload.progress=e,d.upload.bytesSent=d.upload.total;if(c)return}for(l=[],h=0,k=a.length;k>h;h++)d=a[h],l.push(J.emit("uploadprogress",d,e,d.upload.bytesSent));return l},t.onload=function(c){var d;if(a[0].status!==b.CANCELED&&4===t.readyState){if(q=t.responseText,t.getResponseHeader("content-type")&&~t.getResponseHeader("content-type").indexOf("application/json"))try{q=JSON.parse(q)}catch(e){c=e,q="Invalid JSON response from server."}return r(),200<=(d=t.status)&&300>d?J._finished(a,q,c):f()}},t.onerror=function(){return a[0].status!==b.CANCELED?f():void 0},p=null!=(D=t.upload)?D:t,p.onprogress=r,i={Accept:"application/json","Cache-Control":"no-cache","X-Requested-With":"XMLHttpRequest"},this.options.headers&&c(i,this.options.headers);for(g in i)h=i[g],t.setRequestHeader(g,h);if(e=new FormData,this.options.params){E=this.options.params;for(n in E)s=E[n],e.append(n,s)}for(v=0,z=a.length;z>v;v++)d=a[v],this.emit("sending",d,t,e);if(this.options.uploadMultiple&&this.emit("sendingmultiple",a,t,e),"FORM"===this.element.tagName)for(F=this.element.querySelectorAll("input, textarea, select, button"),w=0,A=F.length;A>w;w++)if(k=F[w],l=k.getAttribute("name"),m=k.getAttribute("type"),"SELECT"===k.tagName&&k.hasAttribute("multiple"))for(G=k.options,x=0,B=G.length;B>x;x++)o=G[x],o.selected&&e.append(l,o.value);else(!m||"checkbox"!==(H=m.toLowerCase())&&"radio"!==H||k.checked)&&e.append(l,k.value);for(j=C=0,I=a.length-1;I>=0?I>=C:C>=I;j=I>=0?++C:--C)e.append(this._getParamName(j),a[j],a[j].name);return t.send(e)},b.prototype._finished=function(a,c,d){var e,f,g;for(f=0,g=a.length;g>f;f++)e=a[f],e.status=b.SUCCESS,this.emit("success",e,c,d),this.emit("complete",e);return this.options.uploadMultiple&&(this.emit("successmultiple",a,c,d),this.emit("completemultiple",a)),this.options.autoProcessQueue?this.processQueue():void 0},b.prototype._errorProcessing=function(a,c,d){var e,f,g;for(f=0,g=a.length;g>f;f++)e=a[f],e.status=b.ERROR,this.emit("error",e,c,d),this.emit("complete",e);return this.options.uploadMultiple&&(this.emit("errormultiple",a,c,d),this.emit("completemultiple",a)),this.options.autoProcessQueue?this.processQueue():void 0},b}(d),b.version="3.9.0",b.options={},b.optionsForElement=function(a){return a.getAttribute("id")?b.options[e(a.getAttribute("id"))]:void 0},b.instances=[],b.forElement=function(a){if("string"==typeof a&&(a=document.querySelector(a)),null==(null!=a?a.dropzone:void 0))throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");return a.dropzone},b.autoDiscover=!0,b.discover=function(){var a,c,d,e,f,g;for(document.querySelectorAll?d=document.querySelectorAll(".dropzone"):(d=[],a=function(a){var b,c,e,f;for(f=[],c=0,e=a.length;e>c;c++)b=a[c],/(^| )dropzone($| )/.test(b.className)?f.push(d.push(b)):f.push(void 0);return f},a(document.getElementsByTagName("div")),a(document.getElementsByTagName("form"))),g=[],e=0,f=d.length;f>e;e++)c=d[e],b.optionsForElement(c)!==!1?g.push(new b(c)):g.push(void 0);return g},b.blacklistedBrowsers=[/opera.*Macintosh.*version\/12/i],b.isBrowserSupported=function(){var a,c,d,e,f;if(a=!0,window.File&&window.FileReader&&window.FileList&&window.Blob&&window.FormData&&document.querySelector)if("classList"in document.createElement("a"))for(f=b.blacklistedBrowsers,d=0,e=f.length;e>d;d++)c=f[d],c.test(navigator.userAgent)&&(a=!1);else a=!1;else a=!1;return a},j=function(a,b){var c,d,e,f;for(f=[],d=0,e=a.length;e>d;d++)c=a[d],c!==b&&f.push(c);return f},e=function(a){return a.replace(/[\-_](\w)/g,function(a){return a.charAt(1).toUpperCase()})},b.createElement=function(a){var b;return b=document.createElement("div"),b.innerHTML=a,b.childNodes[0]},b.elementInside=function(a,b){if(a===b)return!0;for(;a=a.parentNode;)if(a===b)return!0;return!1},b.getElement=function(a,b){var c;if("string"==typeof a?c=document.querySelector(a):null!=a.nodeType&&(c=a),null==c)throw new Error("Invalid `"+b+"` option provided. Please provide a CSS selector or a plain HTML element.");return c},b.getElements=function(a,b){var c,d,e,f,g,h,i,j;if(a instanceof Array){e=[];try{for(f=0,h=a.length;h>f;f++)d=a[f],e.push(this.getElement(d,b))}catch(k){c=k,e=null}}else if("string"==typeof a)for(e=[],j=document.querySelectorAll(a),g=0,i=j.length;i>g;g++)d=j[g],e.push(d);else null!=a.nodeType&&(e=[a]);if(null==e||!e.length)throw new Error("Invalid `"+b+"` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");return e},b.confirm=function(a,b,c){return window.confirm(a)?b():null!=c?c():void 0},b.isValidFile=function(a,b){var c,d,e,f,g;if(!b)return!0;for(b=b.split(","),d=a.type,c=d.replace(/\/.*$/,""),f=0,g=b.length;g>f;f++)if(e=b[f],e=e.trim(),"."===e.charAt(0)){if(-1!==a.name.toLowerCase().indexOf(e.toLowerCase(),a.name.length-e.length))return!0}else if(/\/\*$/.test(e)){if(c===e.replace(/\/.*$/,""))return!0}else if(d===e)return!0;return!1},"undefined"!=typeof jQuery&&null!==jQuery&&(jQuery.fn.dropzone=function(a){return this.each(function(){return new b(this,a)})}),"undefined"!=typeof c&&null!==c?c.exports=b:window.Dropzone=b,b.ADDED="added",b.QUEUED="queued",b.ACCEPTED=b.QUEUED,b.UPLOADING="uploading",b.PROCESSING=b.UPLOADING,b.CANCELED="canceled",b.ERROR="error",b.SUCCESS="success",g=function(a){var b,c,d,e,f,g,h,i,j,k;for(h=a.naturalWidth,g=a.naturalHeight,c=document.createElement("canvas"),c.width=1,c.height=g,d=c.getContext("2d"),d.drawImage(a,0,0),e=d.getImageData(0,0,1,g).data,k=0,f=g,i=g;i>k;)b=e[4*(i-1)+3],0===b?f=i:k=i,i=f+k>>1;return j=i/g,0===j?1:j},h=function(a,b,c,d,e,f,h,i,j,k){var l;return l=g(b),a.drawImage(b,c,d,e,f,h,i,j,k/l)},f=function(a,b){var c,d,e,f,g,h,i,j,k;if(e=!1,k=!0,d=a.document,j=d.documentElement,c=d.addEventListener?"addEventListener":"attachEvent",i=d.addEventListener?"removeEventListener":"detachEvent",h=d.addEventListener?"":"on",f=function(c){return"readystatechange"!==c.type||"complete"===d.readyState?(("load"===c.type?a:d)[i](h+c.type,f,!1),!e&&(e=!0)?b.call(a,c.type||c):void 0):void 0},g=function(){var a;try{j.doScroll("left")}catch(b){return a=b,setTimeout(g,50),void 0}return f("poll")},"complete"!==d.readyState){if(d.createEventObject&&j.doScroll){try{k=!a.frameElement}catch(l){}k&&g()}return d[c](h+"DOMContentLoaded",f,!1),d[c](h+"readystatechange",f,!1),a[c](h+"load",f,!1)}},b._autoDiscoverFunction=function(){return b.autoDiscover?b.discover():void 0},f(window,b._autoDiscoverFunction)}).call(this)}),"object"==typeof exports?module.exports=a("dropzone"):"function"==typeof define&&define.amd?define([],function(){return a("dropzone")}):this.Dropzone=a("dropzone")}();
