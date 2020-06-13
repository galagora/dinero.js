import { USD } from '@dinero.js/currencies';
import { Dinero, lessThanOrEqual } from '../../../..';

describe('lessThanOrEqual', () => {
  it('returns true when the first amount is less than the other', () => {
    const d1 = Dinero({ amount: 500, currency: USD });
    const d2 = Dinero({ amount: 800, currency: USD });

    expect(lessThanOrEqual(d1, d2)).toBe(true);
  });
  it('returns true when amounts are equal', () => {
    const d1 = Dinero({ amount: 500, currency: USD });
    const d2 = Dinero({ amount: 500, currency: USD });

    expect(lessThanOrEqual(d1, d2)).toBe(true);
  });
  it('returns false when the first amount is greater than the other', () => {
    const d1 = Dinero({ amount: 800, currency: USD });
    const d2 = Dinero({ amount: 500, currency: USD });

    expect(lessThanOrEqual(d1, d2)).toBe(false);
  });
});
