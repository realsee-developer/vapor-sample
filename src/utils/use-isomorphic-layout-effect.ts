// SPDX-License-Identifier: PolyForm-Noncommercial-1.0.0
import { useEffect, useLayoutEffect } from 'react';
import { IS_SERVER } from './is-server';

const useIsomorphicLayoutEffect = IS_SERVER ? useEffect : useLayoutEffect;

export { useIsomorphicLayoutEffect };