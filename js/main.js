import { projects } from './projects.js';

const grid = document.getElementById('projects');

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function hostOf(url) {
  return new URL(url).host;
}

function buildPreview({ url, art }) {
  const preview = element('div', 'card__window');
  const chrome = element('div', 'card__chrome');
  chrome.append(element('span', 'card__dots'), element('span', 'card__host', hostOf(url)));
  const canvas = element('div', 'card__art');
  canvas.style.setProperty('--art-base', art.base);
  canvas.style.setProperty('--art-glow-a', art.glowA);
  canvas.style.setProperty('--art-glow-b', art.glowB);
  preview.append(chrome, canvas);
  return preview;
}

function buildCard(project, index) {
  const item = element('li', 'grid__item');
  item.style.setProperty('--order', index);

  const link = element('a', 'card');
  link.href = project.url;
  link.setAttribute('aria-label', `${project.name}, opens ${hostOf(project.url)}`);

  const body = element('div', 'card__body');
  const open = element('span', 'card__open', 'Open');
  open.append(element('span', 'card__arrow', '→'));
  body.append(
    element('span', 'card__kind', project.kind),
    element('h2', 'card__name', project.name),
    element('p', 'card__description', project.description),
    open,
  );

  link.append(buildPreview(project), body);
  item.append(link);
  return item;
}

function buildNextSlot(index) {
  const item = element('li', 'grid__item');
  item.style.setProperty('--order', index);
  const slot = element('div', 'slot');
  slot.append(element('span', 'slot__label', 'Next project'), element('span', 'slot__hint', 'Coming to its own subdomain'));
  item.append(slot);
  return item;
}

grid.replaceChildren(...projects.map(buildCard), buildNextSlot(projects.length));
