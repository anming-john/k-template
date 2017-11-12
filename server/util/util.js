const fs = require('fs');

const addQuery = (query, obj) => {
  let str = '';
  if (query.lastIndexOf('?') !== -1) {
    for (let key in obj) {
      str += `&${key}=${obj[key]}`;
    }
    return [query, str].join('');
  }
  else {
    let i = 0;
    for (let key in obj) {
      if (i === 0) {
        str += `?${key}=${obj[key]}`;
      }
      else {
        str += `&${key}=${obj[key]}`;
      }
      i += 1;
    }
    return [query, str].join('');
  }
};

module.exports = {
	replace: (html, obj, $ = '@') => {
		for (let key in obj) {
			html = html.replace(new RegExp(`${$}${key}${$}`, 'g'), obj[key]);
		}

		return html;
	},
  fileContentReplace: (filePath, keys) => {
	  let html = '';
    for (let key in keys) {
      html = fs.readFileSync(filePath).toString().replace(new RegExp(key), keys[key]);
    }
    fs.writeFileSync(filePath, html);

    return html;
  },
  appendCss: (html, css) => {
	  let arr = [];
    for (let item of css) {
      arr.push(`    <link rel="stylesheet" href="${addQuery(item, {dateTime: '@dateTime@'})}">`);
    }

	  return html.replace(/<head>([\s\S]*)<\/head>/, ['<head>$1', arr.join('\n'), '</head>'].join('\n'));
  },
  appendJs: (html, js) => {
	  let arr = [];
	  for (let item of js) {
	    if (typeof item === 'string') {
	      arr.push(`    <script src="${addQuery(item, {dateTime: '@dateTime@'})}"></script>`);
      }
      else {
	      arr.push(`    <script>;(${item}());</script>`);
      }
    }

    return html.replace(/<body>([\s\S]*)<\/body>/, ['<body>$1', arr.join('\n'), '</body>'].join('\n'));
  }
};