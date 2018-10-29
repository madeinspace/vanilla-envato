// template.js
import { tag } from './utils.js';

const Page = data => tag`
<div class="wrapper">
  ${Nav()}
  ${Heading()}
  <div class="page__popular-items">
    ${ItemList(data)}
  </div>
</div>`;

const Nav = data => tag`
<div class="nav">
  <div class="container clearfix">
    <span class="logo"><img src="../../_assets/logo.svg" /></span>
    <span class="user">Welcome back Fabrice!</span> 
  </div>
</div>`;

const Heading = () => tag`
<div class="main-header">
  <div class="container">
    <h1>Polpular Items</h1>
  </div>
</div>`;

const ItemList = data => tag`
<ul class="popular-items">
  ${data.map(item => Item(item))}
</ul>`;

const Item = data => {
  const { id, url, rating, thumbnail, item } = data;
  const rateStyle = rating >= 5 ? 'rate-hight' : '';
  return tag`
    <li id="${id}" class="item ${rateStyle}">
      <a class="thumbnail" href="${url}" target="_blank"><img src="${thumbnail}" /></a>
      <a class="title" href="${url}" target="_blank">${item}</a>
      <p class="rating">Rating: ${rating}</p>
      <p class="remove" data-id="${id}">remove</p>
    </li>`;
};

export { Page };
