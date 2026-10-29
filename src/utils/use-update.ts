// SPDX-License-Identifier: PolyForm-Noncommercial-1.0.0
import { useState, useCallback } from 'react';

const createUpdateId = (): Record<string, never> => ({});
function useUpdate(): () => void {
  const [, setValue] = useState<Record<string, never>>(createUpdateId);
  return useCallback(() => setValue(createUpdateId()), []);
}

export { useUpdate };