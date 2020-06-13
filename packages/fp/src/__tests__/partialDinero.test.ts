import { USD } from '@dinero.js/currencies';
import { toSnapshot } from '..';
import partialDinero from '../partialDinero';

describe('partialDinero', () => {
  it('partially applies a functional Dinero object with a currency', () => {
    const DineroUSD = partialDinero({ currency: USD });
    const d = DineroUSD(500);

    const snapshot = toSnapshot(d);

    expect(snapshot).toMatchObject({
      amount: 500,
      currency: USD,
      scale: 2,
    });
  });
  it('partially applies a functional Dinero object with a currency and scale', () => {
    const DineroUSD = partialDinero({ currency: USD, scale: 4 });
    const d = DineroUSD(50000);

    const snapshot = toSnapshot(d);

    expect(snapshot).toMatchObject({
      amount: 50000,
      currency: USD,
      scale: 4,
    });
  });
});