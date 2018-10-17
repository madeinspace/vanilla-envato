// template.js
import { tag } from './utils.js';

const Item = data => {
  const { id, url, rating, thumbnail, item } = data;
  return tag`
    <li id="${id}" class="item">
      <a href="${url}" target="_blank"><img src="${thumbnail}" /></a>
      <a href="${url}" target="_blank">${item}</a>
      <p>Rating: ${rating}
      <button data-id="${id}" class="remove">remove</button>
    </li>`;
};

const Page = data =>
  tag`<ul class="page">${data.map(item => Item(item))}</ul>`;

export { Item, Page };
