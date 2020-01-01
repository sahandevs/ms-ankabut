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


it('sould return 5', async () => {
    let result = await run(
      `
          bebin azinja() {
              
              bede fun(1, 2, 3) + 3;
          }

          bebin fun() {
              bede 2;
          }
      `
    );
    expect(result).toBe(5);
  });

  it('sould detect builtin functions', async () => {
    let result = await run(
      `
          bebin azinja() {
              
              bede sum(1, 2, 3) + 3;
          }
      `,
      (funName, params) => {
          if (funName === 'sum') {
              return params.reduce((a, b) => a + b, 0);
          }
      }
    );
    expect(result).toBe(9);
  });