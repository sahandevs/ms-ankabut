import { run } from './runner';

it('sould return 11', async () => {
  let result = await run(
    `
        bebin azinja() {
            
            bede 1 + 9 + 1;
        }
    `
  );
  expect(result).toBe(10);
});
