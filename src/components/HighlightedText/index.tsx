function replaceAll(input, searchValue, replaceValue) {
  return input.replace(new RegExp(searchValue, 'g'), replaceValue);
}

export const HighlightedText = ({ text = '', keyword }) => {
  const _text = text.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  let start = 0;
  let endIndex = 0;
  let matching = false;
  while (start < text.length) {
    let j = start;
    for (let i = 0; i < keyword.length; i++) {
      const item = keyword[i];
      const encodeItem = escape(item).toLowerCase();
      if (i === 0) {
        if (encodeItem === text.slice(j, j + encodeItem.length)) {
          matching = true;
          j += encodeItem.length;
        } else if (item === text[j]) {
          matching = true;
          j++;
        }
      } else if (matching) {
        if (encodeItem === text.slice(j, j + encodeItem.length)) {
          j += encodeItem.length;
        } else if (item === text[j]) {
          j++;
        } else {
          matching = false;
        }
        if (i === keyword.length - 1 && matching) {
          endIndex = j;
        }
      }
    }
    if (endIndex && matching) {
      break;
    }
    start++;
  }
  let highlightedText = _text;
  if (endIndex) {
    const _keyword = _text.slice(start, endIndex);
    // highlightedText = _text.replaceAll(_keyword, `<span style="color: red;">${_keyword}</span>`);
    highlightedText = replaceAll(_text, _keyword, `<span style="color: red;">${_keyword}</span>`);
  }
  return <div dangerouslySetInnerHTML={{ __html: highlightedText }} />;
};
