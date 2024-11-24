let ip;

fetch('https://api.ipify.org?format=json')
  .then((response) => response.json())
  .then((data) => {
    console.log('Public IP Address:', data.ip);
    ip = data.ip;
  })
  .catch((error) => console.error('Error fetching public IP address:', error));

var urlParams = new URLSearchParams(window.location.search.replace(/\+/g, ''));
var fb_access_token = urlParams.get("fb_access_token");
var geventParam = urlParams.get("gevent");
const origin = urlParams.get('origin');
const type = urlParams.get('t');
const p0_android = urlParams.get('p0_android');
const p0_ios = urlParams.get('p0_ios');
const p1 = urlParams.get('p1');
const p2 = urlParams.get('p2');
const p3 = urlParams.get('p3');
const p4 = urlParams.get('p4');
const p5 = urlParams.get('p5');
const p6 = urlParams.get('p6');
const channelCode = urlParams.get('channelCode');
if (!urlParams.get('t') || !urlParams.get('t').length) {
  urlParams.set('t', '1');
}
if (!urlParams.get('p0_android') || !urlParams.get('p0_android').length) {
  urlParams.set('p0_android', '1eosxmvr');
}
if (!urlParams.get('p0_ios') || !urlParams.get('p0_ios').length) {
  urlParams.set('p0_ios', '1ej37o62');
}
if (!urlParams.get('p1') || !urlParams.get('p1').length) {
  urlParams.set('p1', 'slotsri_campaign');
}
if (!urlParams.get('p2') || !urlParams.get('p2').length) {
  urlParams.set('p2', '123');
}
if (!urlParams.get('p3') || !urlParams.get('p3').length) {
  urlParams.set('p3', 'slotsri_adgroup');
}
if (!urlParams.get('p4') || !urlParams.get('p4').length) {
  urlParams.set('p4', '123');
}
if (!urlParams.get('p5') || !urlParams.get('p5').length) {
  urlParams.set('p5', 'slotsri_creative');
}
if (!urlParams.get('p6') || !urlParams.get('p6').length) {
  urlParams.set('p6', '123');
}
if (!urlParams.get('channelCode') || !urlParams.get('channelCode').length) {
  urlParams.set('channelCode', 'guanwang');
}
if (!(type && p0_android && p0_ios && p1 && p2 && p3 && p4 && p5 && p6 && channelCode)) {
  const newUrl = `${window.location.origin}?${urlParams.toString()}`;
  window.location.href = newUrl;
}

const aj_link = downloadLink.android;
const ios_link = downloadLink.ios;

!(function (d) {
  var u = navigator.userAgent,
    app = navigator.appVersion;
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
  var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  var nd;
  if (urlParams.get('t') != null && urlParams.get('channelCode') !== null) {
    nd = urlParams.get('channelCode');
  } else {
    nd = '222';
  }
  console.log(nd);
  new ClipboardJS('#copyButton1');
  new ClipboardJS('#copyButton2');
  var $ = (s) => d.querySelector(s);
  var apkUrl = '';
  var iosUrl = '';
  var token_android = urlParams.get('p0_android');
  var token_ios = urlParams.get('p0_ios');
  var p0 = isIOS ? token_ios : token_android;
  var p1 = urlParams.get('p1');
  var p2 = urlParams.get('p2');
  var p3 = urlParams.get('p3');
  var p4 = urlParams.get('p4');
  var p5 = urlParams.get('p5');
  var p6 = urlParams.get('p6');
  var fbPid = getFbPid();
  var gclid = urlParams.get('gclid');
  tracker = p0;
  var clid;
  var pixel_id;
  var modified_label = nd;
  var access_token;
  // getAuthToken(nd);

  $('#copyButton1').setAttribute('data-clipboard-text', 'code' + nd);
  $('#copyButton2').setAttribute('data-clipboard-text', 'code' + nd);

  if (gclid) {
    clid = gclid;
    modified_label = nd;
  }

  if (fb_pixel_id) {
    pixel_id = fb_pixel_id;
    var fbclid = urlParams.get('fbclid');
    console.log('fbclid:', fbclid);
    clid = fbclid;
    modified_label = nd;
  }

  if (origin === 'kwai') {
    var kclid = urlParams.get('click_id');
    pixel_id = urlParams.get('pixel_id');
    clid = kclid;
    console.log('kwai pixel id: ', pixel_id);
    console.log('kwai click id: ', kclid);
    modified_label = nd + '::' + clid;
    kwaiq.instance(pixel_id).track('contentView');
  }

  if (tiktok_pixel_id) {
    pixel_id = tiktok_pixel_id;
    ttq.instance(pixel_id).track('Download');
    var ttclid = urlParams.get('ttclid');
    clid = ttclid;
    modified_label = 'tiktok__' + ttclid + '__' + nd;
    const token = sessionStorage.getItem('access_token');
    const ttp = getCookie('_ttp');

    console.log('token:', token);
    console.log('ttp:', ttp);

    const data = {
      pixel_code: ttp,
      event: 'Download',
      context: {
        ad: {
          callback: clid,
        },
      },
    };

    //     fetch("https://business-api.tiktok.com/open_api/v1.3/pixel/track/",
    //     {
    //         // mode: 'no-cors',
    //         headers: {
    //             'Access-Token': token,
    //             'Content-Type': 'application/json',
    //         },
    //         method: "POST",
    //         body: JSON.stringify(data)
    //     })
  }

  if (urlParams.get('t') == '1' && p0) {
    apkUrl = buildURL(p1, p2, p3, p4, p5, p6, clid, pixel_id, modified_label, tracker, aj_link);

    iosUrl = buildURL(p1, p2, p3, p4, p5, p6, clid, pixel_id, modified_label, tracker, ios_link);

    // setTimeout(() => {
    //   goDownload(isAndroid, isIOS, apkUrl, iosUrl);
    // }, 1000);
  }

  $('.downloadButton').onclick = $('.page-bottom').onclick = (e) => {
    goDownload(isAndroid, isIOS, apkUrl, iosUrl, p0);
  };
})(document);

// function getAuthToken(label) {
//   const data = {
//     channelCode: label,
//   };
//   fetch('https://game99.feiwindevelopment.com/game99-platform-app/s2s/tiktok', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       sessionStorage.setItem('access_token', data?.data?.authToken);
//     });
// }

function getCookie(name) {
  let cookie = {};
  document.cookie.split(';').forEach(function (el) {
    let [k, v] = el.split('=');
    cookie[k.trim()] = v;
  });
  return cookie[name];
}

function buildURL(p1, p2, p3, p4, p5, p6, clid, pixel_id, label, tracker, redirect) {
  const p_campaign = urlParams.get('campaign');
  const p_adgroup = urlParams.get('adgroup');
  const p_creative = urlParams.get('creative');
  //for google
  const lpurl = urlParams.get('lpurl');
  const gclid = urlParams.get('gclid');
  const gbraid = urlParams.get('gbraid');
  //for kwai
  const CampaignID = urlParams.get('CampaignID');
  const adSETID = urlParams.get('adSETID');
  const CreativeID = urlParams.get('CreativeID');

  if (p_campaign) {
    campaign = p_campaign;
  } else if (p1 || p2) {
    campaign = p1 + '(' + p2 + ')';
  } else {
    campaign = '';
  }
  if (p_adgroup) {
    adgroup = p_adgroup;
  } else if (p3 || p4) {
    adgroup = p3 + '(' + p4 + ')';
  } else {
    adgroup = '';
  }
  if (p_creative) {
    creative = p_creative;
  } else if (p5 || p6) {
    creative = p5 + '(' + p6 + ')';
  } else {
    creative = '';
  }
  // build a tracker URL
  let params = {
    campaign,
    adgroup,
    creative,
    redirect,
    label,
  };

  if (fb_pixel_id) {
    params.fb_pixel_id = fb_pixel_id;
    params.fb_access_token = fb_access_token;
    params.fbclid = clid;
  }

  if (origin === 'kwai') {
    params.pixel_id = pixel_id;
    params.click_id = clid;
    params.CampaignID = CampaignID;
    params.adSETID = adSETID;
    params.CreativeID = CreativeID;
    kwaiq.instance(pixel_id).track('download');
  }

  if (tiktok_pixel_id) {
    params.ttclid = clid;
  }

  if (gclid) {
    params.gclid = clid;
  }
  if (lpurl) {
    params.lpurl = lpurl;
  }
  if (gbraid) {
    params.gbraid = gbraid;
  }

  let newURL =
    'https://app.adjust.com/' +
    tracker +
    '?' +
    Object.keys(params)
      .map(
        (key) =>
          key + '=' + encodeURIComponent(params[key]).replace('(', '%28').replace(')', '%29'),
      )
      .join('&');
  return newURL;
}

function getFbPid() {
  let fbPid = document.cookie.match(/(^|;) ?_fbp=([^;]*)(;|$)/);
  if (fbPid) {
    return fbPid[2];
  } else {
    return null;
  }
}

function gtag_report_conversion(url) {
  var callback = function () {
    //   if (typeof url != "undefined") {
    //     window.location.href = url;
    //   }
  };
  gtag('event', 'conversion', {
    send_to: gtagParam + '/' + geventParam,
    event_callback: callback,
  });
  return false;
}

var qrcode = new QRCode("qrcode", {
  text: window.location.href,
  width: 220,
  height: 220,
  colorDark: "#000000",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H,
});

const QRContainer = document.querySelector("#qr-container");

async function goDownload(isAndroid, isIOS, apkUrl, iosUrl, p0) {
  console.log("apkUrl:" + apkUrl);
  console.log("iosUrl:" + iosUrl);

  const isPC =
    window?.navigator.platform?.includes("Win32") &&
    !window?.navigator.platform?.includes("Mac");
  if (isPC) {
    QRContainer.style.display = "flex";
    return;
  }
  const links = isIOS ? iosUrl : apkUrl;
  window.location.href = links;

  const gclid = urlParams.get("gclid");
  if (gclid) {
    gtag_report_conversion(window.location.origin);
  }
}

function closeQR() {
  QRContainer.style.display = "none";
}