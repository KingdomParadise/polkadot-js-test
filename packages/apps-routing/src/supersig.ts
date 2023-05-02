// Copyright 2017-2023 @polkadot/apps-routing authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { TFunction } from 'i18next';
// import type { ApiPromise } from '@polkadot/api';
import type { Route } from './types';

import Component, { useCounter } from '@polkadot/app-supersig';

// Add functions for supersig apps-routing here.
// ...
// ...
// ...
// ...

// function needsApiCheck (api: ApiPromise): boolean {
//   try {
//     // we need to be able to create a supersig
//     // api.tx.supersig.createSupersig('5GYdCV9F3gg9gnmWU8nrt8tXCxMXDbcGpsdX1gJStCx9yZKK',);
//     // (1, { Standard: { balance: 1, vote: { aye: true, conviction: 1 } } });
//    const call = api.query.supersig.nonceCall();
//     console.log(call)
//     return true;
//   } catch (error) {
//     console.warn('Unable to query a supersig, disabling supersig route');

//     return false;
//   }
// }

export default function create (t: TFunction): Route {
  return {
    Component,
    display: {
      needsApi: [
        'query.supersig.nonceCall'
      ]
      // 'tx.democracy.notePreimage'
      // ]
      // needsApiCheck

    },
    group: 'network',
    icon: 'people-line',
    name: 'organisations',
    text: t('nav.supersig', 'Organisations', { ns: 'apps-routing' }),
    useCounter
  };
}
