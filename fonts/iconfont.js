;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-guanbi" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M632.709 524l256.498-256.498c33.333-33.333 33.333-87.364 0-120.709-33.343-33.333-87.375-33.333-120.709 0l-256.498 256.498-256.498-256.498c-33.333-33.333-87.364-33.333-120.709 0-33.333 33.343-33.333 87.375 0 120.709l256.498 256.498-256.498 256.498c-33.333 33.333-33.333 87.375 0 120.709 33.343 33.333 87.375 33.333 120.709 0l256.498-256.498 256.498 256.498c33.333 33.333 87.375 33.333 120.709 0s33.333-87.375 0-120.709l-256.498-256.498z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-lianjie" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M351.942972 736.377889 736.207714 352.113148C754.856169 333.464693 754.856169 302.987788 736.207714 284.339333 717.559259 265.690878 687.082354 265.690878 668.433899 284.339333L284.169158 668.604075C265.520702 687.25253 265.520702 717.729434 284.169158 736.377889L284.169158 736.377889C302.71105 755.026345 333.294517 755.026345 351.942972 736.377889L351.942972 736.377889ZM478.752468 669.882826C485.465912 679.260335 486.638101 689.170657 486.638101 694.711912 486.638101 701.318793 485.039662 714.106306 474.276839 724.869128L272.873522 926.272445C262.110699 937.035268 249.42975 938.633707 242.716306 938.633707 236.109424 938.633707 223.321912 937.035268 212.559089 926.272445L98.004293 811.717649C87.24147 800.954826 85.643031 788.273876 85.643031 781.560432 85.643031 774.846988 87.24147 762.166039 98.004293 751.403216L299.40761 549.999899C310.170433 539.237076 322.851382 537.638637 329.564826 537.638637 334.25358 537.638637 341.926088 538.491138 349.705158 542.64708L410.872091 481.480146C360.787668 440.133857 285.980722 442.904484 239.093177 489.685467L37.68986 691.088784C-12.074875 740.853519-12.074875 822.160784 37.68986 871.925519L152.244657 986.480315C202.009392 1036.24505 283.316657 1036.24505 333.081392 986.480315L534.484709 785.076998C582.544442 737.017265 584.142881 659.333128 539.280026 609.248706L478.752468 669.882826 478.752468 669.882826ZM986.203577 152.627958 871.64878 38.073161C821.884046-11.691574 740.57678-11.691574 690.812046 38.073161L489.408728 239.476478C442.627746 286.25746 439.857119 361.064406 481.203408 411.255392L542.370341 350.088458C538.2144 342.202826 537.361899 334.530319 537.361899 329.948127 537.361899 323.341245 538.960338 310.553733 549.723161 299.79091L751.126478 98.387593C761.889301 87.624771 774.57025 86.026332 781.283694 86.026332 787.890576 86.026332 800.678088 87.624771 811.440911 98.387593L925.995707 212.94239C936.75853 223.705213 938.356969 236.386162 938.356969 243.099606 938.356969 249.706488 936.75853 262.494 925.995707 273.256823L724.59239 474.66014C713.829567 485.422962 701.148618 487.021401 694.435174 487.021401 688.893919 487.021401 678.983597 485.849213 669.606088 479.135769L609.07853 539.663327C659.162953 584.526182 736.740527 583.034306 784.906823 534.86801L986.31014 333.464693C1035.968312 283.699958 1035.968312 202.28613 986.203577 152.627958L986.203577 152.627958Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-fangdajing" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M454.211 807.046c-195.426 0-354.415-158.996-354.415-354.423 0-195.426 158.99-354.422 354.415-354.422s354.422 158.996 354.422 354.422S649.636 807.046 454.211 807.046M454.211 227.461c-124.154 0-225.155 101.009-225.155 225.162 0 124.154 101.002 225.163 225.155 225.163s225.161-101.009 225.161-225.162C679.372 328.469 578.365 227.461 454.211 227.461"  ></path>'+
      ''+
      '<path d="M838.158 920.247c-21.423 0-42.832-8.172-59.176-24.507L631.675 749.338c-32.678-32.679-32.678-85.666 0-118.352 32.69-32.669 85.666-32.669 118.353 0l147.306 146.403c32.679 32.679 32.679 85.666 0 118.352C880.988 912.075 859.579 920.247 838.158 920.247"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
