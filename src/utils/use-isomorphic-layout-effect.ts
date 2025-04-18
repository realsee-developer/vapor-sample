import { useEffect, useLayoutEffect } from 'react';
import { IS_SERVER } from './is-server';

const useIsomorphicLayoutEffect = IS_SERVER ? useEffect : useLayoutEffect;

export { useIsomorphicLayoutEffect };