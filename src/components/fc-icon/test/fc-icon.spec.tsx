import { newSpecPage } from '@stencil/core/testing';
import { FcIcon } from '../fc-icon';

describe('fc-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FcIcon],
      html: `<fc-icon></fc-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <fc-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </fc-icon>
    `);
  });
});
