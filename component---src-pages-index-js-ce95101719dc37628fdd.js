(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("0mN4");var r=a("5NKs");t.__esModule=!0,t.default=void 0;var A,n=r(a("v06X")),i=r(a("XEEL")),s=r(a("uDP2")),l=r(a("j8BX")),o=r(a("q1tI")),d=r(a("17x9")),c=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,A=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),A&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},u=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},f=Object.create({}),g=function(e){var t=c(e),a=u(t);return f[a]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,m="undefined"!=typeof window,E=m&&window.IntersectionObserver,h=new WeakMap;function b(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,A=e.media,n=e.sizes;return o.default.createElement(o.default.Fragment,{key:t},r&&o.default.createElement("source",{type:"image/webp",media:A,srcSet:r,sizes:n}),o.default.createElement("source",{media:A,srcSet:a,sizes:n}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function v(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function y(e,t){var a=e.srcSet,r=e.srcSetWebp,A=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(A?'media="'+A+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var Q=function(e,t){var a=(void 0===A&&"undefined"!=typeof window&&window.IntersectionObserver&&(A=new window.IntersectionObserver((function(e){e.forEach((function(e){if(h.has(e.target)){var t=h.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(A.unobserve(e.target),h.delete(e.target),t())}}))}),{rootMargin:"200px"})),A);return a&&(a.observe(e),h.set(e,t)),function(){a.unobserve(e),h.delete(e)}},B=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",A=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',i=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",o=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?y(e,!0):"")+y(e)})).join("")+"<img "+o+i+s+a+r+t+n+A+l+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},j=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,A=e.spreadProps,n=o.default.createElement(I,(0,l.default)({src:t},A));return a.length>1?o.default.createElement("picture",null,r(a),n):n},I=o.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,A=e.src,n=e.style,i=e.onLoad,d=e.onError,c=e.loading,u=e.draggable,f=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return o.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:A},f,{onLoad:i,onError:d,ref:t,loading:c,draggable:u,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));I.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var N=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=m&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!p&&E&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||m&&(p||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=o.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=Q(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),a=u(t),f[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,r=e.className,A=e.style,n=void 0===A?{}:A,i=e.imgStyle,s=void 0===i?{}:i,d=e.placeholderStyle,u=void 0===d?{}:d,f=e.placeholderClassName,g=e.fluid,p=e.fixed,m=e.backgroundColor,E=e.durationFadeIn,h=e.Tag,S=e.itemProp,y=e.loading,Q=e.draggable,N=!1===this.state.fadeIn||this.state.imgLoaded,T=!0===this.state.fadeIn&&!this.state.imgCached,Y=(0,l.default)({opacity:N?1:0,transition:T?"opacity "+E+"ms":"none"},s),x="boolean"==typeof m?"lightgray":m,C={transitionDelay:E+"ms"},L=(0,l.default)({opacity:this.state.imgLoaded?0:1},T&&C,{},s,{},u),P={title:t,alt:this.state.isVisible?"":a,style:L,className:f,itemProp:S};if(g){var O=g,R=O[0];return o.default.createElement(h,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(R.srcSet)},o.default.createElement(h,{style:{width:"100%",paddingBottom:100/R.aspectRatio+"%"}}),x&&o.default.createElement(h,{title:t,style:(0,l.default)({backgroundColor:x,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},T&&C)}),R.base64&&o.default.createElement(j,{src:R.base64,spreadProps:P,imageVariants:O,generateSources:v}),R.tracedSVG&&o.default.createElement(j,{src:R.tracedSVG,spreadProps:P,imageVariants:O,generateSources:w}),this.state.isVisible&&o.default.createElement("picture",null,b(O),o.default.createElement(I,{alt:a,title:t,sizes:R.sizes,src:R.src,crossOrigin:this.props.crossOrigin,srcSet:R.srcSet,style:Y,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:y,draggable:Q})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:B((0,l.default)({alt:a,title:t,loading:y},R,{imageVariants:O}))}}))}if(p){var D=p,G=D[0],V=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:G.width,height:G.height},n);return"inherit"===n.display&&delete V.display,o.default.createElement(h,{className:(r||"")+" gatsby-image-wrapper",style:V,ref:this.handleRef,key:"fixed-"+JSON.stringify(G.srcSet)},x&&o.default.createElement(h,{title:t,style:(0,l.default)({backgroundColor:x,width:G.width,opacity:this.state.imgLoaded?0:1,height:G.height},T&&C)}),G.base64&&o.default.createElement(j,{src:G.base64,spreadProps:P,imageVariants:D,generateSources:v}),G.tracedSVG&&o.default.createElement(j,{src:G.tracedSVG,spreadProps:P,imageVariants:D,generateSources:w}),this.state.isVisible&&o.default.createElement("picture",null,b(D),o.default.createElement(I,{alt:a,title:t,width:G.width,height:G.height,sizes:G.sizes,src:G.src,crossOrigin:this.props.crossOrigin,srcSet:G.srcSet,style:Y,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:y,draggable:Q})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:B((0,l.default)({alt:a,title:t,loading:y},G,{imageVariants:D}))}}))}return null},t}(o.default.Component);N.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var T=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),Y=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});N.propTypes={resolutions:T,sizes:Y,fixed:d.default.oneOfType([T,d.default.arrayOf(T)]),fluid:d.default.oneOfType([Y,d.default.arrayOf(Y)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var x=N;t.default=x},OGtf:function(e,t,a){var r=a("XKFU"),A=a("eeVq"),n=a("vhPU"),i=/"/g,s=function(e,t,a,r){var A=String(n(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(r).replace(i,"&quot;")+'"'),s+">"+A+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),r(r.P+r.F*A((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},RXBc:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),A=a.n(r),n=a("I/Ru"),i=a("vrFN"),s=a("A+gh"),l=a("Rjck"),o=a("9eSz"),d=a.n(o),c=function(e){e.src;var t=l.data;return A.a.createElement(d.a,{fluid:t.separatorImage.childImageSharp.fluid})},u=a("GhKJ"),f=a.n(u),g=function(e){var t=e.children;return A.a.createElement("div",{class:f.a.container},t)},p=(a("0mN4"),a("xBcR")),m=a("J2k7"),E=a.n(m),h=function(e){var t=e.children;return A.a.createElement("div",{className:E.a.container},A.a.createElement("div",{className:E.a.top}),A.a.createElement("div",{className:E.a.main},t),A.a.createElement("div",{className:E.a.bottom}))},b=a("WRM8"),S=a.n(b),w=function(){var e=p.data;return A.a.createElement("section",{id:"nextTournament"},A.a.createElement(h,{className:S.a.container},A.a.createElement(d.a,{className:S.a.tournamentImage,fluid:e.gameplayImage.childImageSharp.fluid}),A.a.createElement("div",{className:S.a.inset},A.a.createElement("h3",null,"Próximo Torneo"),A.a.createElement("h4",null,"ATPato 250 Open Febrero 2020"),A.a.createElement("p",null,A.a.createElement("strong",null,"Fecha:")," 29 de Febrero 2020 - 19hs"),A.a.createElement("p",null,A.a.createElement("strong",null,"Lugar:")," ",A.a.createElement("a",{href:"https://goo.gl/maps/BSbDWydUZuNPekXV7"},"SCVSoft")),A.a.createElement(s.a,{label:"Inscribite!",to:"https://www.meetup.com/ATPato-Torneos-de-Duck-Game-en-BA/"}),A.a.createElement("div",{className:S.a.newsduckImage},A.a.createElement(d.a,{fixed:e.newsduckImage.childImageSharp.fixed})))))},v=a("utt4"),y=a.n(v),Q=a("uSAB"),B=a.n(Q),j=function(){return A.a.createElement("div",null,A.a.createElement(h,null,A.a.createElement("div",{className:y.a.container},A.a.createElement("img",{className:y.a.logo,src:B.a,alt:"SCVSoft"}),A.a.createElement("div",{className:y.a.label},"Host + IT Partner"))))};t.default=function(){return A.a.createElement(n.a,null,A.a.createElement(i.a,{title:"Home"}),A.a.createElement(g,null,A.a.createElement("section",{id:"info"},A.a.createElement("h2",null,"Qué es la ATPato?"),A.a.createElement("p",null,"Somos un grupo de jugadores amateur de"," ",A.a.createElement("a",{href:"https://store.steampowered.com/app/312530/Duck_Game/"},"Duck Game")," que en un estado de emoción violenta decidimos llevar la manija al siguiente nivel y organizar torneos presenciales para juntarnos, levantar un poco el nivel competitivo y sobre todo divertirnos jugando al PATO"),A.a.createElement("h3",null,"Registrate en la ATPato"),A.a.createElement("p",null,A.a.createElement("strong",null,"Sos un verdadero PATO?")," Querés sumarte a una liga en desarrollo y batirte a duelo en un torneo con los mejores? Querés enterarte cuándo y dónde son los próximos torneos del ATPato Tour?"),A.a.createElement(s.a,{label:"Registrate!",to:"https://www.meetup.com/ATPato-Torneos-de-Duck-Game-en-BA/"})),A.a.createElement(w,null)),A.a.createElement(c,null),A.a.createElement("section",null,A.a.createElement("h2",null,"Sponsors"),A.a.createElement(g,null,A.a.createElement(j,null),A.a.createElement("section",null,A.a.createElement("p",null,A.a.createElement("strong",null,"Cómo puedo ser sponsor?")," Se puede ser sponsor siendo host de uno de los torneos, aportando el lugar y la comida/bebida para los participantes. También se puede aportar algún premio para motivar a nuestros jugadores a ganar algún determinado torneo"),A.a.createElement("p",null,"Y estamos abiertos a otras sugerencias! Si querés ser sponsor,"," ",A.a.createElement("a",{href:"mailto: atppato@scvsoft.com"},"contactanos acá"))))))}},Rjck:function(e){e.exports=JSON.parse('{"data":{"separatorImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAFABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAQF/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQAD/9oADAMBAAIQAxAAAAHKrMqcL//EABgQAAIDAAAAAAAAAAAAAAAAAAECACIx/9oACAEBAAEFAhjPUmf/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAWEAADAAAAAAAAAAAAAAAAAAAAEDH/2gAIAQEABj8CUP/EABoQAQADAAMAAAAAAAAAAAAAAAEAESExcdH/2gAIAQEAAT8hdjOIyfYI5Q7n/9oADAMBAAIAAwAAABCP/wD/xAAWEQADAAAAAAAAAAAAAAAAAAABEDH/2gAIAQMBAT8QpX//xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQH/2gAIAQIBAT8QqY//xAAZEAEAAwEBAAAAAAAAAAAAAAABABExIUH/2gAIAQEAAT8QAbpe7EJGgoPErPIsDE//2Q==","aspectRatio":3.7555555555555555,"src":"/static/6e901bd055600e5eef7d5be02a388b47/393e1/separator.jpg","srcSet":"/static/6e901bd055600e5eef7d5be02a388b47/be909/separator.jpg 338w,\\n/static/6e901bd055600e5eef7d5be02a388b47/608b9/separator.jpg 675w,\\n/static/6e901bd055600e5eef7d5be02a388b47/393e1/separator.jpg 1350w,\\n/static/6e901bd055600e5eef7d5be02a388b47/a0534/separator.jpg 1365w","sizes":"(max-width: 1350px) 100vw, 1350px"}}}}}')},uSAB:function(e,t,a){e.exports=a.p+"static/SCVLogo-a05abaa598fd60bf932472f94f8526e1.png"},xBcR:function(e){e.exports=JSON.parse('{"data":{"gameplayImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABAACA//EABYBAQEBAAAAAAAAAAAAAAAAAAIAAf/aAAwDAQACEAMQAAABNyNszYli/8QAGRAAAgMBAAAAAAAAAAAAAAAAAQIAAyEx/9oACAEBAAEFAqWy3HpAKQDG7//EABcRAQADAAAAAAAAAAAAAAAAAAARITH/2gAIAQMBAT8B2kv/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAgEBPwFH/8QAGxAAAgEFAAAAAAAAAAAAAAAAABEBICGhsuH/2gAIAQEABj8CUzlHWX2VH//EABkQAAMAAwAAAAAAAAAAAAAAAAABESExcf/aAAgBAQABPyF7aBLRPkqd3ApJtJYEMLzw/9oADAMBAAIAAwAAABDM/wD/xAAXEQADAQAAAAAAAAAAAAAAAAAAAREh/9oACAEDAQE/EE4CjD//xAAXEQADAQAAAAAAAAAAAAAAAAAAESEB/9oACAECAQE/EFjZdP/EABwQAQADAQADAQAAAAAAAAAAAAEAESExQVGBsf/aAAgBAQABPxBfKSuRu+NhoHG9K/a1Ontd/Gom1LAll/YQgAAZg5P/2Q==","aspectRatio":1.7777777777777777,"src":"/static/4b7445a4ed8fbaa6319b798d43c126e8/a7a09/gameplay.jpg","srcSet":"/static/4b7445a4ed8fbaa6319b798d43c126e8/88730/gameplay.jpg 116w,\\n/static/4b7445a4ed8fbaa6319b798d43c126e8/9bd9e/gameplay.jpg 231w,\\n/static/4b7445a4ed8fbaa6319b798d43c126e8/a7a09/gameplay.jpg 462w,\\n/static/4b7445a4ed8fbaa6319b798d43c126e8/81c8a/gameplay.jpg 693w,\\n/static/4b7445a4ed8fbaa6319b798d43c126e8/7b65f/gameplay.jpg 924w,\\n/static/4b7445a4ed8fbaa6319b798d43c126e8/e57d2/gameplay.jpg 1280w","sizes":"(max-width: 462px) 100vw, 462px"}}},"newsduckImage":{"childImageSharp":{"fixed":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEvElEQVQ4y22Ue1BUdRTH78IisG8uu3dfd98s+2J3WWB4LCjIIwc2EZh1xUgMeZgQgaigCIb4WEAGEJxJLYwyLS2NEkdrxFeUCpY2zcQ0+Uc51T/W1GSOwC6/070Ly9TYmTlzz/x+3/nc3++c8zsY9i+LZjMZi6F8V4Hs1/516pHdLtmFqhWiup61qrFDHtWYThphoQUwns3A/s8ILjPgtBlIAQY/FQSEbYXKoXO1BugvVcLwBjVMNJnh3q44GPQofe4kfCOtubLNuAQVUwwJL4yBJavZjFwTLyS4weZwgnEd5V/JsiJ8yysJ39pVAv/za4S+ihIxHFwtBz43NIkWuaz8EG5EyLOnLUsVMUT2lYE4HMPwLR1d0017B8G8Su5TukKASJQhWSEL0irw2d4SEvLMvCFau8rMCVtERFIuxDTCZR6LnF1Dr+TnOMPpryr3heWnvn0EU9ce+CvamqF+qBe99/EUeDZWoLhytq+LSkOhVTBAa3e7DQFgnpl/MVHFOYVlxHCulTrYEKAvGHdbcWL7O63umRPt5VBTW43OP0QwOf4A7RnyQlaVYPZ1jwpM8siq4O1IZ3rCS6l8yNNHfI2lqMM/fXW9ExyZyzuoPcaVnRnTjwed8IfXgh53G9GPHVaorM6FYm81OKsU/oYiAspThH+FhTM0QWBpfskH21u2QrxFdhNLz8y531PfAlvlhh8S1FzvvTYHPOm1+570JaJfvA74ZocR1WRzUMIe1ryrQQSJCdyfKUZyEPYcIc08TxrgTEoeFBlsv2FejeXhbdIEn5NmKOTgd5QS5nBLDvF0b74YKtOi/P1r5FC/moCMvaQva58UWNbwkkAfwkW6smEDspjpu7p4uCM3wpbI6JtYg4jceYtamNDY/McI3QwfC211Ofh/Hy9TwrWmWLhcSf6eWsrzOXsF/tTtQhCaIlKCp2sQkidG5Sa4o7HPDkv1oGZGFgTKfVxp/G5SY4cbaiv0iTSzGQTnXms2MdWSFnUjSRd7rnFf9ax3tHZ+R1cFpNnjuuO4uKFNqj17WxsPtzS2mXFlHJSw8PeXerBYKPVcpWATauvclxobHBPq/N3R+plulvTpkLsS1m96Efa4TGhDnh21NDZDp0gJb8sM8Jkqbu6u1g6v4Yo/KYwsAIPMdYGXcVCmO31f54BLCvPMWUp8VWuFkxINHE1YgQbHJ5HbIYCGjlY4euiN+TFcOb+fUPsuKsxwQhID8WGsYpqxmSsOxfQc3tKzGST1o9dVVrisMPvPKIzosESLjmqtqKypHQTOYlTdNwyd7jI0EkWiHrHW/xFViOxwHt1u2ITcGrp0ZVe0eAnaTCjfpP/6hdqGBggNOhljA8/mbYA5iiD35e1wZGU+DPFl86dJI3iFqkeLT462BcYrhGIBGkUsQYtY+KXrVKLfUpn9Y2oLVNbtBCy/EXKb9sOH6XnQyZX4x5QWaI9WTARBbEYIpmNGYP+B1vGkgTmWGsZpvkC1w7sqs+8TqQ4cumTAyg+DwrUJDhhs6Aiu8n+vT4QWXH51oSfh2bmYw+ZjKcs4gTxYmazirTwpHJfFznXjErA6CgBzdwCWXAT5HAEakernRhUmKGTjh2l9NV/MjGQsTL1/AHOtxI+kWl7mAAAAAElFTkSuQmCC","width":170,"height":154,"src":"/static/8789417fe8dc8ffc7480881b7090444b/0b595/newsduck.png","srcSet":"/static/8789417fe8dc8ffc7480881b7090444b/0b595/newsduck.png 1x"}}}}}')}}]);
//# sourceMappingURL=component---src-pages-index-js-ce95101719dc37628fdd.js.map