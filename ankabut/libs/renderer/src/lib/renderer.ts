import { run } from '@ankabut/runner';

export async function renderSourceInto(source: string, element: HTMLElement) {
  const result = await run(source, (funName, params) => {
    switch (funName) {
      case 'Mahfaze':
        const div = document.createElement('div')!;
        params.forEach(param => {
          if (typeof param === 'string') div.style.cssText = param;
          div.appendChild(div);
        });
        return div;
      case 'Neveshte':
        const p = document.createElement('p')!;
        p.innerText = params[0];
        if (params[1]) {
          p.style.cssText = params[1];
        }
        return p;
      case 'Tasvir':
        const img = document.createElement('img')!;
        img.src = params[0];
        if (params[1]) {
          p.style.cssText = params[1];
        }
        return img;
    }
  });

  element.appendChild(result);
}
