import BigNumber from 'bignumber.js/bignumber.js';

export const convertEsdtToWei = (v, decimals = 18) => {
    const factor = Math.pow(10, decimals);
    return (new BigNumber(v)).multipliedBy(factor);
};