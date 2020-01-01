import { run } from './runner';

it('sould return 10', async () => {
  let result = await run(
    `
        bebin azinja() {
            
            bede 1 + 9;
        }
    `
  );
  expect(result).toBe(10);
});
